export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20 px-6"
    >
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Salut, moi c’est <span className="text-blue-600">Fiston Kasasa</span> 👋
      </h1>

      <h2 className="text-2xl text-gray-700 mb-6 max-w-2xl">
        Étudiant en <span className="font-semibold">Mastère 1 Management et Conseil en Systèmes d’Information à <span className="font-bold">l'ESGI Paris</span></span>. 
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed">
        Passionné par le <span className="font-semibold">Développement Web</span>, 
        l’<span className="font-semibold">Analyse de Données</span> et les 
        <span className="font-semibold"> Systèmes d’Information</span>.  
        Actuellement à la recherche d’une en tant que <span className="font-bold">Chef de Projet Informatique </span><span className="text-blue-600 font-semibold">Alternance </span> 
        pour approfondir mes compétences et contribuer à des projets innovants.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}