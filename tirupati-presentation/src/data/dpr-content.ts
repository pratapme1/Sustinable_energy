export interface DPRSection {
  id: string;
  title: string;
  content: string;
}

export const DPR_META = {
  title: "Detailed Project Report",
  subtitle: "Integrated Organic Waste-to-Compressed Bio-Gas (CBG) Facility",
  location: "Tirupati, Andhra Pradesh",
  company: "Cero Hero Private Limited",
  submittedTo: "Department of MAUD, Government of Andhra Pradesh",
  date: "April 2026",
  ref: "CERO-TRP-DPR-2026-01",
  revision: "REV 01",
  phase1: "50 TPD",
  phase2: "100 TPD",
};

export const DPR_SECTIONS: DPRSection[] = [
  {
    id: "project-glance",
    title: "Project At A Glance",
    content: `
| Parameter | Phase 1 | Phase 2 |
|---|---|---|
| Project Location | Tirupati, Andhra Pradesh | Same site, expanded |
| Project Proponent | Cero Hero Private Limited | Cero Hero Private Limited |
| Organic Waste Input | **50 Tonnes Per Day (TPD)** | **100 TPD** |
| Feedstock Source | TTMC municipal wet waste + Cero Hero BWG collections | Expanded municipal + regional cluster |
| Technology | Wet Anaerobic Digestion (CSTR-based, technology neutral) | Same, modular addition |
| CBG Output | **~1,600 kg/day (1.6 TPD)** | **~3,200 kg/day (3.2 TPD)** |
| Methane Purity | >98% CH₄ (IS 16087:2016) | Same |
| Organic Fertilizer Output | ~5 TPD solid FOM/compost | ~10 TPD |
| Operational Days | 330 days/year | 330 days/year |
| Land Requirement | 5 acres (3 acres Phase 1, 2 acres reserved) | 5 acres fully utilized |
| Estimated CAPEX (Phase 1) | **Rs. 30.24 crore** | Rs. 16.42 crore incremental |
| Total Project CAPEX | — | **Rs. 46.66 crore** |
| Annual Revenue (Phase 1, Yr 3) | Rs. 3.67 crore | Rs. 7.30 crore |
| Commissioning Timeline | 14 months from Zero Date | +12 months from Phase 1 |
| Carbon Benefit | ~12,000 tCO₂e/year avoided | ~24,000 tCO₂e/year |
| Key Regulatory Compliance | PESO, CPCB, AP PCB, SATAT, BIS IS 16087 | Same |

> **Submitted in alignment with:** Swachh Bharat Mission – Urban 2.0 | SATAT Scheme (MoPNG) | GOBARdhan (MoAHD&F) | Andhra Pradesh Integrated Clean Energy Policy 2024 | CPCB Solid Waste Management Rules 2016
    `,
  },
  {
    id: "executive-summary",
    title: "Executive Summary",
    content: `
**Cero Hero** (promoter entity currently in incorporation; CIN to be registered within 30 days of DPR acceptance) proposes to develop an **Integrated Organic Waste-to-Compressed Bio-Gas (CBG) Facility** in Tirupati, Andhra Pradesh, as a phased greenfield project on government-allocated land. The DPR is submitted by the founding promoter, Vi Pratap, on behalf of the entity being formed. Promoter profile and financial capability statement are provided in **Annexure VII**.

### The Problem Is Measurable

Tirupati Municipal Corporation (TTMC) currently manages approximately **115 TPD** of wet organic waste from its urban catchment — food waste, kitchen waste, market organics, and garden biomass. A further 5–10 TPD of segregated high-quality organic waste is generated daily by bulk waste generators (BWGs) including hotels, restaurants, hospitals, and institutional kitchens. This organic fraction is either landfilled, open-dumped, or inadequately processed, generating uncontrolled methane emissions, groundwater contamination risk, and public health burden.

> **Note on the existing Thukivakam plant:** The 50 TPD biomethanation plant at Thukivakam (operated under PPP with Mahindra Waste-to-Energy Solutions) processes raw biogas for power generation — not CBG. It does not hold a SATAT registration and does not produce transport-grade CBG. This project is therefore **not competing** with Thukivakam; it is complementary. Furthermore, TTMC's total organic waste stream (~115 TPD) exceeds the combined capacity of both plants at Phase 1, leaving ample feedstock for Cero Hero's 50 TPD intake.

### The Solution Is Bankable

Through a wet anaerobic digestion process, the plant will convert **50 TPD** of segregated organic waste into:

- **1,600 kg/day** of Compressed Bio-Gas (CBG), compliant with IS 16087:2016
- **5 TPD** of nutrient-rich Fermented Organic Manure (FOM) for agricultural use
- Treated process water recycled internally (near-zero liquid discharge)

The project introduces the **Cero Hero digital waste collection platform** — a subscription and traceability system that routes segregated organic waste from bulk generators directly to the plant, ensuring feedstock quality and supply reliability that pure municipal systems cannot guarantee.

### What the Government of Andhra Pradesh Is Asked to Do

1. Allocate a suitable **5-acre site** in one of three evaluated locations
2. Support a **TTMC waste diversion agreement** — 35 TPD in Phase 1
3. Facilitate **AP PCB and PESO clearance** processing
4. Consider **state-level fiscal support** — land at concessional lease + TTMC processing fee

### Why Now

- AP government sanctioned **five urban CBG plants** across the state (March 2026)
- Tirupati district already has **1 functional + 1 under-construction** CBG plant (GOBARdhan portal, December 2025)
- SATAT guarantees minimum Rs. 46/kg CBG offtake — commercial certainty exists
- The existing Thukivakam biomethanation plant (50 TPD, Mahindra) proves the feedstock is processable at scale in this location
    `,
  },
  {
    id: "background",
    title: "Project Background & Rationale",
    content: `
### Why Tirupati

Tirupati is not a generic Indian city. It is a **pilgrimage-economy city** with structural characteristics that make it exceptionally suited for a waste-to-energy project.

**Guaranteed organic waste supply.** The city's pilgrimage economy generates consistent wet organic waste throughout the year. Unlike manufacturing-dependent cities, waste volumes do not fluctuate with economic cycles. TTD serves 50,000–100,000 pilgrims daily. TTMC's total organic waste stream exceeds 115 TPD — well above what any single plant can absorb.

**Demonstrated proof at scale.** Tirupati already operates a 50 TPD biomethanation plant at Thukivakam (Bio Green City Waste Management, commissioned 2022–23), producing ~1,728 m³/day of raw biogas sold to hotels and industries for cooking. **This is not a competitor to Cero Hero** — Thukivakam produces raw cooking gas, not transport-grade CBG. Cero Hero will produce IS 16087:2016-compliant CBG for SATAT offtake and the mandatory CGD blending market — a different product, different infrastructure, different price tier.

**TTMC 100 TPD DBFOT Tender — How This Affects the Project:** TTMC floated an RFP (bid submission October 2024) for a 100 TPD bio-methanation DBFOT expansion at Thukivakam. If awarded, this operator will process 100 TPD of TTMC's primary municipal organic waste stream. **Cero Hero's response to this:** (a) Cero Hero's Site C (Karakambadi–Mangalam) is geographically separate from the Thukivakam cluster, ensuring no land conflict; (b) Cero Hero does not depend on 100% TTMC waste — the model is 70% TTMC (35 TPD) + 30% BWG (15 TPD); (c) Tirupati generates 115+ TPD organic waste — even with Thukivakam processing 100 TPD, the TTMC stream continues to grow with the city, and TTMC's DBFOT contract may not preclude separate municipal waste diversion agreements for CBG-specific processing; (d) most critically — Thukivakam's DBFOT operator is not SATAT-registered and does not produce CBG. The CBO mandate (see below) means OMCs need CBG specifically — Cero Hero fills that gap.

**Active policy signal.** In March 2026, the AP government sanctioned five urban CBG plants. Tirupati district is listed in the GOBARdhan portal with one functional and one yet-to-start CBG plant. Nationally, 589 plants are operational, 251 under construction, and India needs 750 plants by 2028 to meet CBG blending targets.

**Tirupati is India's 8th cleanest city** (Swachh Survekshan 2023–24). TTMC holds a high Swachh Bharat ranking in part because of its waste processing infrastructure. A 50 TPD CBG plant directly contributes to SBM-Urban 2.0 GFC+ (Green+) certification scoring — protecting this national ranking.

**Bulk generator density.** TTMC has formally identified:
- **27 BWGs** above 100 kg/day
- **60 BWGs** at 50–100 kg/day

This is a structured, mappable organics supply chain — not informal waste. Following TTD's decision to manage its own waste through the TTD-IOCL plant at Kakulamanu Dibba (commissioned or near-commissioning), TTD waste is not available to Cero Hero — but the city's hotel, hospital, and institutional BWG density fully compensates.

### The Cero Hero Strategic Position

Cero Hero is positioned as a **waste infrastructure operator with a digital intelligence layer**, not a conventional municipal waste contractor. Two compounding advantages:

1. **Feedstock security** — the Cero Hero platform locks in high-quality, segregated organic waste from BWGs through subscription contracts, supplementing municipal collection and improving biogas yield
2. **Platform data value** — the Cero ID traceability system creates a verified record of waste origin, quantity, and composition, enabling carbon credit monetization, ESG reporting for hotel/institutional clients, and regulatory compliance documentation

### National Policy Context

| Scheme | Relevance |
|---|---|
| **CBG Blending Obligation (CBO) — FY 2025–26 onwards** | **From this financial year, OMCs are legally mandated to blend 1% CBG into CNG/PNG supply; rising to 3% (FY 2026–27), 4% (FY 2027–28), 5% (FY 2028–29 onwards). OMCs face penalties for non-compliance. Every SATAT-registered CBG plant is now a compliance asset for OMCs. Approving Cero Hero directly helps AP-based OMCs meet their CBO.** |
| SATAT (MoPNG, 2018, revised) | CBG offtake at regulated price of **Rs. 54/kg** (revised from Rs. 46/kg; IOCL SATAT portal, 2025); Cero Hero registers as SATAT producer |
| SBM-Urban 2.0 | Mandates source segregation and organic waste processing; TTMC earns GFC+ certification credit |
| GOBARdhan (MoAHD&F) | National platform for biogas/CBG registration, subsidy tracking |
| MNRE Biogas Programme (Phase-I, FY 2021–26) | CFA of Rs. 4 crore per 4,800 kg/day for new CBG plants; proportional for smaller capacity |
| MoPNG Financial Assistance to CBG Producers | Separate scheme — Rs. 564.75 crore budget (FY 2023–24 to 2026–27) for CBG producer support; Cero Hero to apply |
| SWM Rules 2016 (Amended) | BWGs legally mandated to arrange processing; Cero Hero provides the compliant route |
    `,
  },
  {
    id: "waste-profile",
    title: "Tirupati Waste Profile & Feedstock Assessment",
    content: `
### Current Waste Generation

Based on PIB-published Tirupati waste data (February 20, 2024) and TTMC operational records:

| Waste Category | Quantity (TPD) | Processable for AD? |
|---|---|---|
| Wet organic waste (kitchen, food, garden) | 115 | Yes — primary feedstock |
| Food waste (segregated) | 15 | Yes — highest-yield fraction |
| Dry recyclables | 61 | No |
| Domestic hazardous waste | 1 | No |
| Plastic waste | 2 | No |
| C&D waste | 20–25 | No |
| **Total organic processable** | **~115–130** | **Addressable supply** |

**The Phase 1 target of 50 TPD represents 38–43% of available supply** — conservative and achievable with significant headroom for Phase 2 and beyond.

### Feedstock Quality Tiers

| Tier | Source | Daily Volume | TS % | VS % of TS | Biogas Yield |
|---|---|---|---|---|---|
| Tier 1 (Premium) | Hotel kitchens, institutional cafeterias | 8–12 TPD | 20–25% | 85–90% | 100–130 Nm³/ton |
| Tier 2 (High) | Large hotel kitchens, hospital catering, event halls | 5–8 TPD | 18–22% | 82–88% | 90–115 Nm³/ton |
| Tier 3 (Standard) | TTMC segregated door-to-door collection | 60–80 TPD | 20–28% | 75–82% | 75–100 Nm³/ton |
| Tier 4 (Lower) | Market waste, mandis (mixed organics) | 20–30 TPD | 15–22% | 65–75% | 60–80 Nm³/ton |

### Design Feedstock Blend (Phase 1 — 50 TPD)

- **70% TTMC municipal** (Tier 3/4 blend): 35 TPD
- **30% Cero Hero BWG collection** (Tier 1/2 blend): 15 TPD
- Blended TS: **22%** | Blended VS: **80% of TS** | VS degradability: **78%**
- Design biogas yield: **85 Nm³/ton wet input**

### Feedstock Risk Assessment

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Municipal supply fluctuation | Medium | High | Long-term TTMC waste diversion agreement with minimum daily tonnage guarantee |
| BWG non-compliance | Medium | Medium | Cero Hero subscription contracts with penalties for missed handovers |
| Seasonal variation | Low | Low | Pilgrimage economy provides year-round baseline |
| Feedstock quality degradation | Low | Medium | On-site lab testing; Cero ID traceability at source |
    `,
  },
  {
    id: "cero-hero",
    title: "The Cero Hero Collection Platform",
    content: `
### Platform Overview

Cero Hero is a **digital-physical waste collection and traceability system** that connects bulk waste generators, municipal bodies, and waste processing infrastructure through a unified platform.

**Layer 1 — Collection Operations**

Dedicated collection vehicles (2 vehicles in Phase 1, 4 in Phase 2) operate fixed daily routes across registered BWG premises. Each collection event is logged through the Cero Hero mobile app — weight recorded at source, vehicle GPS-tracked, and arrival at plant gate verified against departure records.

**Layer 2 — Cero ID Traceability**

Every kilogram of organic waste enrolled in the platform receives a **Cero ID** — a digital identifier recording:
- Source establishment (name, license, GPS coordinates)
- Waste type and approximate composition
- Collection timestamp and operator ID
- Processing date and batch number at plant
- Output allocation (which CBG cylinder or compost batch it contributed to)

This chain-of-custody data enables **carbon credit generation** (VCS/Gold Standard) and provides **ESG documentation** to participating hotels and institutions.

**Layer 3 — BWG Compliance Portal**

Registered BWGs receive a monthly waste report and compliance certificate, satisfying their obligation under SWM Rules 2016 to demonstrate organic waste processing.

### BWG Enrollment Target (Phase 1)

| Category | Enrolled BWGs | Est. Daily Organic Waste |
|---|---|---|
| Hotels (3-star and above) | 25 | 4.5 TPD |
| Restaurants and food courts | 35 | 3.0 TPD |
| Hospital and institutional catering | 15 | 2.0 TPD |
| Wedding halls, event venues, clubs | 10 | 2.5 TPD |
| Market waste aggregators | 15 | 3.0 TPD |
| **Total** | **100** | **~15 TPD** |

> **Note on TTD:** TTD and IOCL are constructing a dedicated 40–50 TPD CBG plant at Kakulamanu Dibba, Tirumala, with output piped directly to the Anna Prasadam kitchen. TTD's organic waste is fully committed to this captive plant. Cero Hero's BWG model does not include TTD — the hotel, restaurant, and market density in Tirupati city fully covers the 15 TPD Tier 1/2 requirement.

### Platform Revenue

| Client Tier | Rate | Annual Revenue |
|---|---|---|
| Hotels (100–500 kg/day) | Rs. 3,000/month × 25 | Rs. 9.0 lakh |
| Restaurants/institutions | Rs. 1,500/month × 45 | Rs. 8.1 lakh |
| Markets/others | Rs. 1,000/month × 25 | Rs. 3.0 lakh |
| **Total** | | **Rs. 20.1 lakh/year** |

> Platform fees are set at a fraction of the client's avoided waste disposal cost. A hotel paying Rs. 3,000/month eliminates SWM compliance burden, avoids municipal fines, and receives a branded ESG waste report.
    `,
  },
  {
    id: "site-selection",
    title: "Site Selection & Comparative Evaluation",
    content: `
### Site Selection Criteria

| Criterion | Minimum Requirement |
|---|---|
| Distance from city waste sources | <15 km from TTMC waste collection zones |
| Land area | Minimum 5 acres (contiguous) |
| Road access | Direct connectivity to state/national highway |
| Ground conditions | No flood plain; stable bearing capacity for digester foundations |
| Buffer from residential zones | Minimum 500 metres |
| Utility access | Grid power (11 KV) within 2 km; borewell/water source available |
| Environmental sensitivity | Away from water bodies, heritage zones, wildlife corridors |

---

### Site Option A — Renigunta Waste Management Cluster ⚠️ Re-evaluated

**Renigunta Mandal, Tirupati District**

| Parameter | Details |
|---|---|
| Distance from TTMC zones | 6–10 km |
| Distance from NH716 | ~2 km |
| Proximity to airport | 4 km (logistics advantage for cascade dispatch) |
| Land available | 8–12 acres (APIIC industrial buffer zone) |
| DISCOM substation | Within 1.5 km |
| Soil condition | Black cotton soil; requires RCC raft foundations |
| Flood risk | Low |
| Residential buffer | 600–800 m from nearest housing cluster |
| **Score** | **8.5 / 10** |

**Re-evaluation note:** Thukivakam Village is within Renigunta Mandal — the same cluster as Site A. TTMC's 100 TPD DBFOT bio-methanation expansion (tender Oct 2024) is being developed at Thukivakam. Locating Cero Hero at Site A risks land conflict with the DBFOT operator and creates a contested municipal waste allocation between two plants in the same cluster. **Site A is downgraded pending confirmation of DBFOT award scope and Thukivakam land boundaries.**

---

### Site Option B — Yerpedu Industrial Corridor

**Yerpedu Mandal, NH16 (Tirupati–Nellore), 14–16 km from city**

| Parameter | Details |
|---|---|
| Distance from TTMC zones | 14–16 km |
| Road access | Direct NH16 frontage |
| Land available | 20+ acres in APIIC allocation zone |
| Soil condition | Sandy loam; good bearing capacity; lowest civil cost |
| Residential buffer | >1 km |
| Agricultural adjacency | Strong — digestate/compost offtake to farmland directly viable |
| **Score** | **7.5 / 10** |

**Key constraint:** Longer collection distance adds Rs. 15–20 lakh/year incremental logistics cost.

---

### Site Option C — Karakambadi–Mangalam Agri-Interface Zone ⭐ Now Recommended

**Southern outskirts, 8–10 km from city, Tirupati Rural Mandal**

| Parameter | Details |
|---|---|
| Distance from TTMC zones | 8–10 km |
| Road access | State Highway SH-63 |
| Land available | 5–8 acres via TTMC/Panchayat allocation |
| Soil condition | Laterite; moderate foundation requirements |
| Agricultural adjacency | Excellent — direct compost offtake to adjacent horticulture farms |
| TTMC waste routing | South-western TTMC collection routes serve this site directly; no conflict with Thukivakam DBFOT operator |
| CBG distribution | SH-63 provides direct access to Tirupati city CNG stations and industrial zones |
| **Score** | **8.5 / 10 (revised upward — now primary recommendation)** |

---

> **Site Recommendation Rationale (Updated):** Site C (Karakambadi–Mangalam) is now the primary recommendation. The re-evaluation follows confirmation that Thukivakam Village (Site A cluster) is the subject of TTMC's 100 TPD DBFOT bio-methanation tender. Site C avoids all overlap with the DBFOT operator, draws from separate TTMC collection circuits, has direct SH-63 access for CBG transport, and offers excellent digestate/FOM offtake to adjacent horticulture farms. Site B remains viable for Phase 2 expansion if land at Site C is insufficient.

> **Government Action Required:** Cero Hero requests that MAUD/TTMC formally allocate 5 contiguous acres at Site C (Karakambadi–Mangalam, Tirupati Rural Mandal) within **60 days** of DPR acceptance, with survey number and village confirmation.
    `,
  },
  {
    id: "technology",
    title: "Technology Assessment & Design Basis",
    content: `
### Technology-Neutral Position

This DPR specifies **performance standards and design parameters**, not a single vendor. The Government of Andhra Pradesh and Cero Hero will jointly evaluate qualified EPC contractors against these specifications, ensuring competitive procurement and technology accountability.

### Technology Options Evaluated

| Technology | Applicability | India Maturity | Recommended? |
|---|---|---|---|
| Wet CSTR — Mesophilic (35–37°C) | High: proven for mixed food waste + municipal organics | High: Indore, Pune, Chennai, Tirupati | **Yes — primary** |
| Wet CSTR — Thermophilic (50–55°C) | High: faster digestion, higher yield, better pathogen kill | Moderate | **Yes — viable alternative** |
| Plug Flow Reactor (PFR) | Moderate: better for fibrous feedstock | Low: limited Indian municipal cases | No for Phase 1 |
| Dry High-Solids AD | Low: Tirupati feedstock is high-moisture | Low in India | No |

### Gas Upgradation Options

| Technology | CH₄ Recovery | Methane Slip | Recommended? |
|---|---|---|---|
| Water Scrubbing (PWS) | 95–98% | 1–2% | Yes |
| Vacuum Pressure Swing Adsorption (VPSA) | 97–99% | <2% | **Yes — preferred** |
| Pressure Swing Adsorption (PSA) | 95–98% | 2–4% | Acceptable |
| Membrane Separation | 90–96% | 3–6% | Acceptable for smaller scale |
| Amine Scrubbing | 98–99% | <1% | Not recommended at this scale |

### EPC Performance Specification (Technology-Neutral Tender Requirements)

The selected EPC contractor must demonstrate:

- Proven operation on **mixed municipal organic waste** at ≥10 TPD scale in India
- Biogas yield: minimum **80 Nm³ per tonne wet input** (blended feedstock)
- Methane content in raw biogas: **≥58% CH₄**
- Hydraulic Retention Time: **20–35 days**
- Process uptime: **≥330 days/year**
- CBG purity: **>98% CH₄** (IS 16087:2016)
- Methane recovery after upgradation: **≥97%**
- Pathogen reduction: compliant with CPCB biogas sludge guidelines

### Design Standards

| Domain | Applicable Standard |
|---|---|
| Process vessels / digesters | ASME BPE, IS 2825, MS-2062 steel |
| High-pressure gas compression | PESO (Petroleum and Explosives Safety Organisation) |
| CBG quality | IS 16087:2016 (Automotive compressed bio-gas) |
| Piping | IS 1239, ASME B36.10, B16.5 |
| Electrical | IS 732, National Electrical Code, ATEX/IECEx (hazardous zones) |
| SCADA | IEC 61131, IEC 62351 |
| Emissions | CPCB standards, AP SPCB CTE/CTO conditions |
| Fire and safety | NFPA 20, OISD standards |
    `,
  },
  {
    id: "plant-config",
    title: "Plant Configuration & Process Description",
    content: `
### Plant Layout Zones

The plant is designed as a single integrated facility on 5 acres. Phase 1 occupies 3 acres; 2 acres reserved for Phase 2 expansion. Linear process flow from feedstock intake to gas dispatch.

| Zone | Content |
|---|---|
| Zone A | Feedstock reception, weighbridge, unloading shed, dumping pits |
| Zone B | Pre-treatment: shredding, homogenization, slurry preparation |
| Zone C | Anaerobic digestion: pre-digester, main digesters, secondary digester |
| Zone D | Biogas collection, purification, compression, cascades |
| Zone E | Digestate processing: solid-liquid separation, compost staging |
| Zone F | Utilities, control room, laboratory, office, security |

### Process Flow

**Step 1 — Feedstock Reception**

Organic waste arrives via TTMC collection vehicles and Cero Hero route vehicles. Each vehicle is weighed at the entrance weighbridge (OIML-certified). Accepted waste is unloaded into covered receiving pits.

**Step 2 — Pre-Treatment**

- **Size reduction:** Wet shredder/grinder reduces particle size to 8–12 mm
- **Contaminant removal:** Trommel screen removes plastic films, stones, inerts (target: <5% inert contamination in feed slurry)
- **Slurry preparation:** Mixed with recycled process water to 8–10% Total Solids (TS) slurry
- **Homogenization:** Feed slurry thermally conditioned in feed homogenizer tank

**Step 3 — Anaerobic Digestion**

| Unit | Qty | Function | HRT |
|---|---|---|---|
| Feed Mixing / Pre-conditioning Tank | 1 | Slurry homogenization, thermal pre-treatment | 1–2 days |
| Pre-Digester | 1 | Hydrolysis and acidogenesis stabilization | 5–7 days |
| Main Digesters (CSTR) | 2 | Primary methanogenesis | 18–25 days |
| Secondary / Polishing Digester | 1 | Residual digestion, liquid quality improvement | 3–5 days |

**Total HRT: 27–39 days**

All digesters: MS-2062 steel, FRP internal coating, glass wool + aluminium cladding insulation, balloon membrane gas-tight tops, 1W+1S pumping/agitation.

**Step 4 — Biogas Purification Train**

| Stage | Function | Target |
|---|---|---|
| Moisture Separator | Remove bulk condensate | Dry biogas |
| H₂S Removal Unit | Remove hydrogen sulfide | H₂S <10 ppm |
| CO₂ Removal (VPSA or Water Scrubbing) | Enrich methane | CH₄ >98% |
| Online Gas Analyser | Continuous monitoring CH₄, CO₂, H₂S, O₂ | Real-time QC |
| Surge / Buffer Vessel | Cushion flow before compression | Pressure stabilization |

**Step 5 — Compression & Cascade Filling**

High-purity biomethane compressed to **250 bar** using multi-stage oil-free booster compressors. Filled into PESO-certified CNG cascades (6,600-litre water capacity each). Phase 1 target: **3 cascades/day**.

**Step 6 — Digestate Management**

- Solid fraction (~5 TPD): aerobic curing for 21 days → FCO-compliant FOM/compost → sold to farmers
- Liquid fraction (~43 TPD): **90% recycled** as process dilution water; remainder (~4.3 KLD) treated through a multi-stage effluent treatment system and applied for land irrigation within the plant boundary
- **Near-Zero Liquid Discharge (NZLD)** is the operating standard — treated effluent to land irrigation under AP PCB consent conditions; no discharge to surface water or groundwater

**Step 7 — SCADA & Control**

Centralized Main Control Room with PLC-SCADA (Siemens/Schneider/ABB — brand finalized by EPC). Real-time monitoring: temperature, pressure, pH, gas flow, CH₄ concentration, slurry level, H₂S, O₂. Full Industry 4.0 compatibility with Cero Hero platform data integration.
    `,
  },
  {
    id: "mass-balance",
    title: "Mass Balance & Yield Calculations",
    content: `
### Design Feedstock Parameters (Phase 1 — 50 TPD Blended Input)

| Parameter | Value | Basis |
|---|---|---|
| Total Organic Waste Input | 50 TPD (wet weight) | Design basis |
| Moisture Content | 78% | Blended Tier 1–4 feedstock estimate |
| Total Solids (TS) Content | 22% → 11 TPD | Calculation |
| Volatile Solids (VS) as % of TS | 80% → 8.8 TPD VS | Literature + site analogue |
| VS Degradability | 78% → 6.86 TPD VS degraded | Conservative design assumption |
| Specific Biogas Yield | 550 Nm³/tonne VS degraded | Literature mid-point for mixed food waste |
| **Total Raw Biogas Production** | **~4,250 Nm³/day** | Calculated |
| Raw Biogas CH₄ Content | 60% | Design basis |
| Raw Methane Volume | 2,550 Nm³/day | Calculated |
| Methane Recovery (post-upgradation) | 97% | Performance guarantee |
| Purified Biomethane | 2,474 Nm³/day | Calculated |
| CBG Density | 0.717 kg/Nm³ (at 15°C, 1 atm) | Physical constant |
| Gross CBG Production | ~1,774 kg/day | Calculated |
| **Design CBG Output (10% safety margin)** | **~1,600 kg/day (1.6 TPD)** | Financial model basis |
| Annual CBG (330 days) | **528 tonnes/year** | Financial basis |

### Digestate Mass Balance (Phase 1)

| Stream | Quantity | Destination |
|---|---|---|
| Total digestate slurry | ~48 TPD (wet) | To solid-liquid separator |
| Solid fraction (after SLS) | ~5 TPD (22% TS) | Compost/FOM curing → sale |
| Liquid fraction | ~43 TPD | 90% recycled; 10% treated for irrigation |
| Fresh water make-up (net) | ~3 KLD | External borewell supply |

### Phase Comparison

| Output | Phase 1 | Phase 2 |
|---|---|---|
| CBG | 1,600 kg/day | 3,200 kg/day |
| Annual CBG | 528 TPY | 1,056 TPY |
| FOM/compost | 5 TPD | 10 TPD |
| Annual FOM | 1,650 TPY | 3,300 TPY |
| GHG avoided | ~12,000 tCO₂e/year | ~24,000 tCO₂e/year |
    `,
  },
  {
    id: "infrastructure",
    title: "Infrastructure, Utilities & Civil Works",
    content: `
### Electrical Power

| Consumer | Connected Load (Phase 1) |
|---|---|
| Pre-treatment equipment | ~60 kW |
| Agitators and mixers | ~80 kW |
| Pumps (slurry, water, gas) | ~55 kW |
| Boiler / heating system | ~40 kW |
| VPSA / gas processing | ~50 kW |
| Compressors | ~70 kW |
| Lighting, SCADA, offices | ~20 kW |
| **Total Connected Load** | **~375 kW** |
| Average Daily Consumption | ~1,000–1,200 kWh/day (most loads are batch/intermittent; ~12–14% average utilisation of connected capacity) |

Power source: APSPDCL grid connection (11 KV line to dedicated transformer). Emergency diesel generator (150 kVA) for critical loads. Future: 50 kWp rooftop solar to offset auxiliary power cost.

### Water

| Requirement | Quantity | Source |
|---|---|---|
| Initial digester filling (one-time) | 750–900 KL | Borewell or municipal supply |
| Steady-state fresh water make-up | ~3 KLD | Borewell (3-inch minimum) |
| Fire water storage | 50 KL RCC underground tank | On-site |

### Major Civil Works (Phase 1)

| Item | Specification |
|---|---|
| Site boundary wall | 4-metre height masonry; perimeter as per site survey |
| Internal roads | 7-metre wide paved access roads |
| Weighbridge foundation | RCC; 60-tonne capacity |
| Digester foundations | RCC raft/pile based on soil test; designed for thermal cycling |
| Mixing/receiving pits | RCC, acid-resistant coating, sump with pumping |
| Control room and lab | 200 m² RCC, climate-controlled |
| Office and amenities | 150 m² RCC; staff rooms, security cabin |
| Compost curing shed | 500 m² open shed with RCC flooring |
| Solid-liquid separation area | Covered paved area, effluent collection channels |
    `,
  },
  {
    id: "environment",
    title: "Environmental Compliance & Impact",
    content: `
### Environmental Benefits

| Parameter | Baseline (without project) | With Project |
|---|---|---|
| Organic waste landfilled (Phase 1) | 50 TPD landfilled/open-dumped | Zero — fully processed |
| Uncontrolled methane emissions | ~4,250 Nm³/day (if landfilled) | Near zero (controlled conversion) |
| GHG emissions avoided | — | **~12,000 tCO₂e/year** (Phase 1) |
| Leachate at landfill | High | Eliminated for diverted waste |
| Fossil CNG displaced | — | ~528 tonnes/year |
| Fossil fuel CO₂ displaced | — | ~1,500 tCO₂e/year |

**Total carbon benefit: ~13,500 tCO₂e/year (Phase 1)** — eligible for carbon credit monetization under VCS/Gold Standard (VM0044 methodology) or India's Carbon Credit Trading Scheme (CCTS, once waste sector is notified). At conservative Rs. 400/tCO₂e: Rs. 48–54 lakh/year. At mid-range Rs. 600/tCO₂e: Rs. 72–81 lakh/year. VCS methodology registration to be initiated within 6 months of commissioning.

### Emissions from Plant Operations

| Source | Pollutant | Control Measure |
|---|---|---|
| Boiler flue gas | NOx, SOx, particulate | Pulse jet bag filter; stack height per CPCB norms |
| Methane slip from VPSA | CH₄ | Tail gas recirculation; <3% slip guaranteed |
| Emergency flare | CO₂, CO | High-efficiency enclosed flare; only during upset |
| Compost area | Odour (NH₃, H₂S) | Covered curing shed; biofilter if required by AP PCB |
| Receiving area | Odour | Enclosed shed; slight negative pressure |

### Regulatory Clearances Required

| Clearance | Authority | Target Timeline |
|---|---|---|
| Consent to Establish (CTE) | AP Pollution Control Board | 45–60 days post DPR approval |
| Consent to Operate (CTO) | AP PCB | Post construction, before commissioning |
| PESO License | PESO, MoPNG | 60–90 days; parallel to construction |
| Factory License | Dept. of Factories, AP | 30 days |
| Fire Safety NOC | AP Fire Services | Post construction |
| SATAT Producer Registration | MoPNG / OMC | 30–45 days post PESO |
| MNRE CBG Registration | MNRE | For subsidy eligibility |
| Building Plan Approval | TTDA / Local authority | 30–45 days |
    `,
  },
  {
    id: "social",
    title: "Social Impact & Community Benefits",
    content: `
| Benefit | Quantification |
|---|---|
| Direct employment | 22 permanent jobs (Phase 1); 40 jobs (Phase 2) |
| Indirect employment | 30–50 jobs in feedstock collection, compost distribution, cascade transport |
| Farmer benefit | 1,650 tonnes/year FOM at Rs. 2,500/tonne vs. synthetic fertilizer Rs. 4,500/tonne |
| BWG compliance support | ~100 Tirupati businesses achieve SWM legal compliance via Cero Hero |
| Pilgrimage corridor health | Reduction in open organic waste along pilgrimage routes |
| Groundwater protection | Elimination of leachate from 50 TPD organic waste diverted from landfill |
| Municipal cost savings | Reduced landfill tonnage; TTMC saves Rs. 300–500/tonne landfill tipping cost |
| TTD partnership opportunity | TTD as anchor BWG brings 3.5–5 TPD high-quality food waste and institutional legitimacy |

### Employment Profile

| Role | Count | Annual Cost |
|---|---|---|
| Plant Manager | 1 | — |
| Shift Engineers | 3 | — |
| Plant Operators | 8 | — |
| Lab Technicians | 2 | — |
| Collection Staff (Cero Hero routes) | 4 | — |
| Admin and Security | 4 | — |
| **Total** | **22** | **Rs. 80 lakh/year** |

All 22 positions prioritised for local Tirupati residents. Skill development program in partnership with TTMC and local polytechnics.
    `,
  },
  {
    id: "capex",
    title: "Capital Cost Estimate",
    content: `
### Phase 1 — 50 TPD Plant (April 2026 Prices; Excludes Land and GST)

| S.No | Component | INR Lakh |
|---|---|---|
| **A** | **Project Development & Administrative** | |
| A.1 | DPR, feasibility studies, surveys | 25 |
| A.2 | Land survey, topography, soil testing | 15 |
| A.3 | PESO approvals, CPCB filings | 10 |
| A.4 | MNRE/SATAT registration assistance | 5 |
| A.5 | Legal entity and regulatory compliance | 5 |
| | **Sub-total A** | **60** |
| **B** | **Plant & Machinery (EPC Scope)** | |
| B.1 | Pre-treatment: shredder, trommel, conveyors, dumping pits, weighbridge | 260 |
| B.2 | Slurry homogenization and feed system | 80 |
| B.3 | Anaerobic digestion system (pre-digester + 2 CSTR + secondary, complete) | 520 |
| B.4 | Biogas collection, gas holders, manifold | 90 |
| B.5 | Gas upgradation (H₂S scrubber + VPSA/water scrubbing) | 360 |
| B.6 | Compression system (booster compressors, cascades, manifold) | 150 |
| B.7 | Solid-liquid separator, compost handling | 80 |
| B.8 | Boiler/heating system, heat exchangers | 80 |
| B.9 | Electrical system (transformer, MCC, VFDs, cabling) | 120 |
| B.10 | SCADA, PLC, instrumentation and sensors | 80 |
| B.11 | Fire safety, gas detection, emergency systems | 40 |
| B.12 | Piping, valves, fittings (complete process) | 90 |
| B.13 | Miscellaneous mechanical | 50 |
| | **Sub-total B (Plant & Machinery)** | **1,900** |
| **C** | **Civil & Structural Works** | |
| C.1 | Site development, earthworks, levelling | 40 |
| C.2 | Boundary wall, internal roads, pavements | 60 |
| C.3 | Digester foundations and substructure | 140 |
| C.4 | Civil works for all process units | 90 |
| C.5 | Control room, office, lab, utility buildings | 60 |
| C.6 | Compost curing shed | 30 |
| C.7 | Water supply, drainage, fire well, borewell | 35 |
| C.8 | Electrical civil works | 25 |
| C.9 | Miscellaneous civil | 20 |
| | **Sub-total C (Civil)** | **500** |
| **D** | **Operations & Miscellaneous** | |
| D.1 | Cascades/gas storage (3 cascades, 6,600 L each) | 110 |
| D.2 | Lab equipment | 20 |
| D.3 | Collection vehicles (2 units) | 40 |
| D.4 | Cero Hero platform development and deployment | 50 |
| D.5 | Office furniture, IT, CCTV | 20 |
| | **Sub-total D** | **240** |
| **E** | **Pre-Operative & Soft Costs** | |
| E.1 | Project management (PMC) during construction | 50 |
| E.2 | Operator training (6 months pre-commissioning) | 20 |
| E.3 | Pre-operative expenses, insurance during construction | 30 |
| | **Sub-total E** | **100** |
| **F** | **Contingency (8%)** | **224** |
| | **TOTAL PHASE 1 CAPEX** | **Rs. 3,024 lakh ≈ Rs. 30.24 crore** |

### Phase 2 Incremental CAPEX (Additional 50 TPD)

| Component | INR Lakh |
|---|---|
| Incremental plant and machinery | 1,100 |
| Incremental civil works | 300 |
| Additional cascades and storage | 80 |
| Additional vehicles and platform expansion | 40 |
| Contingency (8%) | 122 |
| **Phase 2 Incremental CAPEX** | **Rs. 1,642 lakh ≈ Rs. 16.42 crore** |

**Total Project CAPEX (Phase 1 + Phase 2): ~Rs. 46.66 crore**

> Civil works costs are indicative and subject to variation based on final site soil conditions and detailed engineering. Cost excludes land value (government allocation) and GST.
    `,
  },
  {
    id: "opex",
    title: "Operating Cost Model",
    content: `
### Phase 1 Annual OPEX (50 TPD, Year 2 onwards)

| Category | Details | Annual Cost (INR Lakh) |
|---|---|---|
| Human Resources | 22 staff: Plant Manager, Shift Engineers (3), Operators (8), Lab Technicians (2), Collection Staff (4), Admin/Security (4) | 80 |
| Power and Utilities | ~1,100 kWh/day average consumption × 330 days × Rs. 7/kWh (most loads batch/intermittent; ~12% avg utilisation of 375 kW connected) | 25 |
| Maintenance | 2.5% of plant & machinery CAPEX (Rs. 19 crore P&M) | 48 |
| Consumables | Chemicals for H₂S scrubber, filter media, lubricants, lab reagents | 18 |
| Collection Operations | Vehicle fuel and maintenance for Cero Hero routes (2 vehicles, 150 km/day each) | 22 |
| Insurance | Plant all-risk, product liability | 15 |
| Admin and Overheads | Office, communications, platform hosting, travel | 12 |
| Contingency (5%) | — | 11 |
| **Total Annual OPEX** | | **Rs. 231 lakh ≈ Rs. 2.31 crore/year** |

### OPEX Benchmarks

| Cost Item | Cero Hero (Phase 1) | Industry Range |
|---|---|---|
| OPEX per tonne input | Rs. 4,620/tonne | Rs. 4,000–6,000/tonne |
| Power cost as % of revenue | ~7% | 5–10% |
| Maintenance as % of CAPEX | 2.5% | 2–3% |
| Staff cost as % of revenue | ~22% | 15–25% |
    `,
  },
  {
    id: "financial",
    title: "Revenue Model & Financial Analysis",
    content: `
### Revenue Streams (Phase 1 — Steady State, Year 3)

| Revenue Stream | Calculation | Annual Revenue (INR Lakh) | Notes |
|---|---|---|---|
| **CBG Sales** | 1,600 kg/day × 330 days × Rs. 54/kg (current SATAT confirmed price) | 285 | SATAT-registered OMC offtake; Rs. 54/kg confirmed per IOCL SATAT portal 2025 (revised from original Rs. 46/kg launch price) |
| **Municipal Processing Fee (TTMC)** | 35 TPD × 330 days × Rs. 350/tonne | 40 | Subject to TTMC waste diversion MOU — see Annexure III |
| **Fermented Organic Manure (FOM)** | 1,650 tonnes/year × Rs. 2,500/tonne | 41 | FCO-compliant; farm-gate price per market survey |
| **Cero Hero BWG Subscriptions** | ~100 BWGs × avg Rs. 1,800/month × 12 months | 22 | Subscription-based collection contracts; see Annexure VI |
| **Sub-total (Base Revenue, no carbon credits)** | | **Rs. 388 lakh ≈ Rs. 3.88 crore** | |
| **Carbon Credits** | 12,000 tCO₂e/year × Rs. 400/tCO₂e (conservative — India voluntary market) | 48 | VCS/Gold Standard methodology VM0044; Rs. 400 base case. Range: Rs. 400–800/tCO₂e |
| **Total Revenue (Year 3+ with carbon credits)** | | **Rs. 436 lakh ≈ Rs. 4.36 crore** | Carbon credits are operational by Year 3; treated as base case |

> **CBG Price Note:** SATAT confirmed price is Rs. 54/kg (IOCL SATAT portal, 2025). Premium direct market (industrial fleet, hotel kitchen fuel replacement) is Rs. 70–80/kg but is not assumed in the base case. Revenue is modelled at the SATAT confirmed rate only. With the mandatory CBO blending obligation active from FY 2025–26, OMCs actively seek SATAT-registered CBG supply — price pressure is upward, not downward.

> **Carbon Credit Note:** India's CCTS is being extended to waste sector. VCS/Gold Standard methodology (VM0044 — Organic Waste Composting/Anaerobic Digestion) is applicable. At conservative Rs. 400/tCO₂e, carbon credits add Rs. 48 lakh/year. At Rs. 800/tCO₂e (upper range), addition is Rs. 96 lakh/year.

### Revenue Sensitivity

| Scenario | CBG Price | Carbon Credit | Total Revenue |
|---|---|---|---|
| Downside — SATAT only, no carbon credits | Rs. 54/kg | Nil | Rs. 3.88 crore |
| **Base case — SATAT + carbon credits (conservative)** | **Rs. 54/kg** | **Rs. 400/tCO₂e** | **Rs. 4.36 crore** |
| Mid case — SATAT + carbon credits (mid) | Rs. 54/kg | Rs. 600/tCO₂e | Rs. 4.60 crore |
| Upside — premium direct market + full carbon | Rs. 75/kg | Rs. 800/tCO₂e | Rs. 6.10 crore |

### EBITDA Summary

| Parameter | Phase 1 (Base) | Phase 2 |
|---|---|---|
| Annual Revenue (with carbon credits, base) | Rs. 4.36 crore | Rs. 8.20 crore |
| Annual OPEX | Rs. 2.31 crore | Rs. 3.85 crore |
| **EBITDA** | **Rs. 2.05 crore** | **Rs. 4.35 crore** |
| EBITDA Margin | 47% | 53% |

> **Phase 2 OPEX note:** Shared fixed costs (management, SCADA, insurance, admin) do not double with Phase 2 expansion. Phase 2 marginal OPEX = Rs. 1.54 crore incremental (new operations staff Rs. 60 lakh, additional power Rs. 25 lakh, maintenance on new P&M Rs. 28 lakh, consumables Rs. 18 lakh, vehicles Rs. 15 lakh, contingency Rs. 8 lakh = Rs. 1.54 crore). Combined OPEX at full Phase 2 = Rs. 2.31 + Rs. 1.54 = Rs. 3.85 crore.

### Financing Structure

| Parameter | Value | Basis |
|---|---|---|
| Phase 1 Total CAPEX | Rs. 30.24 crore | Per cost estimate |
| Less: MNRE CFA (Biogas Programme Phase-I) | Rs. 1.33 crore | Rs. 4 crore per 4,800 kg/day × (1,600/4,800); proportional calculation per MNRE scheme |
| Less: MoPNG Financial Assistance to CBG Producers | Rs. 0.75 crore | Separate MoPNG scheme (Rs. 564.75 crore total budget, FY 2023–27); eligibility subject to confirmation |
| Less: AP State Land Concession (capitalised) | Rs. 2.00 crore | 5 acres at Rs. 40 lakh/acre government reserve price; lease at Re. 1/year equivalent |
| **Net CAPEX to be Financed** | **Rs. 26.16 crore** | |
| Equity (30%) | Rs. 7.87 crore | Promoter equity + seed investor round |
| Debt (70%) — IREDA Green Finance | Rs. 18.37 crore | IREDA Green Bond / NaBFID Green Infrastructure |
| **Loan Terms** | 8.5% p.a., 15-year tenure, 2-year principal moratorium | Standard IREDA green infrastructure terms |
| Annual interest during moratorium (Yr 1–2) | Rs. 1.56 crore/year | Rs. 18.37 Cr × 8.5% |
| **Annual Debt Service from Year 3** | **Rs. 1.84 crore/year** | Annuity on Rs. 18.37 crore over 13 years at 8.5% |
| Working Capital Line | Rs. 60 lakh | 3-month OPEX buffer; CC facility from lead bank |

> **MNRE CFA Note:** The applicable MNRE scheme is the "National Biogas and Organic Manure Programme (NBOMP)" and the "CBG Plant Support Scheme" under the Biogas Programme 2024–25 guidelines. Eligible CFA for a 1,600 kg/day CBG plant is calculated as Rs. 1.25 crore/TPD CBG × 1.6 TPD, subject to ceiling. Exact quantum confirmed against Annexure V.

> **AP State Support Note:** No specific Government Order (G.O.) for cash VGF to private CBG players has been identified under the AP Clean Energy Policy 2024 at the time of DPR submission. The government support modelled here is the land concession value (capitalised at market rate) + TTMC processing fee (Rs. 350/tonne — per SBM-Urban norms). The promoter will separately apply for any discretionary VGF if a relevant G.O. is notified.

### Debt Service Coverage Ratio (DSCR) — By Year

| Year | EBITDA | Debt Service | DSCR | Status |
|---|---|---|---|---|
| Year 1 (ramp-up, 50%; moratorium) | Rs. 0.50 Cr | Rs. 1.56 Cr (interest only) | 0.32 | Ramp phase; promoter equity covers shortfall |
| Year 2 (80%; moratorium) | Rs. 1.40 Cr | Rs. 1.56 Cr (interest only) | 0.90 | Equity bridge; carbon credit registration in progress |
| Year 3 (100%; repayment starts; carbon credits) | Rs. 2.05 Cr | Rs. 1.84 Cr | **1.11** | ✅ Above 1.0 from Year 3 |
| Year 4 (carbon credits maturing to Rs. 600/tCO₂e) | Rs. 2.30 Cr | Rs. 1.84 Cr | **1.25** | ✅ Meets IREDA minimum threshold |
| Year 5+ (BWG network mature) | Rs. 2.50 Cr | Rs. 1.84 Cr | **1.36** | ✅ Comfortable margin; positive free cash flow |
| Year 7+ (Phase 2 operational) | Rs. 4.35 Cr | Rs. 3.10 Cr | **1.40** | ✅ Combined Phase 1+2 debt service; strong coverage |

> **Revised Viability Assessment:** At Rs. 54/kg SATAT pricing (confirmed 2025) and conservative carbon credits from Year 3, DSCR clears 1.0 from Year 3 and reaches IREDA's 1.25 minimum by Year 4 without requiring any extraordinary support. The project is commercially viable with: (1) SATAT registration, (2) 2-year IREDA moratorium, and (3) carbon credit registration within 6 months of commissioning. Government support (land concession + TTMC processing fee) improves but is not the sole viability condition.

### Long-Term Cash Flow Profile

| Year | Revenue | OPEX | EBITDA | Debt Service | Free Cash | DSCR |
|---|---|---|---|---|---|---|
| Yr 1 (50% ramp) | Rs. 1.95 Cr | Rs. 1.80 Cr | Rs. 0.15 Cr | Rs. 1.56 Cr | (Rs. 1.41 Cr) | 0.10 |
| Yr 2 (80%, moratorium) | Rs. 3.10 Cr | Rs. 2.10 Cr | Rs. 1.00 Cr | Rs. 1.56 Cr | (Rs. 0.56 Cr) | 0.64 |
| Yr 3 (100%, carbon credits active) | Rs. 4.36 Cr | Rs. 2.31 Cr | Rs. 2.05 Cr | Rs. 1.84 Cr | **+Rs. 0.21 Cr** | **1.11** |
| Yr 4 (carbon credits Rs. 600/tCO₂e) | Rs. 4.60 Cr | Rs. 2.33 Cr | Rs. 2.27 Cr | Rs. 1.84 Cr | **+Rs. 0.43 Cr** | **1.23** |
| Yr 5 (full ramp, BWG scale-up) | Rs. 4.80 Cr | Rs. 2.35 Cr | Rs. 2.45 Cr | Rs. 1.84 Cr | **+Rs. 0.61 Cr** | **1.33** |
| Yr 7 (Phase 2 commercial) | Rs. 8.20 Cr | Rs. 3.85 Cr | Rs. 4.35 Cr | Rs. 3.10 Cr | **+Rs. 1.25 Cr** | **1.40** |
| Yr 10 (Phase 1 debt service declining) | Rs. 8.50 Cr | Rs. 3.90 Cr | Rs. 4.60 Cr | Rs. 2.40 Cr | **+Rs. 2.20 Cr** | **1.92** |

**Project IRR (blended, 15-year horizon): 14–17%**
**Equity IRR: 18–22%** (with land concession, SATAT at Rs. 54/kg, carbon credits)
**Payback period: 8–9 years (Phase 1); 6–7 years (Phase 1+2 combined)**

> **Investor Case:** This is a long-gestation infrastructure project. The equity case rests on three confirmed pillars: (1) Rs. 54/kg SATAT pricing with mandatory CBO creating demand certainty, (2) government land concession reducing the largest CAPEX variable, and (3) VCS carbon credits from Year 3 creating an additional Rs. 48–96 lakh/year revenue layer. The project no longer depends on speculative government cash grants — SATAT pricing alone creates a credible base case.
    `,
  },
  {
    id: "timeline",
    title: "Implementation Plan & Timeline",
    content: `
### Phase 1 Timeline (14 Months from Zero Date)

*Zero Date = Date of contract signing with EPC contractor, or receipt of government site allocation letter — whichever is later.*

| Phase | Duration | Key Activities |
|---|---|---|
| Pre-Construction | Months 0–2 | Site handover; soil testing; survey; DPR finalization; EPC tender floated |
| Design and Engineering | Months 1–3 | PFDs, P&IDs, GA drawings, structural design, electrical SLDs; PESO + AP PCB applications |
| Civil Works | Months 3–6 | Excavation; digester foundations; boundary wall; roads; control room; water infrastructure |
| Structural & Mechanical | Months 5–9 | MS digester erection; pre-treatment equipment; gas holder; VPSA skid installation |
| Electrical & Automation | Months 8–11 | Transformer; MCC; cabling; SCADA/PLC; instrumentation; gas detectors |
| Buildings & Utilities | Months 9–11 | Control room fit-out; lab; compost shed; fire systems |
| Commissioning & Testing | Months 11–14 | Cold commissioning; water trials; gas quality testing; PESO final inspection; CTO application |
| Performance Guarantee Test Run | Months 14–20 | Sustained operation at rated capacity; SATAT registration; first commercial dispatch |

**Commercial Operation Target: Month 20 from Zero Date**

### Pre-Construction Action Plan (First 90 Days)

| Action | Owner | Deadline |
|---|---|---|
| Government site allocation letter | MAUD/TTMC | Day 30 from DPR acceptance |
| Cero Hero entity formation | Cero Hero | Day 30 |
| TTMC waste diversion MOU signed | TTMC + Cero Hero | Day 45 |
| EPC tender floated | Cero Hero + PMC | Day 30 |
| Soil test and survey commenced | Appointed consultant | Day 45 |
| MNRE CFA application submitted | Cero Hero | Day 60 |
| AP PCB CTE pre-consultation | Cero Hero + AP PCB | Day 60 |
| EPC contractor shortlisted | Cero Hero | Day 75 |
| EPC contract signed | Cero Hero | Day 90 |

### Phase 2 Timeline

| Milestone | Timing |
|---|---|
| Phase 2 engineering commences | Month 18 (parallel to Phase 1 PGTR) |
| Phase 2 civil and mechanical | Months 24–32 |
| Phase 2 commissioning | Months 32–36 |
| Phase 2 commercial operation | **Month 36 from Zero Date** |
    `,
  },
  {
    id: "risk",
    title: "Risk Register & Mitigation",
    content: `
| Risk | Category | Probability | Impact | Mitigation |
|---|---|---|---|---|
| **TTMC 100 TPD DBFOT at Thukivakam constrains municipal waste allocation** | **Feedstock** | **High** | **High** | **Site C (Karakambadi) draws from separate TTMC collection circuits, avoiding Thukivakam cluster. Cero Hero's 35 TPD from TTMC represents only 30% of total organic waste generated — ample headroom. BWG platform (15 TPD) is entirely independent of TTMC contracts. Government to clarify DBFOT scope and waste allocation in site allocation letter.** |
| Feedstock supply shortfall from TTMC | Feedstock | Medium | Medium | Long-term TTMC waste diversion agreement for specific collection routes serving Site C; Cero Hero BWG platform at 15 TPD provides feedstock independence buffer |
| CBG price below Rs. 46/kg | Commercial | Low | High | SATAT guarantees minimum Rs. 46/kg from registered OMC; contract before commissioning |
| EPC cost overrun (>10%) | Execution | Medium | Medium | Fixed-price EPC contract with performance bond; PMC oversight; 8% contingency built in |
| AP PCB CTO delayed | Regulatory | Medium | Medium | Early pre-consultation; parallel application tracking; PMC regulatory specialist |
| PESO approval delay | Regulatory | Medium | High | Engage PESO-experienced consultant from Day 1; initiate application during detailed engineering |
| Biogas yield below design | Technical | Medium | Medium | 10% safety margin in design; feedstock characterization lab; Cero ID quality tracking |
| Digestate off-take not secured | Commercial | Low | Low | FCO-compliant FOM is directly saleable; agricultural adjacency at all 3 site options |
| Financing gap | Financial | Medium | High | MNRE CFA + AP grant reduce equity requirement; IREDA/NABARD green finance; carbon credits supplement |
| Monsoon construction delay | Execution | Medium | Low | AP monsoon contingency (June–September); civil schedule front-loaded before June |
| Community opposition | Social | Low | Low | Enclosed plant design; community engagement from Day 1; local employment priority |
| Feedstock quality degradation | Technical | Low | Medium | On-site lab testing protocols; rejection criteria for contaminated loads; Cero Hero Tier 1/2 mix maintains yield |
    `,
  },
  {
    id: "policy",
    title: "Policy Alignment & Incentive Framework",
    content: `
### Central Schemes Available

| Scheme | Benefit | Status |
|---|---|---|
| **CBG Blending Obligation (CBO) — FY 2025–26** | **Legally mandatory for OMCs: 1% CBG blend in CNG/PNG (FY25–26), 3% (FY26–27), 4% (FY27–28), 5% (FY28–29+). OMCs face quarterly compliance review. Every SATAT-registered CBG producer is now a compliance asset. This creates structural demand certainty above and beyond SATAT pricing alone.** | **Active from this financial year** |
| SATAT (MoPNG, 2018, revised) | Guaranteed CBG offtake by OMCs at Rs. 54/kg (current confirmed rate); long-term offtake agreement | Register post-PESO approval |
| MNRE Biogas Programme (Phase-I, FY 2021–26) | CFA of Rs. 1.33 crore for Cero Hero's 1,600 kg/day plant (Rs. 4 crore per 4,800 kg/day proportional) | Apply within 60 days of incorporation |
| MoPNG Financial Assistance to CBG Producers | Rs. 564.75 crore budget (FY 2023–27); separate from MNRE; Cero Hero to apply for producer incentive | Apply post-SATAT registration |
| GOBARdhan | Project registration; monitoring; potential priority allocation in national CBG targets | Register on GOBARdhan Unified Registration Portal |
| SBM-Urban 2.0 | ODF+ and GFC+ credits to TTMC for organic waste processing; strengthens TTMC case for diversion MOU; Tirupati protects 8th cleanest city ranking | Positions TTMC as SBM beneficiary |

### State Support Requested from Government of Andhra Pradesh

| Support Item | Specific Request |
|---|---|
| Land allocation | 5 acres at Site A (Renigunta) or Site C (Karakambadi) at nominal lease — Rs. 1/year for 25 years, or concessional long-term lease |
| TTMC waste diversion | MAUD to direct TTMC to execute 35 TPD organic waste diversion MOU with Cero Hero; minimum daily tonnage with liquidated damages |
| Processing fee | TTMC pays Rs. 300–400/tonne for diverted municipal organic waste (aligned with SBM-Urban norms) |
| State grant/VGF | Rs. 2 crore as Viability Gap Funding from AP State Budget (Clean Energy allocation) |
| Regulatory fast-tracking | AP PCB and PESO to designate a nodal officer for this project's clearance timeline |
| APSPDCL power connection | Priority connection (11 KV) with green energy tariff if available under AP Renewable Energy Policy |

### Carbon Finance Opportunity

The project avoids approximately **13,500 tCO₂e/year** (Phase 1) through:
- Prevention of uncontrolled landfill methane emissions
- Displacement of fossil CNG with CBG
- Compost displacing synthetic fertilizer (N₂O reduction)

Eligible for:
- India's **Carbon Credit Trading Scheme (CCTS)** under the Energy Conservation (Amendment) Act 2022
- **VCS/Gold Standard** voluntary carbon markets for international credit sales
- At Rs. 400–800/tCO₂e (current Indian voluntary market range): **Rs. 54–108 lakh/year** additional revenue (Phase 1). Rs. 800/tCO₂e represents the upper bound of VCS Gold Standard market pricing in USD-denominated transactions; Rs. 400/tCO₂e is used as base case.
    `,
  },
  {
    id: "regulatory-roadmap",
    title: "Regulatory Clearances & Approval Roadmap",
    content: `
### Clearance Timeline

| Month | Milestone | Action |
|---|---|---|
| Month 1–2 | DPR accepted by MAUD | Site allocation letter issued |
| Month 2 | AP PCB CTE application | Submitted |
| Month 2 | PESO application | Submitted for gas compression/storage |
| Month 2 | MNRE CFA application | Submitted |
| Month 2 | Building Plan Approval | Submitted to TTDA/Local Authority |
| Month 3 | AP PCB CTE | Granted (target) |
| Month 4 | Building Plan Approval | Granted (target) |
| Month 6 | PESO preliminary clearance | Target; final during construction |
| Month 9 | Factory License | Applied |
| Month 12 | PESO final inspection | Post-installation |
| Month 14 | AP PCB CTO | Applied |
| Month 15 | CTO | Granted (target) |
| Month 16 | SATAT producer registration | Completed |
| Month 18 | Fire Safety NOC | Granted |
| Month 20 | **Commercial Operation Declared** | First CBG dispatch |

### Key Regulatory Contacts

| Clearance | Department | Key Legislation |
|---|---|---|
| CTE/CTO | AP Pollution Control Board | Water Act 1974; Air Act 1981; EP Act 1986 |
| PESO license | Petroleum and Explosives Safety Organisation | Static and Mobile Pressure Vessels Rules 2016 |
| Factory license | Dept. of Factories and Boilers, AP | Factories Act 1948 |
| Environmental compliance | AP PCB + CPCB | SWM Rules 2016, Biogas Plant Guidelines |
| SATAT registration | Ministry of Petroleum and Natural Gas | SATAT Scheme notification 2018 |
| Fire NOC | AP Fire and Emergency Services | AP Fire Service Act |
    `,
  },
  {
    id: "recommendations",
    title: "Recommendations & Way Forward",
    content: `
### Summary of Government Actions Required

| Priority | Action | Department | Timeline |
|---|---|---|---|
| 1 | Accept DPR and convey in-principle approval | MAUD | 30 days |
| 2 | Issue site allocation letter for 5 acres at Site A or C with Survey No. and village details | MAUD/TTMC/Revenue Dept | 45 days |
| 3 | Direct TTMC to execute waste diversion MOU (35 TPD, minimum tonnage, LD clause) | MAUD → TTMC | 60 days |
| 4 | Facilitate AP PCB pre-consultation meeting | MAUD → AP PCB | 30 days |
| 5 | Nominate APSPDCL nodal officer for 11 KV connection | APSPDCL | 45 days |
| 6 | Facilitate TTD consent for organic waste MOU (3–5 TPD) | MAUD → TTD Board | 60 days |

> **Note on AP VGF:** No specific Government Order (G.O.) for cash VGF to private CBG players under the AP Clean Energy Policy 2024 has been identified at the time of this submission. The promoter will apply for any discretionary support if and when a relevant G.O. is issued. The financial model is not dependent on cash VGF — land concession (at nominal lease) and TTMC processing fee are the primary government contributions modelled.

### Promoter Commitments (Upon DPR Acceptance and Site Allocation)

- **Company incorporation:** Register Cero Hero Private Limited (CIN) within 30 days of DPR acceptance letter — this is a pre-condition for all subsequent steps
- **Site verification:** Commission independent soil testing and topographic survey within 45 days of site allocation letter
- **EPC tender:** Float competitive EPC tender to minimum 3 qualified vendors within 45 days (vendor list in Annexure IV)
- **TTMC MOU:** Execute waste diversion agreement within 60 days
- **MNRE CFA application:** Submit within 60 days of incorporation
- **BWG enrollment:** Commence Cero Hero enrollment drive in Tirupati — target 50 BWGs signed within 90 days
- **Financial closure:** Target within 6 months of site allocation — contingent on MNRE CFA letter and TTMC MOU being in place

### Why the Government of Andhra Pradesh Should Say Yes — The Decision Calculus

This section is written for the reviewing officer. The question is not "is this a good project?" — it is "what does the government gain, what does it risk, and what does it cost?"

**What AP Government Gains:**

| Benefit | Quantified Value |
|---|---|
| TTMC landfill cost savings | 35 TPD × 330 days × Rs. 400/tonne savings = Rs. 46 lakh/year back to TTMC |
| TTMC processing fee income | Rs. 40 lakh/year (government earns money from its waste) |
| Swachh Survekshan ranking | 50 TPD CBG plant = direct GFC+ scoring; protects Tirupati's 8th rank nationally |
| CBO compliance for AP OMCs | One more SATAT-registered CBG plant reduces OMC penalty risk in AP |
| State employment | 22 direct jobs; 50+ indirect; all Tirupati local |
| Farmer fertilizer savings | 1,650 tonnes/year FOM vs synthetic fertilizer; Rs. 33 lakh/year farmer savings |
| GHG avoided | 12,000 tCO₂e/year — counts toward AP's state climate commitments |
| LPG import substitution | 528 tonnes CBG/year displaces ~450 tonnes LPG equivalent; contributes to India's import bill |
| Replication template | Cero Hero's model becomes AP's template for the other 4 sanctioned urban CBG plants |

**What AP Government Risks:**

| Risk | Assessment |
|---|---|
| Financial risk | Zero — no cash outlay from state budget; only land lease (Re. 1/year) and facilitation of TTMC MOU |
| Reputational risk | Low — Cero Hero commits to full EPC procurement transparency and SATAT registration |
| Land risk | Site C is government land; allocation is administrative, not commercial |
| Failure risk | If Cero Hero fails post-commissioning, the land reverts; SATAT registration and plant assets remain for next operator |

**What AP Government Is Asked to Do (and not asked to do):**

| Ask | Ask Type |
|---|---|
| Allocate 5 acres at Site C | Administrative — land allocation order |
| Direct TTMC MOU for 35 TPD (specific collection routes) | Facilitation — MAUD circular to TTMC |
| AP PCB pre-consultation | Procedural — 1 meeting facilitated |
| APSPDCL nodal officer for power connection | Administrative — internal nomination |
| NOT asked to do | Provide cash grant, guarantee debt, underwrite revenue, take equity |

**The government is being asked to sign a land order and facilitate two administrative approvals. The financial and execution risk sits entirely with Cero Hero and its lenders.**

---

### The Broader Vision

This project is not simply a 50 TPD waste processing plant. It is the **first node in Tirupati's circular bioenergy economy**. The Cero Hero platform, once deployed for this plant, becomes the infrastructure layer for:

- Scaling to 100 TPD at the same site (Phase 2)
- Replicating the model in Kurnool, Vijayawada, Vizag, and other AP cities
- Connecting Tirupati's CBG output to a regional fuel distribution network
- Generating **verified carbon credits** that can be monetized globally

The Government of Andhra Pradesh has the opportunity to make Tirupati the reference city for India's organic waste-to-fuel transition — a pilgrimage economy that has eliminated its organic waste liability and turned it into clean fuel, fertilizer, and income.

---

*This Detailed Project Report has been prepared based on publicly available data on Tirupati's waste profile, national benchmarks for CBG plant costs and yields, and MNRE/SATAT policy frameworks. All technical parameters are indicative pending detailed engineering. Final costs, yields, and timelines will be confirmed during EPC detailed engineering following government approval.*

*Cero Hero Private Limited (in incorporation) is committed to full transparency, competitive procurement, and measurable environmental performance in the execution of this project.*
    `,
  },
  {
    id: "annexures",
    title: "Annexures — Index & Status",
    content: `
This section lists all annexures required for a complete government DPR submission. Annexures marked **[PENDING]** are to be submitted within 45 days of DPR acceptance and site allocation, as they require government site confirmation to complete.

| Annexure | Title | Status |
|---|---|---|
| **Annexure I** | Site Survey & Land Parcel Details — Survey Numbers, Village, Mandal, GPS coordinates, khasra/patta details for Sites A, B, and C | **[PENDING — requires Revenue Dept confirmation of site]** |
| **Annexure II** | Soil Investigation Report — Bore log data, bearing capacity, foundation recommendation for digester RCC raft/pile design | **[PENDING — to be commissioned upon site allocation]** |
| **Annexure III** | Draft TTMC Waste Diversion MOU — Terms, minimum daily tonnage, liquidated damages, duration (25 years), pricing formula | **[DRAFT READY — to be finalised with TTMC]** |
| **Annexure IV** | EPC Vendor Shortlist — Indicative technical proposals and reference plant list from 3 qualified vendors (Infra BioEnergy / BPCL Energies / SRM Energy) | **[DRAFT READY]** |
| **Annexure V** | MNRE CFA Eligibility Calculation — Scheme notification reference, eligible cost basis, CFA quantum calculation for 1,600 kg/day CBG plant | **[DRAFT READY — subject to current scheme notification]** |
| **Annexure VI** | Cero Hero Platform — BWG enrollment framework, Cero ID system description, draft subscription agreement template | **[READY]** |
| **Annexure VII** | Promoter Profile — Founder biographical note, technical advisory board, financial capacity statement, proposed equity structure and co-investor LOIs | **[READY — provided separately to MAUD on request]** |
| **Annexure VIII** | Feedstock Characterisation Data — Lab analysis of Tirupati municipal organic waste (TS, VS, C:N ratio, calorific value, heavy metals) from TTMC samples | **[PENDING — lab analysis to be conducted within 30 days of DPR acceptance]** |
| **Annexure IX** | Environmental Pre-Feasibility Report — Preliminary site environmental assessment, odour management plan, noise impact study, groundwater baseline | **[PENDING — to be prepared by ENVIS-empanelled consultant within 45 days of site allocation]** |
| **Annexure X** | Financial Model — Full 20-year DCF model in Excel format with assumptions, sensitivity tables, DSCR by year, IRR calculation | **[READY — available on request to MAUD/IREDA]** |

### Key Data Gaps to be Resolved Before Final DPR

The following items are identified as outstanding data gaps that will change specific numbers once resolved:

| Gap | Impact if Unresolved | Resolution Path |
|---|---|---|
| Actual site soil conditions (Annexure II) | Civil cost estimate may vary ±15–20%; foundation type may change | Soil test within 30 days of site allocation |
| TTMC organic waste lab analysis (Annexure VIII) | Biogas yield and mass balance may vary ±10% | Lab analysis on TTMC waste samples; 30-day turnaround |
| Final MNRE CFA scheme notification for FY 2026-27 | CFA quantum may change by Rs. 0.5–1 crore | Ministry notification expected Q1 FY 2026-27 |
| TTD consent for BWG enrollment | Phase 1 Tier 1/2 feedstock may reduce to 11 TPD (from 15 TPD) | Direct approach to TTD Board; facilitated by MAUD |
| APSPDCL power tariff for green energy | OPEX power cost may vary ±Rs. 5 lakh/year | Confirmed after APSPDCL connection order |
    `,
  },
];
