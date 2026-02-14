
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add simple reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.remove('opacity-0');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      // Check if it's already in viewport or hero
      if (section.id === 'hero' || section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.remove('opacity-0');
      } else {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <PortfolioGallery />
        <About />
        <Services />
        <BookingForm />
      </main>

      <Footer />
      
      {/* AI Interactivity */}
      <AIConsultant />

      {/* Global CSS injected via tailwind/style in index.html for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
