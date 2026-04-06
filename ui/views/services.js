import { TechnologyHighlight } from '@/ui/components';

const SERVICES_ITEMS = [
  {
    img: 'react-logo.svg',
    desc: 'You name it - React, Next.js, React Native, VueJS, AngularJS, ExtJS. If it renders UI, I have probably shipped something with it.',
    text: 'Frontend Frameworks'
  },
  {
    img: 'api-logo.svg',
    desc: 'Built and contributed to many Typescript, Python, and Rust backend services using popular frameworks.',
    text: 'Rest APIs & Web Sockets'
  },
  {
    img: 'aws-logo.svg',
    desc: "There's so much to learn with AWS, but setup and used plenty of their services like EC2, Fargate, and Kubernetes.",
    text: 'AWS Services'
  },
  {
    img: 'n8n-logo.svg',
    desc: 'Orchestrate CI/CD pipelines and automation workflows using n8n, github actions, Openclaw, Claude, etc.',
    text: 'Automation Workflows'
  },
  {
    img: 'foundry-logo.png',
    desc: "I'll say it now - Foundry is better than hardhat by a longshot. Much easier to navigate and really powerful.",
    text: 'Foundry / Anvil'
  },
  {
    img: 'network-logo.svg',
    desc: 'Started dabbling in this working at PintSwap, a peer-to-peer OTC exchange that facilitates slippage-free, OTC token trading.',
    text: 'Peer-to-Peer Networking'
  },
  {
    img: 'api-logo.svg',
    desc: 'Telegram bots, MCP servers, AI-native tooling - if it talks to an LLM or executes transactions by prompt, I have probably built it.',
    text: 'AI & Bot Development'
  },
  {
    img: 'network-logo.svg',
    desc: 'Subgraphs, JSON-RPC nodes, mempool explorers, WalletConnect integrations - the unglamorous plumbing that makes on-chain apps actually work.',
    text: 'Blockchain Infrastructure'
  }
];

const Services = () => {
  return (
    <div className="section service section_" id="services">
      <div className="content">
        <div className="title">
          <div className="title_inner">Familiar Technologies</div>
        </div>
        <div className="service-items">
          {SERVICES_ITEMS.map(({ img, desc, text }, i) => (
            <TechnologyHighlight
              src={`/images/logos/${img}`}
              description={desc}
              key={`services-${i}`}
            >
              {text}
            </TechnologyHighlight>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
