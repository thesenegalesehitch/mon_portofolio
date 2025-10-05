import { Github, ExternalLink, Code, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      title: 'Développement Back-End',
      projects: [
        {
          name: 'Applications Java avec Spring Boot',
          description: 'Développement d\'applications enterprise robustes et scalables',
          technologies: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
          icon: '🚀',
        },
        {
          name: 'APIs Python avec Django',
          description: 'Création d\'APIs performantes et sécurisées',
          technologies: ['Python', 'Django', 'REST Framework', 'SQLite'],
          icon: '🐍',
        },
        {
          name: 'Serveurs Node.js',
          description: 'Applications web temps réel avec Express et Node.js',
          technologies: ['Node.js', 'Express', 'MongoDB', 'WebSocket'],
          icon: '⚡',
        },
      ],
    },
    {
      title: 'Intelligence Artificielle & Blockchain',
      projects: [
        {
          name: 'Projets d\'IA',
          description: 'Recherche et développement en Machine Learning et Deep Learning',
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
          icon: '🤖',
        },
        {
          name: 'Exploration Blockchain',
          description: 'Smart contracts et applications décentralisées',
          technologies: ['Solidity', 'Web3', 'Ethereum', 'Smart Contracts'],
          icon: '⛓️',
        },
      ],
    },
    {
      title: 'Business & Entrepreneuriat',
      projects: [
        {
          name: 'E-commerce',
          description: 'Gestion de boutiques en ligne et dropshipping',
          technologies: ['Shopify', 'WooCommerce', 'Marketing Digital'],
          icon: '🛒',
        },
        {
          name: 'Contenu Digital',
          description: 'Création de contenu YouTube et TikTok faceless',
          technologies: ['Montage Vidéo', 'SEO', 'Social Media'],
          icon: '📱',
        },
        {
          name: 'Trading & Crypto',
          description: 'Analyse de marchés et investissement en cryptomonnaies',
          technologies: ['Trading', 'Analyse Technique', 'Crypto'],
          icon: '💹',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets & Réalisations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une diversité de projets allant du développement logiciel à l'entrepreneuriat digital
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
            <a
              href="https://github.com/thesenegalesehitch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Voir GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Code size={32} />
              <h3 className="text-2xl font-bold">En Développement Continu</h3>
            </div>
            <p className="text-emerald-50">
              Toujours en train de développer de nouveaux projets et d'explorer les dernières technologies
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb size={32} />
              <h3 className="text-2xl font-bold">Innovation & Créativité</h3>
            </div>
            <p className="text-blue-50">
              Passionné par l'innovation et toujours à la recherche de solutions créatives aux défis techniques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
