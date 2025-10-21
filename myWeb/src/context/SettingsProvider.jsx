import React, { useEffect, useMemo } from "react";
import { SettingsContext } from "./SettingsContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("lang", "tr");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    setLanguage((currentLang) => (currentLang === "tr" ? "en" : "tr"));

  // Tema renkleri
  const themeColors = useMemo(() => {
    return theme === "dark"
      ? {
          pageBg: "#252128",
          footerBg: "#141414",
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
      themeColors,
    }),
    [theme, language, themeColors]
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
