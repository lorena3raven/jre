import videoPilares from "@/assets/video-pilares.mp4";
import { Reveal } from "./Reveal";

const pillars = [
  {
    glyph: "♟",
    title: "Disciplina",
    text: "O talento abre a porta. A repetição silenciosa mantém você dentro dela.",
  },
  {
    glyph: "♞",
    title: "Estratégia",
    text: "Quem enxerga três movimentos à frente não depende da sorte do tabuleiro.",
  },
  {
  glyph: "♜",
  title: "Postura",
  text: "O medo não decide o próximo movimento. A coragem transforma intenção em conquista.",
},
  {
    glyph: "♚",
    title: "Legado",
    text: "Não é sobre vencer os outros. É sobre deixar um caminho para quem vem depois.",
  },
];

export function Pillars() {
  return (
    <section
  id="pilares"
  className="relative overflow-hidden bg-[#080808] py-10 md:py-20"
>
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[430px_1fr] lg:gap-20">
          {/* Vídeo vertical */}
          <Reveal className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden lg:max-w-[430px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 55%, rgba(0,0,0,0.9) 72%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 55%, rgba(0,0,0,0.9) 72%, transparent 100%)",
              }}
            >
              <source src={videoPilares} type="video/mp4" />
              Seu navegador não consegue reproduzir este vídeo.
            </video>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    to bottom,
                    #080808 0%,
                    rgba(8,8,8,0.2) 4%,
                    transparent 10%,
                    transparent 88%,
                    rgba(8,8,8,0.35) 96%,
                    #080808 100%
                  ),
                  linear-gradient(
                    to right,
                    #080808 0%,
                    rgba(8,8,8,0.34) 8%,
                    transparent 22%,
                    transparent 78%,
                    rgba(8,8,8,0.4) 92%,
                    #080808 100%
                  )
                `,
              }}
            />
          </Reveal>

          {/* Conteúdo dos pilares */}
          <div className="flex flex-col justify-center lg:pt-8">
            <div className="text-center lg:text-left">
              <Reveal>
                <p className="eyebrow relative top-0 lg:top-6">
                  Nossos Pilares
                </p>
              </Reveal>
            </div>

            {/* Dois pilares por linha também no mobile */}
            <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-0 sm:gap-x-10 sm:gap-y-8 lg:mt-14">
              {pillars.map((pillar, index) => (
                <Reveal
                  as="li"
                  key={pillar.title}
                  delay={index * 0.1}
                  className="group relative overflow-hidden border-t border-gold/25 px-1 py-6 text-center transition-all duration-500 active:scale-[0.99] active:border-gold/70 active:bg-gold/[0.04] sm:px-5 sm:py-7 sm:text-left sm:hover:border-gold/70 sm:hover:bg-gold/[0.025]"
                >
                  {/* Brilho */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 group-active:opacity-100"
                  />

                  {/* Numeração */}
                  <span className="relative block font-['Manrope'] text-[0.62rem] font-medium tracking-[0.25em] text-gold/70 transition-colors duration-500 group-hover:text-gold group-active:text-gold sm:text-[0.7rem] sm:tracking-[0.3em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Ícone e título */}
                  <div className="relative mt-5 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row min-[420px]:gap-4 sm:mt-7 sm:flex-row sm:justify-start sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="display gold-text block min-w-[2.8rem] text-center text-[2.8rem] leading-none transition-all duration-500 group-hover:scale-110 group-active:scale-110 group-active:drop-shadow-[0_0_14px_rgba(214,176,91,0.45)] sm:min-w-[4rem] sm:text-[4rem] sm:group-hover:drop-shadow-[0_0_14px_rgba(214,176,91,0.45)]"
                    >
                      {pillar.glyph}
                    </span>

                    <h3 className="display gold-text text-[0.9rem] transition-transform duration-500 group-hover:translate-x-1 group-active:translate-x-1 min-[420px]:text-base sm:text-xl md:text-2xl">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Descrição */}
                  <p className="relative mx-auto mt-4 max-w-[13rem] font-['Manrope'] text-[0.7rem] font-light leading-[1.6] tracking-[0.005em] text-[#d4d0c7] transition-colors duration-500 group-hover:text-[#eee9df] group-active:text-[#eee9df] min-[420px]:text-[0.76rem] sm:mx-0 sm:mt-5 sm:max-w-[19rem] sm:text-left sm:text-[0.85rem] sm:leading-[1.75] md:text-[0.9rem]">
                    {pillar.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}