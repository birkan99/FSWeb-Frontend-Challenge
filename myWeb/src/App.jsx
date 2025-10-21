import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { SettingsProvider } from "./context/SettingsProvider";
import { DataProvider } from "./context/DataProvider";
import { useSettings } from "./context/useSettings";
import { useData } from "./context/useData";
import { ToastContainer } from "react-toastify";

// Yükleme sırasında gösterilecek 
const LoadingScreen = ({ themeColors }) => (
  <div
    style={{
      backgroundColor: themeColors.pageBg,
      color: themeColors.textColor,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      flexDirection: "column",
    }}
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
    <p>Veriler Yükleniyor...</p>
  </div>
);

// Hata durumunda gösterilecek
const ErrorScreen = ({ themeColors, isError }) => (
  <div
    style={{
      backgroundColor: themeColors.pageBg,
      color: themeColors.textColor,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      flexDirection: "column",
      textAlign: "center"
    }}
  >
    <h1 className="text-red-500 text-3xl mb-4">Hata! Veriler Yüklenemedi.</h1>
    <p className="text-lg opacity-80">{isError}</p>
    <p className="text-sm mt-4">Lütfen daha sonra tekrar deneyin.</p>
  </div>
);

const ThemedContainer = () => {
  const { themeColors } = useSettings();
  const { data, isLoading, isError } = useData(); 

  if (isError) {
    return <ErrorScreen themeColors={themeColors} isError={isError} />; 
  }

  if (isLoading || !data) {
    return <LoadingScreen themeColors={themeColors} />; 
  }

  return (
    <div
      style={{
        backgroundColor: themeColors.pageBg,
        color: themeColors.textColor,
      }}
      className="transition-colors duration-300"
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
  <>
    <SettingsProvider>
      <DataProvider> 
        <ThemedContainer />
      </DataProvider>
    </SettingsProvider>
    <ToastContainer />
  </>
);

export default App;