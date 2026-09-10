import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../../lib/constants';
import { Button } from './Button';
import { IconPhone, IconWhatsApp, IconEmail, IconLocation } from './Icons';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072C2E] border-t-2 border-[#E8B84A33] text-slate-300">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md shadow-[#E8B84A33] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="ANY TIME MAVU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  ANY TIME <span className="text-[#E8B84A]">MAVU</span>
                </span>
                <span className="text-[11px] tracking-widest text-[#E8B84A] uppercase font-bold">
                  Food Technology Commercial Equipment
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Engineering modern, hygienic, and high-efficiency batter dispensing machines designed specifically for hotels, restaurants, caterers, and food businesses.
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
                    className="w-9 h-9 rounded-lg bg-[#0D4B4F] hover:bg-[#E8B84A] text-white hover:text-[#072C2E] flex items-center justify-center transition-all duration-200 text-xs font-bold uppercase"
                    title={platform}
                  >
                    {platform.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5 border-l-2 border-[#E8B84A] pl-3">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="hover:text-[#E8B84A] transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#E8B84A] text-xs">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5 border-l-2 border-[#E8B84A] pl-3">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-[#E8B84A] mt-0.5"><IconPhone size={16} /></span>
                <span className="text-slate-300 font-mono text-xs">{COMPANY_INFO.phonePlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#25D366] mt-0.5"><IconWhatsApp size={16} /></span>
                <span className="text-slate-300 font-mono text-xs">{COMPANY_INFO.whatsappPlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#E8B84A] mt-0.5"><IconEmail size={16} /></span>
                <span className="text-slate-300 text-xs">{COMPANY_INFO.emailPlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#E8B84A] mt-0.5"><IconLocation size={16} /></span>
                <span className="text-slate-300 text-xs leading-relaxed">{COMPANY_INFO.addressPlaceholder}</span>
              </li>
            </ul>
          </div>

          {/* Quote CTA Column */}
          <div className="bg-[#0D4B4F]/40 p-6 rounded-2xl border border-[#0D4B4F] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
                Commercial Kitchens
              </span>
              <h4 className="font-display font-extrabold text-white text-lg mb-2">
                Ready for Cleaner Dispensing?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Request a formal quotation tailored to your kitchen volume and equipment needs.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={(e) => handleLinkClick('/contact', e)}
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#051F20] py-6 border-t border-[#0D4B4F]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">ANY TIME MAVU</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Food Technology · Commercial Kitchen Equipment</span>
            <span className="text-slate-600">|</span>
            <span className="text-[#E8B84A] font-semibold">Clean & Hygienic Dispensing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
