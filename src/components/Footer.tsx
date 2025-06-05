
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SchulEntwickler.at
            </h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('navigation.services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/partizipative-fuehrung" className="hover:text-white transition-colors">{t('partizipativeLeadership.title', { ns: 'services' })}</a></li>
              <li><a href="/digitalisierung" className="hover:text-white transition-colors">{t('digitalization.title', { ns: 'services' })}</a></li>
              <li><a href="/organisationsentwicklung" className="hover:text-white transition-colors">{t('organizationalDevelopment.title', { ns: 'services' })}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p>{t('footer.email')}</p>
          </div>
          <div className="text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
