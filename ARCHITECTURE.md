# LANN — System Architecture

## 1. Architecture Goal

LANN should use a **simple, production-capable, learner-first architecture**.

The architecture must support:

* career discovery
* career assessment
* learning paths
* visual roadmaps
* resources
* projects
* learner progress
* saved resources
* community
* AI Mentor
* bilingual content
* authentication
* light/dark themes
* responsive UX

The architecture must remain intentionally small for MVP.

---

# 2. Architecture Principles

### Principle 1 — Learner First

The architecture exists to support the learner journey:

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

### Principle 2 — Small Technology Stack

Use:

```text
Next.js
TypeScript
React
Tailwind CSS
Supabase
PostgreSQL
SQL
Server-side AI API
```

Do not introduce unnecessary backend services.

---

# 3. High-Level Architecture

```text
                         ┌──────────────────────┐
                         │       LANN UI        │
                         │ Next.js + React + TS  │
                         │    Tailwind CSS      │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼────────────────┐
                    │               │                │
                    ▼               ▼                ▼
               Public Data      User Data        AI Features
                    │               │                │
                    └───────────────┼────────────────┘
                                    ▼
                         ┌──────────────────────┐
                         │      Supabase        │
                         │                      │
                         │ PostgreSQL           │
                         │ Authentication       │
                         │ Storage              │
                         │ Edge Functions       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Server-side AI     │
                         │     Integration      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                              AI Provider
```

---

# 4. Frontend Architecture

Use Next.js App Router.

```text
app/
├── page.tsx
│
├── careers/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── learning-paths/
│   └── [career]/
│       ├── page.tsx
│       └── [stage]/
│           └── page.tsx
│
├── resources/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
│
├── projects/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
│
├── community/
│   └── page.tsx
│
├── mentor/
│   └── page.tsx
│
├── dashboard/
│   └── page.tsx
│
├── profile/
│   └── page.tsx
│
├── login/
│   └── page.tsx
│
└── register/
    └── page.tsx
```

---

# 5. Component Architecture

```text
components/
│
├── layout/
│   ├── Navbar
│   ├── Footer
│   └── MobileNav
│
├── ui/
│   ├── Button
│   ├── Card
│   ├── Badge
│   ├── Input
│   ├── Modal
│   ├── Tabs
│   ├── ProgressBar
│   └── Tooltip
│
├── career/
│   ├── CareerCard
│   ├── CareerHero
│   ├── CareerSkills
│   └── CareerProgression
│
├── roadmap/
│   ├── Roadmap
│   ├── RoadmapStage
│   ├── RoadmapConnector
│   └── StageDetails
│
├── resources/
│   ├── ResourceCard
│   ├── ResourceFilter
│   ├── ResourceSearch
│   └── ResourceList
│
├── ai/
│   ├── AIMentorButton
│   ├── AIMentorPanel
│   ├── AIChat
│   ├── AIMessage
│   └── SuggestedPrompt
│
└── dashboard/
    ├── DashboardHeader
    ├── ProgressCard
    ├── ContinueLearning
    ├── NextStep
    ├── CurrentProject
    └── SkillsCard
```

Build reusable components instead of page-specific duplicated UI.

---

# 6. Rendering Strategy

Prefer:

### Server Components

For:

* public career pages
* learning-path content
* resource listings where interactivity is unnecessary
* project details
* static content
* SEO-sensitive content

### Client Components

For:

* roadmap interaction
* filters
* search
* progress updates
* save buttons
* AI chat
* theme switching
* language switching
* interactive assessment
* mobile navigation

Do not make the entire application client-rendered unnecessarily.

---

# 7. Backend Architecture

Supabase provides:

```text
PostgreSQL
Auth
Storage
Edge Functions
```

Use Supabase as the main backend platform.

Avoid adding:

```text
Node API server
+
Python API
+
FastAPI
+
separate database
```

unless a later requirement genuinely requires them.

---

# 8. Database Architecture

Core tables:

```text
users
profiles

careers
career_skills
career_roadmaps
roadmap_stages
roadmap_topics

resources
resource_categories
resource_tags

projects
project_skills

learner_progress
resource_progress
project_progress
saved_resources

ai_conversations
ai_messages

community_posts
community_comments
```

---

# 9. Core Entity Relationships

