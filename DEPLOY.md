# Deploy & infrastructure notes

Questo file descrive **dove gira il sito** e **come arriva online**.
Per le modifiche di contenuto (news, pubblicazioni, ecc.) → vedi `EDITING.md`.

---

## Architettura

```
   ┌────────────┐                ┌─────────────────────────┐
   │ mercorio.com│  redirect 301 │  fabiomercorio.github.io │
   │  (Aruba)    │ ────────────► │     (GitHub Pages)       │
   └────────────┘                └─────────────────────────┘
                                              ▲
                                              │ deploy
                                              │
                                  ┌───────────────────────┐
                                  │  GitHub Actions       │
                                  │  • bundle install     │
                                  │  • parse_bib.py       │
                                  │  • jekyll build       │
                                  │  • deploy-pages       │
                                  └───────────────────────┘
                                              ▲
                                              │ trigger su push main
                                              │
                                  ┌───────────────────────┐
                                  │  branch main del repo │
                                  │  fabiomercorio.       │
                                  │     github.io         │
                                  └───────────────────────┘
```

- **Dominio** `mercorio.com` registrato e gestito su **Aruba**.
  Configurato come **redirect 301** verso `https://fabiomercorio.github.io/`.
  (DNS A record → `62.149.189.54`, server `aruba-proxy`).
- **Hosting** del contenuto: GitHub Pages, repo
  `github.com/fabiomercorio/fabiomercorio.github.io` (utente-site).
- **Build**: GitHub Actions (`.github/workflows/jekyll.yml`).
  Su ogni push a `main` → run automatica → deploy.

---

## Prima volta: setup del repo su GitHub

Una sola volta, dopo il primo push del nuovo `main`:

1. Vai su `github.com/fabiomercorio/fabiomercorio.github.io/settings/pages`
2. **Source**: `GitHub Actions`  *(non più "Deploy from a branch")*
3. **Custom domain**: opzionale, vedi sezione successiva.
4. **Default branch**: vai su `Settings → Branches` e cambia il default da
   `master` a `main` *(se vuoi adottare la convenzione moderna; non è
   strettamente necessario perché Actions punta esplicitamente a `main`)*.

A quel punto, ogni `git push` su `main` triggera la build/deploy in
automatico. Lo trovi sotto `Actions` nel repo.

---

## Custom domain (opzionale)

Attualmente `mercorio.com` non è configurato come custom domain GitHub:
viene fatto un **redirect** lato Aruba. Funziona, ma vedi `mercorio.com`
nella barra solo per un istante prima del redirect.

Se vuoi che GitHub Pages serva direttamente `mercorio.com` (URL pulito,
HTTPS gestito da GH, niente redirect Aruba):

1. **Su GitHub** → `Settings → Pages → Custom domain` → metti
   `www.mercorio.com`. (GitHub aggiunge/aggiorna automaticamente il file
   `CNAME` nel repo — nel nostro repo c'è già preimpostato).
2. **Su Aruba** (DNS panel):
   - record `A` per `mercorio.com` → uno (o più) di:
     `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - record `CNAME` per `www` → `fabiomercorio.github.io.`
   - rimuovi il redirect 301 attuale di Aruba.
3. Attendi propagazione DNS (15 min – qualche ora).
4. Su GitHub → `Settings → Pages` → spunta **Enforce HTTPS**.

Non urgente, è una pulizia. Il sito funziona già com'è.

---

## Backup branches

Il repo contiene tre branch persistenti per safety:

| Branch                      | Cosa contiene                                |
|-----------------------------|----------------------------------------------|
| `main`                      | Sito attuale (Jekyll)                        |
| `backup-new-static`         | Sito statico HTML+JS prima della conversione |
| `backup-beautiful-jekyll`   | Sito vecchio Beautiful Jekyll (com'era live) |

Plus il branch `master` su origin che non tocchiamo (è il vecchio sito).

### Revert a un backup

```bash
# Pubblica di nuovo il sito vecchio Beautiful Jekyll come live:
git push origin backup-beautiful-jekyll:main --force

# Pubblica di nuovo il sito statico nuovo (pre-Jekyll):
git push origin backup-new-static:main --force
```

⚠️ Force-push: sovrascrive `main` su origin. Usa solo se sei sicuro.
Ricorda che i branch di backup non vengono toccati e restano disponibili.

---

## Troubleshooting

**"Push fallisce con 'protected branch'"**
→ Vai su `Settings → Branches` e verifica che `main` non abbia regole
di protezione che bloccano push diretti.

**"Action fallisce su parse_bib.py"**
→ Probabilmente il `pub.tex` ha un errore di sintassi BibTeX. Esegui in
locale `python3 tools/parse_bib.py` per vedere il messaggio d'errore.

**"Action fallisce su `bundle install`"**
→ Verifica che `Gemfile` e `Gemfile.lock` siano allineati. Se hai
cambiato versione di una gemma in `Gemfile`, esegui `bundle update`
in locale e committa il nuovo `Gemfile.lock`.

**"Sito vecchio ancora visibile dopo il deploy"**
→ Hard refresh del browser (`Cmd-Shift-R`). GitHub serve via Fastly CDN
con cache aggressiva.

**"GitHub Actions disabilitate sul repo"**
→ `Settings → Actions → General` → seleziona "Allow all actions and
reusable workflows". Sui repo legacy potrebbero essere disabilitate.
