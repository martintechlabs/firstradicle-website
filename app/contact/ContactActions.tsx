"use client";

import { OrganicButton } from "@/components/LandingComponents";
import Link from "next/link";
import {
  trackBooking,
  trackContactClick,
} from "@/lib/analytics";

export function ContactActions() {
  return (
    <div className="max-w-2xl mx-auto grid gap-8">
      <div className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center">
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
          Book a Discovery Call
        </h3>
        <p className="text-muted-foreground mb-8">
          The fastest way to get answers. We'll review your current setup and
          give you a clear roadmap for migration.
        </p>
        <Link
          href="/unblock"
          onClick={() => trackBooking("unblock_session", "contact_page", { type: "contact_cta" })}
        >
          <OrganicButton className="w-full md:w-auto px-8 py-3">
            Schedule 30-Min Call
          </OrganicButton>
        </Link>
      </div>

      <div className="text-center text-muted-foreground">
        <p>Prefer email?</p>
        <a
          href="mailto:hello@firstradicle.com"
          className="text-primary font-bold hover:underline text-lg"
          onClick={() => trackContactClick("email", "contact_page", { email: "hello@firstradicle.com" })}
        >
          hello@firstradicle.com
        </a>
      </div>
    </div>
  );
}