```text
CAREER
 │
 ├─────────────── Career Skills
 │
 ├─────────────── Career Roadmap
 │                    │
 │                    └── Roadmap Stages
 │                           │
 │                           ├── Topics
 │                           ├── Resources
 │                           └── Projects
 │
 └─────────────── Career Progression
```

Learner:

```text
LEARNER
 │
 ├── Selected Career
 ├── Roadmap Progress
 ├── Resource Progress
 ├── Saved Resources
 ├── Projects
 └── AI Mentor Context
```

---

# 10. Suggested Database Responsibilities

## `profiles`

Stores learner-specific information.

Conceptual fields:

```text
id
name
bio
current_career_id
skill_level
preferred_language
theme_preference
created_at
updated_at
```

## `careers`

Stores career definitions.

Conceptual fields:

```text
id
slug
name
description
role_introduction
why_this_career
myanmar_context
who_is_this_for
career_progression
is_active
created_at
updated_at
```

## `career_skills`

Maps skills to careers.

```text
id
career_id
skill_name
category
importance
display_order
```

## `career_roadmaps`

Connects a career to its roadmap.

```text
id
career_id
title
description
created_at
updated_at
```

## `roadmap_stages`

Represents actual skill stages.

```text
id
roadmap_id
slug
title
description
goal
difficulty
estimated_hours
display_order
```

## `roadmap_topics`

Represents individual topics.

```text
id
stage_id
title
description
display_order
```

---

# 11. Resource Architecture

## `resources`

Conceptual shape:

```text
id
title
description
type
language
difficulty
creator
creator_type
url
is_free
topic
verified
verification_status
last_verified
published_at
created_at
updated_at
```

Creator type:

```text
MYANMAR_SENIOR
MYANMAR_COMMUNITY
INTERNATIONAL
OFFICIAL_DOCUMENTATION
```

Verification status:

```text
VERIFIED
COMMUNITY
RECOMMENDED
COMING_SOON
```

Resource types:

```text
COURSE
YOUTUBE
BOOK
DOCUMENTATION
WEBINAR
PRACTICE
PROJECT
```

Language:

```text
MYANMAR
ENGLISH
BOTH
```

Difficulty:

```text
BEGINNER
JUNIOR
INTERMEDIATE
ADVANCED
```

---

# 12. Resource Relationships

A resource may be connected to:

```text
Career
Roadmap Stage
Topic
Category
Tags
```

Use relationship tables if many-to-many relationships are required.

---

# 13. Project Architecture

`projects`:

```text
id
career_id
roadmap_stage_id
title
description
difficulty
requirements
steps
expected_outcome
github_guidance
portfolio_value
created_at
updated_at
```

`project_skills`:

```text
project_id
skill_id
```

Projects should connect directly to roadmap stages.

---

# 14. Progress Architecture

The learner's progress should not be trusted from the browser.

Progress should be calculated and validated server-side/database-side.

Core tables:

```text
learner_progress
resource_progress
project_progress
```

Conceptual learner progress:

```text
learner_id
career_id
roadmap_stage_id
status
started_at
completed_at
progress_percentage
updated_at
```

Statuses:

```text
LOCKED
AVAILABLE
IN_PROGRESS
COMPLETED
```

The roadmap should visually communicate these states.

---

# 15. Progress Flow

```text
Resource Completed
        ↓
Resource Progress
        ↓
Roadmap Stage Progress
        ↓
Overall Learning Progress
        ↓
Dashboard
        ↓
AI Context
        ↓
Next Recommendation
```

The same progress model should be consumed by Dashboard and AI.

---

# 16. Saved Resource Architecture

`saved_resources`:

```text
id
user_id
resource_id
created_at
```

Constraints:

```text
UNIQUE(user_id, resource_id)
```

Users can only manage their own saved resources.

---

# 17. AI Architecture

AI should be accessed through a server-side layer.

```text
Browser
  ↓
Authenticated Request
  ↓
Server / Edge Function
  ↓
Validate User
  ↓
Load Relevant Context
  ↓
Build AI Prompt
  ↓
AI Provider
  ↓
Validate Response
  ↓
Store Message
  ↓
Return Response
```

Never call the AI provider using a secret key directly from the browser.

---

# 18. AI Context Model

Do not send the entire learner history.

Construct focused context:

```text
Current Career
Current Level
Current Roadmap Stage
Current Topic
Relevant Progress
Completed Topics
Current Project
Current Project Task
Recent Conversation
Relevant Previous Difficulties
```

