"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  type LucideIcon,
  Droplets,
  Factory,
  Fuel,
  Handshake,
  Landmark,
  Layers3,
  Leaf,
  MapPinned,
  Orbit,
  PackageCheck,
  Route,
  Scale,
  ScrollText,
  ShieldCheck,
  Sprout,
  TimerReset,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

type Accent = "emerald" | "gold" | "sky" | "rose";

const panelClass =
  "rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 md:p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.7)] backdrop-blur-sm";

const accentClassMap: Record<Accent, string> = {
  emerald:
    "border-brand-emerald/25 bg-brand-emerald/10 text-brand-emerald shadow-brand-emerald/10",
  gold: "border-brand-gold/25 bg-brand-gold/10 text-brand-gold shadow-brand-gold/10",
  sky: "border-sky-300/25 bg-sky-300/10 text-sky-200 shadow-sky-300/10",
  rose: "border-rose-300/25 bg-rose-300/10 text-rose-200 shadow-rose-300/10",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: "easeOut" as const },
});

function SlideShell({
  children,
  source,
}: {
  children: ReactNode;
  source: string;
}) {
  return (
    <div className="space-y-5 lg:space-y-6">
      {children}
      <SourceNote>{source}</SourceNote>
    </div>
  );
}

function Header({
  number,
  section,
  title,
  subtitle,
  chip,
}: {
  number: string;
  section: string;
  title: string;
  subtitle: string;
  chip?: string;
}) {
  return (
    <div className="space-y-4">
      <motion.div
        {...fadeUp(0)}
        className="flex flex-wrap items-center gap-3"
      >
        <span className="rounded-full border border-brand-emerald/25 bg-brand-emerald/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-emerald">
          {number}. {section}
        </span>
        {chip ? (
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-slate-300">
            {chip}
          </span>
        ) : null}
      </motion.div>

      <motion.div {...fadeUp(0.05)} className="space-y-3">
        <h1 className="max-w-6xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-[3.45rem] lg:text-[4.15rem]">
          {title}
        </h1>
        <p className="max-w-5xl text-sm leading-relaxed text-slate-300 md:text-[0.96rem]">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}

function Panel({
  icon: Icon,
  eyebrow,
  title,
  body,
  accent = "emerald",
  className,
  children,
}: {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  body?: string;
  accent?: Accent;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={clsx(panelClass, className)}>
      <div className="flex items-start gap-4">
        {Icon ? (
          <div
            className={clsx(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-lg",
              accentClassMap[accent]
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        ) : null}

        <div className="min-w-0 space-y-2">
          {eyebrow ? (
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              {eyebrow}
            </div>
          ) : null}
          <div className="text-lg font-medium leading-tight text-white">{title}</div>
          {body ? <p className="text-sm leading-relaxed text-slate-300">{body}</p> : null}
          {children}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
  body,
  accent = "emerald",
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  body: string;
  accent?: Accent;
}) {
  return (
    <div className={panelClass}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
            {value}
          </div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">
            {label}
          </div>
        </div>
        <div
          className={clsx(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border",
            accentClassMap[accent]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUp(0.3)}
      className="rounded-[1.5rem] border border-white/8 bg-black/20 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-slate-500"
    >
      Source basis: <span className="text-slate-400">{children}</span>
    </motion.div>
  );
}

function List({
  items,
  accent = "emerald",
}: {
  items: string[];
  accent?: Accent;
}) {
  const dotColor =
    accent === "gold"
      ? "bg-brand-gold"
      : accent === "sky"
        ? "bg-sky-300"
        : accent === "rose"
          ? "bg-rose-300"
          : "bg-brand-emerald";

  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
          <span className={clsx("mt-2 h-1.5 w-1.5 rounded-full", dotColor)} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function TimelineStep({
  phase,
  timing,
  title,
  body,
}: {
  phase: string;
  timing: string;
  title: string;
  body: string;
}) {
  return (
    <div className={clsx(panelClass, "relative overflow-hidden")}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] uppercase tracking-[0.24em] text-brand-emerald">
          {phase}
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
          {timing}
        </div>
      </div>
      <div className="mt-4 text-lg font-medium text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}

function Slide1() {
  const asks = [
    {
      label: "Project posture",
      value: "Government support brief",
      body: "Structured for approvals, land, site control, concession clarity, and inter-agency coordination instead of founder fundraising.",
    },
    {
      label: "Phase 1 scope",
      value: "50 TPD wet organics node",
      body: "Brownfield-led or parallel-stream project around Tirupati's source-controlled organics, expandable after feedstock and buyer routes are proven.",
    },
    {
      label: "Immediate request",
      value: "Land + approvals + alignment",
      body: "A clear site path, feedstock entitlement dialogue, and a fast, sequenced approvals workflow from state and city institutions.",
    },
  ];

  return (
    <SlideShell source="Tirupati project report V2, Tirupati pre-DPR decision pack, and Tirupati delivery/synthesis documents in /research and /research_codex.">
      <Header
        number="01"
        section="Andhra Government Brief"
        chip="Action-Oriented Version"
        title="Tirupati Waste-to-CBG Project for Andhra Pradesh"
        subtitle="A disciplined, approval-ready pathway to convert Tirupati's source-controlled wet organics into gas and fertilizer products, with the state enabling the land, concession, and approvals architecture required to make the project bankable."
      />

      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div {...fadeUp(0.12)} className={clsx(panelClass, "space-y-5")}>
          <div className="max-w-3xl text-lg leading-relaxed text-slate-200">
            Tirupati should not be presented as a speculative greenfield waste story.
            It is stronger as a <span className="text-white">proof-backed wet-organics project</span>
            {" "}that builds on existing city assets, bulk generator streams, and a tighter public-private execution structure.
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Brownfield-first",
              "50 TPD phase 1",
              "Source-controlled organics",
              "State coordination over hype",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {asks.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 text-base font-medium text-white">{item.value}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.18)} className="space-y-4">
          <Panel
            icon={Landmark}
            eyebrow="Why this version changed"
            title="This is no longer an investor deck."
            body="The deck now assumes the audience is Andhra Pradesh government and project-approval stakeholders. The emphasis is on project viability, land, permits, and delivery discipline."
            accent="sky"
          />
          <Panel
            icon={ShieldCheck}
            eyebrow="Core posture"
            title="Keep Phase 1 technically simple and politically executable."
            body="The immediate Andhra ask should stay anchored in Tirupati's wet-organics-to-CBG case. More experimental or broader mixed-waste pathways should be handled as separate pilot tracks."
            accent="gold"
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide2() {
  const metrics = [
    {
      icon: Droplets,
      value: "130 TPD",
      label: "Core organics baseline",
      body: "PIB's February 20, 2024 Tirupati release reports 115 TPD wet waste and 15 TPD food waste before contamination and collection losses.",
    },
    {
      icon: Building2,
      value: "27",
      label: "BWGs above 100 kg/day",
      body: "The city already has a visible bulk-generator base. That matters because bankable biomethanation depends on controlled organics, not only municipal averages.",
    },
    {
      icon: Users,
      value: "60",
      label: "BWGs at 50-100 kg/day",
      body: "This creates a meaningful pool for a parallel hospitality and institutional organics platform if municipal whitespace proves constrained.",
    },
    {
      icon: Layers3,
      value: "6 + 3",
      label: "Decentralized base",
      body: "Tirupati already operates six decentralized wet-waste facilities and three Bio Chest machines, showing the city is compatible with distributed organics handling.",
    },
    {
      icon: Factory,
      value: "50 TPD",
      label: "Thukivakam benchmark",
      body: "The city has already hosted a documented PPP biomethanation plant at Thukivakam, with gas and compost outputs and a six-acre site footprint.",
    },
    {
      icon: BadgeCheck,
      value: "1 + 1",
      label: "District CBG status",
      body: "Lok Sabha data as of December 16, 2025 shows Tirupati district with one functional CBG plant and one plant yet to start construction.",
    },
  ];

  return (
    <SlideShell source="PIB Tirupati release dated February 20, 2024; Tirupati project report V2 dated April 3, 2026; Lok Sabha reply answered December 18, 2025.">
      <Header
        number="02"
        section="City Baseline"
        chip="Proof-Backed City"
        title="Why Tirupati remains one of Andhra's strongest first urban CBG candidates"
        subtitle="The city is attractive not because it is empty, but because it already demonstrates the key ingredients: visible wet-organics volume, identified bulk generators, decentralized handling proof, and an existing biomethanation reference point."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((item, index) => (
          <motion.div key={item.label} {...fadeUp(0.08 + index * 0.04)}>
            <MetricCard {...item} accent={index % 3 === 1 ? "sky" : index % 3 === 2 ? "gold" : "emerald"} />
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.34)} className={clsx(panelClass, "flex flex-col gap-3 md:flex-row md:items-center md:justify-between")}>
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Working conclusion</div>
          <div className="mt-2 text-xl font-medium text-white">
            Tirupati is a <span className="text-brand-emerald">partnership and expansion city</span>, not a blank-sheet concession story.
          </div>
        </div>
        <div className="max-w-xl text-sm leading-relaxed text-slate-300">
          That distinction is what should shape the Andhra presentation. It lowers narrative risk and makes the approval ask more practical.
        </div>
      </motion.div>
    </SlideShell>
  );
}

function Slide3() {
  return (
    <SlideShell source="Tirupati project report V2, Tirupati implementation roadmap V1, and Tirupati research delivery deck basis.">
      <Header
        number="03"
        section="Problem Definition"
        chip="What Still Needs Solving"
        title="The question is not whether waste exists. The question is how much uncommitted, bankable organics remain."
        subtitle="Tirupati already has waste infrastructure and one known biomethanation benchmark. The real project challenge is to isolate the remaining whitespace and structure it without colliding with the incumbent asset."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div {...fadeUp(0.08)}>
          <Panel
            icon={BadgeCheck}
            eyebrow="Already proven"
            title="The city can collect, process, and monetize wet organics."
            body="The existence of the Thukivakam benchmark and decentralized wet-waste assets means Andhra does not need to prove the basic concept from zero."
            accent="emerald"
          />
        </motion.div>

        <motion.div {...fadeUp(0.14)}>
          <Panel
            icon={AlertTriangle}
            eyebrow="Still unresolved"
            title="Whitespace, concession boundaries, and buyer structure are the real decision variables."
            body="If remaining feedstock, entitlement, gas sales, and digestate movement are vague, then the project is still a concept. If those are locked, it becomes financeable."
            accent="rose"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List
                items={[
                  "How much wet organics are actually outside the current concession?",
                  "Can BWG and hospitality streams be contracted independently?",
                  "Is the buyer route stronger than generic SATAT dependence alone?",
                ]}
                accent="rose"
              />
            </div>
          </Panel>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Panel
            icon={Handshake}
            eyebrow="Why government matters"
            title="State and city coordination can remove months of avoidable friction."
            body="The biggest value Andhra can create is not abstract policy language. It is faster clarity on site, concession logic, APCPCB sequencing, and whether Tirupati should move as a brownfield-linked or parallel-stream node."
            accent="sky"
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide4() {
  const options = [
    {
      rank: "01",
      title: "Brownfield expansion or optimization at Thukivakam",
      body: "Best if concession whitespace exists. Lowest entitlement risk. Builds on the city's existing proof point and six-acre historical site logic.",
      accent: "emerald" as const,
    },
    {
      rank: "02",
      title: "Parallel bulk-generator and hospitality organics platform",
      body: "Best if the municipal core is constrained but BWGs, hotels, markets, and city-side institutions can still be contracted directly.",
      accent: "sky" as const,
    },
    {
      rank: "03",
      title: "Regional Tirupati cluster extension",
      body: "Best as a second step after Phase 1 stability, using Tirupati as the anchor for nearby dairy and organics adjacency.",
      accent: "gold" as const,
    },
  ];

  return (
    <SlideShell source="Tirupati project report V2 and Tirupati implementation roadmap V1.">
      <Header
        number="04"
        section="Recommended Entry Model"
        chip="Ranked Pathways"
        title="Do not lead with a new head-on municipal greenfield concession"
        subtitle="The research consistently points to one conclusion: Tirupati is materially stronger as a brownfield-linked or source-controlled parallel-stream project than as a blind competition play for the same municipal core asset."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {options.map((option, index) => (
          <motion.div key={option.rank} {...fadeUp(0.08 + index * 0.06)}>
            <div className={panelClass}>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-semibold tracking-[-0.08em] text-white">{option.rank}</div>
                <div
                  className={clsx(
                    "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]",
                    accentClassMap[option.accent]
                  )}
                >
                  Recommended
                </div>
              </div>
              <div className="mt-5 text-xl font-medium leading-tight text-white">{option.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{option.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.3)} className={clsx(panelClass, "border-rose-300/10 bg-rose-400/5")}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-rose-200/80">Not recommended for Phase 1</div>
        <div className="mt-2 text-lg font-medium text-white">A generic mixed-MSW, greenfield, all-problems-at-once pitch.</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          That version is weaker on entitlement, slower on permits, and easier to challenge. Andhra should back the more disciplined structure.
        </p>
      </motion.div>
    </SlideShell>
  );
}

function Slide5() {
  const feedstocks = [
    "Municipal residual wet organics, where concession space allows",
    "Hotels, markets, hostels, and hospitality kitchens",
    "Institutional and city-side campus kitchens, including TTD-linked establishments where feasible",
    "Selective manure or similar co-substrates only after contracts and handling routes are validated",
  ];

  const stages = [
    "Segregated wet-organics collection and preprocessing",
    "Mesophilic CSTR-based anaerobic digestion",
    "Biogas upgrading and compression",
    "Digestate conversion into FOM / LFOM / compost outputs",
  ];

  const outputs = [
    "CBG or biomethane sale through OMC, industrial, or transport-linked buyer routes",
    "Digestate and nutrient products for agriculture or distributor channels",
    "Processing-fee / tipping-fee revenue where the contract structure allows",
  ];

  return (
    <SlideShell source="Tirupati project report V2, SBM advisory on CBG plants, and Tirupati pre-DPR decision pack.">
      <Header
        number="05"
        section="Phase 1 Concept"
        chip="Execution Base Case"
        title="Start with a 50 TPD wet-organics node and size it for certainty, not for presentation optics"
        subtitle="The right first project is a controlled, source-specific biomethanation system that can prove feedstock discipline, buyer structure, and digestate movement before Andhra scales the model."
      />

      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp(0.08)} className="space-y-4">
          <Panel
            icon={Truck}
            eyebrow="Indicative feedstock envelope"
            title="Only source-controlled organics should enter Phase 1."
            accent="emerald"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List items={feedstocks} />
            </div>
          </Panel>
          <Panel
            icon={MapPinned}
            eyebrow="Siting logic"
            title="Brownfield is preferred. Greenfield should be a fallback."
            body="The historical Tirupati benchmark used a six-acre site. If a new node is required, the state should target a compatible, serviceable site of similar order rather than forcing a difficult urban-center location."
            accent="sky"
          />
        </motion.div>

        <motion.div {...fadeUp(0.14)} className={clsx(panelClass, "space-y-5")}>
          <div className="grid gap-3 md:grid-cols-[0.92fr_auto_1.08fr] md:items-start">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Process path</div>
              {stages.map((stage, index) => (
                <div key={stage} className="rounded-[1.25rem] border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-slate-300">
                  <span className="mr-2 font-mono text-brand-emerald">{`0${index + 1}`}</span>
                  {stage}
                </div>
              ))}
            </div>

            <div className="hidden h-full items-center justify-center md:flex">
              <ArrowRight className="mt-12 h-6 w-6 text-brand-emerald/60" />
            </div>

            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Outputs that matter</div>
              {outputs.map((output, index) => (
                <div key={output} className="rounded-[1.25rem] border border-white/8 bg-brand-emerald/5 p-4 text-sm leading-relaxed text-slate-300">
                  <span className="mr-2 font-mono text-brand-gold">{`0${index + 1}`}</span>
                  {output}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-slate-300">
            <span className="font-medium text-white">Working rule:</span> start with wet organics that can be contractually controlled and operationally measured. Mixed municipal waste should not define the first Andhra approval package.
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide6() {
  return (
    <SlideShell source="Tirupati project report V2, technology note in research_codex, Tesla Evercraft official site and ministry support materials dated April 5, 2026.">
      <Header
        number="06"
        section="Technology Posture"
        chip="Keep Pathways Separate"
        title="Use proven wet biomethanation for Tirupati now, and treat advanced mixed-waste conversion as a separate future track"
        subtitle="This is the cleanest way to stay technically credible with Andhra stakeholders. It avoids merging two different feedstock problems into one confused approval ask."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        <motion.div {...fadeUp(0.08)}>
          <Panel
            icon={Leaf}
            eyebrow="Immediate Tirupati pathway"
            title="Mesophilic CSTR wet AD with upgrading and compression"
            body="This is the recommended first technology because it is the closest fit to Tirupati's waste profile, the closest match to the city's existing proof point, and the best-documented Indian municipal case set."
            accent="emerald"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List
                items={[
                  "Best suited to segregated wet organics, markets, kitchens, and institutional food waste",
                  "Clearer operating and permit path for Andhra's first project packet",
                  "Avoids overloading Phase 1 with mixed-waste, incineration-style, or RDF-heavy debates",
                ]}
              />
            </div>
          </Panel>
        </motion.div>

        <motion.div {...fadeUp(0.16)}>
          <Panel
            icon={Orbit}
            eyebrow="Separate future residual-waste option"
            title="Tesla Evercraft CCC is relevant as a distinct mixed-waste pilot conversation, not as the Phase 1 Tirupati core"
            body="Tesla Evercraft's public materials describe a 260-360°C non-combustion catalytic pathway that targets mixed waste, RDF, plastics, rubber, and similar residuals, with SynCrude, process gas, and carbon-material outputs."
            accent="sky"
          >
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-[1.25rem] border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-slate-300">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Why it matters</div>
                <div className="mt-2 text-white">Useful for a future Andhra residual-waste or RDF strategy once wet organics are ring-fenced and locally validated.</div>
              </div>
              <div className="rounded-[1.25rem] border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-slate-300">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Why it is separate</div>
                <div className="mt-2 text-white">It would need its own pilot site, emissions dossier, performance validation, and approval sequence. It should not be used to blur the Tirupati wet-organics case.</div>
              </div>
            </div>
          </Panel>
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide7() {
  const values = [
    {
      icon: Building2,
      title: "Lower landfill burden",
      body: "Moves source-controlled organics away from landfill growth and unmanaged disposal pressure.",
      accent: "emerald" as const,
    },
    {
      icon: Zap,
      title: "Local gas and energy value",
      body: "Turns city organics into a domestic fuel stream instead of treating waste only as a disposal cost.",
      accent: "sky" as const,
    },
    {
      icon: ClipboardCheck,
      title: "Bulk-generator compliance route",
      body: "Creates a credible service pathway for hotels, campuses, institutions, and hospitality operators.",
      accent: "gold" as const,
    },
    {
      icon: Sprout,
      title: "Nutrient return to agriculture",
      body: "Supports fertilizer and soil-health value through digestate and organic manure products.",
      accent: "emerald" as const,
    },
    {
      icon: Users,
      title: "Skilled jobs and operations capability",
      body: "Creates a practical municipal-industrial operations model that Andhra can replicate in other ULBs.",
      accent: "sky" as const,
    },
    {
      icon: Scale,
      title: "State-level circular economy flagship",
      body: "Gives Andhra a visible urban waste-to-fuel project with cleaner public value than a generic waste disposal contract.",
      accent: "gold" as const,
    },
  ];

  return (
    <SlideShell source="Founder recommendation memo V2 government case, Tirupati project report V2, and India project document public-value synthesis.">
      <Header
        number="07"
        section="Public Value"
        chip="Why Government Should Care"
        title="This project works best when it is framed as a public-value infrastructure move, not as a founder story"
        subtitle="For Andhra stakeholders, the strongest case is lower landfill burden, methane reduction, BWG compliance, local fuel generation, agricultural nutrient recovery, and jobs."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {values.map((item, index) => (
          <motion.div key={item.title} {...fadeUp(0.08 + index * 0.04)}>
            <Panel
              icon={item.icon}
              title={item.title}
              body={item.body}
              accent={item.accent}
            />
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide8() {
  const economics = [
    {
      icon: Banknote,
      value: "Rs. 18-24 cr",
      label: "Prudent 2026 planning envelope",
      body: "The pre-DPR pack recommends budgeting this range for a new 50 TPD full-scope project unless vendor quotations prove lower.",
      accent: "emerald" as const,
    },
    {
      icon: Factory,
      value: "Rs. 14.57 cr",
      label: "Historical Tirupati benchmark",
      body: "This proves city-scale biomethanation has already been delivered in Tirupati at this order of magnitude, even though scope is not perfectly comparable.",
      accent: "sky" as const,
    },
    {
      icon: Fuel,
      value: "Rs. 2.27-4.02 cr",
      label: "Gas-only annual revenue screen",
      body: "At 50 TPD, 90% utilization, and a selling price band of Rs. 46-70/kg, gas sales alone can reach this range.",
      accent: "gold" as const,
    },
    {
      icon: Zap,
      value: "Rs. 1.19-1.30 cr",
      label: "Indicative annual electricity cost",
      body: "Electricity is one of the biggest real cost lines. Andhra support on siting and infrastructure meaningfully improves the viability case.",
      accent: "rose" as const,
    },
  ];

  return (
    <SlideShell source="Tirupati pre-DPR cost, vendor, and finance decision pack V1 dated April 3, 2026; Tirupati project report V2.">
      <Header
        number="08"
        section="Cost Envelope"
        chip="Conservative Economics"
        title="The project is viable, but only if Andhra helps create a cleaner bankability base"
        subtitle="The numbers support the project, but they also show why land, concession clarity, buyer structure, and realistic processing-fee support matter more than optimistic financial storytelling."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {economics.map((item, index) => (
          <motion.div key={item.label} {...fadeUp(0.08 + index * 0.04)}>
            <MetricCard {...item} />
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.26)} className="grid gap-4 xl:grid-cols-2">
        <Panel
          icon={PackageCheck}
          eyebrow="What improves the case"
          title="Land support, brownfield reuse, and municipal processing-fee structure"
          body="The gross revenue screen improves materially when the project has a real processing-fee route and does not have to fight for land or basic concession clarity."
          accent="emerald"
        />
        <Panel
          icon={TimerReset}
          eyebrow="What weakens the case"
          title="Blind reliance on central subsidy timing"
          body="The weakest version of the model is one that assumes central assistance is immediately available before Phase II formally reopens."
          accent="rose"
        />
      </motion.div>
    </SlideShell>
  );
}

function Slide9() {
  const policies = [
    {
      icon: ScrollText,
      title: "MNRE CFA is not a safe base-case assumption today",
      body: "The BioUrja portal still lists CFA rates, but new applications closed on December 31, 2025 and further submissions were stopped until National Bioenergy Programme Phase II approval as of April 3, 2026.",
      accent: "rose" as const,
    },
    {
      icon: Landmark,
      title: "VGF is more realistic in a municipal PPP or city-backed route",
      body: "The advisory still supports viability-gap logic of roughly 25-30% in the PPP context, which is one reason the Andhra presentation should be government-facing.",
      accent: "emerald" as const,
    },
    {
      icon: Sprout,
      title: "Organic-fertilizer assistance also needs fresh confirmation",
      body: "The MDA references in the research set are tied to FY 2023-24 through FY 2025-26 and should not be treated as automatically live without current confirmation.",
      accent: "gold" as const,
    },
    {
      icon: Banknote,
      title: "Debt stays available if the project packet is real",
      body: "IREDA and priority-sector lending signals remain positive, but lenders will still require land, feedstock, permits path, offtake, and a DPR-quality package.",
      accent: "sky" as const,
    },
  ];

  return (
    <SlideShell source="Policy and permitting matrix V1 and Tirupati pre-DPR cost and finance decision pack V1, both current as of April 3, 2026.">
      <Header
        number="09"
        section="Policy Reality"
        chip="Dates Matter"
        title="Andhra should support the project as if subsidy timing is uncertain, because it currently is"
        subtitle="This makes the state role even more important. A credible land path, site approvals, and PPP structure are worth more right now than assuming central subsidy cash will arrive on time."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {policies.map((item, index) => (
          <motion.div key={item.title} {...fadeUp(0.08 + index * 0.05)}>
            <Panel
              icon={item.icon}
              title={item.title}
              body={item.body}
              accent={item.accent}
            />
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide10() {
  const steps = [
    {
      phase: "Step 1",
      timing: "Month 0-2",
      title: "Concession and feedstock entitlement",
      body: "Confirm whether Tirupati is a brownfield expansion, optimization, or parallel-stream opportunity before the project is publicly over-shaped.",
    },
    {
      phase: "Step 2",
      timing: "Month 1-3",
      title: "Land title, lease, and local siting",
      body: "Freeze site control early. Without land or a clear brownfield path, the project remains presentation-grade only.",
    },
    {
      phase: "Step 3",
      timing: "Month 2-5",
      title: "APPCB and local approvals pathway",
      body: "Consent to Establish, building and fire approvals, and process-specific environmental compliance should be treated as a workstream, not as cleanup at the end.",
    },
    {
      phase: "Step 4",
      timing: "Month 3-6",
      title: "Buyer, PESO, BIS, and fertilizer route",
      body: "Gas quality, compression, storage, buyer acceptance, and digestate product movement all have to be structured before financial close.",
    },
  ];

  return (
    <SlideShell source="Policy and permitting matrix V1, implementation roadmap V1, and Tirupati project report V2.">
      <Header
        number="10"
        section="Approvals Path"
        chip="Critical Path"
        title="Land, waste entitlement, and buyer route must be sequenced together"
        subtitle="Andhra can materially reduce execution time by aligning the project around a clear approvals stack instead of letting each workstream wait on the others."
      />

      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <motion.div {...fadeUp(0.08)} className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <TimelineStep key={step.title} {...step} />
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="space-y-4">
          <Panel
            icon={ShieldCheck}
            eyebrow="Mandatory compliance stack"
            title="The minimum plant-level checklist is already known"
            accent="sky"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List
                items={[
                  "Municipal concession / BWG contracts / feedstock agreements",
                  "Land title or lease, land-use compatibility, and local building approvals",
                  "Consent to Establish and Consent to Operate from APPCB",
                  "PESO handling requirements and BIS IS 16087 gas-quality compliance where applicable",
                  "FOM / LFOM quality and packaging route under fertilizer rules",
                ]}
                accent="sky"
              />
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-brand-gold/15 bg-brand-gold/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">Working rule</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Waste, land, and buyer route must close before financing. If even one of those three is weak, the project is not yet a financeable plant.
              </p>
            </div>
          </Panel>
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide11() {
  const support = [
    {
      icon: Landmark,
      title: "Nominate a nodal department and a district-level lead",
      body: "One accountable coordination point is the fastest way to prevent concession, land, and approvals drift.",
      accent: "emerald" as const,
    },
    {
      icon: MapPinned,
      title: "Confirm brownfield expansion feasibility or identify a compatible site",
      body: "The project needs a practical site decision early, whether that means Thukivakam-linked expansion or a fallback land path.",
      accent: "sky" as const,
    },
    {
      icon: Building2,
      title: "Facilitate TMC, TTD, and BWG alignment",
      body: "The state can unlock waste entitlement faster than a founder or EPC party acting alone.",
      accent: "gold" as const,
    },
    {
      icon: ScrollText,
      title: "Enable a pre-consultation lane with APPCB and local authorities",
      body: "Fast early clarity on siting, odour, effluent, and compliance expectations reduces redesign and delay.",
      accent: "emerald" as const,
    },
    {
      icon: Banknote,
      title: "Evaluate PPP, VGF, and land-lease support",
      body: "Where the state can support the project, it should do so through project-bankability tools rather than vague encouragement.",
      accent: "sky" as const,
    },
    {
      icon: Fuel,
      title: "Open buyer and lender dialogue",
      body: "An Andhra-convened working session with OMC, CGD, and lender stakeholders would materially strengthen the first DPR cycle.",
      accent: "gold" as const,
    },
  ];

  return (
    <SlideShell source="Tirupati pre-DPR contact sequence, policy/permitting matrix, and Tirupati implementation roadmap.">
      <Header
        number="11"
        section="Government Ask"
        chip="What We Need From Andhra"
        title="The requested support is specific: site clarity, waste alignment, permit sequencing, and project-bankability help"
        subtitle="This is the part of the deck that should convert Andhra's interest into an actionable support mandate."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {support.map((item, index) => (
          <motion.div key={item.title} {...fadeUp(0.08 + index * 0.04)}>
            <Panel
              icon={item.icon}
              title={item.title}
              body={item.body}
              accent={item.accent}
            />
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.32)} className={clsx(panelClass, "border-brand-gold/15 bg-brand-gold/5")}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">State-level framing</div>
        <div className="mt-2 text-lg font-medium text-white">
          Tirupati can be positioned as a flagship within Andhra&apos;s broader urban CBG build-out, not as an isolated one-off experiment.
        </div>
      </motion.div>
    </SlideShell>
  );
}

function Slide12() {
  const phases = [
    {
      phase: "Phase 0",
      timing: "Months 0-3",
      title: "Current-asset diligence and structure decision",
      body: "Resolve whether the project moves as brownfield expansion, optimization, or a parallel bulk-generator platform.",
    },
    {
      phase: "Phase 1",
      timing: "Months 3-6",
      title: "Feedstock contracts, DPR, site control, and approvals package",
      body: "Freeze real waste streams, the site path, buyer route, digestate logic, and technology envelope before cost lock.",
    },
    {
      phase: "Phase 2",
      timing: "Months 7-10",
      title: "Financial close and work award",
      body: "Bring in lender, PPP, or state-support instruments only after the core project packet is internally coherent.",
    },
    {
      phase: "Phase 3",
      timing: "Months 11-15",
      title: "Construction, commissioning, and ramp-up",
      body: "The SBM advisory's broader project schedule points to mechanical commissioning around month 15 for a full project once structure is fixed.",
    },
  ];

  return (
    <SlideShell source="Tirupati implementation roadmap V1 and official SBM advisory schedule references.">
      <Header
        number="12"
        section="Execution Roadmap"
        chip="12-15 Month Build Logic"
        title="The first project can move quickly, but only after the structure decision is made correctly"
        subtitle="The timeline should be presented as disciplined and credible: front-load diligence, freeze the project packet, and then move into financing and construction."
      />

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...fadeUp(0.08)} className="grid gap-4 md:grid-cols-2">
          {phases.map((phase) => (
            <TimelineStep key={phase.title} {...phase} />
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="space-y-4">
          <Panel
            icon={ClipboardCheck}
            eyebrow="Decision gates that cannot be skipped"
            title="Four questions decide whether Tirupati is truly financeable"
            accent="gold"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List
                items={[
                  "Is Tirupati a partnership city or a competition city?",
                  "Is there enough uncommitted wet-organic feedstock beyond headline city numbers?",
                  "Is there a buyer path beyond generic SATAT dependence?",
                  "Is digestate movement workable from day one?",
                ]}
                accent="gold"
              />
            </div>
          </Panel>
          <Panel
            icon={Wrench}
            eyebrow="Scaling logic"
            title="Do not scale before the operating playbook is real"
            body="A successful Phase 1 is enough to earn the right to replicate. Andhra does not need to promise a statewide rollout before Tirupati is stabilized."
            accent="emerald"
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide13() {
  const columns = [
    {
      title: "Public-side enablers",
      accent: "emerald" as const,
      items: [
        "Andhra nodal agency / state coordination lead",
        "Tirupati Municipal Corporation",
        "District administration and land authorities",
        "APPCB and local approval chain",
      ],
    },
    {
      title: "Project delivery stack",
      accent: "sky" as const,
      items: [
        "Concession / SPV / project-development structure",
        "EPC plus O&M shortlist with guaranteed performance",
        "DPR and cost model",
        "Commercial operator for BWG and institutional streams",
      ],
    },
    {
      title: "Market-side anchors",
      accent: "gold" as const,
      items: [
        "OMC, industrial, or transport-linked gas buyers",
        "Bulk generators and hospitality waste suppliers",
        "Fertilizer or digestate off-takers",
        "Lenders once the project packet is complete",
      ],
    },
  ];

  return (
    <SlideShell source="Tirupati pre-DPR contact sequence and implementation roadmap workstream breakdown.">
      <Header
        number="13"
        section="Partnership Map"
        chip="Who Must Move Together"
        title="Government is the convener. The project becomes bankable when public-side, delivery-side, and market-side roles lock together."
        subtitle="This is the real operating map behind the presentation. It is also the simplest way to explain why a single-window approach would materially help the project."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {columns.map((column, index) => (
          <motion.div key={column.title} {...fadeUp(0.08 + index * 0.06)}>
            <div className={panelClass}>
              <div
                className={clsx(
                  "inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]",
                  accentClassMap[column.accent]
                )}
              >
                {column.title}
              </div>
              <div className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide14() {
  const risks = [
    {
      title: "Concession overlap",
      risk: "The project can be weakened immediately if it assumes municipal waste access that is already tied up.",
      mitigation: "Do asset and concession diligence first. Make the structure decision before sizing the plant.",
    },
    {
      title: "Feedstock overstatement",
      risk: "Headline city tonnage is not the same as contractable, source-controlled wet organics.",
      mitigation: "Size Phase 1 only after BWG and municipal whitespace are validated.",
    },
    {
      title: "Weak buyer route",
      risk: "Waste availability alone does not create a bankable project.",
      mitigation: "Lock buyer pathway during DPR, not after commissioning.",
    },
    {
      title: "Digestate underperformance",
      risk: "Margin resilience weakens if nutrient products do not move.",
      mitigation: "Validate distributor and agriculture routes before EPC freeze.",
    },
    {
      title: "Subsidy timing risk",
      risk: "Central assistance timing may lag project needs.",
      mitigation: "Underwrite the project without assuming immediate subsidy availability.",
    },
    {
      title: "Overbuilding the first node",
      risk: "A politically attractive oversized plan can become operationally fragile.",
      mitigation: "Start with a disciplined 50 TPD base case and earn the right to scale.",
    },
  ];

  return (
    <SlideShell source="Tirupati project report V2, implementation roadmap V1, and policy/permitting matrix V1.">
      <Header
        number="14"
        section="Risk Management"
        chip="Why Discipline Matters"
        title="The strongest Andhra version of this project is the one that openly acknowledges its risks and shows the control plan"
        subtitle="A government audience will trust a realistic risk slide more than a polished certainty slide. The mitigations already exist in the research; they just need to be foregrounded."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {risks.map((item, index) => (
          <motion.div key={item.title} {...fadeUp(0.08 + index * 0.04)}>
            <div className={clsx(panelClass, "border-rose-300/10")}>
              <div className="text-[11px] uppercase tracking-[0.24em] text-rose-200/80">{item.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.risk}</p>
              <div className="mt-4 rounded-[1.25rem] border border-brand-emerald/15 bg-brand-emerald/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.24em] text-brand-emerald">Mitigation</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.mitigation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide15() {
  return (
    <SlideShell source="Tirupati project report V2, Andhra policy signals in research, and Tesla Evercraft site / ministry materials dated April 5, 2026.">
      <Header
        number="15"
        section="Andhra Scale Logic"
        chip="Tirupati First, Then Broader Pathways"
        title="Tirupati can be Andhra's urban wet-organics flagship, with residual mixed-waste pilots evaluated separately"
        subtitle="This is the cleanest long-term state narrative: one disciplined Tirupati CBG anchor for wet organics, then separate pilots for harder residual streams where Andhra wants deeper innovation."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        <motion.div {...fadeUp(0.08)}>
          <Panel
            icon={Route}
            eyebrow="Replication logic"
            title="What Andhra can scale after Tirupati"
            body="Once Tirupati proves the operating model, the same discipline can be applied to tourism-heavy cities, campus clusters, institutional zones, and ULBs with strong source-controlled organics."
            accent="emerald"
          >
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Temple and pilgrimage corridors",
                "Municipality + hospitality clusters",
                "Campus and institutional zones",
                "Urban nodes with dairy adjacency",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </Panel>
        </motion.div>

        <motion.div {...fadeUp(0.16)}>
          <Panel
            icon={Orbit}
            eyebrow="Separate future pilot track"
            title="Where Tesla Evercraft may fit in Andhra's wider waste strategy"
            body="Tesla Evercraft's public materials position the company as a mixed-waste catalytic technology and project-financing partner for residual or RDF-style streams. That may become relevant to Andhra later, but only as a distinct pilot with its own validation and approvals path."
            accent="sky"
          >
            <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4">
              <List
                items={[
                  "Keep wet organics and mixed residuals as separate project categories",
                  "Do not substitute a residual-waste pilot for Tirupati's immediate wet-organics CBG ask",
                  "Use a future mixed-waste pilot only after Andhra decides it wants a separate innovation track",
                ]}
                accent="sky"
              />
            </div>
          </Panel>
        </motion.div>
      </div>
    </SlideShell>
  );
}

function Slide16() {
  const nextSteps = [
    "Nominate the Andhra and Tirupati coordination leads",
    "Approve brownfield/site and concession diligence",
    "Convene TMC, TTD, APPCB, buyer, and lender pre-DPR session",
    "Decide whether Tirupati proceeds as brownfield-linked or parallel-stream Phase 1",
  ];

  return (
    <SlideShell source="Synthesis across Tirupati delivery documents, implementation roadmap, and pre-DPR decision pack.">
      <Header
        number="16"
        section="Immediate Decision"
        chip="Next 30 Days"
        title="If Andhra makes four decisions now, Tirupati can move from concept to pre-DPR"
        subtitle="The ask at the close of the meeting should be procedural and concrete. This is what turns a presentation into a live project workflow."
      />

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...fadeUp(0.08)} className={clsx(panelClass, "space-y-5 border-brand-emerald/15 bg-brand-emerald/5")}>
          <div className="inline-flex rounded-full border border-brand-emerald/25 bg-brand-emerald/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-brand-emerald">
            Requested outcome from this presentation
          </div>
          <div className="text-2xl font-medium leading-tight text-white md:text-3xl">
            Authorize a <span className="text-brand-emerald">joint working process</span> for site, feedstock, approvals, and DPR preparation.
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Tirupati does not need a broad political announcement first. It needs a working structure, a land path, and a coordinated pre-DPR cycle.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="grid gap-3">
          {nextSteps.map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{`Action ${index + 1}`}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-200">{step}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}

const GOVERNMENT_SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
];

export default GOVERNMENT_SLIDES;
