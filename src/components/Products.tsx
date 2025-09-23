import React, { useState } from 'react';
import { Monitor, Zap, Users, BarChart3 } from 'lucide-react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      icon: <Monitor className="w-12 h-12" />,
      name: "RunSun CRM",
      category: "Customer Relationship Management",
      description: "A comprehensive CRM solution designed for Sri Lankan businesses to manage customer relationships and drive sales growth.",
      features: ["Contact Management", "Sales Pipeline", "Analytics Dashboard", "Mobile App", "Local Language Support"],
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from LKR 25,000/month",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: "AutoFlow",
      category: "Process Automation",
      description: "Intelligent workflow automation platform that eliminates repetitive tasks and streamlines business processes.",
      features: ["Workflow Designer", "AI-Powered Automation", "Integration Hub", "Real-time Monitoring", "Custom Triggers"],
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from LKR 15,000/month",
    },
    {
      icon: <Users className="w-12 h-12" />,
      name: "TeamSync",
      category: "Collaboration Platform",
      description: "Modern team collaboration tool built for remote and hybrid teams with features tailored for Sri Lankan work culture.",
      features: ["Team Chat", "Project Management", "File Sharing", "Video Conferencing", "Time Tracking"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from LKR 8,000/month",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      name: "DataViz Pro",
      category: "Business Intelligence",
      description: "Advanced data visualization and business intelligence platform for data-driven decision making.",
      features: ["Interactive Dashboards", "Custom Reports", "Data Connectors", "Predictive Analytics", "Mobile Access"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from LKR 20,000/month",
    },
  ];

  return (
    <section id="products" className="py-32 bg-orange-50">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-title font-bold text-dim-gray mb-6">Our Products</h2>
          <p className="text-xl font-body text-dim-gray/70 max-w-3xl mx-auto">
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
                  : 'bg-white text-dim-gray'
              }`}>
                {product.icon}
              </div>

              <div className="mb-4">
                <span className="text-sm font-body text-olivine bg-olivine/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-2xl font-title font-bold text-dim-gray mb-4">{product.name}</h3>
              <p className="font-body text-dim-gray/70 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <div className="grid grid-cols-1 gap-2">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm font-body text-dim-gray/60">
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