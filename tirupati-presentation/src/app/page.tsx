"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideContainer from "@/components/SlideContainer";
import Navigation from "@/components/Navigation";
import GOVERNMENT_SLIDES from "@/components/slides/GovernmentDeck";

const SLIDES = GOVERNMENT_SLIDES;

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < SLIDES.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight") paginate(1);
    if (event.key === "ArrowLeft") paginate(-1);
  }, [paginate]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const SelectedSlide = SLIDES[currentSlide];

  return (
    <main className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-brand-dark bg-mesh">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_35%,transparent_65%,rgba(255,255,255,0.02))]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-brand-emerald/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-2rem] h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[18rem] w-[18rem] rounded-full bg-brand-gold/8 blur-[120px]" />

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideContainer key={currentSlide} direction={direction}>
            <SelectedSlide />
          </SlideContainer>
        </AnimatePresence>
      </div>

      <Navigation 
        currentSlide={currentSlide + 1} 
        totalSlides={SLIDES.length} 
        onPrev={() => paginate(-1)} 
        onNext={() => paginate(1)} 
      />
    </main>
  );
}
