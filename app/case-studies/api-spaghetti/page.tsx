import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft, Check, Workflow } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The API Spaghetti Incident - First Radicle",
  description:
    "Untangling a web of 40+ Zapier zaps into a clean, type-safe backend service.",
  openGraph: {
    title: "The API Spaghetti Incident - First Radicle",
    description:
      "Untangling a web of 40+ Zapier zaps into a clean, type-safe backend service. Reducing latency by 400% and costs by 90%.",
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
      "Untangling a web of 40+ Zapier zaps into a clean, type-safe backend service.",
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
            <Link href="/">
              <OrganicButton
                variant="secondary"
                className="text-sm py-2 px-4 inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </OrganicButton>
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">Integration</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>Sep 15, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            The API Spaghetti Incident
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            Untangling a web of 40+ Zapier zaps into a clean, type-safe backend
            service. How we reduced latency by 400% and costs by 90%.
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
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded prose-code:font-mono prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border">
          <p className="lead text-xl font-medium text-foreground mb-12">
            "It just works," they said. "No coding required," they said. Two
            years later, our client DataSync was spending $2,000 a month on
            Zapier and had no idea where their data was actually going.
          </p>

          <h3>The Symptom: "Ghost Data"</h3>
          <p>
            The founder called us because customers were complaining about
            missing onboarding emails. When we looked at their Zapier dashboard,
            it looked like a bowl of spaghetti thrown at a wall.
          </p>
          <p>
            They had a "New User" trigger that fired 12 different zaps. Some
            updated HubSpot, some Slack, some Stripe. There was no error
            handling. If the HubSpot API timed out, the Slack message never got
            sent, and the Stripe customer was never created. It was a silent
            failure.
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
                  <strong>Latency:</strong> Each step in a Zap adds 500ms-1s of
                  latency. A 10-step workflow takes 10 seconds.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Cost:</strong> You pay per "task". A simple loop over
                  1,000 users costs you 1,000 tasks.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <span>
                  <strong>Fragility:</strong> If one API changes its schema,
                  your entire business logic breaks silently.
                </span>
              </li>
            </ul>
          </div>

          <h3>The Cure: Type-Safe Services</h3>
          <p>
            We replaced those 40 zaps with a single Node.js service running on a
            $5/mo DigitalOcean droplet. We used <strong>TypeScript</strong> to
            ensure that if an API schema changed, our build would fail before we
            deployed.
          </p>

          <h3>1. Centralized Logic</h3>
          <p>
            Instead of scattering logic across 12 different Zaps, we centralized
            it in one <code>OnboardingService</code>.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">
                services/onboarding.ts
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              {`class OnboardingService {
  async onboardUser(user: User) {
    // 1. Create Stripe Customer
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id }
    });

    // 2. Sync to CRM (with retry logic)
    await retry(async () => {
      await hubspot.contacts.create({
        email: user.email,
        stripeId: customer.id
      });
    }, { retries: 3 });

    // 3. Send Welcome Email
    await email.send('welcome', user.email);
  }
}`}
            </pre>
          </div>

          <h3>2. Error Handling & Observability</h3>
          <p>
            In Zapier, you have to log in to check for errors. In our code, we
            wrap everything in try/catch blocks and send alerts to Slack
            immediately if something fails.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">
                utils/error-handler.ts
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              {`try {
  await onboardingService.onboardUser(user);
} catch (error) {
  // 1. Log the full stack trace
  logger.error('Onboarding failed', { error, userId: user.id });
  
  // 2. Alert the team
  await slack.sendAlert(\`🚨 Onboarding failed for \${user.email}\`);
  
  // 3. Queue for manual review
  await deadLetterQueue.add('onboarding', { user, error });
}`}
            </pre>
          </div>

          <h3>The Result</h3>
          <p>The migration took 3 weeks. The results were immediate:</p>
          <ul>
            <li>
              <strong>Speed:</strong> Onboarding time dropped from 45 seconds to
              1.2 seconds.
            </li>
            <li>
              <strong>Reliability:</strong> Error rate dropped from 5% to 0.01%.
            </li>
            <li>
              <strong>Cost:</strong> Zapier bill went from $2,000/mo to $0.
              Server cost is $5/mo.
            </li>
          </ul>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Is your business held together by duct tape?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We replace fragile no-code workflows with robust, testable code.
              Stop paying the "No-Code Tax."
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

