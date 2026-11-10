/* Illustrated stop icons, drawn on a 32×32 grid.
   Use the key in routes.js as `icon: "castle"`. Add new ones here. */
(function () {
  const B = "#1b4a9c", D = "#0f2f66", O = "#e3a52f", C = "#e8735a", G = "#4f9a68",
        W = "#ffffff", S = "#e2cfa6", S2 = "#c9b183", K = "#7a4b2a", R = "#8e1f3b", L = "#8fc3ea";

  window.STOP_ICONS = {
    belem: `
      <path d="M3 27c3-1.5 5 1.5 8 0s5 1.5 8 0 5 1.5 8 0 3 0 2 0" fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round"/>
      <rect x="8" y="21" width="16" height="5" fill="${S2}"/>
      <rect x="11" y="9" width="10" height="12" fill="${S}"/>
      <path d="M11 9V7h2v2h1.5V7h2v2H18V7h2v2h1v0" fill="${S}"/>
      <path d="M14 21v-3a2 2 0 0 1 4 0v3z" fill="${D}"/>
      <rect x="15" y="12" width="2" height="3" rx="1" fill="${D}"/>
      <circle cx="10.5" cy="9" r="1.6" fill="${S2}"/><circle cx="21.5" cy="9" r="1.6" fill="${S2}"/>
      <path d="M16 3v4" stroke="${D}" stroke-width="1"/><path d="M16 3h3.5l-1 1.2 1 1.2H16z" fill="${C}"/>`,
    castle: `
      <path d="M4 27V11h3v2h2v-2h3v16zM20 27V11h3v2h2v-2h3v16z" fill="${S2}"/>
      <path d="M9 27V15h2v2h2v-2h2v2h2v-2h2v2h2v-2h0v12z" fill="${S}"/>
      <path d="M13 27v-5a3 3 0 0 1 6 0v5z" fill="${D}"/>
      <path d="M8 11V5" stroke="${D}" stroke-width="1"/><path d="M8 5h4l-1.2 1.4L12 8H8z" fill="${C}"/>
      <rect x="6" y="17" width="1.6" height="3" rx=".8" fill="${D}"/><rect x="24.4" y="17" width="1.6" height="3" rx=".8" fill="${D}"/>`,
    palace: `
      <rect x="4" y="15" width="12" height="12" fill="${C}"/>
      <path d="M4 15v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h0v2" fill="${C}"/>
      <rect x="16" y="10" width="11" height="17" fill="${O}"/>
      <path d="M16 10a5.5 5.5 0 0 1 11 0z" fill="${B}"/>
      <path d="M21.5 4.5v-2" stroke="${D}" stroke-width="1.2"/>
      <path d="M19.5 27v-4a2 2 0 0 1 4 0v4z" fill="${D}"/>
      <rect x="7" y="19" width="2" height="3" rx="1" fill="${W}"/><rect x="11" y="19" width="2" height="3" rx="1" fill="${W}"/>
      <rect x="20.5" y="14" width="2" height="3" rx="1" fill="${W}"/>`,
    lighthouse: `
      <path d="M5 8l7 3M27 8l-7 3M5 14l7-1M27 14l-7-1" stroke="${O}" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M12.5 27l1.5-15h4l1.5 15z" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M13.3 19h5.4l.4 4h-6.2zM13.9 13h4.2l.3 3h-4.8z" fill="${C}"/>
      <rect x="13" y="8" width="6" height="4" fill="${O}" stroke="${D}" stroke-width=".8"/>
      <path d="M12.5 8L16 5l3.5 3z" fill="${C}"/>
      <path d="M8 27h16" stroke="${S2}" stroke-width="2" stroke-linecap="round"/>`,
    monastery: `
      <path d="M6 27V13l4-4v18zM26 27V13l-4-4v18z" fill="${S2}"/>
      <path d="M10 27V12l6-7 6 7v15z" fill="${S}"/>
      <circle cx="16" cy="13" r="2.6" fill="${W}" stroke="${D}" stroke-width="1"/>
      <path d="M16 10.4v5.2M13.4 13h5.2" stroke="${D}" stroke-width=".7"/>
      <path d="M13 27v-6a3 3 0 0 1 6 0v6z" fill="${D}"/>
      <path d="M8 9V6M24 9V6M16 5V2" stroke="${S2}" stroke-width="1.4" stroke-linecap="round"/>`,
    sanctuary: `
      <path d="M8 17V8h3v2h10V8h3v9z" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M8 8l1.5-3L11 8M21 8l1.5-3L24 8" fill="${O}"/>
      <path d="M13 10a3 3 0 0 1 6 0" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M14.5 17v-3a1.5 1.5 0 0 1 3 0v3z" fill="${D}"/>
      <path d="M4 28h5v-2.5h3V23h3v-2h2v2h3v2.5h3V28h5" fill="none" stroke="${C}" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M12 21h8" stroke="${G}" stroke-width="1.6"/>`,
    templar: `
      <circle cx="16" cy="16" r="12" fill="${W}" stroke="${D}" stroke-width="1"/>
      <path d="M12.5 6.5h7L17.5 13.5l7-2v7l-7-2 2 7h-7l2-7-7 2v-7l7 2z" fill="${R}"/>`,
    temple: `
      <path d="M5 11l11-6 11 6z" fill="${S}"/>
      <rect x="5" y="11" width="22" height="3" fill="${S2}"/>
      <path d="M7 14h2.6v10H7zM12 14h2.6v10H12zM17.4 14H20v10h-2.6zM22.4 14H25v10h-2.6z" fill="${S}"/>
      <rect x="4" y="24" width="24" height="3" fill="${S2}"/>
      <path d="M27 24c1-3 2-3 3-3" stroke="${G}" stroke-width="1.4" stroke-linecap="round" fill="none"/>`,
    espigueiro: `
      <path d="M5 27h22" stroke="${G}" stroke-width="2" stroke-linecap="round"/>
      <path d="M8 27v-6M13 27v-6M19 27v-6M24 27v-6" stroke="${S2}" stroke-width="2"/>
      <rect x="6" y="19.5" width="20" height="2" rx="1" fill="${S2}"/>
      <rect x="7" y="11" width="18" height="8.5" fill="${S}"/>
      <path d="M10 12v6.5M13 12v6.5M16 12v6.5M19 12v6.5M22 12v6.5" stroke="${S2}" stroke-width="1"/>
      <path d="M5.5 11.5L16 7l10.5 4.5z" fill="${C}"/>
      <path d="M8 7V3.5M6.5 5h3M24 7V3.5M22.5 5h3" stroke="${D}" stroke-width="1.1"/>`,
    boulder: `
      <ellipse cx="17" cy="12" rx="12" ry="8" fill="#b8b2a6"/>
      <path d="M9 9c3-3 9-4 13-1" stroke="#d9d4ca" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <rect x="9" y="17" width="14" height="10" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <rect x="14" y="21" width="4" height="6" fill="${B}"/>
      <rect x="10.5" y="19" width="2.4" height="2.4" fill="${O}"/>`,
    striped: `
      <path d="M6 14l10-8 10 8z" fill="${C}"/>
      <rect x="8" y="14" width="16" height="13" fill="${W}"/>
      <path d="M9.5 14v13M13 14v13M19 14v13M22.5 14v13" stroke="${C}" stroke-width="1.8"/>
      <rect x="14.3" y="19" width="3.4" height="8" fill="${B}"/>
      <path d="M4 28h24" stroke="${O}" stroke-width="2" stroke-linecap="round"/>`,
    moliceiro: `
      <path d="M3 25c3-1.5 5 1.5 8 0s5 1.5 8 0 5 1.5 8 0" fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 21h20c2 0 3-3 3-9-2 2-3 5-5 6H6c-1-3-1-5-2-6 0 4-1 7 0 9z" fill="${O}"/>
      <path d="M6 18h16" stroke="${C}" stroke-width="2"/>
      <path d="M8 20h3l1-2M14 20l1-2h3" stroke="${B}" stroke-width="1.2" fill="none"/>
      <path d="M13 18V6" stroke="${K}" stroke-width="1.2"/>
      <path d="M13.6 6.5l6 9.5h-6z" fill="${W}" stroke="${D}" stroke-width=".6"/>`,
    rabelo: `
      <path d="M3 26c3-1.5 5 1.5 8 0s5 1.5 8 0 5 1.5 8 0" fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round"/>
      <path d="M3 19h26l-3 4H7z" fill="${K}"/>
      <path d="M16 19V4" stroke="${K}" stroke-width="1.3"/>
      <path d="M10 6h12v10H10z" fill="${W}" stroke="${D}" stroke-width=".7"/>
      <path d="M10 10h12" stroke="${C}" stroke-width="1.4"/>
      <ellipse cx="7.5" cy="17" rx="2.2" ry="2" fill="${S2}" stroke="${K}" stroke-width=".7"/>
      <ellipse cx="24.5" cy="17" rx="2.2" ry="2" fill="${S2}" stroke="${K}" stroke-width=".7"/>`,
    wave: `
      <path d="M3 26c1-9 6-17 15-17 5 0 9 3 9 8-3-3-8-2-8 2 0 3 3 4 6 3-2 3-6 4-9 4H3z" fill="${B}"/>
      <path d="M18 9c5 0 9 3 9 8-3-3-8-2-8 2" fill="none" stroke="${W}" stroke-width="1.4"/>
      <path d="M2 28h28" stroke="${L}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="26" cy="7" r="3" fill="${O}"/>`,
    surf: `
      <circle cx="23" cy="8" r="3.4" fill="${O}"/>
      <path d="M7 27C5 21 12 9 21 5c3 5-4 17-11 22z" fill="${C}"/>
      <path d="M9 25C9 19 14 11 19.5 7" stroke="${W}" stroke-width="1.6" fill="none"/>
      <path d="M2 28c3-1.5 5 1.5 8 0s5 1.5 8 0 5 1.5 8 0" fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round"/>`,
    pastry: `
      <path d="M4 16h24l-3 9H7z" fill="#d58f3c"/>
      <path d="M6 18.5h20M7.5 21.5h17" stroke="#b56d22" stroke-width="1"/>
      <ellipse cx="16" cy="15" rx="12" ry="4.5" fill="#f6cf55"/>
      <ellipse cx="16" cy="15" rx="12" ry="4.5" fill="none" stroke="#d58f3c" stroke-width="1.4"/>
      <circle cx="12" cy="14" r="1.6" fill="#7a3b12"/><circle cx="18" cy="16" r="1.3" fill="#7a3b12"/><circle cx="20" cy="13.3" r="1" fill="#9a5520"/>`,
    cheese: `
      <path d="M4 15l18-7 6 5v12H4z" fill="#f4d675"/>
      <path d="M4 15h24v10H4z" fill="#f0c94c"/>
      <path d="M4 15l18-7 6 5" fill="none" stroke="#c9a032" stroke-width="1"/>
      <circle cx="10" cy="20" r="1.8" fill="#d9ad35"/><circle cx="18" cy="22" r="1.3" fill="#d9ad35"/><circle cx="23" cy="18.5" r="1.1" fill="#d9ad35"/>
      <path d="M4 25h24" stroke="#c9a032" stroke-width="1"/>`,
    soup: `
      <path d="M11 9c-1.5-2 1.5-3 0-5M16 9c-1.5-2 1.5-3 0-5M21 9c-1.5-2 1.5-3 0-5" stroke="${S2}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M5 13h22v4a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8z" fill="${C}"/>
      <rect x="4" y="11" width="24" height="3" rx="1.5" fill="${R}"/>
      <ellipse cx="16" cy="12.5" rx="4" ry="1.6" fill="#9a958b"/>
      <path d="M2.5 15h3M26.5 15h3" stroke="${R}" stroke-width="2" stroke-linecap="round"/>`,
    wine: `
      <path d="M20 4c3 2 5 2 7 1-1 3-4 5-7 4z" fill="${G}"/>
      <circle cx="21" cy="12" r="2.2" fill="#6b2a6e"/><circle cx="24.5" cy="12.5" r="2.2" fill="#6b2a6e"/>
      <circle cx="22.8" cy="15.6" r="2.2" fill="#6b2a6e"/><circle cx="26" cy="16" r="2" fill="#6b2a6e"/><circle cx="24.4" cy="19" r="2" fill="#6b2a6e"/>
      <path d="M6 6h11c0 6-2 10-5.5 10S6 12 6 6z" fill="${W}" stroke="${D}" stroke-width="1"/>
      <path d="M6.6 9.5h9.8c-.5 3.5-2.2 5.5-4.9 5.5s-4.4-2-4.9-5.5z" fill="${R}"/>
      <path d="M11.5 16v8M7.5 25h8" stroke="${D}" stroke-width="1.4" stroke-linecap="round"/>`,
    wheat: `
      <path d="M16 29V8" stroke="${K}" stroke-width="1.2"/>
      <g fill="${O}">
        <ellipse cx="16" cy="6" rx="1.6" ry="3"/>
        <ellipse cx="13.3" cy="10" rx="1.5" ry="2.8" transform="rotate(-30 13.3 10)"/><ellipse cx="18.7" cy="10" rx="1.5" ry="2.8" transform="rotate(30 18.7 10)"/>
        <ellipse cx="13.3" cy="14.5" rx="1.5" ry="2.8" transform="rotate(-30 13.3 14.5)"/><ellipse cx="18.7" cy="14.5" rx="1.5" ry="2.8" transform="rotate(30 18.7 14.5)"/>
        <ellipse cx="13.3" cy="19" rx="1.5" ry="2.8" transform="rotate(-30 13.3 19)"/><ellipse cx="18.7" cy="19" rx="1.5" ry="2.8" transform="rotate(30 18.7 19)"/>
      </g>
      <path d="M16 24c-3-1-5-3-6-5M16 25c3-1 5-3 6-5" stroke="${G}" stroke-width="1.3" fill="none"/>`,
    viewpoint: `
      <circle cx="23" cy="9" r="4" fill="${O}"/>
      <path d="M2 24c4-6 8-9 12-9s6 3 9 3 5-2 7-3v12H2z" fill="${G}"/>
      <path d="M2 27c5-4 10-5 15-4s9 1 13-1v6H2z" fill="#3c7f55"/>
      <path d="M17 12a3 3 0 1 1 6 0v3h-6z" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M19.5 9.5v-2" stroke="${D}" stroke-width="1"/>
      <path d="M4 20c3-1 6-1 8 0" stroke="${L}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`,
    rockart: `
      <path d="M3 25c0-9 5-17 14-18 7-1 12 4 12 11 0 5-3 9-8 9H6c-2 0-3-1-3-2z" fill="#c8c0b1"/>
      <path d="M8 23c2-3 6-4 10-4" stroke="#a69c8a" stroke-width="1" fill="none"/>
      <g fill="none" stroke="${K}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18c2-2 7-2 10-1l3-4 2 1-2 3"/>
        <path d="M9 18l-1 4M12 18.5l-.5 4M17 18l.5 4M19.5 17.5l1 3.5"/>
        <path d="M9 18c-1-1-2-1-3 0"/>
        <path d="M21 13l1-2M23 13.5l1.5-1.5"/>
      </g>`,
    garden: `
      <path d="M4 27h24" stroke="${S2}" stroke-width="2" stroke-linecap="round"/>
      <path d="M6 26c0-4 2-6 5-6s5 2 5 6zM16 26c0-4 2-6 5-6s5 2 5 6z" fill="${G}"/>
      <path d="M13 26V12h6v14" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M16 12V6" stroke="${D}" stroke-width="1"/>
      <path d="M12 12h8l-4-4z" fill="${B}"/>
      <circle cx="16" cy="5" r="1.6" fill="${O}"/>
      <path d="M14.5 18h3M14.5 21h3" stroke="${B}" stroke-width="1"/>
      <circle cx="8" cy="17" r="2.6" fill="#3c7f55"/><circle cx="24" cy="17" r="2.6" fill="#3c7f55"/>
      <path d="M8 19.5V21M24 19.5V21" stroke="${K}" stroke-width="1"/>`,
    beach: `
      <circle cx="24" cy="8" r="3.6" fill="${O}"/>
      <path d="M2 25c4-2 8-2 12 0s8 2 12 0 4-1 4-1v6H2z" fill="${L}"/>
      <path d="M2 27c5 2 10 2 14 0s10-2 14 0v3H2z" fill="#f0d9a0"/>
      <path d="M13 25L17 10" stroke="${K}" stroke-width="1.3"/>
      <path d="M5 13c3-6 13-7 18-1z" fill="${C}"/>
      <path d="M9.5 12.6c1.5-3.5 5-5.5 8-5M14 12.3c.5-2.5 2-4.5 3.5-4.8" stroke="${W}" stroke-width="1.6" fill="none"/>`,
    whitehouse: `
      <path d="M3 27h26" stroke="${S2}" stroke-width="2" stroke-linecap="round"/>
      <rect x="5" y="13" width="22" height="13" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M5 13h22v2H5zM5 24h22v2H5z" fill="${B}"/>
      <rect x="14" y="18" width="4" height="8" fill="${B}"/>
      <rect x="8" y="17" width="3" height="3" fill="${B}"/><rect x="21" y="17" width="3" height="3" fill="${B}"/>
      <rect x="20" y="7" width="3" height="6" fill="${W}" stroke="${D}" stroke-width=".8"/>
      <path d="M19.5 7h4" stroke="${B}" stroke-width="1.4"/>`,
    cliffs: `
      <circle cx="25" cy="7" r="3.2" fill="${O}"/>
      <path d="M2 28V14c3-3 6-2 8 0l1 6c1-2 3-2 4 0v8z" fill="#d99a4e"/>
      <path d="M17 28V12c3-4 8-4 11 0v16z" fill="#e2ad62"/>
      <path d="M20 28v-5a3 3 0 0 1 5 0v5z" fill="${L}"/>
      <path d="M4 18c2 0 3 1 4 2M19 16c2 0 4 1 6 1" stroke="#b97935" stroke-width="1" fill="none"/>
      <path d="M2 28c4-2 8 2 12 0s8 2 12 0 4 0 4 0" stroke="${B}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    cataplana: `
      <path d="M11 6c-1-2 1-3 0-5M16 6c-1-2 1-3 0-5M21 6c-1-2 1-3 0-5" stroke="${S2}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M4 16a12 9 0 0 1 24 0z" fill="#d07a3c"/>
      <path d="M4 16a12 7 0 0 0 24 0z" fill="#b8612a"/>
      <path d="M4 16h24" stroke="#8f4a1e" stroke-width="1.4"/>
      <path d="M9 12a7 4 0 0 1 14 0" stroke="#f0a35c" stroke-width="1.2" fill="none"/>
      <rect x="14" y="5.5" width="4" height="2.5" rx="1" fill="#8f4a1e"/>
      <path d="M27 16h3M2 16h3" stroke="#8f4a1e" stroke-width="2" stroke-linecap="round"/>`,
    sardine: `
      <path d="M3 18c3-4 9-6 17-5l6-4c-1 3-1 6 0 9l-6-4c-8 1-14-1-17 4z" fill="#9fb6dd"/>
      <path d="M3 18c3-4 9-6 17-5l6-4c-1 3-1 6 0 9" fill="none" stroke="${D}" stroke-width="1"/>
      <path d="M8 15.5c3 1 7 1 11-1" stroke="${C}" stroke-width="1.4" fill="none"/>
      <circle cx="6.5" cy="16.6" r="1" fill="${D}"/>
      <path d="M4 25h24" stroke="${K}" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M6 22h20M6 25.5h20" stroke="${K}" stroke-width=".8" opacity=".5"/>
      <path d="M8 28c2-2 4-2 6 0M18 28c2-2 4-2 6 0" stroke="${C}" stroke-width="1.4" fill="none"/>`
  };

  window.iconSVG = function (key, size) {
    const body = window.STOP_ICONS[key] || window.STOP_ICONS.castle;
    return `<svg viewBox="0 0 32 32" width="${size || 32}" height="${size || 32}" aria-hidden="true">${body}</svg>`;
  };
})();

/* Painted sardines: decorative motif in the spirit of Portuguese ceramic sardines.
   window.sardineSVG(variant 0-4, width) */
(function () {
  let n = 0;
  const BODY = "M6 20C18 7 62 3 92 13L114 3c-3 6-4 11-1 17-3 6-2 11 1 17L92 27C62 37 18 33 6 20Z";
  const V = [
    // coral bands with white dots
    (id) => `<rect width="120" height="40" fill="#e8735a"/>
      <path d="M30 0v40M52 0v40M74 0v40" stroke="#f3c64f" stroke-width="7"/>
      <g fill="#fff">${[18, 41, 63, 85].map((x) => `<circle cx="${x}" cy="14" r="1.6"/><circle cx="${x}" cy="26" r="1.6"/>`).join("")}</g>`,
    // azulejo blue with white scales
    (id) => `<rect width="120" height="40" fill="#1b4a9c"/>
      <g fill="none" stroke="#fff" stroke-width="1.3">${[0, 1, 2].map((r) => [...Array(12)].map((_, i) => `<path d="M${i * 10 + (r % 2) * 5} ${10 + r * 9}a5 5 0 0 0 10 0"/>`).join("")).join("")}</g>
      <circle cx="60" cy="20" r="4" fill="#e8735a"/>`,
    // olive green with little flowers
    (id) => `<rect width="120" height="40" fill="#5a9e6f"/>
      ${[[30, 15], [50, 25], [70, 14], [88, 23]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="4.2" fill="#f7d36a"/><circle r="1.8" fill="#e8735a"/></g>`).join("")}
      <path d="M20 30c10-4 20-4 30 0s20 4 30 0" stroke="#d6efd2" stroke-width="1.4" fill="none"/>`,
    // yellow with blue zig-zag
    (id) => `<rect width="120" height="40" fill="#f3c64f"/>
      <path d="M14 20l6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6" stroke="#1b4a9c" stroke-width="2.4" fill="none"/>
      <path d="M14 29h82M14 11h82" stroke="#e8735a" stroke-width="1.6" stroke-dasharray="3 3"/>`,
    // silver-pink with heart
    (id) => `<rect width="120" height="40" fill="#f6d5cf"/>
      <path d="M0 8h120M0 32h120" stroke="#9fb6dd" stroke-width="5"/>
      <path d="M60 25c-6-4-9-7-9-10a4 4 0 0 1 9-1 4 4 0 0 1 9 1c0 3-3 6-9 10z" fill="#c8384a"/>`
  ];
  window.sardineSVG = function (v, w) {
    const id = "sd" + ++n;
    return `<svg viewBox="0 0 120 40" width="${w || 120}" height="${(w || 120) / 3}" aria-hidden="true" class="sardine">
      <defs><clipPath id="${id}"><path d="${BODY}"/></clipPath></defs>
      <g clip-path="url(#${id})">${V[v % V.length](id)}</g>
      <path d="${BODY}" fill="none" stroke="#0f2f66" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M26 11c4 5 4 13 0 18" fill="none" stroke="#0f2f66" stroke-width="1.4"/>
      <circle cx="16" cy="18" r="3.4" fill="#fff" stroke="#0f2f66" stroke-width="1.2"/><circle cx="16.6" cy="18" r="1.6" fill="#0f2f66"/>
    </svg>`;
  };
})();
