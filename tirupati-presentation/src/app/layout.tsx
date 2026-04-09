import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tirupati Waste-to-Fuel | Government Support Deck",
  description:
    "Government-facing deck for the Tirupati wet-organics-to-CBG platform, retaining the Cero platform thesis while focusing on approvals, land, support, and project setup cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-slate-50 bg-mesh selection:bg-brand-emerald/30 selection:text-brand-emerald">
        {children}
      </body>
    </html>
  );
}
