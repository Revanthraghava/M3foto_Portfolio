
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-camera text-sm"></i>
              </div>
              <span className="text-xl font-extrabold tracking-tighter">
                M3<span className="text-rose-500">FOTO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading photography studio in Vijayawada dedicated to providing world-class visual content. Your stories, our lens.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={CONTACT_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-rose-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-rose-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-rose-500 transition-colors">Portfolio</a></li>
              <li><a href="#book" className="hover:text-rose-500 transition-colors">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Portrait Sessions</li>
              <li>Wedding Photography</li>
              <li>Event Coverage</li>
              <li>Commercial Branding</li>
              <li>Parties & Birthdays</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Visit Us</h4>
            <p className="text-slate-400 text-sm mb-4">
              {CONTACT_INFO.address}
            </p>
            <p className="text-slate-400 text-sm mb-4">
              <i className="fas fa-phone mr-2 text-rose-500"></i> {CONTACT_INFO.phone}
            </p>
            <a href={CONTACT_INFO.locationLink} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors">
              <i className="fas fa-map-marker-alt mr-2"></i> Get Directions
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} M3foto Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
