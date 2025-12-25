import { Headline, OrganicButton, Section, Subheadline } from "@/components/LandingComponents";
import { Layout } from "@/components/Layout";
import { ArrowRight, Check, Clock, Code2, ShieldCheck, Zap } from "lucide-react";

export default function UnblockSession() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-2/10 text-chart-2 text-xs font-bold tracking-wider uppercase mb-6 border border-chart-2/20">
            <Zap className="w-3 h-3" />
            Priority Access
          </div>
          <Headline className="text-5xl md:text-7xl mb-8">
            The Last 20% is the <br/>
            <span className="italic text-chart-2">hardest part.</span>
          </Headline>
          <Subheadline className="text-xl md:text-2xl mb-10 max-w-3xl">
            The prototype works. The core features are there. But something broke and you can't figure out what. 
            Don't let your project stall. Get unblocked in 45 minutes.
          </Subheadline>
          <div className="flex flex-col sm:flex-row gap-4">
            <OrganicButton className="h-14 px-8 text-lg">
              Book Unblock Session ($249)
            </OrganicButton>
            <p className="text-sm text-muted-foreground self-center sm:ml-4">
              100% Money-back guarantee if we can't help.
            </p>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6 text-primary">The New Normal of Building</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Vibe coding lets anyone build fast. Cursor, Replit, v0. Idea to working prototype in a weekend. 
                But the last stretch? The weird edge case, the integration that won't integrate, the error message that doesn't exist on Google?
              </p>
              <p>
                ChatGPT keeps giving you the same wrong answer. Stack Overflow has nothing. The tutorial you followed is three months old and the API has changed twice since.
              </p>
              <p className="font-medium text-primary">
                That's where projects stall. That's where they stay.
              </p>
            </div>
          </div>
          <div className="organic-card bg-white p-8 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-chart-2/10 rounded-full blur-2xl" />
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-lg bg-red-50 border border-red-100">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-mono text-xs">ERR</div>
                <div>
                  <div className="font-mono text-sm text-red-800 font-medium mb-1">Unhandled Runtime Error</div>
                  <div className="text-xs text-red-600 font-mono">TypeError: Cannot read properties of undefined (reading 'map')</div>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">🤖</div>
                <div>
                  <div className="text-sm font-medium mb-1">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">I apologize for the confusion. Let's try this solution instead...</div>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-lg bg-secondary/50 border border-border opacity-60">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">🤖</div>
                <div>
                  <div className="text-sm font-medium mb-1">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">I apologize for the confusion. Let's try this solution instead...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Headline>Senior Architect Review</Headline>
          <Subheadline>
            Upload your code. Describe the block. Get matched with an expert who's hit that wall before.
          </Subheadline>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="organic-card p-8 bg-white hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Deep Architecture Audit</h3>
            <p className="text-muted-foreground">
              We don't just patch bugs. We analyze your codebase to find the structural flaws causing them.
            </p>
          </div>
          <div className="organic-card p-8 bg-white hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">45 Minutes</h3>
            <p className="text-muted-foreground">
              Short, focused, high-intensity problem solving. No fluff. We get on a screen share and fix it.
            </p>
          </div>
          <div className="organic-card p-8 bg-white hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Problem Solved</h3>
            <p className="text-muted-foreground">
              Our goal is to get you to "Ship It". If we can't unblock you, you don't pay. Simple as that.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing / CTA */}
      <Section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/process-blueprint.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Ship?</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <div className="text-2xl font-bold mb-2">Unblock Session</div>
                <div className="text-primary-foreground/80">Strategic intervention & code audit</div>
              </div>
              <div className="text-5xl font-bold font-sans">
                $249
              </div>
            </div>
            <hr className="border-white/20 my-8" />
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-chart-2" />
                <span>45-min deep-dive call</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-chart-2" />
                <span>Collaborative review of issue</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-chart-2" />
                <span>Debugging and resolution</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-chart-2" />
                <span>1-pager of pros/cons of current code</span>
              </div>
            </div>
          </div>
          <a href="https://calendly.com/martintechlabs/first-radicle-unblock-session" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-primary hover:bg-chart-2 hover:text-white transition-colors px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Book Unblock Session <ArrowRight className="w-6 h-6" />
            </button>
          </a>
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Limited spots available per week.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
