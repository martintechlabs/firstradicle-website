"use client";

import { Headline, OrganicButton, Section } from "@/components/LandingComponents";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-2xl text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
          <AlertTriangle
            size={48}
            className="text-destructive"
          />
        </div>

        <Headline className="mb-4">
          An unexpected error occurred
        </Headline>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
          Something went wrong. Don't worry—this has been logged and we'll look into it.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="p-6 w-full rounded-lg bg-muted overflow-auto mb-8 text-left">
            <pre className="text-sm text-muted-foreground whitespace-break-spaces font-mono">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <OrganicButton onClick={reset} className="inline-flex items-center gap-2">
            <RotateCcw size={16} />
            Try Again
          </OrganicButton>
        </div>
      </div>
    </Section>
  );
}

