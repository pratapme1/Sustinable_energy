"use client";

import { motion } from "framer-motion";
import { QrCode, Truck, Flame, CheckCircle, Shield } from "lucide-react";

export default function Slide6() {
  const steps = [
    {
      icon: QrCode,
      step: "01",
      title: "Deposit",
      body: "Pilgrim/resident deposits organic waste at Cero drop point. QR scan logs the deposit.",
    },
    {
      icon: Truck,
      step: "02",
      title: "Collect",
      body: "Collection vehicle picks up, weighbridge ticket per stop. Cost: ₹300–500/tonne.",
    },
    {
      icon: Flame,
      step: "03",
      title: "Process",
      body: "Cero Node converts waste to CBG, digestate, and verified carbon data.",
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Verify",
      body: "Plant intake weight confirms deposit. 1 Cero Credit = 1 kg CO₂e avoided. Issued within 24h.",
    },
    {
      icon: Shield,
      step: "05",
      title: "Identity",
      body: "Credits accumulate in Cero ID. Portable across cities, careers, and carbon markets.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          06. The Cero Flow
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Plate to Credential{" "}
          <span className="text-gradient-emerald">in Five Steps</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3 relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-brand-emerald/30 text-base font-bold">
                →
              </div>
            )}
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                Step {item.step}
              </div>
              <div className="text-sm text-white font-semibold mb-1">{item.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 md:p-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Credits are issued on{" "}
          <span className="text-white font-semibold underline decoration-brand-emerald decoration-2 underline-offset-4">
            plant-confirmed intake
          </span>{" "}
          — not user-reported deposits. This is what makes them real.
        </p>
      </motion.div>
    </div>
  );
}
