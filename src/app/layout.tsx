import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DG Micropronix Pvt. Ltd. | 30 Years of Innovation",
  description:
    "DG Micropronix is a technology-driven engineering company delivering end-to-end system integration across IT infrastructure, electrical automation, surveillance, fire safety, and condition monitoring. ISO 9001, 20000-1, 27001, CMMi3 Certified.",
  keywords: [
    "DG Micropronix",
    "IT Infrastructure",
    "Electrical Automation",
    "SCADA",
    "PLC",
    "Fire Safety",
    "Surveillance",
    "IoT",
    "Condition Monitoring",
    "Kolkata",
    "SAIL",
    "Industrial IT",
  ],
  openGraph: {
    title: "DG Micropronix Pvt. Ltd. | 30 Years of Innovation",
    description:
      "Technology-driven engineering company delivering end-to-end system integration since 1995.",
    url: "https://www.dgmpl.com",
    siteName: "DG Micropronix",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
