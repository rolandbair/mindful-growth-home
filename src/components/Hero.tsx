
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SchulEntwickler.at
                </h2>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Bildung
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}transformieren
                </span>
                <br />
                durch Innovation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wir stärken Schulen durch partizipative Führung, moderne Digitalisierung 
                und strategische Organisationsentwicklung für erfolgreiche Lernumgebungen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Transformation starten
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Mehr erfahren
              </Button>
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-200">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <p className="text-gray-700 italic">"Warum lernt man das nicht in all den Ausbildungen?"</p>
                <p className="text-sm text-gray-500 mt-2">— Schulleitung, Wien</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                <p className="text-gray-700 italic">"Ich hab in einer halben Stunde mehr mitgenommen über Schulentwicklung als in den letzten zwei Jahren"</p>
                <p className="text-sm text-gray-500 mt-2">— Schulleitung, Wien</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop"
                alt="Moderne Schulklasse mit Schülern und digitaler Technologie"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
