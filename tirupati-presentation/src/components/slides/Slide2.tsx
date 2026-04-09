"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Building2 } from "lucide-react";

export default function Slide2() {
  const problems = [
    {
      icon: AlertTriangle,
      number: "01",
      title: "Organic waste is still under-processed",
      body: "Tirupati generates about 130 TPD of organics. Existing processing proves the city can supply a plant, but a city-linked CBG-quality expansion is still missing.",
    },
    {
      icon: Trash2,
      number: "02",
      title: "Plant-only models usually fail at the feedstock layer",
      body: "Collection discipline, BWG contracts, segregation behavior, and municipal coordination break long before digester technology does. Andhra needs a platform, not just equipment.",
    },
    {
      icon: Building2,
      number: "03",
      title: "Government and institutions need verified proof",
      body: "TMC, TTD, hotels, campuses, and listed operators increasingly need traceable compliance, reporting, and visible outcomes from one operating system.",
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
          02. Government Problem Statement
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Three Gaps.{" "}
          <span className="text-gradient-emerald">One State-Supported Solution.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {problems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-3xl font-extrabold text-white italic tracking-tight opacity-20">
                {item.number}
              </span>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                {item.title}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
