import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useSettings } from "../context/useSettings";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const { theme, language, toggleTheme, toggleLanguage, themeColors } =
    useSettings();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dil bağımlı metinler
  const hireMeButtonText = language === "tr" ? "Bana Ulaşın" : "Hire Me";
  const skillsText = language === "tr" ? "Yetenekler" : "Skills";
  const projectsText = language === "tr" ? "Projeler" : "Projects";

  return (
    <header
      className="w-full flex flex-col pt-3 transition-colors duration-300"
      style={{ backgroundColor: themeColors.pageBg, color: themeColors.textColor }} 
    >
      {/* Üst Bar (Dark Mode Toggle + Dil Değiştirme) */}
      <div className="flex justify-end items-center gap-3 text-sm px-4 md:px-8 lg:px-12 py-2 opacity-80 border-b border-gray-200/50">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full flex items-center justify-${
              theme === "dark" ? "end" : "start"
            } px-1 transition-colors duration-300 cursor-pointer ${
              theme === "dark" ? "bg-gray-700" : "bg-purple-500"
            }`}
          >
            <div className="flex justify-center items-center w-5 h-5 rounded-full bg-yellow-400 shadow-md">
              {theme === "dark" ? (
                <FiMoon className="text-white w-3.5 h-3.5" />
              ) : (
                <FiSun className="text-white w-3.5 h-3.5" />
              )}
            </div>
          </button>
          <span className="uppercase text-sm tracking-wide font-medium hidden sm:inline">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>

        <p className="hidden sm:block">|</p>

        {/* Dil Butonu */}
        <button
          onClick={toggleLanguage}
          className="font-medium hover:underline text-sm tracking-wide uppercase cursor-pointer"
        >
          {language === "tr" ? (
            <>
              SWITCH TO{" "}
              <span className="text-purple-600 font-bold">ENGLISH</span>
            </>
          ) : (
            <>
              <span className="text-purple-600 font-bold">TÜRKÇEYE</span> GEÇ
            </>
          )}
        </button>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4">
        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#EEEBFF] text-[#7B61FF] flex justify-center items-center text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-3 lg:p-5 rotate-25 hover:rotate-0">
          B.S
        </div>
        <nav className="hidden lg:flex items-center font-medium gap-8">
          <a
            href="#skills"
            className="hover:text-purple-600 transition-colors cursor-pointer"
          >
            {skillsText}
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors"
          >
            {projectsText}
          </a>
          <a
            href="#contact"
            className="border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition-colors"
          >
            {hireMeButtonText}
          </a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2"
          aria-label="Menüyü Aç"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center pt-20 transition-all duration-300"
          style={{ backgroundColor: themeColors.pageBg }}
        >
          <div className="flex justify-between items-center w-full px-4 absolute top-0 left-0 py-4">
            <div className="w-12 h-12"></div> 
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Menüyü Kapat"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Mobil Navigasyon Linkleri */}
          <nav className="flex flex-col items-center text-xl font-medium pt-12 gap-8 w-full">
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 hover:text-purple-600 transition-colors"
            >
              {skillsText}
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 hover:text-purple-600 transition-colors"
            >
              {projectsText}
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 border border-purple-700 text-purple-700 px-6 py-3 text-lg rounded-md hover:bg-purple-700 hover:text-white transition-colors"
            >
              {hireMeButtonText}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;