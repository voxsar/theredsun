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
      title: "Exploration",
      description:
        "We venture beyond the expected, pursuing curiosity and experimentation to reveal new possibilities for the people we serve.",
    },
    {
      title: "Wisdom",
      description:
        "We ground every decision in insight, blending research, experience, and empathy so our guidance is as thoughtful as it is bold.",
    },
    {
      title: "Creativity",
      description:
        "We transform complex challenges into artful solutions, crafting stories and systems that resonate emotionally and perform beautifully.",
    },
    {
      title: "Unity",
      description:
        "We collaborate across disciplines and backgrounds, weaving diverse perspectives into momentum that elevates every collaboration.",
    },
    {
      title: "Optimism",
      description:
        "We champion a brighter future, choosing hope and possibility as catalysts for meaningful, lasting progress.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-light-green/20 via-orange-100 to-peach/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90 mb-6">About The Red Sun</h1>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto leading-relaxed">
              The Red Sun is a collective of strategists, storytellers, and technologists illuminating the path from inspired idea to trusted experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-title text-3xl font-bold text-black/90">Our Story</h2>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Born from a collaboration between dreamers and doers, The Red Sun began as a tight-knit studio helping mission-led brands bring their boldest visions to life. What started in a single sunlit loft has evolved into a global practice where creativity, craftsmanship, and care converge.
                </p>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Our journey is guided by curious minds, compassionate partnerships, and a devotion to building with integrity. Today, we stand beside organizations around the world who are ready to imagine brighter possibilities and move toward them with confidence.
                </p>
                <p className="font-body text-black/90/70 leading-relaxed">
                  This is the heart of The Red Sun—where imagination meets integrity—and every engagement is an invitation to create meaningful change together.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Red Sun team"
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
      <section className="py-24 bg-orange-100">
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
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-olivine/10 to-light-green/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="font-title text-3xl font-bold text-black/90 mb-6">Our Mission</h3>
              <p className="font-body text-black/90/70 leading-relaxed text-lg">
                To light the way for visionaries with storytelling, strategy, and technology that honor every stakeholder, turning daring ideas into experiences people can believe in.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="font-title text-3xl font-bold text-black/90 mb-6">Our Vision</h3>
              <p className="font-body text-black/90/70 leading-relaxed text-lg">
                To cultivate a world where imagination and integrity move in unison, illuminating brighter futures for the communities and causes we champion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
