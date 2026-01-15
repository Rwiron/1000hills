
import React, { useEffect, useState } from 'react';
import { TEAM } from '../constants';

interface TeamPageProps {
  onBack: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onBack }) => {
  const [mounted, setMounted] = useState(false);
  
  const cofounders = TEAM.filter(t => t.category === 'Executive');
  const management = TEAM.filter(t => t.category === 'Business');
  const technical = TEAM.filter(t => t.category === 'Technical');

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`bg-white pt-32 pb-20 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-slide-up">
          <div>
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black mb-10 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Overview
            </button>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-4 block">Our People / Regional Command</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">The Force Behind <br />1000 Hills.</h1>
          </div>
          <div className="max-w-xs text-black/50 text-sm uppercase font-bold tracking-widest leading-relaxed">
            A multidisciplinary collective of engineers, designers, and strategists committed to regional excellence.
          </div>
        </div>

        {/* Level 1: Executive Leadership */}
        <div className="mb-32 reveal">
          <div className="flex items-center gap-4 mb-12 stagger-item">
            <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">Level 01</span>
            <h3 className="text-sm font-black uppercase tracking-widest">Executive Leadership</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            {cofounders.map((m, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-8 items-center md:items-start bg-black p-10 lg:p-16 text-white border-l-8 border-[#f69110] stagger-item w-full">
                <div className="w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0 bg-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={`https://picsum.photos/seed/${m.name}-full/600/600`} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                    alt={m.name} 
                  />
                </div>
                <div className="flex flex-col justify-center text-center md:text-left flex-grow">
                  <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tight group-hover:text-[#f69110] transition-colors">{m.name}</h3>
                  <p className="text-sm font-bold uppercase text-[#f69110] mb-8 tracking-[0.3em]">{m.role}</p>
                  <div className="max-w-2xl border-t border-white/10 pt-8">
                     <p className="text-xs uppercase font-bold text-white/40 leading-relaxed mb-6">
                        {m.background || "Strategic Regional Leadership"}
                     </p>
                     <p className="text-lg font-black uppercase tracking-tight text-white/80 italic">
                        "Driving regional innovation through engineering precision and sustainable technological integration."
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 2: Management */}
        <div className="mb-32 reveal">
          <div className="flex items-center gap-4 mb-12 stagger-item">
            <span className="text-[10px] font-black uppercase tracking-widest bg-[#f69110] text-black px-3 py-1">Level 02</span>
            <h3 className="text-sm font-black uppercase tracking-widest">General Management</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((m, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-10 group hover:bg-black hover:text-white transition-all duration-500 stagger-item">
                <div className="mb-8 overflow-hidden aspect-square bg-black/5">
                  <img src={`https://picsum.photos/seed/${m.name}/400/400`} className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" alt={m.name} />
                </div>
                <h3 className="text-xl font-black uppercase mb-1 leading-tight group-hover:text-[#f69110]">{m.name}</h3>
                <p className="text-[10px] font-bold uppercase text-[#f69110] mb-4">{m.role}</p>
                <div className="text-[10px] font-bold uppercase text-black/30 group-hover:text-white/30 border-t border-black/10 group-hover:border-white/10 pt-4">
                  {m.background || "Operational Excellence"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 3: Technical Team */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-12 stagger-item">
            <span className="text-[10px] font-black uppercase tracking-widest border border-black px-3 py-1 text-black">Level 03</span>
            <h3 className="text-sm font-black uppercase tracking-widest">Engineering Force</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {technical.map((m, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-[#f69110] transition-all duration-300 group stagger-item">
                <div className="w-8 h-1 bg-black mb-6 group-hover:bg-white" />
                <h4 className="text-lg font-black uppercase mb-1 tracking-tight">{m.name}</h4>
                <p className="text-[10px] font-bold uppercase text-black/50 group-hover:text-black mb-4">{m.role}</p>
                <p className="text-[10px] font-black text-black/20 group-hover:text-black/60 uppercase tracking-widest">Certified Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
