import Menu from "./components/Menu";
import Schedule from "./components/Schedule";
import OrderCallToAction from "./components/OrderCallToAction";
import BusinessInfo from "./components/BusinessInfo";
import LocationMap from "./components/LocationMap";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 space-y-12">

      <header className="text-center pt-10">
        <h1 className="text-5xl font-extrabold text-yellow-400">
          Tacos J&amp;R
        </h1>
        <img
          src="/logowbg.png"
          alt="Tacos J&R"
          className="w-48 mx-auto drop-shadow-xl"
        />
        <p className="mt-3 text-gray-300 text-lg">
          Tacos J&amp;R cocina sabor auténtico mexicano y lo lleva directo a tu mesa.
        </p>
        <p className="text-gray-200 text-sm mt-2">
          Servicio completo de Tacos J&amp;R a domicilio en toda el área local: pide por WhatsApp o llámanos para recibir tus tacos calientes.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-10">
        <OrderCallToAction />
        <Menu />
        <Schedule />
        <BusinessInfo />
        <LocationMap />
      </main>

      <footer className="text-center text-gray-400 py-10">
        © 2025 Tacos J&R
      </footer>
    </div>
  );
}
