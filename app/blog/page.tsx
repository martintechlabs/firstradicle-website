import {
  Section,
  Headline,
  Subheadline,
  BlogCard,
} from "@/components/LandingComponents";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - First Radicle",
  description:
    "Technical migration stories and deep dives into engineering challenges.",
  openGraph: {
    title: "Blog - First Radicle",
    description:
      "Technical migration stories and deep dives into engineering challenges.",
    url: "https://www.firstradicle.com/blog",
    siteName: "First Radicle",
    images: [
      {
        url: "https://www.firstradicle.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "First Radicle Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - First Radicle",
    description:
      "Technical migration stories and deep dives into engineering challenges.",
    images: ["https://www.firstradicle.com/images/logo.png"],
  },
};

export default function Blog() {
  return (
    <Section className="pt-32 pb-20 bg-secondary/30">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-6">
          From the Roots
        </div>
        <Headline>Technical Migration Stories</Headline>
        <Subheadline className="mx-auto">
          Deep dives into the engineering challenges of moving from no-code to
          code. Real problems, real solutions.
        </Subheadline>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <BlogCard
          title="Escaping the Airtable Trap: Migrating 50k Records"
          excerpt="How we moved a complex relational schema from Airtable to PostgreSQL without losing a single record or breaking relationships."
          image="/images/blog-airtable.png"
          date="Oct 12, 2024"
          readTime="8 min read"
          slug="escaping-airtable"
        />
        <BlogCard
          title="When Bubble Bursts: Handling Viral Traffic"
          excerpt="A post-mortem of a Bubble app that crashed during a Product Hunt launch, and how we rebuilt it to handle 10k concurrent users."
          image="/images/blog-bubble.png"
          date="Nov 03, 2024"
          readTime="6 min read"
          slug="when-bubble-burst"
        />
        <BlogCard
          title="Untangling API Spaghetti: Zapier to Node.js"
          excerpt="Replacing 500+ fragile Zaps with a robust, type-safe Node.js backend. Saving $2k/mo and reducing error rates by 99%."
          image="/images/blog-zapier.png"
          date="Nov 28, 2024"
          readTime="5 min read"
          slug="api-spaghetti"
        />
      </div>
    </Section>
  );
}
