
import { Service, Project, TeamMember, Milestone } from './types';

import prisonImg from './assets/images/prison.jpg';
import policeImg from './assets/images/police.jpeg';
import aggrekoImg from './assets/images/Gas Methane Rubavu Aggreko.png';
import gatunaRoadImg from './assets/images/kigali-gatuna_road.jpg';
import jumeirahImg from './assets/images/JUMARA BEACH.jpg';
import roadImg from './assets/images/roadimage.jpg';
import containerImg from './assets/images/container.png';
import batteryImg from './assets/images/battery backup.jpg';
import backupSystemImg from './assets/images/backup system.png';
import batteryStorageImg from './assets/images/battery storage system.png';
import conatainerImg from './assets/images/conatainer.png';

export const SERVICES: Service[] = [
  {
    id: 'mep',
    title: 'MEP Design & Supervision',
    description: 'Specialized Mechanical, Electrical, and Plumbing engineering solutions for complex infrastructure.',
    items: [
      'HVAC Systems (Ventilation, VRV, AHU)',
      'Fire & Safety (Sprinklers, Hydrants, Alarms)',
      'Electrical Systems (LV, MDB/SMDB/FDB)',
      'Low-Current Systems (CCTV, BMS, Access Control)',
      'Plumbing & Solar Water Heaters'
    ]
  },
  {
    id: 'construction',
    title: 'Construction Technology',
    description: 'Integrating technology into physical infrastructure for smarter, more efficient facilities.',
    items: [
      'Smart Building Solutions',
      'Facilities Construction',
      'Roads and Infrastructure Works',
      'Green Building Consultancy'
    ]
  },
  {
    id: 'it',
    title: 'IT & Surveillance',
    description: 'Enterprise-grade information technology and high-security surveillance systems.',
    items: [
      'CCTV Systems',
      'Access Control',
      'Communication Infrastructure',
      'Cybersecurity Solutions'
    ]
  },
  {
    id: 'energy',
    title: 'Energy & Sustainability',
    description: 'Leading the transition to sustainable energy with specialized audit and design services.',
    items: [
      'Energy Audit & Certification',
      'Renewable Energy Systems',
      'Water Management Solutions',
      'Energy Efficiency Reporting'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'rcs',
    title: 'Rwanda Correctional Service',
    location: 'National Portfolio, Rwanda',
    category: 'MEP Systems',
    description: 'Comprehensive engineering engagement involving the modernization of critical facility infrastructure.',
    imageUrl: prisonImg,
    deliverables: [
      'Supply of Electrical Infrastructure',
      'Installation of Industrial Electrical Systems',
      'Plumbing & Water Management Installation',
      'System Supervision & Safety Testing'
    ],
    galleryImages: [prisonImg, backupSystemImg, batteryStorageImg]
  },
  {
    id: 'rnp',
    title: 'Rwanda National Police',
    location: 'Kigali, Rwanda',
    category: 'IT & Fiber',
    description: 'Deployment of high-speed digital infrastructure to support national security operations.',
    imageUrl: policeImg,
    deliverables: [
      'Installation of Fiber Optic Network',
      'Supply of High-Capacity Connectivity Equipment',
      'Network Infrastructure Mapping',
      'Operational Support & Handover'
    ],
    galleryImages: [policeImg, backupSystemImg, containerImg]
  },
  {
    id: 'sacco',
    title: 'Rwanda SACCO Network',
    location: 'National Coverage',
    category: 'Construction & Security',
    description: 'A massive national rollout involving the construction and securing of community financial hubs.',
    imageUrl: containerImg,
    deliverables: [
      'Construction of 30+ SACCO Building Units',
      'Installation of Enterprise CCTV Surveillance',
      'Facility Security Systems Integration',
      'Civil Engineering & Finishing Works'
    ],
    galleryImages: [containerImg, conatainerImg, backupSystemImg]
  },
  {
    id: 'aggreko',
    title: 'Gas Methane Rubavu (Aggreko)',
    location: 'Rubavu, Rwanda',
    category: 'Industrial Electrical',
    description: 'Technical maintenance and material supply for the Lake Kivu gas-to-power operations.',
    imageUrl: aggrekoImg,
    deliverables: [
      'Supply of Specialized Electrical Materials',
      'Maintenance of Mission-Critical IT Systems',
      'Industrial Hardware Sourcing',
      'Technical Lifecycle Support'
    ],
    galleryImages: [aggrekoImg, batteryStorageImg, backupSystemImg]
  },
  {
    id: 'singita',
    title: 'Singita Hotel',
    location: 'Volcanoes National Park, Rwanda',
    category: 'Material Supply',
    description: 'Supplying the foundational materials for one of the world\'s most exclusive eco-luxury retreats.',
    imageUrl: 'https://media.cntraveler.com/photos/5ea90362846f1f00085a176e/16:9/w_2560%2Cc_limit/Singita-Kwitonda-Lodge-Exterior-4.jpg',
    deliverables: [
      'Supply of High-Grade Construction Materials',
      'Logistical Coordination in Eco-Sensitive Zones',
      'Sourcing of Specialized Technical Components',
      'Supply Chain Management for Remote Sites'
    ],
    galleryImages: [batteryImg, batteryStorageImg, backupSystemImg]
  },
  {
    id: 'gatuna',
    title: 'Kigali–Gatuna Road',
    location: 'Northern Province, Rwanda',
    category: 'Road Infrastructure',
    description: 'Participating in the development of a vital regional artery connecting Rwanda to the North.',
    imageUrl: gatunaRoadImg,
    deliverables: [
      'Technical Material Supply for Road Construction',
      'Sub-Construction of Road Side Systems',
      'Electrical Infrastructure Installation',
      'Infrastructure Material Quality Testing'
    ],
    galleryImages: [gatunaRoadImg, roadImg, containerImg]
  },
  {
    id: 'kinigi',
    title: 'Musanze–Kinigi Road',
    location: 'Musanze, Rwanda',
    category: 'Civil Works',
    description: 'Enhancing the primary tourism corridor to the Volcanoes National Park.',
    imageUrl: roadImg,
    deliverables: [
      'Supply of Specialized Road Construction Materials',
      'Sub-Construction Technical Services',
      'Civil Engineering Material Sourcing',
      'Project Logistic Support'
    ],
    galleryImages: [roadImg, gatunaRoadImg, containerImg]
  },
  {
    id: 'jumeirah',
    title: 'Jumeirah Beach Hotel',
    location: 'Dubai / Regional Partner',
    category: 'Solar & Renewable',
    description: 'International collaboration focusing on cutting-edge renewable energy integration.',
    imageUrl: jumeirahImg,
    deliverables: [
      'Solar Energy System Installation',
      'Supply of Specialized Solar Materials',
      'Renewable Energy Integration Design',
      'Hardware Procurement & Implementation'
    ],
    galleryImages: [jumeirahImg, batteryStorageImg, backupSystemImg]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Eng. Noah Hills Nkurikiyimanaa',
    role: 'Managing Director & Founder',
    background: 'IT & Electronics Engineering',
    category: 'Executive'
  },
  {
    name: 'Joselyne Iraguha',
    role: 'General Manager',
    category: 'Business'
  },
  {
    name: 'Kayiranga Leonard',
    role: 'Project Manager (MBA)',
    background: 'Civil Engineering',
    category: 'Business'
  },
  {
    name: 'UWABABYEYI Theophile',
    role: 'DAF / MBA in Finance',
    category: 'Business'
  },
  {
    name: 'Bazizane Janet',
    role: 'Marketing Manager',
    category: 'Business'
  },
  {
    name: 'Ir Charles Ntamushobora',
    role: 'Electrical Engineer',
    category: 'Technical'
  },
  {
    name: 'Rukundo Japhet',
    role: 'Electrical Design Engineer',
    category: 'Technical'
  },
  {
    name: 'Jean Sauveul Ugizwenayo',
    role: 'Electrical Engineer',
    category: 'Technical'
  },
  {
    name: 'Shimwa Zephanie',
    role: 'Civil Engineer',
    category: 'Technical'
  },
  {
    name: 'Ingabire Allen',
    role: 'Auditor',
    category: 'Business'
  },
  {
    name: 'Umutoni Aliane',
    role: 'Project Manager',
    category: 'Technical'
  }
];

export const MILESTONES: Milestone[] = [
  { year: '2006', event: 'Foundation and early entry into technical consulting.' },
  { year: '2016', event: 'Major rebranding and pivot to integrated MEP and IT surveillance services.' },
  { year: '2018', event: 'Secured landmark projects in healthcare and high-rise commercial sectors.' },
  { year: '2020', event: 'Strategic partnerships with global leaders and focus on sustainable infrastructure.' },
  { year: '2024', event: 'Full-scale operational expansion into Uganda, DRC, Kenya, and Tanzania.' },
  { year: '2025', event: 'Consolidating position as the premier East African engineering and technology partner.' }
];

export const PARTNERS: string[] = [
  'Schneider Electric',
  'NZ Engineering Services',
  'KZ Consultants Ltd',
  'Ng’andu Consulting Ltd',
  'Solid Africa',
  'Galaxy Hotel',
  'West Africa Ltd',
  'Africa New Life Ministries',
  'BBOXX',
  'Unilever',
  'Mount Zion International University',
  'Strawtec',
  'GreenA Consultants',
  'Touch Africa',
  'Institute of Legal Practice and Development (ILPD)',
  'Rwanda Correctional Service (RCS)',
  'Orascom Construction Industries',
  'Gasabo 3D',
  'One Acre Fund',
  'Rwanda National Police',
  'ICON',
  'RwandaMotor',
  'RWANCO Engineering Services Ltd',
  'Babylon',
  'Century Park Kigali',
  'Hycogec Consultant Ltd',
  'Wellspring Academy',
  'Liquid Telecom',
  'Phoenix Plaza',
  'Sawa Citi',
  'Solace Ministries'
];
