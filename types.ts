
export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
  deliverables?: string[];
  galleryImages?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  background?: string;
  category: 'Executive' | 'Technical' | 'Business' | 'Admin';
}

export interface Milestone {
  year: string;
  event: string;
}
