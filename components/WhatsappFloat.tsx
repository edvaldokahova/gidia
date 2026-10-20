import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a href={`https://wa.me/${site.contactos.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-noir shadow-[0_10px_30px_-5px_rgba(201,161,91,.6)] transition-transform hover:scale-110">
      <MessageCircle size={24} />
    </a>
  );
}
