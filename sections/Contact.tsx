
import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f69110] mb-6 block">Get in Touch</span>
            <h2 className="text-5xl font-black uppercase leading-tight mb-12">Let's Build <br />Together</h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f69110] mb-4">Headquarters</h4>
                <p className="text-xl font-bold uppercase tracking-tight">Kigali, Rwanda</p>
                <p className="text-sm text-black/50 font-medium mt-2">Certified regional operations in Uganda, DRC, Kenya, and Tanzania.</p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f69110] mb-4">Contact Info</h4>
                <p className="text-xl font-bold uppercase tracking-tight mb-2">+250 788 340 478</p>
                <p className="text-xl font-bold uppercase tracking-tight">info@1000hills.rw</p>
              </div>

              <div className="pt-10 border-t border-black/10 flex gap-6">
                <a href="#" className="text-xs font-black uppercase tracking-widest hover:text-[#f69110]">LinkedIn</a>
                <a href="#" className="text-xs font-black uppercase tracking-widest hover:text-[#f69110]">Twitter</a>
                <a href="#" className="text-xs font-black uppercase tracking-widest hover:text-[#f69110]">Instagram</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-black p-12 lg:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Full Name</label>
                <input type="text" className="w-full bg-white/5 border-b border-white/20 p-4 text-white focus:outline-none focus:border-[#f69110] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Email Address</label>
                <input type="email" className="w-full bg-white/5 border-b border-white/20 p-4 text-white focus:outline-none focus:border-[#f69110] transition-colors" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Project Details</label>
                <textarea rows={4} className="w-full bg-white/5 border-b border-white/20 p-4 text-white focus:outline-none focus:border-[#f69110] transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2 pt-8">
                <Button className="w-full md:w-auto">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
