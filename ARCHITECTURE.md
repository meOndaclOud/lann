# LANN — MVP Architecture

## 1. Architecture Objective

The LANN MVP must be:

* simple
* fast to build
* easy to debug
* easy to understand
* responsive
* bilingual
* theme-aware
* AI-enabled
* locally persistent

The architecture must support the core learner journey without unnecessary backend complexity.

---

# 2. MVP Architecture

```text
                         LANN
                          │
              ┌───────────┴───────────┐
              │                       │
          Next.js UI              AI Mentor
              │                       │
      ┌───────┼────────┐              │
      │       │        │              ▼
      ▼       ▼        ▼        Server AI Route
   Career   Roadmap  Resources        │
      │       │        │              ▼
      └───────┼────────┘         AI Provider
              │
              ▼
        Progress Engine
              │
              ▼
         localStorage
```

---

# 3. Architecture Principle

For the four-hour MVP:

> **Use the simplest architecture that can demonstrate the complete learner journey.**

Do not build:

```text
Microservices
Separate backend server
Complex database
Authentication
Admin CMS
Real-time community system
Native iOS application
Native Android application
Complex AI agent framework
```

---

# 4. Recommended Stack

```text
Frontend
Next.js
React
TypeScript

Styling
Tailwind CSS

Icons
Lucide React

State
React state
localStorage

Content
TypeScript / JSON data

AI
Server-side API route

Future Backend
Supabase
PostgreSQL
```

---

# 5. Folder Structure

Use a small, predictable structure.

```text
lann/
│
├── app/
│   ├── page.tsx
│   │
│   ├── careers/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── assessment/
│   │   ├── page.tsx
│   │   └── result/
│   │       └── page.tsx
│   │
│   ├── learning-path/
│   │   └── [career]/
│   │       └── page.tsx
│   │
│   ├── resources/
│   │   └── page.tsx
│   │
│   ├── projects/
│   │   └── page.tsx
│   │
│   ├── community/
│   │   └── page.tsx
│   │
│   ├── mentor/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   └── api/
│       └── mentor/
│           └── route.ts
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── dashboard/
│   ├── assessment/
│   ├── career/
│   ├── roadmap/
│   ├── resources/
│   ├── projects/
│   ├── community/
│   └── mentor/
│
├── data/
│   ├── careers.ts
│   ├── roadmaps.ts
│   ├── resources.ts
│   ├── projects.ts
│   └── community.ts
│
├── lib/
│   ├── assessment.ts
│   ├── progress.ts
│   ├── storage.ts
│   ├── localization.ts
│   └── ai.ts
│
├── types/
│   ├── career.ts
│   ├── learner.ts
│   ├── roadmap.ts
│   ├── resource.ts
│   ├── project.ts
│   └── community.ts
│
├── public/
│
├── README.md
├── architecture.md
├── instructions.md
└── CLAUDE.md
```

The source also recommends keeping career, resource, and project content in structured files for the MVP instead of creating a complicated CMS.

---

# 6. Main Application Domains

The application has seven main domains:

```text
Learner
Career
Assessment
Roadmap
Resources
Progress
AI Mentor
```

Community and Projects are lightweight supporting domains.

---

# 7. Route Architecture

## Home

```text
/
```

Purpose:

* explain LANN
* introduce career discovery
* direct new learners to assessment

---

## Dashboard

```text
/dashboard
```

Purpose:

* learner progress
* current career
* current roadmap stage
* next step
* AI Mentor
* community highlights

---

## Career Explorer

```text
/careers
```

Purpose:

* browse technology careers
* compare roles
* understand career direction

---

## Career Details

```text
/careers/[slug]
```

Purpose:

* role explanation
* Myanmar context
* required skills
* progression
* learning path

---

## Assessment

```text
/assessment
```

Purpose:

* collect Learner Voice
* calculate career matches

---

## Assessment Result

```text
/assessment/result
```

Purpose:

* show recommended careers
* explain matches
* allow career selection

---

## Learning Path

```text
/learning-path/[career]
```

Purpose:

* career overview
* roadmap
* resources
* projects

---

## Resources

```text
/resources
```

Purpose:

* browse verified learning resources

---

## Projects

```text
/projects
```

Purpose:

* practical project discovery

---

## Community

