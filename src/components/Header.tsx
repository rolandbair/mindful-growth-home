
import { Menu, X, GraduationCap, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, changeLanguage, currentLanguage } = useTranslation();

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

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
    changeLanguage(newLanguage);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SchulEntwickler.at
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleNavigation("/", "home")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navigation.home')}
            </button>
            <button 
              onClick={() => handleNavigation("/", "services")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navigation.services')}
            </button>
            <Link 
              to="/ueber-uns" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navigation.about')}
            </Link>
            <a href="mailto:hello@schulentwickler.at" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('navigation.contact')}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4 flex items-center space-x-2"
            >
              <Globe size={16} />
              <span>{currentLanguage === 'de' ? 'EN' : 'DE'}</span>
            </Button>
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
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => handleNavigation("/", "services")} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('navigation.services')}
              </button>
              <Link 
                to="/ueber-uns" 
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {t('navigation.about')}
              </Link>
              <a href="mailto:hello@schulentwickler.at" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('navigation.contact')}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-fit flex items-center space-x-2"
              >
                <Globe size={16} />
                <span>{currentLanguage === 'de' ? 'EN' : 'DE'}</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
