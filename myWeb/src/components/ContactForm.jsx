import React, { useState } from "react";
import { useSettings } from "../context/useSettings";
import { FiSend } from "react-icons/fi";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contactAPI } from "../api/client";
import { CONTACT_CONTENT } from "../config";

const ContactForm = () => {
  const { language, themeColors, theme } = useSettings();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const t = CONTACT_CONTENT[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message:
          language === "tr"
            ? "Lütfen tüm alanları doldurun."
            : "Please fill in all fields.",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await contactAPI.submit(formData);

      if (response.success) {
        setStatus({ type: "success", message: t.successMessage });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: t.errorMessage });
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus({ type: "error", message: t.errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const isDarkMode = theme === "dark";
  const inputBgColor = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300";
  const inputFocusRing = isDarkMode
    ? "focus:ring-purple-400"
    : "focus:ring-purple-500";
  const inputTextColor = isDarkMode ? "text-white" : "text-gray-900";
  const inputStyle = `w-full p-3 border rounded-lg transition duration-150 ${inputBgColor} ${inputFocusRing} ${inputTextColor} placeholder-gray-500`;
  const submitStyle =
    "flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#4B30A4] text-white font-medium rounded-lg hover:bg-violet-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <section
      id="contact"
      style={{
        backgroundColor: themeColors.pageBg,
        color: themeColors.textColor,
      }}
      className="py-20 px-4 md:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto p-0 lg:p-8">
        <div
          className={`max-w-xl mx-auto p-8 rounded-xl shadow-2xl transition-all duration-300 ${
            isDarkMode ? "bg-[#2E2E3A]" : "bg-[#F9F9F9]"
          }`}
        >
          <div className="flex flex-col items-center mb-8">
            <HiOutlineMail size={32} className="text-[#A78BFA] mb-2" />
            <h3 className="text-3xl font-bold text-center">{t.title}</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              required
              className={inputStyle}
              disabled={isLoading}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
              className={inputStyle}
              disabled={isLoading}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              required
              rows="5"
              className={inputStyle}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading} className={submitStyle}>
              {isLoading ? (
                <>
                  <FiSend size={18} className="animate-spin" />
                  <span>{t.sending}</span>
                </>
              ) : (
                <>
                  <FiSend size={18} />
                  <span>{t.submitButton}</span>
                </>
              )}
            </button>

            {status.message && (
              <div
                className={`flex items-center gap-2 p-3 rounded-lg mt-4 font-medium ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {status.type === "success" ? (
                  <FaCheckCircle size={20} />
                ) : (
                  <FaTimesCircle size={20} />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
