import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Certification {
  titre: string;
  organisme: string;
  date: string;
  description: string;
  image: string;
  certificatLien?: string;
}

export default function Certifications() {
  const { t } = useTranslation();
  const certifications: Certification[] = t("certifications.list", {
    returnObjects: true,
  }) as Certification[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("certifications.heading")}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t("certifications.subheading")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            className="group perspective"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="relative w-full h-[400px] [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden">
                <img
                  src={certification.image}
                  alt={certification.titre}
                  className="w-24 h-24 mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {certification.titre}
                </h3>
                <p className="text-primary-600 dark:text-white mb-2">
                  {certification.organisme}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {certification.date}
                </p>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)] backface-hidden">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {certification.description}
                </p>
                <div className="flex justify-center mt-5 gap-4">
                  <a
                    href={certification.certificatLien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    {t("certifications.viewCertification")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
