"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Leaf } from "lucide-react";

export default function Slide5() {
  const layers = [
    {
      icon: Shield,
      tag: "Layer 3 — CERO ID",
      accent: "gold",
      desc: "Portable, verified, privacy-first carbon identity. UPI-linked. Aadhaar-verified. Follows individuals across cities, careers, carbon markets.",
      revenue: "B2B ESG subscriptions | BRSR data service | Carbon marketplace commissions",
    },
    {
      icon: Smartphone,
      tag: "Layer 2 — CERO HERO APP",
      accent: "emerald",
      desc: "Gamified waste actions, community challenges, QR-scan credits. Merchant redemption network. WhatsApp notifications. React Native, Firebase, UPI.",
      revenue: "Platform fees | Corporate sponsorship | Grants (DST, AIM, TLC)",
    },
    {
      icon: Leaf,
      tag: "Layer 1 — CERO NODE",
      accent: "slate",
      desc: "Physical anaerobic digestion plant. 50–100 TPD food waste + cattle manure → CBG (SATAT) + digestate (FCO biofertiliser) + verified carbon data.",
      revenue: "CBG sales | Tipping fees | Digestate | VCS carbon credits",
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
          05. Architecture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          One Platform. Three Layers.{" "}
          <span className="text-gradient-emerald">Each Funds the Next.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-6 rounded-3xl flex items-center gap-6 ${
              layer.accent === "gold"
                ? "bg-brand-gold/5 border border-brand-gold/20"
                : layer.accent === "emerald"
                ? "bg-brand-emerald/5 border border-brand-emerald/20"
                : "glass border-brand-emerald/10"
            }`}
          >
            <div className="flex items-center gap-4 min-w-[180px]">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                layer.accent === "gold"
                  ? "bg-brand-gold/10 border border-brand-gold/20"
                  : "bg-brand-emerald/10 border border-brand-emerald/20"
              }`}>
                <layer.icon className={`w-5 h-5 ${layer.accent === "gold" ? "text-brand-gold" : "text-brand-emerald"}`} />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold leading-tight">
                {layer.tag}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-400 font-light leading-relaxed">{layer.desc}</p>
            </div>
            <div className="hidden md:block text-right min-w-[220px]">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Revenue</div>
              <p className={`text-xs font-light leading-relaxed ${layer.accent === "gold" ? "text-brand-gold" : "text-brand-emerald"}`}>{layer.revenue}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          More waste → more credits → more users → more waste.{" "}
          <span className="text-brand-emerald font-semibold">The flywheel is self-reinforcing. The physical plant makes every digital credit real.</span>
        </p>
      </motion.div>
    </div>
  );
}
