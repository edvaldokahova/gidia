import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle, MapPin, Facebook, Youtube } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const { contactos, redes } = site;
  const sociais = [
    { href: redes.instagram, label: "Instagram", Icon: Instagram },
    { href: redes.facebook, label: "Facebook", Icon: Facebook },
    { href: redes.youtube, label: "YouTube", Icon: Youtube },
  ].filter((s) => s.href);
  return (
    <footer className="border-t border-gold/15">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image src="/media/logo.png" alt="Gídia" width={1013} height={926} className="h-auto w-28" />
          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-ivory/55">Presença que comunica. Voz que transforma.</p>
          {sociais.length > 0 && (
            <div className="mt-6 flex gap-3">
              {sociais.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-[11px] uppercase tracking-[.28em] text-ivory/40">Contacto</p>
          <a href={`https://wa.me/${contactos.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-ivory/70 hover:text-ivory">
            <MessageCircle size={16} className="shrink-0 text-gold" /> {contactos.whatsappVisivel}
          </a>
          <a href={`mailto:${contactos.email}`} className="flex items-center gap-2.5 break-all text-ivory/70 hover:text-ivory">
            <Mail size={16} className="shrink-0 text-gold" /> {contactos.email}
          </a>
          <p className="flex items-center gap-2.5 text-ivory/70"><MapPin size={16} className="shrink-0 text-gold" /> {contactos.cidade}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-[11px] uppercase tracking-[.28em] text-ivory/40">Legal</p>
          <Link href="/termos" className="block text-ivory/70 hover:text-ivory">Termos de serviço</Link>
          <Link href="/privacidade" className="block text-ivory/70 hover:text-ivory">Política de privacidade</Link>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-ivory/35">© {new Date().getFullYear()} {site.marca}</div>
    </footer>
  );
}
