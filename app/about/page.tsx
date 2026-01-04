import { Section, Headline, Subheadline, OrganicButton } from "@/components/LandingComponents";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - First Radicle",
  description: "We are engineers, not agency salesmen. Learn about our philosophy and mission.",
};

export default function About() {
  return (
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-6">
            Our Philosophy
          </div>
          <Headline>We Are Engineers, Not Agency Salesmen.</Headline>
          <Subheadline className="mx-auto">
            First Radicle was born from a simple frustration: watching brilliant founders get trapped by "easy" no-code tools that couldn't scale.
          </Subheadline>
        </div>

        <div className="max-w-3xl mx-auto prose prose-lg prose-stone">
          <p>
            We believe that <strong>software is an asset, not a rental.</strong> When you build on proprietary no-code platforms, you are renting your own product. You are subject to their pricing hikes, their feature limitations, and their downtime.
          </p>
          <p>
            Our mission is to liberate founders from these constraints. We don't just "write code"—we architect systems that you own completely. We use industry-standard, open-source technologies (React, Node.js, Python) that any competent engineer can work on.
          </p>
          <p>
            We are not a typical agency that wants to keep you on a retainer forever. We want to build your foundation, hand you the keys, and watch you grow.
          </p>
          
          <div className="my-12 p-8 bg-secondary/30 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">The "CodeFirst" Standard</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-3">
                <span className="text-chart-2 font-bold">✓</span>
                <span><strong>Ownership:</strong> You own the Git repository. You own the IP.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-chart-2 font-bold">✓</span>
                <span><strong>Transparency:</strong> No black boxes. You see every commit.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-chart-2 font-bold">✓</span>
                <span><strong>Quality:</strong> We write tests. We document code. We build for the next 5 years, not just the next 5 weeks.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/contact">
            <OrganicButton className="text-lg px-8 py-4">
              Work With Us
            </OrganicButton>
          </Link>
        </div>
      </Section>
  );
}
