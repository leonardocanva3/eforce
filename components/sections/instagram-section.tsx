import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { SectionShell } from "./section-shell";

const topics = [
  "Diagnósticos reais",
  "Bastidores da oficina",
  "Programação de chaves",
  "Reparos eletrônicos",
  "Sistemas ABS",
  "Dicas automotivas",
] as const;

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
    </svg>
  );
}

export function InstagramSection() {
  return (
    <SectionShell className="relative overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute top-1/2 left-[70%] size-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative grid items-center gap-12 overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(135deg,#111416,#070808_68%)] px-6 py-10 shadow-[0_25px_70px_rgba(0,0,0,.32)] sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-14">
        <div className="relative z-10">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-muted before:h-px before:w-6 before:bg-accent">
            EFORCE nas redes
          </p>
          <h2 className="display-title mt-5 max-w-[650px] text-4xl leading-[.98] sm:text-5xl lg:text-6xl">
            A oficina que você também acompanha{" "}
            <span className="text-accent">fora da oficina</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted">
            Veja diagnósticos reais, dicas automotivas e bastidores da EFORCE
            todos os dias.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <li
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white/80"
                key={topic}
              >
                <span className="grid size-5 place-items-center rounded-full border border-accent/60 bg-accent/10 text-accent">
                  <Check size={12} strokeWidth={3} />
                </span>
                {topic}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-accent pl-4 text-sm font-bold text-white">
            “Seu problema pode ser o próximo caso publicado.”
          </p>

          <Button
            className="mt-7"
            href={siteConfig.instagramHref}
            target="_blank"
          >
            <InstagramIcon />
            Seguir no Instagram
            <ArrowUpRight size={14} />
          </Button>
        </div>

        <div className="relative mx-auto flex min-h-[440px] w-full max-w-md items-center justify-center lg:min-h-[520px]">
          <div className="absolute inset-x-8 bottom-10 h-32 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative h-[430px] w-[218px] rotate-[6deg] rounded-[34px] border border-white/20 bg-[#090a0b] p-[7px] shadow-[-20px_26px_55px_rgba(0,0,0,.65),0_0_45px_rgba(176,0,0,.13)] transition duration-500 hover:rotate-[3deg] sm:h-[500px] sm:w-[252px]">
            <div className="absolute top-[13px] left-1/2 z-20 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black" />

            <div className="relative h-full overflow-hidden rounded-[27px] bg-[#0d0f10]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 pt-9 pb-3">
                <div className="grid size-8 place-items-center rounded-full border border-accent bg-black">
                  <Image
                    alt=""
                    className="h-auto w-6"
                    height={18}
                    src="/images/logo-eforce.png"
                    width={28}
                  />
                </div>
                <div>
                  <p className="text-[9px] font-bold">eforceeletronica</p>
                  <p className="text-[7px] text-muted">Juína - MT</p>
                </div>
              </div>

              <div className="relative h-[54%]">
                <Image
                  alt="Conteúdo da oficina EFORCE"
                  className="object-cover object-[50%_45%]"
                  fill
                  sizes="252px"
                  src="/images/fachada-dia.jpeg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <p className="display-title absolute right-3 bottom-3 left-3 text-xl leading-5">
                  Diagnóstico preciso.{" "}
                  <span className="text-accent">Solução real.</span>
                </p>
              </div>

              <div className="px-4 py-4">
                <div className="flex items-center gap-3 text-white/85">
                  <InstagramIcon className="size-[15px]" />
                  <span className="text-[9px] font-bold">Curtido por clientes EFORCE</span>
                </div>
                <p className="mt-3 text-[8px] leading-3 text-muted">
                  Bastidores, diagnósticos e tecnologia automotiva todos os dias.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-1">
                  <div className="h-8 rounded-sm bg-accent/70" />
                  <div className="h-8 rounded-sm bg-white/10" />
                  <div className="h-8 rounded-sm bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
