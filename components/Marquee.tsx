import Sparkle from "./Sparkle";

const itens = ["Locução", "Narração", "Rosto de marca", "Vídeos publicitários", "Conteúdo digital", "Falar sem medo"];

export default function Marquee() {
  const linha = [...itens, ...itens];
  return (
    <div className="relative overflow-hidden border-y border-gold/15 py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {linha.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl sm:text-3xl italic text-ivory/80">
            {t}
            <Sparkle size={14} className="text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
