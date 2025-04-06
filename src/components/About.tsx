import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">BTS SIO</h2>
        <p className="text-1xl text-gray-600 dark:text-gray-300">Brevet de Technicien Supérieur Services Informatiques aux Organisations</p>
        <p className="text-m py-2 text-dark-600 dark:text-gray-300">Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.</p>
        <p className="text-xl py-2 text-dark-600 dark:text-gray-300">Le BTS SIO propose deux spécialités :</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Option SLAM</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Solutions Logicielles et Applications Métiers
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Développement d'applications</li>
            <li>Programmation orientée objet</li>
            <li>Développement web et mobile</li>
            <li>Bases de données</li>
            <li>Cybersécurité</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Option SISR</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Solutions d'Infrastructure, Systèmes et Réseaux
          </p>
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