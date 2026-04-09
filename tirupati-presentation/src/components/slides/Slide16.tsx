"use client";

import { motion } from "framer-motion";
import { Building2, BarChart2, Lock } from "lucide-react";

export default function Slide16() {
  const stats = [
    {
      icon: Building2,
      number: "87",
      label: "Bulk Generators In Tirupati Snapshot",
      body: "PIB cited 27 BWGs above 100 kg/day and 60 more in the 50-100 kg/day band. The platform helps connect them to one operating system.",
    },
    {
      icon: BarChart2,
      number: "1",
      label: "Unified Dashboard",
      body: "Plant intake, source records, citizen participation, and service delivery can sit in one audit trail for TMC, TTD, and institutional partners.",
    },
    {
      icon: Lock,
      number: "BRSR-Ready",
      label: "Institutional Layer",
      body: "Hotels, campuses, and listed operators increasingly need assured sustainability records. The platform makes the physical node exportable into that workflow.",
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
          16. The Reporting Layer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Plant + Platform.{" "}
          <span className="text-gradient-emerald">One Audit Trail.</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10 flex items-center gap-6"
      >
        <div className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight shrink-0">
          1 Audit Trail
        </div>
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          The physical node is more useful to government when every tonne, pickup, and partner interaction is visible in one operating record.{" "}
          <span className="text-white font-semibold">That is why the platform layer should stay in the deck.</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
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
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Without the reporting layer, the project is only a plant.{" "}
          <span className="text-white font-semibold">With it, the same node becomes usable for compliance, citizen engagement, and institutional reporting.</span>
        </p>
      </motion.div>
    </div>
  );
}
