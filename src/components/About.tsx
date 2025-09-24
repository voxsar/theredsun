import React from 'react';
import { Award, Globe, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "8+", label: "Years Experience", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.",
    },
    {
      title: "Client Success",
      description: "Our success is measured by the success of our clients. We're committed to delivering exceptional value.",
    },
    {
      title: "Ethical Practices",
      description: "We conduct business with integrity, transparency, and respect for all stakeholders.",
    },
    {
      title: "Sustainability",
      description: "We're committed to creating sustainable technology solutions that benefit both business and environment.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-light-green/20 via-white to-peach/20">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90 mb-6">About The Run Sun</h1>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto leading-relaxed">
              A leading IT solutions company in Sri Lanka, dedicated to transforming businesses through innovative technology solutions and ethical practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-title text-3xl font-bold text-black/90">Our Story</h2>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Founded in 2016, The Run Sun emerged with a vision to bridge the digital divide in Sri Lanka. 
                  We started as a small team of passionate technologists and have grown into a comprehensive 
                  IT solutions provider serving businesses across various industries.
                </p>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Our journey has been marked by continuous innovation, client success stories, and a 
                  commitment to sustainable and ethical technology practices. Today, we're proud to be 
                  one of Sri Lanka's most trusted IT partners.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Run Sun team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-ncs rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-olivine rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dim-gray text-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-red-ncs rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-title text-4xl font-bold mb-2">{stat.number}</div>
                <div className="font-body text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">Our Values</h2>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-title text-2xl font-bold text-black/90 mb-4">{value.title}</h3>
                <p className="font-body text-black/90/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-olivine/10 to-light-green/20">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="font-title text-3xl font-bold text-black/90 mb-6">Our Mission</h3>
              <p className="font-body text-black/90/70 leading-relaxed text-lg">
                To empower Sri Lankan businesses with innovative, sustainable, and ethical technology solutions 
                that drive growth, efficiency, and positive impact on society. We're committed to being the 
                bridge between traditional business practices and the digital future.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="font-title text-3xl font-bold text-black/90 mb-6">Our Vision</h3>
              <p className="font-body text-black/90/70 leading-relaxed text-lg">
                To be the leading technology partner in Sri Lanka, recognized for our innovation, ethical 
                practices, and contribution to sustainable development. We envision a future where every 
                business, regardless of size, has access to world-class technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;