```text
/community
```

Purpose:

* Myanmar technology opportunities
* webinars
* classes
* events
* community updates

---

## AI Mentor

```text
/mentor
```

Purpose:

* full AI conversation
* contextual learning guidance
* troubleshooting

---

# 8. No Authentication Architecture

There is intentionally no:

```text
/login
/register
/profile
/auth
```

for the MVP.

Learner state is local.

```text
Browser
   │
   ▼
localStorage
   │
   ├── learner answers
   ├── selected career
   ├── roadmap progress
   ├── completed resources
   ├── theme
   └── language
```

---

# 9. Learner Model

```typescript
type LearnerProfile = {
  answers: LearnerAnswers
  recommendedCareers: CareerMatch[]
  selectedCareer?: string
  progress: ProgressState
  language: "my" | "en"
  theme: "light" | "dark"
}
```

---

# 10. Learner Answers

```typescript
type LearnerAnswers = {
  technologyInterest: string
  currentExperience: string
  currentSkills: string
  careerGoal: string
  preferredWork: string
  difficulties: string
  motivation: string
  expectations: string
  additionalContext?: string
}
```

Free-text answers are important because Learner Voice should not feel like a rigid personality test.

---

# 11. Career Model

```typescript
type Career = {
  id: string
  slug: string
  name: string
  nameMy: string
  shortDescription: string
  description: string
  myanmarContext: string
  roles: string[]
  skills: string[]
  progression: CareerLevel[]
  roadmap: RoadmapStage[]
}
```

---

# 12. Career Matching

Use a deterministic matching layer.

Example:

```text
Coding
    → Software Engineering

Infrastructure
    → Cloud / DevOps

Networks
    → Networking

Security
    → Cybersecurity

Visual Design
    → UI/UX

Data
    → Data Analysis

Mobile Apps
    → Mobile Development
```

Then AI can explain the results.

Architecture:

```text
Learner Answers
       ↓
Keyword / Signal Matching
       ↓
Career Scores
       ↓
Top 3 Careers
       ↓
AI Explanation
       ↓
Result Page
```

This prevents AI failure from completely breaking career recommendations.

---

# 13. Career Match Model

```typescript
type CareerMatch = {
  careerId: string
  score: number
  level: "strong" | "good" | "possible"
  reasons: string[]
}
```

Do not claim the score is scientifically accurate.

It is a product matching indicator.

---

# 14. Roadmap Model

```typescript
type RoadmapStage = {
  id: string
  order: number
  title: string
  description: string
  topics: string[]
  skills: string[]
  prerequisites: string[]
  resourceIds: string[]
  projectIds: string[]
}
```

---

# 15. Roadmap Status

```typescript
type RoadmapStatus =
  | "locked"
  | "available"
  | "in-progress"
  | "completed"
```

Status is calculated based on prerequisites and learner progress.

---

# 16. Progress Model

```typescript
type ProgressState = {
  completedStages: string[]
  completedTopics: string[]
  completedResources: string[]
  completedProjects: string[]
}
```

Progress percentage should be calculated.

Do not manually store:

```text
progress = 72
```

Instead calculate:

```text
completed items
÷
total items
×
100
```

---

# 17. Resource Model

```typescript
type Resource = {
  id: string
  title: string
  description: string
  type:
    | "course"
    | "video"
    | "book"
    | "documentation"
    | "practice"
    | "webinar"

  language: "my" | "en"

  difficulty:
    | "beginner"
    | "junior"
    | "intermediate"
    | "advanced"

  creator: string

  creatorType:
    | "myanmar-senior"
    | "myanmar-community"
    | "international"
    | "official"

  url: string
  isFree: boolean
  topic: string
  verified: boolean
}
```

---

# 18. Resource Architecture

The resource page should not dump everything.

Use:

```text
Recommended
     ↓
Myanmar Resources
     ↓
Official Documentation
     ↓
Additional Resources
```

The source explicitly recommends avoiding large resource dumps because too many resources overwhelm learners.

---

# 19. Project Model

```typescript
type Project = {
  id: string
  title: string
  description: string
  careerId: string
  difficulty: string
  skills: string[]
  tasks: string[]
}
```

---

# 20. Community Model

