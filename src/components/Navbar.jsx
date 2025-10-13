export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow flex justify-between items-center p-4 bg-white shadow bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <h1 className="text-2xl font-bold text-white-600"><a href="#home">Mon Portefolio</a></h1>
      <ul className="flex gap-6 text-lg">
        <li>
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">
            À propos
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
