import React from 'react';

const EmployeeWelfare = () => {
  const ownershipHighlights = [
    {
      title: 'Employee-Owned Vision',
      description:
        '62% of The Red Sun is held by our team through profit-sharing trusts and direct equity grants, ensuring every milestone creates shared prosperity.',
    },
    {
      title: 'Transparent Governance',
      description:
        'Cross-functional councils set policy on workload, wellness, and reinvestment priorities so employee voices guide strategic decisions.',
    },
    {
      title: 'Career Mobility Fund',
      description:
        'Every project allocation includes paid learning blocks and micro-grants that help team members explore new crafts and leadership paths.',
    },
  ];

  const programs = [
    {
      name: 'Shared Success Bonus',
      details:
        'Quarterly distributions tied to collective performance metrics with a 3x multiplier for mentorship contributions.',
    },
    {
      name: 'Wellbeing Sabbaticals',
      details:
        'Fully paid 6-week sabbaticals every four years, with optional community service placements and family travel stipends.',
    },
    {
      name: 'Employee Venture Studio',
      details:
        'Incubation support, product strategy coaching, and seed funding for employee-led ventures that spin into joint ownership products.',
    },
  ];

  return (
    <section className="bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-24 space-y-20">
        <div className="text-center space-y-6">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-black font-medium border border-black/10">
            Employee Welfare & Ownership
          </span>
          <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90">
            Building a Company That Belongs to Its People
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-body text-black/70 leading-relaxed">
            The Red Sun is a people-first, employee-owned collective. Our welfare model combines shared equity, holistic wellbeing, and guided growth so every team member can thrive—professionally, financially, and personally.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {ownershipHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="h-full rounded-3xl bg-white border border-black/10 p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] space-y-4"
            >
              <h2 className="font-title text-2xl font-semibold text-black/90">{highlight.title}</h2>
              <p className="text-black/70 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[3rem] bg-black text-white p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-ncs/40 blur-3xl rounded-full" aria-hidden />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-olivine/40 blur-3xl rounded-full" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-6">
              <h2 className="font-title text-4xl font-bold">Shared Ownership in Action</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                From inclusive planning sessions to open profit dashboards, we design transparency into every workflow. Our governance handbook is written with our teams and updated quarterly, making shared ownership a living practice.
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-title text-2xl font-semibold text-white">How We Share Information</h3>
                  <p className="mt-2 text-white/80 leading-relaxed">
                    Quarterly town halls, open-budget reviews, and published meeting summaries keep every team member informed about our ownership roadmap and stewardship decisions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-title text-2xl font-semibold text-white">Participation Opportunities</h3>
                  <p className="mt-2 text-white/80 leading-relaxed">
                    Employees contribute to policy councils, equity planning workshops, and peer mentoring programs to shape how ownership benefits evolve.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 border border-white/10 p-6 space-y-4">
              <h3 className="font-title text-2xl font-semibold text-white">Stay Informed</h3>
              <p className="text-white/80 leading-relaxed">
                Explore our internal resource hub for governance updates, FAQs, and recordings of ownership briefings. Team members can also reach the stewardship working group through internal channels for questions about participation or benefits.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h2 className="font-title text-4xl font-bold text-black/90">Holistic Welfare Programs</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Our welfare suite blends inclusive benefits, preventative health initiatives, and flexible support for families, caregivers, and communities. Every program is co-designed with employee panels to stay relevant to evolving needs.
            </p>
            <div className="space-y-4">
              {programs.map((program) => (
                <div key={program.name} className="rounded-3xl bg-white border border-black/10 p-6">
                  <h3 className="font-title text-2xl font-semibold text-black/90">{program.name}</h3>
                  <p className="text-black/70 leading-relaxed">{program.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-black/10 p-8 space-y-6">
            <h2 className="font-title text-3xl font-bold text-black/90">Support Services</h2>
            <ul className="space-y-4 text-black/80">
              <li className="flex items-start space-x-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-ncs"></span>
                <p>24/7 mental wellness concierge with multilingual therapists and anonymous chat pathways.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-olivine"></span>
                <p>On-demand financial planning with certified advisors and peer-led equity literacy circles.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-light-green"></span>
                <p>Community care grants supporting caregiving, relocation, and education pursuits.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-orange-web"></span>
                <p>Hybrid collaboration studios with wellness rooms, childcare pop-ups, and inclusive accessibility design.</p>
              </li>
            </ul>
            <div className="pt-2">
              <button className="bg-red-ncs text-white px-6 py-3 rounded-full font-title font-medium hover:bg-red-ncs/90 transition-colors">
                Explore Welfare Charter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeWelfare;
