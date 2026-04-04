# WS9 — Implementation & Operating Model
**Workstream**: 9 of 12
**Phase**: E — Build Economics + Operating Model
**Status**: Complete
**Last Updated**: 2026-04-03
**Evidence Claims**: C78–C84

---

## Executive Summary

The Indian CBG sector's 10% LoI-to-commissioning execution rate is not a technology failure or a capital failure — it is an **operations and supply chain failure**. The plants that fail do so because feedstock supply chains are informal, pricing is uncontracted, and operating teams are undertrained. The NRB plant case is instructive: it shut down after a 40% feedstock price hike triggered by the absence of formal supply agreements.

The venture's operating model must solve these specific failure modes from Day 1:

1. **Feedstock contracts before construction begins** — not after commissioning
2. **Multi-feedstock co-digestion** — no single-source dependency
3. **Hub-and-spoke aggregation** within a defined 30–50 km radius
4. **Formal EBWGR agreements** with bulk generators (SWM 2026 compliance)
5. **Trained resident team** with technology provider handover before first feed
6. **IoT monitoring from Day 1** — not manually monitored

The operating model described here is designed to achieve **≥85% plant utilisation by Year 2** — the threshold above which unit economics are fully bankable.

---

## 1. Value Chain Architecture

```
FEEDSTOCK SOURCING          LOGISTICS            PLANT OPERATIONS         OFFTAKE
─────────────────────────────────────────────────────────────────────────────────
Dairy farms (manure)    ──► Short-haul truck ──► Feedstock reception
Sugar mills (press mud) ──► Tanker/tipper    ──► Pre-processing pit  ──► CSTR AD
Bulk generators         ──► Free pickup       ──► Co-digestion blend       │
  (tipping fee)                                                             ▼
Farm aggregators        ──► Contract haul    ──► Quality testing      ──► Biogas upgrading
  (straw/agri residue)      (30-50 km)                                     │
                                                                            ▼
                                                                       CBG compression
                                                                            │
                                                ┌───────────────────────────┤
                                                ▼                           ▼
                                        OMC offtake              Direct fleet sales
                                      (SATAT, ₹62+/kg)           (captive CNG vehicles)
                                                
CO-PRODUCTS:
Raw digestate ──► Screw press separation ──► Liquid → adjacent farms (free/₹500/ML)
                                         ──► Solid → bagged fertiliser (Phase 2–3)
```

---

## 2. Feedstock Aggregation Model — The Critical Layer

### 2.1 The Hub-and-Spoke Framework

**Hub**: The CBG plant (100 TPD capacity, fixed location)
**Spokes**: Collection points and supplier relationships within a 30–50 km radius

```
              Dairy cooperative cluster (cattle manure)
                         ▼
    ─────────────────[CBG PLANT]─────────────────
                         ▲                   ▲
              Sugar mill (press mud)    Institutional bulk
              within 20 km             generators (food waste)
                                       within 30 km
```

**Operational rule**: 100 TPD total feedstock must be sourced within a 50 km radius maximum. Beyond 50 km, logistics cost exceeds feedstock value and plant economics deteriorate.

### 2.2 Feedstock Contract Structure (Non-Negotiable)

**The NRB Plant Failure Lesson**: A plant ceased operations after a 40% feedstock price hike. Cause: no formal legal supply agreements. Mitigation: all feedstock must be under signed annual contracts before construction begins.

| Feedstock Type | Contract Structure | Price Mechanism | Duration |
|---------------|------------------|----------------|---------|
| Cattle manure (dairy farms/cooperatives) | Annual supply agreement; farmer delivers or plant picks up | ₹0–500/tonne (or revenue share on digestate return) | 3-year rolling; auto-renew |
| Press mud (sugar mills) | Tipping fee agreement; mill pays plant | ₹1,000–2,500/tonne (income to plant) | Season-long (Nov–Apr); renewed annually |
| Institutional food waste (hotels, hospitals) | EBWGR certified processing agreement | ₹1,200–2,500/tonne tipping fee | Annual; renewable |
| Paddy/wheat straw (seasonal supplement) | Pre-season procurement agreement with aggregator | ₹800–1,500/tonne (capped; indexed to MSP) | Season-specific (Oct–Nov, Apr–May) |

**Feedstock pricing risk management**:
- Price caps written into contracts (max annual escalation 10%)
- Multi-supplier sourcing for each feedstock type (never >40% from a single supplier)
- 30-day buffer storage for cattle manure + straw (to cover supply disruptions)
- Tipping fee feedstocks are structurally price-protected (plant receives payment, not pays)

### 2.3 BAM Scheme Integration

The Government of India's **Biomass Aggregation Machinery (BAM) Scheme** (₹5.64 billion / ₹564 crore outlay for FY2023-24 to FY2026-27) provides:
- Subsidised machinery for straw collection, baling, and transportation
- Support for feedstock aggregators (farmer groups, FPOs) to formalise supply chains
- A venture can partner with BAM-supported aggregators rather than building straw logistics infrastructure independently

**Strategic use**: In Phase 2 (straw as supplemental feedstock), work with BAM-supported FPOs (Farmer Producer Organisations) in Punjab/Haryana rather than building proprietary straw logistics. This reduces CAPEX and offloads seasonal storage risk to the aggregator.

---

## 3. Plant Operations

### 3.1 Daily Operations Cycle

| Time | Activity |
|------|---------|
| 06:00 | Feedstock quality check (moisture, VS content) at reception |
| 06:30–08:00 | Morning feed batch — metered mix of manure + press mud + food waste into pre-mixer |
| 08:00 | IoT dashboard review — check pH, temperature, gas flow rate, methane %, VFA levels from overnight |
| 09:00 | Operator shift change; incoming shift briefing |
| 10:00–12:00 | Maintenance window — daily checks on pumps, agitators, compressors |
| 12:00 | Midday feed batch |
| 14:00 | Lab sampling — biogas composition test (H₂S, CH4%, CO2%) |
| 16:00 | CBG compression check; cascade storage pressure; OMC meter reading |
| 18:00 | Evening feed batch |
| 20:00–06:00 | Night mode — automated monitoring; IoT alerts if parameters deviate |

### 3.2 Key Process Control Parameters

| Parameter | Target Range | Alert Threshold | Action |
|-----------|-------------|----------------|--------|
| Digester pH | 6.8–7.5 | <6.5 or >8.0 | Adjust feed rate; add buffer (NaHCO₃) |
| Temperature (mesophilic) | 35–40°C | <33°C or >42°C | Check heat exchanger; adjust heating |
| Volatile Fatty Acids (VFA) | <3,000 mg/L | >4,000 mg/L | Reduce feed; system stress indicator |
| Biogas methane % | 55–65% raw; 97%+ post-upgrading | <50% raw CH4 | Check co-digestion ratio; investigate |
| H₂S in raw biogas | <3,000 ppm | >4,000 ppm | H₂S scrubber check; feedstock review |
| CBG output pressure | 200–250 bar | <180 bar | Compressor maintenance |

### 3.3 Planned vs Unplanned Downtime

Target: **≥88% uptime** (330+ operating days/year)

Planned maintenance (35 days/year):
- Quarterly digester inspections: 2 days each × 4 = 8 days
- Annual compressor service: 5 days
- Annual upgrading system service: 5 days
- Planned shutdown for pipe/valve replacement: 10 days
- Buffer: 7 days

Unplanned downtime reduction:
- Preventive maintenance schedule (IoT-triggered; not calendar-based)
- Spare parts inventory for high-failure items (agitator seals, pump impellers, PSA valves)
- EPC contractor support contract for first 2 years

---

## 4. Team Structure

### 4.1 Organisation Chart (Single Plant, Fully Operational)

```
Plant Head / CEO (1)
│
├── Operations Manager (1)
│   ├── Shift Supervisors (3, for 3 shifts)
│   │   └── Plant Operators (3 per shift × 3 shifts = 9)
│   ├── Process Engineer (1)
│   └── Lab Technician (1)
│
├── Feedstock & Logistics Manager (1)
│   ├── Feedstock Coordinators / Relationship Officers (3)
│   └── Drivers / Transport Staff (4–6)
│
├── Maintenance Engineer (1)
│   └── Maintenance Technicians (2–3)
│
├── Finance & Admin (2)
│
└── Compliance & Carbon Officer (1)
    (SATAT, SWM, VCS certification, CPCB reporting)
```

**Total headcount**: 30–40 staff per plant

**Key hires — hardest to find**:
- **Process Engineer**: Must understand AD biochemistry, not just mechanical engineering. Sourced from IIT/NIT biotech/chemical engineering programs or from EPC contractor talent pool.
- **Feedstock & Logistics Manager**: The most operationally critical hire. Must have agri-supply chain experience (FCI, cooperative background preferred). Builds and maintains all farmer/mill/generator relationships.
- **Compliance & Carbon Officer**: Manages SATAT reporting, CPCB NOCs, SWM EBWGR certificates, VCS documentation. Often a CA or environmental engineer.

**Training protocol**: Technology provider (Praj or EPC partner) trains 12 core staff over 30 days before commissioning. Technology provider engineer resident on-site for first 90 days. This matches the Anandmangal plant model (75% efficiency achieved within 3 months of commissioning).

### 4.2 HQ Team (Central, for Multi-Plant Portfolio)

As the venture scales to 3–5 plants, a central HQ team manages:
- Business development (new plant siting, LoI applications)
- EPC procurement and project management
- Finance (IREDA relationships, investor reporting)
- Technology (IoT platform, operational standards)
- Legal & regulatory (SATAT, state policies, carbon credit pipeline)

HQ team: 8–12 staff for a 3–5 plant portfolio.

---

## 5. Implementation Timeline — First Plant

### 5.1 Phase-by-Phase Timeline (Month 0 to Month 18)

| Phase | Duration | Key Activities | Milestone |
|-------|---------|---------------|-----------|
| **Pre-Development** | M0–M3 | Site identification, land acquisition/negotiation; initial feedstock mapping; DPR preparation | Land secured; DPR complete |
| **Regulatory** | M2–M5 | SATAT LoI application (60–90 days); SPCB NOC/consent; MNRE CAPEX grant application; state nodal agency engagement (UPNEDA) | LoI in hand; environmental clearance |
| **Financial Close** | M4–M7 | IREDA loan application (requires LoI + DPR + land documents); equity close with investors; EPC contract award to Praj/Enviropol | Financial close; EPC mobilisation |
| **Construction** | M6–M16 | Civil works (digesters, buildings, roads); equipment installation; utilities; instrumentation | All equipment installed; utilities connected |
| **Commissioning** | M15–M18 | Biogas testing; inoculation of digesters; ramp-up feed schedule; OMC meter installation; first CBG delivery | First CBG sold to OMC |
| **Ramp-Up** | M18–M24 | Feedstock volumes increasing; staff fully trained; process optimised | ≥85% utilisation; DSCR >2× |

**Critical path items** (any delay here delays everything):
1. Land acquisition — state land offer (UP) vs private purchase affects timeline by 2–4 months
2. SPCB consent — Environmental Impact Assessment for >10 TPD; engage state pollution board early
3. Grid connectivity — power connection from DISCOM; apply in Month 1 even before construction

### 5.2 Multi-Plant Rollout (Plants 2–5)

With Plant 1 operational, subsequent plants commission 40% faster:
- Regulatory: SATAT LoI issued in <30 days for proven operators; SPCB process faster with track record
- EPC: Repeat EPC contract with same contractor → better pricing, faster mobilisation
- Financing: IREDA relationship established; Plant 1 cash flows support Plant 2–3 debt service
- Operations: Core team from Plant 1 trains Plant 2 team; Feedstock & Logistics Manager maps second geography in parallel with Plant 1 operations

