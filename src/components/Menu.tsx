import { menu } from "../services/menuService";

export default function Menu() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">Menú An Ténekchik</h2>

            <p className="text-gray-700 mb-4">
                Barbacoa de res, consomé y menudo dominical listos desde las 7:00 a. m. Aparta tu orden para recoger
                y llévala directamente a tu mesa.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menu.map((item) => (
                    <li key={item.name} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <p className="text-xl font-bold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Presentación: {item.tortilla.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
