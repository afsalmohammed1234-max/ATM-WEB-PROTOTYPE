import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { Button } from "../components/common/Button"
import { MachineViewer } from "../components/ui/MachineViewer"
import { SpecTable } from "../components/cards/SpecTable"
import { ComparisonCard } from "../components/cards/ComparisonCard"
import { IconCheck } from "../components/common/Icons"

interface MachinePageProps {
  onNavigate: (path: string) => void
}

export function MachinePage({ onNavigate }: MachinePageProps) {
  const coreFeatures = [
    {
      title: "Accurate Dispensing",
      desc: "Dispense consistent quantities with better control and reduced wastage.",
    },
    {
      title: "Hygienic Packaging",
      desc: "Minimize manual handling and maintain a cleaner packaging process.",
    },
    {
      title: "Fast & Convenient",
      desc: "Speed up the process of preparing customer orders.",
    },
    {
      title: "Consistent Portions",
      desc: "Deliver standardized quantities for every customer.",
    },
    {
      title: "Easy Operation",
      desc: "Designed for simple, practical day-to-day operation.",
    },
    {
      title: "Built to Scale",
      desc: "Suitable for batter businesses looking to improve their retail and distribution process.",
    },
  ]

  const machineFeatures = [
    {
      title: "Precision Dispensing",
      desc: "Accurately portions predetermined volumes with clean, instant cut-off.",
    },
    {
      title: "Quantity Control",
      desc: "Easily select portion presets for varied retail customer needs.",
    },
    {
      title: "Hygienic Batter Handling",
      desc: "Enclosed sanitary chamber protects batter from airborne contaminants.",
    },
    {
      title: "Automated Filling",
      desc: "Clean volumetric filling directly into packaging pouches or containers.",
    },
    {
      title: "Packaging Integration",
      desc: "Fits seamlessly into standard retail packaging counters and production tables.",
    },
    {
      title: "Easy Operator Interface",
      desc: "Simple control interface that any staff member can master in minutes.",
    },
    {
      title: "Compact Commercial Design",
      desc: "Space-saving footprint engineered for maximum counter efficiency.",
    },
    {
      title: "Reduced Manual Handling",
      desc: "Eliminates messy ladles, hand-held scoops, and counter wipes.",
    },
    {
      title: "Faster Customer Service",
      desc: "Serves retail walk-ins rapidly with standardized speed.",
    },
    {
      title: "Consistent Output",
      desc: "Ensures uniform weight and volume across every customer order.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            PRODUCT ARCHITECTURE & AUTOMATION
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            BATTER DISPENSING & PACKAGING MACHINE
          </h1>
          <p className="text-xl sm:text-2xl text-[#E8B84A] font-display font-bold">
            One Machine. A Smarter Way to Sell Batter.
          </p>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Our automated batter dispensing system is designed to accurately
            dispense prepared batter and package it into customer-ready
            quantities. It brings consistency, hygiene and efficiency to the
            batter-selling process.
          </p>
        </div>
      </section>

      {/* 6 Core Product Value Cards */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Core Strengths"
            title="KEY MACHINE CAPABILITIES"
            subtitle="Engineered to solve the fundamental challenges of manual batter measuring, portioning, and retail packaging."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coreFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#E8B84A] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center font-display font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1E0412] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E4955] leading-relaxed font-body">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <MachineViewer />
        </div>
      </section>

      {/* 10 Feature List: Designed Around the Way Batter Businesses Work */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Commercial Engineering"
            title="DESIGNED AROUND THE WAY BATTER BUSINESSES WORK"
            subtitle="Built to handle continuous commercial operations with reliable food-grade components."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {machineFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E5C2CC] shadow-sm flex flex-col justify-between hover:border-[#E8B84A] transition-colors"
              >
                <div>
                  <span className="w-7 h-7 rounded-lg bg-[#FCF0F3] text-[#9B0E4E] flex items-center justify-center font-bold text-xs mb-3 border border-[#E5C2CC]">
                    ✓
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#1E0412] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6E4955] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Full Spec Sheet"
            title="TECHNICAL SPECIFICATIONS"
            subtitle="Standard engineering dimensions, power parameters, and materials for commercial planning."
          />

          <SpecTable onRequestSpecSheet={() => onNavigate("/contact")} />
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="bg-[#1E0412] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Why Upgrade"
            title="THE VALUE OF AUTOMATED DISPENSING & PACKAGING"
            subtitle="Compare manual measuring and ladle packing against ANY TIME MAAVU automation."
          />

          <ComparisonCard />

          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
