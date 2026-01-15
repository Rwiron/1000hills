
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyPartner from './sections/WhyPartner';
import Projects from './sections/Projects';
import Partners from './sections/Partners';
import Team from './sections/Team';
import Contact from './sections/Contact';
import ProjectDetail from './sections/ProjectDetail';
import TeamPage from './sections/TeamPage';

type View = 'home' | 'project' | 'team';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const initObservers = useCallback(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return observer;
  }, []);

  useEffect(() => {
    const observer = initObservers();
    return () => observer.disconnect();
  }, [view, selectedProjectId, initObservers]);

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    setView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (targetView: View, sectionId?: string) => {
    setView(targetView);
    setSelectedProjectId(null);
    
    if (targetView === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderFooter = () => (
    <footer className="py-20 bg-black text-white border-t border-white/10 reveal">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-2 stagger-item">
          <div className="w-10 h-10 bg-[#f69110] flex items-center justify-center font-bold text-black text-xl">H</div>
          <span className="font-extrabold text-2xl tracking-tighter">1000 HILLS</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 stagger-item">
          <button onClick={() => handleNavigate('home', 'about')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#f69110] transition-colors">About</button>
          <button onClick={() => handleNavigate('home', 'services')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#f69110] transition-colors">Services</button>
          <button onClick={() => handleNavigate('home', 'projects')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#f69110] transition-colors">Projects</button>
          <button onClick={() => handleNavigate('team')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#f69110] transition-colors">Team</button>
          <button onClick={() => handleNavigate('home', 'contact')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#f69110] transition-colors">Contact</button>
        </div>
        <p className="text-[10px] font-bold uppercase text-white/40 tracking-widest stagger-item">
          © 2024 1000 HILLS TECHNOLOGY LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );

  return (
    <div className="antialiased text-black bg-white selection:bg-[#f69110] selection:text-black">
      <Navbar onNavigate={handleNavigate} isSubPage={view !== 'home'} />
      
      {view === 'home' && (
        <main>
          <Hero />
          <About />
          <Services />
          
          <WhyPartner />

          <Projects onProjectSelect={handleProjectSelect} />
          <Partners />
          <Team onTeamFullView={() => handleNavigate('team')} />
          <Contact />
          {renderFooter()}
        </main>
      )}

      {view === 'project' && selectedProjectId && (
        <>
          <ProjectDetail id={selectedProjectId} onBack={() => handleNavigate('home', 'projects')} />
          {renderFooter()}
        </>
      )}

      {view === 'team' && (
        <>
          <TeamPage onBack={() => handleNavigate('home', 'team')} />
          {renderFooter()}
        </>
      )}
    </div>
  );
};

export default App;
