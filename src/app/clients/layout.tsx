import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners | DG Micropronix - Trusted by SAIL & More",
  description:
    "Trusted by India's leading industrial organizations including SAIL plants, with strategic partnerships with Cisco, HP, Dell, Microsoft, Honeywell, Schneider Electric, and more.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

