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
    return Math.max(5, Math.round((2 * R * Math.asin(Math.sqrt(h)) * 1.3) / 5) * 5);
  }
  const isGetaway = (r) => r.type === "getaway";
  // linear routes: km from previous stop; getaways: km from the base
  const legKm = (r, i) => {
    if (i === 0) return 0;
    const s = r.stops[i];
    return s.km ?? estKm(isGetaway(r) ? r.stops[0] : r.stops[i - 1], s);
  };
  const totalKm = (r) => r.stops.reduce((s, _, i) => s + legKm(r, i), 0);
  const maxKm = (r) => Math.max(0, ...r.stops.map((_, i) => legKm(r, i)));
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
  // gentle arc from base to an activity
  function spoke(a, b) {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
    return `M${a[0].toFixed(1)} ${a[1].toFixed(1)}Q${(mx - dy * 0.18).toFixed(1)} ${(my + dx * 0.18).toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  }

  const PATTERN = `<pattern id="sea-tiles" width="28" height="28" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#5f97cf" stroke-width=".7" opacity=".35">
        <path d="M0 8A8 8 0 0 0 8 0M20 0A8 8 0 0 0 28 8M28 20A8 8 0 0 0 20 28M8 28A8 8 0 0 0 0 20"/>
        <path d="M14 4L24 14L14 24L4 14Z"/><circle cx="14" cy="14" r="2"/></g></pattern>`;
  const iconBody = (k) => (window.STOP_ICONS[k] || window.STOP_ICONS.castle);

  function baseLayers(k, x0, y0, h, highlight, noSpain) {
    const districts = MAP.districts.map((ds) =>
      `<path class="district${highlight && highlight.has(ds.name) ? " on-route" : ""}" d="${ds.d}"><title>${esc(ds.name)}</title></path>`).join("");
    const labels = MAP.districts.map((ds) =>
      `<text class="district-label" x="${ds.lx}" y="${ds.ly}" style="font-size:${(7.5 * k).toFixed(1)}px">${esc(ds.name)}</text>`).join("");
    return `<defs>${PATTERN}</defs>
      <rect x="-400" y="-400" width="1200" height="1400" class="sea"/>
      <rect x="-400" y="-400" width="1200" height="1400" fill="url(#sea-tiles)"/>
      ${noSpain ? "" : `<path class="spain" d="${MAP.spain}"/>`}
      ${districts}${labels}
      ${x0 < 20 ? `<text class="sea-label" transform="translate(${Math.max(x0 + 14 * k, -12)} ${y0 + h * 0.62}) rotate(-90)" style="font-size:${(11 * k).toFixed(1)}px">ATLANTIC OCEAN</text>` : ""}`;
  }

  /* Portugal with its districts (home page), cropped tight to the country */
  function countryMap() {
    const fish = (v, x, y, w, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})"><svg x="0" y="0" width="${w}" height="${w / 3}" viewBox="0 0 120 40">${window.sardineSVG(v, w).replace(/^<svg[^>]*>|<\/svg>$/g, "")}</svg></g>`;
    return `<svg viewBox="-6 6 292 536" role="img" aria-label="Map of mainland Portugal and its 18 districts">
      ${baseLayers(1, -6, 6, 536, null, true)}
      ${fish(1, -4, 118, 46, -12)}${fish(0, 2, 210, 42, 8)}${fish(3, -6, 392, 44, -6)}
      <g class="map-rose" transform="translate(30 488) scale(.75)">
        <circle r="22" fill="#fff" stroke="var(--cobalt)" stroke-width="1" stroke-dasharray="3 2.5"/>
        <path d="M0-26L4-4 0 0-4-4z" fill="var(--ochre)"/><path d="M0 26L4 4 0 0-4 4z M26 0L4 4 0 0 4-4z M-26 0L-4 4 0 0-4-4z" fill="var(--cobalt)"/>
        <text y="-30" text-anchor="middle" style="font:700 9px var(--font-body);fill:var(--cobalt)">N</text>
      </g>
    </svg>`;
  }

  /* Map of a route (route page) */
  function routeMap(route) {
    const pts = route.stops.map((s) => project(s.lat, s.lng));
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const pad = isGetaway(route) ? 24 : 45;
    let x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad;
    let w = Math.max(...xs) + pad - x0, h = Math.max(...ys) + pad - y0;
    const ratio = 0.78, minH = isGetaway(route) ? 110 : 150;
    if (h < minH) { y0 -= (minH - h) / 2; h = minH; }
    if (w / h < ratio) { const nw = h * ratio; x0 -= (nw - w) / 2; w = nw; }
    else { const nh = w / ratio; y0 -= (nh - h) / 2; h = nh; }
    const getaway = isGetaway(route);
    const k = Math.min(1, Math.max(0.15, h / 560)) * (getaway ? 1.3 : 1);
    const highlight = new Set(route.stops.map((s) => s.district).filter(Boolean));

    let mainN = 0;
    const pinOf = (s, i) => {
      const [x, y] = pts[i];
      const big = s.kind === "main" || s.kind === "base";
      if (s.kind === "main") mainN++;
      const r = (big ? 16 : 11) * k, ir = r * 0.82;
      const badge = s.kind === "main"
        ? `<circle class="badge" cx="${x + r * 0.78}" cy="${y - r * 0.78}" r="${5.2 * k}"/><text class="badge-num" x="${x + r * 0.78}" y="${y - r * 0.78 + 0.3 * k}" style="font-size:${(7 * k).toFixed(1)}px">${mainN}</text>`
        : "";
      const busy = (dir) => route.stops.some((o, j) => j !== i && (pts[j][0] - x) * dir > 0 && Math.abs(pts[j][0] - x) < 62 * k && Math.abs(pts[j][1] - y) < 22 * k);
      const right = busy(1), leftBusy = busy(-1);
      const left = right && !leftBusy ? true : !right && !leftBusy ? (x < x0 + w * 0.3 || x > x0 + w * 0.8) : false;
      const label = big
        ? `<text class="lbl" x="${left ? x - r - 4 * k : x + r + 4 * k}" y="${y + 3.5 * k}" text-anchor="${left ? "end" : "start"}" style="font-size:${(10.5 * k).toFixed(1)}px">${esc(L(s.name))}</text>`
        : "";
      return `<g class="stop-pin ${big ? "main" : "via"}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(L(s.name))}">
          <title>${esc(L(s.name))}</title>
          <circle class="ring" cx="${x}" cy="${y}" r="${r}"/>
          <svg x="${x - ir}" y="${y - ir}" width="${ir * 2}" height="${ir * 2}" viewBox="0 0 32 32" overflow="visible">${iconBody(s.icon)}</svg>
          ${badge}${label}</g>`;
    };
    let small = "", bigPins = "";
    route.stops.forEach((s, i) => { const g = pinOf(s, i); if (s.kind === "main" || s.kind === "base") bigPins += g; else small += g; });

    const lines = getaway
      ? pts.slice(1).map((p) => {
          const d = spoke(pts[0], p);
          return `<path class="route-shadow spoke" d="${d}" style="stroke-width:${6 * k}px"/><path class="route-line spoke" d="${d}" style="stroke-width:${2.4 * k}px"/>`;
        }).join("")
      : (() => {
          const d = smoothPath(pts);
          return `<path class="route-shadow" d="${d}" style="stroke-width:${7 * k}px"/>
            <path class="route-line" d="${d}" style="stroke-width:${3.2 * k}px"/>
            <path class="route-dash" d="${d}" style="stroke-width:${1.2 * k}px;stroke-dasharray:${2 * k} ${4 * k}"/>`;
        })();

    return `<svg viewBox="${x0.toFixed(0)} ${y0.toFixed(0)} ${w.toFixed(0)} ${h.toFixed(0)}" role="img" aria-label="${esc(L(route.title))}">
      ${baseLayers(k, x0, y0, h, highlight)}
      ${lines}${small}${bigPins}
    </svg>`;
  }

  let animId = 0;
  function drawPath(el, from, to) { el.style.strokeDashoffset = from + (to - from); }
  function animateRoute(svg, getaway) {
    const id = ++animId;
    const pins = $$(".stop-pin", svg);
    pins.forEach((p) => p.classList.remove("on"));
    if (getaway) {
      const spokes = $$(".route-line.spoke", svg), shadows = $$(".route-shadow.spoke", svg);
      [...spokes, ...shadows].forEach((el) => { const L = el.getTotalLength(); el.style.strokeDasharray = `${L} ${L}`; el.style.strokeDashoffset = L; el.style.transition = "none"; });
      if (reduceMotion) { [...spokes, ...shadows].forEach((el) => (el.style.strokeDashoffset = 0)); pins.forEach((p) => p.classList.add("on")); return; }
      setTimeout(() => { if (id === animId) pins[0].classList.add("on"); }, 300);
      spokes.forEach((el, i) => setTimeout(() => {
        if (id !== animId) return;
        [el, shadows[i]].forEach((x) => { x.style.transition = "stroke-dashoffset .8s ease-out"; x.style.strokeDashoffset = 0; });
        setTimeout(() => { if (id === animId) pins[i + 1].classList.add("on"); }, 650);
      }, 800 + i * 550));
      return;
    }
    const line = $(".route-line", svg), shadow = $(".route-shadow", svg), dash = $(".route-dash", svg);
    const Lt = line.getTotalLength();
    const at = pins.map((p) => {
      const c = $("circle", p), cx = +c.getAttribute("cx"), cy = +c.getAttribute("cy");
      let best = 0, bd = Infinity;
      for (let l = 0; l <= Lt; l += 1.5) { const q = line.getPointAtLength(l); const dd = (q.x - cx) ** 2 + (q.y - cy) ** 2; if (dd < bd) { bd = dd; best = l; } }
      return best;
    });
    [line, shadow].forEach((el) => { el.style.strokeDasharray = `${Lt} ${Lt}`; el.style.strokeDashoffset = Lt; });
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
      const drawn = Lt * e;
      [line, shadow].forEach((el) => (el.style.strokeDashoffset = Lt - drawn));
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
  const SECTIONS = [["long", "long", "secLong", "secLongText", "castle"], ["medium", "medium", "secMedium", "secMediumText", "wave"], ["getaways", "getaway", "secGetaways", "secGetawaysText", "wine"]];
  function cover(r) {
    const ph = r.photo && (window.PHOTOS || {})[r.photo];
    if (ph) return `<img src="${esc(ph.src)}" alt="${esc(L(r.title))}" loading="lazy"><span class="credit">${esc(T("photo"))}: ${esc(ph.author)} · ${esc(ph.license)}</span>`;
    const key = r.coverIcon || (r.stops.find((s) => s.kind !== "via") || r.stops[0]).icon;
    return `<div class="cover-ph"><span class="cover-medallion">${window.iconSVG(key, 96)}</span><span class="cover-note">${esc(T("photoSoon"))}</span></div>`;
  }
  function card(r) {
    const meta = isGetaway(r)
      ? `<span>${esc(T("oneBase"))}</span><span>${r.stops.length - 1} ${esc(T("activities"))}</span>`
      : `<span>${mains(r).length} ${esc(T("stops"))}</span><span>≈ ${totalKm(r)} km</span>`;
    return `<a class="route-card" href="#route-${r.id}">
      <div class="route-card-photo">${cover(r)}<span class="route-card-badge">${r.days} ${esc(T("days"))}</span></div>
      <div class="route-card-body">
        <h3>${esc(L(r.title))}</h3>
        <p>${esc(L(r.tagline))}</p>
        <div class="route-meta">${meta}</div>
      </div></a>`;
  }
  function viewHome() {
    app.innerHTML = `
      <section class="intro"><div class="wrap intro-inner">
        <div class="intro-map">${countryMap()}</div>
        <div class="intro-text">
          <p class="eyebrow">${esc(T("introEyebrow"))}</p>
          <h1>${esc(T("introTitle"))}</h1>
          <p>${esc(T("introP1"))}</p>
          <p>${esc(T("introP2"))}</p>
          <p>${esc(T("introP3"))}</p>
          <p class="intro-sign">${esc(T("introEnd"))}</p>
          <p><a class="btn btn-primary" href="#routes">${esc(T("heroCta"))}</a></p>
        </div>
      </div></section>
      <div class="tile-band"></div>
      <div class="wrap routes-intro" id="routes"><div><p class="eyebrow">${esc(T("routesEyebrow"))}</p><h2>${esc(T("routesTitle"))}</h2></div>
        <div class="school" aria-hidden="true">${window.sardineSVG(0, 92)}${window.sardineSVG(2, 78)}${window.sardineSVG(4, 86)}</div></div>
      ${SECTIONS.map(([anchor, type, t, txt, icon]) => {
        const list = ROUTES.filter((r) => r.type === type);
        return `<section class="section route-section" id="${anchor}"><div class="wrap">
          <div class="section-head"><h2><span class="sec-icon" aria-hidden="true">${window.iconSVG(icon, 30)}</span>${esc(T(t))}</h2><p>${esc(T(txt))}</p></div>
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
    const s = r.stops[i], prev = isGetaway(r) ? null : r.stops[i - 1];
    const lead = (s.photos || []).map((id) => (window.PHOTOS || {})[id]).find(Boolean);
    if (tab === "overview") return `${lead ? `<figure class="lead-photo"><img src="${esc(lead.src)}" alt="${esc(lead.title)}"><figcaption>${esc(lead.author)} · ${esc(lead.license)}</figcaption></figure>` : ""}<p>${esc(L(s.overview))}</p>
      <div class="panel-actions">
        <a class="btn btn-primary" href="${gm.leg(prev, s)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(prev ? `${T("directionsFrom")} ${L(prev.name)}` : T("directions"))}</a>
        <a class="btn btn-ghost" href="${gm.place(s)}" target="_blank" rel="noopener">${ic("i-pin")}${esc(T("viewMap"))}</a></div>`;
    if (tab === "pictures") {
      const list = (s.photos || []).map((id) => (window.PHOTOS || {})[id]).filter(Boolean);
      const grid = list.length
        ? `<div class="photo-grid real">${list.map((ph) => `<figure><img src="${esc(ph.src)}" alt="${esc(ph.title)}" loading="lazy"><figcaption><a href="${esc(ph.page)}" target="_blank" rel="noopener">${esc(ph.author)}</a> · ${esc(ph.license)}</figcaption></figure>`).join("")}</div>`
        : `<div class="photo-grid">${'<div class="photo-ph"></div>'.repeat(6)}</div><p class="panel-hint">${esc(T("photosHere", { p: L(s.name) }))}</p>`;
      return `${grid}<div class="panel-actions"><a class="btn btn-ghost" href="${gm.photos(s)}" target="_blank" rel="noopener">${esc(T("seePhotos", { p: L(s.name) }))}</a></div>`;
    }
    return partnerList(s, tab);
  }

  function mainItem(r, s, i, n, leg) {
    const label = s.kind === "base" ? T("yourBase") : dayLabel(s);
    return `<li class="stop main" data-i="${i}" id="stop-${i}">${leg}
      <span class="stop-icon" aria-hidden="true">${window.iconSVG(s.icon, 30)}${n ? `<b>${n}</b>` : ""}</span>
      <button class="stop-head" aria-expanded="false" aria-controls="stop-body-${i}">
        <span><span class="day">${esc(label)}</span><h3>${esc(L(s.name))}</h3><span class="region">${esc(T("district"))}: ${esc(s.district || "")}</span></span>
        <svg class="chev" aria-hidden="true"><use href="#i-chev"/></svg>
      </button>
      <div class="stop-body" id="stop-body-${i}" hidden>
        <div class="tabs" role="tablist">${TABS.map(([k, l], j) => `<button class="tab" role="tab" data-tab="${k}" aria-selected="${j === 0}">${esc(T(l))}</button>`).join("")}</div>
        <div class="tab-panel" role="tabpanel"></div>
      </div></li>`;
  }
  function smallItem(s, i, from, leg, eyebrow) {
    return `<li class="stop via" data-i="${i}" id="stop-${i}">${leg}
      <span class="stop-icon small" aria-hidden="true">${window.iconSVG(s.icon, 22)}</span>
      <div class="via-card">
        ${(() => { const ph = (s.photos || []).map((id) => (window.PHOTOS || {})[id]).find(Boolean); return ph ? `<img class="via-photo" src="${esc(ph.src)}" alt="${esc(ph.title)}" loading="lazy" title="${esc(ph.author)} · ${esc(ph.license)}">` : ""; })()}
        <p class="via-eyebrow">${esc(eyebrow)}</p>
        <h4>${esc(L(s.name))}</h4>
        <p>${esc(L(s.text))}</p>
        <div class="panel-actions">
          <a class="btn btn-primary btn-sm" href="${gm.leg(from, s)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(T("directions"))}</a>
          <a class="btn btn-ghost btn-sm" href="${gm.place(s)}" target="_blank" rel="noopener">${ic("i-pin")}${esc(T("viewMap"))}</a>
        </div>
      </div></li>`;
  }

  function viewRoute(r) {
    const getaway = isGetaway(r);
    let n = 0, items;
    if (getaway) {
      const base = r.stops[0];
      items = mainItem(r, base, 0, 0, `<div class="leg">${ic("i-pin")}${esc(T("stayHere"))}</div>`) +
        `<li class="around-title"><h3>${esc(T("aroundBase"))}</h3></li>` +
        r.stops.slice(1).map((s, j) => smallItem(s, j + 1, base,
          `<div class="leg">${ic("i-car")}≈ ${legKm(r, j + 1)} km ${esc(T("fromBase"))}</div>`,
          T("cat")[s.category] || "")).join("");
    } else {
      items = r.stops.map((s, i) => {
        const prev = r.stops[i - 1];
        const leg = i === 0
          ? `<div class="leg">${ic("i-pin")}${esc(T("start"))}</div>`
          : `<div class="leg">${ic("i-car")}≈ ${legKm(r, i)} km ${esc(T("fromPrev"))} ${esc(L(prev.name))}</div>`;
        if (s.kind === "via") return smallItem(s, i, prev, leg, `${T("onTheWay")} · ${T("cat")[s.category] || ""}`);
        return mainItem(r, s, i, ++n, leg);
      }).join("");
    }

    const stats = getaway
      ? `<div class="stat"><b>${r.days}</b><span>${esc(T("statDays"))}</span></div>
         <div class="stat"><b>1</b><span>${esc(T("statBase"))}</span></div>
         <div class="stat"><b>${r.stops.length - 1}</b><span>${esc(T("statAround"))}</span></div>
         <div class="stat"><b>≤ ${maxKm(r)}</b><span>${esc(T("statRadius"))}</span></div>`
      : `<div class="stat"><b>${r.days}</b><span>${esc(T("statDays"))}</span></div>
         <div class="stat"><b>${mains(r).length}</b><span>${esc(T("statStops"))}</span></div>
         <div class="stat"><b>${vias(r).length}</b><span>${esc(T("statVia"))}</span></div>
         <div class="stat"><b>≈ ${totalKm(r)}</b><span>${esc(T("statKm"))}</span></div>`;

    app.innerHTML = `
      <section class="route-hero"><div class="wrap">
        <p class="crumbs"><a href="#${(SECTIONS.find((x) => x[1] === r.type) || SECTIONS[0])[0]}">${esc(T("breadcrumb"))}</a> / ${esc(L(r.title))}</p>
        <h1>${esc(L(r.title))}</h1>
        <p class="lead">${esc(L(r.summary))}</p>
        <div class="route-stats">${stats}</div>
        ${getaway ? "" : `<div class="route-actions"><a class="btn btn-primary" href="${gm.route(r)}" target="_blank" rel="noopener">${ic("i-dir")}${esc(T("fullRoute"))}</a></div>`}
      </div></section>
      <div class="wrap route-layout">
        <div class="map-col">
          <div class="map-frame" id="map-frame">${routeMap(r)}
            <button class="icon-btn replay" id="replay" aria-label="${esc(T("replay"))}" title="${esc(T("replay"))}">${ic("i-replay")}</button>
          </div>
          <p class="map-note">${esc(T("mapNote"))}</p>
        </div>
        <ol class="itinerary">${items}</ol>
      </div>`;

    const svg = $("#map-frame svg");
    animateRoute(svg, getaway);
    $("#replay").addEventListener("click", () => animateRoute(svg, getaway));

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
    const firstMain = r.stops.findIndex((s) => s.kind !== "via");
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
    if (sec || h === "routes") { setActive(sec ? sec[1] : null); requestAnimationFrame(() => $(`#${h}`).scrollIntoView()); }
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

  const fs = $("#footer-school"); if (fs) fs.innerHTML = [3, 1, 0, 2, 4].map((v) => window.sardineSVG(v, 46)).join("");
  applyStatic();
  route();
})();
