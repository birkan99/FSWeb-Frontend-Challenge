// context/SettingsProvider.jsx
import React, { useState, useEffect, useMemo } from "react";
import { SettingsContext } from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (prefersDark ? "dark" : "light");
  };

  const getInitialLanguage = () => localStorage.getItem("lang") || "tr";

  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    setLanguage((currentLang) => (currentLang === "tr" ? "en" : "tr"));

  // 🌙 Tema renkleri
  const themeColors = useMemo(() => {
    return theme === "dark"
      ? {
          pageBg: "#252128", // tüm sayfa arkaplanı
          footerBg: "#141414", // footer arkaplanı
          textColor: "#FFFFFF",
        }
      : {
          pageBg: "#F9F9F9",
          footerBg: "#F9F9F9",
          textColor: "#000000",
        };
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      language,
      toggleTheme,
      toggleLanguage,
      themeColors, // 🎨 renkleri context’e dahil ettik
    }),
    [theme, language, themeColors]
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
