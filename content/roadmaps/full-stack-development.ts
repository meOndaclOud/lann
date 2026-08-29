import type { CareerRoadmap } from "@/types/roadmap";

/**
 * Second roadmap on the same reusable `CareerRoadmap`/`RoadmapStage` system
 * built for Cloud/DevOps — see content/roadmaps/index.ts. No new components,
 * pages, or domain logic were needed to add this career.
 */
export const FULL_STACK_DEVELOPMENT_ROADMAP: CareerRoadmap = {
  careerSlug: "full-stack-development",
  title: { en: "Full-Stack Development Roadmap", mm: "Full-Stack Development သင်ယူမှုလမ်းကြောင်း" },
  description: {
    en: "A stage-by-stage path from web fundamentals to building, testing, and deploying complete full-stack applications.",
    mm: "Web အခြေခံမှသည် full-stack application ပြည့်စုံသော application များကို တည်ဆောက်၊ စမ်းသပ်၊ ထုတ်ဝေနိုင်သည်အထိ အဆင့်ဆင့် လမ်းကြောင်း။",
  },
  stages: [
    {
      slug: "foundation",
      title: { en: "Foundation", mm: "Foundation" },
      description: {
        en: "Get comfortable with how the web actually works — browsers, servers, and how they talk to each other — before diving into frontend or backend code.",
        mm: "Frontend သို့မဟုတ် backend code များသို့ မဝင်ရောက်မီ browser, server နှင့် ၎င်းတို့ မည်သို့ ဆက်သွယ်ကြောင်းအပါအဝင် web အလုပ်လုပ်ပုံကို ကျွမ်းကျင်အောင် လေ့လာပါ။",
      },
      goal: {
        en: "Build the baseline knowledge every later stage depends on.",
        mm: "နောက်ပိုင်းအဆင့်တိုင်း မှီခိုနေရသည့် အခြေခံဗဟုသုတကို တည်ဆောက်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 10,
      topics: [
        { en: "How the web works (client/server)", mm: "Web အလုပ်လုပ်ပုံ (client/server)" },
        { en: "The command line", mm: "Command line" },
        { en: "How HTTP requests work", mm: "HTTP request အလုပ်လုပ်ပုံ" },
      ],
      prerequisiteSlugs: [],
      resourceConnection: {
        en: "Beginner-friendly resources on web fundamentals connect here once verified.",
        mm: "Web အခြေခံဆိုင်ရာ လူသစ်များအတွက် အရင်းအမြစ်များကို အတည်ပြုပြီးနောက် ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "html-css",
      title: { en: "HTML & CSS", mm: "HTML & CSS" },
      description: {
        en: "Structure web pages with semantic HTML and style them with CSS, including responsive layouts that work on any screen size.",
        mm: "Web စာမျက်နှာများကို semantic HTML ဖြင့် တည်ဆောက်ပြီး CSS ဖြင့် ဒီဇိုင်းဆွဲပါ — မည်သည့် screen size တွင်မဆို အလုပ်လုပ်သော responsive layout အပါအဝင်။",
      },
      goal: {
        en: "Build a fully responsive, accessible static web page from scratch.",
        mm: "အစအဆုံး responsive ဖြစ်ပြီး လူတိုင်းအသုံးပြုနိုင်သော static web page တစ်ခုကို တည်ဆောက်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 20,
      topics: [
        { en: "Semantic HTML", mm: "Semantic HTML" },
        { en: "CSS layout (Flexbox & Grid)", mm: "CSS layout (Flexbox & Grid)" },
        { en: "Responsive design", mm: "Responsive design" },
        { en: "Accessibility basics", mm: "Accessibility အခြေခံ" },
      ],
      prerequisiteSlugs: ["foundation"],
      resourceConnection: {
        en: "Verified HTML & CSS resources connect here once published.",
        mm: "HTML & CSS ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A project building a fully responsive static page connects here.",
        mm: "Responsive static page တစ်ခု တည်ဆောက်သော ပရောဂျက်ကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "javascript",
      title: { en: "JavaScript", mm: "JavaScript" },
      description: {
        en: "Learn the core language that powers interactive web pages — variables, functions, the DOM, and asynchronous code.",
        mm: "Interactive web page များကို ရှေ့ဆောင်သော အဓိက language — variable, function, DOM နှင့် asynchronous code များကို သင်ယူပါ။",
      },
      goal: {
        en: "Use JavaScript confidently to make a web page interactive.",
        mm: "Web page တစ်ခုကို interactive ဖြစ်စေရန် JavaScript ကို စိတ်ချစွာ အသုံးပြုနိုင်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 25,
      topics: [
        { en: "Core syntax & data structures", mm: "Core syntax & data structure" },
        { en: "The DOM & events", mm: "DOM & event" },
        {
          en: "Asynchronous JavaScript (promises, async/await)",
          mm: "Asynchronous JavaScript (promise, async/await)",
        },
        { en: "Fetching data from an API", mm: "API မှ ဒေတာ fetch ပြုလုပ်ခြင်း" },
      ],
      prerequisiteSlugs: ["html-css"],
      resourceConnection: {
        en: "Verified JavaScript resources connect here once published.",
        mm: "JavaScript ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "git",
      title: { en: "Git", mm: "Git" },
      description: {
        en: "Track changes, collaborate, and manage code history — the version control system used on virtually every team.",
        mm: "အပြောင်းအလဲများကို ခြေရာခံ၊ ပူးပေါင်းလုပ်ဆောင်ပြီး code မှတ်တမ်းကို စီမံခန့်ခွဲပါ — team အားလုံးနီးပါးသုံးသော version control system။",
      },
      goal: {
        en: "Use Git confidently for solo and team workflows.",
        mm: "တစ်ဦးတည်းနှင့် team အလုပ်လုပ်ငန်းစဉ်များအတွက် Git ကို စိတ်ချစွာ အသုံးပြုနိုင်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 8,
      topics: [
        { en: "Commits & branches", mm: "Commit & branch" },
        { en: "Merging & rebasing", mm: "Merging & rebasing" },
        {
          en: "Working with remotes (e.g. GitHub)",
          mm: "Remote repository (ဥပမာ GitHub) နှင့် အလုပ်လုပ်ခြင်း",
        },
        { en: "Collaborative workflows", mm: "ပူးပေါင်းလုပ်ဆောင်ရေး workflow" },
      ],
      prerequisiteSlugs: ["javascript"],
      resourceConnection: {
        en: "Verified Git resources connect here once published.",
        mm: "Git ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "frontend-framework",
      title: { en: "Frontend Framework", mm: "Frontend Framework" },
      description: {
        en: "Build structured, maintainable user interfaces with a modern component-based framework.",
        mm: "ခေတ်မီ component-based framework တစ်ခုသုံး၍ စနစ်ကျပြီး ထိန်းသိမ်းရလွယ်သော user interface များ တည်ဆောက်ပါ။",
      },
      goal: {
        en: "Build a multi-page interactive application using components and state.",
        mm: "Component နှင့် state သုံး၍ စာမျက်နှာများစွာပါသော interactive application တစ်ခု တည်ဆောက်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 30,
      topics: [
        { en: "Components & props", mm: "Component & prop" },
        { en: "State & events", mm: "State & event" },
        { en: "Client-side routing", mm: "Client-side routing" },
        {
          en: "Managing data fetching in components",
          mm: "Component များတွင် data fetching စီမံခန့်ခွဲခြင်း",
        },
      ],
      prerequisiteSlugs: ["git"],
      resourceConnection: {
        en: "Verified frontend framework resources connect here once published.",
        mm: "Frontend framework ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A project building a multi-page frontend application connects here.",
        mm: "စာမျက်နှာများစွာပါသော frontend application တစ်ခု တည်ဆောက်သော ပရောဂျက်ကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "backend-fundamentals",
      title: { en: "Backend Fundamentals", mm: "Backend Fundamentals" },
      description: {
        en: "Build server-side applications that handle requests, run logic, and respond with data.",
        mm: "Request များကို ကိုင်တွယ်၊ logic run ပြီး ဒေတာဖြင့် တုံ့ပြန်သော server-side application များ တည်ဆောက်ပါ။",
      },
      goal: {
        en: "Build a server that handles multiple routes and responds with dynamic data.",
        mm: "Route များစွာကို ကိုင်တွယ်ပြီး dynamic data ဖြင့် တုံ့ပြန်သော server တစ်ခု တည်ဆောက်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 20,
      topics: [
        { en: "A backend runtime (e.g. Node.js)", mm: "Backend runtime (ဥပမာ Node.js)" },
        { en: "Routing & middleware", mm: "Routing & middleware" },
        { en: "Handling requests & responses", mm: "Request & response ကိုင်တွယ်ခြင်း" },
        { en: "Environment configuration", mm: "Environment configuration" },
      ],
      prerequisiteSlugs: ["frontend-framework"],
      resourceConnection: {
        en: "Verified backend fundamentals resources connect here once published.",
        mm: "Backend အခြေခံဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "databases",
      title: { en: "Databases & SQL", mm: "Databases & SQL" },
      description: {
        en: "Model, store, and query application data reliably using a relational database.",
        mm: "Relational database သုံး၍ application ဒေတာကို ယုံကြည်စိတ်ချရအောင် ပုံစံဆွဲ၊ သိမ်းဆည်း၊ query ပြုလုပ်ပါ။",
      },
      goal: {
        en: "Design a simple relational schema and query it confidently with SQL.",
        mm: "ရိုးရှင်းသော relational schema တစ်ခု ဒီဇိုင်းဆွဲပြီး SQL ဖြင့် စိတ်ချစွာ query ပြုလုပ်နိုင်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 20,
      topics: [
        { en: "Relational data modeling", mm: "Relational data modeling" },
        { en: "SQL fundamentals", mm: "SQL အခြေခံ" },
        { en: "Working with an ORM", mm: "ORM နှင့် အလုပ်လုပ်ခြင်း" },
        { en: "Migrations", mm: "Migration" },
      ],
      prerequisiteSlugs: ["backend-fundamentals"],
      resourceConnection: {
        en: "Verified database resources connect here once published.",
        mm: "Database ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "rest-apis",
      title: { en: "REST APIs", mm: "REST APIs" },
      description: {
        en: "Design and build APIs that let the frontend and backend communicate cleanly, and connect them into one working application.",
        mm: "Frontend နှင့် backend ကို ရှင်းလင်းစွာ ဆက်သွယ်စေမည့် API များကို ဒီဇိုင်းဆွဲ၊ တည်ဆောက်ပြီး အလုပ်လုပ်သော application တစ်ခုအဖြစ် ချိတ်ဆက်ပါ။",
      },
      goal: {
        en: "Connect a frontend application to a backend API you built yourself, backed by a real database.",
        mm: "Frontend application တစ်ခုကို database အမှန်တစ်ခုနှင့် ချိတ်ဆက်ထားသော ကိုယ်ပိုင် backend API နှင့် ချိတ်ဆက်နိုင်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 20,
      topics: [
        { en: "REST API design", mm: "REST API ဒီဇိုင်း" },
        { en: "Connecting frontend to backend", mm: "Frontend ကို backend နှင့် ချိတ်ဆက်ခြင်း" },
        { en: "Error handling", mm: "Error handling" },
        { en: "API documentation basics", mm: "API documentation အခြေခံ" },
      ],
      prerequisiteSlugs: ["databases"],
      resourceConnection: {
        en: "Verified REST API resources connect here once published.",
        mm: "REST API ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A project connecting a frontend app to your own backend API connects here.",
        mm: "Frontend app ကို ကိုယ်ပိုင် backend API နှင့် ချိတ်ဆက်သော ပရောဂျက်ကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "authentication-security",
      title: { en: "Authentication & Security", mm: "Authentication & Security" },
      description: {
        en: "Let users sign up and log in safely, and understand the most common security mistakes to avoid.",
        mm: "အသုံးပြုသူများ လုံခြုံစွာ sign up နှင့် log in ပြုလုပ်နိုင်စေပြီး အသုံးများသော security အမှားများကို နားလည်ပါ။",
      },
      goal: {
        en: "Add secure authentication to a full-stack application.",
        mm: "Full-stack application တစ်ခုတွင် လုံခြုံသော authentication ထည့်သွင်းခြင်း။",
      },
      difficulty: "intermediate",
      estimatedHours: 20,
      topics: [
        { en: "Sessions vs. tokens", mm: "Session vs. token" },
        { en: "Password hashing", mm: "Password hashing" },
        {
          en: "Common web vulnerabilities (e.g. XSS, SQL injection)",
          mm: "အသုံးများသော web အားနည်းချက်များ (ဥပမာ XSS, SQL injection)",
        },
        { en: "Authorization basics", mm: "Authorization အခြေခံ" },
      ],
      prerequisiteSlugs: ["rest-apis"],
      resourceConnection: {
        en: "Verified authentication & security resources connect here once published.",
        mm: "Authentication & security ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "testing",
      title: { en: "Testing", mm: "Testing" },
      description: {
        en: "Write automated tests that catch bugs before your users do, across both frontend and backend code.",
        mm: "Frontend နှင့် backend code နှစ်မျိုးလုံးတွင် အသုံးပြုသူများ မတွေ့ရမီ bug များကို ဖမ်းယူပေးမည့် automated test များ ရေးသားပါ။",
      },
      goal: {
        en: "Write meaningful unit and integration tests for a full-stack application.",
        mm: "Full-stack application တစ်ခုအတွက် အဓိပ္ပာယ်ရှိသော unit နှင့် integration test များ ရေးသားနိုင်ခြင်း။",
      },
      difficulty: "intermediate",
      estimatedHours: 15,
      topics: [
        { en: "Unit testing basics", mm: "Unit testing အခြေခံ" },
        { en: "Integration testing an API", mm: "API integration testing" },
        { en: "Testing frontend components", mm: "Frontend component များ testing ပြုလုပ်ခြင်း" },
        { en: "Test-driven development basics", mm: "Test-driven development အခြေခံ" },
      ],
      prerequisiteSlugs: ["authentication-security"],
      resourceConnection: {
        en: "Verified testing resources connect here once published.",
        mm: "Testing ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "deployment",
      title: { en: "Deployment", mm: "Deployment" },
      description: {
        en: "Take an application from your machine to the internet, and keep it running reliably.",
        mm: "Application တစ်ခုကို သင့်ကွန်ပျူတာမှ အင်တာနက်ပေါ်သို့ ယူဆောင်ပြီး ယုံကြည်စိတ်ချရအောင် ဆက်လက်လည်ပတ်စေပါ။",
      },
      goal: {
        en: "Deploy a full-stack application so real users can access it.",
        mm: "Full-stack application တစ်ခုကို တကယ့်အသုံးပြုသူများ အသုံးပြုနိုင်ရန် ထုတ်ဝေခြင်း။",
      },
      difficulty: "intermediate",
      estimatedHours: 15,
      topics: [
        { en: "Environment variables & configuration", mm: "Environment variable & configuration" },
        { en: "Deploying a frontend", mm: "Frontend ထုတ်ဝေခြင်း" },
        { en: "Deploying a backend & database", mm: "Backend & database ထုတ်ဝေခြင်း" },
        { en: "Basic monitoring", mm: "အခြေခံ monitoring" },
      ],
      prerequisiteSlugs: ["testing"],
      resourceConnection: {
        en: "Verified deployment resources connect here once published.",
        mm: "Deployment ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "projects",
      title: { en: "Projects", mm: "Projects" },
      description: {
        en: "Bring every earlier stage together into complete, portfolio-ready full-stack applications.",
        mm: "အစောပိုင်းအဆင့်အားလုံးကို ပေါင်းစပ်၍ portfolio-ready full-stack application များ ပြီးမြောက်အောင် ပြုလုပ်ပါ။",
      },
      goal: {
        en: "Build and document one or two complete full-stack projects for your portfolio.",
        mm: "Portfolio အတွက် ပြီးပြည့်စုံသော full-stack ပရောဂျက် တစ်ခု သို့မဟုတ် နှစ်ခုကို တည်ဆောက် မှတ်တမ်းတင်ခြင်း။",
      },
      difficulty: "advanced",
      estimatedHours: 30,
      topics: [
        {
          en: "Combining frontend, backend, database, and auth",
          mm: "Frontend, backend, database နှင့် auth ပေါင်းစပ်ခြင်း",
        },
        {
          en: "Documenting a project for a portfolio",
          mm: "Portfolio အတွက် ပရောဂျက် မှတ်တမ်းတင်ခြင်း",
        },
        {
          en: "Preparing to explain your work in interviews",
          mm: "အင်တာဗျူးတွင် သင့်အလုပ်ကို ရှင်းပြရန် ပြင်ဆင်ခြင်း",
        },
      ],
      prerequisiteSlugs: ["deployment"],
      resourceConnection: {
        en: "Project-focused resources and guidance connect here once published.",
        mm: "ပရောဂျက်ဗဟိုပြု အရင်းအမြစ်များနှင့် လမ်းညွှန်မှုများကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "This entire stage is dedicated to full end-to-end capstone projects.",
        mm: "ဤအဆင့်တစ်ခုလုံးသည် အစအဆုံး capstone ပရောဂျက်များအတွက် ဖြစ်သည်။",
      },
    },
    {
      slug: "career-ready",
      title: { en: "Career Ready", mm: "Career Ready" },
      description: {
        en: "Reaching the end of the roadmap is a real milestone — but career readiness is broader than roadmap completion alone.",
        mm: "လမ်းကြောင်း၏ အဆုံးသို့ရောက်ခြင်းသည် တကယ့်မှတ်တိုင်ဖြစ်သော်လည်း အသက်မွေးဝမ်းကျောင်း အဆင်သင့်ဖြစ်မှုသည် လမ်းကြောင်းပြီးဆုံးခြင်းထက် ပိုကျယ်ပါသည်။",
      },
      goal: {
        en: "Understand what else contributes to being job-ready beyond the roadmap.",
        mm: "လမ်းကြောင်းအပြင် အလုပ်လုပ်ရန် အဆင်သင့်ဖြစ်ရန် အခြားမည်သည့်အရာများ လိုအပ်ကြောင်း နားလည်ခြင်း။",
      },
      difficulty: "advanced",
      estimatedHours: 0,
      topics: [
        { en: "Portfolio review", mm: "Portfolio ပြန်လည်သုံးသပ်ခြင်း" },
        { en: "Interview preparation", mm: "အင်တာဗျူး ပြင်ဆင်ခြင်း" },
        { en: "Communication & teamwork", mm: "ဆက်သွယ်ရေးနှင့် အဖွဲ့လိုက်လုပ်ဆောင်နိုင်စွမ်း" },
      ],
      prerequisiteSlugs: ["projects"],
      resourceConnection: {
        en: "Interview preparation and portfolio guidance connect here once published.",
        mm: "အင်တာဗျူးပြင်ဆင်ခြင်းနှင့် portfolio လမ်းညွှန်မှုများကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      isMilestone: true,
    },
  ],
};
