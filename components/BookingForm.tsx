
import React, { useState } from 'react';
import { SERVICES, CONTACT_INFO } from '../constants.tsx';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const getWhatsAppUrl = () => {
    const selectedService = SERVICES.find(s => s.id === formData.service)?.title || formData.service;
    
    const messageText = `*📸 M3FOTO NEW BOOKING ORDER*
--------------------------------
*Name:* ${formData.name}
*Contact:* ${formData.phone}
*Service:* ${selectedService}
*Preferred Date:* ${formData.date}
*Details:* ${formData.message || 'No additional details provided.'}
--------------------------------
_Sent from M3foto Portfolio Website_`;

    const encodedMsg = encodeURIComponent(messageText);
    const cleanPhone = CONTACT_INFO.phone.replace(/\s+/g, '');
    return `https://wa.me/91${cleanPhone}?text=${encodedMsg}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    const waUrl = getWhatsAppUrl();
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="book" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 blur-[100px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 blur-[100px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-4 border-white">
          <div className="md:w-2/5 bg-gradient-to-br from-rose-600 to-amber-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">Let's Create Magic Together</h2>
              <p className="text-rose-100 text-lg mb-8 leading-relaxed">
                Ready to capture your special moments? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span>m3fotoinfo@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <i className="fas fa-clock"></i>
                  </div>
                  <span>Mon-Sat: 10AM - 8PM</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-12">
              <p className="text-sm text-white/60">Following submission, you'll be redirected to WhatsApp to confirm your order.</p>
            </div>
          </div>

          <div className="md:w-3/5 p-12 bg-white">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Confirmed!</h3>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                  We are now redirecting you to WhatsApp to finalize your booking order...
                </p>
                <div className="flex flex-col space-y-3 w-full max-w-xs">
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i> Open WhatsApp Now
                  </a>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 89782 48437"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Select Service</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all cursor-pointer"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tell us more</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your vision or the event location..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-rose-600 to-amber-600 text-white rounded-xl font-black text-lg shadow-xl shadow-rose-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
                >
                  Confirm Booking & Send WhatsApp <i className="fab fa-whatsapp ml-3 text-2xl"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;