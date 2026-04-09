"use client";

import { motion } from "framer-motion";
import { Landmark, Factory, Zap } from "lucide-react";

export default function Slide10() {
  const benchmarks = [
    {
      icon: Landmark,
      title: "Historical benchmark",
      value: "₹14.57 Cr",
      body: "Tirupati's past 50 TPD biomethanation case proves the city has already seen a project of this order.",
    },
    {
      icon: Factory,
      title: "Decision budget envelope",
      value: "₹18–24 Cr",
      body: "Use this for a fresh 50 TPD CBG-capable build unless vendor quotations prove lower.",
    },
    {
      icon: Zap,
      title: "Official 100 TPD reference",
      value: "₹40.40 Cr",
      body: "Full-scope public benchmark that supports the conservative 50 TPD planning envelope.",
    },
  ];

  const capex = [
    { label: "Pre-processing equipment", value: "₹2.70–3.30 Cr" },
    { label: "Digesters and tanks", value: "₹6.00–7.20 Cr" },
    { label: "Civil works and sheds", value: "₹1.70–2.10 Cr" },
    { label: "Upgrading + high-pressure equipment", value: "₹3.90–4.90 Cr" },
    { label: "Electrical, ETP, odour, utilities", value: "₹2.10–2.70 Cr" },
    { label: "Handling, safety, permissions, EPC", value: "₹1.60–2.40 Cr" },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-6">
      <div className="space-y-2">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          10. CBG Setup Cost
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          What It Takes to Set Up the{" "}
          <span className="text-gradient-emerald">First CBG Node</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benchmarks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-2"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.title}</div>
            <div className="text-2xl font-extrabold text-white italic tracking-tight">{item.value}</div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
        >
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">
            Indicative 50 TPD Capital Budget
          </div>
          <div className="space-y-1">
            {capex.map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 gap-4">
                <span className="text-sm text-slate-400 font-light">{row.label}</span>
                <span className="text-sm text-white font-semibold shrink-0">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-5 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl flex flex-col gap-4"
        >
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
              Operating Reality
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
                <span className="text-sm text-slate-400 font-light">Electricity</span>
                <span className="text-sm text-white font-semibold">₹1.19–1.30 Cr/yr</span>
              </div>
              <div className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
                <span className="text-sm text-slate-400 font-light">OPEX subtotal</span>
                <span className="text-sm text-white font-semibold">₹2.43–2.72 Cr/yr</span>
              </div>
              <div className="text-xs text-slate-500 font-light leading-relaxed">
                Power demand alone can be roughly 3,500–4,250 kWh/day in a practical 50 TPD screening case.
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
              Financing Reality
            </div>
            <div className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
              <span className="text-sm text-slate-400 font-light">Promoter equity if owning plant</span>
              <span className="text-sm text-white font-semibold">₹4.0–7.5 Cr</span>
            </div>
            <p className="text-xs text-slate-500 font-light leading-relaxed mt-2">
              Do not underwrite the first node assuming MNRE CFA is immediately open. Land, feedstock, offtake, and DPR quality still decide whether debt or PPP support can close.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
