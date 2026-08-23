# Better Poster

A0 landscape poster for *The Collapse of Heterogeneity in Silicon Philosophers*, using [Rafael Bailo's `betterposter` class](https://github.com/rafaelbailo/betterposter-latex-template) (Mike Morrison's design).

The center column is the adequacy claim for a social world model. The only plot is the paper's existing human vs.\ Claude Sonnet 4.5 response matrix.

## Compile

```bash
cd poster
pdflatex poster.tex
```

Requires a TeX Live install with `lato`, `cmbright`, `geometry`, `xcolor`, and `graphicx`.
