import Menu from "./components/Menu";
import Schedule from "./components/Schedule";
import OrderCallToAction from "./components/OrderCallToAction";
import BusinessInfo from "./components/BusinessInfo";
import LocationMap from "./components/LocationMap";
import SocialFollow from "./components/SocialFollow";
import FloatingCallButton from "./components/FloatingCallButton";

export default function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 p-6 space-y-12">

      <header className="text-center pt-10">
        <h1 className="text-5xl font-extrabold text-black">
          An Ténekchik
        </h1>
        <img
          src="/logowbg.png"
          alt="An Ténekchik"
          className="w-48 mx-auto drop-shadow-xl"
        />
        <p className="mt-3 text-gray-600 text-lg">
          Barbacoa y menudo tradicionales listos desde las 7:00 a. m. cada domingo en Ciudad Apodaca.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          An Ténekchik trabaja 100% para llevar: agenda tu litro por WhatsApp o llamada y pasa por él en el punto de venta.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-10">
        <OrderCallToAction />
        <Menu />
        <Schedule />
        <BusinessInfo />
        <SocialFollow />
        <LocationMap />
      </main>

      <footer className="text-center text-gray-500 py-10 border-t border-gray-200">
        © 2025 An Ténekchik · Barbacoa y Menudo
      </footer>

      <FloatingCallButton />
    </div>
  );
}
