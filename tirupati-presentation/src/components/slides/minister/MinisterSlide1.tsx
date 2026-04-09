"use client";

import { motion } from "framer-motion";
import { Clock3, Landmark, MapPinned, Factory } from "lucide-react";

export default function MinisterSlide1() {
  const metrics = [
    {
      icon: Factory,
      label: "First Node",
      value: "50 TPD",
      note: "Wet organics to CBG",
    },
    {
      icon: Landmark,
      label: "Capex",
      value: "₹18–24 Cr",
      note: "Fresh 50 TPD planning envelope",
    },
    {
      icon: MapPinned,
      label: "Site Path",
      value: "6 acres / brownfield",
      note: "Fix land route early",
    },
    {
      icon: Clock3,
      label: "Delivery",
      value: "12–24 months",
      note: "Approvals to commissioning",
    },
  ];

  const decisions = [
    "Support the first Tirupati wet-organics CBG node now.",
    "Fix the land or brownfield path and start nodal coordination.",
    "Keep mixed-waste innovation as Phase 2, not Phase 1 risk.",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-6 items-end">
        <div className="space-y-5">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
          >
            01. Minister Brief
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.94]"
          >
            Turn Tirupati Into Andhra&apos;s{" "}
            <span className="text-gradient-emerald">First Circular Pilgrimage City</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-4xl text-base md:text-xl text-slate-300 font-light leading-relaxed"
          >
            A focused first project: one bankable wet-organics-to-CBG node, plus the citizen and reporting layer that makes the plant governable, auditable, and replicable across Andhra Pradesh.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-[2rem] bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(15,23,42,0.7))] border border-brand-emerald/20 shadow-[0_0_60px_rgba(16,185,129,0.08)]"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-emerald font-semibold mb-4">
            Today&apos;s Decision
          </div>
          <div className="space-y-3">
            {decisions.map((decision, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                <p className="text-sm md:text-base text-slate-200 leading-relaxed">{decision}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-brand-dark/45 border border-white/8">
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold mb-1">
              One-Line Ask
            </div>
            <p className="text-sm md:text-base text-white leading-relaxed">
              Approve support for the first Tirupati node and let the state evaluate mixed-waste expansion separately, after the core CBG line is stable.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + index * 0.08 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
              <metric.icon className="w-4 h-4 text-brand-emerald" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-[0.22em] font-bold">{metric.label}</div>
            <div className="text-2xl md:text-3xl font-extrabold italic text-white tracking-tight">{metric.value}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{metric.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
