/**
 * Lightweight shared-secret guard for administrative endpoints.
 *
 * This corporate site has no end-user login system, so a single rotating
 * admin key — stored only as a Vercel environment variable and never
 * bundled into the frontend — is sufficient to gate export/reporting
 * endpoints. Rotate ADMIN_API_KEY periodically and treat it like any other
 * production secret.
 */
export function isAuthorizedAdmin(req) {
  const provided = req.headers["x-admin-key"];
  const expected = process.env.ADMIN_API_KEY;

  if (!expected) {
    console.error("[adminAuth] ADMIN_API_KEY is not configured.");
    return false;
  }

  return typeof provided === "string" && provided.length > 0 && provided === expected;
}
