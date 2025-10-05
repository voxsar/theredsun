import React from 'react';
import TechStackDetailTemplate from './TechStackDetailTemplate';

interface StackProps {
  setCurrentPage: (page: string) => void;
}

const LeanStack: React.FC<StackProps> = ({ setCurrentPage }) => {
  return (
    <TechStackDetailTemplate
      name="LEAN Stack"
      kicker="Lean experimentation"
      headline="Human-centred MVPs that learn in weeks, not quarters"
      description="We partner with founders and intrapreneurs to validate propositions with empathy. From hypothesis design to continuous delivery, our LEAN squads keep feedback loops short and purposeful."
      heroImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      appTypes={[
        {
          title: 'Customer discovery platforms',
          description:
            'Launch insight-rich portals that blend surveys, diary studies, and analytics to surface signals for next-sprint decisions.',
        },
        {
          title: 'Operational experimentation apps',
          description:
            'Spin up internal workflow pilots connecting Airtable, low-code tooling, and bespoke services to validate process change.',
        },
        {
          title: 'Ethical AI proof-of-concepts',
          description:
            'Test AI-driven experiences with governance guardrails, bias audits, and curated datasets aligned with your principles.',
        },
        {
          title: 'Service design companion apps',
          description:
            'Equip design teams with journey orchestration tools that keep human stories at the centre of iteration.',
        },
      ]}
      capabilities={[
        'Product strategy facilitation and hypothesis backlogs',
        'Design sprint coaching with inclusive research methods',
        'Serverless and headless engineering for rapid assembly',
        'Observability and analytics dashboards tailored for MVPs',
      ]}
      accelerators={[
        'MVP telemetry starter kits with privacy-first instrumentation',
        'Ethical AI readiness assessments with cross-functional workshops',
        'Reusable design system foundations for rapid prototyping',
        'Innovation governance frameworks aligned to your culture',
      ]}
      setCurrentPage={setCurrentPage}
      cta={{ label: 'Co-create a LEAN roadmap', target: 'quote' }}
    />
  );
};

export default LeanStack;
