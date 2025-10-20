import React from "react";
import { PROFILE_CONTENT } from "../config";
import { useSettings } from "../context/useSettings";

const Profile = () => {
  const { themeColors } = useSettings();

  return (
    <section
      id="profile"
      style={{ backgroundColor: themeColors.pageBg, color: themeColors.textColor }}
      className="py-10 px-4 md:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-left">
          {PROFILE_CONTENT.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 text-left">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-[#A78BFA] mb-6">
              Profile
            </h3>
            <div className="flex flex-col gap-4">
              {PROFILE_CONTENT.personalInfo.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold w-40">{item.label}:</span>
                  <span className="opacity-80 mt-1 sm:mt-0">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-[#A78BFA] mb-6">
              {PROFILE_CONTENT.aboutMe.title}
            </h3>
            <div className="flex flex-col gap-6 opacity-80 leading-relaxed">
              {PROFILE_CONTENT.aboutMe.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 h-0.5 w-full bg-[#E0E0FF]"></div>
      </div>
    </section>
  );
};

export default Profile;
