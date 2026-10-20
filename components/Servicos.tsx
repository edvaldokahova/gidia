import { Mic, Film, Sparkles, Smartphone, Camera, MessageCircle, ArrowUpRight, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import Sparkle from "./Sparkle";
import { ContactButton } from "./ContactProvider";

const icones: Record<string, LucideIcon> = { Mic, Film, Sparkles, Smartphone, Camera, MessageCircle };

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="wrap">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker"><Sparkle size={10} /> Serviços</p>
            <h2 className="h2 mt-5 max-w-2xl">Tudo o que a sua marca precisa para <span className="gold italic">ser notada</span>.</h2>
          </div>
          <p className="lead max-w-sm">Escolha um serviço e envie o pedido. Cada projeto é feito à medida.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.servicos.map((s, i) => {
            const Icon = icones[s.icone] ?? Sparkles;
            return (
              <Reveal key={s.id} delay={(i % 3) * 90}>
                <div className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
                  <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-colors duration-700 group-hover:bg-gold/20" />
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-3xl text-ivory/15">0{i + 1}</span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl text-ivory">{s.titulo}</h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-ivory/60">{s.texto}</p>
                  <ContactButton servico={s.id} className="mt-7 inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-[.2em] text-gold transition-colors hover:text-gold-light">
                    Pedir proposta <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </ContactButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
