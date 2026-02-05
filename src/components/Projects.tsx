import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  objectif: string;
  description: string;
  technologies: string[];
  time: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export default function Projects() {
  const Projects: Project[] = [
    {
      title: "ToDo List App",
      objectif: "Les bases de JavaScript",
      description:
        "Application de gestion de tâches. intéragissez avec le chien, il y a des surprises !. (inspiration du travail de Toby Fox)",
      technologies: ["Html5", "CSS3", "JavaScript ES6+"],
      time: "Temps de réalisation: 1h",
      image: "/media/todo.png",
      githubLink: "https://github.com/perviin/ToDoList-Js",
      liveLink: "https://perviin-todolist.netlify.app/",
    },
    {
      title: "Weather App",
      objectif: "Utilisation d'API REST",
      description: "Application météo",
      technologies: ["React", "Vite", "API REST"],
      time: "Temps de réalisation: 3h",
      image: "/media/weather.png",
      githubLink: "https://github.com/perviin/weather-app",
      liveLink: "https://perviin-weather.netlify.app/",
    },
    {
      title: "Îles en 3d",
      objectif:
        "Utilisation de three.js pour permettre le render 3d sur des pages web",
      description: "Render 3d d'îles réaliser en blender",
      technologies: ["Three.js", "Blender"],
      time: "Temps de réalisation: 1h",
      image: "/media/iles.png",
      githubLink: "https://github.com/perviin/Iles-three.js",
      liveLink: "https://perviin-iles.netlify.app/",
    },
    {
      title: "Chrome Dinosaure",
      objectif: "Première utilisation de Java Swing",
      description: "Le jeu du dinosaure de Chrome",
      technologies: ["Java", "Swing"],
      time: "Temps de réalisation: 1h",
      image: "/media/dino.png",
      githubLink: "https://github.com/perviin/ChromDino-JAVA",
    },
    {
      title: "Programme de Banque",
      objectif: "Apprendre les bases de python dans un cadre professionnel",
      description: "Programme de gestion de finance personnel python",
      technologies: ["Python"],
      time: "Temps de réalisation: 30 mins",
      image: "/media/banque.png",
      githubLink: "https://github.com/perviin/ProgrammeBanque_Python",
    },
    {
      title: "WhacAMole",
      objectif: "Pour approfondir Java Swing",
      description:
        "Jeu où il faut taper sur mes taupes afin de gagner des points et si",
      technologies: ["Java", "Swing"],
      time: "Temps de réalisation: 1h",
      image: "/media/whacamole.png",
      githubLink: "https://github.com/perviin/WhacAMole-JAVA",
    },
    /* {
      title: "Clone de Spotify",
      objectif: "Création d'une UX/UI basé sur une plateforme existante",
      description: "Plateforme recréant le visuel de spotify",
      technologies: ["Vue.js"],
      time: "Temps de réalisation: 1h30",
      image: "/media/spotify.png",
      githubLink: "https://github.com/perviin/Spotify-clone-VUE",
      liveLink: "https://perviin-spotify.netlify.app/",
    }, */
    {
      title: "Pokedex en JS",
      objectif:
        "Création d'un pokédex basé sur le jeu pokémon rouge, bleu et jaune",
      description: "Pokédex virtuel",
      technologies: ["JavaScript ES6+"],
      time: "Temps de réalisation: 1h30",
      image: "/media/pokedex.png",
      githubLink: "https://github.com/perviin/Pokedex-JS",
      liveLink: "https://perviin-pokedex.netlify.app/",
    },
    {
      title: "Pokéfight",
      objectif:
        "Développement d'un jeu de simulation de combat pokémon sur un modèle de DS",
      description: "Simple Simulateur de combat pokémon",
      technologies: ["React", "TypeScript"],
      time: "Temps de réalisation: 2 jours",
      image: "/media/pokefight.png",
      githubLink: "https://github.com/perviin/PokeFight",
      liveLink: "https://perviin-pokefight.netlify.app/",
    },
    {
      title: "Evently",
      objectif: "Utilisation de Laravel",
      description:
        "Plateforme de création et de répertorisation d'évènements à destination d'un public cible",
      technologies: ["Laravel", "Node.js"],
      time: "Temps de réalisation: En cours",
      image: "/media/evently.png",
      githubLink: "https://github.com/perviin/Gestion-events-LARAVEL",
    },
    {
      title: "Student Management System",
      objectif: "Créer une application fullstack de gestion d'étudiants",
      description: "Gestion d'étudiants en ligne",
      technologies: [
        "JavaScript ES6+",
        "Node.js",
        "Java",
        "Spring Boot",
        "C#",
        "Docker",
        "Kubernetes",
        "MySQL",
        "TypeScript",
      ],
      time: "Temps de réalisation: 3 jours",
      image: "/media/student-management.png",
      githubLink: "https://github.com/perviin/student-managment",
    },
    {
      title: "Expense Tracker",
      objectif: "Créer une application python complète de gestion de dépenses",
      description: "Gestion des dépenses personnelles",
      technologies: ["Python", "Python", "NumPy", "Pandas"],
      time: "Temps de réalisation: 2 jours",
      image: "/media/expense.png",
      githubLink: "https://github.com/perviin/expense-tracker",
    },
    {
      title: "Application gestion d'étudiant Docker",
      objectif: "Créer une application complète de gestion d'étudiants",
      description: "Gestion des dépenses personnelles",
      technologies: ["Python", "Python", "NumPy", "Pandas"],
      time: "Temps de réalisation: 2 jours",
      image: "/media/docker.png",
      githubLink: "https://github.com/perviin/examen-docker",
    },
  ];

  const ProjectSection = ({
    projects,
  }: {
    title: string;
    projects: Project[];
  }) => (
    <div className="mb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <h5 className="text-l font-semibold text-gray-900 dark:text-white mb-2">
                  {project.objectif}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-m text-gray-900 dark:text-white mb-2">
                  {project.time}
                </p>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Voir le code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

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
          Projets
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Découvrez mes réalisations
        </p>
      </motion.div>

      <ProjectSection title="Projets Personnels" projects={Projects} />
    </div>
  );
}
