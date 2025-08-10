
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Laptop, Wifi, Database, Smartphone } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Digitalisierung = () => {
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
                <Laptop size={40} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('digitalization.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('digitalization.description')}
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
                  {t('digitalization.overview.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('digitalization.overview.description1')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('digitalization.overview.description2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
                  alt={t('digitalization.imageAlt')}
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
              {t('digitalization.areas.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('digitalization.areas.infrastructure.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('digitalization.areas.infrastructure.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('digitalization.areas.communication.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('digitalization.areas.communication.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('digitalization.areas.mobileLearning.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('digitalization.areas.mobileLearning.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('digitalization.areas.administration.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('digitalization.areas.administration.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t('digitalization.process.title')}
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('digitalization.process.step1.title')}</h3>
                  <p className="text-gray-600">{t('digitalization.process.step1.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('digitalization.process.step2.title')}</h3>
                  <p className="text-gray-600">{t('digitalization.process.step2.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('digitalization.process.step3.title')}</h3>
                  <p className="text-gray-600">{t('digitalization.process.step3.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('digitalization.process.step4.title')}</h3>
                  <p className="text-gray-600">{t('digitalization.process.step4.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('digitalization.process.step5.title')}</h3>
                  <p className="text-gray-600">{t('digitalization.process.step5.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('digitalization.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('digitalization.cta.description')}
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Digitalisierungsberatung Anfrage">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {t('buttons.requestDigitalizationConsulting', { ns: 'common' })}
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
