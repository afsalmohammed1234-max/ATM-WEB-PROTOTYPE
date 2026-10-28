import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { Button } from "../components/common/Button"
import { IconCheck } from "../components/common/Icons"

interface HowItWorksPageProps {
  onNavigate: (path: string) => void
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const workflowSteps = [
    {
      num: "01",
      title: "LOAD",
      subtitle: "Pour prepared batter into the storage system",
      desc: "Fill the prepared batter into the machine's storage/container system. The enclosed food-grade design keeps the batter fresh, aerated, and protected from ambient contamination.",
      tips: "Ample capacity keeps retail counters and packaging lines running smoothly without constant reloads.",
    },
    {
      num: "02",
      title: "SELECT",
      subtitle: "Choose your desired volume or portion option",
      desc: "Choose the required quantity or dispensing option. Preset standard customer packaging sizes (such as 500g, 1kg, or custom portions) with simple controls.",
      tips: "Allows operators or customers to toggle portion selections instantly.",
    },
    {
      num: "03",
      title: "DISPENSE",
      subtitle: "Accurate volumetric release with instant cutoff",
      desc: "The machine accurately dispenses the selected quantity of batter. The positive-displacement mechanism ensures razor-sharp cutoff with zero counter dripping or stringing.",
      tips: "Precision dosing prevents costly product giveaway and keeps the station clean.",
    },
    {
      num: "04",
      title: "PACK & SELL",
      subtitle: "Customer-ready pack filled in seconds",
      desc: "The batter is filled into the packaging and is ready for the customer. Deliver pristine, standardized, hygienic packages with substantially reduced manual handling.",
      tips: "Speeds up counter queues and ensures uniform product weight every time.",
    },
  ]

  const cleaningSteps = [
    {
      step: "1. Quick-Release Modular Clamps",
      desc: "Unlock tool-free sanitary clamps on the container and nozzle assembly in under 30 seconds.",
    },
    {
      step: "2. Rinse With Warm Water",
      desc: "Flush the stainless contact parts with standard clean tap water or mild food-safe sanitizing solution.",
    },
    {
      step: "3. Fast Reassembly for Next Run",
      desc: "Modular parts snap back into place effortlessly with zero technical tools or specialized maintenance required.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            STEP-BY-STEP PROCESS
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            HOW ANY TIME MAAVU WORKS
          </h1>
          <p className="text-xl sm:text-2xl text-[#E8B84A] font-display font-bold">
            From batter to customer-ready pack — with less manual handling.
          </p>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            A simple, standardized 4-step workflow that automates batter
            dispensing and packaging for fresh batter businesses.
          </p>
        </div>
      </section>

      {/* Main Workflow Steps */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Operational Simplicity"
            title="THE 4-STEP DISPENSE & PACK WORKFLOW"
            subtitle="Follow how ANY TIME MAAVU streamlines dispensing, packaging, and retail service."
          />

          <div className="space-y-12">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FCF0F3] p-8 lg:p-10 rounded-3xl border border-[#E5C2CC] shadow-sm"
              >
                <div className="lg:col-span-3 flex lg:flex-col items-center justify-between lg:justify-center text-center p-6 bg-white rounded-2xl border border-[#E5C2CC]">
                  <span className="font-display font-black text-5xl lg:text-6xl text-[#E8B84A]">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#1E0412] uppercase mt-2">
                    PHASE {idx + 1}
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <span className="text-[10px] font-bold tracking-widest text-[#9B0E4E] uppercase block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#1E0412]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6E4955] leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                <div className="lg:col-span-3 p-5 rounded-2xl bg-white border border-[#E5C2CC] text-xs space-y-2">
                  <span className="font-bold text-[#E8B84A] uppercase tracking-wider block">
                    Operator Advantage:
                  </span>
                  <p className="text-[#6E4955] leading-relaxed">{step.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Protocol */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Hygiene Protocols"
            title="FAST 5-MINUTE END-OF-DAY CLEANING"
            subtitle="Commercial cleaning shouldn't take hours. ANY TIME MAAVU food-contact parts disassemble completely without tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cleaningSteps.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#E5C2CC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#1E0412] mb-2">
                    {c.step}
                  </h4>
                  <p className="text-xs text-[#6E4955] leading-relaxed font-body">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#F7E8EC] flex items-center gap-1.5 text-[11px] text-[#9B0E4E] font-semibold">
                  <IconCheck size={14} /> Tool-Less Washdown
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1E0412] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            See the Workflow for Your Business
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our team to request a video demonstration or live
            product evaluation for your retail store or production unit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Talk to Our Team
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
