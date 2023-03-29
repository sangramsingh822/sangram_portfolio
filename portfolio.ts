import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Sangram Singh',
  title: "Hi all, I'm Sangram",
  description:
    "I'm a MERN stack developer. I specialize in building web applications using MongoDB, Express, React, and Node.js. I'm passionate about coding and enjoy working on challenging projects that push me to grow as a developer. ",
  resumeLink:
    'https://drive.google.com/file/d/1mmzXsjvE97Bgy7IjMTlfPzajjlrUGS-u/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'sangramsingh822',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/sangram-singh-40749a230/',
  github: 'https://github.com/sangramsingh822',
  instagram: 'https://www.instagram.com/sangram_singh822',
  facebook: 'https://www.facebook.com/sianghram',
  twitter: 'https://twitter.com/Ssangram11',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building RESTful APIs in Node & Express REST Framework'),
        emoji('⚡ Building   mobile application using React Native'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
       

        {
          skillName: 'Git',
          fontAwesomeClassName: 'mdi:git',
        },
        {
          skillName: 'GitHub',
          fontAwesomeClassName: 'mdi:github',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'skill-icons:mongodb',
        },
        {
          skillName: 'Express',
          fontAwesomeClassName: 'skill-icons:expressjs-dark',
        },
        {
          skillName: 'Node',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'React Native',
          fontAwesomeClassName: 'tabler:brand-react-native',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'B.TECH in Electrical Engineering - RGPV University',
    subHeader: 'From Gyan Ganga Institute of Technology & Sciences,Jabalpur(M.P)',
    duration: 'June 2018 - April 2021',
    desc: '',
    grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: 'Diploma in Electrical Engineering - RGPV University',
    subHeader: 'From Govt. Polytechnic College, Waidhan(M.P)',
    duration: 'June 2013 - April 2016',
    desc: '',
    grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'Cognic System pvt ltd.',
    companyLogo: '/img/icons/common/dusecaSoftware.jpeg',
    date: 'June 2022 - Till',
    desc: "I've successfully launched a few react native mobile applications using these technologies: react native, node, express, and mongodb. I'm also working on react web projects.",
  },
  {
    role: 'Diploma Engineering Trainee',
    company: 'Mahindra Accelo',
    companyLogo: '/img/icons/common/mahindra.jpeg',
    date: 'June 2017 - June 2018',
    desc: '1 Year Working experience in MSSCL, Bhopal(M.P) As DET(Diploma Engineering Trainee) in CRGO Steel Processing Division.',
  },
  {
    role: 'Quality Controller',
    company: 'Vivo India pvt ltd.',
    companyLogo: '/img/icons/common/vivo.jpeg',
    date: 'May 2016 - June 2017',
    desc: '1 Year Working experience in Vivo Mobile India pvt ltd., Greater Noida(U.P) As Quality Controller(AQC)',
  }
];

export const projects: ProjectType[] = [
  {
    name: 'Todo-List',
    desc: '',
    github: '',
    link: '',
  },
  {
    name: 'E-Commerce',
    desc: '',
    github: '',
    link: '',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      '',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Sangram Singh',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Sangram Singh',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: '',
  keywords: [
    'Sangram',
    'Sangram  Singh',
    '@Ssangram11',
    'Sangram',
    'Portfolio',
    'Sangram Portfolio ',
    'Sangram Singh Portfolio',
  ],
};
