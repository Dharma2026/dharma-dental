// Type definitions for Doctor schema

export interface DoctorSocial {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  }
  
  export interface DoctorAvailability {
    acceptingNewPatients: boolean;
    schedule?: string;
  }
  
  export interface Doctor {
    _id: string;
    _type: 'doctor';
    _createdAt: string;
    _updatedAt: string;
    name: string;
    slug: {
      current: string;
      _type: 'slug';
    };
    title?: string;
    specialization?: string[];
    image?: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt?: string;
    };
    bio?: any[]; // Portable Text blocks
    shortBio?: string;
    qualifications?: string[];
    experience?: number;
    email?: string;
    phone?: string;
    social?: DoctorSocial;
    languages?: string[];
    availability?: DoctorAvailability;
    featured: boolean;
    order?: number;
  }
  
  // Helper function to format doctor display name
  export function getDoctorDisplayName(doctor: Doctor): string {
    return doctor.title ? `${doctor.name}, ${doctor.title}` : doctor.name;
  }
  
  // Helper function to get specialization labels
  export function getSpecializationLabels(values?: string[]): string[] {
    if (!values) return [];
    
    const labels: Record<string, string> = {
      general: 'General Dentistry',
      orthodontics: 'Orthodontics',
      periodontics: 'Periodontics',
      endodontics: 'Endodontics',
      prosthodontics: 'Prosthodontics',
      'oral-surgery': 'Oral Surgery',
      pediatric: 'Pediatric Dentistry',
      cosmetic: 'Cosmetic Dentistry',
      implantology: 'Implantology',
    };
  
    return values.map(value => labels[value] || value);
  }
  
  // GROQ query to fetch all doctors
  export const doctorsQuery = `*[_type == "doctor"] | order(order asc, name asc) {
    _id,
    _createdAt,
    _updatedAt,
    name,
    slug,
    title,
    specialization,
    image{
      asset->,
      alt
    },
    bio,
    shortBio,
    qualifications,
    experience,
    email,
    phone,
    social,
    languages,
    availability,
    featured,
    order
  }`;
  
  // GROQ query for single doctor by slug
  export const singleDoctorQuery = (slug: string) => `*[_type == "doctor" && slug.current == "${slug}"][0] {
    _id,
    _createdAt,
    _updatedAt,
    name,
    slug,
    title,
    specialization,
    image{
      asset->,
      alt
    },
    bio,
    shortBio,
    qualifications,
    experience,
    email,
    phone,
    social,
    languages,
    availability,
    featured,
    order
  }`;
  
  // GROQ query for featured doctors
  export const featuredDoctorsQuery = `*[_type == "doctor" && featured == true] | order(order asc) {
    _id,
    name,
    slug,
    title,
    specialization,
    image{
      asset->,
      alt
    },
    shortBio,
    experience
  }`;