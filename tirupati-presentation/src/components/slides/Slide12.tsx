"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, ShieldCheck, Target, Coffee, Building2 } from "lucide-react";

export default function Slide12() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          12. Team & Execution
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Built for <span className="text-gradient-gold italic">Professional Operations</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Roles (30–35 Staff, Plant 1)</h3>
          {[
            { role: "CEO / Founder (Vi)", icon: Users, desc: "Strategy, investor relations, government liaison." },
            { role: "Plant Manager", icon: Building2, desc: "Chemical/environmental engineer, 5+ yrs biogas." },
            { role: "Feedstock Manager", icon: Target, desc: "Most Critical Hire - Chittoor local with supply chain expertise." },
            { role: "Process Engineer", icon: Coffee, desc: "Biogas operations, SCADA, & monitoring." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 glass rounded-[2.5rem] border-brand-gold/10 flex items-center gap-6 hover:translate-x-2 transition-transform"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-white text-base uppercase italic leading-none">{item.role}</h4>
                <p className="text-slate-500 font-light text-[10px] italic leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-10 flex flex-col space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-gold/10">
            <UserPlus className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 text-brand-gold">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-2xl font-extrabold italic uppercase tracking-tighter decoration-brand-emerald decoration-4 underline-offset-8 underline decoration-brand-gold">Execution Philosophy</h3>
          </div>
          <div className="space-y-6 text-sm font-light leading-relaxed italic">
             <div className="flex gap-4">
                <div className="text-brand-gold font-bold">01</div>
                <p className="text-slate-400 font-light text-sm italic italic leading-relaxed">
                  <span className="text-white font-bold opacity-100 uppercase italic">Tipping fee first</span> - TMC / Hotel contracts signed BEFORE breaking ground.
                </p>
             </div>
             <div className="flex gap-4">
                <div className="text-brand-gold font-bold">02</div>
                <p className="text-slate-400 font-light text-sm italic italic leading-relaxed">
                  <span className="text-white font-bold opacity-100 uppercase italic">EPC Guarantee</span> - Performance bonds tied to CBG quality and yield.
                </p>
             </div>
             <div className="flex gap-4">
                <div className="text-brand-gold font-bold">03</div>
                <p className="text-slate-400 font-light text-sm italic italic leading-relaxed">
                  <span className="text-white font-bold opacity-100 uppercase italic">Resident Engineer</span> - On-site tech provider for 90 days post-commissioning.
                </p>
             </div>
          </div>
          <div className="mt-auto p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl flex items-center gap-2">
             <Target className="w-4 h-4 text-brand-gold shrink-0 focus:scale-110" />
             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">Hub-and-spoke logistics fleet (5–8 vehicles) commissioned at Month 6.</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
