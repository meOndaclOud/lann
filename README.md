# LANN — လမ်း

> **Find your direction. Build your path. Keep moving.**

LANN (လမ်း) is a simple Burmese-first technology career guidance and learning platform designed for young people in Myanmar.

The Burmese word **လမ်း** means **path / way / direction**.

LANN is designed for learners who are interested in technology but may not know:

* Which technology career is right for them
* What they should learn first
* What they should learn next
* Which resources are actually useful
* Which Burmese learning resources are available
* What skills are required for a particular role
* What project they should build
* Where to ask when they get stuck
* Whether they are making meaningful progress

The goal of LANN is not to give learners more information.

The goal is to give them **clear direction**.

---

# 1. Product Vision

LANN should feel like a knowledgeable, friendly senior technology person helping a learner find their direction.

The core experience is:

```text
Learner's Voice
       ↓
Understand the Learner
       ↓
Career Matching
       ↓
Why This Career Fits
       ↓
Choose a Career
       ↓
Learning Path
       ↓
Visual Roadmap
       ↓
Learning Resources
       ↓
Practice / Projects
       ↓
AI Mentor
       ↓
Track Progress
       ↓
Myanmar Community
       ↓
Next Step
```

The original LANN specification defines the product around career guidance, Myanmar context, structured roadmaps, free resources, Myanmar senior resources, practical projects, AI mentoring, and progress tracking.

---

# 2. Problem

Many young people in Myanmar are interested in technology but become overwhelmed or lose direction because they encounter:

* too many technologies
* too many courses
* random tutorials
* unclear career paths
* difficulty understanding technical English
* lack of structured roadmaps
* uncertainty about which role suits them
* lack of practical projects
* difficulty finding reliable Burmese resources
* uncertainty about what to learn next
* difficulty getting technical guidance

LANN should reduce this confusion by turning a large technology ecosystem into a clear learning journey.

---

# 3. Target Audience

Primary audience:

**Young people in Myanmar who are interested in technology.**

The MVP should particularly help:

### Beginners

People who:

* are interested in technology
* don't know which career to choose
* have little technical experience
* need a clear starting point

### Students

People who:

* study computing or related subjects
* want practical skills
* want to understand technology careers
* need structured learning paths

### Career Changers

People who:

* want to move into technology
* don't know where to begin
* need guidance choosing a suitable direction

### Junior Learners

People who:

* already know some technical skills
* want a structured roadmap
* want to know what to learn next
* want to build practical projects

---

# 4. Core Product Philosophy

## 4.1 Clarity over quantity

LANN should never overwhelm learners.

Prefer:

```text
3 useful resources
```

instead of:

```text
50 random resources
```

The original specification explicitly recommends curated resources rather than large resource dumps.

---

## 4.2 Direction over information

Every important page should answer:

> **What should I do next?**

---

## 4.3 Myanmar-first

LANN should be comfortable for Myanmar learners.

Technical terminology may remain in English when that is clearer.

Examples:

* Docker
* Kubernetes
* Git
* API
* Cloud
* Database
* Frontend
* Backend

The source specifically recommends avoiding mechanical translation of technical terminology.

---

## 4.4 Human experience

The website should feel:

* friendly
* calm
* modern
* professional
* supportive
* technically credible

It should not feel:

* childish
* overly corporate
* like a generic LMS
* like a social-media website
* like a generic AI chatbot

---

# 5. MVP Product Flow

The MVP should focus on one complete learner journey.

```text
Home / Dashboard
      ↓
Learner Voice
      ↓
Career Recommendation
      ↓
Career Result
      ↓
Select Career
      ↓
Learning Path
      ↓
Roadmap
      ↓
Resources
      ↓
Mark Progress
      ↓
AI Mentor
      ↓
Community
```

The source similarly defines the journey around career discovery → learning path → roadmap → resources → projects → AI → progress.

---

# 6. Dashboard

The Dashboard is the main page.

It should change depending on whether the learner is new or already has progress.

## New Learner

Do not show empty analytics.

Instead:

```text
Welcome to LANN

You don't need to know your entire career path yet.

Tell us what you're interested in,
what you're struggling with,
and where you want to go.

[ Find My Career Path ]
```

Then show a small section:

```text
Explore Technology Careers

Software Engineering
Cloud / DevOps
Cybersecurity
UI/UX
Data
Mobile Development
```

The source specifically recommends that new users should see career discovery rather than empty dashboard charts.

