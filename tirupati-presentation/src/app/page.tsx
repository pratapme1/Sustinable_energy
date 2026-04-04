"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideContainer from "@/components/SlideContainer";
import Navigation from "@/components/Navigation";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";
import Slide7 from "@/components/slides/Slide7";
import Slide8 from "@/components/slides/Slide8";
import Slide9 from "@/components/slides/Slide9";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";

const SLIDES = [
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17
];

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
    <main className="relative h-[100dvh] w-full flex flex-col bg-brand-dark bg-mesh overflow-hidden">
      {/* Background Decorative Blobs */}
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
        totalSlides={SLIDES.length} 
        onPrev={() => paginate(-1)} 
        onNext={() => paginate(1)} 
      />
    </main>
  );
}
