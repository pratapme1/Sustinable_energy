import type { Metadata } from "next";
import DeckShell from "@/components/DeckShell";
import MinisterSlide1 from "@/components/slides/minister/MinisterSlide1";
import MinisterSlide2 from "@/components/slides/minister/MinisterSlide2";
import MinisterSlide3 from "@/components/slides/minister/MinisterSlide3";
import MinisterSlide4 from "@/components/slides/minister/MinisterSlide4";
import MinisterSlide5 from "@/components/slides/minister/MinisterSlide5";
import MinisterSlide6 from "@/components/slides/minister/MinisterSlide6";
import MinisterSlide7 from "@/components/slides/minister/MinisterSlide7";
import MinisterSlide8 from "@/components/slides/minister/MinisterSlide8";

const MINISTER_SLIDES = [
  MinisterSlide1,
  MinisterSlide2,
  MinisterSlide3,
  MinisterSlide4,
  MinisterSlide5,
  MinisterSlide6,
  MinisterSlide7,
  MinisterSlide8,
];

export const metadata: Metadata = {
  title: "Tirupati Circular City | Minister Brief",
  description:
    "Eight-slide minister brief for Tirupati's first wet-organics-to-CBG node and Andhra government decision ask.",
};

export default function PresentationPage() {
  return <DeckShell slides={MINISTER_SLIDES} variant="minister" />;
}
