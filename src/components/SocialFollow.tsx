import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";

const facebookUrl = "https://www.facebook.com/profile.php?id=100089537064613";
const instagramUrl = "https://www.instagram.com/an_tenekchik";

export default function SocialFollow() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center">
      <h2 className="text-3xl font-bold text-black mb-4">
        Síguenos en redes sociales
      </h2>

      <p className="text-gray-700 mb-4">
        Mantente al día con las promociones dominicales de An Ténekchik y descubre
        antes que nadie los surtidos de barbacoa y menudo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-black text-black hover:bg-gray-50 font-bold px-6 py-3 rounded-full transition shadow"
        >
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
          <span>Facebook oficial</span>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white hover:bg-gray-900 font-bold px-6 py-3 rounded-full transition shadow"
        >
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          <span>Instagram @an_tenekchik</span>
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-4">
        Publicamos horarios, combos y disponibilidad semanal antes de cada domingo.
      </p>
    </div>
  );
}
