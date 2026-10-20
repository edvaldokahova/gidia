import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import Sparkle from "./Sparkle";

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-[400px]">
          <div className="absolute -inset-3 rounded-[36px] border border-gold/20" aria-hidden />
          <div className="relative overflow-hidden rounded-[28px]">
            <Image src="/media/gidia-real-1.webp" alt="Gídia de Jesus a falar para a câmara" width={720} height={1280} sizes="(max-width: 1024px) 80vw, 400px" className="aspect-[4/5] w-full object-cover object-center" />
          </div>
          <div className="card absolute -bottom-6 -right-2 sm:-right-8 flex items-center gap-2 px-5 py-3 text-sm text-ivory/80">
            <MapPin size={15} className="text-gold" /> {site.contactos.cidade}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="kicker"><Sparkle size={10} /> Quem é a Gídia</p>
            <h2 className="h2 mt-5">
              Comunicar é a forma mais rápida de <span className="gold italic">ser escolhido</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-7">
              Sou a {site.nomeCompleto}, comunicadora e criadora de conteúdos digitais. Empresto a minha voz, a minha imagem e a minha criatividade às marcas
              que querem ser vistas, ouvidas e lembradas.
            </p>
            <p className="lead mt-5">
              E porque sei o que é ter algo importante a dizer e travar, também ensino pessoas a <span className="text-ivory">falar sem medo</span>.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <blockquote className="mt-10 border-l border-gold pl-6 font-serif text-2xl sm:text-3xl italic leading-snug text-ivory/90">
              “A sua marca já tem valor. Falta a voz certa para o mostrar.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
