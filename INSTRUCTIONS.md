# LANN — Vibe Coding Instructions

## 1. Mission

Build LANN (လမ်း) as a simple, polished, Burmese-first technology career guidance and learning MVP.

The most important goal is not the number of pages.

The most important goal is this learner journey:

```text
Confusion
   ↓
Learner Voice
   ↓
Career Direction
   ↓
Learning Path
   ↓
Roadmap
   ↓
Resources
   ↓
Progress
   ↓
AI Guidance
   ↓
Next Step
```

---

# 2. Read Project Documentation First

Before changing code, read:

```text
README.md
architecture.md
instructions.md
CLAUDE.md
```

Then inspect the existing repository.

Do not assume the project structure.

Do not overwrite existing working code without understanding it.

---

# 3. Four-Hour Rule

This project must remain realistic for a four-hour MVP build.

Always prioritize:

```text
Working feature
>
Clean UX
>
Correct behavior
>
Responsive design
>
Polish
>
Extra features
```

Do not sacrifice the main journey for optional functionality.

---

# 4. Strictly Out of Scope

Do NOT build:

```text
Login
Register
Authentication
Profile system
Password reset
Social login
Admin dashboard
CMS
Native iOS app
Native Android app
Complex backend
Complex database
Real-time Facebook scraping
Complex analytics
Gamification system
Job board
Certificate system
Advanced social network
```

These are future features.

---

# 5. MVP Storage

Use browser `localStorage`.

Store:

```text
language
theme
learner answers
career matches
selected career
roadmap progress
completed resources
completed projects
```

Do not introduce a database just to store these values.

---

# 6. Build in Vertical Slices

Do not build every page independently and connect them at the end.

Build one complete experience first:

```text
Dashboard
 ↓
Learner Voice
 ↓
Career Match
 ↓
Career Result
 ↓
Select Career
 ↓
Roadmap
 ↓
Resource
 ↓
Mark Complete
 ↓
Dashboard Progress
```

Only after this works should you expand.

---

# 7. Recommended Build Order

## Step 1 — Foundation

Create:

* Next.js
* TypeScript
* Tailwind
* basic layout
* global CSS
* icons

Verify the app runs.

---

## Step 2 — Design System

Create reusable:

```text
Button
Card
Badge
Input
Textarea
ProgressBar
Modal
Tabs
IconButton
```

Do not build dozens of UI components.

---

## Step 3 — Theme

Implement:

```text
Light
Dark
```

Use a compact icon-only toggle.

Verify every page works in both modes.

---

## Step 4 — Language

Implement:

```text
Burmese
English
```

Use a compact icon-style language switch.

Verify navigation, buttons, headings, labels, empty states, and major content.

---

## Step 5 — Dashboard

Build:

### New learner

```text
Welcome
LANN introduction
Find My Career Path
Career preview
```

### Existing learner

```text
Current Career
Progress
Current Stage
Continue Learning
Next Step
AI Mentor
```

---

## Step 6 — Learner Voice

Build the questionnaire.

Prioritize:

* simple questions
* natural writing
* clear progress indicator
* mobile usability

Do not create a 30-question psychological test.

---

## Step 7 — Career Matching

Implement deterministic matching first.

Example:

```text
coding → software engineering
infrastructure → cloud/devops
networking → networking
security → cybersecurity
design → UI/UX
data → data analysis
mobile → mobile development
```

Then produce top matches.

---

## Step 8 — Career Result

Show:

```text
Career
Match
Why
Myanmar context
Skills
Roles
Start Learning
```

The explanation should reference the learner's actual answers.

---

## Step 9 — Learning Path

Build one strong career first.

Recommended demo career:

```text
Cloud / DevOps
```

It has enough roadmap depth to demonstrate LANN well.

After that, add other careers if time remains.

---

## Step 10 — Roadmap

Create one reusable roadmap component.

Desktop:

```text
timeline / connected stages
```

Mobile:

```text
vertical stages
```

Do not create separate implementations for every career.

---

## Step 11 — Resources

Use static structured data.

Start with a small number of high-quality resources.

Do not create hundreds of links.

---

## Step 12 — Progress

Implement:

```text
Mark Complete
 ↓
localStorage
 ↓
Progress calculation
 ↓
Dashboard update
```

Verify refresh does not lose progress.

