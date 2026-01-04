import { Check, Workflow, TrendingUp, Zap, DollarSign } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { BackToCaseStudies, CaseStudyCTA } from "../CaseStudyActions";

export const metadata: Metadata = {
  title: "The API Spaghetti Incident - First Radicle",
  description:
    "How DataSync untangled 40+ Zapier zaps into a clean backend service, reducing latency by 97% and costs by 96%.",
  openGraph: {
    title: "The API Spaghetti Incident - First Radicle",
    description:
      "How DataSync untangled 40+ Zapier zaps into a clean backend service, reducing latency by 97% and costs by 96%.",
    url: "https://www.firstradicle.com/case-studies/api-spaghetti",
    siteName: "First Radicle",
    images: [
      {
        url: "https://www.firstradicle.com/images/blog-zapier.png",
        width: 1200,
        height: 630,
        alt: "The API Spaghetti Incident",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The API Spaghetti Incident - First Radicle",
    description:
      "How DataSync untangled 40+ Zapier zaps into a clean backend service, reducing latency by 97% and costs by 96%.",
    images: ["https://www.firstradicle.com/images/blog-zapier.png"],
  },
};

export default function ApiSpaghetti() {
  return (
    <>
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <BackToCaseStudies />
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">Case Study</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>Sep 15, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            The API Spaghetti Incident
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            How DataSync untangled 40+ Zapier zaps into a clean backend service,
            reducing latency by 97% and costs by 96%.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container max-w-5xl mx-auto -mt-12 mb-20 relative z-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <Image
            src="/images/blog-zapier.png"
            alt="API Integration Network Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl mx-auto pb-32">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <p className="lead text-xl font-medium text-foreground mb-12">
            Marcus had built DataSync, a SaaS platform for small businesses, on
            Zapier. "It just works," the marketing said. "No coding required."
            Two years later, Marcus was spending $2,000 a month on Zapier and
            had no idea where his data was actually going.
          </p>

          <h3>The Problem: "Ghost Data"</h3>
          <p>
            It started with customer complaints. "I never got my welcome email,"
            they'd say. "My account was created but nothing works." Marcus would
            log into Zapier and see that some zaps had failed, but tracing the
            root cause across 40+ interconnected workflows was nearly impossible.
            Error visibility was fragmented across multiple systems, making it
            difficult to understand how one failure cascaded through the entire
            process.
          </p>
          <p>
            When we first looked at his Zapier dashboard, it looked like a bowl
            of spaghetti thrown at a wall. He had 40+ different "zaps" connecting
            everything: when a new user signed up, it triggered 12 different
            workflows. Some updated HubSpot, some sent Slack messages, some
            created Stripe customers, some sent emails. If any one of them failed,
            the whole process broke, and tracking the failure across all the
            interconnected zaps was difficult.
          </p>
          <p>
            "I'd wake up in the morning and check my email, and there'd be 20
            support tickets from customers saying their onboarding didn't work,"
            Marcus recalls. "I'd have to manually go into each system and fix
            things. It was a nightmare."
          </p>

          <div className="my-12 p-8 bg-secondary/30 rounded-xl border border-border">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-primary" />
              The No-Code Tax
            </h4>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Speed:</strong> Each step in a Zap adds latency, with
                  polling intervals and sequential API calls. A 10-step workflow
                  involving multiple external services could take 45 seconds to
                  complete, leaving users waiting.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Cost:</strong> Paying per "task" meant that each user
                  signup triggered 12+ workflows, each consuming multiple tasks.
                  Processing 1,000 users could easily cost 12,000+ tasks. At scale,
                  the bills were astronomical.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Reliability:</strong> If one API changed its format,
                  entire workflows would break. While Zapier provides error logs,
                  tracking failures across 40+ interconnected zaps made it
                  difficult to identify and fix issues before customers noticed.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Visibility:</strong> There was no way to see what was
                  happening in real-time. Marcus had to log into Zapier to check
                  if things were working.
                </span>
              </li>
            </ul>
          </div>

          <h3>The Solution: A Unified Backend</h3>
          <p>
            That's when Marcus reached out to First Radicle. He needed to replace
            his fragile Zapier setup with something reliable, but he was worried
            about breaking his existing workflows. "I couldn't afford downtime,"
            he said. "My business was running on these zaps."
          </p>
          <p>
            We started by mapping out every single workflow. What happened when
            a user signed up? What happened when they made a purchase? What
            happened when they canceled? We documented all 40+ zaps and their
            dependencies.
          </p>
          <p>
            Then we built a single, unified backend service that replaced all of
            them. Instead of 40 different zaps scattered across Zapier, everything
            now lived in one place. When a user signed up, the system would:
          </p>
          <ul>
            <li>Create their account in the database</li>
            <li>Create a Stripe customer (with automatic retry if it failed)</li>
            <li>Sync their information to HubSpot</li>
            <li>Send a welcome email</li>
            <li>Notify the team in Slack</li>
            <li>Log everything for debugging</li>
          </ul>
          <p>
            And if any step failed, the system would automatically retry, alert
            the team, and queue the task for manual review. No more silent
            failures.
          </p>

          <h3>The Results</h3>
          <p>
            The migration took 3 weeks. Within days of going live, Marcus noticed
            the difference:
          </p>

          <div className="my-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Speed
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">97%</p>
              <p className="text-sm text-muted-foreground">
                Faster—from 45 seconds to 1.2 seconds
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Cost Savings
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">96%</p>
              <p className="text-sm text-muted-foreground">
                Reduced from $2,000/mo to $75/mo
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Reliability
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">99.99%</p>
              <p className="text-sm text-muted-foreground">
                Error rate dropped from 5% to 0.01%
              </p>
            </div>
          </div>

          <p>
            But the real win wasn't just the numbers. Marcus could now:
          </p>
          <ul>
            <li>
              <strong>See what's happening in real-time:</strong> Every action
              is logged and monitored. If something fails, he gets an immediate
              alert in Slack with full details.
            </li>
            <li>
              <strong>Debug issues instantly:</strong> Instead of logging into
              Zapier and guessing what went wrong, he can see exactly what
              happened, when it happened, and why it failed.
            </li>
            <li>
              <strong>Scale without breaking the bank:</strong> The new system's
              infrastructure hosting costs approximately $75/month, regardless of
              how many users he processes. No more per-task pricing that scales
              linearly with usage.
            </li>
            <li>
              <strong>Add new features easily:</strong> Want to send a text
              message when a user signs up? Just add it to the service. No need
              to create a new Zap and hope it doesn't break.
            </li>
          </ul>

          <h3>Looking Forward</h3>
          <p>
            Six months after the migration, DataSync has processed over 50,000
            users without a single onboarding failure. Marcus has added new
            features, integrated new services, and scaled his business—all without
            worrying about his infrastructure breaking.
          </p>
          <p>
            "I used to spend hours every week fixing broken zaps and dealing with
            customer complaints," Marcus says. "Now I can focus on building my
            product. It's like I finally have a real platform instead of a house
            of cards."
          </p>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Is your business held together by duct tape?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're spending thousands on Zapier or struggling with fragile
              no-code workflows, we can help you build a robust, scalable backend.
              Stop paying the "No-Code Tax."
            </p>
            <CaseStudyCTA />
          </div>
        </div>
      </article>
    </>
  );
}

