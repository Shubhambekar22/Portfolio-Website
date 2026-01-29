export const GA_TRACKING_ID = "G-PC9KZTE42L";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Helper to mimic the @next/third-parties interface for easier migration
export const sendGAEvent = ({ event, value }: { event: string; value: string }) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", event, {
            value: value
        });
        console.log(`[GA] Event Sent: ${event} - ${value}`);
    } else {
        console.warn(`[GA] window.gtag is not defined. Event: ${event}`);
    }
};
