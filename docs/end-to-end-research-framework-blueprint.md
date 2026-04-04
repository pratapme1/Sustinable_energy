# End-to-End Research Framework Blueprint

## Purpose

Use this blueprint when research needs to support a real decision, not just produce a summary.
It is designed for market, technical, product, policy, diligence, and strategy research.

A successful research project should end with:

- a clearly stated decision or set of decisions
- a small number of evidence-backed findings
- explicit uncertainties and contradictions
- a recommendation or decision-ready option set
- a traceable audit trail from conclusions back to sources

## When To Use This Blueprint

Use this framework when at least one of the following is true:

- the topic is broad, ambiguous, or high stakes
- the answer depends on current external facts
- the project spans documents, data, repos, interviews, or web research
- leadership needs a recommendation, not a literature dump
- the cost of being wrong is material

Do not use the full process for trivial questions. Scale the depth to the risk, timeline, and decision value.

## Required Capabilities

Minimum capabilities:

- current web search and browsing
- access to internal repos, documents, and datasets
- a place to store notes, evidence, and intermediate syntheses
- a reproducible analysis environment for data work

Helpful but optional:

- domain experts for interviews
- custom skills, assistants, or specialist tooling
- survey infrastructure
- financial or scenario modeling tools

## Operating Principles

1. Decision-first
   Every workstream must connect to a decision, recommendation, or risk.

2. Hypothesis-driven
   Start with provisional hypotheses so the research can confirm, refine, or disprove them.

3. Source-ranked
   Prefer internal primary materials, raw data, official documentation, filings, papers, and direct interviews over summaries.

4. Triangulated
   Important claims should be supported by more than one source type whenever possible.

5. Fact versus inference
   Separate observed facts, calculations, interpretations, and recommendations.

6. Time-aware
   Date-stamp all time-sensitive claims. Old facts are often wrong facts.

7. Auditability
   If a claim matters, someone should be able to trace it back to evidence quickly.

8. Continuous synthesis
   Do not wait until the end to think. Synthesize after every major research block.

## Standard Deliverables

Every serious project should generate these artifacts:

| Artifact | Purpose | Minimum Format |
| --- | --- | --- |
| Research brief | Defines the decision, scope, audience, and success criteria | Markdown doc |
| Issue tree | Breaks the problem into MECE or near-MECE question branches | Diagram or outline |
| Hypothesis log | Tracks starting hypotheses and how evidence updates them | Table |
| Source register | Lists all important sources and their quality tier | Table |
| Evidence matrix | Tracks claims, evidence, contradictions, and confidence | Table |
| Value chain map | Shows input supply, processing steps, stakeholders, and revenue pools | Diagram or table |
| Analysis workbook | Stores calculations, comparisons, models, and charts | Notebook or spreadsheet |
| Interview guide | Standardizes primary research conversations | Markdown doc |
| Synthesis memo | Converts evidence into findings and implications | Markdown doc |
| QA log | Records fact checks, source checks, and unresolved issues | Table |
| Final decision memo | Presents findings, recommendation, risks, and next steps | Markdown doc or deck |

## End-to-End Workflow

### Phase 0: Intake And Mandate

### Objective

Clarify why the research exists and who will use it.

### Key Questions

- What decision must this work support?
- Who is the sponsor and final audience?
- What is the time horizon?
- What constraints matter most?
- What would make this research useful versus useless?

### Actions

- identify the sponsor, stakeholders, and decision owner
- define the deadline and delivery format
- capture known assumptions and non-goals
- document access needs: repos, docs, data, SMEs, search permissions

### Outputs

- intake note
- stakeholder map
- initial constraint list

### Exit Criteria

- sponsor and audience are known
- timeline is clear
- the research problem is concrete enough to scope

### Phase 1: Decision Framing

### Objective

Turn a vague topic into a precise research brief.

### Actions

- define the exact decision to support
- state the objective in one sentence
- define what is in scope and out of scope
- define success criteria and acceptable confidence level
- list major risks of error

### Output Template

```md
# Research Brief

## Decision To Support
What decision will this research inform?

## Objective
What does this project need to determine?

## Audience
Who will read this and act on it?

## Scope
What is included?

## Out Of Scope
What will not be covered?

## Constraints
Timeline, geography, budget, data access, regulatory limits.

## Success Criteria
What does a good final answer look like?
```

### Exit Criteria

- one clear decision statement exists
- the boundaries of the project are explicit
- success criteria are documented

### Phase 2: Issue Tree And Hypotheses

### Objective

Break the problem into answerable sub-questions and define the starting point of belief.

### Actions

- build an issue tree with 4 to 8 major branches
- convert each branch into specific research questions
- write 1 to 3 hypotheses per major branch
- list disconfirming signals for each hypothesis

### Example Branch Types

- market and demand
- input supply or feedstock availability
- technical feasibility
- cost and economics
- value chain and business model
- competition and alternatives
- regulation and policy
- ecosystem and partnerships
- operating model and execution risk
- stakeholder adoption

