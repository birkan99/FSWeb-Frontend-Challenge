import profileImage from "./assets/5-fav.jpg";
import pizza from "./assets/pizza.png";

export const SOCIAL_LINKS = {
  github: "https://github.com/birkan99",
  linkedin: "https://www.linkedin.com/in/birkansar%C4%B1bacak/",
  hireMe: "#contact",
};

export const HERO_CONTENT = {
  profilePicture: profileImage,
  name: "Birkan Sarıbacak",
  titleLine1: "Creative thinker",
  titleLine2: "Minimalism lover",
  bio: "Hi, I'm Birkan. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
};

export const SKILLS_CONTENT = {
  title: "Skills",
  skills: [
    {
      name: "Java Script",
      description:
        "Proficiency in writing clean, efficient, and ES6+ compliant JavaScript code for developing modern and dynamic web applications. Deep knowledge of asynchronous operations (Promises, Async/Await), DOM manipulation, and module systems.",
    },
    {
      name: "React.Js",
      description:
        "Creating reusable, component-based user interfaces (UI). Expertise in state management (useState, useReducer, Redux/Context API), Hooks, and performance optimization (useMemo, useCallback) to develop fast and scalable Single Page Applications (SPA).",
    },
    {
      name: "Java",
      description:
        "Developing secure and enterprise-level backend applications using Object-Oriented Programming (OOP) principles. Designing and implementing robust, multi-layered, and scalable system architectures with Spring Boot or core Java APIs.",
    },
  ],
};

export const PROFILE_CONTENT = {
  title: "Profile", // Main title // Left Column: Personal Info

  personalInfo: [
    { label: "Date of Birth", value: "15.03.1999" },
    { label: "City of Residence", value: "Izmir" },
    {
      label: "Education Status",
      value:
        "Izmir University of Economics, Software Engineering, Bachelor's Degree, 2024",
    },
    { label: "Preferred Role", value: "Front-end / Full-Stack Developer" },
  ], // Right Column: About Me Text

  aboutMe: {
    title: "About Me",
    paragraphs: [
      "I am a Software Engineer with a solid foundation in computer science and experience in web, mobile, and game development. I enjoy developing scalable and user-centric applications using modern technologies. My goal is to produce quality software through clean code, agile methodology, and effective problem-solving approaches. I am a developer who is collaborative, eager to learn, and motivated to create value in dynamic environments.",
    ],
  },
};

export const PROJECTS_CONTENT = {
  title: "Projects",
  projects: [
    {
      name: "Pizza App",
      image: pizza,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["React", "Tailwind", "axios", "Javascript"],
      githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza", // Github link
      viewSiteUrl: "#", // Live project link
    },
    {
      name: "Random Jokes",
      image: pizza,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["react", "redux", "axios"],
      githubUrl: "#",
      viewSiteUrl: "#",
    },
    {
      name: "Journey",
      image: pizza,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["react", "redux", "axios"],
      githubUrl: "#",
      viewSiteUrl: "#",
    },
  ],
};

export const CONTACT_INFO = {
  email: "birkan35@hotmail.com.tr",
};

export const FOOTER_CONTENT = {
  title: "Let's work together on your next product.",
  blogUrl: "/",
};
