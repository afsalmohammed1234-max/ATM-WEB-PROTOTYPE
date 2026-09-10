import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Product' | 'In Kitchen' | 'Engineering';
  placeholderDesc: string;
  unsplashId?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Machine Front Elevation',
    category: 'Product',
    placeholderDesc: 'Clean studio product shot on neutral background',
    unsplashId: '1581092160607-ee22621dd758',
  },
  {
    id: '2',
    title: 'High-Volume Breakfast Line',
    category: 'In Kitchen',
    placeholderDesc: 'Machine active on commercial hotel breakfast counter',
    unsplashId: '1556910103-1c02745aae4d',
  },
  {
    id: '3',
    title: 'Precision Cut-Off Nozzle',
    category: 'Engineering',
    placeholderDesc: 'Close-up macro of sanitary anti-drip valve',
  },
  {
    id: '4',
    title: 'Restaurant Tawa Setup',
    category: 'In Kitchen',
    placeholderDesc: 'Dispenser mounted beside 4-burner commercial dosa plate',
    unsplashId: '1555396273-367ea4eb4db5',
  },
  {
    id: '5',
    title: 'Tool-Less Disassembly',
    category: 'Engineering',
    placeholderDesc: 'Exploded view of SS304 contact parts ready for wash',
  },
  {
    id: '6',
    title: 'Uniform Idli Tray Dispensing',
    category: 'Product',
    placeholderDesc: 'Rapid multi-portion filling of 24-cavity idli steamer tray',
    unsplashId: '1582719478250-c89cae4dc85b',
  },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Product', 'In Kitchen', 'Engineering'];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#0D4B4F] text-white shadow-md'
                : 'bg-[#F6F0E5] text-[#072C2E] hover:bg-[#E8DFC8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const imageUrl = item.unsplashId
            ? `https://images.unsplash.com/photo-${item.unsplashId}?auto=format&fit=crop&w=700&q=80`
            : null;

          return (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-[#E8DFC8] bg-[#072C2E] flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E8B84A]"
            >
              <div className="relative h-64 overflow-hidden bg-[#0A383C]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0D4B4F] to-[#072C2E]">
                    <div className="w-12 h-12 rounded-xl bg-[#E8B84A1A] border border-[#E8B84A44] flex items-center justify-center text-[#E8B84A] mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#E8B84A] uppercase block">
                      [PRODUCT PHOTOGRAPHY PLACEHOLDER]
                    </span>
                    <span className="text-xs text-slate-300 mt-2 max-w-xs">{item.placeholderDesc}</span>
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#072C2E]/90 text-[#E8B84A] border border-[#E8B84A44]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-[#E8DFC8]">
                <h4 className="font-display font-bold text-sm text-[#072C2E]">{item.title}</h4>
                <p className="text-xs text-[#566E70] mt-0.5">{item.placeholderDesc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-xs font-mono text-[#566E70] uppercase tracking-wider">
          * Real factory & kitchen photos will automatically replace placeholders when uploaded.
        </p>
      </div>
    </div>
  );
}
