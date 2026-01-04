"use client";

import { Headline, OrganicButton, Section, Subheadline } from "@/components/LandingComponents";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-2xl text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-8">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>

        <Headline className="mb-4">
          404
        </Headline>

        <Subheadline className="mb-8">
          The page you're looking for doesn't exist.
          <br />
          It may have been moved or deleted.
        </Subheadline>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <OrganicButton className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </OrganicButton>
          </Link>
          <Link href="/contact">
            <OrganicButton variant="secondary">
              Contact Support
            </OrganicButton>
          </Link>
        </div>
      </div>
    </Section>
  );
}

