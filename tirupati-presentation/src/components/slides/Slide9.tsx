"use client";

import { motion } from "framer-motion";
import { Calculator, BarChart3, TrendingUp, Landmark, ShieldCheck } from "lucide-react";

export default function Slide9() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CAPEX */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="p-8 glass rounded-3xl border-brand-emerald/10 space-y-6"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <Calculator className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Gross CAPEX</h3>
          </div>
          <div className="space-y-4">
             <div className="text-4xl font-extrabold text-white tracking-widest italic decoration-brand-emerald decoration-4 underline-offset-8 underline">₹97 Crore</div>
             <div className="space-y-2 text-xs font-light text-slate-400">
               <div className="flex justify-between border-b border-brand-emerald/10 pb-1">
                 <span>Civil Construction</span>
                 <span className="text-white font-bold italic">₹18-22cr</span>
               </div>
               <div className="flex justify-between border-b border-brand-emerald/10 pb-1">
                 <span>CSTR Digesters</span>
                 <span className="text-white font-bold italic">₹20-25cr</span>
               </div>
               <div className="flex justify-between">
                 <span>PSA & Compressing</span>
                 <span className="text-white font-bold italic">₹20-25cr</span>
               </div>
             </div>
          </div>
          <div className="pt-4 p-4 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-[10px] text-brand-emerald font-bold uppercase tracking-widest text-center">
            -₹10Cr MNRE CFA Grant
          </div>
        </motion.div>

        {/* OPEX & EBIDTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl space-y-6 flex flex-col"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <BarChart3 className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter italic">P&L Summary</h3>
          </div>
          <div className="space-y-6 flex-grow ">
            <div className="space-y-2">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Year 3 EBITDA</div>
              <div className="text-4xl font-extrabold text-gradient-emerald italic italic tracking-widest">₹21.6 Crore</div>
              <div className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest">66% Margin</div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Year 3 PAT</div>
              <div className="text-2xl font-extrabold text-white italic italic tracking-widest">₹11.6 Crore</div>
            </div>
          </div>
          <div className="mt-auto p-4 glass rounded-2xl border-white/5 italic text-slate-400 text-[10px] leading-relaxed">
            *OPEX is ₹11.0cr steady state, net of tipping fee revenue.
          </div>
        </motion.div>

        {/* Returns */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="p-8 glass rounded-3xl border-brand-emerald/10 space-y-8"
        >
          <div className="flex items-center gap-3 text-brand-emerald">
            <TrendingUp className="w-6 h-6" />
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Investor Returns</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Equity IRR (Levered)</div>
              <div className="text-4xl font-extrabold text-white italic italic tracking-widest">28-38%</div>
            </div>
            <div className="space-y-4 pt-4 text-sm font-light">
               <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
                 <span>Project Payback</span>
                 <span className="text-brand-emerald font-bold italic tracking-widest">3.5 - 4.5 Years</span>
               </div>
               <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
                 <span>Series A Equity Ask</span>
                 <span className="text-brand-gold font-bold italic tracking-widest uppercase underline decoration-brand-gold decoration-4 underline-offset-8">₹25 Crore</span>
               </div>
            </div>
          </div>
          <div className="p-4 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-[10px] text-brand-emerald font-bold uppercase tracking-widest text-center shadow-xl shadow-brand-emerald/10">
             High Margin Infrastructure Plateform
          </div>
        </motion.div>
      </div>
    </div>
  );
}
