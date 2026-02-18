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
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-500 text-white">
      {/* Main Footer Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column - Takes 4 columns on large screens */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center font-bold text-white text-lg 
                transition-colors duration-200 group-hover:bg-accent-600">
                DG
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight block leading-none">
                  Micropronix
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              {companyInfo.description}
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {companyInfo.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-[11px] font-medium bg-white/10 rounded-full text-white/70 
                    transition-colors duration-200 hover:bg-white/15 hover:text-white/90"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5 text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 
                      transition-colors duration-200 hover:text-accent-400"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 
                      transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5 text-white/40">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5 text-white/40">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* Corporate Office */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <span className="text-xs text-white/40 block mb-0.5">Corporate Office</span>
                  <span className="text-sm text-white/70 leading-relaxed">
                    {companyInfo.offices[1].address}, {companyInfo.offices[1].city} - {companyInfo.offices[1].pin}
                  </span>
                </div>
              </li>
              
              {/* Phone */}
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 
                    transition-colors duration-200 group-hover:bg-accent-500/20">
                    <Phone className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block mb-0.5">Phone</span>
                    <span className="text-sm text-white/70 transition-colors duration-200 group-hover:text-accent-400">
                      {companyInfo.phone}
                    </span>
                  </div>
                </a>
              </li>
              
              {/* Email */}
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 
                    transition-colors duration-200 group-hover:bg-accent-500/20">
                    <Mail className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block mb-0.5">Email</span>
                    <span className="text-sm text-white/70 transition-colors duration-200 group-hover:text-accent-400">
                      {companyInfo.email}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center sm:text-left">
              &copy; {currentYear} {companyInfo.fullName}. All rights reserved.
            </p>
            <p className="text-xs text-white/40 text-center sm:text-right">
              {companyInfo.companyType}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
