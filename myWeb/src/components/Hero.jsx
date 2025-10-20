import React from "react";
import { SOCIAL_LINKS, HERO_CONTENT } from "../config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-24 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-24">
        {/* 1. Sol Taraf: Metin ve Butonlar */}
        <div className="flex flex-col text-center lg:text-left w-full lg:w-3/5">
          {/* İsim ve Üst Çizgi - */}
          <div className="flex items-center justify-center lg:justify-start mb-6">
            {/* Sol çizgi */}
            <div className="w-8 h-0.5 bg-[#3730A3] mr-3"></div>

            {/* İsim -  */}
            <p className="text-base font-normal" style={{ color: "#3730A3" }}>
              {HERO_CONTENT.name}
            </p>
          </div>
          {/* Ana Başlık (Creative Thinker Minimalism lover) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-8 max-w-xl mx-auto lg:mx-0">
            {HERO_CONTENT.titleLine1} <br />
            {HERO_CONTENT.titleLine2}
          </h1>

          {/* Giriş Paragrafı */}
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_CONTENT.bio}
          </p>

          {/* Butonlar - */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {/* Hire Me Butonu -  */}
            <a
              href={SOCIAL_LINKS.hireMe}
              className="px-6 py-3 w-full sm:w-auto text-center bg-[#4B30A4] text-white font-medium text-base rounded shadow-lghover:bg-violet-800 transition-colors duration-200"
            >
              Hire me
            </a>

            {/* GitHub Linki */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto border border-gray-300 text-gray-700 font-medium text-base rounded hover:bg-gray-50 transition-colors"
            >
              <FaGithub className="w-5 h-5" /> Github
            </a>

            {/* LinkedIn Linki */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto border border-gray-300 text-gray-700 font-medium text-base rounded hover:bg-gray-50 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5 text-gray-700" />
              Linkedin
            </a>
          </div>
        </div>

        {/* 2. Sağ Taraf: Resim */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
          <div className="p-0 bg-white rounded-2xl shadow-xl border-0 max-w-lg overflow-hidden">
            {/* Resim  */}
            <img
              src={HERO_CONTENT.profilePicture}
              alt={`${HERO_CONTENT.name} Profile`}
              className="w-full h-auto object-cover rounded-2xl aspect-square sm:aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
