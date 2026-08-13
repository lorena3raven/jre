import type { ReactNode } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";

import logoJre from "@/assets/logo-jre.png";
import logoLorena from "@/assets/lorena-logo.png";

const WHATSAPP = "5547997406199";
const INSTAGRAM = "https://www.instagram.com/jre.oficial_/";
const EMAIL = "jreoficial024@gmail.com";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-gold/15 bg-[#050505]">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 md:px-10">
        {/* Parte principal */}
        <div
          className="
            grid grid-cols-1
            items-center justify-items-center
            gap-3 py-4
            text-center

            md:grid-cols-[170px_minmax(0,1fr)_170px]
            md:justify-items-stretch
            md:gap-4
            md:py-3
          "
        >
          {/* Logo */}
          <a
            href="#topo"
            aria-label="Voltar ao início"
            className="
              group relative
              flex h-[86px] w-[135px]
              items-center justify-center
              overflow-visible

              md:h-[100px]
              md:w-[165px]
              md:justify-self-start
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute left-1/2 top-1/2
                h-14 w-14
                -translate-x-1/2 -translate-y-1/2
                rounded-full bg-gold/10 blur-2xl
                transition-all duration-700
                group-hover:bg-gold/20
              "
            />

            <img
              src={logoJre}
              alt="Logo JRE"
              width={170}
              height={170}
              className="
                relative block
                h-[120px] w-[120px]
                max-w-none object-contain
                drop-shadow-[0_6px_20px_rgba(201,161,74,0.3)]
                transition-transform duration-500
                group-hover:scale-105

                md:h-[150px]
                md:w-[150px]
              "
            />
          </a>

          {/* Assinatura — pode ocupar duas linhas no mobile */}
          <p
            className="
              display gold-text
              mx-auto max-w-[300px]
              text-[0.82rem]
              uppercase
              leading-[1.75]
              tracking-[0.15em]

              min-[390px]:text-[0.88rem]
              min-[390px]:tracking-[0.18em]

              sm:max-w-none
              sm:text-[1rem]
              sm:tracking-[0.24em]

              md:whitespace-nowrap
              md:text-[1.08rem]
              md:leading-relaxed
              md:tracking-[0.3em]
            "
          >
            Jornada
            <span
              aria-hidden="true"
              className="mx-1.5 text-[#b98b38] sm:mx-2 md:mx-3"
            >
              •
            </span>
            Realeza
            <span
              aria-hidden="true"
              className="mx-1.5 text-[#b98b38] sm:mx-2 md:mx-3"
            >
              •
            </span>
            Estratégia
          </p>

          {/* Redes sociais */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              gap-4 pt-1

              md:justify-self-end
              md:pt-0
            "
          >
            <SocialIcon
              href={INSTAGRAM}
              label="Instagram da JRE"
              icon={<Instagram />}
            />

            <SocialIcon
              href={`https://wa.me/${WHATSAPP}`}
              label="WhatsApp da JRE"
              icon={<MessageCircle />}
            />

            <SocialIcon
              href={`mailto:${EMAIL}`}
              label="E-mail da JRE"
              icon={<Mail />}
              external={false}
            />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gold/15 py-3 md:py-2.5">
          <div
            className="
              flex flex-col
              items-center justify-between
              gap-2.5 text-center

              md:flex-row
              md:gap-4
              md:text-left
            "
          >
            <p
              className="
                font-['Manrope']
                text-[0.5rem]
                font-medium uppercase
                leading-relaxed
                tracking-[0.15em]
                text-[#77736c]

                sm:text-[0.54rem]
                sm:tracking-[0.19em]

                md:text-[0.58rem]
                md:tracking-[0.24em]
              "
            >
              © {new Date().getFullYear()} JRE — Todos os direitos reservados
            </p>

            {/* Crédito da designer */}
            <a
              href="https://www.instagram.com/design.lorena/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Desenvolvido por Lorena Design"
              className="
                group flex shrink-0
                items-center justify-center
                gap-2.5
              "
            >
              <span className="font-['Manrope'] text-[0.57rem] font-light text-[#8f8b83] transition-colors duration-300 group-hover:text-gold md:text-[0.62rem]">
                Desenvolvido por
              </span>

              <img
                src={logoLorena}
                alt="Lorena Design"
                width={105}
                height={38}
                className="
                  block h-auto
                  w-[82px] shrink-0
                  object-contain opacity-75
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:opacity-100

                  md:w-[100px]
                "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon,
  external = true,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="
        group relative z-10
        grid h-9 w-9 shrink-0
        place-items-center
        text-[#d6b45f]
        transition-all duration-500

        hover:-translate-y-1
        hover:text-[#f4dda0]

        active:scale-95
        active:text-[#f4dda0]

        md:h-10 md:w-10
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-1
          scale-75 rounded-full
          bg-gold/0 blur-md
          transition-all duration-500

          group-hover:scale-100
          group-hover:bg-gold/15

          group-active:scale-100
          group-active:bg-gold/15
        "
      />

      <span
        className="
          relative flex
          items-center justify-center
          transition-transform duration-500

          group-hover:scale-110
          group-active:scale-110

          [&>svg]:block
          [&>svg]:h-[18px]
          [&>svg]:w-[18px]
          [&>svg]:stroke-current
          [&>svg]:stroke-[1.7]

          md:[&>svg]:h-5
          md:[&>svg]:w-5
        "
      >
        {icon}
      </span>

      <span
        aria-hidden="true"
        className="
          absolute bottom-0
          h-px w-0 bg-gold
          transition-all duration-500

          group-hover:w-5
          group-active:w-5
        "
      />
    </a>
  );
}