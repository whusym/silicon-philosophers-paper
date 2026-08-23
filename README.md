# Silicon Philosophers — Better Poster

Standalone A0 landscape poster for *The Collapse of Heterogeneity in Silicon Philosophers* (Yuanming Shi and Andreas Haupt).

Uses [Rafael Bailo’s `betterposter` class](https://github.com/rafaelbailo/betterposter-latex-template) (Mike Morrison’s design).

The center column is the social-world-model adequacy claim. The only plot is the paper’s existing human vs Claude Sonnet 4.5 response matrix.

## Compile

```bash
pdflatex poster.tex
```

Needs TeX Live with `lato`, `cmbright`, `geometry`, `xcolor`, and `graphicx`. Output: `poster.pdf`.

## Files

| Path | What it is |
|---|---|
| `poster.tex` | Poster source |
| `betterposter.cls` | Template class (GPL-3.0) |
| `poster.pdf` | Compiled A0 poster |
| `poster-preview.png` | Raster of the compiled page |
| `figures/figure1_human_vs_sonnet.pdf` | Human vs Claude plot (print) |
| `figures/figure1_human_vs_sonnet.png` | Same plot (raster) |
| `img/qrcode.png` | QR to the paper site |
| `img/smartphoneWhite.png` | Template icon |
| `LICENSE` | GPL-3.0 for the class |

## Make this its own GitHub repo

This branch is a complete git history with only these files. From a clone of this branch:

```bash
gh repo create whusym/silicon-philosophers-betterposter --public --source=. --remote=origin --push
```

Or create an empty repo in the GitHub UI and:

```bash
git remote add origin https://github.com/whusym/silicon-philosophers-betterposter.git
git push -u origin HEAD:main
```
