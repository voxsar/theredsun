import React, { useState } from 'react';
import { Code, Cloud, Shield, Cpu, Database, Smartphone } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and drive operational efficiency.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your IT environment.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps", "Cloud Security"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and insights through ethical AI implementations.",
      features: ["Predictive Analytics", "Process Automation", "Computer Vision", "Natural Language Processing"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights for informed decision-making.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Data Visualization"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes.",
      features: ["Process Optimization", "Legacy Modernization", "Change Management", "Training"],
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-title font-bold text-black/90 mb-6">Our Services</h2>
          <p className="text-xl font-body text-black/90/70 max-w-3xl mx-auto">
            We provide comprehensive IT solutions that drive innovation and growth for businesses across Sri Lanka and beyond.
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
              
              <button className="mt-6 text-red-ncs font-title font-medium hover:text-red-ncs/80 transition-colors group-hover:translate-x-2 transition-transform inline-flex items-center">
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