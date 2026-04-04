"use client";

import { motion } from "framer-motion";
import { Settings, ShieldCheck, Zap, Activity, Info } from "lucide-react";

export default function Slide6() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          06. Technology Stack
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Proven. <span className="text-gradient-gold italic">Modular.</span> Replicable.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            {
              icon: Settings,
              title: "Reactor Type",
              val: "CSTR (Continuous Stirred Tank Reactor)",
              desc: "Handles mixed feedstocks (manure + shells + food waste); dominant in India."
            },
            {
              icon: ShieldCheck,
              title: "Upgrading Technology",
              val: "PSA (Pressure Swing Adsorption)",
              desc: "Proven Phase 1 tech; upgrades raw biogas to >95% CH₄ (Methane) consistently."
            },
            {
              icon: Zap,
              title: "Temperature Mode",
              val: "Mesophilic (35–38°C)",
              desc: "Stable in Tirupati's warm climate; lower overall energy input."
            }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 glass rounded-2xl border-brand-gold/10 flex items-start gap-4 hover:border-brand-gold/30 transition-all hover:translate-x-2"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                <tech.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-brand-gold font-bold text-xs uppercase tracking-widest">{tech.title}</div>
                <h3 className="text-xl font-extrabold text-white leading-tight italic">{tech.val}</h3>
                <p className="text-slate-500 font-light text-sm italic">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-10 flex flex-col space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-gold/10">
            <Activity className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 text-brand-gold">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-2xl font-bold uppercase italic tracking-tighter">Badaun Benchmark</h3>
          </div>
          <div className="space-y-4">
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              We anchor our configuration on the <span className="text-white font-bold opacity-100 italic">HPCL-Praj plant at Badaun</span> 
              (Jan 2024), adapted for Tirupati's multi-feedstock mix.
            </p>
            <div className="flex items-center gap-2 p-4 bg-brand-dark/50 rounded-2xl border border-white/5 group transition-all">
              <Info className="w-4 h-4 text-brand-gold group-hover:scale-125 transition-transform" />
              <div className="text-xs text-slate-500 font-mono tracking-tighter">Technology: RenGas™ by Praj Industries</div>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex justify-between text-xs border-b border-brand-gold/10 pb-2">
              <span className="text-slate-500">CAPEX Reference</span>
              <span className="text-brand-gold font-bold italic tracking-widest uppercase">₹133 Crore (Gross)</span>
            </div>
            <div className="flex justify-between text-xs border-b border-brand-gold/10 pb-2">
              <span className="text-slate-500">Typical Output</span>
              <span className="text-brand-gold font-bold italic tracking-widest uppercase">14 TPD CBG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
