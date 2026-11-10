(function () {
  "use strict";

  const ROUTES = window.ROUTES || [];
  const app = document.getElementById("app");
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Map projection (matches js/portugal-shape.js) ---------- */
  const C = Math.cos((39.5 * Math.PI) / 180);
  const project = (lat, lng) => [(lng + 9.6) * C * 100 + 10, (42.2 - lat) * 100 + 10];
  const totalKm = (r) => r.stops.reduce((s, x) => s + (x.km || 0), 0);
  const days = (r) => Math.max(...r.stops.map((s) => s.day));

  // Smooth path through points (Catmull-Rom -> cubic Bézier)
  function smoothPath(pts) {
    if (pts.length < 2) return "";
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const t = 0.18;
      const c1 = [p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t];
      const c2 = [p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t];
      d += `C${c1.map((v) => v.toFixed(1)).join(" ")} ${c2.map((v) => v.toFixed(1)).join(" ")} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  }

  const NS = "http://www.w3.org/2000/svg";
  const TILE_PATTERN = `
    <pattern id="sea-tiles" width="40" height="40" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#1b4a9c" stroke-width="1" opacity=".16">
        <path d="M0 12A12 12 0 0 0 12 0M28 0A12 12 0 0 0 40 12M40 28A12 12 0 0 0 28 40M12 40A12 12 0 0 0 0 28"/>
        <path d="M20 6L34 20L20 34L6 20Z"/><circle cx="20" cy="20" r="3"/>
      </g>
    </pattern>`;

  /* Build a map SVG for a route.
     opts.mode: "full" (big, labelled, animated) | "thumb" (card, cropped) */
  function routeMap(route, opts = {}) {
    const full = opts.mode === "full" || opts.mode === "hero";
    const live = opts.mode === "full";
    const pts = route.stops.map((s) => project(s.lat, s.lng));
    let vb = "-70 -10 370 570";
    if (!full) {
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      let x0 = Math.min(...xs) - 40, x1 = Math.max(...xs) + 40, y0 = Math.min(...ys) - 30, y1 = Math.max(...ys) + 30;
      const w = x1 - x0, h = y1 - y0, ratio = 4 / 3;
      if (w / h < ratio) { const nw = h * ratio; x0 -= (nw - w) / 2; x1 = x0 + nw; }
      else { const nh = w / ratio; y0 -= (nh - h) / 2; y1 = y0 + nh; }
      vb = `${x0.toFixed(0)} ${y0.toFixed(0)} ${(x1 - x0).toFixed(0)} ${(y1 - y0).toFixed(0)}`;
    }
    const d = smoothPath(pts);
    const pins = route.stops.map((s, i) => {
      const [x, y] = pts[i];
      const left = x < 40;
      const r = full ? 9 : 7;
      const label = full
        ? `<text class="lbl" x="${left ? x - r - 5 : x + r + 5}" y="${y + 3.5}" text-anchor="${left ? "end" : "start"}">${esc(s.name)}</text>`
        : "";
      return `<g class="stop-pin${live ? "" : " static"}" data-i="${i}"${live ? ' tabindex="0" role="button"' : ""} aria-label="${esc(`Stop ${i + 1}: ${s.name}`)}">
        <circle class="ring" cx="${x}" cy="${y}" r="${r}"/>
        <text class="num" x="${x}" y="${y + 0.5}">${i + 1}</text>${label}</g>`;
    }).join("");

    return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid ${full ? "meet" : "slice"}" role="img" aria-label="Map of the route ${esc(route.title)}">
      <defs>${TILE_PATTERN}</defs>
      <rect x="-200" y="-200" width="800" height="1000" fill="url(#sea-tiles)"/>
      <rect x="150" y="-200" width="600" height="705" class="pt-spain"/>
      <path class="pt-land" d="${window.PT_SHAPE}"/>
      ${full ? `<text class="map-label" transform="translate(-40 330) rotate(-90)">ATLANTIC OCEAN</text>
      <text class="map-label" x="225" y="300">SPAIN</text>` : ""}
      <path class="route-shadow" d="${d}"/>
      <path class="route-line" d="${d}"/>
      <path class="route-dash" d="${d}"/>
      ${pins}
    </svg>`;
  }

  /* Animate the route being drawn; pins pop as the line reaches them */
  let animId = 0;
  function animateRoute(svg) {
    const line = svg.querySelector(".route-line");
    const shadow = svg.querySelector(".route-shadow");
    const dash = svg.querySelector(".route-dash");
    const pins = [...svg.querySelectorAll(".stop-pin")];
    const L = line.getTotalLength();
    // where along the path is each stop?
    const stopAt = pins.map((p) => {
      const c = p.querySelector("circle");
      const cx = +c.getAttribute("cx"), cy = +c.getAttribute("cy");
      let best = 0, bd = Infinity;
      for (let l = 0; l <= L; l += 2) {
        const q = line.getPointAtLength(l);
        const dd = (q.x - cx) ** 2 + (q.y - cy) ** 2;
        if (dd < bd) { bd = dd; best = l; }
      }
      return best;
    });
    pins.forEach((p) => p.classList.remove("on"));
    [line, shadow].forEach((el) => { el.style.strokeDasharray = `${L} ${L}`; el.style.strokeDashoffset = L; });
    dash.style.opacity = 0;
    const id = ++animId;
    if (reduceMotion) {
      [line, shadow].forEach((el) => (el.style.strokeDashoffset = 0));
      pins.forEach((p) => p.classList.add("on"));
      dash.style.opacity = 1;
      return;
    }
    const dur = 900 * pins.length;
    const t0 = performance.now();
    pins[0] && pins[0].classList.add("on");
    function frame(now) {
      if (id !== animId) return;
      const k = Math.min(1, (now - t0) / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      const drawn = L * e;
      [line, shadow].forEach((el) => (el.style.strokeDashoffset = L - drawn));
      stopAt.forEach((l, i) => { if (drawn >= l - 1) pins[i].classList.add("on"); });
      if (k < 1) requestAnimationFrame(frame);
      else { dash.style.transition = "opacity .6s"; dash.style.opacity = 1; }
    }
    setTimeout(() => requestAnimationFrame(frame), 350);
  }

  /* ---------- Google Maps links ---------- */
  const gm = {
    place: (s) => `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`,
    leg: (from, to) => `https://www.google.com/maps/dir/?api=1${from ? `&origin=${from.lat},${from.lng}` : ""}&destination=${to.lat},${to.lng}&travelmode=driving`,
    route: (r) => {
      const s = r.stops, a = s[0], b = s[s.length - 1];
      const way = s.slice(1, -1).map((x) => `${x.lat},${x.lng}`).join("|");
      return `https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${b.lat},${b.lng}${way ? `&waypoints=${encodeURIComponent(way)}` : ""}&travelmode=driving`;
    },
    photos: (s) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(s.name + " Portugal")}`
  };

  const icon = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- Views ---------- */
  function viewHome() {
    const first = ROUTES[0];
    const cards = ROUTES.map((r) => `
      <a class="route-card" href="#route-${r.id}">
        <div class="route-card-map">${routeMap(r, { mode: "thumb" })}<span class="route-card-badge">${days(r)} days</span></div>
        <div class="route-card-body">
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.tagline)}</p>
          <div class="route-meta"><span>${r.stops.length} stops</span><span>≈ ${totalKm(r)} km</span><span>${esc(r.stops[0].name)} → ${esc(r.stops[r.stops.length - 1].name)}</span></div>
        </div>
      </a>`).join("");
    app.innerHTML = `
      <section class="hero">
        <div class="wrap hero-inner">
          <div>
            <p class="eyebrow">Road trips by Portuguese locals</p>
            <h1>Discover the real Portugal, one road at a time</h1>
            <p>Authentic road trips, scenic drives and hidden gems, created by Portuguese locals for travellers who want to discover the real Portugal.</p>
            <div class="hero-cta">
              <a class="btn btn-light" href="#routes-list">See the routes</a>
              ${first ? `<a class="btn btn-ghost" href="#route-${first.id}">Start with ${esc(first.title)}</a>` : ""}
            </div>
          </div>
          ${first ? `<div class="hero-tile" aria-hidden="true">${routeMap(first, { mode: "hero" })}</div>` : ""}
        </div>
      </section>
      <div class="tile-band light"></div>

      <section class="section" id="routes-list">
        <div class="wrap">
          <div class="section-head">
            <div><p class="eyebrow">Suggested itineraries</p><h2>Portugal Routes and Road Trips</h2></div>
            <p>Choose a route to see it drawn on the map, day by day, with where to sleep, eat and what to do at every stop.</p>
          </div>
          <div class="route-grid">
            ${cards}
            <div class="route-card soon"><div class="soon-tile"></div><h3>More routes on the way</h3><p>The Algarve coast, the Alentejo plains and the mountains of the north are next.</p></div>
          </div>
        </div>
      </section>

      <section class="section why">
        <div class="wrap why-grid">
          <div class="why-item"><div class="why-icon"></div><h3>Planned by locals</h3><p>Every route is driven and tested by people who were born and live in Portugal.</p></div>
          <div class="why-item"><div class="why-icon"></div><h3>Day by day</h3><p>Clear stages with road distances, so you know how long you will spend in the car.</p></div>
          <div class="why-item"><div class="why-icon"></div><h3>Places we trust</h3><p>Hotels, restaurants and activities we recommend along the way.</p></div>
        </div>
      </section>`;
  }

  function listItems(arr, kind) {
    if (!arr || !arr.length) return `<p class="panel-hint">Suggestions for this stop are coming soon.</p>`;
    const cta = { accommodations: "Book", activities: "Book", restaurants: "Reserve" }[kind];
    return `<ul class="items">${arr.map((it) => `
      <li class="item"><div><b>${esc(it.name)}${it.partner ? '<span class="partner-tag">Partner</span>' : ""}</b><small>${esc(it.note || "")}</small></div>
      <a class="btn btn-primary" href="${esc(it.url || "#")}" target="_blank" rel="noopener sponsored">${cta}</a></li>`).join("")}</ul>`;
  }

  function stopPanel(route, i, tab) {
    const s = route.stops[i], prev = route.stops[i - 1];
    let body = "";
    if (tab === "overview") {
      body = `<p>${esc(s.overview)}</p>
        <div class="panel-actions">
          <a class="btn btn-primary" href="${gm.leg(prev, s)}" target="_blank" rel="noopener">${icon("i-dir")}Directions${prev ? ` from ${esc(prev.name)}` : ""}</a>
          <a class="btn btn-ghost" href="${gm.place(s)}" target="_blank" rel="noopener">${icon("i-pin")}View on Google Maps</a>
        </div>`;
    } else if (tab === "pictures") {
      body = `<div class="photo-grid">${'<div class="photo-ph"></div>'.repeat(6)}</div>
        <p class="panel-hint">Photos of ${esc(s.name)} will appear here.</p>
        <div class="panel-actions"><a class="btn btn-ghost" href="${gm.photos(s)}" target="_blank" rel="noopener">See photos of ${esc(s.name)}</a></div>`;
    } else {
      body = listItems(s[tab], tab);
    }
    return body;
  }

  const TABS = [["overview", "Overview"], ["pictures", "Pictures"], ["accommodations", "Accommodations"], ["activities", "Activities"], ["restaurants", "Restaurants"]];

  function viewRoute(route) {
    const total = totalKm(route);
    const stops = route.stops.map((s, i) => `
      <li class="stop" data-i="${i}" id="stop-${i}">
        ${i > 0 ? `<div class="leg">${icon("i-car")}${s.km} km from ${esc(route.stops[i - 1].name)}</div>` : `<div class="leg">${icon("i-pin")}Starting point</div>`}
        <span class="stop-num" aria-hidden="true">${i + 1}</span>
        <button class="stop-head" aria-expanded="false" aria-controls="stop-body-${i}">
          <span><span class="day">Day ${s.day}</span><h3>${esc(s.name)}</h3><span class="region">${esc(s.region)}</span></span>
          <svg class="chev" aria-hidden="true"><use href="#i-chev"/></svg>
        </button>
        <div class="stop-body" id="stop-body-${i}" hidden>
          <div class="tabs" role="tablist">${TABS.map(([k, l], j) => `<button class="tab" role="tab" data-tab="${k}" aria-selected="${j === 0}">${l}</button>`).join("")}</div>
          <div class="tab-panel" role="tabpanel"></div>
        </div>
      </li>`).join("");

    app.innerHTML = `
      <section class="route-hero">
        <div class="wrap">
          <p class="crumbs"><a href="#home">Routes</a> / ${esc(route.title)}</p>
          <h1>${esc(route.title)}</h1>
          <p class="lead">${esc(route.summary)}</p>
          <div class="route-stats">
            <div class="stat"><b>${days(route)}</b><span>Days</span></div>
            <div class="stat"><b>${route.stops.length}</b><span>Stops</span></div>
            <div class="stat"><b>≈ ${total}</b><span>Km by road</span></div>
            ${route.season ? `<div class="stat"><b style="font-size:17px;padding-top:6px">${esc(route.season)}</b><span>When to go</span></div>` : ""}
          </div>
          <div class="route-actions">
            <a class="btn btn-primary" href="${gm.route(route)}" target="_blank" rel="noopener">${icon("i-dir")}Open the full route in Google Maps</a>
          </div>
        </div>
      </section>
      <div class="wrap route-layout">
        <div class="map-col">
          <div class="map-frame" id="map-frame">
            ${routeMap(route, { mode: "full" })}
            <button class="icon-btn replay" id="replay" aria-label="Replay the route animation">${icon("i-replay")}</button>
          </div>
          <p class="map-note">Tap a number on the map to see that stop.</p>
        </div>
        <div>
          <ol class="itinerary">${stops}</ol>
        </div>
      </div>`;

    const svg = $("#map-frame svg");
    animateRoute(svg);
    $("#replay").addEventListener("click", () => animateRoute(svg));

    const openStop = (i, scroll) => {
      app.querySelectorAll(".stop").forEach((li) => {
        const on = +li.dataset.i === i && !li.classList.contains("open");
        li.classList.toggle("open", on);
        $(".stop-head", li).setAttribute("aria-expanded", on);
        $(".stop-body", li).hidden = !on;
        if (on) setTab(li, "overview");
      });
      svg.querySelectorAll(".stop-pin").forEach((p) => p.classList.toggle("active", +p.dataset.i === i && $(`#stop-${i}`).classList.contains("open")));
      if (scroll) $(`#stop-${i}`).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    };
    const setTab = (li, tab) => {
      li.querySelectorAll(".tab").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
      $(".tab-panel", li).innerHTML = stopPanel(route, +li.dataset.i, tab);
    };

    app.querySelectorAll(".stop-head").forEach((b) => b.addEventListener("click", () => openStop(+b.closest(".stop").dataset.i, false)));
    app.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => setTab(b.closest(".stop"), b.dataset.tab)));
    svg.querySelectorAll(".stop-pin").forEach((p) => {
      const go = () => { const li = $(`#stop-${p.dataset.i}`); if (!li.classList.contains("open")) openStop(+p.dataset.i, true); else li.scrollIntoView({ behavior: "smooth", block: "center" }); };
      p.addEventListener("click", go);
      p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
    openStop(0, false);
  }

  const PAGES = {
    inspiration: { title: "Inspiration", eyebrow: "Stories", text: "Articles and ideas behind each route, the same stories we share on our social media.",
      cards: [["Why Sintra deserves a full day", "Palaces, forests and the best pastry in town."], ["Five viewpoints in Lisbon at sunset", "Where locals go when the light turns gold."], ["A weekend in the Douro", "Vineyards, river and wine estates."]] },
    maps: { title: "Maps", eyebrow: "Downloads", text: "Download a one-page PDF summary of each route to keep on your phone or print before the trip.", maps: true },
    accommodations: { title: "Accommodations", eyebrow: "Where to sleep", text: "Hotels, guesthouses and wine estates we recommend along our routes.",
      cards: [["Boutique hotels", "Small hotels with character in historic centres."], ["Quintas and country houses", "Stay on a farm or a wine estate."], ["By the sea", "Rooms with an Atlantic view."]] },
    activities: { title: "Activities", eyebrow: "What to do", text: "Tours, tastings and experiences to book along the way.",
      cards: [["Wine tastings", "Port, Douro and Alentejo wines at the source."], ["On the water", "River cruises, sailing and surf lessons."], ["Culture", "Fado nights, palaces and museums."]] },
    restaurants: { title: "Restaurants", eyebrow: "Where to eat", text: "From family tascas to tables with a view: where we like to eat on the road.",
      cards: [["Traditional tascas", "Home cooking at local prices."], ["Seafood", "Fresh fish and shellfish by the coast."], ["Sweet stops", "Pastries you should not miss."]] },
    blog: { title: "Blog", eyebrow: "Notes from the road", text: "Practical tips for driving in Portugal: tolls, parking, fuel and the best time to travel.",
      cards: [["Driving in Portugal: tolls explained", "Via Verde, electronic tolls and how to pay."], ["When to visit Portugal", "Month by month, region by region."], ["What to pack for a road trip", "Our checklist."]] }
  };

  function viewPage(key) {
    const p = PAGES[key];
    const grid = p.maps
      ? ROUTES.map((r) => `<div class="ph-card"><h3>${esc(r.title)}</h3><p>${days(r)} days · ${r.stops.length} stops · ≈ ${totalKm(r)} km</p><a class="btn btn-primary" aria-disabled="true" href="#">Download PDF · coming soon</a></div>`).join("")
      : p.cards.map(([t, d]) => `<div class="ph-card"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");
    app.innerHTML = `
      <section class="page-hero"><div class="wrap"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.title)}</h1><p>${esc(p.text)}</p></div></section>
      <section class="section"><div class="wrap"><div class="placeholder-grid">${grid}</div>
      ${p.maps ? "" : `<p class="panel-hint" style="margin-top:20px">Sample topics. This page will be filled with real content.</p>`}</div></section>`;
  }

  /* ---------- Router ---------- */
  function route() {
    const h = (location.hash || "#home").slice(1);
    animId++;
    if (h === "routes-list") { if (!$("#routes-list")) { viewHome(); } $("#routes-list").scrollIntoView(); setActive("home"); return; }
    if (h.startsWith("route-")) {
      const r = ROUTES.find((x) => x.id === h.slice(6));
      if (r) { viewRoute(r); setActive("home"); window.scrollTo(0, 0); return; }
    }
    if (PAGES[h]) { viewPage(h); setActive(h); window.scrollTo(0, 0); return; }
    viewHome(); setActive("home"); window.scrollTo(0, 0);
  }
  function setActive(key) {
    document.querySelectorAll(".main-nav a").forEach((a) => {
      if (a.getAttribute("href") === `#${key}`) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    $("#main-nav").classList.remove("open");
    $("#menu-toggle").setAttribute("aria-expanded", "false");
    updateShare();
  }
  window.addEventListener("hashchange", route);

  /* ---------- Header: menu + search ---------- */
  $("#menu-toggle").addEventListener("click", (e) => {
    const nav = $("#main-nav"); const open = nav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  const panel = $("#search-panel"), input = $("#search-input"), results = $("#search-results");
  $("#search-toggle").addEventListener("click", (e) => {
    panel.hidden = !panel.hidden;
    e.currentTarget.setAttribute("aria-expanded", !panel.hidden);
    if (!panel.hidden) input.focus();
  });
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const index = [];
  ROUTES.forEach((r) => {
    index.push({ title: r.title, kind: "Route", href: `#route-${r.id}`, text: `${r.title} ${r.tagline} ${r.summary}` });
    r.stops.forEach((s) => index.push({ title: s.name, kind: `Stop in ${r.title}`, href: `#route-${r.id}`, text: `${s.name} ${s.region} ${s.overview}` }));
  });
  Object.entries(PAGES).forEach(([k, p]) => index.push({ title: p.title, kind: "Page", href: `#${k}`, text: `${p.title} ${p.text} ${(p.cards || []).flat().join(" ")}` }));
  input.addEventListener("input", () => {
    const q = norm(input.value.trim());
    if (q.length < 2) { results.innerHTML = ""; return; }
    const hits = index.filter((x) => norm(x.text).includes(q)).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map((x) => `<li><a href="${x.href}"><span>${esc(x.title)}</span><small>${esc(x.kind)}</small></a></li>`).join("")
      : `<li class="search-empty">Nothing found for “${esc(input.value)}”.</li>`;
  });
  results.addEventListener("click", (e) => { if (e.target.closest("a")) { panel.hidden = true; input.value = ""; results.innerHTML = ""; } });

  /* ---------- Footer: share ---------- */
  function updateShare() { $("#share-url").textContent = location.href; }
  $("#share-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const to = $("#share-email").value.trim();
    const subject = encodeURIComponent("A Portugal road trip for you");
    const body = encodeURIComponent(`I found this and thought of you:\n\n${document.title}\n${location.href}`);
    location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
    $("#share-msg").textContent = "Your email app should open with the link ready to send.";
  });
  $("#share-copy").addEventListener("click", () => {
    const msg = $("#share-msg");
    const done = () => (msg.textContent = "Link copied.");
    const fallback = () => { const r = document.createRange(); r.selectNodeContents($("#share-url")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); msg.textContent = "Link selected. Press Ctrl+C (or ⌘C) to copy."; };
    try { navigator.clipboard.writeText(location.href).then(done, fallback); } catch (_) { fallback(); }
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Contact modal ---------- */
  const modal = $("#contact-modal");
  const openModal = () => { modal.hidden = false; $("#c-first").focus(); };
  const closeModal = () => { modal.hidden = true; $("#contact-open").focus(); };
  $("#contact-open").addEventListener("click", openModal);
  $("#contact-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget, msg = $("#contact-msg");
    msg.hidden = false;
    if (!f.checkValidity()) { msg.textContent = "Please fill in every field marked * and accept the privacy note."; return; }
    msg.textContent = "Thank you. This is a preview: the form will start sending messages when the site goes online.";
    f.reset();
  });

  route();
})();
