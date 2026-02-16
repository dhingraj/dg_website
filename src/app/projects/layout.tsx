import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | DG Micropronix - 200+ Projects Delivered",
  description:
    "Explore our portfolio of 200+ completed projects across West Bengal, Odisha, Chhattisgarh, and Assam. IT infrastructure, automation, fire safety, and surveillance solutions.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

