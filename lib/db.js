import { PrismaClient } from "@prisma/client";

// Vercel serverless functions can spin up many concurrent instances.
// Reusing a single PrismaClient per warm instance (and across dev hot
// reloads) prevents each invocation from opening a fresh Postgres
// connection. DATABASE_URL should point at Neon's *pooled* (PgBouncer)
// connection string in every environment — see .env.example.
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.__ossPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__ossPrisma__ = prisma;
}
