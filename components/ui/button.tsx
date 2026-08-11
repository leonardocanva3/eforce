"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import Link from "next/link";
import type { AnalyticsEventName } from "@/lib/analytics";
import { trackElementEvent } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  analyticsEvent?: AnalyticsEventName;
  analyticsLocation?: string;
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
  analyticsEvent,
  analyticsLocation,
  children,
  className = "",
  download,
  href,
  target,
  variant = "primary",
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border px-6 py-3 text-xs font-bold uppercase tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (analyticsEvent) {
      try {
        trackElementEvent(analyticsEvent, event.currentTarget, href);
      } catch {
        // Tracking failures must never prevent the destination from opening.
      }
    }

    onClick?.(event as MouseEvent<HTMLButtonElement>);
  };

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          className={classes}
          data-analytics-location={analyticsLocation}
          download={download}
          href={href}
          onClick={handleClick}
          target={target}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        className={classes}
        data-analytics-location={analyticsLocation}
        download={download}
        href={href}
        onClick={handleClick}
        rel={target ? "noreferrer" : undefined}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      data-analytics-location={analyticsLocation}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
