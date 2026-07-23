# OnePlus One | FamilyOS Marketing Hub

A complete, production-quality, premium marketing website built using **Next.js 15+**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

This codebase represents a Series A/B funded startup web presence, designed with intentional spacing, minimalist premium layouts, technological dark accents, and zero-knowledge privacy messaging.

---

## 🚀 Key Brand & Product Architecture

- **OnePlus One**: An AI product company focused on building practical, utility-driven software that simplifies everyday life (avoiding hype loops).
- **FamilyOS**: The flagship AI-powered operating system for families to securely index, understand, and coordinate critical documents (deeds, insurance, health parameters, IDs) in a secure digital workspace.

---

## 🛠️ Stack & Aesthetic Design

- **Core Framework**: Next.js 15+ (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS utilizing deep midnight navy backgrounds, electric blue/soft violet glows, slate components, and custom glassmorphism.
- **Motion Orchestration**: Framer Motion for scroll-revealed elements, collapsible FAQ accordion animations, and dashboard simulation triggers.
- **Aesthetic Direction**: Handcrafted, Technology-first, confident luxury.

---

## 📂 Project Directory Structure

```text
OnePlusOne/
├── app/
│   ├── layout.tsx         # Root HTML layout, SEO Metadata, Schema.org configurations
│   ├── page.tsx           # Home marketing page assembly
│   ├── loading.tsx        # Dynamic animated brand loader
│   ├── not-found.tsx      # Custom 404 void page
│   ├── contact/           # Standalone Contact page (Support channels, PGP keys)
│   ├── privacy/           # Zero-knowledge Privacy Policy
│   ├── terms/             # Custodian key Terms of Service
│   ├── globals.css        # Base styles, grids, custom scrollbars, and neon glows
│   └── icon.tsx           # Next.js dynamic favicon rendering the brand logo
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic navigator with mobile drawer support
│   ├── Footer.tsx         # Multi-column directory and waitlist subscription form
│   └── InteractiveMockup.tsx # High-fidelity HTML/CSS SaaS dashboard simulation
├── sections/
│   ├── Hero.tsx           # Large typography, CTAs, and dashboard mockup anchor
│   ├── Mission.tsx        # Core philosophy and utility pillars
│   ├── Products.tsx       # Portfolio overview (FamilyOS, SoloOS, BusinessOS)
│   ├── HowItWorks.tsx     # Ingestion, OCR parsing, and encryption sandbox
│   ├── Features.tsx       # Detail grid of vault capabilities
│   ├── Technology.tsx     # Cryptographic standards and TEE enclaves
│   ├── WhyChooseUs.tsx    # Technical comparison tables
│   ├── Roadmap.tsx        # Q1 2026 - H2 2027 timelines and deliverables
│   ├── Testimonials.tsx   # Verified stories and rating points
│   └── FAQ.tsx            # Expandable support accordions
├── lib/
│   └── utils.ts           # Class merging helper
├── package.json           # Node packages and configuration commands
├── tsconfig.json          # TypeScript configurations and aliases
├── tailwind.config.ts     # Startup color token definitions
└── .gitignore             # Exclusion list for dependencies and build stores
```

---

## 💻 Getting Started Locally

Navigate to the project folder in your local terminal and follow the setup instructions.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 3. Verify Production Compilation
Validate compile logs and routing assets:
```bash
npm run build
```

---

## 🛡️ Zero-Knowledge Security Overview

The platform operates on a zero-knowledge structure:
1. **Client-Side Key Management**: Decryption keys are derived locally from user master credentials. Keys never traverse OnePlus One storage systems.
2. **TEE Computations**: Document OCR parsing and assistant enclaves are handled inside ephemeral compute nodes that clean raw data buffers immediately upon execution.
3. **Emergency Delegation**: Backup keys are shared via cryptographic split seeds that release only after Multi-Day verification timers expire.
