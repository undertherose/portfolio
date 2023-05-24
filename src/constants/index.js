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
  realself,
  binance,
  maoer,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experinces',
  },
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
    title: 'UX Developer',
    company_name: 'Ramp Financial',
    icon: ramp,
    iconBg: '#8db971',
    date: 'Oct 2021 - Present',
    shadow: '#D4E8C8 0px 10px 15px -3px, #D4E8C8 0px 4px 6px -2px',
  },
  {
    title: 'UX Developer',
    company_name: 'MiaoSiLa',
    icon: maoer,
    iconBg: '#f5c9c8',
    date: 'Dec 2020 - Aug 2021',
    shadow: '#F9E5E5 0px 10px 15px -3px, #F9E5E5 0px 4px 6px -2px',
    
  },
  {
    title: 'Software Developer',
    company_name: 'Binance US',
    icon: binance,
    iconBg: '#F7C874',
    date: 'June 2018 - May 2020',
    shadow: '#f7f3cb 0px 10px 15px -3px, #f7f3cb 0px 4px 6px -2px',
  },
  {
    title: 'Front-End Developer',
    company_name: 'RealSelf',
    icon: realself,
    iconColor: '#ffffff',
    iconBg: '#9c8cca',
    date: 'June 2017 - May 2018',
    shadow: '#DDDCF9 0px 10px 15px -3px, #DDDCF9 0px 4px 6px -2px',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hamburger',
    description: 'An infographic about hamburgers. Some fun facts, some nutrition data, some history knowledge, how burgers changing in the US and vary around the world. And, how to make a burger.',
    skills: 'Infographic, Visual Information Design & Data Visualization.',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'mongodb',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'tailwind',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio3,
    repo: '/',
    demo: '/',
  },
  {
    id: 'project-2',
    name: 'Calender',
    description:
      'A pre-installed calender app that comes with a new dual-screen phone system.',
    skills: 'Product, Interface, Interaction Design',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'restapi',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'scss',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio1,
    repo: '/',
    demo: '/',
  },
  {
    id: 'project-3',
    name: 'Empathy',
    description: 'A keyboard application that helps people communicate their thoughts and emotions with each other using appropriate words and languages.',
    skills: 'Emotion Problem-Solving App Design',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio5,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Melon',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    skills: 'PUI/UX App & Interaction Design',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio4,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Arcode',
    description:
      'A gaming website and community for young people that offers games, a registration system, a leaderboard and a comment community.',
    skills: 'Web Design, Graphic Design & Front-end Development',
    //   tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio2,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
