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
          Engagierter Begleiter für Schulentwicklung mit über 20 Jahren Erfahrung in der Gestaltung von digitalen Werkzeugen und lernenden Organisationen. Seit 2020 setze ich meine Expertise gezielt ein, um die Weiterentwicklung von Schulen aktiv mitzugestalten. Ich verbinde Führungserfahrung mit einem tiefen Verständnis für Organisationskultur und technologische Möglichkeiten (insb. KI). Meine Stärke liegt in der Expertise im überschneidenden Themenkomplex <strong>Schulentwicklung-Digitalisierung-Organisationsführung.</strong>
        </p>
      </section>

      {/* Core Competencies Section */}
      <section className="mb-8 section">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Kernkompetenzen</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 list-disc pl-5">
          <li><strong>Praxisorientierte Schulentwicklung:</strong> Partnerschaftliche Begleitung von Schulleitungen bei der Konzeption von SEPs inkl. strukturierter Umsetzung, Moderation von pädagogischen Tagen und Konferenzen.</li>
          <li><strong>Führung & Prozessbegleitung:</strong> Identifizierung und Stärkung des schulorganisatorischen Rahmens für positive Veränderungskultur.</li>
          <li><strong>Digitale Schulentwicklung & Umsetzung:</strong> Entwicklung und praktische Umsetzung von Digitalisierungskonzepten und Einordnung im SEP, Begleitung bei der Einführung von digitalen Werkzeugen und Abläufen.</li>
          <li><strong>Agile & Lean Arbeitsweisen:</strong> Gestaltung effektiver Strukturen, Abläufe und Verständnisse zur Förderung einer effizienten Zusammenarbeit.</li>
          <li><strong>Technologisches Know-how:</strong> Enterprise Architecture (TOGAF), Softwareentwicklung, KI-Anwendung, Tool-Einführung, IT-Sicherheit (ISO 27001, Datenschutz).</li>
        </ul>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-8 section page-break-before-print">
        <h2 className="text-xl md:text-2xl border-b-2 border-gray-200 pb-2 mb-4 font-semibold text-gray-800">Berufserfahrung</h2>
        
        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Schulentwickler & Digitalisierungsberater</h3>
          <p className="job-meta text-gray-600 text-sm">Schulentwickler.at | Wien, AT | 02/2020 – Aktuell</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Partnerschaftliche Begleitung von Schulleitung(steams) zur Verankerung von Digitalisierung in Schulentwicklungsplänen.</li>
            <li>Moderation von Konferenzen und Teamentwicklungsprozessen mit Fokus auf Stärkung der Eigenverantwortung.</li>
            <li>Begleitung von Schulen bei der Einführung und nachhaltigen Nutzung digitaler Werkzeuge.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Head of AI & Strategy</h3>
          <p className="job-meta text-gray-600 text-sm">Teachino FlexCo | Wien, AT | 05/2023 – Aktuell</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Praktische Erprobung und Entwicklung von KI-Anwendungen für den Unterricht.</li>
            <li>Mitgestaltung von Lernlösungen an der Schnittstelle von Pädagogik und Technologie.</li>
            <li>Neugestaltung der strategischen Ausrichtung von Teachino.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Führungspositionen (Group-Co-CEO, Co-CEO, Head of Engineering)</h3>
          <p className="job-meta text-gray-600 text-sm">Untis GmbH | Stockerau, AT | 06/2020 – 12/2024</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li>Die "Untis-Gruppe" konzeptioniert und die ersten Phasen des Veränderungsprozesses begleitet.</li>
            <li>Stärkung und Führung von Teams (über 150 Mitarbeitende) mit Fokus auf Eigenverantwortung und Kundenfokus.</li>
            <li>Aufbau von agilen Produktteams, die eng mit Anwendern zusammenarbeiten.</li>
            <li>Konzeption einer stabilen und zukunftsfähigen technischen Basis für digitale Bildungswerkzeuge.</li>
            <li>Praktische Einführung und Trainings von KI-Werkzeugen (z.B. Chatbot).</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg job-title font-semibold text-gray-900">Berater, Begleiter & Unternehmer</h3>
          <p className="job-meta text-gray-600 text-sm">Roland Bair eU | Wien, AT | 03/2015 – 12/2024</p>
          <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li><strong>Beratung & Begleitung:</strong> Unterstützung von Organisationen u.a. im Bildungsbereich bei der Einführung nachhaltiger Arbeitsweisen und Strukturen.</li>
            <li><strong>Eigene Projekte:</strong> Entwicklung und Erprobung von KI-basierten Prototypen und Analyse von Bildungsherausforderungen.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg job-title font-semibold text-gray-900">Weitere relevante Stationen</h3>
           <ul className="list-disc text-gray-700 mt-2 pl-5">
            <li><strong>Change Consultant, Avanade (Wien, AT):</strong> Abgleich von Strategie- und Organisationsentwicklungsmethodiken.</li>
            <li><strong>Enterprise Architekt, ÖBB BCC / PV (Wien, AT):</strong> Entwurf von verständlichen Strukturen für komplexe IT-Systeme und Organisationsstrukturen.</li>
            <li><strong>CTO, Tablet Solutions (Wien, AT):</strong> Leitung der Softwareentwicklung und Durchführung von Kundenworkshops.</li>
            <li><strong>Diverse Rollen inkl. Enterprise Architect & Team Lead, Global Blue (Wien & Singapur):</strong> Entwicklung von Technologiestrategien, Aufbau und Leitung von Teams.</li>
            <li><strong>Softwareentwickler bei TLC GmbH und Topcall Int. GmbH (Wien, AT) </strong> Entwicklung von Softwareprodukten, Evaluierung Lizenzmodelle, Unterstützung Prozessmanagement, Capability Maturity Model (CMMI Level 1)</li>
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
              <li>ISO/IEC 27001 Foundation (2021)</li>
              <li>Zertifizierter LeSS Practitioner (2019)</li>
              <li>Certified Enterprise Architecture Practitioner - TOGAF 9 (2013)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeContent;
