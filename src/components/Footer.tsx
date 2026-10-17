import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const navigation = {
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Selected Work', id: 'work' },
      { name: 'Get a Quote', id: 'quote' },
    ],
    services: [
      { name: 'All Services', id: 'services' },
      { name: 'Tech Stacks', id: 'tech-stacks' },
      { name: 'Contact', id: 'contact' },
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
							src="/redsun-logo-horizontal.svg" 
							alt="The Red Sun" 
							className="h-24 w-auto"
					/>
                  </button>
                  <p className="mt-4 leading-relaxed text-black">
                    A Colombo-based software practice building point of sale and inventory systems, learning
                    platforms and ecommerce services — and maintaining them once they are live.
                  </p>
                </div>

                <div className="space-y-3 text-black">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-black" />
                    <span>info@theredsun.com</span>
                  </div>
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
                  © {new Date().getFullYear()} The Red Sun (Pvt) Ltd. All rights reserved.
                </p>
                <a
                  href="mailto:info@theredsun.com"
                  className="text-sm text-black transition-opacity hover:opacity-80"
                >
                  info@theredsun.com
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