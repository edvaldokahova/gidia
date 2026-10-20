"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import { site, waLink } from "@/lib/site";
import Sparkle from "./Sparkle";

const prazos = ["Urgente", "Esta semana", "Este mês", "Sem pressa"];

export default function ContactModal({ aberto, servicoInicial, onFechar }: { aberto: boolean; servicoInicial: string; onFechar: () => void }) {
  const [montado, setMontado] = useState(false);
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [servico, setServico] = useState("");
  const [prazo, setPrazo] = useState("Esta semana");
  const [ideia, setIdeia] = useState("");

  useEffect(() => setMontado(true), []);
  useEffect(() => {
    if (!aberto) return;
    setServico(servicoInicial);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [aberto, servicoInicial, onFechar]);

  if (!montado || !aberto) return null;

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const s = site.servicos.find((x) => x.id === servico);
    const msg = [
      `Olá Gídia! Vim pelo seu site e quero trabalhar consigo.`,
      ``,
      `• Nome: ${nome}`,
      marca ? `• Marca/Empresa: ${marca}` : "",
      `• Serviço: ${s ? s.titulo : "Ainda não sei, preciso de orientação"}`,
      `• Prazo: ${prazo}`,
      ideia ? `• A ideia: ${ideia}` : "",
    ].filter(Boolean);
    window.open(waLink(msg.join("\n")), "_blank", "noopener,noreferrer");
    onFechar();
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-noir/85 backdrop-blur-sm" onClick={onFechar} />
      <form onSubmit={enviar} className="relative w-full sm:max-w-lg max-h-[92svh] overflow-y-auto rounded-t-[32px] sm:rounded-[32px] border border-gold/25 bg-noir-2 p-6 sm:p-9">
        <button type="button" onClick={onFechar} aria-label="Fechar" className="absolute right-4 top-4 rounded-full p-2 text-ivory/50 hover:bg-ivory/10 hover:text-ivory">
          <X size={20} />
        </button>
        <p className="kicker"><Sparkle size={10} /> Vamos conversar</p>
        <h3 className="mt-3 font-serif text-3xl text-ivory">Conte-me sobre a sua marca.</h3>
        <p className="mt-2 text-sm font-light text-ivory/55">A mensagem segue pronta para o meu WhatsApp. Respondo pessoalmente.</p>

        <div className="mt-7 space-y-3">
          <input required className="field" placeholder="O seu nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" />
          <input className="field" placeholder="Marca ou empresa (opcional)" value={marca} onChange={(e) => setMarca(e.target.value)} />
          <select className="field appearance-none" value={servico} onChange={(e) => setServico(e.target.value)}>
            <option value="" className="bg-noir-2">Ainda não sei — preciso de orientação</option>
            {site.servicos.map((s) => (
              <option key={s.id} value={s.id} className="bg-noir-2">{s.titulo}</option>
            ))}
          </select>
          <div>
            <p className="mb-2 text-xs text-ivory/50">Para quando?</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {prazos.map((p) => (
                <button key={p} type="button" onClick={() => setPrazo(p)} className={`rounded-2xl border py-2.5 text-xs transition-colors ${prazo === p ? "border-gold bg-gold/15 text-gold-light" : "border-ivory/10 text-ivory/60 hover:border-ivory/25"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <textarea className="field" rows={3} placeholder="A sua ideia em poucas palavras (opcional)" value={ideia} onChange={(e) => setIdeia(e.target.value)} />
        </div>

        <button type="submit" className="btn-gold mt-6 w-full">
          Enviar pelo WhatsApp <ArrowRight size={16} />
        </button>
      </form>
    </div>,
    document.body
  );
}