Example:

```text
Career: Cloud / DevOps
Level: Beginner
Stage: Docker
Topic: Docker Networking
Progress: 60%
Project: Dockerize Full-Stack App
Current Task: Configure networking
Recent difficulty: Frontend cannot connect to backend
```

This allows contextual AI assistance.

---

# 19. AI Conversation Architecture

`ai_conversations`

```text
id
user_id
title
career_id
created_at
updated_at
```

`ai_messages`

```text
id
conversation_id
role
content
context_snapshot
created_at
```

Roles:

```text
USER
ASSISTANT
SYSTEM
```

Do not expose internal system prompts to the client.

---

# 20. AI Resource Safety

The AI must not invent resource recommendations.

For requests such as:

```text
Give me a Burmese Docker course.
```

The AI should query/filter the verified resource database.

Preferred flow:

```text
User Request
 ↓
Determine Topic
 ↓
Determine Language Preference
 ↓
Determine Difficulty
 ↓
Query Verified Resources
 ↓
Rank Existing Resources
 ↓
AI Explains Recommendation
```

The AI should never fabricate:

* URLs
* YouTube videos
* books
* instructors
* courses
* webinars

---

# 21. AI Resource Ranking

Base ranking:

```text
Myanmar senior/community + Burmese + Free
        ↓
Myanmar senior/community + English + Free
        ↓
Official Documentation
        ↓
High-quality international free resource
        ↓
Other community resource
```

Quality must always override nationality.

Later, ranking can consider:

* learner language preference
* skill level
* previous resource completion
* current topic
* learning history
* resource quality
* resource freshness

---

# 22. AI Teaching Strategy

For technical/project questions, prefer:

```text
Explain
  ↓
Hint
  ↓
Example
  ↓
Solution
```

Do not immediately give the complete answer when the learner is trying to learn.

The AI should behave as a tutor rather than an answer generator.

---

# 23. AI Failure Handling

AI is not a single point of failure for the platform.

If AI is unavailable:

```text
The AI Mentor is temporarily unavailable.

You can continue learning using
the recommended resources.
```

The learner should still be able to:

* view roadmap
* open resources
* complete resources
* view projects
* track progress

---

# 24. AI Rate Limiting

Protect AI endpoints with:

* authentication checks
* request validation
* rate limiting
* reasonable input size limits
* output limits
* abuse protection

AI calls should not be unrestricted.

---

# 25. Authentication Architecture

Supabase Auth handles authentication.

Flow:

```text
Register
 ↓
Validate
 ↓
Supabase Auth
 ↓
Profile Creation
 ↓
Login
 ↓
Session
 ↓
Dashboard
```

Login:

```text
Email
Password
```

MVP excludes:

* Google OAuth
* social login
* phone OTP
* MFA
* password recovery
* password reset

---

# 26. Authorization

Separate:

```text
Public Data
```

from:

```text
Private Learner Data
```

Public:

* careers
* career details
* public roadmaps
* public resources
* public projects

Private:

* profile
* progress
* saved resources
* AI conversations
* private learner data

Community content can be public according to its visibility model.

---

# 27. Row Level Security

RLS is mandatory.

Example policy concept:

```text
Public career:
SELECT → allowed

Public resource:
SELECT → allowed

Own progress:
SELECT → user_id = auth.uid()

Own progress:
UPDATE → user_id = auth.uid()

Own saved resource:
SELECT → user_id = auth.uid()

Own saved resource:
INSERT/DELETE → user_id = auth.uid()

Own AI conversation:
SELECT → user_id = auth.uid()

Own AI conversation:
INSERT → user_id = auth.uid()
```

Never allow a client to bypass these policies.

---

# 28. Community Architecture

MVP community:

```text
community_posts
community_comments
```

Posts can support:

```text
QUESTION
DISCUSSION
RESOURCE
PROJECT_SHOWCASE
```

Do not implement a complex social graph.

Avoid unnecessary features such as:

* follower systems
* recommendation feeds
* direct messaging
* complex reactions
* social ranking

unless added later.

---

# 29. Content Architecture

MVP content should remain simple.

Recommended approach:

```text
Structured Markdown / JSON
+
Database records for learner-specific state
```

Static career information can be stored as content.

Dynamic learner state belongs in PostgreSQL.

Example:

```text
/content
├── careers/
├── resources/
└── projects/
```

