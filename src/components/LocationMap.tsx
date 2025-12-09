import { contact } from "../services/contactService";

export default function LocationMap() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ubicación de Tacos J&amp;R</h2>

            <p className="text-gray-300 mb-3">
                Desde este punto salen los repartidores de Tacos J&amp;R a domicilio para llevar tus tacos calientes.
            </p>

            <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
