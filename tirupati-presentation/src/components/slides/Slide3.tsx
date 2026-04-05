"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Slide3() {
  const rows = [
    {
      name: "Carbon calculators",
      example: "Joro, Earthly",
      what: "Estimate your footprint",
      missing: "Not verified. Not real. Not tradeable.",
    },
    {
      name: "Gamification apps",
      example: "Ant Forest",
      what: "Engage users with points",
      missing: "No physical backing. Credits are platform-controlled.",
    },
    {
      name: "ESG platforms",
      example: "Watershed, Persefoni",
      what: "Corporate Scope 1-3 reporting",
      missing: "Stop at the organisation. Don't reach individuals.",
    },
    {
      name: "Digital identity",
      example: "World ID",
      what: "Proves who you are",
      missing: "Not climate-purpose-built. No impact measurement.",
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
          Where Every Competitor{" "}
          <span className="text-gradient-emerald">Stops Short</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-3">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 grid grid-cols-3 gap-4 items-center"
          >
            <div>
              <div className="text-base font-bold text-white">{row.name}</div>
              <div className="text-xs text-slate-500 font-light">{row.example}</div>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{row.what}</p>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 font-light leading-relaxed">{row.missing}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-4"
      >
        <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-brand-emerald font-semibold">Cero Hero</span> — The only system where a pilgrim&apos;s food waste is traceable:{" "}
          <span className="text-white font-semibold">
            plate → digester → CBG cylinder → verified CO₂e → Cero ID credential.
          </span>{" "}
          No competitor can replicate this without owning physical infrastructure AND community relationships AND a verification protocol.
        </p>
      </motion.div>
    </div>
  );
}
