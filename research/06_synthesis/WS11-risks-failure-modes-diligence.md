# WS11 — Risks, Failure Modes & Diligence
**Workstream**: 11 of 12
**Phase**: F — Build the Pitch Thesis
**Status**: Complete
**Last Updated**: 2026-04-03
**Evidence Claims**: C93–C99

---

## Executive Summary

India's CBG sector has a well-documented set of failure modes. Every known cause of plant failure is **operational and addressable** — none are fundamental to the technology or the policy framework. The sector's 10% LoI-to-commissioning rate is entirely explained by these failure modes, not by any intrinsic flaw in the CBG business model.

The six documented failure modes in order of frequency:
1. **Feedstock supply chain failure** — uncontracted, price-unprotected feedstock
2. **Digestate / bio-manure disposal crisis** — plants physically clogged with unsold manure
3. **Low capacity utilisation** — 20–60% vs European 80%+; seasonal feedstock drives this
4. **Wrong technology selection** — systems chosen for vendor convenience, not plant requirements
5. **Non-professional operations** — cost-cutting on staff; informal monitoring
6. **CGD connectivity gap** — only 15% of India's CBG plants are grid-connected; rest use expensive mobile cascades

The venture's operating model (formalised feedstock contracts, multi-feedstock co-digestion, digestate monetisation strategy, professional team, IoT monitoring, and PSA/membrane upgrading with grid injection as Phase 2 goal) is explicitly designed to address each of these. This section documents each risk, its evidence base, and the specific mitigation already built into the venture design.

---

## 1. Full Risk Register

### Risk 1: Feedstock Supply Disruption or Price Spike

**Evidence**: The NRB plant shut down following a 40% feedstock price hike. Early CBG models assumed ₹15–16/kg agricultural waste; actual prices rose to ₹25/kg in competitive supply zones. Feedstock pricing is identified as the single most disruptive variable in India's CBG sector.

**Mechanism**: Farmers and aggregators have no legal obligation to supply at agreed prices once they see market demand rising. Plants that rely on informal supply agreements have no remedy when prices rise or supply stops.

| Dimension | Detail |
|-----------|--------|
| **Probability** | High (for uncontracted feedstock); Low (for contracted multi-feedstock) |
| **Severity** | High — can make plant uneconomic or force shutdown |
| **Mitigation 1** | All feedstock under signed annual contracts with price caps (max 10% annual escalation) before construction begins |
| **Mitigation 2** | Multi-feedstock model: 3 independent feedstocks (manure + press mud + food waste) — no single source >40% of volume |
| **Mitigation 3** | Tipping-fee model for institutional feedstock (food waste, press mud) converts feedstock from a cost to a revenue — structurally immune to price spikes |
| **Mitigation 4** | 30-day buffer storage for solid feedstock (manure, straw) |
| **Residual risk** | Manure price increase if dairy cooperative demands payment; mitigated by digestate revenue-sharing — farmer gets free fertiliser in exchange for dung |

---

### Risk 2: Digestate Disposal / Bio-Manure Clogging

**Evidence**: "Plants are forced to store bio-manure for longer periods unless sold, leading to storage issues." For every 10 TPD CBG produced, approximately 25 TPD solid manure + 80 TPD liquid waste is generated. Without a market, this becomes a physical and financial crisis — the plant stops processing because storage is full. Mongabay India (2023) documented this as the most common operational bottleneck across India's CBG sector.

This is the single most underappreciated operational risk in India's CBG industry.

| Dimension | Detail |
|-----------|--------|
| **Probability** | High (if digestate unplanned); Low (if disposal/monetisation planned from Day 1) |
| **Severity** | High — can halt plant operations entirely |
| **Mitigation 1** | Digestate disposal agreements with adjacent farmers signed before commissioning (even if free at Phase 1) |
| **Mitigation 2** | Liquid digestate: pipeline-distributed to nearby fields within 2 km; eliminates truck requirement for liquid |
| **Mitigation 3** | Solid digestate: screw press separation; bulk sale to agri-input dealers from Day 1 |
| **Mitigation 4** | Phase 2: FCO-certified bagged biofertiliser product — converts the disposal problem into a revenue stream |
| **Residual risk** | Monsoon season: liquid digestate cannot be absorbed by flooded fields; need sealed lagoon storage for 30-60 day monsoon period |

