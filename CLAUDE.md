# LANN — Claude Code Rules

## 1. Project Identity

Project:

**LANN — လမ်း**

Meaning:

**လမ်း = Path / Way / Direction**

Audience:

**Young Myanmar technology learners**

Purpose:

Help learners discover a suitable technology career direction and move through a clear learning path.

---

# 2. Source of Truth

Before implementation, read:

```text
README.md
architecture.md
instructions.md
CLAUDE.md
```

Priority:

```text
CLAUDE.md
      ↓
instructions.md
      ↓
architecture.md
      ↓
README.md
      ↓
Existing code
```

When a new user instruction conflicts with these files, follow the newest explicit user instruction.

---

# 3. MVP Constraint

This is a **four-hour MVP**.

Optimize for:

```text
Simple
Fast
Reliable
Responsive
Understandable
Demo-ready
```

Do not optimize for theoretical scalability.

---

# 4. Absolutely Do Not Build

Do not implement:

```text
Login
Register
Authentication
Profile accounts
Password reset
Social login
Admin dashboard
CMS
Native iOS
Native Android
Complex backend
Complex database
Real-time Facebook scraping
Advanced analytics
Job board
Certificates
Gamification
Full social network
```

If you think one of these is necessary, stop and explain why before implementing it.

---

# 5. Storage

Use:

```text
localStorage
```

for MVP learner state.

Persist:

```text
language
theme
learner answers
career matches
selected career
progress
completed resources
completed projects
```

Do not add Supabase just for MVP persistence.

---

# 6. Technology Stack

Use:

```text
Next.js
React
TypeScript
Tailwind CSS
Lucide React
localStorage
Server-side AI API
```

Avoid introducing another framework unless absolutely necessary.

---

# 7. Application Goal

The application must demonstrate:

```text
Dashboard
 ↓
Learner Voice
 ↓
Career Matching
 ↓
Career Result
 ↓
Career Selection
 ↓
Learning Path
 ↓
Roadmap
 ↓
Resource
 ↓
Progress
 ↓
AI Mentor
```

This is more important than the number of pages.

---

# 8. First Working Vertical Slice

Build this first:

```text
Dashboard
 ↓
Assessment
 ↓
Career Matching
 ↓
Result
 ↓
Cloud / DevOps
 ↓
Roadmap
 ↓
Docker Resource
 ↓
Mark Complete
 ↓
Dashboard Progress
```

Do not build all careers before proving this flow.

---

# 9. Career Matching

Use deterministic matching.

Do not depend entirely on AI.

Example signals:

```text
coding
→ Software Engineering

web
→ Full-Stack Development

mobile
→ Mobile Development

design
→ UI/UX

data
→ Data Analysis

security
→ Cybersecurity

network
→ Networking

infrastructure
→ Cloud / DevOps
```

AI may explain the recommendation.

AI should not be the only source of the recommendation.

---

# 10. Career Recommendation Language

Never say:

```text
This is definitely the perfect career for you.
```

Prefer:

```text
This appears to be a strong match based on what you shared.
```

Career matching is guidance, not scientific diagnosis.

---

# 11. Learner Voice

Keep the assessment short.

Focus on:

```text
Interest
Experience
Skills
Goals
Difficulties
Preferred work
Motivation
Career expectations
```

Allow free-text answers.

Do not create an unnecessarily long psychological test.

---

# 12. Dashboard

New learner:

```text
Welcome
LANN explanation
Find My Career Path
Career preview
```

Active learner:

```text
Current career
Progress
Current stage
Continue learning
Next step
AI Mentor
```

Do not create empty analytics charts.

---

# 13. Main Dashboard Question

Every dashboard decision should support:

> **What should I do next?**

---

# 14. Roadmap

Roadmap must be data-driven.

Use one reusable component.

Each stage supports:

```text
title
description
topics
skills
prerequisites
resources
projects
status
```

Status:

```text
locked
available
in-progress
completed
```

