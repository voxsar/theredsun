import React from 'react';

const About = () => {
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

  const practices = [
    {
      title: "We build local-first where it matters",
      description:
        "A till that stops selling when the connection drops is not a till. Where an outage would cost our client real money, the system keeps working offline and reconciles afterwards.",
    },
    {
      title: "We test the parts that would hurt to get wrong",
      description:
        "Stock state machines, unit conversion, pricing rules and sync behaviour carry unit and integration tests, because those are the places a quiet bug becomes a financial one.",
    },
    {
      title: "We keep one system of record",
      description:
        "When a point of sale and an inventory system disagree about stock, someone has to be right. We decide which, up front, and make the other follow.",
    },
    {
      title: "We use AI where it removes real work",
      description:
        "Reading handwritten forms, parsing invoices, scoring assessments. The output is structured, stored and reviewable, not handed to a user as fact.",
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

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-title text-3xl font-bold text-black/90">Who we are</h2>
            <p className="font-body text-black/90/70 leading-relaxed">
              We are a Colombo-based software practice working with organisations in retail, education and
              ecommerce. Our work is the unglamorous, load-bearing kind: point of sale and inventory systems,
              learning platforms, document automation, and the storefronts and services around them.
            </p>
            <p className="font-body text-black/90/70 leading-relaxed">
              We take projects from first conversation through to a running, maintained system, and we stay
              with them afterwards. Most of what we build is still in daily use by the people we built it for.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-title text-4xl font-bold text-black/90 mb-6">How we work</h2>
            <p className="font-body text-xl text-black/90/70 leading-relaxed">
              Four positions we have arrived at by shipping, and the reasoning behind each.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice) => (
              <div key={practice.title} className="rounded-3xl border border-black/10 bg-white p-8">
                <h3 className="font-title text-2xl font-bold text-black/90 mb-4">{practice.title}</h3>
                <p className="font-body text-black/90/70 leading-relaxed">{practice.description}</p>
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
