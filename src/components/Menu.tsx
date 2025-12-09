import { menu } from "../services/menuService";

export default function Menu() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Menú Tacos J&amp;R</h2>

            <p className="text-gray-300 mb-4">
                Cada especialidad de Tacos J&amp;R está disponible para recoger o recibir a domicilio,
                perfecto para compartir sin salir de casa.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menu.map((item) => (
                    <li key={item.name} className="bg-gray-700 p-4 rounded-xl">
                        <p className="text-xl font-bold text-white">{item.name}</p>
                        <p className="text-sm text-gray-300 mt-1">
                            Tortilla: {item.tortilla.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
