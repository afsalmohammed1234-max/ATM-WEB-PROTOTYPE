import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { IconPhone, IconWhatsApp, IconEmail, IconLocation, IconCheck } from '../components/common/Icons';
import { COMPANY_INFO } from '../lib/constants';

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            COMMERCIAL SALES & QUOTATION
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            CONTACT ANY TIME MAVU
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Get in touch with our commercial equipment team for formal price quotations, machine demonstrations, or technical specifications.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                  Direct Channels
                </span>
                <h2 className="font-display font-black text-3xl text-[#072C2E] tracking-tight mt-3 mb-4">
                  LET'S DISCUSS YOUR KITCHEN VOLUME
                </h2>
                <p className="text-sm text-[#566E70] leading-relaxed font-body">
                  Whether you are planning a new restaurant branch, upgrading hotel breakfast service, or expanding central production, we provide customized equipment quotes.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconPhone size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Sales Hotline</span>
                    <span className="text-base font-mono text-[#0D4B4F] font-bold">{COMPANY_INFO.phonePlaceholder}</span>
                    <span className="text-xs text-[#566E70] block mt-0.5">Monday to Saturday · 9:00 AM to 7:00 PM</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconWhatsApp size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Official WhatsApp</span>
                    <span className="text-base font-mono text-[#0D4B4F] font-bold">{COMPANY_INFO.whatsappPlaceholder}</span>
                    <span className="text-xs text-[#566E70] block mt-0.5">Fastest quotes, photos & video demonstrations</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconEmail size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Commercial Email</span>
                    <span className="text-sm font-semibold text-[#0D4B4F]">{COMPANY_INFO.emailPlaceholder}</span>
                    <span className="text-xs text-[#566E70] block mt-0.5">For formal vendor registration and tenders</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconLocation size={22} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Factory & Office</span>
                    <span className="text-xs text-[#566E70] leading-relaxed block mt-0.5">{COMPANY_INFO.addressPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="p-6 rounded-2xl bg-[#F6F0E5] border border-[#E8DFC8] space-y-3">
                <span className="text-xs font-bold text-[#072C2E] uppercase tracking-wider block">
                  What Happens Next:
                </span>
                {[
                  'Quick callback or WhatsApp response within 2 business hours',
                  'Clear itemized commercial quotation with delivery timeline',
                  'Option for a live video demonstration on actual batter',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#072C2E]">
                    <span className="text-[#0D4B4F] flex-shrink-0 mt-0.5">
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
      <section className="bg-[#FAF6EE] py-16 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0D4B4F] uppercase">
            Headquarters & Production Facility
          </span>
          <h3 className="font-display font-bold text-xl text-[#072C2E]">
            Located in Chennai, Tamil Nadu, India
          </h3>
          <div className="w-full h-64 rounded-2xl bg-white border border-[#E8DFC8] flex flex-col items-center justify-center p-6 shadow-inner">
            <IconLocation size={36} color="#0D4B4F" />
            <span className="text-xs font-mono tracking-widest text-[#E8B84A] uppercase mt-3">
              [INTERACTIVE LOCATION MAP PLACEHOLDER]
            </span>
            <span className="text-xs text-[#566E70] mt-1">{COMPANY_INFO.addressPlaceholder}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
