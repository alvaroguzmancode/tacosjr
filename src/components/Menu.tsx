import { menu } from "../services/menuService";

export default function Menu() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Menú An Ténekchik</h2>

            <p className="text-gray-300 mb-4">
                Barbacoa de res, consomé y menudo dominical listos desde las 7:00 a. m. Aparta tu orden para recoger
                o recibe el antojo calientito en casa dentro de Ciudad Apodaca.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menu.map((item) => (
                    <li key={item.name} className="bg-gray-700 p-4 rounded-xl">
                        <p className="text-xl font-bold text-white">{item.name}</p>
                        <p className="text-sm text-gray-300 mt-1">
                            Presentación: {item.tortilla.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