### Hypothesis Template

| ID | Question | Hypothesis | Disconfirming Signal | Status |
| --- | --- | --- | --- | --- |
| H1 | What is driving adoption? | Adoption is being driven primarily by cost decline rather than policy | Market growth persists where subsidies weaken | Open |

### Exit Criteria

- each major branch is answerable
- hypotheses are explicit
- the team knows what evidence would change its mind

### Phase 3: Research Design

### Objective

Map each question to the right method before collecting evidence.

### Method Options

- desk research
- repo and code audit
- dataset analysis
- expert interviews
- customer or user interviews
- benchmark comparison
- survey research
- scenario modeling
- regulatory review

### Actions

- assign a method to each research question
- define the unit of analysis: market, region, company, user segment, technology, policy regime
- define the comparison set
- define the time period
- identify what must be quantified versus assessed qualitatively

### Research Design Table

| Question | Method | Primary Sources | Secondary Sources | Output |
| --- | --- | --- | --- | --- |
| What is the demand outlook? | Dataset analysis + desk research | internal demand data, official energy data | industry reports | trend chart + finding |

### Exit Criteria

- every key question has a method
- the workstream design is proportional to the decision risk

### Phase 4: Source Strategy And Access Setup

### Objective

Establish where evidence will come from and what access is still missing.

### Source Hierarchy

Tier 1:

- internal primary data
- internal repos and system logs
- raw datasets
- official documentation
- filings
- standards
- regulations
- direct interviews

Tier 2:

- peer-reviewed papers
- reputable datasets
- major research institutes
- established analyst reports

Tier 3:

- company marketing material
- blogs
- summaries
- AI outputs

Tier 3 sources may be useful for discovery, but not as sole support for important claims.

### Actions

- inventory available internal sources first
- map required external sources
- secure repo access and document access
- verify search capability for current information
- log all access gaps and owners

### Output Template

| Source | Type | Tier | Access Status | Notes |
| --- | --- | --- | --- | --- |
| Internal project repo | code | 1 | available | use for implementation status |

### Exit Criteria

- critical access blockers are identified
- source plan exists for every major workstream

### Phase 5: Evidence Collection

### Objective

Collect evidence systematically and log it in a way that supports later synthesis.

### Rules

- log important claims as you go
- capture the exact source and date
- note whether the claim is observed, calculated, or inferred
- record contradictions immediately
- avoid copying large passages; summarize and tag relevance

### Evidence Matrix Template

| Claim ID | Claim | Source | Source Type | Date | Evidence Summary | Confidence | Contradictions | Why It Matters |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | Renewable share is rising in target markets | OWID energy data | dataset | 2026-01-26 dataset release | multi-year increase in `renewables_share_elec` | Medium | some regional volatility | affects investment thesis |

### Exit Criteria

- each question has supporting evidence or an explicit gap
- critical claims are logged in the evidence matrix

### Phase 6: Primary Research

### Objective

Use interviews or direct outreach to test assumptions that cannot be resolved from documents alone.

### Use When

- stakeholder behavior matters
- the implementation reality may differ from written sources
- the market is changing faster than formal publications
- tradeoffs are not visible in public data

### Actions

- define the interview objective
- segment interviewees by perspective
- use a semi-structured guide
- separate facts from opinions in notes
- synthesize common themes and outliers after each batch

### Interview Guide Template

```md
# Interview Guide

## Objective
What does this interview need to validate or invalidate?

## Interviewee Type
Operator, policymaker, buyer, engineer, analyst, investor, customer.

## Core Questions
1. What is changing fastest in this space?
2. What assumptions do outsiders usually get wrong?
3. What are the binding constraints?
4. What evidence would change your view?

## Notes Structure
- facts
- judgments
- anecdotes
- follow-up items
```

### Exit Criteria

- major assumptions have been pressure-tested
- recurring themes and disagreements are documented

### Phase 7: Analysis And Modeling

### Objective

Convert raw evidence into defensible analysis.

### Analysis Types

- descriptive analysis
- trend analysis
- comparative benchmarking
- segmentation
- unit economics
- scenario planning
- sensitivity analysis
- risk scoring

### Rules

- document assumptions
- make calculations reproducible
- keep raw inputs separate from transformed outputs
- label estimates clearly
- test whether findings survive alternative assumptions

### Output Examples

- benchmark table
- scenario model
- adoption curve
- cost comparison
- regulatory impact matrix
- risk heatmap

### Exit Criteria

- key metrics are computed
- assumptions are explicit
- major conclusions do not depend on hidden calculations

### Phase 8: Synthesis

### Objective

Turn fragmented evidence into a small number of important findings.

### Finding Structure

Every finding should have:

- the finding itself
- the evidence behind it
- the implication
- the caveat or uncertainty

### Finding Template