Desktop:

```text
connected timeline
```

Mobile:

```text
vertical timeline
```

---

# 15. Learning Pace

Do not display:

```text
hours/day
hours/week
mandatory schedule
deadline
```

Learners can learn at their own pace.

---

# 16. Resources

Use structured resource data.

Each resource needs:

```text
id
title
description
type
language
difficulty
creator
creatorType
url
isFree
topic
verified
```

Never fabricate:

```text
URLs
courses
videos
books
teachers
webinars
Facebook posts
Telegram channels
```

If a resource cannot be verified, do not pretend that it exists.

---

# 17. Myanmar Resource Priority

Prefer:

```text
Myanmar senior
+
Burmese
+
free
+
high quality
```

But do not recommend a lower-quality Myanmar resource simply because it is Myanmar.

Quality comes first.

---

# 18. AI Mentor

The AI Mentor must feel like:

> A warm, experienced male technology mentor.

Tone:

```text
Friendly
Calm
Technical
Practical
Supportive
Honest
```

Avoid:

```text
Corporate
Robotic
Overly motivational
Excessive emojis
Fake enthusiasm
```

---

# 19. AI Mentor Context

Provide relevant context:

```text
career
roadmap stage
current topic
progress
completed resources
project
learner difficulties
language
```

Do not send unnecessary data.

---

# 20. AI Learning Method

For learning questions:

```text
Explain
 ↓
Hint
 ↓
Example
 ↓
Solution
```

Do not immediately dump the complete solution when a learner is trying to understand a problem.

---

# 21. AI Security

Never expose:

```text
API keys
.env values
server secrets
system prompts
private configuration
```

AI requests must go through a server-side route.

---

# 22. AI Failure

If AI is unavailable:

```text
AI Mentor is temporarily unavailable.

You can continue learning through
your roadmap and resources.
```

Never break the application because AI failed.

---

# 23. Community

MVP community is static structured content.

Use:

```text
community.ts
```

or equivalent.

Each event/update needs an original source URL.

Do not build real-time Facebook scraping in the four-hour MVP.

---

# 24. Language

Support:

```text
English
Burmese
```

Burmese must be a first-class UI language.

Do not mechanically translate technical terminology.

Keep common technical words in English when clearer:

```text
Docker
Kubernetes
Git
API
Cloud
Database
Frontend
Backend
```

---

# 25. Language Switcher

Use a compact icon-style control.

Do not use a large language selector.

Example:

```text
文
```

or:

```text
MY
```

---

# 26. Theme

Support:

```text
Light
Dark
```

Light:

```text
white
very light blue
sky blue
soft blue
```

Dark:

```text
deep navy
dark blue
sky blue
soft blue
```

The theme must affect the entire application.

---

# 27. Theme Switcher

Use an icon-only button.

Example:

```text
☀
```

or:

```text
◐
```

Do not use large:

```text
[ Light Mode ]
[ Dark Mode ]
```

controls.

---

# 28. Visual Style

Overall feeling:

```text
Modern
Friendly
Technical
Calm
Premium
```

Use:

```text
soft gradients
rounded cards
subtle borders
subtle shadows
clean typography
blue accents
```

Do not overuse:

```text
glassmorphism
neon
3D
parallax
floating objects
large gradients
```

---

# 29. Hover Effects

Use subtle:

```text
translateY(-2px)
slight scale
border transition
shadow transition
background transition
```

Keep animations around:

```text
150ms–250ms
```

No bouncing or excessive movement.

---

# 30. Emoji Policy

Use icons by default.

Avoid emojis in:

```text
navigation
every heading
every card
every button
technical content
```

Occasional friendly use is acceptable.

---

# 31. Responsive Design

Always test:

```text
390px
412px
430px
768px
1024px
1280px
1440px
```

Mobile is not a shrunk desktop.

Adapt:

```text
navigation
roadmap
cards
filters
AI interface
forms
dashboard
```

---

