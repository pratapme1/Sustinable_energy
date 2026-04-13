"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DPR_META, DPR_SECTIONS } from "@/data/dpr-content";
import { ArrowLeft, Menu, X, FileText } from "lucide-react";
import Link from "next/link";

export default function DPRViewer() {
  const [activeId, setActiveId] = useState<string>(DPR_SECTIONS[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    DPR_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-brand-dark text-slate-200">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-white/8 bg-[#080b0f]/90 backdrop-blur-md px-4 md:px-8 py-4 flex items-center justify-between gap-4 z-40">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-brand-emerald hover:bg-brand-emerald/10 transition-all flex-shrink-0"
            aria-label="Toggle table of contents"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <FileText className="w-5 h-5 text-brand-emerald flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono truncate">
              {DPR_META.ref} · {DPR_META.revision}
            </p>
            <h1 className="text-sm md:text-base font-bold text-white leading-tight truncate">
              {DPR_META.title} — {DPR_META.company}
            </h1>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-brand-emerald/10 border border-brand-emerald/30 rounded-full text-brand-emerald text-xs font-semibold hover:bg-brand-emerald/20 transition-all flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back to Presentation</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden absolute inset-0 bg-black/60 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar TOC */}
        <aside
          className={`
            absolute md:relative z-30 md:z-auto
            h-full md:h-auto
            w-72 md:w-64 flex-shrink-0
            flex flex-col
            bg-[#080b0f] md:bg-[#06090d]
            border-r border-white/8
            transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="px-4 py-5 border-b border-white/8">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Table of Contents</p>
            <p className="text-xs text-slate-600 mt-1">{DPR_SECTIONS.length} sections</p>
          </div>
          <nav className="flex-1 overflow-y-auto py-3 scrollbar-thin">
            {DPR_SECTIONS.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  w-full text-left px-4 py-2.5 text-xs leading-snug transition-all
                  flex items-start gap-2.5 group
                  ${activeId === section.id
                    ? "text-brand-emerald bg-brand-emerald/8 border-r-2 border-brand-emerald"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/4"
                  }
                `}
              >
                <span className={`font-mono text-[10px] mt-0.5 flex-shrink-0 ${activeId === section.id ? "text-brand-emerald" : "text-slate-700 group-hover:text-slate-600"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{section.title}</span>
              </button>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-white/8">
            <p className="text-[10px] text-slate-700 leading-relaxed">
              {DPR_META.submittedTo}
              <br />{DPR_META.date}
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {/* DPR Cover */}
          <div className="bg-gradient-to-b from-[#06090d] to-brand-dark border-b border-white/8 px-6 md:px-12 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-brand-emerald uppercase tracking-widest border border-brand-emerald/30 px-3 py-1 rounded-full">
                  {DPR_META.ref}
                </span>
                <span className="text-xs font-mono text-slate-600">{DPR_META.revision}</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
                {DPR_META.title}
              </h1>
              <p className="text-lg md:text-xl text-brand-emerald font-semibold mb-6">
                {DPR_META.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Proponent", DPR_META.company],
                  ["Location", DPR_META.location],
                  ["Submitted To", DPR_META.submittedTo],
                  ["Date", DPR_META.date],
                  ["Phase 1 Capacity", DPR_META.phase1 + " Organic Wet Waste Input"],
                  ["Phase 2 Capacity", DPR_META.phase2 + " Organic Wet Waste Input"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-white/4 border border-white/8 rounded-lg px-4 py-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-600 font-mono mb-1">{label}</p>
                    <p className="text-slate-200 font-medium leading-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-10 space-y-16">
            {DPR_SECTIONS.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="scroll-mt-6"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/8">
                  <span className="text-xs font-mono text-slate-700">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="prose-dpr">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-xl font-bold text-white mt-8 mb-3">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg font-semibold text-brand-emerald mt-6 mb-2">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-semibold text-slate-300 mt-4 mb-2">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-sm font-semibold text-slate-400 mt-3 mb-1 uppercase tracking-wide">{children}</h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-slate-400 text-sm leading-relaxed mb-3">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="space-y-1.5 mb-4 ml-2">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="space-y-1.5 mb-4 ml-4 list-decimal text-slate-400 text-sm">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-emerald/60 flex-shrink-0" />
                          <span>{children}</span>
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-slate-200 font-semibold">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="text-slate-400 italic">{children}</em>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-brand-emerald/40 pl-4 my-4 text-slate-500 italic text-sm">
                          {children}
                        </blockquote>
                      ),
                      code: ({ children, className }) => {
                        const isBlock = className?.includes("language-");
                        return isBlock ? (
                          <code className="block bg-black/40 border border-white/8 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto mb-4 whitespace-pre">
                            {children}
                          </code>
                        ) : (
                          <code className="bg-black/40 text-brand-emerald text-xs font-mono px-1.5 py-0.5 rounded">
                            {children}
                          </code>
                        );
                      },
                      table: ({ children }) => (
                        <div className="overflow-x-auto mb-6 rounded-lg border border-white/10">
                          <table className="w-full text-xs">{children}</table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-brand-emerald/10 border-b border-brand-emerald/20">
                          {children}
                        </thead>
                      ),
                      th: ({ children }) => (
                        <th className="px-4 py-3 text-left text-brand-emerald font-semibold uppercase tracking-wide text-[10px]">
                          {children}
                        </th>
                      ),
                      tbody: ({ children }) => (
                        <tbody className="divide-y divide-white/5">{children}</tbody>
                      ),
                      tr: ({ children }) => (
                        <tr className="hover:bg-white/3 transition-colors">{children}</tr>
                      ),
                      td: ({ children }) => (
                        <td className="px-4 py-3 text-slate-400 text-xs leading-relaxed">{children}</td>
                      ),
                      hr: () => (
                        <hr className="border-white/8 my-6" />
                      ),
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              </section>
            ))}

            <div className="pb-12 text-center">
              <p className="text-xs text-slate-700 font-mono uppercase tracking-widest">
                End of Document · {DPR_META.ref} · {DPR_META.revision}
              </p>
              <p className="text-xs text-slate-800 mt-1">{DPR_META.company} · Confidential</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
