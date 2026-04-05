"use client";

import { motion } from "framer-motion";
import { AlertTriangle, User, Trash2 } from "lucide-react";

export default function Slide2() {
  const problems = [
    {
      icon: AlertTriangle,
      number: "01",
      title: "Carbon credits are not trusted",
      body: "Joro, Earthly: estimates only. Not verified. Not tradeable. Not portable. The industry is built on self-reported data that cannot survive a single audit.",
    },
    {
      icon: User,
      number: "02",
      title: "Individual sustainability has no identity",
      body: "No portable, verified record of what you actually did. Your impact disappears when you change apps. There is no carbon passport for people.",
    },
    {
      icon: Trash2,
      number: "03",
      title: "India's organic waste has nowhere to go",
      body: "Tirupati: 130 TPD generated. 80 TPD unprocessed. Ends in drains and landfills. Every pilgrim city, campus, and township in India has this problem.",
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
          02. The Problem
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Three Problems.{" "}
          <span className="text-gradient-emerald">One Platform.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {problems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand-emerald" />
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
