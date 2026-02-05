import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"en" | "fr">("fr");

  useEffect(() => {
    const userLang = navigator.language.split("-")[0];
    const savedLang =
      (localStorage.getItem("language") as "en" | "fr") ||
      (userLang === "en" ? "en" : "fr");
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "fr" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <motion.button
      onClick={handleLanguageChange}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg ml-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle language"
    >
      {language === "en" ? "FR" : "EN"}
    </motion.button>
  );
}
