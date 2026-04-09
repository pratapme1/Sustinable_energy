"use client";

import { motion } from "framer-motion";
import { QrCode, Truck, Flame, CheckCircle, Shield } from "lucide-react";

export default function Slide6() {
  const steps = [
    {
      icon: QrCode,
      number: "01",
      title: "Deposit",
      body: "Household, hotel, canteen, or BWG wet waste is deposited at a tagged point or logged by the operator. Source is identified before pickup.",
    },
    {
      icon: Truck,
      number: "02",
      title: "Collect",
      body: "Contracted local vehicles collect by route. Each pickup creates a service record tied to the source cluster and operating day.",
    },
    {
      icon: Flame,
      number: "03",
      title: "Process",
      body: "Cero Node: pre-processing removes inerts -> digester -> upgrading -> CBG plus solid and liquid digestate.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Verify",
      body: "Plant inlet weighbridge confirms tonnage. Service records and avoided-emission logic are issued only after plant confirmation.",
    },
    {
      icon: Shield,
      number: "05",
      title: "Identity",
      body: "Cero ID and dashboards accumulate the record for citizens, BWGs, TMC, and institutional partners. This is the compliance and reporting layer.",
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
          06. How It Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          From Plate to Carbon Credential{" "}
          <span className="text-gradient-emerald">in Five Steps</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3 relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-brand-emerald/30 text-sm font-bold">
                →
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <step.icon className="w-4 h-4 text-brand-emerald" />
              </div>
              <span className="text-2xl font-extrabold text-white italic tracking-tight opacity-20">
                {step.number}
              </span>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                {step.title}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Nothing is credited on{" "}
          <span className="text-white font-semibold">
            self-reporting
          </span>{" "}
          . The physical node remains the trust anchor for every digital record.
        </p>
      </motion.div>
    </div>
  );
}
