const facebookUrl = "https://www.facebook.com/profile.php?id=100089537064613";
const instagramUrl = "https://www.instagram.com/an_tenekchik";

export default function SocialFollow() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Síguenos en redes sociales
      </h2>

      <p className="text-gray-300 mb-4">
        Mantente al día con las promociones dominicales de An Ténekchik y descubre
        antes que nadie los surtidos de barbacoa y menudo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition shadow-lg"
        >
          <span aria-hidden="true">📘</span>
          <span>Facebook oficial</span>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-full transition shadow-lg"
        >
          <span aria-hidden="true">📸</span>
          <span>Instagram @an_tenekchik</span>
        </a>
      </div>

      <p className="text-gray-400 text-sm mt-4">
        Publicamos horarios, combos y disponibilidad semanal antes de cada domingo.
      </p>
    </div>
  );
}
