"use client";

import { motion } from "framer-motion";
import { FileSignature, AlertTriangle, BadgeCheck, Lock } from "lucide-react";

export default function Slide8() {
  const chain = [
    { label: "30 signed tipping fee MOUs", value: "₹3.5 cr/year contracted" },
    { label: "+ SATAT LoI + DPR", value: "→" },
    { label: "IREDA loan", value: "₹8–13 cr" },
    { label: "+ MNRE CFA grant", value: "₹5–10 cr" },
    { label: "+ AP ICEP subsidy", value: "₹3–5 cr" },
    { label: "Total available", value: "₹16–28 cr" },
    { label: "CAPEX required", value: "₹12–18 cr" },
    { label: "Founder equity", value: "₹0" },
  ];

  const reasons = [
    {
      icon: AlertTriangle,
      title: "SWM 2026 Penalty Avoidance",
      body: "EBWGR fine ₹50K–2L/month. Tipping fee is cheaper. Sign now, comply from Day 1.",
    },
    {
      icon: BadgeCheck,
      title: "Cero ESG Badge",
      body: "Hotels get Booking.com sustainability filter listing. RWAs get Swachh Survekshan data. BRSR-ready ESG report included.",
    },
    {
      icon: Lock,
      title: "Rate Lock",
      body: "3-year tipping fee rate lock. Cheaper than current waste contractor. No operational burden.",
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
          08. Community Funding Model
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          30 MOUs Fund the{" "}
          <span className="text-gradient-emerald">Entire Plant</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileSignature className="w-5 h-5 text-brand-emerald" />
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Funding Chain</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {chain.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="p-2 bg-brand-emerald/5 border border-brand-emerald/15 rounded-xl">
                <div className="text-xs text-slate-500 font-light leading-none">{item.label}</div>
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
            className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
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
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-white font-semibold">The 200 TPD surplus strategy:</span>{" "}
          sign twice the plant capacity. Phase 1 processes 100 TPD. Remaining 100 TPD is the waitlist for Phase 2 — a fundraising asset that proves demand exceeds supply.
        </p>
      </motion.div>
    </div>
  );
}
