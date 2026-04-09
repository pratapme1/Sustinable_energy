"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2, Factory, Truck, Users } from "lucide-react";

export default function MinisterSlide4() {
  const rows = [
    {
      icon: Factory,
      player: "EPC vendor",
      strength: "Builds plant hardware and provides process guarantees.",
      gap: "Does not originate counterparties, protect feedstock discipline, or create a government-facing audit layer.",
      highlight: false,
    },
    {
      icon: Truck,
      player: "Waste contractor",
      strength: "Can lift and move municipal waste.",
      gap: "Does not package a bankable CBG project, buyer route, or institutional reporting stack.",
      highlight: false,
    },
    {
      icon: Building2,
      player: "Large operator",
      strength: "Can build at scale and validates the market.",
      gap: "Does not automatically bring a Tirupati-specific civic model with citizen participation and city-level visibility.",
      highlight: false,
    },
    {
      icon: BadgeCheck,
      player: "Cero-led integrator",
      strength: "Packages feedstock counterparties, partner EPC, participation layer, and reporting in one project model.",
      gap: "We do not claim to manufacture digester technology ourselves. We integrate the right partners into a project the state can actually run and replicate.",
      highlight: true,
    },
  ];

  return (
    <div className="flex flex-col h-full justify-center space-y-7">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-[0.35em] uppercase"
        >
          04. Why Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Why Us.{" "}
          <span className="text-gradient-emerald">Why Not Someone Else.</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="p-4 rounded-[2rem] glass border-white/8"
      >
        <div className="hidden md:grid grid-cols-[0.9fr_1fr_1.25fr] gap-4 px-4 pb-3 text-xs uppercase tracking-[0.24em] text-slate-500 font-semibold">
          <div>Who</div>
          <div>What They Do Well</div>
          <div>What Is Missing For Tirupati</div>
        </div>

        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.player}
              className={`grid grid-cols-1 md:grid-cols-[0.9fr_1fr_1.25fr] gap-4 p-4 rounded-[1.6rem] ${
                row.highlight
                  ? "bg-brand-gold/6 border border-brand-gold/18"
                  : "bg-brand-dark/45 border border-white/7"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  row.highlight
                    ? "bg-brand-gold/10 border border-brand-gold/20"
                    : "bg-brand-emerald/10 border border-brand-emerald/20"
                }`}>
                  <row.icon className={`w-4 h-4 ${row.highlight ? "text-brand-gold" : "text-brand-emerald"}`} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold md:hidden mb-1">
                    Who
                  </div>
                  <div className={`text-base font-semibold ${row.highlight ? "text-brand-gold" : "text-white"}`}>
                    {row.player}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold md:hidden mb-1">
                  What They Do Well
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{row.strength}</p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold md:hidden mb-1">
                  What Is Missing For Tirupati
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{row.gap}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
        className="p-5 rounded-3xl bg-brand-emerald/6 border border-brand-emerald/16"
      >
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-brand-emerald" />
          <p className="text-base text-slate-200 font-light leading-relaxed">
            <span className="text-white font-semibold">Our difference is not plant manufacturing.</span>{" "}
            Our difference is that we package the exact ingredients ministers care about: counterparties, accountability, partner EPC, and a project model the state can actually showcase and replicate.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
