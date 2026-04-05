"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Wind, Clock, Gauge, Activity } from "lucide-react";

export default function Slide13() {
  const risks = [
    {
      icon: AlertTriangle,
      level: "High Risk / High Impact",
      title: "Segregation Failure",
      risk: "Contaminated feedstock → digester blockage → gas quality failure.",
      mitigation: "Trommel screen + shredder at plant inlet removes plastic/glass/metal mechanically. Contamination penalty clause in all MOUs (₹200/tonne surcharge >15% inerts). We don't depend on perfect community behaviour.",
    },
    {
      icon: TrendingDown,
      level: "Medium Risk / High Impact",
      title: "Feedstock Volume Shortfall",
      risk: "Communities sign but deliver less than committed.",
      mitigation: "200 TPD contracted vs 100 TPD plant (2× buffer). If only 50% of signed communities deliver, plant still runs at 100%. Multi-source: food waste + cattle manure = two independent supply chains. Take-or-pay clauses with 6-month notice.",
    },
    {
      icon: Wind,
      level: "Medium Risk / Medium Impact",
      title: "Odor Complaints / Community Opposition",
      risk: "H₂S, biogas venting, digestate handling.",
      mitigation: "Covered CSTR digesters (not open lagoons). Biofilter on all vents. CPCB standard: 2 OU/m³ — designed to comply. Site selection >500m from residential. Real-time H₂S monitoring with automatic alerts.",
    },
    {
      icon: Clock,
      level: "Medium Risk / High Impact",
      title: "Environmental Clearance Delay",
      risk: "EC takes 5–8 months; delays construction.",
      mitigation: "File Month 2 (not Month 6). Engage EC consultant from Day 1. Site >500m from residential reduces objection risk. Non-gas civil works proceed under CTE while EC awaited. Tipping fees continue during wait.",
    },
    {
      icon: Gauge,
      level: "Low Risk / Medium Impact",
      title: "CBG Quality Below OMC Spec",
      risk: "PSA system underperforms; CBG rejected by HPCL/IOCL.",
      mitigation: "Atmos Power VPSA: 99% CH₄ capture. Performance bond on EPC contract. Online gas chromatography for continuous monitoring. VPSA exceeds SATAT 97%+ methane requirement.",
    },
    {
      icon: Activity,
      level: "High Risk / High Impact — Industry Baseline",
      title: "Running Below Designed Capacity",
      risk: "90% of India CBG plants run below nameplate.",
      mitigation: "Cero drop point network + contracted logistics removes the primary cause (unreliable feedstock). 200 TPD contracted vs 100 TPD plant = explicit buffer. Tipping fee model means communities are financially incentivised to deliver.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          13. Risks and Failure Modes
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          What Could Go Wrong —{" "}
          <span className="text-gradient-emerald">And What We Do About It</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          40% of India&apos;s AD plants are non-functional. 90% of operational CBG plants run below designed capacity. We have engineered against every major failure mode.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {risks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 bg-red-500/5 border border-red-500/20 rounded-3xl flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-xs text-red-400/70 uppercase tracking-widest font-bold leading-tight">{item.level}</div>
            </div>
            <div>
              <div className="text-xs text-white font-bold mb-1">{item.title}</div>
              <p className="text-xs text-red-300/70 font-light leading-relaxed mb-2">{item.risk}</p>
              <div className="p-2 bg-brand-emerald/5 border border-brand-emerald/20 rounded-2xl">
                <div className="text-xs text-brand-emerald font-bold mb-0.5">Mitigation</div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{item.mitigation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
