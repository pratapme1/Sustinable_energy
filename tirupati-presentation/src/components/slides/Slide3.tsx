"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Slide3() {
  const rows = [
    {
      name: "Carbon calculators",
      example: "Joro, Earthly",
      what: "Estimate your footprint",
      missing: "Not verified. Not real. Cannot be traded or certified.",
    },
    {
      name: "Gamification apps",
      example: "Ant Forest",
      what: "Engage users with points",
      missing: "No physical backing. Credits are platform-controlled. Not portable.",
    },
    {
      name: "ESG platforms",
      example: "Watershed, Persefoni",
      what: "Corporate Scope 1–3 reporting",
      missing: "Stop at the organisation. Don&apos;t reach individuals.",
    },
    {
      name: "Digital identity",
      example: "World ID",
      what: "Proves who you are",
      missing: "Not purpose-built for climate. No impact measurement.",
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
          03. Competitive Gap
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Every Competitor{" "}
          <span className="text-gradient-emerald">Stops Short</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-3xl border-brand-emerald/10 overflow-hidden"
      >
        <div className="grid grid-cols-3 gap-0 px-6 py-3 border-b border-white/5">
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Platform</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">What They Do</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">What&apos;s Missing</div>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="grid grid-cols-3 gap-0 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <div className="text-sm text-white font-semibold">{row.name}</div>
              <div className="text-xs text-slate-500 font-light">{row.example}</div>
            </div>
            <div className="text-sm text-slate-400 font-light leading-relaxed pr-4">{row.what}</div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 font-light leading-relaxed">{row.missing}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-4"
      >
        <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-brand-emerald font-semibold">Cero Hero</span> — Verifies what you actually did, against real physical data. The only system where a pilgrim&apos;s food waste is traceable:{" "}
          <span className="text-white font-semibold">
            plate → digester → CBG cylinder → verified CO₂e → Cero ID credential.
          </span>
        </p>
      </motion.div>
    </div>
  );
}
