import type { CareerRoadmap, RoadmapStage, CareerProject, CareerRoadmapResources } from '../types/roadmap.ts'
import { cloudDevOpsTopicDetails } from './cloudDevOpsTopicDetails.ts'
import { softwareEngineeringTopicDetails } from './softwareEngineeringTopicDetails.ts'
import { fullStackTopicDetails } from './fullStackTopicDetails.ts'
import { mobileDevelopmentTopicDetails } from './mobileDevelopmentTopicDetails.ts'
import { uiUxDesignTopicDetails } from './uiUxDesignTopicDetails.ts'
import { dataAnalysisTopicDetails } from './dataAnalysisTopicDetails.ts'
import { cybersecurityTopicDetails } from './cybersecurityTopicDetails.ts'
import { networkingTopicDetails } from './networkingTopicDetails.ts'

type Level = 'beginner' | 'core' | 'intermediate' | 'advanced'
type Pair = [string, string]

function emptyResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [],
    myanmarYoutubeChannels: [],
    freeMyanmarResources: [],
    burmeseDigitalBooks: [],
  }
}

/**
 * Real, verified Myanmar/Burmese learning resources — found via web search
 * and confirmed by fetching the actual source pages, never invented (see
 * CLAUDE.md's "never fabricate a resource" rule). Only careers with a
 * genuinely verified resource get one; the rest keep emptyResources() and
 * an honest "coming soon" state rather than a forced, low-quality fit.
 */
function softwareEngineeringResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [
      {
        id: 'se-senior-1',
        title: 'Rockstar Developer 2025',
        description:
          'Full-stack JavaScript development guide covering agile practices, Git, Docker, and back-end architecture — written in Burmese by a senior Myanmar web developer.',
        type: 'book',
        language: 'my',
        difficulty: 'advanced',
        creator: 'Ei Maung (ဆရာအိမောင်)',
        creatorType: 'myanmar-senior',
        url: 'https://eimaung.com/rsd2025/',
        isFree: true,
        topic: 'software-architecture',
        verified: true,
      },
    ],
    myanmarYoutubeChannels: [],
    freeMyanmarResources: [
      {
        id: 'se-free-1',
        title: 'Programming Basic',
        description: 'A free introductory programming book in Burmese covering core programming fundamentals.',
        type: 'book',
        language: 'my',
        difficulty: 'beginner',
        creator: 'Saturngod',
        creatorType: 'myanmar-community',
        url: 'https://books.saturngod.net/programming_basic/',
        isFree: true,
        topic: 'programming-fundamentals',
        verified: true,
      },
    ],
    burmeseDigitalBooks: [
      {
        id: 'se-book-1',
        title: 'OOP & Design Pattern',
        description: 'A free Burmese-language guide to object-oriented programming and design patterns, published on GitHub.',
        type: 'book',
        language: 'my',
        difficulty: 'intermediate',
        creator: 'Ko Thet Khaing (ကိုသက်ခိုင်)',
        creatorType: 'myanmar-community',
        url: 'https://github.com/mrthetkhine/designpattern',
        isFree: true,
        topic: 'oop-design-patterns',
        verified: true,
      },
    ],
  }
}

function fullStackResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [
      {
        id: 'fs-senior-1',
        title: 'Professional Web Developer 2023',
        description:
          'A comprehensive Burmese-language web development guide covering HTML, CSS, JavaScript, PHP, Laravel, React, and Node — by a senior Myanmar web developer and Managing Partner at Fairway Technology.',
        type: 'book',
        language: 'my',
        difficulty: 'intermediate',
        creator: 'Ei Maung (ဆရာအိမောင်)',
        creatorType: 'myanmar-senior',
        url: 'https://eimaung.com/pwd2023/',
        isFree: true,
        topic: 'full-stack-web-development',
        verified: true,
      },
    ],
    myanmarYoutubeChannels: [],
    freeMyanmarResources: [
      {
        id: 'fs-free-1',
        title: 'HTML & CSS – Beginner to Super Beginner',
        description: 'A free open-source ebook teaching HTML and CSS from the very beginning, in Burmese.',
        type: 'book',
        language: 'my',
        difficulty: 'beginner',
        creator: 'Lwin Moe Paing',
        creatorType: 'myanmar-community',
        url: 'https://github.com/lwinmoepaing/html-and-css-beginner-to-super-beginner-ebook',
        isFree: true,
        topic: 'html-css',
        verified: true,
      },
    ],
    burmeseDigitalBooks: [
      {
        id: 'fs-book-1',
        title: 'JavaScript လို-တို-ရှင်း',
        description: 'A concise, beginner-friendly JavaScript book written in Burmese.',
        type: 'book',
        language: 'my',
        difficulty: 'beginner',
        creator: 'Ei Maung (ဆရာအိမောင်)',
        creatorType: 'myanmar-senior',
        url: 'https://eimaung.com/jsbook',
        isFree: true,
        topic: 'javascript',
        verified: true,
      },
    ],
  }
}

function uiUxResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [],
    myanmarYoutubeChannels: [
      {
        id: 'ux-yt-1',
        title: 'UXMM YouTube Channel',
        description: "Video content sharing UI/UX design knowledge, from UXMM — Myanmar's largest non-profit design community.",
        type: 'video',
        language: 'my',
        difficulty: 'beginner',
        creator: 'UXMM',
        creatorType: 'myanmar-community',
        url: 'https://www.youtube.com/channel/UClLaxKGmw5yR1w8aBtCNV_w',
        isFree: true,
        topic: 'ui-ux-design',
        verified: true,
      },
    ],
    freeMyanmarResources: [],
    burmeseDigitalBooks: [],
  }
}

function dataAnalysisResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [],
    myanmarYoutubeChannels: [],
    freeMyanmarResources: [],
    burmeseDigitalBooks: [
      {
        id: 'da-book-1',
        title: 'sql101',
        description: 'A free Burmese-language introduction to SQL and relational databases.',
        type: 'book',
        language: 'my',
        difficulty: 'beginner',
        creator: 'Hlwai Tin Htaung (လှိုင်တင်ထွန်း)',
        creatorType: 'myanmar-community',
        url: 'https://sql101.aprogrammer.blog/',
        isFree: true,
        topic: 'sql',
        verified: true,
      },
    ],
  }
}

function cloudDevOpsResources(): CareerRoadmapResources {
  return {
    myanmarSeniorResources: [
      {
        id: 'cd-senior-1',
        title: 'Ubuntu: Linux for You',
        description:
          'A Burmese-language guide to Ubuntu Linux fundamentals for developers, by a senior Myanmar web developer (listed among his books at the linked site).',
        type: 'book',
        language: 'my',
        difficulty: 'beginner',
        creator: 'Ei Maung (ဆရာအိမောင်)',
        creatorType: 'myanmar-senior',
        url: 'https://eimaung.com/',
        isFree: true,
        topic: 'linux-fundamentals',
        verified: true,
      },
    ],
    myanmarYoutubeChannels: [],
    freeMyanmarResources: [],
    burmeseDigitalBooks: [],
  }
}

/** Attaches authored deep-dive content to topics that have it, leaving the rest unchanged. */
function withTopicDetails(stages: RoadmapStage[], detailsByTopicId: Record<string, RoadmapStage['topics'][number]['detail']>): RoadmapStage[] {
  return stages.map((stage) => ({
    ...stage,
    topics: stage.topics.map((topic) => {
      const detail = detailsByTopicId[topic.id]
      return detail ? { ...topic, detail } : topic
    }),
  }))
}

const stageTitles: Record<Level, Pair> = {
  beginner: ['Beginner Foundation', 'Beginner Foundation'],
  core: ['Core Skills', 'Core Skills'],
  intermediate: ['Intermediate Skills', 'Intermediate Skills'],
  advanced: ['Advanced Skills', 'Advanced Skills'],
}

const stageDescriptions: Record<Level, Pair> = {
  beginner: [
    'The fundamentals everyone starts with — no prior experience needed.',
    'အခြေခံမှစတင်ရန် — အတွေ့အကြုံ မလိုအပ်ပါ။',
  ],
  core: [
    'The everyday skills that make up most of the real work in this field.',
    'ဤနယ်ပယ်ရဲ့ လက်တွေ့အလုပ်အများစုကို ဖွဲ့စည်းထားသော နေ့စဉ်ကျွမ်းကျင်မှုများ။',
  ],
  intermediate: [
    'Where you start building complete, realistic work on your own.',
    'ကိုယ်ပိုင် လက်တွေ့ကျသော အလုပ်များကို စတင်တည်ဆောက်ရာနေရာ။',
  ],
  advanced: [
    'Deeper, specialized skills that come with experience over time.',
    'အတွေ့အကြုံနှင့်အတူ အချိန်ကြာလာသည်နှင့်အမျှ ရလာမည့် ပိုနက်ရှိုင်း အထူးကျွမ်းကျင်မှုများ။',
  ],
}

