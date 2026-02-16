import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/lib/data";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients & Partners" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#it-infrastructure", label: "IT Infrastructure" },
  { href: "/services#electrical-automation", label: "Electrical Automation" },
  { href: "/services#plant-safety", label: "Plant Safety" },
  { href: "/services#surveillance", label: "Surveillance" },
  { href: "/services#condition-monitoring", label: "Condition Monitoring" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      {/* Main Footer */}
      <div className="container-max section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center font-bold text-white text-lg">
                DG
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">
                  Micropronix
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {companyInfo.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-[11px] font-medium bg-white/10 rounded-full text-white/70"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/40">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/40">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  {companyInfo.offices[1].address}, {companyInfo.offices[1].city} -{" "}
                  {companyInfo.offices[1].pin}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-white/60 hover:text-accent-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-white/60 hover:text-accent-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {companyInfo.fullName} All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            {companyInfo.companyType}
          </p>
        </div>
      </div>
    </footer>
  );
}

