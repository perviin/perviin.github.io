import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de moi</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Développeur web passionné et étudiant en BTS SIO</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Photo de profil circulaire */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-center"
        >
          <div className="w-64 h-64 rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-indigo-500 shadow-lg flex items-center justify-center">
            {/* Placeholder pour la photo - à remplacer par votre image */}
            <FaUser className="w-32 h-32 text-gray-300 dark:text-gray-600" />
          </div>
        </motion.div>

        {/* Description à droite */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Qui suis-je ?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bonjour, je suis étudiante en BTS SIO option SLAM, passionnée par le développement web et les technologies modernes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                Mon objectif est de devenir une développeur logicielle polyvalente, capable de concevoir des solutions numériques 
                innovantes et centrées sur les utilisateurs finaux. Curieuse et motivée, je suis constamment en quête de nouveaux savoirs 
                et d'amélioration continue.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}