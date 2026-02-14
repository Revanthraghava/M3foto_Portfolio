
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-200/50 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-200/50 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-200/40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-white/80 border border-slate-200 rounded-full text-rose-600 font-bold text-sm tracking-wide shadow-sm backdrop-blur-sm animate-bounce">
          📸 Best Photography in Vijayawada
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
          Capturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600">Moments</span> <br />
          That Last Forever
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          From weddings to corporate portraits, M3foto brings your vision to life with professional expertise and creative artistry.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Explore Services
          </a>
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-rose-300 transition-all hover:scale-105 active:scale-95"
          >
            Book a Session
          </a>
        </div>

        {/* Floating Icons for Interactivity */}
        <div className="mt-16 flex justify-center space-x-12 opacity-40">
          <i className="fas fa-camera text-4xl animate-bounce" style={{ animationDuration: '3s' }}></i>
          <i className="fas fa-heart text-4xl animate-bounce" style={{ animationDuration: '4s' }}></i>
          <i className="fas fa-star text-4xl animate-bounce" style={{ animationDuration: '5s' }}></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