```typescript
type CommunityUpdate = {
  id: string
  title: string
  organizer: string
  description: string
  type:
    | "webinar"
    | "class"
    | "career-talk"
    | "workshop"
    | "announcement"

  source:
    | "facebook"
    | "youtube"
    | "telegram"
    | "website"

  sourceUrl: string
  eventDate?: string
  language: "my" | "en"
  verified: boolean
}
```

---

# 21. AI Architecture

The browser must never directly expose the AI API key.

Use:

```text
Browser
   ↓
POST /api/mentor
   ↓
Server
   ↓
AI Provider
   ↓
Response
   ↓
Browser
```

---

# 22. AI Request Context

The server should construct relevant context:

```text
Learner Answers
Selected Career
Current Stage
Current Topic
Progress
Completed Resources
Current Project
Language
```

Then send the necessary context to the AI provider.

---

# 23. AI Failure Architecture

If AI fails:

```text
AI Mentor is temporarily unavailable.

You can continue using your learning path,
roadmap and resources.
```

The rest of the website must continue working.

AI is an enhancement, not the foundation of the entire application.

---

# 24. Localization Architecture

Use a simple dictionary.

```text
lib/localization.ts
```

Example:

```typescript
const translations = {
  en: {
    dashboard: "Dashboard",
    careers: "Careers",
    roadmap: "My Roadmap",
    mentor: "AI Mentor"
  },

  my: {
    dashboard: "ပင်မစာမျက်နှာ",
    careers: "Career များ",
    roadmap: "ကျွန်ုပ်၏ Roadmap",
    mentor: "AI Mentor"
  }
}
```

Technical terminology may remain English.

---

# 25. Theme Architecture

Use Tailwind classes and CSS variables.

Light:

```text
white
very-light-blue
sky-blue
soft-blue
```

Dark:

```text
deep-navy
dark-blue
sky-blue
soft-blue
```

The same design tokens should be used throughout:

```text
background
foreground
card
border
primary
secondary
muted
accent
```

---

# 26. Responsive Architecture

Desktop:

```text
Navbar
   ↓
Main Container
   ↓
Grid / Two-column layouts
```

Mobile:

```text
Compact Header
      ↓
Single-column Content
      ↓
Bottom Navigation
```

Roadmap:

```text
Desktop → diagram / timeline
Mobile  → vertical timeline
```

Resource cards:

```text
Desktop → grid
Mobile  → full width
```

---

# 27. Data Flow

## New Learner

```text
Home
 ↓
Assessment
 ↓
Learner Answers
 ↓
Matching Engine
 ↓
Career Results
 ↓
Selected Career
 ↓
localStorage
 ↓
Dashboard
```

---

# 28. Learning Flow

```text
Dashboard
 ↓
Selected Career
 ↓
Learning Path
 ↓
Roadmap
 ↓
Stage
 ↓
Resource
 ↓
Mark Complete
 ↓
Progress Engine
 ↓
localStorage
 ↓
Dashboard
```

---

# 29. AI Flow

```text
Learner
 ↓
AI Mentor
 ↓
Question
 ↓
Relevant Learner Context
 ↓
/api/mentor
 ↓
AI Provider
 ↓
Mentor Response
```

---

# 30. Future Architecture

When the MVP is proven:

```text
                         Next.js
                            │
                     Supabase Auth
                            │
                       PostgreSQL
                            │
       ┌────────────┬───────┼────────┬─────────────┐
       │            │       │        │             │
    Profiles     Progress Resources Projects    Community
       │
       ▼
   AI Context
```

Potential future tables:

```text
profiles
careers
roadmap_stages
resources
projects
progress
saved_resources
community_updates
mentor_conversations
```

This is future scope, not four-hour MVP scope.

---

# 31. Architecture Rule

If a feature can be implemented with:

```text
React
+
TypeScript
+
localStorage
```

do that before adding another backend service.

The goal is to minimize:

* setup time
* dependencies
* configuration
* debugging
* deployment problems
* API failures

---

# 32. Definition of Architectural Success

The architecture succeeds if a learner can complete:

```text
Learner Voice
→ Career Match
→ Career Selection
→ Roadmap
→ Resource
→ Progress
→ AI Mentor
```

without requiring:

* account creation
* database setup
* admin system
* multiple backend services
* native mobile applications
