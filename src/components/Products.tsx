import React, { useState } from 'react';
import { Monitor, Zap, Users, BarChart3 } from 'lucide-react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      icon: <Zap className="w-12 h-12" />,
      name: "RedSun Automate",
      category: "Automation Platform",
      description: "Unified orchestration for cross-team workflows, bots, and decisioning built to scale your operations without the busywork.",
      features: [
        "Drag-and-drop journey builder",
        "Robotic and API automation",
        "Realtime exception monitoring",
        "Role-based controls",
        "AI-powered insights",
      ],
      image: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starts at $399/mo with enterprise tiers",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      name: "RedSun POS Suite",
      category: "Retail & F&B POS",
      description: "Cloud-native point of sale experience that keeps queues moving, syncs inventory, and powers multi-location reporting in real time.",
      features: [
        "Mobile and countertop terminals",
        "Unified inventory ledger",
        "Offline ordering safeguards",
        "Loyalty & gift modules",
        "Executive dashboards",
      ],
      image: "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Flat 1.5% processing + modular add-ons",
    },
    {
      icon: <Users className="w-12 h-12" />,
      name: "RedSun HealthLink",
      category: "Hospital Management",
      description: "End-to-end hospital command center connecting admissions, care teams, pharmacy, and billing on a single secure record.",
      features: [
        "Integrated EMR workflows",
        "Bed & OT scheduling",
        "Clinical alerts & rounds",
        "Pharmacy stock sync",
        "Revenue cycle tracker",
      ],
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Tiered licensing by facility size",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      name: "RedSun Connect CRM",
      category: "Customer Relationship Suite",
      description: "A revenue-first CRM that aligns marketing, sales, and service teams with intelligent playbooks and guided engagement.",
      features: [
        "Segment-driven journeys",
        "Pipeline forecasting",
        "Omnichannel inbox",
        "Automation studio",
        "Customer health scoring",
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Subscription bundles with success services",
    },
  ];

  return (
    <section id="products" className="py-32 bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-title font-bold text-black/90 mb-6">Our Products</h2>
          <p className="text-xl font-body text-black/90/70 max-w-3xl mx-auto">
            Innovative software products designed to solve real business challenges and drive digital transformation across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                hoveredProduct === index 
                  ? 'bg-olivine text-white scale-110' 
                  : 'bg-white text-black/90'
              }`}>
                {product.icon}
              </div>

              <div className="mb-4">
                <span className="text-sm font-body text-olivine bg-olivine/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-2xl font-title font-bold text-black/90 mb-4">{product.name}</h3>
              <p className="font-body text-black/90/70 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <div className="grid grid-cols-1 gap-2">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm font-body text-black/90/60">
                      <div className="w-1.5 h-1.5 bg-olivine rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-red-ncs font-title font-medium">{product.price}</p>
              </div>

              <button className="text-olivine font-title font-medium hover:text-olivine/80 transition-colors group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-olivine text-white px-8 py-4 rounded-full hover:bg-olivine/90 transition-colors font-title font-medium">
            See More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
