"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, FolderOpen } from "lucide-react";

export default function Slide15() {
  const columns = [
    {
      icon: Wrench,
      title: "Plant EPC & Technology",
      accent: "emerald",
      partners: [
        {
          name: "GPS Renewables (Bengaluru)",
          desc: "India's largest CBG company. 30+ operational plants. JV with Indian Oil Corp, BPCL. 550 MT/day input → 17 TPD CBG operational. 200+ projects in pipeline. Target: 1,111 TPD CBG by 2027.",
        },
        {
          name: "Praj Industries (Pune, listed)",
          desc: "RenGas™ technology. 1,000+ global project references, 100+ countries. HPCL CBG contract. Demonstration plant at Praj Matrix R&D campus, Pune.",
        },
        {
          name: "Atmos Power (Ahmedabad) — VPSA Upgrading",
          desc: "0.7 bar vs 6–10 bar for standard PSA = significantly lower energy cost. 60+ Asia installations. 99% CH₄ capture. India-manufactured. Lower OPEX, faster delivery, no import risk.",
        },
      ],
    },
    {
      icon: FolderOpen,
      title: "Project Management & DPR",
      accent: "slate",
      partners: [
        {
          name: "KPO Group",
          desc: "DPR preparation, MNRE subsidy approvals, SATAT registration, PESO licensing. Full PMC services for CBG projects.",
        },
        {
          name: "NREDAP (AP Government)",
          desc: "State nodal agency. Land lease, subsidy disbursement, MNRE coordination.",
        },
        {
          name: "EAI (Energy Alternatives India)",
          desc: "CBG strategy, project economics, policy navigation.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Why This Partner Set",
      accent: "gold",
      partners: [
        {
          name: "No experimental technology",
          desc: "GPS Renewables and Praj have already solved the plant engineering. Our role is community mobilisation, platform, and carbon verification.",
        },
        {
          name: "Competitive EPC tender",
          desc: "We source EPC through competitive tender — GPS Renewables, Praj, or equivalent. Performance bond on CBG yield and quality.",
        },
        {
          name: "EPC risk mitigation",
          desc: "Proven operators with India operational track record. Not first-of-kind installations. Risk is in community scale-up, not plant engineering.",
        },
      ],
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
          15. Technology Partners
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          We Don&apos;t Build the Technology.{" "}
          <span className="text-gradient-emerald">We Build the Relationships.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          GPS Renewables and Praj have already solved the plant engineering. Our role is community mobilisation, platform, and carbon verification.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 rounded-3xl flex flex-col gap-4 ${
              col.accent === "emerald"
                ? "bg-brand-emerald/5 border border-brand-emerald/20"
                : col.accent === "gold"
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                col.accent === "gold"
                  ? "bg-brand-gold/10 border border-brand-gold/20"
                  : "bg-brand-emerald/10 border border-brand-emerald/20"
              }`}>
                <col.icon className={`w-4 h-4 ${col.accent === "gold" ? "text-brand-gold" : "text-brand-emerald"}`} />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{col.title}</div>
            </div>
            <div className="space-y-3">
              {col.partners.map((p, j) => (
                <div key={j}>
                  <div className="text-xs text-white font-bold mb-0.5">{p.name}</div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
