"use client";

import { motion } from "framer-motion";
import { FileText, BarChart2, Fuel } from "lucide-react";

export default function Slide4() {
  const mandates = [
    {
      icon: FileText,
      tag: "SWM 2026 — April 2026 (now)",
      title: "Bulk generators need enforceable wet-waste processing routes.",
      body: "Hotels, apartments, institutions, and pilgrim establishments become contractable feedstock partners once the city has a credible node and collection system.",
    },
    {
      icon: BarChart2,
      tag: "BRSR Core — FY2024-25",
      title: "Institutions increasingly need assured sustainability and compliance records.",
      body: "The plant alone does not give this. The platform layer turns waste processing into exportable records for hotels, campuses, corporates, and future reporting use.",
    },
    {
      icon: Fuel,
      tag: "SATAT / CBG demand buildout",
      title: "CBG buyer routes exist and demand is structurally growing.",
      body: "Floor-price logic and long-tenure offtake arrangements make fuel sales credible, but financing still depends on land, feedstock, and approvals.",
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
          04. Why Now
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Three Mandates. One{" "}
          <span className="text-gradient-emerald">Execution Window.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mandates.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                {item.tag}
              </div>
              <p className="text-sm text-white font-semibold leading-relaxed mb-2">{item.title}</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          The window is real. Waste supply, fuel offtake, and reporting demand are aligning.{" "}
          <span className="text-brand-gold font-semibold">Government support matters because it compresses the land and approvals risk that still blocks execution.</span>
        </p>
      </motion.div>
    </div>
  );
}
