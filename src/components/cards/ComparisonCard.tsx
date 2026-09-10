import React from 'react';
import { IconCheck, IconClose } from '../common/Icons';

export function ComparisonCard() {
  const traditionalSteps = [
    { label: 'Manual Ladle Handling', note: 'Unprotected bowls and open contact' },
    { label: 'Inconsistent Portions', note: 'Variable thickness and weight per idli/dosa' },
    { label: 'Messy Tawa Counter Workflow', note: 'Constant spills, splatter, and counter wiping' },
    { label: 'Repetitive Labor & Fatigue', note: 'Exhausted kitchen staff during rush hours' },
  ];

  const mavuSteps = [
    { label: 'Controlled Enclosed Dispensing', note: 'Zero open air contamination' },
    { label: 'Standardized Portion Control', note: 'Accurate to the milliliter every cycle' },
    { label: 'Pristine, Clean Kitchen Workflow', note: 'Zero counter drips and reduced batter wastage' },
    { label: 'High-Efficiency Kitchen Operation', note: 'Faster output with minimal physical strain' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Traditional Card */}
      <div className="bg-[#1A1A1A] rounded-2xl border-2 border-red-500/30 p-8 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/30">
              <IconClose size={20} color="#F87171" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase block">
                The Painful Reality
              </span>
              <h3 className="font-display font-black text-xl text-white tracking-wide">
                TRADITIONAL MANUAL METHOD
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {traditionalSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <span className="font-display font-bold text-sm text-red-200 block">
                      {step.label}
                    </span>
                    <span className="text-xs text-red-300/70 font-body">
                      {step.note}
                    </span>
                  </div>
                </div>

                {idx < traditionalSteps.length - 1 && (
                  <div className="text-center py-1 text-red-400/50 text-base font-mono">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-red-500/20 text-center">
          <span className="text-xs font-semibold text-red-400">
            Result: 8–15% batter loss & slower service
          </span>
        </div>
      </div>

      {/* With Any Time Mavu Card */}
      <div className="bg-[#0D4B4F] rounded-2xl border-2 border-[#E8B84A] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8B84A]/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8B84A33]">
            <div className="w-9 h-9 rounded-lg bg-[#E8B84A] text-[#072C2E] flex items-center justify-center shadow-md">
              <IconCheck size={20} color="#072C2E" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase block">
                The Food-Tech Solution
              </span>
              <h3 className="font-display font-black text-xl text-white tracking-wide">
                WITH ANY TIME MAVU
              </h3>
            </div>
          </div>

          <div className="space-y-4 relative">
            {mavuSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-4 rounded-xl bg-[#072C2E]/60 border border-[#E8B84A44] flex items-start gap-3 shadow-inner">
                  <span className="w-5 h-5 rounded-full bg-[#E8B84A] text-[#072C2E] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">
                      {step.label}
                    </span>
                    <span className="text-xs text-slate-300 font-body">
                      {step.note}
                    </span>
                  </div>
                </div>

                {idx < mavuSteps.length - 1 && (
                  <div className="text-center py-1 text-[#E8B84A] text-base font-mono">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8B84A33] text-center">
          <span className="text-xs font-bold text-[#E8B84A] tracking-wider uppercase">
            Result: Standardized portions, faster turnover & maximum hygiene
          </span>
        </div>
      </div>
    </div>
  );
}
