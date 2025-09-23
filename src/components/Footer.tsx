import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const navigation = {
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Our Team', id: 'about' },
      { name: 'Careers', id: 'contact' },
    ],
    services: [
      { name: 'Software Development', id: 'services' },
      { name: 'Cloud Solutions', id: 'services' },
      { name: 'AI & ML', id: 'services' },
    ],
    products: [
      { name: 'RunSun CRM', id: 'products' },
      { name: 'AutoFlow', id: 'products' },
      { name: 'TeamSync', id: 'products' },
    ],
    resources: [
      { name: 'Ethical AI', id: 'ethical-ai' },
      { name: 'Sustainability', id: 'sustainability' },
      { name: 'Contact', id: 'contact' },
    ],
  };

  return (
    <footer className="bg-dim-gray text-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <button
                onClick={() => setCurrentPage('home')}
                className="text-2xl font-bold text-white hover:text-red-ncs transition-colors"
              >
                The Run Sun
              </button>
              <p className="text-white/70 mt-4 leading-relaxed">
                Leading IT solutions company in Sri Lanka, committed to transforming businesses 
                through innovative technology, ethical practices, and sustainable development.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-ncs" />
                <span className="text-white/80">123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-ncs" />
                <span className="text-white/80">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-ncs" />
                <span className="text-white/80">info@therunsun.lk</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-ncs transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-ncs transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-ncs transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="list-item hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 The Run Sun (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;