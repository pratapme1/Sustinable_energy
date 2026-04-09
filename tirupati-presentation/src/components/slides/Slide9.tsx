"use client";

import { motion } from "framer-motion";
import { FileSignature, AlertTriangle, BadgeCheck, Lock } from "lucide-react";

export default function Slide9() {
  const chain = [
    { step: "1", label: "Site or brownfield path fixed", value: "Land certainty before financing" },
    { step: "2", label: "TMC + BWG + anchor waste framework", value: "50 TPD bankable wet-organics base" },
    { step: "3", label: "DPR + EPC bids + buyer route", value: "Finance-grade project package" },
    { step: "4", label: "APPCB + local approval sequencing", value: "CTE, utilities, fire, and land-use path" },
    { step: "5", label: "PPP / VGF / debt evaluation", value: "Support improves close; subsidy not assumed" },
    { step: "6", label: "Financial close + construction start", value: "Execution becomes schedulable" },
  ];

  const reasons = [
    {
      icon: AlertTriangle,
      title: "Land And Site Clarity",
      body: "Most projects fail before engineering starts because site control is weak. Government support matters first at the land or brownfield-access layer.",
    },
    {
      icon: BadgeCheck,
      title: "Nodal Coordination",
      body: "A single state-backed workstream across TMC, TTD, NREDAP, and approvals agencies compresses the slowest part of the project without changing the core platform.",
    },
    {
      icon: Lock,
      title: "Counterparty Confidence",
      body: "Hotels, BWGs, lenders, and EPC partners contract faster when the state has validated the project path and local counterparties are aligned.",
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
          09. Government Support Chain
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Approvals, Counterparties, and{" "}
          <span className="text-gradient-emerald">Bankability</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileSignature className="w-5 h-5 text-brand-emerald" />
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Support Chain</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {chain.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="p-2 bg-brand-emerald/5 border border-brand-emerald/15 rounded-xl">
                <div className="text-xs text-slate-500 font-light leading-none">Step {item.step}: {item.label}</div>
                <div className="text-sm text-brand-emerald font-semibold leading-tight">{item.value}</div>
              </div>
              {i < chain.length - 1 && (
                <span className="text-brand-emerald/30 text-sm font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">{item.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-white font-semibold">Research recommendation:</span>{" "}
          start brownfield-linked or partnership-led around Tirupati&apos;s existing organics system, not as an isolated speculative greenfield concession with no public counterparties.
        </p>
      </motion.div>
    </div>
  );
}
