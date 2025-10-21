import profileImage from "../assets/5-fav.jpg";
import pizza from "../assets/pizza.png";

export const API_SIMULATION_DATA = {
  tr: {
    hero: {
      profilePicture: profileImage,
      name: "Birkan Sarıbacak",
      titleLine1: "Yaratıcı düşünen",
      titleLine2: "Minimalizm aşığı",
      bio: "Merhaba, ben Birkan. Ben bir full-stack geliştiricisiyim. Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir Geliştirici arıyorsanız. Benimle el sıkışın.",
    },
    skills: {
      title: "Yetenekler",
      skills: [
        {
          name: "Java Script",
          description:
            "Modern ve dinamik web uygulamaları geliştirmek için temiz, verimli ve ES6+ uyumlu JavaScript kodu yazma yeteneği.",
        },
        {
          name: "React.Js",
          description:
            "Yeniden kullanılabilir, bileşen tabanlı kullanıcı arayüzleri oluşturma. Hızlı ve ölçeklenebilir Tek Sayfa Uygulamaları geliştirmek için state yönetimi.",
        },
        {
          name: "Java ",
          description:
            "Nesne Yönelimli Programlama (OOP) prensiplerini kullanarak güvenli ve kurumsal düzeyde arka uç uygulamaları geliştirmek. Spring Boot veya temel Java API'leri ile sağlam, çok katmanlı ve ölçeklenebilir sistem mimarileri tasarlamak ve uygulamak.",
        },
      ],
    },
    projects: {
      title: "Projeler",
      projects: [
        {
          name: "Pizza App",
          image: pizza,
          description:
            "React, Tailwind, Cypress gibi teknolojiler kullanılarak yapılmış pizza sipariş sitesidir. ",
          techStack: ["React", "Tailwind", "axios", "Javascript"],
          githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza",
          viewSiteUrl: "#",
        },
      ],
    },
    profile: {
      title: "Hakkımda",
      personalInfo: [
        { label: "Doğum Tarihi", value: "24.08.1994" },
        { label: "Tercih Ettiği Rol", value: "Full Stack Developer" },
      ],
      aboutMe: {
        title: "Benden...",
        paragraphs: [
          "İstanbul'da yaşıyorum. Yazılımla tanışmam 2021 yılında Front End patikasında oldu...",
        ],
      },
    },
    footer: {
      title: "Beni sosyal medyada takip edin!",
      blogUrl: "#",
    },
  },
  en: {
    hero: {
      profilePicture: profileImage,
      name: "Birkan Sarıbacak",
      titleLine1: "Creative thinker",
      titleLine2: "Minimalism lover",
      bio: "Hi, I'm Birkan. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
    },
    // ... Diğer İngilizce içerikler (skills, projects, profile, footer) buraya eklenecektir
    skills: {
      title: "Skills",
      skills: [
        {
          name: "Java Script",
          description:
            "Proficiency in writing clean, efficient, and ES6+ compliant JavaScript code for developing modern and dynamic web applications...",
        },
        {
          name: "React.Js",
          description:
            "Creating reusable, component-based user interfaces (UI). Expertise in state management (useState, useReducer, Redux/Context API)...",
        },
        {
          name: "Java ",
          description:
            "Developing secure and enterprise-level backend applications using Object-Oriented Programming (OOP) principles. Designing and implementing robust, multi-layered, and scalable system architectures with Spring Boot or core Java APIs.",
        },
      ],
    },
    projects: {
      title: "Projects",
      projects: [
        {
          name: "FSWeb S8 Challenge Pizza",
          image: pizza,
          description:
            "This is a replica of the pizza ordering application made with React and Tailwind.",
          techStack: ["React", "Tailwind", "axios", "Javascript"],
          githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza",
          viewSiteUrl: "#",
        },
      ],
    },
    profile: {
      title: "About Me",
      personalInfo: [
        { label: "Date of Birth", value: "24.08.1994" },
        { label: "Preferred Role", value: "Full Stack Developer" },
      ],
      aboutMe: {
        title: "From me...",
        paragraphs: [
          "I live in Istanbul. My introduction to software was in 2021 on the Front End track...",
        ],
      },
    },
    footer: {
      title: "Follow me on social media!",
      blogUrl: "#",
    },
  },
};

/**
 * @param {string} lang - İstenen dil ('tr' veya 'en')
 * @returns {Promise<object>} İstenen dildeki verileri içeren Promise
 */
export const fetchApiData = async (lang) => {
  console.log(`Simulating POST request for language: ${lang}`);

  // 1.5 saniyelik ağ gecikmesi simülasyonu
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Sahte hata simülasyonu (rastgele %10 ihtimalle)
  if (Math.random() < 0.1) {
    throw new Error(
      "API sunucusu yanıt vermiyor. Lütfen daha sonra tekrar deneyin."
    );
  }

  const data = API_SIMULATION_DATA[lang];
  if (!data) {
    throw new Error(`Veri bulunamadı: ${lang}`);
  }

  return data;
};
