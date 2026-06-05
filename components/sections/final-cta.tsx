import Image from "next/image";
import { siteConfig } from "@/data/site";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-7 fill-current sm:size-8"
      viewBox="0 0 32 32"
    >
      <path d="M16.04 3A12.93 12.93 0 0 0 5.1 22.82L3 29l6.4-2.05A12.99 12.99 0 1 0 16.04 3Zm0 23.8a10.76 10.76 0 0 1-5.49-1.5l-.39-.23-3.8 1.22 1.24-3.7-.25-.4a10.8 10.8 0 1 1 8.69 4.61Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.33-.83 1.06-1.02 1.28-.19.22-.38.25-.7.09-.33-.17-1.37-.51-2.61-1.61a9.8 9.8 0 0 1-1.81-2.26c-.19-.33-.02-.5.14-.67.15-.14.33-.38.49-.57.16-.19.21-.33.32-.54.11-.22.06-.41-.03-.57-.08-.17-.73-1.76-1-2.41-.26-.64-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.4-.3.33-1.13 1.12-1.13 2.71s1.16 3.14 1.32 3.36c.16.21 2.28 3.49 5.52 4.89.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.79 2.19-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section
      className="relative isolate min-h-[340px] overflow-hidden border-y border-white/10"
      id="contato"
    >
      <Image
        alt=""
        className="object-cover object-[50%_58%]"
        fill
        sizes="100vw"
        src="/images/fachada-noite.jpeg"
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(128,0,0,.96)_0%,rgba(176,0,0,.82)_42%,rgba(90,0,0,.48)_70%,rgba(0,0,0,.62)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25" />

      <div className="relative mx-auto grid min-h-[340px] max-w-[1180px] items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex flex-col justify-center gap-5 text-center lg:text-left">
          <h2 className="display-title text-[32px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[42px] lg:text-[51px]">
            Fale agora com um especialista
          </h2>
          <p className="max-w-2xl text-base leading-relaxed font-medium text-white/90 sm:text-xl lg:text-2xl">
            Diagnóstico rápido, solução precisa e garantia de qualidade.
          </p>
        </div>

        <a
          aria-label="Chamar a EFORCE no WhatsApp"
          className="mx-auto flex h-[72px] w-full max-w-[380px] items-center justify-center gap-5 rounded-[14px] bg-white px-7 text-lg font-extrabold tracking-wide text-black shadow-[0_12px_32px_rgba(0,0,0,.24)] transition duration-300 hover:scale-[1.03] hover:bg-zinc-100 hover:brightness-105 lg:mx-0 lg:w-[380px] lg:text-xl"
          href={siteConfig.whatsappHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          Chamar no WhatsApp
          <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
}
