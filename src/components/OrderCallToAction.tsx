import { contact } from "../services/contactService";

export default function OrderCallToAction() {
    const waUrl = `https://wa.me/521${contact.whatsapp}?text=Hola,%20quiero%20hacer%20un%20pedido`;

    return (
        <div className="bg-fireRed p-6 rounded-xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-white">🔥 ¡Haz tu pedido Tacos J&amp;R a domicilio!</h2>
            <p className="text-white mt-2 text-lg">
                Rápido · Fácil · Entrega a domicilio
            </p>

            <a
                href={waUrl}
                target="_blank"
                className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-xl transition shadow-lg"
            >
                Pedir por WhatsApp
            </a>

            <p className="text-white mt-4 opacity-90">
                Tiempo estimado de entrega Tacos J&amp;R · <strong>20–30 min</strong>
            </p>
        </div>
    );
}
