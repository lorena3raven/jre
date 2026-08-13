import { useEffect, useState } from "react";
import heroLogo from "@/assets/logo-jre.png";
import { Crown } from "./Monogram";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#pilares", label: "Pilares" },
  { href: "#filosofia", label: "A Filosofia" },
  { href: "#jornada", label: "A Jornada" },
  { href: "#rainha", label: "Rainha" },
  { href: "#drop", label: "Drop 01" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-gold/15 bg-[#050505]/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1600px]
          grid-cols-[minmax(0,1fr)_auto]
          items-center
          gap-4
          px-6
          py-2
          md:px-10
          md:py-2.5
          lg:grid-cols-[auto_1fr_auto]
        "
      >
        <a
          href="#topo"
          className="flex min-w-0 items-center"
          aria-label="JRE — início"
        >
          <img
            src={heroLogo}
            alt="JRE"
            className="
              h-auto
              w-[68px]
              shrink-0
              object-contain
              drop-shadow-[0_6px_18px_rgba(201,161,74,0.22)]
              transition-all
              duration-500
              md:w-[84px]
              lg:w-[92px]
            "
          />
        </a>

        <nav
          className="
            hidden
            items-center
            justify-center
            gap-10
            lg:flex
          "
          aria-label="Principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-nav"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="
              btn-gold
              hidden
              items-center
              justify-center
              gap-3
              whitespace-nowrap
              !px-7
              !py-3
              !text-[0.7rem]
              sm:inline-flex
            "
          >
            Círculo JRE

            <Crown className="h-3 w-5 shrink-0" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="
              flex
              h-10
              w-10
              shrink-0
              flex-col
              items-center
              justify-center
              gap-1.5
              border
              border-gold/30
              lg:hidden
            "
          >
            <span
              className={`h-px w-4 bg-gold transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-gold transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gold/10 bg-[#050505]/97 transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-5 px-6 py-7"
          aria-label="Menu móvel"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="link-nav"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="
              btn-gold
              mt-2
              inline-flex
              items-center
              justify-center
              gap-3
            "
          >
            Círculo JRE

            <Crown className="h-3 w-5 shrink-0" />
          </a>
        </nav>
      </div>
    </header>
  );
}