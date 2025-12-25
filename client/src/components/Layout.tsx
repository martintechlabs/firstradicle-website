import { Link } from "wouter";
import { OrganicButton } from "./LandingComponents";
import { MobileNav } from "./MobileNav";
import { ArrowRight } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3 cursor-pointer">
              <img src="/images/logo.png" alt="First Radicle Logo" className="h-10 w-auto" />
              <div className="font-serif font-bold text-2xl tracking-tight text-primary">
                First Radicle
              </div>
            </a>
          </Link>
          <div className="hidden lg:flex gap-8 font-sans font-medium text-sm text-muted-foreground">
            <Link href="/#problem"><a className="hover:text-primary transition-colors">The Problem</a></Link>
            <Link href="/#solution"><a className="hover:text-primary transition-colors">Solution</a></Link>
            <Link href="/#process"><a className="hover:text-primary transition-colors">Process</a></Link>
            <Link href="/#pricing"><a className="hover:text-primary transition-colors">Pricing</a></Link>
            <Link href="/unblock"><a className="hover:text-primary transition-colors font-bold">Unblock Session</a></Link>
          </div>
          <Link href="/unblock">
            <OrganicButton className="hidden lg:inline-flex py-2 px-6 text-sm">
              Book Call <ArrowRight className="ml-2 w-4 h-4" />
            </OrganicButton>
          </Link>
          <MobileNav />
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

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
            <div className="col-span-2 md:col-span-2 flex flex-col md:items-end">
              <h4 className="font-serif font-bold mb-6 text-chart-2">Explore</h4>
              <ul className="space-y-3 text-primary-foreground/70 text-right">
                <li><Link href="/about"><a className="hover:text-white transition-colors">About</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
                <li><Link href="/guarantee"><a className="hover:text-white transition-colors">Guarantee</a></Link></li>
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
