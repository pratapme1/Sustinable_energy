"use client";

import { motion } from "framer-motion";
import { Building2, Users, Coffee, Droplets } from "lucide-react";

export default function Slide2() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          02. Strategic Context
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Why <span className="text-gradient-gold italic">Tirupati?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 font-light italic"
        >
          The city that never stops generating waste.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 glass rounded-3xl border-brand-gold/10 space-y-4"
          >
            <div className="flex items-center gap-4 text-brand-gold">
              <Users className="w-8 h-8" />
              <h3 className="text-2xl font-bold italic">Pilgrim Economy</h3>
            </div>
            <p className="text-slate-400 font-light leading-relaxed">
              Tirupati receives <span className="text-white font-bold opacity-100">50,000 to 100,000</span> pilgrims daily. 
              Peaks of 300,000. These pilgrims generate institutional food waste at an intensity no seasonal city can match.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-brand-gold/5 rounded-2xl border border-brand-gold/10 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold text-brand-gold italic tracking-widest">1-2.5L</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Free Meals Daily</div>
            </div>
            <div className="p-4 bg-brand-gold/5 rounded-2xl border border-brand-gold/10 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold text-brand-gold italic tracking-widest">12 Tons</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Daily Rice Intake</div>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          {[
            { icon: Building2, title: "Hundreds of Hotels", desc: "Dharamshalas & restaurants serving pilgrims daily." },
            { icon: Coffee, title: "7 Tons Vegetables", desc: "Consumed by TTD (Tirumala Tirupati Devasthanams) daily." },
            { icon: Droplets, title: "18-20L Ltr Milk", desc: "Daily production in the Chittoor dairy belt." },
            { icon: Users, title: "Swachh Success", desc: "8th cleanest city nationally (over 1 lakh category)." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 p-4 hover:bg-brand-gold/5 rounded-2xl transition-all group"
            >
              <div className="w-10 h-10 shrink-0 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base leading-none">{item.title}</h4>
                <p className="text-slate-500 text-sm font-light italic">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
