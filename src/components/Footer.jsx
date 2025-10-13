import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-10 mt-1">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Texte gauche */}
        <p className="text-sm mb-6 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Mon Portefolio</span> — Tous droits réservés.
        </p>

        {/* Icônes sociales */}
        <div className="flex gap-8">
          <a
            href="https://github.com/fiston112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="GitHub"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/fiston-kasasa-04b026b3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="LinkedIn"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="mailto:kasasafiston@gmail.com"
            className="hover:scale-110 transition-transform duration-200"
            title="Email"
          >
            <Mail size={26} />
          </a>
        </div>
      </div>

      {/* Ligne décorative */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm opacity-80">
        Créé par <span className="text-yellow-300 font-semibold">Fiston Kasasa</span>
      </div>
    </footer>
  );
}