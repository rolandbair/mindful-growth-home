import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, ArrowRight, ExternalLink, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Schulentwicklung = () => {
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');

  const bookRecommendations = t('schoolDevelopmentData.books', { returnObjects: true }) as Array<{
    title: string;
    author: string;
    category: string;
    myTake: string;
  }>;

  const bookRecommendationsWithLinks = bookRecommendations.map((book, index) => ({
    ...book,
    thaliaLink: [
      "https://www.thalia.at/suche?sq=building-school-2-0",
      "https://www.thalia.at/suche?sq=schools-children-deserve", 
      "https://www.thalia.at/suche?sq=distributed-leadership-practice"
    ][index]
  }));

  const toolboxPaths = t('schoolDevelopmentData.paths', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    duration: string;
    slug: string;
    tools: string[];
  }>;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('schoolDevelopment.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('schoolDevelopment.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="#philosophy">{tCommon('buttons.myApproach')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#toolbox">{tCommon('buttons.exploreToolbox')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {t('schoolDevelopment.philosophy.title')}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-blue-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{t('schoolDevelopment.philosophy.participatory.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('schoolDevelopment.philosophy.participatory.description')}
                  </p>
                </div>

                <div className="bg-green-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{t('schoolDevelopment.philosophy.digital.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('schoolDevelopment.philosophy.digital.description')}
                  </p>
                </div>

                <div className="bg-purple-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{t('schoolDevelopment.philosophy.systems.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('schoolDevelopment.philosophy.systems.description')}
                  </p>
                </div>

                <div className="bg-yellow-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">{t('schoolDevelopment.philosophy.evidence.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('schoolDevelopment.philosophy.evidence.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Recommendations Section */}
        <section id="books" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('schoolDevelopment.books.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('schoolDevelopment.books.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {bookRecommendationsWithLinks.map((book, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{book.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      by {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">{t('bookRecommendations.labels.myTake')}</h4>
                        <p className="text-sm text-gray-700">{book.myTake}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full" 
                        asChild
                      >
                        <a href={book.thaliaLink} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="mr-2 h-4 w-4" />
                          {tCommon('buttons.viewOnThalia')}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/book-recommendations">
                  {t('schoolDevelopment.books.completeList')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Toolbox Paths Section */}
        <section id="toolbox" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('schoolDevelopment.toolbox.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('schoolDevelopment.toolbox.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {toolboxPaths.map((path, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{path.duration}</span>
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">{t('schoolDevelopment.toolbox.includedTools')}</h4>
                        <ul className="space-y-1">
                          {path.tools.map((tool, toolIndex) => (
                            <li key={toolIndex} className="text-sm text-gray-700 flex items-center">
                              <Wrench className="mr-2 h-3 w-3 text-blue-600" />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/toolbox/${path.slug}`}>
                          {tCommon('buttons.exploreThisPath')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('schoolDevelopment.toolbox.customPath.title')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t('schoolDevelopment.toolbox.customPath.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/consultation">
                    {tCommon('buttons.scheduleCall')}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/toolbox">
                    {tCommon('buttons.browseAllTools')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schulentwicklung;