---

# 7. Active Learner Dashboard

After selecting a career, the dashboard should become personalized.

Example:

```text
Your Learning Journey

Cloud / DevOps

████████░░ 72%

Current Stage
Docker

[ Continue Learning ]
```

Then:

```text
Your Next Step

CI/CD Fundamentals

You've completed:
✓ Linux
✓ Networking
✓ Git
✓ Docker

Next:
CI/CD
```

The source identifies "Continue Learning" and "Your Next Step" as important dashboard concepts.

---

# 8. Progress

The dashboard should clearly show progress.

Example:

```text
72% Complete

12 / 20 Topics
3 / 5 Projects

Current Stage
Junior
```

Progress should come from actual completed roadmap items.

The source recommends showing completed topics, projects, and current stage rather than displaying only a percentage.

---

# 9. Learner Voice

The main career discovery feature is **Learner Voice**.

It should feel more like telling LANN about yourself than taking an examination.

Questions can include:

### About your interest

> What made you interested in technology?

### Current experience

> What have you already learned or tried?

### Career goal

> What kind of technology work sounds interesting to you?

### Difficulties

> What are you currently struggling with?

### Motivation

> Why do you want to build a career in technology?

### Preferred work

> What type of work do you enjoy?

### Future

> What would you like your career to look like?

### Additional thoughts

> Is there anything else you want LANN to understand about you?

Allow free-text answers.

There are no "correct" answers.

---

# 10. Career Matching

After the learner submits their answers, LANN provides suitable career matches.

Example:

```text
Based on what you shared...

01  Cloud / DevOps
    Strong Match

02  Software Engineering
    Good Match

03  Networking
    Possible Match
```

The recommendation should be explainable.

Do not tell the learner:

> "This is definitely the perfect career for you."

Instead:

> "This appears to be a strong match based on the information you provided."

The original specification states that AI can enhance career explanations, but the basic recommendation should not depend entirely on AI.

---

# 11. Career Result

Each recommendation should show:

* Career name
* Match level
* Why it may fit
* Learner signals that influenced the result
* Myanmar relevance
* Required skills
* Possible roles
* Recommended starting point
* Learning Path CTA

Example:

```text
Cloud / DevOps

Strong Match

Why this may fit you

You mentioned that you enjoy:
• solving technical problems
• understanding infrastructure
• working with systems

Why it matters in Myanmar

Cloud and DevOps skills can support
local technology teams as well as
remote technology opportunities.

Possible Roles

Cloud Engineer
DevOps Engineer
Infrastructure Engineer
Platform Engineer

[ Start Learning Path ]
```

---

# 12. Career Explorer

The MVP should provide a simple Career Explorer.

Initial career categories:

* Software Engineering
* Full-Stack Development
* Mobile Development
* UI/UX Design
* Data Analysis
* Cloud / DevOps
* Cybersecurity
* Networking

The original source includes these career categories and expects career cards to communicate role description, skills, progression, Myanmar relevance, and learning paths.

---

# 13. Learning Path

When the learner chooses a career, they enter its Learning Path.

Structure:

```text
What is this career?
        ↓
What does this person do?
        ↓
Why does this career matter?
        ↓
Why is it relevant to Myanmar?
        ↓
Who is it suitable for?
        ↓
Required Skills
        ↓
Career Progression
        ↓
Learning Roadmap
        ↓
Resources
        ↓
Projects
        ↓
AI Mentor
```

This structure follows the original LANN learning-path specification.

---

# 14. Career Progression

Show learners the long-term direction.

Example:

```text
Beginner
   ↓
Junior
   ↓
Mid-Level
   ↓
Senior
   ↓
Specialist / Architect
```

For Cloud / DevOps:

```text
Technology Fundamentals
        ↓
Junior Cloud / DevOps Engineer
        ↓
Cloud / DevOps Engineer
        ↓
Senior Cloud / DevOps Engineer
        ↓
Cloud Architect / Platform Engineer /
SRE / DevOps Lead
```

Do not imply:

> Learning the roadmap = automatically becoming senior.

Real career growth also requires:

* practical experience
* problem solving
* communication
* teamwork
* production experience
* project ownership
* system understanding

This responsible career framing is explicitly required by the source.

---

# 15. Roadmap

The roadmap is one of the most important visual features.

Example:

