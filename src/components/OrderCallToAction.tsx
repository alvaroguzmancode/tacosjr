import { contact } from "../services/contactService";
import whatsappIcon from "../assets/whatsapp.svg";

export default function OrderCallToAction() {
    const waUrl = `https://wa.me/52${contact.whatsapp}?text=Hola,%20quiero%20apartar%20barbacoa%20y%20menudo%20para%20llevar%20este%20domingo`;
    const shareText = encodeURIComponent("An Ténekchik: barbacoa y menudo para llevar cada domingo. Conoce el menú y detalles aquí: ");
    const shareUrl = encodeURIComponent("https://antenek.alradex.com");
    const shareWaUrl = `https://wa.me/?text=${shareText}${shareUrl}`;

    return (
        <div className="bg-black p-6 rounded-2xl text-center shadow-2xl text-white">
            <h2 className="text-3xl font-bold">🔥 Aparta tu barbacoa o menudo</h2>
            <p className="mt-2 text-lg text-gray-100">
                An Ténekchik abre domingos 7:00 a. m. · Solo pedidos para llevar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-bold px-6 py-3 rounded-xl text-xl transition border border-black"
                >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                    <span>Pedir por WhatsApp</span>
                </a>
                <a
                    href={shareWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-black hover:bg-gray-900 text-white font-bold px-6 py-3 rounded-xl text-xl transition border border-white/20"
                >
                    Compartir ubicación/menú
                </a>
            </div>

            <p className="text-gray-200 mt-4 opacity-90">
                Barbacoa y menudo listos desde las 7:00 a. m. · <strong>Retira tu orden en el punto de venta</strong>
            </p>
        </div>
    );
}
