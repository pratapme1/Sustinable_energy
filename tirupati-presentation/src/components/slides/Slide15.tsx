"use client";

import { motion } from "framer-motion";
import { Smartphone, Users, Globe, ShieldCheck, FileText, Mail, TrendingUp } from "lucide-react";

export default function Slide15() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12 items-center text-center">
      <div className="space-y-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 py-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-sm font-bold tracking-[0.2em] uppercase"
        >
          15. The Ask
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold font-display leading-tight"
        >
          ₹3–5 Crore in <span className="text-gradient-emerald italic">Cero Hero Pvt Ltd</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-slate-400 text-base font-light italic max-w-2xl mx-auto"
        >
          The plant is government-funded. Investor money does <span className="text-white font-bold">not</span> go to CAPEX.
          This is equity in the platform company — the IP, brand, data, and replication model.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl">
        {[
          {
            icon: Smartphone,
            title: "Cero Hero App",
            val: "₹80L–1.5 Cr",
            desc: "React Native + Firebase + UPI + Aadhaar. MVP to full build."
          },
          {
            icon: Users,
            title: "Founding Team",
            val: "₹1–1.5 Cr",
            desc: "4 critical hires × 18 months (Feedstock Manager, CTO, Plant Engineer, Compliance)."
          },
          {
            icon: Globe,
            title: "Business Development",
            val: "₹30–50 L",
            desc: "5-city pre-commitment campaigns. Community sprint ops."
          },
          {
            icon: ShieldCheck,
            title: "Carbon Credit Methodology",
            val: "₹20–40 L",
            desc: "VCS methodology design + Gold Standard certification baseline."
          },
          {
            icon: FileText,
            title: "Legal + Regulatory",
            val: "₹20–30 L",
            desc: "IP registration, BRSR data licence, MOU templates, compliance setup."
          },
          {
            icon: TrendingUp,
            title: "What Investors Receive",
            val: "Equity in IP",
            desc: "Brand, data, replication model. Exit: ₹720–1,040 cr EV (5-node, 8× EBITDA, Year 5)."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="p-8 glass rounded-[2.5rem] border-brand-emerald/10 flex flex-col items-center gap-4 group hover:border-brand-emerald/30 transition-all"
          >
            <div className="w-14 h-14 bg-brand-emerald/10 rounded-3xl flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white leading-none">{item.title}</h3>
              <div className="text-lg font-extrabold text-brand-emerald italic underline decoration-brand-emerald decoration-2 underline-offset-4 tracking-tighter">{item.val}</div>
              <p className="text-slate-500 font-light leading-relaxed text-[10px] italic">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-6"
      >
        <p className="text-slate-400 font-light text-base italic max-w-2xl mx-auto">
          "No CAPEX risk. No plant debt. Pure platform equity — the only layer that replicates across every city."
        </p>
        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 px-8 py-4 bg-brand-emerald text-brand-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-emerald/20 group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact for Deep-Dive
          </button>
          <button className="flex items-center gap-2 px-8 py-4 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold rounded-2xl hover:bg-brand-emerald/20 transition-all group">
            <TrendingUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
            Exit Scenario Analysis
          </button>
        </div>
      </motion.div>
    </div>
  );
}
