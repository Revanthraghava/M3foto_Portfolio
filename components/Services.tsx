
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide a wide range of photography services tailored to your needs. 
            From intimate portraits to large-scale commercial shoots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-lg mb-6 -mt-14 relative z-10`}>
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                <a 
                  href="#book" 
                  className={`inline-flex items-center font-bold transition-colors group-hover:text-rose-600`}
                >
                  Book this service <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;