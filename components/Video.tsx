"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";
import Sparkle from "./Sparkle";
import { ContactButton } from "./ContactProvider";

export default function Video() {
  const ref = useRef<HTMLVideoElement>(null);
  const [aTocar, setATocar] = useState(false);

  function tocar() {
    setATocar(true);
    ref.current?.play();
  }

  return (
    <section id="video" className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-noir-2 to-transparent">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_auto]">
        <Reveal className="order-2 lg:order-1">
          <p className="kicker"><Sparkle size={10} /> Veja e ouça</p>
          <h2 className="h2 mt-5">
            Um minuto.
            <br />
            <span className="gold italic">Uma voz.</span>
          </h2>
          <p className="lead mt-6 max-w-md">Antes de contratar, sinta como eu comunico. É assim que a sua marca vai soar.</p>
          <div className="mt-9">
            <ContactButton>Quero esta voz na minha marca</ContactButton>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2 mx-auto w-full max-w-[340px]">
          <div className="relative rounded-[44px] border border-gold/30 bg-black p-2.5 shadow-[0_40px_120px_-30px_rgba(201,161,91,.45)]">
            <video
              ref={ref}
              className="aspect-[9/16] w-full rounded-[36px] object-cover"
              src="/media/gidia-video.mp4"
              poster="/media/gidia-poster.webp"
              controls={aTocar}
              playsInline
              preload="none"
              onPause={() => ref.current?.ended && setATocar(false)}
            />
            {!aTocar && (
              <button onClick={tocar} aria-label="Reproduzir vídeo" className="absolute inset-2.5 flex items-center justify-center rounded-[36px] bg-noir/30 transition-colors hover:bg-noir/10">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-noir shadow-[0_0_0_10px_rgba(201,161,91,.18)]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
                  <Play size={28} className="relative ml-1" fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
