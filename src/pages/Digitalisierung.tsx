
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Laptop, Wifi, Database, Smartphone } from "lucide-react";

const Digitalisierung = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 flex items-center justify-center">
                <Laptop size={40} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Digitalisierung
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transformieren Sie Ihre Schule mit modernen digitalen Lösungen. Wir begleiten Sie auf dem Weg zur 
                digital-integrierten Bildungseinrichtung mit maßgeschneiderten Technologiekonzepten und nachhaltigen Implementierungsstrategien.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Transformation Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Digitale Transformation für Schulen
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Digitalisierung in der Bildung geht weit über die reine Technologie hinaus. Es geht darum, 
                  Lehr- und Lernprozesse zu verbessern, administrative Abläufe zu optimieren und neue 
                  Möglichkeiten für kollaboratives Arbeiten zu schaffen.
                </p>
                <p className="text-lg text-gray-600">
                  Unsere Expertise hilft Ihnen dabei, digitale Tools sinnvoll zu integrieren und dabei die 
                  pädagogischen Ziele stets im Fokus zu behalten.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
                  alt="Digitale Schule mit Tablets und modernem Klassenzimmer"
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
              Unsere Digitalisierungsbereiche
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Infrastruktur</h3>
                <p className="text-gray-600 text-sm">
                  WLAN, Hardware und technische Grundausstattung für moderne Bildung
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Kommunikationsplattformen</h3>
                <p className="text-gray-600 text-sm">
                  Implementierung von digitalen Kommunikations- und Kollaborationstools
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Mobile Learning</h3>
                <p className="text-gray-600 text-sm">
                  Tablets, Smartphones und mobile Lernkonzepte
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Verwaltung</h3>
                <p className="text-gray-600 text-sm">
                  Digitale Verwaltungsprozesse und Schulmanagement-Software
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Unser Implementierungsprozess
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bestandsaufnahme und Bedarfsanalyse</h3>
                  <p className="text-gray-600">Evaluation der aktuellen technischen Ausstattung und Identifikation der Digitalisierungsziele.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategieentwicklung</h3>
                  <p className="text-gray-600">Erstellung eines maßgeschneiderten Digitalisierungskonzepts mit klaren Zielen und Meilensteinen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pilotprojekte und Testing</h3>
                  <p className="text-gray-600">Schrittweise Implementierung in kleinen Bereichen zur Erprobung und Optimierung.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Schulung und Change Management</h3>
                  <p className="text-gray-600">Umfassende Digitalisierungstrainings für alle Beteiligten und Begleitung des Veränderungsprozesses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vollständige Implementierung</h3>
                  <p className="text-gray-600">Rollout auf die gesamte Schule mit kontinuierlicher Unterstützung und Optimierung.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Starten Sie Ihre digitale Transformation
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Lassen Sie uns gemeinsam den Weg in die digitale Zukunft Ihrer Schule gestalten – strategisch, nachhaltig und erfolgreich.
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Digitalisierungsberatung Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Digitalisierungsberatung anfragen
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Digitalisierung;
