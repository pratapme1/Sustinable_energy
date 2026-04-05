"use client";

import { motion } from "framer-motion";
import { Building2, BarChart2, Database } from "lucide-react";

export default function Slide12() {
  const stats = [
    {
      icon: Building2,
      number: "7,000",
      label: "Institutional Customers",
      body: "Listed companies in India that need BRSR-compliant community sustainability data.",
    },
    {
      icon: BarChart2,
      number: "₹3K–8K/mo",
      label: "Per Institution",
      body: "For Cero ID ESG dashboard = ₹50L–2 cr/yr per node.",
    },
    {
      icon: Database,
      number: "₹500 Cr",
      label: "Market Size",
      body: "Every hotel group, real estate company, and retailer in Tirupati files BRSR and needs this data.",
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
          12. The BRSR Hook
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
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <div className="flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight shrink-0">
            ₹500 Cr
          </div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            SEBI BRSR Core (FY2024-25) mandates assured reporting on supply chain + individual-level sustainability for top 1,000 listed companies.{" "}
            <span className="text-white font-semibold">Scope 4 community data = no existing verified solution.</span>
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-3"
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white italic tracking-tight leading-none mb-1">
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
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Cero is the{" "}
          <span className="text-white font-semibold">BRSR data layer for community-level Scope 4 reporting.</span>{" "}
          No competitor has this integration.{" "}
          Switching cost = high once embedded in annual report process.
        </p>
      </motion.div>
    </div>
  );
}
