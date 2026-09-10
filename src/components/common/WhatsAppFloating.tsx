import React, { useState } from 'react';
import { COMPANY_INFO } from '../../lib/constants';
import { IconWhatsApp } from './Icons';

export function WhatsAppFloating() {
  const [hovered, setHovered] = useState(false);
  const cleanNumber = COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    'Hello Any Time Mavu team, I would like to inquire about your commercial batter dispensing machine.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-[#072C2E] px-4 py-2 rounded-full shadow-xl border border-[#25D36644] text-xs font-bold transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        Quick WhatsApp Enquiry
      </div>

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${cleanNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D36666] hover:scale-110 active:scale-95 transition-all duration-200 relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Radar Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <IconWhatsApp size={28} />
      </a>
    </div>
  );
}
