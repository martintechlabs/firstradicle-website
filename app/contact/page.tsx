import {
  Section,
  Headline,
  Subheadline,
  OrganicButton,
} from "@/components/LandingComponents";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactActions } from "./ContactActions";

export const metadata: Metadata = {
  title: "Contact - First Radicle",
  description:
    "Get in touch with First Radicle. Book a discovery call or send us an email.",
  openGraph: {
    title: "Contact - First Radicle",
    description:
      "Get in touch with First Radicle. Book a discovery call or send us an email.",
    url: "https://www.firstradicle.com/contact",
    siteName: "First Radicle",
    images: [
      {
        url: "https://www.firstradicle.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "First Radicle - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - First Radicle",
    description:
      "Get in touch with First Radicle. Book a discovery call or send us an email.",
    images: ["https://www.firstradicle.com/images/logo.png"],
  },
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
          Whether you're ready to migrate today or just have questions about the
          process, we're here to help.
        </Subheadline>
      </div>

      <ContactActions />
    </Section>
  );
}
