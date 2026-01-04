"use client";

import { OrganicButton } from "@/components/LandingComponents";
import Link from "next/link";
import { trackNavClick } from "@/lib/analytics";

export function AboutCTA() {
  return (
    <Link
      href="/contact"
      onClick={() => trackNavClick("contact", "about_page")}
    >
      <OrganicButton className="text-lg px-8 py-4">
        Work With Us
      </OrganicButton>
    </Link>
  );
}

