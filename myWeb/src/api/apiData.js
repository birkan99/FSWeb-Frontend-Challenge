

export const API_SIMULATION_DATA = {
  tr: {
    hero: {
      profilePicture: "/5-fav.jpg",
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
          image: "/pizza.png",
          description:
            "React ile geliştirilmiş, kullanıcı dostu arayüze sahip bir Tek Sayfa Uygulaması (SPA) olan bu proje, dinamik form yönetimi ve routing yeteneklerimi sergilemektedir. Sipariş formundan gelen veriler, sahte bir API çağrısı ile asenkron olarak yönetilir ve sonuç sayfasında gösterilir. ",
          techStack: [
            "React",
            "Tailwind CSS",
            "Axios",
            "React Router",
            "cypress",
            "Form Yönetimi",
          ],
          githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza",
          viewSiteUrl: "#",
        },
      ],
    },
    profile: {
      title: "Profil",
      personalInfo: [
        { label: "Doğum Tarihi", value: "15.03.1999" },
        { label: "İkamet Şehri", value: "İzmir" },
        {
          label: "Eğitim Durumu",
          value:
            "İzmir Ekonomi Üniversitesi,\n" +
            "Yazılım Mühendisliği,\n" +
            "Lisans Derecesi, 2024",
        },
        {
          label: "Tercih Ettiği Rol",
          value: "Full Stack / Front End Developer",
        },
      ],
      aboutMe: {
        title: "Hakkımda",
        paragraphs: [
          "Bilgisayar bilimlerinde sağlam bir temele sahip, web, mobil ve oyun geliştirme alanlarında deneyimli bir Yazılım Mühendisiyim. Modern teknolojilerle ölçeklenebilir ve kullanıcı odaklı uygulamalar geliştirmeyi seviyorum. Temiz kod, çevik çalışma ve etkili problem çözme yaklaşımlarıyla kaliteli yazılımlar üretmeyi hedefliyorum. Takım çalışmasına yatkın, öğrenmeye açık ve dinamik ortamlarda değer yaratmaya hevesli bir geliştiriciyim.",
        ],
      },
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      blogUrl: "#",
    },
  },
  en: {
    hero: {
      profilePicture: "/5-fav.jpg",
      name: "Birkan Sarıbacak",
      titleLine1: "Creative thinker",
      titleLine2: "Minimalism lover",
      bio: "Hi, I'm Birkan. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
    },
    skills: {
      title: "Skills",
      skills: [
        {
          name: "Java Script",
          description:
            "Proficiency in writing clean, efficient, and ES6+ compliant JavaScript code for developing modern and dynamic web applications",
        },
        {
          name: "React.Js",
          description:
            "Creating reusable, component-based user interfaces (UI). Expertise in state management (useState, useReducer, Redux/Context API)",
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
          name: "Pizza App",
          image: "/pizza.png",
          description:
            "This Single Page Application (SPA), developed using React and Tailwind CSS, showcases my skills in comprehensive form management, validation with Yup, page transitions with React Router, and managing asynchronous data flow by simulating a fake API POST request using Axios. It features a user-friendly and responsive design.",
          techStack: [
            "React",
            "Tailwind CSS",
            "Axios",
            "React Router",
            "cypress",
            "Form Yönetimi",
          ],
          githubUrl: "https://github.com/birkan99/fsweb-s8-challenge-pizza",
          viewSiteUrl: "#",
        },
      ],
    },
    profile: {
      title: "Profile",
      personalInfo: [
        { label: "Date of Birth", value: "15.03.1999" },
        { label: "City of Residence", value: "Izmir" },
        {
          label: "Education Status",
          value:
            "Izmir University of Economics,\n" +
            "Software Engineering,\n" +
            "Bachelor's Degree, 2024",
        },
        { label: "Preferred Role", value: "Full Stack / Front End Developer" },
      ],
      aboutMe: {
        title: "Abouth Me",
        paragraphs: [
          "I am a Software Engineer with a strong foundation in computer science and experience in web, mobile, and game development. I enjoy building scalable and user-focused applications using modern technologies. My goal is to deliver high-quality software through clean code, agile methodologies, and effective problem-solving approaches. I am a team-oriented, open-minded developer who is eager to learn and create value in dynamic environments.",
        ],
      },
    },
    footer: {
      title: "Let’s work together on your next product.",
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

  const data = API_SIMULATION_DATA[lang];
  if (!data) {
    throw new Error(`Veri bulunamadı: ${lang}`);
  }

  return data;
};
