import React from 'react';
import TechStackDetailTemplate from './TechStackDetailTemplate';

interface StackProps {
  setCurrentPage: (page: string) => void;
}

const LampStack: React.FC<StackProps> = ({ setCurrentPage }) => {
  return (
    <TechStackDetailTemplate
      name="LAMP Stack"
      kicker="PHP revitalisation"
      headline="Sustainable platforms powered by modern PHP craftsmanship"
      description="From heritage intranets to global publishing platforms, we evolve LAMP estates with automation, accessibility, and security at the core."
      heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
      appTypes={[
        {
          title: 'Digital publishing ecosystems',
          description:
            'Upgrade content-heavy destinations with headless WordPress, Drupal, or Laravel, seamlessly connected to marketing suites.',
        },
        {
          title: 'Commerce and subscription platforms',
          description:
            'Launch multi-region storefronts, membership hubs, and donation portals tuned for conversions and reliability.',
        },
        {
          title: 'Regulated sector portals',
          description:
            'Replatform healthcare, finance, and public service portals with audited workflows and adaptive authentication.',
        },
        {
          title: 'Knowledge and learning systems',
          description:
            'Deliver LMS and knowledge bases with multi-language support, adaptive search, and progressive web app experiences.',
        },
      ]}
      capabilities={[
        'Laravel and Symfony engineering with domain-driven design',
        'Composable CMS architectures with GraphQL/REST bridges',
        'Automated QA covering accessibility, localisation, and security',
        'Infrastructure modernisation across AWS, Azure, and on-prem',
      ]}
      accelerators={[
        'Migration toolkits for WordPress, Drupal, and legacy PHP apps',
        'Component libraries aligned to WCAG 2.2 AA accessibility',
        'Blue-green deployment playbooks with rollback readiness',
        'Data privacy assessments and consent orchestration frameworks',
      ]}
      setCurrentPage={setCurrentPage}
      cta={{ label: 'Discuss LAMP transformation', target: 'quote' }}
    />
  );
};

export default LampStack;
