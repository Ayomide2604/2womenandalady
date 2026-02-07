export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services for Edmonton families. From regular maintenance to deep cleaning, we keep your home spotless and healthy.',
    image: '/residential.jpg',
    imageAlt: 'Residential Cleaning Service'
  },
  {
    id: 'construction',
    title: 'Construction Cleaning',
    description: 'Post-construction and renovation cleanup services. We handle dust and debris so your new space is move-in ready.',
    image: '/construction.jpg',
    imageAlt: 'Construction Cleaning Service'
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning services to remove stains, odors, and allergens. Professional equipment for lasting results.',
    image: '/carpet.jpg',
    imageAlt: 'Carpet Cleaning Service'
  },
  {
    id: 'biohazard',
    title: 'Bio Hazard Cleaning',
    description: 'Professional biohazard cleanup services with proper safety protocols. Discreet, thorough, and compliant with health regulations.',
    image: '/biohazard.jpg',
    imageAlt: 'Bio Hazard Cleaning Service'
  }
];
