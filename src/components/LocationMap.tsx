import { contact } from "../services/contactService";

export default function LocationMap() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ubicación de Tacos J&amp;R</h2>

            <p className="text-gray-300 mb-3">
                Desde este punto salen los repartidores de Tacos J&amp;R a domicilio para llevar tus tacos calientes.
            </p>

            <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>

            <a
                href="https://www.google.com/maps/place/Tacos+J%26R/@25.710798,-100.2640153,19z/data=!3m1!4b1!4m7!3m6!1s0x866295a4bd660a1f:0xfd272075dce5f0da!8m2!3d25.7107968!4d-100.2627989!15sCglUYWNvcyBKJlKSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11yls0pbgj?entry=tts&g_ep=EgoyMDI1MTIwMi4wIPu8ASoASAFQAw%3D%3D&skid=3301bf84-48ce-42b0-be22-4fb5b497b6eb"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl transition shadow-lg"
            >
                Abrir en Google Maps
            </a>
        </div>
    );
}
