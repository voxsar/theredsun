import React from 'react';
import { ArrowRight, Layers, Rocket, Sparkles } from 'lucide-react';

interface TechStacksProps {
  setCurrentPage: (page: string) => void;
}

const stacks = [
  {
    id: 'tech-stack-lean',
    name: 'LEAN Stack',
    tagline: 'Rapid validation with empathetic user discovery and lean delivery rituals.',
    description:
      'Ideal for ventures exploring new markets or internal teams seeking to test concepts quickly. Our LEAN practice pairs iterative product coaching with purposeful automation to keep launches human-centred.',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Design sprints paired with ethical AI research loops',
      'Cross-functional pods guiding MVPs from concept to insight',
      'Observability playbooks tuned for rapid course correction',
    ],
    cta: 'Explore LEAN Engagements',
  },
  {
    id: 'tech-stack-mean',
    name: 'MEAN Stack',
    tagline: 'Cloud-native JavaScript platforms crafted for immersive, scalable digital journeys.',
    description:
      'Our MEAN specialists shape cohesive TypeScript experiences across MongoDB, Express, Angular, and Node. We coach teams to evolve multi-channel products with responsibility and imagination.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Full-stack TypeScript acceleration with shared design systems',
      'Realtime collaboration and media streaming accelerators',
      'Performance, security, and sustainability dashboards baked in',
    ],
    cta: 'Dive into MEAN Delivery',
  },
  {
    id: 'tech-stack-lamp',
    name: 'LAMP Stack',
    tagline: 'Modernised PHP ecosystems infused with automation, accessibility, and trust.',
    description:
      'We rejuvenate mission-critical platforms with Laravel, WordPress, and bespoke PHP frameworks. Our approach balances reliability, compliance, and captivating storytelling.',
    image:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Composable content architectures and globalised localisation',
      'Commerce, membership, and community accelerators',
      'DevSecOps pipelines orchestrated for regulated industries',
    ],
    cta: 'Reimagine LAMP Solutions',
  },
  {
    id: 'tech-stack-wamp',
    name: 'WAMP Stack',
    tagline: 'Windows-native craftsmanship connecting desktop, mobile, and IoT experiences.',
    description:
      'From industrial control rooms to field service, our WAMP engineering unifies Windows, Apache, MySQL, and PHP with modern UX and low-code augmentation.',
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Secure intranet and partner portals with Azure Active Directory',
      'Offline-first field applications and rugged device enablement',
      'Data visualisation layers bridging Power BI and custom dashboards',
    ],
    cta: 'Activate WAMP Innovation',
  },
];

const TechStacks: React.FC<TechStacksProps> = ({ setCurrentPage }) => {
  return (
    <section className="bg-orange-100 min-h-screen py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center space-x-2 text-red-ncs font-medium uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Technology ecosystems</span>
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-title font-bold text-black">Crafted stacks for courageous teams</h1>
          <p className="mt-6 text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Our architects co-design technology foundations that balance innovation with accountability. Explore the
            delivery patterns, cultural practices, and accelerators behind each of our signature stacks.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {stacks.map((stack) => (
            <article
              key={stack.id}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)]"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr]">
                <div className="p-10 flex flex-col justify-between space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 text-sm uppercase tracking-[0.2em] text-red-ncs/80">
                      <Rocket className="w-4 h-4" />
                      <span>{stack.name}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-title font-bold text-black">{stack.tagline}</h2>
                    <p className="text-base md:text-lg text-black/70">{stack.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {stack.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start space-x-3 text-black/80">
                        <Sparkles className="w-5 h-5 mt-1 text-red-ncs" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button
                      onClick={() => setCurrentPage(stack.id)}
                      className="inline-flex items-center space-x-2 rounded-full bg-red-ncs px-6 py-3 font-title text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-red-ncs/90"
                    >
                      <span>{stack.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="relative h-full min-h-[280px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url(${stack.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
