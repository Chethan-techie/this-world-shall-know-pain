import { Building2, Users, Wrench, TrendingUp, Lock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Tools",
      description: "Comprehensive business solutions for large-scale operations and complex workflows.",
      metrics: "500K+ Companies"
    },
    {
      icon: Lock,
      title: "Secure IT Management",
      description: "Advanced security protocols and compliance frameworks for enterprise environments.",
      metrics: "99.9% Security Rating"
    },
    {
      icon: Wrench,
      title: "Developer Solutions",
      description: "Complete toolkit for modern software development and deployment at scale.",
      metrics: "10M+ Developers"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Unified communication platform that connects teams across the globe seamlessly.",
      metrics: "250M+ Users"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Data-driven insights and analytics to fuel strategic decision-making processes.",
      metrics: "40% ROI Increase"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Worldwide network of data centers ensuring low latency and high availability.",
      metrics: "60+ Regions"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, secure, and reliable solutions tailored for modern enterprises 
            looking to accelerate their digital transformation journey.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-background border-border"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <solution.icon size={24} className="text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {solution.metrics}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <a 
                    href="#" 
                    className="text-accent hover:text-accent-hover font-medium inline-flex items-center group-hover:underline transition-all duration-300"
                  >
                    Learn more →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our enterprise team to discuss custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Contact Sales
              </button>
              <button className="border border-border hover:bg-card-hover px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;