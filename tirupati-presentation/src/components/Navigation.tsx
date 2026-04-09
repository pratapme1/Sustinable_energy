"use client";

import { ChevronLeft, ChevronRight, Download, Landmark, Layers3 } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  variant: "minister" | "backup";
}

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext, variant }: NavigationProps) {
  const links = variant === "minister"
    ? [
        {
          href: "/backup",
          label: "Backup Slides",
          icon: Layers3,
        },
        {
          href: "/tirupati-project-report.pdf",
          label: "Project Report",
          icon: Download,
          download: "Tirupati-Project-Report.pdf",
        },
      ]
    : [
        {
          href: "/",
          label: "Minister Brief",
          icon: Landmark,
        },
        {
          href: "/tirupati-project-report.pdf",
          label: "Project Report",
          icon: Download,
          download: "Tirupati-Project-Report.pdf",
        },
      ];

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-50 bg-brand-dark/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-t border-white/5 md:border-none">
      <div className="flex gap-2 md:gap-4">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-2 md:p-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full disabled:opacity-30 hover:bg-brand-emerald/20 transition-all text-brand-emerald"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-2 md:p-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full disabled:opacity-30 hover:bg-brand-emerald/20 transition-all text-brand-emerald"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden sm:block text-slate-500 font-mono text-sm tracking-widest uppercase">
          Slide <span className="text-brand-emerald font-bold">{currentSlide.toString().padStart(2, '0')}</span> 
          <span className="mx-2">/</span> 
          {totalSlides.toString().padStart(2, '0')}
        </div>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2 bg-brand-emerald/16 border border-brand-emerald/30 rounded-full text-brand-emerald text-xs md:text-sm hover:bg-brand-emerald/24 font-semibold shadow-sm transition-all group"
            >
              <link.icon className="w-4 h-4 group-hover:translate-y-px transition-transform" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
