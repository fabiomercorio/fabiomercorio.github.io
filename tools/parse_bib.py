#!/usr/bin/env python3
"""
parse_bib.py — turn a .bib (or .tex containing bibtex blocks) into the
publications data file consumed by publications.html.

USAGE:
    python3 tools/parse_bib.py [path/to/source.bib]

Defaults to ../pub.tex (relative to this script).

OUTPUTS (overwrites both):
    ../assets/data/publications.json    (human-readable JSON)
    ../assets/data/publications.js      (window.PUBLICATIONS = [...])

Re-run after every edit to your .bib source. The site automatically picks
up the new file.
"""

import re
import json
import sys
from pathlib import Path
from collections import Counter

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

DEFAULT_SRC = ROOT / "pub.tex"
OUT_JSON = ROOT / "assets" / "data" / "publications.json"
OUT_JS   = ROOT / "assets" / "data" / "publications.js"


def split_entries(s):
    pattern = re.compile(r"(?m)^@(\w+)\s*\{")
    starts = [(m.start(), m.group(1).lower(), m.end()) for m in pattern.finditer(s)]
    for idx, (start, etype, body_start) in enumerate(starts):
        next_start = starts[idx + 1][0] if idx + 1 < len(starts) else len(s)
        depth = 1
        j = body_start
        while j < next_start and depth > 0:
            ch = s[j]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
            j += 1
        if depth == 0:
            block = s[start:j]
        else:
            block = s[start:next_start].rstrip()
            if not block.endswith("}"):
                block = block + "\n}"
        yield etype, block


def parse_fields(block):
    m = re.match(r"@\w+\s*\{\s*([^,]*),", block)
    key = m.group(1).strip() if m else ""
    body = block[m.end():] if m else block
    if body.rstrip().endswith("}"):
        body = body.rstrip()[:-1]

    fields = {}
    i = 0
    n = len(body)
    while i < n:
        m = re.match(r"\s*([A-Za-z][A-Za-z0-9_-]*)\s*=\s*", body[i:])
        if not m:
            break
        name = m.group(1).lower()
        i += m.end()
        if i >= n:
            break
        ch = body[i]
        if ch == "{":
            depth = 1
            i += 1
            start = i
            while i < n and depth > 0:
                if body[i] == "{":
                    depth += 1
                elif body[i] == "}":
                    depth -= 1
                i += 1
            value = body[start:i - 1] if depth == 0 else body[start:i]
        elif ch == '"':
            i += 1
            start = i
            while i < n and body[i] != '"':
                i += 1
            value = body[start:i]
            i += 1
        else:
            m2 = re.match(r"([^,\s]+)", body[i:])
            value = m2.group(1) if m2 else ""
            i += m2.end() if m2 else 0
        while i < n and body[i] in " \t\n\r,":
            i += 1
        fields[name] = clean(value)
    return key, fields


def clean(v):
    v = v.replace("\n", " ")
    v = re.sub(r"\s+", " ", v).strip()
    for _ in range(3):
        v = re.sub(r"\{([^{}]*)\}", r"\1", v)
    v = (v.replace("\\&", "&")
           .replace("\\_", "_")
           .replace("\\#", "#")
           .replace("\\textquotesingle", "'")
           .replace("\\'", "'")
           .replace("\\\"a", "ä")
           .replace("\\\"o", "ö")
           .replace("\\\"u", "ü")
           .replace("\\\"e", "ë")
           .replace("\\`a", "à")
           .replace("\\`e", "è")
           .replace("\\`i", "ì")
           .replace("\\`o", "ò")
           .replace("\\`u", "ù")
           .replace("\\'a", "á")
           .replace("\\'e", "é")
           .replace("\\'i", "í")
           .replace("\\'o", "ó")
           .replace("\\'u", "ú")
           .replace("--", "–")
           .replace("~", " "))
    return v.strip()


def normalize_authors(s):
    if not s:
        return []
    parts = re.split(r"\s+and\s+", s)
    out = []
    for p in parts:
        p = p.strip().strip(",").strip()
        if not p:
            continue
        if "," in p:
            last, _, first = p.partition(",")
            p = f"{first.strip()} {last.strip()}"
        out.append(p)
    return out


def category(etype, fields):
    if etype == "article":
        return "Journal"
    if etype in ("inproceedings", "incollection"):
        return "Conference"
    if etype == "inbook":
        return "Book"
    if etype == "misc":
        archive = fields.get("archiveprefix", "").lower()
        if "arxiv" in archive or "arxiv" in fields.get("eprint", "").lower():
            return "Preprint"
        return "Other"
    return "Other"


