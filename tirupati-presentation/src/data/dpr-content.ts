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
Cero Hero Private Limited proposes to develop an **Integrated Organic Waste-to-Compressed Bio-Gas (CBG) Facility** in Tirupati, Andhra Pradesh, as a phased greenfield project on government-allocated land.

### The Problem Is Measurable

Tirupati Municipal Corporation (TTMC) currently manages approximately **115 TPD** of wet organic waste from its urban catchment — food waste, kitchen waste, market organics, and garden biomass. A further 5–10 TPD of segregated high-quality organic waste is generated daily by bulk waste generators (BWGs) including hotels, restaurants, hospitals, and institutional kitchens. This organic fraction is either landfilled, open-dumped, or inadequately processed, generating uncontrolled methane emissions, groundwater contamination risk, and public health burden.

### The Solution Is Bankable

Through a thermophilic wet anaerobic digestion process, the plant will convert **50 TPD** of segregated organic waste into:

- **1,600 kg/day** of Compressed Bio-Gas (CBG), compliant with IS 16087:2016
- **5 TPD** of nutrient-rich Fermented Organic Manure (FOM) for agricultural use
- **Clean water** for internal process recycling, with zero liquid discharge

The project introduces the **Cero Hero digital waste collection platform** — a subscription and traceability system that routes segregated organic waste from bulk generators directly to the plant, ensuring feedstock quality and supply reliability that pure municipal systems cannot guarantee.

### What the Government of Andhra Pradesh Is Asked to Do

1. Allocate a suitable **5-acre site** in one of three evaluated locations
2. Support a **TTMC waste diversion agreement** — 35 TPD in Phase 1
3. Facilitate **AP PCB and PESO clearance** processing
4. Consider **state-level fiscal support** under the Clean Energy Policy (Rs. 2 crore VGF)

### Why Now

- AP government sanctioned **five urban CBG plants** across the state (March 2026)
- Tirupati district already has **1 functional + 1 under-construction** CBG plant (GOBARdhan portal, December 2025)
- SATAT guarantees minimum Rs. 46/kg CBG offtake — commercial certainty exists
- The existing Thukivakam biomethanation plant (50 TPD, Mahindra) proves the feedstock is processable
    `,
  },
  {
    id: "background",
    title: "Project Background & Rationale",
    content: `
### Why Tirupati

Tirupati is not a generic Indian city. It is a **pilgrimage-economy city** with structural characteristics that make it exceptionally suited for a waste-to-energy project.

**Guaranteed organic waste supply.** The city's pilgrimage economy generates consistent wet organic waste throughout the year. Unlike manufacturing-dependent cities, waste volumes do not fluctuate with economic cycles. Tirumala Tirupati Devasthanams (TTD) alone serves 50,000–100,000 pilgrims daily.

**Demonstrated proof at scale.** Tirupati already operates a 50 TPD biomethanation plant at Thukivakam (PPP with Mahindra Waste-to-Energy Solutions, commissioned 2022–23 per MNRE BioURJA records), producing 1,728 m³/day of raw biogas and 5 tonnes/day of compost. This is not a pilot — it is an operating proof point.

**Active policy signal.** In March 2026, the AP government sanctioned five urban CBG plants. Tirupati district is listed in the GOBARdhan portal (December 16, 2025 Lok Sabha data) with one functional and one yet-to-start CBG plant. A second, better-capitalised plant with advanced gas upgrading is explicitly needed.

**Bulk generator density.** TTMC has formally identified:
- **27 BWGs** above 100 kg/day
- **60 BWGs** at 50–100 kg/day

This is a structured, mappable organics supply chain — not informal waste.

### The Cero Hero Strategic Position

Cero Hero is positioned as a **waste infrastructure operator with a digital intelligence layer**, not a conventional municipal waste contractor. Two compounding advantages:

1. **Feedstock security** — the Cero Hero platform locks in high-quality, segregated organic waste from BWGs through subscription contracts, supplementing municipal collection and improving biogas yield
2. **Platform data value** — the Cero ID traceability system creates a verified record of waste origin, quantity, and composition, enabling carbon credit monetization, ESG reporting for hotel/institutional clients, and regulatory compliance documentation

### National Policy Context

