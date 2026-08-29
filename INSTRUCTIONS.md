# LANN — Vibe Coding Instructions

## Purpose

This file is the primary instruction set for an AI coding agent such as Claude Code.

The agent must use this document together with:

```text
README.md
architecture.md
```

to build LANN.

The goal is not simply to make pages that look correct.

The goal is to build a coherent, functional learner experience where:

```text
Career
→ Roadmap
→ Resources
→ Learning
→ Progress
→ Projects
→ AI Mentor
→ Next Recommendation
```

all work together.

---

# 1. Before Writing Code

Before implementing anything:

1. Read `README.md`.
2. Read `architecture.md`.
3. Inspect the existing repository.
4. Identify the current Next.js version.
5. Identify the existing dependencies.
6. Reuse existing infrastructure when appropriate.
7. Do not replace working code without a reason.
8. Do not introduce unnecessary libraries.
9. Identify whether Supabase is already configured.
10. Identify whether environment variables already exist.
11. Identify whether an existing design system exists.

Do not immediately start generating pages before understanding the repository.

---

# 2. Technology Rules

Use:

```text
TypeScript
React
Next.js
Tailwind CSS
Supabase
PostgreSQL
SQL
Server-side AI API
```

Do not introduce Python/FastAPI for MVP.

Do not introduce another backend framework unless explicitly required.

Do not introduce multiple state-management libraries unnecessarily.

Prefer native React/Next.js patterns first.

---

# 3. Coding Philosophy

Write code that is:

* simple
* readable
* maintainable
* typed
* reusable
* accessible
* responsive
* production-oriented

Avoid:

* unnecessary abstraction
* giant components
* duplicated logic
* duplicated UI
* magic numbers
* unnecessary dependencies
* over-engineering
* premature optimization

---

# 4. Component Rules

Create reusable components.

Do not build:

```text
CareerCardPageSpecific.tsx
CareerCardAnotherPage.tsx
CareerCardFinalVersion.tsx
```

Instead build:

```text
CareerCard
```

and configure it through props/data.

Likewise use reusable:

```text
Button
Card
Badge
Input
Tabs
Modal
ProgressBar
Tooltip
```

---

# 5. UI Architecture

Use the component structure:

```text
components/
├── layout/
├── ui/
├── career/
├── roadmap/
├── resources/
├── ai/
└── dashboard/
```

Keep domain components separate from generic UI components.

---

# 6. Page Implementation Order

Implement in this order unless the repository requires another dependency order.

## Phase 1 — Foundation

Build:

* application shell
* typography
* design tokens
* theme system
* navigation
* footer
* responsive layout
* bilingual infrastructure
* basic UI components

## Phase 2 — Public Discovery

Build:

* homepage
* career explorer
* career detail
* learning path

## Phase 3 — Roadmap

Build:

* roadmap
* stage cards
* stage detail
* prerequisite state
* stage selection

## Phase 4 — Resources

Build:

* resource library
* search
* filters
* resource cards
* resource detail
* save resource
* mark complete

## Phase 5 — Authentication

Build:

* register
* login
* session handling
* protected routes
* profile

## Phase 6 — Dashboard

Build:

* personalized dashboard
* progress
* continue learning
* next step
* current project
* saved resources
* achievements
* recent activity
* career readiness

## Phase 7 — Projects

Build:

* project library
* project detail
* project tasks
* project progress
* showcase

## Phase 8 — AI Mentor

Build:

* persistent AI button
* dashboard quick mentor
* `/mentor`
* conversations
* context-aware AI
* resource recommendations
* project assistance

## Phase 9 — Community

Build:

* questions
* discussions
* comments
* resource sharing
* project showcase

Do not build complex social networking features.

---

# 7. Design System First

Before creating many pages, establish:

```text
colors
typography
spacing
radius
shadows
buttons
cards
inputs
badges
progress
modals
tooltips
navigation
```

Do not independently invent styling on every page.

---

# 8. Visual Direction

The website must feel:

```text
Modern
Professional
Friendly
Technical
Minimal
Trustworthy
Accessible
Calm
Premium
```

It must NOT feel:

```text
Childish
Gaming-like
Overly colorful
Neon-heavy
Flashy
Corporate-enterprise-dashboard-like
```

---

# 9. Light Mode

Use:

```text
White
Soft Sky Blue
Blue
Deep Navy
```

