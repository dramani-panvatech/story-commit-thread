import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  const practiceAreas = [
    { label: "Family Law", href: "#practice-areas" },
    { label: "Personal Injury", href: "#practice-areas" },
    { label: "Criminal Defense", href: "#practice-areas" },
    { label: "Immigration", href: "#practice-areas" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Attorney Advertising", href: "#" },
    { label: "Disclaimer", href: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering you with expert legal guidance. Serving our community 
              with compassion, clarity, and unwavering dedication to justice.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a 
                    href={area.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">(555) 123-4567</p>
                  <p className="text-sm text-white/60">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">info@carechakra.com</p>
                  <p className="text-sm text-white/60">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">123 Main Street, Suite 400</p>
                  <p className="text-sm text-white/60">Downtown Legal District</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © 2024 Care Chakra Law Firm. All rights reserved.
              </p>
              <p className="text-sm text-white/60 mt-1">
                Licensed to practice law in [Your State]
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <p className="text-xs text-white/60 text-center leading-relaxed">
              <strong>Attorney Advertising:</strong> This website is designed for general information only. 
              The information presented at this site should not be construed to be formal legal advice 
              nor the formation of a lawyer/client relationship. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;