import { useState } from 'react';
import { BookOpen, Video, FileText, Code, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LogoMarquee from '@/components/LogoMarquee';

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    {
      type: 'webinar',
      icon: Video,
      title: "AI in Enterprise: 2024 Trends",
      description: "Join industry experts as they discuss the latest AI trends shaping modern enterprises.",
      category: "Business",
      date: "Dec 15, 2024",
      duration: "60 min"
    },
    {
      type: 'whitepaper',
      icon: FileText,
      title: "Cloud Security Best Practices",
      description: "Comprehensive guide to securing your cloud infrastructure and protecting sensitive data.",
      category: "Security",
      date: "Nov 28, 2024",
      pages: "24 pages"
    },
    {
      type: 'case-study',
      icon: BookOpen,
      title: "Fortune 500 Digital Transformation",
      description: "How a leading retail company achieved 40% cost reduction through cloud migration.",
      category: "Business",
      date: "Nov 20, 2024",
      readTime: "8 min read"
    },
    {
      type: 'docs',
      icon: Code,
      title: "Developer API Documentation",
      description: "Complete reference guide for integrating our services into your applications.",
      category: "Developer",
      date: "Updated daily",
      version: "v2.1"
    },
    {
      type: 'webinar',
      icon: Calendar,
      title: "Building Scalable Microservices",
      description: "Learn how to design and deploy microservices architecture for maximum scalability.",
      category: "Developer",
      date: "Dec 22, 2024",
      duration: "90 min"
    },
    {
      type: 'whitepaper',
      icon: Download,
      title: "The Future of Work: Remote Collaboration",
      description: "Research insights on how technology is reshaping workplace collaboration.",
      category: "Business",
      date: "Dec 5, 2024",
      pages: "16 pages"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'business', label: 'Business' },
    { id: 'developer', label: 'Developer' },
    { id: 'security', label: 'Security' }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category.toLowerCase() === activeTab);

  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'webinar': return Video;
      case 'whitepaper': return FileText;
      case 'case-study': return BookOpen;
      case 'docs': return Code;
      default: return FileText;
    }
  };

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Learning <span className="text-accent">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with our comprehensive library of guides, case studies, and expert insights 
            designed to help you maximize your technology investments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-card-hover'
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => {
            const IconComponent = getResourceIcon(resource.type);
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent size={24} className="text-accent" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.date}</span>
                    <span>
                      {resource.duration || resource.pages || resource.readTime || resource.version}
                    </span>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                  >
                    {resource.type === 'webinar' ? 'Register Now' : 
                     resource.type === 'docs' ? 'View Docs' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Logo Marquee (testimonials with logos) */}
        <div className="mt-16">
          <LogoMarquee />
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-feature rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest resources, insights, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;