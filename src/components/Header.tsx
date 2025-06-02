
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string, section?: string) => {
    if (section) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SchulEntwickler.at
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation("/", "home")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Start
            </button>
            <button 
              onClick={() => handleNavigation("/", "services")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Dienstleistungen
            </button>
            <Link 
              to="/ueber-uns" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Über uns
            </Link>
            <a href="mailto:hello@schulentwickler.at" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation("/", "home")} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Start
              </button>
              <button 
                onClick={() => handleNavigation("/", "services")} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Dienstleistungen
              </button>
              <Link 
                to="/ueber-uns" 
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Über uns
              </Link>
              <a href="mailto:hello@schulentwickler.at" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Kontakt
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
