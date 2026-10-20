// ============================================================
// GÍDIA — Comunicação & Marketing
// Todo o conteúdo editável do site está AQUI.
// ============================================================

export const site = {
  nome: "Gídia",
  nomeCompleto: "Gídia de Jesus",
  marca: "Gídia — Comunicação & Marketing",
  url: "https://gidia.vercel.app", // trocar pelo domínio quando existir

  contactos: {
    whatsapp: "244954402933",
    whatsappVisivel: "+244 954 402 933",
    email: "gidiajesus189@gmail.com",
    cidade: "Lubango, Angola",
  },

  redes: {
    instagram: "https://www.instagram.com/gidia_comunicacao/",
    tiktok: "",
    facebook: "",
    youtube: "",
  },

  servicos: [
    {
      id: "locucao",
      icone: "Mic",
      titulo: "Locução & Narração",
      texto: "Voz para anúncios, vídeos institucionais e conteúdos digitais. Uma voz que prende e faz confiar.",
    },
    {
      id: "videos",
      icone: "Film",
      titulo: "Vídeos Publicitários",
      texto: "Apresentação de produtos, serviços e campanhas para as redes sociais, do guião à entrega.",
    },
    {
      id: "rosto",
      icone: "Sparkles",
      titulo: "Rosto de Marca",
      texto: "Representação da sua marca em campanhas, anúncios e conteúdos promocionais.",
    },
    {
      id: "conteudo",
      icone: "Smartphone",
      titulo: "Criação de Conteúdo",
      texto: "Conteúdos criativos para Instagram, TikTok, Facebook e outras plataformas.",
    },
    {
      id: "comercial",
      icone: "Camera",
      titulo: "Conteúdo Comercial",
      texto: "Fotos e vídeos promocionais para empresas, lojas, profissionais e projetos.",
    },
    {
      id: "falar",
      icone: "MessageCircle",
      titulo: "Falar sem Medo",
      texto: "Acompanhamento para quem quer comunicar com segurança, em frente à câmara ou ao público.",
    },
  ],

  pilares: [
    { titulo: "Voz", texto: "Locução e narração profissional." },
    { titulo: "Imagem", texto: "Rosto de marcas e campanhas que geram impacto." },
    { titulo: "Conteúdo", texto: "Vídeos e conteúdos criativos para a sua marca." },
    { titulo: "Parcerias", texto: "Conexões que geram valor e resultados reais." },
  ],

  processo: [
    { titulo: "Conversa", texto: "Conhecemos a sua marca, o seu público e o que quer alcançar." },
    { titulo: "Ideia", texto: "Definimos a mensagem, o tom e o guião certo para comunicar." },
    { titulo: "Produção", texto: "Voz, imagem e vídeo com cuidado em cada detalhe." },
    { titulo: "Entrega", texto: "Conteúdo pronto a publicar, no formato de cada plataforma." },
  ],

  paraQuem: ["Marcas e empresas", "Lojas e negócios locais", "Profissionais liberais", "Projetos e eventos"],
};

export type Servico = (typeof site.servicos)[number];

export function waLink(texto: string) {
  return `https://wa.me/${site.contactos.whatsapp}?text=${encodeURIComponent(texto)}`;
}
