import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Cpu, KeyRound, ScanLine, Settings, ShieldCheck, Wrench } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { services } from "@/data/home";
import { siteConfig } from "@/data/site";
import { SectionShell } from "./section-shell";

const icons = [Settings, ScanLine, KeyRound, ShieldCheck, Cpu, Wrench];
const servicesWhatsappHref = `${siteConfig.whatsappHref.split("?")[0]}?text=${encodeURIComponent(
  "Olá! Gostaria de conhecer mais serviços da E.FORCE.",
)}`;

export function Services() {
  return (
    <SectionShell className="border-y border-white/5" id="servicos">
      <div className="text-center">
        <h2 className="display-title text-4xl"><span>Nossas </span><span className="text-accent">especialidades</span></h2>
        <p className="mx-auto mt-3 max-w-5xl text-center text-base leading-relaxed font-medium text-white sm:text-xl lg:text-2xl lg:whitespace-nowrap">
          Soluções completas em eletrônica automotiva com tecnologia e precisão.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-6">
        {services.map((service, index) => {
          const Icon = icons[index];
          const imageExists = existsSync(
            path.join(process.cwd(), "public", service.image),
          );

          return (
            <Card className="group overflow-hidden" key={service.title}>
              <div className="relative grid h-36 place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_25%,rgba(176,0,0,.16),transparent_48%),linear-gradient(145deg,#171c1f,#090c0e)]">
                {imageExists ? (
                  <Image
                    alt={service.title}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1280px) 16vw, (min-width: 640px) 50vw, 100vw"
                    src={service.image}
                  />
                ) : (
                  <Icon
                    aria-hidden="true"
                    className="text-white/15 transition duration-500 group-hover:scale-110 group-hover:text-accent/40"
                    size={48}
                    strokeWidth={1}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101518] via-[#101518]/25 to-black/20" />
              </div>
              <div className="p-4">
                <Icon className="mb-3 text-white/65" size={18} strokeWidth={1.5} />
                <h3 className="display-title text-xl leading-5">{service.title}</h3>
                <p className="mt-3 text-[11px] leading-5 text-muted">{service.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-7 text-center"><Button href={servicesWhatsappHref} target="_blank" variant="secondary">CONSULTE MAIS SERVIÇOS</Button></div>
    </SectionShell>
  );
}
