import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

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

  const toggleLanguage = () => {
    const newLang = language === "tr" ? "en" : "tr";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
    toast.success(newLang === "tr" ? "Türkçe aktif" : "English active", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      theme: theme,
    });
  };

  return (
    <header className="w-full flex flex-col ">
      {/* Üst Bar */}
      <div className="flex justify-end items-center gap-3 text-sm px-8 py-2 bg-white dark:bg-[#FFFFFF] text-gray-600 dark:text-gray-500">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          {/* Hangi moda geçileceğini gösteren metin */}
          <span className="uppercase text-sm tracking-wide font-medium text-gray-700 dark:text-gray-400">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-600" : "bg-purple-500"
            }`}
          >
            <div
              className={`absolute top-[3px] w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </button>
        </div>

        {/* Dil Değiştir */}
        <button
          onClick={toggleLanguage}
          className="font-medium hover:underline text-sm tracking-wide uppercase text-gray-700 dark:text-gray-400"
        >
          {language === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇEYE GEÇ"}
        </button>
      </div>

      {/* Alt Navigasyon */}
      <div className="flex justify-between items-center px-10 py-5 bg-white dark:bg-[#FFFFFF]">
        {/* Sol: Logo */}
        <div className="w-12 h-12 rounded-full bg-violet-700 dark:bg-violet-700 flex justify-center items-center text-xl font-bold text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer ml-20">
          B.S
        </div>

        {/* Sağ: Menü */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
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
