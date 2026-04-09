"use client";

import { motion } from "framer-motion";
import { Sprout, Droplets, Package } from "lucide-react";

export default function Slide14() {
  const outputs = [
    {
      icon: Sprout,
      accent: "emerald",
      title: "Solid Digestate -> Biofertiliser Route",
      items: [
        "50 TPD input can yield roughly 15-20 TPD solid digestate depending on feedstock mix and process design.",
        "Can move through FOM / LFOM / nutrient-product routes rather than being treated as a disposal problem.",
        "Planning screen: digestate monetization can add roughly ₹0.4-0.7 crore per year if local offtake is real.",
        "Best local fit is the Tirupati / Chittoor agriculture and dairy belt, not distant speculative markets.",
      ],
    },
    {
      icon: Droplets,
      accent: "emerald",
      title: "Liquid Digestate -> Fertigation / Treatment",
      items: [
        "Useful in fertigation and soil-conditioning routes when quality and logistics are managed correctly.",
        "Alternative route is on-site treatment and nutrient recovery, depending on project design and approvals.",
        "The key point: wet-organics CBG has a manageable nutrient-output chain if planned early.",
      ],
    },
    {
      icon: Package,
      accent: "slate",
      title: "Reject Inerts From Pre-Treatment",
      items: [
        "Plastic, glass, and metal are screened out before digestion.",
        "Wet-organics sourcing keeps residuals lower than mixed-waste systems.",
        "Residual handling is still required, but it remains a small operating line item rather than the core project risk.",
        "This is one reason the Phase 1 line should stay focused on segregated or controllable wet organics.",
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
          14. Output Streams
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Every Output Needs a{" "}
          <span className="text-gradient-emerald">Planned Outlet</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {outputs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 rounded-3xl flex flex-col gap-4 ${
              item.accent === "emerald"
                ? "bg-brand-emerald/5 border border-brand-emerald/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-emerald" />
              </div>
              <div className="text-base font-bold text-white leading-tight">{item.title}</div>
            </div>
            <ul className="space-y-1.5">
              {item.items.map((point, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-emerald mt-2 shrink-0" />
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          This is why wet-organics CBG should remain the{" "}
          <span className="text-brand-emerald font-semibold">Phase 1 core.</span>{" "}
          The outputs are locally usable and operationally manageable if the project is designed around them from day one.
        </p>
      </motion.div>
    </div>
  );
}
