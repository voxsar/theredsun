import React from 'react';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';


interface WorkProps {
  setCurrentPage: (page: string) => void;
}

const Work: React.FC<WorkProps> = ({ setCurrentPage }) => {
  return (
    <section id="work" className="py-24 bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-title font-bold text-black mb-6">Selected work</h2>
          <p className="text-xl font-body text-black/70 leading-relaxed">
            Systems we have designed, built and shipped — point of sale and inventory, learning platforms,
            document automation, and ecommerce. Each one is described by what it had to solve.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className={`flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8 lg:p-10 ${
                study.shots ? 'lg:col-span-2' : ''
              }`}
            >
              <p className="text-sm font-body uppercase tracking-[0.25em] text-red-ncs">{study.client}</p>
              <h3 className="mt-3 text-3xl font-title font-bold text-black">{study.name}</h3>
              <p className="mt-4 font-body text-lg text-black/80 leading-relaxed">{study.summary}</p>

              <p className="mt-6 font-body text-black/70 leading-relaxed border-l-2 border-red-ncs/40 pl-4">
                {study.problem}
              </p>

              <ul className="mt-6 space-y-3">
                {study.built.map((item) => (
                  <li key={item} className="flex items-start font-body text-black/70">
                    <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-ncs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {study.shots && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {study.shots.map((shot) => (
                    <figure key={shot.src} className="space-y-2">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="aspect-video w-full rounded-xl border border-black/10 bg-black object-cover object-center"
                      />
                      <figcaption className="font-body text-sm text-black/60">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-100 px-3 py-1 text-sm font-body text-black/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {study.link && (
                  <a
                    href={study.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center font-title font-medium text-red-ncs transition-colors hover:text-red-ncs/80"
                  >
                    {study.link.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <button
            onClick={() => setCurrentPage('quote')}
            className="inline-flex items-center rounded-full bg-red-ncs px-8 py-4 font-title font-medium text-white transition-colors hover:bg-red-ncs/90"
          >
            Tell us about your project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
