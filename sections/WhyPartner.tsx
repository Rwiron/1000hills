import React from 'react';

const WhyPartner: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black uppercase text-black leading-tight">
              WHY PARTNER<br />
              WITH <span className="text-[#f69110]">1000<br />
              HILLS?</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#f69110] text-black font-black text-lg px-3 py-1 min-w-[3rem] text-center">
                  01.
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-sm mb-1">
                    INTEGRATED MEP + IT APPROACH FOR COMPLETE SOLUTIONS.
                  </h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#f69110] text-black font-black text-lg px-3 py-1 min-w-[3rem] text-center">
                  02.
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-sm mb-1">
                    EXPERIENCE IN MISSION-CRITICAL FACILITIES.
                  </h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#f69110] text-black font-black text-lg px-3 py-1 min-w-[3rem] text-center">
                  03.
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-sm mb-1">
                    STRONG REGIONAL OPERATIONAL REACH ACROSS EAST AFRICA.
                  </h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#f69110] text-black font-black text-lg px-3 py-1 min-w-[3rem] text-center">
                  04.
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-sm mb-1">
                    UNWAVERING FOCUS ON SUSTAINABILITY.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="relative">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/images/thousanad.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
