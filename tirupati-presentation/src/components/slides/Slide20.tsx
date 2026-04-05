"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Slide20() {
  const metrics = [
    { label: "Equity Ask", value: "₹3–5 Crore", sub: "Platform Co. only" },
    { label: "Year 3 Revenue", value: "₹40 Crore", sub: "Plant + Platform" },
    { label: "Year 3 EBITDA", value: "₹32 Crore", sub: "100 TPD at Month 24+" },
    { label: "Exit EV", value: "₹720–1,040 Cr", sub: "5-node at 8× EBITDA" },
  ];

  const bullets = [
    "AP ICEP 2024 ready — first mover in Andhra Pradesh",
    "Guaranteed SATAT offtake (15-year) with HPCL/IOCL",
    "NUS Singapore + Tirupati India — dual positioning",
    "India's only verified individual-level carbon identity",
    "BRSR Scope 4 data layer — ₹500 crore market with no competition",
    "40% of India AD plants fail — we have engineered against every failure mode",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          20. Final Summary
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          The{" "}
          <span className="text-gradient-emerald">Cero Hero Thesis</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {metrics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 text-center flex flex-col gap-1"
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.label}</div>
            <div className="text-2xl font-extrabold text-white italic tracking-tight leading-none my-1">
              {item.value}
            </div>
            <div className="text-xs text-slate-500 font-light">{item.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-start gap-4"
        >
          <div className="text-3xl text-brand-emerald font-light leading-none">&ldquo;</div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            The physical plant is the{" "}
            <span className="text-brand-emerald font-semibold">trust anchor</span>
            . Cero Hero is the citizen-facing layer. Together = India&apos;s first integrated waste-to-value + carbon identity network. The waste crisis is the business opportunity. The policy mandates are the tailwind. The community relationships are the moat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
        >
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-1.5 shrink-0" />
              <p className="text-sm text-slate-400 font-light leading-relaxed">{bullet}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="text-sm text-brand-gold font-semibold uppercase tracking-widest">
          Join the Circular Revolution.
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-brand-emerald" />
          <p className="text-xs text-slate-500 font-light">
            Investor Deck V3 — April 2026 | Cero Hero Platform + Tirupati Waste-to-Energy Node
          </p>
        </div>
      </motion.div>
    </div>
  );
}
