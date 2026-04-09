"use client";

import { motion } from "framer-motion";
import { Database, Factory, Smartphone, Truck } from "lucide-react";

export default function MinisterSlide3() {
  const layers = [
    {
      icon: Factory,
      title: "Cero Node",
      body: "One 50 TPD wet-organics-to-CBG node using proven EPC and buyer routes.",
      accent: "emerald",
    },
    {
      icon: Smartphone,
      title: "Participation Layer",
      body: "Source-tagged pickups, BWG and hospitality tracking, citizen participation, and service visibility.",
      accent: "slate",
    },
    {
      icon: Database,
      title: "Government / Institutional Dashboard",
      body: "One audit trail for plant intake, partner activity, and operational reporting.",
      accent: "gold",
    },
  ];

  const flow = [
    "Source-tag waste",
    "Collect on scheduled routes",
    "Pre-process and digest",
    "Upgrade to CBG",
    "Report through one dashboard",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          03. Proposal
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          What We Are{" "}
          <span className="text-gradient-emerald">Actually Proposing</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 + index * 0.08 }}
            className={`p-6 rounded-[2rem] flex flex-col gap-4 ${
              layer.accent === "gold"
                ? "bg-brand-gold/6 border border-brand-gold/18"
                : layer.accent === "emerald"
                ? "bg-brand-emerald/6 border border-brand-emerald/18"
                : "glass border-white/8"
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              layer.accent === "gold"
                ? "bg-brand-gold/10 border border-brand-gold/20"
                : "bg-brand-emerald/10 border border-brand-emerald/20"
            }`}>
              <layer.icon className={`w-5 h-5 ${layer.accent === "gold" ? "text-brand-gold" : "text-brand-emerald"}`} />
            </div>
            <div className="text-sm uppercase tracking-[0.24em] text-slate-500 font-semibold">{layer.title}</div>
            <p className="text-base text-slate-300 font-light leading-relaxed">{layer.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="p-6 rounded-3xl bg-[linear-gradient(135deg,rgba(16,185,129,0.08),rgba(15,23,42,0.74))] border border-brand-emerald/16"
      >
        <div className="flex items-center gap-3 mb-4">
          <Truck className="w-5 h-5 text-brand-emerald" />
          <div className="text-xs uppercase tracking-[0.24em] text-brand-emerald font-semibold">
            Operational Logic
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {flow.map((item, index) => (
            <div key={item} className="flex items-center gap-3 p-4 glass rounded-2xl border-white/8">
              <div className="text-xl font-extrabold italic text-brand-emerald/70 shrink-0">{index + 1}</div>
              <div className="text-sm text-slate-200 leading-relaxed">{item}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
