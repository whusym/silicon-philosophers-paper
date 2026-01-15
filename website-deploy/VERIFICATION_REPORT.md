# Website Content Verification Report

## ✅ Verified Numbers and Claims

### Abstract Section
- ✅ **N=277 professional philosophers** - Correct (line 148 in paper)
- ✅ **Seven LLMs evaluated** - Correct (GPT-5.1, GPT-4o, Claude Sonnet 4.5, Llama 3.1 8B, Llama FT, Mistral 7B, Qwen 3-4B)
- ✅ **"1.4–2.4× lower variance"** - Correct (Table caption line 171: "Human philosophers show 1.4--2.4$\times$ higher per-question variance than all LLMs")

### Key Findings Cards

#### Card 1: "1.4–2.4× Lower Variance"
✅ **VERIFIED** - Paper line 171 in Table 1 caption

#### Card 2: "6→1 Dimensional Collapse"
⚠️ **NEEDS REVISION** - Paper states:
- Humans: 6 components each ≥2% variance, PC1 = 7.5%, top 6 = 22.4%
- LLMs: top 6 = 28-34% variance (more compressible)
- Paper says "LLM disagreement collapses onto fewer dimensions" NOT specifically "1 dimension"

**Suggested fix:** Change "6→1" to "Fewer Dimensions" or "28-34%" to match paper

#### Card 3: "68.9pp Spurious Effects"
✅ **VERIFIED** - Table 3, line 297: Ancient Phil → Aristotelian = +68.9 pp (LLM avg) vs +1.9 pp (ground truth)

#### Card 4: "7/7 Systematic Failure"
✅ **VERIFIED** - All 7 models listed show over-correlation

### Table 3: Specialist Effects
✅ **All values verified:**
- Bio → Biological: GT +11.4 pp, LLM +43 pp, 4/7*** (line 295)
- Bio → Psychological: GT +4.1 pp, LLM -65.7 pp, 3/7*** (line 296)
- Ancient → Aristotelian: GT +1.9 pp, LLM +68.9 pp, 7/7*** (line 297)

### Methodology Section
✅ **277 philosophers** - Correct
✅ **PhilPeople.org and PhilPapers** - Correct data sources
✅ **Five-stage pipeline** - Matches Figure 2 in paper
✅ **DPO fine-tuning** - Correct (lines 208-216 in paper)
✅ **Entropy, KL-divergence, PCA** - All mentioned in Methods

### Figures
✅ **figure1_8panel.png** - Correct figure showing response matrices
✅ **silicon_sampling_pipeline.svg** - Correct workflow figure
✅ **step-pipeline.svg** - Correct 5-stage pipeline

## ⚠️ Issue Found: "6→1" Claim

**Current website text:**
> "Human disagreement spans 6 principal components; LLMs collapse this to essentially 1 dimension"

**What paper actually says (line 473):**
> "All models capture more variance in their top-6 components (28--34%) than humans (22.4%), indicating LLM disagreement collapses onto fewer dimensions."

And (line 942):
> "These results reveal that philosophical disagreement is multi-dimensional, with no single dimension dominating (PC1 explains 7.5%). The top 6 components together explain 22.4% of variance. LLM responses are more compressible (28--34% variance in top-6), consistent with heterogeneity collapse."

**Analysis:**
- Humans: 6 components explain 22.4% variance (PC1 = 7.5%, no single dimension dominates)
- LLMs: 6 components explain 28-34% variance (MORE concentrated in fewer dimensions)
- Paper does NOT claim LLMs collapse to "1" dimension specifically
- More accurate: LLMs are "more compressible" and collapse onto "fewer dimensions"

## Recommended Fix

Change the finding card from:
```
<div class="finding-number">6→1</div>
<div class="finding-label">Dimensional Collapse</div>
<p>Human disagreement spans 6 principal components; LLMs collapse this to essentially 1 dimension</p>
```

To:
```
<div class="finding-number">28-34%</div>
<div class="finding-label">Dimensional Collapse</div>
<p>LLMs capture 28-34% variance in top 6 components vs. 22.4% for humans, collapsing disagreement onto fewer dimensions</p>
```

Or alternatively:
```
<div class="finding-number">↓ Fewer</div>
<div class="finding-label">Dimensional Collapse</div>
<p>LLM disagreement collapses onto fewer dimensions than human philosophers (more compressible structure)</p>
```

## Summary

- **9 of 10 claims verified** ✅
- **1 claim needs revision** (6→1 dimensional collapse)
- All table values correct
- All figures present and correct
- Sample sizes accurate
- Model names and counts accurate

The website is 90% accurate. Only the "6→1" claim is an oversimplification not directly supported by the paper text.
