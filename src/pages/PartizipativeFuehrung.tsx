
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const PartizipativeFuehrung = () => {
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
                <Users size={40} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('partizipativeLeadership.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('partizipativeLeadership.description')}
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
                  {t('partizipativeLeadership.whatIs.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('partizipativeLeadership.whatIs.description1')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('partizipativeLeadership.whatIs.description2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop"
                  alt={t('partizipativeLeadership.imageAlt')}
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
              {t('partizipativeLeadership.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('partizipativeLeadership.benefits.betterDecisions.title')}</h3>
                <p className="text-gray-600">
                  {t('partizipativeLeadership.benefits.betterDecisions.description')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('partizipativeLeadership.benefits.higherEngagement.title')}</h3>
                <p className="text-gray-600">
                  {t('partizipativeLeadership.benefits.higherEngagement.description')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('partizipativeLeadership.benefits.sustainableChange.title')}</h3>
                <p className="text-gray-600">
                  {t('partizipativeLeadership.benefits.sustainableChange.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t('partizipativeLeadership.approach.title')}
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('partizipativeLeadership.approach.step1.title')}</h3>
                  <p className="text-gray-600">{t('partizipativeLeadership.approach.step1.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('partizipativeLeadership.approach.step2.title')}</h3>
                  <p className="text-gray-600">{t('partizipativeLeadership.approach.step2.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('partizipativeLeadership.approach.step3.title')}</h3>
                  <p className="text-gray-600">{t('partizipativeLeadership.approach.step3.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('partizipativeLeadership.approach.step4.title')}</h3>
                  <p className="text-gray-600">{t('partizipativeLeadership.approach.step4.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('partizipativeLeadership.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('partizipativeLeadership.cta.description')}
            </p>
            <a href="mailto:hello@schulentwickler.at?subject=Beratung Partizipative Führung">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {t('buttons.scheduleCall', { ns: 'common' })}
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
