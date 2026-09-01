import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Mobile Development topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const mobileDevelopmentTopicDetails: Record<string, TopicDetail> = {
  'mobile-development-beginner-1': {
    whatItIs: t([
      'Programming fundamentals for mobile are the same core building blocks as any software — variables, loops, functions — applied with an eye toward how mobile apps are structured.',
      'Mobile အတွက် Programming Fundamentals များသည် Software မည်သည်နှင့်မဆို တူညီသော အခြေခံ အုတ်မြစ်များ — Variables, Loops, Functions — ဖြစ်ပြီး Mobile App များ မည်သို့ ဖွဲ့စည်းသည်ကို ထောက်ရှုစဉ်းစားထားသည်။',
    ]),
    whyItMatters: t([
      'Mobile frameworks add UI-specific concepts on top of general programming — without solid fundamentals, learning a mobile framework feels like memorizing magic instead of understanding it.',
      'Mobile Framework များသည် General Programming အပေါ်တွင် UI-specific Concept များ ထပ်ထည့်ထားသည် — ခိုင်မာသော Fundamental များ မရှိပါက Mobile Framework လေ့လာခြင်းသည် နားလည်ခြင်းအစား Magic အလွတ်ကျက်မှတ်ခြင်းလို ခံစားရလိမ့်မည်။',
    ]),
    whereUsed: t([
      'Underlies every mobile app, regardless of which framework or platform it targets.',
      'Framework (သို့) Platform မည်သည်ကိုမဆို ဦးတည်နေသော Mobile App တိုင်း၏ အခြေခံတွင် ရှိနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Variables and data types', 'Variable များနှင့် Data Type များ'],
      ['Conditionals and loops', 'Conditionals နှင့် Loops'],
      ['Functions', 'Functions'],
      ['Basic object-oriented concepts', 'အခြေခံ Object-oriented Concept များ'],
    ]),
    steps: [
      step(
        ['Practice core logic with mobile-relevant examples', 'Mobile နှင့် ဆက်စပ်သော ဥပမာများဖြင့် အဓိက Logic လေ့ကျင့်ခြင်း'],
        [
          ['Variables representing UI state (e.g. isLoggedIn, itemCount)', 'UI State ကို ကိုယ်စားပြုသော Variable များ (ဥပမာ isLoggedIn, itemCount)'],
          ['Functions that calculate or transform data for display', 'ပြသရန်အတွက် Data ကို တွက်ချက်ခြင်း (သို့) ပြောင်းလဲပေးသော Function များ'],
        ],
        [
          ['Write a function that calculates a shopping cart total from a list of item prices', 'Item Price List တစ်ခုမှ Shopping Cart Total တွက်ချက်ပေးသော Function တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Model simple app data with objects', 'Object များဖြင့် App Data ရိုးရှင်း Model ပြုလုပ်ခြင်း'],
        [
          ['Representing a "user" or "item" as an object with properties', '"User" (သို့) "Item" ကို Property များပါသော Object တစ်ခုအဖြစ် ကိုယ်စားပြုခြင်း'],
        ],
        [
          ['Model a simple "task" object and write functions to mark it complete/incomplete', 'ရိုးရှင်းသော "Task" Object တစ်ခု Model ပြုလုပ်ပြီး ၎င်းကို Complete/Incomplete အမှတ်အသားပြုသော Function များ ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small command-line or script-based program that models a simple app\'s data (e.g. a task list) and manipulates it with functions, before any real UI is involved.',
      'App ရိုးရှင်းတစ်ခု၏ Data (ဥပမာ Task List) ကို Model ပြုလုပ်ပြီး UI အစစ်မပါဝင်မီ Function များဖြင့် ပြောင်းလဲသော Command-line (သို့) Script-based Program သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you model a simple real-world entity (like a task or a product) as an object with meaningful properties and behavior?',
      'တကယ့်ဘဝ အရာဝတ္ထုတစ်ခု (Task (သို့) Product ကဲ့သို့) ကို အဓိပ္ပာယ်ရှိသော Property များနှင့် Behavior ပါသော Object တစ်ခုအဖြစ် Model ပြုလုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Think about what data a screen needs before worrying about how it looks.', 'ပုံပေါ်ပုံအကြောင်း မစိုးရိမ်မီ Screen တစ်ခုအတွက် ဘာ Data လိုအပ်သည်ကို တွေးပါ။'],
      ['Practice with data shapes you will actually use in mobile apps — lists of items, user profiles.', 'Mobile App များတွင် တကယ်သုံးမည့် Data ပုံစံများနှင့် လေ့ကျင့်ပါ — Item List များ၊ User Profile များ။'],
    ]),
    commonMistakes: list([
      ['Jumping into a mobile framework before core programming fundamentals are solid.', 'အဓိက Programming Fundamental များ မခိုင်မာမီ Mobile Framework တစ်ခုသို့ ခုန်ဝင်ခြင်း။'],
      ['Modeling data in a way that does not match how it will actually be displayed.', 'တကယ် ပြသမည့်ပုံစံနှင့် မကိုက်ညီသော Data Model ပြုလုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-beginner-1', [
      ['Write functions that calculate values from a list', 'List တစ်ခုမှ Value များ တွက်ချက်သော Function များ ရေးပါ'],
      ['Model a real-world entity as an object', 'တကယ့်ဘဝ အရာဝတ္ထုတစ်ခုကို Object တစ်ခုအဖြစ် Model ပြုလုပ်ပါ'],
      ['Build a simple data-manipulation script', 'Data-manipulation Script ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Use variables, conditionals, and loops confidently', 'Variables, Conditionals, Loops ကို ယုံကြည်စိတ်ချစွာ သုံးနိုင်သည်'],
      ['Write functions that process data', 'Data ကို Process လုပ်သော Function များ ရေးနိုင်သည်'],
      ['Model app data as objects', 'App Data ကို Object များအဖြစ် Model ပြုလုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-beginner-2': {
    whatItIs: t([
      'Mobile UI basics cover how screens are laid out and styled on phones — different from web layout in important ways like fixed screen sizes and touch interaction.',
      'Mobile UI အခြေခံသည် Phone များပေါ်တွင် Screen များ မည်သို့ Layout ချပြီး Style ချသည်ကို လွှမ်းခြုံသည် — Fixed Screen Size, Touch Interaction ကဲ့သို့ အရေးကြီးသော နည်းလမ်းများဖြင့် Web Layout နှင့် ကွဲပြားသည်။',
    ]),
    whyItMatters: t([
      'Mobile users interact entirely by touch on a small screen — a UI that ignores these constraints feels clumsy and frustrating no matter how good the underlying logic is.',
      'Mobile User များသည် Screen သေးငယ်တစ်ခုပေါ်တွင် Touch ဖြင့် လုံးဝ Interact ဖြစ်ကြသည် — ဤကန့်သတ်ချက်များကို လျစ်လျူရှုသော UI တစ်ခုသည် အခြေခံ Logic ကောင်းသည့်တိုင် အသုံးပြုရ ရှုပ်ထွေး၍ စိတ်ပျက်ဖွယ် ခံစားရလိမ့်မည်။',
    ]),
    whereUsed: t([
      'Every screen in every mobile app is built from these layout and touch-target principles.',
      'Mobile App တိုင်း၏ Screen တိုင်းကို ဤ Layout နှင့် Touch-target မူများမှ တည်ဆောက်ထားသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Screens and views', 'Screens နှင့် Views'],
      ['Layout basics (rows, columns, stacking)', 'Layout အခြေခံ (Rows, Columns, Stacking)'],
      ['Touch targets and spacing', 'Touch Targets နှင့် Spacing'],
      ['Basic UI components (buttons, text, images, lists)', 'အခြေခံ UI Component များ (Buttons, Text, Images, Lists)'],
    ]),
    steps: [
      step(
        ['Lay out a basic screen', 'Screen အခြေခံတစ်ခု Layout ချခြင်း'],
        [
          ['Arranging elements in rows and columns', 'Element များကို Row နှင့် Column များတွင် စီစဉ်ခြင်း'],
          ['Spacing and alignment for a clean look', 'သန့်ရှင်းသော ပုံပေါ်မှုအတွက် Spacing နှင့် Alignment'],
        ],
        [
          ['Build a static profile screen with an image, name, and description', 'Image, Name, Description ပါသော Static Profile Screen တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Design for touch', 'Touch အတွက် Design ဆွဲခြင်း'],
        [
          ['Minimum touch target sizes so buttons are easy to tap', 'Button များ Tap လုပ်ရလွယ်ကူစေရန် အနည်းဆုံး Touch Target အရွယ်အစား'],
          ['Feedback on tap (visual response to interaction)', 'Tap တွင် Feedback (Interaction အတွက် အမြင်ဖြင့် တုံ့ပြန်မှု)'],
        ],
        [
          ['Add buttons to your profile screen with appropriately sized touch targets', 'သင့်လျော်သော အရွယ်အစားရှိသော Touch Target များပါသော Button များကို သင့် Profile Screen သို့ ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a static (non-interactive yet) two-screen mobile UI: a list screen showing several items, and a detail screen for one item.',
      'Static (မ interactive သေးသော) Screen နှစ်ခုပါသော Mobile UI တစ်ခု တည်ဆောက်ပါ — Item များစွာ ပြသသော List Screen တစ်ခုနှင့် Item တစ်ခုအတွက် Detail Screen တစ်ခု။',
    ]),
    verify: t([
      'Would a real user with average-sized fingers be able to comfortably tap every interactive element in your UI?',
      'ပုံမှန် လက်ချောင်းအရွယ်အစားရှိသော User အစစ်တစ်ဦးသည် သင့် UI ရှိ Interactive Element တိုင်းကို အဆင်ပြေစွာ Tap လုပ်နိုင်ပါမည်လား?',
    ]),
    tips: list([
      ['Test your layout on an actual device or a realistic simulator, not just a code editor preview.', 'Code Editor Preview တစ်ခုတည်းမဟုတ်ဘဲ Device အစစ် (သို့) လက်တွေ့ကျသော Simulator ပေါ်တွင် သင့် Layout ကို Test လုပ်ပါ။'],
      ['Keep touch targets generously sized — cramped UI is one of the most common mobile complaints.', 'Touch Target များကို ရက်ရောစွာ အရွယ်အစားထားပါ — ကျဉ်းကျပ်သော UI သည် Mobile ညည်းညူချက် အများဆုံးများထဲမှ တစ်ခု ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Making tap targets too small, causing mis-taps.', 'Tap Target များကို သိပ်သေးငယ်လွန်းအောင် ပြုလုပ်ခြင်းက Mis-tap များ ဖြစ်စေသည်။'],
      ['Designing only for one screen size and assuming it looks fine everywhere.', 'Screen Size တစ်ခုအတွက်သာ Design ဆွဲပြီး နေရာတိုင်းတွင် ကောင်းမွန်စွာ ပုံပေါ်လိမ့်မည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-beginner-2', [
      ['Build a static list screen', 'Static List Screen တစ်ခု တည်ဆောက်ပါ'],
      ['Build a static detail screen', 'Static Detail Screen တစ်ခု တည်ဆောက်ပါ'],
      ['Add appropriately-sized touch targets to both', 'သင့်လျော်သော အရွယ်အစားရှိသော Touch Target များကို နှစ်ခုစလုံးသို့ ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Lay out a screen with rows and columns', 'Screen တစ်ခုကို Row နှင့် Column များဖြင့် Layout ချနိုင်သည်'],
      ['Use appropriate spacing and alignment', 'သင့်လျော်သော Spacing နှင့် Alignment သုံးနိုင်သည်'],
      ['Design touch targets at a usable size', 'Touch Target များကို အသုံးပြုနိုင်သော အရွယ်အစားဖြင့် Design ဆွဲနိုင်သည်'],
      ['Build a basic multi-screen static UI', 'Screen များစွာပါသော Static UI အခြေခံတစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-beginner-3': {
    whatItIs: t([
      'Git and version control basics for mobile development are the same core Git skills every developer needs — tracking changes, branching, and collaborating safely.',
      'Mobile Development အတွက် Git နှင့် Version Control အခြေခံသည် Developer တိုင်း လိုအပ်သော အခြေခံ Git ကျွမ်းကျင်မှုများ ဖြစ်သည် — ပြောင်းလဲမှုများ Track လုပ်ခြင်း၊ Branch ခြင်းနှင့် ဘေးကင်းစွာ ပူးပေါင်းဆောင်ရွက်ခြင်း။',
    ]),
    whyItMatters: t([
      'Mobile projects often involve multiple platform-specific files and configurations — good Git habits prevent losing work and make it possible to collaborate on a mobile codebase safely.',
      'Mobile Project များသည် Platform-specific File နှင့် Configuration များစွာ ပါဝင်လေ့ရှိသည် — Git အလေ့အထ ကောင်းများက အလုပ် ဆုံးရှုံးခြင်းကို ကာကွယ်ပြီး Mobile Codebase တစ်ခုတွင် ဘေးကင်းစွာ ပူးပေါင်းဆောင်ရွက်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Used on every professional mobile app project, solo or team-based.',
      'ကိုယ်တိုင်ဖြစ်စေ၊ အဖွဲ့-based ဖြစ်စေ Professional Mobile App Project တိုင်းတွင် အသုံးပြုသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Repositories and commits', 'Repositories နှင့် Commits'],
      ['Branches for features', 'Feature များအတွက် Branches'],
      ['.gitignore for mobile projects (build artifacts, dependencies)', 'Mobile Project များအတွက် .gitignore (Build Artifacts, Dependencies)'],
      ['Pushing and pulling from a remote', 'Remote တစ်ခုမှ Push နှင့် Pull လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Track a mobile project with Git', 'Git ဖြင့် Mobile Project တစ်ခု Track လုပ်ခြင်း'],
        [
          ['Initializing Git in a mobile project', 'Mobile Project တစ်ခုတွင် Git Initialize လုပ်ခြင်း'],
          ['Setting up a proper .gitignore to exclude build files and dependencies', 'Build File နှင့် Dependency များ ဖယ်ထုတ်ရန် သင့်လျော်သော .gitignore Setup လုပ်ခြင်း'],
        ],
        [
          ['Initialize Git in your two-screen UI project and add a mobile-appropriate .gitignore', 'သင့် Screen နှစ်ခုပါသော UI Project တွင် Git Initialize လုပ်ပြီး Mobile-appropriate .gitignore ထည့်ပါ'],
        ],
      ),
      step(
        ['Branch for each screen or feature', 'Screen (သို့) Feature တစ်ခုစီအတွက် Branch ခြင်း'],
        [
          ['Creating a branch per feature to keep changes isolated', 'ပြောင်းလဲမှုများကို သီးသန့်ထားရန် Feature တစ်ခုစီအတွက် Branch ဖန်တီးခြင်း'],
        ],
        [
          ['Create a branch to add a new screen, then merge it back', 'Screen အသစ်တစ်ခု ထည့်ရန် Branch တစ်ခု ဖန်တီးပြီး ပြန်လည် Merge လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take your two-screen mobile UI project and give it a clean Git history: proper .gitignore, meaningful commits, and at least one feature branch merged back into main.',
      'သင့် Screen နှစ်ခုပါသော Mobile UI Project ကို သန့်ရှင်းသော Git History ပေးပါ — သင့်လျော်သော .gitignore, အဓိပ္ပာယ်ရှိသော Commit များနှင့် Main ထဲသို့ ပြန်လည် Merge လုပ်ထားသော Feature Branch အနည်းဆုံး တစ်ခု။',
    ]),
    verify: t([
      'Does your mobile project\'s .gitignore correctly exclude all generated/build files, so a fresh clone only contains source code?',
      'သင့် Mobile Project ၏ .gitignore သည် Generate/Build ဖြစ်သော File အားလုံးကို မှန်ကန်စွာ ဖယ်ထုတ်ထားသဖြင့် Clone အသစ်တွင် Source Code သာ ပါဝင်ပါသလား?',
    ]),
    tips: list([
      ['Set up .gitignore before your first commit to avoid accidentally committing large build folders.', 'Build Folder ကြီးများ မတော်တဆ Commit မလုပ်မိအောင် ပထမဆုံး Commit မလုပ်မီ .gitignore ကို Setup လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Committing platform build folders (which can be huge) into the repository.', '(ကြီးမားနိုင်သော) Platform Build Folder များကို Repository ထဲသို့ Commit လုပ်ခြင်း။'],
      ['Never branching, working directly on main for every change.', 'Branch ဘယ်တော့မှ မလုပ်ဘဲ ပြောင်းလဲမှုတိုင်းအတွက် Main ပေါ်တွင် တိုက်ရိုက် အလုပ်လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-beginner-3', [
      ['Set up Git with a mobile-appropriate .gitignore', 'Mobile-appropriate .gitignore ပါသော Git Setup လုပ်ပါ'],
      ['Make several meaningful commits', 'အဓိပ္ပာယ်ရှိသော Commit များစွာ လုပ်ပါ'],
      ['Create and merge a feature branch', 'Feature Branch တစ်ခု ဖန်တီးပြီး Merge လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Set up Git correctly for a mobile project', 'Mobile Project တစ်ခုအတွက် Git ကို မှန်ကန်စွာ Setup လုပ်နိုင်သည်'],
      ['Use .gitignore to exclude build artifacts', 'Build Artifact များ ဖယ်ထုတ်ရန် .gitignore သုံးနိုင်သည်'],
      ['Branch for features and merge cleanly', 'Feature များအတွက် Branch ဖန်တီးပြီး သန့်ရှင်းစွာ Merge လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-beginner-4': {
    whatItIs: t([
      'App lifecycles describe the different states a mobile app moves through — launching, running in the foreground, going to the background, and being terminated.',
      'App Lifecycle များသည် Mobile App တစ်ခု ဖြတ်သန်းသွားသော အခြေအနေအမျိုးမျိုးကို ဖော်ပြသည် — Launch ဖြစ်ခြင်း၊ Foreground တွင် Run နေခြင်း၊ Background သို့ သွားခြင်းနှင့် Terminate ဖြစ်ခြင်း။',
    ]),
    whyItMatters: t([
      'Unlike a website tab that just stays open, mobile apps get interrupted constantly — phone calls, app switching, low memory — and understanding the lifecycle prevents lost data and crashes.',
      'ဖွင့်ထားရုံနေသော Website Tab တစ်ခုနှင့်မတူဘဲ Mobile App များသည် ဖုန်းခေါ်ဆိုမှု၊ App ပြောင်းခြင်း၊ Memory နည်းခြင်း ကဲ့သို့ ခဏခဏ အနှောင့်အယှက်ခံရသည် — Lifecycle ကို နားလည်ခြင်းက Data ဆုံးရှုံးခြင်းနှင့် Crash များကို ကာကွယ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Relevant to every mobile app — handling what happens when a user switches apps, receives a call, or the OS reclaims memory.',
      'User တစ်ဦး App ပြောင်းသည့်အခါ၊ ဖုန်းလက်ခံသည့်အခါ (သို့) OS က Memory ပြန်ယူသည့်အခါ ဘာဖြစ်သည်ကို ကိုင်တွယ်ရာတွင် Mobile App တိုင်းနှင့် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['App states (foreground, background, terminated)', 'App State များ (Foreground, Background, Terminated)'],
      ['Lifecycle callbacks/hooks', 'Lifecycle Callback/Hook များ'],
      ['Saving state before backgrounding', 'Background မသွားမီ State သိမ်းဆည်းခြင်း'],
    ]),
    steps: [
      step(
        ['Understand the app state transitions', 'App State ကူးပြောင်းမှုများ နားလည်ခြင်း'],
        [
          ['Foreground: actively being used', 'Foreground — တက်ကြွစွာ အသုံးပြုနေခြင်း'],
          ['Background: not visible but may still be running briefly', 'Background — မမြင်ရသော်လည်း ခေတ္တ ဆက်လက် Run နေနိုင်ခြင်း'],
          ['Terminated: fully closed by the user or the OS', 'Terminated — User (သို့) OS ကနေ လုံးဝ ပိတ်လိုက်ခြင်း'],
        ],
        [
          ['Log each lifecycle event as you background and foreground a simple app', 'App ရိုးရှင်းတစ်ခုကို Background/Foreground လုပ်စဉ် Lifecycle Event တစ်ခုစီကို Log ချပါ'],
        ],
      ),
      step(
        ['Handle backgrounding gracefully', 'Backgrounding ကို ကောင်းမွန်စွာ ကိုင်တွယ်ခြင်း'],
        [
          ['Saving important state before the app is backgrounded', 'App ကို Background မသွားမီ အရေးကြီးသော State ကို သိမ်းဆည်းခြင်း'],
          ['Restoring state when the app returns to the foreground', 'App သည် Foreground သို့ ပြန်ရောက်သည့်အခါ State ကို ပြန်လည်ရယူခြင်း'],
        ],
        [
          ['Add logic that saves a form\'s draft input when the app backgrounds, and restores it when it returns', 'App Background သွားသည့်အခါ Form Draft Input ကို သိမ်းဆည်းပြီး ပြန်ရောက်သည့်အခါ ပြန်လည်ရယူသော Logic ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small app with a text input, and make sure whatever the user typed survives the app being backgrounded and brought back to the foreground.',
      'Text Input ပါသော App သေးငယ်တစ်ခု တည်ဆောက်ပြီး User ရိုက်ထားသည့်အရာသည် App Background သွား၍ Foreground ပြန်ရောက်သည့်တိုင် ကျန်ရှိကြောင်း သေချာစေပါ။',
    ]),
    verify: t([
      'If a user is filling out a form and gets an incoming phone call, does your app lose their progress?',
      'User တစ်ဦးသည် Form ဖြည့်နေစဉ် ဖုန်းဝင်လာလျှင် သင့် App သည် ၎င်း၏ တိုးတက်မှုကို ဆုံးရှုံးသွားပါသလား?',
    ]),
    tips: list([
      ['Test lifecycle handling by actually backgrounding your app during development, not just imagining it.', 'ခန့်မှန်းရုံသာမက Development အတွင်း သင့် App ကို တကယ် Background သွားစေခြင်းဖြင့် Lifecycle Handling ကို Test လုပ်ပါ။'],
      ['Save only what is truly necessary — saving everything constantly can hurt performance.', 'တကယ်လိုအပ်သည်ကိုသာ သိမ်းဆည်းပါ — အားလုံးကို အမြဲသိမ်းဆည်းခြင်းက Performance ကို ထိခိုက်စေနိုင်သည်။'],
    ]),
    commonMistakes: list([
      ['Never testing what happens when the app is backgrounded mid-task.', 'Task တစ်ခု လုပ်နေစဉ် App Background သွားသည့်အခါ ဘာဖြစ်သည်ကို ဘယ်တော့မှ Test မလုပ်ခြင်း။'],
      ['Assuming the app will always be terminated cleanly, ignoring sudden kills.', 'App သည် အမြဲသန့်ရှင်းစွာ Terminate ဖြစ်လိမ့်မည်ဟု ယူဆပြီး ရုတ်တရက် Kill ဖြစ်ခြင်းကို လျစ်လျူရှုခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-beginner-4', [
      ['Log lifecycle transitions in a simple app', 'App ရိုးရှင်းတစ်ခုတွင် Lifecycle ကူးပြောင်းမှုများ Log ချပါ'],
      ['Save state before backgrounding', 'Background မသွားမီ State သိမ်းဆည်းပါ'],
      ['Restore state when returning to foreground', 'Foreground ပြန်ရောက်သည့်အခါ State ပြန်လည်ရယူပါ'],
    ]),
    completionChecklist: list([
      ['Explain the main app lifecycle states', 'အဓိက App Lifecycle State များကို ရှင်းပြနိုင်သည်'],
      ['Hook into lifecycle events', 'Lifecycle Event များကို ချိတ်ဆက်နိုင်သည်'],
      ['Save and restore state across backgrounding', 'Backgrounding တစ်လျှောက် State ကို သိမ်းဆည်းပြီး ပြန်လည်ရယူနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-core-1': {
    whatItIs: t([
      'A mobile framework (like Flutter or React Native) provides the tools to build an app that runs on real devices, with reusable components and access to native features.',
      'Flutter (သို့) React Native ကဲ့သို့ Mobile Framework တစ်ခုသည် ပြန်လည်အသုံးပြုနိုင်သော Component များနှင့် Native Feature များသို့ ဝင်ရောက်ခွင့်ဖြင့် Device အစစ်များပေါ်တွင် Run နိုင်သော App တစ်ခု တည်ဆောက်ရန် Tool များ ပေးသည်။',
    ]),
    whyItMatters: t([
      'Building directly against native platform APIs is possible but slow to learn and maintain across both iOS and Android — a cross-platform framework lets you build for both from one codebase.',
      'Native Platform API များနှင့် တိုက်ရိုက် တည်ဆောက်ခြင်းသည် ဖြစ်နိုင်သော်လည်း iOS နှင့် Android နှစ်ခုစလုံးအတွက် လေ့လာရန်နှင့် ထိန်းသိမ်းရန် နှေးကွေးသည် — Cross-platform Framework တစ်ခုက Codebase တစ်ခုတည်းမှ နှစ်ခုစလုံးအတွက် တည်ဆောက်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Powers a large and growing share of production mobile apps across many industries.',
      'စက်မှုလုပ်ငန်းများစွာတစ်လျှောက် Production Mobile App များ၏ ကြီးထွားလာနေသော အစုအပိုင်းကို ပံ့ပိုးပေးသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the programming fundamentals and mobile UI basics from the Beginner stage.',
      'Beginner အဆင့်မှ Programming Fundamental များနှင့် Mobile UI အခြေခံများ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Setting up the framework and running an app on a simulator/emulator', 'Framework Setup လုပ်ပြီး Simulator/Emulator ပေါ်တွင် App Run ခြင်း'],
      ['Components/widgets', 'Components/Widgets'],
      ['Props and basic state', 'Props နှင့် အခြေခံ State'],
      ['Hot reload for fast iteration', 'လျင်မြန်သော Iteration အတွက် Hot Reload'],
    ]),
    steps: [
      step(
        ['Set up and run your first app', 'ပထမဆုံး App ကို Setup လုပ်ပြီး Run ခြင်း'],
        [
          ['Installing the framework and its tooling', 'Framework နှင့် ၎င်း၏ Tooling ကို Install လုပ်ခြင်း'],
          ['Running the default starter app on a simulator/emulator', 'Simulator/Emulator ပေါ်တွင် Default Starter App ကို Run ခြင်း'],
        ],
        [
          ['Get the framework installed and run the default starter app successfully', 'Framework ကို Install လုပ်ပြီး Default Starter App ကို အောင်မြင်စွာ Run ပါ'],
        ],
      ),
      step(
        ['Build reusable components/widgets', 'ပြန်လည်အသုံးပြုနိုင်သော Components/Widgets တည်ဆောက်ခြင်း'],
        [
          ['Breaking a screen into small reusable pieces', 'Screen တစ်ခုကို ပြန်လည်အသုံးပြုနိုင်သော အပိုင်းငယ်များအဖြစ် ခွဲထုတ်ခြင်း'],
          ['Passing data into a component via props', 'Props မှတစ်ဆင့် Component တစ်ခုသို့ Data ပို့ဆောင်ခြင်း'],
        ],
        [
          ['Rebuild your earlier static list/detail screens as real components in this framework', 'ယခင် Static List/Detail Screen များကို ဤ Framework ရှိ Component အစစ်များအဖြစ် ပြန်တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a working app in your chosen framework with at least three reusable components and one screen that updates based on user interaction.',
      'သင်ရွေးချယ်ထားသော Framework တွင် ပြန်လည်အသုံးပြုနိုင်သော Component အနည်းဆုံး သုံးခုနှင့် User Interaction အပေါ် အခြေခံ၍ Update ဖြစ်သော Screen တစ်ခုပါသော အလုပ်လုပ် App တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you explain what a widget/component is in your framework and why breaking a screen into them is useful?',
      'သင့် Framework ရှိ Widget/Component ဆိုတာဘာလဲနှင့် Screen တစ်ခုကို ၎င်းတို့အဖြစ် ခွဲထုတ်ခြင်းက ဘာကြောင့် အသုံးဝင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use hot reload constantly — it makes learning UI framework behavior much faster.', 'Hot Reload ကို အမြဲသုံးပါ — ၎င်းက UI Framework Behavior ကို လေ့လာခြင်းကို ပိုမြန်စေသည်။'],
      ['Follow the framework\'s official getting-started guide exactly the first time, before customizing.', 'Customize မလုပ်မီ ပထမဆုံးအကြိမ်တွင် Framework ၏ တရားဝင် Getting-started Guide ကို အတိအကျ လိုက်နာပါ။'],
    ]),
    commonMistakes: list([
      ['Building one giant component instead of breaking the UI into smaller pieces.', 'UI ကို အပိုင်းငယ်များအဖြစ် မခွဲထုတ်ဘဲ Component ကြီးတစ်ခု တည်ဆောက်ခြင်း။'],
      ['Skipping the official setup guide and fighting confusing environment errors instead.', 'တရားဝင် Setup Guide ကို ကျော်ပြီး ရှုပ်ထွေးသော Environment Error များနှင့် တိုက်ခိုက်နေခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-core-1', [
      ['Install the framework and run the starter app', 'Framework ကို Install လုပ်ပြီး Starter App ကို Run ပါ'],
      ['Build three reusable components', 'ပြန်လည်အသုံးပြုနိုင်သော Component သုံးခု တည်ဆောက်ပါ'],
      ['Rebuild your list/detail screens in the framework', 'သင့် List/Detail Screen များကို Framework တွင် ပြန်တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Set up and run the framework', 'Framework ကို Setup လုပ်ပြီး Run နိုင်သည်'],
      ['Build reusable components/widgets', 'ပြန်လည်အသုံးပြုနိုင်သော Components/Widgets တည်ဆောက်နိုင်သည်'],
      ['Pass data via props', 'Props မှတစ်ဆင့် Data ပို့ဆောင်နိုင်သည်'],
      ['Build a small interactive screen', 'Interactive Screen သေးငယ်တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-core-2': {
    whatItIs: t([
      'Working with device features means accessing hardware and platform capabilities — like the camera, photo storage, or file system — from within your app.',
      'Device Feature များနှင့် အလုပ်လုပ်ခြင်းဆိုသည်မှာ Camera, Photo Storage, File System ကဲ့သို့ Hardware နှင့် Platform စွမ်းရည်များကို သင့် App အတွင်းမှ ဝင်ရောက်သုံးစွဲခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'What makes mobile apps genuinely useful (versus a website) is access to device capabilities — most real mobile apps use at least one of these features.',
      'Mobile App များကို (Website နှင့်နှိုင်းယှဉ်ပါက) တကယ့် အသုံးဝင်စေသည့်အရာမှာ Device စွမ်းရည်များသို့ ဝင်ရောက်ခွင့် ဖြစ်သည် — တကယ့် Mobile App အများစုသည် ဤ Feature များအနက် အနည်းဆုံး တစ်ခု သုံးကြသည်။',
    ]),
    whereUsed: t([
      'Common in photo apps, social apps, scanning tools, and any app that needs to store or capture data locally.',
      'Photo App, Social App, Scanning Tool များနှင့် Data ကို Local တွင် သိမ်းဆည်း (သို့) ရိုက်ကူးရန် လိုအပ်သော App မည်သည်ကိုမဆို ၌ အများသုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Requesting device permissions', 'Device Permission များ တောင်းခံခြင်း'],
      ['Accessing the camera', 'Camera ကို ဝင်ရောက်သုံးစွဲခြင်း'],
      ['Reading/writing local files', 'Local File များ ဖတ်/ရေးခြင်း'],
      ['Handling permission denial gracefully', 'Permission ငြင်းပယ်ခြင်းကို ကောင်းမွန်စွာ ကိုင်တွယ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Request and handle permissions properly', 'Permission များကို မှန်ကန်စွာ တောင်းခံပြီး ကိုင်တွယ်ခြင်း'],
        [
          ['Why the OS requires explicit permission for sensitive features', 'အရေးကြီးသော Feature များအတွက် OS က ဘာကြောင့် ရှင်းလင်းသော Permission လိုအပ်သနည်း'],
          ['Handling both granted and denied permission outcomes', 'ခွင့်ပြုခြင်းနှင့် ငြင်းပယ်ခြင်း ရလဒ် နှစ်ခုစလုံးကို ကိုင်တွယ်ခြင်း'],
        ],
        [
          ['Request camera permission and handle both the granted and denied cases in your UI', 'Camera Permission တောင်းခံပြီး ခွင့်ပြု/ငြင်းပယ် Case နှစ်ခုစလုံးကို သင့် UI တွင် ကိုင်တွယ်ပါ'],
        ],
      ),
      step(
        ['Use the camera and local storage', 'Camera နှင့် Local Storage သုံးခြင်း'],
        [
          ['Capturing a photo and displaying it in the app', 'Photo တစ်ပုံ ရိုက်ကူးပြီး App ထဲတွင် ပြသခြင်း'],
          ['Saving a small piece of data locally on the device', 'Data အသေးစား တစ်ခုကို Device ပေါ်တွင် Local သိမ်းဆည်းခြင်း'],
        ],
        [
          ['Build a feature that lets a user take a photo and displays it on screen', 'User တစ်ဦးအား Photo ရိုက်ခွင့်ပြုပြီး Screen ပေါ်တွင် ပြသသော Feature တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add a real device feature to your app — for example, letting the user take or choose a photo for their profile, with proper permission handling.',
      'သင့် App သို့ Device Feature အစစ်တစ်ခု ထည့်ပါ — ဥပမာ User အား ၎င်း၏ Profile အတွက် Photo ရိုက်ရန် (သို့) ရွေးရန် ခွင့်ပြု၍ Permission ကို မှန်ကန်စွာ ကိုင်တွယ်ပါ။',
    ]),
    verify: t([
      'What does your app actually show the user if they deny the camera permission — is it a crash, or a clear message?',
      'User တစ်ဦးက Camera Permission ကို ငြင်းပယ်လျှင် သင့် App က User ကို တကယ်ဘာပြသနည်း — Crash ဖြစ်လား၊ (သို့) ရှင်းလင်းသော Message ဖြစ်လား?',
    ]),
    tips: list([
      ['Always design for the permission-denied case — it will happen to real users.', 'Permission-denied Case အတွက် အမြဲ Design ဆွဲပါ — User အစစ်များတွင် ဖြစ်လိမ့်မည်။'],
      ['Test on a real device when possible — simulators do not always behave like real hardware.', 'ဖြစ်နိုင်လျှင် Device အစစ်ပေါ်တွင် Test လုပ်ပါ — Simulator များသည် Hardware အစစ်ကဲ့သို့ အမြဲ Behave မလုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Not handling the case where a user denies a permission.', 'User တစ်ဦး Permission ငြင်းပယ်သော Case ကို မကိုင်တွယ်ခြင်း။'],
      ['Requesting permissions the app does not actually need.', 'App တကယ်မလိုအပ်သော Permission များ တောင်းခံခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-core-2', [
      ['Request and handle camera permission', 'Camera Permission တောင်းခံပြီး ကိုင်တွယ်ပါ'],
      ['Capture and display a photo', 'Photo တစ်ပုံ ရိုက်ကူးပြီး ပြသပါ'],
      ['Save a small piece of data locally', 'Data အသေးစားတစ်ခုကို Local သိမ်းဆည်းပါ'],
    ]),
    completionChecklist: list([
      ['Request device permissions correctly', 'Device Permission များကို မှန်ကန်စွာ တောင်းခံနိုင်သည်'],
      ['Handle both granted and denied permission states', 'Permission ခွင့်ပြု/ငြင်းပယ် State နှစ်ခုစလုံး ကိုင်တွယ်နိုင်သည်'],
      ['Access the camera from an app', 'App တစ်ခုမှ Camera ကို ဝင်ရောက်သုံးစွဲနိုင်သည်'],
      ['Store data locally on the device', 'Device ပေါ်တွင် Data ကို Local သိမ်းဆည်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-core-3': {
    whatItIs: t([
      'Connecting to APIs from a mobile app means fetching and sending data over the network — the same HTTP/JSON concepts used on the web, applied within a mobile framework.',
      'Mobile App မှ API များသို့ ချိတ်ဆက်ခြင်းဆိုသည်မှာ Network ပေါ်တွင် Data ကို ရယူခြင်းနှင့် ပို့ခြင်း ဖြစ်သည် — Web တွင် သုံးသော HTTP/JSON Concept တူတူကို Mobile Framework တစ်ခုအတွင်း အသုံးချထားသည်။',
    ]),
    whyItMatters: t([
      'Almost no mobile app works in complete isolation from a server — weather, social feeds, messaging, e-commerce, all depend on fetching and sending data over a network.',
      'Mobile App နီးပါးအားလုံးသည် Server မှ လုံးဝ သီးသန့်ဖြင့် အလုပ်မလုပ်ပါ — Weather, Social Feed, Messaging, E-commerce အားလုံးသည် Network ပေါ်တွင် Data ရယူခြင်းနှင့် ပို့ခြင်းအပေါ် မှီခိုနေသည်။',
    ]),
    whereUsed: t([
      'Present in essentially every real-world mobile app that shows dynamic, up-to-date content.',
      'Dynamic ဖြစ်၍ နောက်ဆုံးရ Content ပြသသော တကယ့် Mobile App နီးပါးအားလုံးတွင် ရှိနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Making network requests from the framework', 'Framework မှ Network Request များ ပြုလုပ်ခြင်း'],
      ['Handling loading, success, and error states in the UI', 'UI တွင် Loading, Success, Error State များ ကိုင်တွယ်ခြင်း'],
      ['Parsing JSON responses', 'JSON Response များ Parse လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Fetch data and show it in the UI', 'Data ရယူပြီး UI တွင် ပြသခြင်း'],
        [
          ['Making a GET request when a screen loads', 'Screen Load ဖြစ်သည့်အခါ GET Request ပြုလုပ်ခြင်း'],
          ['Parsing the JSON response into your app\'s data model', 'JSON Response ကို သင့် App ၏ Data Model ထဲသို့ Parse လုပ်ခြင်း'],
        ],
        [
          ['Fetch a list of items from a free public API and display them in your list screen', 'Free Public API တစ်ခုမှ Item List တစ်ခု ရယူပြီး သင့် List Screen တွင် ပြသပါ'],
        ],
      ),
      step(
        ['Handle loading and error states', 'Loading နှင့် Error State များ ကိုင်တွယ်ခြင်း'],
        [
          ['Showing a loading indicator while a request is in flight', 'Request တစ်ခု ပျံသန်းနေစဉ် Loading Indicator ပြသခြင်း'],
          ['Showing a friendly error message if the request fails', 'Request Fail ဖြစ်လျှင် Friendly Error Message ပြသခြင်း'],
        ],
        [
          ['Add a loading spinner and an error message to your list screen for the network request', 'Network Request အတွက် Loading Spinner နှင့် Error Message ကို သင့် List Screen သို့ ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Connect your mobile app\'s list and detail screens to a real public API, with proper loading, success, and error states for the network calls.',
      'သင့် Mobile App ၏ List နှင့် Detail Screen များကို Public API အစစ်တစ်ခုသို့ ချိတ်ဆက်ပြီး Network Call များအတွက် Loading, Success, Error State များကို မှန်ကန်စွာ ထည့်ပါ။',
    ]),
    verify: t([
      'If the network is slow or fails entirely, does your app show something meaningful, or does it just look broken or frozen?',
      'Network နှေးကွေး (သို့) လုံးဝ Fail ဖြစ်လျှင် သင့် App သည် အဓိပ္ပာယ်ရှိသောအရာ ပြသပါသလား၊ (သို့) ပျက်နေသလို (သို့) ရပ်နေသလို ပုံပေါ်ပါသလား?',
    ]),
    tips: list([
      ['Always show a loading state for network requests, no matter how fast they usually are.', 'ပုံမှန်အားဖြင့် မြန်ဆန်သည့်တိုင် Network Request များအတွက် Loading State ကို အမြဲပြသပါ။'],
      ['Test your app with a slow or disabled network connection to see how it actually behaves.', 'သင့် App မည်သို့ တကယ် Behave လုပ်သည်ကို မြင်ရန် Network Connection နှေး (သို့) ပိတ်ထားသောအခြေအနေဖြင့် Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Not showing a loading indicator, making the app feel frozen during requests.', 'Loading Indicator မပြသခြင်းက Request များအတွင်း App ရပ်နေသလို ခံစားရစေသည်။'],
      ['Not handling network failures, causing the app to crash or show a blank screen.', 'Network Failure များကို မကိုင်တွယ်ခြင်းက App ကို Crash ဖြစ်စေ (သို့) Blank Screen ပြသစေသည်။'],
    ]),
    practiceTasks: tasks('mobile-development-core-3', [
      ['Fetch and display data from a public API', 'Public API မှ Data ရယူပြီး ပြသပါ'],
      ['Add a loading state for the request', 'Request အတွက် Loading State ထည့်ပါ'],
      ['Add an error state for a failed request', 'Fail ဖြစ်သော Request အတွက် Error State ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Make network requests from a mobile app', 'Mobile App မှ Network Request များ ပြုလုပ်နိုင်သည်'],
      ['Parse and display JSON data', 'JSON Data ကို Parse လုပ်ပြီး ပြသနိုင်သည်'],
      ['Show a loading state during requests', 'Request များအတွင်း Loading State ပြသနိုင်သည်'],
      ['Show a friendly error state on failure', 'Failure တွင် Friendly Error State ပြသနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-core-4': {
    whatItIs: t([
      'Local data storage lets a mobile app save data on the device itself, so it survives app restarts even without a network connection.',
      'Local Data Storage က Mobile App တစ်ခုအား Device ပေါ်တွင်ပင် Data သိမ်းဆည်းစေပြီး Network Connection မရှိသည့်တိုင် App Restart ဖြစ်ပြီးနောက် ကျန်ရှိစေသည်။',
    ]),
    whyItMatters: t([
      'Users expect apps to remember things — preferences, drafts, cached data — without needing an internet connection every single time.',
      'User များသည် App များကို Preference, Draft, Cache Data များကို Internet Connection မလိုအပ်ဘဲ မှတ်မိပေးလိမ့်မည်ဟု မျှော်လင့်ကြသည်။',
    ]),
    whereUsed: t([
      'Used for user preferences, offline caches, drafts, and login sessions in essentially every mobile app.',
      'User Preference, Offline Cache, Draft, Login Session များအတွက် Mobile App နီးပါးအားလုံးတွင် သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Simple key-value storage', 'ရိုးရှင်းသော Key-value Storage'],
      ['Structured local storage (e.g. a local database)', 'ဖွဲ့စည်းထားသော Local Storage (ဥပမာ Local Database)'],
      ['When to use each approach', 'တစ်ခုစီကို ဘယ်အချိန်သုံးရမည်ကို'],
    ]),
    steps: [
      step(
        ['Store simple values locally', 'ရိုးရှင်းသော Value များကို Local သိမ်းဆည်းခြင်း'],
        [
          ['Key-value storage for small pieces of data (settings, flags)', 'Data အသေးစား (Setting, Flag) များအတွက် Key-value Storage'],
        ],
        [
          ['Save a user preference (e.g. dark mode on/off) so it persists across app restarts', 'App Restart ဖြစ်ပြီးနောက်တွင် ကျန်ရှိစေရန် User Preference (ဥပမာ Dark Mode On/Off) တစ်ခု သိမ်းဆည်းပါ'],
        ],
      ),
      step(
        ['Store structured data locally', 'ဖွဲ့စည်းထားသော Data ကို Local သိမ်းဆည်းခြင်း'],
        [
          ['Using a local database for lists of structured records', 'ဖွဲ့စည်းထားသော Record List များအတွက် Local Database သုံးခြင်း'],
        ],
        [
          ['Save your app\'s list of items to local storage so it survives an app restart, without needing the network', 'Network မလိုအပ်ဘဲ App Restart ဖြစ်ပြီးနောက် ကျန်ရှိစေရန် သင့် App ၏ Item List ကို Local Storage သို့ သိမ်းဆည်းပါ'],
        ],
      ),
    ],
    build: t([
      'Update your app so the list of items fetched from the API earlier is also cached locally, and shows the cached version immediately on launch, even before the network request completes.',
      'ယခင်က API မှ ရယူထားသော Item List ကို Local တွင်လည်း Cache လုပ်ပြီး Network Request မပြီးမီပင် Launch တွင် Cache ဗားရှင်းကို ချက်ချင်း ပြသအောင် သင့် App ကို Update လုပ်ပါ။',
    ]),
    verify: t([
      'If a user opens your app with no internet connection, do they still see something useful, or a blank screen?',
      'User တစ်ဦးသည် Internet Connection မရှိဘဲ သင့် App ကို ဖွင့်လျှင် အသုံးဝင်သော အရာတစ်ခုခု မြင်ရဆဲလား၊ (သို့) Blank Screen မြင်ရလား?',
    ]),
    tips: list([
      ['Use simple key-value storage for small settings and a local database for lists of records.', 'Setting သေးငယ်များအတွက် ရိုးရှင်းသော Key-value Storage နှင့် Record List များအတွက် Local Database သုံးပါ။'],
      ['Do not store sensitive data (like passwords) in plain local storage without encryption.', 'Password ကဲ့သို့ အရေးကြီးသော Data ကို Encryption မပါဘဲ Plain Local Storage တွင် မသိမ်းဆည်းပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Storing everything remotely and having no offline behavior at all.', 'အားလုံးကို Remote တွင်သာ သိမ်းဆည်းပြီး Offline Behavior လုံးဝ မရှိခြင်း။'],
      ['Storing sensitive data insecurely in plain local storage.', 'အရေးကြီးသော Data ကို Plain Local Storage တွင် မလုံခြုံစွာ သိမ်းဆည်းခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-core-4', [
      ['Save and retrieve a simple key-value setting', 'ရိုးရှင်းသော Key-value Setting တစ်ခု သိမ်းဆည်းပြီး ပြန်ရယူပါ'],
      ['Cache a list of items locally', 'Item List တစ်ခုကို Local Cache လုပ်ပါ'],
      ['Show cached data immediately on app launch', 'App Launch တွင် Cache လုပ်ထားသော Data ကို ချက်ချင်း ပြသပါ'],
    ]),
    completionChecklist: list([
      ['Store simple key-value data locally', 'ရိုးရှင်းသော Key-value Data ကို Local သိမ်းဆည်းနိုင်သည်'],
      ['Store structured data locally', 'ဖွဲ့စည်းထားသော Data ကို Local သိမ်းဆည်းနိုင်သည်'],
      ['Show cached data before/without a network request', 'Network Request မတိုင်မီ/မရှိဘဲ Cache Data ပြသနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-intermediate-1': {
    whatItIs: t([
      'State management is how an app organizes and updates the data that drives what the UI shows, especially as an app grows beyond a single screen.',
      'State Management ဆိုသည်မှာ UI ပြသရန် လှုံ့ဆော်ပေးသော Data ကို App တစ်ခု မည်သို့ စုစည်းပြီး Update လုပ်သည် ဖြစ်ပြီး Screen တစ်ခုတည်းထက် ကျော်လွန်ကြီးထွားလာသည့်အခါ အထူးအရေးကြီးလာသည်။',
    ]),
    whyItMatters: t([
      'Without a clear state management approach, data gets duplicated and out of sync across screens, causing bugs that are hard to track down.',
      'ရှင်းလင်းသော State Management ချဉ်းကပ်နည်း မရှိပါက Data သည် Screen များတစ်လျှောက် Duplicate ဖြစ်ပြီး Sync မကိုက်တော့ဘဲ ခြေရာခံရခက်သော Bug များ ဖြစ်စေသည်။',
    ]),
    whereUsed: t([
      'Essential in any mobile app with more than a couple of screens sharing data — which is most real apps.',
      'Data မျှဝေသော Screen နှစ်ခုထက်ပိုသော Mobile App မည်သည်တွင်မဆို — ၎င်းသည် တကယ့် App အများစု ဖြစ်သည် — မရှိမဖြစ် လိုအပ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes comfort with basic component state from the Core stage.',
      'Core အဆင့်မှ အခြေခံ Component State နှင့် ရင်းနှီးမှုကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Local component state vs shared/app-wide state', 'Local Component State နှင့် Shared/App-wide State'],
      ['Lifting state up to a common parent', 'State ကို Common Parent သို့ Lift တင်ခြင်း'],
      ['A simple state management pattern/library', 'ရိုးရှင်းသော State Management Pattern/Library တစ်ခု'],
    ]),
    steps: [
      step(
        ['Recognize when state needs to be shared', 'State ကို ဘယ်အချိန် မျှဝေရန်လိုအပ်သည်ကို ဖော်ထုတ်ခြင်း'],
        [
          ['Two sibling screens needing the same data is a sign state should be lifted', 'Sibling Screen နှစ်ခုက Data တူတူ လိုအပ်ခြင်းသည် State ကို Lift တင်သင့်ကြောင်း လက္ခဏာတစ်ခု ဖြစ်သည်'],
        ],
        [
          ['Identify a piece of state in your app that is currently duplicated across screens', 'သင့် App တွင် လက်ရှိ Screen များတစ်လျှောက် Duplicate ဖြစ်နေသော State တစ်ခုကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Share state across your app', 'သင့် App တစ်လျှောက် State မျှဝေခြင်း'],
        [
          ['Lifting state to a shared parent, or using a lightweight state management tool', 'State ကို Shared Parent သို့ Lift တင်ခြင်း (သို့) Lightweight State Management Tool သုံးခြင်း'],
        ],
        [
          ['Fix the duplicated state you found by lifting it to a shared location', 'ဖော်ထုတ်ထားသော Duplicate State ကို Shared Location သို့ Lift တင်၍ ပြင်ဆင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Refactor your app so a piece of data used across multiple screens (e.g. a logged-in user, or a favorited items list) lives in one shared place instead of being duplicated.',
      'Screen များစွာတွင် သုံးသော Data တစ်ခု (ဥပမာ Login ဝင်ထားသော User (သို့) Favorite Items List) သည် Duplicate မဖြစ်ဘဲ Shared Place တစ်ခုတွင်သာ ရှိနေအောင် သင့် App ကို Refactor လုပ်ပါ။',
    ]),
    verify: t([
      'If a user favorites an item on one screen, does it correctly show as favorited everywhere else in the app instantly?',
      'User တစ်ဦးက Screen တစ်ခုပေါ်တွင် Item တစ်ခုကို Favorite လုပ်လျှင် App ရှိ အခြားနေရာတိုင်းတွင် ချက်ချင်း Favorite အဖြစ် မှန်ကန်စွာ ပြပါသလား?',
    ]),
    tips: list([
      ['Start with the simplest state management approach that works — do not reach for a complex library too early.', 'အလုပ်ဖြစ်သော အရိုးရှင်းဆုံး State Management ချဉ်းကပ်နည်းဖြင့် စတင်ပါ — ရှုပ်ထွေးသော Library တစ်ခုကို စောလွန်းစွာ မရှာဖွေပါနှင့်။'],
      ['Keep a single source of truth for each piece of shared data.', 'Shared Data တစ်ခုစီအတွက် Source of Truth တစ်ခုတည်းကို ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Duplicating the same data in multiple screens\' local state, causing them to go out of sync.', 'Data တူတူကို Screen များစွာ၏ Local State တွင် Duplicate လုပ်ခြင်းက Sync မကိုက်တော့ခြင်း ဖြစ်စေသည်။'],
      ['Adopting a complex state management library before it is actually needed.', 'တကယ်လိုအပ်မှသာ ရှုပ်ထွေးသော State Management Library ကို လက်ခံခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-intermediate-1', [
      ['Identify duplicated state across screens', 'Screen များတစ်လျှောက် Duplicate ဖြစ်နေသော State ဖော်ထုတ်ပါ'],
      ['Lift shared state to a common location', 'Shared State ကို Common Location သို့ Lift တင်ပါ'],
      ['Verify state stays in sync across screens', 'Screen များတစ်လျှောက် State Sync ကိုက်နေကြောင်း အတည်ပြုပါ'],
    ]),
    completionChecklist: list([
      ['Distinguish local state from shared state', 'Local State ကို Shared State နှင့် ခွဲခြားနိုင်သည်'],
      ['Lift state to a shared location when needed', 'လိုအပ်သည့်အခါ State ကို Shared Location သို့ Lift တင်နိုင်သည်'],
      ['Keep shared data in sync across screens', 'Screen များတစ်လျှောက် Shared Data ကို Sync ကိုက်နေအောင် ထားနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-intermediate-2': {
    whatItIs: t([
      'Navigation is how a mobile app moves users between multiple screens, and how it manages the "back" behavior they expect.',
      'Navigation ဆိုသည်မှာ Mobile App တစ်ခုသည် User များကို Screen များစွာကြား မည်သို့ ရွှေ့ပြောင်းစေပြီး User များ မျှော်လင့်ထားသော "Back" Behavior ကို မည်သို့ စီမံသည် ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Almost every real app has more than one screen — predictable, intuitive navigation is core to a mobile app feeling professional rather than confusing.',
      'တကယ့် App နီးပါးအားလုံးသည် Screen တစ်ခုထက်ပိုသည် — ခန့်မှန်းနိုင်၍ နားလည်လွယ်သော Navigation သည် Mobile App တစ်ခုကို ရှုပ်ထွေးနေမည့်အစား Professional ခံစားရစေရန် အဓိက ကျောရိုး ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in every multi-screen mobile app — tab bars, stack navigation, and modal screens are all navigation patterns used constantly.',
      'Multi-screen Mobile App တိုင်းတွင် ရှိနေသည် — Tab Bar, Stack Navigation, Modal Screen များအားလုံးသည် အမြဲသုံးသော Navigation Pattern များ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Stack navigation (push/pop screens)', 'Stack Navigation (Screen Push/Pop)'],
      ['Tab navigation', 'Tab Navigation'],
      ['Passing data between screens', 'Screen များကြား Data ပို့ဆောင်ခြင်း'],
      ['Deep linking basics', 'Deep Linking အခြေခံ'],
    ]),
    steps: [
      step(
        ['Navigate between screens with a stack', 'Stack ဖြင့် Screen များကြား Navigate လုပ်ခြင်း'],
        [
          ['Pushing a new screen onto the stack and popping back', 'Stack ပေါ်သို့ Screen အသစ် Push လုပ်ပြီး ပြန် Pop လုပ်ခြင်း'],
          ['Passing data (like an item id) to the screen you navigate to', 'Navigate သွားမည့် Screen သို့ Data (Item ID ကဲ့သို့) ပို့ဆောင်ခြင်း'],
        ],
        [
          ['Wire up navigation from your list screen to your detail screen, passing the selected item', 'ရွေးချယ်ထားသော Item ကို ပို့ဆောင်၍ သင့် List Screen မှ Detail Screen သို့ Navigation ချိတ်ဆက်ပါ'],
        ],
      ),
      step(
        ['Add tab-based navigation', 'Tab-based Navigation ထည့်ခြင်း'],
        [
          ['Structuring an app around a small number of top-level tabs', 'Top-level Tab အနည်းငယ်ပတ်လည်တွင် App ကို ဖွဲ့စည်းခြင်း'],
        ],
        [
          ['Add a tab bar with two or three sections to your app', 'Section နှစ်ခု (သို့) သုံးခုပါသော Tab Bar တစ်ခုကို သင့် App သို့ ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a complete navigation structure for your app: a tab bar with at least two sections, and stack navigation within at least one tab (list → detail).',
      'သင့် App အတွက် Navigation ဖွဲ့စည်းပုံ အပြည့်အစုံ တည်ဆောက်ပါ — Section နှစ်ခုအနည်းဆုံးပါသော Tab Bar တစ်ခုနှင့် Tab တစ်ခုအနည်းဆုံးအတွင်း Stack Navigation (List → Detail)။',
    ]),
    verify: t([
      'Does the back button/gesture always take the user where they would intuitively expect to go?',
      'Back Button/Gesture သည် User ကို အလိုလို မျှော်လင့်ထားသည့်နေရာသို့ အမြဲ ခေါ်ဆောင်သွားပါသလား?',
    ]),
    tips: list([
      ['Follow your platform\'s standard navigation patterns instead of inventing custom ones.', 'ကိုယ်ပိုင် Pattern အသစ်များ တီထွင်မည့်အစား သင့် Platform ၏ စံ Navigation Pattern များကို လိုက်နာပါ။'],
      ['Test the back button/gesture explicitly on every screen, not just the "happy path" forward flow.', '"Happy Path" ရှေ့ဆက် Flow ကိုသာမက Screen တိုင်းတွင် Back Button/Gesture ကို တိကျစွာ Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Building custom navigation instead of using the framework\'s standard navigation tools.', 'Framework ၏ စံ Navigation Tool များအစား Custom Navigation တည်ဆောက်ခြင်း။'],
      ['Losing data when navigating back (e.g. a form resets unexpectedly).', 'ပြန်လှည့်သည့်အခါ Data ဆုံးရှုံးခြင်း (ဥပမာ Form တစ်ခု မမျှော်လင့်ဘဲ Reset ဖြစ်ခြင်း)။'],
    ]),
    practiceTasks: tasks('mobile-development-intermediate-2', [
      ['Set up stack navigation between two screens', 'Screen နှစ်ခုကြား Stack Navigation Setup လုပ်ပါ'],
      ['Pass data to a navigated screen', 'Navigate သွားသော Screen သို့ Data ပို့ဆောင်ပါ'],
      ['Add tab-based navigation with two or more sections', 'Section နှစ်ခု (သို့) ထို့ထက်ပိုပါသော Tab-based Navigation ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Navigate between screens with a stack', 'Stack ဖြင့် Screen များကြား Navigate လုပ်နိုင်သည်'],
      ['Pass data between screens during navigation', 'Navigation အတွင်း Screen များကြား Data ပို့ဆောင်နိုင်သည်'],
      ['Implement tab-based navigation', 'Tab-based Navigation အကောင်အထည်ဖော်နိုင်သည်'],
      ['Verify back behavior works intuitively', 'Back Behavior အလိုလို အလုပ်လုပ်ကြောင်း အတည်ပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-intermediate-3': {
    whatItIs: t([
      'Push notifications let an app alert a user even when they are not actively using it — a message appears outside the app itself.',
      'Push Notification များက App တစ်ခုအား User တက်ကြွစွာ မသုံးနေချိန်တွင်ပင် User ကို သတိပေးစေသည် — Message တစ်ခုသည် App ကိုယ်တိုင်ပြင်ပတွင် ပေါ်လာသည်။',
    ]),
    whyItMatters: t([
      'Push notifications are one of the main ways mobile apps bring users back — a new message, a reminder, an update they need to see.',
      'Push Notification များသည် Mobile App များ User များကို ပြန်ခေါ်ဆောင်သော အဓိက နည်းလမ်းများထဲမှ တစ်ခု ဖြစ်သည် — Message အသစ်တစ်ခု၊ Reminder တစ်ခု၊ User မြင်ရန် လိုအပ်သော Update တစ်ခု။',
    ]),
    whereUsed: t([
      'Used by messaging apps, social apps, delivery apps, and nearly any app that benefits from re-engaging users.',
      'Messaging App, Social App, Delivery App နှင့် User များကို ပြန်လည် Engage လုပ်ခြင်းမှ အကျိုးရရှိသော App နီးပါးအားလုံးက သုံးကြသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the permission-handling patterns from the device features topic.',
      'Device Features Topic မှ Permission-handling Pattern များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Requesting notification permission', 'Notification Permission တောင်းခံခြင်း'],
      ['Local notifications (scheduled on the device)', 'Local Notification များ (Device ပေါ်တွင် Schedule ချထားသော)'],
      ['Remote/push notifications (sent from a server)', 'Remote/Push Notification များ (Server မှ ပို့ခြင်း)'],
      ['Handling a tapped notification', 'Tap လုပ်ထားသော Notification ကို ကိုင်တွယ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Schedule a local notification', 'Local Notification တစ်ခု Schedule ချခြင်း'],
        [
          ['Requesting notification permission from the user', 'User ထံမှ Notification Permission တောင်းခံခြင်း'],
          ['Scheduling a notification to fire at a later time', 'နောက်ပိုင်း အချိန်တစ်ခုတွင် Fire ဖြစ်ရန် Notification Schedule ချခြင်း'],
        ],
        [
          ['Schedule a local notification that fires a minute after a button is tapped', 'Button တစ်ခု Tap လုပ်ပြီး တစ်မိနစ်အကြာတွင် Fire ဖြစ်သော Local Notification တစ်ခု Schedule ချပါ'],
        ],
      ),
      step(
        ['Handle a notification being tapped', 'Notification တစ်ခု Tap လုပ်ခံရခြင်းကို ကိုင်တွယ်ခြင်း'],
        [
          ['Navigating to a relevant screen when a user taps a notification', 'User တစ်ဦး Notification တစ်ခု Tap လုပ်သည့်အခါ သက်ဆိုင်ရာ Screen သို့ Navigate လုပ်ခြင်း'],
        ],
        [
          ['Make your app navigate to a specific screen when the scheduled notification is tapped', 'Schedule ချထားသော Notification ကို Tap လုပ်သည့်အခါ Screen သီးခြားတစ်ခုသို့ Navigate ဖြစ်စေရန် သင့် App ကို ပြုလုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add a notification feature to your app: request permission properly, schedule a relevant local notification, and navigate to the right screen when it is tapped.',
      'သင့် App သို့ Notification Feature တစ်ခု ထည့်ပါ — Permission ကို မှန်ကန်စွာ တောင်းခံပါ၊ သက်ဆိုင်ရာ Local Notification တစ်ခု Schedule ချပါ၊ Tap လုပ်သည့်အခါ Screen မှန်သို့ Navigate လုပ်ပါ။',
    ]),
    verify: t([
      'If a user denies notification permission, does the rest of your app still work normally?',
      'User တစ်ဦးက Notification Permission ကို ငြင်းပယ်လျှင် သင့် App ၏ ကျန်အပိုင်းများ ပုံမှန်အတိုင်း ဆက်လက် အလုပ်လုပ်ပါသလား?',
    ]),
    tips: list([
      ['Ask for notification permission at a relevant moment, not immediately on app launch.', 'App Launch တွင် ချက်ချင်းမဟုတ်ဘဲ သက်ဆိုင်ရာ အချိန်တွင် Notification Permission တောင်းခံပါ။'],
      ['Test tapping a notification from a fully closed app state, not just while the app is open.', 'App ဖွင့်ထားစဉ်သာမက App လုံးဝ ပိတ်ထားသော State မှ Notification Tap လုပ်ခြင်းကို Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Requesting notification permission immediately on first launch, before the user understands why.', 'User ဘာကြောင့်ဆိုသည် နားမလည်မီ ပထမဆုံး Launch တွင် ချက်ချင်း Notification Permission တောင်းခံခြင်း။'],
      ['Not handling the case where the app is fully closed when a notification is tapped.', 'Notification Tap လုပ်သည့်အခါ App လုံးဝ ပိတ်ထားသော Case ကို မကိုင်တွယ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-intermediate-3', [
      ['Request notification permission', 'Notification Permission တောင်းခံပါ'],
      ['Schedule a local notification', 'Local Notification တစ်ခု Schedule ချပါ'],
      ['Navigate to a screen when a notification is tapped', 'Notification Tap လုပ်သည့်အခါ Screen တစ်ခုသို့ Navigate လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Request notification permission properly', 'Notification Permission ကို မှန်ကန်စွာ တောင်းခံနိုင်သည်'],
      ['Schedule a local notification', 'Local Notification တစ်ခု Schedule ချနိုင်သည်'],
      ['Handle a tapped notification correctly', 'Tap လုပ်ထားသော Notification ကို မှန်ကန်စွာ ကိုင်တွယ်နိုင်သည်'],
      ['Keep the app functional when permission is denied', 'Permission ငြင်းပယ်ခံရသည့်အခါ App ကို လုပ်ဆောင်နိုင်စွမ်းရှိနေအောင် ထားနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-intermediate-4': {
    whatItIs: t([
      'Testing mobile apps means writing automated tests for your app\'s logic and UI, and understanding what manual testing across devices adds on top.',
      'Mobile App Testing ဆိုသည်မှာ သင့် App ၏ Logic နှင့် UI အတွက် Automated Test များ ရေးခြင်းနှင့် Device များတစ်လျှောက် Manual Testing က ဘာထပ်ထည့်ပေးသည်ကို နားလည်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Mobile apps run across a wide variety of devices, screen sizes, and OS versions — tests catch logic bugs early, while device testing catches issues automated tests cannot.',
      'Mobile App များသည် Device အမျိုးမျိုး၊ Screen Size အမျိုးမျိုးနှင့် OS Version အမျိုးမျိုးတွင် Run သည် — Test များက Logic Bug များကို စောစီးစွာ ဖမ်းယူပြီး Device Testing က Automated Test များ မဖမ်းနိုင်သော ပြဿနာများကို ဖမ်းယူပေးသည်။',
    ]),
    whereUsed: t([
      'Standard practice on any mobile team shipping to real users across many device types.',
      'Device အမျိုးအစားများစွာတစ်လျှောက် User အစစ်များထံ ထုတ်ဖော်နေသော Mobile Team မည်သည်၏မဆို စံ အလေ့အထ ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes basic unit testing knowledge — applied here to mobile-specific components and logic.',
      'ဤနေရာတွင် Mobile-specific Component များနှင့် Logic အတွက် အသုံးချသော အခြေခံ Unit Testing အသိပညာကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Unit testing business logic', 'Business Logic Unit Testing'],
      ['Widget/component testing', 'Widget/Component Testing'],
      ['Testing on multiple screen sizes', 'Screen Size များစွာတွင် Testing'],
      ['Testing on real devices vs simulators', 'Device အစစ်များနှင့် Simulator များတွင် Testing'],
    ]),
    steps: [
      step(
        ['Unit test your app\'s logic', 'သင့် App ၏ Logic ကို Unit Test လုပ်ခြင်း'],
        [
          ['Testing pure functions (like your cart total calculation) in isolation', 'Pure Function များ (သင့် Cart Total တွက်ချက်မှုကဲ့သို့) ကို သီးခြား Test လုပ်ခြင်း'],
        ],
        [
          ['Write unit tests for two pure functions from earlier in your app', 'သင့် App ၏ ယခင်က Pure Function နှစ်ခုအတွက် Unit Test များ ရေးပါ'],
        ],
      ),
      step(
        ['Test components/widgets and multiple screens', 'Components/Widgets နှင့် Screen များစွာ Test လုပ်ခြင်း'],
        [
          ['Testing that a component renders the right content given certain props', 'Props သတ်မှတ်ပေးထားသည့်အခါ Component တစ်ခု မှန်ကန်သော Content ကို Render လုပ်ကြောင်း Test လုပ်ခြင်း'],
          ['Manually checking your app on at least two very different screen sizes', 'အလွန်ကွဲပြားသော Screen Size အနည်းဆုံးနှစ်ခုတွင် သင့် App ကို Manual စစ်ဆေးခြင်း'],
        ],
        [
          ['Write a rendering test for one of your components', 'သင့် Component တစ်ခုအတွက် Rendering Test တစ်ခု ရေးပါ'],
          ['Manually test your app on a small phone and a large tablet simulator', 'Phone သေးငယ်တစ်ခုနှင့် Tablet ကြီးတစ်ခု Simulator ပေါ်တွင် သင့် App ကို Manual Test လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add a small but real test suite to your app: unit tests for at least two pieces of logic, a rendering test for one component, and a manual test pass across two different screen sizes documented in notes.',
      'သင့် App သို့ သေးငယ်ပေမယ့် တကယ့် Test Suite ထည့်ပါ — Logic နှစ်ခုအနည်းဆုံးအတွက် Unit Test များ၊ Component တစ်ခုအတွက် Rendering Test တစ်ခုနှင့် မှတ်စုတွင် မှတ်တမ်းတင်ထားသော Screen Size နှစ်ခုတစ်လျှောက် Manual Test တစ်ကြိမ်။',
    ]),
    verify: t([
      'If your cart total calculation had a bug, would a test catch it, or would it only be found by a real user?',
      'သင့် Cart Total တွက်ချက်မှုတွင် Bug တစ်ခုရှိလျှင် Test တစ်ခုက ဖမ်းမိမည်လား၊ (သို့) User အစစ်တစ်ဦးမှသာ ရှာတွေ့မည်လား?',
    ]),
    tips: list([
      ['Unit test your pure logic first — it is the easiest and highest-value place to start.', 'သင့် Pure Logic ကို ဦးစွာ Unit Test လုပ်ပါ — ၎င်းသည် စတင်ရန် အလွယ်ကူဆုံးနှင့် တန်ဖိုးအမြင့်ဆုံးနေရာ ဖြစ်သည်။'],
      ['Always test on at least one small and one large screen — assumptions break at the extremes.', 'Screen သေးငယ်တစ်ခုနှင့် ကြီးတစ်ခု အနည်းဆုံးတွင် အမြဲ Test လုပ်ပါ — Assumption များသည် အစွန်းများတွင် ပျက်တတ်သည်။'],
    ]),
    commonMistakes: list([
      ['Only testing on one device or simulator that matches the developer\'s own phone.', 'Developer ကိုယ်တိုင်၏ ဖုန်းနှင့် ကိုက်ညီသော Device (သို့) Simulator တစ်ခုတွင်သာ Test လုပ်ခြင်း။'],
      ['Skipping tests entirely because "mobile UI is hard to test".', '"Mobile UI ကို Test လုပ်ရခက်တယ်" ဆိုပြီး Test များကို လုံးဝ ကျော်ကျင့်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-intermediate-4', [
      ['Write unit tests for two pure functions', 'Pure Function နှစ်ခုအတွက် Unit Test များ ရေးပါ'],
      ['Write a rendering test for a component', 'Component တစ်ခုအတွက် Rendering Test တစ်ခု ရေးပါ'],
      ['Manually test the app on two different screen sizes', 'Screen Size နှစ်ခုမတူညီတွင် App ကို Manual Test လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Write unit tests for app logic', 'App Logic အတွက် Unit Test များ ရေးနိုင်သည်'],
      ['Write a basic component rendering test', 'အခြေခံ Component Rendering Test တစ်ခု ရေးနိုင်သည်'],
      ['Manually test across multiple screen sizes', 'Screen Size များစွာတွင် Manual Test လုပ်နိုင်သည်'],
      ['Explain what automated tests do and do not catch on mobile', 'Mobile ပေါ်တွင် Automated Test များ ဘာဖမ်းမိပြီး ဘာမဖမ်းမိသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-advanced-1': {
    whatItIs: t([
      'Publishing to app stores is the process of preparing, submitting, and releasing your app on Apple\'s App Store and/or Google Play so real users can download it.',
      'App Store များသို့ တင်ခြင်းဆိုသည်မှာ User အစစ်များ Download လုပ်နိုင်ရန် Apple App Store နှင့်/(သို့) Google Play တွင် သင့် App ကို ပြင်ဆင်ခြင်း၊ တင်သွင်းခြင်းနှင့် ထုတ်ဝေခြင်း လုပ်ငန်းစဉ် ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A mobile app is not truly "shipped" until real users can install it from an app store — this process has its own real, non-obvious requirements and gatekeeping.',
      'User အစစ်များသည် App Store တစ်ခုမှ Install လုပ်နိုင်ခြင်းမရှိသေးသရွေ့ Mobile App တစ်ခုကို "Ship" လုပ်ပြီးဟု အမှန်တကယ် မဆိုနိုင်ပါ — ဤလုပ်ငန်းစဉ်သည် ၎င်းကိုယ်ပိုင် တကယ့်၊ ထင်ရှားမသိသာသော လိုအပ်ချက်များနှင့် စောင့်ကြည့်မှုများ ရှိသည်။',
    ]),
    whereUsed: t([
      'Required for every consumer-facing mobile app that needs to reach real users on iOS or Android.',
      'iOS (သို့) Android ပေါ်ရှိ User အစစ်များထံ ရောက်ရှိရန် လိုအပ်သော Consumer-facing Mobile App တိုင်းအတွက် လိုအပ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes you have a reasonably complete, tested app from earlier stages.',
      'ယခင် အဆင့်များမှ တော်တော်လေး ပြီးပြည့်စုံ၍ Test လုပ်ပြီးသား App တစ်ခု ရှိကြောင်း ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['App store requirements (icons, screenshots, descriptions)', 'App Store လိုအပ်ချက်များ (Icons, Screenshots, Descriptions)'],
      ['App signing and build configuration', 'App Signing နှင့် Build Configuration'],
      ['Store review guidelines', 'Store Review Guideline များ'],
      ['Versioning your app', 'သင့် App ကို Version ပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Prepare your app for submission', 'တင်သွင်းရန်အတွက် သင့် App ကို ပြင်ဆင်ခြင်း'],
        [
          ['Required assets: app icon, screenshots, description, privacy policy', 'လိုအပ်သော Asset များ — App Icon, Screenshots, Description, Privacy Policy'],
          ['Setting a proper version number for your release', 'သင့် Release အတွက် သင့်လျော်သော Version Number သတ်မှတ်ခြင်း'],
        ],
        [
          ['Prepare a full set of store assets (icon, screenshots, description) for your app', 'သင့် App အတွက် Store Asset (Icon, Screenshots, Description) အစုအဝေးအပြည့်အစုံ ပြင်ဆင်ပါ'],
        ],
      ),
      step(
        ['Understand store review requirements', 'Store Review လိုအပ်ချက်များ နားလည်ခြင်း'],
        [
          ['Common reasons apps get rejected (broken features, missing privacy info, misleading content)', 'App များ ငြင်းပယ်ခံရခြင်း၏ အများသုံး အကြောင်းရင်းများ (ပျက်နေသော Feature, ပျောက်ဆုံးနေသော Privacy Info, လှည့်ဖြားသော Content)'],
        ],
        [
          ['Review your app against the store\'s guidelines and fix anything that would likely cause rejection', 'သင့် App ကို Store Guideline များနှင့် ယှဉ်ပြီး Review လုပ်ကာ ငြင်းပယ်ခံရနိုင်သော အရာများကို ပြင်ဆင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Prepare a complete, submission-ready package for your app: signed build, store assets, description, and a privacy policy — as if you were about to actually submit it.',
      'သင့် App အတွက် တင်သွင်းရန် အသင့်ဖြစ်သော Package အပြည့်အစုံ ပြင်ဆင်ပါ — Sign ထိုးထားသော Build, Store Asset များ, Description, Privacy Policy — တကယ်တင်သွင်းတော့မည့်ပမာဏ။',
    ]),
    verify: t([
      'Could you list, from memory, the main assets and information a store submission requires?',
      'Store တင်သွင်းမှုတစ်ခု လိုအပ်သော အဓိက Asset များနှင့် Information များကို မှတ်ဉာဏ်ထဲမှ စာရင်းပြုစုနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read the store\'s current guidelines directly — they change over time and vary by platform.', 'Store ၏ လက်ရှိ Guideline များကို တိုက်ရိုက်ဖတ်ပါ — ၎င်းတို့သည် အချိန်နှင့်အမျှ ပြောင်းလဲပြီး Platform အလိုက် ကွဲပြားသည်။'],
      ['Prepare all required assets well before you plan to submit — gathering them last-minute causes delays.', 'တင်သွင်းရန် စီစဉ်မီ လိုအပ်သော Asset အားလုံးကို ကောင်းစွာ ပြင်ဆင်ထားပါ — အချိန်ကုန်ခါနီးမှ စုစည်းခြင်းက နှောင့်နှေးမှု ဖြစ်စေသည်။'],
    ]),
    commonMistakes: list([
      ['Submitting without a privacy policy, which most stores now require.', 'Store အများစုက ယခုလိုအပ်နေသော Privacy Policy မပါဘဲ တင်သွင်းခြင်း။'],
      ['Not testing the exact signed release build before submission.', 'တင်သွင်းမီ Sign ထိုးထားသော Release Build အတိအကျကို မစမ်းသပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-advanced-1', [
      ['Prepare app icon and screenshots', 'App Icon နှင့် Screenshots ပြင်ဆင်ပါ'],
      ['Write a store description and privacy policy', 'Store Description နှင့် Privacy Policy ရေးပါ'],
      ['Create a signed release build', 'Sign ထိုးထားသော Release Build တစ်ခု ဖန်တီးပါ'],
      ['Review the app against store guidelines', 'Store Guideline များနှင့် ယှဉ်ပြီး App ကို Review လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Prepare required store assets', 'လိုအပ်သော Store Asset များ ပြင်ဆင်နိုင်သည်'],
      ['Create a properly signed release build', 'Sign ထိုးထားသော Release Build မှန်ကန်စွာ ဖန်တီးနိုင်သည်'],
      ['Write a store-compliant description and privacy policy', 'Store-compliant Description နှင့် Privacy Policy ရေးနိုင်သည်'],
      ['Identify common causes of store rejection', 'Store ငြင်းပယ်ခြင်း၏ အများသုံး အကြောင်းရင်းများ ဖော်ထုတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-advanced-2': {
    whatItIs: t([
      'Performance optimization on mobile is about keeping an app smooth and responsive, especially given the more limited CPU, memory, and battery of phones compared to desktops.',
      'Mobile ပေါ်ရှိ Performance Optimization သည် Desktop များနှင့်နှိုင်းယှဉ်ပါက CPU, Memory, Battery ပိုကန့်သတ်ထားသော Phone များတွင် App တစ်ခုကို ချောမွေ့စွာနှင့် တုံ့ပြန်မှုမြန်စွာ ထိန်းသိမ်းထားခြင်းနှင့် ပတ်သက်သည်။',
    ]),
    whyItMatters: t([
      'A janky, slow, or battery-draining app gets uninstalled quickly — mobile users have very little patience for poor performance.',
      'Jank ဖြစ်၍ နှေးကွေး (သို့) Battery ကုန်ဆုံးစေသော App တစ်ခုကို လျင်မြန်စွာ Uninstall လုပ်ခံရသည် — Mobile User များတွင် Performance ညံ့ဖျင်းခြင်းအတွက် သည်းခံနိုင်မှု အလွန်နည်းသည်။',
    ]),
    whereUsed: t([
      'Relevant to every mobile app with real users, especially ones with lists, animations, or heavy data.',
      'List, Animation (သို့) Data လေးလံသော User အစစ်ရှိသော Mobile App တိုင်းနှင့် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the general profiling approach from the Software Engineering path, applied to mobile-specific constraints.',
      'Mobile-specific ကန့်သတ်ချက်များတွင် အသုံးချသော Software Engineering Path မှ General Profiling ချဉ်းကပ်နည်းအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Profiling tools for your framework', 'သင့် Framework အတွက် Profiling Tool များ'],
      ['Optimizing list rendering', 'List Rendering Optimize လုပ်ခြင်း'],
      ['Reducing unnecessary re-renders', 'မလိုအပ်သော Re-render များ လျှော့ချခြင်း'],
      ['Image and asset optimization', 'Image နှင့် Asset Optimization'],
    ]),
    steps: [
      step(
        ['Profile before optimizing', 'Optimize မလုပ်မီ Profile လုပ်ခြင်း'],
        [
          ['Using your framework\'s profiling tools to find real bottlenecks', 'တကယ့် Bottleneck များ ရှာဖွေရန် သင့် Framework ၏ Profiling Tool များ သုံးခြင်း'],
        ],
        [
          ['Profile your app\'s list screen and identify its slowest part', 'သင့် App List Screen ကို Profile လုပ်ပြီး ၎င်း၏ နှေးဆုံးအပိုင်းကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Optimize list rendering and images', 'List Rendering နှင့် Images Optimize လုပ်ခြင်း'],
        [
          ['Rendering only visible list items instead of the entire list at once', 'List တစ်ခုလုံးကို တစ်ပြိုင်နက်မဟုတ်ဘဲ မြင်နေရသော Item များကိုသာ Render လုပ်ခြင်း'],
          ['Resizing and compressing images appropriately before displaying them', 'ပြသမီ Image များကို သင့်လျော်စွာ Resize နှင့် Compress လုပ်ခြင်း'],
        ],
        [
          ['Fix the bottleneck you found in your list screen and measure the improvement', 'သင့် List Screen တွင် တွေ့ရှိထားသော Bottleneck ကို ပြင်ဆင်ပြီး တိုးတက်မှုကို တိုင်းတာပါ'],
        ],
      ),
    ],
    build: t([
      'Take the slowest screen in your app, profile it, apply at least one real optimization (list rendering, image size, or reducing re-renders), and document the measured improvement.',
      'သင့် App ရှိ နှေးဆုံး Screen ကို ယူပြီး Profile လုပ်ပါ၊ Optimization အစစ် အနည်းဆုံးတစ်ခု (List Rendering, Image Size, Re-render လျှော့ချခြင်း) အသုံးချပြီး တိုင်းတာထားသော တိုးတက်မှုကို မှတ်တမ်းတင်ပါ။',
    ]),
    verify: t([
      'Could you explain, with real before/after numbers, exactly what made your slowest screen faster?',
      'သင့် နှေးဆုံး Screen ကို ဘာအရာက မြန်စေသည်ကို ပြင်ဆင်မီ/ပြင်ဆင်ပြီး ကိန်းဂဏန်းအစစ်များဖြင့် အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Test performance on a lower-end device, not just a fast development machine.', 'Development Machine မြန်တစ်ခုတည်းမဟုတ်ဘဲ Device အနိမ့်တန်းတစ်ခုတွင် Performance ကို Test လုပ်ပါ။'],
      ['Large, unoptimized images are one of the most common mobile performance problems — check them first.', 'ကြီးမား၍ Optimize မလုပ်ရသေးသော Image များသည် Mobile Performance ပြဿနာအများဆုံးများထဲမှ တစ်ခု ဖြစ်သည် — ၎င်းတို့ကို ဦးစွာ စစ်ဆေးပါ။'],
    ]),
    commonMistakes: list([
      ['Rendering an entire long list at once instead of only visible items.', 'မြင်နေရသော Item များကိုသာမဟုတ်ဘဲ List ရှည်တစ်ခုလုံးကို တစ်ပြိုင်နက် Render လုပ်ခြင်း။'],
      ['Using full-resolution images where a smaller size would look identical.', 'အရွယ်အစား သေးငယ်သည်နှင့် တူညီစွာ ပုံပေါ်မည့်နေရာတွင် Full-resolution Image များ သုံးခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-advanced-2', [
      ['Profile the app\'s slowest screen', 'App ၏ နှေးဆုံး Screen ကို Profile လုပ်ပါ'],
      ['Optimize list rendering', 'List Rendering Optimize လုပ်ပါ'],
      ['Optimize image sizes', 'Image Size များ Optimize လုပ်ပါ'],
      ['Measure and document the improvement', 'တိုးတက်မှုကို တိုင်းတာပြီး မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Use profiling tools to find bottlenecks', 'Bottleneck များ ရှာဖွေရန် Profiling Tool များ သုံးနိုင်သည်'],
      ['Optimize list rendering performance', 'List Rendering Performance Optimize လုပ်နိုင်သည်'],
      ['Optimize image assets', 'Image Asset များ Optimize လုပ်နိုင်သည်'],
      ['Measure the impact of a performance fix', 'Performance ပြင်ဆင်မှုတစ်ခု၏ သက်ရောက်မှုကို တိုင်းတာနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-advanced-3': {
    whatItIs: t([
      'Offline-first app design means building an app so it remains genuinely usable without an internet connection, syncing changes once connectivity returns.',
      'Offline-first App Design ဆိုသည်မှာ App တစ်ခုကို Internet Connection မရှိဘဲ တကယ် အသုံးပြုနိုင်ဆဲ ဖြစ်အောင် တည်ဆောက်ပြီး Connectivity ပြန်ရှိလာသည့်အခါ ပြောင်းလဲမှုများကို Sync လုပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Mobile users regularly lose connectivity — in elevators, on trains, in areas with poor signal — and an app that completely breaks offline feels unreliable and frustrating.',
      'Mobile User များသည် Elevator များ၊ Train ပေါ်၊ Signal ညံ့သော နေရာများတွင် Connectivity ပုံမှန် ဆုံးရှုံးလေ့ရှိသည် — Offline တွင် လုံးဝ ပျက်သွားသော App တစ်ခုသည် ယုံကြည်စိတ်ချရမှုမရှိ၍ စိတ်ပျက်ဖွယ် ခံစားရသည်။',
    ]),
    whereUsed: t([
      'Especially important for apps used in areas with unreliable connectivity, note-taking apps, and productivity tools.',
      'Connectivity ယုံကြည်စိတ်ချရမှု နည်းသော နေရာများတွင် သုံးသော App များ၊ Note-taking App များနှင့် Productivity Tool များအတွက် အထူးအရေးကြီးသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on local data storage and state management from earlier stages.',
      'ဤအရာသည် ယခင် အဆင့်များမှ Local Data Storage နှင့် State Management အပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Detecting network connectivity', 'Network Connectivity ဖော်ထုတ်ခြင်း'],
      ['Queuing changes made while offline', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော ပြောင်းလဲမှုများ Queue ချခြင်း'],
      ['Syncing queued changes when back online', 'Online ပြန်ရောက်သည့်အခါ Queue ချထားသော ပြောင်းလဲမှုများ Sync လုပ်ခြင်း'],
      ['Handling sync conflicts at a basic level', 'Sync Conflict များကို အခြေခံအဆင့် ကိုင်တွယ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Detect and respond to connectivity changes', 'Connectivity ပြောင်းလဲမှုများ ဖော်ထုတ်ပြီး တုံ့ပြန်ခြင်း'],
        [
          ['Checking whether the device currently has network access', 'Device တွင် လက်ရှိ Network Access ရှိမရှိ စစ်ဆေးခြင်း'],
          ['Showing the user a clear offline indicator', 'User ကို ရှင်းလင်းသော Offline Indicator ပြသခြင်း'],
        ],
        [
          ['Add an offline indicator to your app that appears when connectivity is lost', 'Connectivity ဆုံးရှုံးသည့်အခါ ပေါ်လာသော Offline Indicator တစ်ခုကို သင့် App သို့ ထည့်ပါ'],
        ],
      ),
      step(
        ['Queue and sync changes made offline', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော ပြောင်းလဲမှုများ Queue ချပြီး Sync လုပ်ခြင်း'],
        [
          ['Storing an action locally when made offline instead of losing it', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော Action ကို ဆုံးရှုံးမည့်အစား Local သိမ်းဆည်းခြင်း'],
          ['Replaying queued actions once the connection returns', 'Connection ပြန်ရှိလာသည့်အခါ Queue ချထားသော Action များ ပြန်လည် Replay လုပ်ခြင်း'],
        ],
        [
          ['Let a user create a task while offline, and have it sync to the server automatically once back online', 'User တစ်ဦးအား Offline ဖြစ်နေစဉ် Task တစ်ခု ဖန်တီးခွင့်ပြုပြီး Online ပြန်ရောက်သည့်အခါ Server သို့ အလိုအလျောက် Sync လုပ်စေပါ'],
        ],
      ),
    ],
    build: t([
      'Make your task app offline-capable: users can view cached data and create/edit tasks while offline, with changes syncing automatically once connectivity returns.',
      'သင့် Task App ကို Offline-capable ဖြစ်စေပါ — User များသည် Offline ဖြစ်နေစဉ် Cache Data ကို ကြည့်နိုင်ပြီး Task များ ဖန်တီး/ပြင်ဆင်နိုင်ကာ Connectivity ပြန်ရှိလာသည့်အခါ ပြောင်းလဲမှုများ အလိုအလျောက် Sync ဖြစ်စေသည်။',
    ]),
    verify: t([
      'If a user creates three tasks while offline, then reconnects, do all three appear correctly on the server without duplicates?',
      'User တစ်ဦးသည် Offline ဖြစ်နေစဉ် Task သုံးခု ဖန်တီးပြီး ပြန် Connect လုပ်လျှင် သုံးခုစလုံး Duplicate မဖြစ်ဘဲ Server ပေါ်တွင် မှန်ကန်စွာ ပေါ်လာပါသလား?',
    ]),
    tips: list([
      ['Always show users a clear indicator of their connectivity state and any pending sync.', 'User များကို ၎င်းတို့၏ Connectivity State နှင့် Pending Sync မည်သည်ကိုမဆို ရှင်းလင်းသော Indicator တစ်ခု အမြဲပြသပါ။'],
      ['Test offline behavior by actually turning off network access, not just imagining it.', 'ခန့်မှန်းရုံသာမက Network Access ကို တကယ် ပိတ်ခြင်းဖြင့် Offline Behavior ကို Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Silently losing user actions made while offline instead of queuing them.', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော User Action များကို Queue မချဘဲ တိတ်တဆိတ် ဆုံးရှုံးစေခြင်း။'],
      ['Not handling the case where the same data was changed both offline and on the server.', 'Data တူတူသည် Offline နှင့် Server ပေါ်တွင် နှစ်ခုစလုံး ပြောင်းလဲခံရသော Case ကို မကိုင်တွယ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-advanced-3', [
      ['Detect connectivity and show an offline indicator', 'Connectivity ဖော်ထုတ်ပြီး Offline Indicator ပြသပါ'],
      ['Queue an action made while offline', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော Action တစ်ခု Queue ချပါ'],
      ['Sync queued actions when back online', 'Online ပြန်ရောက်သည့်အခါ Queue ချထားသော Action များ Sync လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Detect network connectivity changes', 'Network Connectivity ပြောင်းလဲမှုများ ဖော်ထုတ်နိုင်သည်'],
      ['Queue actions made while offline', 'Offline ဖြစ်နေစဉ် ပြုလုပ်ထားသော Action များ Queue ချနိုင်သည်'],
      ['Sync queued actions automatically when reconnected', 'ပြန် Connect ဖြစ်သည့်အခါ Queue ချထားသော Action များကို အလိုအလျောက် Sync လုပ်နိုင်သည်'],
      ['Show users a clear offline/sync status', 'User များကို ရှင်းလင်းသော Offline/Sync Status ပြသနိုင်သည်'],
    ]),
    resources: [],
  },

  'mobile-development-advanced-4': {
    whatItIs: t([
      'Cross-platform architecture decisions are the choices about how much code to share between iOS and Android, and when to write platform-specific code instead.',
      'Cross-platform Architecture ဆုံးဖြတ်ချက်များသည် iOS နှင့် Android ကြား Code မည်မျှမျှဝေမည်၊ ဘယ်အချိန် Platform-specific Code ကို အစားထိုးရေးမည်ဆိုသော ရွေးချယ်မှုများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Cross-platform frameworks share most code, but real apps often need platform-specific behavior for the best experience — knowing when to break from shared code is a mature engineering skill.',
      'Cross-platform Framework များသည် Code အများစုကို မျှဝေသော်လည်း တကယ့် App များသည် အကောင်းဆုံး အတွေ့အကြုံအတွက် Platform-specific Behavior လိုအပ်လေ့ရှိသည် — Shared Code မှ ဘယ်အချိန် ခွဲထွက်ရမည်ကို သိခြင်းသည် ရင့်ကျက်သော Engineering ကျွမ်းကျင်မှု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Relevant to any serious cross-platform app once it needs to feel truly native on both iOS and Android.',
      'iOS နှင့် Android နှစ်ခုစလုံးတွင် တကယ့် Native ခံစားရအောင် လိုအပ်လာသည့်အခါ Cross-platform App အားလုံးနှင့် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic that draws on everything from earlier in the Mobile Development path.',
      'ဤသည်မှာ Mobile Development Path ရှေ့ပိုင်းမှ အားလုံးကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['What cross-platform frameworks share vs abstract away', 'Cross-platform Framework များ မျှဝေသည်နှင့် ဖုံးအုပ်ထားသည်များ'],
      ['Platform-specific UI conventions (iOS vs Android)', 'Platform-specific UI Convention များ (iOS vs Android)'],
      ['Writing platform-specific code when needed', 'လိုအပ်သည့်အခါ Platform-specific Code ရေးခြင်း'],
      ['Deciding what to share vs customize per platform', 'Platform တစ်ခုစီအတွက် ဘာမျှဝေမည်၊ ဘာ Customize လုပ်မည် ဆုံးဖြတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Recognize platform differences that matter', 'အရေးကြီးသော Platform ကွာခြားချက်များ ဖော်ထုတ်ခြင်း'],
        [
          ['iOS and Android have different navigation, back-button, and design conventions', 'iOS နှင့် Android တွင် Navigation, Back-button, Design Convention များ မတူညီပါ'],
        ],
        [
          ['List three UI/UX differences between iOS and Android that your app should probably respect', 'သင့် App လိုက်နာသင့်သော iOS နှင့် Android ကြား UI/UX ကွာခြားချက် သုံးခု စာရင်းပြုစုပါ'],
        ],
      ),
      step(
        ['Write platform-specific code where it matters', 'အရေးကြီးသည့်နေရာတွင် Platform-specific Code ရေးခြင်း'],
        [
          ['Conditionally rendering different UI per platform when needed', 'လိုအပ်သည့်အခါ Platform အလိုက် UI မတူညီသည်ကို Conditionally Render လုပ်ခြင်း'],
        ],
        [
          ['Adjust one part of your app\'s UI to follow each platform\'s native convention', 'သင့် App UI ၏ တစ်စိတ်တစ်ပိုင်းကို Platform တစ်ခုစီ၏ Native Convention အတိုင်း ချိန်ညှိပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short architecture decision document for your app: what stays shared across platforms, what gets customized per platform, and why — grounded in what you actually built.',
      'သင့် App အတွက် Architecture Decision Document အတိုချုပ် ရေးပါ — Platform များတစ်လျှောက် ဘာအရာ Shared ဖြစ်နေဆဲလဲ၊ Platform တစ်ခုစီအတွက် ဘာ Customize လုပ်ထားသလဲ၊ ဘာကြောင့်လဲ — သင် တကယ်တည်ဆောက်ခဲ့သည်အပေါ် အခြေခံပြီး။',
    ]),
    verify: t([
      'Could you justify, for a specific screen, why you chose to share its code versus customize it per platform?',
      'Screen သီးခြားတစ်ခုအတွက် ၎င်း၏ Code ကို Platform တစ်ခုစီအတွက် Customize မလုပ်ဘဲ Share လုပ်ရန် ဘာကြောင့် ရွေးချယ်ခဲ့သည်ကို သင့်လျော်ကြောင်း ပြသနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Default to shared code; only customize per platform when there is a real, user-facing reason.', 'Shared Code ကို Default အဖြစ် ထားပါ — တကယ့် User-facing အကြောင်းရင်း ရှိမှသာ Platform တစ်ခုစီအတွက် Customize လုပ်ပါ။'],
      ['Test on both a real iOS and a real Android device before assuming cross-platform behavior is identical.', 'Cross-platform Behavior တူညီသည်ဟု မယူဆမီ iOS အစစ်နှင့် Android အစစ်နှစ်ခုစလုံးတွင် Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Assuming "cross-platform" means "identical on every platform" when native conventions actually differ.', 'Native Convention များ တကယ်ကွဲပြားနေချိန်တွင် "Cross-platform" ဆိုသည်မှာ "Platform တိုင်းတွင် အတူတူ" ဟု ယူဆခြင်း။'],
      ['Over-customizing per platform when shared code would have worked fine.', 'Shared Code ကောင်းစွာ အလုပ်လုပ်နိုင်သည့်တိုင် Platform တစ်ခုစီအတွက် လွန်ကဲစွာ Customize လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('mobile-development-advanced-4', [
      ['List key iOS vs Android UI/UX differences', 'iOS နှင့် Android UI/UX ကွာခြားချက် အဓိကများကို စာရင်းပြုစုပါ'],
      ['Customize one UI element per platform convention', 'UI Element တစ်ခုကို Platform Convention အလိုက် Customize လုပ်ပါ'],
      ['Write a short architecture decision document', 'Architecture Decision Document အတိုချုပ် ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Identify meaningful platform differences', 'အဓိပ္ပာယ်ရှိသော Platform ကွာခြားချက်များ ဖော်ထုတ်နိုင်သည်'],
      ['Write platform-specific code when justified', 'သင့်လျော်ကြောင်းရှိသည့်အခါ Platform-specific Code ရေးနိုင်သည်'],
      ['Explain trade-offs between shared and custom code', 'Shared Code နှင့် Custom Code ကြား Trade-off များ ရှင်းပြနိုင်သည်'],
      ['Document architecture decisions clearly', 'Architecture ဆုံးဖြတ်ချက်များကို ရှင်းလင်းစွာ မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },
}
