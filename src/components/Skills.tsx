import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaTools,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
}

export default function Skills() {
  const { t } = useTranslation();
  const skillCategories: SkillCategory[] = [
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "DESIGN & UI/UX",
      description: "Créer des interfaces modernes et ergonomiques.",
      skills: ["Figma", "Canva", "Adobe XD", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "FRONT-END",
      description:
        "Construire des interfaces web interactives et performantes.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "TypeScript",
        "Vue.js",
        "React.js",
        "Angular",
        "Swing",
        "Tailwind CSS",
      ],
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "BACK-END",
      description: "Développer des serveurs robustes et des API scalables.",
      skills: [
        "PHP 8.4",
        "Java SE 23",
        "Python 3.14",
        "Node.js",
        "Laravel",
        "Spring Boot",
        "Symfony",
      ],
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "BASES DE DONNÉES",
      description: "Concevoir et gérer des bases de données performantes.",
      skills: ["SQL 2023", "HeidiSQL", "SQL Server", "PHP MyAdmin"],
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "API & WEB SERVICES",
      description: "Développer et tester des API REST performantes.",
      skills: ["API REST", "Postman"],
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "DEVOPS & CONTENEURISATION",
      description: "Automatiser les déploiements et gérer les environnements.",
      skills: ["Docker", "Git", "GitHub", "Kubernetes"],
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "OUTILS & IDE",
      description: "Utiliser les meilleurs environnements de développement.",
      skills: [
        "VS Code",
        "Suite JetBrains",
        "Eclipse IDE",
        "Spyder",
        "Git",
        "GitHub",
      ],
    },
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
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("skills.heading")}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {t("skills.subheading")}
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/cv/cv_pervin_portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            {t("skills.viewCV")}
          </a>
          <a
            href="/cv/cv_pervin_portfolio.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            {t("skills.downloadCV")}
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-indigo-600 dark:text-indigo-400 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
