"use client";

import { motion } from "framer-motion";
import { Building2, BarChart2, Lock } from "lucide-react";

export default function Slide16() {
  const stats = [
    {
      icon: Building2,
      number: "7,000",
      label: "Institutional Customers",
      body: "Top 1,000 SEBI-listed companies need BRSR Core reporting. Each has supply chains touching hundreds of hotels, real estate properties, retailers in Tier 2 cities. All need community-level Scope 4 verified sustainability data. No current provider exists.",
    },
    {
      icon: BarChart2,
      number: "₹3K–8K/mo",
      label: "Per Institution",
      body: "Cero ID ESG dashboard subscription per hotel/apartment/corporate. 100 institutions in Tirupati alone = ₹3.6–9.6 lakh/month = ₹50L–1.2 cr/year per node from subscriptions alone.",
    },
    {
      icon: Lock,
      number: "Mandatory",
      label: "Not Optional",
      body: "SEBI BRSR Core is an audit-grade requirement from FY2024-25. Companies face regulatory exposure if they cannot produce assured sustainability data. This is not a nice-to-have product.",
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
          16. The BRSR Hook
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          ₹500 Crore Market.{" "}
          <span className="text-gradient-emerald">No Current Solution.</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10 flex items-center gap-6"
      >
        <div className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight shrink-0">
          ₹500 Cr
        </div>
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          SEBI BRSR Core (FY2024-25) mandates assured reporting on supply chain + individual-level sustainability for top 1,000 listed companies.{" "}
          <span className="text-white font-semibold">Scope 4 community data = no existing verified solution.</span>
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
          Cero is the{" "}
          <span className="text-white font-semibold">BRSR data layer for community-level Scope 4 reporting.</span>{" "}
          Once embedded in a company&apos;s annual report process, the switching cost is high. Every new node adds new institutional customers to the same platform.
        </p>
      </motion.div>
    </div>
  );
}
