"use client";

import { motion } from "framer-motion";
import { Star, Users, Building2, Database, FileText, Network, Globe } from "lucide-react";

export default function Slide17() {
  const moats = [
    {
      icon: Star,
      title: "First SATAT Registration",
      body: "Only one LoI per geography. First registered = preferred OMC buyer relationship. Cannot be replicated for same geography. Lock-in is permanent.",
    },
    {
      icon: Users,
      title: "Community Lock-in",
      body: "3-year tipping fee contracts. 200 TPD committed. Communities don't switch — too much friction, too much platform integration.",
    },
    {
      icon: Building2,
      title: "TTD Exclusivity",
      body: "Formal TTD city partnership for temple city waste = exclusive anchor that no competitor can replicate in Tirupati. Relationship-based, takes years.",
    },
    {
      icon: Database,
      title: "Verified Carbon Dataset",
      body: "Real plant intake + individual QR-scan data = India's only verified individual-level carbon dataset. Worth more every year. 3–5 years to build elsewhere.",
    },
    {
      icon: FileText,
      title: "BRSR Integration",
      body: "First BRSR-formatted Scope 4 community data service. Once integrated into a company's annual report process, switching cost is high. 1–2 years to build the integration.",
    },
    {
      icon: Network,
      title: "Network Effects",
      body: "More users → more merchants → more redemption value → more users. Self-reinforcing. Classic two-sided marketplace with physical backing.",
    },
    {
      icon: Globe,
      title: "Dual India-Singapore",
      body: "NUS pilot (Cero ID global) + Tirupati (India physical). No competitor has both verified academic validation AND real physical infrastructure. Cannot be retroactively acquired.",
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
          17. Competitive Moat
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Seven Layers.{" "}
          <span className="text-gradient-emerald">Years to Copy Each One.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {moats.slice(0, 4).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
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
            className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
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
