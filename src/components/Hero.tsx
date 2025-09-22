import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Innovative IT Solutions",
      subtitle: "Transforming businesses through cutting-edge technology",
      description: "We deliver comprehensive IT services and products that drive digital transformation and accelerate business growth.",
    },
    {
      title: "Sustainable Technology",
      subtitle: "Building a greener digital future",
      description: "Our commitment to sustainability drives us to create eco-friendly solutions that benefit both business and environment.",
    },
    {
      title: "Ethical AI Development",
      subtitle: "Responsible artificial intelligence for all",
      description: "We develop AI solutions with ethics at the core, ensuring fairness, transparency, and positive impact on society.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background - Placeholder for Three.js/Spline */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-light-green/20 via-olivine/10 to-peach/20"></div>
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-red-ncs/20 to-olivine/20 animate-pulse"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Slider */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-title font-bold text-dim-gray leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-title text-red-ncs font-light">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg font-body text-dim-gray/80 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="flex items-center space-x-2 font-body text-dim-gray hover:text-red-ncs transition-colors group">
                <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center group-hover:border-red-ncs">
                  <Play size={16} className="ml-1" />
                </div>
                <span className="font-title font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Slide Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-2 rounded-full border border-dim-gray/20 hover:border-red-ncs hover:text-red-ncs transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-red-ncs' : 'bg-dim-gray/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-2 rounded-full border border-dim-gray/20 hover:border-red-ncs hover:text-red-ncs transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-light-green via-olivine to-peach rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern technology"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-peach rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-light-green rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;