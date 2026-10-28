export type BusinessType = "Batter Retail Store" | "Batter Production Unit" | "Supermarket / Retail Counter" | "Batter Vending Point" | "Growing Batter Brand" | "Restaurant / Hotel" | "Catering / Cloud Kitchen" | "Other"

export type EnquiryType = "general_enquiry" | "quote" | "demo_request"

export type EnquiryStatus = "new" | "contacted" | "interested" | "converted" | "closed"

export interface EnquirySubmission {
  name: string
  company: string
  phone: string
  email?: string
  city: string
  business_type: BusinessType | string
  enquiry_type?: EnquiryType
  product?: string
  message?: string
}

export interface EnquiryRecord extends EnquirySubmission {
  id: string
  created_at: string
  status: EnquiryStatus
}

export interface MachineSpec {
  label: string
  value: string
  category?: "General" | "Electrical" | "Capacity" | "Physical"
  isPlaceholder?: boolean
}

export interface FAQItem {
  question: string
  answer: string
  category?: "Product" | "Hygiene" | "Commercial" | "Purchase"
}

export interface ApplicationItem {
  id: string
  title: string
  description: string
  benefits: string[]
  imagePlaceholderText: string
  unsplashId?: string
}
