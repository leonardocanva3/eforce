import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  download?: AnchorHTMLAttributes<HTMLAnchorElement>["download"];
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[#d51b1b] bg-gradient-to-b from-[#c91515] to-[#960000] text-white shadow-[0_8px_24px_rgba(176,0,0,.18)] hover:brightness-110",
  secondary:
    "border-zinc-500/70 bg-transparent text-white hover:border-white hover:bg-white/5",
  light: "border-white bg-white text-zinc-950 hover:bg-zinc-100",
};

export function Button({
  children,
  className = "",
  download,
  href,
  target,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border px-6 py-3 text-xs font-bold uppercase tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link className={classes} download={download} href={href} target={target}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} download={download} href={href} rel={target ? "noreferrer" : undefined} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