Background can transition subtly:

```text
White
→
Very Light Sky
→
Soft Blue
```

Avoid making everything pure white.

Use subtle hierarchy through background variation.

---

# 10. Dark Mode

Use:

```text
Deep Navy
Dark Slate
Sky Blue
Soft Purple/Blue
Off-white
```

Do not simply use:

```text
#000000
```

as the entire background.

Dark mode should feel:

```text
Technical
Premium
Calm
Professional
```

---

# 11. Theme Requirements

Support:

```text
Light
Dark
System
```

Default:

```text
System
```

User override must persist.

Anonymous:

```text
localStorage
```

Authenticated users may later associate preference with profile.

The theme must apply consistently to:

* homepage
* careers
* career details
* learning paths
* roadmaps
* resources
* projects
* community
* AI Mentor
* dashboard
* profile
* login
* register
* forms
* modals
* navigation
* footer

---

# 12. Typography

English:

```text
Inter
```

or:

```text
Manrope
```

Myanmar:

```text
Noto Sans Myanmar
```

Avoid decorative fonts.

Desktop:

```text
H1: 48–64px
H2: 32–40px
H3: 24–28px
Body: 16–18px
Small: 13–14px
```

Scale down appropriately for mobile.

Always verify Myanmar text rendering.

---

# 13. Icons and Emoji

Use:

```text
Lucide Icons
```

Prefer icons over emojis.

Occasional emoji is allowed for:

* friendly greeting
* achievement
* community message
* informal AI response

Do not put emojis into every:

* card
* heading
* button
* navigation item
* technical section

---

# 14. Glassmorphism Rules

Use glassmorphism selectively.

Good:

* hero
* AI Mentor
* floating navigation
* special cards

Bad:

* every card
* every section
* every button

If readability decreases, reduce the glass effect.

---

# 15. Gradient Rules

Use gradients only for:

* hero
* primary CTA
* selected roadmap state
* AI Mentor accent
* important highlights

Do not make the entire site gradient-heavy.

---

# 16. Animation Rules

Animation must communicate interaction.

Use:

* hover
* focus
* transition
* scale
* shadow
* border
* subtle gradient movement

Avoid:

* excessive 3D
* parallax
* floating elements
* neon glow
* bouncing
* continuous animation
* distracting backgrounds

Duration:

```text
Micro: 150–200ms
Card: 200–300ms
Modal: 250–350ms
Page: 300–500ms
```

---

# 17. Reusable Interaction Pattern

Create a reusable card interaction style.

Conceptually:

```text
.card-interactive
```

Hover:

```text
translateY(-3px)
```

Focus:

```text
visible focus ring
```

Active:

```text
scale(0.98)
```

Transition:

```text
transform
box-shadow
border-color
background
```

Cards may use approximately `translateY(-4px)`.

Buttons:

* slight brightness
* subtle scale
* gradient movement

Links:

* color transition
* underline animation

---

# 18. Responsive Rules

Test at minimum:

```text
1440px
1280px
1024px
834px
768px
430px
412px
390px
```

Never simply shrink desktop.

Mobile must have intentional behavior.

---

# 19. Mobile Navigation

Do not use a permanent large sidebar on mobile.

Use:

```text
Top Navigation
+
Mobile Menu
+
Bottom Navigation
```

Bottom navigation:

```text
Home | Roadmap | Learn | AI | Profile
```

Make touch targets comfortable.

---

# 20. Dashboard Rules

The dashboard is NOT an analytics dashboard.

Always prioritize:

```text
What am I doing?
What should I do next?
How can AI help?
```

Avoid:

* excessive charts
* complicated graphs
* technical metrics
* admin tables

Prioritize:

* current career
* current stage
* progress
* continue learning
* next step
* project
* AI Mentor
* skills
* achievements
* saved resources
* activity
* career readiness

---

# 21. Dashboard Personalization

If the learner has no career:

```text
Welcome to LANN
Let's find the technology career that's right for you.

[ Take Career Assessment ]
[ Explore Careers ]
```

Do not show empty charts.

If beginner:

```text
Current Topic
Progress
Beginner Project
AI Mentor
```

If junior:

```text
Advanced Roadmap
Projects
Portfolio
Technical Challenges
```

If career ready:

```text
Portfolio
Interview Preparation
Resume
Job Readiness
AI Interview Practice
```

---

