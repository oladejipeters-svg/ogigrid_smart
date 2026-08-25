import { prisma } from "../lib/db.js";
import { demoRequestSchema, isHoneypotTripped } from "../lib/validate.js";
import { checkRateLimit, clientKeyFromRequest } from "../lib/rateLimit.js";
import { notifySalesTeam, escapeHtml } from "../lib/email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientKey = clientKeyFromRequest(req);
  const { allowed } = checkRateLimit(`demo-request:${clientKey}`, {
    windowMs: 60_000,
    max: 5,
  });
  if (!allowed) {
    return res.status(429).json({ error: "Too many requests. Please try again shortly." });
  }

  // Check the honeypot BEFORE schema validation. If it's tripped, respond
  // with a fake success and stop — never reveal validation feedback to a bot.
  if (isHoneypotTripped(req.body)) {
    return res.status(200).json({ success: true });
  }

  const parsed = demoRequestSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid submission",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;

  try {
    const record = await prisma.demoRequest.create({ data });

    await notifySalesTeam({
      subject: `New demo request — ${record.institutionName}`,
      html: `
        <p><strong>Institution:</strong> ${escapeHtml(record.institutionName)}</p>
        <p><strong>Institution size:</strong> ${escapeHtml(record.institutionSize ?? "—")}</p>
        <p><strong>Contact:</strong> ${escapeHtml(record.contactName)} (${escapeHtml(record.email)})</p>
        <p><strong>Role:</strong> ${escapeHtml(record.role ?? "—")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(record.message ?? "—")}</p>
      `,
    });

    return res.status(201).json({ success: true, id: record.id });
  } catch (error) {
    console.error("[demo-request] Failed to process submission:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
