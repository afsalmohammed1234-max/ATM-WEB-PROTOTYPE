import { MachineSpec, FAQItem, ApplicationItem } from "../types"

export const COMPANY_INFO = {
  name: "ANY TIME MAAVU",
  tagline: "Smart Batter Dispensing & Packaging Solutions",
  description:
    "ANY TIME MAAVU brings automation to the batter-selling business with smart dispensing and packaging machines designed to deliver accurate quantities, hygienic packaging, and a seamless customer experience.",
  phonePlaceholder: "+91 99409 65032",
  whatsappPlaceholder: "+91 99409 65032",
  emailPlaceholder: "sales@anytimemaavu.com",
  supportEmail: "support@anytimemaavu.com",
  addressPlaceholder:
    "Plot No. 42, Food Tech Industrial Zone, Chennai, Tamil Nadu - 600001, India",
  productName: "ANY TIME MAAVU Batter Dispensing & Packaging Machine",
  social: {
    instagram: "https://instagram.com/anytimemaavu",
    facebook: "https://facebook.com/anytimemaavu",
    linkedin: "https://linkedin.com/company/anytimemaavu",
    youtube: "https://youtube.com/@anytimemaavu",
  },
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Machine", href: "/machine" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
]

export const VALUE_PROPOSITIONS = [
  {
    title: "ACCURATE DISPENSING",
    description:
      "Dispense consistent quantities with better control and reduced wastage.",
    iconName: "consistency",
  },
  {
    title: "HYGIENIC PACKAGING",
    description:
      "Minimize manual handling and maintain a cleaner, sealed packaging process.",
    iconName: "hygiene",
  },
  {
    title: "FAST & CONVENIENT",
    description:
      "Speed up the process of preparing customer orders during peak hours.",
    iconName: "efficiency",
  },
  {
    title: "EASY OPERATION",
    description:
      "Designed for simple, practical day-to-day operation with minimal staff training.",
    iconName: "easyUse",
  },
]

export const MACHINE_SPECS: MachineSpec[] = [
  {
    label: "Hopper Capacity",
    value: "[ADD SPECIFICATION — e.g. 15 Liters / 25 Liters]",
    category: "Capacity",
    isPlaceholder: true,
  },
  {
    label: "Dispensing Range",
    value: "[ADD SPECIFICATION — e.g. 250ml – 1000ml per pack]",
    category: "General",
    isPlaceholder: true,
  },
  {
    label: "Dispensing Speed",
    value: "[ADD SPECIFICATION — e.g. Up to 15 packs / minute]",
    category: "General",
    isPlaceholder: true,
  },
  {
    label: "Compatible Batters",
    value: "Fresh Dosa Batter, Idli Batter, Multigrain / Millet Batter",
    category: "General",
    isPlaceholder: false,
  },
  {
    label: "Power Supply",
    value: "[ADD SPECIFICATION — e.g. 220V AC, 50Hz, Single Phase]",
    category: "Electrical",
    isPlaceholder: true,
  },
  {
    label: "Power Consumption",
    value: "[ADD SPECIFICATION — e.g. 150 Watts Eco-Drive]",
    category: "Electrical",
    isPlaceholder: true,
  },
  {
    label: "Material Construction",
    value: "Food-Grade 304 Stainless Steel (SS304) Contact Parts",
    category: "Physical",
    isPlaceholder: false,
  },
  {
    label: "Dimensions (W × D × H)",
    value: "[ADD SPECIFICATION — e.g. 380 × 450 × 720 mm]",
    category: "Physical",
    isPlaceholder: true,
  },
  {
    label: "Machine Weight",
    value: "[ADD SPECIFICATION — e.g. 22 kg]",
    category: "Physical",
    isPlaceholder: true,
  },
  {
    label: "Cleaning Time",
    value: "Under 5 minutes (Quick-release modular parts)",
    category: "General",
    isPlaceholder: false,
  },
  {
    label: "Warranty",
    value:
      "[ADD SPECIFICATION — e.g. 1 Year Comprehensive Commercial Warranty]",
    category: "General",
    isPlaceholder: true,
  },
]

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "retail-stores",
    title: "Batter Retail Stores",
    description:
      "Make customer orders faster and more consistent. Eliminate ladle drips and provide clean, standardized batter packs on demand.",
    benefits: [
      "Faster customer order fulfillment",
      "Consistent portion and pack weight",
      "Clean, modern counter presentation",
    ],
    imagePlaceholderText: "Fresh Batter Retail Store Counter",
    unsplashId: "1555396273-367ea4eb4db5",
  },
  {
    id: "production-units",
    title: "Batter Production Units",
    description:
      "Improve the efficiency of your packaging workflow. Automate filling into containers or pouches with minimal manual intervention.",
    benefits: [
      "Streamlined packaging workflow",
      "Substantially reduced manual handling",
      "High repeatability across batches",
    ],
    imagePlaceholderText: "Batter Production & Packaging Line",
    unsplashId: "1581092160607-ee22621dd758",
  },
  {
    id: "supermarkets",
    title: "Supermarkets & Retail Counters",
    description:
      "Create a convenient fresh-batter dispensing experience right inside retail supermarkets and grocery departments.",
    benefits: [
      "Live fresh-batter dispensing",
      "Zero spillage or messy counters",
      "Attracts foot-traffic with hygiene",
    ],
    imagePlaceholderText: "Supermarket Fresh Food Section",
    unsplashId: "1582719478250-c89cae4dc85b",
  },
  {
    id: "vending-points",
    title: "Batter Vending Points",
    description:
      "Enable automated customer-facing batter dispensing. Allow customers to select quantity and receive freshly packed batter quickly.",
    benefits: [
      "Automated portion dispensing",
      "Quick customer turnaround",
      "Ideal for high-density residential kiosks",
    ],
    imagePlaceholderText: "Automated Food Vending Counter",
    unsplashId: "1556910103-1c02745aae4d",
  },
  {
    id: "growing-brands",
    title: "Growing Batter Brands",
    description:
      "Build a scalable and standardized selling process across retail franchises and regional distribution outlets.",
    benefits: [
      "Standardized brand customer experience",
      "Consistent product packaging quality",
      "Easy operational replication",
    ],
    imagePlaceholderText: "Multi-outlet Commercial Kitchens",
    unsplashId: "1511795409834-ef04bbd61622",
  },
  {
    id: "commercial-kitchens",
    title: "Commercial Food Outlets",
    description:
      "Suitable for restaurants, catering hubs, and commissaries seeking standardized batter portioning for daily prep.",
    benefits: [
      "Accurate dispensing and reduced wastage",
      "Quick staff operation",
      "Robust SS304 construction",
    ],
    imagePlaceholderText: "Central Preparation Kitchen",
    unsplashId: "1577106263724-2c8e03bfe9cf",
  },
]

