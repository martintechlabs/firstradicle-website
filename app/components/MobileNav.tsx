"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { OrganicButton } from "./LandingComponents";
import {
  trackBooking,
  trackNavClick,
  trackMobileNavToggle,
} from "@/lib/analytics";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    trackMobileNavToggle(newState ? "open" : "close");
  };

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
            onClick={() => {
              setIsOpen(false);
              trackNavClick("problem", "mobile_nav");
            }}
          >
            The Problem
          </a>
          <a
            href="#solution"
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => {
              setIsOpen(false);
              trackNavClick("solution", "mobile_nav");
            }}
          >
            Solution
          </a>
          <a
            href="#process"
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => {
              setIsOpen(false);
              trackNavClick("process", "mobile_nav");
            }}
          >
            Process
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
            onClick={() => {
              setIsOpen(false);
              trackNavClick("pricing", "mobile_nav");
            }}
          >
            Pricing
          </a>
          <Link
            href="/unblock"
            className="text-lg font-bold text-primary py-2 border-b border-border/50 flex items-center justify-between"
            onClick={() => {
              setIsOpen(false);
              trackNavClick("unblock", "mobile_nav");
            }}
          >
            Unblock Session
            <span className="text-xs bg-chart-2 text-primary-foreground px-2 py-0.5 rounded-full">
              Popular
            </span>
          </Link>
          <div className="pt-2">
            <Link
              href="/unblock"
              onClick={() => {
                setIsOpen(false);
                trackBooking("unblock_session", "mobile_nav", {
                  type: "navigation",
                });
              }}
            >
              <OrganicButton className="w-full justify-center">
                Book Call
              </OrganicButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
