import { site } from "@/lib/site";
import Reveal from "./Reveal";
import Sparkle from "./Sparkle";

export default function Processo() {
  return (
    <section id="processo" className="py-20 sm:py-28">
      <div className="wrap">
        <Reveal className="text-center">
          <p className="kicker"><Sparkle size={10} /> Como trabalhamos</p>
          <h2 className="h2 mx-auto mt-5 max-w-3xl">Da primeira conversa ao conteúdo <span className="gold italic">publicado</span>.</h2>
        </Reveal>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden className="rule absolute left-0 right-0 top-[7px] hidden md:block" />
          {site.processo.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120} className="relative text-center md:text-left">
              <Sparkle size={16} className="relative mx-auto md:mx-0 text-gold" />
              <p className="mt-6 font-serif text-5xl text-ivory/15">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-2xl text-ivory">{p.titulo}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ivory/60">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
