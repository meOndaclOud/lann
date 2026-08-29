# CLAUDE.md — LANN Agent Guide

This file is a condensed index for AI coding agents working in this repo. It summarizes rules from the full specs — it does not replace them. If anything here conflicts with `ARCHITECTURE.md` or `INSTRUCTIONS.md`, the spec documents win.

## Required Reading Order

Before writing or modifying any code:

1. `README.md`
2. `ARCHITECTURE.md`
3. `INSTRUCTIONS.md`

When a requirement is ambiguous, resolve it in this order (`INSTRUCTIONS.md` §64):

```text
README.md → architecture.md → instructions.md → existing repository conventions → simplest implementation
```

Do not invent large features. If two approaches work, choose the simpler one.

## Current Repo State

This repository is **docs-only** — no `package.json`, no `app/`, no config files, no scaffold exist yet. Before any Phase 1+ page work begins, the Phase 0 foundation must be created: Next.js (App Router) + TypeScript + Tailwind + Supabase project init, per the repository structure in `ARCHITECTURE.md` §46 and the build order in `INSTRUCTIONS.md` §6.

## Non-Negotiable Invariants

From `ARCHITECTURE.md` §50 and reinforced throughout `INSTRUCTIONS.md`:

1. AI never invents resources — recommendations must come from the verified resource database only (never fabricate URLs, courses, books, videos, instructors).
2. The client cannot directly modify private data, and client-submitted progress values (e.g. `progressPercentage`) are never trusted — progress is derived server/database-side from actual completion records.
3. AI provider keys and Supabase service-role keys stay server-side only — never in client-side code.
4. Public content (careers, roadmaps, resources, public projects) stays readable without auth; private learner data (profile, progress, saved resources, AI conversations) is isolated per-user via Row Level Security.
5. Dashboard and Learning Path must read from the same progress source — no duplicated/conflicting progress calculations.
6. Projects connect to roadmap stages; resources connect to roadmap stages/topics.
7. AI context is built from relevant current state (career, stage, topic, progress, project, recent conversation) — never the learner's entire history.
8. English and Burmese are both first-class languages; light and dark themes apply consistently to every page. Neither can be an afterthought.
9. No admin dashboard, instructor dashboard, moderation dashboard, or analytics dashboard in MVP.
10. Prefer fewer dependencies and simpler architecture — no unnecessary backend services (no separate Node/Python API server) unless genuinely required.

## Build Order

Follow the phase order in `INSTRUCTIONS.md` §6 (Foundation → Public Discovery → Roadmap → Resources → Authentication → Dashboard → Projects → AI Mentor → Community) unless the repository's actual state requires a different dependency order. Always finish P0 work before starting P1, and P1 before P2 (`INSTRUCTIONS.md` §63).

## Final Rule

When choosing between more features/effects/technology and a simpler, more trustworthy, better-organized learner experience, choose the latter (`INSTRUCTIONS.md` §71).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
