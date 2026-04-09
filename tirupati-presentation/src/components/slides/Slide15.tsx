"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, FolderOpen } from "lucide-react";

export default function Slide15() {
  const columns = [
    {
      icon: Wrench,
      title: "Phase 1 CBG EPC & Upgrading",
      accent: "emerald",
      partners: [
        {
          name: "GPS Renewables / Praj / equivalent EPC",
          desc: "Use proven Indian CBG delivery partners for the wet-organics line. The first node should not be first-of-kind plant engineering.",
        },
        {
          name: "Atmos Power or equivalent upgrading route",
          desc: "Gas upgrading quality and energy cost matter materially. This subsystem should be chosen on delivered performance, not brochure claims.",
        },
        {
          name: "Competitive bid package",
          desc: "Freeze feedstock envelope, guarantees, and acceptance criteria before awarding EPC. This is the right place to control execution risk.",
        },
      ],
    },
    {
      icon: FolderOpen,
      title: "Project Structure & Approvals",
      accent: "slate",
      partners: [
        {
          name: "DPR / PMC support",
          desc: "Use experienced project-management support for DPR quality, vendor comparison, and permitting sequence management.",
        },
        {
          name: "NREDAP / state facilitation",
          desc: "Government support is most useful in land access, counterparties, and alignment across approvals rather than in replacing plant execution.",
        },
        {
          name: "Buyer and counterparty package",
          desc: "CBG buyer route, TMC/BWG structure, and digestate outlet should be packaged before debt or PPP discussions harden.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Residual-Waste Phase 2 Option",
      accent: "gold",
      partners: [
        {
          name: "Tesla Evercraft CCC",
          desc: "Vendor-stated mixed-waste / RDF / plastics route using Cold Catalytic Conversion at 260-360°C, with TRL 8-9 claimed and SynCrude-led outputs. This requires India diligence.",
        },
        {
          name: "Best fit for Tirupati",
          desc: "Treat CCC as a separate residual-waste line or separate plant after wet organics are ring-fenced into the CBG system. Do not merge it into the Phase 1 digester line.",
        },
        {
          name: "If explored with government support",
          desc: "Start with feasibility and a 1-2 unit pilot path requiring site allocation, waste-supply MoU, and clearance support. Do not make city operations depend on it in Phase 1.",
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
          Use Proven CBG Delivery.{" "}
          <span className="text-gradient-emerald">Add New Technology Deliberately.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          The Phase 1 job is to execute a stable wet-organics CBG node. Extension technologies should be evaluated only after the core line and counterparties are working.
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