# 22. Learning Path Rules

Every Learning Path must include:

```text
Role Introduction
Why This Career?
Myanmar Career Context
Who Is This For?
Skills
Career Progression
Learning Roadmap
Roadmap Stage Details
Resources
Projects
AI Mentor
```

The page must answer:

> What should I learn and where can I learn it?

Do not turn it into a course catalog.

---

# 23. Roadmap Rules

Roadmap nodes represent skill stages.

Each stage should support:

```text
title
description
goal
topics
skills
prerequisites
resources
projects
difficulty
estimated time
status
```

Statuses:

```text
LOCKED
AVAILABLE
IN_PROGRESS
COMPLETED
```

Never use color alone.

---

# 24. Roadmap Prerequisites

If a stage is locked:

Explain why.

Example:

```text
Kubernetes is currently locked because
you haven't completed Docker and networking.
```

Provide:

```text
[ Ask AI Why? ]
```

The AI should explain prerequisite relationships using actual roadmap data.

---

# 25. Roadmap Personalization

Provide:

```text
I Know

[ Nothing ]
[ Some Basics ]
[ Intermediate ]
```

Do not force learners through topics they already know.

AI may help determine a starting point.

But the core roadmap should remain deterministic.

---

# 26. Resource Rules

Every resource must have:

```text
Real URL
Title
Description
Type
Language
Difficulty
Creator
Creator Type
Topic
Cost
Verification Status
Last Verified
```

Never create fake:

* URLs
* YouTube videos
* books
* instructors
* webinars
* courses

---

# 27. Resource Quality Rules

Required:

* real URL
* relevant to roadmap stage
* categorized
* language identified
* free status verified
* creator identified
* technical quality reviewed

Preferred:

* Myanmar creator
* Burmese explanation
* practical examples
* recently maintained
* beginner friendly
* real-world context

---

# 28. Myanmar Resource Priority

Prefer:

```text
Myanmar Senior/Community
+
Burmese
+
Free
```

But:

> Quality overrides nationality.

Do not recommend a low-quality Burmese resource over a high-quality international resource.

---

# 29. Resource Page UX

Never dump dozens of resources.

Use:

```text
Recommended for you
```

then:

```text
More Burmese Resources
```

then:

```text
Additional Resources
```

Use AI to help select among resources.

---

# 30. Resource Filters

Support:

### Language

```text
Burmese
English
Both
```

### Type

```text
Course
YouTube
Book
Documentation
Webinar
Practice
Project
```

### Level

```text
Beginner
Junior
Intermediate
Advanced
```

### Cost

```text
Free
Paid
```

MVP priority:

```text
Free + Burmese + Beginner
```

---

# 31. Resource Completion

When the learner clicks:

```text
Mark Complete
```

update:

```text
Resource Progress
 ↓
Roadmap Progress
 ↓
Dashboard
 ↓
AI Context
```

The UI must reflect the updated state.

---

# 32. Save Resource

For authenticated users:

```text
Save
```

should persist to Supabase.

Saved resources appear in:

```text
Dashboard → Saved Resources
```

Prevent duplicate saves.

---

# 33. Project Rules

Every major roadmap stage should eventually connect to a project.

Example:

```text
Docker
 ↓
Dockerize Full-Stack Application
```

Projects should contain:

* requirements
* skills
* steps
* expected outcome
* difficulty
* GitHub guidance
* portfolio value
* AI assistance

---

# 34. AI Project Assistance

When the learner clicks:

```text
Ask AI for Help
```

the AI should know:

* project
* project requirements
* learner level
* technologies
* current task
* relevant progress

The learner should not need to repeat context.

AI should teach progressively:

```text
Explain
→ Hint
→ Example
→ Solution
```

---

# 35. AI Mentor Rules

AI must act as:

```text
Career Mentor
Learning Mentor
Technical Tutor
Project Mentor
Career Coach
Study Assistant
```

It must understand:

```text
Career
Level
Roadmap
Topics
Progress
Project
Learning History
```

---

# 36. AI Resource Hallucination Rule

This is mandatory.

If the learner asks:

```text
Give me a Burmese Docker course.
```

AI must only recommend resources that exist in the verified resource database.

Never invent:

```text
URL
YouTube video
Book
Course
Instructor
Webinar
```

If no verified resource exists:

```text
I couldn't find a verified Burmese resource
for this topic in LANN yet.
```

