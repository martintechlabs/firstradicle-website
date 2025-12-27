"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Typography Components
export function Headline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-6 text-primary", className)}>
      {children}
    </h2>
  );
}

export function Subheadline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl", className)}>
      {children}
    </p>
  );
}

// Button Component
export function OrganicButton({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return (
    <button 
      className={cn(
        variant === "primary" ? "organic-btn" : "organic-btn-secondary",
        "inline-flex items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
      {variant === "primary" && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

// Card Components
export function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
  return (
    <div className="organic-card p-8 group hover:-translate-y-1 transition-transform duration-300 bg-white/50 backdrop-blur-sm h-full flex flex-col">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
    </div>
  );
}

export function PricingCard({ 
  title, 
  price, 
  features, 
  isPopular = false,
  ctaText = "Get Started",
  ctaLink
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}) {
  const ButtonComponent = (
    <OrganicButton variant={isPopular ? "primary" : "secondary"} className="w-full justify-center">
      {ctaText}
    </OrganicButton>
  );

  return (
    <div className={cn(
      "organic-card p-8 relative flex flex-col h-full transition-all duration-300",
      isPopular ? "border-primary shadow-md bg-white scale-105 z-10" : "bg-white/50 hover:bg-white/80"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-sm">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-serif font-medium mb-2 text-primary">{title}</h3>
      <div className="text-4xl font-sans font-bold mb-8 text-foreground">{price}</div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {ctaLink ? (
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
          {ButtonComponent}
        </a>
      ) : (
        ButtonComponent
      )}
    </div>
  );
}

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
      >
        <span className="text-lg font-serif font-medium pr-8 group-hover:text-primary transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary" />}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

export function BlogCard({ 
  title, 
  excerpt, 
  image, 
  date,
  readTime,
  slug
}: { 
  title: string; 
  excerpt: string; 
  image: string; 
  date: string;
  readTime: string;
  slug: string;
}) {
  return (
    <Link href={`/blog/${slug}`} className="organic-card group overflow-hidden block hover:-translate-y-1 transition-all duration-300 bg-white/50 hover:bg-white/80">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-sans">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}

export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("container py-20 md:py-32", className)}>
      {children}
    </section>
  );
}
