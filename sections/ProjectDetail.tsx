
import React, { useEffect, useState } from 'react';
import { PROJECTS, TEAM } from '../constants';
import Button from '../components/Button';

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onBack }) => {
  const project = PROJECTS.find(p => p.id === id);
  const [mounted, setMounted] = useState(false);

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
  }, [id]);

  if (!project) return null;

  // Select team members related to the project category
  const projectTeam = TEAM.filter(t => 
    project.category.includes('Technical') || t.category === 'Technical' || t.category === 'Business'
  ).slice(0, 3);

  return (
    <div className={`bg-white pt-32 pb-20 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Technical Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-slide-up">
          <div>
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black mb-10 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Projects
            </button>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-4 block">Project Dossier / {project.category}</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">{project.title}</h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Operation Base</p>
            <p className="text-lg font-bold uppercase tracking-tight">{project.location}</p>
          </div>
        </div>

        {/* Large Hero Image */}
        <div className="mb-20 aspect-[21/9] overflow-hidden bg-black animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#f69110]" />
              Project Narrative
            </h2>
            <div className="space-y-8 text-lg text-black/70 leading-relaxed">
              <p className="font-bold text-black">{project.description}</p>
              <p>
                1000 Hills Technology Ltd was commissioned to deliver advanced technical solutions for this project, leveraging our expertise in integrated infrastructure. Our involvement spanned from the initial supply of mission-critical materials to the final precision installation and operational certification.
              </p>

              {/* Specific Deliverables List */}
              {project.deliverables && (
                <div className="pt-12">
                  <h3 className="text-xl font-black uppercase text-black mb-8 border-b-4 border-black inline-block">Core Deliverables</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.deliverables.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-6 bg-black/5 items-start">
                        <span className="text-xl font-black text-[#f69110]">0{idx + 1}</span>
                        <p className="text-sm font-black uppercase tracking-tight text-black">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-xl font-black uppercase text-black pt-8">Strategic Execution</h3>
              <p>
                The execution phase required meticulous coordination with regional authorities and international stakeholders. By utilizing our robust supply chain and certified engineering force, we successfully mitigated operational risks and delivered a future-proof technical framework.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-black p-10 lg:p-12 text-white border-l-8 border-[#f69110] sticky top-32">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#f69110] mb-8">Technical Parameters</h3>
              <div className="space-y-8">
                {[
                  { label: 'Project Focus', value: project.category },
                  { label: 'Operational Status', value: 'Live / Certified' },
                  { label: 'Compliance Level', value: 'International Standards' },
                  { label: 'Technology Stack', value: 'High-Capacity Infrastructure' },
                  { label: 'Sustainability Impact', value: 'Optimized Resource Usage' }
                ].map((spec, i) => (
                  <div key={i} className="border-b border-white/10 pb-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{spec.label}</p>
                    <p className="text-sm font-bold uppercase tracking-tight">{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col gap-4">
                <Button variant="primary" className="w-full">Download Case Study</Button>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">Request Technical Documentation</button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Team Section */}
        <div className="mt-32 reveal">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-4 block">Execution Team</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Assigned Technical Force</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projectTeam.map((member, i) => (
              <div key={i} className="border border-black/10 p-10 hover:bg-black hover:text-white transition-all group">
                <div className="w-8 h-1 bg-[#f69110] mb-6 group-hover:bg-white" />
                <p className="text-[10px] font-black uppercase tracking-widest text-[#f69110] mb-2">{member.role}</p>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight">{member.name}</h4>
                <p className="text-[10px] font-bold uppercase text-black/40 group-hover:text-white/40 tracking-widest">Division: {member.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-32 reveal">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-12">Project Visual Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {(project.galleryImages || [project.imageUrl, project.imageUrl, project.imageUrl]).map((img, idx) => (
               <div key={idx} className="aspect-square bg-black overflow-hidden group">
                  <img 
                    src={img} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    alt={`${project.title} view ${idx + 1}`} 
                  />
               </div>
             ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
