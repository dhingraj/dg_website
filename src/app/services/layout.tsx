import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DG Micropronix - IT, Automation, Safety & Surveillance",
  description:
    "Five interconnected service pillars: IT Infrastructure, Electrical Automation, Plant Safety, Surveillance, and Condition Monitoring. End-to-end solutions for industrial operations.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

