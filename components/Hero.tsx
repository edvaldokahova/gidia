import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { ContactButton } from "./ContactProvider";
import Sparkle from "./Sparkle";

export default function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-0 min-h-[100svh] flex items-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute left-[-20%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-gold-deep/15 blur-[140px]" />
      </div>

      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:min-h-[100svh]">
        <div className="relative z-10 lg:py-32">
          <p className="kicker"><Sparkle size={10} /> Comunicação & Marketing · Lubango</p>
          <h1 className="mt-7 font-serif text-[52px] leading-[.95] sm:text-8xl lg:text-[104px] font-medium text-ivory">
            Presença
            <br />
            que <span className="gold italic">comunica</span>.
          </h1>
          <div className="mt-6 flex items-center gap-5">
            <p className="font-serif text-3xl sm:text-5xl italic text-ivory/85">Voz que transforma.</p>
            <div className="hidden sm:flex h-10 items-center gap-[3px]" aria-hidden>
              {[0.2, 0.5, 0.1, 0.7, 0.3, 0.9, 0.4, 0.6, 0.15].map((d, i) => (
                <span key={i} className="block h-full w-[3px] origin-center rounded-full bg-gold animate-wave" style={{ animationDelay: `${d}s` }} />
              ))}
            </div>
          </div>
          <p className="lead mt-8 max-w-lg">
            Comunicação estratégica, imagem e conteúdo que <span className="text-gold-light">conectam</span> marcas, pessoas e oportunidades.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ContactButton>Contratar agora <ArrowRight size={16} /></ContactButton>
            <a href="#video" className="btn-line"><Play size={14} /> Ouvir a minha voz</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none lg:self-end">
          <svg aria-hidden viewBox="0 0 500 760" className="absolute -left-10 -top-6 -z-0 hidden h-[105%] w-auto text-gold lg:block" fill="none">
            <path d="M120 10 C 20 180, 10 420, 110 600 S 330 760, 480 740" stroke="url(#g)" strokeWidth="2" strokeDasharray="1400" className="animate-draw" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#F3DCA6" />
                <stop offset=".5" stopColor="#C9A15B" />
                <stop offset="1" stopColor="#8C6A2F" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative overflow-hidden rounded-t-[220px] rounded-b-[28px] border border-gold/25">
            <Image src="/media/gidia-hero.webp" alt="Gídia de Jesus — Comunicação & Marketing" width={1038} height={1770} priority sizes="(max-width: 1024px) 90vw, 460px" className="h-auto w-full" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-noir to-transparent" />
          </div>
          <Sparkle size={22} className="absolute right-4 top-16 text-gold-light animate-twinkle" />
          <Sparkle size={12} className="absolute right-14 top-8 text-gold animate-twinkle [animation-delay:1.1s]" />
          <Sparkle size={16} className="absolute -left-2 bottom-40 text-gold-light animate-twinkle [animation-delay:2s]" />
        </div>
      </div>
    </section>
  );
}
