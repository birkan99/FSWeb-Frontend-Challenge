import React from "react";
import { PROJECTS_CONTENT } from "../config";
import { useSettings } from "../context/useSettings";

const Projects = () => {
  const { themeColors } = useSettings();

  const linkStyle =
    "text-sm underline text-[#A78BFA] hover:text-[#C4B5FD] transition-colors font-bold";
  const techTagStyle =
    "px-3 py-1 text-xs border border-[#A78BFA] rounded-lg hover:bg-violet-800 transition-colors";

  return (
    <section
      id="projects"
      style={{ backgroundColor: themeColors.pageBg, color: themeColors.textColor }}
      className="py-10 px-4 md:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-left">
          {PROJECTS_CONTENT.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {PROJECTS_CONTENT.projects.map((project, index) => (
            <div key={index} className="flex flex-col text-left">
              <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#A78BFA] mb-3">
                {project.name}
              </h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className={techTagStyle}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={linkStyle}>
                  Github
                </a>
                <a href={project.viewSiteUrl} target="_blank" rel="noreferrer" className={linkStyle}>
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
