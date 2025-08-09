import { GraduationCap, Users, Laptop, TrendingUp, Settings } from "lucide-react";

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
      <div className="resume-contact-header">
        <div>
          <a href="mailto:roland.bair@schulentwickler.at">roland.bair@schulentwickler.at</a>
          <span>•</span>
          <a href="https://linkedin.com/in/rolandbair" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>•</span>
          <span>Wien, Austria</span>
        </div>
      </div>

      {/* Name Header */}
      <header className="resume-name-header">
        <h1>Roland Bair</h1>
        <div></div>
      </header>

      {/* Profile Section */}
      <section className="resume-section">
        <h2>PROFIL</h2>
        <p>
          Engagierter Begleiter für Schulentwicklung mit über 20 Jahren Erfahrung in der Gestaltung von digitalen Werkzeugen und lernenden Organisationen. Seit 2020 setze ich meine Expertise gezielt ein, um die Weiterentwicklung von Schulen aktiv mitzugestalten. Ich verbinde Führungserfahrung mit einem tiefen Verständnis für Organisationskultur und technologische Möglichkeiten (insb. KI). Meine Stärke liegt in der Expertise im überschneidenden Themenkomplex <strong>Schulentwicklung-Digitalisierung-Organisationsführung.</strong>
        </p>
      </section>

      {/* Core Competencies Section */}
      <section className="resume-section">
        <h2>KERNKOMPETENZEN</h2>
        <div className="resume-competencies-grid">
          <div>
            <div>
              <div className="competency-title-with-icon">
                <GraduationCap className="competency-icon" />
                <h3>Praxisorientierte Schulentwicklung</h3>
              </div>
              <p>Partnerschaftliche Begleitung von Schulleitungen bei der Konzeption von SEPs inkl. strukturierter Umsetzung, Moderation von pädagogischen Tagen und Konferenzen.</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Users className="competency-icon" />
                <h3>Führung & Prozessbegleitung</h3>
              </div>
              <p>Identifizierung und Stärkung des schulorganisatorischen Rahmens für positive Veränderungskultur.</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Laptop className="competency-icon" />
                <h3>Digitale Schulentwicklung & Umsetzung</h3>
              </div>
              <p>Entwicklung und praktische Umsetzung von Digitalisierungskonzepten und Einordnung im SEP, Begleitung bei der Einführung von digitalen Werkzeugen und Abläufen.</p>
            </div>
          </div>
          <div>
            <div>
              <div className="competency-title-with-icon">
                <TrendingUp className="competency-icon" />
                <h3>Agile & Lean Arbeitsweisen</h3>
              </div>
              <p>Gestaltung effektiver Strukturen, Abläufe und Verständnisse zur Förderung einer effizienten Zusammenarbeit.</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Settings className="competency-icon" />
                <h3>Technologisches Know-how</h3>
              </div>
              <p>Enterprise Architecture (TOGAF), Softwareentwicklung, KI-Anwendung, Tool-Einführung, IT-Sicherheit (ISO 27001, Datenschutz).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="resume-section page-break-before-print">
        <h2>BERUFSERFAHRUNG</h2>
        
        <div className="resume-experience-item">
          <div>
            <h3>Schulentwickler & Digitalisierungsberater</h3>
            <span></span>
          </div>
          <p>Schulentwickler.at | Wien, AT | 02/2020 – Aktuell</p>
          <ul>
            <li>
              <span></span>
              <span>Partnerschaftliche Begleitung von Schulleitung(steams) zur Verankerung von Digitalisierung in Schulentwicklungsplänen.</span>
            </li>
            <li>
              <span></span>
              <span>Moderation von Konferenzen und Teamentwicklungsprozessen mit Fokus auf Stärkung der Eigenverantwortung.</span>
            </li>
            <li>
              <span></span>
              <span>Begleitung von Schulen bei der Einführung und nachhaltigen Nutzung digitaler Werkzeuge.</span>
            </li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <div>
            <h3>Head of AI & Strategy</h3>
            <span></span>
          </div>
          <p>Teachino FlexCo | Wien, AT | 05/2023 – Aktuell</p>
          <ul>
            <li>
              <span></span>
              <span>Praktische Erprobung und Entwicklung von KI-Anwendungen für den Unterricht.</span>
            </li>
            <li>
              <span></span>
              <span>Mitgestaltung von Lernlösungen an der Schnittstelle von Pädagogik und Technologie.</span>
            </li>
            <li>
              <span></span>
              <span>Neugestaltung der strategischen Ausrichtung von Teachino.</span>
            </li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <div>
            <h3>Group-Co-CEO, Co-CEO, Head of Engineering</h3>
            <span></span>
          </div>
          <p>Untis GmbH | Stockerau, AT | 06/2020 – 12/2024</p>
          <ul>
            <li>
              <span></span>
              <span>Die "Untis-Gruppe" konzeptioniert und die ersten Phasen des Veränderungsprozesses begleitet.</span>
            </li>
            <li>
              <span></span>
              <span>Stärkung und Führung von Teams (über 150 Mitarbeitende) mit Fokus auf Eigenverantwortung und Kundenfokus.</span>
            </li>
            <li>
              <span></span>
              <span>Aufbau von agilen Produktteams, die eng mit Anwendern zusammenarbeiten.</span>
            </li>
            <li>
              <span></span>
              <span>Konzeption einer stabilen und zukunftsfähigen technischen Basis für digitale Bildungswerkzeuge.</span>
            </li>
            <li>
              <span></span>
              <span>Praktische Einführung und Trainings von KI-Werkzeugen (z.B. Chatbot).</span>
            </li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <h3>Berater, Begleiter & Unternehmer</h3>
          <p>Roland Bair eU | Wien, AT | 03/2015 – 12/2024</p>
          <ul>
            <li><span></span><span><strong>Beratung & Begleitung:</strong> Unterstützung von Organisationen u.a. im Bildungsbereich bei der Einführung nachhaltiger Arbeitsweisen und Strukturen.</span></li>
            <li><span></span><span><strong>Eigene Projekte:</strong> Entwicklung und Erprobung von KI-basierten Prototypen und Analyse von Bildungsherausforderungen.</span></li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <h3>Weitere relevante Stationen</h3>
          <ul>
            <li><span></span><span><strong>Change Consultant, Avanade (Wien, AT):</strong> Abgleich von Strategie- und Organisationsentwicklungsmethodiken.</span></li>
            <li><span></span><span><strong>Enterprise Architekt, ÖBB BCC / PV (Wien, AT):</strong> Entwurf von verständlichen Strukturen für komplexe IT-Systeme und Organisationsstrukturen.</span></li>
            <li><span></span><span><strong>CTO, Tablet Solutions (Wien, AT):</strong> Leitung der Softwareentwicklung und Durchführung von Kundenworkshops.</span></li>
            <li><span></span><span><strong>Diverse Rollen inkl. Enterprise Architect & Team Lead, Global Blue (Wien & Singapur):</strong> Entwicklung von Technologiestrategien, Aufbau und Leitung von Entwicklungsteams.</span></li>
            <li><span></span><span><strong>Softwareentwickler bei TLC GmbH und Topcall Int. GmbH (Wien, AT):</strong> Entwicklung von Softwareprodukten, Evaluierung Lizenzmodelle, Unterstützung Prozessmanagement, Capability Maturity Model (CMMI Level 1)</span></li>
          </ul>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section className="resume-section">
        <h2>AUSBILDUNG & ZERTIFIKATE</h2>
        <div className="resume-education-grid">
          <div>
            <h3>Ausbildung</h3>
            <ul>
              <li><strong>MA-Lehrgang Organisationsentwicklung</strong> | ARGE Bildungsmanagement, Wien (2019)</li>
              <li><strong>BSc Wirtschaftsinformatik</strong> | TU Wien (2011)</li>
              <li><strong>Lehre als IT-Developer</strong> | Berufsschule Mollardgasse, Wien (2005)</li>
            </ul>
          </div>
          <div>
            <h3>Wichtigste Zertifikate</h3>
            <ul>
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
