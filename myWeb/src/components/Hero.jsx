import React from "react";
import { SOCIAL_LINKS, HERO_CONTENT } from "../config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useSettings } from "../context/useSettings";

const Hero = () => {
  const { themeColors } = useSettings();

  return (
    <section
      style={{ backgroundColor: themeColors.pageBg, color: themeColors.textColor }}
      className="transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto py-24 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-24">
        {/* Sol taraf */}
        <div className="flex flex-col text-center lg:text-left w-full lg:w-3/5">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <div className="w-8 h-0.5 bg-[#A78BFA] mr-3"></div>
            <p className="text-base font-normal text-[#A78BFA]">{HERO_CONTENT.name}</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 max-w-xl mx-auto lg:mx-0">
            {HERO_CONTENT.titleLine1} <br />
            {HERO_CONTENT.titleLine2}
          </h1>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_CONTENT.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={SOCIAL_LINKS.hireMe}
              className="px-6 py-3 bg-[#4B30A4] text-white font-medium rounded hover:bg-violet-800 transition-colors"
            >
              Hire me
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 font-medium rounded hover:bg-violet-800 transition-colors"
            >
              <FaGithub className="w-5 h-5" /> Github
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 font-medium rounded hover:bg-violet-800 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
              Linkedin
            </a>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
          <div className="p-0 rounded-2xl shadow-xl border-0 max-w-lg overflow-hidden">
            <img
              src={HERO_CONTENT.profilePicture}
              alt={`${HERO_CONTENT.name} Profile`}
              className="w-full h-auto object-cover rounded-2xl aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
