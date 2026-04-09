"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Fuel, Landmark, Leaf, MapPinned, Network } from "lucide-react";

export default function MinisterSlide6() {
  const outcomes = [
    {
      icon: MapPinned,
      title: "Cleaner Tirupati",
      body: "Visible wet-waste diversion in a city the whole state and country already watches.",
    },
    {
      icon: Landmark,
      title: "A flagship circular-city project",
      body: "A pilgrimage-city model is far more politically visible than another generic utility asset.",
    },
    {
      icon: Fuel,
      title: "Fuel and fertilizer value",
      body: "CBG plus digestate creates a practical circular-economy story, not just waste disposal.",
    },
    {
      icon: BadgeCheck,
      title: "Compliance and audit trail",
      body: "TMC, TTD, hotels, and institutions get one visible operating record instead of fragmented reporting.",
    },
    {
      icon: Leaf,
      title: "Local economic activity",
      body: "Collection, processing, O&M, and downstream use create a real local operating ecosystem.",
    },
    {
      icon: Network,
      title: "A repeatable Andhra playbook",
      body: "Once Tirupati works, the model can be reused in other pilgrimage, campus, and urban nodes.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          06. State Return
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          What Andhra{" "}
          <span className="text-gradient-emerald">Gets Back</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {outcomes.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.07 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div className="text-sm text-white font-semibold">{item.title}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
        className="p-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(251,191,36,0.09),rgba(15,23,42,0.72))] border border-brand-gold/16"
      >
        <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed text-center">
          <span className="text-white font-semibold">This is not one more plant.</span>{" "}
          It is a public demonstration that Andhra can turn a high-visibility pilgrimage city into a working circular-city model with clear state ownership of the outcome.
        </p>
      </motion.div>
    </div>
  );
}
