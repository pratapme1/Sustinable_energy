"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Globe2 } from "lucide-react";

export default function Slide11() {
  const phases = [
    {
      icon: TrendingUp,
      phase: "Phase 1",
      detail: "50 TPD · Month 18",
      metrics: [
        { label: "CAPEX", value: "₹12–18 cr" },
        { label: "Revenue/yr", value: "₹16–18 cr" },
        { label: "EBITDA/yr", value: "₹11–13 cr" },
        { label: "DSCR", value: "~12×" },
      ],
    },
    {
      icon: BarChart3,
      phase: "Phase 2b",
      detail: "100 TPD · Month 24",
      metrics: [
        { label: "Revenue/yr", value: "₹40 cr" },
        { label: "EBITDA/yr", value: "₹32 cr" },
        { label: "Payback", value: "3.5–4.5 yrs" },
        { label: "Founder equity", value: "₹0" },
      ],
    },
    {
      icon: Globe2,
      phase: "5-Node Platform",
      detail: "Month 54",
      metrics: [
        { label: "Revenue/yr", value: "₹145–200 cr" },
        { label: "EBITDA/yr", value: "₹90–130 cr" },
        { label: "Exit Multiple", value: "8×" },
        { label: "Exit EV", value: "₹720–1,040 cr" },
      ],
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
          11. Unit Economics
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          The Numbers Work{" "}
          <span className="text-gradient-emerald">at Every Scale</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 md:p-8 rounded-3xl flex flex-col gap-4 ${i === 2 ? "bg-brand-emerald/5 border border-brand-emerald/20" : "glass border-brand-emerald/10"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-emerald" />
              </div>
              <div>
                <div className="text-sm text-white font-semibold">{item.phase}</div>
                <div className="text-xs text-slate-500 font-light">{item.detail}</div>
              </div>
            </div>
            <div className="space-y-2">
              {item.metrics.map((m, j) => (
                <div key={j} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">{m.label}</span>
                  <span className="text-sm text-white font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          IREDA debt service ₹0.9 cr/year on ₹7 cr max debt. EBITDA of ₹11–13 cr covers it{" "}
          <span className="text-white font-semibold underline decoration-brand-emerald decoration-2 underline-offset-4">12×</span>.{" "}
          This plant cannot fail to service its debt.
        </p>
      </motion.div>
    </div>
  );
}
