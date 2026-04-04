"use client";

import { motion } from "framer-motion";
import { Trash2, Hotel, Droplets, Leaf } from "lucide-react";

export default function Slide5() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          05. Feedstock Deep Dive
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          De-risking through <span className="text-gradient-emerald italic font-extrabold italic">Diversity</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Trash2,
            title: "City Organic",
            val: "40 TPD",
            desc: "Residual organic fraction from TMC. Tipping fee model.",
            tag: "₹900/Ton"
          },
          {
            icon: Hotel,
            title: "Institutional",
            val: "20 TPD",
            desc: "Pilgrim hotels & dharamshalas. SWM 2026 mandate.",
            tag: "₹1200/Ton"
          },
          {
            icon: Droplets,
            title: "Dairy Manure",
            val: "25 TPD",
            desc: "Chittoor belt. Stabilises pH + high biogas yield.",
            tag: "Near Zero Cost"
          },
          {
            icon: Leaf,
            title: "Agri Residue",
            val: "5 TPD",
            desc: "Groundnut shells. Seasonal yield booster.",
            tag: "Pre-treated"
          }
        ].map((stream, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-2xl border-brand-emerald/10 flex flex-col items-center text-center space-y-4 hover:border-brand-emerald/30 transition-all hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-brand-emerald/10 rounded-2xl flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform">
              <stream.icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white leading-tight">{stream.title}</h3>
              <div className="text-brand-emerald font-bold text-2xl italic tracking-tighter">{stream.val}</div>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed">{stream.desc}</p>
            <div className="mt-auto px-4 py-1 bg-brand-emerald/20 rounded-full text-brand-emerald font-bold text-[10px] uppercase tracking-widest">
              {stream.tag}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-4 p-6 bg-brand-emerald/5 border border-brand-emerald/10 rounded-3xl"
      >
        <p className="text-slate-400 font-light italic leading-relaxed mx-auto text-sm">
          *Tipping fees convert feedstock from a <span className="text-brand-emerald font-bold">Cost Centre</span> to a 
          <span className="text-brand-gold font-bold"> Profit Centre</span>, eliminating the primary failure mode of India CBG plants.
        </p>
      </motion.div>
    </div>
  );
}
