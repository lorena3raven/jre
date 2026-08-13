import lion from "@/assets/manifesto-lion.jpg";
import { Reveal, GoldRule, Diamond } from "./Reveal";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="
        grain
        relative
        overflow-hidden
        bg-[#050505]
        pb-16
        pt-2
        md:pb-20
        md:pt-6
        lg:pb-24
        lg:pt-8
      "
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Imagem do leão */}
        <Reveal className="relative overflow-hidden">
          {/* Halo dourado */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[38%]
              top-1/2
              z-0
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-20
              blur-[120px]
              md:h-[520px]
              md:w-[520px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(201,161,74,0.48) 0%, rgba(201,161,74,0.12) 35%, transparent 72%)",
            }}
          />

          <img
            src={lion}
            alt="Leão em perfil vestindo manto real com bordado dourado"
            width={1280}
            height={1600}
            loading="lazy"
            className="
              relative
              z-10
              h-[64vh]
              w-full
              scale-[1.04]
              object-cover
              object-center
              md:h-[82vh]
            "
          />

          {/* Fade para integração com o fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #050505 0%,
                  rgba(5,5,5,0.72) 10%,
                  rgba(5,5,5,0.18) 22%,
                  transparent 34%,
                  transparent 68%,
                  rgba(5,5,5,0.28) 80%,
                  rgba(5,5,5,0.82) 92%,
                  #050505 100%
                ),
                linear-gradient(
                  to right,
                  rgba(5,5,5,0.98) 0%,
                  rgba(5,5,5,0.42) 12%,
                  rgba(5,5,5,0.12) 26%,
                  transparent 42%,
                  transparent 62%,
                  rgba(5,5,5,0.18) 78%,
                  rgba(5,5,5,0.88) 94%,
                  #050505 100%
                )
              `,
            }}
          />

          {/* Vinheta */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background:
                "radial-gradient(circle at 44% 46%, transparent 34%, rgba(5,5,5,0.12) 56%, rgba(5,5,5,0.78) 100%)",
            }}
          />
        </Reveal>

        {/* Conteúdo */}
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow">Manifesto</p>
          </Reveal>

          <div className="my-6 flex items-center gap-4">
            <GoldRule className="w-24" />
            <Diamond />
          </div>

          <Reveal delay={0.1}>
            <h2 className="display gold-text text-[clamp(1.8rem,4.4vw,3.4rem)]">
              Todo peão pode se tornar rei através da estratégia.
            </h2>
          </Reveal>

          <div className="mt-4 max-w-[480px]">
            <Reveal delay={0.18}>
              <p
                className="
                  font-['Manrope']
                  text-[0.9rem]
                  font-light
                  leading-[1.75]
                  tracking-[0.01em]
                  text-[#d4d0c7]
                  md:text-[0.96rem]
                "
              >
                Nós não herdamos o topo.
                <br />
                Nós conquistamos cada centímetro dele.
                <br />

                <span className="font-medium text-gold">
                  Do Peão ao Rei.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="
                  mt-7
                  font-['Manrope']
                  text-[0.9rem]
                  font-light
                  leading-[1.75]
                  tracking-[0.01em]
                  text-[#d4d0c7]
                  md:text-[0.96rem]
                "
              >
                A JRE não veste apenas o corpo.
                <br />
                Veste a mente. Veste o espírito.
                <br />
                Veste líderes que nasceram para governar
                <br className="hidden md:block" /> a própria história.
              </p>
            </Reveal>
          </div>

          {/* Botão */}
          <Reveal delay={0.48}>
            <div className="mt-10">
              <a
                href="#contato"
                className="
                  btn-gold
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-5
                  sm:inline-flex
                  sm:w-auto
                  sm:justify-center
                "
              >
                <span className="flex flex-col text-left leading-[1.55] sm:block sm:whitespace-nowrap">
                  <span>O tabuleiro é seu.</span>

                  <span className="sm:ml-1">
                    Faça sua jogada
                  </span>
                </span>

                <span aria-hidden="true" className="shrink-0">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}