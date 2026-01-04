"use client";

import Link from "next/link";
import Image from "next/image";
import { OrganicButton } from "./LandingComponents";
import { MobileNav } from "./MobileNav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="First Radicle Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="font-serif font-bold text-2xl tracking-tight text-primary">
              First Radicle
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 font-sans font-medium text-sm text-muted-foreground">
            <Link
              href="/#problem"
              className="hover:text-primary transition-colors"
            >
              The Problem
            </Link>
            <Link
              href="/#solution"
              className="hover:text-primary transition-colors"
            >
              Solution
            </Link>
            <Link
              href="/#process"
              className="hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link
              href="/#pricing"
              className="hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/unblock"
              className="hover:text-primary transition-colors font-bold"
            >
              Unblock Session
            </Link>
          </div>
          <Link href="/unblock">
            <OrganicButton className="hidden lg:inline-flex py-2 px-6 text-sm">
              Book Call
            </OrganicButton>
          </Link>
          <MobileNav />
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="First Radicle Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto brightness-0 invert"
                />
                <div className="font-serif font-bold text-2xl tracking-tight">
                  First Radicle
                </div>
              </div>
              <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
                The bridge between validation and venture scale. We build the
                technical foundation for the next generation of unicorns.
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 flex flex-col md:items-end">
              <h4 className="font-serif font-bold mb-6 text-chart-2">
                Explore
              </h4>
              <ul className="space-y-3 text-primary-foreground/70 text-right">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://blog.firstradicle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 font-sans">
            <div>&copy; 2025 First Radicle. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
