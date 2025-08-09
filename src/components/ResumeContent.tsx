interface ResumeContentProps {
  isPreview?: boolean;
  className?: string;
}

const ResumeContent = ({ isPreview = false, className = "" }: ResumeContentProps) => {
  return (
    <div 
      className={`resume-content ${className}`} 
      id="resume-content"
    >
      {/* Contact Information Header */}
      <div className="text-center mb-6">
        <p className="text-md text-gray-600 contact-info">
          <a href="mailto:roland.bair@schulentwickler.at" className="text-blue-600 underline hover:text-blue-800">roland.bair@schulentwickler.at</a> &nbsp;&bull;&nbsp; 
          <a href="https://linkedin.com/in/rolandbair" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">LinkedIn</a> &nbsp;&bull;&nbsp; 
          Wien, AT
        </p>
      </div>

      {/* Name Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Roland Bair</h1>
      </header>

      {/* Profile Section */}
      <section className="mb-8 section">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Profil</h2>
        <p className="text-gray-700 leading-relaxed">
          Engagierter Begleiter für Schulentwicklung mit über 20 Jahren Erfahrung in der Gestaltung von digitalen Werkzeugen und lernenden Organisationen. Seit 2020 setze ich meine Expertise gezielt ein, um die Weiterentwicklung von Schulen aktiv mitzugestalten. Ich verbinde Führungserfahrung mit einem tiefen Verständnis für Schulkultur und technologische Möglichkeiten (insb. KI). Meine Stärke liegt darin, gemeinsam mit Schulteams nachhaltige Veränderungsprozesse anzustoßen und digitale Werkzeuge praktisch und gewinnbringend im Schulalltag zu verankern.
        </p>
      </section>

      {/* Core Competencies Section */}
      <section className="mb-8 section">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Kernkompetenzen</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 list-disc pl-5">
          <li><strong>Praxisorientierte Schulentwicklung:</strong> Partnerschaftliche Begleitung von Schulleitungen bei der Erstellung und Umsetzung von SEPs, Moderation von pädagogischen Tagen und Team-Workshops.</li>
          <li><strong>Digitale Schulentwicklung & Umsetzung:</strong> Entwicklung und praktische Umsetzung von Digitalisierungskonzepten, Begleitung bei der Einführung von KI-Lösungen und digitalen Werkzeugen.</li>
          <li><strong>Führung & Prozessbegleitung:</strong> Fähigkeit, komplexe Vorhaben verständlich zu planen und umzusetzen. Begleitung von Veränderungsprozessen und Zusammenführung von Teams.</li>
          <li><strong>Agile & Lean Arbeitsweisen:</strong> Aufbau effektiver Teams, Verankerung agiler Prinzipien (Scrum) zur Verbesserung der Zusammenarbeit.</li>
          <li><strong>Technologisches Know-how:</strong> Enterprise Architecture (TOGAF), Softwareentwicklung, KI-Anwendung, IT-Sicherheit (ISO 27001).</li>
        </ul>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-8 section page-break-before-print">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Berufserfahrung</h2>
        
        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Schulentwickler & Digitalisierungsberater</h3>
          <p className="job-meta text-gray-600 text-sm">Schulentwickler.at | Wien, AT | 02/2020 – Aktuell</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Partnerschaftliche Beratung von Schulleitungen zur Verankerung von Digitalisierung in Schulentwicklungsplänen.</li>
            <li>Moderation von pädagogischen Tagen und Teamentwicklungsprozessen mit Fokus auf digitale Kompetenzen.</li>
            <li>Begleitung von Schulen bei der Einführung und nachhaltigen Nutzung digitaler Werkzeuge und KI-Anwendungen.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Head of AI & Strategy</h3>
          <p className="job-meta text-gray-600 text-sm">Teachino FlexCo | Wien, AT | 05/2023 – Aktuell</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Praktische Erprobung und Entwicklung von KI-Anwendungen für den Unterricht.</li>
            <li>Mitgestaltung von Lernlösungen an der Schnittstelle von Pädagogik und Technologie.</li>
            <li>Konzeption und Durchführung von praxisnahen KI-Trainings für Lehrkräfte und Schulleitungen.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Führungspositionen (CEO, Group-CEO, Head of Engineering)</h3>
          <p className="job-meta text-gray-600 text-sm">Untis GmbH | Stockerau, AT | 06/2020 – 12/2024</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Als Geschäftsführer die Weiterentwicklung von Untis verantwortet, um den Nutzen für Schulen kontinuierlich zu verbessern (Ergebnis: 30% Wachstum durch kundennahe Produktentwicklung).</li>
            <li>Aufbau und Führung von Teams (über 150 Mitarbeitende) mit Fokus auf Eigenverantwortung und enge Zusammenarbeit.</li>
            <li>Praktische Einführung von KI-Werkzeugen (z.B. Chatbot), um den Schulalltag zu erleichtern.</li>
            <li>Aufbau von agilen Produktteams, die eng mit Anwendern zusammenarbeiten.</li>
            <li>Schaffung einer stabilen und zukunftsfähigen technischen Basis für digitale Bildungswerkzeuge.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Berater, Begleiter & Unternehmer</h3>
          <p className="job-meta text-gray-600 text-sm">Roland Bair eU | Wien, AT | 03/2015 – 12/2024</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li><strong>Beratung & Begleitung:</strong> Unterstützung von Organisationen im Bildungsbereich bei der Einführung agiler Arbeitsweisen.</li>
            <li><strong>Eigene Projekte:</strong> Entwicklung und Erprobung von KI-basierten Prototypen und neuen Bildungsansätzen (z.B. ImproEdu).</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg job-title font-semibold text-gray-900">Weitere relevante Stationen</h3>
           <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li><strong>Change Consultant, Avanade (Wien, AT):</strong> Praktische Unterstützung bei der Gestaltung von Veränderungsprozessen in Projekten.</li>
            <li><strong>Enterprise Architekt, ÖBB BCC / PV (Wien, AT):</strong> Entwurf von verständlichen Strukturen für komplexe IT-Systeme und Teamstrukturen.</li>
            <li><strong>CTO, Tablet Solutions (Wien, AT):</strong> Leitung der Softwareentwicklung und Durchführung von Kundenworkshops.</li>
            <li><strong>Diverse Rollen inkl. Enterprise Architect & Team Lead, Global Blue (Wien & Singapur):</strong> Entwicklung von Technologiestrategien, Aufbau und Leitung von Teams.</li>
          </ul>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section className="section">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Ausbildung & Zertifikate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h3 className="text-lg job-title font-semibold text-gray-900">Ausbildung</h3>
            <ul className="list-disc text-gray-700 mt-2 pl-5">
              <li><strong>MA-Lehrgang Organisationsentwicklung</strong> | ARGE Bildungsmanagement, Wien (2019)</li>
              <li><strong>BSc Wirtschaftsinformatik</strong> | TU Wien (2011)</li>
              <li><strong>Lehre als IT-Developer</strong> | Berufsschule Mollardgasse, Wien (2005)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg job-title font-semibold text-gray-900">Wichtigste Zertifikate</h3>
            <ul className="list-disc text-gray-700 mt-2 pl-5">
              <li>Flight Level 3 Design (2025)</li>
              <li>Certified Aware Leader – AgileLeadershipJourney (2023)</li>
              <li>Zertifizierter LeSS Practitioner (2019)</li>
              <li>Certified Enterprise Architecture Practitioner - TOGAF 9 (2013)</li>
              <li>ISO/IEC 27001 Foundation (2021)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeContent;
