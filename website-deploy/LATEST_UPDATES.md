# Latest Website Updates - January 14, 2026

## Changes Made

### 1. ✅ Key Findings: Boxes → Bullet Points
**Before:** Four colored boxes with large numbers (1.4-2.4×, 28-34%, 68.9pp, 7/7)

**After:** Clean bullet list without specific numbers:
- **Lower Variance:** LLMs produce responses with dramatically reduced heterogeneity compared to human philosophers across all domains
- **Dimensional Collapse:** LLMs collapse disagreement onto fewer dimensions than humans, creating artificial structure
- **Spurious Specialist Effects:** LLMs predict domain specialists hold stereotypically aligned views, far exceeding reality
- **Systematic Failure:** All evaluated models (GPT-5.1, GPT-4o, Claude 4.5, Llama, Mistral, Qwen) show over-correlation

**Rationale:** Specific numbers are shown later in the detailed results sections. The high-level findings now focus on qualitative insights.

---

### 2. ✅ Reordered Sections: Workflow Before Methodology
**New Order:**
1. Abstract
2. Key Findings
3. **Silicon Sampling Workflow** ← Moved up
4. Methodology
5. Visual Results
6. Spurious Specialist Effects (Table)
7. Implications for AI Alignment
8. About This Work
9. Contact & Collaboration

**Rationale:** Users now see the conceptual workflow before diving into the detailed experimental pipeline.

---

### 3. ✅ Updated Figure Citation
**Before:**
> **Figure 1:** Response matrices comparing human philosophers (left panels) and LLM simulations (right panels).

**After:**
> **Figure 4 (Appendix):** Response matrices for human philosophers and all seven LLM simulations.
> Each panel shows 277 philosophers (rows) × 100 questions (columns). Human per-question variance (0.062)
> exceeds all LLMs (0.026–0.043), demonstrating systematic heterogeneity collapse across model architectures and scales.

**Rationale:** Properly cites the figure as it appears in the paper appendix (Section "Heterogeneity Collapse Across All Models", Figure 4). Includes exact variance numbers from the paper.

---

## Files Modified

### `index.html`
- Removed `.finding-grid` and `.finding-card` structure
- Changed Key Findings to `<ul>` bullet list
- Moved Silicon Sampling Workflow section before Methodology
- Updated figure caption to cite "Figure 4 (Appendix)" with paper-accurate description

### `style.css`
- Removed grid-based `.finding-grid`, `.finding-card`, `.finding-number`, `.finding-label` styles
- Added simple bullet list styling for `#key-findings ul` and `#key-findings li`
- Removed responsive CSS references to `.finding-grid` and `.finding-number`

---

## Verification

✅ Key Findings now bullet points (no specific numbers)
✅ Silicon Sampling Workflow appears before Methodology
✅ Figure 4 properly cited with appendix reference
✅ Figure caption matches paper (variance: 0.062 vs 0.026-0.043)
✅ All sections flow logically
✅ CSS cleaned up (no unused styles)
✅ Responsive design maintained

---

## Current Section Order

1. **Header** - Title, authors, buttons
2. **Abstract** - Overview with bullet points
3. **Key Findings** - 4 bullets (no numbers)
4. **Silicon Sampling Workflow** - Figure 1 (4-stage workflow)
5. **Methodology** - 5-stage experimental pipeline
6. **Visual Results** - Figure 4 (8-panel response matrices)
7. **Spurious Specialist Effects** - Table 3
8. **Implications for AI Alignment** - 4 implication cards
9. **About This Work** - Paper status, CS329H context, citation info
10. **Contact & Collaboration** - Email addresses

---

## Status: ✅ Complete and Ready

All requested changes implemented and tested. Website ready for deployment.
