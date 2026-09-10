import { MachineSpec, FAQItem, ApplicationItem } from '../types';

export const COMPANY_INFO = {
  name: 'ANY TIME MAVU',
  tagline: 'Smart Batter Dispensing for Modern Kitchens',
  description: 'Developing hygienic, consistent, and efficient batter dispensing machines for commercial kitchens and food businesses.',
  phonePlaceholder: '+91 84280 46662',
  whatsappPlaceholder: '+91 84280 46662',
  emailPlaceholder: 'sales@anytimemavu.com',
  supportEmail: 'support@anytimemavu.com',
  addressPlaceholder: 'Plot No. 42, Food Tech Industrial Zone, Chennai, Tamil Nadu - 600001, India',
  productName: 'Any Time Mavu Commercial Batter Dispensing Machine',
  social: {
    instagram: 'https://instagram.com/anytimemavu',
    facebook: 'https://facebook.com/anytimemavu',
    linkedin: 'https://linkedin.com/company/anytimemavu',
    youtube: 'https://youtube.com/@anytimemavu',
  }
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Machine', href: '/machine' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Applications', href: '/applications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'HYGIENIC',
    description: 'Enclosed dispenser minimizes contact and airborne contamination in bustling commercial kitchens.',
    iconName: 'hygiene',
  },
  {
    title: 'CONSISTENT',
    description: 'Uniform portioning ensures every single idli and dosa is identical in weight and texture.',
    iconName: 'consistency',
  },
  {
    title: 'EFFICIENT',
    description: 'Eliminates messy ladling, speeds up griddle service, and cuts kitchen prep hours in half.',
    iconName: 'efficiency',
  },
  {
    title: 'EASY TO USE',
    description: 'Intuitive single-touch or knob operation with quick-disassembly parts for simple end-of-day wash.',
    iconName: 'easyUse',
  },
];

