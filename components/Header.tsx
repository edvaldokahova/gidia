"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ContactButton } from "./ContactProvider";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#video", label: "Vídeo" },
  { href: "#processo", label: "Processo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [solido, setSolido] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const on = () => setSolido(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solido || menu ? "border-b border-gold/15 bg-noir/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="wrap flex h-16 sm:h-20 items-center justify-between">
        <a href="#topo" onClick={() => setMenu(false)} className="flex items-center gap-3" aria-label="Gídia — início">
          <Image src="/media/logo-g.png" alt="" width={48} height={48} priority className="h-9 w-9 sm:h-11 sm:w-11" />
          <span className="leading-none">
            <span className="block font-serif text-2xl gold">Gídia</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[.28em] text-ivory/50">Comunicação & Marketing</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] uppercase tracking-[.18em] text-ivory/60">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold-light">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactButton className="btn-gold !px-5 !py-2.5 !text-xs hidden sm:inline-flex">Contratar</ContactButton>
          <button onClick={() => setMenu(!menu)} className="lg:hidden rounded-full p-2 text-ivory" aria-label={menu ? "Fechar menu" : "Abrir menu"}>
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="lg:hidden wrap pb-7 pt-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenu(false)} className="block border-b border-ivory/10 py-4 font-serif text-2xl text-ivory">{l.label}</a>
          ))}
          <div className="mt-6" onClick={() => setMenu(false)}>
            <ContactButton className="btn-gold w-full">Contratar a Gídia</ContactButton>
          </div>
        </nav>
      )}
    </header>
  );
}
