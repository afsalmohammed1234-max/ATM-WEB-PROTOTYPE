import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { Button } from "../components/common/Button"
import {
  IconHygiene,
  IconConsistency,
  IconEfficiency,
  IconReliability,
  IconCheck,
} from "../components/common/Icons"

interface AboutPageProps {
  onNavigate: (path: string) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            FOOD TECHNOLOGY & RETAIL AUTOMATION
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            ABOUT ANY TIME MAAVU
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Smart batter dispensing and packaging solutions engineered for
            businesses selling fresh dosa and idli batter.
          </p>
        </div>
      </section>

      {/* Origin & Positioning */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                Our Foundation
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E0412] tracking-tight leading-[1.2]">
                WE’RE AUTOMATING THE WAY BATTER IS SOLD
              </h2>
              <p className="text-sm sm:text-base text-[#6E4955] leading-relaxed font-body">
                <strong>ANY TIME MAAVU</strong> is building smarter solutions
                for the fresh batter industry. Our batter dispensing and
                packaging machines are designed to simplify the process of
                selling ready-to-use dosa and idli batter.
              </p>
              <p className="text-sm sm:text-base text-[#6E4955] leading-relaxed font-body">
                From controlled dispensing to hygienic packaging, our technology
                helps businesses reduce manual handling, improve consistency,
                and create a faster way for customers to purchase fresh batter.
              </p>
              <div className="p-4 rounded-xl bg-[#FCF0F3] border border-[#E5C2CC]">
                <span className="text-xs font-bold text-[#9B0E4E] uppercase tracking-wider block mb-1">
                  Our Goal Is Simple:
                </span>
                <p className="text-base font-display font-bold text-[#1E0412]">
                  Make fresh batter easier to dispense, pack, sell and scale.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#1E0412] text-white p-8 sm:p-10 shadow-xl space-y-6 border-2 border-[#E8B84A33]">
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase block">
                  Brand Philosophy
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Tradition in Every Batter. Technology in Every Pack.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-body">
                  Dosa and idli batter are part of everyday food culture. ANY
                  TIME MAAVU is bringing modern automation into the way that
                  batter is dispensed, packaged and sold. We combine the
                  familiarity of fresh batter with the precision and convenience
                  of smart dispensing technology.
                </p>
                <div className="pt-4 border-t border-[#9B0E4E] space-y-3">
                  {[
                    "Controlled, accurate volumetric quantity in every pack",
                    "Aseptic enclosed containers preserving fermentation quality",
                    "Built specifically for businesses selling fresh batter",
                  ].map((comm, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs text-slate-200"
                    >
                      <span className="text-[#E8B84A] mt-0.5">
                        <IconCheck size={16} />
                      </span>
                      <span>{comm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Engineering Standards */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Quality Standards"
            title="DESIGNED AROUND THE WAY BATTER BUSINESSES WORK"
            subtitle="Commercial food equipment built with Food-Grade 304 Stainless Steel for continuous retail and production duty."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <IconHygiene size={28} color="#9B0E4E" />,
                title: "SS304 CONTACT PARTS",
                desc: "Certified food-grade stainless steel surfaces protect hygiene and preserve product purity.",
              },
              {
                icon: <IconConsistency size={28} color="#9B0E4E" />,
                title: "CALIBRATED ACCURACY",
                desc: "Volumetric portion control eliminates giveaway and ensures standard pack weight.",
              },
              {
                icon: <IconEfficiency size={28} color="#9B0E4E" />,
                title: "RAPID CLEANING",
                desc: "Modular tool-less disassembly allows fast end-of-shift washdown in under 5 minutes.",
              },
              {
                icon: <IconReliability size={28} color="#9B0E4E" />,
                title: "LOW MAINTENANCE",
                desc: "Heavy-duty mechanical build ensures steady operation with minimal servicing requirements.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5C2CC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7E8EC] flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1E0412] uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#6E4955] leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#1E0412] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            Upgrade Your Batter Operations
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Join forward-thinking batter retail stores, supermarkets, and
            production units automating their workflow with ANY TIME MAAVU.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Talk to Us
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => onNavigate("/machine")}
            >
              Explore the Machine
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