| Scheme | Relevance |
|---|---|
| SATAT (MoPNG, 2018) | CBG offtake at regulated price (Rs. 46/kg minimum); Cero Hero registers as SATAT producer |
| SBM-Urban 2.0 | Mandates source segregation and organic waste processing; directly aligned |
| GOBARdhan (MoAHD&F) | National platform for biogas/CBG registration, subsidy tracking |
| MNRE Biogas Programme | Central Financial Assistance available for CBG plants of this scale |
| AP Clean Energy Policy 2024 | State-level support for renewable energy projects including biomethane |
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
| Tier 2 (High) | TTD prasad/langar waste, temple food prep | 5–8 TPD | 18–22% | 82–88% | 90–115 Nm³/ton |
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
| Restaurants and food courts | 30 | 2.5 TPD |
| Hospital and institutional catering | 15 | 2.0 TPD |
| TTD / temple kitchens (subject to MOU) | 5 | 3.5 TPD |
| Market waste aggregators | 25 | 2.5 TPD |
| **Total** | **100** | **~15 TPD** |

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

### Site Option A — Renigunta Waste Management Cluster ⭐ Recommended

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

**Key advantage:** Shortest distance from city BWG concentration; best logistics for CBG cascade distribution. APIIC industrial zone classification reduces land conversion complexity.

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

### Site Option C — Karakambadi–Mangalam Agri-Interface Zone

**Southern outskirts, 8–10 km from city, Tirupati Rural Mandal**

| Parameter | Details |
|---|---|
| Distance from TTMC zones | 8–10 km |
| Road access | State Highway SH-63 |
| Land available | 5–8 acres via TTMC/Panchayat allocation |
| Soil condition | Laterite; moderate foundation requirements |
| Agricultural adjacency | Excellent — direct compost offtake to adjacent horticulture farms |
| TTD synergy | Closer to Tirumala-side organic waste flows |
| **Score** | **8.0 / 10** |

---

> **Government Action Required:** Cero Hero requests that MAUD/TTMC formally allocate 5 contiguous acres at the preferred site within **60 days** of DPR acceptance.
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
- Liquid fraction (~43 TPD): **90% recycled** as process dilution water; remainder treated for irrigation
- **Zero Liquid Discharge (ZLD)** is the operating standard

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
| Average Daily Consumption | ~350–400 kWh/day |

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

**Total carbon benefit: ~13,500 tCO₂e/year (Phase 1)** — eligible for carbon credit monetization under VCS, Gold Standard, or India's Carbon Credit Trading Scheme (CCTS).

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
| Power and Utilities | 375 kW connected, 30% avg load factor, 330 days, Rs. 7/kWh | 25 |
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

| Revenue Stream | Calculation | Annual Revenue (INR Lakh) |
|---|---|---|
| **CBG Sales** | 1,600 kg/day × 330 days × Rs. 50/kg (blended: SATAT Rs. 46 + premium market Rs. 60) | 264 |
| **Municipal Processing Fee (TTMC)** | 35 TPD × 330 days × Rs. 350/tonne | 40 |
| **Fermented Organic Manure (FOM)** | 1,650 tonnes/year × Rs. 2,500/tonne | 41 |
| **Cero Hero BWG Subscriptions** | ~100 BWGs × avg Rs. 1,800/month × 12 months | 22 |
| **Carbon Credits (conservative)** | 12,000 tCO₂e/year × Rs. 800/tonne (India CCTS) | 96 |
| **Total Revenue (with carbon credits)** | | **Rs. 463 lakh ≈ Rs. 4.63 crore** |
| **Base Case (excluding carbon credits)** | | **Rs. 3.67 crore** |

### Revenue Sensitivity

| CBG Price Scenario | CBG Revenue | Total Base Revenue |
|---|---|---|
| Conservative — SATAT floor (Rs. 46/kg) | Rs. 2.43 crore | Rs. 3.46 crore |
| Base case (Rs. 50/kg blended) | Rs. 2.64 crore | Rs. 3.67 crore |
| Optimistic — market (Rs. 60/kg) | Rs. 3.17 crore | Rs. 4.20 crore |

### EBITDA Summary

| Parameter | Phase 1 (Base) | Phase 2 (Base) |
|---|---|---|
| Annual Revenue | Rs. 3.67 crore | Rs. 7.30 crore |
| Annual OPEX | Rs. 2.31 crore | Rs. 3.80 crore |
| **EBITDA** | **Rs. 1.36 crore** | **Rs. 3.50 crore** |
| EBITDA Margin | 37% | 48% |

### Financing Structure

| Parameter | Value |
|---|---|
| Phase 1 Total CAPEX | Rs. 30.24 crore |
| Less: MNRE Central Financial Assistance | Rs. 2.00 crore |
| Less: AP State Government Grant/VGF | Rs. 2.00 crore |
| **Net CAPEX to be Financed** | **Rs. 26.24 crore** |
| Equity (30%) | Rs. 7.87 crore |
| Debt (70%) at 9.5%, 12 years | Rs. 18.37 crore |
| Annual Debt Service | ~Rs. 2.60 crore/year |