# 32. Mobile Navigation

Use:

```text
Home
Roadmap
Learn
AI
More
```

or equivalent compact navigation.

AI must remain easily accessible.

---

# 33. Component Rule

Before creating a component:

```text
Search existing components
 ↓
Reuse
 ↓
Extend
 ↓
Create new only if necessary
```

Avoid duplicate UI components.

---

# 34. TypeScript Rule

Never use:

```typescript
any
```

just to make errors disappear.

Do not disable TypeScript.

Create explicit types.

---

# 35. Error Handling

All dynamic UI must have:

```text
Loading
Success
Empty
Error
```

Never leave a blank screen.

---

# 36. Debugging Rule

When something fails:

```text
Read error
 ↓
Identify root cause
 ↓
Inspect relevant files
 ↓
Make smallest fix
 ↓
Retest
```

Do not make random changes.

Do not modify unrelated features.

---

# 37. Validation

After significant implementation:

```bash
npm run lint
```

```bash
npx tsc --noEmit
```

```bash
npm run build
```

If scripts differ, inspect `package.json`.

Never invent a script without checking the project.

---

# 38. Browser QA

Test:

```text
Desktop
Mobile
Light
Dark
Burmese
English
New learner
Active learner
```

Also test:

```text
Assessment submission
Career result
Career selection
Roadmap navigation
Resource links
Mark complete
Progress persistence
AI failure
```

---

# 39. LocalStorage QA

Verify:

```text
Refresh page
→ data remains

Close browser
→ data remains

Switch language
→ selection remains

Switch theme
→ selection remains

Complete roadmap item
→ progress remains
```

---

# 40. Do Not Hide Errors

Never:

```text
disable lint
disable TypeScript
remove errors
comment out broken code
hide console errors
use any everywhere
ignore failed build
```

Fix the underlying problem.

---

# 41. Git Checkpoints

Create a commit after each stable milestone:

```text
chore: initialize lann
feat: add design system
feat: add theme
feat: add localization
feat: add dashboard
feat: add learner voice
feat: add career matching
feat: add career result
feat: add learning path
feat: add roadmap
feat: add resources
feat: add progress
feat: add ai mentor
feat: add community
```

---

# 42. Scope Control

If a requested feature will likely take more than the available MVP time:

1. Identify the feature as non-critical.
2. Build a simpler version.
3. Preserve the user-facing experience.
4. Move complex implementation to future scope.

Example:

Instead of:

```text
Live Facebook AI scraping
```

build:

```text
Verified community seed data
+
original source links
```

Instead of:

```text
Supabase authentication
```

build:

```text
localStorage
```

Instead of:

```text
Native iOS + Android
```

build:

```text
responsive web/PWA experience
```

---

# 43. Content Quality

Do not fill empty UI with fake content.

If content does not exist:

```text
Coming Soon
```

is better than fabricated information.

---

# 44. Product Tone

The product should communicate:

```text
You don't need to know everything.

You just need to know your next step.
```

Do not make the learner feel judged for not knowing something.

---

# 45. Final Definition of Done

The MVP is complete when a new learner can:

```text
1. Open LANN
2. Understand the product
3. Start Learner Voice
4. Submit their answers
5. Receive career matches
6. Understand why they match
7. Select a career
8. View the learning path
9. View the roadmap
10. Open a resource
11. Mark progress
12. Return to dashboard
13. See updated progress
14. Ask AI Mentor
```

And the entire experience works in:

```text
Burmese
English
Light Mode
Dark Mode
Desktop
Mobile
```

without requiring:

```text
Login
Register
```

---

# 46. Most Important Rule

Do not build LANN as a collection of pages.

Build it as one learner journey:

```text
Confusion
    ↓
Clarity
    ↓
Direction
    ↓
Learning
    ↓
Practice
    ↓
Progress
    ↓
Guidance
    ↓
Next Step
```

If a feature does not improve that journey, it is probably not important for the four-hour MVP.
