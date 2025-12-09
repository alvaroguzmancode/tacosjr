import Menu from "./components/Menu";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 space-y-12">

      <header className="text-center pt-10">
        <img
          src="/logowbg.png"
          alt="Tacos J&R"
          className="w-48 mx-auto drop-shadow-xl"
        />

        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-xl">
          Tacos J&amp;R
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Sabor auténtico mexicano · Pedidos locales y a domicilio
        </p>
      </header>



      <main className="max-w-5xl mx-auto grid gap-10">
        <Schedule />
        <Menu />
        <Contact />
      </main>

      <footer className="text-center text-gray-400 py-10">
        © 2025  Tacos J&amp;R
      </footer>
    </div>
  );
}
