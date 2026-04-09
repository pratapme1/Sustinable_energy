"use client";

import { motion } from "framer-motion";
import { Leaf, Trash2, AlertTriangle, CheckCircle, BarChart2, FileText } from "lucide-react";

export default function Slide17() {
  const options = [
    {
      icon: Leaf,
      title: "Phase 1 Core: Wet-Organics CBG",
      body: "Inputs are food waste, source-controlled organics, and manure balancing. Outputs are CBG, digestate, and verified operating data.",
    },
    {
      icon: Trash2,
      title: "Tesla Evercraft CCC Fit",
      body: "Vendor positioning is for mixed waste, RDF, plastics, and similar residual streams with SynCrude-led outputs rather than a biomethanation route.",
    },
    {
      icon: AlertTriangle,
      title: "Not Recommended",
      body: "Do not combine both concepts into one Phase 1 plant. Feedstock prep, process logic, outputs, offtake, and permitting assumptions are materially different.",
    },
    {
      icon: CheckCircle,
      title: "Recommended Structure",
      body: "Build the first wet-organics CBG node first. Evaluate CCC later as a separate residual-waste line or a separate plant once the core system is stable.",
    },
    {
      icon: BarChart2,
      title: "Vendor-Stated CCC Benchmark",
      body: "Tesla cites about 80,000 tons/year, around €130M CAPEX for a 10-unit facility, 8-10 acres, and a 12-15 month 1-2 unit pilot timeline. These claims need local diligence.",
    },
    {
      icon: FileText,
      title: "Current Recommendation",
      body: "Pitch Andhra on the first 50 TPD CBG node now. Ask separately for feasibility support on a future CCC residual-waste pilot, not as a dependency for Phase 1 approvals.",
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
          17. Tesla Evercraft Fit
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Where Tesla Evercraft{" "}
          <span className="text-gradient-emerald">Actually Fits</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-5 rounded-3xl flex flex-col gap-3 ${
              i === 2
                ? "bg-red-500/5 border border-red-500/20"
                : i === 3 || i === 5
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              i === 2
                ? "bg-red-500/10 border border-red-500/20"
                : i === 3 || i === 5
                ? "bg-brand-gold/10 border border-brand-gold/20"
                : "bg-brand-emerald/10 border border-brand-emerald/20"
            }`}>
              <item.icon className={`w-4 h-4 ${
                i === 2 ? "text-red-400" : i === 3 || i === 5 ? "text-brand-gold" : "text-brand-emerald"
              }`} />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{item.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
