import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When the Bubble Burst - First Radicle",
  description:
    "A post-mortem of a Bubble app that crashed at 5k concurrent users, and the Node.js architecture that replaced it.",
  openGraph: {
    title: "When the Bubble Burst - First Radicle",
    description:
      "A post-mortem of a Bubble app that crashed at 5k concurrent users, and the Node.js architecture that replaced it to handle 100k.",
    url: "https://www.firstradicle.com/blog/when-bubble-burst",
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
      "A post-mortem of a Bubble app that crashed at 5k concurrent users, and the Node.js architecture that replaced it.",
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
            <span className="text-primary">Architecture</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>Sep 28, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>12 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            When the Bubble Burst: Handling Viral Load
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            A post-mortem of a Bubble app that crashed at 5k concurrent users,
            and the Node.js architecture that replaced it to handle 100k.
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
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded prose-code:font-mono prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border">
          <p className="lead text-xl font-medium text-foreground mb-12">
            It started with a TikTok video. Our client, a social marketplace for
            vintage fashion, had been growing steadily on Bubble for six months.
            Then an influencer with 2M followers posted about them.
          </p>

          <h3>The Crash</h3>
          <p>
            Within 20 minutes, traffic spiked from 50 concurrent users to 5,000.
            The Bubble app didn't just slow down; it completely locked up. Users
            saw white screens. The database timed out. The "Capacity" bar in the
            Bubble dashboard was solid red.
          </p>
          <p>
            By the time the traffic subsided, they had lost an estimated $40k in
            potential sales and thousands of angry users. They called us the
            next morning.
          </p>

          <div className="my-12 p-8 bg-destructive/5 rounded-xl border border-destructive/20">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-destructive">
              <Zap className="w-5 h-5" />
              Why Bubble Failed
            </h4>
            <p className="text-sm mb-0">
              Bubble is an abstraction layer over AWS. It's brilliant for
              building fast, but every workflow runs through their interpretive
              engine. When you hit high concurrency, that engine becomes a
              bottleneck that you cannot optimize because you don't own the
              server.
            </p>
          </div>

          <h3>The Solution: Event-Driven Node.js</h3>
          <p>
            We needed an architecture that could handle "bursty" traffic without
            flinching. We chose a classic scalable stack:
          </p>
          <ul>
            <li>
              <strong>Frontend:</strong> React (Vite) hosted on Vercel Edge
              Network.
            </li>
            <li>
              <strong>Backend:</strong> Node.js (Express) on auto-scaling
              containers.
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL with a Redis cache layer.
            </li>
            <li>
              <strong>Queue:</strong> BullMQ (Redis) for background jobs.
            </li>
          </ul>

          <h3>Optimizing for Concurrency</h3>
          <p>
            The key to handling 100k users isn't just "more servers"—it's
            keeping the main thread free. In the Bubble app, when a user made a
            purchase, the workflow did everything synchronously: charged Stripe,
            sent an email, updated the database, and notified the seller.
          </p>
          <p>
            In our Node.js architecture, we moved all heavy lifting to a
            background queue.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">
                controllers/checkout.ts
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              {`// The API responds instantly
app.post('/checkout', async (req, res) => {
  // 1. Validate input (fast)
  const { userId, items } = validate(req.body);

  // 2. Add to queue (fast - ms)
  await checkoutQueue.add('process-order', { userId, items });

  // 3. Return success immediately
  res.json({ status: 'processing', orderId: generateId() });
});`}
            </pre>
          </div>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">
                workers/checkout.ts
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              {`// The Worker handles the heavy lifting in the background
new Worker('checkout-queue', async job => {
  const { userId, items } = job.data;
  
  // These can take 5-10 seconds and it won't block the user
  await stripe.charges.create(...);
  await db.orders.create(...);
  await emailService.sendConfirmation(...);
  await notificationService.alertSeller(...);
});`}
            </pre>
          </div>

          <h3>Database Caching Strategy</h3>
          <p>
            The other killer was database reads. The homepage was querying the
            "Products" table directly for every single visitor. We implemented a
            "Stale-While-Revalidate" caching strategy using Redis.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">
                services/product.ts
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              {`async function getTrendingProducts() {
  // 1. Try cache first
  const cached = await redis.get('trending-products');
  if (cached) return JSON.parse(cached);

  // 2. If miss, query DB
  const products = await db.products.findMany({
    where: { isTrending: true },
    take: 20
  });

  // 3. Save to cache for 60 seconds
  await redis.set('trending-products', JSON.stringify(products), 'EX', 60);
  
  return products;
}`}
            </pre>
          </div>

          <h3>The Results</h3>
          <p>
            We launched the new platform 5 weeks later. Two weeks after launch,
            they did another influencer campaign.
          </p>
          <ul>
            <li>
              <strong>Peak Traffic:</strong> 12,000 concurrent users (2.4x the
              crash level).
            </li>
            <li>
              <strong>Server Load:</strong> CPU peaked at 40%. Auto-scaling
              added 2 extra containers automatically.
            </li>
            <li>
              <strong>User Experience:</strong> 0 downtime. Page load times
              remained under 200ms.
            </li>
            <li>
              <strong>Cost:</strong> $120/mo for the entire infrastructure (vs
              $500+ on Bubble).
            </li>
          </ul>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Don't wait for the crash.
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're planning a big launch or marketing push, let's make sure
              your foundation is solid.
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
