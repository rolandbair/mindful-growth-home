export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  linkedin?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface TestimonialData {
  name: string;
  role: string;
  organization: string;
  content: string;
  imageUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}
