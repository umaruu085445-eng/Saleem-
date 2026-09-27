export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  badgeColor: string;
  themeBg: string;
  accentColor: string;
  features: string[];
  schedule: string;
  teacherRatio: string;
  highlights: string[];
  featured?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
  accentColor: string;
  qualifications: string[];
  favoriteActivity: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  childProgram: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Parent Tips' | 'Learning' | 'Family Life' | 'Creative Play';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  image: string;
  content: string[];
  keyTakeaways?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Outdoor Play' | 'Art' | 'Learning' | 'Events';
  src: string;
  alt: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
