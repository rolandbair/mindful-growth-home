import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, MessageSquare, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Consultation = () => {
  const { t } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    role: '',
    consultationType: '',
    timeframe: '',
    description: '',
    specificTools: [] as string[],
    preferredContact: '',
    budget: ''
  });

  const consultationTypes = t('consultation.consultationTypes', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    format: string;
  }>;

  const availableTools = t('consultation.availableTools', { returnObjects: true }) as string[];

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      specificTools: prev.specificTools.includes(tool)
        ? prev.specificTools.filter(t => t !== tool)
        : [...prev.specificTools, tool]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to your backend
    const emailBody = `
Consultation Request from ${formData.name}

School: ${formData.school}
Role: ${formData.role}
Email: ${formData.email}

Consultation Type: ${formData.consultationType}
Preferred Timeframe: ${formData.timeframe}
Preferred Contact Method: ${formData.preferredContact}
Budget Range: ${formData.budget}

Specific Tools of Interest:
${formData.specificTools.join(', ')}

Description:
${formData.description}
    `.trim();

    const mailtoLink = `mailto:office@schulentwickler.at?subject=Consultation Request - ${formData.consultationType}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {tCommon('buttons.scheduleCall')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('consultation.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('consultation.types.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('consultation.types.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {consultationTypes.map((type) => (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {t('consultation.labels.duration')} {type.duration}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {t('consultation.labels.format')} {type.format}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {tCommon('buttons.scheduleCall')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('consultation.form.subtitle')}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t('consultation.form.cardTitle')}</CardTitle>
                <CardDescription>
                  {t('consultation.form.cardDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('consultation.form.fields.name.label')} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('consultation.form.fields.email.label')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="school">{t('consultation.form.fields.school.label')} *</Label>
                      <Input
                        id="school"
                        value={formData.school}
                        onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">{t('consultation.form.fields.role.label')} *</Label>
                      <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('consultation.form.fields.role.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="principal">{t('consultation.form.fields.role.options.principal')}</SelectItem>
                          <SelectItem value="vice-principal">{t('consultation.form.fields.role.options.vicePrincipal')}</SelectItem>
                          <SelectItem value="department-head">{t('consultation.form.fields.role.options.departmentHead')}</SelectItem>
                          <SelectItem value="teacher">{t('consultation.form.fields.role.options.teacher')}</SelectItem>
                          <SelectItem value="it-coordinator">{t('consultation.form.fields.role.options.itCoordinator')}</SelectItem>
                          <SelectItem value="consultant">{t('consultation.form.fields.role.options.consultant')}</SelectItem>
                          <SelectItem value="board-member">{t('consultation.form.fields.role.options.boardMember')}</SelectItem>
                          <SelectItem value="other">{t('consultation.form.fields.role.options.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-2">
                    <Label htmlFor="consultationType">{t('consultation.form.fields.consultationType.label')} *</Label>
                    <Select value={formData.consultationType} onValueChange={(value) => setFormData(prev => ({ ...prev, consultationType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('consultation.form.fields.consultationType.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Specific Tools Interest */}
                  <div className="space-y-3">
                    <Label>{t('consultation.form.fields.specificTools.label')}</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {availableTools.map((tool) => (
                        <div key={tool} className="flex items-center space-x-2">
                          <Checkbox
                            id={tool}
                            checked={formData.specificTools.includes(tool)}
                            onCheckedChange={() => handleToolToggle(tool)}
                          />
                          <Label htmlFor={tool} className="text-sm font-normal">
                            {tool}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeframe and Contact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timeframe">{t('consultation.form.fields.timeframe.label')}</Label>
                      <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('consultation.form.fields.timeframe.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="this-week">{t('consultation.form.fields.timeframe.options.thisWeek')}</SelectItem>
                          <SelectItem value="next-week">{t('consultation.form.fields.timeframe.options.nextWeek')}</SelectItem>
                          <SelectItem value="within-month">{t('consultation.form.fields.timeframe.options.withinMonth')}</SelectItem>
                          <SelectItem value="flexible">{t('consultation.form.fields.timeframe.options.flexible')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">{t('consultation.form.fields.preferredContact.label')}</Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredContact: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('consultation.form.fields.preferredContact.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">{t('consultation.form.fields.preferredContact.options.email')}</SelectItem>
                          <SelectItem value="phone">{t('consultation.form.fields.preferredContact.options.phone')}</SelectItem>
                          <SelectItem value="video-call">{t('consultation.form.fields.preferredContact.options.videoCall')}</SelectItem>
                          <SelectItem value="in-person">{t('consultation.form.fields.preferredContact.options.inPerson')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <Label htmlFor="budget">{t('consultation.form.fields.budget.label')}</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('consultation.form.fields.budget.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under €500</SelectItem>
                        <SelectItem value="500-1500">€500 - €1,500</SelectItem>
                        <SelectItem value="1500-5000">€1,500 - €5,000</SelectItem>
                        <SelectItem value="5000-plus">€5,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">{t('consultation.form.fields.description.label')} *</Label>
                    <Textarea
                      id="description"
                      placeholder="What challenges are you facing? What goals do you have? What specific support are you looking for?"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {tCommon('buttons.scheduleCall')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('consultation.whatToExpect.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('consultation.whatToExpect.steps.response.title')}</h3>
                <p className="text-gray-600">{t('consultation.whatToExpect.steps.response.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('consultation.whatToExpect.steps.scheduling.title')}</h3>
                <p className="text-gray-600">{t('consultation.whatToExpect.steps.scheduling.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('consultation.whatToExpect.steps.consultation.title')}</h3>
                <p className="text-gray-600">{t('consultation.whatToExpect.steps.consultation.description')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;
