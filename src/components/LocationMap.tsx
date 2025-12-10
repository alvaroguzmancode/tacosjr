import { contact } from "../services/contactService";

export default function LocationMap() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ubicación de An Ténekchik</h2>

            <p className="text-gray-300 mb-3">
                Aquí te esperamos cada domingo desde las 7:00 a. m. para recoger tu barbacoa y menudo recién hechos.
            </p>

            <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>

            <a
                href="https://maps.google.com/?q=25.792383239938864,-100.23556128684758"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl transition shadow-lg"
            >
                Abrir en Google Maps
            </a>
        </div>
    );
}
