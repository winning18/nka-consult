export type RichText = string | { intro: string | null; items: string[] };

export interface ProjectImage {
  file: string;
  caption: string | null;
}

export interface Project {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  country: string;
  location: string;
  client: string;
  startDate: string;
  completionDate: string;
  duration: string;
  value: string;
  narrative: RichText | null;
  role: RichText | null;
  valueAdded: RichText | null;
  images: ProjectImage[];
}

export interface TeamMember {
  name: string;
  credentials: string;
  role: string;
  bio: string;
  featured: boolean;
}

export interface Donor {
  agency: string;
  role: string;
  projects: string[];
}

export interface ClientLogo {
  file: string;
  name: string;
}

export interface OfficePhoto {
  file: string;
  caption: string;
}

export interface Certification {
  file: string;
  title: string;
  detail: string;
}

export interface CoreValue {
  name: string;
  description: string;
}

export interface Company {
  name: string;
  tagline: string;
  founded: number;
  overview: string;
  vision: string;
  mission: string;
  coreValues: CoreValue[];
  coreBusinessAreas: string[];
  coreTeamDisciplines: string[];
  legalStatus: string;
  organization: string;
  specializationNote: string;
  projectExecution: string;
  coreCompetencies: string;
  contact: {
    poBox: string;
    phone: string;
    emails: string[];
    headOffice: { label: string; address: string; gpsAddress: string };
  };
}
