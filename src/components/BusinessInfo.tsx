import { contact } from "../services/contactService";

export default function BusinessInfo() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4">Datos del negocio An Ténekchik</h2>

            <p className="text-gray-700">Teléfono: <strong>{contact.phone}</strong></p>
            <p className="text-gray-700">WhatsApp: <strong>{contact.whatsapp}</strong></p>
            <p className="text-gray-700 mt-3">
                Punto único de retiro: {contact.address}
            </p>
        </div>
    );
}
