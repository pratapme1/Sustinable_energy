"use client";

import { motion } from "framer-motion";
import { Landmark, Users } from "lucide-react";

export default function Slide10() {
  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          10. Funding Paths
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Two Paths. Same Destination.{" "}
          <span className="text-gradient-emerald">Founder Equity = ₹0.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Path A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <Landmark className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Path A — Recommended — Tirupati City 1</div>
              <div className="text-base font-bold text-white">Government Debt</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "IREDA Priority Loan (70% of gross CAPEX)", val: "₹8–13 crore @ 9.5–10.5%, 15yr" },
              { label: "MNRE CFA Grant (non-repayable, equity substitute)", val: "₹5–10 crore" },
              { label: "AP ICEP Capital Subsidy (non-repayable)", val: "₹3–5 crore" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-slate-400 font-light">{row.label}</span>
                <span className="text-sm text-white font-semibold">{row.val}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-white font-semibold">Total Available</span>
              <span className="text-5xl md:text-6xl font-extrabold text-gradient-emerald italic tracking-tight">₹16–28 cr</span>
            </div>
          </div>
          <div className="p-3 glass rounded-2xl border-brand-emerald/10">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Financial Close</div>
            <div className="text-sm text-brand-emerald font-semibold">Month 7–10</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed mt-1">MNRE CFA is non-repayable. IREDA accepts it as the 30% equity requirement. Founder equity = ₹0.</p>
          </div>
        </motion.div>

        {/* Path B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Path B — Fallback + Campus/Institutional</div>
              <div className="text-base font-bold text-white">Community Self-Funded</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "RWA + hotel upfront capital contributions", val: "₹3–5 crore (5-year rate lock)" },
              { label: "TMC 12-month tipping fee advance", val: "₹1–1.5 crore" },
              { label: "MNRE CFA Grant", val: "₹5–10 crore (same grant, no IREDA)" },
              { label: "AP ICEP Subsidy", val: "₹3–5 crore" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-slate-400 font-light">{row.label}</span>
                <span className="text-sm text-white font-semibold">{row.val}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-white font-semibold">Total</span>
              <span className="text-5xl md:text-6xl font-extrabold text-gradient-gold italic tracking-tight">₹13–24 cr</span>
            </div>
          </div>
          <div className="p-3 glass rounded-2xl border-brand-gold/10">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Financial Close</div>
            <div className="text-sm text-brand-gold font-semibold">Month 3–5</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed mt-1">No 15-year debt obligation. Communities become co-funders.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400 font-light">
          <div><span className="text-white font-semibold">Path A</span> — Faster replication formula, 15yr debt @ 10%</div>
          <div><span className="text-white font-semibold">Path B</span> — No debt, faster close, communities are co-funders</div>
          <div><span className="text-brand-emerald font-semibold">Both</span> — Founder equity ₹0. Plant is government + community funded.</div>
        </div>
      </motion.div>
    </div>
  );
}
