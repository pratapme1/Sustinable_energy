"use client";

import { motion } from "framer-motion";
import { FileText, BarChart2, Fuel } from "lucide-react";

export default function Slide4() {
  const mandates = [
    {
      icon: FileText,
      tag: "SWM 2026 — April 2026 (now)",
      title: "Every bulk generator >100 kg/day must arrange organic waste processing or pay EBWGR penalty.",
      body: "Every hotel and apartment in Tirupati is legally required to solve this RIGHT NOW. We sign them before the plant exists. Tipping fees begin before construction.",
    },
    {
      icon: BarChart2,
      tag: "BRSR Core — FY2024-25",
      title: "SEBI mandates top 1,000 listed companies report verified supply chain + individual-level sustainability data.",
      body: "No current solution exists for community-level Scope 4 data. ~7,000 institutional customers need exactly what Cero ID generates. ₹500 crore market with zero competition.",
    },
    {
      icon: Fuel,
      tag: "SATAT CBO Mandate",
      title: "1% CBG blending in CNG/PNG mandatory FY2026, rising to 5% by FY2029. HPCL/IOCL must buy CBG.",
      body: "₹62–72/kg floor price. 15-year offtake contracts. As of Nov 2024: only 80 plants commissioned vs 5,000 needed. Massive undersupply.",
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
          04. Why Now
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Three Mandates. All Live.{" "}
          <span className="text-gradient-emerald">All Converge on This Platform.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mandates.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                {item.tag}
              </div>
              <p className="text-sm text-white font-semibold leading-relaxed mb-2">{item.title}</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          The window is now. SWM 2026 creates the waste supply. BRSR creates the data demand. SATAT creates the fuel offtake.{" "}
          <span className="text-brand-gold font-semibold">All three expire for competitors who don&apos;t move in 2026.</span>
        </p>
      </motion.div>
    </div>
  );
}
