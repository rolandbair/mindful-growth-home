import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Search size={64} className="text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Seite nicht gefunden</h2>
          <p className="text-lg text-gray-600 mb-8">
            Die angeforderte Seite <span className="font-mono bg-gray-100 px-2 py-1 rounded">{location.pathname}</span> konnte nicht gefunden werden.
            Möglicherweise wurde sie verschoben oder ist nicht mehr verfügbar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Home size={20} />
              Zur Startseite
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Zurück
            </button>
          </div>

          <div className="mt-12 text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hilfreiche Links:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                  • Startseite
                </Link>
              </li>
              <li>
                <Link to="/partizipative-fuehrung" className="text-blue-600 hover:text-blue-800 hover:underline">
                  • Partizipative Führung
                </Link>
              </li>
              <li>
                <Link to="/digitalisierung" className="text-blue-600 hover:text-blue-800 hover:underline">
                  • Digitalisierung
                </Link>
              </li>
              <li>
                <Link to="/organisationsentwicklung" className="text-blue-600 hover:text-blue-800 hover:underline">
                  • Organisationsentwicklung
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-blue-600 hover:text-blue-800 hover:underline">
                  • Über uns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
