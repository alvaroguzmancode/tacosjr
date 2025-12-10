import { contact } from "../services/contactService";

export default function FloatingCallButton() {
  const phoneUrl = `tel:${contact.phone}`;

  return (
    <a
      href={phoneUrl}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-2xl rounded-full w-16 h-16 flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Llamar a An Ténekchik"
    >
      <span className="text-3xl" aria-hidden="true">
        📞
      </span>
    </a>
  );
}
