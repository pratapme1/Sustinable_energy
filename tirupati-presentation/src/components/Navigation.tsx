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
    <div className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-center z-50">
      <div className="flex gap-4">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full disabled:opacity-30 hover:bg-brand-emerald/20 transition-all text-brand-emerald"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full disabled:opacity-30 hover:bg-brand-emerald/20 transition-all text-brand-emerald"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          Slide <span className="text-brand-emerald font-bold">{currentSlide.toString().padStart(2, '0')}</span> 
          <span className="mx-2">/</span> 
          {totalSlides.toString().padStart(2, '0')}
        </div>
        
        <a 
          href="/tirupati-project-report.md" 
          download="Tirupati-Waste-to-Energy-Project-Report.md"
          className="flex items-center gap-2 px-6 py-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-sm hover:bg-brand-emerald/20 transition-all group"
        >
          <Download className="w-4 h-4 group-hover:translate-y-px transition-transform" />
          <span>Project Strategy Report</span>
        </a>
      </div>
    </div>
  );
}
