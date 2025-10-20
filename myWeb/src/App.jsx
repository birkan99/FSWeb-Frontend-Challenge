import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#FFFFFF] transition-colors duration-300">
      <Header />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
