
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeOverlay from "@/components/ResumeOverlay";
import ResumeContent from "@/components/ResumeContent";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Building, GraduationCap, Users, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const UeberUns = () => {
  const [isResumeOverlayOpen, setIsResumeOverlayOpen] = useState(false);
  const { t } = useTranslation('pages');

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Profile Picture */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <img 
                  src="/profile_squared.png" 
                  alt={t('about.roland.profileImageAlt')}
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl object-cover"
                />
              </div>
              
              {/* Hero Content */}
              <div className="text-center lg:text-left flex-grow">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  {t('about.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Left-Right Layout */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Side - Current About Us Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t('about.roland.name')}
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-6">
                    {t('about.roland.title')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('about.roland.experience1.title')}</h3>
                      <p className="text-gray-600">{t('about.roland.experience1.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('about.roland.experience2.title')}</h3>
                      <p className="text-gray-600">{t('about.roland.experience2.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('about.roland.experience3.title')}</h3>
                      <p className="text-gray-600">{t('about.roland.experience3.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('about.roland.experience4.title')}</h3>
                      <p className="text-gray-600">{t('about.roland.experience4.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('about.roland.experience5.title')}</h3>
                      <p className="text-gray-600">{t('about.roland.experience5.description')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a 
                    href="https://www.linkedin.com/in/roland-bair/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <LinkedinIcon size={20} />
                    <span className="font-medium">{t('about.roland.linkedin')}</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Resume Preview */}
              <div className="lg:pl-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Preview Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{t('resume.overlay.detailedResume')}</h3>
                        <p className="text-blue-100 mt-1">{t('resume.overlay.fullExperience')}</p>
                      </div>
                      <FileText size={32} className="text-white/80" />
                    </div>
                  </div>
                  
                  {/* Preview Content - Using ResumeContent component */}
                  <div className="p-6">
                    <div 
                      className="relative overflow-hidden rounded-lg border-2 border-gray-100"
                      style={{ 
                        maxWidth: '400px', 
                        maxHeight: '500px',
                        margin: '0 auto'
                      }}
                    >
                      <div 
                        className="origin-top-left transform scale-[0.35] pointer-events-none"
                        style={{ 
                          width: '1140px', // Original width
                          transformOrigin: 'top left'
                        }}
                      >
                        <div className="bg-white p-8 shadow-lg" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                          <ResumeContent 
                            isPreview={true} 
                            className="text-sm"
                          />
                        </div>
                      </div>
                      
                      {/* Clickable overlay */}
                      <div 
                        className="absolute inset-0 bg-transparent cursor-pointer hover:bg-blue-50/20 transition-colors duration-200 flex items-center justify-center group"
                        onClick={() => setIsResumeOverlayOpen(true)}
                      >
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                          <span className="text-sm font-medium">{t('resume.overlay.clickToEnlarge')}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button 
                        onClick={() => setIsResumeOverlayOpen(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink size={18} />
                        <span>{t('resume.overlay.showFullResume')}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.mission.participation.title')}</h3>
                <p className="text-gray-600">
                  {t('about.mission.participation.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.mission.innovation.title')}</h3>
                <p className="text-gray-600">
                  {t('about.mission.innovation.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.mission.sustainability.title')}</h3>
                <p className="text-gray-600">
                  {t('about.mission.sustainability.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('about.cta.description')}
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Schulentwicklung Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {t('buttons.scheduleCall', { ns: 'common' })}
              </Button>
            </a>
          </div>
        </section>

        {/* Resume Overlay */}
        <ResumeOverlay 
          isOpen={isResumeOverlayOpen} 
          onClose={() => setIsResumeOverlayOpen(false)} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default UeberUns;
