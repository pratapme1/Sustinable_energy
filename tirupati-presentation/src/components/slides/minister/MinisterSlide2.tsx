"use client";

import { motion } from "framer-motion";
import { Building2, Clock3, Fuel, Hotel, Landmark, Recycle } from "lucide-react";

export default function MinisterSlide2() {
  const whyTirupati = [
    {
      icon: Recycle,
      title: "130 TPD wet-organics base",
      body: "Tirupati already generates a meaningful organics stream. The city is not a hypothetical supply case.",
    },
    {
      icon: Landmark,
      title: "Existing 50 TPD benchmark",
      body: "Thukivakam proves Tirupati can host real biomethanation infrastructure. The next step is a cleaner, CBG-oriented node.",
    },
    {
      icon: Hotel,
      title: "High-value counterparty ecosystem",
      body: "TMC, city TTD establishments, hospitality, BWGs, and peri-urban organics create multiple contracting points.",
    },
  ];

  const whyNow = [
    {
      icon: Clock3,
      title: "SWM enforcement window",
      body: "Bulk generators increasingly need compliant wet-waste routes. This makes contracts easier to structure now than later.",
    },
    {
      icon: Fuel,
      title: "CBG buyer and policy pull",
      body: "Fuel demand is building and the state already signals seriousness on urban clean-energy and CBG infrastructure.",
    },
    {
      icon: Building2,
      title: "Need for a visible flagship",
      body: "Tirupati is a city the state can showcase. A working pilgrimage-city circular model is more powerful than another generic plant announcement.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          02. Why Tirupati
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Why Tirupati.{" "}
          <span className="text-gradient-emerald">Why Now.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-6 rounded-[2rem] bg-brand-emerald/6 border border-brand-emerald/18"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-emerald font-semibold mb-4">
            Why Tirupati
          </div>
          <div className="space-y-4">
            {whyTirupati.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-brand-emerald" />
                </div>
                <div>
                  <div className="text-sm text-white font-semibold mb-1">{item.title}</div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="p-6 rounded-[2rem] bg-brand-gold/6 border border-brand-gold/18"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-gold font-semibold mb-4">
            Why Now
          </div>
          <div className="space-y-4">
            {whyNow.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm text-white font-semibold mb-1">{item.title}</div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-5 glass rounded-3xl border-brand-emerald/12"
      >
        <p className="text-base text-slate-300 font-light leading-relaxed text-center">
          Tirupati is not a speculative city pick.{" "}
          <span className="text-white font-semibold">It is a proven organics city with political visibility, a real benchmark asset, and enough institutional gravity to become Andhra&apos;s model circular pilgrimage node.</span>
        </p>
      </motion.div>
    </div>
  );
}
