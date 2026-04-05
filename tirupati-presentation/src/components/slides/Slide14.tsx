"use client";

import { motion } from "framer-motion";
import { Rocket, AlertTriangle } from "lucide-react";

export default function Slide14() {
  const milestones = [
    {
      m: "M0",
      title: "Incorporate + Register",
      desc: "SATAT LoI (HPCL + IOCL) + GOBARdhan + NREDAP + Community sprint starts.",
      critical: true,
    },
    {
      m: "M2",
      title: "File EC + Sprint",
      desc: "EC application (long-lead: 5–8 months). APPCB CTE. DPR commissioned. Target: 30 MOUs signed.",
      critical: true,
    },
    {
      m: "M3",
      title: "Finance Stack",
      desc: "MNRE CFA application. DST NIDHI-TIDE grant applied. App MVP build starts.",
      critical: false,
    },
    {
      m: "M7–9",
      title: "Financial Close",
      desc: "IREDA loan sanctioned. Financial close. EPC contract signed.",
      critical: false,
    },
    {
      m: "M10–18",
      title: "Construction",
      desc: "Civil construction (digesters M10–16). Equipment installation (PSA, compression M15–18).",
      critical: false,
    },
    {
      m: "M18–20",
      title: "First Revenue",
      desc: "Commissioning. First CBG to OMC. Revenue recognition begins.",
      critical: false,
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
          14. Implementation Timeline
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          M0 to M20:{" "}
          <span className="text-gradient-emerald">First CBG Delivered</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-brand-emerald/10" />
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold z-10 ${
                item.critical
                  ? "bg-brand-emerald/20 border-brand-emerald text-brand-emerald"
                  : "bg-brand-emerald/5 border-brand-emerald/20 text-brand-emerald"
              }`}
            >
              {item.m}
            </div>
            <div>
              <div className="text-xs text-white font-semibold mb-1">{item.title}</div>
              <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/20 rounded-2xl flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-brand-emerald" />
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Target</div>
            <div className="text-sm text-white font-semibold">First CBG Month 18–20</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Full 100 TPD profitability by Month 24.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/20 rounded-2xl flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-brand-emerald" />
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Critical Path</div>
            <div className="text-sm text-white font-semibold">
              EC not CTE
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">File Month 2. Non-gas civil proceeds under CTE while EC awaited.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