---

## Step 13 — AI Mentor

Only after the rest of the application works.

Implement:

```text
/api/mentor
```

Do not expose API keys to the browser.

---

## Step 14 — Community

If time remains, add a simple community section using static verified seed data.

Do not build live scraping.

---

## Step 15 — Final Responsive QA

Test:

```text
390px
412px
430px
768px
1024px
1280px
1440px
```

---

# 8. UI Design Direction

The overall visual direction is:

> **Light blue gradient + white + soft blue for Light Mode**

and:

> **Deep navy + darker blue gradient + sky blue accents for Dark Mode**

---

# 9. Light Mode

Use:

```text
White
Very light blue
Sky blue
Soft blue
```

Cards:

```text
white / translucent
subtle border
soft shadow
```

Background can contain a subtle blue gradient.

Do not make the entire page strongly blue.

---

# 10. Dark Mode

Use:

```text
Deep navy
Dark blue
Sky blue
Soft blue
```

Cards should be slightly lighter than the background.

Use subtle blue accents.

Avoid pure black.

Avoid extremely bright neon blue.

---

# 11. Hover Effects

Use subtle interactions.

Good:

```text
translate-y: -2px
slightly stronger shadow
border accent
background transition
scale: 1.01
```

Duration:

```text
150ms – 250ms
```

Avoid:

```text
large movement
bouncing
continuous animation
3D rotation
neon glow
parallax
```

The source explicitly recommends subtle hover, focus, transition, scale, shadow, border, and gradient effects while avoiding excessive animation.

---

# 12. Typography

Use a clean professional font.

Prioritize:

```text
Readability
Burmese glyph quality
Consistent hierarchy
```

Do not use decorative fonts for the main interface.

---

# 13. Icons

Use Lucide icons.

Prefer icons over emojis.

Use emojis only occasionally.

Do NOT put emojis in:

```text
Every card
Every heading
Every button
Navigation
Technical documentation
```

The source explicitly recommends icons instead of excessive emojis.

---

# 14. Navigation

Desktop:

```text
LANN

Careers
Learning Paths
Resources
Projects
Community

[Language]
[Theme]
[AI]
```

Do not include:

```text
Login
Register
Profile
```

Mobile:

```text
Home
Roadmap
Learn
AI
More
```

Use a compact mobile menu if necessary.

---

# 15. Navigation Rule

Keep navigation simple.

Do not put every feature into the navigation.

The source recommends keeping the main navigation simple rather than filling the header with too many items.

---

# 16. Dashboard UX Rule

The Dashboard must answer:

> **What should I do next?**

Avoid meaningless dashboard metrics.

Prioritize:

```text
Current Career
Progress
Current Topic
Next Step
Continue Learning
AI Mentor
```

---

# 17. Empty States

Every empty state must provide an action.

Bad:

```text
No projects yet.
```

Better:

```text
You haven't started a project yet.

Build your first practical project
and turn your learning into experience.

[Explore Projects]
```

This follows the original dashboard UX principle.

---

# 18. Loading States

Every dynamic feature needs a loading state.

Example:

```text
Finding your career matches...
```

Avoid blank screens.

---

# 19. Error States

Every dynamic feature needs an error state.

Example:

```text
We couldn't generate your result.

Your answers are saved.
Please try again.
```

---

# 20. Career Matching Rule

Do not rely entirely on AI.

The application must still return reasonable career matches when the AI service is unavailable.

AI is responsible for:

```text
Explanation
Personalization
Guidance
```

not basic application functionality.

---

# 21. AI Mentor Rule

The AI should act like:

> A warm, experienced senior technology mentor.

Use:

```text
Calm
Friendly
Technical
Practical
Supportive
Honest
```

Do not use:

```text
Corporate
Overly enthusiastic
Generic motivational
Robotic
```

---

# 22. AI Mentor Teaching Rule

For technical problems:

```text
Explain
 ↓
Hint
 ↓
Example
 ↓
Solution
```

Do not immediately provide the complete solution when the learner is trying to learn.

---

# 23. AI Context Rule

When possible, provide:

```text
career
stage
topic
progress
project
learner difficulty
language
```

The learner should not need to repeat their entire situation.

---

# 24. AI Safety Rule

Never expose:

