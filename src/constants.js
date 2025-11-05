// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/django.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import fusionLogo from "./assets/company_logo/fusion.jpeg";
import cctLogo from "./assets/company_logo/cct.jpeg";
import aiTalentForceLogo from "./assets/company_logo/ai_talent_force.png";

// Education Section Logo's
import iiitLogo from "./assets/education_logo/iiitdmj_img.jpeg";
// Project Section Logo's
import githubdetLogo from "./assets/work_logo/cfl.png";
import csprepLogo from "./assets/work_logo/vai.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: fusionLogo,
    role: "Project Domain Lead",
    company: "FusionIIIT",
    date: "August 2024 - Feb 2025",
    desc: "Spearheading back-end development using Django and managing PostgreSQL databases for Fusion, a full-scale ERP platform serving 2,500+ students at IIITDM Jabalpur.",
    skills: ["ReactJS", "Django", "PostgreSQL", "RESTful API", "Python"],
  },
  {
    id: 1,
    img: cctLogo,
    role: "Frontend Developer Intern",
    company: "Calanjiyam Consultancies and Technologies",
    date: "August 2024 - October 2024",
    desc: " Engineered responsive web applications using React, Redux, and Context API, optimizing component rendering and integrating RESTful APIs to improve performance, scalability, and user experience.",
    skills: ["ReactJs", "CSS", "Javascript", "Bootstrap", "Figma", "REST API"],
  },
  {
    id: 2,
    img: aiTalentForceLogo,
    role: "Full-Stack Engineer",
    company: "AI Talent Force",
    date: "March 2024 - July 2024",
    desc: "Contributed as a Full-Stack Engineer to the design and development of the Attendance & Availability Management System using Next.js, React, Node.js, and PostgreSQL, integrating Slack and AI chatbot features for real-time communication and reporting. Enhanced authentication, localization, and deployment workflows by implementing JWT-based security, multilingual (EN-JA) support, and CI/CD pipelines, improving system reliability and global usability.",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "JWT", "Slack API", "AI Chatbot", "CI/CD"],
  },
];

export const education = [
  {
    id: 0,
    img: iiitLogo,
    school: "PDPM IIITDM Jabalpur",
    date: "Nov 2022 - May 2026",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from IIITDM Jabalpur. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
    degree: "Bachelor's of Technology - B.Tech",
  },
];

export const projects = [
  {
    id: 0,
    title: "CfLadder",
    description:
      "Developed a competitive programming ladder web application using React.js, React Router, and Bootstrap ",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/arghaDEVIL/codeforces-ladder",
    webapp: "https://codeforces-ladder.vercel.app/",
  },
  {
    id: 1,
    title: "VAI",
    description:
      "Built VAI, a full-stack voice interface over LLMs, enabling real-time voice queries, response synthesis, session screen recording}, and secure storage using React, Node.js, MongoDB, and AWS S3 with presigned URLs. ",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "S3 Bucket",
      "LLM",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/arghaDEVIL/CSPrep",
    webapp: "https://vai-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Attendance & Availability Management System",
    description:
      "Developed a full-stack Attendance & Availability Management System using Next.js, React, Node.js, and PostgreSQL, enabling attendance tracking, reporting, and Slack + AI Chatbot integration. Implemented secure JWT-based authentication, multilingual UI (English–Japanese), and CI/CD automation, enhancing usability, security, and deployment efficiency.",
    image: aiTalentForceLogo,
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "JWT", "Slack API", "AI Chatbot", "CI/CD"],
    github: "https://github.com/atf-inc/fall25_intern_a_sales_frontend",
    webapp: "https://aitf-attendance-management-sys.vercel.app/login",
  },
];
