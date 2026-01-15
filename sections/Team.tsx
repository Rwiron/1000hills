
import React from 'react';
import { TEAM } from '../constants';
import Button from '../components/Button';

interface TeamProps {
  onTeamFullView?: () => void;
}

const Team: React.FC<TeamProps> = ({ onTeamFullView }) => {
  const leader = TEAM.find(t => t.category === 'Executive');

  return (
    <section id="team" className="py-20 lg:py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 stagger-item gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-6 block">Organization</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-black">
              The Vision Behind <br />
              <span className="text-[#f69110]">1000 Hills.</span>
            </h2>
          </div>
          <Button onClick={onTeamFullView} variant="secondary">Meet the Full Team</Button>
        </div>

        {/* Leadership Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center reveal">
          {leader && (
            <div className="lg:col-span-5 stagger-item">
              <div className="group relative bg-black p-8 lg:p-12 text-white border-l-8 border-[#f69110]">
                <div className="aspect-square bg-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
                  <img 
                    src={`https://picsum.photos/seed/${leader.name}/800/800`} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                    alt={leader.name} 
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase mb-1 tracking-tight group-hover:text-[#f69110] transition-colors">{leader.name}</h3>
                  <p className="text-xs font-bold uppercase text-[#f69110] mb-4 tracking-widest">{leader.role}</p>
                  <div className="text-[10px] lg:text-xs uppercase font-bold text-white/40 leading-relaxed max-w-xs">
                    {leader.background}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-7 stagger-item" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <span className="absolute -top-12 -left-8 text-[12rem] font-black text-black/[0.03] select-none pointer-events-none">"</span>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-1 bg-[#f69110]" />
                 <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">Managing Director's Statement</span>
              </div>
              <blockquote className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black leading-tight mb-12">
                "Engineering is not just about building structures; it is about crafting the future of our continent with <span className="text-[#f69110]">precision, technology,</span> and a deep respect for our regional heritage. We don't just solve problems—we build legacies."
              </blockquote>
              <div className="space-y-6 text-black/50 text-sm uppercase font-bold tracking-widest leading-relaxed max-w-xl">
                <p>
                  At 1000 Hills Technology, our journey since 2006 has been defined by a relentless pursuit of technical excellence. We believe that for East Africa to thrive, our infrastructure must be smart, sustainable, and reliable.
                </p>
                <p>
                  Our commitment to our clients goes beyond project completion. We are partners in growth, ensuring that every wire, pipe, and fiber optic cable we install serves as a foundation for the next generation of African innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
