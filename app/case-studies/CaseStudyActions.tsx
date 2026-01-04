"use client";

import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  trackBooking,
  trackNavClick,
} from "@/lib/analytics";

export function BackToCaseStudies() {
  return (
    <Link
      href="/case-studies"
      onClick={() => trackNavClick("case_studies", "case_study_page")}
    >
      <OrganicButton
        variant="secondary"
        className="text-sm py-2 px-4 inline-flex items-center"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
      </OrganicButton>
    </Link>
  );
}

export function CaseStudyCTA() {
  return (
    <Link
      href="/unblock"
      onClick={() => trackBooking("unblock_session", "case_study_page", { type: "content_cta" })}
    >
      <OrganicButton className="text-lg px-8 py-4">
        Book an Unblock Session
      </OrganicButton>
    </Link>
  );
}

