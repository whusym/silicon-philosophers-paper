# Website Files - Minimal Update List

## Essential Files (Must Update)

These are the ONLY files you need to update/modify for the website:

### Core Files (3 files)
1. **`index.html`** - Main HTML structure
2. **`script.js`** - JavaScript functionality and data loading
3. **`style.css`** - Styling and layout

### Data File (1 file)
4. **`assets/questions_data.json`** - Philosopher response data (10MB)
   - Contains 127 questions × 277 philosophers × 8 models

## Supporting Files (Do NOT Update)

These files are supporting assets - no changes needed:

- `assets/paper.pdf` - Research paper
- `assets/figures/*.svg` - SVG diagrams
- `assets/figures/*.png` - PNG images
- `assets/figures/*.pdf` - PDF figures
- `assets/*.csv` - Data exports
- `assets/questions_data_backup_final.json` - Backup (old data)
- `assets/questions_data_old_backup.json` - Backup (older data)

---

## Minimal Update Checklist

If you're making changes, update ONLY:

```
website-deploy/
├── index.html          ← Update for HTML changes
├── script.js           ← Update for functionality changes
├── style.css           ← Update for styling changes
└── assets/
    └── questions_data.json   ← Update for data changes
```

**Total: 4 files maximum**

---

## File Sizes

```
index.html              ~15 KB
script.js               ~25 KB
style.css               ~10 KB
questions_data.json     ~10 MB (large!)
```

Note: `questions_data.json` is large (10MB) because it contains all philosopher responses for all questions across all models.
