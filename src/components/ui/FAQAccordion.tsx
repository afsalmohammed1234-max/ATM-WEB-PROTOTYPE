import React, { useState } from "react"
import { FAQS } from "../../lib/constants"
import { IconChevronDown } from "../common/Icons"

interface FAQAccordionProps {
  categoryFilter?: string
  limit?: number
}

export function FAQAccordion({ categoryFilter, limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryFilter || "All",
  )

  const categories = ["All", "Product", "Commercial", "Hygiene", "Purchase"]

  let filtered = FAQS.filter((faq) => {
    if (selectedCategory === "All") return true
    return faq.category === selectedCategory
  })

  if (limit) {
    filtered = filtered.slice(0, limit)
  }

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      {!categoryFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setOpenIndex(0)
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#9B0E4E] text-white shadow-md"
                  : "bg-[#F7E8EC] text-[#1E0412] hover:bg-[#E5C2CC]"
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
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#9B0E4E] bg-white shadow-lg"
                  : "border-[#E5C2CC] bg-white hover:border-[#9B0E4E]/40"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#1E0412] tracking-tight">
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-transform duration-200 flex-shrink-0 ${
                    isOpen
                      ? "bg-[#E8B84A] text-[#1E0412] rotate-180"
                      : "bg-[#F7E8EC] text-[#9B0E4E]"
                  }`}
                >
                  <IconChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#6E4955] leading-relaxed font-body border-t border-[#F7E8EC]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
