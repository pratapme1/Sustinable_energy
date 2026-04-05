"use client";

import { motion } from "framer-motion";
import { DollarSign, PieChart, TrendingUp, Landmark, ShieldCheck, Layers } from "lucide-react";

export default function Slide8() {
  return (
    <div className="flex flex-col justify-center space-y-12">
      <div className="space-y-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-gold font-mono text-sm tracking-widest uppercase"
        >
          08. Revenue Model
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold font-display"
        >
          Five <span className="text-gradient-gold italic">Revenue Streams</span> per Node
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Streams */}
        <div className="space-y-4 flex flex-col justify-center">
          {[
            {
              icon: Landmark,
              title: "CBG Sales to OMCs (SATAT)",
              val: "₹30 Crore",
              desc: "15-year offtake. Floor ₹46/kg. Realistic ₹62–72/kg. 14 TPD at 100 TPD Phase 2b.",
              p: "75%"
            },
            {
              icon: ShieldCheck,
              title: "Digestate Biofertiliser",
              val: "₹2 Crore",
              desc: "Solid & liquid dry biofertiliser. FCO-certified for Chittoor farms.",
              p: "5%"
            },
            {
              icon: DollarSign,
              title: "Tipping Fees (Revenue)",
              val: "₹4 Crore",
              desc: "SWM 2026 mandate. TMC + Hotels + Apartments pay to dispose.",
              p: "10%"
            },
            {
              icon: TrendingUp,
              title: "Carbon Credits (VCS)",
              val: "₹2 Crore",
              desc: "Methane capture + fossil fuel displacement. Gold Standard certification.",
              p: "5%"
            },
            {
              icon: Layers,
              title: "Cero Hero Platform Revenue",
              val: "₹50L–2 Crore",
              desc: "B2B ESG subscriptions + BRSR data service + corporate sponsorship of Cero Credits. Digital layer on top of the physical plant. Year 2+.",
              p: "5%"
            }
          ].map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-6 p-4 hover:bg-brand-gold/5 rounded-3xl transition-all group"
            >
              <div className="w-14 h-14 shrink-0 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold font-bold text-lg group-hover:scale-110 transition-transform">
                {stream.p}
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform">
                  <h4 className="font-bold text-white text-base leading-none italic">{stream.title}</h4>
                </div>
                <div className="text-xl font-extrabold text-brand-gold tracking-widest underline decoration-brand-gold decoration-2 underline-offset-4">{stream.val}</div>
                <p className="text-slate-500 text-[10px] font-light leading-relaxed italic">{stream.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Visual Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-brand-gold/20 to-transparent pointer-events-none" />
          <PieChart className="w-24 h-24 text-brand-gold animate-pulse" />
          <div className="space-y-2">
            <h3 className="text-5xl font-extrabold text-white tracking-tighter italic tracking-widest text-gradient-gold">₹40 Crore</h3>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2 leading-none">Year 3 Gross Revenue</div>
            <div className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Physical Plant + Platform Combined</div>
          </div>
          <div className="p-6 glass rounded-2xl border-brand-gold/20 backdrop-blur-md">
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "Tipping fees make feedstock a <span className="text-brand-gold font-bold italic underline decoration-brand-gold underline-offset-2">profit stream</span>.
              Cero Hero adds a <span className="text-brand-gold font-bold italic">digital revenue layer</span> that scales independently of plant throughput."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
