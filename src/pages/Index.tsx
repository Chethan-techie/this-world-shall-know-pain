import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import FeatureBanner from '@/components/FeatureBanner';

import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <FeatureBanner />
        
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
