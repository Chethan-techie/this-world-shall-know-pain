import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ApplicationDevelopment = () => {
  useEffect(() => {
    document.title = 'Application Development | Innovative Solutions';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Cross-platform application development with security, reliability, and scale built-in.';
    document.head.appendChild(meta);

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = `${window.location.origin}/products/application-development`;
    document.head.appendChild(link);

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Application Development',
      provider: { '@type': 'Organization', name: 'Innovative Solutions' },
      areaServed: 'Global',
      serviceType: 'Software Development',
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Application Development</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">Seamless development across platforms with modern tooling, automated testing, and robust CI/CD.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article className="md:col-span-2 bg-card rounded-xl p-6 shadow-card">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Capabilities</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Secure-by-default architecture</li>
              <li>API-first design and documentation</li>
              <li>Observability and performance monitoring</li>
            </ul>
          </article>
          <aside className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Kick off</h3>
            <p className="text-muted-foreground mb-4">Schedule a scoping session.</p>
            <div className="flex gap-3">
              <Button className="bg-accent text-accent-foreground">Book a Call</Button>
              <Button variant="outline">View Case Studies</Button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplicationDevelopment;