Then provide available verified alternatives if they exist.

---

# 37. AI Context Efficiency

Never send all learner history.

Send only:

```text
Current Career
Current Stage
Current Topic
Relevant Progress
Current Project
Recent Conversation
```

This keeps AI:

* cheaper
* faster
* more relevant

---

# 38. AI Availability

The application must work without AI.

If AI fails:

```text
The AI Mentor is temporarily unavailable.

You can continue learning using
the recommended resources.
```

Do not block the roadmap or resource system.

---

# 39. AI Security

Never expose:

```text
AI_PROVIDER_API_KEY
```

in client-side code.

AI requests must go through:

```text
server-side route
```

or:

```text
Supabase Edge Function
```

Protect the endpoint with:

* authentication
* validation
* rate limiting
* abuse protection

---

# 40. Authentication Rules

Registration:

```text
Name
Email
Password
Confirm Password
Terms/Privacy Agreement
```

Login:

```text
Email
Password
```

Do not implement in MVP:

* Google Login
* Facebook Login
* GitHub Login
* Apple Login
* Forgot Password
* Password Reset
* Phone OTP
* MFA
* complex account recovery

---

# 41. Authentication Error Rules

Registration:

```text
Please enter your name.
Please enter a valid email address.
This email is already registered.
Password must be at least 8 characters.
Passwords do not match.
```

Login:

```text
Invalid email or password.
```

Never reveal:

```text
This email does not exist.
```

because that enables account enumeration.

---

# 42. Supabase Rules

Use:

```text
Supabase Auth
Supabase PostgreSQL
Supabase Storage
Supabase Edge Functions
```

Enable RLS.

Never use service-role keys from client components.

---

# 43. RLS Rules

Public users may read:

```text
careers
roadmaps
resources
public projects
```

Authenticated users may manage:

```text
own progress
own saved resources
own profile
own AI conversations
```

Users must never be able to modify another learner's private data.

---

# 44. Progress Security

Never trust:

```text
progressPercentage
```

sent by the browser.

The backend/database should derive progress from actual completion records.

For example:

```text
Completed Resources
+
Completed Topics
+
Completed Projects
```

should determine progress.

---

# 45. Bilingual Implementation

Do not hardcode interface text everywhere.

Use translation keys.

Example:

```text
nav.careers
nav.learningPaths
nav.resources
dashboard.continueLearning
dashboard.nextStep
roadmap.locked
roadmap.completed
resource.save
resource.completed
```

Always verify Burmese text visually.

---

# 46. Content Rules

For MVP, content can be:

```text
Markdown
JSON
SQL seed data
```

Do not build CMS functionality.

When adding a resource:

1. Verify URL.
2. Verify creator.
3. Verify Myanmar connection if applicable.
4. Verify quality.
5. Verify availability.
6. Verify free/paid status.
7. Add metadata.
8. Add verification date.

---

# 47. Accessibility Rules

Every page must consider:

* keyboard navigation
* visible focus
* screen reader semantics
* contrast
* font readability
* reduced motion
* touch target size
* clear errors

Do not rely only on color.

Use semantic HTML whenever possible.

---

# 48. Loading Rules

Every dynamic component needs a loading state.

Use skeletons for:

```text
Dashboard
Roadmap
Resources
Profile
```

AI:

```text
Thinking...
```

Do not leave blank white areas.

---

# 49. Error Rules

Errors should be human-readable.

Bad:

```text
Error 500
```

Good:

```text
Something went wrong.

We couldn't load your learning progress.
Please try again.

[ Try Again ]
```

---

# 50. Empty State Rules

Every empty state should include an action.

Bad:

```text
No projects yet.
```

Good:

```text
You haven't started a project yet.

Build your first practical project
and turn your learning into experience.

[ Explore Projects ]
```

---

# 51. Performance Rules

Optimize:

* images
* fonts
* JavaScript
* CSS
* network requests
* database queries

Use:

* lazy loading
* code splitting
* caching
* optimized images
* server rendering where appropriate
* static generation where appropriate

Avoid:

* huge images
* video backgrounds
* unnecessary animation libraries
* oversized bundles

---

# 52. Community Rules

Community remains lightweight.

Support:

```text
Questions
Discussions
Comments
Resource Sharing
Project Showcase
```

Do not build:

