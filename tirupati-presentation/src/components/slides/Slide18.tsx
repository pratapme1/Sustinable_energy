"use client";

import { motion } from "framer-motion";
import { Users, FileSignature, Landmark, Smartphone, Wrench, MapPin } from "lucide-react";

export default function Slide18() {
  const formula = [
    {
      icon: Users,
      number: "01",
      title: "Anchor Community Type",
      body: "Pilgrim city / university campus / gated township / dairy cluster. Each has concentrated organic waste + institutional anchor.",
    },
    {
      icon: FileSignature,
      number: "02",
      title: "30 Tipping Fee MOUs",
      body: "4–6 weeks. Same pitch: SWM 2026 compliance + Cero ESG badge + rate lock. Works in any city.",
    },
    {
      icon: Landmark,
      number: "03",
      title: "MNRE + IREDA + State",
      body: "Same government formula, new project → new grants. Renewable per project. Each SPV is independent.",
    },
    {
      icon: Smartphone,
      number: "04",
      title: "App Instance (2–4 weeks)",
      body: "Same platform, new city configuration. Platform cost = near-zero per additional city.",
    },
    {
      icon: Wrench,
      number: "05",
      title: "Physical Node (18–20 months)",
      body: "Same EPC partner, same plant design, ~20% cheaper from learning curve. Atmos Power VPSA, GPS Renewables or Praj EPC.",
    },
  ];

  const pipeline = [
    {
      icon: MapPin,
      tag: "Month 18–30",
      title: "IIT Tirupati Campus",
      body: "5,000+ students. Oil India-IIT Kharagpur campus model proven. Small node: 10–25 TPD, ₹3–6 crore. DST + university funding.",
    },
    {
      icon: MapPin,
      tag: "Month 24–42",
      title: "Srisailam",
      body: "Second AP pilgrim city. Same TTD network. Same government formula. Temple + town organic waste.",
    },
    {
      icon: MapPin,
      tag: "Month 30–48",
      title: "Hyderabad Townships",
      body: "50+ gated communities. SWM enforcement active. Large node: 200–300 TPD.",
    },
    {
      icon: MapPin,
      tag: "Parallel, Month 6–18",
      title: "NUS Singapore",
      body: "Digital-first Cero ID. TLC grant funds this. Campus waste + commute behavior data. SE Asia expansion pathway.",
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
          18. Replication
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Same Formula. Every City.{" "}
          <span className="text-gradient-emerald">20% Cheaper Each Time.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {formula.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <step.icon className="w-4 h-4 text-brand-emerald" />
              </div>
              <span className="text-xl font-extrabold text-white italic opacity-20">{step.number}</span>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{step.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {pipeline.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-2"
          >
            <div className="text-xs text-brand-emerald font-mono tracking-widest uppercase">{node.tag}</div>
            <div className="text-xs text-white font-bold">{node.title}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{node.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Each new node brings its own MNRE grant, IREDA loan, and state subsidy —{" "}
          <span className="text-brand-emerald font-semibold">founder equity remains ₹0 every time.</span>{" "}
          The platform licence fee from each SPV funds Cero Hero Pvt Ltd. This is the replication engine.
        </p>
      </motion.div>
    </div>
  );
}
