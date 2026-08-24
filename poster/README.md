# Better Poster

Standalone A0 landscape poster for *The Collapse of Heterogeneity in Silicon Philosophers*.

Uses [Rafael Bailo’s `betterposter` class](https://github.com/rafaelbailo/betterposter-latex-template) (Mike Morrison’s design).

The center column is the social-world-model adequacy claim. The only plot is the paper’s existing human vs Claude Sonnet 4.5 response matrix.

## Compile

```bash
cd poster
pdflatex poster.tex
```

Needs TeX Live with `lato`, `cmbright`, `geometry`, `xcolor`, and `graphicx`.

## Files

| Path | What it is |
|---|---|
| `poster.tex` | Poster source |
| `betterposter.cls` | Template class (GPL-3.0) |
| `poster.pdf` | Compiled A0 poster |
| `figures/figure1_human_vs_sonnet.pdf` | Human vs Claude plot |
| `img/qrcode.png` | QR to the paper site |
| `img/smartphoneWhite.png` | Template icon |
| `LICENSE` | GPL-3.0 for the class |
