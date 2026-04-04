"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Crosshair, AlertCircle, Scale, ShieldAlert } from "lucide-react";

export default function Slide14() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          14. Risks & Mitigation
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Resilience by <span className="text-gradient-gold italic">Design</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[400px]">
          {[
            { 
              risk: "Feedstock supply below 80%", 
              mitigation: "4-stream mix; manure + shells buffer seasonal dips; pilgrimage never stops." 
            },
            { 
              risk: "TMC tipping fee agreement delay", 
              mitigation: "Begin negotiations Month 0; SWM 2026 mandate is high leverage." 
            },
            { 
              risk: "APPCB CTE delay", 
              mitigation: "Engage APPCB in Month 0; use AP ICEP fast-track for green energy." 
            },
            { 
              risk: "Digestate disposal crisis", 
              mitigation: "Sign farmer agreements BEFORE commissioning; FCO cert pre-commission." 
            },
            { 
              risk: "Reliance enters Tirupati", 
              mitigation: "Reliance uses energy crops (475+ acres); Tirupati lacks that barren land." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-4 glass rounded-2xl border-brand-gold/10 flex items-start gap-4 hover:border-brand-gold/30 transition-all hover:translate-x-2"
            >
              <div className="w-10 h-10 shrink-0 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-5 h-5 group-hover:scale-125 transition-transform" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-[12px] leading-none uppercase italic">{item.risk}</h4>
                <p className="text-slate-500 text-[10px] font-light italic leading-relaxed italic">{item.mitigation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-10 flex flex-col space-y-6 relative overflow-hidden h-full"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-gold/10 pointer-events-none">
            <Scale className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 text-brand-gold">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-2xl font-extrabold italic uppercase tracking-tighter decoration-brand-emerald decoration-4 underline-offset-8 underline decoration-brand-gold">The Triple Downside</h3>
          </div>
          <p className="text-slate-400 font-light text-base leading-relaxed italic italic">
            The investment thesis breaks <span className="text-white font-bold opacity-100">ONLY</span> if all of the following occur simultaneously:
          </p>
          <div className="flex flex-col gap-4 text-xs font-light italic underline decoration-brand-gold decoration-4 underline-offset-8 decoration-brand-gold decoration-1">
            <div className="flex justify-between border-b border-brand-gold/10 pb-2">
              <span className="text-slate-500">CBG price falls to ₹40/kg</span>
              <span className="text-brand-gold font-bold italic tracking-widest uppercase italic">Policy Reversal Required</span>
            </div>
            <div className="flex justify-between border-b border-brand-gold/10 pb-2">
              <span className="text-slate-500">Utilisation below 55% for 24+ months</span>
              <span className="text-brand-gold font-bold italic tracking-widest uppercase italic">Multiple Stream Failure</span>
            </div>
            <div className="flex justify-between border-b border-brand-gold/10 pb-2">
              <span className="text-slate-500">Digestate has zero market</span>
              <span className="text-brand-gold font-bold italic tracking-widest uppercase italic">Farmer Sector Collapse</span>
            </div>
          </div>
          <p className="text-brand-gold font-bold text-xs uppercase tracking-widest text-center mt-auto shadow-xl shadow-brand-gold/5 italic">
             No historical precedent for this combination.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