export const FAQS: FAQItem[] = [
  {
    question: "What is ANY TIME MAAVU?",
    answer:
      "ANY TIME MAAVU develops and provides smart batter dispensing and packaging machines designed specifically for businesses that sell fresh dosa and idli batter. Our machines automate the process of dispensing accurate quantities and packaging batter hygienically and consistently.",
    category: "Product",
  },
  {
    question: "Who is the ANY TIME MAAVU machine built for?",
    answer:
      "The machine is designed for businesses that sell fresh batter: batter retail stores, commercial batter production units, supermarkets & grocery counters, automated batter vending points, and expanding batter brands.",
    category: "Commercial",
  },
  {
    question: "What does the machine do?",
    answer:
      "The machine allows an operator or customer to: 1. Load prepared batter into the storage system, 2. Select the required quantity, 3. Dispense an accurate quantity of batter, 4. Automatically fill into a container or pouch, and 5. Provide a hygienic, ready-to-sell pack to the customer.",
    category: "Product",
  },
  {
    question: "How does it improve over traditional manual measuring?",
    answer:
      "Traditional manual measuring involves repeated handling, variable quantities, slower customer service, higher spillage, and fatigue during peak hours. ANY TIME MAAVU delivers controlled dispensing, consistent quantities, hygienic handling, faster service, and reduced wastage.",
    category: "Product",
  },
  {
    question: "Is the machine easy to operate and clean?",
    answer:
      "Yes. The machine is engineered for simple, practical day-to-day operation. All contact surfaces are made of Food-Grade 304 Stainless Steel and feature quick-release modular parts that can be disassembled and cleaned in under 5 minutes without tools.",
    category: "Hygiene",
  },
  {
    question: "How does ANY TIME MAAVU help scale a batter business?",
    answer:
      "By standardizing quantity control and packaging speed, ANY TIME MAAVU helps businesses fulfill customer orders faster, eliminate wastage, and maintain consistent quality across multiple outlets or retail counters.",
    category: "Commercial",
  },
  {
    question: "How can our business get the machine or request a demo?",
    answer:
      "You can submit the enquiry form on our website, connect directly with us on WhatsApp, or call our sales hotline. Our team will provide a tailored quote and arrange an operational demonstration.",
    category: "Purchase",
  },
  {
    question: "What after-sales and warranty support is provided?",
    answer:
      "Every ANY TIME MAAVU machine comes with comprehensive warranty coverage, staff operating guidance, and reliable technical support to ensure uninterrupted daily business operations.",
    category: "Purchase",
  },
]
