// ===========================================================
// Publications page — chart.js, filters, search, bibtex modal
// ===========================================================

(async function () {
  'use strict';

  const ME = ['fabio mercorio', 'mercorio'];
  const ORDER = ['Journal', 'Conference', 'Preprint', 'Book', 'Other'];

  // --- read CSS variables to keep chart in sync with theme ---
  function v(name, fb) {
    const x = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return x || fb;
  }
  function paletteFor(cat) {
    switch (cat) {
      case 'Journal':    return v('--indigo',      '#3833D9');
      case 'Conference': return v('--indigo-deep', '#1F1B8C');
      case 'Preprint':   return v('--coral',       '#B85842');
      case 'Book':       return v('--ink',         '#1A1814');
      default:           return v('--ink-faint',   '#9A9180');
    }
  }

  // --- load data (from window.PUBLICATIONS, set by assets/data/publications.js) ---
  let pubs = (window.PUBLICATIONS && Array.isArray(window.PUBLICATIONS)) ? window.PUBLICATIONS : [];
  if (!pubs.length) {
    // Fallback: try fetching JSON if data file not loaded (e.g. served via http).
    try {
      const r = await fetch('assets/data/publications.json');
      pubs = await r.json();
    } catch (e) {}
  }
  if (!pubs.length) {
    document.getElementById('pub-list').innerHTML =
      '<p style="padding:32px 0;color:var(--ink-soft);">Could not load publications.</p>';
    return;
  }

  // --- aggregate ---
  function aggregate() {
    const agg = {};
    let minY = Infinity, maxY = -Infinity;
    for (const p of pubs) {
      if (!p.year || p.year < 2000) continue;
      minY = Math.min(minY, p.year);
      maxY = Math.max(maxY, p.year);
      agg[p.year] = agg[p.year] || {};
      const cat = ORDER.includes(p.category) ? p.category : 'Other';
      agg[p.year][cat] = (agg[p.year][cat] || 0) + 1;
    }
    const years = [];
    for (let y = minY; y <= maxY; y++) years.push(y);
    return { agg, years, minY, maxY };
  }

  // --- stats ---
  function renderStats() {
    const { years } = aggregate();
    const total = pubs.length;
    const journals = pubs.filter(p => p.category === 'Journal').length;
    const confs = pubs.filter(p => p.category === 'Conference').length;
    const yearSpan = years.length > 0 ? `${years[0]}–${years[years.length - 1]}` : '—';
    const recentN = pubs.filter(p => p.year >= 2024).length;

    const html = [
      { l: 'Total', v: total, x: yearSpan },
      { l: 'Journal articles', v: journals, x: `${Math.round(100 * journals / total)}% of total` },
      { l: 'Conference papers', v: confs, x: `${Math.round(100 * confs / total)}% of total` },
      { l: 'Since 2024', v: recentN, x: 'last three years' }
    ].map(s => `
      <div class="stat">
        <div class="stat-label">${s.l}</div>
        <div class="stat-value">${s.v}</div>
        <div class="stat-extra">${s.x}</div>
      </div>`).join('');
    document.getElementById('pub-stats').innerHTML = html;
  }

  // --- chart ---
  let chart = null;
  function buildChart() {
    const ctx = document.getElementById('pub-chart').getContext('2d');
    const { agg, years } = aggregate();

    const datasets = ORDER.map(cat => {
      const data = years.map(y => agg[y]?.[cat] || 0);
      const has = data.some(v => v > 0);
      if (!has) return null;
      return {
        label: cat,
        data,
        backgroundColor: paletteFor(cat),
        borderRadius: { topLeft: 3, topRight: 3, bottomLeft: 0, bottomRight: 0 },
        borderSkipped: false,
        borderWidth: 0,
        hoverBackgroundColor: paletteFor(cat),
        categoryPercentage: 0.78,
        barPercentage: 0.92,
      };
    }).filter(Boolean);

    const inkSoft = v('--ink-soft', '#5C5C5C');
    const inkFaint = v('--ink-faint', '#8A8A85');
    const line = v('--line', 'rgba(26,26,26,0.10)');
    const bg = v('--bg-elev', '#FFFFFF');
    const ink = v('--ink', '#1A1A1A');

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: 'bar',
      data: { labels: years.map(String), datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 750, easing: 'easeOutQuart' },
        layout: { padding: { top: 16, right: 4, bottom: 0, left: 0 } },
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              color: ink,
              font: { family: 'Inter, system-ui, sans-serif', size: 12, weight: '500' },
              boxWidth: 10,
              boxHeight: 10,
              padding: 14,
              usePointStyle: true,
              pointStyle: 'rectRounded'
            }
          },
          tooltip: {
            backgroundColor: bg,
            titleColor: ink,
            bodyColor: inkSoft,
            borderColor: line,
            borderWidth: 1,
            cornerRadius: 6,
            padding: 12,
            titleFont: { family: 'Source Serif 4, Georgia, serif', size: 14, weight: '600' },
            bodyFont: { family: 'Inter, system-ui, sans-serif', size: 12 },
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            boxPadding: 4,
            callbacks: {
              title: (items) => items.length ? items[0].label : '',
              label: (item) => `  ${item.dataset.label}: ${item.parsed.y}`,
              footer: (items) => {
                const tot = items.reduce((a, b) => a + b.parsed.y, 0);
                return `Total: ${tot}`;
              }
            },
            footerFont: { family: 'JetBrains Mono, monospace', size: 11, weight: '500' },
            footerColor: ink,
            footerMarginTop: 6
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false, drawBorder: false },
            border: { display: false },
            ticks: {
              color: inkSoft,
              font: { family: 'JetBrains Mono, monospace', size: 11 },
              maxRotation: 0,
              autoSkip: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            grid: { color: line, drawBorder: false, drawTicks: false },
            border: { display: false },
            ticks: {
              color: inkFaint,
              font: { family: 'JetBrains Mono, monospace', size: 10 },
              padding: 8,
              stepSize: 2
            }
          }
        }
      }
    });
  }

  // --- list ---
  let active = { category: 'All', q: '' };

  function renderFilters() {
    const cats = ['All', ...ORDER.filter(c => pubs.some(p => p.category === c))];
    document.getElementById('pub-filters').innerHTML = cats.map(c => {
      const n = c === 'All' ? pubs.length : pubs.filter(p => p.category === c).length;
      return `<button class="f-btn ${active.category === c ? 'is-active' : ''}" data-cat="${c}">${c.toLowerCase()}<span class="c">${n}</span></button>`;
    }).join('');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function highlightAuthors(authors) {
    return (authors || []).map(a => {
      const isMe = ME.some(p => a.toLowerCase().includes(p));
      return isMe ? `<span class="me">${escapeHtml(a)}</span>` : escapeHtml(a);
    }).join(', ');
  }

  function matches(p) {
    if (active.category !== 'All' && p.category !== active.category) return false;
    if (active.q) {
      const hay = (p.title + ' ' + (p.authors || []).join(' ') + ' ' + (p.venue || '')).toLowerCase();
      if (!hay.includes(active.q)) return false;
    }
    return true;
  }

  function renderList() {
    const list = pubs.filter(matches);
    const empty = document.getElementById('pub-empty');
    const root = document.getElementById('pub-list');
    if (list.length === 0) {
      root.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    const groups = {};
    for (const p of list) {
      groups[p.year] = groups[p.year] || [];
      groups[p.year].push(p);
    }
    const years = Object.keys(groups).map(Number).sort((a, b) => b - a);

    let html = '';
    for (const y of years) {
      const items = groups[y];
      html += `<div class="year-block">
        <div class="year-head">
          <div class="year-num">${y}</div>
          <div class="year-meta">${items.length} publication${items.length === 1 ? '' : 's'}</div>
        </div>`;
      for (const p of items) {
        const idx = pubs.indexOf(p);
        const link = p.url || (p.doi ? `https://doi.org/${p.doi.replace(/^https?:\/\/doi\.org\//, '')}` : '');
        html += `<div class="pub">
          <span class="pub-cat cat-${p.category || 'Other'}">${(p.category || 'Other').toLowerCase()}</span>
          <div class="pub-info">
            <h3 class="pub-title">${escapeHtml(p.title)}</h3>
            <p class="pub-authors">${highlightAuthors(p.authors)}</p>
            <p class="pub-venue">${escapeHtml(p.venue || '')}</p>
          </div>
          <div class="pub-actions">
            ${link ? `<a class="pub-btn" href="${escapeHtml(link)}" target="_blank" rel="noopener">read ↗</a>` : ''}
            <button class="pub-btn pub-btn-cite" data-cite="${idx}">cite</button>
          </div>
        </div>`;
      }
      html += `</div>`;
    }
    root.innerHTML = html;
  }

  // --- modal ---
  const modal = document.getElementById('bib-modal');
  const modalBody = document.getElementById('bib-modal-body');
  const modalPaper = document.getElementById('bib-modal-paper');
  const copyBtn = document.getElementById('bib-copy');
  let currentBib = '';

  function openModal(p) {
    currentBib = p.bibtex || '';
    modalBody.textContent = currentBib;
    modalPaper.textContent = p.title || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const c = e.target.closest('[data-cite]');
    if (c) { openModal(pubs[parseInt(c.dataset.cite, 10)]); return; }
    if (e.target.closest('[data-modal-close]') || e.target === modal) closeModal();

    const f = e.target.closest('.f-btn');
    if (f) {
      active.category = f.dataset.cat;
      renderFilters();
      renderList();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  document.getElementById('pub-search').addEventListener('input', (e) => {
    active.q = e.target.value.toLowerCase().trim();
    renderList();
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentBib);
      const orig = copyBtn.textContent;
      copyBtn.textContent = 'copied ✓';
      setTimeout(() => copyBtn.textContent = orig, 1300);
    } catch (e) {}
  });

  // --- init + theme observer ---
  renderStats();
  renderFilters();
  renderList();
  // Wait for fonts before drawing chart so labels align nicely
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  buildChart();

  new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.attributeName === 'data-theme') buildChart();
    }
  }).observe(document.documentElement, { attributes: true });

})();
