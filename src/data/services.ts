export interface Service {
  id: string;
  name: string;
  description: string;
  price: string; // ZAR price
  features: string[];
  benefits: string[];
  image: string; // Path to the image in public/images
  category: string; // New field for categorization
}

export const services: Service[] = [
  {
    id: 'metal-structures',
    name: 'Metal Structures',
    description: 'Design, fabrication, and installation of robust metal structures for industrial and commercial applications, including frameworks, hangars, and load-bearing structures.',
    price: 'R ' + (Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000).toLocaleString('en-ZA'),
    features: [
      'High-quality materials',
      'Customizable design',
      'Durable and long-lasting',
      'Precision engineering',
    ],
    benefits: [
      'Increased structural integrity',
      'Cost-effective solution',
      'Long-term investment',
      'Professional installation',
    ],
    image: '/images/metal-structures.jpg',
    category: 'Construction',
  },
  {
    id: 'art-metalwork',
    name: 'Art Metalwork',
    description: 'Creation of bespoke artistic metal pieces, including custom stairs, railings, gates, and decorative elements, blending traditional craftsmanship with modern aesthetics.',
    price: 'R ' + (Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000).toLocaleString('en-ZA'),
    features: [
      'Expert craftsmanship',
      'Unique, handcrafted designs',
      'On-site consultation',
      'High-quality materials',
    ],
    benefits: [
      'Enhanced aesthetic appeal',
      'Tailored to your needs',
      'Long-term investment',
      'Professional installation',
    ],
    image: '/images/art-metalwork.jpg',
    category: 'Artistic',
  },
  {
    id: 'security-fencing',
    name: 'Security & Fencing',
    description: 'Robust security solutions for residential, commercial, and industrial perimeters, including high-security fences, gates, and access control systems.',
    price: 'R ' + (Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000).toLocaleString('en-ZA'),
    features: [
      'Durable and long-lasting',
      'Compliance with industry standards',
      'Precision engineering',
      'Customizable design',
    ],
    benefits: [
      'Improved safety',
      'Reduced maintenance',
      'Cost-effective solution',
      'Professional installation',
    ],
    image: '/images/security-fencing.jpg',
    category: 'Security',
  },
  {
    id: 'industrial-furniture',
    name: 'Industrial Furniture',
    description: 'Manufacturing of durable and stylish industrial-grade furniture for modern offices, commercial spaces, and residential interiors, combining metal with other materials like wood.',
    price: 'R ' + (Math.floor(Math.random() * (8000 - 1500 + 1)) + 1500).toLocaleString('en-ZA'),
    features: [
      'Customizable design',
      'High-quality materials',
      'Expert craftsmanship',
      'Durable and long-lasting',
    ],
    benefits: [
      'Enhanced aesthetic appeal',
      'Tailored to your needs',
      'Long-term investment',
      'Professional installation',
    ],
    image: '/images/industrial-furniture.jpg',
    category: 'Furniture',
  },
  {
    id: 'welding-repair',
    name: 'Welding & Repair',
    description: 'On-site and workshop-based welding and repair services for various metal structures and components, performed by certified and experienced welders.',
    price: 'R ' + (Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000).toLocaleString('en-ZA'),
    features: [
      'Expert craftsmanship',
      'Fast turnaround',
      'Precision engineering',
      'On-site consultation',
    ],
    benefits: [
      'Cost-effective solution',
      'Reduced maintenance',
      'Improved safety',
      'Professional installation',
    ],
    image: '/images/welding-repair.jpg',
    category: 'Maintenance',
  },
  {
    id: 'cutting-bending',
    name: 'Cutting & Bending',
    description: 'Precision metal cutting and bending services using advanced machinery to shape sheets and profiles according to exact client specifications for various projects.',
    price: 'R ' + (Math.floor(Math.random() * (3000 - 500 + 1)) + 500).toLocaleString('en-ZA'),
    features: [
      'Precision engineering',
      'Fast turnaround',
      'High-quality materials',
      'Customizable design',
    ],
    benefits: [
      'Cost-effective solution',
      'Reduced maintenance',
      'Long-term investment',
      'Professional installation',
    ],
    image: '/images/cutting-bending.jpg',
    category: 'Fabrication',
  },
];