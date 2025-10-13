export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center bg-white">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">À propos de moi</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Je m'appelle <span className="font-bold text-blue-600">Fiston Kasasa</span>, 
        étudiant en <span className="font-semibold">Mastère 1 Management et Conseil en Systèmes d’Information</span> à 
        l’<span className="font-semibold">ESGI Paris</span>. Passionné par la technologie, 
        je m’intéresse particulièrement à  la <span className="font-semibold">Gestion de Projets Informatiques</span>, au <span className="font-semibold">Développement Web</span>, 
        à l’<span className="font-semibold">Analyse de Données</span> et aux 
        <span className="font-semibold"> Systèmes d’Information</span>.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Mon parcours m’a permis de développer des compétences à la fois 
        <span className="font-semibold"> techniques </span> et 
        <span className="font-semibold"> organisationnelles </span> : 
        j’ai pu travailler sur la gestion de projets IT, la conception de bases de données,
        la visualisation de données avec Power BI, et le développement d’interfaces web modernes.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Mes précédentes expériences, notamment comme <span className="font-semibold">Chef de Projet IT</span>, 
        <span className="font-semibold"> Assistant en Base de Données</span> et 
        <span className="font-semibold"> Consultant CRM</span>, 
        m’ont appris à collaborer efficacement avec des équipes pluridisciplinaires 
        et à assurer le lien entre les besoins métiers et les solutions techniques.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Actuellement, je suis à la recherche d’une 
        <span className="text-blue-600 font-semibold"> alternance </span> 
        afin de mettre mes compétences en pratique et de contribuer à des 
        <span className="font-semibold"> projets innovants </span> au sein d’une entreprise dynamique.
      </p>

      {/* Bloc compétences */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "HTML & CSS / JavaScript",
          "SQL / MySQL / SQL Server",
          "Power BI / python",
          "GitHub",
          "Jira / Trello",
          "Gestion de projet / Agile",
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}