import React from "react";
import { SOCIAL_LINKS, CONTACT_INFO, FOOTER_CONTENT } from "../config";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useSettings } from "../context/useSettings";

const Footer = () => {
  const { theme, themeColors } = useSettings();

  return (
    <footer
      className="pt-20 pb-16 px-4 md:px-8 lg:px-12 transition-colors duration-300"
      style={{ backgroundColor: themeColors.footerBg }}
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-10 max-w-2xl leading-snug text-left transition-colors duration-300"
          style={{
            color: theme === "dark" ? "#AEBCCF" : "#1F2937",
          }}
        >
          {FOOTER_CONTENT.title}
        </h2>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center pt-16 border-t border-gray-200">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-lg font-medium mb-6 sm:mb-0 
                       text-[#AF0C48] hover:underline transition-colors"
          >
            <HiOutlineMailOpen className="w-6 h-6" />
            {CONTACT_INFO.email}
          </a>

          <nav className="flex items-center gap-6 text-gray-700 font-medium">
            <a
              href={FOOTER_CONTENT.blogUrl}
              className="hover:text-gray-900 transition-colors"
            >
              Personal Blog
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AB6B] hover:bg-violet-800 transition-colors"
            >
              Github
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:bg-violet-800 transition-colors"
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
