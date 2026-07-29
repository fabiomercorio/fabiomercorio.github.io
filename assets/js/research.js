// ===========================================================
// Research page — timeline, research-line cards, detail view
// Data: assets/data/research.js (window.RESEARCH_*)
// ===========================================================

(function () {
  'use strict';

  var T = window.RESEARCH_TOPICS || {};
  var P = window.RESEARCH_PAPERS || [];
  var PERIODS = window.RESEARCH_PERIODS || [];
  var LANES = window.RESEARCH_LANES || [];

  if (!P.length) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function papersOf(k) {
    return P.filter(function (p) { return p.topics.indexOf(k) >= 0; })
            .sort(function (a, b) { return b.year - a.year; });
  }
  function ratingBadge(p) {
    var r = p.rating;
    if (!r || !r.badge || !r.label) return '';
    return ' <span class="pub-rank rank-' + esc(r.source) + '">' + esc(r.label) + '</span>';
  }

  // ---- stats (no citation metrics by design) ----
  var years = P.map(function (p) { return p.year; });
  var span = Math.min.apply(null, years) + '–' + Math.max.apply(null, years);
  var nTools = (function () {
    var s = {};
    P.forEach(function (p) { if (p.tool) s[p.tool.name] = 1; });
    return Object.keys(s).length;
  })();
  document.getElementById('r-stats').innerHTML = [
    { l: 'Research lines', v: Object.keys(T).length, x: 'across four phases' },
    { l: 'Papers explained', v: P.length, x: span },
    { l: 'Open-source tools', v: nTools, x: 'code, data & benchmarks' }
  ].map(function (s) {
    return '<div class="stat"><div class="stat-label">' + s.l + '</div><div class="stat-value">' + s.v +
           '</div><div class="stat-extra">' + s.x + '</div></div>';
  }).join('');

  // ---- clickable timeline ----
  var PHASE_BANDS = [
    [2009, 2014, 'I · FOUNDATIONS'],
    [2014, 2018, 'II · LABOUR DATA'],
    [2018, 2023, 'III · EMBEDDINGS & XAI'],
    [2023, 2026.6, 'IV · LLM ERA']
  ];
  function timeline() {
    var X = function (y) { return 235 + (y - 2009) * 50; };
    var s = '';
    PHASE_BANDS.forEach(function (p, i) {
      if (i % 2 === 0) {
        s += '<rect class="tl-band" x="' + X(p[0]) + '" y="40" width="' + (X(p[1]) - X(p[0])) +
             '" height="' + (LANES.length * 40 + 18) + '" rx="6"/>';
      }
    });
    PHASE_BANDS.forEach(function (p) {
      s += '<text class="tl-per" x="' + ((X(p[0]) + X(p[1])) / 2) + '" y="30" text-anchor="middle">' + p[2] + '</text>';
    });
    [2009, 2014, 2018, 2023, 2026].forEach(function (y) {
      s += '<line class="tl-grid" x1="' + X(y) + '" y1="40" x2="' + X(y) + '" y2="' + (40 + LANES.length * 40 + 18) + '"/>' +
           '<text class="tl-tick" x="' + X(y) + '" y="' + (40 + LANES.length * 40 + 36) + '" text-anchor="middle">' + y + '</text>';
    });
    LANES.forEach(function (l, i) {
      var k = l[0], a = l[1], b = l[2], t = T[k], y = 70 + i * 40;
      s += '<g class="tl-lane" data-topic="' + k + '" role="button" tabindex="0" aria-label="' + esc(t.name) + '">' +
        '<rect x="' + X(a) + '" y="' + (y - 13) + '" width="' + (X(b) - X(a)) + '" height="26" rx="13" fill="' + t.color + '" opacity="0.16"/>' +
        '<line x1="' + (X(a) + 12) + '" y1="' + y + '" x2="' + (X(b) - 12) + '" y2="' + y + '" stroke="' + t.color + '" stroke-width="3" stroke-linecap="round"/>' +
        '<text class="tl-name" x="' + (X(a) - 10) + '" y="' + (y + 4) + '" text-anchor="end" fill="' + t.color + '">' + esc(t.name) + '</text>' +
        '</g>';
    });
    var H = 40 + LANES.length * 40 + 46;
    document.getElementById('r-tl').innerHTML =
      '<svg viewBox="0 0 1140 ' + H + '" xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
  }

  // ---- research-line grid ----
  function renderTopics() {
    var html = '';
    PERIODS.forEach(function (per) {
      html += '<div class="r-phase">' + esc(per.label) + '</div><div class="r-grid">';
      per.topics.forEach(function (k) {
        var t = T[k], n = papersOf(k).length;
        html += '<div class="r-card" data-topic="' + k + '" style="--tc:' + t.color + '" role="button" tabindex="0">' +
          '<h3>' + esc(t.name) + '</h3>' +
          '<div class="pd">' + esc(t.period) + '</div>' +
          '<p>' + esc(t.tagline) + '</p>' +
          '<div class="n"><b>' + n + '</b> papers' +
          (t.tools.length ? ' · ' + t.tools.length + ' tool' + (t.tools.length > 1 ? 's' : '') : '') + '</div>' +
          '<span class="go">open →</span></div>';
      });
      html += '</div>';
    });
    document.getElementById('r-topics').innerHTML = html;
  }

  // ---- research-line detail ----
  function renderDetail(k) {
    var t = T[k], pp = papersOf(k);
    var h = '<button class="r-back" data-back>← all research lines</button>' +
      '<div class="r-dhead" style="--tc:' + t.color + '">' +
      '<h2>' + esc(t.name) + '</h2><div class="pd">' + esc(t.period) + ' · ' + pp.length + ' papers</div></div>' +
      '<div class="r-blocks" style="--tc:' + t.color + '">';
    if (t.sota) h += '<div class="r-block"><h4>Where the field stood</h4><p>' + esc(t.sota) + '</p></div>';
    h += '<div class="r-block hl"><h4>Our contribution</h4><p>' + esc(t.contrib) + '</p></div>' +
         '<div class="r-block"><h4>Why it matters</h4><p>' + esc(t.impact) + '</p></div></div>';
    if (t.tools.length) {
      h += '<div class="r-toolrow">' + t.tools.map(function (tl) {
        return '<a class="pub-btn" href="' + esc(tl.url) + '" target="_blank" rel="noopener">' + esc(tl.name) + ' ↗</a>';
      }).join('') + '</div>';
    }
    h += '<div class="r-papers" style="--tc:' + t.color + '">' +
         '<div class="r-ph">Papers in this line — click one for its summary &amp; contribution</div>';
    pp.forEach(function (p) {
      var link = p.url || (p.doi ? 'https://doi.org/' + p.doi.replace(/^https?:\/\/doi\.org\//, '') : '');
      h += '<div class="r-prow"><div class="r-prow-top" data-row>' +
        '<span class="yr">' + p.year + '</span>' +
        '<span><span class="ti">' + esc(p.title) + '</span>' + ratingBadge(p) +
        '<div class="vn">' + esc(p.venue || '') + '</div></span>' +
        '<span class="tgl">summary ↓</span></div>' +
        '<div class="r-pbody">' +
        '<div class="r-sumbox"><h5>In plain terms</h5><p>' + esc(p.summary) + '</p></div>' +
        '<div class="r-sumbox alt"><h5>Contribution</h5><p>' + esc(p.contrib) + '</p></div>' +
        '<div class="r-links">' +
        (link ? '<a class="pub-btn" href="' + esc(link) + '" target="_blank" rel="noopener">read ↗</a>' : '') +
        (p.pub ? '<a class="pub-btn pub-btn-cite" href="publications.html#pub-' + encodeURIComponent(p.pub) + '">view in Publications →</a>' : '') +
        (p.tool ? '<a class="pub-btn" href="' + esc(p.tool.url) + '" target="_blank" rel="noopener">' + esc(p.tool.name) + ' ↗</a>' : '') +
        '</div></div></div>';
    });
    h += '</div>';
    var d = document.getElementById('r-detail');
    d.innerHTML = h;
    document.getElementById('r-topics').style.display = 'none';
    document.getElementById('r-stats').style.display = 'none';
    document.getElementById('r-timeline').style.display = 'none';
    d.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function closeDetail() {
    document.getElementById('r-detail').style.display = 'none';
    document.getElementById('r-topics').style.display = '';
    document.getElementById('r-stats').style.display = '';
    document.getElementById('r-timeline').style.display = '';
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }
  function open(k) {
    if (!T[k]) return;
    if (history.replaceState) history.replaceState(null, '', '#line-' + k);
    renderDetail(k);
  }

  document.addEventListener('click', function (e) {
    var c = e.target.closest('.r-card, .tl-lane');
    if (c && c.dataset.topic) { open(c.dataset.topic); return; }
    if (e.target.closest('[data-back]')) { closeDetail(); return; }
    var row = e.target.closest('[data-row]');
    if (row && !e.target.closest('a')) row.parentElement.classList.toggle('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var c = e.target.closest && e.target.closest('.r-card, .tl-lane');
    if (c && c.dataset.topic) { e.preventDefault(); open(c.dataset.topic); }
  });

  timeline();
  renderTopics();

  // Deep link: research.html#line-LMI opens that research line directly.
  var m = location.hash.match(/^#line-(\w+)$/);
  if (m && T[m[1]]) renderDetail(m[1]);
})();
