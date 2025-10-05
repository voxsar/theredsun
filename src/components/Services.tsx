import React, { useState } from 'react';
import { Code, Cloud, Cpu, Smartphone } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'LEAN Stack Launchpads',
      description:
        'Launch human-centred MVPs with our LEAN experimentation squads guiding research, product strategy, and responsible automation.',
      features: [
        'Design sprint facilitation, journey mapping, and inclusive research rituals',
        'Serverless and headless engineering to validate ideas quickly',
        'Telemetry starter kits and analytics that spotlight insight-rich signals',
        'Innovation governance frameworks that respect your values',
      ],
      target: 'tech-stack-lean',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'MEAN Stack Experience Platforms',
      description:
        'Shape cohesive TypeScript products that scale globally with real-time collaboration, personalisation, and accessible design systems.',
      features: [
        'TypeScript-first engineering spanning MongoDB, Express, Angular, and Node',
        'Design system operations with inclusive component libraries',
        'Automated quality pipelines covering performance and accessibility',
        'Cloud optimisation strategies that reduce cost and carbon',
      ],
      target: 'tech-stack-mean',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'LAMP Stack Revitalisation',
      description:
        'Modernise PHP ecosystems with composable architectures, accessibility enhancements, and automation that respects governance.',
      features: [
        'Laravel, Symfony, and WordPress engineering guided by domain-driven design',
        'Composable CMS integrations with marketing and data platforms',
        'WCAG 2.2 AA accessibility audits baked into releases',
        'Blue-green deployment pipelines and observability dashboards',
      ],
      target: 'tech-stack-lamp',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'WAMP Stack Modernisation',
      description:
        'Connect Windows-native ecosystems with secure portals, field service tooling, and IoT command centres that feel effortless.',
      features: [
        'Azure, IIS, and on-premises integration for hybrid environments',
        'Single sign-on, MFA, and zero-trust architecture expertise',
        'Offline-first app design for rugged devices and field teams',
        'Lifecycle automation for packaging, updates, and monitoring',
      ],
      target: 'tech-stack-wamp',
    },
  ];

  return (
    <section id="services" className="py-32 bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-title font-bold text-black/90 mb-6">Our Services</h2>
          <p className="text-xl font-body text-black/90/70 max-w-3xl mx-auto">
            We provide comprehensive digital services that help organizations innovate, scale, and create meaningful customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                hoveredService === index 
                  ? 'bg-red-ncs text-white scale-110' 
                  : 'bg-gray-50 text-black/90'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-title font-bold text-black/90 mb-4">{service.title}</h3>
              <p className="font-body text-black/90/70 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm font-body text-black/90/60">
                    <div className="w-1.5 h-1.5 bg-red-ncs rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setCurrentPage(service.target)}
                className="mt-6 text-red-ncs font-title font-medium hover:text-red-ncs/80 transition-colors group-hover:translate-x-2 transition-transform inline-flex items-center"
              >
                Learn More
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-colors font-title font-medium">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;