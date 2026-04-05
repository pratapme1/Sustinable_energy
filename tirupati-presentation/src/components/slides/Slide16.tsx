"use client";

import { motion } from "framer-motion";
import { Smartphone, Users, Globe, BadgeCheck, FileText, TrendingUp, Mail } from "lucide-react";

export default function Slide16() {
  const funds = [
    {
      icon: Smartphone,
      label: "Cero Hero App MVP → Full",
      value: "₹80L–1.5 cr",
    },
    {
      icon: Users,
      label: "Founding Team (4 hires × 18 months)",
      value: "₹1–1.5 cr",
    },
    {
      icon: Globe,
      label: "BD: 5-city Pre-Commitments",
      value: "₹30–50 lakh",
    },
    {
      icon: BadgeCheck,
      label: "Carbon Credit VCS Methodology",
      value: "₹20–40 lakh",
    },
    {
      icon: FileText,
      label: "Legal + Regulatory",
      value: "₹20–30 lakh",
    },
    {
      icon: TrendingUp,
      label: "What Investors Receive",
      value: "Equity in IP",
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
          16. The Ask
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
          transition={{ delay: 0.2 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          The plant is government-funded. Investor money does{" "}
          <span className="text-white font-semibold">not</span> go to CAPEX. This is equity in the platform company — the IP, brand, data, and replication model.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {funds.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 rounded-3xl flex flex-col gap-3 ${
              item.highlight
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.highlight ? "bg-brand-gold/10 border border-brand-gold/20" : "bg-brand-emerald/10 border border-brand-emerald/20"}`}>
              <item.icon className={`w-4 h-4 ${item.highlight ? "text-brand-gold" : "text-brand-emerald"}`} />
            </div>
            <div>
              <div className={`text-xs uppercase tracking-widest font-bold mb-1 ${item.highlight ? "text-brand-gold" : "text-slate-500"}`}>
                {item.label}
              </div>
              <div className={`text-sm font-semibold ${item.highlight ? "text-brand-gold" : "text-white"}`}>
                {item.value}
              </div>
              {item.highlight && (
                <p className="text-xs text-slate-400 font-light leading-relaxed mt-1">
                  Brand, data, replication model. Exit: ₹720–1,040 cr EV (5-node, 8× EBITDA, Year 5)
                </p>
              )}
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