VENUE_MAP = [
    (r"\bIJCAI\b", "IJCAI"),
    (r"\bAAAI\b", "AAAI"),
    (r"\bECML.{0,3}PKDD\b", "ECML-PKDD"),
    (r"\bNAACL\b", "NAACL"),
    (r"\bEACL\b", "EACL"),
    (r"\bEMNLP\b", "EMNLP"),
    (r"\bACL\b", "ACL"),
    (r"\bICAPS\b", "ICAPS"),
    (r"\bKDD\b", "KDD"),
    (r"\bNeurIPS\b|\bNIPS\b", "NeurIPS"),
    (r"\bICML\b", "ICML"),
    (r"\bICDE\b", "ICDE"),
    (r"\bICDM\b", "ICDM"),
    (r"\bCIKM\b", "CIKM"),
    (r"\bWWW\b|\bWeb Conference\b", "WWW"),
    (r"\bSIGIR\b", "SIGIR"),
    (r"\bECIR\b", "ECIR"),
    (r"\bSAC\b|Symposium on Applied Computing", "ACM SAC"),
    (r"\bDSAA\b", "DSAA"),
    (r"\bFUSION\b", "FUSION"),
    (r"\bFLAIRS\b", "FLAIRS"),
    (r"\bCLiC-it\b|\bCLIC-IT\b", "CLiC-it"),
    (r"\bICTAI\b", "ICTAI"),
    (r"\bESWC\b", "ESWC"),
    (r"\bECAI\b", "ECAI"),
    (r"\bMTAP\b|Multimedia Tools", "MTAP"),
    (r"\bDATA\b.*Conference", "DATA"),
    (r"\bKEOD\b", "KEOD"),
    (r"\bHCI.?KDD\b", "HCI-KDD"),
    (r"\bIWBBIO\b", "IWBBIO"),
]


def venue_short(etype, fields):
    if etype == "article":
        return short_journal(fields.get("journal", "Journal"))
    if etype in ("inproceedings", "incollection", "inbook"):
        v = fields.get("booktitle", "") or fields.get("series", "")
        for pat, label in VENUE_MAP:
            if re.search(pat, v, re.I):
                yr = fields.get("year", "")
                yy = yr[-2:] if len(yr) == 4 else ""
                return f"{label}-{yy}" if yy else label
        s = re.sub(r"^(Proceedings of (the )?)", "", v, flags=re.I)
        if len(s) > 60:
            s = s[:57] + "…"
        return s
    if etype == "misc":
        archive = fields.get("archiveprefix", "").lower()
        if "arxiv" in archive:
            return f"arXiv:{fields.get('eprint', '')}"
        return fields.get("howpublished", "")
    return ""


def short_journal(j):
    if not j:
        return ""
    repls = [
        ("Information Processing and Management", "Inform. Process. & Mgmt."),
        ("Information Sciences", "Inform. Sciences"),
        ("Information Fusion", "Inform. Fusion"),
        ("Decision Support Systems", "Decision Support Sys."),
        ("Future Generation Computer Systems", "Future Gen. Computer Sys."),
        ("ACM Computing Surveys", "ACM Comput. Surv."),
        ("ACM Comput. Surv.", "ACM Comput. Surv."),
        ("International Journal of Data Science and Analytics", "Int. J. Data Sci. Anal."),
        ("Int. J. Data Sci. Anal.", "Int. J. Data Sci. Anal."),
        ("Cognitive Computation", "Cognitive Comp."),
        ("Knowledge-Based Systems", "Knowledge-Based Sys."),
        ("Expert Systems with Applications", "Expert Sys. Appl."),
        ("Applied Soft Computing", "Applied Soft Comp."),
        ("Artificial Intelligence", "Artif. Intell."),
        ("Multimedia Tools and Applications", "MTAP"),
        ("Applied Intelligence", "Applied Intell."),
        ("AI Communications", "AI Comm."),
    ]
    for a, b in repls:
        j = j.replace(a, b)
    j = re.sub(r"\s+", " ", j).strip()
    if len(j) > 50:
        j = j[:47] + "…"
    return j


def main():
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    if not src.exists():
        print(f"ERROR: source file not found: {src}")
        sys.exit(1)
    text = src.read_text(encoding="utf-8", errors="ignore")

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)

    pubs = []
    seen = set()
    for etype, block in split_entries(text):
        key, f = parse_fields(block)
        title = f.get("title", "").strip()
        if not title:
            continue
        year = f.get("year", "").strip()
        try:
            year_int = int(year)
        except Exception:
            year_int = 0
        sig = (title.lower()[:80], year_int)
        if sig in seen:
            continue
        seen.add(sig)
        pubs.append({
            "key": key,
            "type": etype,
            "category": category(etype, f),
            "title": title,
            "authors": normalize_authors(f.get("author", "")),
            "year": year_int,
            "venue": venue_short(etype, f),
            "url": f.get("url", "").strip(),
            "doi": f.get("doi", "").strip(),
            "bibtex": block.strip(),
        })

    pubs.sort(key=lambda p: (-p["year"], p["category"], p["title"].lower()))

    OUT_JSON.write_text(json.dumps(pubs, ensure_ascii=False, indent=2), encoding="utf-8")
    OUT_JS.write_text("window.PUBLICATIONS = " + json.dumps(pubs, ensure_ascii=False) + ";", encoding="utf-8")

    print(f"OK — {len(pubs)} publications written.")
    print(f"  JSON:  {OUT_JSON.relative_to(ROOT)}")
    print(f"  JS:    {OUT_JS.relative_to(ROOT)}")
    print()
    yr = Counter(p["year"] for p in pubs)
    print("Per year:")
    for y in sorted(yr):
        print(f"  {y}: {yr[y]}")


if __name__ == "__main__":
    main()
