
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Layers, Settings, Users2, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Organisationsentwicklung = () => {
  const { t } = useTranslation('pages');

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
                {t('organizationalDevelopment.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('organizationalDevelopment.description')}
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
                  {t('organizationalDevelopment.whatIs.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('organizationalDevelopment.whatIs.description1')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('organizationalDevelopment.whatIs.description2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop"
                  alt={t('organizationalDevelopment.imageAlt')}
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
              {t('organizationalDevelopment.areas.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('organizationalDevelopment.areas.processes.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('organizationalDevelopment.areas.processes.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('organizationalDevelopment.areas.culture.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('organizationalDevelopment.areas.culture.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Layers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('organizationalDevelopment.areas.structure.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('organizationalDevelopment.areas.structure.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('organizationalDevelopment.areas.strategy.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('organizationalDevelopment.areas.strategy.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t('organizationalDevelopment.methodology.title')}
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step1.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step2.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step3.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step3.description')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step4.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step4.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step5.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step5.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">6</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('organizationalDevelopment.methodology.step6.title')}</h3>
                    <p className="text-gray-600">{t('organizationalDevelopment.methodology.step6.description')}</p>
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
              {t('organizationalDevelopment.successFactors.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('organizationalDevelopment.successFactors.participation.title')}</h3>
                <p className="text-gray-600">
                  {t('organizationalDevelopment.successFactors.participation.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('organizationalDevelopment.successFactors.sustainability.title')}</h3>
                <p className="text-gray-600">
                  {t('organizationalDevelopment.successFactors.sustainability.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('organizationalDevelopment.successFactors.systematic.title')}</h3>
                <p className="text-gray-600">
                  {t('organizationalDevelopment.successFactors.systematic.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('organizationalDevelopment.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('organizationalDevelopment.cta.description')}
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Organisationsentwicklung Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {t('buttons.startOrganizationalDevelopment', { ns: 'common' })}
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
