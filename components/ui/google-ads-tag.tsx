"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { GOOGLE_ADS_ID, IS_PRODUCTION } from "@/lib/analytics-config";

export function GoogleAdsTag() {
  useEffect(() => {
    if (!IS_PRODUCTION || !GOOGLE_ADS_ID) {
      return;
    }

    sendGAEvent("config", GOOGLE_ADS_ID);
  }, []);

  return null;
}
