
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeOverlay from "@/components/ResumeOverlay";
import ResumeContent from "@/components/ResumeContent";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Building, GraduationCap, Users, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

const UeberUns = () => {
  const [isResumeOverlayOpen, setIsResumeOverlayOpen] = useState(false);

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
                  alt="Roland Bair"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl object-cover"
                />
              </div>
              
              {/* Hero Content */}
              <div className="text-center lg:text-left flex-grow">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Über uns
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  SchulEntwickler.at verbindet langjährige Erfahrung in Technologie und Führung 
                  mit tiefer Expertise in der Schulentwicklung.
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
                    Roland Bair
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-6">
                    Gründer & Schulentwicklungsberater
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Mehr als 20 Jahre Technologie-Erfahrung</h3>
                      <p className="text-gray-600">Umfassende Expertise in der Entwicklung und Implementierung von Bildungstechnologien</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">10 Jahre in Führungspositionen</h3>
                      <p className="text-gray-600">Langjährige Erfahrung in der strategischen Unternehmensführung und Teamentwicklung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Ehemaliger CEO von Untis GmbH</h3>
                      <p className="text-gray-600">Führung eines der führenden Unternehmen für Schulverwaltungssoftware im deutschsprachigen Raum</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Strategic EdTech Advisor</h3>
                      <p className="text-gray-600">Beratung von Bildungseinrichtungen und EdTech-Unternehmen bei strategischen Entscheidungen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Schulentwicklung seit Januar 2025</h3>
                      <p className="text-gray-600">Fokus auf partizipative Führung, Digitalisierung und Organisationsentwicklung in Schulen</p>
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
                    <span className="font-medium">LinkedIn Profil besuchen</span>
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
                        <h3 className="text-xl font-bold">Detaillierter Lebenslauf</h3>
                        <p className="text-blue-100 mt-1">Vollständige Berufserfahrung & Qualifikationen</p>
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
                          <span className="text-sm font-medium">Zum Vergrößern klicken</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button 
                        onClick={() => setIsResumeOverlayOpen(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink size={18} />
                        <span>Vollständigen Lebenslauf anzeigen</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
