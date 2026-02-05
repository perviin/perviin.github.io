import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("me.heading")}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t("me.subheading")}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-center"
        >
          <div className="w-64 h-64 rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-indigo-500 shadow-lg flex items-center justify-center">
            <FaUser className="w-32 h-32 text-gray-300 dark:text-gray-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t("me.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t("me.text1")}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{t("me.text2")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
