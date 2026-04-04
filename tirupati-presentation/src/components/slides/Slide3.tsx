"use client";

import { motion } from "framer-motion";
import { AlertCircle, Trash2, Wind, Search } from "lucide-react";

export default function Slide3() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          03. The Challenge
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Tirupati's <span className="text-gradient-emerald italic">Organic Waste Gap</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 glass rounded-3xl border-brand-emerald/10 space-y-6"
          >
            <div className="flex items-center gap-4 text-brand-emerald">
              <Search className="w-8 h-8" />
              <h3 className="text-2xl font-bold italic font-extrabold italic underline decoration-brand-emerald decoration-4 underline-offset-8">What Tirupati Generates</h3>
            </div>
            <div className="space-y-4 text-sm font-light">
              <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
                <span className="text-slate-400">City wet waste (households)</span>
                <span className="text-white font-bold italic tracking-widest">115 TPD</span>
              </div>
              <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
                <span className="text-slate-400">City food waste</span>
                <span className="text-white font-bold italic tracking-widest">15 TPD</span>
              </div>
              <div className="flex justify-between border-b border-brand-emerald/10 pb-2">
                <span className="text-slate-400 font-extrabold italic">TOTAL GENERATED</span>
                <span className="text-brand-emerald font-bold italic tracking-widest underline decoration-brand-emerald decoration-2 underline-offset-4">130 TPD</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-brand-emerald/5 border-brand-emerald/20 border rounded-2xl"
          >
            <div className="text-slate-400 text-sm font-light leading-relaxed">
              *Tirupati's existing 50 TPD bio-methanation processes only low-grade raw biogas, 
              sold locally. It is <span className="text-brand-emerald font-bold uppercase italic">not CBG</span> and doesn't feed the grid.
            </div>
          </motion.div>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-8 border-l-4 border-brand-gold bg-brand-gold/5 rounded-r-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 text-brand-gold/20">
              <AlertCircle className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-bold text-gradient-gold italic leading-tight">~80-100 TPD Gap</h3>
            <p className="text-slate-400 font-light text-lg mt-2">
              High-calorific organic waste with <span className="text-brand-gold font-bold uppercase italic">no good destination</span>.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Landfill Pressure
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Seasonal Field Burning
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Lost Energy Potential
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
