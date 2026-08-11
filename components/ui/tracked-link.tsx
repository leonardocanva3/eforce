"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { AnalyticsEventName } from "@/lib/analytics";
import { trackElementEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  analyticsEvent: AnalyticsEventName;
  analyticsLocation?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function TrackedLink({
  analyticsEvent,
  analyticsLocation,
  children,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      data-analytics-location={analyticsLocation}
      href={href}
      onClick={(event) => {
        try {
          trackElementEvent(analyticsEvent, event.currentTarget, href);
        } catch {
          // Tracking failures must never prevent the destination from opening.
        }

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
