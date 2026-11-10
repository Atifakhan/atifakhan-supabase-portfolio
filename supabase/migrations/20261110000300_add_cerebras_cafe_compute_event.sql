-- Add the official Cerebras Cafe Compute community listing and cover poster.
insert into public.portfolio_events
  (title, venue, event_date, summary, role, source_url, image_url, is_published, sort_order)
select
  'Cafe Compute Meetup — Peshawar',
  'The Nook Cafe, Peshawar',
  '2026-11-08',
  'A Cerebras-presented community build meetup hosted by Saqib Ullah, with hands-on experimentation using Cerebras APIs and OpenAI Codex. Official event poster from the Luma listing.',
  'Community spotlight',
  'https://luma.com/b7neseu3',
  'https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D75%2Cwidth%3D400%2Cheight%3D400/uploads/z3/3a7c2380-264a-43c1-8941-3329cab0a5ba.png',
  true,
  30
where not exists (
  select 1 from public.portfolio_events where source_url = 'https://luma.com/b7neseu3'
);
