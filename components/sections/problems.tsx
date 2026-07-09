import { Activity, AlertCircle, BatteryWarning, Car, Fuel, Gauge, KeyRound, Wrench } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { problems } from "@/data/home";
import { siteConfig } from "@/data/site";
import { SectionShell } from "./section-shell";

const icons = [Gauge, Car, Wrench, Activity, KeyRound, Fuel, AlertCircle, BatteryWarning];

export function Problems() {
  return (
    <SectionShell className="relative z-20 -mt-10 pt-10 sm:-mt-12 sm:pt-12" id="diferenciais">
      <div className="text-center">
        <h2 className="display-title text-3xl sm:text-4xl">
          Seu carro apresenta algum destes <span className="text-accent">problemas?</span>
        </h2>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {problems.map((problem, index) => {
          const Icon = icons[index];
          return (
            <Card className="grid min-h-32 place-items-center p-4 text-center transition hover:-translate-y-1 hover:border-accent/60" key={problem}>
              <div>
                <Icon className="mx-auto text-accent" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 text-[11px] font-bold uppercase leading-4">{problem}</h3>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <div className="mx-auto my-10 grid max-w-3xl gap-3 text-center text-white">
          <p className="text-lg leading-tight font-bold sm:text-[22px] lg:text-[28px]">
            Seu veículo apresenta algum desses sintomas?
          </p>
          <p className="text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
            Nossa equipe em Juína - MT está pronta para realizar um diagnóstico preciso em ABS, airbag, módulos e sistemas eletrônicos.
          </p>
        </div>
        <Button
          analyticsEvent="whatsapp_click"
          className="mt-4"
          href={siteConfig.whatsappHref}
          target="_blank"
          variant="secondary"
        >
          Falar agora pelo WhatsApp
        </Button>
      </div>
    </SectionShell>
  );
}
