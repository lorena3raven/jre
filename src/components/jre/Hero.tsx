import { motion } from "framer-motion";
import heroBoard from "@/assets/hero-board.jpg";
import heroLogo from "@/assets/logo-jre.png";
import { Diamond } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="topo"
      className="
        grain
        relative
        flex
        min-h-0
        justify-center
        overflow-hidden
        md:min-h-[100svh]
      "
    >
      <img
        src={heroBoard}
        alt="Tabuleiro de xadrez em mármore escuro com peças douradas"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[34%] h-[64vmin] w-[64vmin] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--halo-gold)" }}
      />

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-5xl
          -translate-y-8
          flex-col
          items-center
          px-6
          pb-14
          pt-20
          text-center

          sm:-translate-y-6
          sm:pb-16
          sm:pt-24

          md:-translate-y-16
          md:pb-0
          md:pt-[8vh]

          lg:-translate-y-20
          lg:pt-[7vh]
        "
      >
        <motion.img
          src={heroLogo}
          alt="Logo JRE"
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.2, ease }}
          className="
            h-auto
            w-[min(84vw,520px)]
            object-contain
            drop-shadow-[0_16px_50px_rgba(201,161,74,0.3)]
            sm:w-[min(64vw,540px)]
            md:w-[min(50vw,560px)]
            lg:w-[min(38vw,580px)]
          "
        />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.48, ease }}
          className="
            display
            gold-text
            -mt-16
            whitespace-nowrap
            text-[clamp(2rem,5vw,4.5rem)]
            uppercase
            tracking-[0.045em]
            sm:-mt-20
            md:-mt-24
            lg:-mt-28
          "
        >
          Do Peão ao Rei
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.68, ease }}
          className="eyebrow mt-1"
        >
          Jornada
          <span className="mx-3 text-gold/50">◆</span>
          Realeza
          <span className="mx-3 text-gold/50">◆</span>
          Estratégia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="mt-5 flex justify-center"
        >
          <a href="#contato" className="btn-gold">
            Entrar para Lista VIP
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-4 px-6 pb-3 md:px-10">
        <span className="rule-gold flex-1" />
        <Diamond />
        <span className="rule-gold flex-1" />
      </div>
    </section>
  );
}