# For frontend maintainers

Use a supported Supabase client library in the frontend and provide only:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY` (or the legacy anon key, if that is what the project uses)

Copy `.env.example` to your local environment file and supply values locally. Do not commit the populated file. Never expose a service-role or secret key to the browser. Client configuration alone does not secure data; enforce access in PostgreSQL with RLS and grants.

Framework-specific setup, rendering strategy, and deployment instructions should be documented here once selected.

