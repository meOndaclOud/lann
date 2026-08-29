import { BarChart3, Cloud, Code2, Layers, Palette, ShieldCheck, Smartphone } from "lucide-react";

import type { Career, CareerSlug } from "@/types/career";

/**
 * Static career content (ARCHITECTURE.md §29 — structured content, not
 * scattered through components). Mirrors the `careers`/`career_skills`
 * table shape from ARCHITECTURE.md §10 so this can move to Supabase later
 * without changing how components consume it.
 *
 * Career/skill *names* stay identical across locales on purpose — they are
 * industry-standard technical terms, and INSTRUCTIONS.md §30 says technical
 * terminology should not be force-translated where it reduces clarity.
 */
export const CAREERS: Career[] = [
  {
    slug: "full-stack-development",
    icon: Layers,
    name: { en: "Full-Stack Development", mm: "Full-Stack Development" },
    shortDescription: {
      en: "Build complete web applications, from user interface to server and database.",
      mm: "user interface မှသည် server နှင့် database အထိ ပြည့်စုံသော web application များကို တည်ဆောက်ခြင်း။",
    },
    roleIntroduction: {
      en: "A full-stack developer works across the entire application — the interface users see, the server logic behind it, and the database that stores everything. You'll move fluidly between frontend and backend work.",
      mm: "Full-stack developer သည် application တစ်ခုလုံးတွင် အလုပ်လုပ်သည် — အသုံးပြုသူမြင်ရသော interface၊ နောက်ကွယ်ရှိ server logic နှင့် အရာအားလုံးကို သိမ်းဆည်းသော database။ frontend နှင့် backend အလုပ်များကြား လွယ်ကူစွာ ရွှေ့ပြောင်းလုပ်ဆောင်နိုင်မည်ဖြစ်သည်။",
    },
    whyThisCareer: {
      en: "Full-stack skills make you flexible: you can build a complete product end-to-end, work effectively on small teams, and understand how every layer of an application fits together.",
      mm: "Full-stack ကျွမ်းကျင်မှုသည် သင့်ကို လိုက်လျောညီထွေ ဖြစ်စေသည် — ထုတ်ကုန်တစ်ခုလုံးကို အစအဆုံး တည်ဆောက်နိုင်ပြီး၊ team သေးသေးလေးများတွင် ထိရောက်စွာ အလုပ်လုပ်နိုင်ကာ application ၏ layer တိုင်း မည်သို့ ပေါင်းစပ်ကြောင်း နားလည်စေသည်။",
    },
    myanmarContext: {
      en: "Myanmar's growing startup and freelance market often needs generalists who can build and ship a whole product without a large team, making full-stack skills especially practical locally.",
      mm: "မြန်မာနိုင်ငံ၏ တိုးပွားလာသော startup နှင့် freelance ဈေးကွက်သည် team ကြီးကြီးမလိုဘဲ ထုတ်ကုန်တစ်ခုလုံးကို တည်ဆောက်ထုတ်ဝေနိုင်သူများကို မကြာခဏ လိုအပ်သဖြင့် full-stack ကျွမ်းကျင်မှုသည် ဒေသတွင်း အထူးအသုံးဝင်ပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who enjoy seeing a project come together completely, and who don't want to specialize narrowly right away.",
      mm: "project တစ်ခုလုံး ပြီးမြောက်လာသည်ကို မြင်ရလိုပြီး ယခုချက်ချင်း ကျဉ်းမြောင်းစွာ အထူးပြုမလုပ်လိုသေးသူများအတွက်။",
    },
    careerProgression: {
      en: "Junior Full-Stack Developer → Full-Stack Developer → Senior Full-Stack Developer → Tech Lead / Software Architect",
      mm: "Junior Full-Stack Developer → Full-Stack Developer → Senior Full-Stack Developer → Tech Lead / Software Architect",
    },
    skills: [
      { name: { en: "HTML & CSS", mm: "HTML & CSS" } },
      { name: { en: "JavaScript / TypeScript", mm: "JavaScript / TypeScript" } },
      { name: { en: "A frontend framework (e.g. React)", mm: "Frontend framework (ဥပမာ React)" } },
      { name: { en: "A backend runtime (e.g. Node.js)", mm: "Backend runtime (ဥပမာ Node.js)" } },
      { name: { en: "Databases & SQL", mm: "Database & SQL" } },
      { name: { en: "Git & version control", mm: "Git & version control" } },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    name: { en: "Mobile App Development", mm: "Mobile App Development" },
    shortDescription: {
      en: "Design and build apps that run natively on phones and tablets.",
      mm: "ဖုန်းနှင့် တက်ဘလက်များပေါ်တွင် native အနေဖြင့် အလုပ်လုပ်သော အက်ပ်များကို ဒီဇိုင်းဆွဲပြီး တည်ဆောက်ခြင်း။",
    },
    roleIntroduction: {
      en: "Mobile developers build the apps people use every day on iOS and Android — from the interface to how the app talks to servers and stores data on-device.",
      mm: "Mobile developer များသည် လူများ နေ့စဉ်သုံးနေသော iOS နှင့် Android အက်ပ်များကို တည်ဆောက်ကြသည် — interface မှသည် server နှင့် ဆက်သွယ်ပုံနှင့် device ပေါ်တွင် ဒေတာသိမ်းဆည်းပုံအထိ။",
    },
    whyThisCareer: {
      en: "Phones are most people's primary computer. Mobile development lets you build products that reach users directly, often with tighter performance and platform constraints than the web.",
      mm: "လူအများစုအတွက် ဖုန်းသည် အဓိက ကွန်ပျူတာဖြစ်သည်။ Mobile development သည် အသုံးပြုသူများထံ တိုက်ရိုက်ရောက်ရှိမည့် ထုတ်ကုန်များကို တည်ဆောက်ခွင့်ပေးပြီး web ထက် performance နှင့် platform ကန့်သတ်ချက်များ ပိုတင်းကျပ်လေ့ရှိသည်။",
    },
    myanmarContext: {
      en: "With mobile-first internet usage widespread in Myanmar, mobile app skills are directly relevant to reaching everyday users, including in areas with limited desktop access.",
      mm: "မြန်မာနိုင်ငံတွင် mobile-first internet အသုံးပြုမှု ကျယ်ပြန့်နေသဖြင့်၊ mobile app ကျွမ်းကျင်မှုများသည် desktop အသုံးပြုခွင့် နည်းပါးသောနေရာများအပါအဝင် နေ့စဉ်အသုံးပြုသူများထံ ရောက်ရှိရန် တိုက်ရိုက်သက်ဆိုင်ပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who want to build hands-on products for phones and enjoy working closely with platform-specific tools and constraints.",
      mm: "ဖုန်းများအတွက် လက်တွေ့ကျသော ထုတ်ကုန်များ တည်ဆောက်လိုပြီး platform-specific tool များနှင့် ကန့်သတ်ချက်များနှင့် နီးကပ်စွာ အလုပ်လုပ်ရသည်ကို နှစ်သက်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior Mobile Developer → Mobile Developer → Senior Mobile Developer → Mobile Tech Lead",
      mm: "Junior Mobile Developer → Mobile Developer → Senior Mobile Developer → Mobile Tech Lead",
    },
    skills: [
      { name: { en: "Kotlin or Swift", mm: "Kotlin or Swift" } },
      { name: { en: "React Native or Flutter", mm: "React Native or Flutter" } },
      { name: { en: "Mobile UI patterns", mm: "Mobile UI pattern" } },
      { name: { en: "REST/GraphQL APIs", mm: "REST/GraphQL API" } },
      { name: { en: "App store deployment", mm: "App store deployment" } },
      { name: { en: "Git & version control", mm: "Git & version control" } },
    ],
  },
  {
    slug: "software-engineering",
    icon: Code2,
    name: { en: "Software Engineering", mm: "Software Engineering" },
    shortDescription: {
      en: "Design, build, and maintain reliable software systems at scale.",
      mm: "ယုံကြည်စိတ်ချရပြီး ချဲ့ထွင်နိုင်သော software စနစ်များကို ဒီဇိုင်းဆွဲ၊ တည်ဆောက်ပြီး ထိန်းသိမ်းခြင်း။",
    },
    roleIntroduction: {
      en: "Software engineers focus on the fundamentals that apply across any stack: data structures, system design, testing, and writing maintainable code for systems that need to work reliably over time.",
      mm: "Software engineer များသည် မည်သည့် stack တွင်မဆို အသုံးချနိုင်သော အခြေခံအုတ်မြစ်များ — data structure၊ system design၊ testing နှင့် အချိန်ကြာလာသော်လည်း ယုံကြည်စိတ်ချရသော code ရေးသားခြင်းအပေါ် အာရုံစိုက်ကြသည်။",
    },
    whyThisCareer: {
      en: "This path builds a deep, transferable foundation. It prepares you not just for one framework or tool, but for solving problems well across many kinds of software.",
      mm: "ဤလမ်းကြောင်းသည် နက်နဲပြီး လွှဲပြောင်းအသုံးချနိုင်သော အခြေခံကို တည်ဆောက်ပေးသည်။ framework သို့မဟုတ် tool တစ်ခုတည်းအတွက်သာမက software အမျိုးမျိုးရှိ ပြဿနာများကို ကောင်းစွာဖြေရှင်းနိုင်ရန် ပြင်ဆင်ပေးသည်။",
    },
    myanmarContext: {
      en: "Strong software engineering fundamentals are highly portable — valuable for local companies, international remote roles, and freelance work alike.",
      mm: "ခိုင်မာသော software engineering အခြေခံများသည် local ကုမ္ပဏီများ၊ နိုင်ငံတကာ remote အလုပ်များနှင့် freelance အလုပ်များအတွက်ပါ တန်ဖိုးရှိပြီး ရွှေ့ပြောင်းသုံးနိုင်ပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who enjoy problem-solving and want a foundation that isn't tied to one specific framework or tool.",
      mm: "ပြဿနာဖြေရှင်းခြင်းကို နှစ်သက်ပြီး framework သို့မဟုတ် tool တစ်ခုတည်းနှင့် မချည်နှောင်ထားသော အခြေခံကို လိုချင်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior Software Engineer → Software Engineer → Senior Software Engineer → Staff Engineer / Engineering Manager",
      mm: "Junior Software Engineer → Software Engineer → Senior Software Engineer → Staff Engineer / Engineering Manager",
    },
    skills: [
      { name: { en: "Data structures & algorithms", mm: "Data structure & algorithm" } },
      {
        name: {
          en: "A general-purpose language (e.g. Python, Java, Go)",
          mm: "General-purpose language (ဥပမာ Python, Java, Go)",
        },
      },
      { name: { en: "System design basics", mm: "System design အခြေခံ" } },
      { name: { en: "Testing & debugging", mm: "Testing & debugging" } },
      { name: { en: "Git & version control", mm: "Git & version control" } },
      { name: { en: "Problem solving", mm: "ပြဿနာဖြေရှင်းနိုင်စွမ်း" } },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    name: { en: "UI/UX Design", mm: "UI/UX Design" },
    shortDescription: {
      en: "Design digital products that are usable, accessible, and enjoyable.",
      mm: "အသုံးပြုရလွယ်ကူ၊ လူတိုင်းအသုံးပြုနိုင်ပြီး နှစ်သက်ဖွယ်ကောင်းသော ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို ဒီဇိုင်းဆွဲခြင်း။",
    },
    roleIntroduction: {
      en: "UI/UX designers research how people use a product, then design interfaces and flows that are clear, accessible, and pleasant to use — working closely with engineers to bring designs to life.",
      mm: "UI/UX designer များသည် လူများ ထုတ်ကုန်တစ်ခုကို မည်သို့အသုံးပြုကြောင်း လေ့လာပြီးနောက် ရှင်းလင်း၊ အားလုံးအသုံးပြုနိုင်ပြီး သုံးရလွယ်ကူသော interface နှင့် flow များကို ဒီဇိုင်းဆွဲကြသည် — ဒီဇိုင်းများကို လက်တွေ့ဖြစ်လာစေရန် engineer များနှင့် နီးကပ်စွာ ပူးပေါင်းလုပ်ဆောင်ကြသည်။",
    },
    whyThisCareer: {
      en: "Good design is what separates a working product from a product people actually want to use. This path blends creativity, empathy for users, and structured problem-solving.",
      mm: "ကောင်းမွန်သော ဒီဇိုင်းသည် အလုပ်လုပ်တတ်သော ထုတ်ကုန်နှင့် လူများ တကယ်သုံးလိုသော ထုတ်ကုန်၏ ကွာခြားချက်ဖြစ်သည်။ ဤလမ်းကြောင်းသည် ဖန်တီးမှု၊ အသုံးပြုသူအပေါ် ကိုယ်ချင်းစာနာမှုနှင့် စနစ်တကျ ပြဿနာဖြေရှင်းမှုကို ပေါင်းစပ်ထားသည်။",
    },
    myanmarContext: {
      en: "As more Myanmar businesses go digital, thoughtful design — including support for Burmese text and local user habits — is increasingly in demand.",
      mm: "မြန်မာစီးပွားရေးလုပ်ငန်းများ ဒစ်ဂျစ်တယ်ဘက်သို့ ပိုမိုပြောင်းလဲလာသည်နှင့်အမျှ၊ မြန်မာစာအထောက်အပံ့နှင့် local အသုံးပြုသူအလေ့အထများ ပါဝင်သော ဂရုတစိုက်ဒီဇိုင်းများကို လိုအပ်မှု တိုးပွားလာပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who think visually, care about how people experience a product, and enjoy both creative and analytical work.",
      mm: "မြင်ကွင်းအရ စဉ်းစားတတ်ပြီး လူများ ထုတ်ကုန်တစ်ခုကို မည်သို့ ခံစားရကြောင်း ဂရုစိုက်ကာ ဖန်တီးမှုနှင့် စိစစ်လေ့လာမှု နှစ်မျိုးလုံးကို နှစ်သက်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior UI/UX Designer → UI/UX Designer → Senior Product Designer → Design Lead",
      mm: "Junior UI/UX Designer → UI/UX Designer → Senior Product Designer → Design Lead",
    },
    skills: [
      { name: { en: "User research basics", mm: "User research အခြေခံ" } },
      { name: { en: "Wireframing & prototyping", mm: "Wireframing & prototyping" } },
      { name: { en: "Visual design & typography", mm: "Visual design & typography" } },
      { name: { en: "Accessibility fundamentals", mm: "Accessibility အခြေခံ" } },
      { name: { en: "Design tools (e.g. Figma)", mm: "Design tool (ဥပမာ Figma)" } },
      {
        name: {
          en: "Collaborating with engineers",
          mm: "Engineer များနှင့် ပူးပေါင်းလုပ်ဆောင်ခြင်း",
        },
      },
    ],
  },
  {
    slug: "data-analysis",
    icon: BarChart3,
    name: { en: "Data Analysis", mm: "Data Analysis" },
    shortDescription: {
      en: "Turn raw data into clear insights that inform real decisions.",
      mm: "ကုန်ကြမ်းဒေတာများကို လက်တွေ့ဆုံးဖြတ်ချက်များအတွက် အသုံးဝင်သော ထိုးထွင်းသိမြင်မှုများအဖြစ် ပြောင်းလဲခြင်း။",
    },
    roleIntroduction: {
      en: "Data analysts collect, clean, and explore data, then present findings in a way that helps teams make informed decisions — using spreadsheets, SQL, and visualization tools.",
      mm: "Data analyst များသည် ဒေတာများကို စုဆောင်း၊ သန့်စင်ပြီး လေ့လာစိစစ်ကာ team များ သတိပြု ဆုံးဖြတ်ချက်ချနိုင်ရန် spreadsheet၊ SQL နှင့် visualization tool များသုံး၍ ရလဒ်များကို တင်ပြကြသည်။",
    },
    whyThisCareer: {
      en: "Almost every industry now runs on data. This path builds analytical thinking skills that apply well beyond tech, into business, health, and government.",
      mm: "ယခုအခါ လုပ်ငန်းနယ်ပယ်တိုင်းနီးပါးသည် ဒေတာပေါ်တွင် အခြေခံနေသည်။ ဤလမ်းကြောင်းသည် နည်းပညာကျော်လွန်၍ စီးပွားရေး၊ ကျန်းမာရေးနှင့် အစိုးရနယ်ပယ်များတွင်ပါ အသုံးချနိုင်သော ခွဲခြမ်းစိတ်ဖြာ စဉ်းစားနိုင်စွမ်းကို တည်ဆောက်ပေးသည်။",
    },
    myanmarContext: {
      en: "As more Myanmar organizations start tracking digital data, the ability to clean and interpret that data — accurately and clearly — is a practical, growing need.",
      mm: "မြန်မာအဖွဲ့အစည်းများ ဒစ်ဂျစ်တယ်ဒေတာကို ပိုမိုခြေရာခံလာကြသည်နှင့်အမျှ၊ ထိုဒေတာကို တိကျစွာ သန့်စင်ပြီး အနက်ဖွင့်နိုင်စွမ်းသည် လက်တွေ့ကျပြီး တိုးပွားလာသော လိုအပ်ချက်ဖြစ်သည်။",
    },
    whoIsThisFor: {
      en: "For learners who enjoy working with numbers, spotting patterns, and explaining what data actually means.",
      mm: "ဂဏန်းများနှင့် အလုပ်လုပ်ခြင်း၊ ပုံစံများ ရှာဖွေတွေ့ရှိခြင်းနှင့် ဒေတာအဓိပ္ပာယ်ကို ရှင်းရှင်းလင်းလင်း ရှင်းပြခြင်းကို နှစ်သက်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior Data Analyst → Data Analyst → Senior Data Analyst → Analytics Lead / Data Scientist",
      mm: "Junior Data Analyst → Data Analyst → Senior Data Analyst → Analytics Lead / Data Scientist",
    },
    skills: [
      { name: { en: "Spreadsheets", mm: "Spreadsheet" } },
      { name: { en: "SQL", mm: "SQL" } },
      { name: { en: "Data visualization", mm: "Data visualization" } },
      { name: { en: "Statistics basics", mm: "Statistics အခြေခံ" } },
      { name: { en: "Python for data (e.g. pandas)", mm: "Data အတွက် Python (ဥပမာ pandas)" } },
      {
        name: {
          en: "Clear communication of findings",
          mm: "တွေ့ရှိချက်များ ရှင်းလင်းစွာ ဆက်သွယ်ဖော်ပြနိုင်စွမ်း",
        },
      },
    ],
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    name: { en: "Cloud / DevOps", mm: "Cloud / DevOps" },
    shortDescription: {
      en: "Deploy, automate, and operate reliable systems in the cloud.",
      mm: "cloud ပေါ်တွင် ယုံကြည်စိတ်ချရသော စနစ်များကို တင်ခြင်း၊ အလိုအလျောက်ပြုလုပ်ခြင်းနှင့် လည်ပတ်ခြင်း။",
    },
    roleIntroduction: {
      en: "Cloud/DevOps engineers build and maintain the infrastructure applications run on — servers, containers, deployment pipelines, and monitoring — so software ships reliably and stays running.",
      mm: "Cloud/DevOps engineer များသည် application များ အလုပ်လုပ်ရာ infrastructure — server, container, deployment pipeline နှင့် monitoring — ကို တည်ဆောက်ထိန်းသိမ်းကြသဖြင့် software များ ယုံကြည်စိတ်ချရစွာ ထုတ်ဝေနိုင်ပြီး ဆက်လက်လည်ပတ်နေစေသည်။",
    },
    whyThisCareer: {
      en: "As more systems move to the cloud, the ability to automate deployment and keep systems reliable is one of the most in-demand technical skill sets.",
      mm: "စနစ်များ cloud ပေါ်သို့ ပိုမိုပြောင်းရွှေ့လာသည်နှင့်အမျှ၊ deployment ကို အလိုအလျောက်ပြုလုပ်ပြီး စနစ်များ ယုံကြည်စိတ်ချရအောင် ထိန်းသိမ်းနိုင်စွမ်းသည် လက်ရှိအလိုအရှိဆုံး နည်းပညာကျွမ်းကျင်မှုများထဲမှ တစ်ခုဖြစ်သည်။",
    },
    myanmarContext: {
      en: "Cloud and DevOps skills are highly transferable to remote and international roles, and are increasingly relevant as Myanmar businesses adopt cloud infrastructure.",
      mm: "Cloud နှင့် DevOps ကျွမ်းကျင်မှုများသည် remote နှင့် နိုင်ငံတကာအလုပ်များသို့ လွယ်ကူစွာ ရွှေ့ပြောင်းအသုံးချနိုင်ပြီး၊ မြန်မာစီးပွားရေးလုပ်ငန်းများ cloud infrastructure ကို အသုံးပြုလာသည်နှင့်အမျှ ပိုမိုသက်ဆိုင်လာပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who enjoy systems thinking, automation, and making things run reliably behind the scenes.",
      mm: "စနစ်ကျ စဉ်းစားနိုင်ခြင်း၊ automation နှင့် နောက်ကွယ်မှ အရာအားလုံး ယုံကြည်စိတ်ချရအောင် လုပ်ဆောင်ခြင်းကို နှစ်သက်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior DevOps Engineer → DevOps Engineer → Senior DevOps / Cloud Engineer → Platform / Infrastructure Lead",
      mm: "Junior DevOps Engineer → DevOps Engineer → Senior DevOps / Cloud Engineer → Platform / Infrastructure Lead",
    },
    skills: [
      { name: { en: "Linux fundamentals", mm: "Linux အခြေခံ" } },
      { name: { en: "Networking basics", mm: "Networking အခြေခံ" } },
      { name: { en: "Git", mm: "Git" } },
      { name: { en: "Docker", mm: "Docker" } },
      { name: { en: "CI/CD pipelines", mm: "CI/CD pipeline" } },
      { name: { en: "A cloud platform (e.g. AWS)", mm: "Cloud platform (ဥပမာ AWS)" } },
      { name: { en: "Infrastructure as Code", mm: "Infrastructure as Code" } },
      { name: { en: "Kubernetes basics", mm: "Kubernetes အခြေခံ" } },
    ],
  },
  {
    slug: "cybersecurity",
    icon: ShieldCheck,
    name: { en: "Cybersecurity", mm: "Cybersecurity" },
    shortDescription: {
      en: "Protect systems, networks, and data from real-world threats.",
      mm: "စနစ်များ၊ ကွန်ရက်များနှင့် ဒေတာများကို အမှန်တကယ်ခြိမ်းခြောက်မှုများမှ ကာကွယ်ခြင်း။",
    },
    roleIntroduction: {
      en: "Cybersecurity professionals identify vulnerabilities, defend systems against attacks, and respond when something goes wrong — combining networking, systems, and security-specific knowledge.",
      mm: "Cybersecurity ပညာရှင်များသည် အားနည်းချက်များကို ရှာဖွေတွေ့ရှိပြီး၊ တိုက်ခိုက်မှုများမှ စနစ်များကို ကာကွယ်ကာ၊ ပြဿနာတစ်စုံတစ်ရာဖြစ်ပေါ်လာလျှင် တုံ့ပြန်ဆောင်ရွက်ကြသည် — networking၊ system နှင့် security-specific ဗဟုသုတများကို ပေါင်းစပ်အသုံးပြုကြသည်။",
    },
    whyThisCareer: {
      en: "As more of daily life and business moves online, the need to protect systems and data continues to grow, across nearly every industry.",
      mm: "နေ့စဉ်ဘဝနှင့် စီးပွားရေးလုပ်ငန်းများ အွန်လိုင်းဘက်သို့ ပိုမိုရွှေ့ပြောင်းလာသည်နှင့်အမျှ၊ စနစ်များနှင့် ဒေတာများကို ကာကွယ်ရန် လိုအပ်ချက်သည် လုပ်ငန်းနယ်ပယ်အားလုံးနီးပါးတွင် ဆက်လက်တိုးပွားနေပါသည်။",
    },
    myanmarContext: {
      en: "As Myanmar businesses and services digitize, basic and advanced security awareness is becoming essential — both as a specialist career and as a skill every technologist benefits from.",
      mm: "မြန်မာစီးပွားရေးလုပ်ငန်းများနှင့် ဝန်ဆောင်မှုများ ဒစ်ဂျစ်တယ်ဖြစ်လာသည်နှင့်အမျှ၊ အခြေခံနှင့် အဆင့်မြင့် security သိမြင်မှုသည် အထူးကျွမ်းကျင်ရာအလုပ်တစ်ခုအနေဖြင့်သာမက နည်းပညာရှင်တိုင်း အကျိုးရှိစေမည့် ကျွမ်းကျင်မှုတစ်ခုအနေဖြင့်ပါ မရှိမဖြစ် လိုအပ်လာပါသည်။",
    },
    whoIsThisFor: {
      en: "For learners who enjoy thinking like both an attacker and a defender, and who are detail-oriented and methodical.",
      mm: "တိုက်ခိုက်သူနှင့် ကာကွယ်သူနှစ်ဦးစလုံးအလား စဉ်းစားတတ်ပြီး အသေးစိတ်ဂရုစိုက်တတ်သော၊ စနစ်တကျလုပ်ဆောင်တတ်သူများအတွက်။",
    },
    careerProgression: {
      en: "Junior Security Analyst → Security Analyst → Senior Security Engineer → Security Lead / Architect",
      mm: "Junior Security Analyst → Security Analyst → Senior Security Engineer → Security Lead / Architect",
    },
    skills: [
      { name: { en: "Networking fundamentals", mm: "Networking အခြေခံ" } },
      { name: { en: "Linux fundamentals", mm: "Linux အခြေခံ" } },
      {
        name: {
          en: "Common vulnerabilities & attacks",
          mm: "အသုံးများသော အားနည်းချက်များနှင့် တိုက်ခိုက်မှုများ",
        },
      },
      { name: { en: "Security tools basics", mm: "Security tool အခြေခံ" } },
      { name: { en: "Incident response basics", mm: "Incident response အခြေခံ" } },
      { name: { en: "Secure coding awareness", mm: "Secure coding သိမြင်မှု" } },
    ],
  },
];

export function getCareerBySlug(slug: string): Career | undefined {
  return CAREERS.find((career) => career.slug === slug);
}

export function getAllCareerSlugs(): CareerSlug[] {
  return CAREERS.map((career) => career.slug);
}
