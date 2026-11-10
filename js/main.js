(function () {
  "use strict";

  const ROUTES = window.ROUTES || [];
  const MAP = window.MAP_DATA;
  const app = document.getElementById("app");
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Language ---------- */
  const LANGS = ["en", "pt", "es", "fr"];
  let lang = "en";
  try { const s = localStorage.getItem("ptr-lang"); if (LANGS.includes(s)) lang = s; } catch (_) {}
  const T = (k, vars) => {
    let v = (window.I18N[lang] && window.I18N[lang][k]) ?? window.I18N.en[k] ?? k;
    if (vars && typeof v === "string") for (const [a, b] of Object.entries(vars)) v = v.replace(`{${a}}`, b);
    return v;
  };
  const L = (o) => (o && typeof o === "object" ? o[lang] || o.en : o || "");

  function applyStatic() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = T(el.dataset.i18n)));
    $$("[data-i18n-ph]").forEach((el) => (el.placeholder = T(el.dataset.i18nPh)));
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    $("#search-toggle").setAttribute("aria-label", T("search"));
    const sel = $("#c-subject"), cur = sel.selectedIndex;
    sel.innerHTML = `<option value="">${esc(T("select"))}</option>` + T("subjects").map((x) => `<option>${esc(x)}</option>`).join("");
    sel.selectedIndex = Math.max(0, cur);
    buildIndex();
  }

  /* ---------- Geometry ---------- */
  const COS = Math.cos((39.5 * Math.PI) / 180);
  const project = (lat, lng) => [(lng + 9.6) * COS * 100 + 10, (42.2 - lat) * 100 + 10];
  function estKm(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
    return Math.round((2 * R * Math.asin(Math.sqrt(h)) * 1.3) / 5) * 5;
  }
  const legKm = (r, i) => (i === 0 ? 0 : r.stops[i].km ?? estKm(r.stops[i - 1], r.stops[i]));
  const totalKm = (r) => r.stops.reduce((s, _, i) => s + legKm(r, i), 0);
  const mains = (r) => r.stops.filter((s) => s.kind === "main");
  const vias = (r) => r.stops.filter((s) => s.kind === "via");
  const dayLabel = (s) => (s.dayFrom === s.dayTo ? `${T("day")} ${s.dayFrom}` : `${T("daysShort")} ${s.dayFrom}–${s.dayTo}`);

  function smoothPath(pts) {
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2, t = 0.18;
      const c1 = [p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t];
      const c2 = [p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t];
      d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  }

  const DISTRICT_FILL = ["var(--d0)", "var(--d1)", "var(--d2)", "var(--d3)", "var(--d4)"];
  const PATTERN = `<pattern id="sea-tiles" width="28" height="28" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#5f97cf" stroke-width=".7" opacity=".35">
        <path d="M0 8A8 8 0 0 0 8 0M20 0A8 8 0 0 0 28 8M28 20A8 8 0 0 0 20 28M8 28A8 8 0 0 0 0 20"/>
        <path d="M14 4L24 14L14 24L4 14Z"/><circle cx="14" cy="14" r="2"/></g></pattern>`;
  const iconBody = (k) => (window.STOP_ICONS[k] || window.STOP_ICONS.castle);

  /* Map of a route. mode: "full" (route page) | "hero" (whole country) | "thumb" (card) */
  function routeMap(route, mode) {
    const pts = route.stops.map((s) => project(s.lat, s.lng));
    let x0, y0, w, h;
    if (mode === "hero") { x0 = -20; y0 = 0; w = 320; h = 550; }
    else {
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      const pad = mode === "full" ? 45 : 30;
      x0 = Math.min(...xs) - pad; y0 = Math.min(...ys) - pad;
      w = Math.max(...xs) + pad - x0; h = Math.max(...ys) + pad - y0;
      const ratio = mode === "full" ? 0.78 : 4 / 3;
      const minH = mode === "full" ? 150 : 110;
      if (h < minH) { y0 -= (minH - h) / 2; h = minH; }
      if (w / h < ratio) { const nw = h * ratio; x0 -= (nw - w) / 2; w = nw; }
      else { const nh = w / ratio; y0 -= (nh - h) / 2; h = nh; }
    }
    const k = Math.min(1, Math.max(0.42, h / 560)) * (mode === "thumb" ? 1.5 : 1);
    const vb = `${x0.toFixed(0)} ${y0.toFixed(0)} ${w.toFixed(0)} ${h.toFixed(0)}`;
    const d = smoothPath(pts);
    const live = mode === "full";

    const districts = MAP.districts.map((ds) => `<path class="district" d="${ds.d}" style="fill:${DISTRICT_FILL[ds.c]}"/>`).join("");
    const dLabels = mode === "thumb" ? "" : MAP.districts.map((ds) =>
      `<text class="district-label" x="${ds.lx}" y="${ds.ly}" style="font-size:${(7.5 * k).toFixed(1)}px">${esc(ds.name)}</text>`).join("");

    let mainN = 0;
    const pinOf = (s, i) => {
      const [x, y] = pts[i];
      const isMain = s.kind === "main";
      if (isMain) mainN++;
      const r = (isMain ? 16 : 11) * k;
      const ir = r * 0.82;
      const badge = isMain
        ? `<circle class="badge" cx="${x + r * 0.78}" cy="${y - r * 0.78}" r="${5.2 * k}"/><text class="badge-num" x="${x + r * 0.78}" y="${y - r * 0.78 + 0.3 * k}" style="font-size:${(7 * k).toFixed(1)}px">${mainN}</text>`
        : "";
      const crowded = route.stops.some((o, j) => j !== i && o.kind === "main" && pts[j][0] > x && pts[j][0] - x < 60 * k && Math.abs(pts[j][1] - y) < 22 * k);
      const left = crowded || x < x0 + w * 0.3 || (mode !== "hero" && x > x0 + w * 0.8);
      const label = isMain && mode !== "thumb"
        ? `<text class="lbl" x="${left ? x - r - 4 * k : x + r + 4 * k}" y="${y + 3.5 * k}" text-anchor="${left ? "end" : "start"}" style="font-size:${(10.5 * k).toFixed(1)}px">${esc(L(s.name))}</text>`
        : "";
      return `<g class="stop-pin ${isMain ? "main" : "via"}${live ? "" : " static"}" data-i="${i}"${live ? ` tabindex="0" role="button" aria-label="${esc(L(s.name))}"` : ""}>
          <title>${esc(L(s.name))}</title>
          <circle class="ring" cx="${x}" cy="${y}" r="${r}"/>
          <svg x="${x - ir}" y="${y - ir}" width="${ir * 2}" height="${ir * 2}" viewBox="0 0 32 32" overflow="visible">${iconBody(s.icon)}</svg>
          ${badge}${label}</g>`;
    };
    // via pins first so main pins sit on top
    const order = route.stops.map((s, i) => [s, i]);
    let pinsVia = "", pinsMain = "";
    mainN = 0;
    order.forEach(([s, i]) => { const g = pinOf(s, i); if (s.kind === "main") pinsMain += g; else pinsVia += g; });

    return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid ${mode === "thumb" ? "slice" : "meet"}" role="img" aria-label="${esc(L(route.title))}">
      <defs>${PATTERN}</defs>
      <rect x="-400" y="-400" width="1200" height="1400" class="sea"/>
      <rect x="-400" y="-400" width="1200" height="1400" fill="url(#sea-tiles)"/>
      <path class="spain" d="${MAP.spain}"/>
      ${districts}${dLabels}
      ${mode === "thumb" ? "" : `<text class="sea-label" transform="translate(${Math.max(x0 + 14 * k, -12)} ${y0 + h * 0.62}) rotate(-90)" style="font-size:${(11 * k).toFixed(1)}px">ATLANTIC OCEAN</text>`}
      <path class="route-shadow" d="${d}" style="stroke-width:${7 * k}px"/>
      <path class="route-line" d="${d}" style="stroke-width:${3.2 * k}px"/>
      <path class="route-dash" d="${d}" style="stroke-width:${1.2 * k}px;stroke-dasharray:${2 * k} ${4 * k}"/>
      ${pinsVia}${pinsMain}
    </svg>`;
  }

  let animId = 0;
  function animateRoute(svg) {
    const line = $(".route-line", svg), shadow = $(".route-shadow", svg), dash = $(".route-dash", svg);
    const pins = $$(".stop-pin", svg);
    const L = line.getTotalLength();
    const at = pins.map((p) => {
      const c = $("circle", p), cx = +c.getAttribute("cx"), cy = +c.getAttribute("cy");
      let best = 0, bd = Infinity;
      for (let l = 0; l <= L; l += 1.5) { const q = line.getPointAtLength(l); const dd = (q.x - cx) ** 2 + (q.y - cy) ** 2; if (dd < bd) { bd = dd; best = l; } }
      return best;
    });
    const id = ++animId;
    pins.forEach((p) => p.classList.remove("on"));
    [line, shadow].forEach((el) => { el.style.strokeDasharray = `${L} ${L}`; el.style.strokeDashoffset = L; });
    dash.style.transition = "none"; dash.style.opacity = 0;
    if (reduceMotion) {
      [line, shadow].forEach((el) => (el.style.strokeDashoffset = 0));
      pins.forEach((p) => p.classList.add("on")); dash.style.opacity = 1; return;
    }
    const dur = 650 * pins.length + 600, t0 = performance.now() + 350;
    function frame(now) {
      if (id !== animId) return;
      const q = Math.max(0, Math.min(1, (now - t0) / dur));
      const e = q < 0.5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2;
      const drawn = L * e;
      [line, shadow].forEach((el) => (el.style.strokeDashoffset = L - drawn));
      at.forEach((l, i) => { if (drawn >= l - 1) pins[i].classList.add("on"); });
      if (q < 1) requestAnimationFrame(frame);
      else { dash.style.transition = "opacity .6s"; dash.style.opacity = 1; }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Google Maps ---------- */
  const gm = {
    place: (s) => `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`,
    leg: (a, b) => `https://www.google.com/maps/dir/?api=1${a ? `&origin=${a.lat},${a.lng}` : ""}&destination=${b.lat},${b.lng}&travelmode=driving`,
    route: (r) => {
      const s = r.stops, a = s[0], b = s[s.length - 1];
      const way = s.slice(1, -1).map((x) => `${x.lat},${x.lng}`).join("|");
      return `https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${b.lat},${b.lng}${way ? `&waypoints=${encodeURIComponent(way)}` : ""}&travelmode=driving`;
    },
    photos: (s) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(L(s.name) + " Portugal")}`
  };
  const ic = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- Home ---------- */
  const SECTIONS = [["getaways", "getaway", "secGetaways", "secGetawaysText"], ["medium", "medium", "secMedium", "secMediumText"], ["long", "long", "secLong", "secLongText"]];
  function card(r) {
    return `<a class="route-card" href="#route-${r.id}">
      <div class="route-card-map">${routeMap(r, "thumb")}<span class="route-card-badge">${r.days} ${esc(T("days"))}</span></div>
      <div class="route-card-body">
        <h3>${esc(L(r.title))}</h3>
        <p>${esc(L(r.tagline))}</p>
        <div class="route-meta"><span>${mains(r).length} ${esc(T("stops"))}</span><span>${vias(r).length} ${esc(T("mustSee"))}</span><span>≈ ${totalKm(r)} km</span></div>
      </div></a>`;
  }
  function viewHome() {
    const hero = ROUTES.find((r) => r.type === "long") || ROUTES[0];
    app.innerHTML = `
      <section class="hero"><div class="wrap hero-inner">
        <div>
          <p class="eyebrow">${esc(T("heroEyebrow"))}</p>
          <h1>${esc(T("heroTitle"))}</h1>
          <p>${esc(T("heroText"))}</p>
          <div class="hero-cta"><a class="btn btn-light" href="#getaways">${esc(T("heroCta"))}</a>
          ${hero ? `<a class="btn btn-ghost" href="#route-${hero.id}">${esc(L(hero.title))}</a>` : ""}</div>
        </div>
        ${hero ? `<a class="hero-tile" href="#route-${hero.id}" aria-label="${esc(L(hero.title))}">${routeMap(hero, "hero")}</a>` : ""}
      </div></section>
      <div class="tile-band light"></div>
      <div class="wrap routes-intro"><h2>${esc(T("routesTitle"))}</h2></div>
      ${SECTIONS.map(([anchor, type, t, txt]) => {
        const list = ROUTES.filter((r) => r.type === type);
        return `<section class="section route-section" id="${anchor}"><div class="wrap">
          <div class="section-head"><div><p class="eyebrow">${esc(T(t))}</p><h2>${esc(T(t))}</h2></div><p>${esc(T(txt))}</p></div>
          <div class="route-grid">${list.map(card).join("")}
            <div class="route-card soon"><div class="soon-tile"></div><h3>${esc(T("soonTitle"))}</h3><p>${esc(T("soonText"))}</p></div>
          </div></div></section>`;
      }).join("")}`;
  }

  /* ---------- Route page ---------- */
  const TABS = [["overview", "tOverview"], ["pictures", "tPictures"], ["stay", "tStay"], ["do", "tDo"], ["eat", "tEat"]];
  function partnerList(s, tab) {
    const custom = s[tab];
    const items = custom && custom.length ? custom : [{ name: T({ stay: "exStay", do: "exDo", eat: "exEat" }[tab], { p: L(s.name) }), note: T("exNote"), url: "#", partner: true }];
    const cta = tab === "eat" ? T("reserve") : T("book");
    return `<ul class="items">${items.map((it) => `<li class="item">
      <div><b>${esc(L(it.name))}${it.partner ? `<span class="partner-tag">${esc(T("partner"))}</span>` : ""}</b><small>${esc(L(it.note))}</small></div>
      <a class="btn btn-primary" href="${esc(it.url || "#")}" target="_blank" rel="noopener sponsored">${esc(cta)}</a></li>`).join("")}</ul>`;
  }
  function panel(r, i, tab) {
    const s = r.stops[i], prev = r.stops[i - 1];
    if (tab === "overview") return `<p>${esc(L(s.overview))}</p>
      <div class="panel-actions">
        <a class="btn btn-primary" href="${gm.leg(prev, s)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(prev ? `${T("directionsFrom")} ${L(prev.name)}` : T("directions"))}</a>
        <a class="btn btn-ghost" href="${gm.place(s)}" target="_blank" rel="noopener">${ic("i-pin")}${esc(T("viewMap"))}</a></div>`;
    if (tab === "pictures") return `<div class="photo-grid">${'<div class="photo-ph"></div>'.repeat(6)}</div>
      <p class="panel-hint">${esc(T("photosHere", { p: L(s.name) }))}</p>
      <div class="panel-actions"><a class="btn btn-ghost" href="${gm.photos(s)}" target="_blank" rel="noopener">${esc(T("seePhotos", { p: L(s.name) }))}</a></div>`;
    return partnerList(s, tab);
  }

  function viewRoute(r) {
    let n = 0;
    const items = r.stops.map((s, i) => {
      const prev = r.stops[i - 1];
      const leg = i === 0
        ? `<div class="leg">${ic("i-pin")}${esc(T("start"))}</div>`
        : `<div class="leg">${ic("i-car")}≈ ${legKm(r, i)} km ${esc(T("fromPrev"))} ${esc(L(prev.name))}</div>`;
      if (s.kind === "via") {
        return `<li class="stop via" data-i="${i}" id="stop-${i}">${leg}
          <span class="stop-icon small" aria-hidden="true">${window.iconSVG(s.icon, 22)}</span>
          <div class="via-card">
            <p class="via-eyebrow">${esc(T("onTheWay"))} · ${esc(T("cat")[s.category] || "")}</p>
            <h4>${esc(L(s.name))}</h4>
            <p>${esc(L(s.text))}</p>
            <div class="panel-actions">
              <a class="btn btn-primary btn-sm" href="${gm.leg(prev, s)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(T("directions"))}</a>
              <a class="btn btn-ghost btn-sm" href="${gm.place(s)}" target="_blank" rel="noopener">${ic("i-pin")}${esc(T("viewMap"))}</a>
            </div>
          </div></li>`;
      }
      n++;
      return `<li class="stop main" data-i="${i}" id="stop-${i}">${leg}
        <span class="stop-icon" aria-hidden="true">${window.iconSVG(s.icon, 30)}<b>${n}</b></span>
        <button class="stop-head" aria-expanded="false" aria-controls="stop-body-${i}">
          <span><span class="day">${esc(dayLabel(s))}</span><h3>${esc(L(s.name))}</h3><span class="region">${esc(T("district"))}: ${esc(s.district || "")}</span></span>
          <svg class="chev" aria-hidden="true"><use href="#i-chev"/></svg>
        </button>
        <div class="stop-body" id="stop-body-${i}" hidden>
          <div class="tabs" role="tablist">${TABS.map(([k, l], j) => `<button class="tab" role="tab" data-tab="${k}" aria-selected="${j === 0}">${esc(T(l))}</button>`).join("")}</div>
          <div class="tab-panel" role="tabpanel"></div>
        </div></li>`;
    }).join("");

    app.innerHTML = `
      <section class="route-hero"><div class="wrap">
        <p class="crumbs"><a href="#${(SECTIONS.find((x) => x[1] === r.type) || SECTIONS[0])[0]}">${esc(T("breadcrumb"))}</a> / ${esc(L(r.title))}</p>
        <h1>${esc(L(r.title))}</h1>
        <p class="lead">${esc(L(r.summary))}</p>
        <div class="route-stats">
          <div class="stat"><b>${r.days}</b><span>${esc(T("statDays"))}</span></div>
          <div class="stat"><b>${mains(r).length}</b><span>${esc(T("statStops"))}</span></div>
          <div class="stat"><b>${vias(r).length}</b><span>${esc(T("statVia"))}</span></div>
          <div class="stat"><b>≈ ${totalKm(r)}</b><span>${esc(T("statKm"))}</span></div>
        </div>
        <div class="route-actions"><a class="btn btn-primary" href="${gm.route(r)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(T("fullRoute"))}</a></div>
      </div></section>
      <div class="wrap route-layout">
        <div class="map-col">
          <div class="map-frame" id="map-frame">${routeMap(r, "full")}
            <button class="icon-btn replay" id="replay" aria-label="${esc(T("replay"))}" title="${esc(T("replay"))}">${ic("i-replay")}</button>
          </div>
          <p class="map-note">${esc(T("mapNote"))}</p>
        </div>
        <ol class="itinerary">${items}</ol>
      </div>`;

    const svg = $("#map-frame svg");
    animateRoute(svg);
    $("#replay").addEventListener("click", () => animateRoute(svg));

    const setTab = (li, tab) => {
      $$(".tab", li).forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
      $(".tab-panel", li).innerHTML = panel(r, +li.dataset.i, tab);
    };
    const highlight = (i) => $$(".stop-pin", svg).forEach((p) => p.classList.toggle("active", +p.dataset.i === i));
    const openStop = (i, scroll) => {
      const target = $(`#stop-${i}`);
      if (target.classList.contains("via")) {
        highlight(i);
        $$(".stop.via").forEach((li) => li.classList.toggle("flash", li === target));
      } else {
        const opening = !target.classList.contains("open");
        $$(".stop.main").forEach((li) => {
          const on = li === target && opening;
          li.classList.toggle("open", on);
          $(".stop-head", li).setAttribute("aria-expanded", on);
          $(".stop-body", li).hidden = !on;
          if (on) setTab(li, "overview");
        });
        highlight(opening ? i : -1);
      }
      if (scroll) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    };
    $$(".stop-head").forEach((b) => b.addEventListener("click", () => openStop(+b.closest(".stop").dataset.i, false)));
    $$(".tab").forEach((b) => b.addEventListener("click", () => setTab(b.closest(".stop"), b.dataset.tab)));
    $$(".stop-pin", svg).forEach((p) => {
      const go = () => { const li = $(`#stop-${p.dataset.i}`); if (li.classList.contains("open")) li.scrollIntoView({ behavior: "smooth", block: "center" }); else openStop(+p.dataset.i, true); };
      p.addEventListener("click", go);
      p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
    const firstMain = r.stops.findIndex((s) => s.kind === "main");
    if (firstMain >= 0) openStop(firstMain, false);
  }

  /* ---------- Router ---------- */
  function route() {
    const h = (location.hash || "#home").slice(1);
    animId++;
    $("#main-nav").classList.remove("open");
    $("#menu-toggle").setAttribute("aria-expanded", "false");
    if (h.startsWith("route-")) {
      const r = ROUTES.find((x) => x.id === h.slice(6));
      if (r) { viewRoute(r); setActive(r.type); window.scrollTo(0, 0); updateShare(); return; }
    }
    viewHome();
    const sec = SECTIONS.find((x) => x[0] === h);
    if (sec) { setActive(sec[1]); requestAnimationFrame(() => $(`#${h}`).scrollIntoView()); }
    else { setActive(null); window.scrollTo(0, 0); }
    updateShare();
  }
  function setActive(type) {
    const anchor = (SECTIONS.find((x) => x[1] === type) || [])[0];
    $$(".main-nav a").forEach((a) => (a.getAttribute("href") === `#${anchor}` ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
  }
  window.addEventListener("hashchange", route);

  /* ---------- Header ---------- */
  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("ptr-lang", lang); } catch (_) {}
    applyStatic();
    const y = window.scrollY; route(); window.scrollTo(0, y);
  }));
  $("#menu-toggle").addEventListener("click", (e) => {
    const open = $("#main-nav").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  const panelEl = $("#search-panel"), input = $("#search-input"), results = $("#search-results");
  $("#search-toggle").addEventListener("click", (e) => {
    panelEl.hidden = !panelEl.hidden;
    e.currentTarget.setAttribute("aria-expanded", !panelEl.hidden);
    if (!panelEl.hidden) input.focus();
  });
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  let index = [];
  function buildIndex() {
    index = [];
    ROUTES.forEach((r) => {
      index.push({ title: L(r.title), kind: T("kRoute"), href: `#route-${r.id}`, text: `${L(r.title)} ${L(r.tagline)} ${L(r.summary)}` });
      r.stops.forEach((s) => index.push({ title: L(s.name), kind: `${T("kStop")} · ${L(r.title)}`, href: `#route-${r.id}`, text: `${L(s.name)} ${s.district || ""} ${L(s.overview || s.text)} ${s.icon}` }));
    });
  }
  input.addEventListener("input", () => {
    const q = norm(input.value.trim());
    if (q.length < 2) { results.innerHTML = ""; return; }
    const hits = index.filter((x) => norm(x.text).includes(q)).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map((x) => `<li><a href="${x.href}"><span>${esc(x.title)}</span><small>${esc(x.kind)}</small></a></li>`).join("")
      : `<li class="search-empty">${esc(T("searchNone"))} “${esc(input.value)}”.</li>`;
  });
  results.addEventListener("click", (e) => { if (e.target.closest("a")) { panelEl.hidden = true; input.value = ""; results.innerHTML = ""; } });

  /* ---------- Footer: share ---------- */
  function updateShare() { $("#share-url").textContent = location.href; $("#share-msg").textContent = ""; }
  $("#share-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const to = $("#share-email").value.trim();
    location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(T("shareSubject"))}&body=${encodeURIComponent(`${T("shareBody")}\n\n${document.title}\n${location.href}`)}`;
    $("#share-msg").textContent = T("shareSent");
  });
  $("#share-copy").addEventListener("click", () => {
    const msg = $("#share-msg");
    const fallback = () => { const rg = document.createRange(); rg.selectNodeContents($("#share-url")); const s = getSelection(); s.removeAllRanges(); s.addRange(rg); msg.textContent = T("copyFallback"); };
    try { navigator.clipboard.writeText(location.href).then(() => (msg.textContent = T("copied")), fallback); } catch (_) { fallback(); }
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Contact ---------- */
  const modal = $("#contact-modal");
  $("#contact-open").addEventListener("click", () => { modal.hidden = false; $("#c-first").focus(); });
  const close = () => { modal.hidden = true; $("#contact-open").focus(); };
  $("#contact-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget, msg = $("#contact-msg");
    msg.hidden = false;
    if (!f.checkValidity()) { msg.textContent = T("formError"); return; }
    msg.textContent = T("formOk"); f.reset();
  });

  applyStatic();
  route();
})();
