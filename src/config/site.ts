export const SITE_CONFIG = {
  name: "SchulEntwickler.at",
  title: "SchulEntwickler.at - Partizipative Führung & Digitalisierung für Schulen",
  description: "Professionelle Schulentwicklung mit Fokus auf partizipative Führung, Digitalisierung und Organisationsentwicklung. Begleitung für nachhaltige Veränderungsprozesse in Bildungseinrichtungen.",
  url: "https://schulentwickler.at",
  locale: "de-AT",
  
  contact: {
    email: "office@schulentwickler.at",
    phone: "+43 123 456 789",
    address: "Wien, Österreich",
    linkedin: "https://linkedin.com/in/rolandbair"
  },
  
  founder: {
    name: "Roland Bair",
    title: "Schulentwickler & Digitalisierungsberater",
    email: "roland.bair@schulentwickler.at"
  },
  
  services: [
    {
      id: "partizipative-fuehrung",
      name: "Partizipative Führung",
      path: "/partizipative-fuehrung"
    },
    {
      id: "digitalisierung", 
      name: "Digitalisierung",
      path: "/digitalisierung"
    },
    {
      id: "organisationsentwicklung",
      name: "Organisationsentwicklung", 
      path: "/organisationsentwicklung"
    }
  ],
  
  seo: {
    keywords: [
      "Schulentwicklung",
      "partizipative Führung", 
      "Digitalisierung",
      "Organisationsentwicklung",
      "Bildung",
      "Schule",
      "Beratung",
      "Österreich",
      "Wien",
      "Veränderungsprozesse",
      "Schulkultur",
      "KI in der Bildung"
    ],
    
    author: "Roland Bair - SchulEntwickler.at",
    
    openGraph: {
      type: "website",
      locale: "de_AT",
      siteName: "SchulEntwickler.at"
    }
  }
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Start", href: "/", section: "home" },
  { label: "Dienstleistungen", href: "/", section: "services" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "mailto:office@schulentwickler.at", external: true }
] as const;
