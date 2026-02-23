import ExperienceCard from './ExperienceCard';

const positions = [
  {
    title: 'Solutions Designer',
    date: 'Feb. de 2020 – present',
    description:
      "<br>Technical member of the sales team, <br><br>Responsible for: <br>- Analyzing and discovering potential clients' needs and opportunities. <br>- Proposing functional and technical solutions. <br>- Optimizing technical estimation processes and SLAs in order to maximize stakeholders' satisfaction.",
  },
  {
    title: 'Engineering Manager',
    date: 'Aug. de 2019 – present',
    description:
      '<br>- Coordinating multidisciplinary groups for Wolox technical objectives. <br>- Defining tech standards. <br>- Interviewing Senior and Semi-Senior. <br>- Participating in Sales meetings as Technical Advisor. <br><br>Responsible for: <br>- Achieving the Area objectives. <br>- Optimizing technical quality. <br>- Correcting delivery of Front End projects.',
  },
  {
    title: 'Front End Technical Leader',
    date: 'Oct. de 2018 – Aug. de 2019',
    description:
      '<br>- Coordinating different Front-End internal projects. <br>- Lead the Front-End development of the projects I participate. <br>- Dictating internal and external tech talks. <br>- Taking semi senior interviews and optimizing interview process. <br><br>Responsible for: <br>- Technical support in different projects <br>- Front End developers career path <br>- Implementation of new tooling for the department',
  },
  {
    title: 'Project Leader',
    date: 'Jun. de 2018 – Aug. de 2019',
    description:
      "<br>- Coordinating development teams up to 9 people. <br>- Making middle and long term project plans. <br>- Leading Scrum ceremonies (plannings, dailies, demo & retro). <br>- Having constant communication with Clients and Product Owners. <br>- Participating in product building and product focus processes. <br><br>Responsible for: <br>- Completing projects milestones <br>- Presenting tailor-made solutions to the client. <br>- Giving constant feedback and respond to clients' doubts about the daily progress. <br>- Giving demonstrations to the client of principal development features. <br>- Taking care of team career development.",
  },
  {
    title: 'Lead Developer',
    date: 'Feb. de 2018 – Oct. de 2019',
    description:
      '<br>- Providing technical support to different projects. <br>- Participating in Junior interviews. <br>- Investigating new technologies regarding Front-End development. <br><br>Responsible for: <br>- Correct development standards of the projects I participate in.',
  },
  {
    title: 'Software Developer',
    date: 'Jun. de 2017 – Feb. de 2018',
    description:
      '<br>Front-End developer. Projects involving education, e-commerce and banking industries and others. Tech stack: JS, CSS, HTML, Heroku / AWS, React, React Native, Angular & Vue.',
  },
];

export default function ExperienceSection() {
  return (
    <div className="flex flex-col h-full justify-center">
      <h1 className="text-[60px] leading-[62px]" style={{ fontFamily: 'var(--font-bebas), cursive' }}>
        Job experience
      </h1>
      <div className="grid grid-cols-3 gap-5 max-[900px]:flex max-[900px]:flex-col">
        {positions.map((position) => (
          <ExperienceCard key={position.title} position={position} />
        ))}
      </div>
    </div>
  );
}
