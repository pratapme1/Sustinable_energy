"use client";

import { motion } from "framer-motion";
import { Calculator, BarChart3, TrendingUp, Users } from "lucide-react";

export default function Slide9() {
  return (
    <div className="flex flex-col h-full justify-center space-y-10">
      <div className="space-y-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          09. Unit Economics
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Project <span className="text-gradient-emerald italic">Financial Logic</span>
        </motion.h2>
      </div>

      {/* CAPEX + Two Funding Paths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CAPEX Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 glass rounded-3xl border-brand-emerald/10 space-y-6"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <Calculator className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Phase 1 CAPEX</h3>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-extrabold text-white tracking-widest italic underline decoration-brand-emerald decoration-4 underline-offset-8">₹12–18 Cr</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">50 TPD Plant</div>
            <div className="space-y-2 text-xs font-light text-slate-400">
              <div className="flex justify-between border-b border-brand-emerald/10 pb-1">
                <span>In-ground RCC CSTR digester</span>
                <span className="text-white font-bold italic">₹2–3 cr</span>
              </div>
              <div className="flex justify-between border-b border-brand-emerald/10 pb-1">
                <span>PSA upgrading unit</span>
                <span className="text-white font-bold italic">₹2.5–4 cr</span>
              </div>
              <div className="flex justify-between border-b border-brand-emerald/10 pb-1">
                <span>CBG compression + cascade</span>
                <span className="text-white font-bold italic">₹1–1.5 cr</span>
              </div>
              <div className="flex justify-between">
                <span>Civil + electrical + SCADA</span>
                <span className="text-white font-bold italic">₹3–4 cr</span>
              </div>
            </div>
          </div>
          <div className="pt-2 p-4 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-[10px] text-brand-emerald font-bold uppercase tracking-widest text-center">
            Founder Equity: ₹0
          </div>
        </motion.div>

        {/* Path A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl space-y-5 flex flex-col"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <BarChart3 className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Path A — Govt Debt</h3>
          </div>
          <div className="text-[10px] text-slate-500 italic">Recommended primary path</div>
          <div className="space-y-3 flex-grow text-xs font-light text-slate-400">
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>IREDA Priority Loan (70% CAPEX)</span>
              <span className="text-white font-bold italic">₹8–13 cr</span>
            </div>
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>MNRE CFA Grant (equity substitute)</span>
              <span className="text-brand-emerald font-bold italic">₹5–10 cr</span>
            </div>
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>AP ICEP Capital Subsidy</span>
              <span className="text-brand-emerald font-bold italic">₹3–5 cr</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-bold text-white uppercase tracking-widest">Total Available</span>
              <span className="text-brand-emerald font-extrabold italic">₹16–28 cr</span>
            </div>
          </div>
          <div className="mt-auto p-3 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-[10px] text-brand-emerald font-bold uppercase tracking-widest text-center">
            Surplus ₹4–10 cr → Working Capital
          </div>
        </motion.div>

        {/* Path B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 glass rounded-3xl border-brand-emerald/10 space-y-5 flex flex-col"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <Users className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Path B — Community Self-Funded</h3>
          </div>
          <div className="text-[10px] text-slate-500 italic">No IREDA debt. Fallback if govt processing stalls.</div>
          <div className="space-y-3 flex-grow text-xs font-light text-slate-400">
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>RWA + hotel upfront contributions</span>
              <span className="text-white font-bold italic">₹3–5 cr</span>
            </div>
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>TMC 12-month tipping fee advance</span>
              <span className="text-white font-bold italic">₹1–1.5 cr</span>
            </div>
            <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
              <span>MNRE CFA Grant</span>
              <span className="text-brand-emerald font-bold italic">₹5–10 cr</span>
            </div>
            <div className="flex justify-between pb-2">
              <span>AP ICEP Subsidy</span>
              <span className="text-brand-emerald font-bold italic">₹3–5 cr</span>
            </div>
            <div className="flex justify-between border-t border-brand-emerald/10 pt-2">
              <span className="font-bold text-white uppercase tracking-widest">Total</span>
              <span className="text-brand-emerald font-extrabold italic">₹13–24 cr</span>
            </div>
          </div>
          <div className="mt-auto p-3 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-[10px] text-brand-emerald font-bold uppercase tracking-widest text-center">
            Founder Equity: ₹0
          </div>
        </motion.div>
      </div>

      {/* Bottom metrics row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl space-y-2 text-center"
        >
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Year 3 EBITDA</div>
          <div className="text-3xl font-extrabold text-gradient-emerald italic tracking-widest">₹32 Crore</div>
          <div className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest">100 TPD Phase 2b, Month 24+</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 glass rounded-3xl space-y-2 text-center"
        >
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">DSCR (Debt Coverage)</div>
          <div className="text-3xl font-extrabold text-white italic tracking-widest">~12×</div>
          <div className="text-[10px] text-slate-500 italic">IREDA debt service comfortably covered</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl space-y-2 text-center"
        >
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Plant CAPEX is Govt-Funded</div>
          <div className="text-3xl font-extrabold text-white italic tracking-widest">₹0</div>
          <div className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest">Investor money goes to platform, not plant</div>
        </motion.div>
      </div>
    </div>
  );
}
