import type { AssessmentQuestion } from '../types/assessment'

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'technologyInterest',
    type: 'text',
    label: {
      en: 'What made you interested in technology?',
      my: 'နည်းပညာကို ဘာကြောင့် စိတ်ဝင်စားလာတာလဲ?',
    },
    placeholder: {
      en: 'e.g. I liked building things, or a friend showed me coding...',
      my: 'ဥပမာ — တစ်ခုခု တည်ဆောက်ရတာ ကြိုက်လို့၊ (သို့) သူငယ်ချင်းက Coding ကို မိတ်ဆက်ပေးလို့...',
    },
  },
  {
    id: 'currentExperience',
    type: 'choice',
    label: {
      en: 'How would you describe your experience with technology so far?',
      my: 'လက်ရှိ နည်းပညာအတွေ့အကြုံကို ဘယ်လိုဖော်ပြမလဲ?',
    },
    options: [
      {
        value: 'new',
        label: { en: 'New to it — just getting started', my: 'အသစ်ပါ — ဒါမှ စလိုက်တာပါ' },
      },
      {
        value: 'self-taught',
        label: { en: 'Some self-taught experience', my: 'ကိုယ်တိုင် လေ့လာထားတာ ရှိပါတယ်' },
      },
      {
        value: 'studied',
        label: { en: 'Studied it in school or a course', my: 'ကျောင်း (သို့) သင်တန်းတစ်ခုခုမှာ လေ့လာဖူးပါတယ်' },
      },
      {
        value: 'working',
        label: { en: 'Already working in a related field', my: 'ဆက်နွယ်ရာ အလုပ်တစ်ခုမှာ လုပ်နေပြီးသားပါ' },
      },
    ],
  },
  {
    id: 'currentSkills',
    type: 'text',
    label: {
      en: 'What are you good at, or what comes naturally to you?',
      my: 'ဘာတွေမှာ တော်တာလဲ၊ ဘာတွေက သင့်အတွက် အလွယ်တကူ ဖြစ်တာလဲ?',
    },
    placeholder: {
      en: 'e.g. solving puzzles, explaining things clearly, staying organized...',
      my: 'ဥပမာ — ပုစ္ဆာဖြေရှင်းတာ၊ ရှင်းရှင်းလင်းလင်း ရှင်းပြတတ်တာ...',
    },
  },
  {
    id: 'difficulties',
    type: 'text',
    label: {
      en: 'What are you currently struggling with?',
      my: 'လက်ရှိ ဘာနဲ့ ခက်ခက်ခဲခဲ ကြုံနေရလဲ?',
    },
    placeholder: {
      en: "e.g. not knowing where to start, staying consistent, understanding English resources...",
      my: 'ဥပမာ — ဘယ်က စရမလဲဆိုတာ မသိတာ၊ စဉ်ဆက်မပြတ် လုပ်ဖို့ ခက်ခဲတာ...',
    },
  },
  {
    id: 'preferredWork',
    type: 'text',
    label: {
      en: "What type of work do you enjoy, or think you'd enjoy?",
      my: 'ဘယ်လို အလုပ်မျိုးကို ကြိုက်တာလဲ (သို့) ကြိုက်လိမ့်မယ်ထင်လဲ?',
    },
    placeholder: {
      en: 'e.g. working with a team, solving problems alone, designing things...',
      my: 'ဥပမာ — အဖွဲ့နဲ့ အလုပ်လုပ်တာ၊ တစ်ယောက်တည်း ပြဿနာဖြေရှင်းတာ...',
    },
  },
  {
    id: 'careerGoal',
    type: 'text',
    label: {
      en: 'What kind of technology work sounds interesting to you?',
      my: 'ဘယ်လို နည်းပညာအလုပ်မျိုးက သင့်အတွက် စိတ်ဝင်စားစရာ ဖြစ်လဲ?',
    },
    placeholder: {
      en: 'e.g. building apps, protecting systems, working with data, designing interfaces...',
      my: 'ဥပမာ — Apps တည်ဆောက်တာ၊ စနစ်တွေကို လုံခြုံအောင်ကာကွယ်တာ...',
    },
  },
  {
    id: 'learningStyle',
    type: 'choice',
    label: {
      en: 'How do you prefer to learn?',
      my: 'ဘယ်လိုနည်းနဲ့ လေ့လာရတာ ပိုကြိုက်လဲ?',
    },
    options: [
      { value: 'videos', label: { en: 'Watching videos', my: 'Video ကြည့်ပြီး' } },
      { value: 'reading', label: { en: 'Reading and documentation', my: 'ဖတ်ရှုပြီး' } },
      { value: 'practice', label: { en: 'Hands-on practice', my: 'လက်တွေ့ လုပ်ကြည့်ပြီး' } },
      {
        value: 'mentorship',
        label: { en: 'Learning with others / mentorship', my: 'တခြားသူတွေနဲ့အတူ (သို့) Mentor တစ်ယောက်နဲ့' },
      },
    ],
  },
  {
    id: 'careerUncertainty',
    type: 'choice',
    label: {
      en: 'How clear do you feel about your technology career direction right now?',
      my: 'လက်ရှိ နည်းပညာ Career ဦးတည်ရာကို ဘယ်လောက် ရှင်းနေပြီလဲ?',
    },
    options: [
      { value: 'not-clear', label: { en: 'Not clear at all', my: 'လုံးဝ မရှင်းသေးပါ' } },
      { value: 'a-little-unsure', label: { en: 'A little unsure', my: 'အနည်းငယ် မသေချာသေးပါ' } },
      { value: 'somewhat-clear', label: { en: 'Somewhat clear', my: 'အတော်လေး ရှင်းပါတယ်' } },
      { value: 'fairly-clear', label: { en: 'Fairly clear, just need a plan', my: 'ရှင်းပါတယ်၊ အစီအစဉ်ပဲ လိုနေတာ' } },
    ],
  },
  {
    id: 'expectations',
    type: 'text',
    label: {
      en: 'What would you like to achieve in your technology career?',
      my: 'နည်းပညာ Career မှာ ဘာတွေ အောင်မြင်ချင်တာလဲ?',
    },
    placeholder: {
      en: 'e.g. a stable job, remote work opportunities, building my own product...',
      my: 'ဥပမာ — တည်ငြိမ်တဲ့ အလုပ်တစ်ခု၊ အဝေးမှ အလုပ်လုပ်ခွင့်...',
    },
  },
]
