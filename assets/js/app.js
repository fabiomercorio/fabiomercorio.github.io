// =====================================================
// Fabio Mercorio — site interactions
// =====================================================

(function () {
  'use strict';

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const KEY = 'fm-theme';
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(KEY, next);
  });

  /* ---------- Mobile nav ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-nav-toggle]');
    if (!t) return;
    const list = document.querySelector('.nav-links');
    if (list) list.classList.toggle('is-open');
  });

  /* ---------- Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Stagger reveal helper ---------- */
  document.querySelectorAll('[data-stagger]').forEach((parent) => {
    const kids = parent.querySelectorAll('.reveal');
    kids.forEach((el, i) => {
      el.style.transitionDelay = (i * 60) + 'ms';
    });
  });

  /* ---------- Markdown support ----------
     Any element with [data-md], [data-md-from], or class "md" has its inner content parsed as Markdown.
     - data-md="path/to/file.md"   → fetch the file (works when served via http)
     - data-md-from="#some-id"     → read text from another element (e.g. <script type="text/markdown" id="...">)
     - .md or [data-md] (no value) → parse the element's own text content
  */
  const mdNodes = document.querySelectorAll('[data-md], [data-md-from], .md');
  if (mdNodes.length) {
    const ensureMarked = () => new Promise((resolve) => {
      if (window.marked) return resolve(window.marked);
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js';
      s.onload = () => resolve(window.marked);
      document.head.appendChild(s);
    });
    ensureMarked().then((marked) => {
      const parse = (text) => marked.parse(text, { breaks: false, gfm: true });
      const stripIndent = (s) => {
        const lines = s.replace(/^\n+/, '').split('\n');
        const indent = lines.filter(l => l.trim()).reduce((m, l) => Math.min(m, l.match(/^\s*/)[0].length), Infinity);
        return lines.map(l => l.slice(isFinite(indent) ? indent : 0)).join('\n');
      };
      mdNodes.forEach(async (el) => {
        const fromSel = el.getAttribute('data-md-from');
        const src = el.getAttribute('data-md');
        let text;
        if (fromSel) {
          const source = document.querySelector(fromSel);
          text = source ? source.textContent : '';
        } else if (src && src.length > 0) {
          try {
            const r = await fetch(src);
            text = await r.text();
          } catch (e) {
            console.warn('Markdown fetch failed', e);
            return;
          }
        } else {
          text = el.textContent;
        }
        el.innerHTML = parse(stripIndent(text || ''));
        el.classList.add('md-rendered');
      });
    });
  }

})();
