import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Users, ArrowLeft, ArrowRight, Download, BookOpen, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

interface PathStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  tools: string[];
  outcomes: string[];
  prerequisites: string[];
  completed?: boolean;
}

interface DevelopmentPath {
  id: string;
  title: string;
  description: string;
  totalDuration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  participants: string;
  overview: string;
  successStories: string;
  steps: PathStep[];
}

const ToolboxPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');

  const paths: Record<string, DevelopmentPath> = {
    'quick-start-path': {
      id: 'quick-start-path',
      title: 'Quick Start Path',
      description: 'For schools needing immediate impact with minimal resources',
      totalDuration: '2-3 months',
      difficulty: 'Beginner',
      participants: '5-15 key staff members',
      overview: 'This streamlined path is designed for schools that need to see quick improvements while building momentum for larger changes. Perfect for schools with limited time and resources but high motivation for change.',
      successStories: 'Over 30 schools have used this path to create meaningful change in under 3 months. Average satisfaction rating: 4.8/5. Most common outcome: 85% improvement in team communication and 70% increase in staff engagement.',
      steps: [
        {
          id: 'assessment',
          title: 'Rapid School Assessment',
          description: 'Quick diagnostic to identify immediate opportunities and challenges',
          duration: '1 week',
          tools: ['Quick Wins Assessment', 'Team Communication Audit'],
          outcomes: [
            'Clear picture of current state',
            'Identified quick win opportunities',
            'Team engagement baseline'
          ],
          prerequisites: [
            'Leadership commitment',
            'Access to key staff for interviews',
            'Willingness to act on findings'
          ]
        },
        {
          id: 'team-building',
          title: 'Foundation Team Building',
          description: 'Establish strong working relationships and communication norms',
          duration: '1-2 weeks',
          tools: ['Team Building Toolkit', 'Communication Framework'],
          outcomes: [
            'Improved team dynamics',
            'Clear communication protocols',
            'Shared team agreements'
          ],
          prerequisites: [
            'Completed assessment',
            'Dedicated workshop time',
            'All key participants available'
          ]
        },
        {
          id: 'quick-wins',
          title: 'Quick Wins Implementation',
          description: 'Implement 3-5 high-impact, low-effort improvements',
          duration: '3-4 weeks',
          tools: ['Implementation Tracker', 'Progress Monitoring Framework'],
          outcomes: [
            'Visible improvements in daily operations',
            'Increased confidence in change process',
            'Momentum for larger initiatives'
          ],
          prerequisites: [
            'Identified quick win opportunities',
            'Team agreements in place',
            'Clear accountability structure'
          ]
        },
        {
          id: 'sustainability',
          title: 'Sustainability Planning',
          description: 'Ensure improvements stick and plan next development phase',
          duration: '2-3 weeks',
          tools: ['Sustainability Framework', 'Next Phase Planning Tool'],
          outcomes: [
            'Sustainable improvement processes',
            'Clear plan for continued development',
            'Enhanced organizational learning capacity'
          ],
          prerequisites: [
            'Quick wins successfully implemented',
            'Team committed to ongoing development',
            'Leadership support for next phase'
          ]
        }
      ]
    },
    'comprehensive-transformation': {
      id: 'comprehensive-transformation',
      title: 'Comprehensive Transformation',
      description: 'Full organizational development journey for deep, lasting change',
      totalDuration: '12-18 months',
      difficulty: 'Advanced',
      participants: 'Whole school community',
      overview: 'A complete school transformation journey that addresses all aspects of organizational development: leadership, culture, processes, and systems. This path creates deep, sustainable change.',
      successStories: 'Schools using this path report average improvements of 40% in student outcomes, 60% in teacher satisfaction, and 50% in parent engagement. This path has been successfully implemented in 15+ schools.',
      steps: [
        {
          id: 'comprehensive-assessment',
          title: 'Comprehensive School Analysis',
          description: 'Deep dive into all aspects of school functioning',
          duration: '4-6 weeks',
          tools: ['360° School Analysis', 'Stakeholder Engagement Assessment', 'Culture Audit'],
          outcomes: [
            'Complete organizational understanding',
            'Stakeholder engagement baseline',
            'Priority development areas identified'
          ],
          prerequisites: [
            'Leadership commitment to full transformation',
            'Board approval for comprehensive change',
            'Budget allocation for development process'
          ]
        },
        {
          id: 'vision-development',
          title: 'Shared Vision Creation',
          description: 'Collaborative development of compelling future vision',
          duration: '6-8 weeks',
          tools: ['Vision Development Workshop', 'Stakeholder Engagement Framework'],
          outcomes: [
            'Shared, inspiring vision statement',
            'Stakeholder buy-in and ownership',
            'Clear strategic priorities'
          ],
          prerequisites: [
            'Assessment completed',
            'Stakeholder mapping done',
            'Communication strategy in place'
          ]
        },
        {
          id: 'culture-transformation',
          title: 'Culture and Leadership Development',
          description: 'Transform organizational culture and leadership practices',
          duration: '4-6 months',
          tools: ['Leadership Development Program', 'Culture Change Framework', 'Participatory Leadership Toolkit'],
          outcomes: [
            'Transformed leadership practices',
            'Positive culture shift',
            'Enhanced organizational resilience'
          ],
          prerequisites: [
            'Vision established',
            'Leadership team commitment',
            'Change management plan approved'
          ]
        },
        {
          id: 'systems-optimization',
          title: 'Systems and Process Optimization',
          description: 'Redesign key processes and systems for effectiveness',
          duration: '3-4 months',
          tools: ['Process Mapping Toolkit', 'Systems Thinking Framework', 'Digital Integration Plan'],
          outcomes: [
            'Streamlined, effective processes',
            'Improved operational efficiency',
            'Enhanced system integration'
          ],
          prerequisites: [
            'Culture foundation established',
            'Leadership practices improved',
            'Process improvement team trained'
          ]
        },
        {
          id: 'embedding-sustainability',
          title: 'Embedding and Sustainability',
          description: 'Ensure changes become part of organizational DNA',
          duration: '2-3 months',
          tools: ['Sustainability Framework', 'Continuous Improvement System', 'Knowledge Management Platform'],
          outcomes: [
            'Sustainable transformation',
            'Continuous improvement culture',
            'Organizational learning capacity'
          ],
          prerequisites: [
            'All previous phases completed',
            'Success measurement systems in place',
            'Commitment to ongoing development'
          ]
        }
      ]
    },
    'digital-integration-path': {
      id: 'digital-integration-path',
      title: 'Digital Integration Path',
      description: 'Technology-focused development with pedagogical alignment',
      totalDuration: '6-9 months',
      difficulty: 'Intermediate',
      participants: 'All teaching staff + IT support',
      overview: 'Strategic approach to digital transformation that prioritizes pedagogical integration over technology acquisition. Focuses on building teacher confidence and creating sustainable digital learning environments.',
      successStories: 'Schools report 90% increase in meaningful technology use, 75% improvement in digital literacy skills, and 80% of teachers feeling confident with educational technology.',
      steps: [
        {
          id: 'digital-assessment',
          title: 'Digital Readiness Assessment',
          description: 'Comprehensive evaluation of current digital maturity',
          duration: '2-3 weeks',
          tools: ['Digital Readiness Assessment', 'Technology Audit Tool', 'Teacher Confidence Survey'],
          outcomes: [
            'Clear digital maturity baseline',
            'Infrastructure needs identified',
            'Teacher development priorities established'
          ],
          prerequisites: [
            'Leadership commitment to digital integration',
            'Basic IT infrastructure assessment',
            'Teacher willingness to participate'
          ]
        },
        {
          id: 'digital-strategy',
          title: 'Digital Strategy Development',
          description: 'Create comprehensive digital integration strategy',
          duration: '3-4 weeks',
          tools: ['Digital Strategy Framework', 'EdTech Selection Criteria', 'Implementation Roadmap'],
          outcomes: [
            'Clear digital vision and strategy',
            'Technology selection criteria',
            'Phased implementation plan'
          ],
          prerequisites: [
            'Assessment completed',
            'Budget parameters defined',
            'Stakeholder input gathered'
          ]
        },
        {
          id: 'teacher-development',
          title: 'Teacher Digital Literacy Program',
          description: 'Comprehensive professional development for teachers',
          duration: '3-4 months',
          tools: ['Teacher Digital Literacy Program', 'Peer Mentoring Framework', 'Progress Tracking System'],
          outcomes: [
            'Enhanced teacher digital confidence',
            'Improved digital pedagogical skills',
            'Sustainable support networks'
          ],
          prerequisites: [
            'Strategy approved',
            'Technology platforms selected',
            'Professional development time allocated'
          ]
        },
        {
          id: 'integration-implementation',
          title: 'Classroom Integration',
          description: 'Support teachers in implementing digital tools in practice',
          duration: '2-3 months',
          tools: ['Implementation Support Framework', 'Classroom Observation Protocol', 'Student Feedback System'],
          outcomes: [
            'Successful classroom integration',
            'Improved student engagement',
            'Evidence of learning impact'
          ],
          prerequisites: [
            'Teachers trained and confident',
            'Technology deployed and working',
            'Support systems in place'
          ]
        }
      ]
    }
  };

  const currentPath = pathId ? paths[pathId] : null;

  if (!currentPath) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Path Not Found</h1>
            <p className="text-gray-600 mb-8">The requested development path could not be found.</p>
            <Button asChild>
              <Link to="/toolbox">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {tCommon('buttons.backToToolbox')}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Button variant="ghost" asChild>
                <Link to="/toolbox">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {tCommon('buttons.backToToolbox')}
                </Link>
              </Button>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className={getDifficultyColor(currentPath.difficulty)}>
                  {currentPath.difficulty}
                </Badge>
                <Badge variant="outline">
                  <Clock className="mr-1 h-3 w-3" />
                  {currentPath.totalDuration}
                </Badge>
                <Badge variant="outline">
                  <Users className="mr-1 h-3 w-3" />
                  {currentPath.participants}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {currentPath.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {currentPath.description}
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">Path Overview</h3>
                <p className="text-gray-700">{currentPath.overview}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
                <p className="text-gray-700">{currentPath.successStories}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Implementation Steps
              </h2>

              <div className="space-y-8">
                {currentPath.steps.map((step, index) => (
                  <Card key={step.id} className="overflow-hidden">
                    <CardHeader className="bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <CardDescription>{step.description}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">
                          <Clock className="mr-1 h-3 w-3" />
                          {step.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Tools */}
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-3">Tools Used:</h4>
                          <ul className="space-y-1">
                            {step.tools.map((tool, toolIndex) => (
                              <li key={toolIndex} className="text-sm text-gray-700 flex items-center">
                                <CheckCircle className="mr-2 h-3 w-3 text-blue-600" />
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-3">Key Outcomes:</h4>
                          <ul className="space-y-1">
                            {step.outcomes.map((outcome, outcomeIndex) => (
                              <li key={outcomeIndex} className="text-sm text-gray-700 flex items-start">
                                <span className="mr-2 text-green-600">•</span>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Prerequisites */}
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-3">Prerequisites:</h4>
                          <ul className="space-y-1">
                            {step.prerequisites.map((prerequisite, preIndex) => (
                              <li key={preIndex} className="text-sm text-gray-700 flex items-start">
                                <span className="mr-2 text-orange-600">•</span>
                                {prerequisite}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start This Path?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I provide hands-on support for implementing this development path in your school. From initial planning to final evaluation, I'll be with you every step of the way.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Path Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Detailed implementation guide with timelines, templates, and checklists.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={`/downloads/${currentPath.id}-guide.pdf`} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tool Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Editable Google Docs templates for all tools mentioned in this path.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={`https://drive.google.com/drive/folders/${currentPath.id}-templates`} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Access Templates
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Implementation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Personal consultation and ongoing support throughout your journey.
                  </p>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/consultation">
                      Schedule Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:office@schulentwickler.at">
                  {tCommon('buttons.startYourJourney')}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/toolbox">
                  {tCommon('buttons.exploreOtherPaths')}
                  <ArrowRight className="ml-2 h-4 w-4" />
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

export default ToolboxPath;
