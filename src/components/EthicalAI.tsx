import React from 'react';
import { Brain, Shield, Users, Eye, Heart, Lightbulb } from 'lucide-react';

const EthicalAI = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fairness & Non-discrimination",
      description: "We ensure our AI systems treat all individuals and groups fairly, without bias or discrimination based on race, gender, religion, or other protected characteristics.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency & Explainability",
      description: "Our AI systems are designed to be transparent in their decision-making processes, providing clear explanations for their outputs and recommendations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-Centered Design",
      description: "We prioritize human welfare and dignity in all our AI solutions, ensuring technology serves humanity rather than replacing human judgment entirely.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Privacy & Data Protection",
      description: "We implement robust privacy protections and data security measures, ensuring personal information is handled with the utmost care and respect.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Beneficial & Purposeful",
      description: "Our AI solutions are developed to create positive impact, solving real-world problems and contributing to societal well-being.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Responsible Development",
      description: "We follow rigorous testing, validation, and monitoring processes to ensure our AI systems are reliable, safe, and perform as intended.",
    },
  ];

  const initiatives = [
    {
      title: "AI Ethics Committee",
      description: "Internal committee that reviews all AI projects for ethical compliance and potential societal impact.",
    },
    {
      title: "Bias Detection & Mitigation",
      description: "Systematic processes to identify and eliminate bias in training data and algorithmic decision-making.",
    },
    {
      title: "Community Engagement",
      description: "Regular engagement with local communities to understand the impact of our AI solutions on society.",
    },
    {
      title: "Continuous Monitoring",
      description: "Ongoing monitoring of deployed AI systems to ensure they continue to operate ethically and effectively.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brain/10 via-white to-light-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-red-ncs rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-dim-gray mb-6">Ethical AI</h1>
            <p className="font-body text-xl text-dim-gray/70 max-w-4xl mx-auto leading-relaxed">
              At The Run Sun, we believe that artificial intelligence should be developed and deployed responsibly, 
              with ethics and human welfare at the forefront of every decision we make.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-title text-3xl font-bold text-dim-gray">Our Commitment</h2>
                <p className="font-body text-dim-gray/70 leading-relaxed">
                  We are committed to developing AI solutions that are not only innovative and effective 
                  but also ethical, fair, and beneficial to society. Our approach to AI development is 
                  guided by a strong moral compass and a deep understanding of the potential impact 
                  of these technologies.
                </p>
                <p className="font-body text-dim-gray/70 leading-relaxed">
                  Every AI project we undertake goes through rigorous ethical review processes to ensure 
                  alignment with our values and societal benefit. We believe that responsible AI is not 
                  just good practice—it's essential for building a better future.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ethical AI development"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-olivine rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-light-green rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-dim-gray mb-6">Our Ethical AI Principles</h2>
            <p className="font-body text-xl text-dim-gray/70 max-w-3xl mx-auto">
              These foundational principles guide every aspect of our AI development and deployment process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-ncs to-red-ncs/80 rounded-2xl flex items-center justify-center text-white mb-6">
                  {principle.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-dim-gray mb-4">{principle.title}</h3>
                <p className="font-body text-dim-gray/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-gradient-to-br from-olivine/10 to-light-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-dim-gray mb-6">Our Initiatives</h2>
            <p className="font-body text-xl text-dim-gray/70 max-w-3xl mx-auto">
              We've implemented several initiatives to ensure our AI development process remains ethical and responsible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-title text-2xl font-bold text-dim-gray mb-4">{initiative.title}</h3>
                <p className="font-body text-dim-gray/70 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dim-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl font-bold mb-6">Partner with Us for Ethical AI</h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Ready to implement AI solutions that are both powerful and ethical? Let's work together 
            to create technology that benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-colors">
              Discuss Your AI Project
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-dim-gray transition-colors">
              Download AI Ethics Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicalAI;