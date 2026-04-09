"use client";

import { motion } from "framer-motion";
import { Fuel, Receipt, BadgeCheck, Leaf, LayoutDashboard } from "lucide-react";

export default function Slide11() {
  const streams = [
    {
      icon: Fuel,
      number: "01",
      name: "CBG Sales",
      figure: "₹2.27–4.02 Cr/yr",
      desc: "50 TPD, 90% utilization, and roughly 30–35 kg/ton gas yield. The range depends on realized gas price from about ₹46/kg to ₹70/kg.",
    },
    {
      icon: Receipt,
      number: "02",
      name: "Processing / Tipping Fee",
      figure: "Up to ~₹0.94 Cr/yr",
      desc: "If a municipal or BWG processing-fee structure similar to ₹570/tonne is achieved. This meaningfully improves project resilience.",
    },
    {
      icon: Leaf,
      number: "03",
      name: "Digestate Products",
      figure: "₹0.4–0.7 Cr/yr",
      desc: "Assumes sale of FOM / LFOM / nutrient products. Must be validated with local offtake, not assumed away in the model.",
    },
    {
      icon: BadgeCheck,
      number: "04",
      name: "Carbon / Environmental Attributes",
      figure: "Upside only",
      desc: "Possible after monitoring and methodology are in place. This should not be the foundation of first-node bankability.",
    },
    {
      icon: LayoutDashboard,
      number: "05",
      name: "Cero Platform / Data Layer",
      figure: "Secondary upside",
      desc: "Institutional dashboards, compliance services, and verified participation data scale after the physical node is trusted.",
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
          11. Revenue Screen
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Five Revenue Streams{" "}
          <span className="text-gradient-emerald">per Node</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          {streams.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-5 glass rounded-3xl border-brand-emerald/10 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand-emerald" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 gap-3">
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.name}</div>
                  <div className="text-sm text-white font-semibold shrink-0">{item.figure}</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col justify-center items-center text-center gap-4"
        >
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Base Physical Revenue Screen</div>
          <div className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight">
            ₹3.6–4.24 Cr
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Gas + processing fee + manure at ₹46/kg gas</div>
          <div className="w-full p-4 glass rounded-2xl border-brand-emerald/10 mt-2">
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Better realized gas prices can move the same 50 TPD node toward{" "}
              <span className="text-white font-semibold">₹4.79–5.63 crore/year</span>. The digital layer is upside, not the base physical underwriting case.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
