const projets = [
  {
    title: "Mon Portfolio Personnel",
    description:
      "Site web développé avec React et TailwindCSS pour présenter mon parcours, mes compétences et mes projets.",
    tech: ["React", "TailwindCSS", "Vite"],
    link: "#",
  },
  {
    title: "Dashboard Power BI – Analyse des ventes",
    description:
      "Création d’un tableau de bord interactif pour visualiser la performance des ventes par produit, région et période.",
    tech: ["Power BI", "Excel", "DAX"],
    link: "#",
  },
  {
    title: "Base de Données – Système de Gestion Étudiants",
    description:
      "Conception d’une base de données SQL avec tables, relations et requêtes pour gérer les informations étudiantes.",
    tech: ["MySQL", "SQL Server", "Merise"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 mb-5">
      <h2 className="text-3xl font-bold text-center mb-20 text-blue-600">
        Mes Projets
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projets.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-lg rounded-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4 text-justify">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((tech, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="inline-block text-blue-600 hover:underline"
            >
              Voir plus →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
