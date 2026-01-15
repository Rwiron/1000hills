
import React from 'react';
import { MILESTONES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="stagger-item">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-6 block">Company Overview</span>
            <h2 className="text-5xl font-black uppercase mb-10 leading-tight">
              A Regional Leader in <br />
              Engineering Solutions.
            </h2>
            <div className="space-y-6 text-black/70 leading-relaxed text-lg">
              <p>
                Founded in 2006, 1000 Hills Technology Ltd (Certitude Engineering) has established itself as a premier multidisciplinary engineering firm. With a robust presence in Rwanda, Uganda, DRC, Kenya, and Tanzania, we bridge the gap between design and execution.
              </p>
              <p>
                Our vision is to become a regional leader in innovative and sustainable solutions in construction and IT, promoting growth through engineering excellence.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-black/10 pt-10">
              <div className="stagger-item" style={{ transitionDelay: '0.4s' }}>
                <h3 className="text-4xl font-black mb-2">18+</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/50">Years of Experience</p>
              </div>
              <div className="stagger-item" style={{ transitionDelay: '0.5s' }}>
                <h3 className="text-4xl font-black mb-2">50+</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/50">Major Projects</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 text-white stagger-item" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl font-black uppercase mb-12 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#f69110] draw-line" />
              Our Journey
            </h3>
            <div className="space-y-12">
              {MILESTONES.map((m, idx) => (
                <div key={idx} className="relative pl-10 border-l border-white/20 pb-2 stagger-item" style={{ transitionDelay: `${0.4 + (idx * 0.1)}s` }}>
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#f69110]" />
                  <span className="text-[#f69110] font-black text-xl block mb-2">{m.year}</span>
                  <p className="text-white/60 text-sm leading-relaxed uppercase tracking-tight font-medium">
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
