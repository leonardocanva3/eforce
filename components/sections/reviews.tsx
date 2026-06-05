import { Star } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { reviews } from "@/data/home";
import { siteConfig } from "@/data/site";
import { SectionShell } from "./section-shell";

export function Reviews() {
  return (
    <SectionShell className="border-t border-white/5" id="avaliacoes">
      <div className="text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-accent">
          Clientes que confiam na EFORCE
        </p>
        <h2 className="display-title text-4xl">O que nossos <span className="text-accent">clientes</span> dizem</h2>
        <p className="mx-auto mt-3 max-w-5xl text-center text-base leading-relaxed font-medium text-white sm:text-xl lg:text-2xl lg:whitespace-nowrap">
          A confiança de quem já conhece nosso trabalho.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {reviews.map((review) => (
          <Card className="group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20" key={review.name}>
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => <Star fill="currentColor" key={index} size={13} />)}
              </div>
              <span className="grid size-6 place-items-center rounded-full bg-white text-xs font-bold text-[#4285f4]">
                G
              </span>
            </div>
            <blockquote className="mt-4 min-h-24 flex-1 text-sm leading-6 text-white/85">{review.text}</blockquote>
            <p className="mt-4 text-[10px] font-bold">{review.name}</p>
            <p className="mt-1 text-[9px] text-muted">Juína - MT</p>
          </Card>
        ))}
      </div>
      <div className="mt-7 text-center">
        <Button href={siteConfig.googleReviewsHref} target="_blank" variant="secondary">
          Ver avaliações no Google
        </Button>
      </div>
    </SectionShell>
  );
}
