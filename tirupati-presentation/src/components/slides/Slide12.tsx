"use client";

import { motion } from "framer-motion";

export default function Slide12() {
  const years = [
    {
      year: "Year 1",
      accent: "red",
      status: "Plant under construction (commissioning Month 18)",
      revenue: "₹1.6 cr",
      opex: "₹3 cr",
      ebitda: "–₹1.4 cr",
      note: "Funded by IREDA working capital tranche. Expected. Planned.",
    },
    {
      year: "Year 2",
      accent: "emerald",
      status: "50 TPD plant running",
      revenue: "₹18 cr",
      opex: "₹5 cr",
      ebitda: "₹13 cr",
      note: "DSCR ~12× (debt service ₹0.9 cr vs EBITDA ₹13 cr — comfortably covered)",
    },
    {
      year: "Year 3",
      accent: "emerald",
      status: "100 TPD (Phase 2b) + platform revenue",
      revenue: "₹40 cr",
      opex: "₹8 cr",
      ebitda: "₹32 cr",
      note: "Payback: 3.5–4.5 years from plant commissioning",
    },
    {
      year: "Year 4",
      accent: "gold",
      status: "2–3 nodes",
      revenue: "₹80 cr",
      opex: "₹18 cr",
      ebitda: "₹62 cr",
      note: "Platform revenue compound growth",
    },
    {
      year: "Year 5",
      accent: "gold",
      status: "5 nodes",
      revenue: "₹217 cr",
      opex: "₹45 cr",
      ebitda: "₹172 cr",
      note: "Exit at 8× EBITDA = ₹720–1,040 crore EV",
    },
  ];

  const accentClasses: Record<string, string> = {
    red: "bg-red-500/5 border border-red-500/20",
    emerald: "bg-brand-emerald/5 border border-brand-emerald/20",
    gold: "bg-brand-gold/5 border border-brand-gold/20",
  };

  const ebitdaColor: Record<string, string> = {
    red: "text-red-400",
    emerald: "text-brand-emerald",
    gold: "text-brand-gold",
  };

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-emerald font-mono text-xs tracking-widest uppercase"
        >
          12. Financials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Honest Financials:{" "}
          <span className="text-gradient-emerald">Year 1 to Year 5</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl"
        >
          Year 1 is cash-negative. This is by design — the plant is under construction. The IREDA loan and MNRE grant fund the gap. Year 2 is when the machine turns on.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {years.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-5 rounded-3xl flex flex-col gap-3 ${accentClasses[item.accent]}`}
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{item.year}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{item.status}</p>
            <div className="space-y-1.5">
              {[
                { label: "Revenue", val: item.revenue },
                { label: "OPEX", val: item.opex },
              ].map((row, j) => (
                <div key={j} className="flex justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">{row.label}</span>
                  <span className="text-xs text-white font-semibold">{row.val}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-white/10 pt-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">EBITDA</span>
                <span className={`text-sm font-extrabold italic ${ebitdaColor[item.accent]}`}>{item.ebitda}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-light leading-relaxed">{item.note}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10 text-center"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed">
          <span className="text-white font-semibold">Exit at 8× EBITDA = ₹720–1,040 crore EV.</span>{" "}
          5 nodes. Year 5.
        </p>
      </motion.div>
    </div>
  );
}
