import React from "react"
import { Button } from "../components/common/Button"
import { SectionHeading } from "../components/common/SectionHeading"
import {
  IconHygiene,
  IconConsistency,
  IconEfficiency,
  IconEasyUse,
  IconPhone,
  IconWhatsApp,
  IconEmail,
  IconLocation,
  IconCheck,
} from "../components/common/Icons"
import {
  VALUE_PROPOSITIONS,
  APPLICATIONS,
  COMPANY_INFO,
} from "../lib/constants"
import { FeatureCard } from "../components/cards/FeatureCard"
import { ApplicationCard } from "../components/cards/ApplicationCard"
import { SpecTable } from "../components/cards/SpecTable"
import { ComparisonCard } from "../components/cards/ComparisonCard"
import { MachineViewer } from "../components/ui/MachineViewer"
import { FAQAccordion } from "../components/ui/FAQAccordion"
import { GalleryGrid } from "../components/ui/GalleryGrid"
import { EnquiryForm } from "../components/forms/EnquiryForm"
import { ScrollReveal } from "../components/ui/ScrollReveal"

interface HomePageProps {
  onNavigate: (path: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const problems = [
    {
      text: "Inconsistent Portion Quantity",
      desc: "Variable weight and volume in every manual pack",
    },
    {
      text: "Messy Counter Dripping & Splatter",
      desc: "Sticky spills and wastage around packaging areas",
    },
    {
      text: "Repetitive Manual Strain",
      desc: "Tiring manual ladling and measuring during rush hours",
    },
    {
      text: "Hygiene & Open-Air Exposure",
      desc: "Unsealed batter containers exposed during retail sales",
    },
    {
      text: "Costly Batter Spoilage & Wastage",
      desc: "Lost batter from bowl residues, spills, and drips",
    },
    {
      text: "Slow Order Fulfillment Bottleneck",
      desc: "Customers wait while operators slowly measure each pack",
    },
  ]

  const productFeatures = [
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

  const steps = [
    {
      num: "01",
      title: "LOAD",
      desc: "Fill the prepared batter into the machine's storage/container system.",
    },
    {
      num: "02",
      title: "SELECT",
      desc: "Choose the required quantity or dispensing option.",
    },
    {
      num: "03",
      title: "DISPENSE",
      desc: "The machine accurately dispenses the selected quantity of batter.",
    },
    {
      num: "04",
      title: "PACK & SELL",
      desc: "The batter is filled into the packaging and is ready for the customer.",
    },
  ]

  const machineHighlights = [
    {
      title: "Precision Dispensing",
      description: "Volumetric accuracy with instant cutoff for clean results.",
    },
    {
      title: "Quantity Control",
      description:
        "Adjustable portion presets to match all standard retail pack sizes.",
    },
    {
      title: "Hygienic Batter Handling",
      description:
        "Sanitary sealed container maintains freshness and food safety.",
    },
    {
      title: "Automated Filling",
      description:
        "Fills containers and pouches with minimal human touchpoints.",
    },
    {
      title: "Packaging Integration",
      description:
        "Engineered for smooth integration into retail packaging counters.",
    },
    {
      title: "Easy Operator Interface",
      description:
        "Simple, intuitive controls requiring zero technical background.",
    },
    {
      title: "Compact Commercial Design",
      description:
        "Space-efficient footprint ideal for retail counters and kiosks.",
    },
    {
      title: "Reduced Manual Handling",
      description:
        "Eliminates repetitive ladling, scooping, and counter drips.",
    },
    {
      title: "Faster Customer Service",
      description: "Accelerates queue turnaround during morning rush hours.",
    },
    {
      title: "Consistent Output",
      description:
        "Guarantees the exact same quality and weight in every single pack.",
    },
  ]

  return (
    <div className="pt-20">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] flex items-center py-20 lg:py-28 overflow-hidden text-white">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#E8B84A 1px, transparent 1px), radial-gradient(#E8B84A 1px, #1E0412 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E8B84A]/10 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#9B0E4E]/40 blur-3xl pointer-events-none animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E8B84A] animate-pulse" />
                SMART BATTER DISPENSING SOLUTIONS
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
                Fresh Batter. <br />
                <span className="text-[#E8B84A]">
                  Dispensed & Packed Automatically.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-body max-w-xl">
                ANY TIME MAAVU brings automation to the batter-selling business
                with smart dispensing and packaging machines designed to deliver
                accurate quantities, hygienic packaging, and a seamless customer
                experience.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate("/machine")}
                  withArrow
                >
                  Explore the Machine
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("/how-it-works")}
                >
                  How It Works
                </Button>
              </div>

