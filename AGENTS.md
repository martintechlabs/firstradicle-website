# Operational Guide for AI Agents

This document defines the context, rules, and workflows for any AI agent (Manus, Cursor, Windsurf, etc.) modifying this codebase.

**Status:** Normative
**Scope:** All automated or semi-automated code generation

---

## 1. Project Context

**First Radicle** is a high-end software agency that helps startups migrate from no-code (Bubble/Airtable) to scalable code (React/Node/Postgres).

*   **Core Value Proposition:** "Stop Building Toys. Start Cultivating Software."
*   **Target Audience:** Non-technical founders who have outgrown their MVP.
*   **Brand Voice:** Professional, authoritative, organic, engineering-focused, "anti-hype."

---

## 2. Tech Stack (Strict)

*   **Framework:** Next.js 16 (App Router, Static Export)
*   **Routing:** Next.js App Router (file-based routing)
*   **Styling:** Tailwind CSS 4 + CSS Variables (defined in `app/globals.css`)
*   **UI Library:** Radix UI (Headless primitives) + shadcn/ui (Styled components)
*   **Icons:** `lucide-react`
*   **Language:** TypeScript (Strict mode)

---

## 3. Critical Rules (The "Do Not Break" List)

1.  **Respect `DESIGN.md`:** This file is the source of truth for all UI decisions. Do not invent new colors, spacing, or variants. Use the tokens.
2.  **No Arbitrary Values:** Never use `w-[350px]` or `bg-[#123456]`. If a token doesn't exist, check `DESIGN.md` or ask the user.
3.  **Radix First:** For any interactive component (modal, dropdown, tooltip), you **MUST** use a Radix UI primitive. Do not build it from scratch with `useState`.
4.  **Mobile First:** Always write styles for mobile first, then add `md:` or `lg:` overrides.
5.  **No "Lorem Ipsum":** Use realistic, context-appropriate placeholder text related to software engineering or startups.

---

## 4. File Structure & Naming

*   `app/components/ui/` -> Low-level primitives (Button, Input, Card).
*   `app/components/` -> Compound components (Navbar, Footer, Hero).
*   `app/` -> Page-level layouts (file-based routing).
*   `app/lib/` -> Utilities (`cn`, formatters).

**Naming:**
*   Files: `PascalCase.tsx` (e.g., `PricingCard.tsx`)
*   Functions: `PascalCase` (e.g., `function PricingCard`)
*   Variables: `camelCase` (e.g., `const isPopular`)

---

## 5. Workflow for Agents

1.  **Read Context:** Before writing code, read `DESIGN.md` and `app/globals.css` to understand the available tokens.
2.  **Check Existing:** Look in `app/components/` to see if a component already exists. Do not duplicate.
3.  **Plan:** Briefly outline the component structure and which Radix primitives will be used.
4.  **Implement:** Write the code using Tailwind classes and semantic tokens.
5.  **Verify:** Check for accessibility (keyboard nav, ARIA) and responsiveness.

---

## 6. Common Tasks & Snippets

### Creating a New Page
1.  Create `app/new-page/page.tsx` (Next.js App Router file-based routing).
2.  Export default function component.
3.  Use `<Layout>` wrapper from `app/components/Layout.tsx`.

### Adding a UI Component
1.  Check if it requires state (open/close). If yes, find the Radix primitive.
2.  Install primitive: `npm install @radix-ui/react-dialog` (example).
3.  Create `app/components/ui/dialog.tsx` (kebab-case for UI components).
4.  Style using `data-[state=open]:animate-in` classes.

---

**Final Instruction:** If you are unsure about a design decision, default to the "Restraint" principle in `DESIGN.md`. Less is more.
