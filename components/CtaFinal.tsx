import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { ContactButton } from "./ContactProvider";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section id="contacto" className="pb-20 sm:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[40px] border border-gold/25 px-6 py-16 text-center sm:px-16 sm:py-24">
            <div aria-hidden className="absolute inset-0 -z-10 bg-noir-2 bg-[radial-gradient(ellipse_at_top,rgba(201,161,91,.22),transparent_60%)]" />
            <Image src="/media/logo.png" alt="Gídia — Comunicação & Marketing" width={1013} height={926} className="mx-auto h-auto w-40 sm:w-48" />
            <h2 className="h2 mx-auto mt-10 max-w-3xl">A sua marca merece ser <span className="gold italic">ouvida</span>.</h2>
            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ivory/60">
              {site.paraQuem.map((p) => (
                <li key={p} className="flex items-center gap-2"><Check size={15} className="text-gold" /> {p}</li>
              ))}
            </ul>
            <div className="mt-11">
              <ContactButton>Começar o meu projeto <ArrowRight size={16} /></ContactButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
