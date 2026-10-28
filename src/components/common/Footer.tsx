import React from "react"
import { COMPANY_INFO, NAV_LINKS } from "../../lib/constants"
import { Button } from "./Button"
import { IconPhone, IconWhatsApp, IconEmail, IconLocation } from "./Icons"

interface FooterProps {
  onNavigate: (path: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate(href)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1E0412] border-t-2 border-[#E8B84A33] text-slate-300">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md shadow-[#E8B84A33] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="ANY TIME MAAVU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  ANY TIME <span className="text-[#E8B84A]">MAAVU</span>
                </span>
                <span className="text-[11px] tracking-widest text-[#E8B84A] uppercase font-bold">
                  Smart Dispensing & Packaging
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Smart batter dispensing and packaging solutions for modern batter
              businesses.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#E8B84A] tracking-wider uppercase block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#9B0E4E] hover:bg-[#E8B84A] text-white hover:text-[#1E0412] flex items-center justify-center transition-all duration-200 text-xs font-bold uppercase"
                    title={platform}
                  >
                    {platform.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5 border-l-2 border-[#E8B84A] pl-3">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick("/about", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> About
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleLinkClick("/solutions", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Our Solution
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick("/contact", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5 border-l-2 border-[#E8B84A] pl-3">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/machine"
                  onClick={(e) => handleLinkClick("/machine", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Batter
                  Dispenser
                </a>
              </li>
              <li>
                <a
                  href="/machine"
                  onClick={(e) => handleLinkClick("/machine", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Packaging
                  System
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  onClick={(e) => handleLinkClick("/how-it-works", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5 border-l-2 border-[#E8B84A] pl-3">
              Business
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleLinkClick("/solutions", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Retail
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleLinkClick("/solutions", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Vending
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleLinkClick("/solutions", e)}
                  className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#E8B84A] text-xs">›</span> Commercial
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quote CTA Column */}
          <div className="bg-[#9B0E4E]/40 p-6 rounded-2xl border border-[#9B0E4E] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
                Automated Batter Dispensing
              </span>
              <h4 className="font-display font-extrabold text-white text-lg mb-2">
                Interested in our batter dispensing machine?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Get in touch with our team to explore machines for retail,
                vending, and packaging.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={(e) => handleLinkClick("/contact", e)}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#14020A] py-6 border-t border-[#9B0E4E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">ANY TIME MAAVU</span>. All
            Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Smart Batter Dispensing & Packaging Solutions</span>
            <span className="text-slate-600">|</span>
            <span className="text-[#E8B84A] font-semibold">
              Clean, Automated & Reliable
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
