"use client";

import { motion } from "framer-motion";
import { TrendingUp, Scale, Zap, Info } from "lucide-react";

export default function Slide7() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          07. Market Context
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Why Now? <span className="text-gradient-emerald italic">Policy Tailwinds.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">National & State Level Drivers</h3>
          {[
            { title: "CBO Mandate FY2026", desc: "Mandatory 1% CBG blending in CNG/PNG, rising to 5% by FY2029." },
            { title: "SWM Rules 2026", desc: "Bulk generators must process on-site or pay a penalty — tipping fee trigger." },
            { title: "AP ICEP 2024", desc: "SGST reimbursement (5 yr), electricity duty waiver, capital subsidy." },
            { title: "CBG Price Revision", desc: "Revised to 85% of CNG retail (May 2025). ₹62–72/kg floor." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 glass rounded-2xl border-brand-emerald/10 flex items-center gap-4 hover:border-brand-emerald/30 transition-all hover:bg-brand-emerald/5"
            >
              <div className="w-10 h-10 shrink-0 bg-brand-emerald/10 rounded-xl flex items-center justify-center text-brand-emerald">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base leading-none italic">{item.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-emerald/5 border border-brand-emerald/20 rounded-[3rem] p-10 flex flex-col space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-emerald/10">
            <Scale className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 text-brand-emerald">
            <Zap className="w-6 h-6" />
            <h3 className="text-2xl font-extrabold italic uppercase tracking-tighter decoration-brand-emerald decoration-4 underline-offset-8 underline">The Reliance Factor</h3>
          </div>
          <p className="text-slate-400 font-light text-base leading-relaxed">
            Reliance has committed ₹65,000 crore for 500 CBG plants in Andhra Pradesh. 
            <span className="text-brand-emerald font-bold uppercase italic opacity-100"> They are NOT competitors.</span>
          </p>
          <div className="flex flex-col gap-4 text-sm font-light">
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span className="text-slate-500">Reliance (Kanigiri)</span>
              <span className="text-brand-emerald font-bold italic tracking-widest uppercase">Napier Grass (Energy Crop)</span>
            </div>
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span className="text-slate-500">This Venture</span>
              <span className="text-brand-emerald font-bold italic tracking-widest uppercase">Urban Waste + Dairy Manure</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-2xl flex items-center gap-3">
            <Info className="w-5 h-5 text-brand-emerald shrink-0" />
            <p className="text-xs text-slate-400 leading-relaxed italic">
              Reliance validates the AP market and improves policy priority without competing for urban organic feedstocks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
