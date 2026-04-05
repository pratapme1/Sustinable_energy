"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Leaf } from "lucide-react";

export default function Slide5() {
  const layers = [
    {
      number: "03",
      icon: Shield,
      label: "Cero ID",
      desc: "Portable, verified, privacy-first carbon identity",
      revenue: "B2B ESG subscriptions | BRSR data service | Carbon marketplace",
    },
    {
      number: "02",
      icon: Smartphone,
      label: "Cero Hero App",
      desc: "Gamified waste actions, community challenges, credits economy",
      revenue: "Platform fees | Corporate sponsorship | Grants",
    },
    {
      number: "01",
      icon: Leaf,
      label: "Cero Node",
      desc: "Physical waste-to-energy plant. Real waste → CBG + digestate + verified carbon data",
      revenue: "CBG (SATAT) | Tipping fees | Digestate | Carbon credits",
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
          05. Architecture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          One Platform.{" "}
          <span className="text-gradient-emerald">Three Layers. Each Funds the Next.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10 flex items-center gap-6"
          >
            <div className="flex items-center gap-4 min-w-[160px]">
              <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <layer.icon className="w-5 h-5 text-brand-emerald" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Layer {layer.number}
                </div>
                <div className="text-sm text-white font-semibold">{layer.label}</div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-400 font-light leading-relaxed">{layer.desc}</p>
            </div>
            <div className="hidden md:block text-right min-w-[240px]">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Revenue</div>
              <p className="text-xs text-brand-emerald font-light leading-relaxed">{layer.revenue}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          More waste → more credits → more users → more waste.{" "}
          <span className="text-brand-emerald font-semibold">The flywheel is self-reinforcing.</span>
        </p>
      </motion.div>
    </div>
  );
}
