import jornada from "@/assets/phil-jornada.jpg";
import realeza from "@/assets/phil-realeza.jpg";
import estrategia from "@/assets/phil-estrategia.jpg";
import { Reveal } from "./Reveal";

const panels = [
  {
    letter: "J",
    title: "Jornada",
    img: jornada,
    alt: "Peão de xadrez iluminado sobre tabuleiro de mármore escuro",
    text: "Tudo começa no primeiro movimento. A evolução exige coragem, constância e propósito.",
  },
  {
    letter: "R",
    title: "Realeza",
    img: realeza,
    alt: "Coroa dourada ornamentada sobre base de mármore negro",
    text: "Realeza não é posição. É postura, responsabilidade, liderança e presença.",
  },
  {
    letter: "E",
    title: "Estratégia",
    img: estrategia,
    alt: "Mão movendo uma peça dourada no tabuleiro de xadrez",
    text: "Quem compreende o jogo não depende da sorte. Constrói o próprio caminho.",
  },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">A Filosofia</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="display gold-text mt-5 text-[clamp(2rem,5vw,3.6rem)]">
              <span className="block">Três letras.</span>

              <span className="block md:whitespace-nowrap">
                Um código de vida.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {panels.map((panel, index) => (
            <Reveal
              as="article"
              key={panel.letter}
              delay={index * 0.12}
              className="frame-gold group relative h-[62vh] min-h-[420px] overflow-hidden"
            >
              <img
                src={panel.img}
                alt={panel.alt}
                width={1000}
                height={1400}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-65 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "var(--gradient-veil)" }}
              />

              <span
  aria-hidden="true"
  className="display gold-text absolute right-5 top-2 text-[9rem] leading-none opacity-15 transition-opacity duration-700 group-hover:opacity-30"
>
  {panel.letter}
</span>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="display gold-text text-2xl">
  {panel.title}
</h3>

                <div className="my-4 h-px w-10 bg-gold/50 transition-all duration-700 group-hover:w-24" />

                <p className="max-w-sm font-['Manrope'] text-[0.9rem] font-light leading-[1.75] tracking-[0.01em] text-[#d4d0c7] md:text-[0.96rem]">
                  {panel.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}