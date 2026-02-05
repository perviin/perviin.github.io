import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "fr">("fr");

  useEffect(() => {
    const userLang = navigator.language.split("-")[0];
    const savedLang =
      (localStorage.getItem("language") as "en" | "fr") ||
      (userLang === "en" ? "en" : "fr");
    setLanguage(savedLang);
  }, []);

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "fr" : "en";
    setLanguage(newLang);
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
