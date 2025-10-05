import { useState, useEffect } from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, Code2, Briefcase, GraduationCap, Heart, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'education', label: 'Formation' },
    { id: 'projects', label: 'Projets' },
    { id: 'interests', label: 'Passions' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AAN
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Interests />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/thesenegalesehitch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://x.com/ynw_221?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/1lex__x0ndr3?igsh=MTFweDZkaHJ3cjVxOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandre-albert-ndour-407b33340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Alexandre Albert Ndour. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
