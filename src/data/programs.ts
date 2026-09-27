import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'toddler',
    title: 'Toddler Sprouts',
    ageRange: 'Ages 2–3',
    description: 'A gentle introduction to social learning, sensory discovery, movement, language, and creative hands-on play.',
    image: '/src/assets/images/program_toddler_1790505086561.jpg',
    badgeColor: '#FF7043',
    themeBg: '#FFF1F3', // soft pink
    accentColor: '#FF7043',
    features: [
      'Gentle transition & separation comfort',
      'Sensory-rich exploration bins',
      'Early vocabulary & musical rhythm',
      'Gross-motor indoor & outdoor play'
    ],
    schedule: 'Full Day (8:30 AM – 3:30 PM) or Half Day (8:30 AM – 12:30 PM)',
    teacherRatio: '1 : 4 (Warm, nurturing attention)',
    highlights: [
      'Diapering & toilet learning support with gentle patience',
      'Daily cozy circle time with acoustic songs and finger plays',
      'Dedicated calm nap space with individual organic cotton mats'
    ],
    featured: false
  },
  {
    id: 'preschool',
    title: 'Preschool Explorers',
    ageRange: 'Ages 3–4',
    description: 'Building joyful communication, independence, imagination, and foundational problem-solving through guided inquiry.',
    image: '/src/assets/images/program_preschool_1790505098153.jpg',
    badgeColor: '#72C83E',
    themeBg: '#F0F9ED', // light green
    accentColor: '#72C83E',
    features: [
      'Storytelling & phonemic awareness',
      'Collaborative building & block lab',
      'Early math through counting games',
      'Self-regulation & sharing rituals'
    ],
    schedule: 'Full Day (8:15 AM – 3:30 PM) · Extended Care Available',
    teacherRatio: '1 : 6 (Small learning pods)',
    highlights: [
      'Daily sensory nature garden walk & seed planting',
      'Creative open-ended atelier with watercolors and clay',
      'Friendship circles emphasizing empathy and verbal expression'
    ],
    featured: true
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten Champions',
    ageRange: 'Ages 4–5',
    description: 'A balanced, engaging learning experience that prepares children emotionally, socially, and cognitively for their next adventure.',
    image: '/src/assets/images/program_kindergarten_1790505110657.jpg',
    badgeColor: '#55BFEF',
    themeBg: '#EDF8FD', // pale blue
    accentColor: '#55BFEF',
    features: [
      'Emergent literacy & early reading',
      'Hands-on science & botany discovery',
      'Foundational math, shapes & patterns',
      'Executive function & project work'
    ],
    schedule: 'Full Day (8:00 AM – 3:30 PM) · After-School Clubs until 5:30 PM',
    teacherRatio: '1 : 8 (Interactive inquiry groups)',
    highlights: [
      'Weekly STEAM laboratory with magnifying glasses & scales',
      'Author studies and bookmaking journal projects',
      'Confidence-building Friday show-and-tell stage'
    ],
    featured: true
  },
  {
    id: 'pre-k',
    title: 'Pre-K Ready Scholars',
    ageRange: 'Ages 5–6',
    description: 'Growing confidence, creative problem-solving, group collaboration, and essential school-readiness competencies.',
    image: '/src/assets/images/program_prek_1790505121873.jpg',
    badgeColor: '#FFB52E',
    themeBg: '#FFF8E8', // warm cream
    accentColor: '#FFB52E',
    features: [
      'Critical thinking & hypothesis testing',
      'Structured phonics & expressive writing',
      'Collaborative team engineering challenges',
      'Self-guided independence & leadership'
    ],
    schedule: 'Full Day (8:00 AM – 3:45 PM) · Full Enrichment Access',
    teacherRatio: '1 : 8 (Comprehensive preparation)',
    highlights: [
      'Elementary school transition mentorship',
      'Mathematical problem solving using manipulatives and puzzles',
      'Community stewardship & environmental awareness projects'
    ],
    featured: false
  }
];
