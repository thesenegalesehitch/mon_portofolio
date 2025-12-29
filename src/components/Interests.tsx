import { Car, Gamepad2, Dumbbell, TrendingUp, Video, ShoppingBag } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Interests = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 50 } }
  };

  const interests = [
    {
      title: 'Informatique & Jeux Vidéos',
      description: 'Passionné depuis l\'enfance par la technologie et les univers virtuels',
      icon: <Gamepad2 className="text-white" size={40} />,
      gradient: 'from-purple-500 to-pink-500',
      details: ['Gaming', 'Développement de jeux', 'Technologies immersives'],
    },
    {
      title: 'Automobile',
      description: 'Amateur de conduite et passionné par les voitures',
      icon: <Car className="text-white" size={40} />,
      gradient: 'from-red-500 to-orange-500',
      details: ['Conduite', 'Mécanique', 'Nouvelles technologies auto'],
    },
    {
      title: 'Sports',
      description: 'Fan de basket et de football, pratique régulière',
      icon: <Dumbbell className="text-white" size={40} />,
      gradient: 'from-blue-500 to-cyan-500',
      details: ['Basketball', 'Football', 'Fitness'],
    },
    {
      title: 'Trading & Crypto',
      description: 'Analyse de marchés et investissement en cryptomonnaies',
      icon: <TrendingUp className="text-white" size={40} />,
      gradient: 'from-green-500 to-emerald-500',
      details: ['Trading', 'Cryptomonnaies', 'Analyse technique'],
    },
    {
      title: 'Création de Contenu',
      description: 'YouTube et TikTok faceless, montage et production',
      icon: <Video className="text-white" size={40} />,
      gradient: 'from-yellow-500 to-orange-500',
      details: ['YouTube', 'TikTok', 'Montage vidéo'],
    },
    {
      title: 'E-commerce',
      description: 'Gestion de boutiques en ligne et business digital',
      icon: <ShoppingBag className="text-white" size={40} />,
      gradient: 'from-teal-500 to-cyan-500',
      details: ['Boutiques en ligne', 'Marketing digital', 'Dropshipping'],
    },
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mes Passions & Intérêts
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Au-delà du code, je suis une personne aux multiples passions qui enrichissent ma vision du monde
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className={`bg-gradient-to-br ${interest.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {interest.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{interest.title}</h3>
              <p className="text-gray-600 mb-4">{interest.description}</p>

              <div className="space-y-2">
                {interest.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Curieux & Amateur de Défis</h3>
            <p className="text-lg text-emerald-50 max-w-3xl mx-auto mb-6">
              Ma curiosité naturelle et mon amour des défis me poussent constamment à explorer de nouveaux domaines,
              à apprendre continuellement et à repousser mes limites. Que ce soit dans le développement, l'entrepreneuriat
              ou mes hobbies, je recherche toujours l'excellence et l'innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                'Travailleur',
                'Assidu',
                'Curieux',
                'Ambitieux',
                'Innovant'
              ].map((quality, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium cursor-default"
                >
                  {quality}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Interests;
