import { Teacher } from '../types';

export const teachersData: Teacher[] = [
  {
    id: 'emma-carter',
    name: 'Emma Carter',
    role: 'Lead Kindergarten Teacher',
    experience: '9+ Years in Early Childhood',
    bio: 'Emma specializes in emergent literacy and socio-emotional development. Her gentle guidance helps young learners blossom into joyful, self-reliant thinkers.',
    avatar: '/src/assets/images/teacher_lead_emma_1790505047479.jpg',
    accentColor: '#FF7043',
    qualifications: ['M.Ed. Early Childhood Education', 'State Certified Early Specialist', 'Child Safety & CPR Certified'],
    favoriteActivity: 'Morning Story Circles & Illustrated Nature Journals',
    quote: 'Every child has an inner spark of wonder; our role is simply to provide sunshine and fertile soil.'
  },
  {
    id: 'sofia-bennett',
    name: 'Sofia Bennett',
    role: 'Creative Learning & Arts Educator',
    experience: '7+ Years in Creative EdTech',
    bio: 'Sofia brings open-ended art, music, and sensory storytelling to our classrooms. She believes mess-making and curiosity are the purest seeds of innovation.',
    avatar: '/src/assets/images/teacher_creative_sofia_1790505058721.jpg',
    accentColor: '#72C83E',
    qualifications: ['B.A. Fine Arts & Child Psychology', 'Reggio Emilia Certified Atelierista', 'Montessori Arts Specialist'],
    favoriteActivity: 'Clay Sculpting & Giant Floor Canvas Painting',
    quote: 'When small hands mold clay and paint without boundaries, they are learning that their ideas shape the world.'
  },
  {
    id: 'daniel-brooks',
    name: 'Daniel Brooks',
    role: 'STEAM & Outdoor Discovery Educator',
    experience: '8+ Years in Hands-On Learning',
    bio: 'Daniel leads our nature garden investigations, wooden block engineering labs, and exploratory science experiments with warmth and contagious excitement.',
    avatar: '/src/assets/images/teacher_educator_daniel_1790505072115.jpg',
    accentColor: '#55BFEF',
    qualifications: ['B.S. Elementary Education & STEM', 'Forest Kindergarten Practitioner', 'Pediatric First Aid Certified'],
    favoriteActivity: 'Sensory Garden Botany & Ramp Construction',
    quote: 'Learning through play is not an alternative to serious study—it is the brain’s most powerful natural engine.'
  }
];
