"use client";

import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext }: NavigationProps) {
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
        
        <a 
          href="/tirupati-project-report.pdf" 
          download="Tirupati-Waste-to-Energy-Project-Report.pdf"
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-xs md:text-sm hover:bg-brand-emerald/20 transition-all group"
        >
          <Download className="w-4 h-4 group-hover:translate-y-px transition-transform" />
          <span className="hidden sm:inline">Project Strategy Report</span>
          <span className="sm:hidden">Report</span>
        </a>
      </div>
    </div>
  );
}
