import React from "react";
import { SOCIAL_LINKS, CONTACT_INFO, FOOTER_CONTENT } from "../config"; 
import { HiOutlineMailOpen } from "react-icons/hi"; // Mail ikonu için

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-20 pb-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Ana Başlık */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 max-w-2xl leading-snug text-left">
          {FOOTER_CONTENT.title}
        </h2>

        {/* Alt Satır İçeriği: Sol (Mail) ve Sağ (Linkler) */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center pt-16 border-t border-gray-200">
          
          {/* Sol: E-posta Adresi */}
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-lg font-medium mb-6 sm:mb-0 
                       text-[#CC3366] hover:underline transition-colors" 
          >
            <HiOutlineMailOpen className="w-6 h-6" />
            {CONTACT_INFO.email}
          </a>

          {/* Sağ: Linkler */}
          <nav className="flex items-center gap-6 text-gray-700 font-medium">
            {/* Personal Blog Linki (Ana sayfaya yönlendirir) */}
            <a 
              href={FOOTER_CONTENT.blogUrl} 
              className="hover:text-gray-900 transition-colors"
            >
              Personal Blog
            </a>
            
            {/* Github Linki */}
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Github
            </a>
            
            {/* LinkedIn Linki */}
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Linkedin
            </a>
          </nav>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;