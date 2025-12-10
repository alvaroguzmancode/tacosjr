import { contact } from "../services/contactService";

export default function LocationMap() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4">Ubicación de An Ténekchik</h2>

            <p className="text-gray-700 mb-3">
                Aquí te esperamos cada domingo desde las 7:00 a. m. para recoger tu barbacoa y menudo recién hechos.
            </p>

            <div className="w-full h-60 rounded-2xl overflow-hidden shadow border border-gray-100">
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
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-black text-white hover:bg-gray-900 font-bold px-4 py-3 rounded-xl transition"
            >
                Abrir en Google Maps
            </a>
        </div>
    );
}
