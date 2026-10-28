import React from "react"
import { IconWhatsApp, IconArrowRight } from "./Icons"

export type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost" | "cream"

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: (e: React.MouseEvent) => void
  type?: "button" | "submit" | "reset"
  className?: string
  disabled?: boolean
  loading?: boolean
  withArrow?: boolean
  withWhatsAppIcon?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  withArrow = false,
  withWhatsAppIcon = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider",
    md: "px-6 py-3 text-sm font-bold tracking-wider",
    lg: "px-8 py-4 text-base font-bold tracking-wider",
  }[size]

  const variantClasses = {
    primary:
      "bg-[#E8B84A] hover:bg-[#F3CA68] text-[#1E0412] shadow-md shadow-[#E8B84A33] hover:shadow-lg hover:shadow-[#E8B84A55] border border-[#E8B84A] btn-shimmer-sweep",
    secondary:
      "bg-[#9B0E4E] hover:bg-[#B8115D] text-white shadow-md shadow-[#9B0E4E33] hover:shadow-lg hover:shadow-[#9B0E4E55] border border-[#B8115D] btn-shimmer-sweep",
    outline:
      "bg-transparent hover:bg-[#E8B84A15] text-[#E8B84A] border-2 border-[#E8B84A] hover:border-[#F3CA68]",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-[#25D36633] hover:shadow-lg hover:shadow-[#25D36655]",
    ghost:
      "bg-transparent hover:bg-[#9B0E4E14] text-[#9B0E4E] hover:text-[#1E0412]",
    cream:
      "bg-[#F7E8EC] hover:bg-[#FCF0F3] text-[#9B0E4E] border border-[#E5C2CC] font-bold shadow-sm hover:shadow",
  }[variant]

  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-lg transition-all duration-200 uppercase font-display cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`

  const content = (
    <>
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {withWhatsAppIcon && !loading && (
        <span className="inline-block transition-transform duration-200 group-hover:scale-110">
          <IconWhatsApp size={size === "lg" ? 20 : 18} />
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {withArrow && !loading && (
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 relative z-10">
          <IconArrowRight size={size === "lg" ? 18 : 16} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </a>
    )
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
  )
}
