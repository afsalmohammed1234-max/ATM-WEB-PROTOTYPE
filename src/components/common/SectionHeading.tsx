import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark' | 'cream';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  const isCream = theme === 'cream';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } max-w-3xl ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
            isDark
              ? 'bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A]'
              : 'bg-[#0D4B4F12] border border-[#0D4B4F25] text-[#0D4B4F]'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-[#E8B84A]' : 'bg-[#0D4B4F]'
            }`}
          />
          {kicker}
        </div>
      )}

      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] mb-4 ${
          isDark ? 'text-white' : 'text-[#072C2E]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-body ${
            isDark ? 'text-slate-300' : isCream ? 'text-[#3E5254]' : 'text-[#566E70]'
          } ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
