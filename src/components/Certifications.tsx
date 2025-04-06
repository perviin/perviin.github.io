import { motion } from 'framer-motion';

interface Certification {
  titre: string;
  organisme: string;
  date: string;
  description: string;
  image: string;
  certificatLien? : string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      titre: "Responsive Web Design",
      organisme: "freeCodeCamp",
      date: "2023",
      description: "La certification Responsive Web Design de FreeCodeCamp forme aux bases du HTML5, du CSS3 et aux techniques de design adaptatif, permettant de créer des sites web modernes et optimisés pour tous types d'écrans.",
      image: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
      certificatLien: "/certifs/responsiveWebDesign.PNG"
    },
    {
      titre: "MOOC",
      organisme: "ANSSI - SecNum Academie",
      date: "2023",
      description: "Le MOOC de l'ANSSI permet de sensibiliser à la cybersécurité et de fournir les clés pour protéger ses données et systèmes contre les cyberattaques.",
      image: "https://upload.wikimedia.org/wikipedia/fr/3/31/Anssi.png",
      certificatLien: "/certifs/mooc-pervin.PNG"
    },
    {
      titre: "English for IT 1",
      organisme: "Cisco",
      date: "2024",
      description: "La certification English for IT 1 de Cisco améliore les compétences en anglais pour mieux comprendre le vocabulaire et les termes techniques de l'informatique.",
      image: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
      certificatLien: "/certifs/english_for_it.pdf"
    },
    {
      titre: "Intro. à la Cyber",
      organisme: "Cisco",
      date: "2024",
      description: "La certification Introcution à cybersécurité de Cisco permet une introduction en douceur des différents concepts liés à la cybersécurité ainsi qu'aux enjeux de celle-ci.",
      image: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
      certificatLien: "/certifs/pervinEREN_IntroductionCyber.PNG"
    },
    {
      titre: "Découverte de Linux",
      organisme: "Cisco",
      date: "2024",
      description: "La certification Découverte de Linux de Cisco permet un apprentissage des bases du système d'exploitation de Linux, permettant une utilisation complète de cet OS.",
      image: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
      certificatLien: "/certifs/pervinEren_decouverteLinux.PNG"
    },
    {
      titre: "Networking Essentials",
      organisme: "Cisco",
      date: "2024",
      description: "La certification Networking Essentials de Cisco permet de comprendre les bases du Networking en assurant que ces bases puissent-être utilisé dans un contexte professionel.",
      image: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
      certificatLien: "/certifs/pervinEren_networkingEssentials.PNG"
    },
    {
      titre: "JavaScript Algorithms and Data Structures (EN COURS)",
      organisme: "freeCodeCamp",
      date: "2025",
      description: "La certification JavaScript Algorithms and Data Structures de freeCodeCamp permet d'assimiler les bases de JavaScript tout en les approfondissant dans la même certification.",
      image: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
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
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Mes certifications et diplômes</p>
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
            <motion.div
              className="relative w-full h-[400px] [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front of card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden">
                <img src={certification.image} alt={certification.titre} className="w-24 h-24 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certification.titre}</h3>
                <p className="text-primary-600 dark:text-white mb-2">{certification.organisme}</p>
                <p className="text-gray-500 dark:text-gray-400">{certification.date}</p>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)] backface-hidden">
                <p className="text-gray-600 dark:text-gray-300 text-center">{certification.description}</p>
                <div className="flex justify-center mt-5 gap-4">
                    <a 
                      href={certification.certificatLien} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      Visualiser la certification
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