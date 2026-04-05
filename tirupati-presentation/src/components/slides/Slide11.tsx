"use client";

import { motion } from "framer-motion";
import { Rocket, Milestone, AlertTriangle } from "lucide-react";

export default function Slide11() {
  const milestones = [
    {
      m: "M0",
      title: "Foundation",
      desc: "Incorporate + SATAT LoI (HPCL/IOCL) + GOBARdhan + NREDAP registration. Community sprint starts.",
      critical: true
    },
    {
      m: "M2",
      title: "File EC + Sprint",
      desc: "File EC application (long-lead: 5–8 months). APPCB CTE application. DPR commissioned. Target: 30 MOUs.",
      critical: true
    },
    {
      m: "M3",
      title: "Finance Stack",
      desc: "MNRE CFA application submitted. DST NIDHI-TIDE applied. SATAT LoI confirmed from OMC.",
      critical: false
    },
    {
      m: "M7–9",
      title: "Financial Close",
      desc: "IREDA loan sanctioned. Financial close (IREDA + MNRE tranche 1). EPC contract signed.",
      critical: false
    },
    {
      m: "M10–18",
      title: "Construction",
      desc: "Civil works M10–16 (digesters, roads, admin). Equipment installation M15–18 (PSA, compression).",
      critical: false
    },
    {
      m: "M18–20",
      title: "First Revenue",
      desc: "Commissioning + trial run. First CBG delivered to OMC. Revenue recognition begins.",
      critical: false
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-10">
      <div className="space-y-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          11. Implementation Plan
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Timeline: <span className="text-gradient-emerald italic">M0 to M20</span>
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-brand-emerald/10 hidden md:block" />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 group"
            >
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-xs relative z-10 group-hover:scale-110 transition-all shadow-xl ${milestone.critical ? "bg-brand-emerald/30 border-brand-emerald text-brand-emerald shadow-brand-emerald/20" : "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-brand-dark shadow-brand-emerald/10"}`}>
                {milestone.m}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white leading-none uppercase italic">{milestone.title}</h3>
                <p className="text-slate-500 font-light text-[10px] leading-relaxed italic">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 glass rounded-[2.5rem] border-brand-emerald/10 flex items-center gap-6"
        >
          <div className="w-14 h-14 bg-brand-emerald/10 rounded-2xl flex items-center justify-center text-brand-emerald shrink-0">
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-slate-400 font-light text-sm italic">
            "First CBG delivered to HPCL / IOCL Tirupati in <span className="text-brand-emerald font-bold">Month 18–20</span>. Full 100 TPD profitability by Month 24."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-[2.5rem] flex items-center gap-6"
        >
          <div className="w-14 h-14 bg-brand-emerald/20 rounded-2xl flex items-center justify-center text-brand-emerald shrink-0">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Critical Path</div>
            <div className="text-white font-extrabold italic uppercase decoration-brand-emerald decoration-2 underline underline-offset-4 decoration-4">EC (Environmental Clearance)</div>
            <p className="text-slate-500 text-[10px] italic">Not CTE. EC takes 5–8 months — file Month 2. Non-gas civil works can proceed under CTE while EC awaited.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
