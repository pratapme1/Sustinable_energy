"use client";

import { motion } from "framer-motion";
import { Users, Trash2, Building2, MapPin } from "lucide-react";

export default function Slide7() {
  const metrics = [
    {
      icon: Users,
      number: "3–10 Crore",
      label: "Pilgrims per Year",
      body: "Permanent, guaranteed waste supply. Never stops.",
    },
    {
      icon: Trash2,
      number: "130 TPD",
      label: "Organic Waste Generated",
      body: "80 TPD unprocessed. Zero infrastructure exists.",
    },
    {
      icon: Building2,
      number: "TTD + TMC",
      label: "Anchor Partners",
      body: "Institutional partners who control the waste supply and city policy.",
    },
    {
      icon: MapPin,
      number: "AP ICEP 2024",
      label: "Shovel-Ready",
      body: "State-level policy gives land, subsidies, SGST waiver.",
    },
  ];

  const participants = [
    { who: "RWAs", action: "Segregate & deposit organic waste", receives: "SWM compliance + Cero Credits" },
    { who: "Hotels", action: "Daily kitchen waste handover", receives: "ESG badge + BRSR data" },
    { who: "TTD establishments", action: "Anchor waste supply", receives: "Carbon-positive co-brand" },
    { who: "Farmers", action: "Cattle manure via co-op", receives: "Digestate biofertiliser" },
    { who: "Pilgrims", action: "Deposit food waste at drop point", receives: "Cero Credits (earn)" },
    { who: "TMC", action: "Route organic MSW fraction", receives: "Swachh Survekshan data" },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          07. First Node
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Why Tirupati is the{" "}
          <span className="text-gradient-emerald">Perfect First Node</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white italic tracking-tight leading-none mb-1">
                {item.number}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                {item.label}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">
          Who Participates
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {participants.map((p, i) => (
            <div key={i} className="flex flex-col gap-1 p-3 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-white font-semibold">{p.who}</div>
              <div className="text-xs text-slate-500 font-light leading-relaxed">{p.action}</div>
              <div className="text-xs text-brand-emerald font-light">{p.receives}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
