import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contactez-moi</h2>
      <p className="text-gray-700 mb-10 text-center max-w-2xl">
        Vous souhaitez échanger à propos d’une opportunité, d’un projet ou simplement
        en savoir plus sur mon profil ?  
        N’hésitez pas à me contacter via ce formulaire ou mes réseaux 👇
      </p>

      {/* --- FORMULAIRE --- */}
      <form
        action="https://formspree.io/f/xyznbpvy" // 🔁 à remplacer par ton lien Formspree ou autre
        method="POST"
        className="w-full max-w-lg bg-white shadow-md rounded-xl p-8 space-y-4"
      >
        <div>
          <label className="block text-left font-medium text-gray-700 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ex : Kasasa Fiston"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-gray-700 mb-2">
            Adresse email
          </label>
          <input
            type="email"
            name="email"
            placeholder="exemple@email.com"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message..."
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer le message
        </button>
      </form>

      {/* --- AUTRES MOYENS DE CONTACT --- */}
      <div className="flex gap-8 mt-10 text-gray-700">
        <a
          href="mailto:kasasafiston@gmail.com"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Mail size={22} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/fiston-kasasa-04b026b3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Linkedin size={22} /> LinkedIn
        </a>
        <a
          href="https://github.com/fiston112"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Github size={22} /> GitHub
        </a>
        <a
          href="tel:+33 7 82 63 08 11"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Phone size={22} /> Téléphone
        </a>
      </div>
    </section>
  );
}
