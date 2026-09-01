import type { CareerProfile } from '../types/career.ts'

export const careerProfiles: CareerProfile[] = [
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    name: 'Software Engineering',
    nameMy: 'Software Engineering',
    shortDescription: {
      en: 'Design, build, and maintain software applications and systems.',
      my: 'Software Application များနှင့် System များကို ဒီဇိုင်းရေး၊ တည်ဆောက်ပြီး ထိန်းသိမ်းသည်။',
    },
    internationalContext: {
      en: 'Software engineering is one of the most in-demand and portable skill sets globally, with opportunities spanning nearly every industry and country.',
      my: 'Software Engineering သည် ကမ္ဘာတစ်ဝှမ်းရှိ လုပ်ငန်းအသီးသီးနှင့် နိုင်ငံအသီးသီးတွင် အခွင့်အလမ်းများစွာရှိပြီး အလွန်လိုအပ်ပြီး ရွှေ့ပြောင်းနိုင်သော ကျွမ်းကျင်မှုတစ်ခုဖြစ်သည်။',
    },
    myanmarContext: {
      en: "Software engineering skills are in demand across Myanmar's growing tech companies and startups, as well as remote roles with international teams.",
      my: 'Software Engineering ကျွမ်းကျင်မှုများကို မြန်မာနိုင်ငံ၏ ကြီးထွားနေသော နည်းပညာကုမ္ပဏီများ၊ Startup များနှင့် နိုင်ငံတကာအဖွဲ့များနှင့် အဝေးမှအလုပ်များတွင် လိုအပ်နေပါသည်။',
    },
    roles: ['Software Engineer', 'Backend Developer', 'Application Developer'],
    skills: [
      { en: 'Logical thinking', my: 'ယုတ္တိရှိရှိ တွေးခေါ်နိုင်မှု' },
      { en: 'Problem-solving', my: 'ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Patience with trial and error', my: 'ထပ်ခါထပ်ခါ စမ်းသပ်ရန် သည်းခံနိုင်မှု' },
    ],
    challenges: [
      {
        en: 'Debugging can take patience — getting stuck is a normal part of learning.',
        my: 'Debug လုပ်တာက သည်းခံမှုလိုပါတယ် — ပြဿနာနဲ့ ရင်ဆိုင်ရတာက သင်ယူမှုရဲ့ ပုံမှန်အစိတ်အပိုင်းပါ။',
      },
      {
        en: 'Technology changes quickly, so continuous learning is part of the job.',
        my: 'နည်းပညာက မြန်မြန်ပြောင်းလဲနေလို့ အမြဲလေ့လာနေရပါမယ်။',
      },
      {
        en: "Early on, reading other people's code can feel confusing before it feels natural.",
        my: 'အစပိုင်းမှာ တခြားသူတွေရဲ့ Code ဖတ်ရတာ ရှုပ်ထွေးနေနိုင်ပေမယ့် ဆက်လုပ်ရင် ပိုလွယ်လာပါလိမ့်မယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Designs, writes, tests, and maintains the code that powers software applications.',
      my: 'Software Application များကို အလုပ်လုပ်စေမည့် Code ကို ဒီဇိုင်းရေး၊ ရေးသား၊ စမ်းသပ်ပြီး ထိန်းသိမ်းသည်။',
    },
    responsibilities: [
      { en: 'Writing and reviewing code', my: 'Code ရေးသားခြင်းနှင့် စစ်ဆေးခြင်း' },
      { en: 'Fixing bugs and improving performance', my: 'Bug များ ပြင်ဆင်ခြင်းနှင့် Performance မြှင့်တင်ခြင်း' },
      { en: 'Working with a team to plan features', my: 'Feature များ စီစဉ်ရန် အဖွဲ့နှင့် လုပ်ဆောင်ခြင်း' },
      { en: 'Testing and documenting software', my: 'Software ကို စမ်းသပ်ပြီး မှတ်တမ်းရေးတင်ခြင်း' },
    ],
    whereUsed: {
      en: 'Nearly every company that builds a website, app, or internal tool — from small startups to large enterprises — employs software engineers.',
      my: 'Website၊ App (သို့) Internal Tool တည်ဆောက်သော ကုမ္ပဏီ အားလုံးနီးပါးက Software Engineer များကို အသုံးပြုကြသည် — Startup အသေးစားမှ လုပ်ငန်းကြီးများအထိ။',
    },
    suitableFor: {
      en: "People who enjoy logical problem-solving, don't mind sitting with a tricky bug until it's solved, and like building things that work.",
      my: 'ယုတ္တိရှိရှိ ပြဿနာဖြေရှင်းတာကို နှစ်သက်ပြီး ခက်ခဲသော Bug တစ်ခုကို ဖြေရှင်းအောင် စိတ်ရှည်နိုင်ပြီး အလုပ်လုပ်တဲ့အရာတွေ တည်ဆောက်ရတာ ကြိုက်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'moderate',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'Comfort using a keyboard and file system', my: 'Keyboard နှင့် File System သုံးရတာ အဆင်ပြေမှု' },
    ],
    progression: {
      en: 'Junior Software Engineer → Software Engineer → Senior Software Engineer → Staff Engineer / Engineering Lead. Real growth also comes from experience, code reviews, and working on production systems — not just following a roadmap.',
      my: 'Junior Software Engineer → Software Engineer → Senior Software Engineer → Staff Engineer / Engineering Lead။ တကယ့်တိုးတက်မှုက Roadmap လိုက်ရုံနဲ့မကပါဘူး — အတွေ့အကြုံ၊ Code Review နဲ့ Production System တွေမှာ လုပ်ဆောင်ရတာကနေပါ လာပါတယ်။',
    },
    specializations: [
      { en: 'Frontend Development', my: 'Frontend Development' },
      { en: 'Backend Development', my: 'Backend Development' },
      { en: 'Full-Stack Development', my: 'Full-Stack Development' },
      { en: 'Mobile Development', my: 'Mobile Development' },
      { en: 'System Design', my: 'System Design' },
      { en: 'API Engineering', my: 'API Engineering' },
    ],
    signals: [
      {
        weight: 2,
        keywords: ['coding', 'code', 'program', 'programming', 'software', 'build software', 'building software', 'python', 'java', 'c#', 'algorithms', 'algorithm', 'data structures', 'data structure', 'object-oriented', 'ကုဒ်', 'ပရိုဂရမ်', 'ဆော့ဝဲ', 'ဆော့ဖ်ဝဲ', 'တည်ဆောက်'],
        reason: {
          en: 'You mentioned an interest in coding and building software.',
          my: 'Coding လုပ်တာနဲ့ Software တည်ဆောက်တာကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['solve', 'solving', 'problem', 'problems', 'puzzle', 'puzzles', 'logic', 'logical', 'debug', 'debugging', 'ပြဿနာဖြေရှင်း', 'ယုတ္တိ'],
        reason: {
          en: 'You enjoy solving problems and logical thinking — core skills for software engineering.',
          my: 'ပြဿနာဖြေရှင်းတာနဲ့ ယုတ္တိရှိရှိ တွေးခေါ်တတ်တာက Software Engineering အတွက် အဓိကကျတဲ့ ကျွမ်းကျင်မှုတွေပါ။',
        },
      },
      {
        weight: 2,
        keywords: ['software engineer', 'programmer', 'software developer', 'software development', 'software programming', 'engineering', 'ပရိုဂရမ်မာ'],
        reason: {
          en: 'Your goals point toward a software engineer or programmer role.',
          my: 'သင့်ပန်းတိုင်က Software Engineer (သို့) Programmer ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'full-stack-development',
    slug: 'full-stack-development',
    name: 'Full-Stack Development',
    nameMy: 'Full-Stack Development',
    shortDescription: {
      en: 'Build both the visual front-end and the server-side back-end of websites and web apps.',
      my: 'Website နှင့် Web App များ၏ မြင်ရသော Front-end နှင့် Server ဘက် Back-end နှစ်ခုစလုံးကို တည်ဆောက်သည်။',
    },
    internationalContext: {
      en: 'Full-stack developers are valued worldwide for their ability to work across an entire product, making them flexible hires for companies of any size.',
      my: 'Full-Stack Developer များသည် Product တစ်ခုလုံးတွင် လုပ်ဆောင်နိုင်စွမ်းရှိသောကြောင့် ကုမ္ပဏီအရွယ်အစားမရွေး အလုပ်ရနိုင်ခြေမြင့်ပြီး ကမ္ဘာတစ်ဝှမ်းတန်ဖိုးထားခံရသည်။',
    },
    myanmarContext: {
      en: 'Web development is one of the most accessible entry points into tech in Myanmar, with strong demand from local businesses building an online presence.',
      my: 'Web Development သည် မြန်မာနိုင်ငံတွင် နည်းပညာလောကထဲ ဝင်ရောက်ဖို့ လွယ်ကူဆုံးနည်းလမ်းတစ်ခုဖြစ်ပြီး Online လုပ်ငန်းတည်ဆောက်နေသော ပြည်တွင်းစီးပွားရေးလုပ်ငန်းများမှ လိုအပ်ချက်များစွာရှိသည်။',
    },
    roles: ['Full-Stack Developer', 'Web Developer', 'Frontend Developer'],
    skills: [
      { en: 'Adaptability across front-end and back-end', my: 'Front-end နဲ့ Back-end နှစ်ဘက်စလုံး လိုက်လျောညီထွေဖြစ်နိုင်မှု' },
      { en: 'Attention to visual detail', my: 'အသွင်အပြင် အသေးစိတ်ကို ဂရုစိုက်မှု' },
      { en: 'Problem-solving', my: 'ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Time management', my: 'အချိန်စီမံခန့်ခွဲမှု' },
    ],
    challenges: [
      {
        en: 'There is a lot to learn across both front-end and back-end — most people learn one side first, then grow into the other.',
        my: 'Front-end နဲ့ Back-end နှစ်ခုလုံး လေ့လာစရာများပါတယ် — လူအများစုက တစ်ဖက်ကို အရင်ကျွမ်းကျင်ပြီးမှ တစ်ဖက်ကို ဆက်လေ့လာလေ့ရှိပါတယ်။',
      },
      {
        en: 'Web technologies update often, so staying current takes ongoing effort.',
        my: 'Web နည်းပညာတွေက မကြာခဏ ပြောင်းလဲနေလို့ ဆက်လက်လေ့လာနေဖို့ လိုပါတယ်။',
      },
      {
        en: 'Balancing design sense with technical logic takes practice.',
        my: 'ဒီဇိုင်းအသိနဲ့ နည်းပညာယုတ္တိကို ချိန်ညှိတတ်ဖို့ လေ့ကျင့်မှု လိုပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Builds both the parts of a product users see (front-end) and the parts running behind the scenes (back-end).',
      my: 'Product ရဲ့ အသုံးပြုသူမြင်ရသော အပိုင်း (Front-end) နှင့် နောက်ကွယ်မှ အလုပ်လုပ်သော အပိုင်း (Back-end) နှစ်ခုစလုံးကို တည်ဆောက်သည်။',
    },
    responsibilities: [
      { en: 'Building user interfaces', my: 'User Interface များ တည်ဆောက်ခြင်း' },
      { en: 'Building and connecting APIs', my: 'API များ တည်ဆောက်ပြီး ချိတ်ဆက်ခြင်း' },
      { en: 'Managing databases', my: 'Database များ စီမံခန့်ခွဲခြင်း' },
      { en: 'Deploying and maintaining the whole product', my: 'Product တစ်ခုလုံးကို Deploy လုပ်ပြီး ထိန်းသိမ်းခြင်း' },
    ],
    whereUsed: {
      en: 'Especially common at startups and small teams that need one person who can move across the whole product.',
      my: 'Product တစ်ခုလုံးမှာ လှုပ်ရှားနိုင်တဲ့ လူတစ်ယောက် လိုအပ်တဲ့ Startup နှင့် အဖွဲ့အသေးစားများတွင် အထူးသဖြင့် အသုံးများသည်။',
    },
    suitableFor: {
      en: "People who like variety and don't want to specialize in just one layer of a product.",
      my: 'အမျိုးမျိုးလုပ်ရတာ ကြိုက်ပြီး Product ရဲ့ တစ်ထပ်တည်းမှာသာ အထူးပြုမလုပ်ချင်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'moderate',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'Willingness to learn both design and logic', my: 'ဒီဇိုင်းနှင့် ယုတ္တိ နှစ်ခုလုံး လေ့လာလိုစိတ်' },
    ],
    progression: {
      en: 'Junior Full-Stack Developer → Full-Stack Developer → Senior Full-Stack Developer → Tech Lead. Growth depends on hands-on project experience across the whole stack, not just roadmap completion.',
      my: 'Junior Full-Stack Developer → Full-Stack Developer → Senior Full-Stack Developer → Tech Lead။ တိုးတက်မှုက Stack တစ်ခုလုံးမှာ လက်တွေ့ Project အတွေ့အကြုံအပေါ် မှီခိုပါတယ်၊ Roadmap ပြီးရုံနဲ့ မကပါဘူး။',
    },
    specializations: [
      { en: 'Frontend Developer', my: 'Frontend Developer' },
      { en: 'Backend Developer', my: 'Backend Developer' },
      { en: 'Database Engineer', my: 'Database Engineer' },
      { en: 'E-commerce Platforms', my: 'E-commerce Platform' },
      { en: 'Content Management Systems', my: 'Content Management System' },
      { en: 'API-first Development', my: 'API-first Development' },
      { en: 'Forward Deployed Engineer', my: 'Forward Deployed Engineer' },
    ],
    signals: [
      {
        weight: 2,
        keywords: ['web', 'website', 'websites', 'frontend', 'front-end', 'full-stack', 'fullstack', 'browser', 'client-side', 'application development', 'ဝက်ဘ်ဆိုက်', 'ဝက်ဘ်'],
        reason: {
          en: 'You mentioned an interest in building websites or web applications.',
          my: 'Website (သို့) Web Application တည်ဆောက်တာကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['html', 'css', 'javascript', 'layout', 'ဒီဇိုင်းနဲ့ကုဒ်'],
        reason: {
          en: "You're drawn to both the visual and technical sides of building for the web.",
          my: 'Web အတွက် အသွင်အပြင်နဲ့ နည်းပညာဘက် နှစ်ခုစလုံးကို စိတ်ဝင်စားပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['backend', 'back-end', 'api', 'apis', 'database', 'databases', 'sql', 'server-side', 'backend development', 'server-side development', 'data modeling'],
        reason: {
          en: 'You mentioned a specific interest in backend systems, APIs, or databases.',
          my: 'Backend System, API (သို့) Database များကို သီးခြား စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['full-stack developer', 'web developer', 'full stack', 'frontend developer', 'backend developer', 'database engineer'],
        reason: {
          en: 'Your goals point toward becoming a full-stack, front-end, or back-end developer.',
          my: 'သင့်ပန်းတိုင်က Full-Stack, Frontend (သို့) Backend Developer ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    name: 'Mobile Development',
    nameMy: 'Mobile Development',
    shortDescription: {
      en: 'Build applications that run on phones and tablets.',
      my: 'ဖုန်းနှင့် Tablet များပေါ်တွင် အလုပ်လုပ်သော Application များကို တည်ဆောက်သည်။',
    },
    internationalContext: {
      en: 'With billions of people using smartphones worldwide, mobile developers are needed by companies of every size, from startups to global brands.',
      my: 'ကမ္ဘာတစ်ဝှမ်းလူသန်းပေါင်းများစွာ Smartphone သုံးနေကြသဖြင့် Mobile Developer များကို Startup များမှ ကမ္ဘာလုံးဆိုင်ရာ Brand များအထိ လိုအပ်နေသည်။',
    },
    myanmarContext: {
      en: 'With mobile phones as the primary way most people in Myanmar access the internet, mobile developers are in strong demand.',
      my: 'မြန်မာနိုင်ငံရှိ လူအများစုသည် Internet ကို ဖုန်းမှတစ်ဆင့် အဓိကအသုံးပြုကြသဖြင့် Mobile Developer များကို အလွန်လိုအပ်နေပါသည်။',
    },
    roles: ['Mobile App Developer', 'Android Developer', 'iOS Developer'],
    skills: [
      { en: 'Attention to user experience', my: 'အသုံးပြုသူ အတွေ့အကြုံကို ဂရုစိုက်မှု' },
      { en: 'Patience with testing on different devices', my: 'Device အမျိုးမျိုးပေါ် စမ်းသပ်ရန် သည်းခံနိုင်မှု' },
      { en: 'Problem-solving', my: 'ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Consistency', my: 'တသမတ်တည်း လုပ်ဆောင်နိုင်မှု' },
    ],
    challenges: [
      {
        en: 'Apps need to work well across many different phone models — testing takes real effort.',
        my: 'App တွေက ဖုန်းမော်ဒယ်အမျိုးမျိုးပေါ်မှာ ကောင်းကောင်းအလုပ်လုပ်ဖို့ လိုအပ်လို့ စမ်းသပ်ရတာ အားထုတ်မှု လိုပါတယ်။',
      },
      {
        en: 'App store review processes can add extra waiting time.',
        my: 'App Store စစ်ဆေးမှု လုပ်ငန်းစဉ်က အချိန်ပိုကြာနိုင်ပါတယ်။',
      },
      {
        en: 'Mobile platforms update often, so periodic re-learning is normal.',
        my: 'Mobile Platform တွေက မကြာခဏ Update ဖြစ်နေလို့ အခါအားလျော်စွာ ပြန်လေ့လာရတာ ပုံမှန်ပါ။',
      },
    ],
    whatTheyDo: {
      en: 'Builds the apps people install and use on their phones and tablets.',
      my: 'လူတွေ ဖုန်းနှင့် Tablet ပေါ်တွင် Install လုပ်ပြီး အသုံးပြုသော App များကို တည်ဆောက်သည်။',
    },
    responsibilities: [
      { en: 'Building app screens and features', my: 'App Screen များနှင့် Feature များ တည်ဆောက်ခြင်း' },
      { en: 'Connecting apps to backend services', my: 'App များကို Backend Service များနှင့် ချိတ်ဆက်ခြင်း' },
      { en: 'Testing across different devices', my: 'Device အမျိုးမျိုးတွင် စမ်းသပ်ခြင်း' },
      { en: 'Publishing and updating apps', my: 'App များ ထုတ်ပြန်ပြီး Update လုပ်ခြင်း' },
    ],
    whereUsed: {
      en: 'Any company with a consumer or business app — from banks and delivery services to games and productivity tools.',
      my: 'ဘဏ်နှင့် ပို့ဆောင်ရေးဝန်ဆောင်မှုမှသည် Game နှင့် အလုပ်လုပ်ရေး Tool များအထိ App ရှိသော ကုမ္ပဏီတိုင်းတွင် အသုံးများသည်။',
    },
    suitableFor: {
      en: 'People who enjoy thinking about how real people use apps every day, and like seeing their work run on a physical device.',
      my: 'လူတွေ နေ့စဉ် App တွေကို ဘယ်လိုသုံးကြသလဲဆိုတာ တွေးရတာ ကြိုက်ပြီး ကိုယ့်အလုပ်ကို Device အစစ်ပေါ်မှာ အလုပ်လုပ်နေတာ မြင်ချင်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'moderate',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'Comfort using a smartphone', my: 'Smartphone သုံးရတာ အဆင်ပြေမှု' },
    ],
    progression: {
      en: 'Junior Mobile Developer → Mobile Developer → Senior Mobile Developer → Mobile Lead / Architect. Publishing real apps and handling real user feedback matters as much as the roadmap itself.',
      my: 'Junior Mobile Developer → Mobile Developer → Senior Mobile Developer → Mobile Lead / Architect။ App အစစ်ထုတ်ပြီး User Feedback အစစ်ကို ကိုင်တွယ်ရတာက Roadmap ကိုယ်တိုင်လောက် အရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'Android Development', my: 'Android Development' },
      { en: 'iOS Development', my: 'iOS Development' },
      { en: 'Cross-platform Development', my: 'Cross-platform Development' },
      { en: 'Mobile UI Engineering', my: 'Mobile UI Engineering' },
      { en: 'App Performance', my: 'App Performance' },
    ],
    signals: [
      {
        keywords: ['mobile', 'android', 'ios', 'mobile app', 'mobile apps', 'phone app', 'smartphone', 'app store', 'မိုဘိုင်း', 'ဖုန်းအက်ပ်'],
        reason: {
          en: 'You mentioned an interest in building mobile apps.',
          my: 'Mobile App တည်ဆောက်တာကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['touch interface', 'app design', 'everyday app'],
        reason: {
          en: "You're interested in how people use apps on their phones every day.",
          my: 'လူတွေ နေ့စဉ် ဖုန်းအက်ပ်တွေ ဘယ်လိုသုံးကြသလဲဆိုတာကို စိတ်ဝင်စားပါတယ်။',
        },
      },
      {
        keywords: ['mobile developer', 'android developer', 'ios developer'],
        reason: {
          en: 'Your goals point toward becoming a mobile app developer.',
          my: 'သင့်ပန်းတိုင်က Mobile App Developer ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    nameMy: 'UI/UX Design',
    shortDescription: {
      en: 'Design how digital products look, feel, and work for the people using them.',
      my: 'Digital Product များသည် အသုံးပြုသူများအတွက် ဘယ်လိုမြင်ရ၊ ခံစားရနှင့် အလုပ်လုပ်ရမလဲကို ဒီဇိုင်းရေးသည်။',
    },
    internationalContext: {
      en: 'As digital products multiply globally, companies increasingly compete on user experience, making skilled designers valuable everywhere.',
      my: 'ကမ္ဘာတစ်ဝှမ်း Digital Product များ တိုးများလာသည်နှင့်အမျှ ကုမ္ပဏီများသည် User Experience ဖြင့် ပိုမိုယှဉ်ပြိုင်လာကြသဖြင့် ကျွမ်းကျင်သော Designer များကို နေရာတိုင်းတွင် တန်ဖိုးထားလာကြသည်။',
    },
    myanmarContext: {
      en: 'As more Myanmar businesses build apps and websites, designers who understand local users are increasingly valued.',
      my: 'မြန်မာစီးပွားရေးလုပ်ငန်းများ App နှင့် Website များ ပိုမိုတည်ဆောက်လာသည်နှင့်အမျှ ပြည်တွင်းအသုံးပြုသူများကို နားလည်သော Designer များကို ပိုမိုတန်ဖိုးထားလာကြသည်။',
    },
    roles: ['UI/UX Designer', 'Product Designer', 'Interaction Designer'],
    skills: [
      { en: 'Empathy for users', my: 'အသုံးပြုသူအပေါ် စာနာနားလည်မှု' },
      { en: 'Visual sense', my: 'အမြင်ဆိုင်ရာ ခံစားနိုင်စွမ်း' },
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Openness to feedback', my: 'တုံ့ပြန်ချက်ကို ပွင့်လင်းစွာ လက်ခံနိုင်မှု' },
    ],
    challenges: [
      {
        en: 'Design decisions often need to be explained and defended to others — communication matters as much as visuals.',
        my: 'ဒီဇိုင်းဆုံးဖြတ်ချက်တွေကို တခြားသူတွေကို ရှင်းပြရတတ်လို့ ဆက်သွယ်ပြောဆိုနိုင်မှုလည်း အရေးကြီးပါတယ်။',
      },
      {
        en: 'Feedback and revisions are a normal, ongoing part of the process, not a sign of failure.',
        my: 'Feedback နဲ့ ပြန်လည်ပြင်ဆင်မှုတွေက ပုံမှန် လုပ်ငန်းစဉ်တစ်ခုပါ၊ ကျရှုံးမှု မဟုတ်ပါ။',
      },
      {
        en: 'Balancing what looks good with what actually works for users takes practice.',
        my: 'ကြည့်ကောင်းမှုနဲ့ အမှန်တကယ် အသုံးဝင်မှုကို ချိန်ညှိတတ်ဖို့ လေ့ကျင့်မှု လိုပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Decides how a digital product looks and works, based on what real users need.',
      my: 'အသုံးပြုသူများ တကယ်လိုအပ်ချက်ပေါ် အခြေခံပြီး Digital Product တစ်ခု ဘယ်လိုမြင်ရမလဲ၊ ဘယ်လိုအလုပ်လုပ်မလဲကို ဆုံးဖြတ်သည်။',
    },
    responsibilities: [
      { en: 'Researching user needs', my: 'အသုံးပြုသူ လိုအပ်ချက်များ လေ့လာစူးစမ်းခြင်း' },
      { en: 'Wireframing and prototyping', my: 'Wireframe နှင့် Prototype ရေးဆွဲခြင်း' },
      { en: 'Designing visual interfaces', my: 'အမြင်ဆိုင်ရာ Interface များ ဒီဇိုင်းရေးဆွဲခြင်း' },
      { en: 'Testing designs with real users', my: 'အသုံးပြုသူ အစစ်များနှင့် ဒီဇိုင်းများ စမ်းသပ်ခြင်း' },
    ],
    whereUsed: {
      en: 'Any company building an app or website that people need to actually enjoy using — from tech startups to banks.',
      my: 'Tech Startup များမှသည် ဘဏ်များအထိ လူတွေ တကယ်သုံးရတာ နှစ်သက်ရမည့် App (သို့) Website တည်ဆောက်သော ကုမ္ပဏီတိုင်းတွင် အသုံးများသည်။',
    },
    suitableFor: {
      en: 'People who notice small visual details, care about how things feel to use, and enjoy understanding how other people think.',
      my: 'အသေးစိတ် အမြင်ဆိုင်ရာ အရာများကို သတိထားမိပြီး သုံးရတာ ဘယ်လိုခံစားရမလဲဆိုတာ ဂရုစိုက်ပြီး တခြားသူတွေ ဘယ်လိုတွေးတယ်ဆိုတာ နားလည်ချင်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'beginner-friendly',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      {
        en: "An eye for visual detail helps but isn't required to start",
        my: 'အမြင်ဆိုင်ရာ အသေးစိတ်ကို သတိထားမိမှုက အထောက်အကူဖြစ်ပေမယ့် စဖို့ မလိုအပ်ပါ',
      },
    ],
    progression: {
      en: 'Junior Designer → UI/UX Designer → Senior Designer → Design Lead / Product Design Manager. Strong portfolios and real design critique matter more than the roadmap alone.',
      my: 'Junior Designer → UI/UX Designer → Senior Designer → Design Lead / Product Design Manager။ Portfolio ကောင်းကောင်းနှင့် တကယ့် Design Critique က Roadmap တစ်ခုတည်းထက် ပိုအရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'Product Design', my: 'Product Design' },
      { en: 'Interaction Design', my: 'Interaction Design' },
      { en: 'Visual / Graphic Design', my: 'Visual / Graphic Design' },
      { en: 'UX Research', my: 'UX Research' },
      { en: 'Design Systems', my: 'Design System' },
    ],
    signals: [
      {
        weight: 2,
        keywords: ['design', 'designing', 'ui', 'ux', 'ui/ux', 'user interface', 'user experience', 'interface', 'visual', 'graphic', 'graphics', 'layout', 'figma', 'prototyping', 'product design', 'visual design', 'ဒီဇိုင်း', 'အသွင်အပြင်'],
        reason: {
          en: 'You mentioned an interest in design and how things look and feel to use.',
          my: 'ဒီဇိုင်းနဲ့ အသုံးပြုရလွယ်ကူမှုကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['creative', 'art', 'drawing', 'color', 'aesthetics', 'အနုပညာ', 'ရေးဆွဲ'],
        reason: {
          en: 'Your creative eye and attention to detail fit well with design work.',
          my: 'သင့်ရဲ့ ဖန်တီးမှုစွမ်းရည်နဲ့ အသေးစိတ်ဂရုစိုက်မှုက ဒီဇိုင်းအလုပ်နဲ့ ကိုက်ညီပါတယ်။',
        },
      },
      {
        keywords: ['designer', 'ui designer', 'ux designer', 'product designer', 'ဒီဇိုင်နာ'],
        reason: {
          en: 'Your goals point toward becoming a UI/UX designer.',
          my: 'သင့်ပန်းတိုင်က UI/UX Designer ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'data-analysis',
    slug: 'data-analysis',
    name: 'Data Analysis',
    nameMy: 'Data Analysis',
    shortDescription: {
      en: 'Turn raw data into insights that help people make better decisions.',
      my: 'မူလ Data များကို ပိုကောင်းသော ဆုံးဖြတ်ချက်များချရန် အထောက်အကူဖြစ်စေမည့် သိမြင်နားလည်မှုအဖြစ် ပြောင်းလဲပေးသည်။',
    },
    internationalContext: {
      en: 'Data-driven decision-making is now standard practice across industries worldwide, keeping demand for data analysts consistently strong.',
      my: 'Data အခြေပြု ဆုံးဖြတ်ချက်ချမှတ်ခြင်းသည် ကမ္ဘာတစ်ဝှမ်း လုပ်ငန်းများတွင် စံအလေ့အကျင့်တစ်ခု ဖြစ်လာသဖြင့် Data Analyst များအတွက် လိုအပ်ချက်သည် စဉ်ဆက်မပြတ် ကောင်းမွန်နေသည်။',
    },
    myanmarContext: {
      en: 'Businesses across Myanmar are collecting more data than ever, creating growing demand for people who can make sense of it.',
      my: 'မြန်မာတစ်နိုင်ငံလုံးရှိ စီးပွားရေးလုပ်ငန်းများသည် Data များကို ယခင်ကထက် ပိုမိုစုဆောင်းနေကြသဖြင့် ၎င်းတို့ကို နားလည်အောင်လုပ်ပေးနိုင်သူများ လိုအပ်ချက် တိုးလာနေသည်။',
    },
    roles: ['Data Analyst', 'Business Analyst', 'Reporting Analyst'],
    skills: [
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Logical and structured thinking', my: 'ယုတ္တိရှိရှိ စနစ်တကျ တွေးခေါ်နိုင်မှု' },
      { en: 'Curiosity', my: 'စူးစမ်းလိုစိတ်' },
      { en: 'Clear communication of findings', my: 'တွေ့ရှိချက်များကို ရှင်းလင်းစွာ ဆက်သွယ်ပြောဆိုနိုင်မှု' },
    ],
    challenges: [
      {
        en: 'Real-world data is often messy, so cleaning it up takes patience.',
        my: 'လက်တွေ့ Data တွေက ရှုပ်ထွေးလေ့ရှိလို့ သန့်ရှင်းသပ်ရပ်အောင်လုပ်ဖို့ သည်းခံမှု လိုပါတယ်။',
      },
      {
        en: 'Explaining technical findings to non-technical people is a skill that takes practice.',
        my: 'နည်းပညာဆိုင်ရာ တွေ့ရှိချက်တွေကို နည်းပညာမကျွမ်းကျင်သူတွေကို ရှင်းပြတာက လေ့ကျင့်မှုလိုတဲ့ ကျွမ်းကျင်မှုတစ်ခုပါ။',
      },
      {
        en: 'Tools and methods keep evolving, so ongoing learning is part of the field.',
        my: 'Tool တွေနဲ့ နည်းလမ်းတွေက အမြဲပြောင်းလဲနေလို့ ဆက်လက်လေ့လာနေရတာ ပုံမှန်ပါ။',
      },
    ],
    whatTheyDo: {
      en: "Turns raw numbers and records into insights that help a business make decisions.",
      my: 'မူလ ကိန်းဂဏန်းများနှင့် မှတ်တမ်းများကို လုပ်ငန်းတစ်ခု ဆုံးဖြတ်ချက်ချရန် အထောက်အကူဖြစ်စေမည့် သိမြင်နားလည်မှုများအဖြစ် ပြောင်းလဲပေးသည်။',
    },
    responsibilities: [
      { en: 'Collecting and cleaning data', my: 'Data များ စုဆောင်းပြီး သန့်ရှင်းခြင်း' },
      { en: 'Analyzing trends and patterns', my: 'လမ်းကြောင်းများနှင့် ပုံစံများ ခွဲခြမ်းစိတ်ဖြာခြင်း' },
      { en: 'Building reports and dashboards', my: 'Report များနှင့် Dashboard များ တည်ဆောက်ခြင်း' },
      { en: 'Presenting findings to decision-makers', my: 'တွေ့ရှိချက်များကို ဆုံးဖြတ်ချက်ချသူများထံ တင်ပြခြင်း' },
    ],
    whereUsed: {
      en: 'Any business that collects data — retail, banking, telecom, and tech companies all rely on data analysts to make sense of it.',
      my: 'Data စုဆောင်းသော လုပ်ငန်းတိုင်း — လက်လီလက်ကား၊ ဘဏ်လုပ်ငန်း၊ ဆက်သွယ်ရေးနှင့် Tech ကုမ္ပဏီများအားလုံးသည် Data ကို နားလည်အောင်လုပ်ပေးရန် Data Analyst များကို အားထားကြသည်။',
    },
    suitableFor: {
      en: "People who are naturally curious about 'why', comfortable with numbers, and enjoy explaining findings clearly.",
      my: "'ဘာကြောင့်' ဆိုတာကို သဘာဝအလျောက် စူးစမ်းလိုတတ်ပြီး ကိန်းဂဏန်းများနှင့် အဆင်ပြေပြီး တွေ့ရှိချက်များကို ရှင်းလင်းစွာ ရှင်းပြရတာ နှစ်သက်သူများအတွက် သင့်လျော်ပါတယ်။",
    },
    difficulty: 'beginner-friendly',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'Comfort with basic math and spreadsheets', my: 'အခြေခံ သင်္ချာနှင့် Spreadsheet သုံးရတာ အဆင်ပြေမှု' },
    ],
    progression: {
      en: 'Junior Data Analyst → Data Analyst → Senior Data Analyst → Analytics Lead / Data Scientist. Real growth comes from working with messy real-world data, not just clean tutorial datasets.',
      my: 'Junior Data Analyst → Data Analyst → Senior Data Analyst → Analytics Lead / Data Scientist။ တကယ့်တိုးတက်မှုက ရှုပ်ထွေးသော လက်တွေ့ Data နှင့် အလုပ်လုပ်ရာကနေ လာတာပါ၊ သန့်ရှင်းသော Tutorial Dataset များသက်သက် မဟုတ်ပါ။',
    },
    specializations: [
      { en: 'Data Analytics', my: 'Data Analytics' },
      { en: 'Data Engineering', my: 'Data Engineering' },
      { en: 'Business Intelligence', my: 'Business Intelligence' },
      { en: 'Machine Learning', my: 'Machine Learning' },
      { en: 'Data Visualization', my: 'Data Visualization' },
    ],
    signals: [
      {
        keywords: ['data', 'analysis', 'analytics', 'statistics', 'numbers', 'spreadsheet', 'excel', 'chart', 'charts', 'dataset', 'ဒေတာ', 'ကိန်းဂဏန်း'],
        reason: {
          en: 'You mentioned an interest in working with data and numbers.',
          my: 'ဒေတာနဲ့ ကိန်းဂဏန်းတွေကို လုပ်ဆောင်ရတာကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['patterns', 'trends', 'research', 'organized', 'organize', 'detail-oriented', 'ခွဲခြမ်းစိတ်ဖြာ'],
        reason: {
          en: 'You enjoy finding patterns and being organized — useful strengths for data work.',
          my: 'ပုံစံများ ရှာဖွေတာနဲ့ စနစ်တကျ လုပ်ဆောင်တာက Data Analysis အတွက် အသုံးဝင်တဲ့ အားသာချက်တွေပါ။',
        },
      },
      {
        keywords: ['data analyst', 'data scientist', 'business analyst'],
        reason: {
          en: 'Your goals point toward a data analyst or similar role.',
          my: 'သင့်ပန်းတိုင်က Data Analyst ကဲ့သို့ အလုပ်အခန်းကဏ္ဍတစ်ခုကို ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    name: 'Cloud / DevOps',
    nameMy: 'Cloud / DevOps',
    shortDescription: {
      en: 'Build and maintain the infrastructure and systems that keep applications running reliably.',
      my: 'Application များကို ယုံကြည်စိတ်ချစွာ လည်ပတ်နေစေမည့် Infrastructure နှင့် System များကို တည်ဆောက်ပြီး ထိန်းသိမ်းသည်။',
    },
    internationalContext: {
      en: 'Nearly every modern company relies on cloud infrastructure, making cloud and DevOps skills among the most consistently in-demand worldwide.',
      my: 'ခေတ်မီကုမ္ပဏီ နီးပါးအားလုံးသည် Cloud Infrastructure ကို အားထားနေကြသဖြင့် Cloud နှင့် DevOps ကျွမ်းကျင်မှုများသည် ကမ္ဘာတစ်ဝှမ်း အလွန်လိုအပ်သော ကျွမ်းကျင်မှုများထဲတွင် ပါဝင်သည်။',
    },
    myanmarContext: {
      en: 'Cloud and DevOps skills can support local technology teams as well as remote technology opportunities with international companies.',
      my: 'Cloud နှင့် DevOps ကျွမ်းကျင်မှုများသည် ပြည်တွင်းနည်းပညာအဖွဲ့များကိုသာမက နိုင်ငံတကာကုမ္ပဏီများနှင့် အဝေးမှအလုပ်အခွင့်အလမ်းများကိုပါ ပံ့ပိုးပေးနိုင်ပါသည်။',
    },
    roles: ['Cloud Engineer', 'DevOps Engineer', 'Infrastructure Engineer', 'Platform Engineer'],
    skills: [
      { en: 'Reliability and attention to detail', my: 'ယုံကြည်စိတ်ချရမှုနဲ့ အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Calm under pressure', my: 'ဖိအားအောက်တွင် တည်ငြိမ်မှု' },
      { en: 'Problem-solving', my: 'ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Comfort with automation and scripting', my: 'အလိုအလျောက်လုပ်ဆောင်မှုနဲ့ Script ရေးရန် သက်တောင့်သက်သာရှိမှု' },
    ],
    challenges: [
      {
        en: 'Systems can fail at inconvenient times, so staying calm while troubleshooting matters.',
        my: 'System တွေက အချိန်မရွေး ပျက်ကွက်နိုင်လို့ ပြဿနာဖြေရှင်းရင်း တည်ငြိမ်နေတာ အရေးကြီးပါတယ်။',
      },
      {
        en: 'There are many tools to learn, so it helps to build a strong foundation first (like Linux and networking) before going deep.',
        my: 'သင်ယူစရာ Tool အများကြီးရှိလို့ Linux နဲ့ Network လို အခြေခံကောင်းကောင်းတည်ဆောက်ပြီးမှ နက်နက်ရှိုင်းရှိုင်း ဆက်လေ့လာတာ ပိုကောင်းပါတယ်။',
      },
      {
        en: 'Understanding how many systems connect together takes time to build up.',
        my: 'System များစွာ ဘယ်လိုချိတ်ဆက်နေသလဲဆိုတာ နားလည်ဖို့ အချိန်ယူရပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Designs, deploys, manages, and maintains the cloud infrastructure and systems that organizations rely on to run their applications.',
      my: 'အဖွဲ့အစည်းများ၏ Application များ လည်ပတ်ရန် အားထားသော Cloud Infrastructure နှင့် System များကို ဒီဇိုင်းရေး၊ Deploy လုပ်၊ စီမံခန့်ခွဲပြီး ထိန်းသိမ်းသည်။',
    },
    responsibilities: [
      { en: 'Managing compute, storage, and networking', my: 'Compute၊ Storage နှင့် Networking စီမံခန့်ခွဲခြင်း' },
      { en: 'Automating deployment pipelines', my: 'Deployment Pipeline များကို အလိုအလျောက်ဖြစ်အောင် လုပ်ဆောင်ခြင်း' },
      { en: 'Monitoring and troubleshooting production systems', my: 'Production System များကို စောင့်ကြည့်ပြီး ပြဿနာဖြေရှင်းခြင်း' },
      { en: 'Working with security and IAM policies', my: 'လုံခြုံရေးနှင့် IAM မူဝါဒများနှင့် လုပ်ဆောင်ခြင်း' },
    ],
    whereUsed: {
      en: 'Virtually every company running software online — from local startups to global enterprises — needs cloud infrastructure managed reliably.',
      my: 'Online မှ Software လည်ပတ်နေသော ကုမ္ပဏီ အားလုံးနီးပါး — ပြည်တွင်း Startup များမှ ကမ္ဘာလုံးဆိုင်ရာ လုပ်ငန်းကြီးများအထိ — Cloud Infrastructure ကို ယုံကြည်စိတ်ချစွာ စီမံခန့်ခွဲပေးရန် လိုအပ်သည်။',
    },
    suitableFor: {
      en: 'People who like keeping systems running smoothly behind the scenes, enjoy automation, and stay calm when something breaks.',
      my: 'System များကို နောက်ကွယ်မှ ချောမွေ့စွာ လည်ပတ်နေအောင် ထိန်းထားရတာ ကြိုက်ပြီး Automation ကို နှစ်သက်ကာ တစ်ခုခု ပျက်သွားရင်လည်း တည်ငြိမ်နေနိုင်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'moderate',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      {
        en: 'Comfort with the command line helps but can be learned from the start',
        my: 'Command Line နှင့် အဆင်ပြေမှုက အထောက်အကူဖြစ်ပေမယ့် အစကတည်းက လေ့လာနိုင်ပါတယ်',
      },
    ],
    progression: {
      en: 'Junior Cloud/DevOps Engineer → Cloud/DevOps Engineer → Senior Cloud/DevOps Engineer → Cloud Architect / Platform Lead / SRE Lead. Production experience and incident response matter as much as certifications.',
      my: 'Junior Cloud/DevOps Engineer → Cloud/DevOps Engineer → Senior Cloud/DevOps Engineer → Cloud Architect / Platform Lead / SRE Lead။ Production အတွေ့အကြုံနှင့် Incident Response က Certification လောက် အရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'AWS Cloud Engineering', my: 'AWS Cloud Engineering' },
      { en: 'Azure Cloud Engineering', my: 'Azure Cloud Engineering' },
      { en: 'Google Cloud Engineering', my: 'Google Cloud Engineering' },
      { en: 'Cloud Infrastructure', my: 'Cloud Infrastructure' },
      { en: 'Cloud Security', my: 'Cloud Security' },
      { en: 'DevOps / Platform Engineering', my: 'DevOps / Platform Engineering' },
      { en: 'Cloud Architecture', my: 'Cloud Architecture' },
      { en: 'DevSecOps', my: 'DevSecOps' },
    ],
    signals: [
      {
        keywords: ['cloud', 'devops', 'infrastructure', 'server', 'servers', 'deploy', 'deployment', 'linux', 'system administration', 'docker', 'kubernetes', 'ဆာဗာ', 'စနစ်', 'အခြေခံအဆောက်အအုံ'],
        reason: {
          en: 'You mentioned an interest in infrastructure, servers, or systems.',
          my: 'Infrastructure၊ Server (သို့) System များကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['aws', 'azure', 'google cloud', 'gcp', 'virtualization', 'system monitoring', 'serverless', 'cloud infrastructure', 'ci/cd', 'cicd', 'continuous integration', 'continuous deployment'],
        reason: {
          en: 'You mentioned specific cloud platforms or infrastructure tools.',
          my: 'သီးခြား Cloud Platform (သို့) Infrastructure Tool များကို သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['reliability', 'automation', 'automate', 'behind the scenes', 'keeping things running', 'အလိုအလျောက်'],
        reason: {
          en: "You're drawn to keeping systems reliable and automating repetitive work.",
          my: 'စနစ်များကို ယုံကြည်စိတ်ချရအောင် ထားရှိတာနဲ့ အလိုအလျောက်လုပ်ဆောင်မှုကို စိတ်ဝင်စားပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['devops engineer', 'cloud engineer', 'infrastructure engineer', 'systems engineer', 'platform engineer', 'devsecops', 'devsecops engineer'],
        reason: {
          en: 'Your goals point toward a cloud or DevOps engineering role.',
          my: 'သင့်ပန်းတိုင်က Cloud (သို့) DevOps Engineer ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    nameMy: 'Cybersecurity',
    shortDescription: {
      en: 'Protect systems, networks, and data from unauthorized access and attacks.',
      my: 'System၊ Network နှင့် Data များကို ခွင့်ပြုချက်မရှိသော ဝင်ရောက်မှုနှင့် တိုက်ခိုက်မှုများမှ ကာကွယ်သည်။',
    },
    internationalContext: {
      en: 'As cyber threats grow worldwide, organizations of every size and country are investing more in security talent.',
      my: 'ကမ္ဘာတစ်ဝှမ်း Cyber ခြိမ်းခြောက်မှုများ ကြီးထွားလာသည်နှင့်အမျှ အဖွဲ့အစည်းအရွယ်အစားနှင့် နိုင်ငံမရွေး လုံခြုံရေး ကျွမ်းကျင်ပညာရှင်များအပေါ် ပိုမိုရင်းနှီးမြှုပ်နှံလာကြသည်။',
    },
    myanmarContext: {
      en: 'As more organizations in Myanmar move online, the need for people who can keep systems and data secure continues to grow.',
      my: 'မြန်မာနိုင်ငံရှိ အဖွဲ့အစည်းများ Online သို့ ပိုမိုပြောင်းရွှေ့လာသည်နှင့်အမျှ System နှင့် Data များကို လုံခြုံအောင်ထိန်းသိမ်းပေးနိုင်သူများ လိုအပ်ချက် ဆက်လက်တိုးလာနေသည်။',
    },
    roles: ['Security Analyst', 'Cybersecurity Specialist', 'Penetration Tester'],
    skills: [
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Curiosity and investigative thinking', my: 'စူးစမ်းလိုစိတ်နဲ့ စုံစမ်းစစ်ဆေးတတ်တဲ့ တွေးခေါ်မှု' },
      { en: 'Patience', my: 'သည်းခံမှု' },
      { en: 'Staying calm under pressure', my: 'ဖိအားအောက်တွင် တည်ငြိမ်မှု' },
    ],
    challenges: [
      {
        en: 'The field changes constantly as new threats appear, so ongoing learning is expected.',
        my: 'ခြိမ်းခြောက်မှုအသစ်တွေ ပေါ်လာတာနဲ့အမျှ ကဏ္ဍက အမြဲပြောင်းလဲနေလို့ ဆက်လက်လေ့လာနေရတာ မျှော်လင့်ရပါတယ်။',
      },
      {
        en: 'Some roles involve responding to incidents under time pressure.',
        my: 'အချို့ အလုပ်တွေမှာ အချိန်ဖိအားအောက်က ဖြစ်ရပ်တွေကို တုံ့ပြန်ရတတ်ပါတယ်။',
      },
      {
        en: 'Building foundational knowledge in networking and systems first makes security concepts click faster.',
        my: 'Network နဲ့ System အခြေခံကို အရင်တည်ဆောက်ထားရင် Security သဘောတရားတွေ ပိုမိုနားလည်လွယ်ပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: "Protects an organization's systems, networks, and data from unauthorized access and attacks.",
      my: 'အဖွဲ့အစည်းတစ်ခု၏ System၊ Network နှင့် Data များကို ခွင့်ပြုချက်မရှိသော ဝင်ရောက်မှုနှင့် တိုက်ခိုက်မှုများမှ ကာကွယ်သည်။',
    },
    responsibilities: [
      { en: 'Monitoring systems for threats', my: 'ခြိမ်းခြောက်မှုများအတွက် System များ စောင့်ကြည့်ခြင်း' },
      { en: 'Identifying and fixing vulnerabilities', my: 'အားနည်းချက်များ ရှာဖွေပြီး ပြင်ဆင်ခြင်း' },
      { en: 'Responding to security incidents', my: 'လုံခြုံရေး ဖြစ်ရပ်များကို တုံ့ပြန်ခြင်း' },
      { en: 'Setting and enforcing security policies', my: 'လုံခြုံရေး မူဝါဒများ သတ်မှတ်ပြီး လိုက်နာစေခြင်း' },
    ],
    whereUsed: {
      en: 'Any organization with valuable data or systems — banks, telecoms, government agencies, and tech companies all need security professionals.',
      my: 'တန်ဖိုးရှိသော Data (သို့) System ရှိသော အဖွဲ့အစည်းတိုင်း — ဘဏ်များ၊ ဆက်သွယ်ရေးလုပ်ငန်းများ၊ အစိုးရဌာနများနှင့် Tech ကုမ္ပဏီများအားလုံးသည် လုံခြုံရေး ပညာရှင်များ လိုအပ်ကြသည်။',
    },
    suitableFor: {
      en: 'People who are naturally cautious, enjoy investigating how things could go wrong, and pay close attention to detail.',
      my: 'သဘာဝအလျောက် သတိထားတတ်ပြီး အရာများ ဘယ်လိုမှားနိုင်သလဲဆိုတာ စူးစမ်းရတာ နှစ်သက်ကာ အသေးစိတ်ကို ဂရုစိုက်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'moderate',
    prerequisiteKnowledge: [
      { en: 'Basic networking and systems knowledge helps', my: 'အခြေခံ Networking နှင့် System အသိပညာ အထောက်အကူဖြစ်သည်' },
      { en: 'Comfort with the command line', my: 'Command Line နှင့် အဆင်ပြေမှု' },
    ],
    progression: {
      en: 'Junior Security Analyst → Security Analyst → Senior Security Analyst → Security Architect / SOC Lead. Hands-on incident experience matters as much as any certification.',
      my: 'Junior Security Analyst → Security Analyst → Senior Security Analyst → Security Architect / SOC Lead။ လက်တွေ့ Incident အတွေ့အကြုံက မည်သည့် Certification ကဲ့သို့ပင် အရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'Network Security', my: 'Network Security' },
      { en: 'Cloud Security', my: 'Cloud Security' },
      { en: 'SOC / Blue Team', my: 'SOC / Blue Team' },
      { en: 'Penetration Testing', my: 'Penetration Testing' },
      { en: 'Application Security', my: 'Application Security' },
      { en: 'Digital Forensics', my: 'Digital Forensics' },
    ],
    signals: [
      {
        keywords: ['security', 'secure', 'cybersecurity', 'cyber', 'cyber security', 'hack', 'hacking', 'hacker', 'hackers', 'protect', 'protecting', 'protection', 'firewall', 'virus', 'malware', 'လုံခြုံရေး', 'ကာကွယ်'],
        reason: {
          en: 'You mentioned an interest in protecting systems and keeping data safe.',
          my: 'စနစ်များကို ကာကွယ်တာနဲ့ ဒေတာလုံခြုံရေးကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['pen testing', 'penetration testing', 'pentest', 'pentesting', 'ethical hacking', 'offensive security', 'defensive security', 'soc', 'wireshark', 'kali linux', 'vulnerability assessment', 'security operations', 'network security'],
        reason: {
          en: 'You mentioned specific security practices, tools, or roles like penetration testing or SOC work.',
          my: 'Penetration Testing (သို့) SOC အလုပ်ကဲ့သို့ သီးခြား Security လုပ်ငန်းစဉ်၊ Tool (သို့) အခန်းကဏ္ဍများကို သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['risk', 'vigilant', 'careful', 'investigate', 'investigation', 'detective'],
        reason: {
          en: 'Your careful, investigative mindset fits well with cybersecurity work.',
          my: 'သင့်ရဲ့ သတိထား ဂရုစိုက်တတ်တဲ့ စူးစမ်းလေ့လာမှုစိတ်က Cybersecurity အလုပ်နဲ့ ကိုက်ညီပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['security engineer', 'cybersecurity analyst', 'penetration tester', 'security specialist', 'soc analyst'],
        reason: {
          en: 'Your goals point toward a cybersecurity role.',
          my: 'သင့်ပန်းတိုင်က Cybersecurity ဆိုင်ရာ အလုပ်အခန်းကဏ္ဍတစ်ခုကို ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'networking',
    slug: 'networking',
    name: 'Networking',
    nameMy: 'Networking',
    shortDescription: {
      en: 'Design, build, and maintain the connections that let computers and devices communicate.',
      my: 'ကွန်ပျူတာနှင့် Device များ ဆက်သွယ်နိုင်ရန် ချိတ်ဆက်မှုများကို ဒီဇိုင်းရေး၊ တည်ဆောက်ပြီး ထိန်းသိမ်းသည်။',
    },
    internationalContext: {
      en: 'Every connected system in the world depends on networking fundamentals, making these skills a stable, transferable foundation across the tech industry.',
      my: 'ကမ္ဘာပေါ်ရှိ ချိတ်ဆက်ထားသော System အားလုံးသည် Networking အခြေခံအပေါ် မှီခိုနေသဖြင့် ဤကျွမ်းကျင်မှုများသည် နည်းပညာလောကတစ်ခုလုံးတွင် တည်ငြိမ်ပြီး လွှဲပြောင်းနိုင်သော အခြေခံတစ်ခု ဖြစ်သည်။',
    },
    myanmarContext: {
      en: "Reliable networking is the foundation every other technology role depends on, and skilled network professionals are needed across Myanmar's growing digital infrastructure.",
      my: 'ယုံကြည်စိတ်ချရသော Network သည် အခြားနည်းပညာအလုပ်အားလုံး မှီခိုနေရသော အခြေခံအုတ်မြစ်ဖြစ်ပြီး မြန်မာနိုင်ငံ၏ ကြီးထွားနေသော Digital Infrastructure တွင် ကျွမ်းကျင်သော Network ပညာရှင်များ လိုအပ်နေပါသည်။',
    },
    roles: ['Network Engineer', 'Network Administrator', 'Network Technician'],
    skills: [
      { en: 'Methodical troubleshooting', my: 'စနစ်တကျ ပြဿနာဖြေရှင်းနိုင်မှု' },
      { en: 'Patience', my: 'သည်းခံမှု' },
      { en: 'Attention to detail', my: 'အသေးစိတ်ဂရုစိုက်မှု' },
      { en: 'Clear documentation habits', my: 'ရှင်းလင်းစွာ မှတ်တမ်းရေးတင်တတ်မှု' },
    ],
    challenges: [
      {
        en: 'Diagnosing connection problems can take methodical, step-by-step troubleshooting.',
        my: 'ချိတ်ဆက်မှုပြဿနာများကို ရှာဖွေဖို့ စနစ်တကျ တစ်ဆင့်ချင်း စစ်ဆေးရပါတယ်။',
      },
      {
        en: 'Some work involves physical setup and hardware, not just software.',
        my: 'အချို့လုပ်ငန်းတွေမှာ Software တင်မက Hardware ကိုပါ ကိုင်တွယ်ရပါတယ်။',
      },
      {
        en: 'Foundational concepts take time to click, but they support everything else in tech once learned.',
        my: 'အခြေခံသဘောတရားတွေ နားလည်ဖို့ အချိန်ယူရပေမယ့် ရလာရင် နည်းပညာအခြားနေရာတွေမှာ အထောက်အကူဖြစ်ပါတယ်။',
      },
    ],
    whatTheyDo: {
      en: 'Designs, builds, and maintains the network connections that let computers, servers, and devices communicate reliably.',
      my: 'ကွန်ပျူတာ၊ Server နှင့် Device များ ယုံကြည်စိတ်ချစွာ ဆက်သွယ်နိုင်ရန် Network ချိတ်ဆက်မှုများကို ဒီဇိုင်းရေး၊ တည်ဆောက်ပြီး ထိန်းသိမ်းသည်။',
    },
    responsibilities: [
      { en: 'Configuring routers and switches', my: 'Router နှင့် Switch များ Configure လုပ်ခြင်း' },
      { en: 'Troubleshooting connectivity issues', my: 'ချိတ်ဆက်မှု ပြဿနာများ ဖြေရှင်းခြင်း' },
      { en: 'Monitoring network performance', my: 'Network Performance စောင့်ကြည့်ခြင်း' },
      { en: 'Securing network access', my: 'Network ဝင်ရောက်ခွင့် လုံခြုံအောင်ပြုလုပ်ခြင်း' },
    ],
    whereUsed: {
      en: 'Every organization with an office, data center, or online service depends on networking professionals to keep things connected.',
      my: 'Office၊ Data Center (သို့) Online ဝန်ဆောင်မှုရှိသော အဖွဲ့အစည်းတိုင်းသည် အရာအားလုံး ချိတ်ဆက်နေအောင် ထိန်းရန် Networking ပညာရှင်များအပေါ် မှီခိုကြသည်။',
    },
    suitableFor: {
      en: "People who like methodical, step-by-step troubleshooting and don't mind working with both hardware and software.",
      my: 'စနစ်တကျ တစ်ဆင့်ချင်း ပြဿနာဖြေရှင်းတာ ကြိုက်ပြီး Hardware နှင့် Software နှစ်ခုလုံးနှင့် အလုပ်လုပ်ရတာ ဂရုမစိုက်သူများအတွက် သင့်လျော်ပါတယ်။',
    },
    difficulty: 'beginner-friendly',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'Curiosity about how the internet works', my: 'Internet ဘယ်လိုအလုပ်လုပ်သလဲဆိုတာ သိလိုစိတ်' },
    ],
    progression: {
      en: 'Junior Network Engineer → Network Engineer → Senior Network Engineer → Network Architect / Infrastructure Lead. Hands-on troubleshooting experience matters as much as certifications like CCNA.',
      my: 'Junior Network Engineer → Network Engineer → Senior Network Engineer → Network Architect / Infrastructure Lead။ လက်တွေ့ ပြဿနာဖြေရှင်းမှု အတွေ့အကြုံက CCNA လို Certification များကဲ့သို့ပင် အရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'Enterprise Networking', my: 'Enterprise Networking' },
      { en: 'Network Security', my: 'Network Security' },
      { en: 'Wireless Networking', my: 'Wireless Networking' },
      { en: 'Cloud Networking', my: 'Cloud Networking' },
      { en: 'Network Automation', my: 'Network Automation' },
    ],
    signals: [
      {
        keywords: ['network', 'networking', 'networks', 'wifi', 'router', 'routers', 'connection', 'connectivity', 'cabling', 'protocol', 'ကွန်ရက်', 'ချိတ်ဆက်'],
        reason: {
          en: 'You mentioned an interest in how networks and connections work.',
          my: 'ကွန်ရက်များနဲ့ ချိတ်ဆက်မှုတွေ ဘယ်လိုအလုပ်လုပ်သလဲဆိုတာကို စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        keywords: ['troubleshoot', 'troubleshooting', 'fix connection', 'hardware', 'physical setup'],
        reason: {
          en: 'You enjoy troubleshooting connections and hands-on technical setup.',
          my: 'ချိတ်ဆက်မှုပြဿနာများ ဖြေရှင်းတာနဲ့ လက်တွေ့ Setup လုပ်ရတာကို စိတ်ဝင်စားပါတယ်။',
        },
      },
      {
        keywords: ['network engineer', 'network administrator', 'network technician'],
        reason: {
          en: 'Your goals point toward a networking engineer or administrator role.',
          my: 'သင့်ပန်းတိုင်က Network Engineer (သို့) Administrator ဖြစ်ဖို့ ညွှန်ပြနေပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'ai-engineer',
    slug: 'ai-engineer',
    name: 'AI Engineering',
    nameMy: 'AI Engineering',
    shortDescription: {
      en: 'Build and apply artificial intelligence and machine learning models to solve real problems.',
      my: 'တကယ့် ပြဿနာများ ဖြေရှင်းရန် Artificial Intelligence နှင့် Machine Learning Model များကို တည်ဆောက်ပြီး အသုံးချသည်။',
    },
    internationalContext: {
      en: 'AI and generative AI skills are among the fastest-growing areas of demand worldwide, as organizations across every industry look to apply them.',
      my: 'AI နှင့် Generative AI ကျွမ်းကျင်မှုများသည် လုပ်ငန်းတိုင်းရှိ အဖွဲ့အစည်းများ အသုံးချရန် ကြည့်နေကြသဖြင့် ကမ္ဘာတစ်ဝှမ်း အလျင်မြန်ဆုံး ကြီးထွားနေသော လိုအပ်ချက် နယ်ပယ်များထဲမှ တစ်ခု ဖြစ်သည်။',
    },
    myanmarContext: {
      en: 'AI skills are still an emerging area in Myanmar, which means early learners have a real opportunity to stand out — though verified local learning resources are still limited compared to more established paths.',
      my: 'AI ကျွမ်းကျင်မှုများသည် မြန်မာနိုင်ငံတွင် တဖြည်းဖြည်း ပေါ်ထွက်နေသေးသော နယ်ပယ်တစ်ခု ဖြစ်သည် — ဆိုလိုသည်မှာ စောစီးစွာ လေ့လာသူများအတွက် ထူးခြားစွာ ထင်ရှားနိုင်သော အခွင့်အလမ်း အစစ်အမှန် ရှိသည် — သို့သော် အတည်ပြုပြီးသော ပြည်တွင်း လေ့လာရေး အရင်းအမြစ်များမှာမူ ပိုတည်ငြိမ်ပြီးသား လမ်းကြောင်းများနှင့် နှိုင်းယှဉ်ပါက ဆက်လက်ကန့်သတ်ထားဆဲ ဖြစ်သည်။',
    },
    roles: ['AI Engineer', 'Machine Learning Engineer', 'Generative AI Engineer', 'Prompt Engineer'],
    skills: [
      { en: 'Comfort with math and statistics fundamentals', my: 'သင်္ချာနှင့် စာရင်းအင်း အခြေခံများနှင့် အဆင်ပြေမှု' },
      { en: 'Curiosity about how models actually work', my: 'Model များ တကယ်အလုပ်လုပ်ပုံအကြောင်း စူးစမ်းလိုစိတ်' },
      { en: 'Patience with experimentation and iteration', my: 'စမ်းသပ်မှုနှင့် ထပ်ခါထပ်ခါ ပြင်ဆင်ခြင်းအတွက် သည်းခံနိုင်မှု' },
      { en: 'Careful, honest evaluation of results', my: 'ရလဒ်များကို သေချာ၍ ရိုးသားစွာ အကဲဖြတ်နိုင်မှု' },
    ],
    challenges: [
      {
        en: 'The field moves very quickly — staying current takes real, ongoing effort.',
        my: 'ဤနယ်ပယ်သည် အလွန်လျင်မြန်စွာ ရွေ့လျားနေသဖြင့် နောက်ဆုံးအချက်အလက်များနှင့် မှီအောင် ဆက်လက်ကြိုးစားရမည်။',
      },
      {
        en: 'Results from AI models are probabilistic, not perfectly predictable — learning to evaluate them honestly takes practice.',
        my: 'AI Model များမှ ရလဒ်များသည် Probabilistic ဖြစ်ပြီး လုံးဝ ခန့်မှန်း၍မရပါ — ၎င်းတို့ကို ရိုးသားစွာ အကဲဖြတ်တတ်ရန် လေ့ကျင့်မှု လိုအပ်သည်။',
      },
      {
        en: 'A solid foundation in programming and basic math makes this path much more approachable — jumping straight into advanced AI topics without it is a common source of frustration.',
        my: 'Programming နှင့် အခြေခံ သင်္ချာတွင် ခိုင်မာသော အခြေခံရှိခြင်းက ဤလမ်းကြောင်းကို ပိုအလွယ်တကူ ချဉ်းကပ်နိုင်စေသည် — ၎င်းမပါဘဲ အဆင့်မြင့် AI ခေါင်းစဉ်များသို့ တိုက်ရိုက်ခုန်ဝင်ခြင်းသည် စိတ်ပျက်စရာ ဖြစ်တတ်သည့် အများသုံး အကြောင်းရင်းတစ်ခုဖြစ်သည်။',
      },
    ],
    whatTheyDo: {
      en: 'Builds, trains, and applies AI and machine learning models — including generative AI and language models — to solve real problems.',
      my: 'တကယ့် ပြဿနာများကို ဖြေရှင်းရန် AI နှင့် Machine Learning Model များ — Generative AI နှင့် Language Model များအပါအဝင် — ကို တည်ဆောက်၊ Train လုပ်ပြီး အသုံးချသည်။',
    },
    responsibilities: [
      { en: 'Preparing and cleaning data for models', my: 'Model များအတွက် Data ပြင်ဆင်ပြီး သန့်ရှင်းခြင်း' },
      { en: 'Building, training, and evaluating models', my: 'Model များ တည်ဆောက်၊ Train လုပ်ပြီး အကဲဖြတ်ခြင်း' },
      { en: 'Integrating AI models into real applications', my: 'AI Model များကို Application အစစ်များထဲသို့ ပေါင်းစပ်ထည့်သွင်းခြင်း' },
      { en: 'Monitoring model behavior in production', my: 'Production ရှိ Model Behavior ကို စောင့်ကြည့်ခြင်း' },
    ],
    whereUsed: {
      en: 'A growing number of companies across every industry — from startups to large enterprises — are building products that use AI or generative AI.',
      my: 'Startup များမှ လုပ်ငန်းကြီးများအထိ လုပ်ငန်းတိုင်းရှိ ကုမ္ပဏီအရေအတွက် တိုးလာနေပြီး AI (သို့) Generative AI သုံးသော Product များ တည်ဆောက်နေကြသည်။',
    },
    suitableFor: {
      en: 'People who enjoy both the mathematical/experimental side of building models and the practical side of turning them into something useful.',
      my: 'Model များ တည်ဆောက်ရာတွင် သင်္ချာ/စမ်းသပ်မှုဘက်နှင့် ၎င်းတို့ကို အသုံးဝင်သောအရာအဖြစ် ပြောင်းလဲပေးသော လက်တွေ့ဘက် နှစ်ခုစလုံးကို နှစ်သက်သူများအတွက် သင့်လျော်ပါသည်။',
    },
    difficulty: 'challenging',
    prerequisiteKnowledge: [
      { en: 'Basic programming, ideally Python', my: 'အခြေခံ Programming, Python ဆိုလျှင် အကောင်းဆုံး' },
      { en: 'Comfort with basic math (statistics, linear algebra helps but can be learned along the way)', my: 'အခြေခံ သင်္ချာနှင့် အဆင်ပြေမှု (Statistics, Linear Algebra အထောက်အကူဖြစ်သော်လည်း လမ်းတလျှောက် လေ့လာနိုင်သည်)' },
    ],
    progression: {
      en: 'Junior AI/ML Engineer → AI/ML Engineer → Senior AI Engineer → AI Lead / ML Architect. Real growth comes from building and shipping real models, not just following tutorials.',
      my: 'Junior AI/ML Engineer → AI/ML Engineer → Senior AI Engineer → AI Lead / ML Architect။ တကယ့်တိုးတက်မှုက Model အစစ်များ တည်ဆောက်ပြီး ထုတ်ဖော်ရာကနေ လာပါတယ်၊ Tutorial များ လိုက်ရုံနဲ့ မကပါဘူး။',
    },
    specializations: [
      { en: 'Machine Learning Engineering', my: 'Machine Learning Engineering' },
      { en: 'Generative AI', my: 'Generative AI' },
      { en: 'Prompt Engineering', my: 'Prompt Engineering' },
      { en: 'Natural Language Processing (NLP)', my: 'Natural Language Processing (NLP)' },
      { en: 'Computer Vision', my: 'Computer Vision' },
      { en: 'MLOps', my: 'MLOps' },
    ],
    signals: [
      {
        weight: 3,
        keywords: [
          'ai', 'artificial intelligence', 'generative ai', 'genai', 'gen ai', 'machine learning', 'ml',
          'deep learning', 'neural network', 'neural networks', 'nlp', 'computer vision', 'llm',
          'large language model', 'large language models', 'ai model', 'ai models',
        ],
        reason: {
          en: 'You mentioned a specific interest in AI, generative AI, or machine learning.',
          my: 'AI, Generative AI (သို့) Machine Learning ကို သီးခြား စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: [
          'ai engineer', 'ml engineer', 'machine learning engineer', 'generative ai engineer',
          'prompt engineer', 'prompt engineering', 'ai developer', 'ai researcher', 'mlops engineer',
        ],
        reason: {
          en: 'Your goals point toward an AI or machine learning engineering role.',
          my: 'သင့်ပန်းတိုင်က AI (သို့) Machine Learning Engineering အလုပ်အခန်းကဏ္ဍတစ်ခုကို ညွှန်ပြနေပါတယ်။',
        },
      },
      {
        keywords: ['python', 'chatbot', 'chatbots', 'openai', 'gpt', 'model training', 'training models', 'data science'],
        reason: {
          en: 'You mentioned tools and skills commonly used in AI and machine learning work.',
          my: 'AI နှင့် Machine Learning အလုပ်တွင် အသုံးများသော Tool များနှင့် ကျွမ်းကျင်မှုများကို သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
    ],
  },
  {
    id: 'robotics-engineer',
    slug: 'robotics-engineer',
    name: 'Robotics Engineering',
    nameMy: 'Robotics Engineering',
    shortDescription: {
      en: 'Design and build robots and embedded systems that combine software with physical hardware.',
      my: 'Software နှင့် ရုပ်ပိုင်း Hardware ပေါင်းစပ်ထားသော Robot နှင့် Embedded System များကို ဒီဇိုင်းရေးပြီး တည်ဆောက်သည်။',
    },
    internationalContext: {
      en: 'Robotics and embedded systems skills are in demand across manufacturing, automotive, healthcare, and consumer electronics industries worldwide.',
      my: 'Robotics နှင့် Embedded System ကျွမ်းကျင်မှုများကို ကမ္ဘာတစ်ဝှမ်း Manufacturing, Automotive, Healthcare နှင့် Consumer Electronics လုပ်ငန်းများတွင် လိုအပ်နေပါသည်။',
    },
    myanmarContext: {
      en: 'Robotics is a smaller, more specialized field in Myanmar today, typically found through university programs, maker communities, and hardware-focused startups rather than mainstream job listings.',
      my: 'Robotics သည် ယနေ့ မြန်မာနိုင်ငံတွင် ပိုသေးငယ်၍ အထူးပြု နယ်ပယ်တစ်ခု ဖြစ်ပြီး University Program များ၊ Maker Community များနှင့် Hardware-focused Startup များမှတစ်ဆင့် များသောအားဖြင့် တွေ့ရလေ့ရှိသည်၊ ပုံမှန် အလုပ်ကြေညာချက်များမှတစ်ဆင့် မဟုတ်ပါ။',
    },
    roles: ['Robotics Engineer', 'Embedded Systems Engineer', 'Automation Engineer'],
    skills: [
      { en: 'Comfort combining hardware and software', my: 'Hardware နှင့် Software ပေါင်းစပ်ရန် အဆင်ပြေမှု' },
      { en: 'Patience with physical trial and error', my: 'ရုပ်ပိုင်း စမ်းသပ်မှုအတွက် သည်းခံနိုင်မှု' },
      { en: 'Methodical debugging across both layers', my: 'Layer နှစ်ခုစလုံးတစ်လျှောက် စနစ်တကျ Debugging' },
      { en: 'Attention to physical safety and detail', my: 'ရုပ်ပိုင်း လုံခြုံရေးနှင့် အသေးစိတ်ကို ဂရုစိုက်မှု' },
    ],
    challenges: [
      {
        en: 'Debugging spans both code and physical hardware, which can be slower and messier than software alone.',
        my: 'Debugging သည် Code နှင့် ရုပ်ပိုင်း Hardware နှစ်ခုစလုံးကို လွှမ်းခြုံသဖြင့် Software တစ်ခုတည်းထက် ပိုနှေးကွေး၍ ရှုပ်ထွေးနိုင်သည်။',
      },
      {
        en: 'Physical components can be more expensive and harder to access than pure software tools.',
        my: 'ရုပ်ပိုင်း အစိတ်အပိုင်းများသည် Software Tool စစ်စစ်များထက် ကုန်ကျစရိတ် ပိုများ၍ ရှာဖွေရန် ပိုခက်ခဲနိုင်သည်။',
      },
      {
        en: 'It genuinely combines two large fields (programming and electronics) — building both takes time, and that is normal.',
        my: 'ဤအရာသည် နယ်ပယ်ကြီးနှစ်ခု (Programming နှင့် Electronics) ကို တကယ် ပေါင်းစပ်ထားသည် — နှစ်ခုလုံးတည်ဆောက်ရန် အချိန်ယူရသည်မှာ ပုံမှန်ဖြစ်သည်။',
      },
    ],
    whatTheyDo: {
      en: 'Designs, builds, and programs robots and embedded systems that sense and interact with the physical world.',
      my: 'ရုပ်ပိုင်းကမ္ဘာကို သိမြင်ပြီး Interact ဖြစ်သော Robot နှင့် Embedded System များကို ဒီဇိုင်းရေး၊ တည်ဆောက်ပြီး Program ရေးသည်။',
    },
    responsibilities: [
      { en: 'Wiring and configuring sensors and microcontrollers', my: 'Sensor နှင့် Microcontroller များ ဖြတ်ဆက်ပြီး Configure ချခြင်း' },
      { en: 'Writing firmware/embedded code', my: 'Firmware/Embedded Code ရေးသားခြင်း' },
      { en: 'Testing and debugging physical prototypes', my: 'ရုပ်ပိုင်း Prototype များ Test လုပ်ပြီး Debug လုပ်ခြင်း' },
      { en: 'Integrating hardware with higher-level software', my: 'Hardware ကို အဆင့်မြင့် Software နှင့် ပေါင်းစပ်ခြင်း' },
    ],
    whereUsed: {
      en: 'Manufacturing automation, consumer devices, agricultural technology, and university/maker projects all rely on robotics and embedded skills.',
      my: 'Manufacturing Automation, Consumer Device, စိုက်ပျိုးရေး Technology နှင့် University/Maker Project များအားလုံးသည် Robotics နှင့် Embedded ကျွမ်းကျင်မှုများအပေါ် မှီခိုနေသည်။',
    },
    suitableFor: {
      en: 'People who like tinkering with physical things as much as writing code, and enjoy seeing their work move in the real world.',
      my: 'Code ရေးသလို ရုပ်ပိုင်း အရာများနှင့် ကစားရတာကိုလည်း နှစ်သက်ပြီး ၎င်းတို့၏ အလုပ်ကို လက်တွေ့ကမ္ဘာတွင် ရွေ့လျားနေသည်ကို မြင်ရလိုသူများအတွက် သင့်လျော်ပါသည်။',
    },
    difficulty: 'challenging',
    prerequisiteKnowledge: [
      { en: 'Basic programming', my: 'အခြေခံ Programming' },
      { en: 'Curiosity about electronics — no prior experience required to start', my: 'Electronics အကြောင်း သိလိုစိတ် — စတင်ရန် ယခင်အတွေ့အကြုံ မလိုအပ်ပါ' },
    ],
    progression: {
      en: 'Junior Robotics/Embedded Engineer → Robotics Engineer → Senior Robotics Engineer → Robotics Lead / Systems Architect. Hands-on project experience with real hardware matters as much as theory.',
      my: 'Junior Robotics/Embedded Engineer → Robotics Engineer → Senior Robotics Engineer → Robotics Lead / Systems Architect။ Hardware အစစ်ဖြင့် လက်တွေ့ Project အတွေ့အကြုံက သီအိုရီလောက် အရေးကြီးပါတယ်။',
    },
    specializations: [
      { en: 'Embedded Systems', my: 'Embedded Systems' },
      { en: 'Robotics Software', my: 'Robotics Software' },
      { en: 'IoT (Internet of Things)', my: 'IoT (Internet of Things)' },
      { en: 'Automation Engineering', my: 'Automation Engineering' },
      { en: 'Hardware Prototyping', my: 'Hardware Prototyping' },
    ],
    signals: [
      {
        weight: 3,
        keywords: ['robotics', 'robot', 'robots', 'arduino', 'embedded systems', 'embedded system', 'microcontroller', 'microcontrollers', 'sensors', 'sensor'],
        reason: {
          en: 'You mentioned a specific interest in robotics, Arduino, or embedded systems.',
          my: 'Robotics, Arduino (သို့) Embedded Systems ကို သီးခြား စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['electronics', 'circuit', 'circuits', 'raspberry pi', 'iot', 'internet of things', 'hardware programming'],
        reason: {
          en: 'You mentioned electronics or hardware alongside programming — a strong signal for robotics.',
          my: 'Programming နှင့်အတူ Electronics (သို့) Hardware ကို သင်ပြောပြခဲ့ပြီး ၎င်းသည် Robotics အတွက် အားကောင်းသော Signal ဖြစ်သည်။',
        },
      },
      {
        weight: 2,
        keywords: ['robotics engineer', 'automation engineer', 'embedded engineer', 'hardware engineer'],
        reason: {
          en: 'Your goals point toward a robotics or embedded systems engineering role.',
          my: 'သင့်ပန်းတိုင်က Robotics (သို့) Embedded Systems Engineering အလုပ်အခန်းကဏ္ဍတစ်ခုကို ညွှန်ပြနေပါတယ်။',
        },
      },
      {
        keywords: ['python', 'programming', 'automation', 'building things', 'tinkering'],
        reason: {
          en: 'You enjoy programming and building things — a good foundation for robotics work.',
          my: 'Programming နှင့် အရာများ တည်ဆောက်တာကို နှစ်သက်ပြီး ၎င်းသည် Robotics အလုပ်အတွက် အခြေခံကောင်းတစ်ခု ဖြစ်သည်။',
        },
      },
    ],
  },
  {
    id: 'ict-trainer',
    slug: 'ict-trainer',
    name: 'ICT Trainer / Educator',
    nameMy: 'ICT Trainer / Educator',
    shortDescription: {
      en: 'Teach and mentor others in technology skills — a career of helping people learn, not just building software yourself.',
      my: 'သူများကို နည်းပညာ ကျွမ်းကျင်မှုများ သင်ကြားပေးပြီး Mentor ပြုသည် — Software ကိုယ်တိုင် တည်ဆောက်ရုံသက်သက်မဟုတ်ဘဲ လူများ လေ့လာနိုင်ရန် ကူညီပေးသော Career တစ်ခု ဖြစ်သည်။',
    },
    internationalContext: {
      en: 'As technology changes quickly everywhere, skilled trainers who can explain it clearly are consistently valued by schools, companies, and training organizations worldwide.',
      my: 'နေရာတိုင်းတွင် နည်းပညာသည် လျင်မြန်စွာ ပြောင်းလဲနေသဖြင့် ၎င်းကို ရှင်းလင်းစွာ ရှင်းပြနိုင်သော ကျွမ်းကျင် Trainer များကို ကမ္ဘာတစ်ဝှမ်းရှိ ကျောင်းများ၊ ကုမ္ပဏီများနှင့် Training Organization များက စဉ်ဆက်မပြတ် တန်ဖိုးထားကြသည်။',
    },
    myanmarContext: {
      en: 'As more young people in Myanmar want to learn technology, trainers who can teach clearly in Burmese are especially valuable — bridging a real gap that English-only resources cannot.',
      my: 'မြန်မာနိုင်ငံရှိ လူငယ်များစွာ နည်းပညာ လေ့လာလိုသည်နှင့်အမျှ မြန်မာလိုပင် ရှင်းလင်းစွာ သင်ကြားပေးနိုင်သော Trainer များသည် အထူးတန်ဖိုးရှိသည် — English-only Resource များ မဖြည့်ဆည်းနိုင်သော တကယ့် Gap တစ်ခုကို ပေါင်းကူးပေးနိုင်သည်။',
    },
    roles: ['ICT Trainer', 'Technology Trainer', 'ICT Educator'],
    skills: [
      { en: 'Clear, patient explanation', my: 'ရှင်းလင်း၍ သည်းခံစွာ ရှင်းပြနိုင်မှု' },
      { en: 'Empathy for beginners', my: 'အစပြုသူများအပေါ် စာနာနားလည်မှု' },
      { en: 'Breaking complex ideas into simple steps', my: 'ရှုပ်ထွေးသော Idea များကို ရိုးရှင်းသော အဆင့်များအဖြစ် ခွဲခြမ်းနိုင်မှု' },
      { en: 'Genuine enjoyment of helping others grow', my: 'သူများ တိုးတက်အောင် ကူညီရတာကို တကယ် နှစ်သက်မှု' },
    ],
    challenges: [
      {
        en: 'Explaining the same concept in multiple different ways until it clicks takes real patience.',
        my: 'သဘောတရားတစ်ခုတည်းကို လူတစ်ဦးက နားလည်သည်အထိ နည်းလမ်းမတူညီစွာ ထပ်ခါထပ်ခါ ရှင်းပြရခြင်းသည် တကယ့် သည်းခံမှု လိုအပ်သည်။',
      },
      {
        en: 'Staying current with technology yourself is still necessary, even while teaching others.',
        my: 'သူများကို သင်ကြားပေးနေချိန်တွင်ပင် နည်းပညာအသစ်များနှင့် ကိုယ်တိုင်ပါ မှီအောင်ထားရန် လိုအပ်ဆဲ ဖြစ်သည်။',
      },
      {
        en: 'Learners come in with very different backgrounds and paces — adapting to each one is a skill built over time.',
        my: 'Learner များသည် နောက်ခံနှင့် အရှိန်အမြန် အလွန်ကွာခြားစွာ လာရောက်ကြသည် — တစ်ဦးစီအလိုက် လိုက်လျောညီထွေဖြစ်ခြင်းသည် အချိန်ကြာမြင့်စွာ တည်ဆောက်ရသော ကျွမ်းကျင်မှုတစ်ခု ဖြစ်သည်။',
      },
    ],
    whatTheyDo: {
      en: 'Teaches and mentors learners in technology and computer skills, in classrooms, workshops, or one-on-one settings.',
      my: 'Classroom, Workshop (သို့) တစ်ဦးချင်း Setting များတွင် Learner များကို နည်းပညာနှင့် Computer ကျွမ်းကျင်မှုများ သင်ကြားပေးပြီး Mentor ပြုသည်။',
    },
    responsibilities: [
      { en: 'Planning and delivering lessons or workshops', my: 'သင်ခန်းစာ (သို့) Workshop များ စီစဉ်ပြီး ပို့ချခြင်း' },
      { en: 'Explaining technical concepts in accessible ways', my: 'Technical Concept များကို ဝင်ရောက်လွယ်သော နည်းလမ်းများဖြင့် ရှင်းပြခြင်း' },
      { en: 'Creating practice exercises and assessing progress', my: 'လေ့ကျင့်ခန်းများ ဖန်တီးပြီး တိုးတက်မှု အကဲဖြတ်ခြင်း' },
      { en: 'Mentoring learners one-on-one', my: 'Learner များကို တစ်ဦးချင်း Mentor ပြုခြင်း' },
    ],
    whereUsed: {
      en: 'Schools, universities, private training centers, NGOs, and companies running internal technology training all need skilled trainers.',
      my: 'ကျောင်းများ၊ တက္ကသိုလ်များ၊ ပုဂ္ဂလိက Training Center များ၊ NGO များနှင့် Internal Technology Training လုပ်နေသော ကုမ္ပဏီများအားလုံးသည် ကျွမ်းကျင် Trainer များ လိုအပ်ကြသည်။',
    },
    suitableFor: {
      en: 'People who love learning technology themselves and get real satisfaction from watching someone else finally understand something they were stuck on.',
      my: 'နည်းပညာကို ကိုယ်တိုင် လေ့လာရတာ နှစ်သက်ပြီး တစ်ဦးဦးကို ပိတ်မိနေသောအရာတစ်ခု နောက်ဆုံး နားလည်သွားသည်ကို ကြည့်ရတာမှ တကယ့် ကျေနပ်မှု ရရှိသူများအတွက် သင့်လျော်ပါသည်။',
    },
    difficulty: 'beginner-friendly',
    prerequisiteKnowledge: [
      { en: 'Basic computer literacy', my: 'အခြေခံ ကွန်ပျူတာ အသုံးပြုနိုင်မှု' },
      { en: 'A genuine interest in explaining and teaching, more than deep specialization in one technical area', my: 'Technical နယ်ပယ်တစ်ခုတည်းတွင် နက်နက်ရှိုင်းရှိုင်း ကျွမ်းကျင်ခြင်းထက် ရှင်းပြခြင်းနှင့် သင်ကြားခြင်းအပေါ် စစ်မှန်သော စိတ်ဝင်စားမှု' },
    ],
    progression: {
      en: 'Junior Trainer → ICT Trainer → Senior Trainer / Curriculum Developer → Training Lead / Program Manager. Real growth comes from actual teaching hours and learner feedback, not just subject knowledge.',
      my: 'Junior Trainer → ICT Trainer → Senior Trainer / Curriculum Developer → Training Lead / Program Manager။ တကယ့်တိုးတက်မှုက Subject Knowledge တစ်ခုတည်းမကဘဲ တကယ့် သင်ကြားချိန်နှင့် Learner Feedback ကနေ လာပါတယ်။',
    },
    specializations: [
      { en: 'Corporate Technology Training', my: 'Corporate Technology Training' },
      { en: 'Curriculum Development', my: 'Curriculum Development' },
      { en: 'Coding Bootcamp Instruction', my: 'Coding Bootcamp Instruction' },
      { en: 'Digital Literacy Education', my: 'Digital Literacy Education' },
      { en: 'One-on-One Mentorship', my: 'One-on-One Mentorship' },
    ],
    signals: [
      {
        weight: 3,
        keywords: ['teaching', 'teach', 'education', 'educator', 'trainer', 'training', 'mentor', 'mentoring', 'mentorship', 'tutor', 'tutoring', 'instructor'],
        reason: {
          en: 'You mentioned a specific interest in teaching, training, or mentoring others.',
          my: 'သူများကို သင်ကြားခြင်း၊ Training ပြုခြင်း (သို့) Mentor ပြုခြင်းကို သီးခြား စိတ်ဝင်စားကြောင်း သင်ပြောပြခဲ့ပါတယ်။',
        },
      },
      {
        weight: 2,
        keywords: ['ict trainer', 'ict educator', 'technology trainer', 'technology education', 'teaching technology', 'digital literacy', 'computer training', 'helping others learn'],
        reason: {
          en: 'Your goals point toward a technology training or education role.',
          my: 'သင့်ပန်းတိုင်က Technology Training (သို့) Education အလုပ်အခန်းကဏ္ဍတစ်ခုကို ညွှန်ပြနေပါတယ်။',
        },
      },
      {
        keywords: ['helping', 'sharing knowledge', 'explaining', 'explaining clearly', 'communication', 'helping others'],
        reason: {
          en: 'You enjoy helping others and explaining things clearly — core strengths for a trainer.',
          my: 'သူများကို ကူညီရတာနဲ့ ရှင်းလင်းစွာ ရှင်းပြရတာကို နှစ်သက်ပြီး ၎င်းသည် Trainer တစ်ဦးအတွက် အဓိက အားသာချက်များ ဖြစ်သည်။',
        },
      },
    ],
  },
]