Later:

```text
Static Content
     ↓
Admin CMS
```

---

# 30. Bilingual Architecture

UI strings should use a centralized translation system.

Do not scatter:

```tsx
"Explore Careers"
```

throughout components.

Use translation keys conceptually:

```text
nav.careers
nav.resources
dashboard.nextStep
roadmap.completed
resource.watch
```

Content should support English and Burmese variants.

Technical terminology should not be automatically translated if doing so reduces clarity.

---

# 31. Theme Architecture

Theme modes:

```text
light
dark
system
```

Use CSS variables/design tokens.

Avoid hardcoding theme-specific colors throughout components.

Example conceptual tokens:

```text
--background
--foreground
--card
--card-foreground
--primary
--secondary
--muted
--border
--accent
```

Theme preference:

```text
Anonymous → local browser storage
Authenticated → local + eventually profile preference
```

Default:

```text
system
```

---

# 32. Responsive Architecture

Supported design targets:

### Desktop

```text
1440px+
1280px
1024px
```

### Tablet

```text
768px
834px
1024px
```

### Mobile

```text
390px
412px
430px
```

Do not simply shrink desktop.

Mobile must have deliberate layout behavior.

---

# 33. Navigation Architecture

Desktop:

```text
Navbar
```

Authenticated dashboard:

```text
Sidebar
+
Main Content
+
AI Access
```

Sidebar can collapse.

Mobile:

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

---

# 34. Roadmap Responsive Architecture

Desktop:

```text
Left Card
      │
      ●
      │
      Right Card
      │
      ●
      │
      Left Card
```

Mobile:

```text
Stage 01
   │
   ▼
Stage 02
   │
   ▼
Stage 03
   │
   ▼
Stage 04
```

Resource cards become full width.

Filters:

```text
horizontal scroll
```

or:

```text
bottom-sheet filter
```

---

# 35. Dashboard Architecture

Dashboard consumes:

```text
Profile
+
Career
+
Roadmap
+
Progress
+
Projects
+
Saved Resources
+
Achievements
+
Activity
+
AI Recommendations
```

It should not independently calculate conflicting versions of these values.

Use shared domain logic.

---

# 36. Dashboard Personalization Logic

Conceptual state:

```text
if no selected career:
    New User Dashboard

else if beginner:
    Active Beginner Dashboard

else if junior:
    Junior Dashboard

else if career ready:
    Career Ready Dashboard
```

Do not create separate duplicated dashboard implementations.

Use reusable sections with conditional composition.

---

# 37. Career Assessment Architecture

The assessment should be deterministic first.

Conceptual:

```text
Question
 ↓
Answer
 ↓
Career Score
 ↓
Rank Careers
 ↓
Recommendation
```

Example scoring dimensions:

```text
coding
design
data
systems
infrastructure
security
product_building
problem_solving
```

AI can explain:

```text
Why this career fits
```

but the core score should remain reproducible.

---

# 38. Career Readiness Architecture

Do not equate:

```text
Roadmap Completion
=
Career Readiness
```

Career readiness should consider multiple dimensions:

```text
Skills
Projects
Portfolio
Interview Preparation
```

Potential future dimensions:

```text
Communication
Production Experience
Problem Solving
Teamwork
```

AI can explain gaps.

---

# 39. Search Architecture

Future global search:

```text
Search LANN...
```

Search domains:

```text
Careers
Learning Paths
Resources
Projects
Community
```

For MVP, resource search is the priority.

---

# 40. Loading Architecture

Every asynchronous area requires:

```text
Loading
Success
Error
Empty
```

Examples:

```text
DashboardSkeleton
RoadmapSkeleton
ResourceSkeleton
ProfileSkeleton
AIThinkingState
```

Never leave dynamic sections blank while waiting.

---

# 41. Error Architecture

Errors must be:

* understandable
* actionable
* localized
* non-technical where possible

Pattern:

```text
Problem
 ↓
Human-readable explanation
 ↓
Recovery action
```

Example:

```text
Something went wrong.

We couldn't load your learning progress.

[ Try Again ]
```

---

# 42. Performance Architecture

Optimize:

```text
Images
JavaScript bundles
Fonts
Network requests
Database queries
AI requests
```

Use:

* server rendering where appropriate
* static generation where appropriate
* lazy loading
* code splitting
* caching
* optimized assets

