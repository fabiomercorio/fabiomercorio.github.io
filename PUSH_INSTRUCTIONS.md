# Istruzioni per il primo push

⚠️ Questo file è temporaneo: serve solo per il primo push. Una volta fatto,
puoi cancellarlo (o tenerlo come reference, ma ormai farai tutto da `EDITING.md`
e `DEPLOY.md`).

---

## TL;DR

Apri Terminal sul Mac ed esegui questi comandi nell'ordine:

```bash
cd ~/Documents/Claude/Projects/mywebsite

# 1. (Opzionale ma consigliato) test in locale prima del push
bundle install
bundle exec jekyll serve
# Apri http://localhost:4000 e controlla che tutto funzioni.
# Quando sei soddisfatto, Ctrl+C per fermare il server.

# 2. Push del nuovo main e dei branch di backup
git push -u origin main
git push origin backup-beautiful-jekyll
git push origin backup-new-static

# 3. Configura GitHub Pages (una volta sola, via web)
# Vai su:
#   https://github.com/fabiomercorio/fabiomercorio.github.io/settings/pages
# Source: GitHub Actions  (non più "Deploy from a branch")
# Default branch (Settings → Branches): main

# 4. (Opzionale) cambia il default branch da master a main
#   https://github.com/fabiomercorio/fabiomercorio.github.io/settings/branches
```

Dopo il punto 2, GitHub Actions parte automaticamente e in 1-2 minuti il
sito è live. Lo trovi sotto:
  https://github.com/fabiomercorio/fabiomercorio.github.io/actions

---

## Spiegazione passo per passo

### 1. Test locale

```bash
cd ~/Documents/Claude/Projects/mywebsite
bundle install
```

Installa Jekyll + plugin nella cartella `vendor/bundle/` (gitignored).
La prima volta ci mette ~30 secondi.

```bash
bundle exec jekyll serve
```

Builda il sito in `_site/` e lo serve su `http://localhost:4000`. Il server
auto-rebuilda a ogni modifica dei file.

Cose da controllare nel browser:
- Home: news, about, team, tools, awards, contatti — tutto visibile?
- Publications: chart, filtri, lista, modal BibTeX (clicca "cite") — tutto OK?
- Projects: lista progetti finanziati — tutto al posto?
- Teaching: insegnamento corrente e passato — markdown reso bene?
- Theme toggle (sole/luna in alto a destra) — funziona?
- Link "mercorio.com" → vai → ti mantiene su localhost? OK.

Se qualcosa non funziona, dimmelo prima del push, lo aggiustiamo.

`Ctrl+C` per fermare il server.

### 2. Push

```bash
git push -u origin main
```

Pusha il nuovo `main` (con il sito Jekyll). Crea il branch su GitHub
perché finora c'era solo `master`.

```bash
git push origin backup-beautiful-jekyll
git push origin backup-new-static
```

Pusha i due branch di backup. Sono visibili su GitHub ma non triggerano
nessuna build (Actions parte solo su `main`).

### 3. Configurazione GitHub Pages (una volta sola)

Va al primo push, perché stiamo cambiando da "build automatico Jekyll"
classico a "GitHub Actions custom".

1. Apri https://github.com/fabiomercorio/fabiomercorio.github.io/settings/pages
2. **Build and deployment** → **Source**: scegli `GitHub Actions`
3. Salva.

Subito dopo dovresti vedere partire la prima Action sotto:
   https://github.com/fabiomercorio/fabiomercorio.github.io/actions

Se non parte da sola, vai sull'Action `Build and deploy site` e clicca
**Run workflow** → branch `main` → Run.

### 4. Default branch (cosmetico)

GitHub mostra `master` come branch default storicamente. Per allinearti
alla convenzione moderna:

1. https://github.com/fabiomercorio/fabiomercorio.github.io/settings/branches
2. **Default branch** → freccia di switch → seleziona `main`
3. Conferma.

Non serve per il funzionamento (la Action punta esplicitamente a `main`),
ma fa sì che chi visita il repo veda `main` per primo.

---

## Verifica post-deploy

Dopo che la prima Action completa con successo:

1. Apri `https://fabiomercorio.github.io/` — il nuovo sito Jekyll dovrebbe
   essere visibile.
2. Apri `https://www.mercorio.com/` — Aruba fa redirect → vede il nuovo sito.
3. Hard-refresh (`Cmd-Shift-R`) se vedi il vecchio (cache Fastly CDN).

---

## Se qualcosa va storto

### Il push viene rifiutato con "non-fast-forward"

Non dovrebbe succedere: il merge che ho fatto include `origin/master`
nella storia di `main`, quindi il push è pulito. Ma se per qualche motivo:

```bash
# Verifica la situazione
git fetch origin
git log --oneline origin/master..main | head -5

# Se il merge è ancora lì, il push deve funzionare. Se no, riproviamo.
```

### Action fallisce

Vai su Actions, apri il run fallito, copia l'errore, mandamelo. Cause più
probabili:

- `bundle install` fallisce → `Gemfile.lock` deve essere committato (lo
  generi al primo `bundle install` locale e fai `git add Gemfile.lock`).
- `parse_bib.py` fallisce → errore di sintassi BibTeX in `pub.tex`.
- Jekyll fallisce → errore di Liquid/markdown in qualche file.

### Vedi ancora il sito vecchio

```bash
# Verifica quale commit è in produzione (HEAD del main remoto):
git fetch origin
git log -1 --oneline origin/main
```

Se è il commit della conversione (qualcosa con "Convert site to Jekyll"),
allora è solo cache. Aspetta 5 minuti e fai hard-refresh.

### Voglio tornare indietro

```bash
# Sostituisci il main remoto col vecchio sito Beautiful Jekyll:
git push origin backup-beautiful-jekyll:main --force

# Oppure col sito statico nuovo (pre-Jekyll):
git push origin backup-new-static:main --force
```

I backup non vengono toccati: puoi sempre re-deployare il Jekyll dopo.

---

## Una volta deployato e tutto OK

Cancella questo file (o tienilo come reference):

```bash
git rm PUSH_INSTRUCTIONS.md
git commit -m "Remove first-deploy instructions"
git push
```

Da quel momento in poi:
- modifiche di contenuto → segui `EDITING.md`
- problemi infra → consulta `DEPLOY.md`
- nuove feature / cambi di design → fammi sapere e lavoriamo insieme