* full social network
* follower graph
* complex messaging
* advanced social feed
* complicated moderation dashboard

MVP goal:

> knowledge exchange.

---

# 53. No Admin Dashboard

Never create an admin dashboard unless explicitly requested later.

Do not implement:

```text
/admin
```

Do not spend time on:

* user administration
* content administration
* moderation dashboard
* analytics dashboard
* instructor dashboard

---

# 54. Code Quality

Use strict TypeScript.

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer explicit interfaces/types.

Example:

```ts
type RoadmapStageStatus =
  | "locked"
  | "available"
  | "in_progress"
  | "completed";
```

Generate Supabase types where possible.

Keep database types synchronized with application types.

---

# 55. Data Validation

Validate:

* forms
* query parameters
* route parameters
* resource URLs
* AI input
* community posts
* progress updates

Never trust user input.

---

# 56. Database Changes

Database changes should be reproducible.

Use:

```text
supabase/migrations/
```

Do not make undocumented manual production schema changes.

Seed initial content through reproducible scripts/migrations.

---

# 57. Environment Variables

Create:

```text
.env.example
```

Document required variables.

Never commit secrets.

Potential variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
AI_PROVIDER_API_KEY
```

Only public values should be exposed to browser code.

---

# 58. Testing Strategy

At minimum test:

### Authentication

* registration
* invalid email
* short password
* password mismatch
* duplicate email
* login
* invalid login
* logout
* protected route

### Roadmap

* load roadmap
* stage selection
* locked stage
* available stage
* progress state
* prerequisite explanation

### Resources

* search
* filters
* open resource
* save
* unsave
* complete
* progress update

### Projects

* project list
* project detail
* task state
* progress
* AI assistance

### AI

* authenticated request
* context generation
* response
* conversation persistence
* rate limiting
* unavailable AI fallback
* verified resource recommendation

### Responsive

Test:

```text
390px
412px
430px
768px
834px
1024px
1280px
1440px
```

---

# 59. Manual UX Testing

Before considering a feature complete, manually verify:

### New learner

```text
Landing
 ↓
Register
 ↓
Login
 ↓
Dashboard
 ↓
Career Assessment / Explore Careers
 ↓
Career
 ↓
Learning Path
 ↓
Roadmap
 ↓
Stage
 ↓
Resource
 ↓
Learn
 ↓
Mark Complete
 ↓
Dashboard
 ↓
AI Recommendation
```

### Existing learner

```text
Login
 ↓
Dashboard
 ↓
Continue Learning
 ↓
Resource
 ↓
Complete
 ↓
Progress Updated
```

### Stuck learner

```text
Project
 ↓
Current Task
 ↓
Ask AI
 ↓
AI understands project context
 ↓
Guidance
```

---

# 60. Visual QA

Check every page in:

```text
Light
Dark
English
Burmese
Desktop
Tablet
Mobile
```

Look specifically for:

* overflow
* broken Myanmar fonts
* clipped buttons
* unreadable dark-mode text
* low contrast
* broken cards
* oversized headings
* horizontal scrolling
* roadmap layout issues
* AI chat overflow
* filter overflow

---

# 61. Avoid AI Slop

Do not make the UI look like an automatically generated template.

Avoid:

* excessive rounded cards
* excessive gradients
* random glowing blobs
* huge decorative icons
* emoji everywhere
* unnecessary glass effects
* generic SaaS dashboard patterns
* meaningless metrics

The interface should communicate useful information first.

---

# 62. Do Not Copy KodeKloud

KodeKloud can be used only as a conceptual UX reference for:

* visual learning journey
* connected roadmap
* skill-level selection
* progressive learning

Do not copy:

* exact layout
* exact branding
* exact components
* exact typography
* exact colors
* exact content
* exact interaction design

LANN must have its own identity.

Its differentiators are:

```text
Myanmar Career Context
+
Burmese/English Learning
+
Verified Myanmar Resources
+
Free Learning
+
Practical Projects
+
AI Career Mentor
```

---

# 63. Implementation Priority

Always prioritize:

```text
P0
```

before:

```text
P1
```

and:

```text
P1
```

before:

```text
P2
```

Do not spend time implementing P2 features while P0 functionality is incomplete.

---

# 64. When Requirements Are Ambiguous

Follow this decision order:

```text
README.md
 ↓
architecture.md
 ↓
instructions.md
 ↓
