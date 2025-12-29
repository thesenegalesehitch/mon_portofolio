import { Code2, Database, Cpu, Blocks } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
  };

  const skillCategories = [
    {
      title: 'Langages de Programmation',
      icon: <Code2 className="text-emerald-600" size={32} />,
      skills: [
        { name: 'Java', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'PHP', level: 75, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Blocks className="text-emerald-600" size={32} />,
      skills: [
        { name: 'Spring Boot', level: 90, color: 'from-green-600 to-emerald-600' },
        { name: 'Django', level: 90, color: 'from-green-700 to-teal-700' },
        { name: 'React', level: 80, color: 'from-cyan-500 to-blue-500' },
        { name: 'Express.js', level: 75, color: 'from-gray-600 to-slate-600' },
      ],
    },
    {
      title: 'Technologies Émergentes',
      icon: <Cpu className="text-emerald-600" size={32} />,
      skills: [
        { name: 'Intelligence Artificielle', level: 80, color: 'from-violet-500 to-purple-500' },
        { name: 'Blockchain', level: 75, color: 'from-amber-500 to-orange-500' },
        { name: 'Machine Learning', level: 75, color: 'from-pink-500 to-rose-500' },
      ],
    },
    {
      title: 'Bases de Données & Autres',
      icon: <Database className="text-emerald-600" size={32} />,
      skills: [
        { name: 'SQL', level: 85, color: 'from-blue-600 to-indigo-600' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Git', level: 85, color: 'from-red-600 to-orange-600' },
        { name: 'Architecture Systèmes', level: 80, color: 'from-teal-600 to-cyan-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mes Compétences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise diversifiée en développement back-end, avec une passion pour les technologies modernes
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-emerald-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Autres Compétences & Connaissances
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Algorithmique',
                'Mathématiques',
                'Systèmes Binaires',
                'Architecture des Ordinateurs',
                'Systèmes d\'Exploitation',
                'Entrepreneuriat',
                'E-commerce',
                'Trading & Crypto',
                'Création de Contenu',
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "#ecfdf5" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full font-medium hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
