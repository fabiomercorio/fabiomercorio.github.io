# How to edit the site

Your site is just plain files — no build step, no Jekyll. Edit, save, refresh
the browser. Below: where every piece of content lives and how to change it.

---

## Quick reference

| Want to change…       | Edit this                                                  | Format    |
|----------------------|------------------------------------------------------------|-----------|
| News                 | `index.html` → `<script id="news-md">`                      | Markdown  |
| About me intro       | `index.html` → `<script id="about-md">`                     | Markdown  |
| Current teaching     | `teaching.html` → `<script id="current-teaching-md">`       | Markdown  |
| Past teaching        | `teaching.html` → `<script id="past-teaching-md">`          | Markdown  |
| Publications         | `pub.tex` → run `python3 tools/parse_bib.py`                | BibTeX    |
| Tools cards          | `index.html` and `projects.html` → `<a class="tool">`       | HTML      |
| Granted projects     | `projects.html` → `<li class="proj">`                       | HTML      |
| Team members         | `index.html` → `<div class="team-card">`                    | HTML      |
| Awards / Service     | `index.html` → `<ul class="list-clean">`                    | HTML      |
| Contact info         | `index.html` → bottom `<section class="section">`           | HTML      |
| Profile photo        | replace `assets/img/profile.jpg`                            | image     |
| Colors / fonts       | `assets/css/style.css` → top `:root { ... }`                | CSS vars  |

---

## How markdown blocks work

The site supports **inline markdown**: any element with `class="md"` and a
`data-md-from="#some-id"` attribute reads its content from a `<script type="text/markdown">`
tag elsewhere on the page.

### Example — News section

In `index.html` you'll find:

```html
<div class="news md" data-md-from="#news-md"></div>
```

That's the placeholder. The actual content is below, in:

```html
<script type="text/markdown" id="news-md">
- <span class="tag tag-publication">Publication</span> Two papers accepted at **EACL-26**.
- <span class="tag tag-tool">Tool</span> [TerminatorEconomy.com](http://...) is...
</script>
```

To add news, just add a new `-` bullet inside that script tag. Save. Refresh.
You can mix:

- **bold** with `**text**`
- *italic* with `*text*`
- [links](http://example.com) with `[text](url)`
- `inline code` with backticks
- raw HTML — the colored tags like `<span class="tag tag-tool">Tool</span>`

### Available tag styles for News

```html
<span class="tag tag-publication">Publication</span>   <!-- green -->
<span class="tag tag-tool">Tool</span>                  <!-- teal -->
<span class="tag tag-press">Press</span>                <!-- coral outline -->
<span class="tag tag-speech">Speech</span>              <!-- yellow -->
<span class="tag tag-teaching">Teaching</span>          <!-- plum -->
```

You can also add multiple tags to one item.

---

## Publications — the BibTeX workflow

Publications are auto-generated from `pub.tex` in the project root. To add or
update:

1. Open `pub.tex` and add / edit / remove BibTeX entries (any `@article`,
   `@inproceedings`, `@incollection`, `@misc`, …).
2. From the project root run:
   ```bash
   python3 tools/parse_bib.py
   ```
3. The script regenerates:
   - `assets/data/publications.json` (human-readable)
   - `assets/data/publications.js`  (used by the site)
4. Refresh the browser — the chart, stats, and list update automatically.

### How entries are categorised

| BibTeX type               | Shown as     |
|--------------------------|--------------|
| `@article`                | Journal      |
| `@inproceedings`, `@incollection` | Conference   |
| `@inbook`                 | Book         |
| `@misc` with `archivePrefix={arXiv}` | Preprint |
| anything else             | Other        |

### Using a different .bib file

```bash
python3 tools/parse_bib.py path/to/myrefs.bib
```

Tip: you can keep multiple .bib files and concat them before running:
```bash
cat bibs/*.bib > pub.tex && python3 tools/parse_bib.py
```

---

## Editing tools (cards)

Tool cards on the home (`index.html`) and projects page (`projects.html`)
look like this:

```html
<a class="tool reveal" href="https://github.com/.../my-tool" target="_blank" rel="noopener">
  <h3 class="tool-name"><em>MyTool</em> <span class="tool-arrow">↗</span></h3>
  <p class="tool-desc">One-paragraph description.</p>
  <div class="tool-tags">
    <span class="tool-tag">venue 2025</span>
    <span class="tool-tag">topic</span>
  </div>
</a>
```

To add a new tool, copy any existing `<a class="tool">…</a>` block, change
the `href`, name, description, and tags. The card colors automatically rotate
through indigo → coral → yellow → teal → plum → green based on position.

---

## Editing granted projects

Each project in `projects.html` follows this pattern:

```html
<li class="proj reveal">
  <div class="proj-meta">
    <span class="proj-code">SHORT-CODE</span>
    <span class="proj-period">2024 — current</span>
    <span class="proj-role">Principal Investigator</span>
  </div>
  <div class="proj-body">
    <h3 class="proj-title">Full Project Title</h3>
    <p class="proj-funder">Funding agency · contract number</p>
    <p class="proj-desc">Description paragraph.</p>
    <div class="proj-pubs">
      <a class="proj-pub-link" href="https://..." target="_blank" rel="noopener">Paper · Venue 2025</a>
    </div>
  </div>
</li>
```

The `proj-code` color rotates automatically (indigo → coral → teal → plum → green).

---

## Editing team

`index.html`, in the Team section:

```html
<div class="team-card reveal">
  <p class="team-name"><a href="https://linkedin.com/...">Name Surname</a></p>
  <p class="team-role">Role · description</p>
</div>
```

Drop the `<a>` if there's no profile link.

---

## Changing colors

All colors live as CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --paper:   #FDFBF6;   /* page background */
  --ink:     #0F1419;   /* main text */
  --indigo:  #3833D9;   /* primary accent — buttons, links */
  --coral:   #E26544;   /* secondary accent */
  --yellow:  #F5C12C;   /* highlight, badges */
  --teal:    #0F6E6E;   /* tools tag */
  --plum:    #7B2C8C;   /* teaching tag */
  --grass:   #3A8C3A;   /* publication tag */
  ...
}
```

Change a value, save, refresh. Dark-mode equivalents are in the `[data-theme="dark"]`
block right below.

---

## Changing fonts

In every `.html` file, swap the Google Fonts URL in `<head>`. Then in
`assets/css/style.css`:

```css
:root {
  --font-sans:    'Inter', sans-serif;
  --font-display: 'Fraunces', Georgia, serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

---

## Running locally with a server (recommended for working on the site)

`file://` works for everything except fetching external `.md` files. If you
want to load markdown from external `.md` files (e.g. `data-md="content/news.md"`),
serve via http:

```bash
cd /Users/fabiomercorio/Documents/Claude/Projects/mywebsite
python3 -m http.server 8000
```

Then open http://localhost:8000.

For just opening the site to view it, double-click `index.html` — works fine.

---

## Deploying

Drop the whole `mywebsite/` folder onto any static host:

- **GitHub Pages**: push to `username.github.io` repo, root.
- **Netlify**: drag-drop the folder into app.netlify.com.
- **Vercel**: same.
- **Cloudflare Pages**, etc.

No build step required. Everything is plain HTML/CSS/JS.
