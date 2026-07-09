import Image from "next/image";
import { ArrowUpRight, BookOpen, Gauge, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui";
import { SectionShell } from "./section-shell";

export function EbookSection() {
  return (
    <SectionShell className="border-t border-white/5" id="historia">
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-gradient-to-r from-[#111111] to-[#090909]">
        <div className="grid items-stretch lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10 p-7 sm:p-10 lg:p-12">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted before:h-px before:w-5 before:bg-accent">
              Conheça nossa trajetória
            </p>
            <h2 className="display-title mt-4 max-w-xl text-4xl leading-[1.02] sm:text-5xl">
              Conheça a história da <span className="text-accent">EFORCE</span>
            </h2>
            <p className="mt-5 max-w-xl text-xs leading-6 text-muted sm:text-sm">
              Uma história construída com conhecimento técnico, transparência e
              compromisso com cada veículo que entra em nossa oficina.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-[11px] uppercase text-white/75">
                <BookOpen className="text-accent" size={18} /> Nossa origem
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase text-white/75">
                <Gauge className="text-accent" size={18} /> Evolução técnica
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase text-white/75">
                <ShieldCheck className="text-accent" size={18} /> Compromisso
              </div>
            </div>

            <Button
              analyticsEvent="ebook_download"
              className="mt-8"
              download
              href="/ebooks/ebook-eforce.pdf"
              variant="secondary"
            >
              BAIXAR E-BOOK GRATUITO <ArrowUpRight size={14} />
            </Button>
          </div>

          <div className="relative min-h-72 overflow-hidden lg:min-h-full">
            <Image
              alt="Conheça a história da EFORCE Eletrônica Automotiva"
              className="object-cover object-[50%_38%]"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/images/ebook-banner.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
