import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { IconCheck, IconHygiene, IconEfficiency, IconEasyUse } from '../components/common/Icons';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const workflowSteps = [
    {
      num: '01',
      title: 'LOAD BATTER',
      subtitle: 'Pour fermented batter directly into the hopper',
      desc: 'Fill the sanitary SS304 hopper with your preferred idli or dosa batter. The enclosed design protects the batter from airborne contaminants and maintains consistent aeration.',
      tips: 'Hopper holds ample volume to power uninterrupted breakfast rushes.',
    },
    {
      num: '02',
      title: 'SELECT PORTION',
      subtitle: 'Dial in your exact portion weight',
      desc: 'Use the intuitive volume selector to set the portion size. Preset common portion weights for regular idlis, mini idlis, paper roast dosas, or thick set dosas in seconds.',
      tips: 'Chefs can adjust volume in real time without pausing service.',
    },
    {
      num: '03',
      title: 'DISPENSE CLEANLY',
      subtitle: 'Instant positive-displacement pour',
      desc: 'Position your steamer tray or tawa plate and press the actuator. The precision anti-drip nozzle dispenses the exact volume with a razor-sharp cut-off.',
      tips: 'Zero batter dripping onto the hot plate between cycles.',
    },
    {
      num: '04',
      title: 'COOK & SERVE',
      subtitle: 'Flawless portion consistency',
      desc: 'Cook your idli or dosa knowing each portion will cook evenly in identical time. Present consistent diameter, thickness, and weight to your dining customers.',
      tips: 'Reduces customer complaints about unevenly sized or undercooked items.',
    },
  ];

  const cleaningSteps = [
    {
      step: '1. Unlock Quick Latches',
      desc: 'Flip open the tool-free sanitary clamps on the hopper and nozzle in under 30 seconds.',
    },
    {
      step: '2. Rinse With Warm Water',
      desc: 'Flush the stainless contact chamber with standard kitchen tap water or mild food-grade detergent.',
    },
    {
      step: '3. Reassemble for Next Shift',
      desc: 'Snap parts back into place. Zero specialized mechanical tools or technician assistance needed.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            STEP-BY-STEP OPERATIONAL GUIDE
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            HOW IT WORKS
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Engineered for high-volume commercial kitchens with zero learning curve. From hopper fill to clean-down in 4 simple stages.
          </p>
        </div>
      </section>

      {/* Main Workflow Steps */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Kitchen Routine"
            title="THE DAILY 4-STEP DISPENSING CYCLE"
            subtitle="Follow how Any Time Mavu streamlines breakfast and all-day service on busy commercial lines."
          />

          <div className="space-y-12">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF6EE] p-8 lg:p-10 rounded-3xl border border-[#E8DFC8] shadow-sm"
              >
                <div className="lg:col-span-3 flex lg:flex-col items-center justify-between lg:justify-center text-center p-6 bg-white rounded-2xl border border-[#E8DFC8]">
                  <span className="font-display font-black text-5xl lg:text-6xl text-[#E8B84A]">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#072C2E] uppercase mt-2">
                    PHASE {idx + 1}
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <span className="text-[10px] font-bold tracking-widest text-[#0D4B4F] uppercase block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#072C2E]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#566E70] leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                <div className="lg:col-span-3 p-5 rounded-2xl bg-white border border-[#E8DFC8] text-xs space-y-2">
                  <span className="font-bold text-[#E8B84A] uppercase tracking-wider block">
                    Chef Pro-Tip:
                  </span>
                  <p className="text-[#566E70] leading-relaxed">{step.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Protocol */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Hygiene Protocols"
            title="FAST 5-MINUTE END-OF-DAY CLEANING"
            subtitle="Commercial dishwashing shouldn't take an hour. Any Time Mavu contact parts disassemble completely without tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cleaningSteps.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#072C2E] mb-2">{c.step}</h4>
                  <p className="text-xs text-[#566E70] leading-relaxed font-body">{c.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#F6F0E5] flex items-center gap-1.5 text-[11px] text-[#0D4B4F] font-semibold">
                  <IconCheck size={14} /> Tool-Less Modular Wash
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#072C2E] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            See the Workflow in Your Kitchen
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our engineering team to request a video demonstration or live product evaluation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="md" onClick={() => onNavigate('/contact')} withArrow>
              Request Demonstration & Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
