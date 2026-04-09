"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Factory, Gauge, LandPlot } from "lucide-react";

export default function MinisterSlide7() {
  const notPhaseOne = [
    "Tesla Evercraft is positioned for mixed waste, RDF, plastics, and residual streams, not the same wet-organics line as the first CBG plant.",
    "Outputs are different: vendor-stated SynCrude-led output versus CBG and digestate from the Tirupati first node.",
    "Offtake, permitting, technology diligence, and project-risk assumptions are materially different and should not be merged into the first approval ask.",
  ];

  const phaseTwo = [
    "Treat it as a separate residual-waste pilot or separate plant after the wet-organics CBG node is stable.",
    "If government wants it explored, start with feasibility support, site study, and waste-supply study first.",
    "Vendor-stated claims include 260–360°C process range, 12–15 month pilot timing, and roughly 8–10 acres for a 10-unit facility.",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          07. Tesla Option
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Tesla Evercraft.{" "}
          <span className="text-gradient-emerald">Optional Phase 2.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="p-6 rounded-[2rem] bg-red-500/6 border border-red-500/18"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <div className="text-xs uppercase tracking-[0.24em] text-red-400 font-semibold">
              Do Not Merge Into Phase 1
            </div>
          </div>
          <div className="space-y-4">
            {notPhaseOne.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <p className="text-sm text-slate-300 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="p-6 rounded-[2rem] bg-brand-gold/6 border border-brand-gold/18"
        >
          <div className="flex items-center gap-3 mb-4">
            <Factory className="w-5 h-5 text-brand-gold" />
            <div className="text-xs uppercase tracking-[0.24em] text-brand-gold font-semibold">
              If The State Wants It Later
            </div>
          </div>
          <div className="space-y-4">
            {phaseTwo.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                <p className="text-sm text-slate-300 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 mt-5">
            {[
              { icon: Gauge, label: "260–360°C" },
              { icon: LandPlot, label: "8–10 acres" },
              { icon: Factory, label: "12–15 mo pilot claim" },
            ].map((chip) => (
              <div key={chip.label} className="p-3 glass rounded-2xl border-white/8 flex flex-col gap-2 items-start">
                <chip.icon className="w-4 h-4 text-brand-gold" />
                <div className="text-xs text-slate-200 leading-relaxed">{chip.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
        className="p-6 rounded-3xl bg-brand-emerald/6 border border-brand-emerald/16"
      >
        <p className="text-base text-slate-200 font-light leading-relaxed text-center">
          <span className="text-white font-semibold">Recommended position:</span>{" "}
          approve the first CBG node now. If desired, commission a separate residual-waste feasibility track for Tesla Evercraft after Phase 1 is on solid footing.
        </p>
      </motion.div>
    </div>
  );
}
