"use client";

import { motion } from "framer-motion";
import { Smartphone, Users, Globe, BadgeCheck, FileText, TrendingUp, Mail } from "lucide-react";

export default function Slide19() {
  const funds = [
    {
      icon: Smartphone,
      label: "Cero Hero App (MVP → Full)",
      value: "₹80L–1.5 cr",
      detail: "React Native + Firebase + UPI + Aadhaar. Waste deposit, credit wallet, merchant network, institutional dashboard.",
      highlight: false,
    },
    {
      icon: Users,
      label: "Founding Team (4 hires × 18 months)",
      value: "₹1–1.5 cr",
      detail: "Feedstock Manager (Month 0), CTO (Month 2), Plant Engineer (Month 8), Compliance (Month 2 part-time).",
      highlight: false,
    },
    {
      icon: Globe,
      label: "Business Development (5 cities)",
      value: "₹30–50 lakh",
      detail: "Community sprint ops, MOU negotiations, institutional partnerships.",
      highlight: false,
    },
    {
      icon: BadgeCheck,
      label: "Carbon Credit Methodology (VCS)",
      value: "₹20–40 lakh",
      detail: "Baseline documentation from Day 1. ₹1–3 cr/year carbon revenue from Month 20.",
      highlight: false,
    },
    {
      icon: FileText,
      label: "Legal + Regulatory",
      value: "₹20–30 lakh",
      detail: "Two-entity structure, IP registration, BRSR data licence, MOU templates.",
      highlight: false,
    },
    {
      icon: TrendingUp,
      label: "What Investors Receive",
      value: "Equity in IP, brand, data, replication model",
      detail: "Exit: ₹720–1,040 crore EV (5-node at 8× EBITDA, Year 5).",
      highlight: true,
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
          19. The Ask
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="text-gradient-emerald">₹3–5 Crore</span>{" "}
          in Cero Hero Pvt Ltd
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          The plant is government-funded. This is equity in the platform company — the IP, brand, data, and replication model.{" "}
          <span className="text-white font-semibold">Not CAPEX.</span>
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {funds.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-5 rounded-3xl flex flex-col gap-2 ${
              item.highlight
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              item.highlight
                ? "bg-brand-gold/10 border border-brand-gold/20"
                : "bg-brand-emerald/10 border border-brand-emerald/20"
            }`}>
              <item.icon className={`w-4 h-4 ${item.highlight ? "text-brand-gold" : "text-brand-emerald"}`} />
            </div>
            <div>
              <div className={`text-xs uppercase tracking-widest font-bold mb-0.5 ${item.highlight ? "text-brand-gold" : "text-slate-500"}`}>
                {item.label}
              </div>
              <div className={`text-sm font-semibold mb-1 ${item.highlight ? "text-brand-gold" : "text-white"}`}>
                {item.value}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-emerald text-brand-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-emerald/20 text-sm">
          <Mail className="w-4 h-4" />
          Contact for Deep-Dive
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold rounded-2xl hover:bg-brand-emerald/20 transition-all text-sm">
          <TrendingUp className="w-4 h-4" />
          Exit Scenario Analysis
        </button>
      </motion.div>
    </div>
  );
}
