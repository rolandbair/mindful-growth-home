
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Layers, Settings, Users2, TrendingUp } from "lucide-react";

const Organisationsentwicklung = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 flex items-center justify-center">
                <Layers size={40} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Organisationsentwicklung
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Optimieren Sie Struktur, Prozesse und Kultur Ihrer Schule für nachhaltigen Erfolg. 
                Unsere systemische Beratung hilft Ihnen dabei, eine lernende Organisation zu werden, 
                die sich kontinuierlich weiterentwickelt und an verändernde Anforderungen anpasst.
              </p>
            </div>
          </div>
        </section>

        {/* What is Organisationsentwicklung */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Was ist Organisationsentwicklung?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Organisationsentwicklung ist ein geplanter, systematischer und langfristiger Prozess zur 
                  Verbesserung der Leistungsfähigkeit und Anpassungsfähigkeit einer Organisation. 
                  Im Schulkontext bedeutet dies die kontinuierliche Weiterentwicklung aller Aspekte 
                  des Schullebens.
                </p>
                <p className="text-lg text-gray-600">
                  Dabei stehen die Menschen im Mittelpunkt: Lehrkräfte, Schüler:innen, Eltern und alle 
                  anderen Beteiligten werden aktiv in den Entwicklungsprozess einbezogen.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop"
                  alt="Schulteam bei strategischer Planung und Organisationsentwicklung"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Unsere Entwicklungsbereiche
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Prozesse</h3>
                <p className="text-gray-600 text-sm">
                  Optimierung von Arbeitsabläufen und Entscheidungsstrukturen
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Kultur</h3>
                <p className="text-gray-600 text-sm">
                  Entwicklung einer positiven und innovativen Schulkultur
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Layers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Struktur</h3>
                <p className="text-gray-600 text-sm">
                  Anpassung von Organisationsstrukturen und Hierarchien
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Strategie</h3>
                <p className="text-gray-600 text-sm">
                  Entwicklung langfristiger Ziele und Entwicklungspläne
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Unser systemischer Ansatz
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Systemanalyse</h3>
                    <p className="text-gray-600">Umfassende Analyse der aktuellen Organisationsstrukturen, Prozesse und Kultur.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Zielentwicklung</h3>
                    <p className="text-gray-600">Gemeinsame Definition von Entwicklungszielen mit allen Beteiligten.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Interventionsplanung</h3>
                    <p className="text-gray-600">Entwicklung maßgeschneiderter Maßnahmen und Interventionen.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Umsetzungsbegleitung</h3>
                    <p className="text-gray-600">Aktive Unterstützung bei der Implementierung von Veränderungsprozessen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Evaluation & Anpassung</h3>
                    <p className="text-gray-600">Kontinuierliche Bewertung der Fortschritte und Anpassung der Maßnahmen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">6</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Nachhaltigkeit</h3>
                    <p className="text-gray-600">Sicherstellung der langfristigen Verankerung der Entwicklungen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Erfolgsfaktoren unserer Beratung
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partizipation</h3>
                <p className="text-gray-600">
                  Alle Beteiligten werden aktiv in den Entwicklungsprozess einbezogen und gestalten mit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nachhaltigkeit</h3>
                <p className="text-gray-600">
                  Veränderungen werden so gestaltet, dass sie langfristig wirken und sich selbst tragen.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Systematik</h3>
                <p className="text-gray-600">
                  Strukturiertes Vorgehen mit klaren Methoden und nachvollziehbaren Schritten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Entwickeln Sie Ihre Organisation weiter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Lassen Sie uns gemeinsam Ihre Schule zu einer lernenden Organisation entwickeln, 
              die sich kontinuierlich weiterentwickelt und an neue Herausforderungen anpasst.
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Organisationsentwicklung Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Organisationsentwicklung starten
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Organisationsentwicklung;
