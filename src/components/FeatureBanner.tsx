import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aiInsights from '@/assets/ai-insights.jpg';

const FeatureBanner = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full">
              <Sparkles className="text-accent mr-2" size={16} />
              <span className="text-accent font-medium text-sm">AI-Powered Innovation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Boost Your Business with
              <span className="text-accent block">AI & Cloud Technology</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your operations with intelligent automation, predictive analytics, 
              and cloud-native solutions that adapt to your business needs in real-time.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Reduce operational costs by up to 40%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Improve decision-making with real-time insights</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Scale seamlessly with automated infrastructure</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-card-hover">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary-light rounded-lg flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <img 
                    src={aiInsights} 
                    alt="AI-driven insights dashboard"
                    loading="lazy"
                    className="w-full h-80 object-cover rounded-md shadow-card mb-4"
                  />
                  <div className="text-center">
                    {/* <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"> */}
                      {/* <Sparkles className="text-accent" size={32} /> */}
                    {/* </div> */}
                    {/* <h3 className="text-xl font-semibold text-foreground mb-2">AI-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Intelligent analytics that power better decisions
                    </p> */}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-dark rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;