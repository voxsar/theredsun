import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Video Side */}
          <div className="relative">
            <div className="aspect-video bg-dim-gray rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Run Sun company video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-dim-gray ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-title font-bold text-dim-gray leading-tight">
                Transforming Sri Lankan Businesses Through Technology
              </h2>
              <p className="text-xl font-body text-dim-gray/70 leading-relaxed">
                For over 8 years, we've been at the forefront of digital transformation in Sri Lanka, 
                helping businesses embrace innovative technologies while maintaining ethical practices 
                and sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-ncs rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-dim-gray mb-2">Innovation-Driven Solutions</h3>
                  <p className="font-body text-dim-gray/70">
                    We leverage cutting-edge technologies to create solutions that drive real business value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-olivine rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-dim-gray mb-2">Ethical & Sustainable</h3>
                  <p className="font-body text-dim-gray/70">
                    Every solution we build considers its impact on society and the environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-light-green rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-dim-gray mb-2">Local Expertise, Global Standards</h3>
                  <p className="font-body text-dim-gray/70">
                    Deep understanding of the Sri Lankan market combined with international best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-colors font-title font-medium">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;