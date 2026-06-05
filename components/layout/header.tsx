import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.05] bg-[#050505]/82 shadow-[0_8px_28px_rgba(0,0,0,.28)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between gap-5 px-5 lg:h-24 lg:px-8">
        <a href="#inicio" aria-label="EFORCE - início">
          <Image
            alt="EFORCE Eletrônica Automotiva"
            className="h-auto w-32 brightness-[1.7] saturate-[1.55] contrast-[1.08] lg:w-44"
            height={48}
            priority
            src="/images/logo-eforce.png"
            width={160}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              className="text-[15px] font-bold uppercase tracking-wide text-white/85 transition hover:text-accent"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          className="hidden px-5 text-sm xl:inline-flex"
          href={siteConfig.whatsappHref}
          target="_blank"
        >
          <MessageCircle size={15} />
          Fale pelo WhatsApp
        </Button>

        <details className="relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded border border-white/20 bg-black/30">
            <Menu aria-label="Abrir menu" size={21} />
          </summary>
          <nav className="absolute right-0 mt-3 grid w-56 gap-1 rounded border border-white/10 bg-[#0a0e10]/95 p-2 shadow-2xl">
            {navigation.map((item) => (
              <a
                className="rounded px-4 py-3 text-xs font-bold uppercase hover:bg-white/5 hover:text-accent"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
