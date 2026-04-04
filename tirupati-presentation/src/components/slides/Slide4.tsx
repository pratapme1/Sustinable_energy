"use client";

import { motion } from "framer-motion";
import { Share2, Map, LayoutGrid, CheckCircle, ArrowRight } from "lucide-react";

export default function Slide4() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4 text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase"
        >
          04. Our Solution
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold font-display"
        >
          One Plant. <span className="text-gradient-gold italic">Four Streams.</span>
        </motion.h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 h-full min-h-[400px]">
        {/* Left Side: Feedstock */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/3 space-y-4"
        >
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Feedstock In</h3>
          {[
            { title: "City Organic Waste", val: "40 TPD" },
            { title: "Institutional Food Waste", val: "20 TPD" },
            { title: "Cattle Manure", val: "25 TPD" },
            { title: "Groundnut Shells", val: "5 TPD" }
          ].map((item, i) => (
            <div key={i} className="p-4 glass rounded-2xl border-brand-gold/10 flex justify-between items-center group hover:bg-brand-gold/5 transition-colors">
              <span className="text-slate-400 font-light">{item.title}</span>
              <span className="text-brand-gold font-bold italic tracking-widest">{item.val}</span>
            </div>
          ))}
        </motion.div>

        {/* Center: Plant */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brand-gold/20 bg-brand-gold/5 flex flex-col items-center justify-center text-center p-6 relative"
        >
          <div className="absolute inset-0 bg-gradient-radial from-brand-gold/20 to-transparent" />
          <h4 className="text-2xl font-bold text-white uppercase italic tracking-tighter">Anaerobic Digestion</h4>
          <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-2 leading-none">CSTR + PSA Upgrading</p>
          <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 text-brand-gold/40 hidden md:block" />
          <ArrowRight className="absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-12 text-brand-gold/40 hidden md:block rotate-180" />
        </motion.div>

        {/* Right Side: Products */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/3 space-y-4"
        >
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Products Out</h3>
          {[
            { title: "CBG (to OMCs)", val: "12-14 TPD" },
            { title: "Digestate (to Farms)", val: "Daily" },
            { title: "Tipping Fees (Revenue)", val: "Recurring" },
            { title: "Carbon Credits (VCS)", val: "Accrued" }
          ].map((item, i) => (
            <div key={i} className="p-4 glass rounded-2xl border-brand-emerald/10 flex justify-between items-center group hover:bg-brand-emerald/5 transition-colors">
              <span className="text-slate-400 font-light">{item.title}</span>
              <span className="text-brand-emerald font-bold italic tracking-widest uppercase">{item.val}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-4 p-6 glass rounded-3xl border-brand-gold/10"
      >
        <p className="text-slate-500 font-light italic leading-relaxed text-center mx-auto">
          "100 TPD in → 12–14 TPD CBG out. A multi-feedstock model that eliminates 
          single-point feed risk for investors."
        </p>
      </motion.div>
    </div>
  );
}
