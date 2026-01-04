import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft, Zap, TrendingUp, Users, DollarSign, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When the Bubble Burst - First Radicle",
  description:
    "How a viral TikTok moment crashed a Bubble app at 5k users, and how we rebuilt it to handle 100k+ concurrent users.",
  openGraph: {
    title: "When the Bubble Burst - First Radicle",
    description:
      "How a viral TikTok moment crashed a Bubble app at 5k users, and how we rebuilt it to handle 100k+ concurrent users.",
    url: "https://www.firstradicle.com/case-studies/when-bubble-burst",
    siteName: "First Radicle",
    images: [
      {
        url: "https://www.firstradicle.com/images/blog-bubble.png",
        width: 1200,
        height: 630,
        alt: "When the Bubble Burst - Handling Viral Load",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "When the Bubble Burst - First Radicle",
    description:
      "How a viral TikTok moment crashed a Bubble app at 5k users, and how we rebuilt it to handle 100k+ concurrent users.",
    images: ["https://www.firstradicle.com/images/blog-bubble.png"],
  },
};

export default function WhenBubbleBurst() {
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
            <span>Sep 28, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            When the Bubble Burst
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            How a viral TikTok moment crashed a Bubble app at 5k users, and how
            we rebuilt it to handle 100k+ concurrent users.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container max-w-5xl mx-auto -mt-12 mb-20 relative z-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <Image
            src="/images/blog-bubble.png"
            alt="Bubble Bursting Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl mx-auto pb-32">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <p className="lead text-xl font-medium text-foreground mb-12">
            Elena had built Vintique, a social marketplace for vintage fashion,
            on Bubble. It was perfect for getting started—she could build the
            entire app without writing code, and it was working great. Six
            months in, she had 500 active users and steady growth. Then an
            influencer with 2 million followers posted about her app.
          </p>

          <h3>The Crash</h3>
          <p>
            Within 20 minutes, traffic spiked from 50 concurrent users to 5,000.
            Elena watched in horror as her Bubble app didn't just slow down—it
            completely locked up. Users saw white screens. The database timed
            out. The "Capacity" bar in her Bubble dashboard turned solid red.
          </p>
          <p>
            "I was getting notifications every second," Elena remembers. "Users
            were trying to buy things, but the checkout would just hang. Then the
            whole site went down. I couldn't do anything—I couldn't even log
            into Bubble to see what was happening."
          </p>
          <p>
            By the time the traffic subsided, Elena had lost an estimated $40,000
            in potential sales and thousands of angry users. Her app had crashed
            at the moment she needed it most. She called us the next morning.
          </p>

          <div className="my-12 p-8 bg-destructive/5 rounded-xl border border-destructive/20">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-destructive">
              <Zap className="w-5 h-5" />
              Why Bubble Failed
            </h4>
            <p className="mb-0">
              Bubble is an abstraction layer that makes building apps easy, but
              every workflow runs through their system. When you hit high
              traffic, that system becomes a bottleneck you can't control. You
              can't optimize it, you can't scale it independently, and you can't
              fix it when it breaks. You're completely dependent on Bubble's
              infrastructure, and when it fails, you're stuck.
            </p>
          </div>

          <h3>The Solution: A Scalable Platform</h3>
          <p>
            Elena needed an architecture that could handle viral moments without
            breaking. She also needed it fast—she had another influencer
            campaign planned in six weeks, and she couldn't afford another crash.
          </p>
          <p>
            We rebuilt Vintique from the ground up with scalability in mind. The
            key was separating what needed to happen immediately (like showing
            the homepage) from what could happen in the background (like
            processing payments and sending emails).
          </p>
          <p>
            When a user made a purchase, the old Bubble app tried to do
            everything at once: charge their credit card, update the database,
            send confirmation emails, notify the seller, update inventory. If any
            of those steps took too long, the whole transaction would fail.
          </p>
          <p>
            In the new system, the checkout happens instantly. The user gets
            their confirmation immediately, and all the heavy lifting—charging
            Stripe, sending emails, updating inventory—happens in the background.
            If something fails, the system automatically retries. Users never
            see errors, and Elena never loses a sale.
          </p>
          <p>
            We also implemented smart caching. The homepage, which was being
            queried thousands of times per second, now serves cached content that
            updates in the background. Users get instant page loads, and the
            database doesn't get overwhelmed.
          </p>

          <h3>The Results</h3>
          <p>
            We launched the new platform 5 weeks later. Two weeks after launch,
            Elena did another influencer campaign. This time, she was ready.
          </p>

          <div className="my-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Peak Traffic
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">12k</p>
              <p className="text-sm text-muted-foreground">
                Concurrent users (2.4x the crash level)
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Uptime
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">100%</p>
              <p className="text-sm text-muted-foreground">
                Zero downtime, page loads under 200ms
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">
                Cost
              </h4>
              <p className="text-3xl font-bold text-foreground mb-1">76%</p>
              <p className="text-sm text-muted-foreground">
                Less than Bubble—$120/mo vs $500+/mo
              </p>
            </div>
          </div>

          <p>
            But the real win wasn't just surviving the traffic spike. Elena could
            now:
          </p>
          <ul>
            <li>
              <strong>Handle viral moments:</strong> The system automatically
              scales up when traffic spikes and scales down when it's quiet. No
              manual intervention needed.
            </li>
            <li>
              <strong>Process orders reliably:</strong> Even if Stripe is slow or
              an email service is down, orders still go through. The system
              retries failed steps automatically.
            </li>
            <li>
              <strong>See what's happening:</strong> Real-time monitoring shows
              exactly what's happening at any moment. Elena can see traffic
              spikes, order volumes, and system health at a glance.
            </li>
            <li>
              <strong>Scale without limits:</strong> The platform can handle
              100,000+ concurrent users without breaking a sweat. Elena never has
              to worry about hitting capacity limits again.
            </li>
          </ul>

          <h3>Looking Forward</h3>
          <p>
            Six months after the rebuild, Vintique has processed over $2
            million in sales and handled multiple viral moments without a single
            crash. Elena has launched new features, expanded to new markets,
            and scaled her team—all without worrying about her platform breaking.
          </p>
          <p>
            "The crash was the worst moment of my startup journey," Elena says.
            "But rebuilding on a proper platform was the best decision I ever
            made. I can focus on growing my business instead of worrying about
            whether my app will survive the next viral moment."
          </p>
          <p>
            The platform that once crashed at 5,000 users now handles 100,000+
            without breaking a sweat. Elena went from building a toy to
            cultivating real software.
          </p>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Don't wait for the crash.
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're planning a big launch, marketing push, or expecting
              viral growth, let's make sure your foundation can handle it. We'll
              build you a platform that scales.
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

