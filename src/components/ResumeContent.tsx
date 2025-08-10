import { GraduationCap, Users, Laptop, TrendingUp, Settings } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface ResumeContentProps {
  isPreview?: boolean;
  className?: string;
}

const ResumeContent = ({ isPreview = false, className = "" }: ResumeContentProps) => {
  const { t } = useTranslation('pages');

  return (
    <div 
      className={`resume-content ${className}`} 
      id="resume-content"
    >
      {/* Contact Information Header */}
      <div className="resume-contact-header">
        <div>
          <a href={`mailto:${t('resume.contact.email')}`}>{t('resume.contact.email')}</a>
          <span>•</span>
          <a href="https://linkedin.com/in/rolandbair" target="_blank" rel="noopener noreferrer">{t('resume.contact.linkedin')}</a>
          <span>•</span>
          <span>{t('resume.contact.location')}</span>
        </div>
      </div>

      {/* Name Header */}
      <header className="resume-name-header">
        <h1>{t('resume.name')}</h1>
        <div></div>
      </header>

      {/* Profile Section */}
      <section className="resume-section">
        <h2>{t('resume.sections.profile')}</h2>
        <p>
          {t('resume.profile.description')}
        </p>
      </section>

      {/* Core Competencies Section */}
      <section className="resume-section">
        <h2>{t('resume.sections.coreCompetencies')}</h2>
        <div className="resume-competencies-grid">
          <div>
            <div>
              <div className="competency-title-with-icon">
                <GraduationCap className="competency-icon" />
                <h3>{t('resume.competencies.schoolDevelopment.title')}</h3>
              </div>
              <p>{t('resume.competencies.schoolDevelopment.description')}</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Users className="competency-icon" />
                <h3>{t('resume.competencies.leadership.title')}</h3>
              </div>
              <p>{t('resume.competencies.leadership.description')}</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Laptop className="competency-icon" />
                <h3>{t('resume.competencies.digitalSchool.title')}</h3>
              </div>
              <p>{t('resume.competencies.digitalSchool.description')}</p>
            </div>
          </div>
          <div>
            <div>
              <div className="competency-title-with-icon">
                <TrendingUp className="competency-icon" />
                <h3>{t('resume.competencies.agile.title')}</h3>
              </div>
              <p>{t('resume.competencies.agile.description')}</p>
            </div>
            <div>
              <div className="competency-title-with-icon">
                <Settings className="competency-icon" />
                <h3>{t('resume.competencies.technology.title')}</h3>
              </div>
              <p>{t('resume.competencies.technology.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="resume-section page-break-before-print">
        <h2>{t('resume.sections.experience')}</h2>
        
        <div className="resume-experience-item">
          <div>
            <h3>{t('resume.experience.positions.schoolDeveloper.title')}</h3>
            <span></span>
          </div>
          <p>{t('resume.experience.positions.schoolDeveloper.company')} | {t('resume.experience.positions.schoolDeveloper.location')} | {t('resume.experience.positions.schoolDeveloper.period')}</p>
          <ul>
            {(t('resume.experience.positions.schoolDeveloper.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
              <li key={index}>
                <span></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-experience-item">
          <div>
            <h3>{t('resume.experience.positions.headAI.title')}</h3>
            <span></span>
          </div>
          <p>{t('resume.experience.positions.headAI.company')} | {t('resume.experience.positions.headAI.location')} | {t('resume.experience.positions.headAI.period')}</p>
          <ul>
            {(t('resume.experience.positions.headAI.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
              <li key={index}>
                <span></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-experience-item">
          <div>
            <h3>{t('resume.experience.positions.ceo.title')}</h3>
            <span></span>
          </div>
          <p>{t('resume.experience.positions.ceo.company')} | {t('resume.experience.positions.ceo.location')} | {t('resume.experience.positions.ceo.period')}</p>
          <ul>
            {(t('resume.experience.positions.ceo.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
              <li key={index}>
                <span></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-experience-item">
          <h3>{t('resume.experience.positions.consultant.title')}</h3>
          <p>{t('resume.experience.positions.consultant.company')} | {t('resume.experience.positions.consultant.location')} | {t('resume.experience.positions.consultant.period')}</p>
          <ul>
            {(t('resume.experience.positions.consultant.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
              <li key={index}>
                <span></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-experience-item">
          <h3>{t('resume.experience.positions.other.title')}</h3>
          <ul>
            {(t('resume.experience.positions.other.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>
                <span></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section className="resume-section">
        <h2>{t('resume.sections.education')}</h2>
        <div className="resume-education-grid">
          <div>
            <h3>{t('resume.education.degree')}</h3>
            <ul>
              {(t('resume.education.degrees', { returnObjects: true }) as string[]).map((degree: string, index: number) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t('resume.education.certificates')}</h3>
            <ul>
              {(t('resume.education.certifications', { returnObjects: true }) as string[]).map((cert: string, index: number) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeContent;