```md
## Finding
[What is true?]

### Evidence
[What evidence supports it?]

### Implication
[Why does it matter?]

### Caveat
[What could weaken or reverse this?]
```

### Rules

- prioritize what matters over what is merely interesting
- collapse overlapping observations into one clear finding
- separate insight from recommendation

### Exit Criteria

- top questions have been answered
- findings are concise and evidence-backed

### Phase 9: QA, Challenge, And Red Teaming

### Objective

Challenge the work before delivery.

### QA Checklist

- every critical claim has a source
- time-sensitive claims are dated
- charts reconcile to source data
- calculations are reproducible
- contradictory evidence is acknowledged
- alternative explanations have been considered
- recommendations follow from findings
- unresolved gaps are explicit

### Red-Team Questions

- What would prove this wrong?
- Which assumption is carrying too much weight?
- Are we mistaking correlation for causation?
- Are we over-trusting one source family?
- Are we extrapolating beyond the data?

### Exit Criteria

- no critical unsupported claims remain
- residual uncertainty is honestly stated

### Phase 10: Delivery And Follow-Through

### Objective

Deliver a decision-ready output and define what happens next.

### Final Deliverable Structure

```md
# Decision Memo

## Executive Summary
3 to 5 key findings and the recommendation.

## Decision Context
Why this matters now.

## Findings
Evidence-backed conclusions.

## Recommendation Or Options
Preferred path and alternatives.

## Risks And Uncertainties
What remains unknown or unstable.

## Next Steps
What should happen immediately after this memo.

## Appendix
Methods, sources, assumptions, detailed tables.
```

### Exit Criteria

- the audience can act on the output
- next steps and open questions are clear

## Evidence Standards

### Claim Types

Use these labels when writing:

- Fact: directly observed in a reliable source
- Calculation: derived from data or model inputs
- Inference: interpretation of facts or calculations
- Judgment: expert view where evidence is incomplete
- Recommendation: proposed action based on the above

### Confidence Scale

| Level | Meaning |
| --- | --- |
| High | supported by strong primary evidence with low contradiction |
| Medium | supported by good evidence but with some gaps or sensitivity |
| Low | preliminary, sparse, or highly assumption-dependent |

### Contradiction Handling

When two credible sources disagree:

1. verify dates and definitions
2. verify scope and units
3. check whether both can be true under different assumptions
4. record the contradiction in the evidence matrix
5. explain which source is preferred and why

## Decision Gates

Use gates to stop weak work from moving downstream.

| Gate | Question | Required Output |
| --- | --- | --- |
| Gate 1 | Is the decision framed well enough to proceed? | research brief |
| Gate 2 | Is the issue tree and method design good enough? | issue tree + research design |
| Gate 3 | Is the evidence base sufficient for synthesis? | populated evidence matrix |
| Gate 4 | Has the work passed QA? | QA log + final memo draft |

## Recommended File Structure

```text
research/
  00_intake/
    intake-note.md
    stakeholder-map.md
  01_brief/
    research-brief.md
  02_structure/
    issue-tree.md
    hypothesis-log.csv
  03_sources/
    source-register.csv
    search-log.md
  04_evidence/
    evidence-matrix.csv
    interview-notes/
  05_analysis/
    notebooks/
    models/
    charts/
  06_synthesis/
    synthesis-memo.md
    qa-log.md
  07_delivery/
    decision-memo.md
    appendix.md
```

## Recommended Cadence

For multi-day or multi-week projects:

- daily: update evidence matrix and synthesis notes
- twice weekly: review issue tree and decide what to stop or deepen
- weekly: QA pass on claims, assumptions, and contradictions
- before delivery: red-team review and recommendation challenge

## Minimum Viable Research Loop

If time is short, use this loop repeatedly:

1. define the next question
2. gather the best available evidence
3. log the claim and source
4. synthesize what changed
5. decide whether to deepen, stop, or pivot

This is the smallest unit of disciplined research.

## Applied To This Repository

This workspace already contains useful starting assets:

- `data/energy-data`: local OWID energy dataset and codebook
- `data/pudl`: large US energy data pipeline and source definitions
- `data/hsds-examples`: NREL resource analysis notebooks and examples
- `research-tools`: local research-agent implementations and experiments

For this repo, the initial research order should usually be:

1. local datasets and codebooks
2. local repos and internal documentation
3. external official sources and current web research
4. expert interviews or targeted outreach if needed

## First-Day Kickoff Checklist

- write the research brief
- define the issue tree
- set up the source register and evidence matrix
- inventory accessible repos, docs, and datasets
- identify what requires current web search
- identify what requires SME validation
- define the first three research loops

## Definition Of Done

The research is done when:

- the decision has been answered directly
- the main findings are supported by evidence
- the biggest uncertainties are explicit
- the recommendation or option set is clear
- another person can trace the logic from question to answer

This blueprint should be treated as an operating standard. Scale it up or down, but do not skip the core controls: decision framing, source ranking, evidence logging, synthesis, and QA.
