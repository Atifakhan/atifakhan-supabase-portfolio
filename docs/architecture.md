# Architecture (starter)

## Components

- **Frontend:** portfolio experience and browser-side Supabase client.
- **Supabase:** PostgreSQL database, authentication only if the product later needs it, and narrowly scoped Data API access.
- **Migrations:** reviewed SQL changes tracked in `supabase/migrations/`.

## Trust boundaries

The frontend is public and must be treated as untrusted. A publishable/anon key is not an authorization mechanism; RLS policies and database grants enforce access. Secret and service-role keys stay in trusted server-side environments and are never bundled into the frontend.

## Decisions to record

- [ ] Frontend framework and deployment target.
- [ ] Public portfolio data model and read access policy.
- [ ] Whether authentication is needed (prefer none for a read-only portfolio).
- [ ] Backup, monitoring, and migration deployment process.

