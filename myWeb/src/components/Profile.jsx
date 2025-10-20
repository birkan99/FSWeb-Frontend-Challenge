import React from "react";
import { PROFILE_CONTENT } from "../config"; 

const Profile = () => {
  return (
    // Bölümün dış çerçevesi ve padding ayarı
    <section className="bg-white py-20 px-4 md:px-8 lg:px-12" id="profile">
      <div className="max-w-6xl mx-auto">
        
        {/* Ana Başlık (Profile) */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-left">
          {PROFILE_CONTENT.title}
        </h2>

        {/* İki Sütunlu Ana İçerik Bölümü */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 text-left">
          
          {/* Sol Sütun: Temel Bilgiler */}
          <div className="flex flex-col">
            
            {/* Alt Başlık: Profile */}
            <h3 className="text-2xl font-semibold text-[#4B30A4] mb-6">
              Profile
            </h3>
            
            {/* Bilgi Listesi */}
            <div className="flex flex-col gap-4">
              {PROFILE_CONTENT.personalInfo.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
                  {/* Etiket (Label) */}
                  <span className="font-semibold text-gray-900 w-40">
                    {item.label}:
                  </span>
                  {/* Değer (Value) */}
                  <span className="text-gray-700 mt-1 sm:mt-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Sütun: About Me */}
          <div className="flex flex-col">
            
            {/* Alt Başlık: About Me */}
            <h3 className="text-2xl font-semibold text-[#4B30A4] mb-6">
              {PROFILE_CONTENT.aboutMe.title}
            </h3>
            
            {/* Hakkımda Paragrafları */}
            <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
              {PROFILE_CONTENT.aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Ayırıcı Çizgi */}
        {/* Görseldeki ince, tam genişlikte ve mor/lila renkteki çizgi */}
        <div className="mt-20 h-0.5 w-full bg-[#E0E0FF]"></div>
        
      </div>
    </section>
  );
};

export default Profile;