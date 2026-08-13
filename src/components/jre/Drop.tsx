import campaign from "@/assets/drop-campaign.jpg";
import king from "@/assets/drop-king.jpg";
import queen from "@/assets/drop-queen.jpg";
import mind from "@/assets/drop-mind.jpg";

import { Reveal } from "./Reveal";
import { Crown } from "./Monogram";

const products = [
  {
    img: king,
    alt: "Modelo masculino vestindo camiseta preta premium JRE",
    name: "The King's Crest",
    cat: "Masculino",
  },
  {
    img: queen,
    alt: "Modelo feminina vestindo camiseta off-white premium JRE",
    name: "The Queen's Crest",
    cat: "Feminina",
  },
  {
    img: mind,
    alt: "Costas de camiseta preta premium com estampa JRE",
    name: "The Strategic Mind",
    cat: "Unissex",
  },
];

export function Drop() {
  return (
    <section id="drop" className="relative overflow-hidden bg-[#080808]">
      <div className="grid lg:min-h-[850px] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Imagem principal */}
        <Reveal className="relative min-h-[390px] overflow-hidden sm:min-h-[520px] lg:min-h-full">
          <img
            src={campaign}
            alt="Casal vestindo camisetas premium da coleção JRE"
            width={1400}
            height={1800}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Integração da imagem com o fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(5,5,5,0.02) 0%,
                  transparent 54%,
                  rgba(8,8,8,0.45) 78%,
                  #080808 100%
                ),
                linear-gradient(
                  to right,
                  transparent 68%,
                  rgba(8,8,8,0.22) 86%,
                  #080808 100%
                )
              `,
            }}
          />
        </Reveal>

        {/* Conteúdo */}
        <div className="relative flex min-w-0 flex-col justify-center py-10 lg:px-12 lg:py-16 xl:px-16">
          {/* Cabeçalho */}
          <div className="px-5 text-center sm:px-8 md:px-10 lg:px-0 lg:text-left">
            <Reveal>
              <div className="flex items-center justify-center gap-3 lg:justify-start lg:gap-4">
                <p className="eyebrow whitespace-nowrap">
                  Edição Limitada
                </p>

                <span className="h-px w-7 bg-gold/45 sm:w-10 lg:w-12" />

                <p className="whitespace-nowrap font-['Manrope'] text-[0.56rem] font-medium uppercase tracking-[0.25em] text-[#aaa69d] sm:text-[0.62rem] md:text-[0.68rem]">
                  Drop 01
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display gold-text mx-auto mt-6 max-w-[22rem] pb-3 text-[clamp(2.15rem,10.5vw,3.15rem)] leading-[1.12] sm:max-w-none sm:text-[3.5rem] lg:mx-0 lg:mt-7 lg:whitespace-nowrap lg:pb-4 lg:text-[clamp(2rem,4.1vw,4.8rem)] lg:leading-[1.08]">
                O Primeiro Xeque
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto -mt-1 max-w-[30rem] font-['Manrope'] text-[0.84rem] font-light leading-[1.75] tracking-[0.01em] text-[#d4d0c7] sm:text-[0.92rem] lg:mx-0 lg:mt-0 lg:max-w-2xl lg:text-[1rem] lg:leading-[1.8]">
                A primeira jogada de quem não nasceu para seguir movimentos,
                mas para definir o próprio jogo. Uma edição limitada, criada
                para vestir presença, estratégia e autoridade.
              </p>
            </Reveal>
          </div>

          {/* Indicação delicada para arrastar */}
          <Reveal delay={0.17}>
            <div className="mt-8 flex items-center justify-center gap-4 px-5 lg:hidden">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/45" />

              <span className="font-['Manrope'] text-[0.56rem] font-medium uppercase tracking-[0.28em] text-gold/75">
                Deslize para explorar
              </span>

              <span
                aria-hidden="true"
                className="text-sm font-light text-gold/80"
              >
                →
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/45" />
            </div>
          </Reveal>

          {/* Galeria horizontal no mobile */}
          <ul className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:px-8 md:px-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {products.map((product, index) => (
              <Reveal
                as="li"
                key={product.name}
                delay={0.18 + index * 0.1}
                className="group w-[78vw] max-w-[330px] shrink-0 snap-center first:snap-start lg:w-auto lg:max-w-none lg:shrink"
              >
                <a
                  href="#contato"
                  className="block h-full border border-gold/20 bg-[#070706] transition-all duration-500 hover:border-gold/55 hover:bg-[#0b0a08] active:border-gold/55 active:bg-[#0b0a08]"
                >
                  {/* Imagem sem numeração */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.alt}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-active:scale-[1.03] group-active:opacity-100"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 52%, rgba(5,5,5,0.6) 100%)",
                      }}
                    />
                  </div>

                  {/* Nome e categoria */}
                  <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-5 text-center lg:min-h-[105px]">
                    <h3 className="display gold-text whitespace-nowrap text-[1.25rem] leading-tight transition-all duration-500 group-hover:brightness-125 sm:text-[1.4rem] lg:whitespace-normal lg:text-lg">
  {product.name.includes(" Crest") ? (
    <>
      <span className="lg:hidden">{product.name}</span>

      <span className="hidden lg:inline">
        {product.name.replace(" Crest", "")}
        <span className="block">Crest</span>
      </span>
    </>
  ) : (
    product.name
  )}
</h3>

                    <p className="mt-3 font-['Manrope'] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-[#f3efe6] transition-colors duration-500 group-hover:text-white lg:tracking-[0.4em]">
                      {product.cat}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>

          {/* Indicador visual discreto */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-2 lg:hidden"
          >
            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#a97525] to-[#e3bf69]" />
            <span className="h-1 w-2 rounded-full bg-gold/25" />
            <span className="h-1 w-2 rounded-full bg-gold/25" />
          </div>

          {/* Botão */}
          <Reveal delay={0.48}>
            <div className="mt-8 flex justify-center px-5 sm:px-8 md:px-10 lg:mt-10 lg:justify-start lg:px-0">
              <a
                href="#contato"
                className="btn-gold w-full justify-center sm:w-auto sm:min-w-[360px]"
              >
                Entrar para a lista VIP
                <Crown className="h-3 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}