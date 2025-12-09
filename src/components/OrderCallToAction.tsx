import { contact } from "../services/contactService";

export default function OrderCallToAction() {
    const waUrl = `https://wa.me/521${contact.whatsapp}?text=Hola,%20quiero%20hacer%20un%20pedido`;
    const shareText = encodeURIComponent("Ordena tus tacos favoritos en Tacos J&R a domicilio: ");
    const shareUrl = encodeURIComponent("https://tacosjr.com");
    const shareWaUrl = `https://wa.me/?text=${shareText}${shareUrl}`;
    const phoneUrl = `tel:${contact.phone}`;

    return (
        <div className="bg-fireRed p-6 rounded-xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-white">🔥 ¡Haz tu pedido Tacos J&amp;R a domicilio!</h2>
            <p className="text-white mt-2 text-lg">
                Rápido · Fácil · Entrega a domicilio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-xl transition shadow-lg"
                >
                    Pedir por WhatsApp
                </a>
                <a
                    href={phoneUrl}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-xl text-xl transition shadow-lg"
                >
                    Llama ya
                </a>
                <a
                    href={shareWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl text-xl transition shadow-lg border border-white/20"
                >
                    Compartir enlace
                </a>
            </div>

            <p className="text-white mt-4 opacity-90">
                Tiempo estimado de entrega Tacos J&amp;R · <strong>20–30 min</strong>
            </p>
        </div>
    );
}
