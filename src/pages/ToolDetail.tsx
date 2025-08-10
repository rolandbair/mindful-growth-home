import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, Users, Download, BookOpen, ExternalLink, ArrowLeft, 
  CheckCircle, AlertCircle, Lightbulb, FileText, Video, 
  Target, Wrench, MessageSquare
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
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
  prerequisites: string[];
  steps: {
    phase: string;
    title: string;
    description: string;
    duration: string;
    activities: string[];
  }[];
  tips: string[];
  commonChallenges: {
    challenge: string;
    solution: string;
  }[];
  googleDocsUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  tags: string[];
  relatedTools: string[];
}

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');

  // This would typically come from a data source or API
  const tools: Record<string, Tool> = {
    'team-building-toolkit': {
      id: 'team-building-toolkit',
      title: 'Team Building Toolkit',
      description: 'Comprehensive collection of activities and frameworks for building cohesive, collaborative school teams. This toolkit has been refined through implementation in over 50 schools across Austria and Germany.',
      category: 'Leadership',
      difficulty: 'Beginner',
      duration: '2-4 hours',
      participants: '8-25 people',
      materials: [
        'Flipchart paper (1 sheet per 4 participants)',
        'Colored markers (4-6 colors)',
        'Sticky notes (3 pads)',
        'Timer or smartphone',
        'Masking tape',
        'Name tags',
        'Handout templates (provided in Google Docs)'
      ],
      outcomes: [
        'Improved team communication and understanding',
        'Clear understanding of individual team roles and strengths',
        'Established team norms and working agreements',
        'Enhanced trust and psychological safety',
        'Concrete action steps for ongoing collaboration',
        'Shared vision for team effectiveness'
      ],
      prerequisites: [
        'Basic meeting room with moveable furniture',
        'Willingness of participants to engage openly',
        'Dedicated time without interruptions',
        'Leadership commitment to following through on outcomes'
      ],
      steps: [
        {
          phase: 'Preparation',
          title: 'Pre-Workshop Setup',
          description: 'Essential preparation to ensure workshop success',
          duration: '30 minutes',
          activities: [
            'Send pre-workshop questionnaire to participants',
            'Arrange room in small group configuration',
            'Prepare materials and handouts',
            'Brief leadership on their role in the process'
          ]
        },
        {
          phase: 'Opening',
          title: 'Welcome and Introductions',
          description: 'Create psychological safety and set expectations',
          duration: '20 minutes',
          activities: [
            'Welcome and purpose statement',
            'Ground rules establishment',
            'Quick check-in round',
            'Overview of the process'
          ]
        },
        {
          phase: 'Discovery',
          title: 'Team Strengths Mapping',
          description: 'Identify individual and collective strengths',
          duration: '45 minutes',
          activities: [
            'Individual strengths reflection',
            'Strengths sharing in pairs',
            'Team strengths constellation activity',
            'Strengths gaps identification'
          ]
        },
        {
          phase: 'Alignment',
          title: 'Communication Styles Workshop',
          description: 'Understand different communication preferences',
          duration: '60 minutes',
          activities: [
            'Communication styles assessment',
            'Style sharing and discussion',
            'Communication challenges exploration',
            'Adaptation strategies development'
          ]
        },
        {
          phase: 'Norming',
          title: 'Team Agreements Creation',
          description: 'Establish shared working norms and expectations',
          duration: '45 minutes',
          activities: [
            'Brainstorm ideal team behaviors',
            'Prioritize most important agreements',
            'Create specific, observable team norms',
            'Discuss accountability mechanisms'
          ]
        },
        {
          phase: 'Closing',
          title: 'Action Planning and Commitment',
          description: 'Create concrete next steps and accountability',
          duration: '30 minutes',
          activities: [
            'Individual commitment statements',
            'Team accountability partner selection',
            'Follow-up meeting scheduling',
            'Celebration and closing circle'
          ]
        }
      ],
      tips: [
        'Start with smaller, lower-stakes activities to build trust before moving to more vulnerable sharing',
        'Use a parking lot for off-topic issues that arise during the workshop',
        'Be prepared to adjust timing based on group energy and engagement',
        'Follow up within one week with a summary and action items',
        'Consider doing a mini-version quarterly to maintain team health',
        'Involve skeptical team members in planning to increase buy-in'
      ],
      commonChallenges: [
        {
          challenge: 'Participants are reluctant to share openly',
          solution: 'Start with written reflection before verbal sharing. Use partner work before large group. Model vulnerability as the facilitator.'
        },
        {
          challenge: 'Dominant personalities take over discussions',
          solution: 'Use structured protocols like round-robin sharing. Give specific time limits. Use non-verbal participation methods like sticky notes.'
        },
        {
          challenge: 'Team identifies too many issues to address',
          solution: 'Use dot voting to prioritize. Focus on 2-3 key agreements maximum. Create a "future work" list for other issues.'
        },
        {
          challenge: 'Leadership is skeptical about time investment',
          solution: 'Present research on team effectiveness ROI. Start with a shorter pilot session. Connect to existing school goals.'
        }
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-team-building-toolkit',
      downloadUrl: '/downloads/team-building-toolkit.pdf',
      videoUrl: 'https://youtube.com/watch?v=example-team-building',
      tags: ['team-building', 'collaboration', 'communication', 'leadership', 'workshop'],
      relatedTools: ['communication-framework', 'vision-development-workshop', 'quick-wins-assessment']
    },
    'digital-readiness-assessment': {
      id: 'digital-readiness-assessment',
      title: 'Digital Readiness Assessment',
      description: 'Comprehensive tool to evaluate your school\'s current digital maturity across technology infrastructure, pedagogical integration, and organizational culture.',
      category: 'Digital Transformation',
      difficulty: 'Intermediate',
      duration: '3-5 days',
      participants: 'All staff + leadership team + selected students/parents',
      materials: [
        'Online survey platform (Google Forms or similar)',
        'Assessment rubrics and scoring sheets',
        'Interview guides for focus groups',
        'Observation protocols for classroom visits',
        'Data analysis templates',
        'Report template'
      ],
      outcomes: [
        'Clear picture of current digital maturity level',
        'Identification of priority development areas',
        'Baseline data for tracking progress over time',
        'Staff engagement and buy-in for digital transformation',
        'Evidence-based recommendations for next steps',
        'Budget justification for technology investments'
      ],
      prerequisites: [
        'Leadership commitment to acting on results',
        'Staff agreement to participate honestly',
        'Basic survey distribution capability',
        'Time allocation for data collection and analysis'
      ],
      steps: [
        {
          phase: 'Planning',
          title: 'Assessment Design and Preparation',
          description: 'Customize the assessment for your school context',
          duration: '1 day',
          activities: [
            'Review and customize survey questions',
            'Identify assessment participants',
            'Schedule classroom observations',
            'Prepare communication about the process'
          ]
        },
        {
          phase: 'Data Collection',
          title: 'Multi-Source Data Gathering',
          description: 'Collect comprehensive data from all stakeholders',
          duration: '2-3 days',
          activities: [
            'Distribute and collect online surveys',
            'Conduct focus group interviews',
            'Complete classroom observations',
            'Gather infrastructure and policy documentation'
          ]
        },
        {
          phase: 'Analysis',
          title: 'Data Analysis and Interpretation',
          description: 'Analyze data to identify patterns and insights',
          duration: '1-2 days',
          activities: [
            'Compile and clean survey data',
            'Code qualitative interview data',
            'Calculate digital maturity scores',
            'Identify trends and priority areas'
          ]
        },
        {
          phase: 'Reporting',
          title: 'Results Summary and Recommendations',
          description: 'Create actionable report with recommendations',
          duration: '1 day',
          activities: [
            'Prepare comprehensive assessment report',
            'Develop priority recommendations',
            'Create presentation for stakeholders',
            'Plan follow-up action steps'
          ]
        }
      ],
      tips: [
        'Ensure anonymity in surveys to get honest responses',
        'Include students and parents for a complete picture',
        'Focus on pedagogical integration, not just technology availability',
        'Use the assessment as a conversation starter, not just data collection',
        'Plan to repeat the assessment annually to track progress',
        'Share results transparently to build trust and engagement'
      ],
      commonChallenges: [
        {
          challenge: 'Low survey response rates',
          solution: 'Send multiple reminders, offer incentives, make surveys mobile-friendly, and keep them short (under 15 minutes).'
        },
        {
          challenge: 'Results show low digital readiness',
          solution: 'Frame as opportunity for growth. Start with quick wins. Focus on willing early adopters first.'
        },
        {
          challenge: 'Staff feel judged or evaluated',
          solution: 'Emphasize this is about organizational development, not individual evaluation. Share aggregated results only.'
        },
        {
          challenge: 'Too much data to analyze effectively',
          solution: 'Focus on 3-5 key metrics. Use visualization tools. Consider external support for analysis.'
        }
      ],
      googleDocsUrl: 'https://docs.google.com/document/d/1example-digital-readiness',
      downloadUrl: '/downloads/digital-readiness-assessment.pdf',
      tags: ['assessment', 'digital-transformation', 'planning', 'data-collection', 'baseline'],
      relatedTools: ['teacher-digital-literacy', 'school-360-analysis', 'change-management-framework']
    }
  };

  const tool = toolId ? tools[toolId] : null;

  if (!tool) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
            <p className="text-gray-600 mb-8">The requested tool could not be found.</p>
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
                <Badge className={getDifficultyColor(tool.difficulty)}>
                  {tool.difficulty}
                </Badge>
                <Badge variant="outline">{tool.category}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {tool.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {tool.description}
              </p>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm">{tool.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Participants</div>
                    <div className="text-sm">{tool.participants}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Target className="mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Category</div>
                    <div className="text-sm">{tool.category}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {tool.googleDocsUrl && (
                  <Button size="lg" asChild>
                    <a href={tool.googleDocsUrl} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      {tCommon('buttons.openInGoogleDocs')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {tool.downloadUrl && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      {tCommon('buttons.downloadPDF')}
                    </a>
                  </Button>
                )}
                {tool.videoUrl && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={tool.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Tutorial
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                    <TabsTrigger value="tips">Tips</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Target className="mr-2 h-5 w-5" />
                          Key Outcomes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tool.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Wrench className="mr-2 h-5 w-5" />
                          Materials Needed
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tool.materials.map((material, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-blue-600">•</span>
                              <span>{material}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5" />
                          Prerequisites
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tool.prerequisites.map((prerequisite, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-orange-600">•</span>
                              <span>{prerequisite}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="steps" className="space-y-6 mt-6">
                    {tool.steps.map((step, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              {index + 1}. {step.title}
                            </CardTitle>
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-2">Activities:</h4>
                          <ul className="space-y-1">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="tips" className="space-y-4 mt-6">
                    {tool.tips.map((tip, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <div className="flex items-start">
                            <Lightbulb className="mr-3 h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="challenges" className="space-y-4 mt-6">
                    {tool.commonChallenges.map((challenge, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center text-red-600">
                            <AlertCircle className="mr-2 h-5 w-5" />
                            {challenge.challenge}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                            <p className="text-green-700">{challenge.solution}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      I provide hands-on support for implementing this tool in your school context.
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full" asChild>
                        <a href="mailto:office@schulentwickler.at">
                          Email for Support
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <Link to="/consultation">
                          Schedule Consultation
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Tools */}
                {tool.relatedTools && tool.relatedTools.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tool.relatedTools.map((relatedToolId, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start"
                            asChild
                          >
                            <Link to={`/toolbox/tool/${relatedToolId}`}>
                              {relatedToolId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetail;
