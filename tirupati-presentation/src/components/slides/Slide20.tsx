"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Slide20() {
  const metrics = [
    { label: "First Node", value: "50 TPD", sub: "Wet-organics CBG line" },
    { label: "Capex", value: "₹18–24 Cr", sub: "Fresh 50 TPD planning envelope" },
    { label: "Benchmark", value: "₹14.57 Cr", sub: "Historical Tirupati 50 TPD case" },
    { label: "Phase 2 Option", value: "Tesla CCC", sub: "Separate residual pilot, not Phase 1" },
  ];

  const bullets = [
    "Keep the original Cero platform thesis: plant as trust anchor, app as citizen layer, dashboard as reporting layer.",
    "Use Andhra support to secure the land or brownfield path, approvals sequence, and core counterparties.",
    "Underwrite Phase 1 around wet organics and controllable feedstock, not mixed-waste experimentation.",
    "First-node economics depend on utilization, processing support, digestate outlet, and disciplined logistics.",
    "The reporting layer makes the node more useful to TMC, TTD, hotels, campuses, and institutional partners.",
    "Tesla Evercraft can be studied as a separate residual-waste expansion after the CBG node is stable.",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          20. Final Summary
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          The{" "}
          <span className="text-gradient-emerald">Tirupati Government Thesis</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {metrics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 text-center flex flex-col gap-1"
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.label}</div>
            <div className="text-2xl font-extrabold text-white italic tracking-tight leading-none my-1">
              {item.value}
            </div>
            <div className="text-xs text-slate-500 font-light">{item.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-4"
        >
          <div className="text-3xl text-brand-emerald font-light leading-none">&ldquo;</div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            The physical plant stays the{" "}
            <span className="text-brand-emerald font-semibold">trust anchor</span>
            . The app stays the citizen layer. The reporting layer makes the same project governable, auditable, and replicable across Andhra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
        >
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-1.5 shrink-0" />
              <p className="text-sm text-slate-400 font-light leading-relaxed">{bullet}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="text-sm text-brand-gold font-semibold uppercase tracking-widest">
          Tirupati can become Andhra&apos;s model circular pilgrimage city.
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-brand-emerald" />
          <p className="text-xs text-slate-500 font-light">
            Government Support Deck — April 2026 | Tirupati CBG Platform + Phase 2 Residual-Waste Option
          </p>
        </div>
      </motion.div>
    </div>
  );
}
