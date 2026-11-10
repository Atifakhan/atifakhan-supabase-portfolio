# Atifakhan Supabase portfolio

A responsive portfolio for **Atif (Muhammad Atif)** connecting Peshawar community event organizing with a professional background in network infrastructure, cybersecurity, and engineering.

## Stack

- Static HTML, CSS, and JavaScript frontend.
- Supabase Postgres REST API for published event cards.
- Supabase migration with RLS enabled and public read-only access to published event rows.
- GitHub Pages workflow for frontend deployment.

## Local preview

Open `index.html` in a browser. The page includes a local event preview and loads published records from Supabase when the project URL and publishable key in `assets/js/supabase-config.js` are configured.

The key in that file is a Supabase publishable key designed for frontend use, not a secret. Never place a service-role or secret key in a browser bundle. Public database access is constrained by grants and Row Level Security: visitors can only select rows marked `is_published = true`.

## Supabase setup

The migrations create the public portfolio-events table and add the sourced University of Peshawar Supabase Meetup, Clerk Meetup Peshawar, and Cerebras Cafe Compute Peshawar community spotlights. RLS grants visitors read access to published rows only; there is no anonymous insert, update, or delete access.

The connected project already has this migration applied. For future changes, connect the repository using Supabase's GitHub integration so reviewed migrations can be deployed from the selected branch.

## Public source and photo credits

- Profile portrait: supplied by the portfolio owner and stored at `assets/atif.jpg`.
- Professional experience, education, and profile links: [owner's technical portfolio](https://atifakhan.github.io/portfolio/).
- Event listing and poster: [Supabase Meetup — Peshawar on Luma](https://luma.com/05jqtxqm).
- Community link: [Supabase Peshawar on LinkedIn](https://www.linkedin.com/company/supabase-peshawar/).
- Clerk community spotlight and poster: [Clerk Meetup Peshawar on Luma](https://luma.com/6fx4d1g4). The card reports the event listing and does not claim Atif hosted it.
- Cerebras community spotlight and poster: [Cafe Compute Meetup — Peshawar on Luma](https://luma.com/b7neseu3). The card reports the public listing and does not claim Atif hosted it.
- Other campus names and the broader organizer role came from the portfolio owner's description. Add event-specific dates, photos, and source links as they are confirmed.

## Publish the frontend

1. Push the repository to GitHub.
2. Enable GitHub Pages with **GitHub Actions** as the source.
3. The workflow at `.github/workflows/pages.yml` deploys this static site on pushes to `main`.
4. A public Pages site requires repository visibility and an account plan that support Pages. This repository is public by your choice; keep future commits free of secrets and private event materials.

The portfolio frontend is hosted separately from Supabase; Supabase provides the database and API. Supabase's GitHub integration can deploy database migrations and other Supabase resources from the repository.
