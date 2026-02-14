
import React from 'react';
import { CONTACT_INFO } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-0 pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12 z-10 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-bold tracking-wider uppercase">
              Discover Our Studio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Why Choose <span className="text-rose-600">M3foto</span>?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Located in the heart of Vijayawada, M3foto is more than just a photography studio. We are storytellers who believe every frame should evoke a feeling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: 'Experienced Team', desc: 'Years of expertise in various photography niches.', icon: 'fa-users' },
              { title: 'High-End Gear', desc: 'We use the latest mirrorless cameras and lighting.', icon: 'fa-tools' },
              { title: 'Creative Vision', desc: 'Bespoke artistic direction for every client.', icon: 'fa-paint-brush' },
              { title: 'Quick Delivery', desc: 'No more waiting months for your photos.', icon: 'fa-bolt' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2rem] hover:bg-rose-50 transition-all duration-300 group hover:shadow-xl hover:shadow-rose-100/50 border border-slate-100">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <i className={`fas ${item.icon} text-2xl text-rose-500 group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 glass rounded-[2.5rem] border-rose-100 border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow bg-slate-50/50">
            <div className="flex items-center space-x-6 text-left">
              <div className="p-4 bg-rose-100 rounded-2xl flex-shrink-0">
                <i className="fas fa-location-dot text-rose-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Our Location</h4>
                <p className="text-slate-600">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <a href={CONTACT_INFO.locationLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-all flex items-center shadow-lg shadow-rose-200 whitespace-nowrap">
              Get Directions <i className="fas fa-external-link-alt text-xs ml-3"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-400/5 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -z-10 translate-x-1/4"></div>
    </section>
  );
};

export default About;