              {/* Supporting Note */}
              <p className="text-xs text-[#E8B84A] font-semibold tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
                Built for modern batter retail, vending & packaging.
              </p>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-[#9B0E4E]/50 grid grid-cols-3 gap-6 max-w-lg">
                <div className="transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">
                    100%
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    Hygienic Sealed Pour
                  </div>
                </div>
                <div className="transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">
                    Zero
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    Counter Drips
                  </div>
                </div>
                <div className="transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">
                    SS304
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    Food-Grade Steel
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Product Feature Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-b from-[#2D071B] to-[#16020D] rounded-3xl border-2 border-[#E8B84A44] p-6 shadow-2xl flex flex-col items-center justify-center animate-float hover:shadow-[#E8B84A25] transition-all duration-300">
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 bg-[#1E0412]/90 border border-[#E8B84A44] px-3 py-1 rounded-full text-[10px] font-bold text-[#E8B84A] uppercase tracking-wider shadow">
                  Smart Dispenser
                </div>
                <div className="absolute bottom-12 right-4 bg-[#1E0412]/90 border border-[#E8B84A44] px-3 py-1 rounded-full text-[10px] font-bold text-[#E8B84A] uppercase tracking-wider shadow">
                  Pack & Sell Ready
                </div>

                {/* SVG Product Representation */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 280 360"
                    fill="none"
                    className="w-full h-auto max-h-[300px]"
                  >
                    <rect
                      x="60"
                      y="50"
                      width="160"
                      height="230"
                      rx="14"
                      fill="#9B0E4E"
                      stroke="#E8B84A"
                      strokeWidth="2"
                    />
                    <rect
                      x="70"
                      y="30"
                      width="140"
                      height="30"
                      rx="8"
                      fill="#B8115D"
                      stroke="#E8B84A"
                      strokeWidth="1.5"
                    />
                    <ellipse
                      cx="140"
                      cy="30"
                      rx="45"
                      ry="10"
                      fill="#E8B84A"
                      opacity="0.3"
                    />
                    <rect
                      x="85"
                      y="80"
                      width="110"
                      height="36"
                      rx="6"
                      fill="#1E0412"
                      stroke="#E8B84A"
                      strokeWidth="1"
                    />
                    <text
                      x="140"
                      y="98"
                      textAnchor="middle"
                      fill="#E8B84A"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      ANY TIME MAAVU
                    </text>
                    <text
                      x="140"
                      y="108"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="6.5"
                      opacity="0.8"
                      fontFamily="sans-serif"
                    >
                      DISPENSE & PACK
                    </text>
                    <circle
                      cx="140"
                      cy="165"
                      r="28"
                      fill="#1E0412"
                      stroke="#E8B84A"
                      strokeWidth="2"
                    />
                    <circle cx="140" cy="165" r="20" fill="#9B0E4E" />
                    <line
                      x1="140"
                      y1="165"
                      x2="152"
                      y2="152"
                      stroke="#E8B84A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="115"
                      y="240"
                      width="50"
                      height="40"
                      rx="4"
                      fill="#1E0412"
                      stroke="#E8B84A"
                      strokeWidth="1.5"
                    />
                    <path d="M132 280 L140 295 L148 280 Z" fill="#E8B84A" />
                    <rect
                      x="75"
                      y="280"
                      width="30"
                      height="12"
                      rx="3"
                      fill="#1E0412"
                    />
                    <rect
                      x="175"
                      y="280"
                      width="30"
                      height="12"
                      rx="3"
                      fill="#1E0412"
                    />
                  </svg>
                </div>

                <div className="w-full mt-2 bg-[#1E0412]/80 border border-[#E8B84A22] rounded-lg py-1 text-center">
                  <span className="text-[9px] font-mono tracking-wider text-[#E8B84A] uppercase">
                    BATTER DISPENSING & PACKAGING MACHINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. VALUE PROPOSITION STRIP ──────────────── */}
      <section className="bg-[#1E0412] border-y border-[#E8B84A33] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPOSITIONS.map((item) => {
              const getIcon = () => {
                switch (item.iconName) {
                  case "hygiene":
                    return <IconHygiene size={26} color="#E8B84A" />
                  case "consistency":
                    return <IconConsistency size={26} color="#E8B84A" />
                  case "efficiency":
                    return <IconEfficiency size={26} color="#E8B84A" />
                  default:
                    return <IconEasyUse size={26} color="#E8B84A" />
                }
              }
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#9B0E4E] border border-[#E8B84A44] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-[#E8B84A] group-hover:shadow-md">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base tracking-wider uppercase mb-1 transition-colors duration-200 group-hover:text-[#E8B84A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── 3. THE PROBLEM SECTION ──────────────── */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                theme="cream"
                kicker="Commercial Reality"
                title="STILL MEASURING & PACKING BATTER BY HAND?"
                subtitle="Traditional manual measuring and packing methods slow down service, cause messy counter spillage, and result in erratic pack weights during peak hours."
              />
              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate("/machine")}
                withArrow
              >
                See How ANY TIME MAAVU Fixes This
              </Button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, i) => (
                <ScrollReveal key={i} delayMs={i * 60}>
                  <div className="bg-white rounded-xl p-5 border border-red-200/80 shadow-sm flex items-start gap-3.5 hover:shadow-md hover:border-red-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1E0412]">
                        {prob.text}
                      </h4>
                      <p className="text-xs text-[#6E4955] mt-1 font-body">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 4. PRODUCT SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="BATTER DISPENSING & PACKAGING MACHINE"
            title="ONE MACHINE. A SMARTER WAY TO SELL BATTER."
            subtitle="Our automated batter dispensing system is designed to accurately dispense prepared batter and package it into customer-ready quantities. It brings consistency, hygiene and efficiency to the batter-selling process."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {productFeatures.map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 70}>
                <div className="p-6 rounded-2xl bg-[#FCF0F3] border border-[#E5C2CC] flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#E8B84A] hover:shadow-lg transition-all duration-300 h-full">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center font-display font-black text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-base text-[#1E0412] uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E4955] leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <MachineViewer />
        </div>
      </section>

      {/* ──────────────── 5. CUSTOMER EXPERIENCE SECTION ──────────────── */}
      <section className="bg-[#FCF0F3] py-16 lg:py-20 border-b border-[#E5C2CC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#9B0E4E] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#E5C2CC]">
            Customer Experience
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1E0412]">
            A Better Way for Customers to Buy Fresh Batter
          </h2>
          <p className="text-sm sm:text-base text-[#6E4955] max-w-2xl mx-auto leading-relaxed">
            Customers should be able to get the quantity they need without
            waiting for lengthy manual measuring and packing processes. The
            machine creates a faster and more standardized experience:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {[
              { step: "01", title: "CHOOSE", desc: "Select quantity" },
              { step: "02", title: "DISPENSE", desc: "Accurate flow" },
              { step: "03", title: "PACK", desc: "Sealed hygienically" },
              { step: "04", title: "TAKE AWAY", desc: "Ready to enjoy" },
            ].map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E5C2CC] shadow-sm"
              >
                <span className="text-xs font-bold text-[#E8B84A] block mb-1">
                  STAGE {s.step}
                </span>
                <span className="font-display font-extrabold text-sm text-[#1E0412] block">
                  {s.title}
                </span>
                <span className="text-[11px] text-[#6E4955] block mt-0.5">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 6. HOW IT WORKS ──────────────── */}
      <section className="bg-[#1E0412] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Operational Simplicity"
            title="HOW ANY TIME MAAVU WORKS"
            subtitle="From batter to customer-ready pack — with less manual handling."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.num} delayMs={idx * 90}>
                <div className="bg-[#9B0E4E]/30 rounded-2xl p-6 border border-[#E8B84A33] relative flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#E8B84A] hover:shadow-xl hover:shadow-[#9B0E4E33] transition-all duration-300 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#9B0E4E]/50">
                      <span className="font-display font-black text-3xl text-[#E8B84A]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                        STEP {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white tracking-wide uppercase mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#9B0E4E]/50 text-[11px] text-[#E8B84A] font-bold uppercase tracking-wider">
                    Clean & Fast →
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 7. MACHINE FEATURES SECTION ──────────────── */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Product Highlights"
            title="DESIGNED AROUND THE WAY BATTER BUSINESSES WORK"
            subtitle="Engineered to meet the practical day-to-day requirements of commercial batter sales, retail counters, and production facilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {machineHighlights.map((feat, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 40}>
                <div className="bg-white p-5 rounded-xl border border-[#E5C2CC] shadow-sm hover:border-[#E8B84A] hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#FCF0F3] text-[#9B0E4E] flex items-center justify-center font-bold text-xs mb-3 border border-[#E5C2CC]">
                      ✓
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#1E0412] mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#6E4955] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 8. BUSINESS VALUE / APPLICATIONS ──────────────── */}
      <section className="bg-[#1E0412] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Commercial Segments"
            title="BUILT FOR BUSINESSES THAT SELL BATTER"
            subtitle="Whether you operate a batter production unit, retail outlet, supermarket counter, vending point, or growing batter brand, ANY TIME MAAVU helps simplify the dispensing and packaging process."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {APPLICATIONS.map((app, idx) => (
              <ScrollReveal key={app.id} delayMs={idx * 75}>
                <ApplicationCard item={app} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("/solutions")}
              withArrow
            >
              Explore All Business Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── 9. COMPARISON SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Process Comparison"
            title="FROM MANUAL HANDLING TO SMART DISPENSING"
            subtitle="See how switching from manual measuring to ANY TIME MAAVU transforms retail efficiency and customer satisfaction."
          />

          <ScrollReveal>
            <ComparisonCard />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────── 10. SPECIFICATIONS SECTION ──────────────── */}
      <section className="bg-[#FCF0F3] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Equipment Specs"
            title="ENGINEERED FOR EVERYDAY PERFORMANCE"
            subtitle="Standard specifications for retail counter planning, packaging line setup, and electrical compatibility."
          />

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SpecTable onRequestSpecSheet={() => onNavigate("/contact")} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ──────────────── 11. GALLERY SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual Demonstration"
            title="SEE IT IN ACTION"
            subtitle="Inspect photographs and representations of ANY TIME MAAVU machines configured for dispensing and packaging."
          />

          <ScrollReveal>
            <GalleryGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────── 12. ABOUT SUMMARY & BRAND STORY ──────────────── */}
      <section className="bg-[#1E0412] py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                About ANY TIME MAAVU
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                WE’RE AUTOMATING THE WAY BATTER IS SOLD
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                ANY TIME MAAVU is building smarter solutions for the fresh
                batter industry. Our batter dispensing and packaging machines
                are designed to simplify the process of selling ready-to-use
                dosa and idli batter.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                From controlled dispensing to hygienic packaging, our technology
                helps businesses reduce manual handling, improve consistency,
                and create a faster way for customers to purchase fresh batter.
              </p>

