
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Building, GraduationCap, Users } from "lucide-react";

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Über uns
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                SchulEntwickler.at verbindet langjährige Erfahrung in Technologie und Führung 
                mit tiefer Expertise in der Schulentwicklung.
              </p>
            </div>
          </div>
        </section>

        {/* Roland Bair Profile */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Roland Bair"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
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
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Wir glauben, dass jede Schule das Potenzial hat, eine Umgebung zu schaffen, 
                in der Schüler:innen, Lehrkräfte und die gesamte Schulgemeinschaft gedeihen können. 
                Durch die Verbindung von Technologie-Expertise mit pädagogischer Praxis 
                unterstützen wir Schulen dabei, moderne Bildungskonzepte erfolgreich umzusetzen.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Partizipation</h3>
                  <p className="text-gray-600">
                    Alle Stimmen zählen – wir fördern demokratische Entscheidungsprozesse in Schulen
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Moderne Technologien sinnvoll in den Schulalltag integrieren
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Nachhaltigkeit</h3>
                  <p className="text-gray-600">
                    Langfristige Veränderungen schaffen, die sich selbst tragen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Lassen Sie uns Ihre Schule transformieren
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bereit für den nächsten Schritt? Kontaktieren Sie uns für ein unverbindliches Gespräch 
              über die Möglichkeiten Ihrer Schulentwicklung.
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Beratungsgespräch Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Gespräch vereinbaren
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UeberUns;
