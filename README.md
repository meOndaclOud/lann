# LANN

LANN is a bilingual (Burmese/English) career-discovery and learning platform for Myanmar tech learners. It connects career exploration, structured learning roadmaps, verified free resources, hands-on projects, and a context-aware AI mentor into one coherent learner journey.

## Learner Journey

```text
Discover
→ Understand
→ Choose
→ Learn
→ Practice
→ Ask AI
→ Build
→ Track Progress
→ Become Career Ready
```

The goal is not just pages that look correct — it's a platform where career selection, roadmap progress, resource completion, projects, and the AI mentor all stay in sync with each other.

## Differentiators

```text
Myanmar Career Context
+ Burmese/English Learning
+ Verified Myanmar Resources
+ Free Learning
+ Practical Projects
+ AI Career Mentor
```

## Tech Stack

```text
Next.js (App Router)
TypeScript
React
Tailwind CSS
Supabase (PostgreSQL, Auth, Storage, Edge Functions)
Server-side AI API
```

No additional backend services (no separate Node/Python API server) unless a later requirement genuinely demands it.

## Project Status

This repository currently contains **specification only** — no application code, package manifest, or configuration has been created yet. There is no scaffold to install or run.

Before writing any code, read, in order:

1. `README.md` (this file)
2. `ARCHITECTURE.md` — system architecture, data model, and architectural invariants
3. `INSTRUCTIONS.md` — build order, coding philosophy, design system, and testing strategy
4. `CLAUDE.md` — condensed ruleset for AI coding agents working in this repo

## Repository Structure (Planned)

The structure below is the target layout once the initial scaffold is created (see `ARCHITECTURE.md` §46). It does not exist yet.

```text
lann/
├── app/
├── components/
├── content/
│   ├── careers/
│   ├── resources/
│   └── projects/
├── lib/
│   ├── supabase/
│   ├── ai/
│   ├── auth/
│   ├── progress/
│   ├── recommendations/
│   └── validation/
├── hooks/
├── types/
├── i18n/
├── public/
├── styles/
├── supabase/
│   ├── migrations/
│   └── seed/
├── tests/
├── .env.local
├── .env.example
├── next.config.*
├── tailwind.config.*
├── tsconfig.json
└── package.json
```

## Getting Started

Setup and run instructions will be added once the Next.js/TypeScript/Tailwind/Supabase scaffold (Phase 0) is created. There are no install/run commands yet.

## Contributing / Agent Workflow

`ARCHITECTURE.md` and `INSTRUCTIONS.md` are the source of truth for all product, architecture, and coding decisions. `CLAUDE.md` summarizes the non-negotiable rules for AI coding agents; if it ever conflicts with the two spec documents, the spec documents win.