existing repository conventions
 ↓
simplest implementation
```

Do not invent large features.

If two approaches work, choose the simpler one.

---

# 65. When You Need a New Library

Before adding a dependency ask:

1. Is it actually required?
2. Can Next.js/React solve this?
3. Can Tailwind solve this?
4. Can Supabase solve this?
5. Is the dependency maintained?
6. Does it significantly increase bundle size?
7. Does it duplicate an existing dependency?

Prefer fewer dependencies.

---

# 66. When Implementing AI

Do not begin with a generic chatbot.

Implement AI in this order:

```text
AI Button
 ↓
Basic Chat
 ↓
Authentication
 ↓
Conversation Persistence
 ↓
Learner Context
 ↓
Roadmap Context
 ↓
Project Context
 ↓
Verified Resource Retrieval
 ↓
Personalized Recommendation
```

The AI must become progressively contextual.

---

# 67. When Implementing Progress

Do not implement progress as:

```text
setProgress(72)
```

from the client.

Progress should be derived from real learner activity.

Conceptually:

```text
Resource Completion
+
Topic Completion
+
Project Completion
=
Learning Progress
```

Then:

```text
Learning Progress
 ↓
Dashboard
 ↓
Career Readiness
 ↓
AI Context
```

---

# 68. When Implementing Recommendations

Recommendations must be explainable.

Bad:

```text
Recommended: Kubernetes
```

Better:

```text
Recommended next step: CI/CD

Why?

You completed Linux, Git and Docker.
CI/CD is the next stage in your roadmap.
```

AI can explain further.

---

# 69. Career Guidance Responsibility

Never claim:

```text
Complete this roadmap → become senior
```

Never promise:

```text
Complete this path → guaranteed job
```

Never promise:

```text
Learn this → guaranteed remote job
```

Explain that career growth requires:

* practical experience
* projects
* communication
* problem solving
* production exposure
* teamwork
* continuous learning

---

# 70. Final Pre-Commit Checklist

Before considering implementation complete:

## Product

* [ ] Learner journey works end-to-end
* [ ] Career discovery works
* [ ] Roadmap works
* [ ] Resources work
* [ ] Projects work
* [ ] Progress works
* [ ] AI works
* [ ] Dashboard reflects progress

## Language

* [ ] English works
* [ ] Burmese works
* [ ] Technical terms remain understandable
* [ ] Language preference persists

## Theme

* [ ] Light works
* [ ] Dark works
* [ ] System works
* [ ] Preference persists

## Responsive

* [ ] 390px
* [ ] 412px
* [ ] 430px
* [ ] 768px
* [ ] 834px
* [ ] 1024px
* [ ] 1280px
* [ ] 1440px

## Accessibility

* [ ] Keyboard navigation
* [ ] Focus states
* [ ] Screen reader semantics
* [ ] Contrast
* [ ] Reduced motion
* [ ] Touch targets

## Security

* [ ] RLS enabled
* [ ] AI key server-side
* [ ] Service-role key server-side
* [ ] Input validation
* [ ] User content sanitization
* [ ] AI rate limiting
* [ ] Resource URL validation
* [ ] Client progress not trusted

## UX

* [ ] Loading states
* [ ] Error states
* [ ] Empty states
* [ ] Clear next actions
* [ ] No excessive animation
* [ ] No excessive emojis
* [ ] No unnecessary charts
* [ ] No resource dump

## Scope

* [ ] No admin dashboard
* [ ] No instructor dashboard
* [ ] No complex CMS
* [ ] No social login
* [ ] No password recovery
* [ ] No unnecessary backend services

---

# 71. Final Agent Rule

When choosing between:

```text
More features
```

and:

```text
Better learner experience
```

choose:

> **Better learner experience.**

When choosing between:

```text
More visual effects
```

and:

```text
Better information hierarchy
```

choose:

> **Better information hierarchy.**

When choosing between:

```text
More resources
```

and:

```text
Better verified resources
```

choose:

> **Better verified resources.**

When choosing between:

```text
Generic AI chatbot
```

and:

```text
Context-aware AI Mentor
```

choose:

> **Context-aware AI Mentor.**

When choosing between:

```text
More technology
```

and:

```text
Simpler architecture
```

choose:

> **Simpler architecture.**

LANN should be **polished, useful, contextual, trustworthy, and learner-first — not flashy or over-engineered.**
