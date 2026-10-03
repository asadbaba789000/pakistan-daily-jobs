export type JobSector = 'Government' | 'Private';

export type Province = 
  | 'Federal' 
  | 'Punjab' 
  | 'Sindh' 
  | 'KPK' 
  | 'Balochistan' 
  | 'AJK' 
  | 'Gilgit-Baltistan';

export type PakistaniCity = 
  | 'Lahore' 
  | 'Karachi' 
  | 'Islamabad' 
  | 'Rawalpindi' 
  | 'Faisalabad' 
  | 'Multan' 
  | 'Peshawar' 
  | 'Quetta' 
  | 'Sialkot' 
  | 'Gujranwala' 
  | 'Hyderabad' 
  | 'Remote';

export type JobType = 
  | 'Full Time' 
  | 'Part Time' 
  | 'Contract' 
  | 'Internship' 
  | 'Remote';

export type ExperienceLevel = 
  | 'Fresh / Entry Level' 
  | '1-3 Years' 
  | '3-5 Years' 
  | '5+ Years';

export interface Job {
  id: string;
  title: string;
  company: string;
  department?: string; // For government jobs
  location: PakistaniCity | string;
  province?: Province;
  sector: JobSector;
  jobType: JobType;
  category: string;
  salary?: string;
  postedDate: string;
  deadline?: string;
  education: string;
  experience?: string;
  bpsScale?: string; // e.g. "BPS-16", "BPS-17"
  isFeatured?: boolean;
  isUrgent?: boolean;
  isDemo?: boolean;
  logoBgColor?: string;
  logoTextColor?: string;
  logoInitials?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  vacanciesCount?: number;
  testOrganization?: 'FPSC' | 'PPSC' | 'SPSC' | 'KPPSC' | 'BPSC' | 'NTS' | 'PTS' | 'Direct Interview';
  industry?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  iconName: string;
  jobCount: number;
  popularTitle: string;
  bgColor: string;
  textColor: string;
}

export interface CityInfo {
  name: PakistaniCity;
  province: string;
  jobCount: number;
  featuredIndustries: string[];
  imageDesc: string;
  badgeColor: string;
}

export interface FilterState {
  searchQuery: string;
  city: string;
  category: string;
  sector: 'All' | 'Government' | 'Private';
  province: string;
  jobType: string;
  experience: string;
  salaryRange: string;
}
