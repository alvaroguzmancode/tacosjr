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

            <div className="mt-4 flex flex-col gap-3">
                <a
                    href="https://maps.google.com/?q=25.792383239938864,-100.23556128684758"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-black text-white hover:bg-gray-900 font-bold px-4 py-3 rounded-xl transition"
                >
                    Abrir en Google Maps
                </a>
                <a
                    href="https://wa.me/?text=Ubicación%20de%20An%20Ténekchik%3A%20https%3A%2F%2Fmaps.google.com%2F%3Fq%3D25.792383239938864,-100.23556128684758"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white border border-black text-black hover:bg-gray-50 font-bold px-4 py-3 rounded-xl transition"
                >
                    Compartir enlace por WhatsApp
                </a>
            </div>
        </div>
    );
}
