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

  const inPractice = [
    {
      title: "Structured output, not free text",
      description:
        "When we read handwritten student capture cards with a vision model, it answers against a strict schema into named fields. A model that must fill seven defined fields is a model you can check.",
    },
    {
      title: "The result is stored and reviewable",
      description:
        "Extracted data lands in a database as rows a person can open, correct and export — never presented to a user as fact the moment it comes back from a model.",
    },
    {
      title: "AI assists the judgement, it does not replace it",
      description:
        "In assessment and scoring work, the model prepares and explains; the decision that affects someone stays with a person who can see how it was reached.",
    },
    {
      title: "We say no to the cases that do not fit",
      description:
        "Where a model's error rate would land on the person it is used against rather than on us, we recommend the deterministic solution instead, even when it is the less impressive demo.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-light-green/10 via-orange-100 to-light-green/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-red-ncs rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90 mb-6">Ethical AI</h1>
            <p className="font-body text-xl text-black/90/70 max-w-4xl mx-auto leading-relaxed">
              At The Red Sun, we believe that artificial intelligence should be developed and deployed responsibly, 
              with ethics and human welfare at the forefront of every decision we make.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-title text-3xl font-bold text-black/90">Our Commitment</h2>
                <p className="font-body text-black/90/70 leading-relaxed">
                  We are committed to developing AI solutions that are not only innovative and effective 
                  but also ethical, fair, and beneficial to society. Our approach to AI development is 
                  guided by a strong moral compass and a deep understanding of the potential impact 
                  of these technologies.
                </p>
                <p className="font-body text-black/90/70 leading-relaxed">
                  Every AI project we undertake goes through rigorous ethical review processes to ensure 
                  alignment with our values and societal benefit. We believe that responsible AI is not 
                  just good practice—it's essential for building a better future.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-10">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-red-ncs">A worked example</p>
              <h3 className="font-title mt-4 text-2xl font-bold text-black/90">
                Reading handwriting, without pretending to be certain
              </h3>
              <p className="font-body mt-5 text-black/90/70 leading-relaxed">
                Our capture card system reads scanned, handwritten student forms with a vision model. It
                answers against a strict JSON schema into seven named fields, and every card is stored as a
                row a person can open, correct and export.
              </p>
              <p className="font-body mt-4 text-black/90/70 leading-relaxed">
                The model removes the retyping. It does not get the final word on what a student wrote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">Our Ethical AI Principles</h2>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
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
                <h3 className="font-title text-xl font-bold text-black/90 mb-4">{principle.title}</h3>
                <p className="font-body text-black/90/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-olivine/10 to-light-green/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">What this looks like in practice</h2>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
              Principles are easy to publish. Here is how they constrain the AI features we actually ship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inPractice.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-title text-2xl font-bold text-black/90 mb-4">{item.title}</h3>
                <p className="font-body text-black/90/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dim-gray text-white">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl font-bold mb-6">Partner with Us for Ethical AI</h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Ready to implement AI solutions that are both powerful and ethical? Let's work together 
            to create technology that benefits everyone.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:info@theredsun.com?subject=AI%20project%20enquiry"
              className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-colors"
            >
              Discuss Your AI Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicalAI;