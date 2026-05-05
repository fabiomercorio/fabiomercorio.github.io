# Deploy on GitHub Pages

Your existing repo is `github.com/fabiomercorio/fabiomercorio.github.io`,
served at `https://fabiomercorio.github.io` (and at `mercorio.com` via your
DNS redirect). The new site is plain HTML/CSS/JS — no Jekyll build needed.

The strategy: **back up the current Jekyll site to a branch**, then replace
the contents of `master` with the new site. If anything goes wrong you can
roll back instantly.

---

## Prerequisites

- `git` installed
- You're logged in to GitHub (SSH key or HTTPS token configured)

---

## Step-by-step (first deploy)

Open Terminal. Pick any folder you like as a workspace — the example uses your
Desktop.

### 1 · Clone your existing site repo

```bash
cd ~/Desktop
git clone https://github.com/fabiomercorio/fabiomercorio.github.io.git
cd fabiomercorio.github.io
```

### 2 · Back up the current Jekyll version to a branch

So you can always come back to it.

```bash
git checkout -b jekyll-backup
git push -u origin jekyll-backup
git checkout master
```

Now `jekyll-backup` on GitHub holds the old site forever.

### 3 · Wipe the master branch (we're replacing the contents, not the repo)

```bash
git rm -rf .
```

Don't worry — `.git/` (the history) is kept, only the working files are removed.

### 4 · Copy the new site into the repo

```bash
cp -R ~/Documents/Claude/Projects/mywebsite/. .
```

The trailing `/.` matters — it copies *contents*, including hidden files like
`.nojekyll`.

### 5 · Verify

```bash
ls -la
```

You should see `index.html`, `publications.html`, `projects.html`,
`teaching.html`, `pub.tex`, `assets/`, `tools/`, `EDITING.md`, `DEPLOY.md`,
and `.nojekyll`.

### 6 · Commit and push

```bash
git add -A
git commit -m "New static site (replaces Jekyll)"
git push
```

### 7 · Wait ~1 minute

Visit `https://fabiomercorio.github.io` — your new site is live.

---

## About `.nojekyll`

The empty `.nojekyll` file tells GitHub Pages: "do not run Jekyll on this repo,
just serve the files as-is." Without it, GitHub Pages would try to build
Jekyll and break your site (because there's no Jekyll source anymore).

It's already in your project. Don't delete it.

---

## About your custom domain (mercorio.com)

You have **no `CNAME` file** in the repo, so the custom domain isn't configured
via GitHub Pages — it's likely a redirect at your domain registrar
(GoDaddy/Namecheap/wherever). Whatever DNS / forwarding setup you have at
mercorio.com is unaffected by this deploy. It will keep redirecting to
`fabiomercorio.github.io` exactly as before.

If you ever want GitHub Pages to serve `mercorio.com` directly (cleaner URL,
HTTPS via GH), do this:

1. In your repo settings → Pages → Custom domain → enter `mercorio.com` (or
   `www.mercorio.com`). GitHub adds a `CNAME` file automatically.
2. At your DNS provider, point an A-record for `mercorio.com` to:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   (These are GitHub Pages IPs.) For `www.mercorio.com` use a CNAME pointing
   to `fabiomercorio.github.io`.
3. Wait for DNS to propagate, then enable "Enforce HTTPS" in repo Pages
   settings.

You don't need to do this now. It's optional.

---

## Updating the site after the first deploy

Whenever you change anything (a news entry, the bib file, a project, …):

```bash
cd ~/Desktop/fabiomercorio.github.io

# If you edit the bib file, regenerate the publication data first:
python3 tools/parse_bib.py

# Stage everything, commit, push:
git add -A
git commit -m "Update news / publications / etc."
git push
```

GitHub Pages redeploys automatically within ~1 minute.

If you prefer working directly from `~/Documents/Claude/Projects/mywebsite/`,
make sure to keep that folder in sync with the git checkout — the simplest is
to make `~/Documents/Claude/Projects/mywebsite/` *be* your git checkout. Run
once:

```bash
cd ~/Documents/Claude/Projects
mv mywebsite mywebsite.backup
git clone https://github.com/fabiomercorio/fabiomercorio.github.io.git mywebsite
cd mywebsite
# then copy any local-only changes from the backup if needed
```

After that, you can edit files in this folder and `git add / commit / push`
right from there.

---

## Rollback (if anything looks wrong)

If the new site breaks something and you need the Jekyll one back **right now**:

```bash
cd ~/Desktop/fabiomercorio.github.io
git checkout jekyll-backup -- .
git commit -am "Rollback to Jekyll"
git push
```

GitHub Pages rebuilds in ~1 minute and you're back to the old site. Whenever
you're ready, you can re-deploy the new one with:

```bash
git checkout master -- .  # or any other approach
```

---

## Common issues

**"Site shows 404 or blank page after deploy"**
→ Check that `.nojekyll` is at the repo root. Without it, GitHub Pages will
try to build with Jekyll and choke on the `assets/` folder name.

**"My CSS/images don't load"**
→ All paths in the HTML are relative (`assets/css/style.css`, not `/assets/...`).
This works for both `fabiomercorio.github.io` and `fabiomercorio.github.io/anything/`.
Don't add a leading `/` to those paths.

**"GitHub Pages says it's deployed but I see the old site"**
→ Hard-refresh the browser (Cmd-Shift-R on Mac). GitHub serves through Fastly
CDN with aggressive caching.

**"My fonts don't load offline"**
→ The site uses Google Fonts (Fraunces, Inter, JetBrains Mono) loaded from
`fonts.googleapis.com`. Online: works. Offline: falls back to system fonts —
not pretty but readable.
