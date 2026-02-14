
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const PortfolioGallery: React.FC = () => {
  return (
    <section id="portfolio" className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
              Our Masterpieces
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A Glimpse into our <span className="text-rose-600">Artistry</span>
            </h2>
          </div>
          <a 
            href="#book" 
            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-rose-400 transition-all flex items-center group"
          >
            Check Image Availability <i className="fas fa-calendar-check ml-3 text-rose-500 group-hover:scale-110 transition-transform"></i>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img 
                src={img} 
                alt={`Portfolio ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  M3foto Collection
                </span>
                <span className="text-white/70 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Vijayawada, AP
                </span>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-rose-500 to-amber-500 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center text-white aspect-square group hover:scale-[1.02] transition-transform shadow-xl shadow-rose-200">
             <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
               <i className="fas fa-plus text-xl"></i>
             </div>
             <h4 className="text-xl font-black mb-2">View 100+ More</h4>
             <p className="text-sm text-white/80 mb-4">Follow us on Instagram for daily updates</p>
             <a 
               href="https://www.instagram.com/m3_foto" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm font-bold bg-white text-rose-600 px-4 py-2 rounded-full"
             >
               @m3_foto
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
