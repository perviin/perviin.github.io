import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "DESIGN & UI/UX",
      description: "Créer des interfaces modernes et ergonomiques.",
      skills: ["Figma", "Canva"]
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "DÉVELOPPEMENT WEB",
      description: "Développer des applications web complètes, du front au back.",
      skills: [
        "HTML5", "CSS3", "JavaScript ES6+", "Vue.js", "React.js", "Angular",
        "PHP 8.4", "Java SE 23", "Python 3.14", "Node.js", "Laravel", "Spring Boot"
      ]
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "BASES DE DONNÉES & API",
      description: "Gérer les bases de données et développer des services web performants.",
      skills: ["SQL 2023", "HeidiSQL", "SQL Server", "PHP MyAdmin", "API REST", "Postman"]
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "OUTILS & ENVIRONNEMENT",
      description: "Utiliser les bons outils pour un développement efficace.",
      skills: ["VS Code", "Suite JetBrains", "Eclipse IDE", "Spyder", "Git", "GitHub"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Compétences</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Mes compétences techniques et professionnelles</p>

        <div className="flex justify-center mt-5 gap-4">
          <a href="/cv/cv_pervin_portfolio.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Visualiser mon CV</a>
          <a href="/cv/cv_pervin_portfolio.pdf" download className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Télécharger mon CV</a>
        </div>

      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 text-center">
              <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-6">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}