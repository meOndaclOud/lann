import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every UI/UX Design topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const uiUxDesignTopicDetails: Record<string, TopicDetail> = {
  'ui-ux-design-beginner-1': {
    whatItIs: t([
      'Design principles like contrast, spacing, and hierarchy are the fundamental tools designers use to make interfaces clear, organized, and easy to scan.',
      'Contrast, Spacing, Hierarchy ကဲ့သို့ Design Principle များသည် Interface များကို ရှင်းလင်း၍ စနစ်တကျ၊ ကြည့်ရှုရလွယ်ကူစေရန် Designer များ သုံးသော အခြေခံ Tool များ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Without these principles, even a technically functional interface feels confusing and overwhelming — good design is what makes an interface feel effortless to use.',
      'ဤသဘောတရားများ မရှိပါက Technical အရ Function ရှိသော Interface တစ်ခုပင် ရှုပ်ထွေး၍ လွှမ်းမိုးခံရသလို ခံစားရလိမ့်မည် — Design ကောင်းမွန်ခြင်းသည် Interface တစ်ခုကို အသုံးပြုရလွယ်ကူစွာ ခံစားရစေသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Applied in every screen, app, and website that a designer touches — the foundation everything else builds on.',
      'Designer တစ်ဦး ထိတွေ့သော Screen, App, Website တိုင်းတွင် အသုံးချသည် — အခြားအရာအားလုံး တည်ဆောက်ရာ အခြေခံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Visual hierarchy', 'Visual Hierarchy'],
      ['Contrast', 'Contrast'],
      ['Spacing and whitespace', 'Spacing နှင့် Whitespace'],
      ['Alignment', 'Alignment'],
      ['Consistency', 'Consistency'],
    ]),
    steps: [
      step(
        ['See and name design principles in real interfaces', 'Interface အစစ်များတွင် Design Principle များကို မြင်ပြီး နာမည်ပေးခြင်း'],
        [
          ['Hierarchy guides the eye to what matters most first', 'Hierarchy သည် အရေးအကြီးဆုံးအရာသို့ မျက်လုံးကို ဦးဆွဲပေးသည်'],
          ['Contrast makes important elements stand out', 'Contrast သည် အရေးကြီးသော Element များကို ထင်ရှားစေသည်'],
        ],
        [
          ['Screenshot three apps you use daily and label examples of hierarchy and contrast in each', 'နေ့စဉ်သုံးသော App သုံးခု Screenshot ရိုက်ပြီး တစ်ခုစီတွင် Hierarchy နှင့် Contrast ဥပမာများကို Label ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Apply spacing, alignment, and consistency', 'Spacing, Alignment, Consistency အသုံးချခြင်း'],
        [
          ['Whitespace is not empty space — it groups and separates content', 'Whitespace သည် နေရာလွတ်မဟုတ်ပါ — Content ကို စုစည်းပေးပြီး ခွဲခြားပေးသည်'],
          ['Consistent spacing and alignment make a design feel intentional', 'တသမတ်တည်း Spacing နှင့် Alignment သည် Design ကို ရည်ရွယ်ချက်ရှိသလို ခံစားစေသည်'],
        ],
        [
          ['Redesign a cluttered screen (real or made up) applying consistent spacing and alignment', 'ရှုပ်ထွေးနေသော Screen တစ်ခု (အစစ် သို့ ဖန်တီးထားသော) ကို တသမတ်တည်း Spacing နှင့် Alignment အသုံးချ၍ ပြန်ဒီဇိုင်းရေးဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Take a poorly designed screen (find a real bad example, or intentionally build a cluttered one) and redesign it applying hierarchy, contrast, spacing, and consistency — with a short explanation of each choice.',
      'Design ညံ့ဖျင်းသော Screen တစ်ခု (ဥပမာ ဆိုးရွားသော အစစ်တစ်ခု ရှာပါ သို့ ရှုပ်ထွေးနေသောတစ်ခုကို တမင် ဖန်တီးပါ) ကို ယူပြီး Hierarchy, Contrast, Spacing, Consistency အသုံးချ၍ ပြန်ဒီဇိုင်းရေးဆွဲပါ — ရွေးချယ်မှုတစ်ခုစီအတွက် ရှင်းလင်းချက် အတိုချုပ်ပါဝင်ပြီး။',
    ]),
    verify: t([
      'Given any screen, could you point to specific examples of hierarchy, contrast, and spacing, and explain whether they work well?',
      'Screen မည်သည်ကိုမဆို ပေးလိုက်လျှင် Hierarchy, Contrast, Spacing ၏ တိကျသော ဥပမာများကို ညွှန်ပြပြီး ၎င်းတို့ ကောင်းမွန်စွာ အလုပ်လုပ်မှုတစ်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Study interfaces you personally find easy to use and identify why.', 'ကိုယ်တိုင် အသုံးပြုရလွယ်ကူသည်ဟု ခံစားရသော Interface များကို လေ့လာပြီး ဘာကြောင့်ဆိုသည်ကို ဖော်ထုတ်ပါ။'],
      ['When in doubt, add more whitespace rather than less.', 'သံသယဖြစ်ပါက Whitespace ကို နည်းအောင်ထက် ပိုအောင် ထည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Filling every available space instead of using whitespace intentionally.', 'Whitespace ကို ရည်ရွယ်ချက်ရှိစွာ မသုံးဘဲ နေရာလွတ်တိုင်းကို ဖြည့်ခြင်း။'],
      ['Using too many font sizes/weights with no clear hierarchy.', 'ရှင်းလင်းသော Hierarchy မရှိဘဲ Font Size/Weight အလွန်များစွာ သုံးခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-beginner-1', [
      ['Label hierarchy and contrast examples in three real apps', 'App အစစ်သုံးခုတွင် Hierarchy နှင့် Contrast ဥပမာများကို Label ပြုလုပ်ပါ'],
      ['Redesign a cluttered screen with better spacing', 'ရှုပ်ထွေးနေသော Screen တစ်ခုကို Spacing ပိုကောင်းအောင် ပြန်ဒီဇိုင်းရေးဆွဲပါ'],
      ['Write a short explanation of your design choices', 'သင့် Design ရွေးချယ်မှုများ၏ ရှင်းလင်းချက် အတိုချုပ် ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Identify hierarchy, contrast, and spacing in existing designs', 'ရှိပြီးသား Design များတွင် Hierarchy, Contrast, Spacing ဖော်ထုတ်နိုင်သည်'],
      ['Apply consistent spacing and alignment', 'တသမတ်တည်း Spacing နှင့် Alignment အသုံးချနိုင်သည်'],
      ['Redesign a cluttered screen using these principles', 'ဤသဘောတရားများ သုံး၍ ရှုပ်ထွေးနေသော Screen တစ်ခုကို ပြန်ဒီဇိုင်းရေးဆွဲနိုင်သည်'],
      ['Explain your design choices clearly', 'သင့် Design ရွေးချယ်မှုများကို ရှင်းလင်းစွာ ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-beginner-2': {
    whatItIs: t([
      'Basic design tool skills mean being comfortable using a professional design tool like Figma to actually create and edit interface designs.',
      'အခြေခံ Design Tool ကျွမ်းကျင်မှုဆိုသည်မှာ Interface Design များကို တကယ် ဖန်တီးပြီး ပြင်ဆင်ရန် Figma ကဲ့သို့ Professional Design Tool တစ်ခုကို ရင်းနှီးစွာ အသုံးပြုနိုင်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Design ideas need to be communicated visually and precisely — a design tool is how designers turn thinking into something developers can actually build from.',
      'Design Idea များကို အမြင်အာရုံဖြင့် တိကျစွာ ဆက်သွယ်ရန် လိုအပ်သည် — Design Tool သည် Designer များ တွေးခေါ်မှုကို Developer များ တကယ်တည်ဆောက်နိုင်မည့်အရာအဖြစ် ပြောင်းလဲသောနည်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The primary daily tool for nearly every professional UI/UX designer, at companies of every size.',
      'ကုမ္ပဏီအရွယ်အစား မည်သည်ကိုမဆို ရှိသော Professional UI/UX Designer နီးပါးအားလုံး၏ နေ့စဉ် အဓိက Tool ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Frames and artboards', 'Frames နှင့် Artboards'],
      ['Shapes, text, and basic editing', 'Shapes, Text, အခြေခံ Editing'],
      ['Layers and grouping', 'Layers နှင့် Grouping'],
      ['Auto layout basics', 'Auto Layout အခြေခံ'],
    ]),
    steps: [
      step(
        ['Get comfortable with the canvas', 'Canvas နှင့် ရင်းနှီးအောင်လုပ်ခြင်း'],
        [
          ['Creating frames at standard screen sizes', 'စံ Screen Size များတွင် Frames ဖန်တီးခြင်း'],
          ['Adding and styling shapes and text', 'Shapes နှင့် Text ထည့်ခြင်းနှင့် Style ချခြင်း'],
        ],
        [
          ['Recreate a simple existing app screen pixel-by-pixel in your design tool', 'ရှိပြီးသား App Screen ရိုးရှင်းတစ်ခုကို သင့် Design Tool တွင် Pixel-by-pixel ပြန်တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Organize with layers and auto layout', 'Layers နှင့် Auto Layout ဖြင့် စုစည်းခြင်း'],
        [
          ['Grouping related elements and naming layers clearly', 'ဆက်စပ် Element များကို စုစည်းပြီး Layer များကို ရှင်းလင်းစွာ နာမည်ပေးခြင်း'],
          ['Using auto layout so elements resize and reflow predictably', 'Element များ ခန့်မှန်း၍ရသောပုံစံဖြင့် Resize/Reflow ဖြစ်စေရန် Auto Layout သုံးခြင်း'],
        ],
        [
          ['Rebuild one screen using auto layout so it responds correctly when text content changes', 'Text Content ပြောင်းလဲသည့်အခါ မှန်ကန်စွာ တုံ့ပြန်ရန် Auto Layout သုံး၍ Screen တစ်ခုကို ပြန်တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Recreate three different screens of a real app in your design tool with clean, well-named layers and at least one screen using auto layout.',
      'App အစစ်တစ်ခု၏ Screen မတူညီသုံးခုကို သင့် Design Tool တွင် သန့်ရှင်းစွာ Layer နာမည်ကောင်းများဖြင့် ပြန်တည်ဆောက်ပါ — Screen အနည်းဆုံးတစ်ခု Auto Layout သုံးထားပြီး။',
    ]),
    verify: t([
      'Could someone else open your design file and immediately understand its layer structure without asking you questions?',
      'အခြားသူတစ်ဦးသည် သင့် Design File ကို ဖွင့်ပြီး မေးခွန်းများ မမေးဘဲ ၎င်း၏ Layer ဖွဲ့စည်းပုံကို ချက်ချင်း နားလည်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Name your layers meaningfully as you go — "Rectangle 47" is never useful later.', 'သင့် Layer များကို လုပ်ရင်း အဓိပ္ပာယ်ရှိစွာ နာမည်ပေးပါ — "Rectangle 47" သည် နောက်ပိုင်း ဘယ်တော့မှ အသုံးမဝင်ပါ။'],
      ['Learn keyboard shortcuts — they dramatically speed up design work.', 'Keyboard Shortcut များ လေ့လာပါ — ၎င်းတို့သည် Design အလုပ်ကို သိသိသာသာ မြန်စေသည်။'],
    ]),
    commonMistakes: list([
      ['Leaving layers with default names, making files impossible to navigate later.', 'Layer များကို Default နာမည်ဖြင့် ထားလိုက်ခြင်းက File များကို နောက်ပိုင်း Navigate လုပ်၍မရအောင် ဖြစ်စေသည်။'],
      ['Not using auto layout, resulting in designs that break when content changes.', 'Auto Layout မသုံးခြင်းက Content ပြောင်းသည့်အခါ ပျက်သွားသော Design များ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ui-ux-design-beginner-2', [
      ['Recreate an existing screen in your design tool', 'ရှိပြီးသား Screen တစ်ခုကို သင့် Design Tool တွင် ပြန်တည်ဆောက်ပါ'],
      ['Organize the file with clearly named layers', 'ရှင်းလင်းစွာ နာမည်ပေးထားသော Layer များဖြင့် File ကို စုစည်းပါ'],
      ['Rebuild one screen using auto layout', 'Auto Layout သုံး၍ Screen တစ်ခု ပြန်တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Create and organize frames, shapes, and text', 'Frames, Shapes, Text များ ဖန်တီးပြီး စုစည်းနိုင်သည်'],
      ['Name and group layers clearly', 'Layer များကို ရှင်းလင်းစွာ နာမည်ပေးပြီး စုစည်းနိုင်သည်'],
      ['Use auto layout for responsive-feeling designs', 'Responsive-feeling Design များအတွက် Auto Layout သုံးနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-beginner-3': {
    whatItIs: t([
      'Color and typography basics cover how to choose and apply colors and fonts that are readable, accessible, and visually appropriate.',
      'Color နှင့် Typography အခြေခံသည် ဖတ်ရလွယ်ကူ၍ Accessible ဖြစ်၍ အမြင်ရသင့်လျော်သော Color နှင့် Font များကို မည်သို့ ရွေးချယ်ပြီး အသုံးချသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Poor color contrast and hard-to-read typography make an interface unusable for many people, including those with visual impairments — this is both a design and an accessibility issue.',
      'Color Contrast ညံ့ဖျင်းခြင်းနှင့် ဖတ်ရခက်သော Typography သည် Interface တစ်ခုကို Visual Impairment ရှိသူများ အပါအဝင် လူများစွာအတွက် သုံး၍မရအောင် ဖြစ်စေသည် — ၎င်းသည် Design နှင့် Accessibility ပြဿနာ နှစ်ခုစလုံး ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in every interface — every piece of text and every colored element relies on these fundamentals.',
      'Interface တိုင်းတွင် ရှိသည် — Text နှင့် Color ပါသော Element တိုင်းသည် ဤအခြေခံများအပေါ် မှီခိုနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Color contrast and accessibility (WCAG basics)', 'Color Contrast နှင့် Accessibility (WCAG အခြေခံ)'],
      ['Building a simple color palette', 'ရိုးရှင်းသော Color Palette တည်ဆောက်ခြင်း'],
      ['Font pairing basics', 'Font Pairing အခြေခံ'],
      ['Type scale (heading, body, caption sizes)', 'Type Scale (Heading, Body, Caption Size များ)'],
    ]),
    steps: [
      step(
        ['Choose accessible color combinations', 'Accessible ဖြစ်သော Color ပေါင်းစပ်မှုများ ရွေးချယ်ခြင်း'],
        [
          ['Minimum contrast ratios for readable text', 'ဖတ်ရလွယ်ကူသော Text အတွက် အနည်းဆုံး Contrast Ratio'],
          ['Checking color contrast with a real tool, not just by eye', 'မျက်စိဖြင့်သာမက Tool အစစ်ဖြင့် Color Contrast စစ်ဆေးခြင်း'],
        ],
        [
          ['Check the contrast ratio of three text/background color pairs and fix any that fail', 'Text/Background Color ပေါင်းသုံးခု၏ Contrast Ratio ကို စစ်ဆေးပြီး Fail ဖြစ်သည်များကို ပြင်ဆင်ပါ'],
        ],
      ),
      step(
        ['Build a simple type scale and color palette', 'ရိုးရှင်းသော Type Scale နှင့် Color Palette တည်ဆောက်ခြင်း'],
        [
          ['A small set of font sizes for headings, body, and captions', 'Heading, Body, Caption များအတွက် Font Size အစုအဝေးသေးငယ်တစ်ခု'],
          ['A limited, purposeful color palette instead of using colors randomly', 'ကျပန်း Color များ သုံးမည့်အစား ကန့်သတ်ထား၍ ရည်ရွယ်ချက်ရှိသော Color Palette'],
        ],
        [
          ['Define a type scale (3-4 sizes) and a color palette (primary, secondary, neutral) for a small project', 'Project သေးငယ်တစ်ခုအတွက် Type Scale (အရွယ်အစား ၃-၄) နှင့် Color Palette (Primary, Secondary, Neutral) သတ်မှတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design a simple screen (e.g. a landing page section) using only your defined type scale and color palette, verifying every text/background pair passes accessibility contrast.',
      'သတ်မှတ်ထားသော Type Scale နှင့် Color Palette ကိုသာ သုံး၍ Screen ရိုးရှင်းတစ်ခု (ဥပမာ Landing Page Section) ကို Design ဆွဲပါ — Text/Background ပေါင်းတိုင်း Accessibility Contrast ဖြတ်ကြောင်း အတည်ပြုပြီး။',
    ]),
    verify: t([
      'Could you check any two colors and determine, without guessing, whether their contrast is accessible for body text?',
      'Color နှစ်ခု ပေးလိုက်လျှင် ခန့်မှန်းခြင်းမလုပ်ဘဲ Body Text အတွက် ၎င်းတို့၏ Contrast သည် Accessible ဟုတ်၊ မဟုတ် ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always verify contrast with a real checker tool — the eye is not a reliable judge.', 'Contrast ကို Checker Tool အစစ်ဖြင့် အမြဲ အတည်ပြုပါ — မျက်လုံးသည် ယုံကြည်ရသော တရားသူကြီး မဟုတ်ပါ။'],
      ['Limit your palette — a small set of purposeful colors looks more professional than many random ones.', 'သင့် Palette ကို ကန့်သတ်ပါ — ရည်ရွယ်ချက်ရှိသော Color အနည်းငယ်သည် ကျပန်း Color များစွာထက် Professional ပိုပုံပေါ်သည်။'],
    ]),
    commonMistakes: list([
      ['Choosing colors that look nice but fail accessibility contrast requirements.', 'ကောင်းမွန်စွာ ပုံပေါ်သော်လည်း Accessibility Contrast လိုအပ်ချက်များ Fail ဖြစ်သော Color များ ရွေးချယ်ခြင်း။'],
      ['Using too many font sizes and colors with no clear system.', 'ရှင်းလင်းသော System မရှိဘဲ Font Size နှင့် Color များ အလွန်များစွာ သုံးခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-beginner-3', [
      ['Check contrast ratios and fix failing pairs', 'Contrast Ratio များ စစ်ဆေးပြီး Fail ဖြစ်သော ပေါင်းများ ပြင်ဆင်ပါ'],
      ['Define a type scale for a project', 'Project တစ်ခုအတွက် Type Scale တစ်ခု သတ်မှတ်ပါ'],
      ['Define a limited color palette', 'ကန့်သတ်ထားသော Color Palette တစ်ခု သတ်မှတ်ပါ'],
      ['Design a screen using only the defined system', 'သတ်မှတ်ထားသော System ကိုသာ သုံး၍ Screen တစ်ခု Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Check and apply accessible color contrast', 'Accessible Color Contrast ကို စစ်ဆေးပြီး အသုံးချနိုင်သည်'],
      ['Define a simple type scale', 'ရိုးရှင်းသော Type Scale တစ်ခု သတ်မှတ်နိုင်သည်'],
      ['Define a limited, purposeful color palette', 'ကန့်သတ်ထားပြီး ရည်ရွယ်ချက်ရှိသော Color Palette တစ်ခု သတ်မှတ်နိုင်သည်'],
      ['Design a screen consistent with a defined system', 'သတ်မှတ်ထားသော System နှင့် ကိုက်ညီသော Screen တစ်ခု Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-beginner-4': {
    whatItIs: t([
      'Understanding user needs means figuring out what a real person actually wants and struggles with before designing a solution for them.',
      'User လိုအပ်ချက်များ နားလည်ခြင်းဆိုသည်မှာ လူတစ်ဦးအတွက် ဖြေရှင်းချက်တစ်ခု Design မဆွဲမီ ၎င်း တကယ်ဘာလိုချင်ပြီး ဘာနှင့် ရုန်းကန်နေသည်ကို ရှာဖွေဖော်ထုတ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Designing without understanding real user needs produces interfaces that look good but solve the wrong problem — user-centered thinking is what separates design from decoration.',
      'တကယ့် User လိုအပ်ချက်များကို နားမလည်ဘဲ Design ဆွဲခြင်းသည် ကောင်းမွန်စွာ ပုံပေါ်သော်လည်း ပြဿနာမှားကို ဖြေရှင်းသော Interface များကို ဖြစ်ပေါ်စေသည် — User-centered တွေးခေါ်မှုသည် Design ကို Decoration နှင့် ခွဲခြားပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The starting point of every well-run design process, from a startup MVP to a large enterprise product.',
      'Startup MVP မှ Enterprise Product ကြီးအထိ ကောင်းစွာ လည်ပတ်နေသော Design Process တိုင်း၏ စတင်ရာနေရာ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['User goals vs. business goals', 'User ရည်မှန်းချက်များနှင့် Business ရည်မှန်းချက်များ'],
      ['Simple user personas', 'ရိုးရှင်းသော User Personas'],
      ['Asking open-ended questions', 'ဖွင့်ထားသော မေးခွန်းများ မေးခြင်း'],
      ['Identifying pain points', 'ရုန်းကန်ရသောနေရာများ ဖော်ထုတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Talk to (or observe) a real potential user', 'User အစစ် ဖြစ်နိုင်သူတစ်ဦးနှင့် စကားပြောခြင်း (သို့) စောင့်ကြည့်ခြင်း'],
        [
          ['Asking open-ended questions instead of leading ones', 'ဦးဆောင်သောမေးခွန်းများ အစား ဖွင့်ထားသော မေးခွန်းများ မေးခြင်း'],
          ['Listening for pain points, not just feature requests', 'Feature တောင်းဆိုမှုများသာမက ရုန်းကန်ရသောနေရာများကိုပါ နားထောင်ခြင်း'],
        ],
        [
          ['Interview one real person about how they currently solve a problem your app idea addresses', 'သင့် App Idea ဖြေရှင်းမည့် ပြဿနာတစ်ခုကို ၎င်းတို့ လက်ရှိ မည်သို့ ဖြေရှင်းနေသည်ကို လူတစ်ဦးအား တကယ် Interview လုပ်ပါ'],
        ],
      ),
      step(
        ['Turn insights into a simple persona', 'တွေ့ရှိချက်များကို ရိုးရှင်းသော Persona အဖြစ် ပြောင်းလဲခြင်း'],
        [
          ['A persona summarizes a user type\'s goals, context, and frustrations', 'Persona တစ်ခုသည် User အမျိုးအစားတစ်ခု၏ ရည်မှန်းချက်များ၊ Context နှင့် စိတ်ပျက်ဖွယ်များကို အနှစ်ချုပ်ပေးသည်'],
        ],
        [
          ['Write a simple one-page persona based on your interview', 'သင့် Interview ကို အခြေခံ၍ တစ်မျက်နှာ Persona ရိုးရှင်း ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Conduct two brief user interviews about a real problem, synthesize what you learned into a one-page persona and a list of the top three pain points to address.',
      'တကယ့် ပြဿနာတစ်ခုအကြောင်း User Interview နှစ်ခု ပြုလုပ်ပါ၊ သင်လေ့လာမိသည်များကို တစ်မျက်နှာ Persona နှင့် ဖြေရှင်းရမည့် ရုန်းကန်ရသောနေရာ ထိပ်တန်း သုံးခု စာရင်းအဖြစ် ပေါင်းစပ်ပါ။',
    ]),
    verify: t([
      'Could you describe your target user\'s biggest frustration in their own words, not your assumptions?',
      'သင့် Target User ၏ အကြီးမားဆုံး စိတ်ပျက်ဖွယ်ကို သင့်ယူဆချက်များမဟုတ်ဘဲ ၎င်းတို့ကိုယ်ပိုင် စကားလုံးဖြင့် ဖော်ပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Ask "why" multiple times to get past surface-level answers to real motivations.', 'Surface-level အဖြေများကို ကျော်လွန်ပြီး တကယ့် Motivation များကို ရရှိရန် "ဘာကြောင့်" ကို အကြိမ်များစွာ မေးပါ။'],
      ['Listen more than you talk during a user interview.', 'User Interview တစ်ခုအတွင်း ပြောခြင်းထက် နားထောင်ခြင်းကို ပိုလုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Asking leading questions that confirm what you already believe.', 'သင် ယုံကြည်ထားပြီးသားကို အတည်ပြုပေးသော ဦးဆောင်သော မေးခွန်းများ မေးခြင်း။'],
      ['Designing based on assumptions instead of talking to real users first.', 'ရှေးဦးစွာ User အစစ်များနှင့် စကားမပြောဘဲ ယူဆချက်များအပေါ် အခြေခံ၍ Design ဆွဲခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-beginner-4', [
      ['Interview one real person about a real problem', 'တကယ့် ပြဿနာတစ်ခုအကြောင်း လူတစ်ဦးအား တကယ် Interview လုပ်ပါ'],
      ['Write a one-page persona from your findings', 'သင့်တွေ့ရှိချက်များမှ တစ်မျက်နှာ Persona ရေးပါ'],
      ['List the top three pain points to address', 'ဖြေရှင်းရမည့် ရုန်းကန်ရသောနေရာ ထိပ်တန်း သုံးခု စာရင်းပြုစုပါ'],
    ]),
    completionChecklist: list([
      ['Conduct a basic user interview', 'အခြေခံ User Interview တစ်ခု ပြုလုပ်နိုင်သည်'],
      ['Write a simple user persona', 'ရိုးရှင်းသော User Persona တစ်ခု ရေးနိုင်သည်'],
      ['Identify real pain points from user input', 'User Input မှ တကယ့် ရုန်းကန်ရသောနေရာများ ဖော်ထုတ်နိုင်သည်'],
      ['Distinguish user needs from assumptions', 'User လိုအပ်ချက်များကို ယူဆချက်များနှင့် ခွဲခြားနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-core-1': {
    whatItIs: t([
      'Wireframing is sketching out the basic structure and layout of a screen — where things go — before worrying about visual polish.',
      'Wireframing ဆိုသည်မှာ အမြင်ဆိုင်ရာ အလှပညာအကြောင်း မစိုးရိမ်မီ Screen တစ်ခု၏ အခြေခံ ဖွဲ့စည်းပုံနှင့် Layout — ဘာတွေ ဘယ်နေရာသွားမည် — ကို ရေးဆွဲခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Wireframes let you and your team validate structure and flow quickly and cheaply, before investing time in visual details that might get thrown away.',
      'Wireframe များက သင်နှင့် သင့်အဖွဲ့အား ပစ်ပယ်ခံရနိုင်သော အမြင်ဆိုင်ရာ အသေးစိတ်များတွင် အချိန်ရင်းနှီးမီ ဖွဲ့စည်းပုံနှင့် Flow ကို မြန်ဆန်၍ စျေးသက်သာစွာ အတည်ပြုနိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Used at the start of nearly every real design project to align on structure before visual design begins.',
      'အမြင်ဆိုင်ရာ Design မစတင်မီ ဖွဲ့စည်းပုံအပေါ် သဘောတူညီရန် တကယ့် Design Project နီးပါးအားလုံး၏ အစတွင် သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Low-fidelity wireframes', 'Low-fidelity Wireframe များ'],
      ['Common layout patterns (lists, grids, forms)', 'အများသုံး Layout Pattern များ (Lists, Grids, Forms)'],
      ['Wireframing for mobile vs desktop', 'Mobile နှင့် Desktop အတွက် Wireframing'],
    ]),
    steps: [
      step(
        ['Sketch low-fidelity wireframes quickly', 'Low-fidelity Wireframe များ လျင်မြန်စွာ ရေးဆွဲခြင်း'],
        [
          ['Using simple boxes and lines to represent content, not final visuals', 'Content ကို ကိုယ်စားပြုရန် Box နှင့် Line ရိုးရှင်းများ သုံးခြင်း — အမြင်ဆိုင်ရာ နောက်ဆုံးမဟုတ်ဘဲ'],
          ['Wireframing multiple layout options quickly before committing to one', 'တစ်ခုကို ဆုံးဖြတ်ခြင်းမပြုမီ Layout ရွေးချယ်စရာများစွာကို လျင်မြန်စွာ Wireframe ဆွဲခြင်း'],
        ],
        [
          ['Sketch three different wireframe layouts for the same screen concept', 'Screen Concept တူတစ်ခုအတွက် Wireframe Layout မတူညီသုံးခု ရေးဆွဲပါ'],
        ],
      ),
      step(
        ['Wireframe a full user flow', 'User Flow အပြည့်အစုံ Wireframe ဆွဲခြင်း'],
        [
          ['Connecting wireframes to show how a user moves through a task', 'User တစ်ဦး Task တစ်ခုကို ဖြတ်သန်းသွားပုံကို ပြသရန် Wireframe များကို ချိတ်ဆက်ခြင်း'],
        ],
        [
          ['Wireframe a complete flow (e.g. sign up, or complete a purchase) across multiple screens', 'Screen များစွာတစ်လျှောက် Flow အပြည့်အစုံ (ဥပမာ Sign Up, ဝယ်ယူမှုတစ်ခု ပြီးမြောက်ခြင်း) Wireframe ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Wireframe a complete user flow (4-6 screens) for a real app idea, exploring at least two layout options for the most important screen before choosing one.',
      'App Idea အစစ်တစ်ခုအတွက် User Flow အပြည့်အစုံ (Screen ၄-၆) Wireframe ဆွဲပါ — အရေးအကြီးဆုံး Screen အတွက် Layout ရွေးချယ်စရာ အနည်းဆုံးနှစ်ခု လေ့လာပြီးမှ တစ်ခုကို ရွေးချယ်ပါ။',
    ]),
    verify: t([
      'Could someone follow your wireframes and understand the complete user flow without you explaining it verbally?',
      'တစ်စုံတစ်ဦးသည် သင့် Wireframe များကို လိုက်ပြီး User Flow အပြည့်အစုံကို သင် နှုတ်ဖြင့် ရှင်းမပြဘဲ နားလည်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep wireframes deliberately rough — spending time on visual polish here defeats the purpose.', 'Wireframe များကို ရည်ရွယ်ချက်ရှိစွာ ကြမ်းတမ်းအောင် ထားပါ — ဤနေရာတွင် အမြင်ဆိုင်ရာ အလှပညာအတွက် အချိန်ကုန်ခြင်းက ရည်ရွယ်ချက်ကို ဖျက်ဆီးသည်။'],
      ['Explore multiple layout options before committing — the first idea is rarely the best one.', 'ဆုံးဖြတ်ခြင်းမပြုမီ Layout ရွေးချယ်စရာများစွာကို လေ့လာပါ — ပထမ Idea သည် အကောင်းဆုံးဖြစ်ရန် ရှားပါးသည်။'],
    ]),
    commonMistakes: list([
      ['Adding colors and fonts to wireframes, blurring the line between structure and visual design.', 'Wireframe များသို့ Color နှင့် Font ထည့်ခြင်းက ဖွဲ့စည်းပုံနှင့် Visual Design ကြား မျဉ်းကြောင်းကို ဝေဝါးစေသည်။'],
      ['Only wireframing the "happy path" and ignoring error or empty states.', '"Happy Path" ကိုသာ Wireframe ဆွဲပြီး Error (သို့) Empty State များကို လျစ်လျူရှုခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-core-1', [
      ['Sketch three layout options for one screen', 'Screen တစ်ခုအတွက် Layout ရွေးချယ်စရာသုံးခု ရေးဆွဲပါ'],
      ['Wireframe a complete multi-screen user flow', 'Screen များစွာပါသော User Flow အပြည့်အစုံ Wireframe ဆွဲပါ'],
      ['Include an error or empty state in your flow', 'သင့် Flow တွင် Error (သို့) Empty State တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Sketch quick, rough wireframes', 'မြန်ဆန်ကြမ်းတမ်းသော Wireframe များ ရေးဆွဲနိုင်သည်'],
      ['Wireframe a complete multi-screen flow', 'Screen များစွာပါသော Flow အပြည့်အစုံ Wireframe ဆွဲနိုင်သည်'],
      ['Explore multiple layout options before deciding', 'ဆုံးဖြတ်ခြင်းမပြုမီ Layout ရွေးချယ်စရာများစွာ လေ့လာနိုင်သည်'],
      ['Include non-happy-path states in wireframes', 'Wireframe များတွင် Happy-path မဟုတ်သော State များ ထည့်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-core-2': {
    whatItIs: t([
      'Prototyping connects static screens together into an interactive simulation, so a design can be clicked through and tested like a real app before any code is written.',
      'Prototyping သည် Static Screen များကို Interactive Simulation တစ်ခုအဖြစ် ချိတ်ဆက်ပေးသည် — Code မရေးမီ Design တစ်ခုကို App အစစ်ကဲ့သို့ Click လုပ်ကာ Test လုပ်နိုင်စေသည်။',
    ]),
    whyItMatters: t([
      'A prototype reveals flow and interaction problems that static wireframes cannot — clicking through something feels very different from just looking at it.',
      'Prototype တစ်ခုသည် Static Wireframe များ မဖော်ထုတ်နိုင်သော Flow နှင့် Interaction ပြဿနာများကို ဖော်ထုတ်ပေးသည် — တစ်ခုခုကို Click လုပ်ဖြတ်သန်းခြင်းသည် ကြည့်ရှုရုံသာနှင့် အလွန်ကွဲပြားစွာ ခံစားရသည်။',
    ]),
    whereUsed: t([
      'Used for usability testing, stakeholder demos, and validating flows before development starts.',
      'Development မစတင်မီ Usability Testing, Stakeholder Demo နှင့် Flow အတည်ပြုခြင်းများအတွက် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on your wireframes from the previous topic.',
      'ဤအရာသည် ယခင် Topic မှ သင့် Wireframe များအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Linking screens together', 'Screen များကို အတူတကွ ချိတ်ဆက်ခြင်း'],
      ['Interactive components (e.g. tap states)', 'Interactive Component များ (ဥပမာ Tap State များ)'],
      ['Transitions and animations basics', 'Transition နှင့် Animation အခြေခံ'],
    ]),
    steps: [
      step(
        ['Link screens into a clickable flow', 'Screen များကို Click လုပ်နိုင်သော Flow တစ်ခုအဖြစ် ချိတ်ဆက်ခြင်း'],
        [
          ['Connecting buttons and elements to the screens they should navigate to', 'Button များနှင့် Element များကို Navigate ဖြစ်သင့်သော Screen များသို့ ချိတ်ဆက်ခြင်း'],
        ],
        [
          ['Turn your wireframed user flow into a clickable prototype', 'သင့် Wireframe User Flow ကို Click လုပ်နိုင်သော Prototype တစ်ခုအဖြစ် ပြောင်းပါ'],
        ],
      ),
      step(
        ['Add realistic interactions', 'လက်တွေ့ကျသော Interaction များ ထည့်ခြင်း'],
        [
          ['Simple transitions between screens', 'Screen များကြား ရိုးရှင်းသော Transition များ'],
          ['Component states (e.g. a button changing on tap)', 'Component State များ (ဥပမာ Button တစ်ခု Tap လုပ်သည့်အခါ ပြောင်းလဲခြင်း)'],
        ],
        [
          ['Add a tap-state interaction and a transition to at least one screen in your prototype', 'သင့် Prototype ရှိ Screen အနည်းဆုံးတစ်ခုသို့ Tap-state Interaction တစ်ခုနှင့် Transition တစ်ခု ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a fully clickable prototype of your user flow from the wireframing topic, with realistic transitions, that a real person could test without any explanation from you.',
      'Wireframing Topic မှ သင့် User Flow ၏ Click လုပ်နိုင်သော Prototype အပြည့်အစုံကို လက်တွေ့ကျသော Transition များဖြင့် တည်ဆောက်ပါ — လူတစ်ဦးအနေဖြင့် သင့်ထံမှ ရှင်းလင်းချက်တစ်ခုမှမလိုဘဲ Test လုပ်နိုင်မည့်ပမာဏ။',
    ]),
    verify: t([
      'Could you hand your prototype to a stranger and have them complete the intended task without any guidance from you?',
      'သင့် Prototype ကို လူစိမ်းတစ်ဦးထံ ပေးအပ်ပြီး သင့်ထံမှ လမ်းညွှန်မှု မရှိဘဲ ရည်ရွယ်ထားသော Task ကို ပြီးမြောက်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Test your own prototype by clicking through it as if you were a first-time user.', 'ပထမဆုံးအကြိမ် User တစ်ဦးကဲ့သို့ Click လုပ်ဖြတ်သန်းကာ သင့်ကိုယ်ပိုင် Prototype ကို Test လုပ်ပါ။'],
      ['Do not over-animate — subtle, purposeful transitions communicate better than flashy ones.', 'Animation လွန်ကဲစွာ မလုပ်ပါနှင့် — Subtle ၍ ရည်ရွယ်ချက်ရှိသော Transition များသည် Flashy သော Transition များထက် ပိုကောင်းစွာ ဆက်သွယ်ပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Leaving dead-end screens with no interactive elements linked.', 'Interactive Element မချိတ်ဆက်ထားသော Dead-end Screen များ ချန်ထားခြင်း။'],
      ['Making the prototype so complex it takes longer to build than it saves in learning.', 'Prototype ကို ရှုပ်ထွေးလွန်းအောင် ပြုလုပ်ခြင်းက သင်ယူမှုတွင် သက်သာစေသည်ထက် တည်ဆောက်ရန် အချိန်ပိုကြာစေသည်။'],
    ]),
    practiceTasks: tasks('ui-ux-design-core-2', [
      ['Link wireframes into a clickable prototype', 'Wireframe များကို Click လုပ်နိုင်သော Prototype တစ်ခုအဖြစ် ချိတ်ဆက်ပါ'],
      ['Add at least one realistic transition', 'လက်တွေ့ကျသော Transition အနည်းဆုံးတစ်ခု ထည့်ပါ'],
      ['Test the prototype yourself end to end', 'Prototype ကို ကိုယ်တိုင် အစအဆုံး Test လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Link screens into a clickable flow', 'Screen များကို Click လုပ်နိုင်သော Flow တစ်ခုအဖြစ် ချိတ်ဆက်နိုင်သည်'],
      ['Add realistic transitions and component states', 'လက်တွေ့ကျသော Transition နှင့် Component State များ ထည့်နိုင်သည်'],
      ['Produce a prototype testable without explanation', 'ရှင်းလင်းချက် မလိုဘဲ Test လုပ်နိုင်သော Prototype တစ်ခု ထုတ်လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-core-3': {
    whatItIs: t([
      'User research basics are lightweight methods for learning what real users think and do — beyond a single interview — like surveys and simple usability observations.',
      'User Research အခြေခံသည် Interview တစ်ခုတည်းထက် ကျော်လွန်၍ User အစစ်များ ဘာတွေးပြီး ဘာလုပ်ကြသည်ကို လေ့လာရန် Survey, ရိုးရှင်းသော Usability Observation ကဲ့သို့ ပေါ့ပါးသော နည်းလမ်းများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'One user\'s opinion is not enough to make confident design decisions — broader research methods help validate whether a pattern holds across more people.',
      'User တစ်ဦး၏ Opinion သည် ယုံကြည်စိတ်ချသော Design ဆုံးဖြတ်ချက်များ ချရန် မလုံလောက်ပါ — ကျယ်ပြန့်သော Research နည်းလမ်းများက Pattern တစ်ခုသည် လူများစွာတစ်လျှောက် တည်ရှိမတည်ရှိ အတည်ပြုရန် ကူညီပေးသည်။',
    ]),
    whereUsed: t([
      'Used throughout the design process to validate assumptions and prioritize what to design next.',
      'ယူဆချက်များ အတည်ပြုရန်နှင့် နောက်ထပ် ဘာ Design ဆွဲမည်ကို ဦးစားပေးရန် Design Process တစ်လျှောက် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the user interview skills from the "Understanding user needs" topic.',
      '"Understanding User Needs" Topic မှ User Interview ကျွမ်းကျင်မှုများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Surveys with clear, unbiased questions', 'ရှင်းလင်း၍ ဘက်လိုက်မှုမရှိသော မေးခွန်းများပါသော Survey များ'],
      ['Simple usability observation', 'ရိုးရှင်းသော Usability Observation'],
      ['Synthesizing findings into themes', 'တွေ့ရှိချက်များကို Theme များအဖြစ် ပေါင်းစပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Write and run a short survey', 'Survey တိုတောင်းတစ်ခု ရေးပြီး Run ခြင်း'],
        [
          ['Writing unbiased questions that do not lead the respondent', 'Respondent ကို မဦးဆောင်စေသော ဘက်လိုက်မှုမရှိသော မေးခွန်းများ ရေးခြင်း'],
          ['Keeping surveys short to get more honest, complete responses', 'Survey များကို တိုတောင်းအောင်ထားခြင်းသည် ပိုရိုးသားပြီး ပြည့်စုံသော Response များ ရရှိစေသည်'],
        ],
        [
          ['Write a 5-question survey about your app idea and send it to at least three people', 'သင့် App Idea အကြောင်း မေးခွန်း ၅ ခုပါသော Survey ရေးပြီး လူသုံးဦးအနည်းဆုံးထံ ပို့ပါ'],
        ],
      ),
      step(
        ['Synthesize findings into actionable themes', 'တွေ့ရှိချက်များကို ဆောင်ရွက်နိုင်သော Theme များအဖြစ် ပေါင်းစပ်ခြင်း'],
        [
          ['Looking for patterns across multiple responses, not just individual quotes', 'Response တစ်ခုချင်းစီ Quote များသာမက Response များစွာတစ်လျှောက် Pattern များကို ရှာဖွေခြင်း'],
        ],
        [
          ['Summarize your survey responses into 2-3 clear themes with supporting evidence', 'သင့် Survey Response များကို ထောက်ခံအထောက်အထားများပါသော ရှင်းလင်းသော Theme ၂-၃ ခုအဖြစ် အနှစ်ချုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Run a small research effort (a short survey plus at least one usability observation of someone using an existing app), and write a one-page summary of what you learned and what it means for your design.',
      'Research အားထုတ်မှုသေးငယ်တစ်ခု ပြုလုပ်ပါ (Survey တိုတောင်းတစ်ခု နှင့် ရှိပြီးသား App တစ်ခု အသုံးပြုနေသူ၏ Usability Observation အနည်းဆုံးတစ်ခု) — သင်လေ့လာမိသည်များနှင့် သင့် Design အတွက် ဆိုလိုရင်းကို တစ်မျက်နှာ အနှစ်ချုပ် ရေးပါ။',
    ]),
    verify: t([
      'Could you distinguish, from your own research, a real pattern shared by multiple users versus just one person\'s personal preference?',
      'သင့်ကိုယ်ပိုင် Research မှ User များစွာ မျှဝေသော Pattern အစစ်တစ်ခုနှင့် လူတစ်ဦး၏ ကိုယ်ရေးကိုယ်တာ နှစ်သက်မှုတစ်ခုကို ခွဲခြားနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep surveys short — a long survey gets fewer, lower-quality responses.', 'Survey များကို တိုတောင်းအောင် ထားပါ — Survey ရှည်တစ်ခုသည် Response ပိုနည်း၍ အရည်အသွေးနိမ့်စေသည်။'],
      ['Look for patterns across multiple people before treating a finding as significant.', 'တွေ့ရှိချက်တစ်ခုကို အရေးပါသည်ဟု မယူဆမီ လူများစွာတစ်လျှောက် Pattern များကို ရှာဖွေပါ။'],
    ]),
    commonMistakes: list([
      ['Writing leading survey questions that bias the answers.', 'အဖြေများကို ဘက်လိုက်စေသော ဦးဆောင်သော Survey မေးခွန်းများ ရေးခြင်း။'],
      ['Treating one person\'s opinion as if it represents all users.', 'လူတစ်ဦး၏ Opinion ကို User အားလုံးကို ကိုယ်စားပြုသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-core-3', [
      ['Write and send a short survey', 'Survey တိုတောင်းတစ်ခု ရေးပြီး ပို့ပါ'],
      ['Observe someone using an existing app', 'ရှိပြီးသား App တစ်ခု အသုံးပြုနေသူတစ်ဦးကို စောင့်ကြည့်ပါ'],
      ['Summarize findings into clear themes', 'တွေ့ရှိချက်များကို ရှင်းလင်းသော Theme များအဖြစ် အနှစ်ချုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Write unbiased survey questions', 'ဘက်လိုက်မှုမရှိသော Survey မေးခွန်းများ ရေးနိုင်သည်'],
      ['Conduct a basic usability observation', 'အခြေခံ Usability Observation တစ်ခု ပြုလုပ်နိုင်သည်'],
      ['Synthesize research into actionable themes', 'Research ကို ဆောင်ရွက်နိုင်သော Theme များအဖြစ် ပေါင်းစပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-core-4': {
    whatItIs: t([
      'A design system is a shared set of reusable components, styles, and rules that keep a product visually and functionally consistent.',
      'Design System တစ်ခုသည် Product တစ်ခုကို အမြင်ဆိုင်ရာနှင့် Function ဆိုင်ရာ တသမတ်တည်း ရှိစေသော ပြန်လည်အသုံးပြုနိုင်သော Component, Style, Rule များ မျှဝေထားသော အစုအဝေးတစ်ခု ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Without a design system, similar elements (buttons, forms) end up styled inconsistently across a product, making it feel unpolished and slowing everyone down.',
      'Design System မရှိပါက တူညီသော Element များ (Buttons, Forms) သည် Product တစ်လျှောက် တသမတ်တည်း မဟုတ်ဘဲ Style ချခံရသဖြင့် ချော့မွေ့မှုမရှိသလို ခံစားရစေပြီး လူတိုင်းကို နှေးကွေးစေသည်။',
    ]),
    whereUsed: t([
      'Used by any product team beyond a very small scale — most established products maintain some form of design system.',
      'Scale သေးငယ်လွန်းသည်ထက် ကျော်လွန်သော Product Team မည်သည့်နှင့်မဆို သုံးသည် — ထူထောင်ပြီးသား Product အများစုသည် Design System တစ်မျိုးမျိုးကို ထိန်းသိမ်းထားသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the type scale and color palette basics from the Color & Typography topic.',
      'Color & Typography Topic မှ Type Scale နှင့် Color Palette အခြေခံများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Reusable components (buttons, inputs, cards)', 'ပြန်လည်အသုံးပြုနိုင်သော Component များ (Buttons, Inputs, Cards)'],
      ['Design tokens (color, spacing, type as named values)', 'Design Token များ (Color, Spacing, Type ကို နာမည်ပေးထားသော Value များအဖြစ်)'],
      ['Component states (default, hover, disabled)', 'Component State များ (Default, Hover, Disabled)'],
    ]),
    steps: [
      step(
        ['Build a small set of reusable components', 'ပြန်လည်အသုံးပြုနိုင်သော Component အစုအဝေးသေးငယ်တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Designing one button, one input, and one card that can be reused everywhere', 'နေရာတိုင်းတွင် ပြန်လည်အသုံးပြုနိုင်သော Button တစ်ခု၊ Input တစ်ခု၊ Card တစ်ခု Design ဆွဲခြင်း'],
        ],
        [
          ['Design a button, a text input, and a card component with consistent styling', 'တသမတ်တည်း Style ချထားသော Button, Text Input, Card Component တစ်ခု Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Define component states', 'Component State များ သတ်မှတ်ခြင်း'],
        [
          ['Default, hover/focus, and disabled states for interactive elements', 'Interactive Element များအတွက် Default, Hover/Focus, Disabled State များ'],
        ],
        [
          ['Add default, hover, and disabled states to your button component', 'သင့် Button Component သို့ Default, Hover, Disabled State များ ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small design system page: a button, input, and card component, each with defined states, plus your type scale and color palette documented together in one place.',
      'Design System Page သေးငယ်တစ်ခု တည်ဆောက်ပါ — Button, Input, Card Component တစ်ခုစီတွင် State များ သတ်မှတ်ထားပြီး သင့် Type Scale နှင့် Color Palette ကို နေရာတစ်ခုတည်းတွင် အတူတကွ မှတ်တမ်းတင်ထားပါ။',
    ]),
    verify: t([
      'If you needed to add a new screen to your project, could you build it entirely from your existing component set without designing anything new?',
      'သင့် Project သို့ Screen အသစ်တစ်ခု ထည့်ရန် လိုအပ်လျှင် အသစ်တစ်ခုမှ Design မဆွဲဘဲ ရှိပြီးသား Component Set မှ လုံးဝ တည်ဆောက်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start small — a handful of well-defined components is more useful than a huge, half-finished system.', 'သေးငယ်စွာ စတင်ပါ — ကောင်းစွာ သတ်မှတ်ထားသော Component အနည်းငယ်သည် ကြီးမား၍ တစ်ဝက်ပြီးသော System တစ်ခုထက် ပိုအသုံးဝင်သည်။'],
      ['Reuse existing components instead of creating a new one-off variant for each screen.', 'Screen တစ်ခုစီအတွက် Variant တစ်ခုတည်းသာ အသစ် ဖန်တီးမည့်အစား ရှိပြီးသား Component များကို ပြန်လည်အသုံးပြုပါ။'],
    ]),
    commonMistakes: list([
      ['Creating a slightly different button for every screen instead of reusing one component.', 'Component တစ်ခုတည်းကို ပြန်လည်အသုံးမပြုဘဲ Screen တိုင်းအတွက် အနည်းငယ်ကွဲပြားသော Button တစ်ခု ဖန်တီးခြင်း။'],
      ['Defining components but forgetting interactive states like hover and disabled.', 'Component များ သတ်မှတ်သော်လည်း Hover, Disabled ကဲ့သို့ Interactive State များ မေ့ခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-core-4', [
      ['Design a reusable button, input, and card', 'ပြန်လည်အသုံးပြုနိုင်သော Button, Input, Card Design ဆွဲပါ'],
      ['Define states for interactive components', 'Interactive Component များအတွက် State များ သတ်မှတ်ပါ'],
      ['Document your type scale and color palette together', 'သင့် Type Scale နှင့် Color Palette ကို အတူတကွ မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Design reusable components', 'ပြန်လည်အသုံးပြုနိုင်သော Component များ Design ဆွဲနိုင်သည်'],
      ['Define component states', 'Component State များ သတ်မှတ်နိုင်သည်'],
      ['Document a small design system in one place', 'Design System သေးငယ်တစ်ခုကို နေရာတစ်ခုတည်းတွင် မှတ်တမ်းတင်နိုင်သည်'],
      ['Build a new screen entirely from existing components', 'ရှိပြီးသား Component များမှ Screen အသစ်တစ်ခုကို လုံးဝ တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-intermediate-1': {
    whatItIs: t([
      'Usability testing is watching a real person try to use your design to complete a task, and observing where they struggle.',
      'Usability Testing ဆိုသည်မှာ လူတစ်ဦးအား Task တစ်ခု ပြီးမြောက်ရန် သင့် Design ကို အသုံးပြုကြည့်စေပြီး ၎င်းတို့ ဘယ်နေရာတွင် ရုန်းကန်ရသည်ကို စောင့်ကြည့်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Designers are too close to their own work to see its problems objectively — watching a fresh user struggle reveals issues no amount of internal review would catch.',
      'Designer များသည် မိမိလုပ်ငန်းနှင့် နီးကပ်လွန်းသဖြင့် ၎င်း၏ ပြဿနာများကို ဓမ္မဓိဋ္ဌာန်ကျစွာ မမြင်နိုင်ပါ — User သစ်တစ်ဦး ရုန်းကန်ရသည်ကို စောင့်ကြည့်ခြင်းက Internal Review မည်မျှပင် ဘယ်တော့မှ မဖမ်းယူနိုင်သော ပြဿနာများကို ဖော်ထုတ်ပေးသည်။',
    ]),
    whereUsed: t([
      'A standard step before launching any significant design, at companies of every size that take design quality seriously.',
      'Design အရည်အသွေးကို လေးနက်စွာ ထားသော ကုမ္ပဏီအရွယ်အစား မည်သည်နှင့်မဆို တွင် Design အရေးကြီးတစ်ခု မထုတ်ဖော်မီ စံ အဆင့်တစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires a working prototype from the Core stage to test against.',
      'Test လုပ်ရန် Core အဆင့်မှ အလုပ်လုပ်သော Prototype တစ်ခု လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Writing test tasks (not leading instructions)', 'Test Task များ ရေးခြင်း (ဦးဆောင်သော ညွှန်ကြားချက်များ မဟုတ်ဘဲ)'],
      ['Observing without helping', 'အကူအညီမပေးဘဲ စောင့်ကြည့်ခြင်း'],
      ['Taking notes on where users struggle', 'User များ ရုန်းကန်ရသောနေရာများကို မှတ်ချက်ယူခြင်း'],
      ['Turning findings into design changes', 'တွေ့ရှိချက်များကို Design ပြောင်းလဲမှုများအဖြစ် ပြောင်းလဲခြင်း'],
    ]),
    steps: [
      step(
        ['Write a fair usability test task', 'တရားမျှတသော Usability Test Task တစ်ခု ရေးခြင်း'],
        [
          ['Task instructions should describe a goal, not the exact steps to take', 'Task ညွှန်ကြားချက်များသည် ယူရမည့် အဆင့်အတိအကျမဟုတ်ဘဲ ရည်မှန်းချက်ကို ဖော်ပြသင့်သည်'],
        ],
        [
          ['Write two test tasks for your prototype that describe a goal without giving away the exact steps', 'အတိအကျ အဆင့်များကို မဖော်ပြဘဲ ရည်မှန်းချက်ကို ဖော်ပြသော Test Task နှစ်ခုကို သင့် Prototype အတွက် ရေးပါ'],
        ],
      ),
      step(
        ['Run a test and capture findings', 'Test တစ်ခု Run ပြီး တွေ့ရှိချက်များ ဖမ်းယူခြင်း'],
        [
          ['Observing silently and resisting the urge to help', 'တိတ်တဆိတ် စောင့်ကြည့်ပြီး ကူညီလိုသော စိတ်ကို ထိန်းချုပ်ခြင်း'],
          ['Noting exactly where and why a user hesitated or failed', 'User တစ်ဦး ဘယ်နေရာနှင့် ဘာကြောင့် ဆိုင်းငံ့ (သို့) မအောင်မြင်ခဲ့သည်ကို အတိအကျ မှတ်ချက်ယူခြင်း'],
        ],
        [
          ['Run your two tasks with one real test participant and take detailed notes', 'Test Participant အစစ်တစ်ဦးနှင့် သင့် Task နှစ်ခုကို Run ပြီး အသေးစိတ် မှတ်ချက်ယူပါ'],
        ],
      ),
    ],
    build: t([
      'Run a usability test with at least one real participant on your prototype, document every point of confusion or failure, and revise your design to address the top issue you found.',
      'သင့် Prototype ပေါ်တွင် Test Participant အစစ် အနည်းဆုံးတစ်ဦးနှင့် Usability Test တစ်ခု Run ပါ၊ ရှုပ်ထွေးမှု (သို့) မအောင်မြင်မှု တိုင်းကို မှတ်တမ်းတင်ပြီး တွေ့ရှိထားသော ထိပ်တန်း ပြဿနာကို ဖြေရှင်းရန် သင့် Design ကို ပြင်ဆင်ပါ။',
    ]),
    verify: t([
      'Could you describe, from a real test, a specific moment where a user got confused and exactly what design change would fix it?',
      'တကယ့် Test မှ User တစ်ဦး ရှုပ်ထွေးသွားသော တိကျသောအခိုက်အတန့်တစ်ခုနှင့် ၎င်းကို ဖြေရှင်းမည့် Design ပြောင်းလဲမှု အတိအကျကို ဖော်ပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Resist the urge to explain or help during a test — the confusion itself is the valuable data.', 'Test တစ်ခုအတွင်း ရှင်းပြခြင်း သို့ ကူညီလိုသော စိတ်ကို ထိန်းချုပ်ပါ — ရှုပ်ထွေးမှုကိုယ်တိုင်သည် တန်ဖိုးရှိသော Data ဖြစ်သည်။'],
      ['Even one or two test participants reveal major usability issues.', 'Test Participant တစ်ဦး (သို့) နှစ်ဦးပင် Usability ပြဿနာကြီးများကို ဖော်ထုတ်ပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Jumping in to help the moment a user hesitates, hiding the real problem.', 'User တစ်ဦး ဆိုင်းငံ့ချက်ချင်း ကူညီရန် ခုန်ဝင်ခြင်းက တကယ့် ပြဿနာကို ဖျောက်ဖျက်ပစ်သည်။'],
      ['Writing task instructions so detailed they tell the user exactly what to click.', 'Task ညွှန်ကြားချက်များကို User က ဘယ်နေရာ Click ရမည်ကို အတိအကျ ပြောပြနေအောင် အသေးစိတ်ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-intermediate-1', [
      ['Write two fair, goal-based test tasks', 'တရားမျှတ၍ ရည်မှန်းချက်-based Test Task နှစ်ခု ရေးပါ'],
      ['Run a usability test with one real participant', 'Participant အစစ်တစ်ဦးနှင့် Usability Test တစ်ခု Run ပါ'],
      ['Revise your design based on the findings', 'တွေ့ရှိချက်များအပေါ် အခြေခံ၍ သင့် Design ကို ပြင်ဆင်ပါ'],
    ]),
    completionChecklist: list([
      ['Write fair, unbiased usability test tasks', 'တရားမျှတ၍ ဘက်လိုက်မှုမရှိသော Usability Test Task များ ရေးနိုင်သည်'],
      ['Observe a test without leading the participant', 'Participant ကို မဦးဆောင်ဘဲ Test တစ်ခုကို စောင့်ကြည့်နိုင်သည်'],
      ['Capture specific, actionable findings', 'တိကျ၍ ဆောင်ရွက်နိုင်သော တွေ့ရှိချက်များ ဖမ်းယူနိုင်သည်'],
      ['Revise a design based on real usability findings', 'တကယ့် Usability တွေ့ရှိချက်များအပေါ် အခြေခံ၍ Design တစ်ခု ပြင်ဆင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-intermediate-2': {
    whatItIs: t([
      'Interaction design is the detailed design of how a user interacts with individual elements — what happens on tap, drag, swipe, or input, moment by moment.',
      'Interaction Design ဆိုသည်မှာ User တစ်ဦးသည် Element တစ်ခုချင်းစီနှင့် မည်သို့ Interact ဖြစ်သည် — Tap, Drag, Swipe, Input တွင် ဘာဖြစ်သည်ကို အခိုက်အတန့်လိုက် အသေးစိတ် Design ချမှတ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'The small, moment-to-moment details of interaction are what make an interface feel polished and responsive versus clunky — this is where good design becomes felt, not just seen.',
      'Interaction ၏ သေးငယ်၍ အခိုက်အတန့်လိုက် အသေးစိတ်များသည် Interface တစ်ခုကို Clunky ဖြစ်နေမည့်အစား ချောမွေ့၍ တုံ့ပြန်မှုမြန်သလို ခံစားစေသောအရာ ဖြစ်သည် — Design ကောင်းမွန်ခြင်းသည် မြင်ရုံသာမက ခံစားရလာသော နေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every interactive element in a polished app — buttons, forms, gestures, feedback animations — reflects interaction design decisions.',
      'ချောမွေ့သော App တစ်ခုရှိ Interactive Element တိုင်း — Button, Form, Gesture, Feedback Animation — သည် Interaction Design ဆုံးဖြတ်ချက်များကို ထင်ဟပ်စေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Micro-interactions', 'Micro-interaction များ'],
      ['Feedback for user actions', 'User Action များအတွက် Feedback'],
      ['Loading, empty, and error states', 'Loading, Empty, Error State များ'],
      ['Gesture-based interactions on mobile', 'Mobile ပေါ်ရှိ Gesture-based Interaction များ'],
    ]),
    steps: [
      step(
        ['Design feedback for every user action', 'User Action တိုင်းအတွက် Feedback Design ဆွဲခြင်း'],
        [
          ['Every tap, submit, or swipe should give the user some visible feedback', 'Tap, Submit, Swipe တိုင်းသည် User ကို မြင်သာသော Feedback တစ်ခု ပေးသင့်သည်'],
        ],
        [
          ['Design the feedback state for a button being tapped and a form being submitted', 'Button Tap လုပ်ခြင်းနှင့် Form Submit လုပ်ခြင်းအတွက် Feedback State ကို Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Design loading, empty, and error states', 'Loading, Empty, Error State များ Design ဆွဲခြင်း'],
        [
          ['A screen should never appear broken or blank while something is happening', 'တစ်ခုခု ဖြစ်ပျက်နေစဉ် Screen တစ်ခုသည် ပျက်နေသလို (သို့) Blank ဖြစ်နေသလို ဘယ်တော့မှ ပေါ်လာသင့်ခြင်းမရှိပါ'],
          ['Designing a genuinely helpful empty state (not just "no data")', 'တကယ့် အကူအညီဖြစ်သော Empty State တစ်ခု Design ဆွဲခြင်း ("no data" ဟု မဟုတ်ဘဲ)'],
        ],
        [
          ['Design the loading, empty, and error states for one screen in your prototype', 'သင့် Prototype ရှိ Screen တစ်ခုအတွက် Loading, Empty, Error State များ Design ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Take one screen from your prototype and fully design its interaction details: tap feedback, loading state, empty state, and error state.',
      'သင့် Prototype မှ Screen တစ်ခုကို ယူပြီး ၎င်း၏ Interaction အသေးစိတ်များကို အပြည့်အစုံ Design ဆွဲပါ — Tap Feedback, Loading State, Empty State, Error State။',
    ]),
    verify: t([
      'For every interactive element on your screen, could you explain exactly what visible feedback the user gets?',
      'သင့် Screen ပေါ်ရှိ Interactive Element တိုင်းအတွက် User ရရှိသော မြင်သာသော Feedback ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Design the empty and error states with the same care as the "happy path" — most designers neglect them.', 'Empty State နှင့် Error State များကို "Happy Path" ကဲ့သို့ တူညီသော ဂရုစိုက်မှုဖြင့် Design ဆွဲပါ — Designer အများစုသည် ၎င်းတို့ကို လျစ်လျူရှုကြသည်။'],
      ['Look at apps you admire and study their micro-interactions in detail.', 'သင် ချီးကျူးသော App များကို ကြည့်ပြီး ၎င်းတို့၏ Micro-interaction များကို အသေးစိတ် လေ့လာပါ။'],
    ]),
    commonMistakes: list([
      ['Only designing the "happy path" and leaving loading/error/empty states as an afterthought.', '"Happy Path" ကိုသာ Design ဆွဲပြီး Loading/Error/Empty State များကို နောက်ဆုံးမှ တွေးခေါ်ခြင်း။'],
      ['Giving no feedback on tap, leaving users unsure whether their action registered.', 'Tap တွင် Feedback မပေးခြင်းက User များအား ၎င်းတို့၏ Action မှတ်တမ်းတင်ကြောင်း/မဟုတ်ကြောင်း မသေချာဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ui-ux-design-intermediate-2', [
      ['Design tap feedback for a button', 'Button တစ်ခုအတွက် Tap Feedback Design ဆွဲပါ'],
      ['Design a loading state for a screen', 'Screen တစ်ခုအတွက် Loading State Design ဆွဲပါ'],
      ['Design an empty state and an error state', 'Empty State နှင့် Error State Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Design visible feedback for user actions', 'User Action များအတွက် မြင်သာသော Feedback Design ဆွဲနိုင်သည်'],
      ['Design loading states', 'Loading State များ Design ဆွဲနိုင်သည်'],
      ['Design genuinely helpful empty states', 'တကယ့် အကူအညီဖြစ်သော Empty State များ Design ဆွဲနိုင်သည်'],
      ['Design clear error states', 'ရှင်းလင်းသော Error State များ Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-intermediate-3': {
    whatItIs: t([
      'Designing for accessibility means making sure people with disabilities — visual, motor, cognitive, or otherwise — can actually use what you design.',
      'Accessibility အတွက် Design ဆွဲခြင်းဆိုသည်မှာ မသန်စွမ်းသူများ — အမြင်အာရုံ၊ လှုပ်ရှားမှု၊ ဉာဏ်ရည်ဆိုင်ရာ (သို့) အခြား — သင် Design ဆွဲထားသည်ကို တကယ်အသုံးပြုနိုင်ကြောင်း သေချာစေခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Accessibility is not an edge case — a significant share of any user base has some form of disability, and inaccessible design excludes real people from using your product.',
      'Accessibility သည် Edge Case မဟုတ်ပါ — User Base မည်သည့်တွင်မဆို အရေးပါသော အစုအပိုင်းသည် မသန်စွမ်းမှု တစ်မျိုးမျိုး ရှိသည် — Accessible မဟုတ်သော Design သည် လူအစစ်များကို သင့် Product အသုံးပြုခြင်းမှ ဖယ်ကျဲစေသည်။',
    ]),
    whereUsed: t([
      'A legal requirement in many jurisdictions and a baseline expectation for any professional, responsible product.',
      'တရားစီရင်ပိုင်ခွင့်များစွာတွင် ဥပဒေရေးရာ လိုအပ်ချက်တစ်ခုဖြစ်ပြီး Professional ၍ တာဝန်ယူတတ်သော Product မည်သည့်အတွက်မဆို Baseline မျှော်လင့်ချက် ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the color contrast basics from the Color & Typography topic.',
      'Color & Typography Topic မှ Color Contrast အခြေခံများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Color contrast (revisited more rigorously)', 'Color Contrast (ပိုတင်းကြပ်စွာ ပြန်လည်လေ့လာခြင်း)'],
      ['Text alternatives for images (alt text)', 'Image များအတွက် Text အစားထိုးများ (Alt Text)'],
      ['Keyboard/screen-reader navigability', 'Keyboard/Screen-reader Navigability'],
      ['Touch target sizes for motor accessibility', 'Motor Accessibility အတွက် Touch Target အရွယ်အစားများ'],
    ]),
    steps: [
      step(
        ['Audit a design for accessibility issues', 'Accessibility ပြဿနာများအတွက် Design တစ်ခု Audit လုပ်ခြင်း'],
        [
          ['Checking contrast, text size, and touch target size against standards', 'Contrast, Text Size, Touch Target Size ကို Standard များနှင့် စစ်ဆေးခြင်း'],
          ['Checking whether images have meaningful alt text planned', 'Image များတွင် အဓိပ္ပာယ်ရှိသော Alt Text စီစဉ်ထားခြင်း ရှိမရှိ စစ်ဆေးခြင်း'],
        ],
        [
          ['Audit one of your existing screens against basic accessibility standards and list every issue found', 'သင့် ရှိပြီးသား Screen တစ်ခုကို အခြေခံ Accessibility Standard များနှင့် Audit လုပ်ပြီး တွေ့ရှိသမျှ ပြဿနာများ စာရင်းပြုစုပါ'],
        ],
      ),
      step(
        ['Fix accessibility issues', 'Accessibility ပြဿနာများ ပြင်ဆင်ခြင်း'],
        [
          ['Increasing contrast, text size, or touch targets where needed', 'လိုအပ်သည့်နေရာတွင် Contrast, Text Size, Touch Target များ တိုးမြှင့်ခြင်း'],
          ['Writing meaningful alt text descriptions for images', 'Image များအတွက် အဓိပ္ပာယ်ရှိသော Alt Text ဖော်ပြချက်များ ရေးခြင်း'],
        ],
        [
          ['Fix every issue you found in your accessibility audit', 'သင့် Accessibility Audit တွင် တွေ့ရှိထားသော ပြဿနာတိုင်းကို ပြင်ဆင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Run a full accessibility audit on your prototype (contrast, text size, touch targets, alt text) and revise it to fix every issue you find.',
      'သင့် Prototype ပေါ်တွင် Accessibility Audit အပြည့်အစုံ Run ပါ (Contrast, Text Size, Touch Targets, Alt Text) — တွေ့ရှိသမျှ ပြဿနာတိုင်းကို ပြင်ဆင်ရန် ပြန်လည် ပြင်ဆင်ပါ။',
    ]),
    verify: t([
      'Could someone using a screen reader or with low vision navigate and understand your design?',
      'Screen Reader အသုံးပြုသူ (သို့) Low Vision ရှိသူတစ်ဦးသည် သင့် Design ကို Navigate လုပ်ပြီး နားလည်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use a real accessibility checker tool — do not guess whether something passes.', 'Accessibility Checker Tool အစစ်ကို သုံးပါ — တစ်ခုခု ဖြတ်ခြင်း/မဖြတ်ခြင်းကို မခန့်မှန်းပါနှင့်။'],
      ['Design accessibility in from the start — retrofitting it later is much harder.', 'Accessibility ကို အစမှစ၍ Design ထဲသို့ ထည့်ပါ — နောက်ပိုင်း ပြန်ထည့်ခြင်းက ပိုခက်ခဲသည်။'],
    ]),
    commonMistakes: list([
      ['Treating accessibility as an afterthought instead of a core design requirement.', 'Accessibility ကို အဓိက Design လိုအပ်ချက်တစ်ခုအစား နောက်ဆုံးမှ တွေးခေါ်ခြင်း။'],
      ['Writing unhelpful alt text like "image" instead of a meaningful description.', 'အဓိပ္ပာယ်ရှိသော ဖော်ပြချက်အစား "image" ကဲ့သို့ အသုံးမဝင်သော Alt Text ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-intermediate-3', [
      ['Audit a screen for accessibility issues', 'Accessibility ပြဿနာများအတွက် Screen တစ်ခု Audit လုပ်ပါ'],
      ['Fix contrast and touch target issues', 'Contrast နှင့် Touch Target ပြဿနာများ ပြင်ဆင်ပါ'],
      ['Write meaningful alt text for images', 'Image များအတွက် အဓိပ္ပာယ်ရှိသော Alt Text ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Audit a design for accessibility issues', 'Accessibility ပြဿနာများအတွက် Design တစ်ခု Audit လုပ်နိုင်သည်'],
      ['Fix contrast and touch target problems', 'Contrast နှင့် Touch Target ပြဿနာများ ပြင်ဆင်နိုင်သည်'],
      ['Write meaningful alt text', 'အဓိပ္ပာယ်ရှိသော Alt Text ရေးနိုင်သည်'],
      ['Explain why accessibility matters beyond compliance', 'Compliance ကျော်လွန်၍ Accessibility ဘာကြောင့် အရေးကြီးသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-intermediate-4': {
    whatItIs: t([
      'Collaborating with developers means handing off a design in a way developers can actually build accurately — specs, assets, and clear communication.',
      'Developer များနှင့် ပူးပေါင်းဆောင်ရွက်ခြင်းဆိုသည်မှာ Developer များ တကယ်တိကျစွာ တည်ဆောက်နိုင်မည့်ပုံစံဖြင့် Design တစ်ခုကို လက်ဆင့်ကမ်းပေးခြင်း ဖြစ်သည် — Spec, Asset, ရှင်းလင်းသော ဆက်သွယ်မှု။',
    ]),
    whyItMatters: t([
      'A beautiful design that developers cannot accurately implement due to missing specs or unclear communication never actually reaches real users.',
      'Spec ပျောက်ဆုံးခြင်း (သို့) ဆက်သွယ်မှု မရှင်းလင်းခြင်းကြောင့် Developer များ တိကျစွာ Implement မလုပ်နိုင်သော လှပသော Design တစ်ခုသည် User အစစ်များထံ ဘယ်တော့မှ ရောက်ရှိလာလိမ့်မည် မဟုတ်ပါ။',
    ]),
    whereUsed: t([
      'Happens on every real product team — the handoff between design and engineering is a critical, recurring collaboration point.',
      'Product Team တိုင်းတွင် ဖြစ်ပျက်သည် — Design နှင့် Engineering ကြား Handoff သည် အရေးကြီး၍ ထပ်ခါထပ်ခါ ဖြစ်ပေါ်သော ပူးပေါင်းဆောင်ရွက်မှု အချက် ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on your design system work from the Core stage.',
      'Core အဆင့်မှ သင့် Design System အလုပ်အပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Design specs (spacing, sizes, colors as exact values)', 'Design Spec များ (Spacing, Sizes, Colors ကို Value အတိအကျအဖြစ်)'],
      ['Exporting assets for development', 'Development အတွက် Asset များ Export လုပ်ခြင်း'],
      ['Communicating edge cases and states clearly', 'Edge Case များနှင့် State များကို ရှင်းလင်းစွာ ဆက်သွယ်ခြင်း'],
      ['Reviewing implemented work against the design', 'Implement လုပ်ထားသော အလုပ်ကို Design နှင့် ယှဉ်ပြီး Review လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Prepare a design for developer handoff', 'Developer Handoff အတွက် Design တစ်ခု ပြင်ဆင်ခြင်း'],
        [
          ['Making sure spacing, sizes, and colors are precise and inspectable', 'Spacing, Sizes, Colors တိကျ၍ Inspect လုပ်နိုင်ကြောင်း သေချာစေခြင်း'],
          ['Exporting icons and images in the formats developers need', 'Developer များ လိုအပ်သော Format များဖြင့် Icons နှင့် Images Export လုပ်ခြင်း'],
        ],
        [
          ['Prepare one screen from your prototype for handoff: precise measurements, exported assets, and states documented', 'Handoff အတွက် သင့် Prototype မှ Screen တစ်ခု ပြင်ဆင်ပါ — တိကျသော အတိုင်းအတာများ၊ Export လုပ်ထားသော Asset များနှင့် မှတ်တမ်းတင်ထားသော State များ'],
        ],
      ),
      step(
        ['Communicate edge cases and review implementation', 'Edge Case များ ဆက်သွယ်ပြီး Implementation ကို Review လုပ်ခြင်း'],
        [
          ['Explicitly documenting what should happen with very long text, empty data, or errors', 'Text ရှည်လွန်းခြင်း၊ Data မရှိခြင်း (သို့) Error များနှင့်ပတ်သက်၍ ဘာဖြစ်သင့်သည်ကို ရှင်းလင်းစွာ မှတ်တမ်းတင်ခြင်း'],
          ['Reviewing a built feature against the original design and giving specific feedback', 'တည်ဆောက်ပြီးသား Feature တစ်ခုကို မူလ Design နှင့် ယှဉ်ပြီး Review လုပ်ကာ တိကျသော Feedback ပေးခြင်း'],
        ],
        [
          ['Write a short handoff note documenting how your screen should behave with long text and no data', 'Text ရှည်လွန်းသည်နှင့် Data မရှိသည့်အခါ သင့် Screen မည်သို့ Behave လုပ်သင့်သည်ကို မှတ်တမ်းတင်သော Handoff Note တိုတောင်း ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Prepare a complete developer handoff package for one screen from your prototype: precise specs, exported assets, and documented edge cases, as if a real developer were about to build it.',
      'သင့် Prototype မှ Screen တစ်ခုအတွက် Developer Handoff Package အပြည့်အစုံ ပြင်ဆင်ပါ — တိကျသော Spec, Export လုပ်ထားသော Asset, မှတ်တမ်းတင်ထားသော Edge Case များ — Developer အစစ်တစ်ဦး ၎င်းကို တည်ဆောက်တော့မည့်ပမာဏ။',
    ]),
    verify: t([
      'Could a developer who has never seen your design build the screen accurately using only your handoff materials?',
      'သင့် Design ကို ဘယ်တော့မှ မမြင်ဖူးသော Developer တစ်ဦးသည် သင့် Handoff Material များကိုသာ သုံး၍ Screen ကို တိကျစွာ တည်ဆောက်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Talk to developers early in the process, not just at handoff — they often catch feasibility issues before you finish designing.', 'Handoff တွင်သာမက Process ၏ အစောပိုင်းတွင် Developer များနှင့် စကားပြောပါ — ၎င်းတို့သည် သင် Design မပြီးမီ Feasibility ပြဿနာများကို မကြာခဏ ဖမ်းမိတတ်သည်။'],
      ['Document edge cases explicitly — do not assume they are obvious.', 'Edge Case များကို ရှင်းလင်းစွာ မှတ်တမ်းတင်ပါ — ၎င်းတို့ ထင်ရှားသည်ဟု မယူဆပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Handing off a design with imprecise spacing and no exported assets.', 'တိကျမှုမရှိသော Spacing နှင့် Export လုပ်ထားသော Asset မပါဘဲ Design တစ်ခု Handoff ပေးခြင်း။'],
      ['Never documenting what should happen in edge cases (long text, empty states, errors).', 'Edge Case များ (Text ရှည်ခြင်း၊ Empty State, Error) တွင် ဘာဖြစ်သင့်သည်ကို ဘယ်တော့မှ မှတ်တမ်းမတင်ခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-intermediate-4', [
      ['Prepare precise specs and exported assets for a screen', 'Screen တစ်ခုအတွက် တိကျသော Spec နှင့် Export လုပ်ထားသော Asset ပြင်ဆင်ပါ'],
      ['Document edge case behavior', 'Edge Case Behavior မှတ်တမ်းတင်ပါ'],
      ['Review an implementation against the original design', 'Implementation တစ်ခုကို မူလ Design နှင့် ယှဉ်ပြီး Review လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Prepare precise design specs', 'တိကျသော Design Spec များ ပြင်ဆင်နိုင်သည်'],
      ['Export assets in developer-ready formats', 'Developer-ready Format များဖြင့် Asset များ Export လုပ်နိုင်သည်'],
      ['Document edge cases clearly', 'Edge Case များကို ရှင်းလင်းစွာ မှတ်တမ်းတင်နိုင်သည်'],
      ['Review implemented work against a design', 'Implement လုပ်ထားသော အလုပ်ကို Design နှင့် ယှဉ်ပြီး Review လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-advanced-1': {
    whatItIs: t([
      'End-to-end product design means owning an entire design process — research, wireframes, prototypes, testing, and handoff — for a real, complete product experience.',
      'End-to-end Product Design ဆိုသည်မှာ တကယ့် ပြီးပြည့်စုံသော Product အတွေ့အကြုံအတွက် Design Process တစ်ခုလုံး — Research, Wireframes, Prototypes, Testing, Handoff — ကို ပိုင်ဆိုင်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Real design work rarely happens in isolated steps — the ability to carry a project from a vague problem to a shipped, tested solution is what senior designers are trusted to do.',
      'တကယ့် Design အလုပ်သည် သီးသန့် Step များတွင် ရှားရှားပါးပါးသာ ဖြစ်ပျက်သည် — Project တစ်ခုကို ရှင်းလင်းမှုမရှိသော ပြဿနာမှ Ship ပြီး Test လုပ်ထားသော ဖြေရှင်းချက်အထိ သယ်ဆောင်နိုင်စွမ်းသည် Senior Designer များ ယုံကြည်ခံရသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Expected of senior and lead designers who own features or products end to end.',
      'Feature (သို့) Product များကို အစအဆုံး ပိုင်ဆိုင်သော Senior နှင့် Lead Designer များထံမှ မျှော်လင့်ထားသည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on every earlier topic in the UI/UX Design path.',
      'ဤသည်မှာ UI/UX Design Path ရှေ့ပိုင်းမှ Topic တိုင်းကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Framing a problem before designing a solution', 'ဖြေရှင်းချက်တစ်ခု Design မဆွဲမီ ပြဿနာတစ်ခုကို ဖွဲ့စည်းခြင်း'],
      ['Running the full process: research → wireframe → prototype → test → handoff', 'Process အပြည့်အစုံ Run ခြင်း — Research → Wireframe → Prototype → Test → Handoff'],
      ['Iterating based on findings at each stage', 'အဆင့်တစ်ခုစီရှိ တွေ့ရှိချက်များအပေါ် အခြေခံ၍ Iterate လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Frame a real problem clearly', 'တကယ့် ပြဿနာတစ်ခုကို ရှင်းလင်းစွာ ဖွဲ့စည်းခြင်း'],
        [
          ['Writing a clear problem statement before jumping to solutions', 'ဖြေရှင်းချက်များသို့ မခုန်ဝင်မီ ရှင်းလင်းသော Problem Statement ရေးခြင်း'],
        ],
        [
          ['Write a one-paragraph problem statement for a real product idea, grounded in actual user research', 'တကယ့် User Research အပေါ် အခြေခံ၍ Product Idea အစစ်တစ်ခုအတွက် စာပိုဒ်တစ်ပိုဒ် Problem Statement ရေးပါ'],
        ],
      ),
      step(
        ['Run the full design process end to end', 'Design Process အပြည့်အစုံကို အစအဆုံး Run ခြင်း'],
        [
          ['Moving deliberately through research, wireframes, prototyping, and testing', 'Research, Wireframes, Prototyping, Testing များကို ရည်ရွယ်ချက်ရှိစွာ ဖြတ်သန်းခြင်း'],
          ['Iterating your design based on what testing reveals, not skipping straight to final visuals', 'Final Visual များသို့ တိုက်ရိုက် ကျော်ခြင်းမပြုဘဲ Testing ဖော်ထုတ်ပေးသည်အပေါ် အခြေခံ၍ သင့် Design ကို Iterate လုပ်ခြင်း'],
        ],
        [
          ['Carry your problem statement through research, wireframes, a tested prototype, and a final handoff-ready design', 'သင့် Problem Statement ကို Research, Wireframes, Test လုပ်ထားသော Prototype နှင့် Handoff-ready ဖြစ်သော Final Design အထိ သယ်ဆောင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Complete a full end-to-end design project for a real problem: a written problem statement, user research, wireframes, a tested prototype, at least one iteration based on findings, and a handoff-ready final design.',
      'တကယ့် ပြဿနာတစ်ခုအတွက် Design Project အပြည့်အစုံ End-to-end ပြီးမြောက်အောင် လုပ်ပါ — ရေးသားထားသော Problem Statement, User Research, Wireframes, Test လုပ်ထားသော Prototype, တွေ့ရှိချက်များအပေါ် အခြေခံသော Iteration အနည်းဆုံးတစ်ခုနှင့် Handoff-ready ဖြစ်သော Final Design။',
    ]),
    verify: t([
      'Could you walk someone through your entire process, from the original problem to the final design, explaining why each decision was made?',
      'မူလ ပြဿနာမှ Final Design အထိ သင့် Process တစ်ခုလုံးကို ဆုံးဖြတ်ချက်တစ်ခုစီ ဘာကြောင့် ချမှတ်ခဲ့သည်ကို ရှင်းပြရင်း တစ်စုံတစ်ဦးအား ခေါ်ဆောင်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Do not skip stages under time pressure — a rushed research or testing step often costs more time later.', 'အချိန်ဖိအားအောက်တွင် Stage များ မကျော်ပါနှင့် — အလျင်စလို Research (သို့) Testing Step တစ်ခုသည် နောက်ပိုင်း အချိန်ပိုကုန်လေ့ရှိသည်။'],
      ['Be willing to significantly change direction if research or testing reveals your first idea was wrong.', 'Research (သို့) Testing က သင့်ပထမ Idea မှားနေကြောင်း ဖော်ထုတ်ပါက လမ်းကြောင်းကို သိသိသာသာ ပြောင်းလဲရန် အသင့်ရှိပါ။'],
    ]),
    commonMistakes: list([
      ['Skipping research and jumping straight to visual design.', 'Research ကျော်ပြီး Visual Design သို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
      ['Never iterating after testing, treating the first prototype as final.', 'Testing ပြီးနောက် ဘယ်တော့မှ Iterate မလုပ်ဘဲ ပထမ Prototype ကို Final ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-advanced-1', [
      ['Write a clear problem statement grounded in research', 'Research အပေါ် အခြေခံသော ရှင်းလင်းသော Problem Statement ရေးပါ'],
      ['Run the full process from wireframe to tested prototype', 'Wireframe မှ Test လုပ်ထားသော Prototype အထိ Process အပြည့်အစုံ Run ပါ'],
      ['Iterate the design based on testing findings', 'Testing တွေ့ရှိချက်များအပေါ် အခြေခံ၍ Design ကို Iterate လုပ်ပါ'],
      ['Produce a final, handoff-ready design', 'Handoff-ready ဖြစ်သော Final Design တစ်ခု ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Frame a clear problem statement from research', 'Research မှ ရှင်းလင်းသော Problem Statement ဖွဲ့စည်းနိုင်သည်'],
      ['Run a full design process end to end', 'Design Process အပြည့်အစုံကို အစအဆုံး Run နိုင်သည်'],
      ['Iterate based on real findings', 'တကယ့် တွေ့ရှိချက်များအပေါ် အခြေခံ၍ Iterate လုပ်နိုင်သည်'],
      ['Deliver a complete, handoff-ready design', 'ပြီးပြည့်စုံ၍ Handoff-ready ဖြစ်သော Design တစ်ခု ပေးအပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-advanced-2': {
    whatItIs: t([
      'Design leadership and critique cover how to give and receive structured, useful feedback on design work, and how to help guide a team\'s design decisions.',
      'Design Leadership နှင့် Critique သည် Design အလုပ်တွင် ဖွဲ့စည်းထားပြီး အသုံးဝင်သော Feedback ကို မည်သို့ ပေးပြီး လက်ခံသည်၊ အဖွဲ့တစ်ခု၏ Design ဆုံးဖြတ်ချက်များကို မည်သို့ လမ်းညွှန်ကူညီသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'As designers grow, their impact increasingly comes through improving other people\'s work and decisions, not just their own — critique skills are core to that growth.',
      'Designer များ ကြီးထွားလာသည်နှင့်အမျှ ၎င်းတို့၏ သက်ရောက်မှုသည် ၎င်းတို့ ကိုယ်ပိုင်အလုပ်တစ်ခုတည်းမကဘဲ အခြားသူများ၏ အလုပ်နှင့် ဆုံးဖြတ်ချက်များကို ပိုမိုကောင်းမွန်အောင် ပြုလုပ်ခြင်းမှတစ်ဆင့် လာလေ့ရှိသည် — Critique ကျွမ်းကျင်မှုများသည် ထိုကြီးထွားမှု၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Central to design team culture at any company with more than one or two designers — regular critique sessions are a common practice.',
      'Designer တစ်ဦး (သို့) နှစ်ဦးထက်ပိုသော ကုမ္ပဏီ မည်သည့်တွင်မဆို Design Team ယဉ်ကျေးမှု၏ အဓိက ကျောရိုး ဖြစ်သည် — ပုံမှန် Critique Session များသည် အများသုံး အလေ့အထ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Structured critique frameworks', 'ဖွဲ့စည်းထားသော Critique Framework များ'],
      ['Separating the work from the person', 'အလုပ်ကို လူနှင့် ခွဲခြားခြင်း'],
      ['Giving actionable, specific feedback', 'ဆောင်ရွက်နိုင်၍ တိကျသော Feedback ပေးခြင်း'],
      ['Receiving critique without becoming defensive', 'ခုခံမှုမရှိဘဲ Critique လက်ခံခြင်း'],
    ]),
    steps: [
      step(
        ['Give structured, useful critique', 'ဖွဲ့စည်းထားပြီး အသုံးဝင်သော Critique ပေးခြင်း'],
        [
          ['Grounding feedback in the design\'s goals, not personal taste', 'ကိုယ်ရေးကိုယ်တာ နှစ်သက်မှုမဟုတ်ဘဲ Design ၏ ရည်မှန်းချက်များတွင် Feedback ကို အခြေခံခြင်း'],
          ['Being specific: "this button is hard to find" beats "I don\'t like this"', 'တိကျစွာ ဖြစ်ခြင်း — "ဒီ Button ကို ရှာရခက်တယ်" သည် "ဒါကို မကြိုက်ဘူး" ထက် ပိုကောင်းသည်'],
        ],
        [
          ['Give structured critique on two designs (a teammate\'s, or a real app\'s screen), each grounded in specific goals', 'Design နှစ်ခု (Teammate တစ်ဦး၏ သို့ App အစစ်တစ်ခု၏ Screen) အပေါ် ဖွဲ့စည်းထားသော Critique ပေးပါ — တစ်ခုစီကို တိကျသော ရည်မှန်းချက်များတွင် အခြေခံပြီး'],
        ],
      ),
      step(
        ['Facilitate a design decision', 'Design ဆုံးဖြတ်ချက်တစ်ခု ကူညီဆောင်ရွက်ခြင်း'],
        [
          ['Helping a group weigh trade-offs instead of just picking a favorite', 'အနှစ်သက်ဆုံးကို ရွေးချယ်ရုံမဟုတ်ဘဲ Trade-off များကို ချိန်ထိုးရန် အဖွဲ့တစ်ဖွဲ့ကို ကူညီခြင်း'],
        ],
        [
          ['Facilitate a decision between two design options by listing the trade-offs of each clearly', 'Design ရွေးချယ်စရာနှစ်ခုကြား ဆုံးဖြတ်ချက်တစ်ခုကို တစ်ခုစီ၏ Trade-off များကို ရှင်းလင်းစွာ စာရင်းပြုစု၍ ကူညီဆောင်ရွက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Give a full structured critique session (written or live) on a real design — your own past work or someone else\'s — covering what works, what does not, and specific, actionable suggestions.',
      'တကယ့် Design တစ်ခု — သင့်ကိုယ်ပိုင် ယခင်အလုပ် (သို့) အခြားသူတစ်ဦး၏ — အပေါ် ဖွဲ့စည်းထားသော Critique Session အပြည့်အစုံ (ရေးသား သို့ Live) ပေးပါ — ဘာအလုပ်ဖြစ်သည်၊ ဘာအလုပ်မဖြစ်ဘူးနှင့် တိကျ၍ ဆောင်ရွက်နိုင်သော အကြံပြုချက်များ ပါဝင်ပြီး။',
    ]),
    verify: t([
      'Could you give feedback on a design you personally dislike in a way that is fair, specific, and grounded in its actual goals rather than your taste?',
      'ကိုယ်ရေးကိုယ်တာ မကြိုက်သော Design တစ်ခုအပေါ် တရားမျှတ၍ တိကျ၍ သင့်ကိုယ်ပိုင် နှစ်သက်မှုမဟုတ်ဘဲ ၎င်း၏ တကယ့် ရည်မှန်းချက်များတွင် အခြေခံသော Feedback ပေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Ask questions before giving opinions — understanding intent first leads to better feedback.', 'Opinion မပေးမီ မေးခွန်းများ မေးပါ — ရည်ရွယ်ချက်ကို ဦးစွာ နားလည်ခြင်းက Feedback ပိုကောင်းစေသည်။'],
      ['Separate "I would do it differently" from "this does not work" — both are valid but very different.', '"ကျွန်တော်ဆို မတူညီအောင်လုပ်မယ်" ကို "ဒါက အလုပ်မဖြစ်ဘူး" နှင့် ခွဲခြားပါ — နှစ်ခုစလုံး မှန်ကန်သော်လည်း အလွန်ကွဲပြားသည်။'],
    ]),
    commonMistakes: list([
      ['Giving vague feedback based on personal taste instead of the design\'s actual goals.', 'Design ၏ တကယ့် ရည်မှန်းချက်များမဟုတ်ဘဲ ကိုယ်ရေးကိုယ်တာ နှစ်သက်မှုအပေါ် အခြေခံသော မရှင်းလင်းသော Feedback ပေးခြင်း။'],
      ['Becoming defensive when receiving critique instead of listening to understand.', 'နားထောင်ရန်မဟုတ်ဘဲ Critique လက်ခံသည့်အခါ ခုခံလာခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-advanced-2', [
      ['Give structured critique on two designs', 'Design နှစ်ခုအပေါ် ဖွဲ့စည်းထားသော Critique ပေးပါ'],
      ['Facilitate a decision between two design options', 'Design ရွေးချယ်စရာနှစ်ခုကြား ဆုံးဖြတ်ချက်တစ်ခုကို ကူညီဆောင်ရွက်ပါ'],
      ['Run a full critique session on a real design', 'တကယ့် Design တစ်ခုအပေါ် Critique Session အပြည့်အစုံ Run ပါ'],
    ]),
    completionChecklist: list([
      ['Give specific, goal-grounded critique', 'တိကျ၍ ရည်မှန်းချက်-based Critique ပေးနိုင်သည်'],
      ['Receive critique without becoming defensive', 'ခုခံမှုမရှိဘဲ Critique လက်ခံနိုင်သည်'],
      ['Help a team weigh design trade-offs', 'Design Trade-off များ ချိန်ထိုးရန် အဖွဲ့တစ်ဖွဲ့ကို ကူညီနိုင်သည်'],
      ['Run a structured critique session', 'ဖွဲ့စည်းထားသော Critique Session တစ်ခု Run နိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-advanced-3': {
    whatItIs: t([
      'Advanced design systems cover scaling a design system across a larger product or team — governance, documentation, and keeping it actually used and up to date.',
      'အဆင့်မြင့် Design System များသည် Product (သို့) Team ကြီးများတစ်လျှောက် Design System တစ်ခုကို Scale တိုးချဲ့ခြင်း — Governance, Documentation, အမြဲသုံးပြီး အသစ်ဖြစ်နေအောင် ထားခြင်း — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A design system that is not maintained or governed drifts out of sync with the real product, becoming actively unhelpful rather than a source of consistency.',
      'ထိန်းသိမ်း (သို့) Governance မလုပ်ထားသော Design System တစ်ခုသည် တကယ့် Product နှင့် Sync မကိုက်တော့ဘဲ Consistency ၏ အရင်းအမြစ်တစ်ခုမဟုတ်တော့ဘဲ တက်ကြွစွာ အသုံးမဝင်တော့ခြင်းသို့ ရောက်သွားသည်။',
    ]),
    whereUsed: t([
      'Relevant at organizations large enough that many people touch the same design system across many products or teams.',
      'Product (သို့) Team များစွာတစ်လျှောက် လူများစွာ Design System တူတူကို ထိတွေ့သော အဖွဲ့အစည်းကြီးများတွင် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the design system basics from the Core stage.',
      'Core အဆင့်မှ Design System အခြေခံများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Component documentation (usage guidelines, do/don\'t examples)', 'Component Documentation (Usage Guideline များ၊ Do/Don\'t ဥပမာများ)'],
      ['Versioning a design system', 'Design System တစ်ခုကို Version ပေးခြင်း'],
      ['Governance: who can add/change components', 'Governance — မည်သူ Component များ ထည့်/ပြောင်းလဲနိုင်သည်ကို'],
      ['Keeping design and code in sync', 'Design နှင့် Code ကို Sync ကိုက်နေအောင် ထားခြင်း'],
    ]),
    steps: [
      step(
        ['Document components for real usage', 'Component များကို တကယ့်အသုံးပြုမှုအတွက် Documentation ရေးခြင်း'],
        [
          ['Writing clear usage guidelines and do/don\'t examples for a component', 'Component တစ်ခုအတွက် ရှင်းလင်းသော Usage Guideline နှင့် Do/Don\'t ဥပမာများ ရေးခြင်း'],
        ],
        [
          ['Write full usage documentation (with do/don\'t examples) for one component from your design system', 'သင့် Design System မှ Component တစ်ခုအတွက် Usage Documentation အပြည့်အစုံ (Do/Don\'t ဥပမာများပါ) ရေးပါ'],
        ],
      ),
      step(
        ['Plan for governance and change', 'Governance နှင့် ပြောင်းလဲမှုအတွက် စီစဉ်ခြင်း'],
        [
          ['Deciding who can propose and approve new components', 'Component အသစ်များ တင်ပြပြီး အတည်ပြုနိုင်သူများကို ဆုံးဖြတ်ခြင်း'],
          ['Communicating a breaking change to a component across a team', 'Component တစ်ခုရှိ Breaking Change တစ်ခုကို အဖွဲ့တစ်လျှောက် ဆက်သွယ်ခြင်း'],
        ],
        [
          ['Write a short governance proposal: who can change a component in your design system, and how changes get communicated', 'Governance Proposal တိုတောင်း ရေးပါ — သင့် Design System ရှိ Component တစ်ခုကို မည်သူ ပြောင်းလဲနိုင်သည်၊ ပြောင်းလဲမှုများကို မည်သို့ ဆက်သွယ်သည်'],
        ],
      ),
    ],
    build: t([
      'Extend your earlier design system with full documentation for every component (usage guidelines, do/don\'t examples) and a short governance plan for how it evolves over time.',
      'သင့် ယခင် Design System ကို Component တိုင်းအတွက် Documentation အပြည့်အစုံ (Usage Guideline, Do/Don\'t ဥပမာများ) နှင့် အချိန်နှင့်အမျှ မည်သို့ တိုးတက်ပြောင်းလဲသည်ကို Governance Plan တိုတောင်းတစ်ခုဖြင့် တိုးချဲ့ပါ။',
    ]),
    verify: t([
      'Could a new designer joining your project understand how and when to use each component correctly without asking you directly?',
      'သင့် Project သို့ ပါဝင်လာသော Designer အသစ်တစ်ဦးသည် Component တစ်ခုစီကို မည်သို့နှင့် ဘယ်အချိန် မှန်ကန်စွာ သုံးရမည်ကို သင့်ကို တိုက်ရိုက် မမေးဘဲ နားလည်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Document the "why" behind a component, not just how it looks.', 'Component တစ်ခု၏ ပုံပေါ်ပုံသာမက ၎င်းနောက်ကွယ်ရှိ "ဘာကြောင့်" ကို Documentation ရေးပါ။'],
      ['A design system without clear ownership tends to drift and become inconsistent over time.', 'ရှင်းလင်းသော Ownership မရှိသော Design System တစ်ခုသည် အချိန်နှင့်အမျှ ကွဲသွားပြီး တသမတ်တည်း မဖြစ်တော့တတ်သည်။'],
    ]),
    commonMistakes: list([
      ['Building a design system with no documentation, so it is used inconsistently.', 'Documentation မပါဘဲ Design System တစ်ခု တည်ဆောက်ခြင်းက တသမတ်တည်း မဖြစ်ဘဲ အသုံးပြုစေသည်။'],
      ['Having no clear owner or process for proposing changes, leading to chaos.', 'ပြောင်းလဲမှုများ တင်ပြရန် ရှင်းလင်းသော Owner (သို့) Process မရှိခြင်းက Chaos ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ui-ux-design-advanced-3', [
      ['Write usage documentation for a component', 'Component တစ်ခုအတွက် Usage Documentation ရေးပါ'],
      ['Write do/don\'t examples for a component', 'Component တစ်ခုအတွက် Do/Don\'t ဥပမာများ ရေးပါ'],
      ['Write a short governance plan', 'Governance Plan တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Document components with clear usage guidelines', 'ရှင်းလင်းသော Usage Guideline များဖြင့် Component များ Documentation ရေးနိုင်သည်'],
      ['Write helpful do/don\'t examples', 'အသုံးဝင်သော Do/Don\'t ဥပမာများ ရေးနိုင်သည်'],
      ['Propose a basic governance process', 'အခြေခံ Governance Process တစ်ခု တင်ပြနိုင်သည်'],
      ['Explain how to keep a design system from drifting', 'Design System တစ်ခု မကွဲအောင် မည်သို့ ထားရမည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ui-ux-design-advanced-4': {
    whatItIs: t([
      'Data-informed design decisions means using real usage data and metrics alongside qualitative research to guide design choices, not relying on opinion alone.',
      'Data-informed Design ဆုံးဖြတ်ချက်များဆိုသည်မှာ Opinion တစ်ခုတည်းအပေါ် မမှီခိုဘဲ Design ရွေးချယ်မှုများကို လမ်းညွှန်ရန် Qualitative Research နှင့်အတူ တကယ့် Usage Data နှင့် Metric များ သုံးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Qualitative research tells you why, but data tells you how many and how much — combining both gives far more confident, defensible design decisions than either alone.',
      'Qualitative Research က ဘာကြောင့်ဆိုတာ ပြောပြပေမယ့် Data က ဘယ်နှစ်ယောက်နှင့် ဘယ်လောက်ဆိုတာ ပြောပြသည် — နှစ်ခုစလုံး ပေါင်းစပ်ခြင်းသည် တစ်ခုတည်းထက် ပိုယုံကြည်စိတ်ချ၍ ကာကွယ်ခုခံနိုင်သော Design ဆုံးဖြတ်ချက်များ ပေးသည်။',
    ]),
    whereUsed: t([
      'Common at data-mature product organizations where design decisions are validated against real usage metrics before and after launch.',
      'Design ဆုံးဖြတ်ချက်များကို Launch မီနှင့်နောက် တကယ့် Usage Metric များနှင့် ယှဉ်ပြီး အတည်ပြုသော Data-mature Product Organization များတွင် အများသုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the user research skills developed earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းတွင် တည်ဆောက်ထားသော User Research ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Common product metrics (conversion, drop-off, engagement)', 'အများသုံး Product Metric များ (Conversion, Drop-off, Engagement)'],
      ['Reading a funnel or drop-off report', 'Funnel (သို့) Drop-off Report တစ်ခု ဖတ်ခြင်း'],
      ['Forming a hypothesis from data', 'Data မှ Hypothesis တစ်ခု ဖွဲ့စည်းခြင်း'],
      ['A/B testing basics for design', 'Design အတွက် A/B Testing အခြေခံ'],
    ]),
    steps: [
      step(
        ['Read and interpret product data', 'Product Data ကို ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Understanding a drop-off funnel: where users leave a flow', 'Drop-off Funnel နားလည်ခြင်း — User များ Flow တစ်ခုမှ ဘယ်နေရာတွင် ထွက်သွားသည်ကို'],
          ['Distinguishing correlation from a real, actionable insight', 'Correlation ကို တကယ့် ဆောင်ရွက်နိုင်သော Insight နှင့် ခွဲခြားခြင်း'],
        ],
        [
          ['Given a sample drop-off funnel for a signup flow, identify the biggest problem step and hypothesize why', 'Signup Flow တစ်ခုအတွက် နမူနာ Drop-off Funnel ပေးလိုက်လျှင် အကြီးဆုံးပြဿနာ Step ကို ဖော်ထုတ်ပြီး ဘာကြောင့်ဆိုသည်ကို Hypothesize လုပ်ပါ'],
        ],
      ),
      step(
        ['Form and test a design hypothesis', 'Design Hypothesis တစ်ခု ဖွဲ့စည်းပြီး Test လုပ်ခြင်း'],
        [
          ['Writing a testable hypothesis: "If we change X, Y metric will improve because Z"', 'Test လုပ်နိုင်သော Hypothesis ရေးခြင်း — "X ကို ပြောင်းလိုက်လျှင် Z ကြောင့် Y Metric တိုးတက်လိမ့်မည်"'],
          ['Designing a simple A/B test to validate a design change', 'Design ပြောင်းလဲမှုတစ်ခုကို အတည်ပြုရန် ရိုးရှင်းသော A/B Test တစ်ခု Design ဆွဲခြင်း'],
        ],
        [
          ['Write a testable hypothesis and design two versions (A/B) of a screen to test it', 'Test လုပ်နိုင်သော Hypothesis တစ်ခု ရေးပြီး Screen တစ်ခု၏ Version နှစ်ခု (A/B) ကို Test လုပ်ရန် Design ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Given a realistic drop-off scenario for a signup or checkout flow, write a data-informed hypothesis for why users are dropping off, and design an A/B test (two design variants) to validate your hypothesis.',
      'Signup (သို့) Checkout Flow တစ်ခုအတွက် လက်တွေ့ကျသော Drop-off Scenario ပေးလိုက်လျှင် User များ ဘာကြောင့် Drop-off ဖြစ်နေသည်ကို Data-informed Hypothesis တစ်ခု ရေးပြီး သင့် Hypothesis ကို အတည်ပြုရန် A/B Test (Design Variant နှစ်ခု) တစ်ခု Design ဆွဲပါ။',
    ]),
    verify: t([
      'Could you look at a drop-off funnel and form a specific, testable hypothesis about the cause, rather than a vague guess?',
      'Drop-off Funnel တစ်ခုကို ကြည့်ပြီး မရှင်းလင်းသော ခန့်မှန်းချက်မဟုတ်ဘဲ အကြောင်းရင်းအကြောင်း တိကျ၍ Test လုပ်နိုင်သော Hypothesis တစ်ခု ဖွဲ့စည်းနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Combine data with qualitative research — data shows what is happening, research shows why.', 'Data ကို Qualitative Research နှင့် ပေါင်းစပ်ပါ — Data က ဘာဖြစ်နေသည်ကို ပြပြီး Research က ဘာကြောင့်ဆိုသည်ကို ပြသည်။'],
      ['Write a specific, falsifiable hypothesis before designing a test, not after.', 'Test တစ်ခု Design မဆွဲမီ တိကျ၍ Falsifiable ဖြစ်သော Hypothesis တစ်ခု ရေးပါ — ပြီးနောက်မဟုတ်ဘဲ။'],
    ]),
    commonMistakes: list([
      ['Treating a single data point as proof without a real hypothesis or test.', 'တကယ့် Hypothesis (သို့) Test မရှိဘဲ Data Point တစ်ခုတည်းကို သက်သေအဖြစ် ယူဆခြင်း။'],
      ['Ignoring data entirely and designing purely on intuition for a data-mature product.', 'Data-mature Product တစ်ခုအတွက် Data ကို လုံးဝ လျစ်လျူရှုပြီး Intuition တစ်ခုတည်းအပေါ် Design ဆွဲခြင်း။'],
    ]),
    practiceTasks: tasks('ui-ux-design-advanced-4', [
      ['Identify the biggest drop-off in a sample funnel', 'နမူနာ Funnel တစ်ခုတွင် အကြီးဆုံး Drop-off ကို ဖော်ထုတ်ပါ'],
      ['Write a testable design hypothesis', 'Test လုပ်နိုင်သော Design Hypothesis တစ်ခု ရေးပါ'],
      ['Design two A/B test variants', 'A/B Test Variant နှစ်ခု Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Read and interpret a drop-off funnel', 'Drop-off Funnel တစ်ခုကို ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Form a specific, testable hypothesis from data', 'Data မှ တိကျ၍ Test လုပ်နိုင်သော Hypothesis တစ်ခု ဖွဲ့စည်းနိုင်သည်'],
      ['Design an A/B test for a design change', 'Design ပြောင်းလဲမှုတစ်ခုအတွက် A/B Test တစ်ခု Design ဆွဲနိုင်သည်'],
      ['Combine data and qualitative research in a decision', 'ဆုံးဖြတ်ချက်တစ်ခုတွင် Data နှင့် Qualitative Research ပေါင်းစပ်နိုင်သည်'],
    ]),
    resources: [],
  },
}
