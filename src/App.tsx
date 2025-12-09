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
          Tacos J&R
        </h1>
        <p className="mt-3 text-gray-300 text-lg">
          Sabor auténtico mexicano · Pedidos locales y a domicilio
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
