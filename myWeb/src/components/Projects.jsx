import React from "react";

import { PROJECTS_CONTENT } from "../config";

const Projects = () => {
  // Görseldeki linklerin stili
  const linkStyle =
    "text-sm  underline text-[#3730A3] hover:text-[#4B30A4] transition-colors font-bold";

  // Görseldeki teknoloji etiketlerinin stili
  const techTagStyle =
    "px-3 py-1 text-xs border border-[#3730A3]  rounded-lg hover:bg-[#F0F0FF] transition-colors";

  return (
    // Bölümün dış çerçevesi ve padding ayarı
    <section className="bg-white py-10 px-4 md:px-8 lg:px-12" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Ana Başlık (Projects) */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-left">
          {PROJECTS_CONTENT.title}
        </h2>

        {/* Proje Kartları (3 Sütunlu Izgara) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 ">
          {PROJECTS_CONTENT.projects.map((project, index) => (
            // Her bir proje kartı
            <div key={index} className="flex flex-col text-left">
              {/* 1. Resim */}
              <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 2. Proje Adı */}
              <h3 className="text-2xl font-bold text-[#4338CA] mb-3">
                {project.name}
              </h3>

              {/* 3. Açıklama Paragrafı */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* 4. Teknoloji Etiketleri */}
              <div className="flex flex-wrap  gap-2 mb-8">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={techTagStyle}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* 5. Linkler (Github & View Site) */}
              <div className="flex justify-between mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  Github
                </a>
                <a
                  href={project.viewSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
