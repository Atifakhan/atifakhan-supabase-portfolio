const fallbackEvents = [{
  title: "Supabase Meetup — Peshawar",
  venue: "Department of Computer Science, University of Peshawar",
  event_date: "2025-11-13",
  summary: "A campus gathering for panel talks, practical technical sessions, live demos, and community networking. The public event listing names Supabase Peshawar, TechKhwa, and the Computing Students Society as collaborators.",
  role: "Organizing team",
  source_url: "https://luma.com/05jqtxqm",
  image_url: "https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D75%2Cwidth%3D400%2Cheight%3D400/calendar-cover-images/38/e09731b6-f75b-4e0d-b38e-81e0f7e764b2.jpg"
}];

const eventList = document.querySelector("#event-list");
const eventStatus = document.querySelector("#event-status");

function formatDate(value) {
  if (!value) return "COMMUNITY EVENT";
  return new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${value}T00:00:00Z`)).toUpperCase();
}

function textElement(tagName, className, value) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = value ?? "";
  return element;
}

function safeHttpsUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" ? parsed.href : "#";
  } catch {
    return "#";
  }
}

function renderEvents(events) {
  if (!eventList || !events.length) return;
  const fragment = document.createDocumentFragment();
  events.forEach(event => {
    const sourceUrl = safeHttpsUrl(event.source_url);
    const card = document.createElement("article");
    card.className = "event-card";
    const imageLink = document.createElement("a");
    imageLink.className = "event-image";
    imageLink.href = sourceUrl;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";
    imageLink.setAttribute("aria-label", `Open the source for ${event.title ?? "this event"}`);
    const image = document.createElement("img");
    image.src = safeHttpsUrl(event.image_url);
    image.alt = `Event image for ${event.title ?? "community event"}`;
    image.loading = "lazy";
    imageLink.append(image, textElement("span", "badge", "COMMUNITY SPOTLIGHT"), textElement("b", "arrow", "↗"));
    const info = textElement("div", "event-info", "");
    const meta = textElement("div", "event-meta", "");
    meta.append(textElement("span", "", formatDate(event.event_date)), textElement("i", "", ""), textElement("span", "", event.venue || "PESHAWAR, PAKISTAN"));
    info.append(meta, textElement("h3", "", event.title), textElement("p", "", event.summary || "A community gathering for local builders and learners."));
    const bottom = textElement("div", "event-bottom", "");
    const pill = textElement("span", "pill", "");
    pill.append(textElement("b", "", ""), document.createTextNode(` ${event.role || "Community organizer"}`));
    const details = textElement("a", "", "");
    details.href = sourceUrl;
    details.target = "_blank";
    details.rel = "noopener noreferrer";
    details.append(document.createTextNode("Event details "), textElement("b", "", "↗"));
    bottom.append(pill, details);
    info.append(bottom);
    card.append(imageLink, info);
    fragment.append(card);
  });
  const note = document.createElement("article");
  note.className = "event-note";
  note.append(textElement("small", "", "WHAT I BRING"), textElement("b", "stamp", "✳"), textElement("h3", "", "From the first hello to the final photo."), textElement("p", "", "Guest experience, campus coordination, volunteer support, event flow, and the details that help a community gathering feel effortless."));
  const contact = textElement("a", "text-link", "");
  contact.href = "#contact";
  contact.append(document.createTextNode("Plan something together "), textElement("b", "", "↗"));
  note.append(contact);
  fragment.append(note);
  eventList.replaceChildren(fragment);
}

async function loadEvents() {
  const config = window.SUPABASE_CONFIG;
  if (!config?.url || !config?.publishableKey) return;
  try {
    const endpoint = new URL(`${config.url}/rest/v1/portfolio_events`);
    endpoint.searchParams.set("select", "title,venue,event_date,summary,role,source_url,image_url,sort_order");
    endpoint.searchParams.set("is_published", "eq.true");
    endpoint.searchParams.set("order", "sort_order.asc,event_date.desc");
    const response = await fetch(endpoint, { headers: { apikey: config.publishableKey, Authorization: `Bearer ${config.publishableKey}` } });
    if (!response.ok) throw new Error("Event API request failed");
    const events = await response.json();
    renderEvents(events.length ? events : fallbackEvents);
  } catch {
    if (eventStatus) eventStatus.textContent = "Showing the local event preview while the community database is unavailable.";
  }
}

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const isOpen = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!isOpen));
  menu.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("open", !isOpen);
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
}));
loadEvents();

