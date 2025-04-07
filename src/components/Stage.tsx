import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

interface Stage {
  entreprise: string;
  periode: string;
  description: string;
  rapport?: string;
  technologies: string[];
}

export default function Stage() {
  const stages: Stage[] = [
    { 
      entreprise: "JANIN Consulting",
      periode: "Janvier - Mars 2024",
      description: "Stage de deuxième année en tant que développeuse fullstack.",
      //rapport: "/rapports/stage2.pdf",
      technologies: ["Angular", "Java Spring Boot"]
    },
    {
      entreprise: "DesCodeuses",
      periode: "Juin - Juillet 2023",
      description: "Stage de première année en tant que développeuse web et technicienne informatique",
      rapport: "/rapports/stage1.pdf",
      technologies: ["HTML5", "CSS3", "JavaScript ES6+"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Stages</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Mes expériences professionnelles</p>
        <div className="flex justify-center mt-5 gap-4">
          <a href="/synth/Pervin-Synthèse.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Visualiser mon tableau de synthèse</a>
          <a href="/synth/Pervin-Synthèse.pdf" target="_blank" download className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Télécharger mon tableau de synthèse</a>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-700"></div>
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stage.entreprise}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{stage.periode}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{stage.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Technologies utilisées:</p>
                    {stage.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {stage.rapport ? (
                    <motion.a
                      href={stage.rapport}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    <FaFilePdf className="mr-2" />
                      Voir le rapport
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg">
                      Stage en cours
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}