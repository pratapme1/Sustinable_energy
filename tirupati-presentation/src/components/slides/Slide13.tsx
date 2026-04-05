"use client";

import { motion } from "framer-motion";
import { Star, Users, Building2, Database, FileText, Network, Globe } from "lucide-react";

export default function Slide13() {
  const moats = [
    {
      icon: Star,
      title: "First SATAT Registration",
      body: "Only one LoI per geography. First registered = preferred OMC relationship. Cannot be replicated for same geography.",
    },
    {
      icon: Users,
      title: "Community Lock-In",
      body: "3-year tipping fee contracts. Communities don't switch. Too much friction, too much Cero integration.",
    },
    {
      icon: Building2,
      title: "TTD Exclusivity",
      body: "Formal TTD city partnership = exclusive anchor no competitor can replicate in Tirupati.",
    },
    {
      icon: Database,
      title: "Verified Carbon Dataset",
      body: "Real plant intake + individual drop point data. Only verified individual-level carbon dataset in India. Worth more every year.",
    },
    {
      icon: FileText,
      title: "BRSR Integration",
      body: "First BRSR-formatted Scope 4 community data as a service. Switching cost once in annual report process.",
    },
    {
      icon: Network,
      title: "Network Effects",
      body: "More users → more merchants → more redemption value → more users. Self-reinforcing.",
    },
    {
      icon: Globe,
      title: "Dual India-Singapore",
      body: "NUS pilot (Cero ID global) + Tirupati (India physical). No competitor has both.",
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
          13. Competitive Moat
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Seven Layers.{" "}
          <span className="text-gradient-emerald">Years to Copy.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {moats.slice(0, 4).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="w-9 h-9 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-4 h-4 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{item.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {moats.slice(4).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
          >
            <div className="w-9 h-9 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-4 h-4 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{item.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
