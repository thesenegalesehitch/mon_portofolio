import { MapPin, Calendar, Languages, User } from 'lucide-react';

const About = () => {
  const facts = [
    {
      icon: <User className="text-emerald-600" size={24} />,
      label: 'Âge',
      value: '20 ans',
    },
    {
      icon: <Calendar className="text-emerald-600" size={24} />,
      label: 'Né le',
      value: '29 Janvier 2005',
    },
    {
      icon: <MapPin className="text-emerald-600" size={24} />,
      label: 'Localisation',
      value: 'Rufisque, Sénégal',
    },
    {
      icon: <Languages className="text-emerald-600" size={24} />,
      label: 'Langues',
      value: 'Wolof, Français, Anglais',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            À Propos de Moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed">
                Passionné par l'informatique et les jeux vidéos depuis mon plus jeune âge, j'ai toujours
                été fasciné par la technologie et son potentiel de transformation. Après l'obtention de
                mon <span className="font-semibold text-emerald-600">Bac Scientifique</span>, j'ai intégré
                l'<span className="font-semibold text-emerald-600">ISEP Amadou Traoré de Diamniadio</span> pour
                poursuivre un BTS en développement back-end.
              </p>

              <p className="leading-relaxed">
                Ma formation approfondie couvre de nombreux domaines : HTML, CSS, algorithmique, mathématiques,
                systèmes binaires, architecture des ordinateurs, systèmes d'exploitation, et cours d'entrepreneuriat.
                Je maîtrise plusieurs langages de programmation incluant Java, PHP, JavaScript, Node.js, Python et
                leurs frameworks respectifs.
              </p>

              <p className="leading-relaxed">
                Je me sens particulièrement à l'aise avec <span className="font-semibold text-emerald-600">Java
                et Python</span>, ainsi que leurs frameworks comme <span className="font-semibold text-emerald-600">
                Spring Boot et Django</span>. Au-delà du développement, je m'intéresse vivement à
                l'<span className="font-semibold text-emerald-600">intelligence artificielle</span> et à la
                <span className="font-semibold text-emerald-600"> blockchain</span>, domaines dans lesquels
                je mène de nombreuses recherches.
              </p>

              <p className="leading-relaxed">
                Travailleur, assidu, curieux et amateur de défis, j'explore également l'entrepreneuriat à travers
                de petits business en e-commerce, création de contenu YouTube et TikTok faceless, trading et crypto.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{fact.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{fact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Prêt à collaborer ?</h3>
              <p className="text-emerald-50">
                Je suis toujours ouvert à de nouvelles opportunités et projets passionnants.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Travaillons Ensemble
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
