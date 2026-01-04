import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft, Check, TrendingUp, Zap, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escaping the Airtable Trap - First Radicle",
  description:
    "How a logistics startup hit their limits with Airtable and migrated to a scalable platform, reducing costs by 79% and improving performance by 99%.",
  openGraph: {
    title: "Escaping the Airtable Trap - First Radicle",
    description:
      "How a logistics startup hit their limits with Airtable and migrated to a scalable platform, reducing costs by 79% and improving performance by 99%.",
    url: "https://www.firstradicle.com/case-studies/escaping-airtable",
    siteName: "First Radicle",
    images: [
      {
        url: "https://www.firstradicle.com/images/blog-airtable.png",
        width: 1200,
        height: 630,
        alt: "Escaping the Airtable Trap: A Success Story",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escaping the Airtable Trap - First Radicle",
    description:
      "How a logistics startup hit their limits with Airtable and migrated to a scalable platform, reducing costs by 79% and improving performance by 99%.",
    images: ["https://www.firstradicle.com/images/blog-airtable.png"],
  },
};

export default function EscapingAirtable() {
  return (
    <>
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/case-studies">
              <OrganicButton
                variant="secondary"
                className="text-sm py-2 px-4 inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
              </OrganicButton>
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">Case Study</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>Oct 12, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            Escaping the Airtable Trap
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            How a logistics startup hit their limits with Airtable and migrated
            to a scalable platform, reducing costs by 79% and improving
            performance by 99%.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container max-w-5xl mx-auto -mt-12 mb-20 relative z-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <Image
            src="/images/blog-airtable.png"
            alt="Airtable to Database Migration Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl mx-auto pb-32">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <p className="lead text-xl font-medium text-foreground mb-12">
            Sarah had built her logistics startup on Airtable. It was perfect
            for prototyping—easy to set up, no coding required, and her team
            could collaborate in real-time. Two years later, with 48,000
            shipment records and growing, Airtable wasn't a tool anymore. It
            was a bottleneck.
          </p>

          <h3>The Breaking Point</h3>
          <p>
            The problems started small. A report would take 8 seconds to load.
            Then 15 seconds. Then it would timeout entirely. Sarah's team was
            hitting API rate limits daily, which meant their customer portal
            would randomly stop working during peak hours.
          </p>
          <p>
            "We were paying $1,200 a month for Airtable Enterprise, and it felt
            like we were using a spreadsheet that was actively fighting us,"
            Sarah recalls. "Every time we tried to run a complex query or
            generate a report, it would either crash or take so long that our
            team would just give up."
          </p>
          <p>
            The real wake-up call came when they tried to onboard a major
            enterprise client. The client needed real-time tracking data, but
            Airtable's API couldn't handle the load. Sarah's team had to
            manually export data to Excel and send it via email—hardly the
            professional experience they wanted to deliver.
          </p>

          <div className="my-12 p-8 bg-secondary/30 rounded-xl border border-border">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              The Pain Points
            </h4>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Performance:</strong> Complex queries taking 8-15
                  seconds, often timing out completely
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>API Limits:</strong> Hitting rate limits daily,
                  causing customer-facing features to fail
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Cost:</strong> $1,200/month for Enterprise plan with
                  no clear path to scale
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Data Integrity:</strong> No way to enforce business
                  rules or prevent invalid data entry
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Scalability:</strong> Approaching the 50,000 record
                  limit with no room to grow
                </span>
              </li>
            </ul>
          </div>

          <h3>The Solution: A Proper Platform</h3>
          <p>
            That's when Sarah reached out to First Radicle. She knew she needed
            to migrate to a real database, but the thought of losing data or
            breaking her existing workflows was terrifying. "We had two years of
            business data in Airtable. If we lost even a single record, it would
            be catastrophic."
          </p>
          <p>
            We started by understanding her business logic. How did shipments
            relate to customers? What were the critical workflows? What data
            needed to be preserved exactly as-is, and what could be improved?
          </p>
          <p>
            The migration itself was designed to be zero-downtime. We built a
            custom migration script that:
          </p>
          <ul>
            <li>
              Extracted all 48,000 shipment records and 2,500 customer records
              from Airtable
            </li>
            <li>
              Preserved all relationships and data integrity during the transfer
            </li>
            <li>
              Ran in parallel with their existing Airtable setup, so business
              could continue uninterrupted
            </li>
            <li>
              Validated every record to ensure nothing was lost or corrupted
            </li>
          </ul>
          <p>
            The entire migration took less than a week, and we didn't lose a
            single record.
          </p>

          <h3>The Results</h3>
          <p>
            The transformation was immediate. Within days of going live, Sarah's
            team noticed the difference:
          </p>

          <div className="my-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Performance
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">99%</p>
              <p className="text-sm text-muted-foreground">
                Faster queries—from 8 seconds to 12 milliseconds
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Cost Savings
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">79%</p>
              <p className="text-sm text-muted-foreground">
                Reduced from $1,200/mo to $250/mo
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Reliability
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">100%</p>
              <p className="text-sm text-muted-foreground">
                Zero downtime, zero data loss
              </p>
            </div>
          </div>

          <p>
            But the real win wasn't just the numbers. Sarah's team could now:
          </p>
          <ul>
            <li>
              <strong>Run complex reports instantly:</strong> What used to take
              8 seconds now happens in milliseconds. Her team can filter by
              date range, customer, value, and status all at once without
              waiting.
            </li>
            <li>
              <strong>Scale without limits:</strong> They're no longer
              approaching a 50,000 record ceiling. The new platform can handle
              millions of records without breaking a sweat.
            </li>
            <li>
              <strong>Enforce data integrity:</strong> Database constraints
              ensure that every shipment has a valid customer, preventing the
              data quality issues that plagued them in Airtable.
            </li>
            <li>
              <strong>Build new features:</strong> With a proper database, they
              can now build real-time dashboards, automated workflows, and
              integrations that were impossible with Airtable's limitations.
            </li>
          </ul>

          <h3>Looking Forward</h3>
          <p>
            Six months after the migration, Sarah's startup has onboarded three
            new enterprise clients. The platform that was once a bottleneck is
            now a competitive advantage. "We can respond to customer requests in
            real-time, run complex analytics, and scale our operations without
            worrying about hitting limits," Sarah says. "It's like we finally
            graduated from building toys to cultivating real software."
          </p>
          <p>
            The migration wasn't just about moving data—it was about unlocking
            the potential that Airtable had been holding back. Sarah's team
            could focus on growing their business instead of fighting with their
            tools.
          </p>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Ready to escape your spreadsheet?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're hitting limits with Airtable, Bubble, or any no-code
              platform, we can help you migrate to a scalable solution. We've
              done this dozens of times, and we can do it for you without
              losing a single record.
            </p>
            <Link href="/unblock">
              <OrganicButton className="text-lg px-8 py-4">
                Book an Unblock Session
              </OrganicButton>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

