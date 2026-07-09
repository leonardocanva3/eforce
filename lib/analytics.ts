"use client";

import { sendGAEvent } from "@next/third-parties/google";
import {
  GOOGLE_ADS_EBOOK_CONVERSION_LABEL,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_PHONE_CONVERSION_LABEL,
  GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL,
  IS_PRODUCTION,
} from "./analytics-config";

export type AnalyticsEventName =
  | "ebook_download"
  | "phone_click"
  | "whatsapp_click";

type AnalyticsParams = {
  button_text?: string;
  file_name?: string;
  page: string;
};

const googleAdsConversionLabels: Record<AnalyticsEventName, string> = {
  ebook_download: GOOGLE_ADS_EBOOK_CONVERSION_LABEL,
  phone_click: GOOGLE_ADS_PHONE_CONVERSION_LABEL,
  whatsapp_click: GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL,
};

let googleAdsConfigured = false;

function getCurrentPage() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.pathname}${window.location.search}`;
}

function getElementText(element: HTMLElement) {
  return (
    element.innerText ||
    element.textContent ||
    element.getAttribute("aria-label") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim();
}

function getFileName(href?: string) {
  if (!href || typeof window === "undefined") {
    return "";
  }

  const { pathname } = new URL(href, window.location.origin);
  return pathname.split("/").filter(Boolean).at(-1) ?? "";
}

function hasGoogleAdsConversion(eventName: AnalyticsEventName) {
  return Boolean(GOOGLE_ADS_ID && googleAdsConversionLabels[eventName]);
}

function trackGoogleAdsConversion(
  eventName: AnalyticsEventName,
  params: AnalyticsParams,
) {
  if (!hasGoogleAdsConversion(eventName)) {
    return;
  }

  if (!googleAdsConfigured) {
    sendGAEvent("config", GOOGLE_ADS_ID);
    googleAdsConfigured = true;
  }

  sendGAEvent("event", "conversion", {
    ...params,
    send_to: `${GOOGLE_ADS_ID}/${googleAdsConversionLabels[eventName]}`,
  });
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsParams,
) {
  if (!IS_PRODUCTION) {
    return;
  }

  sendGAEvent("event", eventName, params);
  trackGoogleAdsConversion(eventName, params);
}

export function trackElementEvent(
  eventName: AnalyticsEventName,
  element: HTMLElement,
  href?: string,
) {
  const page = getCurrentPage();

  if (eventName === "whatsapp_click") {
    trackEvent(eventName, {
      button_text: getElementText(element),
      page,
    });
    return;
  }

  if (eventName === "ebook_download") {
    trackEvent(eventName, {
      file_name: getFileName(href),
      page,
    });
    return;
  }

  trackEvent(eventName, { page });
}
