import React from 'react';
import TechStackDetailTemplate from './TechStackDetailTemplate';

interface StackProps {
  setCurrentPage: (page: string) => void;
}

const WampStack: React.FC<StackProps> = ({ setCurrentPage }) => {
  return (
    <TechStackDetailTemplate
      name="WAMP Stack"
      kicker="Windows-first delivery"
      headline="Connected enterprise experiences across Windows, web, and edge"
      description="We modernise Windows-native ecosystems by uniting PHP, .NET, and device management disciplines. Our WAMP teams harmonise enterprise authentication with beautiful, reliable UX."
      heroImage="https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1600&q=80"
      appTypes={[
        {
          title: 'Employee and partner portals',
          description:
            'Craft intranets and partner hubs tightly integrated with Azure AD, Microsoft 365, and existing ERP platforms.',
        },
        {
          title: 'Field service applications',
          description:
            'Deliver rugged, offline-first tablet and mobile apps that sync with on-premise systems and IoT sensors.',
        },
        {
          title: 'Industrial IoT command centres',
          description:
            'Visualise telemetry from sensors, PLCs, and devices through secure dashboards with proactive alerting.',
        },
        {
          title: 'Legacy system revitalisation',
          description:
            'Wrap existing Windows and PHP solutions with APIs, modern UI layers, and automated deployment pipelines.',
        },
      ]}
      capabilities={[
        'Windows Server, IIS, and Azure hybrid infrastructure expertise',
        'Progressive web app patterns optimised for Edge and desktop',
        'Secure single sign-on, MFA, and conditional access design',
        'Device management integrations with Intune and Microsoft Defender',
      ]}
      accelerators={[
        'Governed component libraries aligned to Fluent Design',
        'Zero-trust adoption roadmaps and security tabletop exercises',
        'IoT gateway templates bridging OPC-UA, MQTT, and REST',
        'Lifecycle automation for packaging, updates, and monitoring',
      ]}
      setCurrentPage={setCurrentPage}
      cta={{ label: 'Plan a WAMP modernisation', target: 'quote' }}
    />
  );
};

export default WampStack;
