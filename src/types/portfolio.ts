export interface HeaderData {
  title: string;
  paragraph?: string;
}

export interface AboutData {
  paragraph: string;
  careerStartYear?: number;
}

export interface ExperienceLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  extras?: string[];
  links?: ExperienceLink[];
}

export interface ServiceItem {
  name: string;
  text: string;
  percent: string | number;
  category?: "frontend" | "mobile" | "backend";
}

export interface ContactData {
  address: string;
  phone: string;
  email: string;
  Github: string;
  linkedin: string;
}

export interface TestimonialItem {
  img: string;
  text: string;
  name: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

export interface TeamMember {
  img: string;
  name: string;
  job: string;
}

export interface LandingPageData {
  Header?: HeaderData;
  About?: AboutData;
  Experience?: ExperienceItem[];
  Services?: ServiceItem[];
  Contact?: ContactData;
  Testimonials?: TestimonialItem[];
  Features?: FeatureItem[];
  Team?: TeamMember[];
}

export interface ProjectItem {
  href: string;
  title: string;
  description?: string;
}
