"use client";

import { motion } from "framer-motion";
import { Sprout, Droplets, Package } from "lucide-react";

export default function Slide14() {
  const outputs = [
    {
      icon: Sprout,
      accent: "emerald",
      title: "Solid Digestate → FCO-Certified Biofertiliser",
      items: [
        "100 TPD input → ~30–40 TPD solid digestate output",
        "FCO-certified organic fertiliser (Ministry of Agriculture, India)",
        "February 2025: new FCO category added specifically for 'organic carbon enhancers from CBG plants'",
        "Price: ₹3,000–5,000/tonne → ₹4–7 crore/year for 100 TPD plant",
        "Customer: Chittoor district dairy farmers — already buy urea at ₹12,000–18,000/tonne",
        "Digestate replaces urea at fraction of the cost — farmers actively want it",
      ],
    },
    {
      icon: Droplets,
      accent: "emerald",
      title: "Liquid Digestate → Fertigation",
      items: [
        "High in N, P, K and micronutrients",
        "Primary use: drip/sprinkler irrigation on Chittoor farmland (free supply to farmers)",
        "Option B: ETP on site → ammonia stripping → ammonium sulphate fertiliser + discharge-quality effluent",
        "Zero disposal cost either route",
      ],
    },
    {
      icon: Package,
      accent: "slate",
      title: "Reject Inerts from Pre-Treatment",
      items: [
        "Plastic, glass, metal screened out at trommel + shredder inlet",
        "Volume: <5% of input by weight (well-segregated organic waste has minimal inerts)",
        "Disposal: construction aggregate or municipal sanitary landfill",
        "Cost: ₹500–1,000/tonne — minor OPEX line item",
        "No fly ash, no dioxins, no toxic residue. Anaerobic digestion = zero combustion emissions.",
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
          Every Output Is a Revenue Stream.{" "}
          <span className="text-gradient-emerald">Nothing Goes to Waste.</span>
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
          Compared to incineration (fly ash, dioxins, air pollution) or landfill (methane leakage, leachate),{" "}
          <span className="text-brand-emerald font-semibold">AD is the cleanest waste processing technology.</span>{" "}
          The residuals are a fertiliser supply chain, not a waste problem.
        </p>
      </motion.div>
    </div>
  );
}
