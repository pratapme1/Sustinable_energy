"use client";

import { motion } from "framer-motion";

export default function Slide12() {
  const phases = [
    {
      phase: "Phase 0",
      accent: "red",
      timeline: "0–3 months",
      focus: "Choose entry model and site path",
      output: "Brownfield, partnership, or first-node land route fixed",
      note: "This is where government support has the highest leverage.",
    },
    {
      phase: "Phase 1",
      accent: "emerald",
      timeline: "3–6 months",
      focus: "Feedstock, buyer route, and DPR",
      output: "TMC/BWG framework, EPC quotes, offtake path, project pack",
      note: "Without this package, financing remains conceptual.",
    },
    {
      phase: "Phase 2",
      accent: "emerald",
      timeline: "6–10 months",
      focus: "Approvals sequencing and financing",
      output: "APPCB/local path plus PPP, VGF, or debt readiness",
      note: "Subsidy is upside; bankability still depends on fundamentals.",
    },
    {
      phase: "Phase 3",
      accent: "gold",
      timeline: "10–24 months",
      focus: "Build and commission 50 TPD node",
      output: "CBG operations, digestate route, and app pilot go live",
      note: "Execution shifts from approvals to EPC and operations discipline.",
    },
    {
      phase: "Phase 4",
      accent: "gold",
      timeline: "24+ months",
      focus: "Steady-state operations and expansion",
      output: "Second AP node or separate residual-waste pilot decision",
      note: "Tesla Evercraft belongs here, not in Phase 1 wet-organics delivery.",
    },
  ];

  const accentClasses: Record<string, string> = {
    red: "bg-red-500/5 border border-red-500/20",
    emerald: "bg-brand-emerald/5 border border-brand-emerald/20",
    gold: "bg-brand-gold/5 border border-brand-gold/20",
  };

  const textColor: Record<string, string> = {
    red: "text-red-400",
    emerald: "text-brand-emerald",
    gold: "text-brand-gold",
  };

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          12. Execution Ramp
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          From Approvals to{" "}
          <span className="text-gradient-emerald">Operations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          The first node should be read as a sequenced delivery program, not just a financing spreadsheet. Government help matters most before construction starts.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {phases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-5 rounded-3xl flex flex-col gap-3 ${accentClasses[item.accent]}`}
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.phase}</div>
            <div className={`text-sm font-bold ${textColor[item.accent]}`}>{item.timeline}</div>
            <p className="text-sm text-white font-semibold leading-relaxed">{item.focus}</p>
            <div className="space-y-1.5">
              <div className="flex justify-between gap-3">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Output</span>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.output}</p>
            </div>
            <p className="text-xs text-slate-500 font-light leading-relaxed">{item.note}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10 text-center"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-white font-semibold">The high-leverage government window is Phases 0–2.</span>{" "}
          After that, project success depends on EPC execution, collection discipline, and plant operations.
        </p>
      </motion.div>
    </div>
  );
}
