"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Users, Landmark, Smartphone, Target } from "lucide-react";

export default function Slide16() {
  const actions = [
    {
      week: "W1",
      task: "Incorporate + SATAT LoI (HPCL + IOCL Tirupati) + GOBARdhan + NREDAP registration.",
      icon: Building2
    },
    {
      week: "W2–3",
      task: "Community sprint: visit 5 RWAs + 10 hotels. Target: 10 signed LOIs by Day 21.",
      icon: Users
    },
    {
      week: "W4–6",
      task: "Convert LOIs to 30 signed tipping fee MOUs. File EC application. Apply DST NIDHI-TIDE.",
      icon: FileText
    },
    {
      week: "W7–10",
      task: "Submit IREDA + MNRE CFA applications. Start app MVP build. Deploy first 10 drop points.",
      icon: Smartphone
    },
    {
      week: "W10–12",
      task: "IREDA progress check. DPR with local EPC vendor commissioned. Land MOU with NREDAP.",
      icon: Landmark
    }
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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
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
        className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[3rem] flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
      >
        <div className="w-16 h-16 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold shrink-0 mx-auto md:mx-0">
          <Target className="w-9 h-9" />
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">The Single Metric That Matters</div>
          <div className="text-brand-gold font-extrabold text-xl italic uppercase tracking-widest underline decoration-brand-gold decoration-4 underline-offset-8">
            30 Signed Tipping Fee MOUs
          </div>
          <p className="text-slate-500 font-light text-xs italic leading-relaxed max-w-xl">
            Everything else follows from this one number. 30 MOUs unlocks IREDA, unlocks MNRE CFA, unlocks EC credibility, unlocks EPC negotiating power. Without 30 MOUs, nothing else matters.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
