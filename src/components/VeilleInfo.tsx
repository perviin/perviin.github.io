import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRss, FaSpinner, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';

const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;

interface Article {
  title: string;
  description: string;
  link: string; 
  pubDate: string;
  source: string;
}

export default function VeilleInfo() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news', {
            params: {
              q: 'IA',
              language: 'fr',
              apiKey: apiKey,
            }
          }
        );
        setArticles(response.data.results.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Veille Informatique</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              L'IA dans la vie quotidienne: bonus ou malus ?
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Qu'est-ce qu'une "Veille Informatique" ?</strong> Une veille informatique consiste à surveiller de manière continue les évolutions technologiques, les tendances du marché, et les innovations dans le domaine de l'informatique. Elle permet de se tenir informé des dernières avancées, de comprendre les enjeux actuels et futurs, et d’anticiper les évolutions qui pourraient impacter notre travail, nos projets ou la société en général. La veille est un outil indispensable pour tout professionnel du secteur technologique, car elle aide à prendre des décisions éclairées et à s'adapter rapidement aux changements.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Pourquoi ce thème si large ?</strong>  L'intelligence artificielle est aujourd'hui au cœur de nombreuses évolutions technologiques et sociales. Dans un monde où l'IA devient presque indispensable pour certaines personnes, une question se pose : cette dépendance pourrait-elle nuire à l'autonomie et à notre capacité à réfléchir par nous-mêmes ? Les avantages sont nombreux, mais à quel prix ? Que se passerait-il si l'IA cessait d'exister ou devenait obsolète ? Cette réflexion m'intéresse particulièrement, car elle interroge l'avenir et la manière dont nous intégrons les technologies dans notre vie, notamment dans la quête de sens et d'équilibre dans un monde toujours plus automatisé.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Dernières Actualités
            </h3>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <FaSpinner className="animate-spin text-4xl text-indigo-600 dark:text-indigo-400" />
              </div>
            ) : error ? (
              <div className="text-red-500 dark:text-red-400 text-center py-8">
                {error}
              </div>
            ) : (
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 space-x-4">
                          <span className="flex items-center">
                            <FaRss className="mr-2" />
                            {article.source}
                          </span>
                          <span className="flex items-center">
                            <FaCalendar className="mr-2" />
                            {formatDate(article.pubDate)}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Objectifs
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full"></span>
                  <span>Suivre les innovations en IA</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full"></span>
                  <span>Analyser l'impact sur les métiers existants</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full"></span>
                  <span>Identifier les nouvelles opportunités créer grâce à l'IA</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sources
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaRss className="text-indigo-500 mr-3" />
                  <span>Utilisation d'API pour automatiser les articles</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaRss className="text-indigo-500 mr-3" />
                  <span>Articles provenant de Newsletter</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaRss className="text-indigo-500 mr-3" />
                  <span>Rapports régulier et constant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}