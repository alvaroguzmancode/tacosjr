const facebookUrl = "https://www.facebook.com/profile.php?id=61582816932737";

export default function SocialFollow() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Síguenos en Facebook
      </h2>

      <p className="text-gray-300 mb-4">
        Mantente al día con las promociones de Tacos J&amp;R a domicilio y descubre
        nuevos especiales antes que nadie.
      </p>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition shadow-lg"
      >
        <img
          src="/logowbg.png"
          alt="Logo de Tacos J&R"
          className="w-10 h-10 rounded-full bg-white p-1"
        />
        <span>Síguenos y actívate con nuestras promos</span>
      </a>

      <p className="text-gray-400 text-sm mt-4">
        Facebook es nuestro canal oficial para avisar sobre combos exclusivos y
        entregas especiales.
      </p>
    </div>
  );
}
