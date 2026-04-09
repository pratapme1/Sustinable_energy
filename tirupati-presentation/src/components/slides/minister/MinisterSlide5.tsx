"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, ClipboardCheck, Clock3, Factory, HardHat, Landmark } from "lucide-react";

export default function MinisterSlide5() {
  const benchmarks = [
    {
      icon: Landmark,
      title: "Historical Tirupati benchmark",
      value: "₹14.57 Cr",
      body: "Shows the city has already hosted a 50 TPD-scale biomethanation project.",
    },
    {
      icon: CircleDollarSign,
      title: "Decision budget envelope",
      value: "₹18–24 Cr",
      body: "Use this for a fresh 50 TPD CBG-capable build unless quotations prove lower.",
    },
    {
      icon: Factory,
      title: "Official 100 TPD reference",
      value: "₹40.40 Cr",
      body: "Public benchmark that supports conservative 50 TPD planning.",
    },
  ];

  const capexGroups = [
    { label: "Pre-processing", value: "₹2.70–3.30 Cr" },
    { label: "Digestion + civil", value: "₹7.70–9.30 Cr" },
    { label: "Upgrading + utilities", value: "₹6.00–7.60 Cr" },
    { label: "Compliance, safety, EPC", value: "₹1.75–2.70 Cr" },
  ];

  const path = [
    {
      icon: ClipboardCheck,
      title: "0–3 months",
      body: "Fix site path and state-led working group.",
    },
    {
      icon: Clock3,
      title: "3–6 months",
      body: "Freeze DPR, counterparties, buyer route, and vendor pack.",
    },
    {
      icon: Landmark,
      title: "6–10 months",
      body: "Sequence approvals and finalize project structure.",
    },
    {
      icon: HardHat,
      title: "10–24 months",
      body: "Build, commission, and start operations.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          05. Cost And Delivery
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          What It Costs.{" "}
          <span className="text-gradient-emerald">How It Gets Built.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benchmarks.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.08 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
              <item.icon className="w-4 h-4 text-brand-emerald" />
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold">{item.title}</div>
            <div className="text-2xl md:text-3xl italic font-extrabold text-white tracking-tight">{item.value}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="p-6 rounded-[2rem] bg-brand-emerald/6 border border-brand-emerald/18"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-emerald font-semibold mb-3">
            Capex Structure
          </div>
          <div className="space-y-2">
            {capexGroups.map((group) => (
              <div key={group.label} className="flex items-center justify-between gap-4 py-3 border-b border-white/6">
                <span className="text-sm text-slate-300">{group.label}</span>
                <span className="text-sm text-white font-semibold shrink-0">{group.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="p-6 rounded-[2rem] bg-brand-gold/6 border border-brand-gold/18"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-gold font-semibold mb-3">
            Delivery Path
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {path.map((step) => (
              <div key={step.title} className="p-4 glass rounded-2xl border-white/8">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-4 h-4 text-brand-gold" />
                  <div className="text-sm text-white font-semibold">{step.title}</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46 }}
        className="p-5 glass rounded-3xl border-white/8"
      >
        <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed text-center">
          <span className="text-white font-semibold">Important:</span>{" "}
          do not underwrite the first node assuming MNRE CFA is immediately open. Land, counterparties, approvals, and DPR quality still decide whether debt or PPP support can close.
        </p>
      </motion.div>
    </div>
  );
}
