"use client";

import { motion } from "framer-motion";
import { Building2, FileCheck2, Handshake, Landmark, MapPinned, ShieldCheck } from "lucide-react";

export default function MinisterSlide8() {
  const asks = [
    {
      icon: MapPinned,
      title: "Fix the site path",
      body: "One clear land or brownfield route for the first node.",
    },
    {
      icon: Building2,
      title: "Nominate one working group",
      body: "State, TMC, TTD, and local agencies in one coordination track.",
    },
    {
      icon: Handshake,
      title: "Support counterparty alignment",
      body: "Municipal, BWG, hospitality, and city TTD waste streams packaged together.",
    },
    {
      icon: ShieldCheck,
      title: "Sequence approvals coherently",
      body: "Land-use, APPCB, utilities, fire, and buyer path managed as one workstream.",
    },
  ];

  const firstSixty = [
    "Weeks 1–2: nodal team and site shortlist",
    "Weeks 2–4: counterparty working meetings",
    "Weeks 4–6: DPR, vendor, and buyer package",
    "Weeks 6–8: approvals map and project structure",
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          08. Decision Ask
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          The Decision{" "}
          <span className="text-gradient-emerald">Requested Today</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="p-6 rounded-[2rem] bg-brand-emerald/6 border border-brand-emerald/18"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-brand-emerald font-semibold mb-4">
            Government Ask
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {asks.map((ask) => (
              <div key={ask.title} className="p-4 glass rounded-2xl border-white/8">
                <div className="flex items-center gap-3 mb-3">
                  <ask.icon className="w-4 h-4 text-brand-emerald" />
                  <div className="text-sm text-white font-semibold">{ask.title}</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{ask.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="p-6 rounded-[2rem] bg-brand-gold/6 border border-brand-gold/18"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileCheck2 className="w-5 h-5 text-brand-gold" />
            <div className="text-xs uppercase tracking-[0.24em] text-brand-gold font-semibold">
              First 60 Days
            </div>
          </div>
          <div className="space-y-3">
            {firstSixty.map((step, index) => (
              <div key={step} className="flex items-start gap-3 p-3 glass rounded-2xl border-white/8">
                <div className="text-lg italic font-extrabold text-brand-gold/80 shrink-0">{index + 1}</div>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
        className="p-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.09),rgba(251,191,36,0.08),rgba(15,23,42,0.72))] border border-white/10"
      >
        <div className="flex items-start gap-4">
          <Landmark className="w-5 h-5 text-brand-emerald shrink-0 mt-1" />
          <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed">
            <span className="text-white font-semibold">Bottom line:</span>{" "}
            if Andhra wants only a commodity plant, many vendors exist. If Andhra wants a Tirupati model the state can own, showcase, and replicate, approve this first-node program and move it into a state-backed working phase now.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
