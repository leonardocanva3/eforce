"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { AnalyticsEventName } from "@/lib/analytics";
import { trackElementEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  analyticsEvent: AnalyticsEventName;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function TrackedLink({
  analyticsEvent,
  children,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        trackElementEvent(analyticsEvent, event.currentTarget, href);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
