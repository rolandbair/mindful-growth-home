import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ExternalLink, Quote } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface Book {
  title: string;
  author: string;
  year: string;
  isbn: string;
  thaliaLink: string;
  keyInsights: string[];
  myTake: string;
  bestFor: string;
  practicalApplication: string;
}

const BookRecommendations = () => {
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');

  const bookCategories = t('bookRecommendationsData.categories', { returnObjects: true }) as {
    leadership: Book[];
    digital: Book[];
    change: Book[];
    systems: Book[];
  };

  const getAllBooks = () => {
    return Object.values(bookCategories).flat();
  };

  const renderBookCard = (book: Book) => (
    <Card key={book.isbn} className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{book.year}</Badge>
        </div>
        <CardTitle className="text-lg">{book.title}</CardTitle>
        <CardDescription>
          by {book.author} • ISBN: {book.isbn}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center">
            <Quote className="mr-2 h-4 w-4" />
            {t('bookRecommendations.labels.myTake')}
          </h4>
          <p className="text-sm text-gray-700">{book.myTake}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2">{t('bookRecommendations.labels.keyInsights')}</h4>
          <ul className="space-y-1">
            {book.keyInsights.map((insight: string, index: number) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                {insight}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2">{t('bookRecommendations.labels.bestFor')}</h4>
          <p className="text-sm text-gray-700">{book.bestFor}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2">{t('bookRecommendations.labels.practicalApplication')}</h4>
          <p className="text-sm text-gray-700">{book.practicalApplication}</p>
        </div>

        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={book.thaliaLink} target="_blank" rel="noopener noreferrer">
            <BookOpen className="mr-2 h-4 w-4" />
            {tCommon('buttons.viewOnThalia')}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('bookRecommendations.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('bookRecommendations.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="all">{t('bookRecommendations.categories.all')} ({getAllBooks().length})</TabsTrigger>
                <TabsTrigger value="leadership">{t('bookRecommendations.categories.leadership')} ({bookCategories.leadership.length})</TabsTrigger>
                <TabsTrigger value="digital">{t('bookRecommendations.categories.digital')} ({bookCategories.digital.length})</TabsTrigger>
                <TabsTrigger value="change">{t('bookRecommendations.categories.change')} ({bookCategories.change.length})</TabsTrigger>
                <TabsTrigger value="systems">{t('bookRecommendations.categories.systems')} ({bookCategories.systems.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {getAllBooks().map(renderBookCard)}
                </div>
              </TabsContent>

              <TabsContent value="leadership">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {bookCategories.leadership.map(renderBookCard)}
                </div>
              </TabsContent>

              <TabsContent value="digital">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {bookCategories.digital.map(renderBookCard)}
                </div>
              </TabsContent>

              <TabsContent value="change">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {bookCategories.change.map(renderBookCard)}
                </div>
              </TabsContent>

              <TabsContent value="systems">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {bookCategories.systems.map(renderBookCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('bookRecommendations.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('bookRecommendations.cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:office@schulentwickler.at">
                  {t('bookRecommendations.cta.buttons.startConversation')}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/consultation">
                  {t('bookRecommendations.cta.buttons.bookDiscussion')}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookRecommendations;
