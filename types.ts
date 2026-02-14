
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface SocialLinks {
  whatsapp: string;
  instagram: string;
  facebook: string;
  maps: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
