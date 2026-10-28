import React from "react"
import { SectionHeading } from "../components/common/SectionHeading"
import { Button } from "../components/common/Button"
import { APPLICATIONS } from "../lib/constants"
import { ApplicationCard } from "../components/cards/ApplicationCard"

interface ApplicationsPageProps {
  onNavigate: (path: string) => void
}

export function ApplicationsPage({ onNavigate }: ApplicationsPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E0412] via-[#9B0E4E] to-[#1E0412] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            COMMERCIAL SOLUTIONS & SECTORS
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            BUILT FOR BUSINESSES THAT SELL BATTER
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Whether you operate a batter production unit, retail outlet,
            supermarket counter, vending point, or growing batter brand, ANY
            TIME MAAVU helps simplify the dispensing and packaging process.
          </p>
        </div>
      </section>

      {/* Grid of Sector Solutions */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E5C2CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Target Commercial Segments"
            title="AUTOMATION ACROSS EVERY BATTER SALES CHANNEL"
            subtitle="From neighborhood retail counters to centralized production units, ANY TIME MAAVU standardizes portions and speeds up customer orders."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICATIONS.map((app) => (
              <ApplicationCard key={app.id} item={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Value Section */}
      <section className="bg-[#F7E8EC] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E0412] rounded-3xl p-8 sm:p-12 text-white border-2 border-[#E8B84A33] shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                Business Value & ROI
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                HOW MUCH BATTER AND TIME CAN AUTOMATION SAVE?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                In fresh batter retail and commercial production, manual ladle
                measuring causes an estimated{" "}
                <strong>
                  8% to 15% batter over-portioning, spillage, and container drip
                  loss
                </strong>
                , alongside slower order turnaround.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#9B0E4E] border border-[#E8B84A33]">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">
                    Standardized
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Exact volume in every pouch or container
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#9B0E4E] border border-[#E8B84A33]">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">
                    Faster Sales
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Substantially reduced queue waiting time
                  </div>
                </div>
              </div>

              <div className="pt-4">
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
          </div>
        </div>
      </section>
    </div>
  )
}
