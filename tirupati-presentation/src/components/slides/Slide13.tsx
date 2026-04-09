"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Wind, Clock, Gauge, Activity } from "lucide-react";

export default function Slide13() {
  const risks = [
    {
      icon: AlertTriangle,
      level: "High Risk / High Impact",
      title: "Segregation Failure",
      risk: "Contaminated feedstock -> digester instability and higher pre-processing losses.",
      mitigation: "Trommel screen + shredder at plant inlet remove plastic, glass, and metal mechanically. Supply contracts use contamination clauses so the operating discipline is commercial, not optional.",
    },
    {
      icon: TrendingDown,
      level: "Medium Risk / High Impact",
      title: "Feedstock Volume Shortfall",
      risk: "Signed counterparties deliver less wet waste than expected.",
      mitigation: "Underwrite a 50 TPD plant against a wider contracted base, not a single source. Municipal wet waste, hotels, TTD city establishments, and manure balancing create multiple supply paths.",
    },
    {
      icon: Wind,
      level: "Medium Risk / Medium Impact",
      title: "Odor Complaints / Community Opposition",
      risk: "H2S, digestate handling, or traffic can trigger local resistance.",
      mitigation: "Covered digesters, biofilters, closed handling, and disciplined site selection matter more than pitch-deck claims. Odor control is a design line item, not an afterthought.",
    },
    {
      icon: Clock,
      level: "Medium Risk / High Impact",
      title: "Approval Or Clearance Delay",
      risk: "Land, APPCB, utilities, or local permissions take longer than planned.",
      mitigation: "Sequence approvals early, use a single nodal workstream, and keep the project package ready before financing. Government support helps most here, before EPC work starts.",
    },
    {
      icon: Gauge,
      level: "Low Risk / Medium Impact",
      title: "CBG Quality Below Buyer Spec",
      risk: "Upgrading system underperforms and buyer acceptance becomes harder.",
      mitigation: "Use proven upgrading technology with performance guarantees, online quality monitoring, and a buyer route defined before procurement is frozen.",
    },
    {
      icon: Activity,
      level: "High Risk / High Impact — Industry Baseline",
      title: "Running Below Designed Capacity",
      risk: "The plant exists but operates below nameplate because collection and contracting are weak.",
      mitigation: "This is the core reason to keep the platform thesis. The app, source records, and contracted logistics exist to protect utilization, not to decorate the project.",
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
          <span className="text-gradient-emerald">And How We Underwrite It</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          The first node should be treated as an execution project. State support can reduce site and approvals risk, but operations discipline still decides whether the plant performs.
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
