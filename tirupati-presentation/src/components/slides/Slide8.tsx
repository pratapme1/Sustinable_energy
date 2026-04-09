"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Filter, AlertTriangle } from "lucide-react";

export default function Slide8() {
  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          08. Logistics
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          The Feedstock Layer That Breaks Most Plants —{" "}
          <span className="text-gradient-emerald">Designed Properly</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          40% of India&apos;s AD plants are non-functional. The usual failure is not the digester; it is weak collection discipline and poor feedstock control.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-4 h-4 text-brand-emerald" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Drop Point Network</div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Distributed wet-waste capture", body: "Sealed bins and tagged pickup points at apartments, hotels, kitchens, and pilgrim-serving establishments." },
              { label: "Hub-and-spoke collection", body: "Contracted local vehicles run fixed routes instead of ad hoc lifting. This makes the feedstock line schedulable." },
              { label: "Logistics cost screened", body: "₹300–500/tonne collection cost is already reflected in the operating screen for a 50 TPD node." },
              { label: "Weight-verified records", body: "Pickup record -> route -> plant inlet confirmation. The platform only recognizes plant-confirmed tonnes." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <Truck className="w-3 h-3 text-brand-emerald shrink-0" />
                  <div className="text-xs text-white font-semibold">{item.label}</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed pl-5">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <Filter className="w-4 h-4 text-brand-emerald" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Pre-Treatment at Plant</div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Trommel screen + shredder at inlet", body: "Plastic, glass, and metal are removed before digestion. This is the non-negotiable protection layer." },
              { label: "Indian wet-waste reality, not lab waste", body: "Sizing assumes contamination and variable moisture, not perfectly segregated feedstock." },
              { label: "Commercial discipline in supply contracts", body: "Loads with excessive inert contamination face surcharge or rejection. Segregation improves because the contract requires it." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <Filter className="w-3 h-3 text-brand-emerald shrink-0" />
                  <div className="text-xs text-white font-semibold">{item.label}</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed pl-5">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl flex items-start gap-4"
      >
        <AlertTriangle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          We do not depend on perfect segregation. We clean the stream before digestion.{" "}
          <span className="text-white font-semibold">
            This is the difference between a brochure plant and an operable plant in Indian wet-waste conditions.
          </span>
        </p>
      </motion.div>
    </div>
  );
}
