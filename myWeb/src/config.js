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
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "React.Js",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Java",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

export const PROFILE_CONTENT = {
  title: "Profile", // Ana başlık

  // Sol Sütun: Kişisel Bilgiler
  personalInfo: [
    { label: "Doğum tarihi", value: "15.03.1999" },
    { label: "İkamet Şehri", value: "İzmir" },
    {
      label: "Eğitim Durumu",
      value: "İzmir Ekonomi Üniversitesi / Yazılım Mühendisliği / Lisans/2024",
    },
    { label: "Tercih Ettiği Rol", value: "Front-end / Full-Stack developer" },
  ],

  // Sağ Sütun: Hakkımda Metni
  aboutMe: {
    title: "About Me",
    // Rastgele metinler
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Exercitationem, rerum.",
      "Minima accusamus ratione soluta aperiam sit voluptatem! Dicta quod deserunt quam temporibus cumque magnam! Quo pariatur asperiores reiciendis eaque.",
    ],
  },
};


export const PROJECTS_CONTENT = {
  title: "Projects",
  projects: [
    {
      name: "Pizza App",
      image: pizza, 
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["React", "Tailwind", "axios","Javascript"],
      githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza", // Github linki
      viewSiteUrl: "#", // Proje canlı linki
    },
    {
      name: "Random Jokes",
        image: pizza, 
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["react", "redux", "axios"],
      githubUrl: "#",
      viewSiteUrl: "#",
    },
    {
      name: "Journey",
        image: pizza, 
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
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