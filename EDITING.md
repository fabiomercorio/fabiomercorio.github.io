# How to edit the site

Il sito ora è **Jekyll**. Ogni modifica passa per markdown nativo, viene
buildato in locale (per controllo) e pushata su GitHub: GitHub Actions
fa il build di produzione e pubblica su `fabiomercorio.github.io`.

---

## Quick reference

| Voglio cambiare…       | File                                       | Formato   |
|------------------------|--------------------------------------------|-----------|
| News (homepage)        | `_includes/news.md`                        | Markdown  |
| About (homepage)       | `_includes/about.md`                       | Markdown  |
| Current teaching       | `_includes/teaching-current.md`            | Markdown  |
| Past teaching          | `_includes/teaching-past.md`               | Markdown  |
| Tools cards (home)     | `index.html`, sezione `tool-grid`          | HTML      |
| Granted projects       | `projects.html`, lista `<li class="proj">` | HTML      |
| Team members           | `index.html`, sezione `team`               | HTML      |
| Awards / Service       | `index.html`, sezione `list-clean`         | HTML      |
| Contact info           | `index.html`, sezione bottom               | HTML      |
| Pubblicazioni          | `pub.tex` → `python3 tools/parse_bib.py`   | BibTeX    |
| Profile photo          | `assets/img/profile.jpg`                   | image     |
| Colors / fonts         | `assets/css/style.css` → `:root { ... }`   | CSS vars  |
| Header / nav           | `_includes/nav.html`                       | HTML      |
| Footer / socials       | `_includes/footer.html`                    | HTML      |
| Site title, URL, SEO   | `_config.yml`                              | YAML      |

---

## Esempio rapido — aggiungere una news

Apri `_includes/news.md` e aggiungi una bullet in cima:

```markdown
- <span class="tag tag-publication">Publication</span> Nuovo paper accepted at **AAAI-26** ([preprint](https://arxiv.org/abs/...)).
- <span class="tag tag-tool">Tool</span> [Nuovo strumento](https://...) — descrizione.
```

Tag disponibili (per lo styling colorato):

```
tag-publication   verde
tag-tool          teal
tag-press         coral outline
tag-speech        giallo
tag-teaching      plum
```

Si possono mettere anche più tag su una stessa riga.

---

## Pubblicazioni (workflow BibTeX)

Le pubblicazioni vengono auto-generate da `pub.tex`. Per aggiornarle:

1. Apri `pub.tex` e aggiungi/modifica/rimuovi le entry BibTeX (`@article`,
   `@inproceedings`, `@incollection`, `@misc`, ...).
2. Dalla root del progetto:
   ```bash
   python3 tools/parse_bib.py
   ```
3. Lo script rigenera:
   - `assets/data/publications.json` (versione human-readable)
   - `assets/data/publications.js`   (caricato dalla pagina)
4. Lo stesso script gira automaticamente anche dentro GitHub Actions
   prima del build Jekyll, quindi se dimentichi di rigenerare in locale
   il deploy si "auto-corregge".

### Categorizzazione automatica delle entry

| Tipo BibTeX                          | Rendering   |
|--------------------------------------|-------------|
| `@article`                           | Journal     |
| `@inproceedings`, `@incollection`    | Conference  |
| `@inbook`                            | Book        |
| `@misc` con `archivePrefix={arXiv}`  | Preprint    |
| altri                                | Other       |

---

## Build e preview in locale

### Prima volta

```bash
cd /Users/fabiomercorio/Documents/Claude/Projects/mywebsite
bundle install
```

Questo installa Jekyll e i suoi plugin in `vendor/bundle/`. Si fa una
sola volta, poi basta `bundle install` solo se aggiungi/cambi gemme.

### Per lavorare sul sito

```bash
bundle exec jekyll serve --livereload
```

Apre il sito su `http://localhost:4000` e si auto-rebuilda a ogni
modifica. È il modo migliore per controllare le modifiche prima di
pushare.

### Build di produzione (per debug)

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

