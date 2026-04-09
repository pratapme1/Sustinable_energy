"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Building2, BadgeCheck, FileText, TrendingUp, Mail } from "lucide-react";

export default function Slide19() {
  const asks = [
    {
      icon: MapPin,
      label: "Site / Land Path",
      value: "6-acre equivalent or brownfield route",
      detail: "Help fix the first-node site path early so the project can move from concept to finance-grade packaging.",
      highlight: false,
    },
    {
      icon: Users,
      label: "Nodal Working Group",
      value: "State + TMC + TTD + local agencies",
      detail: "A single coordination track for counterparties and approvals is more valuable than a generic letter of support.",
      highlight: false,
    },
    {
      icon: Building2,
      label: "Feedstock Framework",
      value: "Municipal + BWG + hospitality + city TTD",
      detail: "Support the alignment of wet-waste sources so the first 50 TPD node is contractable and bankable.",
      highlight: false,
    },
    {
      icon: BadgeCheck,
      label: "Approvals Sequencing",
      value: "Land-use, APPCB, fire, utilities, buyer path",
      detail: "The goal is not to bypass process, but to sequence it coherently so the project does not stall in fragmentation.",
      highlight: false,
    },
    {
      icon: FileText,
      label: "Project Structure Support",
      value: "PPP / VGF / debt-readiness evaluation",
      detail: "Assess the right route for the first node without assuming subsidy availability that may not yet be open.",
      highlight: false,
    },
    {
      icon: TrendingUp,
      label: "Phase 2 Study Window",
      value: "Separate Tesla CCC residual-waste feasibility",
      detail: "Study Tesla Evercraft only as a later residual-waste option, not as a dependency for Phase 1 wet-organics CBG execution.",
      highlight: true,
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
          19. Government Ask
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Support the First Node.{" "}
          <span className="text-gradient-emerald">Then Scale the Model.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          This is not a request for speculative platform equity. It is a request to make the first Tirupati node executable through land, approvals, counterparties, and structured project support.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {asks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-5 rounded-3xl flex flex-col gap-2 ${
              item.highlight
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              item.highlight
                ? "bg-brand-gold/10 border border-brand-gold/20"
                : "bg-brand-emerald/10 border border-brand-emerald/20"
            }`}>
              <item.icon className={`w-4 h-4 ${item.highlight ? "text-brand-gold" : "text-brand-emerald"}`} />
            </div>
            <div>
              <div className={`text-xs uppercase tracking-widest font-bold mb-0.5 ${item.highlight ? "text-brand-gold" : "text-slate-500"}`}>
                {item.label}
              </div>
              <div className={`text-sm font-semibold mb-1 ${item.highlight ? "text-brand-gold" : "text-white"}`}>
                {item.value}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-emerald text-brand-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-emerald/20 text-sm">
          <Mail className="w-4 h-4" />
          Set Up Working Session
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold rounded-2xl hover:bg-brand-emerald/20 transition-all text-sm">
          <FileText className="w-4 h-4" />
          Review DPR + Approvals Pack
        </button>
      </motion.div>
    </div>
  );
}
