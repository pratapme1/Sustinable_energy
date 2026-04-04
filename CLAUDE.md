# CLAUDE.md — Sustinable_Energy Project

## Project Identity
**Project**: India Waste-to-Energy — Wet Waste & Agricultural Waste → Energy
**Founder**: Vi
**Stage**: Research & Pitch Development
**Primary Market**: India (technology sourced globally)

---

## Workspace Rules — Critical

### `research/` — ALL outputs go here
This is where every research finding, evidence file, analysis, synthesis, and final document lives.
Structure: `research/00_intake/`, `01_brief/`, `02_structure/`, `03_sources/`, `04_evidence/`, `05_analysis/`, `06_synthesis/`, `07_delivery/`

### `research_codex/` — REFERENCE ONLY, never the output destination
Read these files to get context, direction, and background before doing research.
They inform scope and hypotheses — they are NOT findings and must NEVER be used as research output.
After reading codex for context, go do independent web-verified research and write outputs to `research/`.

---

## Non-Negotiable Rules Every Conversation

### 1. Output destination is always `research/`
- All findings, evidence, analysis, synthesis, deliverables → `research/`
- Never write research outputs to `research_codex/`

### 2. Codex is context, not content
- Read `research_codex/` to understand scope, hypotheses, and direction
- Then independently verify everything via web research
- Never present a codex statement as a finding without verifying it from a primary source

### 3. Deep research means exhaustive — no gaps allowed
- Every sub-category within a workstream must be individually and fully researched
- Do not group or conflate related categories (e.g. household MSW ≠ institutional food waste — different markets)
- Do not pre-score a stream as "lower priority" and give it less research depth — research all fully, THEN score
- If a workstream covers N feedstock types, research all N before writing synthesis
- No stream in scope should require a follow-up question from Vi to be covered

### 4. Web research is mandatory for every factual claim
- Use WebSearch + WebFetch + Firecrawl for all data points
- Every critical claim needs a URL citation
- Distinguish: Fact (sourced) vs Inference (interpretation) vs Judgment (expert view)
- Flag confidence: [High / Medium / Low]

### 4. Follow the blueprint phases in order
Phases defined in `research_codex/00_framework/india-waste-to-energy-research-blueprint.md`:
- **Phase A**: Frame the venture question
- **Phase B**: Segment waste streams + match to energy pathways
- **Phase C**: Quantify India + prioritize clusters
- **Phase D**: Benchmark technology + players globally
- **Phase E**: Build economics + operating model
- **Phase F**: Build the pitch thesis

### 5. Follow the 12 workstreams
1. Problem Space & Why Now
2. Waste Stream Segmentation
3. Waste-to-Energy Pathway Matching
4. India Market Baseline
5. Global Technology Benchmark
6. Customer, Offtake & Revenue Model
7. Competitor & Ecosystem Landscape
8. Economics & Investability
9. Implementation & Operating Model
10. Policy, Regulation & Public Value
11. Risks, Failure Modes & Diligence
12. Entry Strategy Recommendation

### 6. Evidence matrix updated every session
- File: `research/04_evidence/evidence-matrix.md`
- Every verified claim logged with source, date, confidence
- Contradictions recorded immediately

### 7. Multi-audience writing
- **Investors**: market size, economics, defensibility, risk
- **Founder (Vi)**: strategic clarity, execution decisions
- **Government**: public benefit, policy alignment, waste reduction
- **Citizens**: accessible narrative, local benefit

---

## Session Start Protocol (Every Conversation)

1. Read `research_codex/README.md` — understand current reference state
2. Read `research_codex/00_framework/india-waste-to-energy-research-blueprint.md` — for direction
3. Read `research/04_evidence/evidence-matrix.md` — see what's already verified
4. Check `research/07_delivery/` — see latest document version
5. Ask Vi: "Which workstream or phase do you want to progress today?"
6. Do NOT repeat completed work — build forward

---

## Research Tools Available
- **WebSearch + WebFetch**: Real-time web research
- **Firecrawl** (plugin): Deep site crawling
- **Playwright** (plugin): Live browser, dynamic content
- **Context7 + Ref MCP**: Documentation lookup
- **Local data repos** in `data/`: owid/energy-data, pudl, hsds-examples
- **Research tools** in `research-tools/`: gpt-researcher, storm, deep-research
- **Python venv** at `.venv/`: gpt-researcher, knowledge-storm, firecrawl-py, pandas, langchain

---

## Output Quality Standards
- No unsourced statistics
- No generic statements ("India has a large population...")
- Every number has a source and a date
- Every technology claim has a real-world example
- Every business model claim has a comparable company
- Written for a skeptical investor, not a sympathetic reader

---

## Key Reference Files (Read for context — never copy as findings)
- `research_codex/00_framework/india-waste-to-energy-research-blueprint.md` — 12 workstreams, phases, scorecard
- `research_codex/00_framework/end-to-end-research-framework-blueprint.md` — generic research methodology
- `research_codex/07_delivery/india-waste-to-energy-project-document-v1.md` — V1 draft (reference only)
- `docs/end-to-end-research-framework-blueprint.md` — original framework blueprint

---

## Final Deliverable Target
`research/07_delivery/india-waste-to-energy-project-document-FINAL.md`

Structure (17 sections):
1. Executive Summary
2. Vision and Thesis
3. Problem Space and Urgency
4. India Waste Landscape
5. Target Waste Streams
6. Waste-to-Energy Pathway Map
7. Market Size and Cluster Prioritization
8. Global Benchmark and Technology Options
9. India Player and Ecosystem Landscape
10. Business Model and Revenue Stack
11. Unit Economics and Financial Logic
12. Implementation and Operating Model
13. Policy, Regulation, and Public Value
14. Risks and Mitigation
15. Recommended Entry Strategy
16. Roadmap and Capital Needs
17. Appendix, Methods, and Sources
