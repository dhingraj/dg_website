import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DG Micropronix - 30 Years of Innovation",
  description:
    "Founded in 1995, DG Micropronix has evolved from a microprocessor workshop to a technology partner for India's largest industrial organizations. ISO 9001, 20000-1, 27001, CMMi3 Certified.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

