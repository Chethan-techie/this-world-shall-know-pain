import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AiMarketing = () => {
  useEffect(() => {
    document.title = 'AI Marketing | Innovative Solutions';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'AI Marketing services: automation, analytics, and campaign optimization that accelerate growth.';
    document.head.appendChild(meta);

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = `${window.location.origin}/products/ai-marketing`;
    document.head.appendChild(link);

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Marketing',
      provider: { '@type': 'Organization', name: 'Innovative Solutions' },
      areaServed: 'Global',
      serviceType: 'Marketing Automation',
    });
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(link);
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">AI Marketing</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">Go To Market smartly and repeatedly through one system. Automate campaigns, personalize at scale, and turn insights into action.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article className="md:col-span-2 bg-card rounded-xl p-6 shadow-card">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">What you get</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Predictive audience targeting and segmentation</li>
              <li>Automated multi-channel orchestration</li>
              <li>Real-time performance analytics and dashboards</li>
            </ul>
          </article>
          <aside className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Get started</h3>
            <p className="text-muted-foreground mb-4">Start a free trial or talk to our experts.</p>
            <div className="flex gap-3">
              <Button className="bg-accent text-accent-foreground">Start Free Trial</Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AiMarketing;