Do not add large animation libraries simply for visual effects.

---

# 43. Security Architecture

Never expose:

```text
AI secret key
Supabase service-role key
private credentials
```

in frontend code.

Security layers:

```text
Browser
 ↓
Authentication
 ↓
Authorization
 ↓
Input Validation
 ↓
RLS
 ↓
Server-side operations
 ↓
External APIs
```

Treat these as untrusted:

* user input
* community posts
* AI conversations
* resource URLs
* client progress values

---

# 44. Resource URL Validation

Before publishing resources:

```text
URL exists
+
URL is valid
+
Resource is relevant
+
Creator is verified
+
Technical quality checked
+
Free/paid status checked
```

Periodic verification should happen later.

---

# 45. No Admin Architecture for MVP

Do not build:

```text
/admin
```

for MVP.

Do not build:

* admin user management
* content management dashboard
* moderation dashboard
* analytics dashboard
* instructor dashboard

Content can initially be changed through:

```text
Markdown
JSON
SQL migrations/seeds
```

A CMS can be introduced later.

---

# 46. Recommended Repository Structure

```text
lann/
│
├── app/
│
├── components/
│
├── content/
│   ├── careers/
│   ├── resources/
│   └── projects/
│
├── lib/
│   ├── supabase/
│   ├── ai/
│   ├── auth/
│   ├── progress/
│   ├── recommendations/
│   └── validation/
│
├── hooks/
│
├── types/
│
├── i18n/
│
├── public/
│
├── styles/
│
├── supabase/
│   ├── migrations/
│   └── seed/
│
├── tests/
│
├── .env.local
├── .env.example
├── next.config.*
├── tailwind.config.*
├── tsconfig.json
└── package.json
```

---

# 47. Domain Layer

Keep business logic separate from UI.

Examples:

```text
lib/progress/
lib/recommendations/
lib/assessment/
lib/resources/
lib/ai/
```

Do not put complex career recommendation logic directly inside React components.

---

# 48. Core Domain Functions

Conceptually:

```ts
getCareerBySlug()
getCareerRoadmap()
getRoadmapStage()
getRecommendedStartingStage()
calculateCareerAssessment()
calculateRoadmapProgress()
getNextRoadmapStage()
getRecommendedResources()
getCareerReadiness()
buildAIContext()
```

This makes behavior reusable across:

* Dashboard
* Learning Path
* AI Mentor
* Career Explorer

---

# 49. Core Data Flow

### Career

```text
Career Explorer
 ↓
Career Details
 ↓
Learning Path
```

### Learning

```text
Learning Path
 ↓
Roadmap
 ↓
Stage
 ↓
Resource
 ↓
Complete
```

### Progress

```text
Complete Resource
 ↓
Progress Service
 ↓
Database
 ↓
Dashboard
 ↓
AI Context
```

### AI

```text
Current User Context
 ↓
AI Context Builder
 ↓
AI Provider
 ↓
AI Response
 ↓
Conversation Storage
```

---

# 50. Architectural Invariants

These rules must remain true:

1. AI never invents resources.
2. Client cannot directly modify private data.
3. Client cannot be trusted for progress calculations.
4. AI secrets remain server-side.
5. Public career/resource content remains readable.
6. Learner private data remains isolated.
7. Learning Path and Dashboard use the same progress source.
8. Projects connect to roadmap stages.
9. Resources connect to roadmap stages/topics.
10. AI uses relevant context rather than entire history.
11. Mobile is a first-class experience.
12. English and Burmese are first-class languages.
13. Light and dark themes apply consistently.
14. No admin dashboard in MVP.
15. No unnecessary backend services.

---

# 51. Deployment Direction

The architecture should be deployable using a modern Next.js-compatible hosting platform and Supabase.

Required production configuration should include:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
AI_PROVIDER_API_KEY
```

Only public Supabase client configuration belongs in browser-accessible environment variables.

AI secret keys and service-role credentials must remain server-side.

---

# 52. Architecture Success Criteria

The architecture is successful if:

* new careers can be added without rewriting the application
* new roadmap stages can be added through content/data
* resources can be added without changing UI code
* projects can connect to stages
* learner progress updates consistently everywhere
* AI automatically receives relevant learner context
* bilingual content can expand
* theme system works globally
* mobile layouts remain first-class
* RLS prevents private-data leaks
* MVP remains simple enough for rapid development
