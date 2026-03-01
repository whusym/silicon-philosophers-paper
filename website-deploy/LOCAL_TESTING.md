# Local Testing Guide

## Quick Start (Simplest Method)

### Option 1: Python HTTP Server (Recommended)
```bash
cd website-deploy
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

To stop: Press `Ctrl+C`

---

## Alternative Methods

### Option 2: PHP Server
```bash
cd website-deploy
php -S localhost:8000
```
Open: **http://localhost:8000**

### Option 3: Node.js http-server
```bash
# Install once
npm install -g http-server

# Run
cd website-deploy
http-server -p 8000
```
Open: **http://localhost:8000**

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## Testing Checklist

Once the server is running, verify:

1. **Page Loads**
   - [ ] Website opens without errors
   - [ ] No console errors (press F12 → Console tab)

2. **Model Selector**
   - [ ] All 8 models appear in dropdown:
     - Human
     - Claude Sonnet 4.5
     - GPT-4o
     - GPT-5.1
     - Llama 3.1 8B
     - Llama 3.1 8B (FT)
     - Mistral 7B
     - Qwen 3 4B

3. **Questions Load**
   - [ ] 127 questions visible
   - [ ] Questions display correctly
   - [ ] Can switch between questions

4. **Visualizations**
   - [ ] Charts render properly
   - [ ] Data displays for selected model
   - [ ] No "undefined" or "NaN" values

5. **Data Integrity**
   - [ ] 277 philosophers total
   - [ ] Values between 0 and 1
   - [ ] Contradictory pairs sum to 1.0

---

## Troubleshooting

### CORS Errors
If you see CORS errors in console:
- Use Python/PHP/http-server (not just opening file://)
- Don't open `index.html` directly in browser

### Data Not Loading
Check browser console (F12) for:
```
Failed to load questions_data.json
```
Solution: Make sure you're in `website-deploy/` directory when starting server

### Port Already in Use
If port 8000 is busy:
```bash
python3 -m http.server 8080  # Try different port
```

---

## Development Workflow

1. **Start server**
   ```bash
   cd website-deploy
   python3 -m http.server 8000
   ```

2. **Make changes** to HTML/JS/CSS

3. **Refresh browser** to see changes (Cmd+R or Ctrl+R)

4. **For data changes**: Replace `assets/questions_data.json` and hard refresh (Cmd+Shift+R)

---

## File Sizes to Monitor

- `questions_data.json` is 10MB - this is normal
- Initial page load may take 1-2 seconds
- Once loaded, interactions should be instant

---

## Quick Commands

```bash
# Test locally
cd website-deploy && python3 -m http.server 8000

# Validate JSON data
python3 -c "import json; json.load(open('assets/questions_data.json')); print('✓ JSON valid')"

# Check file sizes
ls -lh assets/questions_data.json
ls -lh index.html script.js style.css
```
