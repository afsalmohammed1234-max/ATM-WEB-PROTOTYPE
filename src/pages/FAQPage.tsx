import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { FAQAccordion } from "../components/ui/FAQAccordion"
import { Button } from "../components/common/Button"
import { COMPANY_INFO } from "../lib/constants"

interface FAQPageProps {
  onNavigate: (path: string) => void
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            COMMERCIAL QUESTIONS & ANSWERS
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Everything you need to know about ANY TIME MAAVU batter dispensing
            and packaging machines, warranty terms, cleaning procedures, and
            pricing.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Help Desk"
            title="SEARCH BY CATEGORY"
            subtitle="Select a category filter below to quickly find technical and procurement answers."
          />

          <FAQAccordion />
        </div>
      </section>

      {/* Unanswered Questions Callout */}
      <section className="bg-[#FCF0F3] py-20 lg:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center mx-auto shadow-md font-display font-bold text-2xl">
            ?
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1E0412]">
            Have a Question About the Machine?
          </h3>
          <p className="text-sm text-[#6E4955] leading-relaxed font-body">
            Our product specialists are available on phone and WhatsApp to
            answer specific questions regarding your retail setup, batter
            dispensing volume, or packaging requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="whatsapp"
              size="md"
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, "")}`}
              withWhatsAppIcon
            >
              Ask on WhatsApp
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Send Form Enquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
