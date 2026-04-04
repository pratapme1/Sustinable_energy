"use client";

import { motion } from "framer-motion";
import { ListChecks, Timer, Rocket, Landmark, Users } from "lucide-react";

export default function Slide16() {
  const actions = [
    { week: "W1-W2", task: "SATAT LoI application to HPCL/IOCL Tirupati.", icon: Rocket },
    { week: "W3-W6", task: "Identify revenue land (10–15 km from city).", icon: Landmark },
    { week: "W4-W8", task: "Hire Plant & Feedstock Managers.", icon: Users },
    { week: "W6-W10", task: "Commission DPR (Detailed Project Report).", icon: ListChecks },
    { week: "W12", task: "Investor progress report: LoI + Land + DPR.", icon: Timer }
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          16. Execution Roadmap
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          First <span className="text-gradient-gold italic">90 Days</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {actions.map((action, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-[2rem] border-brand-gold/10 flex flex-col items-center text-center space-y-4 hover:border-brand-gold/30 transition-all hover:translate-y-[-10px] group"
          >
            <div className="text-brand-gold font-bold text-xs uppercase tracking-widest group-hover:scale-110 transition-transform">{action.week}</div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
              <action.icon className="w-6 h-6" />
            </div>
            <p className="text-slate-400 font-light text-[10px] leading-relaxed italic">{action.task}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[3rem] text-center"
      >
        <p className="text-slate-500 font-light text-base italic leading-relaxed mx-auto max-w-xl">
          "Parallel tracking: We begin regulatory applications and land identification in Month 0 to maintain a <span className="text-brand-gold font-bold">12-18 month commissioning timeline</span>."
        </p>
      </motion.div>
    </div>
  );
}
