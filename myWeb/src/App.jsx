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
import { ToastContainer } from "react-toastify";
// import ContactForm from "./components/ContactForm";

// Yükleme sırasında gösterilecek (Artık kullanılmayacak)
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

// Hata durumunda gösterilecek (Artık kullanılmayacak)
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
  // useData hook'u hala kullanılıyor, çünkü bileşenler veriyi buradan alacak.
  // const { data, isLoading, isError } = useData(); 

  // TÜM KONTROLLER KALDIRILDI. Direkt olarak içeriği döndürüyoruz.
  // Artık Header, Hero gibi bileşenler data'yı useData() üzerinden çekip 
  // kendi içlerinde null kontrolü yapmazsa hata alabilirler.

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