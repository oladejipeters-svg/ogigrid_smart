# Ogigrid Smart Solutions — Website Backend

Backend-first scaffold for the OSS customer-facing website, per
`OSS_Website_Design_and_Technical_Documentation_v2.pdf`. This phase covers
the Vercel serverless API and the Neon/Prisma data layer. The React/Vite
frontend is the next phase and will live alongside this in `src/`.

## Stack

- **Runtime:** Vercel Serverless Functions (Node.js, `/api` routes)
- **Database:** PostgreSQL on Neon, via Prisma ORM (pooled connection for
  runtime, direct connection for migrations)
- **Validation:** Zod, server-side only
- **Email:** Resend (fail-soft — a failed email never blocks saving a lead)

## Setup

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL, DIRECT_URL, ADMIN_API_KEY, Resend keys
npx prisma migrate dev --name init
npx prisma generate
```

To run the API locally with the Vercel runtime:

```bash
npm i -g vercel   # if not already installed
vercel dev
```

## Endpoints

| Endpoint              | Method | Purpose                                             | Auth               |
|------------------------|--------|------------------------------------------------------|--------------------|
| `/api/health`           | GET    | Basic health check                                   | None               |
| `/api/demo-request`     | POST   | Validate + persist a demo request, notify sales      | None (rate-limited)|
| `/api/contact`          | POST   | Validate + persist a contact message, notify sales   | None (rate-limited)|
| `/api/export/leads`     | GET    | Read-only JSON export of leads (`?entity=demoRequests\|contactMessages\|all`) | `x-admin-key` header |

Example export call:

```bash
curl -H "x-admin-key: $ADMIN_API_KEY" \
  "https://<your-deployment>.vercel.app/api/export/leads?entity=demoRequests"
```

## Data safety notes

- This schema has **no authentication tables at all** — the site has no
  end-user login, only an admin-key-gated export endpoint. There is nothing
  auth-related for the export to accidentally expose.
- `/api/export/leads` only ever runs `findMany` (`SELECT`) queries. It never
  writes, migrates, or seeds anything, so running an export cannot corrupt
  or reset data.
- Every export follows the JSON envelope in
  `docs/data-contracts/` (`schemaVersion`, `exportedAt`, stable UUIDs, ISO
  timestamps) so it can be safely re-imported or migrated into Supabase/
  Postgres later without losing meaning.

## Before production

- [ ] Replace the in-memory rate limiter (`lib/rateLimit.js`) with a shared
      store (Upstash Redis or Vercel KV) — see the warning comment in that
      file.
- [ ] Set `DATABASE_URL` to Neon's **pooled** connection string; set
      `DIRECT_URL` to the direct connection for migrations only.
- [ ] Generate a strong `ADMIN_API_KEY` (`openssl rand -hex 32`) and store it
      only as a Vercel environment variable.
- [ ] Configure Resend sender domain (DKIM/SPF) before relying on email
      notifications in production.
- [ ] Add the `src/` React/Vite frontend and confirm `vercel.json` build
      settings once it exists.

## Project structure (current)

```
oss-website/
├── api/
│   ├── health.js
│   ├── demo-request.js
│   ├── contact.js
│   └── export/
│       └── leads.js
├── lib/
│   ├── db.js
│   ├── validate.js
│   ├── rateLimit.js
│   ├── email.js
│   ├── adminAuth.js
│   └── jsonExport.js
├── prisma/
│   └── schema.prisma
├── docs/data-contracts/
│   ├── demoRequest.schema.json
│   └── contactMessage.schema.json
├── .env.example
├── vercel.json
└── package.json
```