function buildStages(careerId: string, topicsByLevel: Record<Level, Pair[]>): RoadmapStage[] {
  const levels: Level[] = ['beginner', 'core', 'intermediate', 'advanced']
  return levels.map((level) => ({
    id: `${careerId}-${level}`,
    level,
    title: { en: stageTitles[level][0], my: stageTitles[level][1] },
    description: { en: stageDescriptions[level][0], my: stageDescriptions[level][1] },
    topics: topicsByLevel[level].map(([en, my], index) => ({
      id: `${careerId}-${level}-${index + 1}`,
      label: { en, my },
    })),
  }))
}

function buildProject(
  careerId: string,
  index: number,
  title: Pair,
  description: Pair,
  level: CareerProject['level'],
  skills: Pair[],
): CareerProject {
  return {
    id: `${careerId}-project-${index}`,
    title: { en: title[0], my: title[1] },
    description: { en: description[0], my: description[1] },
    level,
    skills: skills.map(([en, my]) => ({ en, my })),
  }
}

export const careerRoadmaps: CareerRoadmap[] = [
  {
    careerId: 'software-engineering',
    stages: withTopicDetails(
      buildStages('software-engineering', {
        beginner: [
          ['Programming fundamentals (variables, loops, functions)', 'အခြေခံ Programming (Variables, Loop, Function)'],
          ['Command line basics', 'Command Line အခြေခံ'],
          ['Git & version control basics', 'Git နှင့် Version Control အခြေခံ'],
          ['Problem-solving with simple exercises', 'လွယ်ကူသော အလုပ်များဖြင့် ပြဿနာဖြေရှင်းခြင်း'],
        ],
        core: [
          ['One programming language in depth', 'Programming Language တစ်ခုကို နက်နက်ရှိုင်းရှိုင်း'],
          ['Object-oriented programming', 'Object-Oriented Programming'],
          ['Data structures & algorithms', 'Data Structures နှင့် Algorithms'],
          ['Debugging & basic testing', 'Debugging နှင့် အခြေခံ Testing'],
        ],
        intermediate: [
          ['Building small full applications', 'Application အသေးစားများ တည်ဆောက်ခြင်း'],
          ['Working with APIs', 'API များနှင့် အလုပ်လုပ်ခြင်း'],
          ['Databases basics (SQL)', 'Database အခြေခံ (SQL)'],
          ['Code review & collaboration practices', 'Code Review နှင့် အဖွဲ့လိုက် လုပ်ဆောင်ခြင်း'],
        ],
        advanced: [
          ['System design basics', 'System Design အခြေခံ'],
          ['Performance optimization', 'Performance မြှင့်တင်ခြင်း'],
          ['Contributing to larger codebases', 'Codebase ကြီးများတွင် ပါဝင်ဆောင်ရွက်ခြင်း'],
          ['Software architecture patterns', 'Software Architecture Pattern များ'],
        ],
      }),
      softwareEngineeringTopicDetails,
    ),
    projects: [
      buildProject(
        'software-engineering',
        1,
        ['Build a personal portfolio website with a working contact form', 'အလုပ်လုပ်သော Contact Form ပါ ကိုယ်ပိုင် Portfolio Website တည်ဆောက်ခြင်း'],
        [
          'Practice front-end basics while creating something real you can show to employers.',
          'အလုပ်ရှင်များကို တကယ်ပြသနိုင်မယ့် အရာတစ်ခု ဖန်တီးရင်း Front-end အခြေခံများကို လေ့ကျင့်ပါ။',
        ],
        'beginner',
        [
          ['HTML/CSS', 'HTML/CSS'],
          ['Basic JavaScript', 'အခြေခံ JavaScript'],
        ],
      ),
      buildProject(
        'software-engineering',
        2,
        ['Build a REST API-backed task management app', 'REST API အသုံးပြု၍ Task Management App တည်ဆောက်ခြင်း'],
        [
          'Practice connecting a front-end to a real backend and database.',
          'Front-end ကို Backend နှင့် Database အစစ်အမှန်နှင့် ချိတ်ဆက်ရန် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['APIs', 'API'],
          ['Databases', 'Database'],
        ],
      ),
    ],
    resources: softwareEngineeringResources(),
  },
  {
    careerId: 'full-stack-development',
    stages: withTopicDetails(
      buildStages('full-stack-development', {
        beginner: [
          ['HTML & CSS fundamentals', 'HTML နှင့် CSS အခြေခံ'],
          ['JavaScript basics', 'JavaScript အခြေခံ'],
          ['Command line & Git basics', 'Command Line နှင့် Git အခြေခံ'],
          ['Responsive layout basics', 'Responsive Layout အခြေခံ'],
        ],
        core: [
          ['A front-end framework (e.g. React)', 'Front-end Framework (ဥပမာ React)'],
          ['Back-end basics with Node.js', 'Node.js ဖြင့် Back-end အခြေခံ'],
          ['REST APIs', 'REST API များ'],
          ['Working with databases', 'Database များနှင့် အလုပ်လုပ်ခြင်း'],
        ],
        intermediate: [
          ['Full-stack app architecture', 'Full-Stack App Architecture'],
          ['Authentication & authorization', 'Authentication နှင့် Authorization'],
          ['Deployment basics', 'Deployment အခြေခံ'],
          ['Testing front-end and back-end code', 'Front-end နှင့် Back-end Code Testing'],
        ],
        advanced: [
          ['Performance & caching strategies', 'Performance နှင့် Caching နည်းဗျူဟာများ'],
          ['Scaling web applications', 'Web Application များ Scale တိုးချဲ့ခြင်း'],
          ['CI/CD pipelines', 'CI/CD Pipeline များ'],
          ['Security best practices for the web', 'Web အတွက် လုံခြုံရေး အကောင်းဆုံးအလေ့အကျင့်များ'],
        ],
      }),
      fullStackTopicDetails,
    ),
    projects: [
      buildProject(
        'full-stack-development',
        1,
        ['Build a full-stack blog with user login', 'User Login ပါဝင်သော Full-Stack Blog တည်ဆောက်ခြင်း'],
        [
          'Practice building a complete user flow from front-end to authentication.',
          'Front-end မှ Authentication အထိ User Flow တစ်ခုလုံးကို တည်ဆောက်ရန် လေ့ကျင့်ပါ။',
        ],
        'beginner',
        [
          ['Front-end', 'Front-end'],
          ['Authentication', 'Authentication'],
        ],
      ),
      buildProject(
        'full-stack-development',
        2,
        ['Build an e-commerce product listing app with a working cart', 'အလုပ်လုပ်သော Cart ပါ E-commerce Product Listing App တည်ဆောက်ခြင်း'],
        [
          'Practice managing app state and data across a full-stack product.',
          'Full-Stack Product တစ်ခုတွင် App State နှင့် Data ကို စီမံခန့်ခွဲရန် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['Full-stack architecture', 'Full-stack Architecture'],
          ['Databases', 'Database'],
        ],
      ),
    ],
    resources: fullStackResources(),
  },
  {
    careerId: 'mobile-development',
    stages: withTopicDetails(
      buildStages('mobile-development', {
        beginner: [
          ['Programming fundamentals', 'Programming အခြေခံ'],
          ['Mobile UI basics', 'Mobile UI အခြေခံ'],
          ['Git & version control basics', 'Git နှင့် Version Control အခြေခံ'],
          ['Understanding app lifecycles', 'App Lifecycle နားလည်ခြင်း'],
        ],
        core: [
          ['One mobile framework (e.g. Flutter/React Native)', 'Mobile Framework တစ်ခု (ဥပမာ Flutter/React Native)'],
          ['Working with device features (camera, storage)', 'Device Feature များ (Camera, Storage) နှင့် အလုပ်လုပ်ခြင်း'],
          ['Connecting to APIs', 'API များနှင့် ချိတ်ဆက်ခြင်း'],
          ['Local data storage', 'Local Data သိမ်းဆည်းခြင်း'],
        ],
        intermediate: [
          ['State management', 'State Management'],
          ['Navigation & multi-screen apps', 'Navigation နှင့် Screen များစွာပါသော App'],
          ['Push notifications', 'Push Notification များ'],
          ['Testing mobile apps', 'Mobile App Testing'],
        ],
        advanced: [
          ['Publishing to app stores', 'App Store များသို့ တင်ခြင်း'],
          ['Performance optimization on mobile', 'Mobile ပေါ်တွင် Performance မြှင့်တင်ခြင်း'],
          ['Offline-first app design', 'Offline-first App ဒီဇိုင်း'],
          ['Cross-platform architecture decisions', 'Cross-platform Architecture ဆုံးဖြတ်ချက်များ'],
        ],
      }),
      mobileDevelopmentTopicDetails,
    ),
    projects: [
      buildProject(
        'mobile-development',
        1,
        ['Build a to-do list app with local storage', 'Local Storage ပါဝင်သော To-do List App တည်ဆောက်ခြင်း'],
        [
          'A classic starter project to practice mobile UI and local storage.',
          'Mobile UI နှင့် Local Storage ကို လေ့ကျင့်ရန် အစပြု Project တစ်ခု။',
        ],
        'beginner',
        [
          ['Mobile UI', 'Mobile UI'],
          ['Local storage', 'Local Storage'],
        ],
      ),
      buildProject(
        'mobile-development',
        2,
        ['Build a weather app using a public API', 'Public API အသုံးပြု၍ Weather App တည်ဆောက်ခြင်း'],
        [
          'Practice connecting a mobile app to a live external API.',
          'Mobile App ကို အပြင် API အစစ်အမှန်နှင့် ချိတ်ဆက်ရန် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['API integration', 'API Integration'],
          ['State management', 'State Management'],
        ],
      ),
    ],
    resources: emptyResources(),
  },
  {
    careerId: 'ui-ux-design',
    stages: withTopicDetails(
      buildStages('ui-ux-design', {
        beginner: [
          ['Design principles (contrast, spacing, hierarchy)', 'ဒီဇိုင်း အခြေခံမူများ (Contrast, Spacing, Hierarchy)'],
          ['Basic design tool skills (e.g. Figma)', 'အခြေခံ Design Tool ကျွမ်းကျင်မှု (ဥပမာ Figma)'],
          ['Color & typography basics', 'Color နှင့် Typography အခြေခံ'],
          ['Understanding user needs', 'User လိုအပ်ချက်များ နားလည်ခြင်း'],
        ],
        core: [
          ['Wireframing', 'Wireframing'],
          ['Prototyping', 'Prototyping'],
          ['User research basics', 'User Research အခြေခံ'],
          ['Design systems basics', 'Design System အခြေခံ'],
        ],
        intermediate: [
          ['Usability testing', 'Usability Testing'],
          ['Interaction design', 'Interaction Design'],
          ['Designing for accessibility', 'Accessibility အတွက် ဒီဇိုင်းရေးဆွဲခြင်း'],
          ['Collaborating with developers', 'Developer များနှင့် ပူးပေါင်းဆောင်ရွက်ခြင်း'],
        ],
        advanced: [
          ['End-to-end product design', 'End-to-end Product Design'],
          ['Design leadership & critique', 'Design Leadership နှင့် Critique'],
          ['Advanced design systems', 'အဆင့်မြင့် Design System များ'],
          ['Data-informed design decisions', 'Data အခြေပြု ဒီဇိုင်း ဆုံးဖြတ်ချက်များ'],
        ],
      }),
      uiUxDesignTopicDetails,
    ),
    projects: [
      buildProject(
        'ui-ux-design',
        1,
        ['Redesign a simple app screen and explain your choices', 'App Screen တစ်ခုကို ပြန်လည်ဒီဇိုင်းရေးဆွဲပြီး သင့်ရွေးချယ်မှုများကို ရှင်းပြပါ'],
        [
          'Practice explaining your design decisions — a skill designers use constantly.',
          'Designer များ အမြဲသုံးသော ကျွမ်းကျင်မှုဖြစ်သည့် ဒီဇိုင်းဆုံးဖြတ်ချက်များ ရှင်းပြခြင်းကို လေ့ကျင့်ပါ။',
        ],
        'beginner',
        [
          ['Design principles', 'ဒီဇိုင်း အခြေခံမူများ'],
          ['Figma', 'Figma'],
        ],
      ),
      buildProject(
        'ui-ux-design',
        2,
        [
          'Design a complete mobile app prototype from wireframe to clickable prototype',
          'Wireframe မှ Clickable Prototype အထိ Mobile App တစ်ခုလုံး ဒီဇိုင်းရေးဆွဲခြင်း',
        ],
        [
          'Practice the full design process end to end, portfolio-ready.',
          'Portfolio အတွက် အသင့်ဖြစ်စေမည့် ဒီဇိုင်းလုပ်ငန်းစဉ်တစ်ခုလုံးကို လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['Wireframing', 'Wireframing'],
          ['Prototyping', 'Prototyping'],
        ],
      ),
    ],
    resources: uiUxResources(),
  },
  {
    careerId: 'data-analysis',
    stages: withTopicDetails(
      buildStages('data-analysis', {
        beginner: [
          ['Spreadsheet fundamentals (Excel/Sheets)', 'Spreadsheet အခြေခံ (Excel/Sheets)'],
          ['Basic statistics concepts', 'အခြေခံ စာရင်းအင်းသဘောတရားများ'],
          ['Data cleaning basics', 'Data သန့်ရှင်းခြင်း အခြေခံ'],
          ['Introduction to SQL', 'SQL နိဒါန်း'],
        ],
        core: [
          ['SQL for analysis', 'ခွဲခြမ်းစိတ်ဖြာမှုအတွက် SQL'],
          ['Data visualization basics', 'Data Visualization အခြေခံ'],
          ['Working with a BI tool (e.g. Power BI/Tableau)', 'BI Tool တစ်ခုနှင့် အလုပ်လုပ်ခြင်း (ဥပမာ Power BI/Tableau)'],
          ['Python or R basics for data', 'Data အတွက် Python (သို့) R အခြေခံ'],
        ],
        intermediate: [
          ['Exploratory data analysis', 'Exploratory Data Analysis'],
          ['Building dashboards', 'Dashboard များ တည်ဆောက်ခြင်း'],
          ['Statistical analysis', 'စာရင်းအင်းဆိုင်ရာ ခွဲခြမ်းစိတ်ဖြာမှု'],
          ['Communicating insights clearly', 'တွေ့ရှိချက်များကို ရှင်းလင်းစွာ ဆက်သွယ်ပြောဆိုခြင်း'],
        ],
        advanced: [
          ['Predictive analysis basics', 'ခန့်မှန်းချက် ခွဲခြမ်းစိတ်ဖြာမှု အခြေခံ'],
          ['Large dataset handling', 'Dataset ကြီးများ ကိုင်တွယ်ခြင်း'],
          ['A/B testing fundamentals', 'A/B Testing အခြေခံ'],
          ['Data storytelling', 'Data Storytelling'],
        ],
      }),
      dataAnalysisTopicDetails,
    ),
    projects: [
      buildProject(
        'data-analysis',
        1,
        ['Clean and analyze a public dataset, present 3 findings', 'Public Dataset တစ်ခုကို သန့်ရှင်းပြီး ခွဲခြမ်းစိတ်ဖြာကာ တွေ့ရှိချက် ၃ ခု တင်ပြခြင်း'],
        [
          'Real-world data analysis almost always starts with cleaning messy data.',
          'လက်တွေ့ Data Analysis သည် ရှုပ်ထွေးသော Data ကို သန့်ရှင်းခြင်းဖြင့် အများအားဖြင့် စတင်လေ့ရှိသည်။',
        ],
        'beginner',
        [
          ['Data cleaning', 'Data သန့်ရှင်းခြင်း'],
          ['Spreadsheets', 'Spreadsheet'],
        ],
      ),
      buildProject(
        'data-analysis',
        2,
        ['Build an interactive dashboard from real data', 'အစစ်အမှန် Data မှ Interactive Dashboard တည်ဆောက်ခြင်း'],
        [
          'Practice turning raw numbers into something decision-makers can actually use.',
          'မူလကိန်းဂဏန်းများကို ဆုံးဖြတ်ချက်ချသူများ တကယ်အသုံးပြုနိုင်မယ့်အရာအဖြစ် ပြောင်းလဲရန် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['Data visualization', 'Data Visualization'],
          ['BI tools', 'BI Tool'],
        ],
      ),
    ],
    resources: dataAnalysisResources(),
  },
  {
    careerId: 'cloud-devops',
    stages: withTopicDetails(
      buildStages('cloud-devops', {
        beginner: [
          ['Linux fundamentals', 'Linux အခြေခံ'],
          ['Networking basics', 'Networking အခြေခံ'],
          ['Command line & shell scripting basics', 'Command Line နှင့် Shell Scripting အခြေခံ'],
          ['Git basics', 'Git အခြေခံ'],
        ],
        core: [
          ['Docker & containers', 'Docker နှင့် Container များ'],
          ['CI/CD fundamentals', 'CI/CD အခြေခံ'],
          ['Cloud provider basics (AWS/Azure/GCP)', 'Cloud Provider အခြေခံ (AWS/Azure/GCP)'],
          ['Infrastructure as code basics', 'Infrastructure as Code အခြေခံ'],
        ],
        intermediate: [
          ['Kubernetes basics', 'Kubernetes အခြေခံ'],
          ['Monitoring & logging', 'Monitoring နှင့် Logging'],
          ['Automation & scripting', 'Automation နှင့် Scripting'],
          ['Cloud security basics', 'Cloud လုံခြုံရေး အခြေခံ'],
        ],
        advanced: [
          ['Advanced Kubernetes & orchestration', 'အဆင့်မြင့် Kubernetes နှင့် Orchestration'],
          ['Site reliability practices', 'Site Reliability အလေ့အကျင့်များ'],
          ['Multi-cloud & cost optimization', 'Multi-cloud နှင့် ကုန်ကျစရိတ် ထိန်းချုပ်ခြင်း'],
          ['Incident response', 'Incident Response'],
        ],
      }),
      cloudDevOpsTopicDetails,
    ),
    projects: [
      buildProject(
        'cloud-devops',
        1,
        ['Deploy a Dockerized web application', 'Dockerized Web Application တစ်ခု Deploy လုပ်ခြင်း'],
        [
          'One of the most common real-world DevOps tasks, in a safe practice setting.',
          'အန္တရာယ်ကင်းသော လေ့ကျင့်မှုနေရာတွင် အသုံးအများဆုံး လက်တွေ့ DevOps လုပ်ငန်းတာဝန်များထဲမှ တစ်ခု။',
        ],
        'beginner',
        [
          ['Docker', 'Docker'],
          ['Linux', 'Linux'],
        ],
      ),
      buildProject(
        'cloud-devops',
        2,
        ['Set up a CI/CD pipeline for an existing project', 'လက်ရှိ Project တစ်ခုအတွက် CI/CD Pipeline တစ်ခု တည်ဆောက်ခြင်း'],
        [
          'Practice automating the steps teams repeat every single day.',
          'အဖွဲ့များ နေ့စဉ်ထပ်ခါထပ်ခါ လုပ်ဆောင်နေသော အဆင့်များကို အလိုအလျောက်ဖြစ်အောင် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['CI/CD', 'CI/CD'],
          ['Automation', 'Automation'],
        ],
      ),
    ],
    resources: cloudDevOpsResources(),
  },
  {
    careerId: 'cybersecurity',
    stages: withTopicDetails(
      buildStages('cybersecurity', {
        beginner: [
          ['Networking & systems fundamentals', 'Networking နှင့် System အခြေခံ'],
          ['Security terminology basics', 'လုံခြုံရေး ဝေါဟာရ အခြေခံ'],
          ['Linux basics', 'Linux အခြေခံ'],
          ['Basic cryptography concepts', 'အခြေခံ Cryptography သဘောတရားများ'],
        ],
        core: [
          ['Common vulnerabilities & threats', 'အများသုံးသော အားနည်းချက်များနှင့် ခြိမ်းခြောက်မှုများ'],
          ['Security tools basics (scanning, monitoring)', 'လုံခြုံရေး Tool အခြေခံ (Scanning, Monitoring)'],
          ['Web application security basics', 'Web Application လုံခြုံရေး အခြေခံ'],
          ['Security policies & best practices', 'လုံခြုံရေး မူဝါဒများနှင့် အကောင်းဆုံးအလေ့အကျင့်များ'],
        ],
        intermediate: [
          ['Penetration testing basics', 'Penetration Testing အခြေခံ'],
          ['Incident detection & response', 'Incident Detection နှင့် Response'],
          ['Security auditing', 'Security Auditing'],
          ['Risk assessment', 'Risk Assessment'],
        ],
        advanced: [
          ['Advanced penetration testing', 'အဆင့်မြင့် Penetration Testing'],
          ['Security architecture design', 'Security Architecture ဒီဇိုင်း'],
          ['Threat intelligence', 'Threat Intelligence'],
          ['Compliance & governance', 'Compliance နှင့် Governance'],
        ],
      }),
      cybersecurityTopicDetails,
    ),
    projects: [
      buildProject(
        'cybersecurity',
        1,
        ['Set up and secure a home lab environment', 'Home Lab Environment တစ်ခု တည်ဆောက်ပြီး လုံခြုံအောင်ပြုလုပ်ခြင်း'],
        [
          'A safe, controlled environment to practice security concepts hands-on.',
          'လုံခြုံရေး သဘောတရားများကို လက်တွေ့ လေ့ကျင့်ရန် လုံခြုံပြီး ထိန်းချုပ်ထားသော Environment။',
        ],
        'beginner',
        [
          ['Linux', 'Linux'],
          ['Networking', 'Networking'],
        ],
      ),
      buildProject(
        'cybersecurity',
        2,
        ['Perform a basic security assessment on a test application', 'စမ်းသပ် Application တစ်ခုအပေါ် အခြေခံ လုံခြုံရေး အကဲဖြတ်မှု ပြုလုပ်ခြင်း'],
        [
          'Practice thinking like both an attacker and a defender, safely.',
          'တိုက်ခိုက်သူနှင့် ကာကွယ်သူ နှစ်ဦးစလုံးအနေဖြင့် လုံခြုံစွာ တွေးခေါ်ရန် လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['Security tools', 'လုံခြုံရေး Tool'],
          ['Risk assessment', 'Risk Assessment'],
        ],
      ),
    ],
    resources: emptyResources(),
  },
  {
    careerId: 'networking',
    stages: withTopicDetails(
      buildStages('networking', {
        beginner: [
          ['Networking fundamentals (OSI model, TCP/IP)', 'Networking အခြေခံ (OSI Model, TCP/IP)'],
          ['Basic hardware (routers, switches)', 'အခြေခံ Hardware (Router, Switch)'],
          ['Command line basics', 'Command Line အခြေခံ'],
          ['IP addressing & subnetting basics', 'IP Addressing နှင့် Subnetting အခြေခံ'],
        ],
        core: [
          ['Routing & switching', 'Routing နှင့် Switching'],
          ['Network troubleshooting', 'Network ပြဿနာဖြေရှင်းခြင်း'],
          ['Wireless networking', 'Wireless Networking'],
          ['Network security basics', 'Network လုံခြုံရေး အခြေခံ'],
        ],
        intermediate: [
          ['Network design basics', 'Network ဒီဇိုင်း အခြေခံ'],
          ['VPNs & remote access', 'VPN နှင့် အဝေးမှ ဝင်ရောက်ခွင့်'],
          ['Network monitoring tools', 'Network Monitoring Tool များ'],
          ['Cloud networking basics', 'Cloud Networking အခြေခံ'],
        ],
        advanced: [
          ['Advanced routing protocols', 'အဆင့်မြင့် Routing Protocol များ'],
          ['Network automation', 'Network Automation'],
          ['Enterprise network architecture', 'Enterprise Network Architecture'],
          ['Network certification concepts', 'Network Certification သဘောတရားများ'],
        ],
      }),
      networkingTopicDetails,
    ),
    projects: [
      buildProject(
        'networking',
        1,
        [
          'Set up a small home/office network with proper segmentation',
          'သင့်လျော်သော Segmentation ပါ Home/Office Network အသေးစား တစ်ခု တည်ဆောက်ခြင်း',
        ],
        [
          'Apply core networking concepts to something you can physically see and test.',
          'Network အခြေခံသဘောတရားများကို ကိုယ်တိုင်တွေ့မြင်ပြီး စမ်းသပ်နိုင်မည့်အရာတွင် အသုံးချပါ။',
        ],
        'beginner',
        [
          ['Routing & switching', 'Routing & Switching'],
          ['IP addressing', 'IP Addressing'],
        ],
      ),
      buildProject(
        'networking',
        2,
        ['Simulate a multi-router network in a network simulator', 'Network Simulator တွင် Router များစွာပါသော Network တစ်ခု Simulate လုပ်ခြင်း'],
        [
          'Practice larger network design without needing real hardware.',
          'Hardware အစစ်အမှန် မလိုအပ်ဘဲ Network ဒီဇိုင်း ကြီးမားသည်များကို လေ့ကျင့်ပါ။',
        ],
        'intermediate',
        [
          ['Network design', 'Network ဒီဇိုင်း'],
          ['Troubleshooting', 'ပြဿနာဖြေရှင်းခြင်း'],
        ],
      ),
    ],
    resources: emptyResources(),
  },
]

export function findRoadmap(careerId: string): CareerRoadmap | undefined {
  return careerRoadmaps.find((roadmap) => roadmap.careerId === careerId)
}
