import React, { useState } from 'react';
import { IconCheck } from '../common/Icons';

interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: string; // CSS %
  y: string; // CSS %
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'hopper',
    title: 'Aseptic Sealed Hopper',
    description: 'Airlock cover protects fermented batter from airborne particulates and keeps ambient temperature stable.',
    x: '50%',
    y: '18%',
  },
  {
    id: 'dial',
    title: 'Portion Control Interface',
    description: 'Simple rotary or digital selector to toggle portion sizes for small idli, regular idli, paper roast, or set dosa.',
    x: '50%',
    y: '48%',
  },
  {
    id: 'nozzle',
    title: 'Anti-Drip Dispensing Head',
    description: 'Precision cut-off valve ensures instant batter cutoff with zero counter dripping or stringing.',
    x: '50%',
    y: '72%',
  },
  {
    id: 'body',
    title: 'Food-Grade SS304 Chassis',
    description: 'Built with heavy-gauge stainless steel for maximum commercial corrosion resistance and quick wipe-downs.',
    x: '22%',
    y: '55%',
  },
];

const VIEWS = [
  { id: 'front', label: 'Front Overview', placeholder: 'FRONT ELEVATION VIEW' },
  { id: 'dispenser', label: 'Dispenser Nozzle', placeholder: 'DISPENSING MECHANISM & VALVE' },
  { id: 'control', label: 'Control Dial', placeholder: 'PRECISION PORTION SELECTOR' },
  { id: 'kitchen', label: 'Kitchen Installation', placeholder: 'COMMERCIAL TAWA / STEAMER COUNTER' },
];

export function MachineViewer() {
  const [activeView, setActiveView] = useState('front');
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);

  return (
    <div className="bg-[#072C2E] rounded-3xl border-2 border-[#0D4B4F] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8B84A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0D4B4F]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top View Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#0D4B4F]">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block">
            Interactive Product Showcase
          </span>
          <h3 className="font-display font-extrabold text-2xl text-white">
            Any Time Mavu Batter Dispenser
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-[#0A383C] p-1.5 rounded-xl border border-[#0D4B4F]">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveView(v.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeView === v.id
                  ? 'bg-[#E8B84A] text-[#072C2E] shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Machine Visual Display with Hotspots */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-b from-[#0A383C] to-[#062426] rounded-2xl border border-[#E8B84A33] p-6 flex flex-col items-center justify-center shadow-inner group">
            {/* Tech Grid Pattern */}
            <div
              className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#E8B84A 1px, transparent 1px), radial-gradient(#E8B84A 1px, #062426 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Industrial Diagram Representation */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              <svg
                viewBox="0 0 320 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-h-[360px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
              >
                {/* Main Enclosure */}
                <rect x="70" y="70" width="180" height="260" rx="16" fill="#0D4B4F" stroke="#E8B84A" strokeWidth="2.5" />
                {/* Top Sanitary Lid */}
                <rect x="80" y="45" width="160" height="35" rx="10" fill="#146368" stroke="#E8B84A" strokeWidth="2" />
                <ellipse cx="160" cy="45" rx="55" ry="12" fill="#E8B84A" opacity="0.25" />
                {/* Brand Plaque */}
                <rect x="105" y="95" width="110" height="40" rx="6" fill="#072C2E" stroke="#E8B84A" strokeWidth="1" />
                <text x="160" y="115" textAnchor="middle" fill="#E8B84A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  ANY TIME MAVU
                </text>
                <text x="160" y="127" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="sans-serif" opacity="0.8">
                  COMMERCIAL SERIES
                </text>
                {/* Portion Dial */}
                <circle cx="160" cy="185" r="32" fill="#072C2E" stroke="#E8B84A" strokeWidth="2" />
                <circle cx="160" cy="185" r="24" fill="#0D4B4F" />
                <line x1="160" y1="185" x2="175" y2="170" stroke="#E8B84A" strokeWidth="3" strokeLinecap="round" />
                {/* Status Indicator */}
                <circle cx="160" cy="155" r="4" fill="#25D366" />
                {/* Dispensing Spout */}
                <rect x="135" y="270" width="50" height="45" rx="6" fill="#072C2E" stroke="#E8B84A" strokeWidth="1.8" />
                <rect x="147" y="315" width="26" height="25" fill="#146368" stroke="#E8B84A" strokeWidth="1.5" />
                <path d="M152 340 L160 355 L168 340 Z" fill="#E8B84A" />
                {/* Anti-vibration Heavy Base Feet */}
                <rect x="90" y="330" width="35" height="14" rx="4" fill="#072C2E" stroke="#0D4B4F" strokeWidth="2" />
                <rect x="195" y="330" width="35" height="14" rx="4" fill="#072C2E" stroke="#0D4B4F" strokeWidth="2" />
              </svg>

              {/* Interactive Hotspot Pins */}
              {activeView === 'front' &&
                HOTSPOTS.map((spot) => {
                  const isSelected = activeHotspot?.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      style={{ left: spot.x, top: spot.y }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-20 cursor-pointer ${
                        isSelected
                          ? 'bg-[#E8B84A] text-[#072C2E] scale-125 shadow-lg shadow-[#E8B84A]'
                          : 'bg-[#072C2E] text-white border-2 border-[#E8B84A] hover:scale-110'
                      }`}
                      title={spot.title}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-current" />
                      {isSelected && (
                        <span className="absolute inset-0 rounded-full bg-[#E8B84A] animate-ping opacity-40" />
                      )}
                    </button>
                  );
                })}
            </div>

            {/* Clear Image Placeholder Label */}
            <div className="absolute bottom-3 left-3 right-3 text-center bg-[#072C2E]/90 px-3 py-1.5 rounded-lg border border-[#E8B84A22]">
              <span className="text-[10px] font-mono tracking-widest text-[#E8B84A] uppercase">
                [ACTUAL PRODUCT PHOTOGRAPHY PLACEHOLDER — {VIEWS.find((v) => v.id === activeView)?.placeholder}]
              </span>
            </div>
          </div>
        </div>

        {/* Feature Detail Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0A383C] p-6 rounded-2xl border border-[#0D4B4F]">
            <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
              Component Focus
            </span>
            <h4 className="font-display font-extrabold text-xl text-white mb-2">
              {activeHotspot ? activeHotspot.title : 'Food-Tech Engineering'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-body">
              {activeHotspot
                ? activeHotspot.description
                : 'Click any marker pin on the machine to explore sanitary design features.'}
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
              Standard Commercial Highlights:
            </span>
            {[
              'Zero batter aerating loss during dispensing',
              'Quick tool-less wash disassembly under 5 mins',
              'Non-stick, food-grade contact components',
              'Heavy-duty commercial vibration-damped base',
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0D4B4F]/40 border border-[#0D4B4F] text-xs text-slate-200"
              >
                <span className="text-[#E8B84A]">
                  <IconCheck size={16} />
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#E8B84A1A] border border-[#E8B84A44] flex items-center justify-between">
            <div className="text-xs">
              <span className="font-bold text-[#E8B84A] block uppercase">Need Custom Kitchen Fitting?</span>
              <span className="text-slate-300">Custom height risers & tawa clamps available.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
