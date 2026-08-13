import { Reveal } from "./Reveal";

import peao from "@/assets/journey-01-peao.png";
import movimento from "@/assets/journey-02-movimento.png";
import cavalo from "@/assets/journey-03-cavalo.png";
import bispo from "@/assets/journey-04-bispo.png";
import torre from "@/assets/journey-05-torre.png";
import rei from "@/assets/journey-06-rei.png";

const steps = [
  {
    n: "01",
    img: peao,
    title: "Peão",
    text: "Todo grande Rei começou como um Peão. Aqui nasce a vontade de ir além.",
  },
  {
    n: "02",
    img: movimento,
    title: "Primeiro Movimento",
    text: "A decisão de sair do lugar é o que muda toda a história.",
  },
  {
    n: "03",
    img: cavalo,
    title: "Aprendizado",
    text: "Cada experiência ensina. Cada erro fortalece. Cada lição constrói o futuro.",
  },
  {
    n: "04",
    img: bispo,
    title: "Estratégia",
    text: "A mente que analisa, planeja e antecipa sempre estará à frente.",
  },
  {
    n: "05",
    img: torre,
    title: "Autoridade",
    text: "A confiança vem dos resultados. A liderança nasce do exemplo.",
  },
  {
    n: "06",
    img: rei,
    title: "Rei",
    text: "Não é sobre vencer os outros. É sobre ser a melhor versão de si mesmo.",
  },
];

export function Journey() {
  return (
    <section
      id="jornada"
      className="grain relative overflow-hidden bg-[#050505] pb-4 pt-0 md:pb-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 42%,
              rgba(173,112,24,0.08) 0%,
              transparent 47%
            ),
            radial-gradient(
              circle at 5% 40%,
              rgba(173,112,24,0.07) 0%,
              transparent 20%
            ),
            radial-gradient(
              circle at 95% 40%,
              rgba(173,112,24,0.07) 0%,
              transparent 20%
            )
          `,
        }}
      />

      <div className="relative mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span
              aria-hidden="true"
              className="display gold-text block text-2xl leading-none md:text-4xl"
            >
              ♛
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display gold-text mt-2 whitespace-nowrap text-[clamp(2.7rem,6.5vw,5.3rem)] leading-none">
              A Jornada
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mt-5 !text-[0.68rem] !tracking-[0.2em] md:!text-[0.78rem] md:!tracking-[0.35em]">
              Cada passo te leva mais perto do trono
            </p>
          </Reveal>
        </div>

        <div className="relative mt-6 md:mt-8">
          <ol className="relative grid grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.n}
                delay={index * 0.08}
                className="group relative min-w-0 cursor-default border-l border-t border-gold/15 px-2 pb-5 pt-5 text-center transition-all duration-500 odd:border-l-0 first:border-t-0 active:bg-gold/[0.035] [&:nth-child(2)]:border-t-0 lg:border-l-0 lg:border-t-0 lg:px-3 lg:pb-4 lg:pt-1 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-gold/15 lg:hover:bg-gold/[0.025]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-100 group-active:opacity-100"
                  style={{
                    background: `
                      radial-gradient(
                        ellipse at 50% 46%,
                        rgba(193,132,37,0.12) 0%,
                        rgba(113,72,15,0.04) 38%,
                        transparent 68%
                      )
                    `,
                  }}
                />

                <span className="display gold-text relative block text-[2.1rem] leading-none opacity-90 transition-all duration-500 group-hover:opacity-100 group-active:brightness-125 group-active:opacity-100 md:text-[2.5rem] lg:text-[2.7rem]">
                  {step.n}
                </span>

                <div className="relative mx-auto mt-3 flex items-center justify-center gap-1.5">
                  <span className="h-px w-5 bg-gradient-to-r from-transparent to-gold/60 transition-all duration-500 group-hover:w-7 group-active:w-7 md:w-7" />

                  <span className="h-1.5 w-1.5 rotate-45 border border-gold/80 transition-all duration-500 group-hover:bg-gold/25 group-active:bg-gold/25" />

                  <span className="h-px w-5 bg-gradient-to-l from-transparent to-gold/60 transition-all duration-500 group-hover:w-7 group-active:w-7 md:w-7" />
                </div>

                {/* Peça menor */}
                <div className="relative mx-auto mt-2 h-[120px] w-full min-[420px]:h-[140px] md:h-[165px] lg:h-[175px]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[15%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-gold/10 opacity-60 blur-[30px] transition-all duration-700 group-hover:bg-gold/20 group-hover:opacity-100 group-active:bg-gold/20 group-active:opacity-100"
                  />

                  <img
                    src={step.img}
                    alt={`Peça de xadrez representando ${step.title}`}
                    width={1024}
                    height={1536}
                    loading="lazy"
                    className="relative mx-auto h-full w-full max-w-[155px] object-contain transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.05] group-hover:drop-shadow-[0_0_16px_rgba(206,151,55,0.4)] group-active:-translate-y-1 group-active:scale-[1.05] group-active:drop-shadow-[0_0_16px_rgba(206,151,55,0.4)] md:max-w-[185px]"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 5%, black 98%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 5%, black 98%, transparent 100%)",
                    }}
                  />
                </div>

                <h3 className="display gold-text relative mx-auto flex min-h-[3.2rem] max-w-[11rem] items-center justify-center text-[1.05rem] leading-tight transition-all duration-500 group-hover:brightness-125 group-active:brightness-125 min-[420px]:text-[1.1rem] md:text-[1.2rem] lg:max-w-[13rem] lg:text-[1.15rem]">
                  {step.title}
                </h3>

                <div className="relative mx-auto mt-1 flex items-center justify-center gap-1.5">
                  <span className="h-px w-4 bg-gradient-to-r from-transparent to-gold/55 transition-all duration-700 group-hover:w-7 group-active:w-7" />

                  <span className="h-1 w-1 rotate-45 bg-gold/80 transition-all duration-500 group-hover:scale-125 group-active:scale-125" />

                  <span className="h-px w-4 bg-gradient-to-l from-transparent to-gold/55 transition-all duration-700 group-hover:w-7 group-active:w-7" />
                </div>

                <p className="relative mx-auto mt-4 max-w-[11rem] font-['Manrope'] text-[0.78rem] font-light leading-[1.7] tracking-[0.005em] text-[#d4d0c7] transition-colors duration-500 group-hover:text-[#f0ece3] group-active:text-[#f0ece3] min-[420px]:text-[0.82rem] md:max-w-[13rem] md:text-[0.88rem] lg:text-[0.86rem]">
                  {step.text}
                </p>

                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[6px] top-[43%] z-20 hidden -translate-y-1/2 text-[0.7rem] text-gold drop-shadow-[0_0_7px_rgba(214,176,91,0.7)] lg:block"
                  >
                    ◆
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}