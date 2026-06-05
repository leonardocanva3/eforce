import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnimatedStat, Button, Card } from "@/components/ui";
import { stats } from "@/data/home";
import { SectionShell } from "./section-shell";

const benefits = [
  "Profissionais especializados",
  "Equipamentos de última geração",
  "Atendimento transparente e honesto",
  "Garantia em todos os serviços",
];

export function About() {
  return (
    <SectionShell id="sobre">
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.05fr]">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted before:h-px before:w-5 before:bg-accent">Quem somos</p>
          <h2 className="display-title mt-4 text-4xl leading-[1.02]">
            Mais de <span className="text-accent">10 anos</span><br />de excelência em<br /><span className="text-accent">eletrônica automotiva</span>
          </h2>
          <p className="mt-4 text-xs leading-5 text-muted">
            A EFORCE é referência em diagnósticos e reparos de sistemas eletrônicos. Contamos com uma equipe especializada e equipamentos modernos.
          </p>
          <ul className="mt-5 grid gap-2">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-2 text-[11px] text-white/75" key={benefit}>
                <CheckCircle2 className="text-white/80" size={14} /> {benefit}
              </li>
            ))}
          </ul>
          <Button className="mt-6 self-start" href="/historia" variant="secondary">Conhecer nossa história</Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <Card className="grid min-h-36 place-items-center p-5 text-center" key={stat.label}>
              <div>
                <AnimatedStat
                  prefix={"prefix" in stat ? stat.prefix : undefined}
                  suffix={"suffix" in stat ? stat.suffix : undefined}
                  text={"text" in stat ? stat.text : undefined}
                  value={"value" in stat ? stat.value : undefined}
                />
                <p className="mt-2 text-[11px] uppercase leading-4 text-white/80">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-md border border-white/10 lg:min-h-full">
          <Image alt="Oficina EFORCE Eletrônica Automotiva" className="object-cover object-center" fill sizes="(min-width: 1024px) 34vw, 100vw" src="/images/fachada-dia.jpeg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </div>
    </SectionShell>
  );
}
