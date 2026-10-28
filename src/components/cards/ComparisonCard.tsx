import React from "react"
import { IconCheck, IconClose } from "../common/Icons"

export function ComparisonCard() {
  const traditionalSteps = [
    {
      label: "Manual Measuring",
      note: "Inaccurate guesswork and variable portion volume",
    },
    {
      label: "Repeated Handling",
      note: "Multiple touchpoints increasing hygiene risks",
    },
    {
      label: "Inconsistent Quantities",
      note: "Different pack weight for every customer",
    },
    {
      label: "Slower Customer Service",
      note: "Queues stall while measuring and packing by hand",
    },
    {
      label: "Higher Chances of Spillage",
      note: "Drips, splatter, and wasted batter around the counter",
    },
    {
      label: "More Effort During Peak Hours",
      note: "Repetitive operator fatigue and strain",
    },
  ]

  const atmSteps = [
    {
      label: "Controlled Dispensing",
      note: "Clean volumetric dispensing with anti-drip cut-off",
    },
    {
      label: "Consistent Quantities",
      note: "Standardized volume in every container or pouch",
    },
    {
      label: "Hygienic Handling",
      note: "Enclosed storage minimizes manual contact",
    },
    {
      label: "Faster Service",
      note: "Instant filling for rapid customer order fulfillment",
    },
    {
      label: "Reduced Wastage",
      note: "Precise dosing saves kilograms of batter daily",
    },
    {
      label: "Easier Operations",
      note: "Intuitive operation with minimal staff training needed",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Traditional Card */}
      <div className="bg-[#1A1A1A] rounded-2xl border-2 border-red-500/30 p-8 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/30">
              <IconClose size={20} color="#F87171" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase block">
                Traditional Method
              </span>
              <h3 className="font-display font-black text-xl text-white tracking-wide">
                MANUAL MEASURING & PACKING
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {traditionalSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✕
                </span>
                <div>
                  <span className="font-display font-bold text-sm text-red-200 block">
                    {step.label}
                  </span>
                  <span className="text-xs text-red-300/70 font-body">
                    {step.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-red-500/20 text-center">
          <span className="text-xs font-semibold text-red-400">
            Result: Inconsistent portions, manual fatigue & batter loss
          </span>
        </div>
      </div>

      {/* With ANY TIME MAAVU Card */}
      <div className="bg-[#9B0E4E] rounded-2xl border-2 border-[#E8B84A] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8B84A]/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8B84A33]">
            <div className="w-9 h-9 rounded-lg bg-[#E8B84A] text-[#1E0412] flex items-center justify-center shadow-md">
              <IconCheck size={20} color="#1E0412" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block">
                The Smart Solution
              </span>
              <h3 className="font-display font-black text-xl text-white tracking-wide">
                WITH ANY TIME MAAVU
              </h3>
            </div>
          </div>

          <div className="space-y-3 relative">
            {atmSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#1E0412]/60 border border-[#E8B84A44] flex items-start gap-3 shadow-inner"
              >
                <span className="w-5 h-5 rounded-full bg-[#E8B84A] text-[#1E0412] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-display font-bold text-sm text-white block">
                    {step.label}
                  </span>
                  <span className="text-xs text-slate-300 font-body">
                    {step.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8B84A33] text-center">
          <span className="text-xs font-bold text-[#E8B84A] tracking-wider uppercase">
            Result: Standardized quantities, zero mess & faster sales turnover
          </span>
        </div>
      </div>
    </div>
  )
}
