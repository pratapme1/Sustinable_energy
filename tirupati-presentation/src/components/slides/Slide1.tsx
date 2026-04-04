"use client";

import { motion } from "framer-motion";
import { Leaf, Flame, Sparkles } from "lucide-react";

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 h-full">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-28 h-28 bg-brand-emerald/20 border border-brand-emerald/30 rounded-3xl flex items-center justify-center relative overflow-hidden"
      >
        <Leaf className="w-14 h-14 text-brand-emerald" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/20 to-transparent" />
      </motion.div>

      <div className="space-y-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold tracking-tight leading-tight"
        >
          <span className="text-white">Tirupati </span>
          <br />
          <span className="text-gradient-emerald">Waste-to-Fuel</span>
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto p-8 glass rounded-[2.5rem] border-brand-emerald/20"
        >
          <p className="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
            "Tirupati generates <span className="text-brand-emerald font-bold">130 tonnes</span> of organic waste every day. 
            <span className="text-brand-gold font-bold"> 80 tonnes</span> has nowhere to go. 
            We convert it to CBG for a <span className="text-white font-bold underline decoration-brand-emerald decoration-4 underline-offset-8 italic">15-year</span> contract."
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6 mt-4"
      >
        <div className="flex items-center gap-2 px-6 py-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-sm font-bold uppercase tracking-widest">
          <Flame className="w-4 h-4" />
          <span>Biogas Innovation</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-3 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-sm font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Investor Deck V1 — Final</span>
        </div>
      </motion.div>
    </div>
  );
}
