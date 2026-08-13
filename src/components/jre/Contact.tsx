import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import logoJre from "@/assets/logo-jre.png";
import { Reveal, GoldRule } from "./Reveal";
import { Crown } from "./Monogram";

const WHATSAPP = "5547997406199";

type Errors = Partial<
  Record<"nome" | "email" | "telefone" | "mensagem", string>
>;

const chat = [
  {
    from: "jre",
    text: "Seja bem-vindo à JRE. Como podemos te ajudar hoje?",
    time: "19:27",
  },
  {
    from: "me",
    text: "Quero saber mais sobre a coleção e entrar para a lista VIP.",
    time: "19:28",
  },
  {
    from: "jre",
    text: "Perfeito. Você está a um passo de fazer parte de algo exclusivo.",
    time: "19:28",
  },
  {
    from: "jre",
    text: "Vamos te adicionar à nossa Lista VIP e te manter informado sobre lançamentos e edições limitadas.",
    time: "19:29",
  },
  {
    from: "me",
    text: "Excelente. Obrigado!",
    time: "19:29",
  },
];

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get("nome") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const telefone = String(formData.get("telefone") ?? "").trim();
    const mensagem = String(formData.get("mensagem") ?? "").trim();

    const nextErrors: Errors = {};

    if (!nome || nome.length > 100) {
      nextErrors.nome = "Informe seu nome (até 100 caracteres).";
    }

    if (
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
      email.length > 255
    ) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    if (telefone.replace(/\D/g, "").length < 10) {
      nextErrors.telefone = "Informe um telefone válido.";
    }

    if (!mensagem || mensagem.length > 1000) {
      nextErrors.mensagem =
        "Escreva sua mensagem (até 1000 caracteres).";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const texto = [
      `Olá, JRE. Sou ${nome}.`,
      "",
      mensagem,
      "",
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      texto,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setSent(true);
    form.reset();
  }

  return (
    <section
      id="contato"
      className="grain relative overflow-hidden bg-[#050505] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Formulário */}
        <div>
          <Reveal>
            <p className="eyebrow">Fale com a JRE</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display gold-text mt-5 max-w-2xl text-[clamp(2.5rem,5vw,4.4rem)] leading-[1.05]">
              O próximo movimento começa aqui.
            </h2>
          </Reveal>

          <div className="my-7 max-w-xs md:my-8">
            <GoldRule />
          </div>

          <Reveal delay={0.14}>
            <p className="max-w-[570px] font-['Manrope'] text-[0.92rem] font-light leading-[1.8] tracking-[0.01em] text-[#d4d0c7] md:text-[1rem]">
              Tem dúvidas, deseja fazer um pedido exclusivo ou entrar para a
              Lista VIP? Fale com a nossa equipe. Aqui, cada relação é
              construída com propósito.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-9 space-y-4 md:mt-10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="nome"
                  label="Seu nome"
                  error={errors.nome}
                  icon="◇"
                />

                <Field
                  name="email"
                  label="Seu e-mail"
                  type="email"
                  error={errors.email}
                  icon="✉"
                />
              </div>

              <Field
                name="telefone"
                label="Seu WhatsApp"
                type="tel"
                error={errors.telefone}
                icon="☏"
              />

              <div>
                <label htmlFor="mensagem" className="sr-only">
                  Sua mensagem
                </label>

                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  maxLength={1000}
                  placeholder="Sua mensagem"
                  className="field-gold resize-y !pl-4 font-['Manrope'] text-[0.86rem] font-light tracking-[0.01em] placeholder:text-[#8e8a82] md:text-[0.92rem]"
                />

                {errors.mensagem && (
                  <ErrorText>{errors.mensagem}</ErrorText>
                )}
              </div>

              <button type="submit" className="btn-gold w-full">
                Enviar mensagem
                <Crown className="h-3 w-5" />
              </button>

              <p
                aria-live="polite"
                className="text-center font-['Manrope'] text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#aaa69d] md:text-[0.63rem] md:tracking-[0.24em]"
              >
                {sent
                  ? "Mensagem preparada no WhatsApp. Falamos em breve."
                  : "Seus dados estão protegidos. Respeitamos sua privacidade."}
              </p>
            </form>
          </Reveal>
        </div>

        {/* Simulação do WhatsApp */}
        <Reveal
          delay={0.15}
          className="relative flex flex-col items-center justify-center gap-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--halo-gold)" }}
          />

          <div className="relative w-full max-w-[340px] rounded-[2.2rem] border border-gold/30 bg-[#0b0b0b] p-3 shadow-[0_0_60px_-20px_rgba(198,154,74,0.4)] transition-all duration-700 hover:border-gold/50 hover:shadow-[0_0_70px_-18px_rgba(198,154,74,0.5)]">
            <div className="overflow-hidden rounded-[1.7rem] bg-[#0d0d0d]">
              {/* Cabeçalho do chat */}
              <div className="flex items-center gap-3 border-b border-gold/15 px-4 py-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/40 bg-[#080808] p-1">
                  <img
                    src={logoJre}
                    alt="Logo JRE"
                    width={48}
                    height={48}
                    className="h-full w-full scale-110 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate font-['Manrope'] text-xs font-medium tracking-[0.03em] text-[#f3efe6]">
                    JRE Oficial
                  </p>

                  <p className="mt-0.5 font-['Manrope'] text-[0.6rem] font-medium tracking-[0.05em] text-gold/70">
                    Online
                  </p>
                </div>
              </div>

              {/* Mensagens */}
              <div className="space-y-2.5 px-3 py-4">
                {chat.map((message, index) => (
                  <div
                    key={`${message.time}-${index}`}
                    className={`max-w-[84%] px-3 py-2 font-['Manrope'] text-[0.72rem] font-light leading-[1.5] tracking-[0.005em] ${
                      message.from === "me"
                        ? "ml-auto rounded-xl rounded-br-sm bg-[#1c1a15] text-[#e4dfd4]"
                        : "rounded-xl rounded-bl-sm bg-[#151515] text-[#d4d0c7]"
                    }`}
                  >
                    {message.text}

                    <span className="mt-1 block text-right font-['Manrope'] text-[0.55rem] text-[#77736c]">
                      {message.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Campo ilustrativo */}
              <div className="flex items-center gap-2 border-t border-gold/15 px-3 py-3">
                <span className="flex-1 rounded-full border border-gold/20 px-3 py-2 font-['Manrope'] text-[0.66rem] font-light text-[#89857e]">
                  Mensagem
                </span>

                <span className="text-gold/70">⌁</span>
              </div>
            </div>
          </div>

          {/* Lista VIP */}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full max-w-[340px] items-center gap-4 border-t border-gold/35 bg-[#0a0a0a] px-5 py-5 transition-all duration-500 hover:border-gold/80 hover:bg-[#0d0c09]"
          >
            <Crown className="h-5 w-8 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105" />

            <span className="min-w-0">
              <span className="block font-['Manrope'] text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold">
                Entrar para a Lista VIP
              </span>

              <span className="mt-2 block font-['Manrope'] text-[0.78rem] font-light leading-relaxed text-[#bcb8af]">
                Novidades, lançamentos e benefícios exclusivos.
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ErrorText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 font-['Manrope'] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-destructive">
      {children}
    </p>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  icon,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  icon: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gold/60"
        >
          {icon}
        </span>

        <input
          id={name}
          name={name}
          type={type}
          maxLength={255}
          placeholder={label}
          className="field-gold font-['Manrope'] text-[0.86rem] font-light tracking-[0.01em] placeholder:text-[#8e8a82] md:text-[0.92rem]"
        />
      </div>

      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}