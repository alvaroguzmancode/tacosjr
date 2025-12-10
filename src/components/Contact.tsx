import { contact } from "../services/contactService";

export default function Contact() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Contacto An Ténekchik</h2>

            <p className="text-gray-300">
                Llama y aparta tu litro de barbacoa o menudo:{" "}
                <span className="font-bold text-white">{contact.phone}</span>
            </p>
            <p className="text-gray-300">
                WhatsApp para pedidos y ubicaciones:{" "}
                <span className="font-bold text-green-400">{contact.whatsapp}</span>
            </p>
            <p className="text-gray-300 mt-3">
                Punto de venta para llevar: {contact.address}
            </p>

            <div className="w-full h-60 mt-4 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
