import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DG Micropronix - Get in Touch",
  description:
    "Contact DG Micropronix for IT infrastructure, automation, surveillance, and fire safety solutions. Offices in Kolkata, West Bengal. Call +91-9051049911 or email info@dgmpl.com.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

