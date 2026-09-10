import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { MachineViewer } from '../components/ui/MachineViewer';
import { SpecTable } from '../components/cards/SpecTable';
import { ComparisonCard } from '../components/cards/ComparisonCard';
import { IconCheck } from '../components/common/Icons';

interface MachinePageProps {
  onNavigate: (path: string) => void;
}

export function MachinePage({ onNavigate }: MachinePageProps) {
  const assemblies = [
    {
      title: 'Aseptic Sealed Hopper',
      material: 'Food-Grade 304 Stainless Steel',
      desc: 'Designed with seamless sanitary welding to prevent batter bacterial buildup. Removable airtight lid preserves ambient temperature and natural fermentation.',
    },
    {
      title: 'Precision Volumetric Valve',
      material: 'Sanitary Dual-Seal Positive Displacement',
      desc: 'Accurately portions predetermined volumes from 40ml to 180ml with clean, instant cut-off. Zero dripping or messy stringing onto burner griddles.',
    },
    {
      title: 'Single-Touch Control Interface',
      material: 'Heavy-Duty Commercial Grade Selector',
      desc: 'Simple rotary preset dial lets chefs instantly toggle between portion sizes for mini idlis, regular idlis, and large roast dosas.',
    },
    {
      title: 'Vibration-Damped Commercial Chassis',
      material: 'Reinforced SS304 with Non-Slip Rubber Feet',
      desc: 'Engineered for steady operation alongside blistering hot commercial griddles, steam boilers, and stainless steel counter tables.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            PRODUCT ARCHITECTURE & ENGINEERING
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            OUR BATTER DISPENSING MACHINE
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            A purpose-built commercial system engineered for relentless daily food service, strict hygiene compliance, and standardized portion accuracy.
          </p>
        </div>
      </section>

      {/* Interactive Machine Showcase */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Interactive Breakdown"
            title="EXPLORE THE SYSTEM COMPONENTS"
            subtitle="Click on the interactive markers to inspect the engineering highlights built into every Any Time Mavu unit."
          />
          <MachineViewer />
        </div>
      </section>

      {/* Sub-Assembly Deep Dive */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Sanitary Construction"
            title="PRECISION FOOD-TECH ASSEMBLIES"
            subtitle="Every component is crafted from certified food-safe materials designed for continuous commercial kitchen duty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assemblies.map((assembly, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E8DFC8] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#F6F0E5]">
                    <span className="font-display font-extrabold text-lg text-[#072C2E]">
                      {assembly.title}
                    </span>
                    <span className="text-[10px] font-bold text-[#E8B84A] uppercase bg-[#E8B84A1A] px-2.5 py-1 rounded border border-[#E8B84A33]">
                      SS304 GRADE
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#0D4B4F] mb-2 uppercase tracking-wide">
                    {assembly.material}
                  </p>

                  <p className="text-xs sm:text-sm text-[#566E70] leading-relaxed font-body">
                    {assembly.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F6F0E5] flex items-center gap-2 text-xs text-[#0D4B4F] font-semibold">
                  <IconCheck size={16} /> Certified Commercial Kitchen Spec
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Full Spec Sheet"
            title="TECHNICAL SPECIFICATIONS"
            subtitle="Official engineering dimensions, power specifications, and operational parameters for kitchen layout planning."
          />

          <SpecTable onRequestSpecSheet={() => onNavigate('/contact')} />
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="bg-[#072C2E] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Why Upgrade"
            title="THE MEASURABLE VALUE OF ACCURACY"
            subtitle="Compare manual scooping against precision automated dispensing."
          />

          <ComparisonCard />

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" onClick={() => onNavigate('/contact')} withArrow>
              Request Commercial Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
