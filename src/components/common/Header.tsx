import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../../lib/constants';
import { Button } from './Button';
import { IconMenu, IconClose, IconWhatsApp } from './Icons';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#072C2E]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#E8B84A25]'
          : 'bg-[#072C2E]/90 backdrop-blur-sm border-b border-[#0D4B4F]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-md shadow-[#E8B84A33] group-hover:scale-105 transition-transform duration-200 overflow-hidden flex items-center justify-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="ANY TIME MAVU Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white">
                ANY TIME <span className="text-[#E8B84A]">MAVU</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#E8B84A] uppercase font-bold">
                Food Tech Machines
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-150 py-1 relative ${
                    isActive
                      ? 'text-[#E8B84A] font-semibold'
                      : 'text-slate-200 hover:text-[#E8B84A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8B84A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#25D3661A] hover:bg-[#25D36633] text-[#25D366] border border-[#25D36644] transition-all duration-200"
              title="Chat with us on WhatsApp"
            >
              <IconWhatsApp size={20} />
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleLinkClick('/contact', e)}
            >
              Get A Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              className="!px-3 !py-1.5 !text-[11px]"
              onClick={(e) => handleLinkClick('/contact', e)}
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0D4B4F] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#072C2E] border-t border-[#0D4B4F] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#E8B84A1A] text-[#E8B84A] font-bold border-l-4 border-[#E8B84A]'
                      : 'text-slate-200 hover:bg-[#0D4B4F]/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#0D4B4F] flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider"
            >
              <IconWhatsApp size={18} /> Quick WhatsApp Chat
            </a>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={(e) => handleLinkClick('/contact', e)}
            >
              Request A Quotation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
