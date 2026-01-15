
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Split partners into 3 rows for the marquee
  const row1 = PARTNERS.slice(0, 10);
  const row2 = PARTNERS.slice(10, 20);
  const row3 = PARTNERS.slice(20);

  const MarqueeRow = ({ items, direction }: { items: string[], direction: 'left' | 'right' }) => (
    <div className="flex overflow-hidden group py-4">
      <div className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {/* Double the items to create the infinite loop effect */}
        {[...items, ...items, ...items, ...items].map((partner, idx) => (
          <div 
            key={idx} 
            className="mx-8 lg:mx-12 flex items-center justify-center text-sm lg:text-base font-black uppercase tracking-tighter text-black/30 group-hover:text-black transition-colors duration-300"
          >
            {partner}
            <div className="ml-8 lg:ml-12 w-2 h-2 bg-[#f69110] rounded-full opacity-20 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white overflow-hidden marquee-container border-y border-black/5 reveal">
      <div className="max-w-7xl mx-auto px-6 mb-16 stagger-item">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-4 block">Social Proof</span>
        <h2 className="text-4xl font-black uppercase tracking-tighter">Our Clients & Partners</h2>
      </div>

      <div className="space-y-4 lg:space-y-8">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
        <MarqueeRow items={row3} direction="left" />
      </div>
    </section>
  );
};

export default Partners;
