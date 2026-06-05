import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <article
      className={`rounded-md border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_16px_35px_rgba(0,0,0,0.18)] ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}