---

### Risk 3: Low Capacity Utilisation (20–60%)

**Evidence**: Indian CBG plants average 20–60% utilisation vs European plants at 80%+. The primary driver is seasonal feedstock variability — paddy straw is only available Oct–Nov; sugarcane press mud Oct–Apr; food waste varies by institution type. Plants designed for single feedstock suffer most.

A plant operating at 50% utilisation for its first year has DSCR of ~0.7× at ₹54/kg CBG — below debt service threshold. This is the primary financial risk in Year 1.

| Dimension | Detail |
|-----------|--------|
| **Probability** | High for Year 1; Medium for Year 2; Low for Year 3+ |
| **Severity** | High in Year 1; reduces to Medium as feedstock supply chains mature |
| **Mitigation 1** | Multi-feedstock co-digestion: cattle manure is year-round base (50% of feedstock); seasonal feedstocks are supplements, not anchors |
| **Mitigation 2** | IREDA moratorium on principal repayment (12–18 months) reduces debt service in Year 1 |
| **Mitigation 3** | Working capital buffer of ₹8–12 crore built into CAPEX for Year 1 cash flow support |
| **Mitigation 4** | Dairy cooperative supply agreement guarantees minimum monthly manure volume (contractual floor) |
| **Financial model note** | Investor model assumes 50% Year 1, 80% Year 2, 100% Year 3+ — not full utilisation from Day 1 |

---

### Risk 4: Wrong Technology Selection

**Evidence**: The Sanjh plant case — chose a VPSA system for vendor convenience; system lacked H₂S and CO₂ recovery features; result: 80% biogas production efficiency only (vs 97%+ achievable). Technology selection without application-specific engineering is a common failure in India's smaller CBG projects.

| Dimension | Detail |
|-----------|--------|
| **Probability** | Low (for informed selection); Medium (for uninformed) |
| **Severity** | Medium — efficiency loss of 15–20% is significant; rarely causes shutdown but reduces revenue permanently |
| **Mitigation 1** | Use proven Indian technology (Praj RenGas™ or Enviropol) with track record of 140+ plants |
| **Mitigation 2** | Specify technology based on feedstock mix — CSTR for manure + food waste; two-stage if straw >30% |
| **Mitigation 3** | Require H₂S removal upstream of upgrading system regardless of technology chosen |
| **Mitigation 4** | EPC contract with performance warranty: guaranteed CBG output ≥ 14 TPD at specified feedstock input |
| **Residual risk** | Technology performance in monsoon (high humidity affects PSA efficiency); specify for Indian climate |

---

### Risk 5: Non-Professional Operations

**Evidence**: "When investors try to minimize operating cost and maintenance, recruiting non-professional staff, which eventually leads to closure of the plant." India's biogas sector lacks a trained operations workforce — most plant operators learn on-the-job with no formal biogas engineering background.

| Dimension | Detail |
|-----------|--------|
| **Probability** | Medium (industry-wide); Low (for a well-capitalised, professionally managed venture) |
| **Severity** | High — poor operations causes digester failures, acidification events, equipment damage |
| **Mitigation 1** | Technology provider (Praj/Enviropol) trains 12 core staff; resident engineer for 90 days post-commissioning |
| **Mitigation 2** | Process Engineer role: minimum 3 years AD/biogas experience; sourced from IIT/NIT biotech or EPC talent pool |
| **Mitigation 3** | IoT monitoring with real-time alerts — reduces dependence on human monitoring vigilance |
| **Mitigation 4** | Annual operations review; performance benchmarking against national peers |
| **Mitigation 5** | Competitive compensation + rural housing allowance to reduce attrition in remote locations |

---

### Risk 6: CGD Connectivity Gap

