import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#FFFFFF] transition-colors duration-300">
      <Header />
      {/* Buraya diğer componentler (Hero, Skills, Profile, Projects vs.) gelecek */}
    </div>
  );
};

export default App;
