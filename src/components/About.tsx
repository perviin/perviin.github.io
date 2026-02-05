import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
        <p className="text-1xl text-gray-600 dark:text-gray-300">{t('about.subtitle')}</p>
        <p className="text-m py-2 text-dark-600 dark:text-gray-300">{t('about.description')}</p>
        <p className="text-xl py-2 text-dark-600 dark:text-gray-300">{t('about.specialties')}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{t('about.slam.title')}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('about.slam.subtitle')}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {t('about.slam.skills', { returnObjects: true }).map((skill: string, idx: number) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{t('about.sisr.title')}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('about.sisr.subtitle')}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {t('about.sisr.skills', { returnObjects: true }).map((skill: string, idx: number) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Administration systèmes</li>
            <li>Réseaux informatiques</li>
            <li>Virtualisation</li>
            <li>Services d'infrastructure</li>
            <li>Sécurité des systèmes</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}