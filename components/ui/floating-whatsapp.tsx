import { siteConfig } from "@/data/site";
import { TrackedLink } from "./tracked-link";

export function FloatingWhatsApp() {
  return (
    <TrackedLink
      analyticsEvent="whatsapp_click"
      aria-label="Falar com a EFORCE pelo WhatsApp"
      className="fixed right-5 bottom-5 z-[100] grid size-[60px] place-items-center rounded-full border border-white/20 bg-[#25d366] text-white shadow-[0_10px_30px_rgba(0,0,0,.45),0_5px_16px_rgba(37,211,102,.35)] transition duration-300 hover:scale-110 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] sm:right-7 sm:bottom-7"
      href={siteConfig.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        className="size-8 fill-current"
        viewBox="0 0 32 32"
      >
        <path d="M16.04 3A12.93 12.93 0 0 0 5.1 22.82L3 29l6.4-2.05A12.99 12.99 0 1 0 16.04 3Zm0 23.8a10.76 10.76 0 0 1-5.49-1.5l-.39-.23-3.8 1.22 1.24-3.7-.25-.4a10.8 10.8 0 1 1 8.69 4.61Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.33-.83 1.06-1.02 1.28-.19.22-.38.25-.7.09-.33-.17-1.37-.51-2.61-1.61a9.8 9.8 0 0 1-1.81-2.26c-.19-.33-.02-.5.14-.67.15-.14.33-.38.49-.57.16-.19.21-.33.32-.54.11-.22.06-.41-.03-.57-.08-.17-.73-1.76-1-2.41-.26-.64-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.4-.3.33-1.13 1.12-1.13 2.71s1.16 3.14 1.32 3.36c.16.21 2.28 3.49 5.52 4.89.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.79 2.19-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </TrackedLink>
  );
}
