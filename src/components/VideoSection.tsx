import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-32 bg-gray-50">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
	<div className="grid lg:grid-cols-[2fr_1fr] gap-20 items-center">
		{/* Video Side */}
          <div className="relative">
            <div className="aspect-video bg-dim-gray rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="The Red Sun company video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-title font-bold text-black/90 leading-tight">
                Transforming Global Businesses Through Technology
              </h2>
              <p className="text-xl font-body text-black/90/70 leading-relaxed">
                For over 8 years, we've been at the forefront of digital transformation,
                helping businesses embrace innovative technologies while maintaining ethical practices
                and sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-ncs rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-black/90 mb-2">Innovation-Driven Solutions</h3>
                  <p className="font-body text-black/90/70">
                    We leverage cutting-edge technologies to create solutions that drive real business value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-olivine rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-black/90 mb-2">Ethical & Sustainable</h3>
                  <p className="font-body text-black/90/70">
                    Every solution we build considers its impact on society and the environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-light-green rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-title font-semibold text-black/90 mb-2">Global Perspective, Local Insight</h3>
                  <p className="font-body text-black/90/70">
                    Deep understanding of regional markets combined with international best practices.
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