              <div className="p-4 rounded-xl bg-[#9B0E4E] border border-[#E8B84A33]">
                <span className="text-xs font-bold text-[#E8B84A] uppercase tracking-wider block mb-1">
                  Our Mission
                </span>
                <p className="text-sm text-white font-semibold">
                  Make fresh batter easier to dispense, pack, sell and scale.
                </p>
              </div>

              {/* Brand Story Snippet */}
              <div className="pt-2 border-t border-[#9B0E4E]/50 space-y-2">
                <h4 className="font-display font-bold text-base text-[#E8B84A]">
                  Tradition in Every Batter. Technology in Every Pack.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Dosa and idli batter are part of everyday food culture. ANY
                  TIME MAAVU is bringing modern automation into the way that
                  batter is dispensed, packaged and sold. We combine the
                  familiarity of fresh batter with the precision and convenience
                  of smart dispensing technology.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate("/about")}
                  withArrow
                >
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8B84A44] shadow-2xl p-8 sm:p-10 bg-[#2D071B] flex flex-col items-center justify-center text-center max-w-md w-full">
                <div className="w-44 h-44 rounded-full bg-white p-2 shadow-2xl mb-6 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="ANY TIME MAAVU Brand Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
                  ANY TIME MAAVU
                </span>
                <p className="text-xs text-slate-300 max-w-sm font-body leading-relaxed">
                  Smart batter dispensing and packaging solutions for modern
                  batter businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 13. FAQ ACCORDION SECTION ──────────────── */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Common Queries"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Quick answers about machine dispensing accuracy, packaging compatibility, hygiene, and quotation requests."
          />

          <FAQAccordion limit={6} />

          <div className="text-center mt-10">
            <Button
              variant="secondary"
              size="md"
              onClick={() => onNavigate("/faq")}
              withArrow
            >
              View Full FAQ Page
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── 14. FINAL CTA SECTION ──────────────── */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center relative overflow-hidden border-y-2 border-[#E8B84A33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-4 py-1.5 rounded-full border border-[#E8B84A44]">
            Scale Your Batter Business
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
            READY TO MAKE BATTER SELLING SMARTER?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Bring speed, consistency and automation to your batter-selling
            business with ANY TIME MAAVU.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("/contact")}
              withArrow
            >
              Talk to Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("/how-it-works")}
            >
              See How It Works
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, "")}`}
              withWhatsAppIcon
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-[#E8B84A]">
                <IconPhone size={16} />
              </span>
              <a
                href={`tel:${COMPANY_INFO.phonePlaceholder.replace(/[^0-9+]/g, "")}`}
                className="hover:text-[#E8B84A] transition-colors"
              >
                Direct Sales: {COMPANY_INFO.phonePlaceholder}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E8B84A]">
                <IconEmail size={16} />
              </span>
              <span>{COMPANY_INFO.emailPlaceholder}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 15. CONTACT / QUOTE ENQUIRY SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                  Get In Touch
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E0412] tracking-tight mt-3 mb-4">
                  REQUEST A PRODUCT ENQUIRY
                </h2>
                <p className="text-sm text-[#6E4955] leading-relaxed font-body">
                  Interested in the ANY TIME MAAVU batter dispensing and
                  packaging machine for your retail outlet, supermarket counter,
                  or production unit? Fill out this enquiry form and our sales
                  team will respond with a tailored quotation and technical spec
                  sheet.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconPhone size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Phone Inquiries
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phonePlaceholder.replace(/[^0-9+]/g, "")}`}
                      className="text-sm font-mono text-[#9B0E4E] font-semibold hover:underline block"
                    >
                      {COMPANY_INFO.phonePlaceholder}
                    </a>
                    <span className="text-[11px] text-[#6E4955] block mt-0.5">
                      Mon–Sat, 9:00 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <IconWhatsApp size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Direct WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-[#9B0E4E] font-semibold hover:underline block"
                    >
                      {COMPANY_INFO.whatsappPlaceholder}
                    </a>
                    <span className="text-[11px] text-[#6E4955] block mt-0.5">
                      Fastest response for pricing & machine demos
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconEmail size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Official Email
                    </span>
                    <span className="text-sm text-[#9B0E4E] font-semibold">
                      {COMPANY_INFO.emailPlaceholder}
                    </span>
                    <span className="text-[11px] text-[#6E4955] block mt-0.5">
                      Commercial quotations and dealer inquiries
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FCF0F3] border border-[#E5C2CC] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9B0E4E] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconLocation size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1E0412] uppercase block">
                      Headquarters & Manufacturing
                    </span>
                    <span className="text-xs text-[#6E4955] leading-relaxed block mt-0.5">
                      {COMPANY_INFO.addressPlaceholder}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
