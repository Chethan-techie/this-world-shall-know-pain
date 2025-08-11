import { Megaphone, Wrench, Globe, Cog } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      icon: Megaphone,
      title: 'AI Marketing',
      description: 'Go To Market smartly and repeatedly through one system.',
      features: [
        'Automatic backups',
        'Global replication',
        '99.99% Uptime'
      ],
      href: '/products/ai-marketing'
    },
    {
      icon: Wrench,
      title: 'Application Development',
      description: 'Seamless Application Development for cross platfroms.',
      features: [
        'Firewall integration',
        'End-to-end encryption',
        'DDoS mitigation'
      ],
      href: '/products/application-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building sleek modern, responsive websites that drive growth.',
      features: [
        'Load balancing',
        'Auto-scaling',
        'Container support'
      ],
      href: '/products/web-development'
    },
    {
      icon: Cog,
      title: 'Custom Software Solution',
      description: 'Smart, scalable software solutions for modern enterprises.',
      features: [
        'Custom alerts',
        'System health checks',
        'Error tracking'
      ],
      href: '/products/custom-software-solution'
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Innovative <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of products designed to accelerate your digital transformation
            and drive business growth in the modern economy.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;