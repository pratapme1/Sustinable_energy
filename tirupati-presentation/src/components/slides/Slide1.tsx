"use client";

import { motion } from "framer-motion";
import { Leaf, Smartphone, Shield } from "lucide-react";

export default function Slide1() {
  const cards = [
    {
      icon: Leaf,
      label: "Cero Node",
      desc: "Physical wet-organics-to-CBG node. Real waste -> clean fuel, digestate, and verified intake data.",
    },
    {
      icon: Smartphone,
      label: "Cero Hero App",
      desc: "Citizen and bulk-generator participation layer. QR deposits, pickups, incentives, and service visibility.",
    },
    {
      icon: Shield,
      label: "Cero ID",
      desc: "Verified reporting layer for government, institutions, and BRSR-linked partners.",
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
          01. Platform Vision
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="text-white">Organic Waste -&gt;</span>
          <br />
          <span className="text-gradient-emerald">Verified Carbon Identity</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
          >
            <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/20 rounded-2xl flex items-center justify-center">
              <item.icon className="w-6 h-6 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                {item.label}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          <span className="text-white font-semibold">Tirupati first.</span> Andhra support on land, approvals, and anchor counterparties turns the same platform into a replicable state model.
        </p>
      </motion.div>
    </div>
  );
}
