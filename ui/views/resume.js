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
                position="Software Engineer, Livestreams"
                link={LINKS.baton}
                list={[
                  'Spearheaded the deployment of an AI-native MCP server for 8K+ users to execute on-chain transactions',
                  'Built a custom HLS/DVR livestream player for mobile and web app serving 30K+ DAU, reducing load time by 34%',
                  'Engineered real-time participant and cohost stage interactions increasing hosting time by 14% using WS and NATS',
                  'Implemented XP and DevX tooling, like a multi-context LaunchDarkly XP system, increasing XP accuracy by 21%',
                  'Reduced React Native build time by 28%, FPS by 40%, and memory allocation by 30%, resulting in +16% view time'
                ]}
              />
              <ResumeItem
                date="Apr. 2024 - Oct. 2025"
                company="August Digital"
                position="Lead Software Engineer"
                link={LINKS.augustdigital}
                list={[
                  'Scaled an institutional web3 dashboard using ReactJS alongside the SDK that increased AUM by 3x to $600M+',
                  'Led a team of 4 developers to build 4 apps powered by a REST API, RPC requests, and subgraphs for 5K+ users',
                  'Created 3 Telegram bots for 50+ institutional users to monitor accounts, recall contracts, and execute transactions daily',
                  'Designed custom WalletConnect enabling users to execute transactions outside our app, increasing volume by +20%',
                  'Integrated API keys, 30+ EVM networks, and Solana across the JS stack enabling 20+ partners to integrate'
                ]}
              />
              <ResumeItem
                date="Oct. 2023 - Apr. 2024"
                company="Rebar Labs"
                position="Founding Engineer & Advisor"
                link={LINKS.rebarlabs}
                list={[
                  'Engineered a Grafana/Dune-like frontend in a few months and scaled to 110+ users in its alpha phase',
                  'Architected backend infrastructure that ingested data from 12+ sources and served it via a subgraph and AWS Athena',
                  'Designed and shipped a real-time Bitcoin mempool explorer with analytics and data pipeline infrastructure',
                  'Led product development, CI/CD pipeline design, and hiring to scale the team while maintaining velocity and quality'
                ]}
              />
              <ResumeItem
                date="Aug. 2022 - Feb. 2024"
                company="Suave Tech Solutions"
                position="Founder & Tech Consultant"
                link={LINKS.suavetech}
                list={[
                  'Engineered 60+ CRUD apps, automations, and SDKs with Next.js, n8n, React, Node, Solidity, FastAPI, and more',
                  'Identified hundreds of business issues, gaps, and opportunities for optimization enabling companies to scale and save',
                  'Consulted clients on topics from scaling AI sales to 50+ concurrent calls with WebRTC to writing 100+ specs',
                  'Managed a team of 6 devs and 1 BD focusing on building web3, automations, and ecomm generating +600k/yr'
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
                      'Piloted a ReactJS + Express dashboard to 4 local governments to manage 12K+ individuals\u2019 sensitive healthcare data',
                      'Consulted local governments/clients on 100+ improvements and new features with +65% client approval rating',
                      'Collaborated with team lead and district manager weekly to scope sprints and discuss new ideas and bottlenecks',
                      'Worked in a small team of 6 within an Agile framework using Confluence/Jira to tackle tasks efficiently'
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
