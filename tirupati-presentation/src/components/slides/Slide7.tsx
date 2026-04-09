"use client";

import { motion } from "framer-motion";
import { Users, Trash2, Building2, MapPin } from "lucide-react";

export default function Slide7() {
  const metrics = [
    {
      icon: Users,
      number: "3–10 Cr",
      label: "Pilgrims per Year",
      body: "Pilgrimage intensity keeps hospitality, canteen, and civic wet-waste generation structurally relevant throughout the year.",
    },
    {
      icon: Trash2,
      number: "130 TPD",
      label: "Organic Waste Base",
      body: "Tirupati already has a 50 TPD biomethanation benchmark at Thukivakam. The opportunity is the next city-linked CBG-quality node, not a theoretical pilot.",
    },
    {
      icon: Building2,
      number: "TMC + TTD + BWGs",
      label: "Anchor Counterparties",
      body: "Municipal wet waste, city-level temple establishments, hotels, apartments, and dairy partners create a diversified wet-organics base.",
    },
    {
      icon: MapPin,
      number: "AP Support Signals",
      label: "Execution Window",
      body: "ICEP 2024, district CBG activity, and the March 22, 2026 urban CBG sanction signal show the state is already active in this category.",
    },
  ];

  const participants = [
    { who: "TMC", gives: "Municipal wet-waste stream + local support", receives: "Visible diversion, cleaner-city outcomes, compliance data" },
    { who: "Hotels / dharamshalas", gives: "Segregated food waste + service fee", receives: "Compliance and BRSR-ready records" },
    { who: "TTD city establishments", gives: "Anchor food-waste stream", receives: "Pilgrimage sustainability narrative" },
    { who: "Dairy / peri-urban farmers", gives: "Manure balancing + local offtake", receives: "Digestate and soil-fertility value" },
    { who: "Citizens / RWAs", gives: "Participation through app + drop points", receives: "Traceable incentives and feedback loop" },
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
          <span className="text-gradient-emerald">Right First Node</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white italic tracking-tight leading-none mb-1">
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
        className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">
          Likely Counterparties — And Why They Matter
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {participants.map((p, i) => (
            <div key={i} className="flex flex-col gap-1 p-3 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-white font-semibold">{p.who}</div>
              <div className="text-xs text-slate-500 font-light leading-relaxed">{p.gives}</div>
              <div className="text-xs text-brand-emerald font-light leading-relaxed">{p.receives}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
