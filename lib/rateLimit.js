/**
 * Minimal in-memory rate limiter.
 *
 * IMPORTANT: Vercel serverless functions are stateless and can run as many
 * concurrent, geographically distributed instances — this in-memory Map is
 * only shared within a single warm instance, so it is a soft speed bump in
 * production, not a real guarantee. Before launch, swap this for a shared
 * store such as Upstash Redis (@upstash/ratelimit) or Vercel KV so limits
 * are enforced consistently across every instance. The function signatures
 * below are written so that swap only touches this file.
 */
const hits = new Map();

export function checkRateLimit(key, { windowMs = 60_000, max = 5 } = {}) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.start > windowMs) {
    hits.set(key, { start: now, count: 1 });
    return { allowed: true, remaining: max - 1 };
  }

  if (entry.count >= max) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: max - entry.count };
}

export function clientKeyFromRequest(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0];
  return ip?.trim() || "unknown";
}
