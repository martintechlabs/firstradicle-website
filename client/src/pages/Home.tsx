import { BlogCard, FAQItem, FeatureCard, Headline, OrganicButton, PricingCard, Section, Subheadline } from "@/components/LandingComponents";
import { Code, Database, Globe, Layers, Lock, Rocket, Server, ShieldCheck, Terminal, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="First Radicle Logo" className="h-10 w-auto" />
            <div className="font-serif font-bold text-2xl tracking-tight text-primary">
              First Radicle
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-sans font-medium text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-primary transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-primary transition-colors">Solution</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <OrganicButton className="hidden md:inline-flex py-2 px-6 text-sm">
            Book Call
          </OrganicButton>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-20 pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-8">
              For No-Code Refugees
            </div>
            <Headline>
              Stop Building Toys.<br />
              Start Cultivating <span className="text-primary italic">Software.</span>
            </Headline>
            <Subheadline>
              We turn your struggling Bubble app into a scalable, production-ready React & Node.js ecosystem in 6 weeks. Guaranteed.
            </Subheadline>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <OrganicButton className="text-lg px-8 py-4">
                Start Your Build
              </OrganicButton>
              <OrganicButton variant="secondary" className="text-lg px-8 py-4">
                View Case Studies
              </OrganicButton>
            </div>
            
            <div className="mt-16 flex items-center gap-12 border-t border-border pt-8">
              <div>
                <div className="font-serif font-bold text-3xl text-primary">6 WKS</div>
                <div className="text-sm font-sans text-muted-foreground mt-1">Delivery Time</div>
              </div>
              <div>
                <div className="font-serif font-bold text-3xl text-primary">$10K</div>
                <div className="text-sm font-sans text-muted-foreground mt-1">Fixed Price</div>
              </div>
              <div>
                <div className="font-serif font-bold text-3xl text-primary">100%</div>
                <div className="text-sm font-sans text-muted-foreground mt-1">Money Back</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="organic-card p-4 rotate-1 hover:rotate-0 transition-transform duration-500 bg-white shadow-xl">
              <img 
                src="/images/hero-growth.png" 
                alt="Digital Growth Ecosystem" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Strip */}
      <div className="border-y border-border bg-white/50 py-12">
        <div className="container">
          <p className="font-sans text-center text-sm font-medium mb-8 text-muted-foreground tracking-wide">TRUSTED BY FOUNDERS MIGRATING FROM</p>
          <div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold font-serif text-primary">Bubble</span>
            <span className="text-2xl font-bold font-serif text-primary">Webflow</span>
            <span className="text-2xl font-bold font-serif text-primary">Airtable</span>
            <span className="text-2xl font-bold font-serif text-primary">Zapier</span>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <Section id="problem" className="bg-white">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-destructive/5 rounded-full blur-3xl transform scale-90" />
            <img 
              src="/images/pain-tangle.png" 
              alt="Complexity Knot" 
              className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block border border-destructive/30 text-destructive bg-destructive/5 px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-6">
              The Reality Check
            </div>
            <Headline className="text-foreground">
              Your No-Code App is a <span className="text-destructive font-serif italic">Tangled Mess.</span>
            </Headline>
            <div className="space-y-8 font-sans text-lg text-muted-foreground">
              <div className="flex gap-6 items-start">
                <div className="bg-destructive/10 text-destructive w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">!</div>
                <p><strong className="text-foreground block mb-1">It crashes under load.</strong> One viral post and your Bubble database chokes. You lose users faster than you gain them.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-destructive/10 text-destructive w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">!</div>
                <p><strong className="text-foreground block mb-1">Zapier bills are bleeding you dry.</strong> You're paying $500/mo just to move data from A to B. It's inefficient and expensive.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-destructive/10 text-destructive w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">!</div>
                <p><strong className="text-foreground block mb-1">Investors won't touch it.</strong> VCs want IP, not a rented house on someone else's land. You need code to raise capital.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" className="bg-secondary/30">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Headline>Real Code. Organic Scale. <br/>No Headaches.</Headline>
          <Subheadline className="mx-auto">
            We bridge the gap between validation and venture scale. You get a battle-tested ecosystem enhanced with AI speed.
          </Subheadline>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Production Grade"
            description="Built on React, Node.js, and PostgreSQL. The same stack used by Uber, Airbnb, and Netflix. Ready for millions of users."
            icon={Server}
          />
          <FeatureCard 
            title="You Own The IP"
            description="No platform lock-in. You get the GitHub repository. Host it anywhere. Hire your own team later. It's 100% yours."
            icon={Lock}
          />
          <FeatureCard 
            title="AI-Accelerated"
            description="We use advanced AI agents to write boilerplate code 10x faster, so we can focus on your unique business logic and complex features."
            icon={Zap}
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Headline>From Seed to Forest in 3 Steps</Headline>
            <div className="space-y-12 mt-12">
              <div className="relative pl-12 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-white w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-serif font-medium mb-2 text-primary">The Handover</h3>
                <p className="text-lg text-muted-foreground">Give us your no-code prototype and a walkthrough. We map your data structures and logic to a real schema.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-white w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-serif font-medium mb-2 text-primary">The Cultivation</h3>
                <p className="text-lg text-muted-foreground">We sprint for 6 weeks. You get weekly demos on a staging server. We migrate your data and set up auth.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-white w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-serif font-medium mb-2 text-primary">The Harvest</h3>
                <p className="text-lg text-muted-foreground">We deploy to your cloud (AWS/Vercel). We monitor the switch-over. You're now running on professional rails.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="organic-card p-4 bg-secondary/20">
              <img 
                src="/images/process-flow.png" 
                alt="Process Flow Diagram" 
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-secondary/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-full mb-8 text-center md:text-left">
            <Headline>Technical Ecosystem</Headline>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Database className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">PostgreSQL DB</h4>
            <p className="text-sm text-muted-foreground">Structured, relational data that scales.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Globe className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">React Frontend</h4>
            <p className="text-sm text-muted-foreground">Snappy, app-like experience.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Server className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">Node.js API</h4>
            <p className="text-sm text-muted-foreground">Fast, event-driven backend logic.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <ShieldCheck className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">Secure Auth</h4>
            <p className="text-sm text-muted-foreground">JWTs, OAuth, and role-based access.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Layers className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">Clean Architecture</h4>
            <p className="text-sm text-muted-foreground">Modular code that's easy to extend.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Terminal className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">CI/CD Pipeline</h4>
            <p className="text-sm text-muted-foreground">Automated testing and deployment.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Code className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">TypeScript</h4>
            <p className="text-sm text-muted-foreground">Type-safe code for fewer bugs.</p>
          </div>
          <div className="organic-card p-6 hover:bg-white transition-colors">
            <Rocket className="w-8 h-8 mb-4 text-primary" />
            <h4 className="font-serif font-bold mb-2 text-primary">SEO Optimized</h4>
            <p className="text-sm text-muted-foreground">Server-side rendering ready.</p>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-primary text-primary-foreground">
        <Headline className="text-center text-primary-foreground mb-16">Founder Stories</Headline>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl relative border border-white/10">
            <div className="text-6xl font-serif absolute top-6 left-6 opacity-20">"</div>
            <p className="text-lg font-medium relative z-10 mb-8 leading-relaxed">
              "We hit 5,000 users on Bubble and the app just stopped working. First Radicle migrated us in 5 weeks. We just raised our Seed round on the new tech stack."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div>
                <div className="font-serif font-bold text-lg">Sarah Jenkins</div>
                <div className="text-sm opacity-80">Founder, FinFlow</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl relative border border-white/10">
            <div className="text-6xl font-serif absolute top-6 left-6 opacity-20">"</div>
            <p className="text-lg font-medium relative z-10 mb-8 leading-relaxed">
              "I was spending $2k/month on Zapier. The custom backend First Radicle built cut our operational costs by 90% and runs 10x faster."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div>
                <div className="font-serif font-bold text-lg">Marcus Chen</div>
                <div className="text-sm opacity-80">CEO, DataSync</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section className="bg-secondary/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm mb-6">
              From the Roots
            </div>
            <Headline className="mb-4">Technical Migration Stories</Headline>
            <Subheadline className="mb-0">
              Deep dives into the engineering challenges of moving from no-code to code. Real problems, real solutions.
            </Subheadline>
          </div>
          <OrganicButton variant="secondary" className="shrink-0">
            View All Stories
          </OrganicButton>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/escaping-airtable" className="block h-full">
            <BlogCard 
              title="Escaping the Airtable Trap: Migrating 50k Records"
              excerpt="How we moved a complex relational schema from Airtable to PostgreSQL without losing a single record or breaking relationships."
              image="/images/blog-airtable.png"
              date="Oct 12, 2025"
              readTime="8 min read"
            />
          </Link>
          <Link href="/blog/when-bubble-burst" className="block h-full">
            <BlogCard 
              title="When the Bubble Burst: Handling Viral Load"
              excerpt="A post-mortem of a Bubble app that crashed at 5k concurrent users, and the Node.js architecture that replaced it to handle 100k."
              image="/images/blog-bubble.png"
              date="Sep 28, 2025"
              readTime="12 min read"
            />
          </Link>
          <BlogCard 
            title="The API Spaghetti Incident"
            excerpt="Untangling a web of 40+ Zapier zips into a clean, type-safe backend service. Reducing latency by 400% and costs by 90%."
            image="/images/blog-api.png"
            date="Sep 15, 2025"
            readTime="6 min read"
          />
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <div className="text-center mb-16">
          <Headline>Simple, Transparent Pricing</Headline>
          <Subheadline className="mx-auto">No hourly billing surprises. No scope creep. Just results.</Subheadline>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <PricingCard 
            title="Strategy Audit"
            price="$249"
            ctaText="Book Audit"
            features={[
              "1-hour deep dive call",
              "Architecture review",
              "Migration roadmap",
              "Cost savings analysis",
              "Risk assessment"
            ]}
          />
          <PricingCard 
            title="The MVP Build"
            price="$10,000"
            isPopular={true}
            ctaText="Start Application"
            features={[
              "Full React/Node.js Build",
              "Database Migration",
              "Auth & Payments Setup",
              "6-Week Delivery Guarantee",
              "Source Code Ownership",
              "30 Days Bug Fixes"
            ]}
          />
          <PricingCard 
            title="Scale Support"
            price="$2k/mo"
            ctaText="Contact Us"
            features={[
              "Ongoing Feature Dev",
              "Server Maintenance",
              "Security Updates",
              "Priority Support",
              "Monthly Strategy Call",
              "Cancel Anytime"
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Headline>FAQ</Headline>
            <p className="text-lg mb-8 text-muted-foreground">Have questions? We have answers.</p>
            <OrganicButton variant="secondary">Contact Support</OrganicButton>
          </div>
          <div className="md:col-span-8">
            <FAQItem 
              question="Do I really own the code?"
              answer="Yes. 100%. We build it in a private GitHub repository and transfer full ownership to you upon completion. You are not locked into our platform."
            />
            <FAQItem 
              question="What happens if you miss the 6-week deadline?"
              answer="We work for free until it's done. If we miss the agreed-upon scope deadline, you don't pay the final installment until it's live."
            />
            <FAQItem 
              question="Can you migrate my data from Bubble?"
              answer="Absolutely. We write custom scripts to export your data from Bubble/Airtable and import it into a properly structured PostgreSQL database."
            />
            <FAQItem 
              question="Do you use AI to write the code?"
              answer="Yes. We use advanced AI agents to handle the repetitive boilerplate work. This is how we can deliver a $50k agency-quality build for $10k in 6 weeks. Human senior engineers review every line."
            />
            <FAQItem 
              question="What are the ongoing costs?"
              answer="Unlike Bubble, you only pay for hosting (usually $20-$50/mo on Vercel/Render) and any third-party APIs you use. No more user-limits or row-limits."
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-primary/5 text-center py-32">
        <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-primary">
          Ready to <span className="italic">Scale?</span>
        </h2>
        <p className="text-xl md:text-2xl font-sans text-muted-foreground max-w-2xl mx-auto mb-12">
          Don't let your no-code prototype hold you back. Secure your spot for next month's sprint.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <OrganicButton className="text-xl px-10 py-5 shadow-lg hover:shadow-xl">
            Apply Now - $10k Fixed
          </OrganicButton>
          <OrganicButton variant="secondary" className="text-xl px-10 py-5 bg-white hover:bg-white/80">
            Book a Strategy Call
          </OrganicButton>
        </div>
        <p className="mt-8 text-sm text-muted-foreground font-sans uppercase tracking-widest">
          Limited to 5 clients per month to ensure quality.
        </p>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.png" alt="First Radicle Logo" className="h-8 w-auto brightness-0 invert" />
                <div className="font-serif font-bold text-2xl tracking-tight">
                  First Radicle
                </div>
              </div>
              <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
                The bridge between validation and venture scale. We build the technical foundation for the next generation of unicorns.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-6 text-chart-2">Company</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-6 text-chart-2">Legal</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guarantee</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 font-sans">
            <div>&copy; 2025 First Radicle. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