**Evidence**: Only 15% of functional CBG plants in India are connected to CGD (City Gas Distribution) networks. The remaining 85% use mobile cascade trucks — expensive, logistically complex, and dependent on truck availability and OMC cylinder turnaround.

For plants in rural/peri-urban Western UP, CGD networks are expanding but not yet present at farm-gate level.

| Dimension | Detail |
|-----------|--------|
| **Probability** | High (for initial operations in rural UP); decreasing as CGD expands |
| **Severity** | Medium — mobile cascades work but increase OPEX by ~₹3–5/kg vs grid injection |
| **Mitigation 1** | Select plant location within 20–30 km of existing CGD network; negotiate OMC cascade pickup at plant gate |
| **Mitigation 2** | DPI Scheme: government covers 50% of cost of connecting plant to CGD network — apply at commissioning |
| **Mitigation 3** | Phase 1: mobile cascade (OMC manages); Phase 2: DPI-funded pipeline injection |
| **Mitigation 4** | Negotiate CNG fleet sales directly (captive CNG vehicles like trucks, buses, state transport corporations) as alternative to cascade |

---

### Risk 7: Regulatory / Administrative Fragmentation

**Evidence**: "Projects often live or die based on the personal enthusiasm of individual city commissioners, who may get transferred within two years." CBG plants must navigate 8 government departments that rarely coordinate. Regulatory delays are cited as a key reason for the LoI-to-commissioning gap.

| Dimension | Detail |
|-----------|--------|
| **Probability** | Medium — endemic to Indian regulatory environment |
| **Severity** | Medium — delays add carrying costs; rarely permanently blocks |
| **Mitigation 1** | Use state nodal agency (UPNEDA) as single-window facilitator — they exist precisely for this purpose |
| **Mitigation 2** | Build regulatory relationships at senior bureaucratic level (Principal Secretary, Energy) — not just mid-level |
| **Mitigation 3** | Track all approvals on a Gantt; begin all applications in Month 1 simultaneously |
| **Mitigation 4** | For UP state-land plants — state government is a co-stakeholder, which accelerates its own departments |

---

### Risk 8: Competing Conglomerate Scale (Reliance / Adani)

**Evidence**: Reliance has committed ₹65,000 crore for 500 plants in AP; national target 2,000 plants. If Reliance executes nationally, they will enter UP/Haryana within 3–5 years with overwhelming capital and scale advantages.

| Dimension | Detail |
|-----------|--------|
| **Probability** | Low in 3-year horizon; Medium in 5-year horizon |
| **Severity** | High — if Reliance enters the same geography with capital advantage |
| **Mitigation 1** | Commission 3+ plants and lock feedstock supply contracts before Reliance's national rollout reaches North India |
| **Mitigation 2** | Signed feedstock contracts with dairy cooperatives and sugar mills create supply chain exclusivity |
| **Mitigation 3** | Exit path: Reliance, IOCL, EverEnviro are all natural acquirers of a portfolio of commissioned, operating CBG plants with feedstock contracts — a build-and-sell-to-conglomerate thesis is valid |

---

### Risk 9: CBG Quality Rejection / OMC Offtake Disputes

**Evidence**: OMCs have strict quality specifications (97%+ methane, <50 ppm H₂S). If CBG quality falls below spec, OMC can reject the delivery. Poorly maintained upgrading systems drift below spec over time.

| Dimension | Detail |
|-----------|--------|
| **Probability** | Low (with proper maintenance); Medium (with under-resourced operations) |
| **Severity** | High — revenue loss and potential Commercial Agreement breach |
| **Mitigation 1** | PSA/membrane upgrading systems deliver 97%+ methane when properly maintained |
| **Mitigation 2** | H₂S removal upstream (iron oxide scrubber or biogas desulphurisation) protects upgrading equipment |
| **Mitigation 3** | Daily in-house gas quality testing; OMC meter as primary, plant analyser as secondary |
| **Mitigation 4** | EPC performance warranty for upgrading equipment |

---

## 2. Investor Diligence — The Hard Questions

