import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSettings } from "../context/useSettings";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useSettings();

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme();
    toast.info(
      newTheme === "dark" ? "🌙 Dark mode aktif" : "☀️ Light mode aktif",
      {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        theme: newTheme,
      }
    );
  };

  const handleToggleLanguage = () => {
    toggleLanguage();
    const newLang = language === "tr" ? "en" : "tr";
    toast.success(newLang === "tr" ? "Türkçe aktif" : "English active", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      theme,
    });
  };

  return (
    <header className="w-full flex flex-col pt-3 ">
      {/* Üst Bar */}
      <div className="flex justify-end items-center gap-3 text-sm px-8 py-2 text-gray-600">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleTheme}
            className={`relative w-12 h-6 rounded-full flex items-center justify-${
              theme === "dark" ? "end" : "start"
            } px-1 transition-colors duration-300 ${
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
          <span className="uppercase text-sm tracking-wide font-medium text-gray-700">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>

        <p>|</p>

        {/* Dil Butonu */}
        <button
          onClick={handleToggleLanguage}
          className="font-medium hover:underline text-sm tracking-wide uppercase text-gray-700"
        >
          {language === "tr" ? (
            <>
              SWITCH TO{" "}
              <span className="text-[#0d00be] font-bold">ENGLISH</span>
            </>
          ) : (
            <>
              <span className="text-[#0d00be] font-bold">TÜRKÇEYE</span> GEÇ
            </>
          )}
        </button>
      </div>

      {/* Alt Navigasyon */}
      <div className="flex justify-between items-center px-10 py-2">
        <div className="w-20 h-20 rounded-full bg-[#EEEBFF] text-[#7B61FF] flex justify-center items-center text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ml-20 p-5 rotate-[+25deg] hover:rotate-0">
          B.S
        </div>

        <nav className="flex items-center text-gray-700 font-medium gap-15">
          <a href="#skills" className="hover:text-purple-600 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#hire"
            className="border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition-colors"
          >
            Hire Me
          </a>
        </nav>
      </div>

      <ToastContainer position="top-left" />
    </header>
  );
};

export default Header;