```text
START
  │
  ▼
Foundation
  │
  ▼
Linux
  │
  ▼
Networking
  │
  ▼
Git
  │
  ▼
Docker
  │
  ▼
CI/CD
  │
  ▼
Cloud
  │
  ▼
Terraform
  │
  ▼
Kubernetes
  │
  ▼
Projects
  │
  ▼
Career Ready
```

Each stage can contain:

* Topics
* Skills
* Prerequisites
* Resources
* Project
* Completion status

This matches the roadmap model in the source.

---

# 16. Roadmap Status

Stages should support:

```text
✓ Completed
◐ In Progress
○ Available
🔒 Locked
```

Example:

```text
✓ Linux
✓ Networking
✓ Git
◐ Docker
○ CI/CD
🔒 Kubernetes
```

Prerequisites should determine locked stages.

The source specifically defines these four roadmap states.

---

# 17. Learning Resources

Resources should include:

* Free Courses
* YouTube
* Digital Books
* Documentation
* Practice
* Projects
* Webinars
* Myanmar Resources

Each resource should contain:

```text
Title
Description
Type
Language
Difficulty
Creator
Cost
URL
Verification
Topic
```

This follows the source resource model.

---

# 18. Myanmar Resources

Prioritize high-quality resources from:

* Myanmar senior developers
* Myanmar senior cloud engineers
* Myanmar DevOps engineers
* Myanmar technology educators
* Myanmar technology communities

Possible platforms:

* YouTube
* Facebook
* Telegram
* websites
* digital books

Do not fabricate resources.

Every external resource must have a real URL.

The source explicitly requires real URLs, creator identification, language, free status, technical quality, and verification.

---

# 19. Digital Books

Only include legally available materials.

Accept:

* Open-source books
* Official documentation
* Free educational resources
* Authorized digital books

Do not include pirated books.

---

# 20. Projects

Projects connect learning to practical experience.

Example:

```text
Project

Deploy a Dockerized Web Application

Career:
Cloud / DevOps

Difficulty:
Junior

Skills:
Docker
Networking
Linux
Nginx

[ Start Project ]
```

The project feature should remain simple in the MVP.

---

# 21. AI Mentor

LANN includes an AI Mentor.

The Mentor should feel like:

> **A warm, experienced male technology mentor.**

Tone:

* friendly
* calm
* technically knowledgeable
* practical
* supportive
* honest
* conversational

Avoid:

* excessive emojis
* corporate language
* fake enthusiasm
* generic motivational messages

---

# 22. AI Mentor Use Cases

The learner can ask:

### Career

> Am I on the right career path?

### Learning

> Explain Docker simply.

### Roadmap

> What should I learn next?

### Troubleshooting

> My frontend can't connect to my backend.

### Project

> How should I start this project?

### Progress

> What am I missing?

The source defines these contextual AI use cases.

---

# 23. AI Context

The AI can use:

```text
Selected Career
Current Roadmap Stage
Current Topic
Completed Topics
Current Project
Learner Difficulties
Progress
Language
```

Example:

```text
Career: Cloud / DevOps
Stage: Docker
Progress: 42%
Current Topic: Docker Networking
Project: Containerized Web App
Language: Burmese
```

This allows contextual answers without requiring the learner to repeat their situation.

The source defines this learner → career → roadmap → topic → completed resources → previous difficulties → AI context flow.

---

# 24. AI Learning Behavior

The AI should teach rather than simply give answers.

Preferred sequence:

```text
Explain
   ↓
Hint
   ↓
Example
   ↓
Solution
```

Instead of immediately giving:

```text
Complete answer
```

This follows the source's AI project-assistance principle.

---

# 25. AI Resource Safety

The AI must not invent:

* courses
* YouTube videos
* Telegram channels
* Facebook pages
* books
* instructors
* webinars
* URLs

If no verified resource exists:

```text
I couldn't find a verified resource
for this topic in LANN yet.
```

The source explicitly identifies resource hallucination prevention as an important AI requirement.

---

# 26. Community

The MVP Community section should remain lightweight.

It should show useful Myanmar technology opportunities such as:

* free webinars
* technical workshops
* career talks
* free classes
* senior engineer sessions
* technology community announcements

The purpose is discovery, not building a social network.

The source also explicitly says community should remain lightweight rather than becoming a full social network.

---

# 27. Community MVP Data

For the four-hour MVP, use static structured data.

Example:

```text
community.ts
```

Each item should contain:

```text
Title
Organizer
Description
Type
Source
Source URL
Date
Language
Verified
```

