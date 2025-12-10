import { contact } from "../services/contactService";

export default function OrderCallToAction() {
    const waUrl = `https://wa.me/52${contact.whatsapp}?text=Hola,%20quiero%20apartar%20barbacoa%20y%20menudo%20para%20llevar%20este%20domingo`;
    const shareText = encodeURIComponent("Comparte An Ténekchik: barbacoa y menudo los domingos desde las 7 a.m. Dirección: ");
    const shareUrl = encodeURIComponent("https://maps.google.com/?q=25.792383239938864,-100.23556128684758");
    const shareWaUrl = `https://wa.me/?text=${shareText}${shareUrl}`;

    return (
        <div className="bg-fireRed p-6 rounded-xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-white">🔥 Aparta tu barbacoa o menudo</h2>
            <p className="text-white mt-2 text-lg">
                An Ténekchik abre domingos 7:00 a. m. · Solo pedidos para llevar
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
                    href={shareWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl text-xl transition shadow-lg border border-white/20"
                >
                    Compartir ubicación/menú
                </a>
            </div>

            <p className="text-white mt-4 opacity-90">
                Barbacoa y menudo listos desde las 7:00 a. m. · <strong>Retira tu orden en el punto de venta</strong>
            </p>
        </div>
    );
}
