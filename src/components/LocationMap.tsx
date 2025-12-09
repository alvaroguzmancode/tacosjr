import { contact } from "../services/contactService";

export default function LocationMap() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ubicación</h2>

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
