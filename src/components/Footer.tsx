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
      { name: 'Web & App Development', id: 'services' },
      { name: 'Multiplatform Solutions', id: 'services' },
      { name: 'Mobile & IoT', id: 'services' },
    ],
    products: [
      { name: 'NodeHR', id: 'products' },
      { name: 'VoXL CRM', id: 'products' },
      { name: 'World of Games', id: 'products' },
    ],
    resources: [
      { name: 'Ethical AI', id: 'ethical-ai' },
      { name: 'Employee Welfare', id: 'employee-welfare' },
      { name: 'Contact', id: 'contact' },
    ],
    stacks: [
      { name: 'Overview', id: 'tech-stacks' },
      { name: 'LEAN Stack', id: 'tech-stack-lean' },
      { name: 'MEAN Stack', id: 'tech-stack-mean' },
      { name: 'LAMP Stack', id: 'tech-stack-lamp' },
      { name: 'WAMP Stack', id: 'tech-stack-wamp' },
    ],
  };

  return (
    <footer className="bg-black text-black">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-14">
        <div className="max-w-screen-2xl mx-auto">
          <div className="rounded-[2.5rem] border border-black/20 bg-white p-10 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-2xl font-bold text-black transition-opacity hover:opacity-80"
                  >
                    
					<img 
							src="/src/Red Sun Logo_Main Extended Horizontal Logo.svg" 
							alt="The Red Sun" 
							className="h-24 w-auto"
					/>
                  </button>
                  <p className="mt-4 leading-relaxed text-black">
                    Global technology partner committed to transforming businesses through innovative solutions,
                    ethical practices, and shared prosperity for our employee-owners.
                  </p>
                </div>

                <div className="space-y-3 text-black">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-black" />
                    <span>+94 77 43 95 913</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-black" />
                    <span>info@theredsun.com</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-black flex items-center justify-center bg-orange-100 transition-colors hover:bg-orange-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-black flex items-center justify-center bg-orange-100 transition-colors hover:bg-orange-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-black flex items-center justify-center bg-orange-100 transition-colors hover:bg-orange-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 lg:col-span-3">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
                  <ul className="space-y-2">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className="list-item transition-opacity hover:opacity-80"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Services</h3>
                  <ul className="space-y-2 text-black">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className="text-black transition-opacity hover:opacity-80"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Resources</h3>
                  <ul className="space-y-2 text-black">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className="text-black transition-opacity hover:opacity-80"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Tech Stacks</h3>
                  <ul className="space-y-2 text-black">
                    {navigation.stacks.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className="text-black transition-opacity hover:opacity-80"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-black/10 pt-8">
              <div className="flex flex-col gap-4 text-black md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-black">
                  © 2024 The Red Sun (Pvt) Ltd. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-black">
                  <a href="#" className="transition-opacity hover:opacity-80">Privacy Policy</a>
                  <a href="#" className="transition-opacity hover:opacity-80">Terms of Service</a>
                  <a href="#" className="transition-opacity hover:opacity-80">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;