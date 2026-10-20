import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pilares from "@/components/Pilares";
import Sobre from "@/components/Sobre";
import Video from "@/components/Video";
import Servicos from "@/components/Servicos";
import Processo from "@/components/Processo";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import { ContactProvider } from "@/components/ContactProvider";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.marca,
  founder: site.nomeCompleto,
  image: `${site.url}/media/logo.png`,
  email: site.contactos.email,
  telephone: `+${site.contactos.whatsapp}`,
  address: { "@type": "PostalAddress", addressLocality: "Lubango", addressCountry: "AO" },
  sameAs: [site.redes.instagram].filter(Boolean),
};

export default function Home() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Pilares />
        <Sobre />
        <Video />
        <Servicos />
        <Processo />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </ContactProvider>
  );
}
