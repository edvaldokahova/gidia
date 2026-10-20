import { Mic, Camera, PlayCircle, Users } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const icones = [Mic, Camera, PlayCircle, Users];

export default function Pilares() {
  return (
    <section className="py-20 sm:py-24">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4">
        {site.pilares.map((p, i) => {
          const Icon = icones[i];
          return (
            <Reveal key={p.titulo} delay={i * 100} className={`px-4 py-8 text-center ${i % 2 === 1 ? "border-l border-gold/15" : ""} ${i > 1 ? "border-t border-gold/15 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Icon size={24} strokeWidth={1.4} />
              </div>
              <h3 className="mt-5 text-sm font-medium uppercase tracking-[.24em] text-ivory">{p.titulo}</h3>
              <p className="mx-auto mt-2 max-w-[200px] text-sm font-light leading-relaxed text-ivory/55">{p.texto}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
