import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reservations", href: "#reservations" },
    { label: "Private Events", href: "#events" },
    { label: "Gift Cards", href: "#gift-cards" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <footer className="bg-charcoal text-warm-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Savoria</h3>
            <p className="text-warm-cream/80 mb-6 leading-relaxed">
              Where culinary art meets exceptional service. Experience fine dining that creates lasting memories.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-warm-cream/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-warm-cream/80 hover:text-primary transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-warm-cream/80">
                  123 Gourmet Avenue<br />
                  Downtown District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:5551234567" className="text-warm-cream/80 hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@savoria.com" className="text-warm-cream/80 hover:text-primary transition-colors">
                  info@savoria.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-warm-cream/80">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="font-medium">11:30 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="font-medium">11:30 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">10:00 - 21:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong className="text-primary">Special Notice:</strong> Reservations recommended for weekend dining
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-cream/60 text-sm">
              © {currentYear} Savoria Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-warm-cream/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-warm-cream/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-warm-cream/60 hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
