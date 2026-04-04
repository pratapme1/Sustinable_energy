"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar, Rocket, Milestone } from "lucide-react";

export default function Slide11() {
  const milestones = [
    { m: "M0", title: "Incorporation", desc: "SATAT LoI application; land selection (AP revenue land lease)." },
    { m: "M3", title: "Clearances", desc: "CTE (APPCB); Environmental Clearance; MNRE CFA application." },
    { m: "M6", title: "Financial Close", desc: "IREDA loan sanction; EPC shortlisted; DPR finalised." },
    { m: "M12", title: "Construction", desc: "Civil works; equipment procurement (CSTR, PSA, compression)." },
    { m: "M18", title: "Commissioning", desc: "First CBG delivered to OMC; revenue recognition begins." },
    { m: "M24", title: "Full Utilisation", desc: "85%+ utilisation; carbon credit baseline; FCO-certified digestate." }
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-12">
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
          Timeline: <span className="text-gradient-emerald italic">M0 to M24</span>
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden max-h-[500px]">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-emerald/10 -translate-y-1/2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 group"
            >
              <div className="w-12 h-12 bg-brand-emerald/10 rounded-full border-2 border-brand-emerald/20 flex items-center justify-center text-brand-emerald font-bold text-sm relative z-10 group-hover:bg-brand-emerald group-hover:text-brand-dark transition-all shadow-xl shadow-brand-emerald/10">
                {milestone.m}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white leading-none uppercase italic">{milestone.title}</h3>
                <p className="text-slate-500 font-light text-[10px] leading-relaxed italic">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
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
            "First CBG delivered to HPCL / IOCL Tirupati station in <span className="text-brand-emerald font-bold">Month 18</span>. Full profitability by Month 24."
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.0 }}
           className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-[2.5rem] flex items-center gap-6"
        >
          <div className="w-14 h-14 bg-brand-emerald/20 rounded-2xl flex items-center justify-center text-brand-emerald shrink-0">
             <Milestone className="w-8 h-8" />
          </div>
          <div className="space-y-1">
             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Critical Path</div>
             <div className="text-white font-extrabold italic uppercase italic decoration-brand-emerald decoration-2 underline underline-offset-4 decoration-4">Consent to Establish (CTE)</div>
             <p className="text-slate-500 text-[10px] italic">APPCB engagement from Day 1 to avoid commissioning delays.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
