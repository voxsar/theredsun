import React from 'react';

const LogoShowcase = () => {
  const clients = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'InnovateLK', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'DataFlow', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'CloudSys', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'SmartBiz', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'NextGen', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  ];

  return (
    <section className="py-32 bg-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-2xl text-black/90 mb-8">
            Trusted by forward-thinking companies around the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="font-title font-medium text-black/90 text-sm">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;