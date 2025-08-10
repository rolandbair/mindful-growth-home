import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Wrench, Clock, Users, BookOpen, ExternalLink, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  participants: string;
  materials: string[];
  outcomes: string[];
  googleDocsUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  tags: string[];
  featured: boolean;
}

const SchoolDevelopmentToolbox = () => {
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools: Tool[] = [
    {
      id: 'team-building-toolkit',
      title: 'Team Building Toolkit',
      description: 'Comprehensive collection of activities and frameworks for building cohesive, collaborative school teams.',
      category: 'Leadership',
      difficulty: 'Beginner',
      duration: '2-4 hours',
      participants: '8-25 people',
      materials: ['Flipchart paper', 'Markers', 'Sticky notes', 'Timer'],
      outcomes: [
        'Improved team communication',
        'Clear understanding of team roles',
        'Established team norms and agreements',
        'Enhanced trust and collaboration'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-team-building',
      tags: ['team-building', 'collaboration', 'communication', 'leadership'],
      featured: true
    },
    {
      id: 'digital-readiness-assessment',
      title: 'Digital Readiness Assessment',
      description: 'Comprehensive tool to evaluate your school\'s current digital maturity and identify areas for development.',
      category: 'Digital Transformation',
      difficulty: 'Intermediate',
      duration: '3-5 days',
      participants: 'All staff + leadership team',
      materials: ['Online survey platform', 'Assessment rubrics', 'Data collection sheets'],
      outcomes: [
        'Clear picture of current digital maturity',
        'Identification of priority development areas',
        'Baseline data for tracking progress',
        'Staff engagement in digital transformation'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-digital-assessment',
      downloadUrl: '/downloads/digital-readiness-assessment.pdf',
      tags: ['assessment', 'digital-transformation', 'planning', 'data-collection'],
      featured: true
    },
    {
      id: 'vision-development-workshop',
      title: 'Participatory Vision Development Workshop',
      description: 'Facilitated process for creating a shared school vision through inclusive, participatory methods.',
      category: 'Strategic Planning',
      difficulty: 'Advanced',
      duration: '2 full days',
      participants: '20-40 stakeholders',
      materials: ['Large workspace', 'Facilitation materials', 'Documentation system', 'Presentation equipment'],
      outcomes: [
        'Collaboratively developed school vision',
        'Stakeholder buy-in and ownership',
        'Clear action priorities',
        'Communication strategy for vision rollout'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-vision-workshop',
      videoUrl: 'https://youtube.com/watch?v=example-vision',
      tags: ['vision', 'strategic-planning', 'participation', 'facilitation'],
      featured: true
    },
    {
      id: 'communication-framework',
      title: 'School Communication Framework',
      description: 'Structured approach to improving internal and external communication across all school stakeholders.',
      category: 'Communication',
      difficulty: 'Beginner',
      duration: '1-2 weeks implementation',
      participants: 'Leadership team + communication coordinators',
      materials: ['Communication audit template', 'Channel mapping tools', 'Message templates'],
      outcomes: [
        'Clear communication protocols',
        'Improved information flow',
        'Reduced communication conflicts',
        'Enhanced stakeholder engagement'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-communication',
      tags: ['communication', 'protocols', 'stakeholder-engagement'],
      featured: false
    },
    {
      id: 'change-management-framework',
      title: 'School Change Management Framework',
      description: 'Systematic approach to managing organizational change in educational settings, based on research and best practices.',
      category: 'Change Management',
      difficulty: 'Advanced',
      duration: '6-12 months',
      participants: 'Change leadership team + all staff',
      materials: ['Change management toolkit', 'Communication templates', 'Progress tracking tools'],
      outcomes: [
        'Structured approach to change',
        'Reduced resistance to change',
        'Improved change success rates',
        'Enhanced organizational resilience'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-change-management',
      tags: ['change-management', 'organizational-development', 'leadership', 'implementation'],
      featured: true
    },
    {
      id: 'teacher-digital-literacy',
      title: 'Teacher Digital Literacy Development Program',
      description: 'Comprehensive professional development program for building teacher confidence and competence with educational technology.',
      category: 'Digital Transformation',
      difficulty: 'Intermediate',
      duration: '8-12 weeks',
      participants: 'Teaching staff',
      materials: ['Learning management system', 'Practice devices', 'Curriculum resources', 'Assessment tools'],
      outcomes: [
        'Increased teacher tech confidence',
        'Enhanced digital pedagogical skills',
        'Improved student learning experiences',
        'Sustainable tech integration practices'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-teacher-digital',
      videoUrl: 'https://youtube.com/watch?v=example-teacher-training',
      tags: ['professional-development', 'digital-literacy', 'teacher-training', 'technology'],
      featured: false
    },
    {
      id: 'school-360-analysis',
      title: '360° School Analysis Tool',
      description: 'Comprehensive diagnostic tool that examines all aspects of school functioning from multiple stakeholder perspectives.',
      category: 'Assessment',
      difficulty: 'Advanced',
      duration: '4-6 weeks',
      participants: 'All stakeholders',
      materials: ['Survey platform', 'Interview guides', 'Observation protocols', 'Analysis framework'],
      outcomes: [
        'Comprehensive organizational understanding',
        'Multi-perspective insights',
        'Priority areas identification',
        'Evidence-based improvement planning'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-360-analysis',
      tags: ['assessment', 'stakeholder-feedback', 'organizational-analysis', 'planning'],
      featured: true
    },
    {
      id: 'quick-wins-assessment',
      title: 'Quick Wins Assessment',
      description: 'Rapid identification tool for finding high-impact, low-effort improvements that can be implemented immediately.',
      category: 'Quick Wins',
      difficulty: 'Beginner',
      duration: '2-3 hours',
      participants: 'Leadership team + key staff',
      materials: ['Assessment worksheet', 'Impact/effort matrix', 'Action planning template'],
      outcomes: [
        'Identified quick win opportunities',
        'Prioritized action list',
        'Early momentum for larger changes',
        'Increased staff confidence in improvement process'
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-quick-wins',
      downloadUrl: '/downloads/quick-wins-assessment.pdf',
      tags: ['quick-wins', 'assessment', 'prioritization', 'momentum'],
      featured: false
    }
  ];

  const categories = ['all', 'Leadership', 'Digital Transformation', 'Strategic Planning', 'Communication', 'Change Management', 'Assessment', 'Quick Wins'];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTools = tools.filter(tool => tool.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderToolCard = (tool: Tool) => (
    <Card key={tool.id} className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={getDifficultyColor(tool.difficulty)}>
            {tool.difficulty}
          </Badge>
          {tool.featured && (
            <Badge variant="secondary">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{tool.title}</CardTitle>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="mr-2 h-4 w-4" />
            {tool.duration}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="mr-2 h-4 w-4" />
            {tool.participants}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Outcomes:</h4>
          <ul className="space-y-1">
            {tool.outcomes.slice(0, 2).map((outcome, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                {outcome}
              </li>
            ))}
            {tool.outcomes.length > 2 && (
              <li className="text-sm text-gray-500">
                +{tool.outcomes.length - 2} more outcomes
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full" asChild>
            <Link to={`/toolbox/tool/${tool.id}`}>
              {tCommon('buttons.viewDetails')}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          {tool.googleDocsUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={tool.googleDocsUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Google Docs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('toolbox.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('toolbox.subtitle')}
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t('toolbox.search.placeholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                    {category === 'all' ? 'All Tools' : category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Featured Tools */}
              {selectedCategory === 'all' && searchTerm === '' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="mr-2 h-6 w-6 text-yellow-500" />
                    Featured Tools
                  </h2>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {featuredTools.map(renderToolCard)}
                  </div>
                </div>
              )}

              {/* All Tools */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All Tools' : selectedCategory} 
                    <span className="text-gray-500 font-normal"> ({filteredTools.length})</span>
                  </h2>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Wrench className="h-4 w-4" />
                    <span>{filteredTools.length} tools available</span>
                  </div>
                </div>

                {filteredTools.length === 0 ? (
                  <div className="text-center py-12">
                    <Wrench className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredTools.map(renderToolCard)}
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Implementing These Tools?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I provide hands-on support for implementing any of these tools in your school context. From facilitation to training, let's make these tools work for your unique situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:office@schulentwickler.at">
                  Request Implementation Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/consultation">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolDevelopmentToolbox;
