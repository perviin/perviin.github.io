import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaTimes } from "react-icons/fa";

export default function LanguageNotification() {
  const { i18n } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    if (i18n.language !== currentLang) {
      setCurrentLang(i18n.language);
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [i18n.language]);

  const languageNames: { [key: string]: string } = {
    en: "English",
    fr: "Français",
  };

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 left-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg shadow-lg border border-indigo-400 dark:border-indigo-400"
        >
          <FaGlobe className="w-5 h-5" />
          <span className="font-medium">
            Language: {languageNames[i18n.language]}
          </span>
          <button
            onClick={() => setShowNotification(false)}
            className="hover:bg-indigo-700 dark:hover:bg-indigo-600 rounded transition-colors"
            aria-label="Close notification"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
