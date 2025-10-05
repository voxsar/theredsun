import React, { useState } from 'react';
import { Code, Cloud, Cpu, Smartphone } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Visionary Web Application Engineering",
      description:
        "We imagine ethical, human web experiences that scale across LEAN, MEAN, LAMP, and WAMP stacks without losing soul.",
      features: [
        "Ethical architecture reviews across LEAN, MEAN, LAMP, and WAMP foundations",
        "C#, PHP, and JavaScript/ECMAScript framework fluency that empowers every sprint",
        "Human-centered journey mapping that keeps teams inspired and accountable",
        "Imaginative accessibility and analytics enhancements woven into each release",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Empowering Mobile Experience Design",
      description:
        "Our imaginative mobile artisans craft native and hybrid journeys that feel visionary, inclusive, and trustworthy.",
      features: [
        "Objective-C and Swift craftsmanship for ethically minded iOS launches",
        "Java, Kotlin, and Flutter brilliance delivering empowering Android stories",
        "Cross-platform mentoring that keeps code humane and imaginative",
        "Human insight labs that translate field feedback into delightful iterations",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Desktop Continuity & Cloud Harmony",
      description:
        "We unite visionary desktop craftsmanship with cloud imagination so every touchpoint remains grounded, secure, and kind.",
      features: [
        "C# and .NET packaging that keeps Windows ecosystems empowering and reliable",
        "Electron and progressive desktop experiences grown from ethical JavaScript cores",
        "Lean automation that synchronizes updates without compromising trust",
        "Human support rituals that celebrate teams while safeguarding every device",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Product Engineering & Automation",
      description:
        "We accelerate products with imaginative automation that honors people, amplifies impact, and respects every ecosystem.",
      features: [
        "End-to-end product acceleration spanning LEAN, MEAN, LAMP, and WAMP landscapes",
        "Ethical automation pipelines blending C#, PHP, and ECMAScript ingenuity",
        "AI-assisted instrumentation with human oversight for visionary resilience",
        "Empowering workshops that align stakeholders around compassionate innovation",
      ],
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