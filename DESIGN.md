# Design System Specification

This document defines the authoritative design system specification for UI built with React, Tailwind CSS, and Radix UI. It is the single source of truth for design, styling, interaction, and accessibility.

**Status:** Normative
**Scope:** All UI components and layouts

---

## 1. Design Principles

### Core Values

- **Clarity:** UI must be self-explanatory. Ambiguity is a defect.
- **Hierarchy:** Visual weight must match functional importance.
- **Restraint:** Use the minimum number of elements required to achieve the goal.
- **Accessibility:** Inclusive design is a requirement, not a feature.

### Tradeoffs

- **Consistency over Novelty:** We prefer predictable patterns over unique, one-off solutions.
- **Function over Form:** Aesthetics serve usability, not the other way around.
- **System over Speed:** We build reusable systems, even if it takes longer initially.

### Anti-Patterns (Forbidden)

- **Inline Styles:** Never use `style={{ ... }}` for layout or theming.
- **Magic Numbers:** No arbitrary pixel values (e.g., `width: 317px`). Use tokens.
- **Reinventing the Wheel:** Do not build custom interactive primitives (modals, dropdowns) from scratch. Use Radix UI.
- **Hidden State:** UI state must be explicit and deterministic.

---

## 2. Design Tokens (Source of Truth)

Tokens are the atomic units of our design system, defined as CSS variables. Tailwind consumes these tokens via `theme.extend`.

### Token Model

- **Format:** Kebab-case CSS variables (e.g., `--primary-foreground`).
- **Usage:** Referenced in Tailwind config, never hardcoded in components.
- **Semantic Layering:** Tokens describe _what_ they are (e.g., `text-destructive`), not _what color_ they are (e.g., `red-500`).

### Required Token Categories

#### Color

**Brand Palette (OKLCH Color Space)**

The design system uses OKLCH color space for perceptual uniformity and better color consistency. All brand colors are defined in `app/globals.css`.

**Core Brand Colors:**

- **Primary (Deep Forest Green):** `oklch(0.35 0.12 150)` - Main brand color for CTAs, headings, and key UI elements
- **Background (Warm Beige):** `oklch(0.97 0.02 90)` - Page background, warm and organic
- **Foreground (Soft Charcoal):** `oklch(0.25 0.02 90)` - Primary text color
- **Gold Accent:** `oklch(0.75 0.15 85)` - Accent color for highlights and special elements

**Extended Palette:**

- **Lighter Green:** `oklch(0.6 0.1 150)` - Chart color, lighter variant
- **Earthy Brown:** `oklch(0.5 0.05 90)` - Chart color, neutral earth tone
- **Sand:** `oklch(0.85 0.05 90)` - Chart color, light neutral
- **Muted Red (Destructive):** `oklch(0.6 0.15 25)` - Error states and destructive actions

**Color Tokens:**
| Token | Description | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- | :--- |
| `--background` | Page background color | `oklch(0.97 0.02 90)` | `oklch(0.15 0.05 150)` |
| `--foreground` | Default text color | `oklch(0.25 0.02 90)` | `oklch(0.95 0.02 90)` |
| `--primary` | Primary brand color | `oklch(0.35 0.12 150)` | `oklch(0.75 0.15 85)` |
| `--primary-foreground` | Text color on primary background | `oklch(0.98 0.01 90)` | `oklch(0.15 0.05 150)` |
| `--secondary` | Secondary brand color | `oklch(0.92 0.03 90)` | `oklch(0.22 0.05 150)` |
| `--secondary-foreground` | Text color on secondary background | `oklch(0.25 0.02 90)` | `oklch(0.95 0.02 90)` |
| `--muted` | Muted background color | `oklch(0.92 0.03 90)` | `oklch(0.22 0.05 150)` |
| `--muted-foreground` | Muted text color | `oklch(0.5 0.02 90)` | `oklch(0.7 0.02 90)` |
| `--accent` | Accent background color | `oklch(0.92 0.03 90)` | `oklch(0.22 0.05 150)` |
| `--accent-foreground` | Text color on accent background | `oklch(0.25 0.02 90)` | `oklch(0.95 0.02 90)` |
| `--destructive` | Destructive action color | `oklch(0.6 0.15 25)` | `oklch(0.6 0.15 25)` |
| `--destructive-foreground` | Text color on destructive background | `oklch(0.98 0.01 90)` | `oklch(0.98 0.01 90)` |
| `--border` | Default border color | `oklch(0.85 0.02 90)` | `oklch(0.25 0.05 150)` |
| `--input` | Input border color | `oklch(0.85 0.02 90)` | `oklch(0.25 0.05 150)` |
| `--ring` | Focus ring color | `oklch(0.35 0.12 150)` | `oklch(0.75 0.15 85)` |
| `--card` | Card background color | `oklch(0.99 0.01 90)` | `oklch(0.18 0.05 150)` |
| `--card-foreground` | Text color on card background | `oklch(0.25 0.02 90)` | `oklch(0.95 0.02 90)` |

