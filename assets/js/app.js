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

  /* ---------- Markdown support (legacy) ----------
     RIMOSSO: ora il sito usa Jekyll, che renderizza il markdown server-side
     via {% include news.md %} con markdown="1". Il blocco precedente leggeva
     textContent dei div .md e li ri-renderizzava in JS — perdeva la struttura
     HTML (es. <span class="tag tag-publication">) e rompeva il rendering.
     Manteniamo solo il supporto per [data-md] esterno (fetch di .md remoti),
     che non viene usato di default ma può tornare utile in futuro.
  */
  const mdFetchNodes = document.querySelectorAll('[data-md]:not([data-md=""])');
  if (mdFetchNodes.length) {
    const ensureMarked = () => new Promise((resolve) => {
      if (window.marked) return resolve(window.marked);
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js';
      s.onload = () => resolve(window.marked);
      document.head.appendChild(s);
    });
    ensureMarked().then((marked) => {
      mdFetchNodes.forEach(async (el) => {
        const src = el.getAttribute('data-md');
        try {
          const r = await fetch(src);
          const text = await r.text();
          el.innerHTML = marked.parse(text, { breaks: false, gfm: true });
          el.classList.add('md-rendered');
        } catch (e) {
          console.warn('Markdown fetch failed', e);
        }
      });
    });
  }

})();
