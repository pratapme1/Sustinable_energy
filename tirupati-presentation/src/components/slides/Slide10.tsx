"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Layers, Target, Landmark } from "lucide-react";

export default function Slide10() {
  return (
    <div className="flex flex-col justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          10. Competitive Position
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Competitive <span className="text-gradient-gold italic">Moat</span> in Tirupati
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Moat Layers */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { 
              icon: Target, 
              title: "Feedstock Exclusivity", 
              desc: "First SATAT-registered plant in Tirupati. TMC exclusive processing agreement.", 
              detail: "Locks in 80 TPD gap." 
            },
            { 
              icon: Landmark, 
              title: "Institutional Anchor", 
              desc: "TTD city-level partnership for waste from guesthouses.", 
              detail: "300,000 pilgrims/day floor." 
            },
            { 
              icon: Layers, 
              title: "Multi-Stream Revenue", 
              desc: "Tipping Fee + CBG + Digestate + Carbon.", 
              detail: "Shields against price drops." 
            },
            { 
              icon: ShieldCheck, 
              title: "Dairy Hub Control", 
              desc: "First aggregator in Chittoor manure belt (preferred buyer).", 
              detail: "30 km radius lock." 
            }
          ].map((moat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 glass rounded-2xl border-brand-gold/10 flex items-start gap-4 hover:border-brand-gold/30 transition-all hover:translate-x-2"
            >
              <div className="w-10 h-10 shrink-0 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                <moat.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base leading-none italic">{moat.title}</h4>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed italic">{moat.desc}</p>
                <div className="text-[10px] text-brand-gold font-bold uppercase tracking-widest pt-2 underline decoration-brand-gold decoration-2 underline-offset-4">{moat.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Comparison Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-8 flex flex-col space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-gold/10 pointer-events-none">
            <Trophy className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-extrabold italic uppercase tracking-widest text-gradient-gold">Why We Win</h3>
          <div className="space-y-4">
             <div className="flex items-center gap-4 group">
               <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse" />
               <p className="text-white text-sm font-bold opacity-100 uppercase tracking-widest italic group-hover:translate-x-2 transition-transform italic underline decoration-brand-gold decoration-4 underline-offset-8">First Mover in Tirupati</p>
             </div>
             <p className="text-slate-500 font-light text-sm leading-relaxed italic">
               90% of SATAT LoIs fail due to feedstock or operational gaps. Our venture is designed explicitly against these failure modes with a <span className="text-brand-gold font-bold italic">professional operating model</span>.
             </p>
          </div>
          <div className="mt-auto p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl">
             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pb-2">National vs Local Positioning</div>
             <div className="flex justify-between items-center text-xs">
                <div className="space-y-1">
                   <div className="text-slate-400 italic">Reliance & GPS</div>
                   <div className="text-white font-bold opacity-100 uppercase italic">Urban / Energy Crops</div>
                </div>
                <div className="space-y-1 text-right">
                   <div className="text-brand-gold italic">This Venture</div>
                   <div className="text-white font-bold opacity-100 uppercase italic">Pilgrim Economy</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
