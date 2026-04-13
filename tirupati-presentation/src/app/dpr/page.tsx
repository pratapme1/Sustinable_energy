import type { Metadata } from "next";
import DPRViewer from "./DPRViewer";

export const metadata: Metadata = {
  title: "Detailed Project Report — Cero Hero CBG Plant, Tirupati",
  description:
    "Detailed Project Report for the Integrated Organic Waste-to-CBG Facility, Tirupati, Andhra Pradesh. Submitted to the Department of MAUD, Government of Andhra Pradesh.",
};

export default function DPRPage() {
  return <DPRViewer />;
}
