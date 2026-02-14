
import React from 'react';

const Hero: React.FC = () => {
  // Studio background image requested by the user
  const bgImage = "https://lh3.googleusercontent.com/p/AF1QipM2CyInmjp6TuLIIDtBlvciF-kKFqJLcYFWVGOm=w1600-h1080-k-no";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white">
        <img 
          src={bgImage} 
          alt="M3foto Home Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to ensure text readability and bright theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white"></div>
        <div className="absolute inset-0 backdrop-blur-[0.5px]"></div>
        
        {/* Vibrant interactive-feeling blobs */}
        <div className="absolute top-[10%] left-[5%] w-[45%] h-[45%] bg-rose-200/40 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[15%] right-[2%] w-[40%] h-[40%] bg-amber-200/40 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-5 py-2 mb-8 bg-white/90 border border-slate-100 rounded-full text-rose-600 font-bold text-xs tracking-widest uppercase shadow-sm animate-bounce">
          ✨ Premium Photography Studio
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
          Capturing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600">Moments</span> <br />
          <span className="text-slate-800">That Last Forever</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-600 mb-12 font-medium leading-relaxed">
          At M3foto, we transform your precious memories into timeless art with our signature creative vision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl shadow-2xl hover:bg-rose-600 transition-all hover:scale-105 active:scale-95"
          >
            View Portfolio
          </a>
          <a
            href="#book"
            className="w-full sm:w-auto px-12 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold text-xl hover:border-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Book Session
          </a>
        </div>

        {/* Floating Icons */}
        <div className="mt-20 flex justify-center space-x-16">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
              <i className="fas fa-camera text-rose-500 text-xl"></i>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Quality</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
              <i className="fas fa-heart text-amber-500 text-xl"></i>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Passion</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
              <i className="fas fa-star text-rose-500 text-xl"></i>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Vision</span>
          </div>
        </div>
      </div>
      
      {/* Bottom fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
