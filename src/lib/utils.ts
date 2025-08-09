import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SITE_CONFIG } from '@/config/site';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createEmailLink = (subject: string, body?: string): string => {
  const params = new URLSearchParams();
  params.append('subject', subject);
  if (body) {
    params.append('body', body);
  }
  return `mailto:${SITE_CONFIG.contact.email}?${params.toString()}`;
};

export const openEmailClient = (subject: string, body?: string): void => {
  window.location.href = createEmailLink(subject, body);
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Format Austrian phone numbers
  if (cleaned.startsWith('+43')) {
    const number = cleaned.slice(3);
    if (number.length >= 10) {
      return `+43 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
    }
  }
  
  return phone;
};

export const createPhoneLink = (phone: string): string => {
  return `tel:${phone.replace(/\s/g, '')}`;
};

export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Utility for handling navigation with scroll
export const navigateWithScroll = (
  navigate: (path: string) => void,
  path: string,
  section?: string
): void => {
  if (section && window.location.pathname === path) {
    // If we're already on the page, just scroll
    scrollToElement(section);
  } else {
    // Navigate and then scroll
    navigate(path);
    if (section) {
      setTimeout(() => scrollToElement(section), 100);
    } else {
      setTimeout(() => scrollToTop(), 100);
    }
  }
};
