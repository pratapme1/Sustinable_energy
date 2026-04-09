"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import SlideContainer from "@/components/SlideContainer";
import Navigation from "@/components/Navigation";

interface DeckShellProps {
  slides: ComponentType[];
  variant: "minister" | "backup";
}

export default function DeckShell({ slides, variant }: DeckShellProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide, slides.length]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight") paginate(1);
    if (event.key === "ArrowLeft") paginate(-1);
  }, [paginate]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const SelectedSlide = slides[currentSlide];

  return (
    <main className="relative h-[100dvh] w-full flex flex-col bg-brand-dark bg-mesh overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(6,78,59,0.28),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideContainer key={currentSlide} direction={direction}>
            <SelectedSlide />
          </SlideContainer>
        </AnimatePresence>
      </div>

      <Navigation
        currentSlide={currentSlide + 1}
        totalSlides={slides.length}
        onPrev={() => paginate(-1)}
        onNext={() => paginate(1)}
        variant={variant}
      />
    </main>
  );
}
