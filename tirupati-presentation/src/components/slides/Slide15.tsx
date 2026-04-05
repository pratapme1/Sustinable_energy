"use client";

import { motion } from "framer-motion";
import { Users, Code2, Settings, FileText } from "lucide-react";

export default function Slide15() {
  const hires = [
    {
      icon: Users,
      order: "Hire 1",
      timing: "Month 0–1",
      role: "Feedstock & Community Manager",
      body: "Before first RWA meeting. Signs the MOUs. Owns all community relationships. Determines plant utilisation. Commission + equity. Local Tirupati hire.",
      highlight: true,
    },
    {
      icon: Code2,
      order: "Hire 2",
      timing: "Month 2–3",
      role: "CTO / Lead Developer",
      body: "Before app grant received. Full-stack + mobile. Builds Cero Hero app. Grant-funded first 12 months.",
      highlight: false,
    },
    {
      icon: Settings,
      order: "Hire 3",
      timing: "Month 8–10",
      role: "Plant Operations Engineer",
      body: "Before EPC contract. Manages commissioning, SCADA, operations. Funded from IREDA working capital.",
      highlight: false,
    },
    {
      icon: FileText,
      order: "Hire 4",
      timing: "Month 2 (part-time first)",
      role: "Regulatory & Compliance",
      body: "Before EC application. Navigates APPCB, MNRE, SATAT, IREDA simultaneously.",
      highlight: false,
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
          15. Team
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Four Hires.{" "}
          <span className="text-gradient-emerald">In This Order.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hires.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 md:p-8 rounded-3xl flex items-start gap-4 ${
              item.highlight
                ? "bg-brand-emerald/5 border border-brand-emerald/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-brand-emerald" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.order}</div>
                <div className="text-xs text-brand-emerald font-mono">{item.timing}</div>
              </div>
              <div className="text-sm text-white font-semibold mb-2">{item.role}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 md:p-8 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Finance, legal, BD — outsource until Series A.{" "}
          <span className="text-white font-semibold">Every rupee of salary in Year 1 goes to these four roles.</span>
        </p>
      </motion.div>
    </div>
  );
}
