"use client";

import { motion } from "framer-motion";
import { X, Check, Zap, Leaf } from "lucide-react";

const digitalCompetitors = [
  {
    name: "Joro",
    tag: "$10M Series A · Sequoia",
    what: "Personal carbon footprint via purchase tracking",
    gap: "Estimates only. No physical plant. No community layer. No India presence.",
  },
  {
    name: "Watershed",
    tag: "$100M Series C · $1.8B valuation",
    what: "Enterprise Scope 1–3 ESG reporting (FedEx, Walmart)",
    gap: "Enterprise-only. Stops at the organisation. No individual identity. No organic waste.",
  },
  {
    name: "Ant Forest",
    tag: "650M users · Alibaba / Alipay",
    what: "Gamified low-carbon points redeemed for tree planting",
    gap: "China-only, locked in Alipay ecosystem. No physical waste. Credits not tradeable.",
  },
  {
    name: "Varaha",
    tag: "$53M raised · WestBridge, Mirova",
    what: "Carbon credits from regenerative agriculture (170K+ farmers)",
    gap: "Agriculture-only. No organic waste processing. No urban community layer.",
  },
  {
    name: "Recykal",
    tag: "India · 40+ cities",
    what: "EPR compliance marketplace for plastic & industrial waste",
    gap: "Recyclables only. No organic waste. No biogas. No individual carbon identity.",
  },
];

const plantCompetitors = [
  {
    name: "GPS Renewables",
    tag: "30+ plants · JV with IOC & BPCL",
    what: "India's largest CBG operator. 550 MT/day in Indore.",
    gap: "Pure plant operator. No digital ESG layer. No community engagement. No carbon credits.",
  },
  {
    name: "EverEnviro",
    tag: "Indore · 100% utilisation · ONGC JV",
    what: "550 MT/day MSW → 17 TPD CBG. Fully operational.",
    gap: "North India focus. No verified carbon marketplace. No BRSR integration.",
  },
  {
    name: "Reliance Industries",
    tag: "500 plants planned in AP · ₹65,000 Cr",
    what: "500 CBG plants across Andhra Pradesh. Already in East Godavari, Prakasam.",
    gap: "Infrastructure only. No community tipping fee model. No individual carbon identity.",
  },
  {
    name: "IOC (SATAT)",
    tag: "Tirumala plant · TTD partnership",
    what: "CBG plant at Tirumala in 50-50 cost share with TTD. JV with GPS (8 plants).",
    gap: "Single-point plant deal. No city-wide community model. No Cero Credits or ESG platform.",
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
          03. Competitive Landscape
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Two Industries.{" "}
          <span className="text-gradient-emerald">Neither Solves the Problem.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Digital Platforms */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl w-fit"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Digital / Carbon Platforms</span>
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

        {/* Plant Operators */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl w-fit"
          >
            <Leaf className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">India CBG Plant Operators</span>
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

      {/* Cero Hero gap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-3"
      >
        <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            <span className="text-brand-emerald font-semibold">Cero Hero</span> — sits in the empty quadrant between both worlds.{" "}
            <span className="text-white font-semibold">Physical CBG plant + verified community carbon credits + individual Cero ID + BRSR data layer.</span>{" "}
            Reliance and IOC validate the market. They can{`'`}t replicate the community engagement model or the digital identity layer. We partner where they operate; we lead where they don{`'`}t go.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
