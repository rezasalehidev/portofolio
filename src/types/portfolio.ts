export interface HeaderData {
  title: string;
  paragraph?: string;
}

export interface AboutData {
  paragraph: string;
  Why: string[];
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
  twitter: string;
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
