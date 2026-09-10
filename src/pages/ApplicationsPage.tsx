import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { APPLICATIONS } from '../lib/constants';
import { ApplicationCard } from '../components/cards/ApplicationCard';

interface ApplicationsPageProps {
  onNavigate: (path: string) => void;
}

export function ApplicationsPage({ onNavigate }: ApplicationsPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#072C2E] via-[#0D4B4F] to-[#072C2E] py-20 lg:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8B84A1A] border border-[#E8B84A44] text-[#E8B84A] text-xs font-bold tracking-widest uppercase">
            COMMERCIAL FOOD SERVICE SECTORS
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            INDUSTRY APPLICATIONS
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl mx-auto">
            Engineered to streamline batter preparation across hotels, restaurants, central commissaries, and bulk institutional catering.
          </p>
        </div>
      </section>

      {/* Grid of Sector Applications */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Target Commercial Kitchens"
            title="PURPOSE-BUILT FOR EVERY COMMERCIAL SETTING"
            subtitle="Whether you prepare 200 idlis per morning or 20,000 dosas daily, Any Time Mavu optimizes speed and eliminates costly batter spills."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICATIONS.map((app) => (
              <ApplicationCard key={app.id} item={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial ROI Section */}
      <section className="bg-[#F6F0E5] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#072C2E] rounded-3xl p-8 sm:p-12 text-white border-2 border-[#E8B84A33] shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase bg-[#E8B84A1A] px-3.5 py-1.5 rounded-full border border-[#E8B84A44]">
                The Commercial Mathematics
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                HOW MUCH BATTER DOES YOUR KITCHEN CURRENTLY WASTE?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                In a typical commercial restaurant preparing 1,500 dosas daily, manual ladle scooping results in an estimated <strong>10% to 15% batter over-portioning and counter drip loss</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0D4B4F] border border-[#E8B84A33]">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">~12–18 Liters</div>
                  <div className="text-xs text-slate-300 mt-1">Batter saved daily per commercial kitchen unit</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0D4B4F] border border-[#E8B84A33]">
                  <div className="font-display font-black text-2xl text-[#E8B84A]">~45 Minutes</div>
                  <div className="text-xs text-slate-300 mt-1">Saved per chef in wrist strain & counter wiping</div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg" onClick={() => onNavigate('/contact')} withArrow>
                  Request Kitchen ROI Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
