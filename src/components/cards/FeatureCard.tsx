import React from "react"
import {
  IconHygiene,
  IconConsistency,
  IconEfficiency,
  IconProductivity,
  IconSimplicity,
  IconReliability,
  IconEasyUse,
} from "../common/Icons"

interface FeatureCardProps {
  title: string
  description: string
  iconName: string
  index?: number
}

export function FeatureCard({
  title,
  description,
  iconName,
}: FeatureCardProps) {
  const getIcon = () => {
    switch (iconName.toLowerCase()) {
      case "hygiene":
        return <IconHygiene size={28} color="#9B0E4E" />
      case "consistency":
        return <IconConsistency size={28} color="#9B0E4E" />
      case "efficiency":
        return <IconEfficiency size={28} color="#9B0E4E" />
      case "productivity":
        return <IconProductivity size={28} color="#9B0E4E" />
      case "simplicity":
        return <IconSimplicity size={28} color="#9B0E4E" />
      case "reliability":
        return <IconReliability size={28} color="#9B0E4E" />
      default:
        return <IconEasyUse size={28} color="#9B0E4E" />
    }
  }

  return (
    <div className="group bg-white rounded-2xl border border-[#E5C2CC] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#9B0E4E18] hover:-translate-y-1.5 hover:border-[#E8B84A] flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-xl bg-[#F7E8EC] group-hover:bg-[#E8B84A22] border border-[#E5C2CC] group-hover:border-[#E8B84A] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
          {getIcon()}
        </div>

        <h3 className="font-display font-extrabold text-lg text-[#1E0412] tracking-tight uppercase mb-3 group-hover:text-[#9B0E4E]">
          {title}
        </h3>

        <p className="text-sm text-[#6E4955] leading-relaxed font-body">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F7E8EC] flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase">
          Food-Tech Standard
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />
      </div>
    </div>
  )
}
