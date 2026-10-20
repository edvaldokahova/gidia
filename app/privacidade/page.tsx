import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de privacidade — Gídia" };

export default function Privacidade() {
  return (
    <LegalPage titulo="Política de privacidade">
      <p>Este site não cria contas nem guarda os seus dados numa base de dados.</p>
      <h2>Que dados recebemos</h2>
      <p>Quando faz um pedido, os dados que escreve (nome, marca, serviço, prazo e a sua ideia) são colocados numa mensagem que o próprio visitante envia pelo WhatsApp. Só os recebemos se enviar essa mensagem.</p>
      <h2>Para que usamos</h2>
      <p>Apenas para responder ao seu pedido, preparar a proposta e acompanhar o projeto.</p>
      <h2>Partilha</h2>
      <p>Não vendemos nem partilhamos os seus dados com terceiros.</p>
      <h2>Os seus direitos</h2>
      <p>Pode pedir a qualquer momento que apaguemos as suas mensagens e dados: {site.contactos.email}.</p>
    </LegalPage>
  );
}
