
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 stagger-item">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-6 block">Our Expertise</span>
            <h2 className="text-5xl font-black uppercase leading-tight">
              Integrated Technical Solutions
            </h2>
          </div>
          <p className="text-black/50 max-w-sm text-sm uppercase font-bold tracking-widest">
            Delivering efficiency through design, installation, supervision, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className="bg-white p-10 hover:bg-[#f69110] transition-colors group stagger-item" style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}>
              <div className="w-12 h-1 bg-black mb-10 group-hover:bg-white draw-line" />
              <h3 className="text-xl font-black uppercase mb-6 group-hover:text-black">{s.title}</h3>
              <p className="text-sm text-black/60 mb-8 group-hover:text-black/80 leading-relaxed">
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-tight text-black/80 group-hover:text-black">
                    <span className="mt-1 w-1.5 h-1.5 bg-[#f69110] group-hover:bg-black flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
