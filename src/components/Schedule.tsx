import { schedule, isOpenNow } from "../services/scheduleService";

export default function Schedule() {
    const sunday = schedule.find((d) => d.day === "Domingo");

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Solo domingos · Horario An Ténekchik</h2>

            <p className="text-gray-300 mb-6">
                Nuestra cocina abre únicamente los domingos. Aparta tu orden y vive la experiencia de barbacoa y menudo
                recién hechos desde primera hora.
            </p>

            <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="bg-gray-900/60 border border-yellow-500/30 rounded-2xl p-6 space-y-4">
                    <p className={`text-lg font-semibold ${isOpenNow() ? "text-green-400" : "text-red-400"}`}>
                        {isOpenNow() ? "Estamos abiertos" : "Fuera de horario"}
                    </p>

                    {sunday && sunday.open && sunday.close ? (
                        <>
                            <p className="text-4xl font-extrabold text-white">
                                {sunday.open} – {sunday.close}
                            </p>
                            <p className="text-gray-300">Domingo · Punto de retiro Senna 742</p>
                        </>
                    ) : (
                        <p className="text-gray-400">Consulta disponibilidad por WhatsApp.</p>
                    )}

                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Preparaciones listas desde las 7:00 a. m.</li>
                        <li>• Aparta con anticipación para asegurar tu litro.</li>
                        <li>• Recolección en envases sellados listos para llevar.</li>
                    </ul>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-xl border border-white/10">
                    <img
                        src="/flyer.png"
                        alt="Flyer An Ténekchik barbacoa y menudo"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