Questions a sophisticated investor will ask, and the defensible answers:

| Investor Question | Honest Answer |
|-----------------|--------------|
| "What happens if feedstock prices double?" | Multi-feedstock model: tipping-fee streams (sugar mill press mud, institutional food waste) are income, not cost — completely insulated from price increase. Manure prices are sticky (cattle dung has no other commercial market in India). Price cap clauses in contracts. |
| "What is the DSCR in Year 1?" | ~0.7–0.8× at 50% utilisation — below threshold. Mitigated by: IREDA 12–18 month principal moratorium; ₹8–12 crore working capital buffer; manure supply contract floor guaranteeing minimum 60 TPD. |
| "Why have 90% of SATAT LoIs failed to commission?" | They failed for 6 documented reasons — all operational, not structural. We have explicitly designed against each one: feedstock contracts, digestate plan, professional team, right technology, IoT monitoring, CGD strategy. |
| "What is your exit?" | Three options: (1) strategic acquisition by OMC (IOCL, HPCL — they acquire CBG plant operators with OMC offtake); (2) acquisition by a conglomerate (Reliance, EverEnviro expanding portfolio); (3) infrastructure fund acquisition (portfolio of SATAT-backed OMC-offtaked plants = infrastructure-grade asset). Multiple natural buyers. |
| "How do you defend against Reliance?" | In a 3-year window, Reliance is in AP — not Western UP/Haryana. Post-3-years: we have commissioned plants with locked supply chains and OMC relationships. Reliance needs greenfield sites; we have operational assets. Most likely outcome: they acquire us, not compete. |
| "What breaks the thesis?" | The only scenario that breaks the thesis is: SATAT floor reduced to below ₹35/kg AND feedstock prices double simultaneously AND plant utilisation stays below 60% for 3+ years. This triple-simultaneous downside has never occurred in any operational Indian CBG market. |
| "Why hasn't anyone done this exact model already?" | EverEnviro and GPS Renewables are the closest — but they focus on urban MSW (contamination risk) or single-feedstock (seasonal risk). The multi-feedstock co-digestion model in the Western UP/Haryana agri-industrial corridor is genuinely unoccupied. |

---

## 3. What Would Break the Investment Thesis

For maximum diligence transparency (investors will ask this explicitly):

| Scenario | Probability | Thesis Impact |
|---------|------------|--------------|
| SATAT floor price falls to ₹35/kg | Very Low — legislative reversal | Revenue falls ₹11/kg on CBG stream; EBITDA drops ~₹17 crore; DSCR still ~1.5× at 80% utilisation |
| CBO mandate cancelled | Extremely Low — statutory change | Reduces future CBG demand growth; existing plants still have 15-year offtake agreements |
| Feedstock prices rise 100% across all 3 sources simultaneously | Very Low — three independent markets | Even if manure rises ₹1,000/tonne; tipping fee streams offset; EBITDA hit ~₹2 crore/year |
| Reliance enters Western UP within 2 years | Very Low — they have 500 AP plants to build first | First-mover advantage with supply contracts; natural acquirer scenario activates |
| Mass digestate market failure (nobody buys bio-manure) | Low — if biofertiliser not certified | Disposal cost (not revenue); adds ~₹0.5–1 crore/year cost; does not break thesis |
| **CBG price floor + low utilisation + feedstock price spike (triple)** | **Very Low — has not occurred** | **Would stress debt service in Year 1-2; mitigated by IREDA moratorium + working capital buffer** |

---

## 4. Evidence Claims Added This Workstream

