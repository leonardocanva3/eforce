import Image from "next/image";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import { TrackedLink } from "@/components/ui";
import { navigation, siteConfig } from "@/data/site";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24">
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.55-1.46H17V3.96a23.4 23.4 0 0 0-2.4-.12c-2.38 0-4 1.45-4 4.12V10H8v3h2.6v8h3.1Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#06090b]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.5fr_1fr] lg:px-8">
        <div>
          <Image
            alt="EFORCE Eletrônica Automotiva"
            className="h-auto w-36 brightness-0 invert-[16%] sepia saturate-[6531%] hue-rotate-[349deg] brightness-[105%] contrast-[96%]"
            height={50}
            src="/images/logo-eforce.png"
            width={170}
          />
          <p className="mt-4 max-w-xs text-xs leading-5 text-muted">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-4">
            <a
              aria-label="Instagram da EFORCE"
              className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition duration-300 hover:scale-110 hover:border-accent/60 hover:text-accent"
              href="https://instagram.com/eforceeletronica"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              aria-label="Facebook da EFORCE"
              className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition duration-300 hover:scale-110 hover:border-accent/60 hover:text-accent"
              href="https://www.facebook.com/eliasforceeletronicaautomotiva/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide">Nossos serviços</h3>
          <nav className="mt-5 grid gap-3 sm:grid-cols-2">
            {navigation.slice(1).map((item) => (
              <a className="flex items-center gap-2 text-xs text-muted hover:text-white" href={item.href} key={item.href}>
                <ChevronRight size={13} className="text-accent" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide">Contato</h3>
          <div className="mt-5 grid gap-3 text-xs text-muted">
            <TrackedLink
              analyticsEvent="phone_click"
              className="flex items-center gap-3 hover:text-white"
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            >
              <Phone size={15} /> {siteConfig.phone}
            </TrackedLink>
            <span className="flex items-center gap-3"><MapPin size={15} /> {siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-4 text-center text-[10px] text-muted">
        © 2026 EFORCE Eletrônica Automotiva. Todos os direitos reservados.
        <p className="mt-1 text-[9px] text-white/30">
          Site e SEO Google feito por:{" "}
          <a
            className="transition hover:text-white/60"
            href="https://www.oleonardomachado.com.br"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.oleonardomachado.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
