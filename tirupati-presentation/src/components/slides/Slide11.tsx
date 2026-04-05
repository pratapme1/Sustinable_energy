"use client";

import { motion } from "framer-motion";
import { Fuel, Receipt, BadgeCheck, Leaf, LayoutDashboard } from "lucide-react";

export default function Slide11() {
  const streams = [
    {
      icon: Fuel,
      number: "01",
      name: "CBG Sales (SATAT offtake)",
      figure: "₹14–30 cr/yr",
      desc: "7–14 TPD × ₹62/kg × 330 days. 15-year offtake with HPCL/IOCL. Floor ₹46/kg even in downside. 75% of revenue.",
    },
    {
      icon: Receipt,
      number: "02",
      name: "Tipping Fees",
      figure: "₹1.3–4 cr/yr",
      desc: "Starts Month 3 (before plant exists). Communities already pay waste contractors — we're cheaper + compliant. 10% of revenue.",
    },
    {
      icon: BadgeCheck,
      number: "03",
      name: "Carbon Credits (VCS/Gold Standard)",
      figure: "₹1–3 cr/yr",
      desc: "Methane capture + fossil displacement. Year 2+. Baseline documentation starts Day 1. 5% of revenue.",
    },
    {
      icon: Leaf,
      number: "04",
      name: "Digestate Biofertiliser",
      figure: "₹1–5 cr/yr",
      desc: "FCO-certified. ₹3,000–5,000/tonne. New FCO category added Feb 2025 specifically for CBG digestate. 5% of revenue.",
    },
    {
      icon: LayoutDashboard,
      number: "05",
      name: "Cero Hero Platform Revenue",
      figure: "₹50L–2 cr/yr",
      desc: "B2B ESG subscriptions + BRSR data + corporate Cero Credits sponsorship. Year 2+. Scales independently of plant throughput. 5% of revenue.",
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
          11. Revenue Model
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
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.name}</div>
                  <div className="text-sm text-white font-semibold">{item.figure}</div>
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
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Year 3 Total Revenue</div>
          <div className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight">
            ₹40 Crore
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Physical Plant + Platform</div>
          <div className="w-full p-4 glass rounded-2xl border-brand-emerald/10 mt-2">
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Tipping fees make feedstock a profit stream. Cero Hero adds a digital layer that scales independently of plant throughput.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
