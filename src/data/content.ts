export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FeatureData {
  title: string;
  description: string;
  iconName: string;
}

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
  email?: string;
}

// Digitalization Process Steps
export const digitalizationSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Analyse & Zielsetzung",
    description: "Gemeinsam analysieren wir Ihre aktuelle Situation und definieren klare Ziele für Ihre digitale Transformation."
  },
  {
    number: 2,
    title: "Konzepterstellung",
    description: "Wir entwickeln ein maßgeschneidertes Digitalisierungskonzept, das zu Ihrer Schule und Ihren Ressourcen passt."
  },
  {
    number: 3,
    title: "Schrittweise Umsetzung",
    description: "In überschaubaren Schritten setzen wir das Konzept um und begleiten Sie bei jedem Schritt."
  },
  {
    number: 4,
    title: "Begleitung & Nachhaltigkeit",
    description: "Auch nach der Implementierung stehen wir Ihnen zur Seite und sorgen für nachhaltige Verankerung."
  }
];

// Organizational Development Process Steps
export const organizationalSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Ist-Analyse",
    description: "Umfassende Analyse der aktuellen Strukturen, Prozesse und Kultur Ihrer Schule."
  },
  {
    number: 2,
    title: "Zielvision entwickeln",
    description: "Gemeinsame Entwicklung einer klaren Vision für die Zukunft Ihrer Organisation."
  },
  {
    number: 3,
    title: "Maßnahmenplanung",
    description: "Erstellung eines konkreten Aktionsplans mit messbaren Zielen und Zeitplänen."
  },
  {
    number: 4,
    title: "Umsetzung begleiten",
    description: "Kontinuierliche Begleitung bei der Umsetzung und Anpassung der Maßnahmen."
  }
];

// Participative Leadership Process Steps
export const leadershipSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Führungsanalyse",
    description: "Analyse des aktuellen Führungsstils und der Führungskultur in Ihrer Schule."
  },
  {
    number: 2,
    title: "Partizipative Strukturen entwickeln",
    description: "Gemeinsame Entwicklung von Strukturen für mehr Beteiligung und Mitbestimmung."
  },
  {
    number: 3,
    title: "Führungskräfte stärken",
    description: "Training und Coaching für Führungskräfte in partizipativen Führungsmethoden."
  },
  {
    number: 4,
    title: "Nachhaltigkeit sichern",
    description: "Verankerung der neuen Führungskultur und kontinuierliche Weiterentwicklung."
  }
];

// CTA Data
export const ctaData: Record<string, CTAData> = {
  digitalization: {
    title: "Starten Sie Ihre digitale Transformation",
    description: "Lassen Sie uns gemeinsam den ersten Schritt in Richtung einer digital gestärkten Schule gehen.",
    buttonText: "Digitalisierungsberatung anfragen",
    email: "office@schulentwickler.at"
  },
  organization: {
    title: "Beginnen Sie Ihre Organisationsentwicklung",
    description: "Gemeinsam entwickeln wir Ihre Schule zu einer lernenden und zukunftsfähigen Organisation.",
    buttonText: "Organisationsentwicklung starten",
    email: "office@schulentwickler.at"
  },
  leadership: {
    title: "Entwickeln Sie partizipative Führung",
    description: "Lassen Sie uns gemeinsam eine Führungskultur schaffen, die alle Beteiligten stärkt.",
    buttonText: "Führungsberatung anfragen",
    email: "office@schulentwickler.at"
  }
};
