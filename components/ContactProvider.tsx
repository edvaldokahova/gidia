"use client";

import { createContext, useContext, useState } from "react";
import ContactModal from "./ContactModal";

const Ctx = createContext<{ abrir: (servicoId?: string) => void }>({ abrir: () => {} });

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const [servico, setServico] = useState("");
  return (
    <Ctx.Provider value={{ abrir: (id = "") => { setServico(id); setAberto(true); } }}>
      {children}
      <ContactModal aberto={aberto} servicoInicial={servico} onFechar={() => setAberto(false)} />
    </Ctx.Provider>
  );
}

export function ContactButton({ children, servico, className = "btn-gold" }: { children: React.ReactNode; servico?: string; className?: string }) {
  const { abrir } = useContext(Ctx);
  return (
    <button type="button" onClick={() => abrir(servico)} className={className}>
      {children}
    </button>
  );
}
