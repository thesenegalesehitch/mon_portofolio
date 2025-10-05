import { Mail, Phone, Github, Twitter, Instagram, Linkedin, MessageSquare, Camera } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-emerald-600" size={24} />,
      label: 'Téléphone',
      value: '+221 77 386 57 44',
      href: 'tel:+221773865744',
      subValue: '+221 76 542 08 55',
      subHref: 'tel:+221765420855',
    },
    {
      icon: <Mail className="text-emerald-600" size={24} />,
      label: 'Email Personnel',
      value: 'ndouralexandre09@gmail.com',
      href: 'mailto:ndouralexandre09@gmail.com',
    },
    {
      icon: <Mail className="text-emerald-600" size={24} />,
      label: 'Email Académique',
      value: 'aa.ndour5@isepdiamniadio.edu.sn',
      href: 'mailto:aa.ndour5@isepdiamniadio.edu.sn',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={28} />,
      href: 'https://github.com/thesenegalesehitch',
      color: 'hover:bg-gray-800',
      username: '@thesenegalesehitch',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={28} />,
      href: 'https://www.linkedin.com/in/alexandre-albert-ndour-407b33340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:bg-blue-700',
      username: 'Alexandre Albert Ndour',
    },
    {
      name: 'Twitter (X)',
      icon: <Twitter size={28} />,
      href: 'https://x.com/ynw_221?s=21',
      color: 'hover:bg-black',
      username: '@ynw_221',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={28} />,
      href: 'https://www.instagram.com/1lex__x0ndr3?igsh=MTFweDZkaHJ3cjVxOQ%3D%3D&utm_source=qr',
      color: 'hover:bg-pink-600',
      username: '@1lex__x0ndr3',
    },
    {
      name: 'Snapchat',
      icon: <Camera size={28} />,
      href: 'https://snapchat.com/t/H8cmgm5C',
      color: 'hover:bg-yellow-400',
      username: 'Snapchat',
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare size={28} />,
      href: 'https://wa.me/221773865744',
      color: 'hover:bg-green-500',
      username: '+221 77 386 57 44',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour des opportunités de collaboration, des projets ou simplement pour échanger
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-3 rounded-xl">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{method.label}</p>
                      <a
                        href={method.href}
                        className="text-gray-900 font-semibold hover:text-emerald-600 transition-colors block"
                      >
                        {method.value}
                      </a>
                      {method.subValue && (
                        <a
                          href={method.subHref}
                          className="text-gray-700 hover:text-emerald-600 transition-colors block mt-1"
                        >
                          {method.subValue}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Disponibilité</h3>
              <p className="text-emerald-50 mb-4">
                Je suis actuellement disponible pour des projets freelance, des stages et des opportunités
                de collaboration. N'hésitez pas à me contacter !
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Disponible maintenant</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Réseaux Sociaux</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 ${social.color} hover:text-white group`}
                  >
                    <div className="text-gray-700 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors truncate">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors truncate">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp QR Code</h3>
              <div className="flex justify-center">
                <img
                  src="/image.png"
                  alt="WhatsApp QR Code"
                  className="w-48 h-48 rounded-xl border-4 border-gray-100"
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Scannez pour m'ajouter sur WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Travaillons Ensemble !</h3>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto mb-6">
            Que vous ayez un projet en tête, une opportunité à discuter, ou simplement envie d'échanger
            sur la tech, n'hésitez pas à me contacter. Je réponds généralement sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ndouralexandre09@gmail.com"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Envoyer un Email
            </a>
            <a
              href="https://wa.me/221773865744"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
