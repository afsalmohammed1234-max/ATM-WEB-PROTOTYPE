import React from 'react';
import { IconWhatsApp, IconArrowRight } from './Icons';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost' | 'cream';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  withArrow?: boolean;
  withWhatsAppIcon?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  loading = false,
  withArrow = false,
  withWhatsAppIcon = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-sm font-bold tracking-wider',
    lg: 'px-8 py-4 text-base font-bold tracking-wider',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#E8B84A] hover:bg-[#F3CA68] text-[#072C2E] shadow-md shadow-[#E8B84A33] hover:shadow-lg hover:shadow-[#E8B84A44] border border-[#E8B84A]',
    secondary:
      'bg-[#0D4B4F] hover:bg-[#146368] text-white shadow-md shadow-[#0D4B4F33] border border-[#146368]',
    outline:
      'bg-transparent hover:bg-[#E8B84A15] text-[#E8B84A] border-2 border-[#E8B84A]',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-[#25D36633]',
    ghost:
      'bg-transparent hover:bg-[#0D4B4F10] text-[#0D4B4F] hover:text-[#072C2E]',
    cream:
      'bg-[#F6F0E5] hover:bg-[#FAF6EE] text-[#0D4B4F] border border-[#E8DFC8] font-bold',
  }[variant];

  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 rounded-lg transition-all duration-200 uppercase font-display cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {withWhatsAppIcon && !loading && <IconWhatsApp size={size === 'lg' ? 20 : 18} />}
      <span>{children}</span>
      {withArrow && !loading && <IconArrowRight size={size === 'lg' ? 18 : 16} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}
