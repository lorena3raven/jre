import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/jre/Nav";
import { Hero } from "@/components/jre/Hero";
import { Manifesto } from "@/components/jre/Manifesto";
import { Pillars } from "@/components/jre/Pillars";
import { Philosophy } from "@/components/jre/Philosophy";
import { Journey } from "@/components/jre/Journey";
import { Queen } from "@/components/jre/Queen";
import { Drop } from "@/components/jre/Drop";
import { Contact } from "@/components/jre/Contact";
import { Footer } from "@/components/jre/Footer";

const title = "JRE — Do Peão ao Rei | Vestuário Premium";
const description =
  "JRE: Jornada, Realeza e Estratégia. Vestuário premium inspirado no xadrez para quem constrói autoridade, disciplina e legado. Drop 01 em edição limitada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Brand",
          name: "JRE",
          slogan: "Todo peão pode se tornar rei através da estratégia.",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Philosophy />
        <Journey />
        <Queen />
        <Drop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
