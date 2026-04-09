"use client";

import { motion } from "framer-motion";
import { X, Check, Zap, Leaf } from "lucide-react";

const digitalCompetitors = [
  {
    name: "Joro",
    tag: "$10M Series A · Sequoia",
    what: "Personal carbon footprint via purchase tracking",
    gap: "No physical plant, no wet-waste operations, and no government reporting stack.",
  },
  {
    name: "Watershed",
    tag: "$100M Series C · $1.8B valuation",
    what: "Enterprise Scope 1–3 ESG reporting (FedEx, Walmart)",
    gap: "Enterprise-only. No citizen or BWG engagement. No waste-processing asset.",
  },
  {
    name: "Ant Forest",
    tag: "650M users · Alibaba / Alipay",
    what: "Gamified low-carbon points redeemed for tree planting",
    gap: "Consumer engagement only. No physical waste processing or exportable audit trail.",
  },
  {
    name: "Varaha",
    tag: "$53M raised · WestBridge, Mirova",
    what: "Carbon credits from regenerative agriculture (170K+ farmers)",
    gap: "Strong carbon infrastructure, but not built for urban organics or pilgrim-city operations.",
  },
  {
    name: "Recykal",
    tag: "India · 40+ cities",
    what: "EPR compliance marketplace for plastic & industrial waste",
    gap: "Strong compliance marketplace, but not a wet-organics CBG operating model.",
  },
];

const plantCompetitors = [
  {
    name: "GPS Renewables",
    tag: "30+ plants · JV with IOC & BPCL",
    what: "India's large-scale CBG operator benchmark with strong delivery credibility.",
    gap: "Strong operator reference and possible partner, but no citizen or reporting layer.",
  },
  {
    name: "EverEnviro",
    tag: "Indore · 100% utilisation · ONGC JV",
    what: "Operational city-scale CBG reference for urban waste conversion.",
    gap: "Strong operator reference, but not a Tirupati participation platform.",
  },
  {
    name: "Reliance Industries",
    tag: "500 plants planned in AP · ₹65,000 Cr",
    what: "Large industrial push that validates Andhra's CBG market.",
    gap: "Focus is large infrastructure, not Tirupati's civic and pilgrim waste network.",
  },
  {
    name: "IOC (SATAT)",
    tag: "Tirumala plant · TTD partnership",
    what: "Buyer-route and temple-linked plant logic already visible in the region.",
    gap: "Validates offtake and temple waste logic, but not a city-wide reporting platform.",
  },
];

export default function Slide3() {
  return (
    <div className="flex flex-col h-full justify-center space-y-6">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          03. Capability Landscape
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Two Capability Sets.{" "}
          <span className="text-gradient-emerald">Andhra Needs Both.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl w-fit"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Digital / Reporting Platforms</span>
          </motion.div>
          {digitalCompetitors.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="p-4 glass rounded-2xl border-white/5 grid grid-cols-[auto_1fr] gap-3 items-start"
            >
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-1" />
              <div className="space-y-0.5 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-bold text-white">{c.name}</span>
                  <span className="text-xs text-slate-500 font-light">{c.tag}</span>
                </div>
                <p className="text-xs text-slate-400 font-light">{c.what}</p>
                <p className="text-xs text-red-400/80 font-light">{c.gap}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl w-fit"
          >
            <Leaf className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">India CBG / Plant Operators</span>
          </motion.div>
          {plantCompetitors.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="p-4 glass rounded-2xl border-white/5 grid grid-cols-[auto_1fr] gap-3 items-start"
            >
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-1" />
              <div className="space-y-0.5 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-bold text-white">{c.name}</span>
                  <span className="text-xs text-slate-500 font-light">{c.tag}</span>
                </div>
                <p className="text-xs text-slate-400 font-light">{c.what}</p>
                <p className="text-xs text-red-400/80 font-light">{c.gap}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-3"
      >
        <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            <span className="text-brand-emerald font-semibold">Cero Hero</span> sits between both worlds.{" "}
            <span className="text-white font-semibold">We keep the physical CBG node, but add participation, traceability, and reporting.</span>{" "}
            Proven operators validate the market and can become EPC or buyer partners; the platform layer is what makes the node useful to government, BWGs, and institutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
