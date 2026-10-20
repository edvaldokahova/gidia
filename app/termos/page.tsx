import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Termos de serviço — Gídia" };

export default function Termos() {
  return (
    <LegalPage titulo="Termos de serviço">
      <p>Estes termos aplicam-se aos serviços de comunicação e marketing prestados por {site.nomeCompleto}.</p>
      <h2>Pedidos e propostas</h2>
      <p>Os pedidos feitos no site seguem para o WhatsApp. Cada projeto recebe uma proposta própria, com âmbito, prazo e valor, que só é vinculativa depois de aceite pelas duas partes.</p>
      <h2>Produção e revisões</h2>
      <p>O número de revisões incluídas é definido na proposta. Alterações fora do âmbito acordado podem ter custo adicional.</p>
      <h2>Direitos de uso</h2>
      <p>Após o pagamento integral, o cliente pode usar o conteúdo entregue nos canais e pelo período definidos na proposta. A Gídia pode mostrar o trabalho no seu portefólio, salvo pedido em contrário do cliente.</p>
      <h2>Imagem e voz</h2>
      <p>A utilização da imagem e da voz da Gídia (rosto de marca, locução) está limitada aos fins, canais e prazos acordados.</p>
      <h2>Contacto</h2>
      <p>{site.contactos.email} · WhatsApp {site.contactos.whatsappVisivel}</p>
    </LegalPage>
  );
}
