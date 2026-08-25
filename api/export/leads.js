import { prisma } from "../../lib/db.js";
import { isAuthorizedAdmin } from "../../lib/adminAuth.js";
import { buildExportEnvelope } from "../../lib/jsonExport.js";

// Read-only by construction: every branch below is a Prisma `findMany`
// (SELECT). Nothing here writes, migrates, or touches any session/auth
// state — there is no auth table in this schema to begin with (see
// prisma/schema.prisma). Restricted to callers with a valid ADMIN_API_KEY.
const ENTITY_LOADERS = {
  demoRequests: () => prisma.demoRequest.findMany({ orderBy: { createdAt: "asc" } }),
  contactMessages: () => prisma.contactMessage.findMany({ orderBy: { createdAt: "asc" } }),
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAuthorizedAdmin(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const entity = (req.query.entity || "all").toString();

  try {
    if (entity === "all") {
      const [demoRequests, contactMessages] = await Promise.all([
        ENTITY_LOADERS.demoRequests(),
        ENTITY_LOADERS.contactMessages(),
      ]);

      return res.status(200).json({
        schemaVersion: "1.0",
        exportedAt: new Date().toISOString(),
        entities: {
          demoRequests: buildExportEnvelope("demoRequests", demoRequests),
          contactMessages: buildExportEnvelope("contactMessages", contactMessages),
        },
      });
    }

    const loader = ENTITY_LOADERS[entity];
    if (!loader) {
      return res.status(400).json({ error: `Unknown entity "${entity}"` });
    }

    const records = await loader();
    return res.status(200).json(buildExportEnvelope(entity, records));
  } catch (error) {
    console.error("[export/leads] Failed to export data:", error);
    return res.status(500).json({ error: "Export failed" });
  }
}
