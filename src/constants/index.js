import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Python,     // ✅ Add this
  Flask,      // ✅ Add this
  Django,     // ✅ Add this
  BPCL,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Develoer",
    icon: Python
  }
];





const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "Django",
    icon: Django,
  },
];


const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Bharat Petroleum Corporation Limited (BPCL)",
    icon: BPCL ,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Developed a web based PPE request and approval system using .NET and MSSQL .",
      "Collaborated with the IT team to develop the system.",
      "Gain Experiance in Full-stack dev , back-end programming and database managment.",
    ],
  },
];


const projects = [
  {
    name: "SaaS Task Manager",
    description: "A Software-as-a-Service platform for managing tasks efficiently with user authentication and real-time updates.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      /*
      {
        name: "React",
        color: "green-text-gradient",
      },*/
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/akshaydinesh2003/SaaS.git",
  },
  {
    name: "Python Tutor",
    description: "An interactive platform to help beginners learn Python through exercises and quizzes.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/akshaydinesh2003/python-tutor.git",
  },
  {
    name: "Python Tour Itinerary Generator",
    description: "A tool that generates personalized tour itineraries based on user preferences and location data and budget.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API Integration",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/akshaydinesh2003/AI-Powered-Travel-Companion.git",
  },
];


export { services, technologies, experiences, projects };
