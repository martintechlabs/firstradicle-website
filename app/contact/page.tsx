import { Section, Headline, Subheadline, OrganicButton } from "@/components/LandingComponents";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - First Radicle",
  description: "Get in touch with First Radicle. Book a discovery call or send us an email.",
};

export default function Contact() {
  return (
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-6">
            Get in Touch
          </div>
          <Headline>Ready to Break Free?</Headline>
          <Subheadline className="mx-auto">
            Whether you're ready to migrate today or just have questions about the process, we're here to help.
          </Subheadline>
        </div>

        <div className="max-w-2xl mx-auto grid gap-8">
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Book a Discovery Call</h3>
            <p className="text-muted-foreground mb-8">
              The fastest way to get answers. We'll review your current setup and give you a clear roadmap for migration.
            </p>
            <Link href="/unblock">
              <OrganicButton className="w-full md:w-auto px-8 py-3">
                Schedule 30-Min Call
              </OrganicButton>
            </Link>
          </div>

          <div className="text-center text-muted-foreground">
            <p>Prefer email?</p>
            <a href="mailto:hello@firstradicle.com" className="text-primary font-bold hover:underline text-lg">
              hello@firstradicle.com
            </a>
          </div>
        </div>
      </Section>
  );
}
