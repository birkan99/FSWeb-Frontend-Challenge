import React, { useState, useEffect, useMemo } from "react";
import { SettingsContext } from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  // State başlatma helper fonksiyonları
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme || (prefersDark ? "dark" : "light");
  };

  const getInitialLanguage = () => {
    return localStorage.getItem("lang") || "tr";
  };
  // Tema ve Dil Değiştirme Fonksiyonları
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((currentLang) => (currentLang === "tr" ? "en" : "tr"));
  };

  const contextValue = useMemo(
    () => ({
      theme,
      language,
      toggleTheme,
      toggleLanguage,
    }),
    [theme, language]
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
