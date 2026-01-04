import { Github, ExternalLink, Code, Lightbulb } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
  };

  const projectCategories = [
    {
      title: 'APIs REST',
      projects: [
        {
          name: 'Système de Gestion Bancaire',
          description: 'API REST complète pour gestion des utilisateurs, contacts et transactions',
          technologies: ['Laravel', 'PHP', 'MySQL', 'REST API'],
          icon: '🏦',
        },
        {
          name: 'Système de Gestion Scolaire - Spring Boot',
          description: 'API REST pour gestion des utilisateurs, notes, cours, planning, matériels et administration',
          technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'REST API'],
          icon: '📚',
        },
        {
          name: 'Système de Gestion Scolaire - Django',
          description: 'API REST pour gestion des utilisateurs, notes, cours, planning, matériels et administration',
          technologies: ['Django', 'Python', 'SQLite', 'REST Framework'],
          icon: '🎓',
        },
      ],
    },
    {
      title: 'Applications Web',
      projects: [
        {
          name: 'CogniQuest++',
          description: 'Application web progressive de brain training avec 10 catégories de puzzles scientifiquement validés, combinant neurosciences, gamification et sécurité avancée',
          technologies: ['TypeScript', 'PWA', 'Neurosciences', 'Gamification'],
          icon: '🧠',
        },
        {
          name: 'Reproduction Site SophieJ',
          description: 'Reproduction du site SophieJ pour améliorer les bases HTML/CSS et découvrir différentes méthodes de développement',
          technologies: ['HTML', 'CSS', 'Responsive Design'],
          icon: '🎨',
        },
      ],
    },
    {
      title: 'Applications Desktop & Mobile',
      projects: [
        {
          name: 'ThinkAHead Game',
          description: 'Reproduction du jeu ThinkAHead avec interface Java Swing',
          technologies: ['Java', 'Swing', 'Game Development'],
          icon: '🎮',
        },
        {
          name: 'Gestion Bibliothèque',
          description: 'Application de gestion d\'une bibliothèque utilisant l\'ORM Sequelize',
          technologies: ['Node.js', 'Sequelize', 'Express', 'MySQL'],
          icon: '📖',
        },
        {
          name: 'Convertisseur Audio-Texte',
          description: 'Application de conversion audio vers texte et texte vers audio',
          technologies: ['Flutter', 'Dart', 'Speech Recognition', 'TTS'],
          icon: '🎵',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mes Projets & Réalisations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une diversité de projets allant du développement logiciel à l'entrepreneuriat digital
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {projectCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <AnimatedSection delay={0.1 * catIndex}>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
                  {category.title}
                </h3>
              </AnimatedSection>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.projects.map((project, projIndex) => (
                  <motion.div
                    key={projIndex}
                    variants={item}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                  <Github className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Découvrez mes projets sur GitHub
                  </h3>
                  <p className="text-gray-600">
                    Explorez mon code et mes contributions open source
                  </p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/thesenegalesehitch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Voir GitHub
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.6}>
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-4 mb-4">
                <Code size={32} />
                <h3 className="text-2xl font-bold">En Développement Continu</h3>
              </div>
              <p className="text-emerald-50">
                Toujours en train de développer de nouveaux projets et d'explorer les dernières technologies
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-4 mb-4">
                <Lightbulb size={32} />
                <h3 className="text-2xl font-bold">Innovation & Créativité</h3>
              </div>
              <p className="text-blue-50">
                Passionné par l'innovation et toujours à la recherche de solutions créatives aux défis techniques
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;
