import { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    id: 'b1',
    slug: '10-easy-ways-to-make-learning-fun-at-home',
    title: '10 Easy Ways to Make Learning Fun at Home',
    category: 'Parent Tips',
    date: 'February 18, 2026',
    readTime: '4 min read',
    author: 'Emma Carter',
    authorRole: 'Lead Kindergarten Teacher',
    excerpt: 'Simple, everyday household routines that spark curiosity, early numeracy, and language development without worksheets.',
    image: '/src/assets/images/program_preschool_1790505098153.jpg',
    content: [
      'Early learning doesn’t require costly kits or rigorous drill schedules. In fact, children develop rich conceptual schemas most naturally when learning is woven seamlessly into everyday home activities.',
      'From measuring cups during pancake breakfasts to scavenger hunts for shapes in the living room, simple daily interactions can foster deep mathematical reasoning and vocabulary retention.',
      '1. The Kitchen Measurement Lab: Pouring dry beans or water between containers of different shapes teaches early volume conservation.',
      '2. Color Scavenger Hunts: Give your child an organic challenge: "Find three things that are sunny yellow like a dandelion."',
      '3. Story Dice & Picture Prompts: Cut images from catalogs and invent spontaneous bedtime narratives together.',
      '4. Nature Sorting on the Walk: Gather pinecones, smooth pebbles, and fallen leaves, then sort them by size, texture, and weight.'
    ],
    keyTakeaways: [
      'Focus on conversation and open questions over testing answers.',
      'Everyday household items make the most engaging discovery tools.',
      'Celebrate effort and process rather than perfection.'
    ]
  },
  {
    id: 'b2',
    slug: 'why-play-matters-in-early-childhood',
    title: 'Why Play Matters in Early Childhood',
    category: 'Learning',
    date: 'February 04, 2026',
    readTime: '5 min read',
    author: 'Daniel Brooks',
    authorRole: 'STEAM & Outdoor Discovery Educator',
    excerpt: 'Neuroscience and developmental research reveal why hands-on play is the most sophisticated form of childhood brain building.',
    image: '/src/assets/images/classroom_creative_play_1790505025779.jpg',
    content: [
      'When you see a four-year-old child stacking wooden arches into a tower or negotiating roles in an imaginary spaceship, you are witnessing high-level cognitive rehearsal.',
      'In recent decades, developmental neuroscientists have reaffirmed that play is the biological mechanism through which young mammals construct neural pathways for self-regulation, empathy, and creative problem solving.',
      'Through open-ended block construction, children intuitively master physics concepts such as gravity, center of mass, and structural symmetry long before encountering formal equations.',
      'Furthermore, social play teaches impulse control and turn-taking—the foundational executive function skills strongly linked to future academic and emotional success.'
    ],
    keyTakeaways: [
      'Play develops prefrontal cortex executive function.',
      'Spatial reasoning through physical blocks correlates with future STEM affinity.',
      'Social play nurtures empathy and conflict resolution.'
    ]
  },
  {
    id: 'b3',
    slug: 'creating-a-calm-morning-routine-for-kids',
    title: 'Creating a Calm Morning Routine for Kids',
    category: 'Family Life',
    date: 'January 22, 2026',
    readTime: '3 min read',
    author: 'Sofia Bennett',
    authorRole: 'Creative Learning Educator',
    excerpt: 'Gentle, visual, and predictable morning rhythms that turn rushed school departures into warm, connecting family moments.',
    image: '/src/assets/images/gallery_outdoor_nature_1790505135130.jpg',
    content: [
      'Mornings set the emotional temperature for a child’s entire learning day. When mornings feel hurried and stressful, cortisol spikes can make classroom transitions challenging.',
      'By replacing verbal reminders with visual rhythm charts, young children gain agency over their own routines: brushing teeth, sliding on boots, and packing their favorite lunchbox.',
      'Give transitions a musical soundtrack: Pick one calming acoustic song for dressing, and a cheerful melody for heading out to the door.',
      'Build in five minutes of "slow cushion" time where you sit together on the couch before leaving. That brief moment of connection anchors your child in safety.'
    ],
    keyTakeaways: [
      'Visual picture charts empower independence.',
      'Gentle acoustic cues reduce verbal repetition and power struggles.',
      'A five-minute connection pause transforms morning anxiety into confidence.'
    ]
  }
];
