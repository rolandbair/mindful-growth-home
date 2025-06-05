
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation('hero');

  const handleStartTransformation = () => {
    window.location.href = 'mailto:hello@schulentwickler.at?subject=Transformation starten&body=Hallo, ich möchte gerne mehr über Ihre Transformationsdienstleistungen erfahren.';
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('title.part1')}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}{t('title.part2')}
                </span>
                <br />
                {t('title.part3')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleStartTransformation}
              >
                {t('buttons.startTransformation', { ns: 'common' })}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300"
                onClick={handleLearnMore}
              >
                {t('buttons.learnMore', { ns: 'common' })}
              </Button>
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-200">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <p className="text-gray-700 italic">{t('testimonials.quote1')}</p>
                <p className="text-sm text-gray-500 mt-2">{t('testimonials.author1')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                <p className="text-gray-700 italic">{t('testimonials.quote2')}</p>
                <p className="text-sm text-gray-500 mt-2">{t('testimonials.author2')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop"
                alt={t('imageAlt')}
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
