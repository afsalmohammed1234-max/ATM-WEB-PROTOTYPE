import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { GalleryGrid } from "../components/ui/GalleryGrid"
import { Button } from "../components/common/Button"

interface GalleryPageProps {
  onNavigate: (path: string) => void
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            PHOTOGRAPHY & VISUAL DEMONSTRATION
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            EQUIPMENT GALLERY
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Inspect clean product photography, close-up valve details, and ANY
            TIME MAAVU machines configured for dispensing and packaging.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual Documentation"
            title="SEE ANY TIME MAAVU IN DETAIL"
            subtitle="Switch between product overviews, dispensing setups, and close-up engineering details."
          />

          <GalleryGrid />
        </div>
      </section>

      {/* Quotation CTA */}
      <section className="bg-[#FCF0F3] py-16 text-center border-b border-[#E5C2CC]">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1E0412]">
            Request Machine High-Res Photos & Video Demos
          </h3>
          <p className="text-xs sm:text-sm text-[#6E4955] max-w-lg mx-auto leading-relaxed">
            Need video clips of the machine dispensing batter on a commercial
            tawa? Our team can share live operation videos directly on WhatsApp.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Request Video Demonstration
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
