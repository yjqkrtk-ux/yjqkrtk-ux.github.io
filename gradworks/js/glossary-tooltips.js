/* ==========================================================================
   Shared Glossary Hover Tooltip Highlighter (SensorBook style)
   ========================================================================== */
(function () {
  if (window.BookGlossary) return;
  const data = window.BOOK_GLOSSARY;
  if (!data || !Array.isArray(data.terms) || !data.terms.length) return;

  const SKIP_TAGS = new Set([
    "A", "BUTTON", "CODE", "PRE", "SCRIPT", "STYLE", "SVG", "CANVAS",
    "INPUT", "SELECT", "TEXTAREA", "OUTPUT", "KBD", "MATH", "H1", "H2", "H3", "H4",
    "FIGCAPTION", "SUMMARY", "TH", "TEXT", "TSPAN", "G", "DEFS", "FOREIGNOBJECT"
  ]);
  const SKIP_CLASSES = [
    "katex", "formula", "math-block", "sim", "sim-card", "sb-topbar", "sb-drawer",
    "sb-toc", "sb-pager", "gl-term", "src", "diagram", "svg-wrap", "inspector-box",
    "ch-card", "numbers", "paths", "flow", "filter-row", "gl-list", "glossary-grid"
  ];

  const entries = [];
  const byKey = new Map();

  data.terms.forEach((item, idx) => {
    const id = "t" + idx;
    byKey.set(id, item);
    const candidates = new Set();
    if (item.ko && item.ko.length >= 2) candidates.add(item.ko.trim());
    if (item.abbr && item.abbr.length >= 2) candidates.add(item.abbr.trim());
    if (item.en && item.en.length >= 3 && item.en.length <= 28) candidates.add(item.en.trim());
    candidates.forEach(surface => {
      if (surface.length < 2) return;
      entries.push({ surface, id, len: surface.length, isAscii: /^[\x00-\x7F]+$/.test(surface) });
    });
  });

  entries.sort((a, b) => b.len - a.len);
  const surfaceToEntry = new Map();
  entries.forEach(e => {
    const k = e.isAscii ? e.surface.toLowerCase() : e.surface;
    if (!surfaceToEntry.has(k)) surfaceToEntry.set(k, e);
  });

  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  const patternParts = entries.map(e => escRe(e.surface));
  if (!patternParts.length) return;
  const masterRe = new RegExp("(" + patternParts.join("|") + ")", "gi");

  function isBoundaryOk(text, start, end, isAscii) {
    const prev = start > 0 ? text.charCodeAt(start - 1) : 32;
    const next = end < text.length ? text.charCodeAt(end) : 32;
    const isWordChar = c => (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || c === 95;
    const isHangul = c => (c >= 0xAC00 && c <= 0xD7A3) || (c >= 0x3131 && c <= 0x318E);
    if (isAscii) {
      if (isWordChar(prev) || isWordChar(next)) return false;
      return true;
    } else {
      if (isHangul(prev)) return false;
      return true;
    }
  }

  function shouldSkipNode(node) {
    let cur = node.parentElement;
    while (cur) {
      if (cur.namespaceURI === "http://www.w3.org/2000/svg") return true;
      const tn = (cur.tagName || "").toUpperCase();
      if (SKIP_TAGS.has(tn)) return true;
      if (cur.classList) {
        for (let i = 0; i < SKIP_CLASSES.length; i++) {
          if (cur.classList.contains(SKIP_CLASSES[i])) return true;
        }
      }
      cur = cur.parentElement;
    }
    return false;
  }

  function highlightContainer(root, seenIds) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let n;
    while ((n = walker.nextNode())) {
      if (!n.nodeValue || n.nodeValue.trim().length < 2) continue;
      if (shouldSkipNode(n)) continue;
      textNodes.push(n);
    }

    textNodes.forEach(tNode => {
      const text = tNode.nodeValue;
      masterRe.lastIndex = 0;
      let m;
      let lastIdx = 0;
      let frag = null;

      while ((m = masterRe.exec(text)) !== null) {
        const matchStr = m[0];
        const start = m.index;
        const end = start + matchStr.length;
        const lookupKey = /^[\x00-\x7F]+$/.test(matchStr) ? matchStr.toLowerCase() : matchStr;
        const entry = surfaceToEntry.get(lookupKey) || surfaceToEntry.get(matchStr);
        if (!entry) continue;
        if (seenIds.has(entry.id)) continue;
        if (!isBoundaryOk(text, start, end, entry.isAscii)) continue;

        if (!frag) frag = document.createDocumentFragment();
        if (start > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, start)));

        const span = document.createElement("span");
        span.className = "gl-term";
        span.dataset.glId = entry.id;
        span.tabIndex = 0;
        span.textContent = matchStr;
        frag.appendChild(span);

        seenIds.add(entry.id);
        lastIdx = end;
      }

      if (frag) {
        if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));
        if (tNode.parentNode) tNode.parentNode.replaceChild(frag, tNode);
      }
    });
  }

  let tipEl = null;
  function ensureTip() {
    if (tipEl) return tipEl;
    tipEl = document.createElement("div");
    tipEl.className = "gl-tooltip";
    tipEl.setAttribute("role", "tooltip");
    document.body.appendChild(tipEl);
    return tipEl;
  }

  function showTip(target) {
    const id = target.dataset.glId;
    const item = byKey.get(id);
    if (!item) return;
    const tip = ensureTip();
    const abbrHtml = item.abbr ? `<span class="gl-tooltip-abbr">${item.abbr}</span>` : "";
    const enHtml = item.en ? `<span class="gl-tooltip-en">${item.en}</span>` : "";
    tip.innerHTML =
      `<div class="gl-tooltip-head"><span class="gl-tooltip-ko">${item.ko || ""}</span>${abbrHtml}${enHtml}</div>` +
      `<div class="gl-tooltip-def">${item.def || ""}</div>`;
    tip.classList.add("visible");

    const rect = target.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    let top = rect.bottom + 8;
    if (top + tipRect.height > window.innerHeight - 12) {
      top = Math.max(12, rect.top - tipRect.height - 8);
    }
    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    left = Math.max(12, Math.min(window.innerWidth - tipRect.width - 12, left));
    tip.style.top = top + "px";
    tip.style.left = left + "px";
  }

  function hideTip() {
    if (tipEl) tipEl.classList.remove("visible");
  }

  function boot() {
    if (document.body && document.body.dataset.chapter === "notes") return;
    const mains = document.querySelectorAll("main.chapter");
    if (mains.length > 1) {
      mains.forEach(m => {
        const wrap = m.closest("[data-slug]");
        if (wrap && wrap.dataset.slug === "notes") return;
        highlightContainer(m, new Set());
      });
    } else {
      const seen = new Set();
      const root = document.querySelector("main.chapter") || document.querySelector("main") || document.body;
      highlightContainer(root, seen);
    }

    document.addEventListener("mouseover", e => {
      const t = e.target.closest && e.target.closest(".gl-term");
      if (t) showTip(t);
    });
    document.addEventListener("mouseout", e => {
      const t = e.target.closest && e.target.closest(".gl-term");
      if (t) hideTip();
    });
    document.addEventListener("focusin", e => {
      const t = e.target.closest && e.target.closest(".gl-term");
      if (t) showTip(t);
    });
    document.addEventListener("focusout", e => {
      const t = e.target.closest && e.target.closest(".gl-term");
      if (t) hideTip();
    });
    window.addEventListener("scroll", hideTip, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    setTimeout(boot, 60);
  }

  window.BookGlossary = { highlightContainer, byKey };
})();
