import React from 'react';
import { Leaf, Recycle, Sun, Droplets, TreePine, Wind } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Renewable Energy",
      description: "Our offices are powered by 100% renewable energy sources, primarily solar power systems installed on our facilities.",
      impact: "50% reduction in carbon footprint",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "E-Waste Management",
      description: "Comprehensive electronic waste recycling program ensuring responsible disposal and refurbishment of IT equipment.",
      impact: "Zero IT waste to landfills",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Carbon Offset Programs",
      description: "Active participation in global reforestation projects and carbon offset initiatives in partnership with local communities.",
      impact: "1000+ trees planted annually",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Conservation",
      description: "Advanced water management systems and rainwater harvesting to minimize water consumption in our facilities.",
      impact: "40% water usage reduction",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Green Cloud Infrastructure",
      description: "Hosting services on eco-friendly cloud platforms that utilize renewable energy and efficient cooling systems.",
      impact: "Carbon-neutral hosting",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Development",
      description: "Building software solutions that promote sustainability and help our clients reduce their environmental impact.",
      impact: "25+ green tech solutions delivered",
    },
  ];

  const goals = [
    {
      year: "2024",
      target: "Carbon Neutral Operations",
      description: "Achieve complete carbon neutrality across all our operations and facilities.",
    },
    {
      year: "2025",
      target: "100% Remote Work Options",
      description: "Reduce commuting emissions by offering comprehensive remote work capabilities.",
    },
    {
      year: "2026",
      target: "Sustainable Supply Chain",
      description: "Work exclusively with suppliers who meet our environmental sustainability standards.",
    },
    {
      year: "2030",
      target: "Net Positive Impact",
      description: "Become a net positive environmental contributor through our operations and client solutions.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-light-green/20 via-orange-100 to-olivine/30">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-olivine rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90 mb-6">Sustainability</h1>
            <p className="font-body text-xl text-black/90/70 max-w-4xl mx-auto leading-relaxed">
              At The Red Sun, we're committed to building a sustainable future through responsible business practices, 
              green technologies, and environmental stewardship. Our planet's health is integral to our mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-title text-3xl font-bold text-black/90">Our Environmental Commitment</h2>
                <p className="font-body text-black/90/70 leading-relaxed">
                  We recognize that technology companies have a significant environmental responsibility. 
                  That's why we've integrated sustainability into every aspect of our operations, from 
                  the way we design our offices to how we develop our software solutions.
                </p>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Our comprehensive sustainability strategy focuses on reducing our environmental impact 
                  while creating solutions that help our clients achieve their own sustainability goals. 
                  We believe that green technology is not just good for the planet—it's good for business.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-light-green rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-olivine rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">Our Green Initiatives</h2>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
              We've implemented comprehensive sustainability initiatives across all areas of our business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-light-green/10 to-olivine/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-olivine to-light-green rounded-2xl flex items-center justify-center text-white mb-6">
                  {initiative.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-black/90 mb-4">{initiative.title}</h3>
                <p className="font-body text-black/90/70 leading-relaxed mb-4">{initiative.description}</p>
                <div className="bg-white rounded-lg p-3 border-l-4 border-olivine">
                  <p className="font-body text-sm font-medium text-olivine">Impact: {initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Timeline */}
      <section className="py-24 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">Sustainability Roadmap</h2>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
              Our commitment to sustainability extends beyond today. Here's our roadmap for achieving even greater environmental impact.
            </p>
          </div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-ncs to-red-ncs/80 rounded-full flex items-center justify-center">
                    <span className="font-title text-white font-bold text-lg">{goal.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-title text-2xl font-bold text-black/90 mb-2">{goal.target}</h3>
                  <p className="font-body text-black/90/70 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-olivine text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold mb-6">Our Environmental Impact</h2>
            <p className="font-body text-xl text-white/80 max-w-3xl mx-auto">
              Here's how our sustainability initiatives have made a real difference over the past year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-title text-4xl font-bold mb-2">50%</div>
              <div className="font-body text-white/80">Carbon Footprint Reduction</div>
            </div>
            <div className="text-center">
              <div className="font-title text-4xl font-bold mb-2">1,200</div>
              <div className="font-body text-white/80">Trees Planted This Year</div>
            </div>
            <div className="text-center">
              <div className="font-title text-4xl font-bold mb-2">85%</div>
              <div className="font-body text-white/80">Renewable Energy Usage</div>
            </div>
            <div className="text-center">
              <div className="font-title text-4xl font-bold mb-2">0</div>
              <div className="font-body text-white/80">Waste to Landfills</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-light-green/20 to-olivine/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl font-bold text-black/90 mb-6">Join Our Sustainability Journey</h2>
          <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto mb-10">
            Partner with us to build sustainable technology solutions that benefit both your business and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-olivine text-white px-8 py-4 rounded-full hover:bg-olivine/90 transition-colors">
              Green Solutions Consultation
            </button>
            <button className="border border-dim-gray text-black/90 px-8 py-4 rounded-full hover:bg-dim-gray hover:text-white transition-colors">
              Sustainability Report 2024
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;