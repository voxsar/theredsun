import React from 'react';
import TechStackDetailTemplate from './TechStackDetailTemplate';

interface StackProps {
  setCurrentPage: (page: string) => void;
}

const MeanStack: React.FC<StackProps> = ({ setCurrentPage }) => {
  return (
    <TechStackDetailTemplate
      name="MEAN Stack"
      kicker="Full-stack JavaScript"
      headline="Composable TypeScript platforms that scale with your audience"
      description="Our MEAN guild blends product strategy, design systems, and cloud automation to nurture resilient customer experiences. We help teams unlock velocity across MongoDB, Express, Angular, and Node."
      heroImage="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80"
      appTypes={[
        {
          title: 'Digital experience platforms',
          description:
            'Craft editorial, commerce, and membership journeys with component-driven frontends and composable back-office tooling.',
        },
        {
          title: 'Realtime collaboration products',
          description:
            'Deliver event-driven whiteboards, messaging, and co-creation tools with websockets, WebRTC, and thoughtful moderation.',
        },
        {
          title: 'Data-rich analytics portals',
          description:
            'Visualise streaming datasets with Angular and D3, blending interactive dashboards and alerting that scale globally.',
        },
        {
          title: 'API-first partner ecosystems',
          description:
            'Launch secure developer portals and monetised APIs with rate-limiting, subscription workflows, and usage insights.',
        },
      ]}
      capabilities={[
        'TypeScript-first engineering with shared UI libraries',
        'Microservices architecture and GraphQL federation',
        'Automated testing pipelines spanning API, UI, and accessibility',
        'Cost, carbon, and performance optimisation playbooks',
      ]}
      accelerators={[
        'Design system starter kits with Storybook governance',
        'Infrastructure as Code templates for Kubernetes and serverless',
        'Observability bundles integrating OpenTelemetry and Elastic',
        'Compliance frameworks for SOC 2 and GDPR readiness',
      ]}
      setCurrentPage={setCurrentPage}
      cta={{ label: 'Schedule a MEAN discovery', target: 'quote' }}
    />
  );
};

export default MeanStack;
