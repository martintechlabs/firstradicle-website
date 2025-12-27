# Operational Guide for AI Agents

This document defines the context, rules, and workflows for any AI agent (Manus, Cursor, Windsurf, etc.) modifying this codebase.

**Status:** Normative
**Scope:** All automated or semi-automated code generation

---

## 1. Project Context

**First Radicle** is a high-end software agency that helps startups migrate from no-code (Bubble/Airtable) to scalable code (React/Node/Postgres).

- **Core Value Proposition:** "Stop Building Toys. Start Cultivating Software."
- **Target Audience:** Non-technical founders who have outgrown their MVP.
- **Brand Voice:** Professional, authoritative, organic, engineering-focused, "anti-hype."

---

## 2. Tech Stack (Strict)

- **Framework:** Next.js 16 (App Router, Static Export)
- **Routing:** Next.js App Router (file-based routing)
- **Styling:** Tailwind CSS 4 + CSS Variables (defined in `app/globals.css`)
- **UI Library:** Radix UI (Headless primitives) + shadcn/ui (Styled components)
- **Icons:** `lucide-react`
- **Language:** TypeScript (Strict mode)
- **Package Manager:** `pnpm` (NOT npm or yarn)
- **Build Output:** Static site generation (`output: "export"` in `next.config.ts`)
- **Fonts:** Fraunces (serif) and Outfit (sans) via Next.js font optimization
- **Analytics:** Vercel Analytics

---

## 3. Critical Rules (The "Do Not Break" List)

1.  **Respect `DESIGN.md`:** This file is the source of truth for all UI decisions. Do not invent new colors, spacing, or variants. Use the tokens.
2.  **No Arbitrary Values:** Never use `w-[350px]` or `bg-[#123456]`. If a token doesn't exist, check `DESIGN.md` or ask the user.
3.  **Radix First:** For any interactive component (modal, dropdown, tooltip), you **MUST** use a Radix UI primitive. Do not build it from scratch with `useState`.
4.  **Mobile First:** Always write styles for mobile first, then add `md:` or `lg:` overrides.
5.  **No "Lorem Ipsum":** Use realistic, context-appropriate placeholder text related to software engineering or startups.
6.  **Static Export:** This is a static site. Do not use server-only features (API routes, server actions, etc.) unless explicitly required.
7.  **Package Manager:** Always use `pnpm`, never `npm` or `yarn`.
8.  **Client Components:** Mark components with `"use client"` if they use hooks, state, or browser APIs.
9.  **Path Aliases:** Always use `@/*` for app imports, never relative paths like `../../`.

---

## 4. File Structure & Naming

- `app/components/ui/` -> Low-level primitives (Button, Input, Card) - kebab-case files (e.g., `button.tsx`)
- `app/components/` -> Compound components (Layout, LandingComponents, MobileNav) - PascalCase files
- `app/` -> Page-level layouts (file-based routing) - `page.tsx` for routes
- `app/lib/` -> Utilities (`cn`, formatters)
- `app/hooks/` -> Custom React hooks
- `public/images/` -> Static images and assets

**Path Aliases:**

- `@/*` -> `./app/*` (e.g., `@/components/Layout`)
- `@shared/*` -> `./shared/*`

**Naming:**

- UI Component Files: `kebab-case.tsx` (e.g., `button.tsx`, `alert-dialog.tsx`)
- Feature Component Files: `PascalCase.tsx` (e.g., `Layout.tsx`, `PricingCard.tsx`)
- Functions: `PascalCase` (e.g., `function PricingCard`)
- Variables: `camelCase` (e.g., `const isPopular`)

**Client Components:**

- Components that use hooks, state, or browser APIs must include `"use client"` directive at the top
- Server components (default) cannot use hooks or browser APIs

---

## 5. Workflow for Agents

1.  **Read Context:** Before writing code, read `DESIGN.md` and `app/globals.css` to understand the available tokens.
2.  **Check Existing:** Look in `app/components/` and `app/components/ui/` to see if a component already exists. Do not duplicate.
3.  **Plan:** Briefly outline the component structure and which Radix primitives will be used.
4.  **Determine Client vs Server:** If the component needs hooks, state, or browser APIs, add `"use client"` directive.
5.  **Implement:** Write the code using Tailwind classes and semantic tokens. Use path aliases (`@/*`).
6.  **Verify:** Check for accessibility (keyboard nav, ARIA) and responsiveness.
7.  **Test Build:** Ensure `pnpm build` succeeds (static export requirement).

---

## 6. Common Tasks & Snippets

### Creating a New Page

1.  Create `app/new-page/page.tsx` (Next.js App Router file-based routing).
2.  Export default function component.
3.  Use `<Layout>` wrapper from `@/components/Layout`.
4.  If the page needs interactivity, add `"use client"` directive.
5.  Import using path aliases: `import { Layout } from "@/components/Layout"`.

### Color System

The codebase uses OKLCH color space for better color consistency:

- Colors are defined as CSS variables in `app/globals.css`
- Primary: Deep Forest Green (`oklch(0.35 0.12 150)`)
- Background: Warm Beige (`oklch(0.97 0.02 90)`)
- Foreground: Soft Charcoal (`oklch(0.25 0.02 90)`)
- Accent: Gold (`oklch(0.75 0.15 85)`)
- Dark mode colors are defined in `.dark` class

### Adding a UI Component

1.  Check if it requires state (open/close). If yes, find the Radix primitive.
2.  Install primitive: `pnpm add @radix-ui/react-dialog` (example).
3.  Create `app/components/ui/dialog.tsx` (kebab-case for UI components).
4.  Style using `data-[state=open]:animate-in` classes.
5.  If component uses hooks or browser APIs, add `"use client"` directive at the top.

### Custom Utility Classes

The codebase defines custom utility classes in `app/globals.css`:

- `organic-card` - Card styling with hover effects
- `organic-btn` - Primary button styling
- `organic-btn-secondary` - Secondary button styling

Use these utilities when appropriate, or create new ones following the same pattern in `globals.css`.

### Using Path Aliases

Always use path aliases for imports:

- `@/components/Layout` instead of `../../components/Layout`
- `@/lib/utils` instead of `../lib/utils`

---

## 7. Build & Development

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build static site (required for deployment)
pnpm check        # Type check without emitting
pnpm format       # Format code with Prettier
```

### Build Requirements

- Static export is configured (`output: "export"` in `next.config.ts`)
- Images must use `unoptimized: true` (Next.js Image component)
- No API routes or server-side features
- All pages must be statically generatable

### Common Patterns

**Typography:**

- Use `<Headline>` and `<Subheadline>` components from `@/components/LandingComponents` for consistent typography
- Headings use `font-serif` (Fraunces)
- Body text uses `font-sans` (Outfit)

**Layout:**

- Use `<Section>` component for consistent page sections
- Use `container` class for max-width and padding
- Use `<Layout>` wrapper for all pages

**Buttons:**

- Use `<OrganicButton>` from `@/components/LandingComponents` for primary CTAs
- Use shadcn `<Button>` from `@/components/ui/button` for form actions

**Images:**

- Place images in `public/images/`
- Use Next.js `<Image>` component with proper width/height
- Images are unoptimized due to static export

---

**Final Instruction:** If you are unsure about a design decision, default to the "Restraint" principle in `DESIGN.md`. Less is more.
