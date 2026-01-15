
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectSelect: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  return (
    <section id="projects" className="py-32 bg-black text-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 stagger-item">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-6 block">Portfolio</span>
          <h2 className="text-5xl font-black uppercase leading-tight">Key Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((p, idx) => (
            <div 
              key={p.id} 
              className="group cursor-pointer stagger-item" 
              style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}
              onClick={() => onProjectSelect(p.id)}
            >
              <div className="aspect-[16/10] overflow-hidden mb-8 relative">
                <img 
                  src={p.imageUrl} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 reveal-mask"
                />
                <div className="absolute top-6 left-6 bg-[#f69110] text-black text-[10px] font-black uppercase px-3 py-1 tracking-widest">
                  {p.category}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2 tracking-tight group-hover:text-[#f69110] transition-colors">{p.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">{p.location}</p>
                  <p className="text-sm text-white/60 max-w-lg leading-relaxed">{p.description}</p>
                </div>
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-[#f69110] group-hover:border-[#f69110] group-hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
