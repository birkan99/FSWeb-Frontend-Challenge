import React from "react";
import { useSettings } from "../context/useSettings";
import { useData } from "../context/useData";
const Skills = () => {
  const { themeColors } = useSettings();
  const { data } = useData();
  if (!data || !data.skills) {
    return null;
  }

  const SKILLS_CONTENT = data.skills;

  return (
    <section
      style={{
        backgroundColor: themeColors.pageBg,
        color: themeColors.textColor,
      }}
      className="py-20 px-4 md:px-8 lg:px-12 transition-colors duration-300"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-8 text-left">
          {SKILLS_CONTENT.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {SKILLS_CONTENT.skills.map((skill, index) => (
            <div key={index} className="flex flex-col text-left">
              <h3 className="text-2xl font-semibold text-[#A78BFA] mb-2">
                {skill.name}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 h-0.5 w-full bg-[#E0E0FF]"></div>
      </div>
    </section>
  );
};

export default Skills;