**Target rollout**: Plant 1 (Month 0–18), Plant 2 (Month 15–30), Plant 3 (Month 24–40), Plants 4–5 (Month 36–52).

---

## 6. Technology & Digital Operating Layer

### 6.1 IoT Monitoring Stack (From Day 1)

| Sensor/System | Parameter | Alert Trigger | Frequency |
|--------------|-----------|--------------|-----------|
| pH sensors (in-situ) | Digester pH | <6.5, >8.0 | Every 15 min |
| Temperature sensors | Digester + heat exchanger | Outside 35–40°C | Every 15 min |
| Gas flow meter | Biogas volumetric flow | >20% daily deviation | Continuous |
| Gas analyser (CH4, CO2, H2S) | Biogas composition | H2S >4,000 ppm; CH4 <50% | Hourly |
| Pressure transducers | CBG cascade storage | <180 bar | Continuous |
| VFA analyser (inline or daily lab) | Process stability | VFA >4,000 mg/L | Daily |
| SCADA dashboard | All parameters | Any alert threshold | Real-time |
| Remote monitoring (mobile app) | Plant head + investor portal | Any critical alert | Real-time push |

**Why this matters**: European AD plants that use real-time process control achieve 5–10% higher biogas yield vs manually monitored plants, and reduce acidification failures (the #1 cause of plant downtime) by 80%. In India, most SATAT plants are manually monitored — digital monitoring is a competitive differentiator.

### 6.2 Data for Carbon Credit Verification

All IoT data must be archived and auditable for VCS/Gold Standard certification:
- Feedstock volumes and types (by tonne, by day)
- Biogas production volumes (m³/day)
- CBG output (kg/day) — OMC meter is primary source; plant meter is secondary
- Flare events (when biogas is flared, not converted — must be minimised and documented)
- Energy consumption (grid draw, self-generation)

Carbon auditors (Bureau Veritas, TÜV Rheinland, DNV) will request this data for annual verification. Start archiving from Day 1 commissioning — retroactive data collection is not accepted by VCS.

---

## 7. Operational Risks and Mitigations

| Risk | Probability | Severity | Mitigation |
|------|------------|---------|-----------|
| Feedstock price spike >40% | Medium | High | Price cap clauses in all contracts; multi-supplier per feedstock type; tipping fee model as hedge |
| Single feedstock supply failure | Medium | High | 3-feedstock model; 30-day buffer storage; alternative supplier list |
| Digester acidification (process failure) | Low-Medium | High | IoT early warning; VFA monitoring; experienced process engineer on-site |
| Power outage / grid failure | Medium | Medium | Diesel generator backup for critical systems (pumps, agitators); biogas can self-power ~30-40% of plant needs |
| CBG quality rejection by OMC | Low | High | PSA/membrane delivers 97%+ CH4; H2S scrubber; routine OMC quality checks |
| Key staff attrition (Process Engineer) | Medium | Medium | Training pipeline; 2 trained process engineers per plant; competitive retention package |
| SPCB consent delay | Medium | Medium | Engage SPCB in Month 1; use state nodal agency (UPNEDA) relationships to expedite |
| IREDA loan delay | Low-Medium | High | Begin application immediately after LoI; maintain all documentation current |

---

## 8. Evidence Claims Added This Workstream

| Claim ID | Claim | Source | Confidence |
|----------|-------|---------|------------|
| C78 | NRB plant case: shut down after 40% feedstock price hike caused by absence of formal supply agreements — the canonical India CBG operations failure mode | Global Methane Initiative CBG Report Jan 2025; Power Line Magazine | High |
| C79 | Biomass Aggregation Machinery (BAM) Scheme: ₹5.64 billion (₹564 crore) government outlay FY2023-24 to FY2026-27 to address feedstock availability challenges | WBA India Briefing 2024; MNRE | High |
| C80 | SATAT LoI processing: 60–90 days with complete documentation; environmental clearance streamlined for CBG (EIA required for >10 TPD); 12–18 months total LoI-to-commissioning timeline | PelletRates; IOCL FAQ; Avenir Energia 2025 | High |
| C81 | MNRE CAPEX subsidy disbursement: 30% at start; 40% at 50% completion; 30% at commissioning | MNRE guidelines; industry practice | High |
| C82 | Technology provider training model: 12 core staff trained by EPC/technology vendor; resident engineer for first 90 days; Anandmangal plant achieved 75% efficiency within 3 months of commissioning | Global Methane Initiative CBG Report Jan 2025 | High |
| C83 | Target plant utilisation benchmark: ≥85% by Year 2 required for DSCR >2×; plants below 75% utilisation face debt service stress | Our model; industry consensus on 15 TPD minimum | High |
| C84 | Feedstock supply chain radius rule: 100 TPD plant must source all feedstock within 50 km maximum; beyond this, logistics cost erodes plant economics | BiofuelCircle; IEA Bioenergy India paper | High |

---

## 9. Key Judgments

| Judgment | Basis | Confidence |
|----------|-------|------------|
| Feedstock contracts must be signed before construction — not after | NRB plant failure is the proof; 40% price hike from informal agreement broke the plant | High |
| Hub-and-spoke within 50 km is the only viable logistics model for 100 TPD | Beyond 50 km, logistics cost exceeds feedstock value | High |
| BAM-supported FPOs are the right partner for straw aggregation in Phase 2 — not own-built straw logistics | Government-subsidised machinery reduces CAPEX risk; FPOs have farmer relationships | High |
| 30–40 staff per plant is the right size; Feedstock & Logistics Manager is the most critical hire | Operations failure is always feedstock-related; this role owns the supply chain | High |
| IoT monitoring from Day 1 is a competitive differentiator, not a nice-to-have | EU plants with real-time control achieve 5–10% higher yield; India plants mostly manual | High |
| 12–18 month commissioning is achievable if regulatory engagement begins in Month 1 | SPCB and IREDA are the critical path items; pre-engagement shortens timeline | High |

---

## Sources

- [Global Methane Initiative — Lessons from India's CBG Sector, Jan 2025](https://www.globalmethane.org/documents/CBG_Report_%20January%202025.pdf)
- [Power Line Magazine — Feedstock to Fuel: CBG Challenges 2024](https://powerline.net.in/2024/09/05/feedstock-to-fuel-challenges-and-opportunities-in-the-cbg-segment/)
- [BiofuelCircle — Challenges in Feedstock Sourcing for CBG Plants](https://www.biofuelcircle.com/blog/challenges-in-feedstock-sourcing-for-cbg-plants/)
- [REGlobal — India's CBG Sector Gains Momentum, Challenges Remain](https://reglobal.org/indian-cbg-sector-gains-momentum-but-challenges-remain/)
- [WBA India Policy and Market Briefing 2024](https://www.worldbiogasassociation.org/wp-content/uploads/2024/10/WBA-India-Policy-and-Market-Briefing-2024.pdf)
- [IEEFA — Encouraging Signs Across India's Biogas Value Chain](https://ieefa.org/resources/encouraging-signs-development-across-indias-biogas-value-chain)
- [PelletRates — How to Start a CBG Plant in India 2026](https://www.pelletrates.com/policies-and-schemes/news/cbg-plant-india-setup-guide-subsidies-process)
- [IEA Bioenergy / IFGE — Enablers and Challenges: Indian CBG Industry](https://task37.ieabioenergy.com/wp-content/uploads/sites/32/2023/05/Knowledge-Paper_Indian-CBG-Industry_IFGE_EAC_April-2023_18042023-1.pdf)
- [Renewable Watch — Making Inroads: CBG Gains Momentum 2024](https://renewablewatch.in/2024/07/12/making-inroads-cbg-sector-gains-momentum-in-india-with-policy-support/)
