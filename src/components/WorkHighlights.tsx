import React from 'react';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

interface WorkHighlightsProps {
  setCurrentPage: (page: string) => void;
}

const WorkHighlights: React.FC<WorkHighlightsProps> = ({ setCurrentPage }) => {
  const featured = caseStudies.slice(0, 3);
  // A visual strip of four shots, chosen for how they read at thumbnail size.
  const stripOrder = [
    '/work/survival-series.png',
    '/work/virtual-court.png',
    '/work/railway-millionaires.png',
    '/work/double-cross.png',
  ];
  const allShots = caseStudies.flatMap((study) => study.shots ?? []);
  const strip = stripOrder
    .map((src) => allShots.find((shot) => shot.src === src))
    .filter((shot): shot is NonNullable<typeof shot> => Boolean(shot));

  return (
    <section className="py-24 bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl lg:text-5xl font-title font-bold text-black">Recent work</h2>
          <p className="mt-4 text-xl font-body text-black/70 leading-relaxed">
            A point of sale that survives an outage, a quiz that earns a registration, a scanner that reads
            handwriting. Three of the systems we have shipped.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((study) => (
            <button
              key={study.name}
              onClick={() => setCurrentPage('work')}
              className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8 text-left transition-colors hover:border-black/30"
            >
              <p className="text-sm font-body uppercase tracking-[0.25em] text-red-ncs">{study.client}</p>
              <h3 className="mt-3 text-2xl font-title font-bold text-black">{study.name}</h3>
              <p className="mt-4 font-body text-black/70 leading-relaxed">{study.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {study.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full bg-orange-100 px-3 py-1 text-sm font-body text-black/70">
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {strip.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strip.map((shot) => (
              <button
                key={shot.src}
                onClick={() => setCurrentPage('work')}
                className="overflow-hidden rounded-2xl border border-black/10 bg-black"
                aria-label={`See all work — ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-44 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}

        <div className="mt-12">
          <button
            onClick={() => setCurrentPage('work')}
            className="inline-flex items-center rounded-full border border-black px-6 py-3 font-title font-medium text-black transition-colors hover:bg-orange-200"
          >
            See all work
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkHighlights;
