import React, { useState } from "react"
import { EnquirySubmission, BusinessType } from "../../types"
import { submitEnquiry } from "../../lib/supabase"
import { Button } from "../common/Button"
import { IconCheck, IconPhone, IconWhatsApp } from "../common/Icons"
import { COMPANY_INFO } from "../../lib/constants"

interface EnquiryFormProps {
  defaultEnquiryType?: "quote" | "general_enquiry"
  title?: string
  subtitle?: string
  className?: string
}

const BUSINESS_TYPES: BusinessType[] = [
  "Batter Retail Store",
  "Batter Production Unit",
  "Supermarket / Retail Counter",
  "Batter Vending Point",
  "Growing Batter Brand",
  "Restaurant / Hotel",
  "Catering / Cloud Kitchen",
  "Other",
]

export function EnquiryForm({
  defaultEnquiryType = "quote",
  title = "Request a Product Quotation",
  subtitle = "Fill in your business details below and our team will get back to you with pricing, technical specs, and delivery timelines.",
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    business_type: "Batter Retail Store",
    enquiry_type: defaultEnquiryType,
    product: "ANY TIME MAAVU Batter Dispensing & Packaging Machine",
    message: "",
  })

  const [honeypot, setHoneypot] = useState("") // Anti-bot trap
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    // If bot filled hidden honeypot, silently pretend success
    if (honeypot) {
      setSubmitted(true)
      return
    }

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.phone.trim() ||
      !formData.city.trim()
    ) {
      setErrorMessage(
        "Please fill in all required fields (Name, Company, Phone Number, and City).",
      )
      return
    }

    setSubmitting(true)
    const result = await submitEnquiry(formData)
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setErrorMessage(
        result.error ||
          "Failed to submit enquiry. Please try again or reach out on WhatsApp.",
      )
    }
  }

  if (submitted) {
    return (
      <div
        className={`bg-white rounded-2xl border-2 border-[#E8B84A] p-8 md:p-12 text-center shadow-xl ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-[#E8B84A22] text-[#1E0412] flex items-center justify-center mx-auto mb-6 border-2 border-[#E8B84A]">
          <IconCheck size={32} color="#9B0E4E" />
        </div>

        <span className="text-xs font-bold tracking-widest text-[#E8B84A] uppercase block mb-2">
          Enquiry Received Successfully
        </span>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1E0412] mb-3">
          Thank You, {formData.name}!
        </h3>
        <p className="text-[#6E4955] text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
          Our food technology team has received your enquiry for{" "}
          <strong className="text-[#1E0412]">{formData.company}</strong>. We
          will review your kitchen requirements and contact you promptly via
          phone or WhatsApp.
        </p>

        <div className="p-4 rounded-xl bg-[#F7E8EC] border border-[#E5C2CC] max-w-sm mx-auto mb-8 flex items-center justify-center gap-3">
          <IconWhatsApp size={22} className="text-[#25D366]" />
          <div className="text-left text-xs">
            <span className="font-bold text-[#1E0412] block">
              Need an immediate quote?
            </span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hi, I just submitted an enquiry for ${formData.company}. Can you send the quote?`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9B0E4E] font-bold underline hover:text-[#E8B84A]"
            >
              Direct WhatsApp Chat →
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: "",
              company: "",
              phone: "",
              email: "",
              city: "",
              business_type: "Batter Retail Store",
              enquiry_type: defaultEnquiryType,
              product: "ANY TIME MAAVU Batter Dispensing & Packaging Machine",
              message: "",
            })
          }}
          className="text-xs font-bold tracking-wider text-[#9B0E4E] hover:text-[#E8B84A] uppercase underline transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <div
      className={`bg-white rounded-2xl border border-[#E5C2CC] p-6 sm:p-10 shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9B0E4E] via-[#E8B84A] to-[#9B0E4E]" />

      <div className="mb-8">
        <span className="text-[11px] font-bold tracking-widest text-[#E8B84A] uppercase block mb-1">
          B2B Commercial Kitchen Enquiry
        </span>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E0412] tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#6E4955] mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Honeypot to block spambots */}
        <input
          type="text"
          name="extra_check"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              Company / Restaurant Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Saravana Caterers / Grand Residency"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              Phone / WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                placeholder="+91 98400 00000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@business.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.business_type}
              onChange={(e) =>
                setFormData({ ...formData, business_type: e.target.value })
              }
              className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB] cursor-pointer"
            >
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
              City / State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chennai, Tamil Nadu"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
            Interested Product
          </label>
          <input
            type="text"
            readOnly
            value={formData.product}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5C2CC] bg-[#F7E8EC]/60 text-xs font-semibold text-[#9B0E4E] cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0412] mb-1.5">
            Your Business Requirements / Daily Dispensing Volume
          </label>
          <textarea
            rows={3}
            placeholder="e.g. We operate a fresh batter retail counter and need automated dispensing & packaging for 200+ packs daily..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-3.5 py-3 rounded-lg border border-[#D1D9D9] focus:border-[#9B0E4E] focus:ring-2 focus:ring-[#E8B84A44] outline-none text-sm text-[#1E0412] transition-all bg-[#FAFBFB] resize-none"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            loading={submitting}
            withArrow
          >
            Send Enquiry
          </Button>
          <p className="text-[11px] text-center text-[#6E4955] mt-3">
            🔒 Your contact details are strictly confidential and used solely
            for your product quotation.
          </p>
        </div>
      </form>
    </div>
  )
}
