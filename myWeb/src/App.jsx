// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { SettingsProvider } from "./context/SettingsProvider";
import { useSettings } from "./context/useSettings";

// Bu bileşen temaya göre arka planı uygular
const ThemedContainer = () => {
  const { themeColors } = useSettings();

  return (
    <div
      style={{
        backgroundColor: themeColors.pageBg,
        color: themeColors.textColor,
      }}
    >
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

const App = () => (
  <SettingsProvider>
    <ThemedContainer />
  </SettingsProvider>
);

export default App;
