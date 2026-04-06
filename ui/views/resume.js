'use client';

import { ResumeItem } from '@/ui/components';
import { LINKS } from '@/utils/constants';
import { useState } from 'react';

const Resume = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="section resume section_" id="resume">
      <div className="content pt-4">
        <div className="cols pt-4">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-2">Experience</div>
            </div>
            <div className="resume-items">
              <ResumeItem
                date="Oct. 2025 - Apr. 2026"
                company="Baton Corporation"
                position="Software Engineer"
                link={LINKS.baton}
                list={[
                  'Built a custom HLS/DVR livestream player for a cross-platform React Native app serving 30K+ daily active users',
                  'Developed full-stack features across backend (NestJS/AWS), mobile (React Native), and web (Next.js)',
                  'Engineered scalable infrastructure on AWS (EC2, Fargate) using NestJS for real-time streaming and microservices',
                  'Built an AI-native MCP server via on-chain functions and our API, enabling users to execute transactions by prompt'
                ]}
              />
              <ResumeItem
                date="Feb. 2025 - Present"
                company="Rebar Labs"
                position="Co-Founder & Software Engineer"
                link={LINKS.rebarlabs}
                list={[
                  'Built the first MEV-protected transaction endpoint for BTC, shielding users from front-running and sandwich attacks',
                  'Architected and shipped a real-time Bitcoin mempool explorer with analytics and data pipeline infrastructure',
                  'Developed core infrastructure in TypeScript and Rust powering APIs, RPC services, and blockchain data pipelines',
                  'Led product development, CI/CD pipeline design, and hiring to scale the team while maintaining velocity and quality'
                ]}
              />
              <ResumeItem
                date="Feb. 2024 - Oct. 2025"
                company="August Digital"
                position="Lead Software Engineer"
                link={LINKS.augustdigital}
                list={[
                  'Built an institutional DeFi dashboard in React/TypeScript with a client SDK, increasing AUM by 3x to $600M+',
                  'Led a team of 4 engineers to build apps powered by REST APIs, JSON-RPC nodes, and subgraphs serving 5K+ users',
                  'Built 2 Telegram bots for 50+ institutional users to query on-chain data and execute smart contract transactions',
                  'Implemented WalletConnect protocol integration enabling users to interact with external dApps via proprietary wallets'
                ]}
              />
              <ResumeItem
                date="Aug. 2022 - Present"
                company="Suave Tech Solutions"
                position="Founder & Software Engineer"
                link={LINKS.suavetech}
                list={[
                  'Engineered 30+ full-stack apps and SDKs using React, Node.js, Solidity, Python, Rust, LUA, and TypeScript',
                  'Designed and delivered scalable infrastructure solutions with cross-functional teams of engineers and stakeholders',
                  'Consulted clients on scaling distributed systems, real-time communication (WebRTC), and developer documentation',
                  'Managed 6 developers building web3 apps, automations, and e-commerce platforms while leading client engagements'
                ]}
              />
              {showMore && (
                <>
                  <ResumeItem
                    date="Dec. 2021 - Dec. 2023"
                    company="DataEarn"
                    position="Co-Founder & Software Engineer"
                    link={LINKS.dataearn}
                    list={[
                      'Architected a universal data parser to clean, normalize, and interpret JSON, HTML, and CSV from platform APIs',
                      'Built a Next.js/TypeScript app for users to view, manage, and monetize their personal data with secure auth flows',
                      'Built a Django backend with PostgreSQL and cron-job microservices for automated data ingestion and processing'
                    ]}
                  />
                  <ResumeItem
                    date="June 2021 - Aug. 2022"
                    company="IBM iX"
                    position="Consultant & Software Engineer"
                    link={LINKS.ibmix}
                    list={[
                      'Built a React/Express dashboard to manage thousands of individuals\u2019 sensitive healthcare records with RBAC',
                      'Collaborated with and pitched to local governments/clients on new features of the dashboard',
                      'Worked in an Agile framework using Confluence and Jira for sprint planning, code reviews, and CI/CD workflows'
                    ]}
                  />

                  <ResumeItem
                    date="June 2020 - Aug. 2020"
                    company="United Parcel Service (UPS)"
                    position="Web Application Intern"
                    link={LINKS.ups}
                    list={[
                      'Designed and developed an admin dashboard with ExtJS and C# to optimize data transfer operations for executives',
                      'Developed 15+ stored procedures using SQL which were utilized in production for the administrator dashboard',
                      'Demonstrated the administrator dashboard to 20+ executives and district managers'
                    ]}
                  />
                  <ResumeItem
                    date="June 2019 - Aug. 2019"
                    company="Smile Direct Club"
                    position="UX/UI Developer Intern"
                    link={LINKS.smiledirectclub}
                    list={[
                      'Revamped their user-generated content widget, utilizing VueJS and internal APIs to display real-time data',
                      'Increased developer productivity by 30% by creating a shared component design system and front-end style guide',
                      'Programmed several Jest unit tests and created Confluence guide for future developers to easily test'
                    ]}
                  />
                  <ResumeItem
                    date="Sept. 2018 - Sept. 2020"
                    company="Raeri"
                    position="Lead Front-End Developer"
                    link={LINKS.raeri}
                    list={[
                      'Created an admin dashboard using AngularJS and RESTful APIs with real-time data visualization for client logistics',
                      "Developed entire website purposed for brand relaunch as presented on Bloomberg's Businessweek",
                      'Presented new UI design to C-level board that immediately helped increase marketing ROI on website by 20%'
                    ]}
                  />
                  <ResumeItem
                    date="May 2018 - Aug. 2018"
                    company="AGCO Corporation"
                    position="IT/Finance Intern"
                    link={LINKS.agco}
                    list={[
                      'Programmed and repaired instructional procedures on Google Glass for over 400 employees using Proceedix',
                      'Coded VBA script for floor audits saving the Continuous Improvement Team over $200,000 yearly',
                      'Supported and communicated with 100+ warehouse employees with all Google Glass related technical issues'
                    ]}
                  />
                </>
              )}

              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="btn-text"
              >
                {showMore ? 'show less' : 'show more'}
              </button>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-2">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">Sept. 2017 - May 2021</div>
                <div className="name">New York University</div>
                <p>
                  B.A. in Economics and a Joint-Minor in Computer Science and
                  Mathematics from New York University&apos;s College of Arts
                  and Sciences
                </p>
              </div>
            </div>
            <div className="title mt-4 pt-4">
              <div className="title_inner mb-1">Extracurricular</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">Sept. 2018 - March 2021</div>
                <div className="name">Founder | NYU Blockchain Club</div>
                <p>
                  Co-founded the club to shed light on the possibilities
                  blockchain technology brings to the digital realm and
                  financial sector
                </p>
              </div>
              <div className="resume-item">
                <div className="date">Jan. 2018 - March 2021</div>
                <div className="name">
                  Member | Quantitative Finance Society
                </div>
                <p>
                  Discussed and meeting about finance-related topics and issues,
                  as well as cryptocurrencies, twice a week
                </p>
              </div>
              <div className="resume-item">
                <div className="date">Aug. 2017 - May 2019</div>
                <div className="name">
                  Goalkeeper | NYU Men&apos;s Varsity Soccer
                </div>
                <ul className="dotted-list">
                  <li>
                    Competed in the NCAA Division III and NCAA National
                    Tournament, achieving UAA All-Academic
                  </li>
                  <li>
                    Dedicated over 35 hours a week to practice, lifting, team
                    meetings, traveling, and competitions nation-wide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
