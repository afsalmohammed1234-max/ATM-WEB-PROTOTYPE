import React from "react"
import { ApplicationItem } from "../../types"
import { IconCheck } from "../common/Icons"

interface ApplicationCardProps {
  item: ApplicationItem
}

export function ApplicationCard({ item }: ApplicationCardProps) {
  const imageUrl = item.unsplashId
    ? `https://images.unsplash.com/photo-${item.unsplashId}?auto=format&fit=crop&w=700&q=80`
    : null

  return (
    <div className="group rounded-2xl overflow-hidden border border-[#9B0E4E] bg-[#1E0412] flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8B84A20] hover:border-[#E8B84A]">
      {/* Image / Visual Header */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#9B0E4E]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-85"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#2D071B]">
            <span className="text-xs font-mono text-[#E8B84A] tracking-wider uppercase">
              [PHOTO PLACEHOLDER]
            </span>
            <span className="text-xs text-slate-300 mt-1">
              {item.imagePlaceholderText}
            </span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0412] via-[#1E0412]/40 to-transparent" />

        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase bg-[#1E0412]/90 px-2.5 py-1 rounded-md border border-[#E8B84A44]">
            Commercial Sector
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-2 group-hover:text-[#E8B84A] transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#9B0E4E]">
          <span className="text-[10px] font-bold tracking-wider text-[#E8B84A] uppercase block mb-2">
            Key Kitchen Gains:
          </span>
          <ul className="space-y-1.5">
            {item.benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-200"
              >
                <span className="text-[#E8B84A] flex-shrink-0">
                  <IconCheck size={14} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