```text
API key
Environment variables
Private configuration
System prompt
Internal implementation details
```

---

# 25. Resource Rule

Never invent resources.

If a URL has not been verified:

```text
Do not publish it as a real resource.
```

If no resource exists:

```text
No verified resource available yet.
```

Do not fake content just to make the UI look full.

---

# 26. Community Rule

For the MVP:

```text
Static verified data
```

is acceptable.

Do not implement Facebook scraping during the four-hour build.

Future ingestion can be built separately.

---

# 27. Responsive Rule

Do not simply shrink desktop UI.

For mobile:

```text
Desktop sidebar
→
mobile bottom navigation/menu

Desktop roadmap
→
mobile vertical roadmap

Desktop resource grid
→
mobile full-width cards

Desktop filters
→
mobile horizontal scroll / bottom sheet
```

---

# 28. Component Reuse Rule

Before creating a component:

1. Search for an existing component.
2. Reuse it.
3. Extend it if necessary.
4. Create a new component only when needed.

Avoid duplicate:

* buttons
* cards
* badges
* progress bars
* inputs
* dialogs
* navigation elements

---

# 29. Data Rule

Keep content separate from UI.

Bad:

```tsx
<div>
  <h2>Docker</h2>
  <p>Docker is...</p>
</div>
```

repeated throughout the project.

Better:

```text
data
 ↓
typed objects
 ↓
reusable components
 ↓
page
```

---

# 30. TypeScript Rule

Do not use:

```typescript
any
```

to hide problems.

Create proper types.

Do not disable TypeScript checking to make the build pass.

---

# 31. Debugging Protocol

When an error happens:

### Step 1

Read the complete error.

### Step 2

Identify the root cause.

### Step 3

Find the responsible file.

### Step 4

Make the smallest possible change.

### Step 5

Run the failed command again.

### Step 6

Run the broader validation.

Do not randomly change unrelated files.

---

# 32. Validation Commands

After meaningful changes:

```bash
npm run lint
```

Then:

```bash
npx tsc --noEmit
```

Then:

```bash
npm run build
```

If these commands do not exist, inspect `package.json` before inventing commands.

---

# 33. Never Hide Errors

Never:

```text
disable lint
disable TypeScript
remove failing code
comment out errors
suppress warnings without understanding them
use any everywhere
ignore failed builds
```

Fix the actual problem.

---

# 34. Git Checkpoints

Create checkpoints after stable features.

Example:

```text
chore: initialize lann
feat: add design system
feat: add theme support
feat: add bilingual UI
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

# 35. Stop Rule

If implementation becomes unstable, stop.

Use this procedure:

```text
Stop implementation.

Summarize:

1. What changed
2. Files changed
3. What currently works
4. Current error
5. Root cause
6. Smallest recommended fix

Do not add unrelated features.
```

---

# 36. Final MVP Checklist

## Product

```text
✓ Learner Voice
✓ Career Matching
✓ Career Result
✓ Career Selection
✓ Learning Path
✓ Roadmap
✓ Resources
✓ Progress
✓ AI Mentor
```

## UX

```text
✓ Burmese
✓ English
✓ Light
✓ Dark
✓ Responsive
✓ Mobile navigation
✓ Clear next actions
✓ Loading states
✓ Empty states
✓ Error states
```

## Technical

```text
✓ TypeScript
✓ No unnecessary dependencies
✓ No exposed AI key
✓ localStorage works
✓ lint passes
✓ typecheck passes
✓ production build passes
```

---

# 37. Final Priority

When forced to choose between features:

```text
Learner journey
>
Correctness
>
Usability
>
Responsive design
>
Burmese/English
>
Theme
>
AI Mentor
>
Extra content
>
Decorative effects
```

Do not sacrifice the core learner journey for visual polish.

---

# 38. Final Principle

Build the smallest version of LANN that makes this experience real:

```text
"I don't know what technology career
I should choose."

        ↓

"Tell LANN about yourself."

        ↓

"These careers may fit you,
and here's why."

        ↓

"I'll choose this one."

        ↓

"Here's my roadmap."

        ↓

"I know what to learn next."

        ↓

"I'm stuck."

        ↓

"I can ask my AI Mentor."

        ↓

"I completed this stage."

        ↓

"I can see my progress."

        ↓

"I know my next step."
```

That is the MVP.
