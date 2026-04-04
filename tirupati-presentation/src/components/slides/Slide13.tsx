"use client";

import { motion } from "framer-motion";
import { Gavel, Heart, Globe, Building2, Landmark, CheckCircle } from "lucide-react";

export default function Slide13() {
  return (
    <div className="flex flex-col h-full justify-center space-y-12 text-center md:text-left">
      <div className="space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-sm tracking-widest uppercase"
        >
          13. Policy & Public Value
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          National + AP <span className="text-gradient-emerald italic">Policy Stack</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 gap-2">
          {[
            { title: "SATAT (IOCL/HPCL)", desc: "15-year offtake, ₹46–72/kg floor." },
            { title: "MNRE CFA", desc: "₹10 crore non-repayable grant." },
            { title: "CBO Mandate", desc: "Mandates OMC demand, improves pricing." },
            { title: "SWM Rules 2026", desc: "Creates tipping-fee customer base." },
            { title: "AP ICEP 2024", desc: "SGST reimbursement (5 yr), land lease, electricity duty waiver." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-4 glass rounded-2xl border-brand-emerald/10 flex items-center justify-between group hover:border-brand-emerald/30 transition-all hover:bg-brand-emerald/5"
            >
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-brand-emerald group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-white text-sm italic">{item.title}</h4>
              </div>
              <p className="text-slate-500 text-[10px] font-light leading-relaxed italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-emerald/5 border border-brand-emerald/20 rounded-[3rem] p-8 flex flex-col space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-emerald/10">
            <Globe className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-extrabold italic uppercase tracking-widest text-gradient-emerald text-center md:text-left decoration-brand-emerald decoration-4 underline-offset-8 underline">The Narrative</h3>
          <p className="text-slate-400 font-light italic leading-relaxed text-sm">
            "Tirupati receives 3–10 crore devotees per year. Their visit generates waste that currently leads to landfills or clogs drains. Our plant creates a 
            <span className="text-brand-emerald font-bold italic uppercase underline decoration-brand-emerald decoration-4 underline-offset-8"> circular pilgrimage economy</span>."
          </p>
          <div className="grid grid-cols-2 gap-4 text-center mt-4">
            <div className="p-4 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20">
               <div className="text-2xl font-extrabold text-white">Zero</div>
               <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Landfill Target</div>
            </div>
            <div className="p-4 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20">
               <div className="text-2xl font-extrabold text-white">100%</div>
               <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Clean Fuel Swap</div>
            </div>
          </div>
          <div className="mt-auto flex items-center gap-2 p-2 bg-brand-emerald/10 rounded-full justify-center">
             <Heart className="w-4 h-4 text-brand-emerald fill-brand-emerald/20 underline decoration-brand-gold decoration-4 underline-offset-8" />
             <div className="text-[8px] text-brand-emerald font-bold uppercase tracking-widest leading-none">Environmental Stewardship for Tirupati</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
