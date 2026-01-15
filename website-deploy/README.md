# The Collapse of Heterogeneity in Silicon Philosophers - Project Website

This repository contains the source code for the project website hosted on GitHub Pages.

## Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository
2. Name it something like `silicon-philosophers` or use your username format: `username.github.io`
3. Make it **public** (required for GitHub Pages)
4. Don't initialize with README (we have our own files)

### Step 2: Upload Files

Upload all files from this `website-deploy` folder to your repository:

```bash
cd website-deploy
git init
git add .
git commit -m "Initial website deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the `main` branch and `/ (root)` folder
5. Click "Save"

GitHub will automatically build and deploy your site. It will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- Or if using `username.github.io` format: `https://YOUR_USERNAME.github.io/`

### Step 4: Update Links (Optional)

After deployment, you may want to update the following in `index.html`:

1. **Paper PDF link** (line with `id="paper-btn"`):
   - Upload your PDF to the repository
   - Update the href to point to the PDF

2. **Code repository link** (line with `id="code-btn"`):
   - Update the href to point to your GitHub code repository

3. **BibTeX** (in the `script.js` file):
   - Update the alert messages once you have actual links

## File Structure

```
website-deploy/
├── index.html          # Main HTML page
├── style.css           # Styling and responsive design
├── script.js           # Interactive features
├── README.md           # This file
└── assets/
    └── figures/        # Images and figures
        ├── figure1_8panel.png
        ├── silicon_sampling_pipeline.svg
        ├── silicon_sampling_pipeline.pdf
        ├── step-pipeline.svg
        └── step-pipeline.pdf
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Clear Communication**: Under review status and course context prominently displayed
- **Professional Layout**: Clean, academic paper website design
- **Fast Loading**: Optimized images and minimal dependencies

## Important Notes

### Paper Status
This website reflects a paper **under review**. The citation section has been intentionally removed. Users are directed to contact authors for the full paper.

### Course Context
The research originated from **CS329H: Human-Centered Natural Language Processing** (Fall 2025, Stanford University) and has been extended into a full research paper.

## Customization

### Colors

Edit the CSS variables in `style.css` (lines 10-18):

```css
:root {
    --primary-color: #2563eb;     /* Main blue color */
    --secondary-color: #64748b;   /* Gray color */
    --accent-color: #dc2626;      /* Red for emphasis */
    /* ... */
}
```

### Content

All content is in `index.html`. Key sections:

- **Abstract**: Lines 36-53
- **Key Findings**: Lines 56-83
- **Methodology**: Lines 87-102
- **Results**: Lines 105-127
- **Table**: Lines 130-175
- **Implications**: Lines 178-206
- **About This Work**: Lines 208-237 (Paper status, course context, citation info)
- **Contact**: Lines 239-247

## Testing Locally

To test before deployment:

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Browser Compatibility

Tested and works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Support

For issues or questions about deployment, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

## License

© 2026 Yuanming Shi and Andreas Haupt. All rights reserved.
