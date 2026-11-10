# Security checklist (starter)

- [ ] Enable RLS on every table exposed to browser/API access.
- [ ] Add explicit least-privilege grants and policies; test both allowed and denied cases.
- [ ] Keep service-role/secret keys on trusted servers only.
- [ ] Keep `.env.local` and other real environment files out of version control.
- [ ] Review SQL migrations for destructive changes, data exposure, and privilege changes.
- [ ] Use TLS and platform-managed secrets for deployed services.
- [ ] Avoid storing personal or confidential records unless there is a clear need and retention plan.

This checklist is a starting point, not a completed security review. Record the tests and evidence for each production control.

