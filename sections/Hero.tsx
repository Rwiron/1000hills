
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

import heroConstruction from '../assets/images/hero/construction.png';
import heroSolar from '../assets/images/hero/solar energy.png';
import heroSurveillance from '../assets/images/hero/ITSURVIALNCE.png';
import heroMEP from '../assets/images/hero/MP SUPERVISON.png';

const heroImages = [
  { src: heroConstruction, label: 'Construction', subtitle: 'Project Management' },
  { src: heroSolar, label: 'Solar', subtitle: 'Energy Systems' },
  { src: heroSurveillance, label: 'IT', subtitle: 'Surveillance Systems' },
  { src: heroMEP, label: 'MEP', subtitle: 'Systems Specialist' },
];

const HeroImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:col-span-5 relative hidden lg:block stagger-item" style={{ transitionDelay: '0.7s' }}>
      <div className="aspect-[4/5] bg-black relative overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.label}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ))}
        <div className="absolute -bottom-6 -left-6 bg-[#f69110] p-8 text-black z-10">
          <p className="text-4xl font-black leading-none transition-all duration-500">
            {heroImages[currentIndex].label}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-1">
            {heroImages[currentIndex].subtitle}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#f69110] w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Counter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden reveal reveal-visible">
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="flex-grow flex items-center z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 py-12">
            <div className="flex items-center gap-3 mb-6 lg:mb-8 stagger-item" style={{ transitionDelay: '0.1s' }}>
              <span className="w-8 lg:w-12 h-[2px] bg-[#f69110] draw-line"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-black/40">Est. 2006 / East Africa</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.9] mb-8 text-black tracking-tighter stagger-item" style={{ transitionDelay: '0.3s' }}>
              WE DESIGN <br />
              <span className="text-[#f69110]">BUILD</span> & <br />
              <span className="inline-block border-b-4 lg:border-b-8 border-black">MAINTAIN.</span>
            </h1>
            
            <div className="max-w-xl stagger-item" style={{ transitionDelay: '0.5s' }}>
              <p className="text-lg lg:text-xl text-black font-medium leading-relaxed mb-10 border-l-4 border-black pl-6">
                1000 Hills Technology is a Rwanda-based technology company delivering innovative, reliable, and scalable solutions in energy systems, industrial technology, and digital infrastructure. Inspired by Rwanda’s landscape and resilience, we build technology that powers sustainable growth across Africa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="w-full sm:w-auto !px-12"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Projects
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full sm:w-auto !px-12"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Expertise
                </Button>
              </div>
            </div>
          </div>

          <HeroImageSlider />
          
        </div>
      </div>

      <div className="z-10 bg-black text-white w-full stagger-item" style={{ transitionDelay: '0.9s' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <div className="border-l border-white/20 pl-4 lg:pl-6">
            <p className="text-2xl lg:text-3xl font-black text-[#f69110]"><Counter end={5} suffix="+" /></p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Countries</p>
          </div>
          <div className="border-l border-white/20 pl-4 lg:pl-6">
            <p className="text-2xl lg:text-3xl font-black text-[#f69110]"><Counter end={18} suffix="+" /></p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Years</p>
          </div>
          <div className="border-l border-white/20 pl-4 lg:pl-6">
            <p className="text-2xl lg:text-3xl font-black text-[#f69110]">A+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Safety</p>
          </div>
          <div className="border-l border-white/20 pl-4 lg:pl-6">
            <p className="text-2xl lg:text-3xl font-black text-[#f69110]">24/7</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
