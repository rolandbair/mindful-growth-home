
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, CheckCircle } from "lucide-react";

const PartizipativeFuehrung = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 flex items-center justify-center">
                <Users size={40} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Partizipative Führung
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Entwickeln Sie Führungsstrukturen, die auf Partizipation, Zusammenarbeit und geteilter Verantwortung basieren. 
                Unsere Beratung hilft Ihnen dabei, eine Führungskultur zu schaffen, die alle Stimmen einbezieht und gemeinsame Entscheidungsfindung fördert.
              </p>
            </div>
          </div>
        </section>

        {/* What is Partizipative Führung */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Was ist Partizipative Führung?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Partizipative Führung ist ein Führungsansatz, der auf geteilter Macht, gemeinsamer Entscheidungsfindung 
                  und aktiver Beteiligung aller Beteiligten basiert. Im Schulkontext bedeutet dies, dass Lehrkräfte, 
                  Schüler:innen, Eltern und die Gemeinde in wichtige Entscheidungen einbezogen werden.
                </p>
                <p className="text-lg text-gray-600">
                  Dieser Ansatz fördert nicht nur die Demokratie in der Bildung, sondern verbessert auch die Qualität 
                  der Entscheidungen durch vielfältige Perspektiven und erhöht das Engagement aller Beteiligten.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop"
                  alt="Lehrerkonferenz mit partizipativer Diskussion"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Vorteile partizipativer Führung
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bessere Entscheidungen</h3>
                <p className="text-gray-600">
                  Durch die Einbeziehung verschiedener Perspektiven entstehen durchdachtere und praxisnahe Lösungen.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Höheres Engagement</h3>
                <p className="text-gray-600">
                  Mitarbeitende und Beteiligte fühlen sich gehört und übernehmen mehr Verantwortung für gemeinsame Ziele.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nachhaltige Veränderung</h3>
                <p className="text-gray-600">
                  Partizipativ entwickelte Lösungen werden eher akzeptiert und langfristig umgesetzt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Unser Beratungsansatz
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analyse der aktuellen Führungsstrukturen</h3>
                  <p className="text-gray-600">Bewertung bestehender Entscheidungsprozesse und Führungskulturen in Ihrer Schule.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entwicklung partizipativer Strukturen</h3>
                  <p className="text-gray-600">Gemeinsame Gestaltung neuer Führungsmodelle und Entscheidungswege.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Schulung und Begleitung</h3>
                  <p className="text-gray-600">Training für Führungskräfte und Begleitung bei der Implementierung neuer Prozesse.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Evaluation und Anpassung</h3>
                  <p className="text-gray-600">Kontinuierliche Bewertung und Verbesserung der partizipativen Führungsansätze.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereit für partizipative Führung?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Lassen Sie uns gemeinsam eine Führungskultur entwickeln, die alle Stimmen einbezieht und nachhaltigen Erfolg schafft.
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Beratung Partizipative Führung">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Beratung anfragen
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartizipativeFuehrung;
