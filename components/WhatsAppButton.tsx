import { MessageCircle } from "lucide-react";
import { defaultWaMessage, waLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(defaultWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald px-4 py-3 font-semibold text-white shadow-[0_12px_32px_-12px_rgba(34,197,94,0.8)] transition hover:-translate-y-0.5 hover:brightness-105 sm:right-6"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
