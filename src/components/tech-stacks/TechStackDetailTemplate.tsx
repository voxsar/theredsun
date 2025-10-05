import React from 'react';
import { ArrowLeft, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface AppType {
  title: string;
  description: string;
}

interface CTAConfig {
  label: string;
  target: string;
}

export interface TechStackDetailTemplateProps {
  name: string;
  kicker: string;
  headline: string;
  description: string;
  heroImage: string;
  appTypes: AppType[];
  capabilities: string[];
  accelerators: string[];
  setCurrentPage: (page: string) => void;
  cta?: CTAConfig;
}

const TechStackDetailTemplate: React.FC<TechStackDetailTemplateProps> = ({
  name,
  kicker,
  headline,
  description,
  heroImage,
  appTypes,
  capabilities,
  accelerators,
  setCurrentPage,
  cta,
}) => {
  return (
    <section className="bg-orange-100 min-h-screen py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <button
            onClick={() => setCurrentPage('tech-stacks')}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-red-ncs transition-colors hover:text-red-ncs/80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Tech Stacks</span>
          </button>

          <div className="flex items-center space-x-3 text-sm uppercase tracking-[0.3em] text-red-ncs/80">
            <Layers className="w-4 h-4" />
            <span>{name}</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-white">
          <div
            className="relative h-72 w-full"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.5) 100%), url(${heroImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-10 text-white">
                <p className="text-sm uppercase tracking-[0.4em] text-white/80">{kicker}</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-title font-bold">{headline}</h1>
                <p className="mt-4 max-w-3xl text-lg text-white/85">{description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-title font-bold text-black">Representative experiences</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {appTypes.map((app) => (
                    <div key={app.title} className="rounded-3xl border border-black/10 bg-orange-50/60 p-6">
                      <h3 className="text-xl font-semibold text-black">{app.title}</h3>
                      <p className="mt-3 text-sm text-black/70">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-title font-bold text-black">Core capabilities</h2>
                <ul className="mt-6 space-y-3">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex items-start space-x-3 text-black/80">
                      <Sparkles className="mt-1 w-5 h-5 text-red-ncs" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-red-ncs/10 via-white to-orange-100 p-8">
                <h2 className="text-xl font-title font-semibold text-black">Delivery accelerators</h2>
                <ul className="mt-4 space-y-3 text-black/80">
                  {accelerators.map((accelerator) => (
                    <li key={accelerator} className="flex items-start space-x-3">
                      <Sparkles className="mt-1 w-5 h-5 text-red-ncs" />
                      <span>{accelerator}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {cta && (
                <button
                  onClick={() => setCurrentPage(cta.target)}
                  className="w-full rounded-full bg-red-ncs px-6 py-4 text-lg font-title font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-red-ncs/90"
                >
                  <span className="inline-flex items-center justify-center space-x-2">
                    <span>{cta.label}</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              )}

              <div className="rounded-3xl border border-dashed border-red-ncs/40 bg-white p-8 text-sm text-black/70">
                <p>
                  Need to explore adjacent stacks? Return to the Tech Stacks landing to mix-and-match approaches for hybrid
                  programmes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackDetailTemplate;
