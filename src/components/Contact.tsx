import { contact } from "../services/contactService";

export default function Contact() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Contacto An Ténekchik</h2>

            <p className="text-gray-700">
                Llama y aparta tu litro de barbacoa o menudo:{" "}
                <span className="font-bold text-black">{contact.phone}</span>
            </p>
            <p className="text-gray-700">
                WhatsApp para pedidos y ubicaciones:{" "}
                <span className="font-bold text-black">{contact.whatsapp}</span>
            </p>
            <p className="text-gray-700 mt-3">
                Punto de venta para llevar: {contact.address}
            </p>

            <div className="w-full h-60 mt-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
