import type { CareerRoadmap } from "@/types/roadmap";

/**
 * First complete roadmap example (ARCHITECTURE.md §9/§23). Additional
 * careers reuse the same `CareerRoadmap`/`RoadmapStage` shape and the same
 * components — see content/roadmaps/index.ts.
 */
export const CLOUD_DEVOPS_ROADMAP: CareerRoadmap = {
  careerSlug: "cloud-devops",
  title: { en: "Cloud / DevOps Roadmap", mm: "Cloud / DevOps သင်ယူမှုလမ်းကြောင်း" },
  description: {
    en: "A stage-by-stage path from computing fundamentals to deploying and operating production systems in the cloud.",
    mm: "ကွန်ပျူတာ အခြေခံမှသည် cloud ပေါ်တွင် production စနစ်များကို ထုတ်ဝေလည်ပတ်နိုင်သည်အထိ အဆင့်ဆင့် လမ်းကြောင်း။",
  },
  stages: [
    {
      slug: "foundation",
      title: { en: "Foundation", mm: "Foundation" },
      description: {
        en: "Get comfortable with how computers, the command line, and the internet actually work before moving to cloud-specific tools.",
        mm: "Cloud-specific tool များသို့ မသွားမီ ကွန်ပျူတာ၊ command line နှင့် အင်တာနက် မည်သို့အလုပ်လုပ်ကြောင်းကို ကျွမ်းကျင်အောင် လေ့လာပါ။",
      },
      goal: {
        en: "Build the baseline knowledge every later stage depends on.",
        mm: "နောက်ပိုင်းအဆင့်တိုင်း မှီခိုနေရသည့် အခြေခံဗဟုသုတကို တည်ဆောက်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 10,
      topics: [
        {
          en: "How computers & operating systems work",
          mm: "ကွန်ပျူတာနှင့် operating system အလုပ်လုပ်ပုံ",
        },
        { en: "The command line", mm: "Command line" },
        { en: "How the internet works", mm: "အင်တာနက် အလုပ်လုပ်ပုံ" },
      ],
      prerequisiteSlugs: [],
      resourceConnection: {
        en: "Beginner-friendly resources on computing fundamentals connect here once verified.",
        mm: "ကွန်ပျူတာအခြေခံဆိုင်ရာ လူသစ်များအတွက် အရင်းအမြစ်များကို အတည်ပြုပြီးနောက် ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "linux",
      title: { en: "Linux", mm: "Linux" },
      description: {
        en: "Learn to navigate, configure, and manage Linux systems from the command line — the operating system behind most servers.",
        mm: "Server အများစု၏ operating system ဖြစ်သော Linux စနစ်များကို command line မှတစ်ဆင့် ခြေရာခံ၊ ပြင်ဆင်၊ စီမံခန့်ခွဲနည်း သင်ယူပါ။",
      },
      goal: {
        en: "Be comfortable operating a Linux server without a graphical interface.",
        mm: "graphical interface မပါဘဲ Linux server ကို ကျွမ်းကျင်စွာ အသုံးပြုနိုင်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 20,
      topics: [
        { en: "Filesystem & permissions", mm: "Filesystem & permission" },
        { en: "Shell scripting basics", mm: "Shell scripting အခြေခံ" },
        { en: "Package management", mm: "Package management" },
        { en: "Process management", mm: "Process management" },
      ],
      prerequisiteSlugs: ["foundation"],
      resourceConnection: {
        en: "Verified Linux fundamentals resources connect here once published.",
        mm: "Linux အခြေခံဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ထုတ်ဝေပြီးနောက် ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A small project applying Linux administration tasks connects here.",
        mm: "Linux administration လုပ်ငန်းများ အသုံးချသော ပရောဂျက်ငယ်တစ်ခုကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "networking",
      title: { en: "Networking", mm: "Networking" },
      description: {
        en: "Understand how machines communicate — IP addressing, DNS, ports, and how requests travel between services.",
        mm: "စက်များ မည်သို့ ဆက်သွယ်ကြောင်း — IP address, DNS, port နှင့် request များ service များကြား မည်သို့ ခရီးသွားကြောင်း နားလည်ပါ။",
      },
      goal: {
        en: "Reason confidently about how services connect to each other.",
        mm: "Service များ တစ်ခုနှင့်တစ်ခု မည်သို့ ချိတ်ဆက်ကြောင်း စိတ်ချစွာ ဆင်ခြင်နိုင်ခြင်း။",
      },
      difficulty: "beginner",
      estimatedHours: 15,
      topics: [
        { en: "IP addressing & subnets", mm: "IP addressing & subnet" },
        { en: "DNS", mm: "DNS" },
        { en: "Ports & protocols", mm: "Port & protocol" },
        { en: "Firewalls & security groups", mm: "Firewall & security group" },
      ],
      prerequisiteSlugs: ["linux"],
      resourceConnection: {
        en: "Verified networking fundamentals resources connect here once published.",
        mm: "Networking အခြေခံဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
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
      prerequisiteSlugs: ["networking"],
      resourceConnection: {
        en: "Verified Git resources connect here once published.",
        mm: "Git ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "docker",
      title: { en: "Docker", mm: "Docker" },
      description: {
        en: "Package applications and their dependencies into containers that run consistently anywhere.",
        mm: "Application များနှင့် dependency များကို မည်သည့်နေရာတွင်မဆို တသမတ်တည်း အလုပ်လုပ်သော container များအဖြစ် ထုပ်ပိုးပါ။",
      },
      goal: {
        en: "Containerize an application and run multi-container setups.",
        mm: "Application တစ်ခုကို containerize ပြုလုပ်ပြီး multi-container setup များ လည်ပတ်နိုင်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 20,
      topics: [
        { en: "Images & containers", mm: "Image & container" },
        { en: "Dockerfiles", mm: "Dockerfile" },
        { en: "Docker networking", mm: "Docker networking" },
        { en: "Docker Compose", mm: "Docker Compose" },
      ],
      prerequisiteSlugs: ["git"],
      resourceConnection: {
        en: "Verified Docker resources connect here once published.",
        mm: "Docker ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A project dockerizing a full-stack application connects here.",
        mm: "Full-stack application တစ်ခုကို dockerize ပြုလုပ်သော ပရောဂျက်ကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "ci-cd",
      title: { en: "CI/CD", mm: "CI/CD" },
      description: {
        en: "Automate testing and deployment so code changes ship reliably and quickly.",
        mm: "Code အပြောင်းအလဲများကို ယုံကြည်စိတ်ချရပြီး မြန်ဆန်စွာ ထုတ်ဝေနိုင်ရန် testing နှင့် deployment ကို အလိုအလျောက်ပြုလုပ်ပါ။",
      },
      goal: {
        en: "Build a pipeline that tests and deploys code automatically.",
        mm: "Code ကို အလိုအလျောက် test လုပ်ပြီး deploy ပြုလုပ်သော pipeline တစ်ခု တည်ဆောက်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 15,
      topics: [
        { en: "Continuous integration basics", mm: "Continuous integration အခြေခံ" },
        { en: "Automated testing in pipelines", mm: "Pipeline ထဲရှိ automated testing" },
        { en: "Continuous deployment", mm: "Continuous deployment" },
        { en: "Pipeline tools (e.g. GitHub Actions)", mm: "Pipeline tool (ဥပမာ GitHub Actions)" },
      ],
      prerequisiteSlugs: ["docker"],
      resourceConnection: {
        en: "Verified CI/CD resources connect here once published.",
        mm: "CI/CD ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "cloud",
      title: { en: "Cloud", mm: "Cloud" },
      description: {
        en: "Understand core cloud computing concepts that apply across every provider.",
        mm: "Provider အားလုံးတွင် အသုံးချနိုင်သော cloud computing အခြေခံသဘောတရားများကို နားလည်ပါ။",
      },
      goal: {
        en: "Explain how cloud computing differs from traditional infrastructure.",
        mm: "Cloud computing သည် ရိုးရာ infrastructure နှင့် မည်သို့ ကွာခြားကြောင်း ရှင်းပြနိုင်ခြင်း။",
      },
      difficulty: "junior",
      estimatedHours: 10,
      topics: [
        { en: "IaaS, PaaS, and SaaS", mm: "IaaS, PaaS, SaaS" },
        { en: "Regions & availability zones", mm: "Region & availability zone" },
        { en: "Cloud pricing models", mm: "Cloud ဈေးနှုန်းပုံစံများ" },
        { en: "Shared responsibility model", mm: "Shared responsibility model" },
      ],
      prerequisiteSlugs: ["ci-cd"],
      resourceConnection: {
        en: "Verified cloud fundamentals resources connect here once published.",
        mm: "Cloud အခြေခံဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "aws",
      title: { en: "AWS", mm: "AWS" },
      description: {
        en: "Apply cloud fundamentals to a specific, widely-used provider: Amazon Web Services.",
        mm: "Cloud အခြေခံများကို တွင်ကျယ်စွာသုံးသော Amazon Web Services provider အပေါ် အသုံးချပါ။",
      },
      goal: {
        en: "Deploy and manage basic services on AWS.",
        mm: "AWS ပေါ်တွင် အခြေခံ service များကို ထုတ်ဝေ၊ စီမံခန့်ခွဲနိုင်ခြင်း။",
      },
      difficulty: "intermediate",
      estimatedHours: 25,
      topics: [
        { en: "Compute (EC2)", mm: "Compute (EC2)" },
        { en: "Storage (S3)", mm: "Storage (S3)" },
        { en: "Networking (VPC)", mm: "Networking (VPC)" },
        { en: "Identity & access management (IAM)", mm: "Identity & access management (IAM)" },
      ],
      prerequisiteSlugs: ["cloud"],
      resourceConnection: {
        en: "Verified AWS resources connect here once published.",
        mm: "AWS ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "infrastructure-as-code",
      title: { en: "Infrastructure as Code", mm: "Infrastructure as Code" },
      description: {
        en: "Define and provision infrastructure using code instead of manual configuration.",
        mm: "Infrastructure ကို လက်ဖြင့်ပြင်ဆင်မည့်အစား code သုံး၍ သတ်မှတ်ပြင်ဆင်ပါ။",
      },
      goal: {
        en: "Provision reproducible infrastructure from version-controlled code.",
        mm: "Version-control ထားသော code မှ ပြန်လည်ဖန်တီးနိုင်သော infrastructure ကို ပြင်ဆင်ခြင်း။",
      },
      difficulty: "intermediate",
      estimatedHours: 20,
      topics: [
        { en: "Declarative infrastructure concepts", mm: "Declarative infrastructure သဘောတရား" },
        { en: "Terraform basics", mm: "Terraform အခြေခံ" },
        { en: "State management", mm: "State management" },
        { en: "Modules & reuse", mm: "Module & ပြန်လည်အသုံးချခြင်း" },
      ],
      prerequisiteSlugs: ["aws"],
      resourceConnection: {
        en: "Verified Infrastructure as Code resources connect here once published.",
        mm: "Infrastructure as Code ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "kubernetes",
      title: { en: "Kubernetes", mm: "Kubernetes" },
      description: {
        en: "Orchestrate and scale containerized applications in production.",
        mm: "Production ထဲရှိ containerized application များကို orchestrate ပြုလုပ်ပြီး ချဲ့ထွင်ပါ။",
      },
      goal: {
        en: "Deploy and manage a containerized application on Kubernetes.",
        mm: "Kubernetes ပေါ်တွင် containerized application တစ်ခုကို ထုတ်ဝေ၊ စီမံခန့်ခွဲနိုင်ခြင်း။",
      },
      difficulty: "advanced",
      estimatedHours: 30,
      topics: [
        { en: "Pods, deployments & services", mm: "Pod, deployment & service" },
        { en: "Kubernetes networking", mm: "Kubernetes networking" },
        { en: "Scaling & self-healing", mm: "Scaling & self-healing" },
        { en: "Helm basics", mm: "Helm အခြေခံ" },
      ],
      prerequisiteSlugs: ["infrastructure-as-code"],
      resourceConnection: {
        en: "Verified Kubernetes resources connect here once published.",
        mm: "Kubernetes ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
      projectConnection: {
        en: "A project deploying a multi-service application to Kubernetes connects here.",
        mm: "Multi-service application တစ်ခုကို Kubernetes ပေါ်သို့ ထုတ်ဝေသော ပရောဂျက်ကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "monitoring-security",
      title: { en: "Monitoring/Security", mm: "Monitoring/Security" },
      description: {
        en: "Keep systems observable and secure once they're running in production.",
        mm: "Production တွင် လည်ပတ်နေစဉ် စနစ်များကို ကြည့်ရှုနိုင်ပြီး လုံခြုံအောင် ထိန်းသိမ်းပါ။",
      },
      goal: {
        en: "Set up monitoring, alerting, and basic security hardening for a deployed system.",
        mm: "ထုတ်ဝေထားသော စနစ်တစ်ခုအတွက် monitoring, alerting နှင့် အခြေခံ security hardening ကို စီစဉ်ခြင်း။",
      },
      difficulty: "advanced",
      estimatedHours: 20,
      topics: [
        { en: "Logging & metrics", mm: "Logging & metrics" },
        { en: "Alerting", mm: "Alerting" },
        { en: "Security hardening basics", mm: "Security hardening အခြေခံ" },
        { en: "Incident response basics", mm: "Incident response အခြေခံ" },
      ],
      prerequisiteSlugs: ["kubernetes"],
      resourceConnection: {
        en: "Verified monitoring & security resources connect here once published.",
        mm: "Monitoring & security ဆိုင်ရာ အတည်ပြုပြီးသား အရင်းအမြစ်များကို ဤနေရာတွင် ချိတ်ဆက်ပေးပါမည်။",
      },
    },
    {
      slug: "projects",
      title: { en: "Projects", mm: "Projects" },
      description: {
        en: "Bring every earlier stage together into complete, portfolio-ready projects.",
        mm: "အစောပိုင်းအဆင့်အားလုံးကို ပေါင်းစပ်၍ portfolio-ready ပရောဂျက်များ ပြီးမြောက်အောင် ပြုလုပ်ပါ။",
      },
      goal: {
        en: "Build and document one or two complete DevOps projects for your portfolio.",
        mm: "Portfolio အတွက် ပြီးပြည့်စုံသော DevOps ပရောဂျက် တစ်ခု သို့မဟုတ် နှစ်ခုကို တည်ဆောက် မှတ်တမ်းတင်ခြင်း။",
      },
      difficulty: "advanced",
      estimatedHours: 30,
      topics: [
        {
          en: "Combining CI/CD, containers, and cloud infrastructure",
          mm: "CI/CD, container နှင့် cloud infrastructure ပေါင်းစပ်ခြင်း",
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
      prerequisiteSlugs: ["monitoring-security"],
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
