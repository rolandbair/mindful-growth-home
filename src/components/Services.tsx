
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Laptop, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Partizipative Führung",
      description: "Entwicklung partizipativer Führungsstrukturen, die jede Stimme in Ihrer Bildungsgemeinschaft stärken.",
      features: [
        "Sparring für Schulleitungen",
        "Partizipative Entscheidungsrahmen",
        "Gleichberechtigte Governance-Modelle"
      ],
      color: "from-green-500 to-emerald-600",
      link: "/partizipative-fuehrung"
    },
    {
      icon: Laptop,
      title: "Digitalisierung",
      description: "Transformieren Sie Ihre Schule mit modernen Technologielösungen für besseres Lernen und Verwaltung.",
      features: [
        "Digitale Infrastrukturplanung",
        "Kommunikationsplattformen",
        "Datenanalyse und Erkenntnisse",
        "Digitalisierungstrainings"
      ],
      color: "from-blue-500 to-cyan-600",
      link: "/digitalisierung"
    },
    {
      icon: Layers,
      title: "Organisationsentwicklung",
      description: "Optimierung der Struktur, Prozesse und Kultur Ihrer Schule für nachhaltiges Wachstum und Exzellenz.",
      features: [
        "Strategische Planungsbegleitung",
        "Change Management Unterstützung",
        "Kulturtransformation"
      ],
      color: "from-purple-500 to-violet-600",
      link: "/organisationsentwicklung"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Kerndienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten umfassende Lösungen, damit Ihre Schule in der modernen Bildungslandschaft erfolgreich ist
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link 
                key={index} 
                to={service.link}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg cursor-pointer h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
