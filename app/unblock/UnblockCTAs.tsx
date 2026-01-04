"use client";

import { OrganicButton } from "@/components/LandingComponents";
import { ArrowRight } from "lucide-react";
import { CALENDLY_LINKS } from "@/lib/constants";
import { trackBooking } from "@/lib/analytics";

export function UnblockHeroCTA() {
  return (
    <a
      href={CALENDLY_LINKS.UNBLOCK_SESSION}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBooking("unblock_session", "unblock_hero", { type: "primary_cta" })}
    >
      <OrganicButton className="h-14 px-8 text-lg">
        Book Unblock Session ($249)
      </OrganicButton>
    </a>
  );
}

export function UnblockFinalCTA() {
  return (
    <a
      href={CALENDLY_LINKS.UNBLOCK_SESSION}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBooking("unblock_session", "unblock_cta", { type: "primary_cta" })}
    >
      <button className="bg-white text-primary hover:bg-chart-2 hover:text-white transition-colors px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
        Book Unblock Session <ArrowRight className="w-6 h-6" />
      </button>
    </a>
  );
}

