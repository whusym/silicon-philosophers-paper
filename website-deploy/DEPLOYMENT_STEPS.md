# GitHub Pages Deployment - Step-by-Step Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Terminal/Command line access

---

## Option 1: Deploy via Git Command Line (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in top-right corner → **"New repository"**
3. Fill in repository details:
   - **Repository name:** `silicon-philosophers` (or any name you prefer)
   - **Description:** "The Collapse of Heterogeneity in Silicon Philosophers - Research Website"
   - **Visibility:** ✅ **Public** (required for free GitHub Pages)
   - **Do NOT check:** "Initialize with README" (we have our own files)
4. Click **"Create repository"**

### Step 2: Initialize Git and Push Files

Open Terminal and navigate to the website folder:

```bash
cd /Users/jeremyshi/courses/cs329h-f25/project/website-deploy
```

Initialize git and push to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial website deployment"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `jeremyshi` and you named the repo `silicon-philosophers`:
```bash
git remote add origin https://github.com/jeremyshi/silicon-philosophers.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu bar)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**

### Step 4: Wait for Deployment

GitHub will automatically build your site. This takes 1-3 minutes.

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://jeremyshi.github.io/silicon-philosophers/
```

---

## Option 2: Deploy via GitHub Web Interface

### Step 1: Create Repository (same as above)

Follow Step 1 from Option 1.

### Step 2: Upload Files via Web Interface

1. After creating the repository, click **"uploading an existing file"**
2. Drag and drop ALL files from `website-deploy` folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/` folder (with all figures inside)
3. Add commit message: "Initial website deployment"
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages (same as Option 1)

Follow Step 3 from Option 1.

---

## Troubleshooting

### Issue: 404 Error After Deployment

**Solution:**
- Wait 2-3 minutes for GitHub to build the site
- Make sure the repository is **Public**
- Check that `index.html` is in the root folder (not in a subdirectory)

### Issue: Images Not Loading

**Solution:**
- Verify `assets/figures/` folder was uploaded correctly
- Check that image paths in `index.html` are relative: `assets/figures/...`
- Do NOT use absolute paths like `/Users/...`

### Issue: GitHub Pages Option Not Available

**Solution:**
- Make sure repository is **Public** (not Private)
- Free GitHub accounts can only use GitHub Pages with public repositories

---

## Updating the Website Later

After initial deployment, to update content:

```bash
cd /Users/jeremyshi/courses/cs329h-f25/project/website-deploy

# Make your changes to files...

# Stage changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push
```

GitHub will automatically rebuild and deploy within 1-3 minutes.

---

## Files to Deploy

Make sure these files are in your repository:

```
website-deploy/
├── index.html          ✅ Main webpage
├── style.css           ✅ Styling
├── script.js           ✅ Interactive features
├── README.md           ✅ Documentation
└── assets/
    └── figures/
        ├── figure1_8panel_bc.png           ✅
        ├── silicon_sampling_pipeline.svg   ✅
        └── step-pipeline.svg               ✅
```

**Important:** The `assets/figures/` folder must maintain its structure.

---

## Custom Domain (Optional)

If you want to use a custom domain like `silicon-philosophers.com`:

1. Buy domain from a registrar (Namecheap, GoDaddy, etc.)
2. In repository Settings → Pages → Custom domain, enter your domain
3. Configure DNS at your registrar:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
4. Check "Enforce HTTPS" in GitHub Pages settings

---

## Quick Reference

**Repository URL format:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

**Website URL format:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Special case:** If you name your repository `YOUR_USERNAME.github.io`, the site will be at:
```
https://YOUR_USERNAME.github.io/
```

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

**Ready to deploy!** Follow Option 1 for the most control, or Option 2 if you prefer the web interface.
