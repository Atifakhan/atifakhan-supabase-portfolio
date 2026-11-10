-- Publish a sourced Peshawar community spotlight with its event poster.
insert into public.portfolio_events
  (title, venue, event_date, summary, role, source_url, image_url, is_published, sort_order)
select
  'Clerk Meetup Peshawar — Build Fast with Modern Tools',
  'Golden Gate Steak House, University Town, Peshawar',
  null,
  'A Peshawar builder meetup hosted by Saqib Ullah, Clerk, and Hamza Khan. The public listing describes hands-on building with Vercel v0, Clerk, Supabase, and other tools.',
  'Community spotlight',
  'https://luma.com/6fx4d1g4',
  'https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D75%2Cwidth%3D400%2Cheight%3D400/uploads/hv/0f13fda6-b391-4373-97ee-fff4b6378c49.png',
  true,
  20
where not exists (
  select 1 from public.portfolio_events where source_url = 'https://luma.com/6fx4d1g4'
);
