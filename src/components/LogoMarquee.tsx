import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { src: '/placeholder.svg', alt: 'Acme Corp logo' },
    { src: '/placeholder.svg', alt: 'Globex logo' },
    { src: '/placeholder.svg', alt: 'Initech logo' },
    { src: '/placeholder.svg', alt: 'Umbrella logo' },
    { src: '/placeholder.svg', alt: 'Hooli logo' },
    { src: '/placeholder.svg', alt: 'Stark Industries logo' },
    { src: '/placeholder.svg', alt: 'Wayne Enterprises logo' },
    { src: '/placeholder.svg', alt: 'Wonka Industries logo' },
  ];

  return (
    <section aria-label="Trusted by" className="bg-background">
      <div className="overflow-hidden py-8">
        <div className="flex items-center gap-10 marquee-right">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
