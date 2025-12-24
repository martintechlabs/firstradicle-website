import { BlogCard, FAQItem, FeatureCard, Headline, OrganicButton, PricingCard, Section, Subheadline } from "@/components/LandingComponents";
import { Layout } from "@/components/Layout";
import { ArrowRight, Code, Database, Lock, Rocket, Server, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-20 pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <Link href="/unblock">
              <a className="inline-flex items-center gap-2 bg-chart-2 text-primary-foreground px-5 py-2 rounded-full font-sans font-bold text-sm mb-6 hover:bg-chart-2/90 transition-all shadow-md hover:shadow-lg cursor-pointer group border border-chart-2/50">
                <Zap className="w-4 h-4 fill-current" />
                <span className="tracking-wide">Stuck right now? Get unblocked</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <div className="block mb-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans font-medium text-sm">
                For No-Code Refugees
              </div>
            </div>
            <Headline>
              Stop Building Toys.<br />
              Start Cultivating <span className="text-primary italic">Software.</span>
            </Headline>
            <Subheadline>
              We turn struggling no-code projects into scalable, production-ready apps in 6 weeks. Guaranteed.
            </Subheadline>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/unblock">
                <OrganicButton className="text-lg px-8 py-4">
                  Book Architect Review
                </OrganicButton>
              </Link>
              <a href="#process">
                <OrganicButton variant="secondary" className="text-lg px-8 py-4">
                  Explore Full Migration
                </OrganicButton>
              </a>
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Bubble</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Webflow</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Airtable</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Zapier</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Replit</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Lovable</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Bolt</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">Cursor</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-primary">v0</span>
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
            description="Built on modern stacks like React, Python, or Next.js. The same tech used by Uber, Airbnb, and Netflix. Built to grow seamlessly with your business."
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
                <p className="text-lg text-muted-foreground">We hand over the keys to your GitHub repo. We deploy to your cloud. You're ready to scale to millions.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10 transform rotate-2"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="organic-card p-6 hover:bg-white transition-colors">
                <Code className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-serif font-bold mb-2 text-primary">Clean Architecture</h4>
                <p className="text-sm text-muted-foreground">Modular, maintainable code.</p>
              </div>
              <div className="organic-card p-6 hover:bg-white transition-colors mt-8">
                <Database className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-serif font-bold mb-2 text-primary">Real Database</h4>
                <p className="text-sm text-muted-foreground">PostgreSQL with proper relations.</p>
              </div>
              <div className="organic-card p-6 hover:bg-white transition-colors">
                <ShieldCheck className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-serif font-bold mb-2 text-primary">Automated Testing</h4>
                <p className="text-sm text-muted-foreground">Full test suites for confident deploys.</p>
              </div>
              <div className="organic-card p-6 hover:bg-white transition-colors">
                <Rocket className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-serif font-bold mb-2 text-primary">Enterprise Security</h4>
                <p className="text-sm text-muted-foreground">OWASP best practices built-in.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-primary text-primary-foreground">
        <Headline className="text-center text-primary-foreground mb-16">Founder Stories</Headline>
        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Founder",
                  quote: "We hit 5,000 users on Bubble and the app just stopped working. First Radicle migrated us in 5 weeks. We just raised our Seed round on the new tech stack.",
                  avatar: "/images/avatar-sarah.jpg"
                },
                {
                  name: "Marcus Chen",
                  role: "CEO",
                  quote: "I was spending $2k/month on Zapier. The custom backend First Radicle built cut our operational costs by 90% and runs 10x faster.",
                  avatar: "/images/avatar-marcus.jpg"
                },
                {
                  name: "Elena Rodriguez",
                  role: "CTO",
                  quote: "Our Webflow site looked great but couldn't handle complex user auth. First Radicle ported it to Next.js without losing our design identity. Now we have real user accounts.",
                  avatar: "/images/avatar-elena.jpg"
                },
                {
                  name: "David Park",
                  role: "Founder",
                  quote: "Airtable was great for prototyping, but we hit the record limit in 3 months. The migration to a real Postgres database was seamless. No data lost, just infinite scale.",
                  avatar: "/images/avatar-david.jpg"
                },
                {
                  name: "Priya Patel",
                  role: "Co-Founder",
                  quote: "I was terrified of 'owning the code' because I'm not technical. First Radicle's handover process was incredible. I actually understand how my app works now.",
                  avatar: "/images/avatar-priya.jpg"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl relative border border-white/10 h-full flex flex-col">
                    <div className="text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-lg font-medium relative z-10 mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                      <div>
                        <div className="font-serif font-bold text-lg">{testimonial.name}</div>
                        <div className="text-sm opacity-80">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
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
          <Link href="/blog">
            <OrganicButton variant="secondary" className="shrink-0">
              View All Stories
            </OrganicButton>
          </Link>
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
          <Link href="/blog/api-spaghetti" className="block h-full">
            <BlogCard 
              title="The API Spaghetti Incident"
              excerpt="Untangling a web of 40+ Zapier zips into a clean, type-safe backend service. Reducing latency by 400% and costs by 90%."
              image="/images/blog-zapier.png"
              date="Sep 15, 2025"
              readTime="6 min read"
            />
          </Link>
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
            title="Unblock Session"
            price="$249"
            ctaText="Book Session"
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
              "Full Stack Migration",
              "Data Migration",
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
    </Layout>
  );
}
