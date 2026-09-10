import React from 'react';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  IconHygiene,
  IconConsistency,
  IconEfficiency,
  IconEasyUse,
  IconClose,
  IconPhone,
  IconWhatsApp,
  IconEmail,
  IconLocation,
} from '../components/common/Icons';
import { VALUE_PROPOSITIONS, APPLICATIONS, COMPANY_INFO } from '../lib/constants';
import { FeatureCard } from '../components/cards/FeatureCard';
import { ApplicationCard } from '../components/cards/ApplicationCard';
import { SpecTable } from '../components/cards/SpecTable';
import { ComparisonCard } from '../components/cards/ComparisonCard';
import { MachineViewer } from '../components/ui/MachineViewer';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { GalleryGrid } from '../components/ui/GalleryGrid';
import { EnquiryForm } from '../components/forms/EnquiryForm';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const problems = [
    { text: 'Inconsistent Portion Quantity', desc: 'No two dosas or idlis weigh the same' },
    { text: 'Messy Counter Dripping & Splatter', desc: 'Continuous sticky spills around the tawa' },
    { text: 'Repetitive Chef Wrist Fatigue', desc: 'Painful ladle scooping during 3-hour morning rushes' },
    { text: 'Hygiene & Airborne Contamination', desc: 'Open batter bowls exposed in warm kitchen air' },
    { text: 'Costly Batter Spoilage & Wastage', desc: 'Up to 15% batter lost to drops and pot residues' },
    { text: 'Sluggish Breakfast Rush Bottleneck', desc: 'Orders stall while chefs slowly ladle each plate' },
  ];

  const steps = [
    {
      num: '01',
      title: 'LOAD',
      desc: 'Fill the sanitary food-grade hopper with your freshly fermented idli or dosa batter.',
    },
    {
      num: '02',
      title: 'SET',
      desc: 'Rotate the precision dial to select the desired portion volume (e.g. 60ml idli, 120ml dosa).',
    },
    {
      num: '03',
      title: 'DISPENSE',
      desc: 'Press the release button. The anti-drip valve dispenses the exact volume onto the plate instantly.',
    },
    {
      num: '04',
      title: 'COOK',
      desc: 'Steam or cook uniformly sized, perfectly portioned idlis or dosas every single service.',
    },
  ];

  const whyFeatures = [
    {
      title: 'HYGIENE',
      description: 'Zero manual contact with batter. Enclosed sanitary chamber protects food safety.',
      iconName: 'hygiene',
    },
    {
      title: 'CONSISTENCY',
      description: 'Precise volumetric portioning ensures identical size, weight, and texture every batch.',
      iconName: 'consistency',
    },
    {
      title: 'EFFICIENCY',
      description: 'Cuts repetitive ladling time in half, accelerating kitchen workflow during peak hours.',
      iconName: 'efficiency',
    },
    {
      title: 'PRODUCTIVITY',
      description: 'Frees up kitchen hands to focus on griddle temperature, plating, and customer service.',
      iconName: 'productivity',
    },
    {
      title: 'SIMPLICITY',
      description: 'Intuitive single-action control requiring zero technical expertise from kitchen staff.',
      iconName: 'simplicity',
    },
    {
      title: 'RELIABILITY',
      description: 'Engineered with Food-Grade 304 Stainless Steel for continuous commercial duty.',
      iconName: 'reliability',
    },
  ];

  return (
    <div className="pt-20">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] flex items-center py-20 lg:py-28 overflow-hidden text-white">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#E8B84A 1px, transparent 1px), radial-gradient(#E8B84A 1px, #072C2E 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E8B84A]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#0D4B4F]/50 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E8B84A] animate-pulse" />
                FOOD TECHNOLOGY · COMMERCIAL KITCHEN EQUIPMENT
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
                SMART BATTER <br />
                DISPENSING. <br />
                <span className="text-[#E8B84A]">BUILT FOR MODERN KITCHENS.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-body max-w-xl">
                A smarter, cleaner way to dispense idli & dosa batter with uncompromising hygiene, portion consistency, and high-volume commercial efficiency.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('/contact')}
                  withArrow
                >
                  Get A Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('/machine')}
                >
                  Explore The Machine
                </Button>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-8 border-t border-[#0D4B4F] grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-display font-black text-2xl text-[#E8B84A]">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Hygienic Sealed Pour</div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl text-[#E8B84A]">Zero</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Counter Drips</div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl text-[#E8B84A]">SS304</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Food-Grade Steel</div>
                </div>
              </div>
            </div>

            {/* Right Hero Product Feature Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-b from-[#0A383C] to-[#062426] rounded-3xl border-2 border-[#E8B84A44] p-6 shadow-2xl flex flex-col items-center justify-center">
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 bg-[#072C2E]/90 border border-[#E8B84A44] px-3 py-1 rounded-full text-[10px] font-bold text-[#E8B84A] uppercase tracking-wider shadow">
                  Aseptic Dispenser
                </div>
                <div className="absolute bottom-12 right-4 bg-[#072C2E]/90 border border-[#E8B84A44] px-3 py-1 rounded-full text-[10px] font-bold text-[#E8B84A] uppercase tracking-wider shadow">
                  Portion Precision
                </div>

                {/* SVG Product Representation */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <svg viewBox="0 0 280 360" fill="none" className="w-full h-auto max-h-[300px]">
                    <rect x="60" y="50" width="160" height="230" rx="14" fill="#0D4B4F" stroke="#E8B84A" strokeWidth="2" />
                    <rect x="70" y="30" width="140" height="30" rx="8" fill="#146368" stroke="#E8B84A" strokeWidth="1.5" />
                    <ellipse cx="140" cy="30" rx="45" ry="10" fill="#E8B84A" opacity="0.3" />
                    <rect x="90" y="80" width="100" height="35" rx="6" fill="#072C2E" stroke="#E8B84A" strokeWidth="1" />
                    <text x="140" y="98" textAnchor="middle" fill="#E8B84A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                      ANY TIME MAVU
                    </text>
                    <text x="140" y="108" textAnchor="middle" fill="#ffffff" fontSize="6.5" opacity="0.7" fontFamily="sans-serif">
                      COMMERCIAL BATTER
                    </text>
                    <circle cx="140" cy="165" r="28" fill="#072C2E" stroke="#E8B84A" strokeWidth="2" />
                    <circle cx="140" cy="165" r="20" fill="#0D4B4F" />
                    <line x1="140" y1="165" x2="152" y2="152" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x="115" y="240" width="50" height="40" rx="4" fill="#072C2E" stroke="#E8B84A" strokeWidth="1.5" />
                    <path d="M132 280 L140 295 L148 280 Z" fill="#E8B84A" />
                    <rect x="75" y="280" width="30" height="12" rx="3" fill="#072C2E" />
                    <rect x="175" y="280" width="30" height="12" rx="3" fill="#072C2E" />
                  </svg>
                </div>

                <div className="w-full mt-2 bg-[#072C2E]/80 border border-[#E8B84A22] rounded-lg py-1 text-center">
                  <span className="text-[9px] font-mono tracking-wider text-[#E8B84A] uppercase">
                    [ACTUAL PRODUCT PHOTO PLACEHOLDER]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. VALUE PROPOSITION STRIP ──────────────── */}
      <section className="bg-[#072C2E] border-y border-[#E8B84A33] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPOSITIONS.map((item) => {
              const getIcon = () => {
                switch (item.iconName) {
                  case 'hygiene':
                    return <IconHygiene size={26} color="#E8B84A" />;
                  case 'consistency':
                    return <IconConsistency size={26} color="#E8B84A" />;
                  case 'efficiency':
                    return <IconEfficiency size={26} color="#E8B84A" />;
                  default:
                    return <IconEasyUse size={26} color="#E8B84A" />;
                }
              };
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D4B4F] border border-[#E8B84A44] flex items-center justify-center flex-shrink-0">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base tracking-wider uppercase mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── 3. THE PROBLEM SECTION ──────────────── */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                theme="cream"
                kicker="Commercial Kitchen Reality"
                title="STILL HANDLING BATTER MANUALLY?"
                subtitle="Traditional ladles were designed for home kitchens, not high-volume commercial operations. When commercial restaurants ladle batter by hand, operational bottlenecks occur daily."
              />
              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate('/machine')}
                withArrow
              >
                See How Mavu Fixes This
              </Button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-red-200/80 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <span className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#072C2E]">
                      {prob.text}
                    </h4>
                    <p className="text-xs text-[#566E70] mt-1 font-body">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 4. THE SOLUTION SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Food-Tech Engineering"
            title="MEET ANY TIME MAVU"
            subtitle="A purpose-built commercial batter dispensing system engineered to keep your tawa clean, your portion sizes identical, and your kitchen operating at peak velocity."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: 'CONSISTENT DISPENSING',
                desc: 'Uniform volume every cycle so every idli and dosa cooks identically.',
              },
              {
                title: 'HYGIENIC HANDLING',
                desc: 'Enclosed sanitary hopper eliminates open-air bacterial exposure.',
              },
              {
                title: 'FASTER WORKFLOW',
                desc: 'Instant single-touch portioning eliminates wrist-weary ladling.',
              },
              {
                title: 'EASY OPERATION',
                desc: 'Zero complex electronics; simple for any kitchen staff to run.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center font-display font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#072C2E] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#566E70] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <MachineViewer />
        </div>
      </section>

      {/* ──────────────── 5. HOW IT WORKS ──────────────── */}
      <section className="bg-[#072C2E] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Operational Simplicity"
            title="HOW IT WORKS IN 4 SIMPLE STEPS"
            subtitle="Designed for seamless adoption. No technical training required for line cooks or breakfast chefs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="bg-[#0D4B4F]/50 rounded-2xl p-6 border border-[#E8B84A33] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0D4B4F]">
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

                <div className="mt-6 pt-4 border-t border-[#0D4B4F] text-[11px] text-[#E8B84A] font-bold uppercase tracking-wider">
                  Commercial Ready →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 6. WHY ANY TIME MAVU ──────────────── */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Commercial Benefits"
            title="BUILT FOR THE WAY MODERN KITCHENS WORK"
            subtitle="Engineered to meet the punishing demands of real food service: non-stop morning runs, high heat, and rapid turnaround."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((feat, idx) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                iconName={feat.iconName}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 7. APPLICATIONS SECTION ──────────────── */}
      <section className="bg-[#072C2E] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            kicker="Versatile Deployment"
            title="ONE MACHINE. MANY FOOD BUSINESSES."
            subtitle="From small standalone tiffin outlets to high-capacity central commissaries, Any Time Mavu integrates directly into your existing kitchen flow."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {APPLICATIONS.map((app) => (
              <ApplicationCard key={app.id} item={app} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('/applications')}
              withArrow
            >
              Explore All Industry Applications
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── 8. COMPARISON SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Operational Comparison"
            title="LESS MESS. MORE CONSISTENCY. BETTER WORKFLOW."
            subtitle="See how switching from manual ladle scoops to Any Time Mavu transforms kitchen economics and staff morale."
          />

          <ComparisonCard />
        </div>
      </section>

      {/* ──────────────── 9. SPECIFICATIONS SECTION ──────────────── */}
      <section className="bg-[#FAF6EE] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Equipment Specs"
            title="ENGINEERED FOR EVERYDAY PERFORMANCE"
            subtitle="Full specifications for kitchen planning, counter space budgeting, and electrical compatibility."
          />

          <div className="max-w-4xl mx-auto">
            <SpecTable onRequestSpecSheet={() => onNavigate('/contact')} />
          </div>
        </div>
      </section>

      {/* ──────────────── 10. GALLERY SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual Demonstration"
            title="SEE IT IN ACTION"
            subtitle="Browse high-resolution photographs and mockups of the Any Time Mavu dispenser in production."
          />

          <GalleryGrid />
        </div>
      </section>

      {/* ──────────────── 11. ABOUT SUMMARY SECTION ──────────────── */}
      <section className="bg-[#072C2E] py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                About Any Time Mavu
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                RETHINKING THE WAY BATTER MOVES THROUGH COMMERCIAL KITCHENS.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                Any Time Mavu was born inside high-pressure commercial kitchens where we saw chefs battling inconsistent ladle pours, messy tawa counters, and mounting batter waste.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                We engineered an industrial dispensing solution specifically for fermented idli and dosa batter — honoring authentic culinary traditions while elevating hygiene, portion repeatability, and speed to modern commercial standards.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('/about')}
                  withArrow
                >
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8B84A44] shadow-2xl p-8 sm:p-10 bg-[#0A383C] flex flex-col items-center justify-center text-center max-w-md w-full">
                <div className="w-48 h-48 rounded-full bg-white p-2.5 shadow-2xl mb-6">
                  <img
                    src="/logo.png"
                    alt="ANY TIME MAVU Brand Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
                  ANY TIME MAVU (ATM)
                </span>
                <p className="text-xs text-slate-300 max-w-sm font-body leading-relaxed">
                  Certified food-tech commercial equipment for modern kitchens and food production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 12. FAQ ACCORDION SECTION ──────────────── */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="cream"
            kicker="Common Queries"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Get fast answers about machine compatibility, cleaning protocol, volume capabilities, and quotation requests."
          />

          <FAQAccordion limit={6} />

          <div className="text-center mt-10">
            <Button
              variant="secondary"
              size="md"
              onClick={() => onNavigate('/faq')}
              withArrow
            >
              View Full FAQ Page
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── 13. FINAL CTA SECTION ──────────────── */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center relative overflow-hidden border-y-2 border-[#E8B84A33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-4 py-1.5 rounded-full border border-[#E8B84A44]">
            Commercial Kitchen Upgrade
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
            READY TO MAKE YOUR KITCHEN SMARTER?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Talk to our food technology team today. We will calculate your estimated batter savings, recommend proper portion presets, and prepare a custom commercial quotation.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('/contact')}
              withArrow
            >
              Get A Quote
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
              withWhatsAppIcon
            >
              Talk To Us on WhatsApp
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-[#E8B84A]"><IconPhone size={16} /></span>
              <span>Direct Sales: {COMPANY_INFO.phonePlaceholder}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E8B84A]"><IconEmail size={16} /></span>
              <span>{COMPANY_INFO.emailPlaceholder}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 14. CONTACT / QUOTE ENQUIRY SECTION ──────────────── */}
      <section className="bg-white py-20 lg:py-28" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                  Get In Touch
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#072C2E] tracking-tight mt-3 mb-4">
                  REQUEST A PRODUCT ENQUIRY
                </h2>
                <p className="text-sm text-[#566E70] leading-relaxed font-body">
                  Interested in the Any Time Mavu batter dispensing machine for your restaurant, hotel, or catering operation? Fill out this enquiry form and our sales team will respond with a tailored quotation and technical spec sheet.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconPhone size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Phone Inquiries</span>
                    <span className="text-sm font-mono text-[#0D4B4F] font-semibold">{COMPANY_INFO.phonePlaceholder}</span>
                    <span className="text-[11px] text-[#566E70] block mt-0.5">Mon–Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <IconWhatsApp size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Direct WhatsApp</span>
                    <span className="text-sm font-mono text-[#0D4B4F] font-semibold">{COMPANY_INFO.whatsappPlaceholder}</span>
                    <span className="text-[11px] text-[#566E70] block mt-0.5">Fastest response for pricing & video demos</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconEmail size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Official Email</span>
                    <span className="text-sm text-[#0D4B4F] font-semibold">{COMPANY_INFO.emailPlaceholder}</span>
                    <span className="text-[11px] text-[#566E70] block mt-0.5">Formal RFP and procurement enquiries</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D4B4F] text-[#E8B84A] flex items-center justify-center flex-shrink-0">
                    <IconLocation size={20} color="#E8B84A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#072C2E] uppercase block">Headquarters & Manufacturing</span>
                    <span className="text-xs text-[#566E70] leading-relaxed block mt-0.5">{COMPANY_INFO.addressPlaceholder}</span>
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
  );
}