export const MACHINE_SPECS: MachineSpec[] = [
  { label: 'Hopper Capacity', value: '[ADD SPECIFICATION — e.g. 15 Liters / 25 Liters]', category: 'Capacity', isPlaceholder: true },
  { label: 'Dispensing Range', value: '[ADD SPECIFICATION — e.g. 40ml – 180ml per cycle]', category: 'General', isPlaceholder: true },
  { label: 'Dispensing Speed', value: '[ADD SPECIFICATION — e.g. Up to 60 portions / minute]', category: 'General', isPlaceholder: true },
  { label: 'Compatible Batters', value: 'Idli Batter, Dosa Batter, Vada / Paniyaram Batter', category: 'General', isPlaceholder: false },
  { label: 'Power Supply', value: '[ADD SPECIFICATION — e.g. 220V AC, 50Hz, Single Phase]', category: 'Electrical', isPlaceholder: true },
  { label: 'Power Consumption', value: '[ADD SPECIFICATION — e.g. 150 Watts Eco-Drive]', category: 'Electrical', isPlaceholder: true },
  { label: 'Material Construction', value: 'Food-Grade 304 Stainless Steel (SS304) Contact Parts', category: 'Physical', isPlaceholder: false },
  { label: 'Dimensions (W × D × H)', value: '[ADD SPECIFICATION — e.g. 350 × 420 × 650 mm]', category: 'Physical', isPlaceholder: true },
  { label: 'Machine Weight', value: '[ADD SPECIFICATION — e.g. 18 kg]', category: 'Physical', isPlaceholder: true },
  { label: 'Cleaning Time', value: 'Under 5 minutes (Quick-release modular parts)', category: 'General', isPlaceholder: false },
  { label: 'Warranty', value: '[ADD SPECIFICATION — e.g. 1 Year Comprehensive Commercial Warranty]', category: 'General', isPlaceholder: true },
];

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: 'hotels',
    title: 'Hotels & Breakfast Buffets',
    description: 'Keep up with high-pressure breakfast rushes. Deliver pristine, identical idlis and dosas to guests every morning.',
    benefits: ['Rapid breakfast service', 'Zero dripping on buffet counters', 'Standardized presentation'],
    imagePlaceholderText: 'Commercial Hotel Kitchen Setup',
    unsplashId: '1582719478250-c89cae4dc85b',
  },
  {
    id: 'restaurants',
    title: 'Idli & Dosa Restaurants',
    description: 'Designed specifically for high-turnover South Indian restaurants where chef speed and consistency are vital.',
    benefits: ['Cuts chef wrist fatigue', 'Uniform thickness and diameter', 'Speed during peak lunch & dinner'],
    imagePlaceholderText: 'Restaurant Tawa & Batter Prep',
    unsplashId: '1555396273-367ea4eb4db5',
  },
  {
    id: 'catering',
    title: 'Catering Businesses',
    description: 'Feed hundreds or thousands of wedding and banquet guests without batter spillage or erratic portion counts.',
    benefits: ['Accurate inventory planning', 'Mobile and easy to transport', 'Hygienic open-counter presentation'],
    imagePlaceholderText: 'Large Event Banquet Catering',
    unsplashId: '1511795409834-ef04bbd61622',
  },
  {
    id: 'cloud-kitchens',
    title: 'Cloud Kitchens',
    description: 'Maximize small footprints and high order volumes for Swiggy/Zomato breakfast deliveries.',
    benefits: ['Compact counter footprint', 'Consistent product packaging weight', 'Reduced staffing overhead'],
    imagePlaceholderText: 'Modern Fast Cloud Kitchen',
    unsplashId: '1556910103-1c02745aae4d',
  },
  {
    id: 'messes',
    title: 'Hostel & Institutional Messes',
    description: 'Serve thousands of students and factory workers on strict daily meal schedules reliably.',
    benefits: ['Heavy-duty continuous run', 'Eliminates wastage from over-ladling', 'Tough stainless steel build'],
    imagePlaceholderText: 'Bulk Mess & Canteen Facility',
    unsplashId: '1577106263724-2c8e03bfe9cf',
  },
  {
    id: 'food-production',
    title: 'Commercial Food Production',
    description: 'For central commissary units supplying batter or ready-to-cook idlis at industrial scale.',
    benefits: ['Seamless integration into line production', 'High repeatability', 'Full food-grade hygiene'],
    imagePlaceholderText: 'Food Processing & Production Line',
    unsplashId: '1581092160607-ee22621dd758',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is Any Time Mavu?',
    answer: 'Any Time Mavu is a food-technology company engineering hygienic, precision batter dispensing machines for commercial kitchens. Our flagship machine replaces messy, manual ladles with controlled, hygienic dispensing of idli and dosa batter.',
    category: 'Product',
  },
  {
    question: 'Who can benefit most from this machine?',
    answer: 'The machine is purpose-built for commercial food operations of all sizes: hotels, idli & dosa restaurants, catering businesses, cloud kitchens, hostel messes, and food production units.',
    category: 'Commercial',
  },
  {
    question: 'What types of batter can be dispensed?',
    answer: 'The machine handles conventional fermented idli and dosa batter with high consistency. It is engineered to maintain batter aeration and texture without breaking the fermentation structure.',
    category: 'Product',
  },
  {
    question: 'How does the dispensing mechanism work?',
    answer: 'The machine utilizes a sanitary, food-grade positive displacement valve system. You select the desired portion size, and with a single press, it dispenses the exact volume directly onto the tawa or idli plate.',
    category: 'Product',
  },
  {
    question: 'Is the machine easy to clean at the end of the shift?',
    answer: 'Yes. All contact parts are designed for tool-less disassembly in under 60 seconds. Components are made of Food-Grade 304 Stainless Steel and food-safe polymers that can be washed under standard kitchen tap water.',
    category: 'Hygiene',
  },
  {
    question: 'How does this machine save money for my kitchen?',
    answer: 'Commercial kitchens typically lose 8% to 15% of batter to ladle drips, over-portioning, and bottom residue. Any Time Mavu guarantees exact portion control, prevents counter spills, and saves up to 2 hours of labor per shift.',
    category: 'Commercial',
  },
  {
    question: 'How can I request a quotation or a live demonstration?',
    answer: 'You can submit the enquiry form on our website, click our direct WhatsApp button, or call our team. We provide customized quotes based on your daily kitchen volume and requirements.',
    category: 'Purchase',
  },
  {
    question: 'What warranty and after-sales support do you provide?',
    answer: 'Every Any Time Mavu machine comes with our standard commercial warranty covering parts and service support. We also provide initial kitchen staff training and readily available spare parts.',
    category: 'Purchase',
  },
];
