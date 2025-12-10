import { schedule, isOpenNow } from "../services/scheduleService";

export default function Schedule() {
    const sunday = schedule.find((d) => d.day === "Domingo");

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Solo domingos · Horario An Ténekchik</h2>

            <p className="text-gray-700 mb-6">
                Nuestra cocina solo abre los domingos. Aparta tu orden y disfruta barbacoa y menudo recién hechos desde
                las primeras horas de la mañana.
            </p>

            <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="bg-black text-white rounded-2xl p-6 space-y-4 shadow-xl">
                    <p className={`text-lg font-semibold ${isOpenNow() ? "text-white" : "text-gray-400"}`}>
                        {isOpenNow() ? "Estamos abiertos" : "Fuera de horario"}
                    </p>

                    {sunday && sunday.open && sunday.close ? (
                        <>
                            <p className="text-4xl font-extrabold">
                                {sunday.open} – {sunday.close}
                            </p>
                            <p className="text-gray-300">Domingo · Senna 742, Residencial Los Ebanos</p>
                        </>
                    ) : (
                        <p className="text-gray-400">Consulta disponibilidad por WhatsApp.</p>
                    )}

                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Preparaciones listas desde las 7:00 a. m.</li>
                        <li>• Aparta con anticipación para asegurar tu litro.</li>
                        <li>• Recolección en envases sellados listos para llevar.</li>
                    </ul>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-black p-6 flex items-center justify-center">
                    <img
                        src="/flyer.png"
                        alt="Flyer An Ténekchik barbacoa y menudo"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
