import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nossa História | EFORCE Eletrônica Automotiva",
  description:
    "Conheça a trajetória da EFORCE Eletrônica Automotiva em Juína-MT.",
};

const milestones = [
  "Mais de 10 anos de experiência em eletrônica automotiva",
  "Investimento contínuo em equipamentos e diagnóstico",
  "Atendimento transparente e serviço com garantia",
];

export default function HistoriaPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
      <Image
        alt=""
        className="object-cover object-center opacity-25"
        fill
        priority
        sizes="100vw"
        src="/images/fachada-noite.jpeg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />

      <div className="relative mx-auto max-w-[1180px]">
        <Link
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted transition hover:text-white"
          href="/"
        >
          <ArrowLeft size={15} /> Voltar para o início
        </Link>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase text-white/70 before:h-px before:w-7 before:bg-accent">
              Nossa história
            </p>
            <h1 className="display-title mt-5 max-w-2xl text-5xl leading-[.95] sm:text-7xl">
              Uma trajetória movida por <span className="text-accent">precisão</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              A EFORCE nasceu do compromisso de oferecer diagnósticos claros,
              reparos precisos e soluções confiáveis para sistemas eletrônicos
              automotivos em Juína-MT.
            </p>

            <ul className="mt-7 grid gap-3">
              {milestones.map((milestone) => (
                <li className="flex items-center gap-3 text-sm text-white/80" key={milestone}>
                  <CheckCircle2 className="text-accent" size={17} />
                  {milestone}
                </li>
              ))}
            </ul>

            <Button className="mt-9" download href="/ebooks/ebook-eforce.pdf" target="_blank">
              BAIXAR EBOOK PDF <MessageCircle size={15} />
            </Button>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10">
            <Image
              alt="Fachada da EFORCE Eletrônica Automotiva"
              className="object-cover object-[50%_42%]"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/images/fachada-dia.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
