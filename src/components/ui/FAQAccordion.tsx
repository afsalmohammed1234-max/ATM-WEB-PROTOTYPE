import React, { useState } from 'react';
import { FAQS } from '../../lib/constants';
import { IconChevronDown } from '../common/Icons';

interface FAQAccordionProps {
  categoryFilter?: string;
  limit?: number;
}

export function FAQAccordion({ categoryFilter, limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || 'All');

  const categories = ['All', 'Product', 'Commercial', 'Hygiene', 'Purchase'];

  let filtered = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      {!categoryFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0D4B4F] text-white shadow-md'
                  : 'bg-[#F6F0E5] text-[#072C2E] hover:bg-[#E8DFC8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {filtered.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#0D4B4F] bg-white shadow-lg'
                  : 'border-[#E8DFC8] bg-white hover:border-[#0D4B4F]/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#072C2E] tracking-tight">
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-transform duration-200 flex-shrink-0 ${
                    isOpen
                      ? 'bg-[#E8B84A] text-[#072C2E] rotate-180'
                      : 'bg-[#F6F0E5] text-[#0D4B4F]'
                  }`}
                >
                  <IconChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#566E70] leading-relaxed font-body border-t border-[#F6F0E5]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
