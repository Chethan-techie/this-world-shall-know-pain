import { Globe, Twitter, Linkedin, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Microsoft", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Company News", href: "#" },
        { label: "Privacy & Cookies", href: "#" },
        { label: "Investor Relations", href: "#" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Microsoft 365", href: "#" },
        { label: "Azure Cloud Services", href: "#" },
        { label: "Windows", href: "#" },
        { label: "Surface Devices", href: "#" },
        { label: "Xbox", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Microsoft Store", href: "#" },
        { label: "Downloads & Updates", href: "#" },
        { label: "Order Tracking", href: "#" },
        { label: "Contact Support", href: "#" }
      ]
    },
    {
      title: "Developer",
      links: [
        { label: "Microsoft Learn", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Code Samples", href: "#" },
        { label: "Developer Tools", href: "#" },
        { label: "API Reference", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-accent">Microsoft</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering every person and organization on the planet to achieve more through innovative technology solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-card hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-muted-foreground hover:text-accent-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm group inline-flex items-center"
                      >
                        {link.label}
                        <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Microsoft Corporation. All rights reserved.
            </div>

            {/* Language Selector & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              {/* Language Selector */}
              <button className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-300">
                <Globe size={16} className="mr-2" />
                English (United States)
              </button>

              {/* Legal Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Privacy
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Terms of Use
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Trademarks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;