import React from 'react';

// NOTE: This page previously listed specific ownership percentages, sabbatical
// lengths, bonus multipliers and facilities that could not be substantiated.
// It has been reduced to commitments the company can stand behind. Replace
// these with concrete, verifiable details as policies are formalised.

const EmployeeWelfare = () => {
  const commitments = [
    {
      title: 'People share in what they build',
      description:
        'The teams who deliver our work share in its success. We structure engagements so that the value created reaches the people who created it, rather than stopping at the top of the org chart.',
    },
    {
      title: 'Decisions are explained, not announced',
      description:
        'Workload, scheduling and reinvestment decisions are discussed with the people they affect, and the reasoning behind them is written down and shared.',
    },
    {
      title: 'Learning is part of the work, not after it',
      description:
        'Time to learn a new tool, language or craft is planned into project allocations instead of being left to evenings and weekends.',
    },
  ];

  const practices = [
    {
      name: 'Sustainable delivery',
      details:
        'We scope against the capacity we actually have. Deadlines that can only be met by overtime are renegotiated, not absorbed quietly.',
    },
    {
      name: 'Clear progression',
      details:
        'Everyone should know what growing here looks like: what changes, what it requires, and how the decision gets made.',
    },
    {
      name: 'Flexible working',
      details:
        'We care where the work ends up, not where it was typed. Hours flex around caregiving, study and the realities people are carrying.',
    },
  ];

  return (
    <section className="bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-24 space-y-20">
        <div className="text-center space-y-6">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-black font-medium border border-black/10">
            Employee Welfare
          </span>
          <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90">
            How we treat the people who build this
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-body text-black/70 leading-relaxed">
            Good software comes from people who are not exhausted, not kept in the dark, and not shut out of
            what their work produces. These are the commitments we hold ourselves to.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="h-full rounded-3xl bg-white border border-black/10 p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] space-y-4"
            >
              <h2 className="font-title text-2xl font-semibold text-black/90">{commitment.title}</h2>
              <p className="text-black/70 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[3rem] bg-black text-white p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-ncs/40 blur-3xl rounded-full" aria-hidden />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-olivine/40 blur-3xl rounded-full" aria-hidden />
          <div className="relative max-w-3xl space-y-6">
            <h2 className="font-title text-4xl font-bold">Why this is on a public page</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Because it should be possible to hold us to it. If you are considering working with us, or
              working here, these commitments are the ones to ask about — and the ones to tell us about if we
              fall short of them.
            </p>
            <a
              href="mailto:info@theredsun.com?subject=Working%20at%20The%20Red%20Sun"
              className="inline-flex rounded-full bg-red-ncs px-6 py-3 font-title font-medium text-white transition-colors hover:bg-red-ncs/90"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-title text-4xl font-bold text-black/90">In day-to-day practice</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              The parts of the above that show up in an ordinary working week.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {practices.map((practice) => (
              <div key={practice.name} className="rounded-3xl bg-white border border-black/10 p-8">
                <h3 className="font-title text-2xl font-semibold text-black/90 mb-3">{practice.name}</h3>
                <p className="text-black/70 leading-relaxed">{practice.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeWelfare;
