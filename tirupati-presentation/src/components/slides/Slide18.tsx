"use client";

import { motion } from "framer-motion";
import { Users, FileSignature, Landmark, Smartphone, Wrench, MapPin } from "lucide-react";

export default function Slide18() {
  const formula = [
    {
      icon: Users,
      number: "01",
      title: "Anchor City Type",
      body: "Pilgrim city, campus, ULB cluster, or district organics node. The common denominator is concentrated wet waste with identifiable counterparties.",
    },
    {
      icon: FileSignature,
      number: "02",
      title: "Counterparty Pack",
      body: "TMC, BWGs, hospitality, temple-linked kitchens, and local organics partners. Replication works only when the waste is contractable.",
    },
    {
      icon: Landmark,
      number: "03",
      title: "Approvals Bundle",
      body: "Land path, APPCB/local approvals, buyer route, and digestate outlet are packaged together instead of chased one by one.",
    },
    {
      icon: Smartphone,
      number: "04",
      title: "Same Platform Layer",
      body: "The app and reporting layer can be reused across cities. That is the part that scales faster than plant construction.",
    },
    {
      icon: Wrench,
      number: "05",
      title: "Choose The Next Physical Route",
      body: "Second CBG node, institutional micro-node, or a separate residual-waste pilot once the first node is stable.",
    },
  ];

  const pipeline = [
    {
      icon: MapPin,
      tag: "Months 0–24",
      title: "Tirupati First Node",
      body: "Government-backed approvals, counterparty alignment, and first 50 TPD wet-organics CBG delivery.",
    },
    {
      icon: MapPin,
      tag: "Months 18–30",
      title: "IIT Tirupati / Institutional Node",
      body: "Campus or institutional-scale deployment using the same reporting and participation model.",
    },
    {
      icon: MapPin,
      tag: "Months 24–42",
      title: "Second Pilgrimage / AP Urban Node",
      body: "Replicate the Tirupati playbook into another Andhra node once the first operating package is proven.",
    },
    {
      icon: MapPin,
      tag: "Parallel Study Track",
      title: "Residual-Waste Feasibility",
      body: "Evaluate whether a separate Tesla Evercraft CCC pilot fits the district after Phase 1 wet-organics execution is stable.",
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
          18. Andhra Rollout Logic
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Same Playbook.{" "}
          <span className="text-gradient-emerald">Different Andhra Nodes.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {formula.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 glass rounded-3xl border-brand-emerald/10 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                <step.icon className="w-4 h-4 text-brand-emerald" />
              </div>
              <span className="text-xl font-extrabold text-white italic opacity-20">{step.number}</span>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{step.title}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {pipeline.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 bg-brand-emerald/5 border border-brand-emerald/20 rounded-3xl flex flex-col gap-2"
          >
            <div className="text-xs text-brand-emerald font-mono tracking-widest uppercase">{node.tag}</div>
            <div className="text-xs text-white font-bold">{node.title}</div>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{node.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 glass rounded-3xl border-brand-emerald/10"
      >
        <p className="text-sm text-slate-400 font-light leading-relaxed text-center">
          Every new node can reuse the same contracting, dashboard, and approvals playbook.{" "}
          <span className="text-brand-emerald font-semibold">Public support accelerates the playbook, but each node still needs its own bankable feedstock, site, and buyer logic.</span>
        </p>
      </motion.div>
    </div>
  );
}