Do not implement real-time Facebook scraping during the MVP.

Future versions can introduce official APIs or approved ingestion systems.

---

# 28. Theme

LANN must support:

```text
Light Mode
Dark Mode
```

## Light

Visual direction:

* white base
* very light blue background
* sky-blue gradients
* soft blue accents
* white / translucent cards
* subtle shadows
* dark readable text

## Dark

Visual direction:

* deep navy background
* darker blue gradients
* sky-blue accents
* dark translucent cards
* subtle borders
* bright readable text
* restrained blue glow

The source's original visual direction is white/light-blue for light mode and deep navy/sky-blue for dark mode.

---

# 29. Theme Switch

Use a compact icon-only control.

Example:

```text
☀
```

or

```text
◐
```

Do not create large:

```text
[ Light Mode ]
[ Dark Mode ]
```

controls.

The source specifically recommends a compact theme control.

---

# 30. Language

Support:

```text
မြန်မာ
English
```

Burmese should feel like a first-class language.

The language switch should be compact and icon-style.

Possible UI:

```text
文
```

or:

```text
MY
```

The user's selection should persist locally.

---

# 31. Responsive Design

The website must work on:

### Desktop

* 1440px+
* 1280px
* 1024px

### Tablet

* 768px
* 834px

### Mobile

* 390px
* 412px
* 430px

The original specification explicitly defines these responsive targets and says mobile should not simply be a shrunk desktop layout.

---

# 32. Mobile Experience

Mobile should use a compact navigation.

Recommended:

```text
Home | Roadmap | Learn | AI | More
```

Roadmaps should become vertical.

Resource cards should become full-width.

Filters can become horizontal scrolling or a bottom-sheet style control.

This follows the source's mobile roadmap guidance.

---

# 33. No Login / Register

The MVP does **not** include:

* Login
* Register
* Password
* Social login
* Authentication
* Profile accounts

Learner state should be stored locally in the browser.

Use:

```text
localStorage
```

for:

* language
* theme
* learner answers
* recommended careers
* selected career
* roadmap progress
* completed resources
* saved resources

Authentication and Supabase persistence can be added later.

---

# 34. MVP Technology Stack

Use a small stack:

```text
Next.js
React
TypeScript
Tailwind CSS
Lucide Icons
localStorage
Server-side AI API
```

Supabase should be treated as a future backend rather than a requirement for the four-hour MVP.

The source recommends keeping the technology stack small and specifically identifies TypeScript, React, Next.js, Tailwind CSS, Supabase, PostgreSQL, and server-side AI integration.

---

# 35. Four-Hour MVP Scope

## P0 — Must Have

```text
✓ Dashboard
✓ Learner Voice
✓ Career Matching
✓ Career Result
✓ Career Explorer
✓ Career Details
✓ Learning Path
✓ Visual Roadmap
✓ Learning Resources
✓ Myanmar Resources
✓ Progress Tracking
✓ AI Mentor
✓ Burmese / English
✓ Light / Dark
✓ Responsive Design
✓ Local Storage
```

## P1 — Only if time remains

```text
○ Projects
○ Community
○ Saved Resources
○ AI quick prompts
○ More detailed career data
```

## Future

```text
○ Supabase
○ Authentication
○ Cross-device sync
○ Real community ingestion
○ Facebook API integration
○ Telegram integration
○ Advanced AI personalization
○ Mentor matching
○ Job board
○ Portfolio
○ Certificates
○ Gamification
○ Admin CMS
```

---

# 36. Four-Hour Success Criteria

At the end of four hours, a learner must be able to:

```text
Open LANN
   ↓
Understand what LANN does
   ↓
Tell LANN about themselves
   ↓
Receive career matches
   ↓
Understand why they match
   ↓
Choose a career
   ↓
See the learning path
   ↓
Explore the roadmap
   ↓
Open resources
   ↓
Mark something complete
   ↓
See progress update
   ↓
Ask AI Mentor for help
```

If this journey works smoothly, the MVP is successful.

---

# 37. Core Differentiator

LANN is not:

> "A website containing programming courses."

LANN is:

> **A career-guidance and learning platform designed around the reality of Myanmar learners.**

Its core combination is:

```text
Career Guidance
+
Myanmar Context
+
Structured Roadmaps
+
Free Resources
+
Myanmar Senior Community
+
Practical Projects
+
AI Mentoring
+
Progress Tracking
```

This is the product identity that should remain consistent throughout the MVP.
