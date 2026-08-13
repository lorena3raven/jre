import model from "@/assets/queen-model.jpg";
import { Reveal } from "./Reveal";
import { Crown } from "./Monogram";

export function Queen() {
  return (
    <section
      id="rainha"
      className="grain relative overflow-hidden bg-[#050505] pb-8 pt-6 lg:py-20"
    >
      {/* Halo dourado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-1/2 h-[65vmin] w-[65vmin] -translate-y-1/2 opacity-55"
        style={{ background: "var(--halo-gold)" }}
      />

      <div className="relative mx-auto grid max-w-[1450px] items-center gap-3 px-5 sm:px-8 lg:grid-cols-[minmax(0,590px)_minmax(0,720px)] lg:justify-center lg:gap-2 lg:px-10">
        {/* Conteúdo abaixo da foto no mobile */}
        <div className="order-2 relative z-10 mx-auto w-full max-w-[520px] text-center lg:order-1 lg:max-w-[590px] lg:justify-self-end lg:pr-3 lg:text-left">
          <Reveal>
            <h2 className="display gold-text text-[clamp(2.55rem,12vw,4rem)] leading-[0.95] lg:text-[clamp(2.8rem,5.5vw,5rem)]">
              A Rainha
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="display mx-auto mt-2 max-w-[22rem] text-sm leading-snug tracking-[0.035em] text-[#f3efe6] sm:text-base lg:mx-0 lg:max-w-none lg:text-lg lg:tracking-[0.06em]">
              A peça mais poderosa do tabuleiro.
            </p>
          </Reveal>

          <div className="mx-auto mt-6 max-w-[430px] lg:mx-0 lg:mt-8 lg:max-w-[570px]">
            <Reveal delay={0.16}>
              <p className="font-['Manrope'] text-[0.88rem] font-light leading-[1.7] tracking-[0.01em] text-[#d4d0c7] sm:text-[0.94rem] lg:text-[1rem] lg:leading-[1.75]">
                No xadrez, o Rei carrega a coroa, mas é a Rainha quem domina o
                tabuleiro.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="display gold-text mt-4 text-base leading-relaxed sm:text-lg lg:mt-5 lg:text-xl">
                Liberdade. Alcance. Decisão. Presença.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-4 font-['Manrope'] text-[0.88rem] font-light leading-[1.7] tracking-[0.01em] text-[#d4d0c7] sm:text-[0.94rem] lg:mt-5 lg:text-[1rem] lg:leading-[1.75]">
                A coleção feminina da JRE traduz autoridade e elegância em cada
                detalhe, permitindo que a mulher dite suas próprias regras e
                lidere com estratégia e confiança.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-5 lg:mt-7">
                <p className="display gold-text text-base tracking-[0.04em] sm:text-lg lg:text-xl lg:tracking-[0.06em]">
                  Do peão à Rainha
                </p>

                <p className="mt-2 font-['Manrope'] text-[0.88rem] font-light leading-relaxed text-[#d4d0c7] sm:text-[0.94rem] lg:text-[1rem]">
                  Toda mulher pode tornar-se Rainha.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="mt-6 flex justify-center lg:mt-7 lg:justify-start">
              <a
                href="#drop"
                className="btn-gold px-5 py-3 text-[0.68rem] sm:px-7 sm:text-xs"
              >
                Conheça a Linha Rainha
                <Crown className="h-3 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Foto acima do texto no mobile */}
        <div className="order-1 relative flex justify-center lg:order-2 lg:-ml-5 lg:justify-start">
          <Reveal
            delay={0.1}
            className="relative w-full max-w-[430px] lg:max-w-[720px]"
          >
            <img
              src={model}
              alt="Mulher em alfaiataria preta ao lado de uma peça de xadrez"
              width={1024}
              height={1400}
              loading="lazy"
              className="block h-auto w-full object-cover"
              style={{
                WebkitMaskImage: `
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    black 7%,
                    black 68%,
                    rgba(0,0,0,0.82) 78%,
                    rgba(0,0,0,0.35) 90%,
                    transparent 100%
                  )
                `,
                maskImage: `
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    black 7%,
                    black 68%,
                    rgba(0,0,0,0.82) 78%,
                    rgba(0,0,0,0.35) 90%,
                    transparent 100%
                  )
                `,
              }}
            />

            {/* Sombra lateral para integrar a foto ao fundo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    #050505 0%,
                    rgba(5,5,5,0.42) 7%,
                    transparent 20%,
                    transparent 82%,
                    rgba(5,5,5,0.35) 94%,
                    #050505 100%
                  )
                `,
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%)",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}