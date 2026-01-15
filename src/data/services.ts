export interface Service {
  id: string;
  name: string;
  description: string;
  price: string; // ZAR price
  features: string[];
  benefits: string[];
  image: string; // Path to the image in public/images
}

export const services: Service[] = [
  {
    id: 'metal-structures',
    name: 'Metal Structures',
    description: 'Design, fabrication, and installation of robust metal structures for industrial and commercial applications, including frameworks, hangars, and load-bearing structures.',
    price: 'R 15 000',
    features: [
      'Custom design based on client specifications',
      'High-quality steel and metal alloys',
      'Compliance with international safety standards',
      'Professional installation team',
    ],
    benefits: [
      'Durable and long-lasting solutions',
      'Optimized space utilization',
      'Enhanced structural integrity',
      'Cost-effective construction',
    ],
    image: '/images/metal-structures.jpg',
  },
  {
    id: 'art-metalwork',
    name: 'Art Metalwork',
    description: 'Creation of bespoke artistic metal pieces, including custom stairs, railings, gates, and decorative elements, blending traditional craftsmanship with modern aesthetics.',
    price: 'R 8 000',
    features: [
      'Unique, handcrafted designs',
      'Variety of metals: wrought iron, stainless steel, brass',
      'Detailed finishes and artistic touches',
      'Personalized consultation and design process',
    ],
    benefits: [
      'Adds aesthetic value to your property',
      'Customized to fit your style and space',
      'High-quality, durable artistic pieces',
      'Enhances property value and appeal',
    ],
    image: '/images/art-metalwork.jpg',
  },
  {
    id: 'security-fencing',
    name: 'Security & Fencing',
    description: 'Robust security solutions for residential, commercial, and industrial perimeters, including high-security fences, gates, and access control systems.',
    price: 'R 5 000',
    features: [
      'Heavy-duty materials for maximum security',
      'Customizable height and design options',
      'Integration with access control systems',
      'Weather-resistant coatings',
    ],
    benefits: [
      'Enhanced property protection',
      'Deters unauthorized access',
      'Increased peace of mind',
      'Long-term durability with minimal maintenance',
    ],
    image: '/images/security-fencing.jpg',
  },
  {
    id: 'industrial-furniture',
    name: 'Industrial Furniture',
    description: 'Manufacturing of durable and stylish industrial-grade furniture for modern offices, commercial spaces, and residential interiors, combining metal with other materials like wood.',
    price: 'R 3 000',
    features: [
      'Custom dimensions and finishes',
      'Combination of metal, wood, and other materials',
      'Ergonomic and functional designs',
      'Built for heavy-duty use',
    ],
    benefits: [
      'Unique and contemporary aesthetic',
      'Extremely durable and long-lasting',
      'Optimized for specific space requirements',
      'Adds a modern, industrial touch to interiors',
    ],
    image: '/images/industrial-furniture.jpg',
  },
  {
    id: 'welding-repair',
    name: 'Welding & Repair',
    description: 'On-site and workshop-based welding and repair services for various metal structures and components, performed by certified and experienced welders.',
    price: 'R 1 500',
    features: [
      'Certified welding professionals',
      'On-site and emergency repair services',
      'Wide range of welding techniques (MIG, TIG, Arc)',
      'Quality assurance and inspection',
    ],
    benefits: [
      'Extends the lifespan of metal assets',
      'Restores functionality and safety',
      'Minimizes downtime for industrial equipment',
      'Cost-effective alternative to replacement',
    ],
    image: '/images/welding-repair.jpg',
  },
  {
    id: 'cutting-bending',
    name: 'Cutting & Bending',
    description: 'Precision metal cutting and bending services using advanced machinery to shape sheets and profiles according to exact client specifications for various projects.',
    price: 'R 1 000',
    features: [
      'CNC precision cutting and bending',
      'Handles various metal types and thicknesses',
      'Complex shape capabilities',
      'Fast turnaround times',
    ],
    benefits: [
      'Accurate and consistent results',
      'Reduces material waste',
      'Enables complex designs and components',
      'Efficient production for large and small batches',
    ],
    image: '/images/cutting-bending.jpg',
  },
];