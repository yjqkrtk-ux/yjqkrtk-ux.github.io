/* AICAMERA Guidebook — Glossary Tooltips Runtime (SensorBook v1 compatible) */
(function () {
  "use strict";
  if (window.BookGlossary) return;
  const norm = (s) => String(s || "").normalize("NFC").replace(/\s+/g, " ").trim().toLowerCase();
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const unique = (names) => names.filter((name, i) => name && !names.slice(0, i).some((s) => norm(s) === norm(name)));

  function names(text) {
    text = String(text || "").replace(/`/g, "").trim();
    const out = [];
    let depth = 0, start = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "(") depth++;
      if (text[i] === ")") depth = Math.max(0, depth - 1);
      if (depth) continue;
      const slash = text[i] === "/" && /\s/.test(text[i - 1] || "") && /\s/.test(text[i + 1] || "");
      if (text[i] === "·" || slash) { out.push(text.slice(start, i).trim()); start = i + 1; }
    }
    out.push(text.slice(start).trim());
    return unique(out);
  }

  function indexTerms(terms) {
    const index = new Map();
    function put(alias, entry) {
      alias = norm(alias);
      if (!alias) return;
      const entries = index.get(alias) || [];
      entries.push(entry);
      index.set(alias, entries);
    }
    terms.forEach((term) => {
      const ko = names(term.ko), en = names(term.en), abbr = names(term.abbr);
      const titleFor = (parts, i, alias) => {
        const name = ko.length === parts.length ? ko[i] : (ko.length === 1 ? ko[0] : alias);
        const abbreviation = abbr.length === parts.length ? abbr[i] : (abbr.length === 1 ? abbr[0] : "");
        return unique([name, abbreviation]).join(" · ");
      };
      [term.ko, term.en, term.abbr].filter(Boolean).forEach((alias) => {
        put(alias, { term, title: unique([term.ko, names(term.abbr).length === 1 ? term.abbr : ""]).join(" · "), exact: true });
      });
      [ko, en, abbr].forEach((parts) => parts.forEach((alias, i) => {
        const title = titleFor(parts, i, alias);
        put(alias, { term, title, exact: parts.length === 1 });
        const bare = alias.replace(/\s*\([^()]*\)/g, "").trim();
        if (bare !== alias) put(bare, { term, title, exact: false });
      }));
    });
    const chapter = document.body.dataset.chapter || "";
    const best = new Map();
    index.forEach((entries, alias) => {
      entries.sort((a, b) => Number(b.exact) - Number(a.exact) ||
        Number((b.term.chapters || []).includes(chapter)) -
        Number((a.term.chapters || []).includes(chapter)));
      best.set(alias, entries[0]);
    });
    return best;
  }

  function annotate(main, index) {
    const aliases = [...index.keys()].filter((alias) => alias.length >= 2 || /[\uac00-\ud7a3]/.test(alias));
    aliases.sort((a, b) => b.length - a.length);
    if (!aliases.length) return { count: 0 };
    const pattern = new RegExp(aliases.map(escape).join("|"), "gi");
    const excluded = "a, button, input, select, textarea, label, output, script, style, pre, code, svg, canvas, math, .katex, .formula, .eq, .sim-controls, .sim-readout, .sim-view, .gl-item, .gl-list, [contenteditable], [data-no-glossary], [role=button], .gl-term, h1, h2, h3, h4";
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement.closest(excluded) || /\$\$|\\[([]/.test(node.data)
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [], bindings = new WeakMap(), seenTerms = new Set();
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const word = (c) => /[a-z0-9_]/i.test(c || "");
    let count = 0;
    nodes.forEach((node) => {
      const text = node.data, fragment = document.createDocumentFragment();
      let end = 0;
      for (const match of text.matchAll(pattern)) {
        const label = match[0], start = match.index;
        if ((word(label[0]) && word(text[start - 1])) ||
            (word(label.at(-1)) && word(text[start + label.length])) ||
            (/[\uac00-\ud7a3]/.test(label[0]) && /[\uac00-\ud7a3]/.test(text[start - 1] || ""))) continue;
        const entry = index.get(norm(label));
        if (!entry || seenTerms.has(entry.title)) continue;
        seenTerms.add(entry.title);
        fragment.append(text.slice(end, start));
        const span = document.createElement("span");
        span.className = "gl-term";
        span.tabIndex = 0;
        span.textContent = label;
        bindings.set(span, entry);
        fragment.append(span);
        end = start + label.length;
        count++;
      }
      if (end) { fragment.append(text.slice(end)); node.replaceWith(fragment); }
    });
    main.querySelectorAll(".term:not(:has(.gl-term))").forEach((span) => {
      if (span.closest(excluded)) return;
      const entry = index.get(norm(span.textContent));
      if (!entry) return;
      span.classList.add("gl-term"); span.tabIndex = 0;
      bindings.set(span, entry); count++;
    });

    const tooltip = document.createElement("div");
    tooltip.id = "book-glossary-tooltip";
    tooltip.className = "gl-tooltip no-math";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    document.body.append(tooltip);
    let active, timer, anchorRect;
    function hide() {
      clearTimeout(timer);
      if (active) active.removeAttribute("aria-describedby");
      active = null; tooltip.hidden = true;
    }
    function show(target) {
      if (!target) return;
      clearTimeout(timer);
      const entry = bindings.get(target);
      if (!entry) return;
      if (active) active.removeAttribute("aria-describedby");
      active = target;
      const title = document.createElement("strong"), definition = document.createElement("p");
      title.textContent = entry.title;
      definition.textContent = entry.term.def;
      tooltip.replaceChildren(title, definition);
      tooltip.hidden = false;
      target.setAttribute("aria-describedby", tooltip.id);
      const rect = target.getBoundingClientRect(), gap = 8;
      anchorRect = { left: rect.left, top: rect.top };
      const width = tooltip.offsetWidth, height = tooltip.offsetHeight;
      tooltip.style.left = Math.max(gap, Math.min(rect.left, innerWidth - width - gap)) + "px";
      tooltip.style.top = (rect.bottom + gap + height <= innerHeight - gap
        ? rect.bottom + gap : Math.max(gap, rect.top - height - gap)) + "px";
    }
    function closeSoon() {
      clearTimeout(timer);
      timer = setTimeout(() => { if (document.activeElement !== active) hide(); }, 150);
    }
    main.addEventListener("pointerover", (e) => { if (e.pointerType !== "touch") show(e.target.closest(".gl-term")); });
    main.addEventListener("pointerout", (e) => { if (e.target.closest(".gl-term")) closeSoon(); });
    main.addEventListener("focusin", (e) => show(e.target.closest(".gl-term")));
    main.addEventListener("focusout", (e) => { if (e.target.closest(".gl-term")) closeSoon(); });
    main.addEventListener("click", (e) => show(e.target.closest(".gl-term")));
    tooltip.addEventListener("pointerenter", () => clearTimeout(timer));
    tooltip.addEventListener("pointerleave", closeSoon);
    document.addEventListener("pointerdown", (e) => { if (!e.target.closest(".gl-term, .gl-tooltip")) hide(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
    window.addEventListener("scroll", (e) => {
      if (!active || tooltip.contains(e.target)) return;
      const rect = active.getBoundingClientRect();
      if (Math.abs(rect.left - anchorRect.left) > 1 || Math.abs(rect.top - anchorRect.top) > 1) hide();
    }, true);
    window.addEventListener("resize", hide);
    return { count };
  }

  function init() {
    const main = document.querySelector("main.chapter");
    const data = window.BOOK_GLOSSARY;
    if (!main || !data || !Array.isArray(data.terms)) return;
    const index = indexTerms(data.terms);
    annotate(main, index);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
  window.BookGlossary = { init };
})();
