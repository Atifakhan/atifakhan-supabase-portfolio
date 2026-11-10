# Local development (starter)

## Requirements

- Supabase CLI
- Docker Desktop or another supported Docker runtime

## Workflow

1. Start local services with `supabase start`.
2. Create a migration with `supabase migration new <description>`.
3. Edit the generated SQL file under `supabase/migrations/`.
4. Apply and inspect locally with `supabase migration up` and `supabase db diff` as appropriate.
5. Reset disposable local data with `supabase db reset` when you need a clean migration replay.

Review the CLI output and current Supabase documentation before applying changes to a hosted project. Do not use destructive commands against production.

