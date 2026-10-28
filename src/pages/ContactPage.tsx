import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { EnquiryForm } from "../components/forms/EnquiryForm"
import {
  IconPhone,
  IconWhatsApp,
  IconEmail,
  IconLocation,
  IconCheck,
} from "../components/common/Icons"
import { COMPANY_INFO } from "../lib/constants"

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            COMMERCIAL ENQUIRIES & QUOTATION
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            CONTACT ANY TIME MAAVU
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Get in touch with our team for machine quotations, operational
            demonstrations, and technical specifications.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                  Direct Channels
                </span>
                <h2 className="font-display font-black text-3xl text-[#1E0412] tracking-tight mt-3 mb-4">
                  LET'S DISCUSS YOUR BATTER REQUIREMENTS
                </h2>
                <p className="text-sm text-[#6E4955] leading-relaxed font-body">
                  Whether you operate a batter retail store, production unit,
                  supermarket counter, or growing batter brand, we provide
                  customized equipment solutions and quotes.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconPhone size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Sales Hotline
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phonePlaceholder.replace(/[^0-9+]/g, "")}`}
                      className="text-base font-mono text-[#9B0E4E] font-bold hover:underline block"
                    >
                      {COMPANY_INFO.phonePlaceholder}
                    </a>
                    <span className="text-xs text-[#6E4955] block mt-0.5">
                      Monday to Saturday · 9:00 AM to 7:00 PM
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconWhatsApp size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Official WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono text-[#9B0E4E] font-bold hover:underline block"
                    >
                      {COMPANY_INFO.whatsappPlaceholder}
                    </a>
                    <span className="text-xs text-[#6E4955] block mt-0.5">
                      Fastest quotes, photos & video demonstrations
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconEmail size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Commercial Email
                    </span>
                    <span className="text-sm font-semibold text-[#9B0E4E]">
                      {COMPANY_INFO.emailPlaceholder}
                    </span>
                    <span className="text-xs text-[#6E4955] block mt-0.5">
                      For formal vendor registration and tenders
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconLocation size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Factory & Office
                    </span>
                    <span className="text-xs text-[#6E4955] leading-relaxed block mt-0.5">
                      {COMPANY_INFO.addressPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="p-6 rounded-2xl bg-[#F7E8EC] border border-[#E5C2CC] space-y-3">
                <span className="text-xs font-bold text-[#1E0412] uppercase tracking-wider block">
                  What Happens Next:
                </span>
                {[
                  "Quick callback or WhatsApp response within 2 business hours",
                  "Clear itemized commercial quotation with delivery timeline",
                  "Option for a live video demonstration on actual batter",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#1E0412]"
                  >
                    <span className="text-[#9B0E4E] flex-shrink-0 mt-0.5">
                      <IconCheck size={14} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Facility Placeholder */}
      <section className="bg-[#FCF0F3] py-16 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#9B0E4E] uppercase">
            Headquarters & Production Facility
          </span>
          <h3 className="font-display font-bold text-xl text-[#1E0412]">
            Located in Chennai, Tamil Nadu, India
          </h3>
          <div className="w-full h-64 rounded-2xl bg-white border border-[#E5C2CC] flex flex-col items-center justify-center p-6 shadow-inner">
            <IconLocation size={36} color="#9B0E4E" />
            <span className="text-xs font-mono tracking-widest text-[#E8B84A] uppercase mt-3">
              [INTERACTIVE LOCATION MAP PLACEHOLDER]
            </span>
            <span className="text-xs text-[#6E4955] mt-1">
              {COMPANY_INFO.addressPlaceholder}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
