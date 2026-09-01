import type { CareerProfile } from '../types/career.ts'

/**
 * Careers that appear on the /careers pathway map but are NOT part of
 * careerProfiles (data/careers.ts) — deliberately kept separate so they are
 * never returned by career matching or the Learner Voice assessment, since
 * they don't have a corresponding Career Learning Path/roadmap (see
 * roadmaps.ts and careerMatching.ts's "every assessment-returnable career
 * must have a roadmap" invariant). `signals: []` for the same reason: these
 * entries are inert for matching purposes, not incomplete.
 *
 * Shares the exact CareerProfile shape as data/careers.ts on purpose, so the
 * Careers pathway page can render every career — from either source —
 * through the same component, with the same content structure.
 */
export const careerPathwayExtras: CareerProfile[] = [
  {
    id: 'system-administrator',
    slug: 'system-administrator',
    name: 'System Administration',
    nameMy: 'System Administration',
    shortDescription: {
      en: "Keep an organization's computers, servers, and everyday IT systems running smoothly and securely.",
      my: 'အဖွဲ့အစည်းတစ်ခု၏ Computer, Server နှင့် နေ့စဉ် IT System များကို ချောမွေ့ပြီး လုံခြုံစွာ လည်ပတ်နေအောင် ထိန်းသိမ်းသည်။',
    },
    internationalContext: {
      en: 'Every organization that uses computers needs someone keeping the basic systems running — this makes system administration one of the most consistently needed, entry-friendly IT roles worldwide.',
      my: 'Computer အသုံးပြုသော အဖွဲ့အစည်းတိုင်းသည် အခြေခံ System များ လည်ပတ်နေအောင် ထိန်းပေးမည့်သူ လိုအပ်ပါတယ် — ဒါက System Administration ကို ကမ္ဘာတစ်ဝှမ်းတွင် အမြဲလိုအပ်ပြီး Entry-friendly ဆုံး IT အလုပ်များထဲမှ တစ်ခု ဖြစ်စေပါတယ်။',
    },
    myanmarContext: {
      en: 'Nearly every Myanmar business with an office and computers needs someone to keep systems running — a practical, accessible starting point into IT.',
      my: 'Office နှင့် Computer ရှိသော မြန်မာစီးပွားရေးလုပ်ငန်းနီးပါးအားလုံးသည် System များ လည်ပတ်နေအောင် ထိန်းပေးမည့်သူ လိုအပ်ပါတယ် — IT ထဲသို့ ဝင်ရောက်ဖို့ လက်တွေ့ကျပြီး ရရှိနိုင်သော အစပြုချက်တစ်ခု ဖြစ်ပါတယ်။',
    },
    roles: ['System Administrator', 'IT Support Specialist', 'IT Administrator'],
    skills: [
      { en: 'Methodical, patient troubleshooting', my: 'စနစ်တကျ၊ သည်းခံနိုင်သော ပြဿနာဖြေရှင်းမှု' },
      { en: 'Clear communication with non-technical people', my: 'Technical မဟုတ်သူများနှင့် ရှင်းလင်းစွာ ဆက်သွယ်နိုင်မှု' },
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Comfort being interrupted to solve urgent problems', my: 'အရေးပေါ် ပြဿနာများ ဖြေရှင်းရန် နှောင့်ယှက်ခံရခြင်းကို လက်ခံနိုင်မှု' },
    ],
    challenges: [
      {
        en: 'The work can involve frequent interruptions — staying organized matters as much as technical skill.',
        my: 'ဒီအလုပ်မှာ မကြာခဏ ရပ်တန့်ခံရနိုင်ပါတယ် — စနစ်တကျ ရှိနေတာက Technical ကျွမ်းကျင်မှုလောက် အရေးကြီးပါတယ်။',
      },
      {
        en: "You'll often be the first person people blame when something breaks, even when it wasn't your fault — a thick skin helps.",
        my: 'တစ်ခုခု ပျက်တဲ့အခါ သင့်အမှားမဟုတ်လည်း ပထမဆုံး အပြစ်တင်ခံရတတ်ပါတယ် — သည်းခံနိုင်မှု ရှိထားရင် ကူညီပါတယ်။',
      },
      {
        en: 'Covers a wide range of systems, so there is always something new to learn.',
        my: 'System အမျိုးမျိုးကို လွှမ်းခြုံတာကြောင့် အမြဲ အသစ်လေ့လာစရာ ရှိနေပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Sets up, maintains, and troubleshoots the computers, servers, and IT systems an organization relies on every day.',
      my: 'အဖွဲ့အစည်းတစ်ခု နေ့စဉ်အားထားနေသော Computer, Server နှင့် IT System များကို တပ်ဆင်၊ ထိန်းသိမ်းပြီး ပြဿနာဖြေရှင်းသည်။',
    },
    responsibilities: [
      { en: 'Installing and maintaining hardware and software', my: 'Hardware နှင့် Software များ တပ်ဆင်ပြီး ထိန်းသိမ်းခြင်း' },
      { en: 'Managing user accounts and access', my: 'User Account နှင့် Access များ စီမံခန့်ခွဲခြင်း' },
      { en: 'Troubleshooting day-to-day IT problems', my: 'နေ့စဉ် IT ပြဿနာများ ဖြေရှင်းခြင်း' },
      { en: 'Backing up data and maintaining basic security', my: 'Data များ Backup လုပ်ပြီး အခြေခံ လုံခြုံရေး ထိန်းသိမ်းခြင်း' },
    ],
    whereUsed: {
      en: 'Any organization with an office and computers — from small businesses to large enterprises, schools, hospitals, and government offices.',
      my: 'Office နှင့် Computer ရှိသော အဖွဲ့အစည်းတိုင်း — စီးပွားရေးလုပ်ငန်းသေးများမှ လုပ်ငန်းကြီးများ၊ ကျောင်းများ၊ ဆေးရုံများနှင့် အစိုးရရုံးများအထိ။',
    },
    suitableFor: {
      en: 'People who like fixing practical problems, don\'t mind being interrupted, and enjoy being the person others rely on when something stops working.',
      my: 'လက်တွေ့ ပြဿနာများ ဖြေရှင်းရတာ ကြိုက်ပြီး နှောင့်ယှက်ခံရတာကို ဂရုမစိုက်ဘဲ တစ်ခုခု ရပ်သွားရင် တခြားသူတွေ အားထားရတဲ့ လူဖြစ်ခြင်းကို နှစ်သက်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'beginner-friendly',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      {
        en: 'Comfort learning how different pieces of hardware and software fit together',
        my: 'Hardware နှင့် Software အစိတ်အပိုင်းများ မည်သို့ ဆက်စပ်သည်ကို လေ့လာရန် စိတ်ဝင်စားမှု',
      },
    ],
    progression: {
      en: 'IT Support / Help Desk → System Administrator → Senior System Administrator → IT Manager / Infrastructure Lead. Many people use this role as a practical stepping stone into cloud, networking, or security.',
      my: 'IT Support / Help Desk → System Administrator → Senior System Administrator → IT Manager / Infrastructure Lead။ လူများစွာက ဒီအလုပ်ကို Cloud, Networking (သို့) Security ဘက်သို့ ဆက်လက် ကူးပြောင်းရန် လက်တွေ့ကျသော ခြေလှမ်းအဖြစ် သုံးကြပါတယ်။',
    },
    specializations: [
      { en: 'IT Support & Help Desk', my: 'IT Support & Help Desk' },
      { en: 'Server Administration', my: 'Server Administration' },
      { en: 'IT Infrastructure', my: 'IT Infrastructure' },
      { en: 'Windows / Linux Administration', my: 'Windows / Linux Administration' },
    ],
    signals: [],
    salaryRange: {
      en: 'Roughly $35,000–$90,000+ per year globally — typically more accessible entry pay than specialized engineering roles, with room to grow into higher-paying infrastructure or cloud roles.',
      my: 'ကမ္ဘာတစ်ဝှမ်း နှစ်စဉ် ခန့်မှန်း $35,000–$90,000+ ခန့် — အထူးပြု Engineering အလုပ်များထက် ပုံမှန် Entry လစာ ပိုရရှိလွယ်ပြီး Infrastructure (သို့) Cloud အလုပ်များဆီ ဆက်လက် ကြီးထွားနိုင်ပါတယ်။',
    },
    demand: {
      en: "Steady — nearly every organization needs someone in this role, though it's often less visible than specialized engineering positions.",
      my: 'တည်ငြိမ်ပါတယ် — အဖွဲ့အစည်းနီးပါးအားလုံးက ဒီအလုပ်လိုအပ်ပါတယ် — သို့သော် အထူးပြု Engineering အလုပ်များထက် မမြင်ရလေ့ ရှိပါတယ်။',
    },
    competitiveness: {
      en: 'One of the more accessible entry points into IT — practical troubleshooting skill and a willingness to learn matter more than formal credentials.',
      my: 'IT ထဲသို့ ဝင်ရောက်ဖို့ ရရှိနိုင်ဆုံး Entry Point များထဲမှ တစ်ခု ဖြစ်ပါတယ် — လက်တွေ့ ပြဿနာဖြေရှင်းနိုင်စွမ်းနှင့် လေ့လာလိုစိတ်က တရားဝင် Certificate များထက် ပိုအရေးကြီးပါတယ်။',
    },
    careerOpportunities: {
      en: 'Widespread — essentially any organization with computers needs this role, making it one of the most consistently available IT jobs.',
      my: 'ကျယ်ပြန့်ပါတယ် — Computer ရှိသော အဖွဲ့အစည်း မှန်သမျှသည် ဒီအလုပ်ကို လိုအပ်တာကြောင့် အမြဲ ရရှိနိုင်ဆုံး IT အလုပ်များထဲမှ တစ်ခု ဖြစ်စေပါတယ်။',
    },
    industries: [
      { en: 'Every industry with office IT', my: 'Office IT ရှိသော လုပ်ငန်းတိုင်း' },
      { en: 'Education', my: 'ပညာရေး' },
      { en: 'Healthcare', my: 'ကျန်းမာရေး' },
      { en: 'Government', my: 'အစိုးရ' },
    ],
    futureOutlook: {
      en: 'Basic tasks are increasingly automated, so the role is shifting toward more cloud-aware, security-conscious system management rather than disappearing.',
      my: 'အခြေခံ လုပ်ငန်းများ ပိုမို Automate ဖြစ်လာသောကြောင့် ဒီအလုပ်က ပျောက်သွားမည့်အစား Cloud-aware, Security-conscious System စီမံခန့်ခွဲမှုဘက်သို့ ရွေ့လျားနေပါတယ်။',
    },
  },
  {
    id: 'site-reliability-engineer',
    slug: 'site-reliability-engineer',
    name: 'Site Reliability Engineering',
    nameMy: 'Site Reliability Engineering',
    shortDescription: {
      en: 'Keep large-scale systems reliable, fast, and available using both software engineering and operations skills.',
      my: 'Software Engineering နှင့် Operations ကျွမ်းကျင်မှု နှစ်ခုလုံး သုံး၍ အတိုင်းအတာကြီးသော System များကို ယုံကြည်စိတ်ချရ၊ မြန်ဆန်ပြီး အသုံးပြုနိုင်အောင် ထိန်းသိမ်းသည်။',
    },
    internationalContext: {
      en: 'As more of the world depends on always-on digital services, SRE has become one of the most respected and well-compensated disciplines at large tech companies globally.',
      my: 'ကမ္ဘာ့လူဦးရေ ပိုမို အမြဲဖွင့်ထားသော Digital ဝန်ဆောင်မှုများအပေါ် မှီခိုလာသည်နှင့်အမျှ SRE သည် ကမ္ဘာတစ်ဝှမ်းရှိ Tech ကုမ္ပဏီကြီးများတွင် လေးစားခံရဆုံးနှင့် လစာအကောင်းဆုံး ကဏ္ဍများထဲမှ တစ်ခု ဖြစ်လာပါတယ်။',
    },
    myanmarContext: {
      en: "SRE is still an emerging, specialized role in Myanmar's tech scene — most learners come to it after first building experience in DevOps, cloud, or backend engineering.",
      my: 'SRE သည် မြန်မာနိုင်ငံ၏ Tech Scene တွင် တဖြည်းဖြည်း ပေါ်ထွက်နေသော အထူးပြု အလုပ်တစ်ခု ဖြစ်ပါတယ် — Learner အများစုက DevOps, Cloud (သို့) Backend Engineering တွင် အရင်ဆုံး အတွေ့အကြုံ တည်ဆောက်ပြီးမှ ဒီဘက်သို့ ရောက်လာလေ့ ရှိပါတယ်။',
    },
    roles: ['Site Reliability Engineer', 'Production Engineer', 'Infrastructure Reliability Engineer'],
    skills: [
      { en: 'Calm, methodical thinking under pressure', my: 'ဖိအားအောက်တွင် တည်ငြိမ်၊ စနစ်တကျ တွေးခေါ်နိုင်မှု' },
      { en: 'Strong programming and systems knowledge', my: 'ခိုင်မာသော Programming နှင့် System အသိပညာ' },
      { en: 'Comfort with ambiguity when diagnosing unfamiliar failures', my: 'ရင်းနှီးမှုမရှိသော ချို့ယွင်းမှုများ ရှာဖွေရာတွင် မသေချာမှုနှင့် အဆင်ပြေမှု' },
      { en: 'Long-term thinking about preventing repeat problems', my: 'ပြဿနာများ ထပ်ခါထပ်ခါ မဖြစ်အောင် ကာကွယ်ရန် ရေရှည် တွေးခေါ်မှု' },
    ],
    challenges: [
      {
        en: 'This role often involves on-call responsibilities — being ready to respond when critical systems have issues, sometimes outside normal hours.',
        my: 'ဒီအလုပ်မှာ On-call တာဝန်ယူမှု မကြာခဏ ပါဝင်ပါတယ် — အရေးကြီး System များ ပြဿနာရှိလာသည့်အခါ ပုံမှန်အချိန်ပြင်ပတွင်ပင် တုံ့ပြန်ဖို့ အသင့်ရှိရပါတယ်။',
      },
      {
        en: 'It combines two skill sets — software engineering and operations — so the learning curve is real.',
        my: 'ကျွမ်းကျင်မှု နှစ်ခု (Software Engineering နှင့် Operations) ပေါင်းစပ်ထားသောကြောင့် သင်ယူရမည့်အရာ တကယ်များပါတယ်။',
      },
      {
        en: "It's usually a role you grow into after other engineering experience, not typically a first job.",
        my: 'ပုံမှန်အားဖြင့် ဒါက ပထမဆုံးအလုပ်မဟုတ်ဘဲ တခြား Engineering အတွေ့အကြုံရပြီးမှ ကြီးထွားလာသော အလုပ်တစ်ခု ဖြစ်ပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Applies software engineering practices to operations problems — building automation, monitoring, and processes that keep large systems reliable and fast.',
      my: 'Operations ပြဿနာများကို Software Engineering အလေ့အကျင့်များ အသုံးချသည် — System ကြီးများကို ယုံကြည်စိတ်ချရပြီး မြန်ဆန်နေအောင် ထိန်းပေးမည့် Automation, Monitoring နှင့် Process များ တည်ဆောက်သည်။',
    },
    responsibilities: [
      { en: 'Building automation to reduce manual operational work', my: 'လက်ဖြင့်လုပ်ရသော Operational အလုပ်များ လျှော့ချရန် Automation တည်ဆောက်ခြင်း' },
      { en: 'Setting up monitoring and alerting for critical systems', my: 'အရေးကြီး System များအတွက် Monitoring နှင့် Alerting စနစ်ချခြင်း' },
      { en: 'Responding to and learning from incidents', my: 'Incident များကို တုံ့ပြန်ပြီး ၎င်းတို့မှ သင်ယူခြင်း' },
      { en: 'Improving system reliability and performance over time', my: 'System ယုံကြည်စိတ်ချရမှုနှင့် Performance ကို အချိန်ကြာလာသည်နှင့်အမျှ တိုးတက်စေခြင်း' },
    ],
    whereUsed: {
      en: 'Most established at large tech companies with high-traffic systems, though the practice is spreading to mid-sized companies too.',
      my: 'Traffic များသော System ရှိသော Tech ကုမ္ပဏီကြီးများတွင် အထူးတည်ငြိမ်ပါတယ် — သို့သော် ဒီအလေ့အကျင့်သည် အလယ်အလတ် ကုမ္ပဏီများသို့ပါ ပျံ့နှံ့လာနေပါတယ်။',
    },
    suitableFor: {
      en: 'People who already enjoy DevOps or backend engineering and want to focus specifically on reliability, automation, and preventing problems before they happen.',
      my: 'DevOps (သို့) Backend Engineering ကို ရှိပြီးသားနှစ်သက်ပြီး Reliability, Automation နှင့် ပြဿနာများ မဖြစ်မီ ကာကွယ်ခြင်းအပေါ် သီးခြား အာရုံစိုက်လိုသူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'challenging',
    prerequisiteKnowledge: [
      { en: 'Solid programming and Linux fundamentals', my: 'ခိုင်မာသော Programming နှင့် Linux အခြေခံ' },
      {
        en: 'Prior experience with cloud infrastructure or backend systems helps a lot',
        my: 'Cloud Infrastructure (သို့) Backend System များတွင် ယခင်အတွေ့အကြုံက များစွာ အထောက်အကူ ဖြစ်ပါတယ်',
      },
    ],
    progression: {
      en: 'DevOps/Backend Engineer → Site Reliability Engineer → Senior SRE → Principal SRE / Reliability Lead. This path almost always builds on prior engineering or operations experience.',
      my: 'DevOps/Backend Engineer → Site Reliability Engineer → Senior SRE → Principal SRE / Reliability Lead။ ဒီလမ်းကြောင်းက ယခင် Engineering (သို့) Operations အတွေ့အကြုံအပေါ် အမြဲနီးပါး တည်ဆောက်ထားပါတယ်။',
    },
    specializations: [
      { en: 'Incident Management', my: 'Incident Management' },
      { en: 'Observability & Monitoring', my: 'Observability & Monitoring' },
      { en: 'Chaos Engineering', my: 'Chaos Engineering' },
      { en: 'Performance Engineering', my: 'Performance Engineering' },
    ],
    signals: [],
    salaryRange: {
      en: 'Roughly $70,000–$190,000+ per year globally — typically one of the highest-paying infrastructure-adjacent roles, reflecting the seniority most SREs already have.',
      my: 'ကမ္ဘာတစ်ဝှမ်း နှစ်စဉ် ခန့်မှန်း $70,000–$190,000+ ခန့် — SRE အများစု ရှိပြီးသား Seniority ကို ထင်ဟပ်စေသော Infrastructure-adjacent အလုပ်များထဲတွင် လစာအမြင့်ဆုံး တစ်ခု ဖြစ်ပါတယ်။',
    },
    demand: {
      en: 'High at large-scale, high-traffic companies, and growing steadily as more mid-sized companies adopt SRE practices.',
      my: 'Traffic များပြီး အတိုင်းအတာကြီးသော ကုမ္ပဏီများတွင် မြင့်မားပါတယ် — အလယ်အလတ် ကုမ္ပဏီများ SRE အလေ့အကျင့်များ လက်ခံလာသည်နှင့်အမျှ တည်ငြိမ်စွာ ကြီးထွားနေပါတယ်။',
    },
    competitiveness: {
      en: 'High — this is typically a senior-track role, so competition is mostly among experienced engineers rather than beginners.',
      my: 'မြင့်မားပါတယ် — ဒါက ပုံမှန်အားဖြင့် Senior-track အလုပ်တစ်ခု ဖြစ်တာကြောင့် ယှဉ်ပြိုင်မှုသည် Beginner များထက် အတွေ့အကြုံရှိသော Engineer များကြားတွင် ပိုများပါတယ်။',
    },
    careerOpportunities: {
      en: 'Concentrated at larger, high-traffic companies today, but expanding as reliability practices spread to more organizations.',
      my: 'ယနေ့ Traffic များသော ကုမ္ပဏီကြီးများတွင် စုစည်းနေပါတယ် — သို့သော် Reliability အလေ့အကျင့်များ အဖွဲ့အစည်းများသို့ ပျံ့နှံ့လာသည်နှင့်အမျှ ကျယ်ပြန့်လာပါတယ်။',
    },
    industries: [
      { en: 'Large-scale tech & cloud platforms', my: 'အတိုင်းအတာကြီးသော Tech & Cloud Platform များ' },
      { en: 'E-commerce', my: 'E-commerce' },
      { en: 'Finance & fintech', my: 'ဘဏ္ဍာရေးနှင့် Fintech' },
      { en: 'Telecommunications', my: 'ဆက်သွယ်ရေးလုပ်ငန်း' },
    ],
    futureOutlook: {
      en: 'As digital services become even more central to daily life, the discipline of keeping them reliable is likely to keep growing in importance, not shrink.',
      my: 'Digital ဝန်ဆောင်မှုများသည် နေ့စဉ်ဘဝတွင် ပိုမို ဗဟိုကျလာသည်နှင့်အမျှ ၎င်းတို့ကို ယုံကြည်စိတ်ချရအောင် ထိန်းသိမ်းသည့် ကဏ္ဍသည် အရေးပါမှု ဆက်လက် ကြီးထွားလိမ့်မည်ဟု ယူဆရပါတယ် — မကျုံ့သွားပါ။',
    },
  },
  {
    id: 'forward-deployed-engineer',
    slug: 'forward-deployed-engineer',
    name: 'Forward Deployed Engineering',
    nameMy: 'Forward Deployed Engineering',
    shortDescription: {
      en: 'Work directly with clients to build, customize, and deploy software solutions tailored to their specific problems.',
      my: 'သီးခြားပြဿနာများအတွက် ချိန်ညှိထားသော Software Solution များကို Client များနှင့် တိုက်ရိုက်လုပ်ဆောင်၍ တည်ဆောက်၊ ချိန်ညှိပြီး Deploy လုပ်သည်။',
    },
    internationalContext: {
      en: 'Popularized by companies like Palantir, this role has grown internationally as more software companies realize that some clients need hands-on, customized implementation, not just an off-the-shelf product.',
      my: 'Palantir ကဲ့သို့ ကုမ္ပဏီများက ရေပန်းစားစေခဲ့ပြီး Software ကုမ္ပဏီများက Client အချို့သည် ရှိပြီးသား Product တစ်ခုတည်းမကဘဲ လက်တွေ့ ချိန်ညှိထားသော Implementation လိုအပ်ကြောင်း သတိထားမိလာသည်နှင့်အမျှ ဒီအလုပ်သည် နိုင်ငံတကာအတိုင်းအတာဖြင့် ကြီးထွားလာပါတယ်။',
    },
    myanmarContext: {
      en: "This is a newer, less common role in Myanmar's tech scene, most relevant to learners aiming at international software companies or larger enterprise-facing local firms.",
      my: 'ဒါက မြန်မာနိုင်ငံ၏ Tech Scene တွင် ပိုအသစ်ပြီး ပိုမမြင်ရသော အလုပ်တစ်ခု ဖြစ်ပါတယ် — နိုင်ငံတကာ Software ကုမ္ပဏီများ (သို့) Enterprise-facing ပြည်တွင်းကုမ္ပဏီကြီးများကို ဦးတည်နေသော Learner များအတွက် အသက်ဆက်ဆိုင်ဆုံး ဖြစ်ပါတယ်။',
    },
    roles: ['Forward Deployed Engineer', 'Solutions Engineer', 'Implementation Engineer'],
    skills: [
      { en: 'Comfort working directly with non-technical clients', my: 'Technical မဟုတ်သော Client များနှင့် တိုက်ရိုက် လုပ်ဆောင်ရတာ အဆင်ပြေမှု' },
      { en: 'Fast, practical problem-solving under real-world constraints', my: 'တကယ့်ကမ္ဘာ ကန့်သတ်ချက်များအောက်တွင် မြန်ဆန်၊ လက်တွေ့ကျသော ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Strong communication and translating business needs into technical solutions', my: 'ခိုင်မာသော ဆက်သွယ်ပြောဆိုနိုင်မှုနှင့် Business လိုအပ်ချက်များကို Technical Solution အဖြစ် ပြောင်းလဲနိုင်မှု' },
      { en: 'Willingness to travel or work on-site with clients', my: 'Client များနှင့် ခရီးသွားရန် (သို့) On-site အလုပ်လုပ်ရန် စိတ်ဆန္ဒရှိမှု' },
    ],
    challenges: [
      {
        en: 'The role often requires travel or extended time on-site with clients, which is not for everyone.',
        my: 'ဒီအလုပ်မှာ Client များနှင့် ခရီးသွားရခြင်း (သို့) On-site တွင် ကြာမြင့်စွာ နေထိုင်ရခြင်း မကြာခဏ လိုအပ်ပါတယ် — လူတိုင်းအတွက် မသင့်တော်ပါ။',
      },
      {
        en: 'You need to be comfortable being both an engineer and a client-facing problem solver at the same time.',
        my: 'Engineer တစ်ဦးနှင့် Client-facing ပြဿနာဖြေရှင်းသူ နှစ်ခုစလုံး တစ်ချိန်တည်း ဖြစ်ရတာကို အဆင်ပြေဖို့ လိုပါတယ်။',
      },
      {
        en: 'Requirements can change quickly on-site, so flexibility matters as much as technical depth.',
        my: 'On-site တွင် Requirement များ လျင်မြန်စွာ ပြောင်းလဲနိုင်တာကြောင့် Flexibility က Technical အနက်ရှိုင်းလောက် အရေးကြီးပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: "Combines full-stack engineering skills with direct client interaction — building, customizing, and deploying software solutions on-site or in close collaboration with a specific client.",
      my: 'Full-Stack Engineering ကျွမ်းကျင်မှုကို Client နှင့် တိုက်ရိုက် ဆက်ဆံမှုနှင့် ပေါင်းစပ်သည် — Client သီးခြားတစ်ဦးနှင့် On-site (သို့) နီးကပ်စွာ ပူးပေါင်းလုပ်ဆောင်၍ Software Solution များ တည်ဆောက်၊ ချိန်ညှိပြီး Deploy လုပ်သည်။',
    },
    responsibilities: [
      { en: "Understanding a specific client's real workflow and problems", my: 'Client သီးခြားတစ်ဦး၏ တကယ့် Workflow နှင့် ပြဿနာများ နားလည်ခြင်း' },
      { en: "Building and customizing software to fit that client's needs", my: 'ထို Client လိုအပ်ချက်နှင့် ကိုက်ညီအောင် Software တည်ဆောက်ပြီး ချိန်ညှိခြင်း' },
      { en: 'Deploying and supporting solutions directly at the client site', my: 'Client Site တွင် Solution များ တိုက်ရိုက် Deploy လုပ်ပြီး ပံ့ပိုးခြင်း' },
      { en: 'Feeding real-world feedback back to the core product team', my: 'တကယ့်ကမ္ဘာ Feedback များကို Core Product Team ထံ ပြန်ပို့ခြင်း' },
    ],
    whereUsed: {
      en: 'Common at software companies — especially enterprise, government, or data platform companies — whose products need significant customization for each large client.',
      my: 'Client ကြီးတစ်ဦးစီအတွက် သိသာသော Customization လိုအပ်သော Product ရှိသော Software ကုမ္ပဏီများ (အထူးသဖြင့် Enterprise, အစိုးရ (သို့) Data Platform ကုမ္ပဏီများ) တွင် အသုံးများသည်။',
    },
    suitableFor: {
      en: "People who like variety, enjoy working directly with people outside their own team, and can think on their feet when things don't go as planned.",
      my: 'အမျိုးမျိုးလုပ်ရတာ ကြိုက်ပြီး ကိုယ့်အဖွဲ့ပြင်ပရှိ လူများနှင့် တိုက်ရိုက်လုပ်ဆောင်ရတာ နှစ်သက်ကာ အစီအစဉ်အတိုင်း မဖြစ်သည့်အခါ ချက်ချင်း တွေးတတ်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'challenging',
    prerequisiteKnowledge: [
      { en: 'Solid full-stack development skills', my: 'ခိုင်မာသော Full-Stack Development ကျွမ်းကျင်မှု' },
      { en: 'Comfort with SQL and working with cloud infrastructure', my: 'SQL နှင့် Cloud Infrastructure နှင့် လုပ်ဆောင်ရတာ အဆင်ပြေမှု' },
    ],
    progression: {
      en: 'Full-Stack Developer → Forward Deployed Engineer → Senior Forward Deployed Engineer → Solutions Architect / Engineering Manager. This role often builds directly on full-stack development experience.',
      my: 'Full-Stack Developer → Forward Deployed Engineer → Senior Forward Deployed Engineer → Solutions Architect / Engineering Manager။ ဒီအလုပ်က Full-Stack Development အတွေ့အကြုံအပေါ် တိုက်ရိုက် တည်ဆောက်လေ့ ရှိပါတယ်။',
    },
    specializations: [
      { en: 'Enterprise Solutions', my: 'Enterprise Solutions' },
      { en: 'Client Implementation', my: 'Client Implementation' },
      { en: 'Data Platform Deployment', my: 'Data Platform Deployment' },
    ],
    signals: [],
    salaryRange: {
      en: 'Roughly $70,000–$200,000+ per year globally at companies known for this role — often among the highest-paying engineering tracks, partly reflecting the demanding, client-facing nature of the work.',
      my: 'ဒီအလုပ်ဖြင့် နာမည်ကြီးသော ကုမ္ပဏီများတွင် ကမ္ဘာတစ်ဝှမ်း နှစ်စဉ် ခန့်မှန်း $70,000–$200,000+ ခန့် — Engineering Track များထဲတွင် လစာအမြင့်ဆုံး ထဲမှ တစ်ခု ဖြစ်ပြီး Client-facing သဘောသဘာဝ တောင်းဆိုချက်များကို တစ်စိတ်တစ်ပိုင်း ထင်ဟပ်ပါတယ်။',
    },
    demand: {
      en: 'Growing steadily as more software companies adopt this model, though it remains a smaller, more specialized job market than general software engineering.',
      my: 'Software ကုမ္ပဏီများ ဒီ Model ကို ပိုမိုလက်ခံလာသည်နှင့်အမျှ တည်ငြိမ်စွာ ကြီးထွားနေပါတယ် — သို့သော် General Software Engineering ထက် သေးငယ်ပြီး ပိုအထူးပြု Job Market တစ်ခု ဖြစ်ဆဲပါ။',
    },
    competitiveness: {
      en: 'High — companies typically look for strong full-stack engineers who also have excellent communication skills, a less common combination.',
      my: 'မြင့်မားပါတယ် — ကုမ္ပဏီများသည် ထူးခြားသော ဆက်သွယ်ပြောဆိုနိုင်မှု ကျွမ်းကျင်မှုလည်း ရှိသော ခိုင်မာသော Full-Stack Engineer များကို ရှာလေ့ရှိပါတယ် — ဒါက ပိုမမြင့်ရသော ပေါင်းစပ်မှုတစ်ခု ဖြစ်ပါတယ်။',
    },
    careerOpportunities: {
      en: 'More limited than general software roles, concentrated at specific companies — enterprise software, data platforms, government-facing tech — that use this model.',
      my: 'General Software အလုပ်များထက် ပိုကန့်သတ်ထားပြီး ဒီ Model သုံးသော ကုမ္ပဏီသီးခြား (Enterprise Software, Data Platform, အစိုးရ-facing Tech) များတွင် စုစည်းနေပါတယ်။',
    },
    industries: [
      { en: 'Enterprise software', my: 'Enterprise Software' },
      { en: 'Government & defense technology', my: 'အစိုးရနှင့် ကာကွယ်ရေး နည်းပညာ' },
      { en: 'Data & analytics platforms', my: 'Data & Analytics Platform များ' },
      { en: 'Healthcare technology', my: 'ကျန်းမာရေးနည်းပညာ' },
    ],
    futureOutlook: {
      en: 'As software becomes more central to complex, specialized industries, the need for engineers who can bridge technical implementation and real client problems is likely to keep growing.',
      my: 'Software သည် ရှုပ်ထွေးပြီး အထူးပြု လုပ်ငန်းများတွင် ပိုဗဟိုကျလာသည်နှင့်အမျှ Technical Implementation နှင့် တကယ့် Client ပြဿနာများကို ချိတ်ဆက်ပေးနိုင်သော Engineer များ လိုအပ်ချက် ဆက်လက် ကြီးထွားလိမ့်မည်ဟု ယူဆရပါတယ်။',
    },
  },
]
