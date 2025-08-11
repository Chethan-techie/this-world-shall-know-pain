import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

const ProductCard = ({ icon: Icon, title, description, features, href = "#" }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-card hover:bg-card-hover border-border">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon size={24} className="text-accent" />
        </div>
        <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
          asChild
        >
          <a href={href}>
            See more
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;