Output in `_site/` (non versionato).

---

## Pubblicare le modifiche

1. Modifichi i file in locale.
2. (Opzionale ma consigliato) `bundle exec jekyll serve` e controlli
   in browser.
3. Commit + push:
   ```bash
   git add -A
   git commit -m "Aggiungi news su X"
   git push
   ```
4. GitHub Actions parte automaticamente: build Jekyll + deploy su
   GitHub Pages. In ~1–2 minuti il sito è live su `mercorio.com`.

Se preferisci, le modifiche le puoi delegare a Claude — descrivigli
cosa vuoi cambiare, lui edita i file e fa commit + push.

---

## Branch e revert

Sul repository ci sono i seguenti branch storici di sicurezza:

| Branch                      | Cosa contiene                                |
|-----------------------------|----------------------------------------------|
| `main`                      | Sito attuale (Jekyll)                        |
| `backup-new-static`         | Sito statico (HTML+JS) prima della conversione Jekyll |
| `backup-beautiful-jekyll`   | Sito vecchio Beautiful Jekyll come era online prima |

Per tornare a uno stato precedente:

```bash
# Vedere come era il sito statico nuovo:
git checkout backup-new-static

# Vedere come era il vecchio Beautiful Jekyll:
git checkout backup-beautiful-jekyll

# Tornare al sito attuale:
git checkout main
```

Se serve davvero pubblicare di nuovo uno dei backup come sito live:

```bash
git checkout backup-beautiful-jekyll  # o backup-new-static
git push origin HEAD:main --force
```

(Attenzione al `--force`: sovrascrive `main`. Fallo solo se sei sicuro
e ricorda che ci sono i branch di backup come rete di sicurezza.)

---

## Cambiare colori, font, layout di base

I colori sono variabili CSS in `assets/css/style.css`:

```css
:root {
  --paper:   #FDFBF6;   /* sfondo pagina */
  --ink:     #0F1419;   /* testo principale */
  --indigo:  #3833D9;   /* accent primario */
  --coral:   #E26544;   /* accent secondario */
  --yellow:  #F5C12C;   /* highlight, badges */
  --teal:    #0F6E6E;   /* tools tag */
  --plum:    #7B2C8C;   /* teaching tag */
  --grass:   #3A8C3A;   /* publication tag */
  ...
}
```

Modalità scura: blocco `[data-theme="dark"]` subito sotto.

I font sono in due punti:
1. `_includes/head.html` — `<link>` Google Fonts
2. `assets/css/style.css` — `--font-sans`, `--font-display`, `--font-mono`

---

## Struttura cartelle

```
mywebsite/
├── _config.yml             ← config Jekyll
├── Gemfile                 ← dipendenze Ruby
├── CNAME                   ← dominio custom (mercorio.com)
├── .github/workflows/      ← GitHub Actions: build + deploy
├── _layouts/               ← template HTML padre
│   └── default.html
├── _includes/              ← parti riusabili
│   ├── head.html              <head>
│   ├── nav.html               header + navigation
│   ├── footer.html            footer (con socials condizionali)
│   ├── news.md                ← contenuto editabile
│   ├── about.md               ← contenuto editabile
│   ├── teaching-current.md    ← contenuto editabile
│   └── teaching-past.md       ← contenuto editabile
├── index.html              ← homepage (front matter + body)
├── publications.html       ← pagina pubblicazioni
├── projects.html           ← pagina progetti finanziati
├── teaching.html           ← pagina insegnamento
├── pub.tex                 ← BibTeX sorgente
├── tools/parse_bib.py      ← genera publications.json/.js
├── assets/
│   ├── css/style.css       ← tutti gli stili
│   ├── js/app.js           ← interazioni (theme, reveal, nav)
│   ├── js/publications.js  ← chart, filtri, modal BibTeX
│   ├── img/profile.jpg
│   └── data/               ← generati da parse_bib.py
│       ├── publications.json
│       └── publications.js
└── _site/                  ← output build (gitignored)
```
