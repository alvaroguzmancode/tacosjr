import { schedule, isOpenNow } from "../services/scheduleService";

export default function Schedule() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Horario de barbacoa y menudo</h2>

            <p className="text-gray-300 mb-3">
                An Ténekchik abre temprano los domingos para servir barbacoa y menudo recién hechos; agenda tu pedido
                y confirma disponibilidad.
            </p>

            <p className={`font-bold mb-4 ${isOpenNow() ? "text-green-400" : "text-red-400"}`}>
                {isOpenNow() ? "Abierto ahora" : "Cerrado ahora"}
            </p>

            <ul className="space-y-2">
                {schedule.map((d) => (
                    <li key={d.day} className="flex justify-between text-gray-200">
                        <span>{d.day}</span>
                        {d.open ? (
                            <span>{d.open} - {d.close}</span>
                        ) : (
                            <span className="text-red-400">CERRADO</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
