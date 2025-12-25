import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { OrganicButton } from "./LandingComponents";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <button 
        onClick={toggleMenu}
        className="p-2 text-primary hover:bg-primary/5 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200 z-50">
          <a 
            href="#problem" 
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => setIsOpen(false)}
          >
            The Problem
          </a>
          <a 
            href="#solution" 
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => setIsOpen(false)}
          >
            Solution
          </a>
          <a 
            href="#process" 
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => setIsOpen(false)}
          >
            Process
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <Link href="/unblock">
            <a 
              className="text-lg font-bold text-primary py-2 border-b border-border/50 flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              Unblock Session
              <span className="text-xs bg-chart-2 text-primary-foreground px-2 py-0.5 rounded-full">Popular</span>
            </a>
          </Link>
          <div className="pt-2">
            <a href="https://calendly.com/martintechlabs/first-radicle-unblock-session" target="_blank" rel="noopener noreferrer">
              <OrganicButton className="w-full justify-center">
                Book Call
              </OrganicButton>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
