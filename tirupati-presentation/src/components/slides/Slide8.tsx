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
          The Layer That Kills Every India Biogas Plant —{" "}
          <span className="text-gradient-emerald">Solved</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          40% of India&apos;s AD plants are non-functional. The #1 reason: no reliable feedstock supply. Here is our solution.
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
              { label: "100 sealed HDPE bins with QR codes", body: "Placed at apartment gates, hotel loading bays, pilgrim rest areas. Cost: ₹2,000–5,000/bin. 100 bins = ₹2–5 lakh total." },
              { label: "Hub-and-spoke collection", body: "5-tonne vehicle, 2 trips/day, contracted local SBM Urban operator." },
              { label: "Cost", body: "₹300–500/tonne logistics — already modelled in OPEX." },
              { label: "Weight-verified credits", body: "Weighbridge per stop → plant inlet confirmation → credits issued on confirmed weight." },
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
              { label: "Trommel screen + shredder at plant inlet", body: "Removes plastic, glass, metal before digester. Industry standard." },
              { label: "Multi-stage screening", body: "Karnal MBT plant model: 80mm + 32mm + 16mm + 4mm aperture screens." },
              { label: "Contamination penalty in MOU", body: "Communities pay ₹200/tonne surcharge for loads >15% inert contamination. Financial incentive to segregate." },
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
          We don&apos;t depend on perfect segregation. We mechanically remove inerts at the plant inlet.{" "}
          <span className="text-white font-semibold">
            Contaminated waste enters. Clean organic slurry enters the digester. Inerts go to construction aggregate. Zero digester contamination risk.
          </span>
        </p>
      </motion.div>
    </div>
  );
}
