"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function Slide17() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12 items-center text-center">
      <div className="space-y-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 py-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-sm font-bold tracking-[0.2em] uppercase"
        >
          17. Final Summary
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold font-display"
        >
          The <span className="text-gradient-emerald italic">Cero Hero Thesis</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Key Metrics Summary */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Equity Ask</div>
              <div className="text-2xl font-extrabold text-white italic tracking-widest">₹3–5 Crore</div>
              <div className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest mt-1">Platform Co. Only</div>
            </div>
            <div className="p-6 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Year 3 Revenue</div>
              <div className="text-2xl font-extrabold text-white italic tracking-widest">₹40 Crore</div>
              <div className="text-[10px] text-slate-500 italic mt-1">Plant + Platform</div>
            </div>
            <div className="p-6 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Year 3 EBITDA</div>
              <div className="text-2xl font-extrabold text-white italic tracking-widest">₹32 Crore</div>
              <div className="text-[10px] text-slate-500 italic mt-1">100 TPD at Month 24+</div>
            </div>
            <div className="p-6 glass rounded-2xl border-brand-emerald/10">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Exit EV (Y5)</div>
              <div className="text-2xl font-extrabold text-white italic tracking-widest">₹720–1,040 Cr</div>
              <div className="text-[10px] text-slate-500 italic mt-1">5-node at 8× EBITDA</div>
            </div>
          </div>
          <div className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl">
            <p className="text-slate-400 font-light text-sm italic leading-relaxed">
              "The physical plant is the <span className="text-brand-emerald font-bold uppercase underline decoration-brand-emerald decoration-4 underline-offset-8">trust anchor</span>.
              Cero Hero is the citizen-facing layer. Together = India's first integrated waste-to-value + carbon identity network."
            </p>
          </div>
        </div>

        {/* Closing Narrative */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-brand-emerald/5 border border-brand-emerald/20 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden h-full"
        >
          <div className="absolute inset-0 bg-gradient-radial from-brand-emerald/20 to-transparent pointer-events-none" />
          <Sparkles className="w-16 h-16 text-brand-emerald animate-pulse" />
          <h3 className="text-3xl font-extrabold text-white italic tracking-tighter uppercase underline decoration-brand-gold decoration-4 underline-offset-8">First Mover Opportunity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-emerald" />
              <p className="text-white text-xs font-bold uppercase tracking-widest italic group-hover:translate-x-2 transition-transform underline decoration-brand-gold decoration-4 underline-offset-8">Andhra Pradesh ICEP 2024 Readiness</p>
            </div>
            <div className="flex items-center gap-4 group justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-emerald" />
              <p className="text-white text-xs font-bold uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">Guaranteed SATAT Offtake (15-year)</p>
            </div>
            <div className="flex items-center gap-4 group justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-emerald" />
              <p className="text-white text-xs font-bold uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">NUS (Singapore) + Tirupati — Dual positioning</p>
            </div>
            <div className="flex items-center gap-4 group justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-emerald" />
              <p className="text-white text-xs font-bold uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">India's only verified individual carbon identity</p>
            </div>
          </div>
          <p className="text-brand-gold font-bold text-lg uppercase tracking-widest text-center mt-auto shadow-xl shadow-brand-gold/10 italic">
            Join the Circular Revolution.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex flex-col items-center gap-4"
      >
        <p className="text-xs text-slate-500 font-light italic">
          Investor Deck V2 — Final (April 2026) | Cero Hero Platform + Tirupati Waste-to-Energy Node
        </p>
        <div className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center gap-2">
          <Heart className="w-4 h-4 text-brand-emerald fill-brand-emerald/20" />
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Sustainable Capital</span>
        </div>
      </motion.div>
    </div>
  );
}
