import React from "react"
import { MACHINE_SPECS } from "../../lib/constants"
import { Button } from "../common/Button"

interface SpecTableProps {
  onRequestSpecSheet?: () => void
}

export function SpecTable({ onRequestSpecSheet }: SpecTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5C2CC] overflow-hidden shadow-xl">
      {/* Table Header */}
      <div className="bg-[#9B0E4E] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block">
            Official Equipment Details
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
            Technical Engineering Specifications
          </h3>
        </div>

        {onRequestSpecSheet && (
          <Button
            variant="primary"
            size="sm"
            onClick={onRequestSpecSheet}
            className="!text-xs self-start sm:self-auto"
          >
            Request Spec Sheet PDF
          </Button>
        )}
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-[#E5C2CC]">
        {MACHINE_SPECS.map((spec, index) => (
          <div
            key={spec.label}
            className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors ${
              index % 2 === 0 ? "bg-white" : "bg-[#FCF0F3]/50"
            } hover:bg-[#F7E8EC]`}
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B0E4E]" />
              <span className="font-display font-bold text-xs sm:text-sm text-[#1E0412] uppercase tracking-wide">
                {spec.label}
              </span>
            </div>

            <div className="sm:text-right">
              {spec.isPlaceholder ? (
                <span className="inline-block px-3 py-1 rounded-md bg-[#F7E8EC] border border-[#E5C2CC] text-xs font-mono text-[#9B0E4E] font-semibold tracking-tight">
                  {spec.value}
                </span>
              ) : (
                <span className="text-xs sm:text-sm font-semibold text-[#9B0E4E]">
                  {spec.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Note footer */}
      <div className="bg-[#FCF0F3] px-6 py-3 border-t border-[#E5C2CC] text-[11px] text-[#6E4955] flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          * Custom hopper configurations and automated conveyor attachments
          available for central commissary kitchens.
        </span>
        <span className="font-semibold text-[#9B0E4E]">
          Contact engineering for custom specs
        </span>
      </div>
    </div>
  )
}