### 15-Year Cash Flow Profile (Phase 1)

| Year | Revenue | OPEX | EBITDA | Debt Service | Net Cash |
|---|---|---|---|---|---|
| Year 1 (ramp-up, 50%) | Rs. 1.84 Cr | Rs. 1.80 Cr | Rs. 0.04 Cr | Rs. 2.60 Cr | (Rs. 2.56 Cr) |
| Year 2 (80% utilization) | Rs. 2.94 Cr | Rs. 2.10 Cr | Rs. 0.84 Cr | Rs. 2.60 Cr | (Rs. 1.76 Cr) |
| Year 3 (steady state) | Rs. 3.67 Cr | Rs. 2.31 Cr | Rs. 1.36 Cr | Rs. 2.60 Cr | (Rs. 1.24 Cr) |
| Year 4+ (with carbon credits) | Rs. 4.63 Cr | Rs. 2.35 Cr | Rs. 2.28 Cr | Rs. 2.60 Cr | (Rs. 0.32 Cr) |
| Year 7+ (Phase 2, optimized) | Rs. 8.50 Cr | Rs. 3.90 Cr | Rs. 4.60 Cr | Rs. 3.90 Cr | **+Rs. 0.70 Cr** |

**Project IRR (blended, 15-year horizon): 13–16%**
**Equity IRR: 17–21%** (with government support and carbon credits)
**Payback period: 8–10 years**

> This project requires government support to be commercially viable for private investment: land at concessional terms, TTMC processing fee guarantee, and MNRE CFA. With this support structure, it is fundable through IREDA, NABARD Green Fund, or Climate Bond channels.
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
| Feedstock supply shortfall from TTMC | Feedstock | Medium | High | Long-term waste diversion agreement with minimum daily tonnage; Cero Hero BWG platform diversifies supply |
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
| SATAT (MoPNG, 2018) | Guaranteed CBG offtake by OMCs; minimum price floor of Rs. 46/kg | Available — register post-PESO approval |
| MNRE Biogas Programme (2024–25) | CFA up to Rs. 2 crore for new CBG plants of this scale | Apply within 60 days of DPR acceptance |
| GOBARdhan | Project registration; monitoring; potential priority funding | Register on GOBARdhan portal |
| SBM-Urban 2.0 | ODF+ and GFC+ credits to TTMC for organic waste processing; strengthens TTMC case for diversion MOU | Positions TTMC as SBM beneficiary |

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
- At Rs. 800–1,500/tCO₂e: **Rs. 1.08–2.03 crore/year** additional revenue (Phase 1)
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
| 2 | Issue site allocation letter for 5 acres at Site A or C | MAUD/TTMC/Revenue Dept | 45 days |
| 3 | Direct TTMC to execute waste diversion MOU | MAUD → TTMC | 60 days |
| 4 | Facilitate AP PCB pre-consultation | MAUD → AP PCB | 30 days |
| 5 | Sanction state VGF/grant of Rs. 2 crore | Finance Dept / Clean Energy Mission | 90 days |
| 6 | Nominate APSPDCL nodal officer for power connection | APSPDCL | 45 days |

### Cero Hero Commitments (Upon DPR Acceptance and Site Allocation)

- Incorporate **Cero Hero Private Limited** as the project company within 30 days
- Submit EPC tender within 45 days
- Commence Cero Hero **BWG enrollment drive in Tirupati** within 60 days
- Submit MNRE CFA application within 60 days
- Achieve **financial closure within 6 months** of site allocation

### The Broader Vision

This project is not simply a 50 TPD waste processing plant. It is the **first node in Tirupati's circular bioenergy economy**. The Cero Hero platform, once deployed for this plant, becomes the infrastructure layer for:

- Scaling to 100 TPD at the same site (Phase 2)
- Replicating the model in Kurnool, Vijayawada, Vizag, and other AP cities
- Connecting Tirupati's CBG output to a regional fuel distribution network
- Generating **verified carbon credits** that can be monetized globally

The Government of Andhra Pradesh has the opportunity to make Tirupati the reference city for India's organic waste-to-fuel transition — a pilgrimage economy that has eliminated its organic waste liability and turned it into clean fuel, fertilizer, and income.

---

*This Detailed Project Report has been prepared based on publicly available data on Tirupati's waste profile, national benchmarks for CBG plant costs and yields, and MNRE/SATAT policy frameworks. All technical parameters are indicative pending detailed engineering. Final costs, yields, and timelines will be confirmed during EPC detailed engineering following government approval.*

*Cero Hero Private Limited is committed to full transparency, competitive procurement, and measurable environmental performance in the execution of this project.*
    `,
  },
];
