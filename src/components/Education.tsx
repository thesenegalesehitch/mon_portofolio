import { GraduationCap, BookOpen, Award } from 'lucide-react';

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
      institution: 'Lycée de Rufisque',
      period: 'Obtenu',
      location: 'Rufisque, Sénégal',
      description: 'Formation scientifique solide avec accent sur les mathématiques, la physique et les sciences',
      highlights: [
        'Solides bases en mathématiques',
        'Compétences analytiques développées',
        'Esprit scientifique et méthodologie',
      ],
      icon: <Award className="text-emerald-600" size={32} />,
      color: 'from-blue-500 to-cyan-500',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Formation & Éducation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours académique et ma formation continue en développement
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {educationPath.map((edu, index) => (
            <div
              key={index}
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">Matières & Domaines d'Expertise</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-white font-medium text-center hover:bg-white/20 transition-all duration-300"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Education;