| Claim ID | Claim | Source | Confidence |
|----------|-------|---------|------------|
| C93 | Digestate disposal is the most common operational bottleneck in India's CBG sector: 25 TPD solid + 80 TPD liquid per 10 TPD CBG; plants become "physically and financially clogged" without market | Mongabay India 2023; Global Methane Initiative Jan 2025 | High |
| C94 | India CBG plants average 20–60% capacity utilisation vs 80%+ in European plants; seasonal feedstock variability is primary cause | Autocar Professional; IEA Bioenergy; industry sources | High |
| C95 | Only 15% of functional India CBG plants are connected to CGD networks; 85% rely on expensive mobile cascade logistics | Global Methane Initiative CBG Report Jan 2025; Autocar Professional | High |
| C96 | Sanjh plant case: VPSA technology chosen for vendor convenience without H₂S/CO₂ recovery → only 80% biogas production efficiency; an avoidable technology failure | Global Methane Initiative CBG Report Jan 2025 | High |
| C97 | Feedstock price risk: early CBG models assumed ₹15–16/kg; actual prices rose to ₹25/kg in competitive supply zones; the most disruptive variable in India's CBG financing landscape | Renewable Watch 2025; Power Line Magazine 2024 | High |
| C98 | CAPEX variability: same 10 TPD plant costs ₹400–800 million depending on technology and location — makes standardised lender diligence difficult | Renewable Watch 2025 unlocking capital analysis | High |
| C99 | Triple-simultaneous failure scenario (CBG price floor collapse + feedstock spike + low utilisation) has no documented precedent in India's operational CBG sector | Synthesis from WS6–WS11 risk analysis | High — negative claim |

---

## 5. Key Judgments

| Judgment | Basis | Confidence |
|----------|-------|------------|
| Every documented CBG failure mode is operational and addressable — none are fundamental to the technology or policy | Six failure modes all have proven mitigations; no plant has failed due to unavailability of biogas technology | High |
| Digestate disposal planning is the most underrated risk in the entire CBG sector — must be solved before commissioning | "Physically and financially clogged" plants are the most common failure mode per Mongabay/Global Methane Initiative | High |
| Year 1 DSCR risk is real and must be modelled honestly with investors; mitigated by IREDA moratorium + working capital buffer | 50% Year 1 utilisation = DSCR ~0.7×; must not be hidden in investor materials | High |
| Exit scenario (acquisition by Reliance/EverEnviro/OMC) is a credible and attractive outcome for investors | Strategic acquirers need commissioned operating plants — this portfolio becomes a natural acquisition target | High |
| The triple-simultaneous downside is the only scenario that breaks the thesis — and it has no precedent | Individual risks are manageable; only their extreme simultaneous combination is fatal | High |

---

## Sources

- [Mongabay India — Lack of Market for Bio-Manure Hindering CBG Growth (2023)](https://india.mongabay.com/2023/01/lack-of-market-support-for-bio-manure-hindering-growth-of-compressed-biogas-plants/)
- [Autocar Professional — Why India's CBG Revolution is Stuck in Neutral](https://www.autocarpro.in/feature/why-indias-cbg-revolution-is-stuck-in-neutral-131500)
- [Global Methane Initiative — Lessons from India's CBG Sector, Jan 2025](https://www.globalmethane.org/documents/CBG_Report_%20January%202025.pdf)
- [Renewable Watch — Unlocking Capital: Risks and Returns in India's CBG Financing 2025](https://renewablewatch.in/2025/07/22/unlocking-capital-risks-and-returns-in-indias-cbg-financing-landscape/)
- [Power Line Magazine — Feedstock to Fuel: CBG Challenges 2024](https://powerline.net.in/2024/09/05/feedstock-to-fuel-challenges-and-opportunities-in-the-cbg-segment/)
- [IEA Bioenergy / IFGE — Indian CBG Industry: Enablers and Challenges](https://task37.ieabioenergy.com/wp-content/uploads/sites/32/2023/05/Knowledge-Paper_Indian-CBG-Industry_IFGE_EAC_April-2023_18042023-1.pdf)
- [WBA India Policy and Market Briefing 2024](https://www.worldbiogasassociation.org/wp-content/uploads/2024/10/WBA-India-Policy-and-Market-Briefing-2024.pdf)
- [BiofuelCircle — Challenges in Feedstock Sourcing for CBG Plants](https://www.biofuelcircle.com/blog/challenges-in-feedstock-sourcing-for-cbg-plants/)
