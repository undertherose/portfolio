import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ramp,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'projects',
  //   title: 'Projects',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'UI/UX Design',
    icon: ux,
    id: 'uiux',
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
    id: 'frontend',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    id: 'backend',
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
    id: 'prototyping',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'UI/UX Developer',
    company_name: 'Ramp Financial',
    icon: ramp,
    iconBg: '#8db971',
    date: 'Oct 2021 - Present',
    shadow: '#D4E8C8 0px 10px 15px -3px, #D4E8C8 0px 4px 6px -2px',
  },
  {
    title: 'UI/UX Developer',
    company_name: 'MiaoSiLa',
    icon: microverse,
    iconBg: '#9c8cca',
    date: 'Dec 2020 - Aug 2021',
    shadow: '#DDDCF9 0px 10px 15px -3px, #DDDCF9 0px 4px 6px -2px',
  },
  {
    title: 'UI/UX Developer',
    company_name: 'Binance US',
    icon: kelhel,
    iconBg: '#F7C874',
    date: 'June 2018 - May 2020',
    shadow: '#f7f3cb 0px 10px 15px -3px, #f7f3cb 0px 4px 6px -2px',
  },
  {
    title: 'Front-End Developer',
    company_name: 'RealSelf',
    icon: dcc,
    iconBg: '#f5c9c8',
    date: 'June 2017 - May 2018',
    shadow: '#F9D7D7 0px 10px 15px -3px, #F9D7D7 0px 4px 6px -2px',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };