import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { IconHygiene, IconConsistency, IconEfficiency, IconReliability, IconCheck } from '../components/common/Icons';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            FOOD TECHNOLOGY × INDUSTRIAL ENGINEERING
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            ABOUT ANY TIME MAVU
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Pioneering hygienic, precision automated batter dispensing solutions for the commercial food service industry.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                Our Foundation
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#072C2E] tracking-tight leading-[1.2]">
                RETHINKING THE WAY BATTER MOVES THROUGH COMMERCIAL KITCHENS.
              </h2>
              <p className="text-sm sm:text-base text-[#566E70] leading-relaxed font-body">
                For generations, commercial kitchens preparing South Indian breakfast staples have operated with unchanged manual methods. Open bowls of batter, erratic ladle scoops, dripping counters, and intense wrist fatigue have been accepted as inevitable kitchen costs.
              </p>
              <p className="text-sm sm:text-base text-[#566E70] leading-relaxed font-body">
                <strong>Any Time Mavu</strong> was founded to challenge this status quo. We asked: <em>Why should one of the world's most beloved food traditions remain anchored to messy, inefficient manual dispensing?</em>
              </p>
              <p className="text-sm sm:text-base text-[#566E70] leading-relaxed font-body">
                Our engineering team spent years analyzing commercial kitchen workflows, batter rheology, and fermentation preservation. The result is a clean, robust, and intuitive machine that elevates commercial kitchens to international food-grade hygiene standards.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#FAF6EE] border border-[#E8DFC8] p-8 sm:p-10 shadow-xl space-y-6">
                <h3 className="font-display font-bold text-xl text-[#072C2E]">
                  Our Core Food-Tech Commitments
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Uncompromising Culinary Hygiene',
                      desc: 'Enclosed sanitary chambers prevent flies, hair, airborne debris, and skin contact from touching fermented food.',
                    },
                    {
                      title: 'Fermentation Bubble Preservation',
                      desc: 'Engineered positive displacement valve safeguards aeration so idlis remain soft and dosas stay light and crisp.',
                    },
                    {
                      title: 'Extreme Commercial Durability',
                      desc: 'Built exclusively with heavy-gauge Food-Grade 304 Stainless Steel for rigorous non-stop commercial breakfast services.',
                    },
                  ].map((comm, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8DFC8]">
                      <span className="text-[#0D4B4F] mt-0.5"><IconCheck size={18} /></span>
                      <div>
                        <h4 className="font-display font-bold text-sm text-[#072C2E]">{comm.title}</h4>
                        <p className="text-xs text-[#566E70] mt-1 leading-relaxed font-body">{comm.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Engineering Standards */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Quality Standards"
            title="ENGINEERED TO COMMERCIAL HEAVY-DUTY SPECIFICATIONS"
            subtitle="We do not build delicate appliances. We build commercial kitchen workhorses meant to dispense thousands of portions daily."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <IconHygiene size={28} color="#0D4B4F" />,
                title: 'SS304 CONTACT PARTS',
                desc: 'Every surface that touches batter is medical-grade stainless steel.',
              },
              {
                icon: <IconConsistency size={28} color="#0D4B4F" />,
                title: 'CALIBRATED ACCURACY',
                desc: 'Precise portion dosing saves commercial kitchens thousands of rupees monthly.',
              },
              {
                icon: <IconEfficiency size={28} color="#0D4B4F" />,
                title: 'RAPID CLEANING',
                desc: 'Tool-less assembly allows staff to clean the machine in under 5 minutes.',
              },
              {
                icon: <IconReliability size={28} color="#0D4B4F" />,
                title: 'LOW MAINTENANCE',
                desc: 'Designed with robust mechanical tolerances for minimal servicing overhead.',
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F6F0E5] flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#072C2E] uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#566E70] leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#072C2E] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            Upgrade Your Kitchen Operations
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Join forward-thinking hotels, cloud kitchens, and restaurant owners standardizing their batter workflow with Any Time Mavu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="md" onClick={() => onNavigate('/contact')} withArrow>
              Request A Quote
            </Button>
            <Button variant="outline" size="md" onClick={() => onNavigate('/machine')}>
              Explore Specifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
