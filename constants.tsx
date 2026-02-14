
import React from 'react';
import { Service, SocialLinks } from './types';

export const SERVICES: Service[] = [
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description: 'Capturing your unique personality through high-quality, professional portraits.',
    icon: 'fa-user-tie',
    color: 'from-pink-400 to-rose-600',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOjbYUZSZ8JxGOZcnBh_FciIflqOAMNbYWiroNy=w1000-h1200-k-no'
  },
  {
    id: 'wedding',
    title: 'Wedding Photos',
    description: 'Documenting your special day with elegance, emotion, and cinematic flair.',
    icon: 'fa-ring',
    color: 'from-amber-400 to-orange-600',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMixdCSXwXpoCS7ILQpcpEk-lmZ2EYeCYAk77aA=w1000-h1500-k-no'
  },
  {
    id: 'event',
    title: 'Event Photography',
    description: 'Corporate events, seminars, and meetups captured with precision.',
    icon: 'fa-calendar-check',
    color: 'from-indigo-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'Professional imagery for brands, advertising, and marketing materials.',
    icon: 'fa-building',
    color: 'from-emerald-400 to-teal-600',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOue5n08S2Vf8Jn9OW029tsR5njWsTDbxbIOnha=w1000-h1200-k-no'
  },
  {
    id: 'parties',
    title: 'Parties',
    description: 'Birthdays, anniversaries, and celebrations that vibrate with life.',
    icon: 'fa-glass-cheers',
    color: 'from-violet-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'product',
    title: 'Product Photography',
    description: 'Clean, high-end photography for e-commerce and product catalogs.',
    icon: 'fa-box-open',
    color: 'from-cyan-400 to-sky-600',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000'
  }
];

export const GALLERY_IMAGES = [
  'https://lh3.googleusercontent.com/p/AF1QipOdxbiJyM8HqqGzZKGB0Tg5izdoMy2y2XkGsHJe=w1000-h1200-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOjbYUZSZ8JxGOZcnBh_FciIflqOAMNbYWiroNy=w1000-h1200-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMFeX5TPYskFRGJ9-epSLcvLX4IukzetufLE7RR=w1000-h1200-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMixdCSXwXpoCS7ILQpcpEk-lmZ2EYeCYAk77aA=w1000-h1200-k-no',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&q=80&w=800'
];

export const CONTACT_INFO = {
  phone: '89782 48437',
  address: 'PINNAMANENI, Polyclinic Rd, Municipal Employees Colony, Acharya Ranga Nagar, Vijayawada, Andhra Pradesh 520010',
  locationLink: 'https://share.google/h34tKCaPOjZXylvBc',
  social: {
    whatsapp: 'https://wa.me/918978248437',
    instagram: 'https://www.instagram.com/m3_foto?igsh=MnJ3NTdxZDNubjll',
    facebook: 'https://www.facebook.com/m3fotoinfo/',
    maps: 'https://maps.app.goo.gl/h34tKCaPOjZXylvBc'
  } as SocialLinks
};
