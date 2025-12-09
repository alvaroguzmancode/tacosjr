import { contact } from "../services/contactService";

export default function BusinessInfo() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Datos del negocio Tacos J&amp;R</h2>

            <p className="text-gray-300">Teléfono: <strong>{contact.phone}</strong></p>
            <p className="text-gray-300">WhatsApp: <strong>{contact.whatsapp}</strong></p>
            <p className="text-gray-300 mt-3">
                Dirección base de Tacos J&amp;R a domicilio: {contact.address}
            </p>
        </div>
    );
}