**Color Usage Guidelines:**

- Use `--primary` for primary actions, headings, and brand elements
- Use `--background` and `--foreground` for base page colors
- Use `--muted` and `--muted-foreground` for secondary text and subtle backgrounds
- Use `--destructive` only for destructive actions (delete, remove, etc.)
- Never hardcode color values. Always use CSS variables.

#### Typography

| Token          | Description                          |
| :------------- | :----------------------------------- |
| `--font-sans`  | Primary sans-serif font family       |
| `--font-serif` | Primary serif font family (headings) |
| `--font-mono`  | Monospace font family                |

- **Sizes:** `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`
- **Weights:** `light` (300), `normal` (400), `medium` (500), `semibold` (600), `bold` (700)
- **Line Heights:** `none` (1), `tight` (1.25), `snug` (1.375), `normal` (1.5), `relaxed` (1.625), `loose` (2)

#### Spacing & Sizing

- **Base Unit:** 4px (0.25rem)
- **Scale:** `0`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`

#### Radius

| Token      | Description                                 |
| :--------- | :------------------------------------------ |
| `--radius` | Base border radius                          |
| `sm`       | Small radius (`calc(var(--radius) - 2px)`)  |
| `md`       | Medium radius (`calc(var(--radius) - 2px)`) |
| `lg`       | Large radius (`var(--radius)`)              |
| `full`     | 9999px                                      |

#### Elevation (Shadows)

- `sm`, `default`, `md`, `lg`, `xl`, `2xl`

#### Motion

- **Durations:** `fast` (150ms), `normal` (300ms), `slow` (500ms)
- **Easings:** `ease-in`, `ease-out`, `ease-in-out`
- **Requirement:** All motion must respect `prefers-reduced-motion`.

---

## 3. Tailwind Rules

- **Token-Backed Only:** Only use utilities that map to our design tokens.
- **No Arbitrary Values:** `w-[317px]` is forbidden. Use `w-80` or extend the theme.
- **@apply Usage:** Only allowed in `index.css` for base layer styles (e.g., resetting HTML elements). Never use `@apply` in component files.
- **Dark Mode:** Handled via CSS variables and the `dark` class on the root element. Do not use conditional logic in JS for theming.
- **Breakpoints:** Defined centrally in `tailwind.config.js`. No component-level media queries.

---

## 4. Component System (Radix-First)

We use **Radix UI** primitives for all complex interactive components to ensure accessibility and correct behavior.

### Mandatory Radix Usage

- **Dialog / Modal:** `@radix-ui/react-dialog`
- **Popover:** `@radix-ui/react-popover`
- **Tooltip:** `@radix-ui/react-tooltip`
- **Dropdown Menu:** `@radix-ui/react-dropdown-menu`
- **Select:** `@radix-ui/react-select`
- **Tabs:** `@radix-ui/react-tabs`
- **Accordion:** `@radix-ui/react-accordion`
- **Switch:** `@radix-ui/react-switch`
- **Checkbox:** `@radix-ui/react-checkbox`

### Component Contract

Every component must define:

1.  **Purpose:** What problem does it solve?
2.  **Primitive:** Which Radix primitive does it use (if any)?
3.  **Variants:** Supported visual styles (e.g., `default`, `outline`, `ghost`).
4.  **Props:** Required vs. optional props.
5.  **Behavior:** Controlled vs. uncontrolled state.

### Forbidden

- **Forking Radix:** Do not reimplement Radix logic. Wrap it.
- **Bypassing Accessibility:** Do not suppress accessibility warnings or remove ARIA attributes provided by Radix.
- **Styling Internals:** Do not rely on unstable internal Radix classes. Use the `data-state` attributes for styling state.

---

## 5. Interaction & Motion

### States

All interactive elements must define styles for:

- `default`
- `hover`
- `focus-visible` (Ring must be visible and use `--ring` token)
- `active`
- `disabled`
- `loading` (if applicable)

### Motion Guidelines

- **Functional:** Motion must communicate state change (e.g., opening, closing, loading).
- **Brief:** Animations should not block user interaction. Keep durations under 300ms.
- **Reduced Motion:** All animations must degrade gracefully when `prefers-reduced-motion` is enabled.

---

## 6. Accessibility Standards

- **Keyboard Navigation:** All interactive elements must be reachable and usable via keyboard (Tab, Enter, Space, Arrows).
- **Focus Management:** Delegated to Radix UI primitives. Do not manually manage focus unless absolutely necessary.
- **ARIA:** Only add ARIA attributes if Radix does not provide them.
- **Contrast:** All text must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
- **Screen Readers:** UI state changes must be announced or discoverable.

---

## 7. Layout & Responsiveness

- **Technique:** Use Flexbox and Grid for all layouts.
- **Spacing:** Use tokenized spacing utilities (`gap-4`, `p-6`, `m-8`).
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Mobile-First:** Write styles for mobile first, then use `md:`, `lg:` modifiers for larger screens.

---

## 8. Content & Tone

- **Labels:** Sentence case (e.g., "Save changes", not "Save Changes").
- **Actions:** Use imperative verbs (e.g., "Add item", "Delete").
- **Errors:** Explain how to recover, not just what went wrong.
- **Empty States:** Tell the user what to do next (e.g., "No items found. Create a new item to get started.").
- **Placeholders:** No "Lorem Ipsum". Use realistic data or helpful placeholder text.

---

## 9. Implementation Constraints

### React

- **Components:** Function components only.
- **State:** Use Hooks (`useState`, `useReducer`, `useContext`).
- **Structure:**
  - `src/components/ui`: Low-level primitives (Button, Input).
  - `src/components`: Compound components (Navbar, Sidebar).
  - `src/pages`: Page-level layouts.

### Naming Conventions

- **Components:** PascalCase (e.g., `PrimaryButton.tsx`).
- **Tokens:** Kebab-case (e.g., `--primary-foreground`).
- **Files:** Match component name.

### Dependencies

- **No Undocumented Deps:** Do not install new packages without updating `package.json` and documenting the reason.

---

## 10. Agent & Contributor Rules

### Contributors Must:

1.  Check for existing tokens before adding new ones.
2.  Check for existing components before building new ones.
3.  Update `DESIGN.md` if the system needs to be extended.

### Contributors Must Not:

1.  Hardcode hex values or pixels.
2.  Invent undocumented variants (e.g., `variant="super-special"`).
3.  Bypass Radix primitives for complex interactions.

### Clarification Required When:

1.  A needed token or component does not exist.
2.  Requirements conflict with this specification.

---

## 11. Governance

### Changes

Any change to this design system requires:

1.  **Token Definition:** Add new tokens to CSS variables.
2.  **Config Update:** Update `tailwind.config.js`.
3.  **Impact Assessment:** Verify no regressions in existing UI.

### Compatibility

- **Backward Compatibility:** Default. Do not break existing UI.
- **Breaking Changes:** Must be explicit, documented, and versioned.

---

**Final Validation Checklist:**

- [ ] Can a full UI be built with zero guessing?
- [ ] Are Design, Tailwind, and Radix responsibilities explicit?
- [ ] Is accessibility guaranteed by construction?
- [ ] Does this document read like a spec, not guidance?
