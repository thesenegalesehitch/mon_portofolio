import { GraduationCap, BookOpen, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Education = () => {
  const educationPath = [
    {
      degree: 'BTS Développement Back-End',
      institution: 'ISEP Amadou Traoré de Diamniadio',
      period: 'En cours',
      location: 'Diamniadio, Sénégal',
      description: 'Formation intensive en développement back-end avec apprentissage approfondi de plusieurs langages et technologies',
      highlights: [
        'Développement d\'applications Java avec Spring Boot',
        'Développement Python avec Django',
        'Développement web avec PHP, JavaScript, Node.js',
        'Architecture des systèmes et bases de données',
        'Cours d\'entrepreneuriat et développement personnel',
      ],
      icon: <GraduationCap className="text-emerald-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      degree: 'Baccalauréat Scientifique',
      institution: 'Lycée Camp Marchand de Rufisque',
      period: 'Obtenu',
      location: 'Rufisque, Sénégal',
      description: 'Formation scientifique solide avec accent sur les mathématiques, la physique et les sciences',
      highlights: [
        'Solides bases en mathématiques',
        'Compétences analytiques développées',
        'Esprit scientifique et méthodologie',
      ],
      icon: <Award className="text-emerald-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      degree: 'C++ Training Crash Course for C++ Beginners',
      institution: 'Udemy - Crunch Coding Institute',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Formation intensive en C++ pour débutants, couvrant les bases du langage de programmation',
      highlights: [
        'Apprentissage des fondamentaux du C++',
        'Durée: 39 minutes',
        'Certificat Udemy: UC-23fe853f-260b-40a7-905a-2daf51bfdae2',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/1.jpg',
      url: 'http://ude.my/UC-23fe853f-260b-40a7-905a-2daf51bfdae2',
    },
    {
      degree: 'Learning & Development with Generative AI',
      institution: 'Udemy - Learnsector LLP',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Formation sur l\'apprentissage et le développement avec l\'intelligence artificielle générative',
      highlights: [
        'Exploration des technologies d\'IA générative',
        'Durée: 1 heure',
        'Certificat Udemy: UC-47fa2280-5de9-4f2c-b92f-43135dcbfcd5',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/2.jpg',
      url: 'http://ude.my/UC-47fa2280-5de9-4f2c-b92f-43135dcbfcd5',
    },
    {
      degree: 'Web3 Development Essentials',
      institution: 'Udemy - MT Institute of Management, Technology and Finance',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Essentiels du développement Web3, technologies blockchain et décentralisées',
      highlights: [
        'Fondamentaux du développement Web3',
        'Durée: 31 minutes',
        'Certificat Udemy: UC-333e9ce8-21aa-4ea9-b914-988824375829',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/3.jpg',
      url: 'http://ude.my/UC-333e9ce8-21aa-4ea9-b914-988824375829',
    },
    {
      degree: 'Facebook Ads Targeting Strategies For Success Fast',
      institution: 'Udemy - Yasir Ahmed, MBA',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Stratégies de ciblage publicitaire sur Facebook pour réussir rapidement',
      highlights: [
        'Techniques de ciblage Facebook Ads',
        'Durée: 1 heure',
        'Certificat Udemy: UC-66107cd4-d206-4eb6-b5f0-74674c0b1a9a',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/4.jpg',
      url: 'http://ude.my/UC-66107cd4-d206-4eb6-b5f0-74674cOb1a9a',
    },
    {
      degree: 'Your WORDS, Powerful Tools',
      institution: 'Udemy - Baba Oyewole, Helen Hicks',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Utilisation des mots comme outils puissants pour la communication et l\'influence',
      highlights: [
        'Maîtrise de la communication verbale',
        'Durée: 1 heure',
        'Certificat Udemy: UC-68763964-f493-4f24-aea5-cad3fd150526',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/5.jpg',
      url: 'http://ude.my/UC-68763964-f493-4f24-aea5-cad3fd150526',
    },
    {
      degree: 'Javascript Practicals Crash Course',
      institution: 'Udemy - PROPER DOT INSTITUTE',
      period: '27 janvier 2026',
      location: 'En ligne',
      description: 'Cours intensif pratique sur JavaScript pour les débutants',
      highlights: [
        'Pratiques essentielles de JavaScript',
        'Durée: 38 minutes',
        'Certificat Udemy: UC-f33d3094-3344-4853-9d9d-035f5b5ea0a8',
      ],
      icon: <Award className="text-purple-600" size={32} />,
      color: 'from-emerald-500 to-teal-500',
      image: '/6.jpg',
      url: 'http://ude.my/UC-f33d3094-3344-4853-9d9d-035f5b5ea0a8',
    },
  ];

  const coursework = [
    'HTML & CSS',
    'Algorithmique',
    'Mathématiques Appliquées',
    'Systèmes Binaires',
    'Architecture des Ordinateurs',
    'Systèmes d\'Exploitation',
    'Java & Spring Boot',
    'Python & Django',
    'PHP',
    'JavaScript & Node.js',
    'Bases de Données SQL',
    'Entrepreneuriat Digital',
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Formation & Éducation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mon parcours académique et ma formation continue en développement
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12 mb-16">
          {educationPath.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`bg-gradient-to-br ${edu.color} p-6 rounded-2xl shadow-lg`}>
                      {edu.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-emerald-600 font-semibold mb-1">{edu.institution}</p>
                        <p className="text-gray-500">{edu.location}</p>
                      </div>
                      <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{edu.description}</p>

                    <div className="space-y-3">
                       {edu.highlights.map((highlight, hIndex) => (
                         <div key={hIndex} className="flex items-start gap-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                           <p className="text-gray-700">{highlight}</p>
                         </div>
                       ))}
                     </div>

                     {edu.image && edu.url && (
                       <div className="mt-6">
                         <a
                           href={edu.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block"
                         >
                           <img
                             src={edu.image}
                             alt={edu.degree}
                             className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                           />
                         </a>
                       </div>
                     )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Matières & Domaines d'Expertise</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coursework.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-white font-medium text-center hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>


        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              En apprentissage continu et toujours à la recherche de nouvelles connaissances
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full">
              <span className="text-emerald-700 font-semibold">
                Passionné par l'Intelligence Artificielle et la Blockchain
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
