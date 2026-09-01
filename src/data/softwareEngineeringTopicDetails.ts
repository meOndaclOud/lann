import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Software Engineering topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const softwareEngineeringTopicDetails: Record<string, TopicDetail> = {
  'software-engineering-beginner-1': {
    whatItIs: t([
      'Programming fundamentals are the basic building blocks every program is made of: storing data (variables), repeating actions (loops), and packaging logic you can reuse (functions).',
      'Programming အခြေခံအုတ်မြစ်များဆိုသည်မှာ Program တိုင်း တည်ဆောက်ထားသည့် အခြေခံ အစိတ်အပိုင်းများ ဖြစ်သည် — Data သိမ်းဆည်းခြင်း (Variables)၊ လုပ်ဆောင်ချက်များ ထပ်ခါထပ်ခါလုပ်ခြင်း (Loops) နှင့် ပြန်လည်အသုံးပြုနိုင်သော Logic ထုပ်ပိုးခြင်း (Functions)။',
    ]),
    whyItMatters: t([
      "Every framework, library, and tool you will ever use is built on top of these basics — skipping them makes everything after feel like guesswork instead of understanding.",
      'သင်အနာဂတ်တွင် အသုံးပြုမည့် Framework, Library, Tool တိုင်းသည် ဤအခြေခံများအပေါ် တည်ဆောက်ထားသည် — ၎င်းတို့ကို ကျော်သွားလျှင် နောက်ပိုင်းအရာအားလုံးသည် နားလည်မှုအစား ခန့်မှန်းချက်လိုသာ ခံစားရလိမ့်မည်။',
    ]),
    whereUsed: t([
      'Literally every piece of software — a mobile app, a website, a game, a data pipeline — is built from variables, loops, and functions underneath.',
      'Mobile App, Website, Game, Data Pipeline တစ်ခုချင်းစီအပါအဝင် Software အားလုံးသည် Variable, Loop, Function များ၏ အောက်ခြေတွင် တည်ဆောက်ထားခြင်း ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Variables and data types', 'Variable များနှင့် Data Type များ'],
      ['Conditionals (if/else)', 'Conditional များ (if/else)'],
      ['Loops (for/while)', 'Loop များ (for/while)'],
      ['Functions and parameters', 'Function များနှင့် Parameter များ'],
      ['Basic input/output', 'အခြေခံ Input/Output'],
    ]),
    steps: [
      step(
        ['Store and use data with variables', 'Variable များဖြင့် Data သိမ်းဆည်းပြီး အသုံးပြုခြင်း'],
        [
          ['Numbers, strings, booleans', 'Number, String, Boolean များ'],
          ['Naming variables clearly', 'Variable များကို ရှင်းလင်းစွာ နာမည်ပေးခြင်း'],
        ],
        [
          ['Write a small script that stores your name, age, and a boolean, and prints them', 'သင့်နာမည်၊ အသက်နှင့် Boolean တစ်ခုကို သိမ်းပြီး Print လုပ်သော Script အသေးလေး ရေးပါ'],
        ],
      ),
      step(
        ['Control flow with conditionals and loops', 'Conditional နှင့် Loop များဖြင့် Control Flow'],
        [
          ['if / else if / else', 'if / else if / else'],
          ['for loops and while loops', 'for Loop နှင့် while Loop များ'],
        ],
        [
          ['Write a program that prints "even" or "odd" for numbers 1 to 20', '၁ မှ ၂၀ အထိ ဂဏန်းများအတွက် "even" (သို့) "odd" ကို Print လုပ်သော Program ရေးပါ'],
          ['Write a loop that sums all numbers from 1 to 100', '၁ မှ ၁၀၀ အထိ ဂဏန်းအားလုံးကို ပေါင်းသော Loop တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Package logic into functions', 'Logic ကို Function များအဖြစ် ထုပ်ပိုးခြင်း'],
        [
          ['Defining a function with parameters and a return value', 'Parameter နှင့် Return Value ပါသော Function တစ်ခု သတ်မှတ်ခြင်း'],
          ['Why functions prevent repeating the same code', 'Function များက Code တူညီတာကို ထပ်ခါထပ်ခါ ရေးရခြင်းမှ ဘာကြောင့် ကာကွယ်ပေးသလဲ'],
        ],
        [
          ['Turn your even/odd program into a reusable function', 'သင့် Even/Odd Program ကို ပြန်လည်အသုံးပြုနိုင်သော Function တစ်ခုအဖြစ် ပြောင်းပါ'],
          ['Write a function that checks if a number is prime', 'ဂဏန်းတစ်ခု Prime ဟုတ် မဟုတ် စစ်ဆေးသော Function တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Build a simple command-line calculator that takes two numbers and an operator, using functions for each operation.',
      'ဂဏန်းနှစ်ခုနှင့် Operator တစ်ခုကို ယူသော Command-line Calculator ရိုးရှင်းတစ်ခုကို Operation တစ်ခုချင်းစီအတွက် Function များ သုံး၍ တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you explain, to someone who has never coded, what a function is and why it is useful — using a real-life analogy?',
      'Code လုံးဝမရေးဖူးသူတစ်ဦးကို Function ဆိုတာဘာလဲနှင့် ဘာကြောင့်အသုံးဝင်သလဲကို လက်တွေ့ဘဝ ဥပမာနှင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Type out every example yourself — do not just read code.', 'ဥပမာတိုင်းကို ကိုယ်တိုင် ရိုက်ကြည့်ပါ — Code ကိုသာ မဖတ်ပါနှင့်။'],
      ['When stuck, print variable values at each step to see what is actually happening.', 'ပိတ်မိသောအခါ Variable Value များကို အဆင့်တိုင်းတွင် Print လုပ်ပြီး တကယ်ဖြစ်နေသည်ကို ကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to learn a framework before understanding these basics.', 'ဤအခြေခံများ မနားလည်မီ Framework တစ်ခုကို လေ့လာရန် ကြိုးစားခြင်း။'],
      ['Copying code from tutorials without typing and understanding it.', 'Tutorial များမှ Code ကို ကိုယ်တိုင်မရိုက်ဘဲ၊ နားမလည်ဘဲ Copy လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-beginner-1', [
      ['Write a program using variables and conditionals', 'Variable နှင့် Conditional များ သုံးထားသော Program တစ်ခု ရေးပါ'],
      ['Write two different loops', 'မတူညီသော Loop နှစ်ခု ရေးပါ'],
      ['Write three functions with parameters and return values', 'Parameter နှင့် Return Value ပါသော Function သုံးခု ရေးပါ'],
      ['Build the calculator project', 'Calculator Project တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Use variables and basic data types', 'Variable နှင့် အခြေခံ Data Type များ သုံးနိုင်သည်'],
      ['Write conditionals and loops', 'Conditional နှင့် Loop များ ရေးနိုင်သည်'],
      ['Write and call functions with parameters', 'Parameter ပါသော Function များ ရေးပြီး Call လုပ်နိုင်သည်'],
      ['Build a small working program from scratch', 'သေးငယ်သော Program တစ်ခုကို အစမှ တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-beginner-2': {
    whatItIs: t([
      'The command line is a text-based way to control your computer directly — navigating folders, running programs, and managing files without a mouse.',
      'Command Line ဆိုသည်မှာ Mouse မလိုဘဲ Computer ကို တိုက်ရိုက်ထိန်းချုပ်ရန် Text-based နည်းလမ်းတစ်ခု ဖြစ်သည် — Folder များ သွားလာခြင်း၊ Program များ Run ခြင်းနှင့် File များ စီမံခန့်ခွဲခြင်း။',
    ]),
    whyItMatters: t([
      'Nearly every developer tool — Git, package managers, servers, deployment scripts — is operated through the command line; avoiding it limits what you can do as a developer.',
      'Git, Package Manager, Server, Deployment Script စသည့် Developer Tool နီးပါးအားလုံးကို Command Line မှတစ်ဆင့် အသုံးပြုသည် — ၎င်းကို ရှောင်ခြင်းသည် Developer တစ်ဦးအနေဖြင့် သင်လုပ်နိုင်သည်များကို ကန့်သတ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Used daily by every professional developer, whether writing web apps, mobile apps, or backend systems.',
      'Web App, Mobile App, Backend System မည်သည်ကိုမဆို ရေးနေသော Professional Developer တိုင်းက နေ့စဉ် အသုံးပြုသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Navigating directories (cd, ls/dir, pwd)', 'Directory များတွင် သွားလာခြင်း (cd, ls/dir, pwd)'],
      ['Creating and removing files/folders', 'File/Folder များ ဖန်တီးခြင်းနှင့် ဖျက်ခြင်း'],
      ['Running programs from the terminal', 'Terminal မှ Program များ Run ခြင်း'],
      ['Basic flags and arguments', 'အခြေခံ Flag များနှင့် Argument များ'],
    ]),
    steps: [
      step(
        ['Navigate the filesystem confidently', 'Filesystem ကို ယုံကြည်စိတ်ချစွာ သွားလာခြင်း'],
        [
          ['Absolute vs relative paths', 'Absolute Path နှင့် Relative Path'],
          ['cd, ls (or dir), and pwd commands', 'cd, ls (or dir), pwd Command များ'],
        ],
        [
          ['Navigate three folders deep and back using only the command line', 'Command Line ကိုသာ သုံး၍ Folder သုံးခု အနက်ရောက်အောင် သွားပြီး ပြန်လာပါ'],
        ],
      ),
      step(
        ['Manage files from the terminal', 'Terminal မှ File များ စီမံခန့်ခွဲခြင်း'],
        [
          ['Creating, moving, copying, and deleting files', 'File များ ဖန်တီးခြင်း၊ ရွှေ့ခြင်း၊ Copy ကူးခြင်း၊ ဖျက်ခြင်း'],
          ['Viewing file contents from the terminal', 'Terminal မှ File Content များ ကြည့်ခြင်း'],
        ],
        [
          ['Create a folder structure for a project using only commands', 'Command များကိုသာ သုံး၍ Project တစ်ခုအတွက် Folder ဖွဲ့စည်းပုံ ဖန်တီးပါ'],
        ],
      ),
    ],
    build: t([
      'Recreate a small project folder structure (with placeholder files) entirely from the command line, without using a file explorer.',
      'File Explorer မသုံးဘဲ Command Line ကနေတစ်ခုတည်း Project Folder ဖွဲ့စည်းပုံအသေးစား တစ်ခုကို (Placeholder File များပါ) ပြန်လည်ဖန်တီးပါ။',
    ]),
    verify: t([
      'Could you find, rename, and move a file to a different folder without ever touching a mouse?',
      'Mouse လုံးဝမသုံးဘဲ File တစ်ခုကို ရှာဖွေ၊ နာမည်ပြောင်းပြီး Folder တစ်ခုကို ရွှေ့နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn commands by using them for real tasks, not memorizing a list.', 'Command များကို List အလွတ်ကျက်မည့်အစား တကယ့် Task များအတွက် သုံးရင်း လေ့လာပါ။'],
      ['Use tab-completion — it saves time and reduces typos.', 'Tab-completion သုံးပါ — အချိန်ကုန်သက်သာပြီး စာလုံးမှားခြင်း လျော့နည်းစေသည်။'],
    ]),
    commonMistakes: list([
      ['Avoiding the command line and doing everything through a GUI instead.', 'Command Line ကို ရှောင်ပြီး GUI ကိုသာ အားလုံးလုပ်ခြင်း။'],
      ['Running destructive commands (like delete) without double-checking the path first.', 'Path ကို အရင်နှစ်ကြိမ်မစစ်ဘဲ ဖျက်ခြင်းကဲ့သို့ ဖျက်ဆီးနိုင်သော Command များ Run ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-beginner-2', [
      ['Navigate a multi-level folder structure', 'အဆင့်များစွာပါသော Folder ဖွဲ့စည်းပုံတွင် သွားလာပါ'],
      ['Create, rename, and delete files via the terminal', 'Terminal မှတစ်ဆင့် File များ ဖန်တီး၊ နာမည်ပြောင်း၊ ဖျက်ပါ'],
      ['Run a program and pass it arguments', 'Program တစ်ခု Run ပြီး Argument များ ပေးပါ'],
    ]),
    completionChecklist: list([
      ['Navigate directories confidently', 'Directory များတွင် ယုံကြည်စိတ်ချစွာ သွားလာနိုင်သည်'],
      ['Create, move, and delete files from the terminal', 'Terminal မှ File များ ဖန်တီး၊ ရွှေ့၊ ဖျက်နိုင်သည်'],
      ['Run programs with arguments', 'Argument များနှင့်အတူ Program များ Run နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-beginner-3': {
    whatItIs: t([
      'Git is a version control system that tracks every change to your code over time, so you can go back, compare, and collaborate safely.',
      'Git သည် သင့် Code ရှိ ပြောင်းလဲမှုတိုင်းကို အချိန်နှင့်အမျှ Track လုပ်ပေးသော Version Control System ဖြစ်ပြီး ပြန်သွားခြင်း၊ နှိုင်းယှဉ်ခြင်းနှင့် ဘေးကင်းစွာ ပူးပေါင်းဆောင်ရွက်နိုင်သည်။',
    ]),
    whyItMatters: t([
      'Without version control, losing work, overwriting a teammate\'s changes, or being unable to undo a mistake are constant risks — Git is the industry standard solution to all three.',
      'Version Control မရှိပါက အလုပ်ဆုံးရှုံးခြင်း၊ Teammate ၏ ပြောင်းလဲမှုများ Overwrite လုပ်ခြင်း (သို့) အမှားတစ်ခုကို ပြန်ပြင်၍မရခြင်းသည် အမြဲ ဖြစ်ပေါ်နိုင်သော အန္တရာယ်များ ဖြစ်သည် — Git သည် သုံးခုစလုံးအတွက် စက်မှုလုပ်ငန်း စံနှုန်း ဖြေရှင်းချက်ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used on virtually every software project, solo or in a team, from small scripts to massive production systems.',
      'Script သေးသေးလေးများမှ Production System ကြီးများအထိ ကိုယ်တိုင်ဖြစ်စေ၊ အဖွဲ့ဖြင့်ဖြစ်စေ Software Project နီးပါးအားလုံးတွင် အသုံးပြုသည်။',
    ]),
    prerequisiteNote: t([
      'Basic command line comfort helps here, since Git is typically used through terminal commands.',
      'Git ကို များသောအားဖြင့် Terminal Command များဖြင့် အသုံးပြုသောကြောင့် Command Line နှင့် ရင်းနှီးမှုက ကူညီပေးသည်။',
    ]),
    firstSteps: list([
      ['Repositories', 'Repository များ'],
      ['Commits', 'Commit များ'],
      ['Branches', 'Branch များ'],
      ['git add, commit, push, pull', 'git add, commit, push, pull'],
      ['.gitignore', '.gitignore'],
    ]),
    steps: [
      step(
        ['Track changes with commits', 'Commit များဖြင့် ပြောင်းလဲမှုများ Track လုပ်ခြင်း'],
        [
          ['git init, git add, git commit', 'git init, git add, git commit'],
          ['Writing clear commit messages', 'ရှင်းလင်းသော Commit Message များ ရေးခြင်း'],
        ],
        [
          ['Create a repository and make five separate, clearly-described commits', 'Repository တစ်ခု ဖန်တီးပြီး ရှင်းလင်းစွာ ဖော်ပြထားသော Commit ငါးခု သီးသန့် ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Work with branches', 'Branch များနှင့် အလုပ်လုပ်ခြင်း'],
        [
          ['Why branches let you work on features without breaking main code', 'Branch များက အဓိက Code ကို မပျက်စေဘဲ Feature များအတွက် ဘာကြောင့် အလုပ်လုပ်နိုင်စေသနည်း'],
          ['Merging a branch back in', 'Branch တစ်ခုကို ပြန်လည် Merge လုပ်ခြင်း'],
        ],
        [
          ['Create a branch, make changes, and merge it back into main', 'Branch တစ်ခု ဖန်တီး၊ ပြောင်းလဲမှုများ လုပ်ပြီး Main ထဲသို့ ပြန်လည် Merge လုပ်ပါ'],
        ],
      ),
      step(
        ['Collaborate with a remote repository', 'Remote Repository တစ်ခုနှင့် ပူးပေါင်းဆောင်ရွက်ခြင်း'],
        [
          ['git push and git pull', 'git push နှင့် git pull'],
          ['Resolving a simple merge conflict', 'ရိုးရှင်းသော Merge Conflict တစ်ခု ဖြေရှင်းခြင်း'],
        ],
        [
          ['Push a repository to GitHub (or similar) and pull it on another machine/folder', 'Repository တစ်ခုကို GitHub (သို့မဟုတ် တူညီသောနေရာ) သို့ Push လုပ်ပြီး Machine/Folder တခြားတစ်ခုတွင် Pull လုပ်ပါ'],
          ['Intentionally create and resolve a merge conflict', 'တမင် Merge Conflict တစ်ခု ဖန်တီးပြီး ဖြေရှင်းပါ'],
        ],
      ),
    ],
    build: t([
      'Take one of your earlier practice programs, put it under Git version control, and build its history through a series of meaningful commits and at least one branch.',
      'သင့် ယခင်လေ့ကျင့်မှု Program တစ်ခုကို ယူပြီး Git Version Control အောက်တွင် ထားပါ၊ အဓိပ္ပာယ်ရှိသော Commit များနှင့် Branch အနည်းဆုံးတစ်ခုဖြင့် ၎င်း၏ History ကို တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'If you made a mistake three commits ago, could you find and fix it without losing your other work?',
      'Commit သုံးခုအရင်က အမှားတစ်ခု ရှိခဲ့လျှင် သင့်အခြားအလုပ်များ မဆုံးရှုံးဘဲ ၎င်းကို ရှာပြီး ပြင်ဆင်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Commit small, logical chunks of work — not one giant commit at the end of the day.', 'ခြေတစ်ရက်ကုန်ချိန် Commit တစ်ခုကြီးမဟုတ်ဘဲ သေးငယ်ပြီး ယုတ္တိရှိသော အလုပ် အပိုင်းများ Commit လုပ်ပါ။'],
      ['Read the output of git status before every commit.', 'Commit တိုင်းမလုပ်မီ git status ၏ Output ကို ဖတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Writing vague commit messages like "fix" or "update".', '"fix" (သို့) "update" ကဲ့သို့ မရှင်းလင်းသော Commit Message များ ရေးခြင်း။'],
      ['Committing large generated files or secrets by accident.', 'ကြီးမားသော Generated File များ (သို့) Secret များကို မတော်တဆ Commit လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-beginner-3', [
      ['Initialize a repository and make several commits', 'Repository တစ်ခု Initialize လုပ်ပြီး Commit များစွာ လုပ်ပါ'],
      ['Create and merge a branch', 'Branch တစ်ခု ဖန်တီးပြီး Merge လုပ်ပါ'],
      ['Push to and pull from a remote repository', 'Remote Repository သို့ Push လုပ်ပြီး Pull လုပ်ပါ'],
      ['Resolve a merge conflict', 'Merge Conflict တစ်ခု ဖြေရှင်းပါ'],
    ]),
    completionChecklist: list([
      ['Track changes with commits', 'Commit များဖြင့် ပြောင်းလဲမှုများ Track လုပ်နိုင်သည်'],
      ['Create and merge branches', 'Branch များ ဖန်တီးပြီး Merge လုပ်နိုင်သည်'],
      ['Push and pull from a remote repository', 'Remote Repository သို့ Push/Pull လုပ်နိုင်သည်'],
      ['Resolve a basic merge conflict', 'အခြေခံ Merge Conflict တစ်ခု ဖြေရှင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-beginner-4': {
    whatItIs: t([
      'Problem-solving is the skill of breaking a challenge into smaller pieces and working through them logically, independent of any specific programming language.',
      'Problem-solving ဆိုသည်မှာ Challenge တစ်ခုကို အပိုင်းငယ်များအဖြစ် ခွဲထုတ်ပြီး Programming Language အသီးသီးနှင့် သီးသန့် ယုတ္တိရှိစွာ လုပ်ဆောင်နိုင်သော ကျွမ်းကျင်မှု ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Syntax can be looked up any time; the ability to break down an unfamiliar problem is what actually separates a productive developer from someone who can only follow tutorials.',
      'Syntax ကို အချိန်မရွေး ရှာကြည့်နိုင်သည် — ရင်းနှီးမှုမရှိသော ပြဿနာတစ်ခုကို ခွဲထုတ်နိုင်စွမ်းသည် Tutorial များကိုသာ လိုက်နိုင်သူနှင့် အသုံးဝင်သော Developer တစ်ဦးကို တကယ်ခွဲခြားပေးသည့်အရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every coding interview, every real bug, and every new feature request starts as an unfamiliar problem that needs to be broken down.',
      'Coding Interview တိုင်း၊ Bug တကယ်တစ်ခုချင်းစီနှင့် Feature တောင်းဆိုချက်အသစ်တိုင်းသည် ခွဲထုတ်ရန်လိုအပ်သော ရင်းနှီးမှုမရှိသေးသည့် ပြဿနာတစ်ခုအဖြစ် စတင်ကြသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Restating a problem in your own words', 'ပြဿနာကို သင့်ကိုယ်ပိုင်စကားဖြင့် ပြန်ပြောခြင်း'],
      ['Breaking a problem into smaller sub-problems', 'ပြဿနာတစ်ခုကို အပိုင်းငယ် ပြဿနာများအဖြစ် ခွဲထုတ်ခြင်း'],
      ['Working through examples by hand first', 'ပထမဆုံး ဥပမာများကို လက်ဖြင့် လုပ်ဆောင်ကြည့်ခြင်း'],
      ['Pseudocode', 'Pseudocode'],
    ]),
    steps: [
      step(
        ['Break problems into smaller steps', 'ပြဿနာများကို အဆင့်ငယ်များအဖြစ် ခွဲထုတ်ခြင်း'],
        [
          ['Restating the problem before writing any code', 'Code မရေးမီ ပြဿနာကို ပြန်ပြောခြင်း'],
          ['Writing pseudocode to plan a solution', 'ဖြေရှင်းချက်တစ်ခုကို စီစဉ်ရန် Pseudocode ရေးခြင်း'],
        ],
        [
          ['Solve "reverse a string" by first writing pseudocode, then real code', '"reverse a string" ကို ဖြေရှင်းရန် ပထမ Pseudocode ရေးပြီးမှ Code အစစ် ရေးပါ'],
        ],
      ),
      step(
        ['Practice with progressively harder exercises', 'တဖြည်းဖြည်း ခက်ခဲလာသော Exercise များဖြင့် လေ့ကျင့်ခြင်း'],
        [
          ['Working through examples by hand before coding', 'Code မရေးမီ ဥပမာများကို လက်ဖြင့် လုပ်ဆောင်ကြည့်ခြင်း'],
          ['Identifying patterns across similar problems', 'တူညီသော ပြဿနာများကြား ပုံစံများ ဖော်ထုတ်ခြင်း'],
        ],
        [
          ['Solve five beginner-level coding exercises (e.g. FizzBuzz, palindrome check, array sum)', 'Beginner-level Coding Exercise ငါးခု ဖြေရှင်းပါ (ဥပမာ FizzBuzz, Palindrome Check, Array Sum)'],
        ],
      ),
    ],
    build: t([
      'Solve a slightly unfamiliar problem (one you have not seen a solution to before) using the restate → pseudocode → code approach, and write down your thought process as you go.',
      'ရင်းနှီးမှု အနည်းငယ်နည်းသော ပြဿနာတစ်ခု (ယခင်က ဖြေရှင်းချက် မမြင်ဖူးသေးသည်) ကို Restate → Pseudocode → Code နည်းလမ်းဖြင့် ဖြေရှင်းပြီး သင့်တွေးခေါ်မှု လုပ်ငန်းစဉ်ကို မှတ်တမ်းတင်ပါ။',
    ]),
    verify: t([
      'When you get stuck on a problem, do you have a repeatable process to fall back on, rather than just staring at the screen?',
      'ပြဿနာတစ်ခုတွင် ပိတ်မိသည့်အခါ Screen ကိုသာ စိုက်ကြည့်နေမည့်အစား အားထားနိုင်သော ထပ်ခါထပ်ခါ လုပ်ဆောင်နိုင်သည့် လုပ်ငန်းစဉ်တစ်ခု ရှိပါသလား?',
    ]),
    tips: list([
      ['If stuck, work through a smaller version of the problem first.', 'ပိတ်မိလျှင် ပထမဆုံး ပြဿနာ၏ ပိုသေးငယ်သော Version ကို လုပ်ဆောင်ကြည့်ပါ။'],
      ['Explain your approach out loud (or in writing) before coding — it exposes gaps in your plan.', 'Code မရေးမီ သင့်နည်းလမ်းကို အသံထွက် (သို့) စာဖြင့် ရှင်းပြပါ — ၎င်းက သင့်အစီအစဉ်ရှိ ကွက်လပ်များကို ဖော်ထုတ်ပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Jumping straight to code without understanding the problem first.', 'ပြဿနာကို ရှေးဦးစွာ နားမလည်ဘဲ Code သို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
      ['Giving up too quickly instead of breaking the problem down further.', 'ပြဿနာကို ထပ်မံ မခွဲထုတ်ဘဲ မြန်မြန်ဆွဲ လက်လျှော့ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-beginner-4', [
      ['Write pseudocode before code for one problem', 'ပြဿနာတစ်ခုအတွက် Code မရေးမီ Pseudocode ရေးပါ'],
      ['Solve five beginner-level exercises', 'Beginner-level Exercise ငါးခု ဖြေရှင်းပါ'],
      ['Solve one unfamiliar problem and document your thought process', 'ရင်းနှီးမှုမရှိသော ပြဿနာတစ်ခုကို ဖြေရှင်းပြီး တွေးခေါ်မှု လုပ်ငန်းစဉ် မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Restate a problem in your own words before solving it', 'ဖြေရှင်းမည့် ပြဿနာကို သင့်ကိုယ်ပိုင်စကားဖြင့် ပြန်ပြောနိုင်သည်'],
      ['Break a problem into smaller sub-problems', 'ပြဿနာတစ်ခုကို အပိုင်းငယ်များအဖြစ် ခွဲထုတ်နိုင်သည်'],
      ['Use pseudocode to plan before coding', 'Code မရေးမီ စီစဉ်ရန် Pseudocode သုံးနိုင်သည်'],
      ['Solve an unfamiliar problem methodically', 'ရင်းနှီးမှုမရှိသော ပြဿနာတစ်ခုကို စနစ်တကျ ဖြေရှင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-core-1': {
    whatItIs: t([
      'Going deep on one programming language means moving past basic syntax to understand its idioms, standard library, and the way experienced developers actually write it.',
      'Programming Language တစ်ခုကို နက်နက်ရှိုင်းရှိုင်း လေ့လာခြင်းဆိုသည်မှာ အခြေခံ Syntax ကို ကျော်လွန်ပြီး ၎င်း၏ Idiom များ၊ Standard Library နှင့် အတွေ့အကြုံရှိ Developer များ တကယ်ရေးသားပုံများကို နားလည်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Knowing many languages shallowly is far less valuable than knowing one deeply — depth is what lets you write idiomatic, efficient, maintainable code instead of code that merely runs.',
      'Language များစွာကို ပေါ့ပေါ့ပါးပါး သိထားခြင်းသည် တစ်ခုကို နက်နက်ရှိုင်းရှိုင်း သိထားခြင်းထက် အများကြီး တန်ဖိုးနည်းသည် — Run နေရုံသာမက Idiomatic, ထိရောက်၍ ထိန်းသိမ်းရလွယ်သော Code ရေးနိုင်ရန် နက်ရှိုင်းမှုက ကူညီပေးသည်။',
    ]),
    whereUsed: t([
      'Every job posting lists specific languages, and technical interviews probe depth in at least one — employers value real fluency over a long list of languages you barely know.',
      'Job Posting တိုင်းတွင် သီးခြား Language များ ဖော်ပြထားပြီး Technical Interview များသည် အနည်းဆုံး တစ်ခု၏ နက်ရှိုင်းမှုကို စမ်းသပ်လေ့ရှိသည် — အလုပ်ရှင်များသည် သိပ်မသိသော Language List ရှည်ရှည်ထက် တကယ့် ကျွမ်းကျင်မှုကို တန်ဖိုးထားသည်။',
    ]),
    prerequisiteNote: t([
      'You should be comfortable with variables, loops, functions, and basic Git before going deep on a specific language.',
      'သီးခြား Language တစ်ခုကို နက်နက်ရှိုင်းရှိုင်း မလေ့လာမီ Variable, Loop, Function နှင့် အခြေခံ Git တို့ကို ရင်းနှီးထားသင့်သည်။',
    ]),
    firstSteps: list([
      ['Your chosen language\'s core syntax', 'သင်ရွေးချယ်ထားသော Language ၏ အဓိက Syntax'],
      ['Standard library basics', 'Standard Library အခြေခံ'],
      ['Idiomatic style (how experienced developers write it)', 'Idiomatic Style (အတွေ့အကြုံရှိ Developer များ ရေးသားပုံ)'],
      ['Reading official documentation', 'တရားဝင် Documentation ဖတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Get comfortable with core syntax and idioms', 'အဓိက Syntax နှင့် Idiom များကို ရင်းနှီးအောင်လုပ်ခြင်း'],
        [
          ['The language\'s common data structures (lists, maps/dictionaries)', 'Language ၏ အများသုံး Data Structure များ (Lists, Maps/Dictionaries)'],
          ['String and array/list manipulation', 'String နှင့် Array/List Manipulation'],
        ],
        [
          ['Rewrite three of your earlier beginner exercises using more idiomatic style in this language', 'သင့် ယခင် Beginner Exercise သုံးခုကို ဤ Language ၏ ပို Idiomatic ဖြစ်သော Style ဖြင့် ပြန်ရေးပါ'],
        ],
      ),
      step(
        ['Explore the standard library', 'Standard Library ကို လေ့လာစူးစမ်းခြင်း'],
        [
          ['What comes built-in vs. what needs an external package', 'Built-in ပါလာသည်များနှင့် External Package လိုအပ်သည်များ'],
          ['Reading official documentation to find the right built-in tool', 'မှန်ကန်သော Built-in Tool ကို ရှာဖွေရန် တရားဝင် Documentation ဖတ်ခြင်း'],
        ],
        [
          ['Solve a small task using only the standard library, no external packages', 'External Package မသုံးဘဲ Standard Library ကိုသာသုံး၍ Task သေးငယ်တစ်ခု ဖြေရှင်းပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small, self-contained tool (e.g. a file organizer, a simple word-counter, a basic CLI utility) using idiomatic patterns and the standard library of your chosen language.',
      'သင်ရွေးချယ်ထားသော Language ၏ Idiomatic Pattern များနှင့် Standard Library ကို သုံး၍ Tool သေးငယ် တစ်ခု (ဥပမာ File Organizer, Word-counter ရိုးရှင်း, CLI Utility အခြေခံ) တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you read someone else\'s code in this language and tell whether it follows common idioms or not?',
      'ဤ Language ဖြင့်ရေးထားသော အခြားသူ၏ Code ကို ဖတ်ပြီး ၎င်းသည် အများသုံး Idiom များအတိုင်း ဟုတ်၊ မဟုတ် ပြောနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read the official documentation directly instead of relying only on blog posts.', 'Blog Post များကိုသာ မှီခိုမနေဘဲ တရားဝင် Documentation ကို တိုက်ရိုက်ဖတ်ပါ။'],
      ['Read open-source code written in your language to see real idiomatic style.', 'တကယ့် Idiomatic Style ကို မြင်ရန် သင့် Language ဖြင့်ရေးထားသော Open-source Code ကို ဖတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Writing code in one language the way you would write it in a different one.', 'Language တစ်ခုတွင် Language တခြားတစ်ခုနည်းတူ Code ရေးခြင်း။'],
      ['Reaching for an external package before checking if the standard library already solves it.', 'Standard Library က ဖြေရှင်းပြီးလားမစစ်ဘဲ External Package ကို အရင်ရှာခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-core-1', [
      ['Rewrite earlier exercises idiomatically', 'ယခင် Exercise များကို Idiomatic ဖြစ်အောင် ပြန်ရေးပါ'],
      ['Solve a task using only the standard library', 'Standard Library ကိုသာ သုံး၍ Task တစ်ခု ဖြေရှင်းပါ'],
      ['Build a small self-contained tool', 'Tool သေးငယ် တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Write idiomatic code in your chosen language', 'သင်ရွေးချယ်ထားသော Language ဖြင့် Idiomatic Code ရေးနိုင်သည်'],
      ['Use the standard library effectively', 'Standard Library ကို ထိရောက်စွာ သုံးနိုင်သည်'],
      ['Read official documentation to solve a problem', 'ပြဿနာတစ်ခု ဖြေရှင်းရန် တရားဝင် Documentation ဖတ်နိုင်သည်'],
      ['Build a small working tool from scratch', 'Tool သေးငယ်တစ်ခုကို အစမှ တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-core-2': {
    whatItIs: t([
      'Object-oriented programming (OOP) organizes code around objects that bundle data and behavior together, using classes as blueprints for those objects.',
      'Object-oriented Programming (OOP) သည် Data နှင့် Behavior ကို အတူတကွ ထုပ်ပိုးထားသော Object များကို အခြေခံ၍ Code ကို စုစည်းပေးပြီး Class များကို ထို Object များအတွက် စံပုံစံများအဖြစ် အသုံးပြုသည်။',
    ]),
    whyItMatters: t([
      'A huge share of real-world production codebases are organized around OOP — understanding classes, objects, and their relationships is essential to reading and contributing to them.',
      'လက်တွေ့ Production Codebase အများစုသည် OOP ကို အခြေခံ၍ စုစည်းထားသည် — ၎င်းတို့ကို ဖတ်ရှုပြီး ပါဝင်ဆောင်ရွက်ရန် Class, Object နှင့် ၎င်းတို့၏ ဆက်နွယ်မှုများကို နားလည်ရန် မရှိမဖြစ် လိုအပ်သည်။',
    ]),
    whereUsed: t([
      'Used throughout enterprise software, game engines, and most major frameworks (backend frameworks, UI frameworks) that structure their APIs around classes and objects.',
      'Enterprise Software, Game Engine များနှင့် Class များနှင့် Object များကို အခြေခံ၍ ၎င်းတို့၏ API ကို ဖွဲ့စည်းသော Framework အများစုတွင် (Backend Framework, UI Framework) အသုံးပြုကြသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Classes and objects', 'Class များနှင့် Object များ'],
      ['Encapsulation', 'Encapsulation'],
      ['Inheritance', 'Inheritance'],
      ['Polymorphism', 'Polymorphism'],
      ['Constructors', 'Constructor များ'],
    ]),
    steps: [
      step(
        ['Model real things as classes', 'တကယ့်အရာများကို Class များအဖြစ် Model ပြုလုပ်ခြင်း'],
        [
          ['A class defines properties (data) and methods (behavior)', 'Class တစ်ခုသည် Property (Data) နှင့် Method (Behavior) များကို သတ်မှတ်ပေးသည်'],
          ['Constructors set up an object\'s initial state', 'Constructor များသည် Object ၏ ကနဦး State ကို သတ်မှတ်ပေးသည်'],
        ],
        [
          ['Create a `Book` class with properties and a method that describes it', 'Property များနှင့် ၎င်းကို ဖော်ပြသော Method ပါသော `Book` Class တစ်ခု ဖန်တီးပါ'],
          ['Create multiple objects from the same class', 'Class တစ်ခုတည်းမှ Object များစွာ ဖန်တီးပါ'],
        ],
      ),
      step(
        ['Use inheritance and polymorphism', 'Inheritance နှင့် Polymorphism အသုံးပြုခြင်း'],
        [
          ['A subclass inherits and can override behavior from a parent class', 'Subclass တစ်ခုသည် Parent Class မှ Behavior ကို Inherit လုပ်ပြီး Override လုပ်နိုင်သည်'],
          ['Polymorphism lets different objects respond differently to the same method call', 'Polymorphism က Object မတူညီသည်များကို Method Call တူညီသည့်တိုင် မတူညီစွာ တုံ့ပြန်စေသည်'],
        ],
        [
          ['Create a base `Animal` class and two subclasses that override a `makeSound` method', '`Animal` Base Class တစ်ခုနှင့် `makeSound` Method ကို Override လုပ်သော Subclass နှစ်ခု ဖန်တီးပါ'],
        ],
      ),
      step(
        ['Encapsulate data properly', 'Data ကို မှန်ကန်စွာ Encapsulate လုပ်ခြင်း'],
        [
          ['Public vs private members', 'Public နှင့် Private Member များ'],
          ['Why hiding internal details makes code safer to change', 'Internal Detail များကို ဖျောက်ထားခြင်းက Code ကို ပြောင်းလဲရန် ဘာကြောင့် ပိုဘေးကင်းစေသနည်း'],
        ],
        [
          ['Refactor the `Book` class to protect its internal data behind methods', '`Book` Class ၏ Internal Data ကို Method များနောက်တွင် ကာကွယ်ရန် Refactor လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small library-management-style program with at least three related classes (e.g. Book, Member, Library) that use inheritance or composition together.',
      'Inheritance (သို့) Composition ကို အတူတကွ သုံးသော ဆက်စပ် Class အနည်းဆုံး သုံးခု (ဥပမာ Book, Member, Library) ပါသော Library-management-style Program သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you explain the difference between inheritance ("is-a") and composition ("has-a") with a concrete example of each?',
      'Inheritance ("is-a") နှင့် Composition ("has-a") ကြား ကွာခြားချက်ကို ဥပမာအသီးသီးဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Do not force inheritance where composition fits better — "has-a" is often the safer default.', 'Composition ပိုသင့်တော်သောနေရာတွင် Inheritance ကို အတင်းမသုံးပါနှင့် — "has-a" သည် များသောအားဖြင့် ပိုဘေးကင်းသော Default ဖြစ်သည်။'],
      ['Keep classes focused on one responsibility rather than doing everything.', 'အားလုံးလုပ်မည့်အစား Class များကို တာဝန်တစ်ခုတည်းအပေါ် အာရုံစိုက်ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Overusing inheritance for things that are not truly "is-a" relationships.', '"is-a" ဆက်နွယ်မှု အစစ်အမှန် မဟုတ်သည်များအတွက် Inheritance ကို လွန်ကဲစွာ အသုံးပြုခြင်း။'],
      ['Making every property public, defeating the purpose of encapsulation.', 'Property တိုင်းကို Public ပြုလုပ်ပြီး Encapsulation ၏ ရည်ရွယ်ချက်ကို ဖျက်ဆီးခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-core-2', [
      ['Create a class with a constructor and methods', 'Constructor နှင့် Method များပါသော Class တစ်ခု ဖန်တီးပါ'],
      ['Use inheritance across two related classes', 'ဆက်စပ်သော Class နှစ်ခုတွင် Inheritance သုံးပါ'],
      ['Use polymorphism through method overriding', 'Method Overriding မှတစ်ဆင့် Polymorphism သုံးပါ'],
      ['Build the library-management project', 'Library-management Project တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Define classes with properties and methods', 'Property နှင့် Method များပါသော Class များ သတ်မှတ်နိုင်သည်'],
      ['Use inheritance appropriately', 'Inheritance ကို သင့်လျော်စွာ သုံးနိုင်သည်'],
      ['Use polymorphism through overriding', 'Overriding မှတစ်ဆင့် Polymorphism သုံးနိုင်သည်'],
      ['Encapsulate internal data behind methods', 'Internal Data ကို Method များနောက်တွင် Encapsulate လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-core-3': {
    whatItIs: t([
      'Data structures are ways of organizing data (arrays, lists, maps, trees), and algorithms are step-by-step procedures for solving problems with that data — the two go hand in hand.',
      'Data Structure များသည် Data ကို စုစည်းသောနည်းလမ်းများ (Arrays, Lists, Maps, Trees) ဖြစ်ပြီး Algorithm များသည် ထို Data ဖြင့် ပြဿနာများကို ဖြေရှင်းရန် အဆင့်ဆင့် လုပ်ငန်းစဉ်များ ဖြစ်သည် — နှစ်ခုစလုံး အတူတကွ သွားနေသည်။',
    ]),
    whyItMatters: t([
      'Choosing the right data structure and algorithm is often the difference between a program that runs instantly and one that grinds to a halt as data grows — and this is a core part of most technical interviews.',
      'မှန်ကန်သော Data Structure နှင့် Algorithm ရွေးချယ်ခြင်းသည် Data ကြီးထွားလာသည်နှင့်အမျှ ချက်ချင်း Run နိုင်သော Program တစ်ခုနှင့် ရပ်တန့်သွားသော Program တစ်ခုကြား ကွာခြားချက် ဖြစ်လေ့ရှိပြီး Technical Interview အများစု၏ အဓိက အစိတ်အပိုင်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used everywhere performance matters — search engines, databases, routing systems, and any application handling significant amounts of data.',
      'Performance အရေးကြီးသည့် နေရာတိုင်းတွင် အသုံးပြုသည် — Search Engine, Database, Routing System နှင့် Data အလုံးအရင်း ကိုင်တွယ်သည့် Application မည်သည်ကိုမဆို။',
    ]),
    prerequisiteNote: t([
      'You should be comfortable with functions and basic OOP before this — many algorithms are implemented as methods on data structure classes.',
      'ဤအရာမတိုင်မီ Function နှင့် အခြေခံ OOP ကို ရင်းနှီးထားသင့်သည် — Algorithm အများစုကို Data Structure Class များပေါ်ရှိ Method များအဖြစ် အကောင်အထည်ဖော်ကြသည်။',
    ]),
    firstSteps: list([
      ['Arrays and lists', 'Arrays နှင့် Lists'],
      ['Hash maps / dictionaries', 'Hash Map / Dictionary များ'],
      ['Stacks and queues', 'Stacks နှင့် Queues'],
      ['Basic sorting and searching', 'အခြေခံ Sorting နှင့် Searching'],
      ['Big-O notation basics', 'Big-O Notation အခြေခံ'],
    ]),
    steps: [
      step(
        ['Understand and use core data structures', 'အခြေခံ Data Structure များ နားလည်ပြီး အသုံးပြုခြင်း'],
        [
          ['Arrays/lists for ordered data', 'အစီအစဉ်ရှိသော Data အတွက် Arrays/Lists'],
          ['Hash maps for fast lookups by key', 'Key ဖြင့် လျင်မြန်စွာ ရှာဖွေရန် Hash Map များ'],
          ['Stacks (LIFO) and queues (FIFO)', 'Stacks (LIFO) နှင့် Queues (FIFO)'],
        ],
        [
          ['Solve a problem using a hash map that would be slow with only an array', 'Array တစ်ခုတည်းသုံးလျှင် နှေးမည့် ပြဿနာတစ်ခုကို Hash Map သုံး၍ ဖြေရှင်းပါ'],
          ['Implement a simple stack-based "undo" feature', 'Stack-based "undo" Feature ရိုးရှင်းတစ်ခု အကောင်အထည်ဖော်ပါ'],
        ],
      ),
      step(
        ['Learn basic sorting and searching', 'အခြေခံ Sorting နှင့် Searching လေ့လာခြင်း'],
        [
          ['How binary search works and why the data must be sorted first', 'Binary Search မည်သို့အလုပ်လုပ်ပြီး Data ဘာကြောင့် ရှေးဦးစွာ Sort လုပ်ထားရမည်ကို'],
          ['The idea behind common sorting approaches', 'အများသုံး Sorting နည်းလမ်းများနောက်ကွယ်ရှိ အယူအဆ'],
        ],
        [
          ['Implement binary search on a sorted list', 'Sort လုပ်ထားသော List တစ်ခုပေါ်တွင် Binary Search အကောင်အထည်ဖော်ပါ'],
        ],
      ),
      step(
        ['Reason about performance with Big-O', 'Big-O ဖြင့် Performance အကြောင်း တွေးခေါ်ခြင်း'],
        [
          ['O(1), O(n), O(log n), O(n²) — what they mean intuitively', 'O(1), O(n), O(log n), O(n²) — အလိုအလျောက် အဓိပ္ပာယ်'],
          ['Why an O(n²) solution can become unusable as data grows', 'Data ကြီးထွားလာသည်နှင့်အမျှ O(n²) ဖြေရှင်းချက်တစ်ခု ဘာကြောင့် အသုံးမဝင်တော့နိုင်သနည်း'],
        ],
        [
          ['Compare the time complexity of two different solutions to the same problem', 'ပြဿနာတူတစ်ခုအတွက် ဖြေရှင်းချက် နှစ်ခု၏ Time Complexity ကို နှိုင်းယှဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Solve a set of 5-8 classic data structure and algorithm problems (e.g. two-sum, valid parentheses, reverse a linked list), and for each, note the time complexity of your solution.',
      'Classic Data Structure နှင့် Algorithm ပြဿနာ ၅-၈ ခု (ဥပမာ Two-sum, Valid Parentheses, Reverse a Linked List) ကို ဖြေရှင်းပြီး တစ်ခုချင်းစီအတွက် သင့်ဖြေရှင်းချက်၏ Time Complexity ကို မှတ်ချက်ပြုပါ။',
    ]),
    verify: t([
      'Given a new problem, could you identify which data structure would make it efficient, and roughly estimate the Big-O of your approach?',
      'ပြဿနာအသစ်တစ်ခု ပေးလိုက်လျှင် မည်သည့် Data Structure က ထိရောက်စေမည်ကို ဖော်ထုတ်နိုင်ပြီး သင့်နည်းလမ်း၏ Big-O ကို ခန့်မှန်းနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Solve problems by hand on paper before coding — it builds real intuition.', 'Code မရေးမီ ပြဿနာများကို စက္ကူပေါ်တွင် လက်ဖြင့် ဖြေရှင်းပါ — ၎င်းက တကယ့် အလိုအလျောက် ခံစားမှုကို တည်ဆောက်ပေးသည်။'],
      ['After solving a problem, look at a more efficient solution and understand why it is faster.', 'ပြဿနာတစ်ခု ဖြေရှင်းပြီးနောက် ပိုထိရောက်သော ဖြေရှင်းချက်တစ်ခုကို ကြည့်ပြီး ဘာကြောင့် ပိုမြန်သလဲ နားလည်ပါ။'],
    ]),
    commonMistakes: list([
      ['Memorizing solutions instead of understanding the underlying pattern.', 'အခြေခံ ပုံစံကို နားမလည်ဘဲ ဖြေရှင်းချက်များကို အလွတ်ကျက်မှတ်ခြင်း။'],
      ['Ignoring performance entirely until it becomes a real problem in production.', 'Production တွင် ပြဿနာတကယ်ဖြစ်မှသာ Performance ကို လုံးဝ လျစ်လျူရှုထားခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-core-3', [
      ['Implement a hash-map-based solution to a problem', 'ပြဿနာတစ်ခုအတွက် Hash-map-based ဖြေရှင်းချက် အကောင်အထည်ဖော်ပါ'],
      ['Implement binary search', 'Binary Search အကောင်အထည်ဖော်ပါ'],
      ['Solve 5-8 classic DSA problems', 'Classic DSA ပြဿနာ ၅-၈ ခု ဖြေရှင်းပါ'],
      ['Compare the Big-O of two solutions to the same problem', 'ပြဿနာတူတစ်ခု၏ ဖြေရှင်းချက်နှစ်ခု၏ Big-O ကို နှိုင်းယှဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Use arrays, hash maps, stacks, and queues appropriately', 'Arrays, Hash Maps, Stacks, Queues ကို သင့်လျော်စွာ သုံးနိုင်သည်'],
      ['Implement binary search', 'Binary Search အကောင်အထည်ဖော်နိုင်သည်'],
      ['Estimate the Big-O of a solution', 'ဖြေရှင်းချက်တစ်ခု၏ Big-O ကို ခန့်မှန်းနိုင်သည်'],
      ['Solve a set of classic DSA problems', 'Classic DSA ပြဿနာအစုအဝေးကို ဖြေရှင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-core-4': {
    whatItIs: t([
      'Debugging is the systematic process of finding and fixing why code is not behaving as expected; basic testing is writing code that automatically checks other code works correctly.',
      'Debugging ဆိုသည်မှာ Code သည် မျှော်လင့်ထားသည့်အတိုင်း အလုပ်မလုပ်ခြင်း အကြောင်းရင်းကို ရှာဖွေပြီး ပြင်ဆင်သော စနစ်တကျ လုပ်ငန်းစဉ်ဖြစ်ပြီး အခြေခံ Testing ဆိုသည်မှာ Code တခြားတစ်ခု မှန်ကန်စွာ အလုပ်လုပ်ကြောင်း အလိုအလျောက် စစ်ဆေးပေးသော Code ရေးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Developers spend a huge share of their time debugging, not writing new code — and tests catch bugs before users ever see them, which is far cheaper than fixing production issues.',
      'Developer များသည် Code အသစ် ရေးသားခြင်းထက် Debugging တွင် အချိန်အများကြီး ကုန်ဆုံးလေ့ရှိသည် — Test များက User များ မမြင်မီ Bug များကို ဖမ်းယူပေးပြီး Production ပြဿနာများ ပြင်ရသည်ထက် အများကြီး ကုန်ကျစရိတ် သက်သာစေသည်။',
    ]),
    whereUsed: t([
      'Every professional codebase uses debuggers and automated tests to catch issues early and keep code changes safe over time.',
      'Professional Codebase တိုင်းသည် ပြဿနာများကို စောစီးစွာ ဖမ်းယူပြီး အချိန်ကြာလာသည်နှင့်အမျှ Code ပြောင်းလဲမှုများကို ဘေးကင်းအောင်ထားရန် Debugger များနှင့် Automated Test များကို အသုံးပြုသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Reading error messages and stack traces', 'Error Message နှင့် Stack Trace များ ဖတ်ခြင်း'],
      ['Using a debugger (breakpoints, step-through)', 'Debugger သုံးခြင်း (Breakpoints, Step-through)'],
      ['Print/log-based debugging', 'Print/Log-based Debugging'],
      ['Writing a basic unit test', 'အခြေခံ Unit Test ရေးခြင်း'],
    ]),
    steps: [
      step(
        ['Read errors and use a debugger', 'Error များ ဖတ်ပြီး Debugger သုံးခြင်း'],
        [
          ['Stack traces point to exactly where and why something failed', 'Stack Trace များက တစ်ခုခု ဘယ်နေရာနှင့် ဘာကြောင့် ပျက်သွားသည်ကို အတိအကျ ညွှန်ပြသည်'],
          ['Setting a breakpoint and stepping through code line by line', 'Breakpoint တစ်ခု သတ်မှတ်ပြီး Code ကို လိုင်းလိုက် Step-through လုပ်ခြင်း'],
        ],
        [
          ['Take a program with an intentional bug and find it using a debugger, not print statements', 'Bug တမင်ထည့်ထားသော Program တစ်ခုကို Print Statement မဟုတ်ဘဲ Debugger သုံး၍ ရှာပါ'],
        ],
      ),
      step(
        ['Write your first unit tests', 'ပထမဆုံး Unit Test များ ရေးခြင်း'],
        [
          ['What a unit test checks and why it should be small and focused', 'Unit Test တစ်ခု ဘာကိုစစ်ဆေးပြီး ဘာကြောင့် သေးငယ်၍ အာရုံစိုက်ထားရမည်ကို'],
          ['Arrange-Act-Assert as a simple structure for tests', 'Test များအတွက် ရိုးရှင်းသော ဖွဲ့စည်းပုံအဖြစ် Arrange-Act-Assert'],
        ],
        [
          ['Write unit tests for three functions from earlier exercises', 'ယခင် Exercise များမှ Function သုံးခုအတွက် Unit Test များ ရေးပါ'],
          ['Write a test that intentionally fails, then fix the code to make it pass', 'တမင် Fail ဖြစ်မည့် Test တစ်ခု ရေးပြီး Pass ဖြစ်အောင် Code ကို ပြင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take a program with several intentionally hidden bugs, find and fix each one using a debugger, then write unit tests that would have caught them.',
      'Bug များကို တမင် ဖျောက်ထားသော Program တစ်ခုကို ယူပြီး Debugger သုံး၍ တစ်ခုချင်းစီကို ရှာပြင်ပါ၊ ထို့နောက် ၎င်းတို့ကို ဖမ်းမိမည့် Unit Test များ ရေးပါ။',
    ]),
    verify: t([
      'Given a stack trace from a real error, can you identify the exact line and likely cause without guessing?',
      'တကယ့် Error တစ်ခုမှ Stack Trace ပေးလိုက်လျှင် ခန့်မှန်းခြင်းမလုပ်ဘဲ တိကျသော Line နှင့် ဖြစ်နိုင်ခြေရှိသော အကြောင်းရင်းကို ဖော်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read the full error message and stack trace before assuming what is wrong.', 'ဘာမှားနေသည်ဟု မယူဆမီ Error Message နှင့် Stack Trace အပြည့်အစုံကို ဖတ်ပါ။'],
      ['Write tests for the bugs you find, so they never silently come back.', 'တွေ့ရှိသော Bug များအတွက် Test များ ရေးပါ — ၎င်းတို့ တိတ်တဆိတ် ပြန်မလာအောင်။'],
    ]),
    commonMistakes: list([
      ['Randomly changing code hoping something fixes it, instead of understanding the root cause.', 'Root Cause ကို နားမလည်ဘဲ တစ်ခုခု ပြင်မယ်ဆိုသော မျှော်လင့်ချက်ဖြင့် Code ကို ကျပန်း ပြောင်းလဲခြင်း။'],
      ['Only testing the "happy path" and never checking edge cases or invalid input.', '"Happy Path" ကိုသာ Test လုပ်ပြီး Edge Case များ သို့မဟုတ် မမှန်ကန်သော Input များကို ဘယ်တော့မှ မစစ်ဆေးခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-core-4', [
      ['Find a bug using a debugger, not print statements', 'Print Statement မဟုတ်ဘဲ Debugger သုံး၍ Bug တစ်ခု ရှာပါ'],
      ['Write unit tests for three functions', 'Function သုံးခုအတွက် Unit Test များ ရေးပါ'],
      ['Write a failing test, then make it pass', 'Fail ဖြစ်မည့် Test တစ်ခု ရေးပြီး Pass ဖြစ်အောင် လုပ်ပါ'],
      ['Fix all bugs in the debugging exercise project', 'Debugging Exercise Project ရှိ Bug အားလုံးကို ပြင်ပါ'],
    ]),
    completionChecklist: list([
      ['Read and interpret stack traces', 'Stack Trace များကို ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Use a debugger with breakpoints', 'Breakpoint များပါ Debugger သုံးနိုင်သည်'],
      ['Write basic unit tests', 'အခြေခံ Unit Test များ ရေးနိုင်သည်'],
      ['Test edge cases, not just the happy path', '"Happy Path" ကိုသာမက Edge Case များကိုပါ Test လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-intermediate-1': {
    whatItIs: t([
      'Building a small full application means combining everything so far — logic, data structures, testing — into one working program with a real, coherent purpose.',
      'Application အသေးစား တည်ဆောက်ခြင်းဆိုသည်မှာ ယခုအထိ လေ့လာထားသမျှ — Logic, Data Structure, Testing — ကို ရည်ရွယ်ချက် ရှင်းလင်းသော အလုပ်လုပ် Program တစ်ခုအဖြစ် ပေါင်းစပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Isolated exercises teach individual skills, but only building something complete teaches you how those pieces fit together — which is what real software engineering actually is.',
      'သီးခြား Exercise များက ကျွမ်းကျင်မှု တစ်ခုချင်းစီကို သင်ပေးသော်လည်း အစိတ်အပိုင်းများ မည်သို့ ဆက်စပ်နေသည်ကို ပြည့်စုံသောအရာတစ်ခု တည်ဆောက်ခြင်းကသာ သင်ပေးသည် — ၎င်းသည် တကယ့် Software Engineering ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'This is the transition point from exercises to real work — every project at a job, big or small, requires assembling multiple pieces into one working system.',
      'ဤသည်မှာ Exercise များမှ တကယ့်အလုပ်သို့ ကူးပြောင်းရာ အချက် ဖြစ်သည် — အလုပ်ရှိ Project တိုင်း၊ ကြီးသည်ဖြစ်စေ သေးသည်ဖြစ်စေ အစိတ်အပိုင်းများစွာကို Working System တစ်ခုအဖြစ် စုစည်းရန် လိုအပ်သည်။',
    ]),
    prerequisiteNote: t([
      'You should be comfortable with functions, OOP basics, and basic testing before tackling a full application.',
      'Application တစ်ခုလုံးကို မကိုင်တွယ်မီ Function, OOP အခြေခံနှင့် အခြေခံ Testing တို့ကို ရင်းနှီးထားသင့်သည်။',
    ]),
    firstSteps: list([
      ['Planning an application\'s structure before coding', 'Code မရေးမီ Application ၏ ဖွဲ့စည်းပုံကို စီစဉ်ခြင်း'],
      ['Breaking a project into features/modules', 'Project တစ်ခုကို Feature/Module များအဖြစ် ခွဲထုတ်ခြင်း'],
      ['Organizing files and folders sensibly', 'File များနှင့် Folder များကို ယုတ္တိရှိစွာ စီစဉ်ခြင်း'],
      ['Iterative development (build small, test, expand)', 'Iterative Development (သေးသေးလေး တည်ဆောက်ပြီး Test လုပ်ကာ ချဲ့ထွင်ခြင်း)'],
    ]),
    steps: [
      step(
        ['Plan before you build', 'တည်ဆောက်မီ စီစဉ်ခြင်း'],
        [
          ['Writing a short spec: what the app does and its core features', 'အတိုချုပ် Spec ရေးခြင်း — App ဘာလုပ်သည်နှင့် ၎င်း၏ အဓိက Feature များ'],
          ['Sketching how features and data connect before writing code', 'Code မရေးမီ Feature များနှင့် Data ဆက်စပ်ပုံကို ဆွဲပြခြင်း'],
        ],
        [
          ['Write a one-page spec for a small app idea (e.g. a habit tracker)', 'App Idea သေးငယ်တစ်ခု (ဥပမာ Habit Tracker) အတွက် တစ်မျက်နှာ Spec ရေးပါ'],
        ],
      ),
      step(
        ['Build iteratively', 'Iterative ဖြစ်စွာ တည်ဆောက်ခြင်း'],
        [
          ['Building the smallest working version first ("walking skeleton")', 'အသေးဆုံး အလုပ်လုပ်သော Version ကို ပထမဆုံး တည်ဆောက်ခြင်း ("Walking Skeleton")'],
          ['Adding one feature at a time and testing as you go', 'Feature တစ်ခုစီ တစ်ခုချင်း ထည့်ပြီး ဆက်တိုက် Test လုပ်ခြင်း'],
        ],
        [
          ['Build a walking skeleton for your app idea (it runs, does almost nothing, but works end to end)', 'သင့် App Idea အတွက် Walking Skeleton တည်ဆောက်ပါ (Run ပြီး ဘာမှမလုပ်သလောက်ရှိသော်လည်း အစအဆုံး အလုပ်လုပ်သည်)'],
          ['Add two real features to it, one at a time', '၎င်းသို့ တကယ့် Feature နှစ်ခုကို တစ်ခုချင်း ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small complete application from your spec — for example, a habit tracker, a note-taking tool, or a personal budget tracker — with at least three connected features and basic tests.',
      'သင့် Spec မှ Application သေးငယ် ပြီးပြည့်စုံတစ်ခု တည်ဆောက်ပါ — ဥပမာ Habit Tracker, Note-taking Tool, Personal Budget Tracker — ဆက်စပ် Feature အနည်းဆုံး သုံးခုနှင့် အခြေခံ Test များပါဝင်ပြီး။',
    ]),
    verify: t([
      'Could someone else read your project\'s folder structure and understand roughly how it works before reading a single line of code?',
      'အခြားသူတစ်ဦးသည် Code တစ်လိုင်းမှ မဖတ်မီ သင့် Project ၏ Folder ဖွဲ့စည်းပုံကို ဖတ်ပြီး ၎င်းမည်သို့ အလုပ်လုပ်သည်ကို ခန့်မှန်း နားလည်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Get a "walking skeleton" running end to end before adding real features.', 'တကယ့် Feature များ မထည့်မီ "Walking Skeleton" ကို အစအဆုံး Run နေအောင် လုပ်ပါ။'],
      ['Resist adding features not in your original spec until the core ones work well.', 'Core Feature များ ကောင်းစွာအလုပ်မလုပ်မချင်း မူလ Spec ထဲမပါသော Feature များ မထည့်ပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Trying to build every feature at once instead of one at a time.', 'တစ်ခုချင်းမဟုတ်ဘဲ Feature အားလုံးကို တစ်ပြိုင်နက် တည်ဆောက်ရန် ကြိုးစားခြင်း။'],
      ['Skipping planning and jumping straight into code, leading to a confusing structure later.', 'Planning ကျော်ပြီး Code သို့ တိုက်ရိုက်ခုန်ဝင်ခြင်းက နောက်ပိုင်း ရှုပ်ထွေးသော ဖွဲ့စည်းပုံ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('software-engineering-intermediate-1', [
      ['Write a one-page spec for an app idea', 'App Idea တစ်ခုအတွက် တစ်မျက်နှာ Spec ရေးပါ'],
      ['Build a walking skeleton', 'Walking Skeleton တစ်ခု တည်ဆောက်ပါ'],
      ['Add three connected features one at a time', 'ဆက်စပ် Feature သုံးခုကို တစ်ခုချင်း ထည့်ပါ'],
      ['Write basic tests for the core features', 'Core Feature များအတွက် အခြေခံ Test များ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write a short spec before building', 'တည်ဆောက်မီ Spec အတိုချုပ် ရေးနိုင်သည်'],
      ['Build a working "walking skeleton" first', 'အလုပ်လုပ်သော "Walking Skeleton" ကို ပထမဆုံး တည်ဆောက်နိုင်သည်'],
      ['Add features iteratively', 'Feature များကို Iterative ဖြစ်စွာ ထည့်နိုင်သည်'],
      ['Organize a project into a sensible structure', 'Project တစ်ခုကို ယုတ္တိရှိသော ဖွဲ့စည်းပုံအဖြစ် စီစဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-intermediate-2': {
    whatItIs: t([
      'Working with APIs means having your program send requests to another service (or expose its own) to exchange data over a network, usually using HTTP.',
      'API များနှင့် အလုပ်လုပ်ခြင်းဆိုသည်မှာ သင့် Program ကို Data များကို Network တစ်ခုပေါ်တွင် ဖလှယ်ရန် အခြား Service တစ်ခုသို့ Request များ ပို့ခြင်း (သို့) ၎င်းကိုယ်ပိုင် Service ကို ဖော်ထုတ်ခြင်း (များသောအားဖြင့် HTTP သုံး၍) ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Almost no modern application works in complete isolation — apps talk to weather services, payment providers, maps, authentication systems, and each other, all through APIs.',
      'ခေတ်သစ် Application နီးပါးအားလုံးသည် လုံးဝသီးသန့်ဖြင့် အလုပ်မလုပ်ပါ — App များသည် Weather Service, Payment Provider, Maps, Authentication System နှင့် အချင်းချင်း API များမှတစ်ဆင့် ပြောဆိုကြသည်။',
    ]),
    whereUsed: t([
      'Every web app, mobile app, and backend service that connects to anything external uses APIs — it is one of the most universal skills in software.',
      'အပြင်ပိုင်းနှင့် ချိတ်ဆက်သော Web App, Mobile App, Backend Service တိုင်းသည် API များ သုံးသည် — ၎င်းသည် Software တွင် အများဆုံး ကျယ်ပြန့်သော ကျွမ်းကျင်မှုများထဲမှ တစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['HTTP basics (GET, POST, status codes)', 'HTTP အခြေခံ (GET, POST, Status Code များ)'],
      ['JSON as a data format', 'Data Format တစ်ခုအနေဖြင့် JSON'],
      ['Making requests from code', 'Code မှ Request များ ပြုလုပ်ခြင်း'],
      ['API authentication basics (API keys/tokens)', 'API Authentication အခြေခံ (API Key/Token များ)'],
    ]),
    steps: [
      step(
        ['Understand HTTP and JSON', 'HTTP နှင့် JSON နားလည်ခြင်း'],
        [
          ['Common HTTP methods (GET, POST, PUT, DELETE) and what they mean', 'အများသုံး HTTP Method များ (GET, POST, PUT, DELETE) နှင့် ၎င်းတို့၏ အဓိပ္ပာယ်'],
          ['Status codes (200, 400, 404, 500) and what they tell you', 'Status Code များ (200, 400, 404, 500) နှင့် ၎င်းတို့ ဘာပြောပြသလဲ'],
          ['JSON structure: objects, arrays, and nested data', 'JSON ဖွဲ့စည်းပုံ — Objects, Arrays, Nested Data'],
        ],
        [
          ['Make a GET request to a free public API and print the JSON response', 'Free Public API တစ်ခုသို့ GET Request တစ်ခု ပြုလုပ်ပြီး JSON Response ကို Print လုပ်ပါ'],
        ],
      ),
      step(
        ['Send data and handle authentication', 'Data ပို့ပြီး Authentication ကိုင်တွယ်ခြင်း'],
        [
          ['Sending data with POST requests', 'POST Request များဖြင့် Data ပို့ခြင်း'],
          ['Using an API key or token to authenticate a request', 'Request တစ်ခုကို Authenticate လုပ်ရန် API Key (သို့) Token သုံးခြင်း'],
        ],
        [
          ['Make a POST request that sends data to a public test API', 'Public Test API တစ်ခုသို့ Data ပို့သော POST Request တစ်ခု ပြုလုပ်ပါ'],
          ['Make an authenticated request using an API key', 'API Key သုံး၍ Authenticated Request တစ်ခု ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Handle errors and failures gracefully', 'Error များနှင့် Failure များကို ကောင်းမွန်စွာ ကိုင်တွယ်ခြင်း'],
        [
          ['Checking status codes before trusting a response', 'Response ကို မယုံမီ Status Code များ စစ်ဆေးခြင်း'],
          ['What to do when a request times out or fails', 'Request တစ်ခု Timeout ဖြစ်သည် (သို့) Fail ဖြစ်သည့်အခါ ဘာလုပ်ရမည်ကို'],
        ],
        [
          ['Handle a failed API request without crashing your program', 'Program ကို Crash မဖြစ်စေဘဲ Fail ဖြစ်သော API Request တစ်ခုကို ကိုင်တွယ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small program that pulls data from a real public API (e.g. weather, a public data set) and does something useful with it, handling failures gracefully.',
      'တကယ့် Public API (ဥပမာ Weather, Public Data Set) မှ Data ဆွဲယူပြီး ၎င်းဖြင့် အသုံးဝင်သောအရာ တစ်ခုလုပ်ဆောင်ကာ Failure များကို ကောင်းမွန်စွာ ကိုင်တွယ်သော Program သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'If the API you depend on goes down for a minute, does your program crash, or does it handle it gracefully?',
      'သင်မှီခိုနေသော API သည် တစ်မိနစ် ပျက်သွားလျှင် သင့် Program Crash ဖြစ်မလား၊ (သို့) ကောင်းမွန်စွာ ကိုင်တွယ်မလား?',
    ]),
    tips: list([
      ['Read API documentation carefully before writing code against it.', 'API ကို Code မရေးမီ Documentation ကို သေချာစွာ ဖတ်ပါ။'],
      ['Always check the status code — do not assume every request succeeds.', 'Status Code ကို အမြဲစစ်ဆေးပါ — Request တိုင်း အောင်မြင်သည်ဟု မယူဆပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Assuming every API response will always succeed and be well-formed.', 'API Response တိုင်း အမြဲအောင်မြင်ပြီး ကောင်းစွာ ဖွဲ့စည်းထားသည်ဟု ယူဆခြင်း။'],
      ['Hardcoding API keys directly in source code.', 'API Key များကို Source Code ထဲသို့ တိုက်ရိုက် Hardcode လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-intermediate-2', [
      ['Make a GET request and parse the JSON response', 'GET Request တစ်ခု ပြုလုပ်ပြီး JSON Response ကို Parse လုပ်ပါ'],
      ['Make an authenticated POST request', 'Authenticated POST Request တစ်ခု ပြုလုပ်ပါ'],
      ['Handle a failed request without crashing', 'Crash မဖြစ်စေဘဲ Fail ဖြစ်သော Request တစ်ခုကို ကိုင်တွယ်ပါ'],
      ['Build the public API project', 'Public API Project တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Make GET and POST requests from code', 'Code မှ GET နှင့် POST Request များ ပြုလုပ်နိုင်သည်'],
      ['Parse and use JSON responses', 'JSON Response များကို Parse လုပ်ပြီး သုံးနိုင်သည်'],
      ['Authenticate requests with an API key', 'API Key ဖြင့် Request များကို Authenticate လုပ်နိုင်သည်'],
      ['Handle failed requests gracefully', 'Fail ဖြစ်သော Request များကို ကောင်းမွန်စွာ ကိုင်တွယ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-intermediate-3': {
    whatItIs: t([
      'Databases store data persistently, and SQL is the standard language for creating, reading, updating, and deleting that data.',
      'Database များသည် Data ကို ထာဝရ သိမ်းဆည်းပေးပြီး SQL သည် ထို Data ကို ဖန်တီးခြင်း၊ ဖတ်ခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖျက်ခြင်းအတွက် စံ ဘာသာစကား ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Without a database, an application forgets everything the moment it restarts — nearly every real product needs to persist user data, and SQL databases remain the most widely used way to do it.',
      'Database မရှိပါက Application တစ်ခုသည် Restart ဖြစ်သည်နှင့် အားလုံးမေ့သွားသည် — တကယ့် Product နီးပါးအားလုံးသည် User Data ကို ထိန်းသိမ်းရန် လိုအပ်ပြီး SQL Database များသည် အဲဒါလုပ်ရန် အကျယ်ပြန့်ဆုံး နည်းလမ်းအဖြစ် ကျန်ရှိနေဆဲ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used behind almost every application that stores user accounts, orders, posts, or any structured data — from small startups to the largest tech companies.',
      'User Account, Order, Post များ (သို့) ဖွဲ့စည်းပုံရှိသော Data မည်သည်ကိုမဆို သိမ်းဆည်းသော Application နီးပါးအားလုံး၏ နောက်ကွယ်တွင် အသုံးပြုသည် — Startup သေးသေးလေးများမှ Tech Company အကြီးဆုံးများအထိ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Tables, rows, and columns', 'Tables, Rows, Columns များ'],
      ['SELECT, INSERT, UPDATE, DELETE', 'SELECT, INSERT, UPDATE, DELETE'],
      ['Primary and foreign keys', 'Primary Key နှင့် Foreign Key များ'],
      ['JOINs across tables', 'Tables များ ဖြတ်ကျော် JOINs'],
      ['Basic indexing concepts', 'အခြေခံ Indexing သဘောတရားများ'],
    ]),
    steps: [
      step(
        ['Read and write data with SQL', 'SQL ဖြင့် Data ဖတ်ခြင်းနှင့် ရေးခြင်း'],
        [
          ['SELECT with WHERE, ORDER BY, and LIMIT', 'WHERE, ORDER BY, LIMIT ပါသော SELECT'],
          ['INSERT, UPDATE, and DELETE statements', 'INSERT, UPDATE, DELETE Statement များ'],
        ],
        [
          ['Create a simple table and insert sample rows into it', 'ရိုးရှင်းသော Table တစ်ခု ဖန်တီးပြီး နမူနာ Row များ Insert လုပ်ပါ'],
          ['Write queries that filter, sort, and limit results', 'ရလဒ်များကို Filter, Sort, Limit လုပ်သော Query များ ရေးပါ'],
        ],
      ),
      step(
        ['Model relationships between tables', 'Tables များကြား ဆက်နွယ်မှုများ Model ပြုလုပ်ခြင်း'],
        [
          ['Primary keys uniquely identify a row; foreign keys reference another table', 'Primary Key များက Row တစ်ခုကို ထူးခြားစွာ ဖော်ထုတ်ပြီး Foreign Key များက Table တခြားတစ်ခုကို ရည်ညွှန်းသည်'],
          ['JOINs combine data across related tables', 'JOINs များက ဆက်စပ် Table များအကြား Data ကို ပေါင်းစပ်ပေးသည်'],
        ],
        [
          ['Design two related tables (e.g. users and orders) with a foreign key', 'Foreign Key ပါသော ဆက်စပ် Table နှစ်ခု (ဥပမာ Users နှင့် Orders) ဒီဇိုင်းရေးပါ'],
          ['Write a JOIN query that combines data from both tables', 'Table နှစ်ခုစလုံးမှ Data ကို ပေါင်းစပ်သော JOIN Query တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Design a small database schema for a real scenario (e.g. a simple blog: users, posts, comments) and write a set of queries that cover common operations, including at least one JOIN.',
      'တကယ့် အခြေအနေတစ်ခု (ဥပမာ Blog ရိုးရှင်း — Users, Posts, Comments) အတွက် Database Schema သေးငယ် ဒီဇိုင်းရေးပြီး JOIN အနည်းဆုံးတစ်ခု ပါဝင်သော အများသုံး Operation များကို လွှမ်းခြုံသည့် Query များ ရေးပါ။',
    ]),
    verify: t([
      'Given two related tables, could you write a query that answers a specific question requiring data from both?',
      'ဆက်စပ် Table နှစ်ခုပေးလိုက်လျှင် နှစ်ခုစလုံးမှ Data လိုအပ်သော သီးခြားမေးခွန်းတစ်ခုကို ဖြေဆိုမည့် Query တစ်ခု ရေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Practice writing queries against real sample data, not just theory.', 'သီအိုရီသာမက တကယ့် နမူနာ Data အပေါ် Query များ ရေးရင်း လေ့ကျင့်ပါ။'],
      ['Think about what should be a separate table versus a column before designing a schema.', 'Schema တစ်ခု ဒီဇိုင်းမရေးမီ ဘာသည် သီးခြား Table ဖြစ်သင့်သည်ကို Column တစ်ခုနှင့် နှိုင်းယှဉ်စဉ်းစားပါ။'],
    ]),
    commonMistakes: list([
      ['Storing the same data in multiple places instead of using a foreign key relationship.', 'Foreign Key ဆက်နွယ်မှု မသုံးဘဲ Data တူညီသည်ကို နေရာများစွာတွင် သိမ်းဆည်းခြင်း။'],
      ['Writing a SELECT * query when only specific columns are actually needed.', 'သီးခြား Column များသာ တကယ်လိုအပ်သည့်အခါ SELECT * Query ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-intermediate-3', [
      ['Create a table and insert sample data', 'Table တစ်ခု ဖန်တီးပြီး နမူနာ Data Insert လုပ်ပါ'],
      ['Write filtered and sorted SELECT queries', 'Filter နှင့် Sort ပါသော SELECT Query များ ရေးပါ'],
      ['Design two related tables with a foreign key', 'Foreign Key ပါသော ဆက်စပ် Table နှစ်ခု ဒီဇိုင်းရေးပါ'],
      ['Write a JOIN query across them', '၎င်းတို့ ဖြတ်ကျော် JOIN Query တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write SELECT, INSERT, UPDATE, DELETE queries', 'SELECT, INSERT, UPDATE, DELETE Query များ ရေးနိုင်သည်'],
      ['Design tables with primary and foreign keys', 'Primary နှင့် Foreign Key ပါသော Table များ ဒီဇိုင်းရေးနိုင်သည်'],
      ['Write JOIN queries across related tables', 'ဆက်စပ် Table များ ဖြတ်ကျော် JOIN Query များ ရေးနိုင်သည်'],
      ['Design a small schema for a real scenario', 'တကယ့် အခြေအနေတစ်ခုအတွက် Schema သေးငယ်တစ်ခု ဒီဇိုင်းရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-intermediate-4': {
    whatItIs: t([
      'Code review is the practice of having another developer read your code before it is merged; collaboration practices are the habits that make working with a team smooth.',
      'Code Review ဆိုသည်မှာ သင့် Code ကို Merge မလုပ်မီ Developer တစ်ဦးဦးကို ဖတ်စေသော အလေ့အထ ဖြစ်ပြီး Collaboration Practice များသည် အဖွဲ့နှင့် အလုပ်လုပ်ခြင်းကို ချောမွေ့စေသော အလေ့အထများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Professional software is almost never written alone — code review catches bugs and knowledge gaps early, spreads understanding of the codebase, and is a skill employers explicitly evaluate.',
      'Professional Software ကို တစ်ဦးတည်း ရေးလေ့ ဗမာမရှိပါ — Code Review က Bug များနှင့် အသိပညာ ကွက်လပ်များကို စောစီး ဖမ်းယူပေးပြီး Codebase အကြောင်း နားလည်မှုကို ပျံ့နှံ့စေကာ အလုပ်ရှင်များ တိကျစွာ အကဲဖြတ်သော ကျွမ်းကျင်မှုတစ်ခု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every team-based software project uses some form of code review — pull requests on GitHub/GitLab are the most common implementation.',
      'အဖွဲ့-based Software Project တိုင်းသည် Code Review တစ်မျိုးမျိုး သုံးသည် — GitHub/GitLab ပေါ်ရှိ Pull Request များသည် အကောင်အထည်ဖော်မှု အများသုံးဆုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Comfort with Git branches and commits from the Beginner stage is assumed here.',
      'Beginner အဆင့်မှ Git Branch နှင့် Commit များနှင့် ရင်းနှီးမှုကို ဤနေရာတွင် ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Opening a pull/merge request', 'Pull/Merge Request တစ်ခု ဖွင့်ခြင်း'],
      ['Writing a clear PR description', 'ရှင်းလင်းသော PR ဖော်ပြချက် ရေးခြင်း'],
      ['Giving constructive feedback', 'ဖွဲ့စည်းတည်ဆောက်ရေး Feedback ပေးခြင်း'],
      ['Receiving feedback without taking it personally', 'ကိုယ်ရေးကိုယ်တာ မယူဘဲ Feedback လက်ခံခြင်း'],
    ]),
    steps: [
      step(
        ['Open and describe a pull request well', 'Pull Request တစ်ခုကို ကောင်းစွာ ဖွင့်ပြီး ဖော်ပြခြင်း'],
        [
          ['What a good PR description includes: what changed and why', 'PR ဖော်ပြချက် ကောင်းတစ်ခုတွင် ပါဝင်သင့်သည် — ဘာပြောင်းလဲသည်နှင့် ဘာကြောင့်'],
          ['Keeping pull requests small and focused on one thing', 'Pull Request များကို သေးငယ်ပြီး တစ်ခုတည်းအပေါ် အာရုံစိုက်ထားခြင်း'],
        ],
        [
          ['Open a pull request for a small change with a clear description', 'ရှင်းလင်းသော ဖော်ပြချက်ဖြင့် ပြောင်းလဲမှုသေးငယ်တစ်ခုအတွက် Pull Request တစ်ခု ဖွင့်ပါ'],
        ],
      ),
      step(
        ['Give and receive feedback constructively', 'ဖွဲ့စည်းတည်ဆောက်ရေး Feedback ပေးခြင်းနှင့် လက်ခံခြင်း'],
        [
          ['Reviewing code for correctness, clarity, and maintainability — not just style', 'Style သာမက Correctness, Clarity, Maintainability အတွက် Code ကို Review လုပ်ခြင်း'],
          ['Phrasing feedback as questions or suggestions rather than commands', 'Feedback ကို Command များမဟုတ်ဘဲ မေးခွန်းများ (သို့) အကြံပြုချက်များအဖြစ် ဖော်ပြခြင်း'],
        ],
        [
          ['Review a partner\'s (or a sample) pull request and leave at least three specific, constructive comments', 'Partner (သို့) နမူနာ Pull Request တစ်ခုကို Review လုပ်ပြီး တိကျ၍ ဖွဲ့စည်းတည်ဆောက်ရေး မှတ်ချက် အနည်းဆုံးသုံးခု ချန်ထားပါ'],
        ],
      ),
    ],
    build: t([
      'Simulate a full code review cycle: open a pull request for a real change, have it reviewed (by a peer, mentor, or by re-reviewing it yourself the next day with fresh eyes), address the feedback, and merge it.',
      'Code Review Cycle တစ်ခုလုံးကို Simulate လုပ်ပါ — တကယ့် ပြောင်းလဲမှုအတွက် Pull Request တစ်ခု ဖွင့်ပါ၊ (Peer၊ Mentor တစ်ဦးဦး၊ သို့မဟုတ် နောက်တစ်နေ့တွင် မျက်စိသစ်ဖြင့် ကိုယ်တိုင် ပြန်ကြည့်ခြင်းဖြင့်) Review ခံပါ၊ Feedback ကို ဖြေရှင်းပြီး Merge လုပ်ပါ။',
    ]),
    verify: t([
      'Could you review someone else\'s code and give feedback that is specific, actionable, and respectful — not just "looks good"?',
      'အခြားသူ၏ Code ကို Review လုပ်ပြီး "ကောင်းတယ်" ဟုသာမက တိကျ၍ လက်တွေ့ ဆောင်ရွက်နိုင်ပြီး လေးစားမှုရှိသော Feedback ပေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep pull requests small — large ones are harder to review well and more likely to hide bugs.', 'Pull Request များကို သေးငယ်ထားပါ — ကြီးသည်များကို ကောင်းစွာ Review လုပ်ရန် ခက်ခဲပြီး Bug ဖျောက်ထားနိုင်ခြေ ပိုများသည်။'],
      ['Assume good intent when receiving feedback — it is about the code, not you.', 'Feedback လက်ခံသည့်အခါ ရည်ရွယ်ချက်ကောင်းသည်ဟု ယူဆပါ — ၎င်းသည် Code အကြောင်းဖြစ်ပြီး သင့်အကြောင်း မဟုတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Submitting huge pull requests that touch many unrelated things at once.', 'ဆက်စပ်မှုမရှိသော အရာများစွာကို တစ်ပြိုင်နက် ထိသော Pull Request ကြီးများ တင်ခြင်း။'],
      ['Giving vague feedback like "this is wrong" without explaining why or suggesting a fix.', 'ဘာကြောင့်ဆိုသည်ကို ရှင်းမပြဘဲ (သို့) ဖြေရှင်းချက် အကြံမပြုဘဲ "ဒါမှားတယ်" ကဲ့သို့ မရှင်းလင်းသော Feedback ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-intermediate-4', [
      ['Open a small, well-described pull request', 'သေးငယ်၍ ကောင်းစွာဖော်ပြထားသော Pull Request တစ်ခု ဖွင့်ပါ'],
      ['Review a pull request and leave constructive comments', 'Pull Request တစ်ခုကို Review လုပ်ပြီး ဖွဲ့စည်းတည်ဆောက်ရေး မှတ်ချက်များ ချန်ထားပါ'],
      ['Address review feedback and merge a change', 'Review Feedback ကို ဖြေရှင်းပြီး ပြောင်းလဲမှု Merge လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Open a pull request with a clear description', 'ရှင်းလင်းသော ဖော်ပြချက်ဖြင့် Pull Request တစ်ခု ဖွင့်နိုင်သည်'],
      ['Give constructive, specific code review feedback', 'ဖွဲ့စည်းတည်ဆောက်ရေး၍ တိကျသော Code Review Feedback ပေးနိုင်သည်'],
      ['Receive and address feedback professionally', 'Feedback ကို Professional ဖြစ်စွာ လက်ခံပြီး ဖြေရှင်းနိုင်သည်'],
      ['Complete a full review-and-merge cycle', 'Review-and-merge Cycle တစ်ခုလုံးကို ပြီးမြောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-advanced-1': {
    whatItIs: t([
      'System design is the practice of planning how the major pieces of a large application — services, databases, caches, queues — fit together before (and while) building it.',
      'System Design ဆိုသည်မှာ Application ကြီးတစ်ခု၏ အဓိက အစိတ်အပိုင်းများ — Services, Databases, Caches, Queues — တည်ဆောက်မီ (နှင့် တည်ဆောက်နေစဉ်) မည်သို့ ဆက်စပ်နေမည်ကို စီစဉ်သော အလေ့အထ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'As applications grow, individual code quality is not enough — poor high-level design causes performance, reliability, and maintainability problems that are extremely expensive to fix later.',
      'Application များ ကြီးထွားလာသည်နှင့်အမျှ Code အရည်အသွေး တစ်ခုတည်းသည် လုံလောက်သည် မဟုတ်ပါ — အဆင့်မြင့် Design ညံ့ဖျင်းခြင်းက နောက်ပိုင်း ပြင်ရန် ကုန်ကျစရိတ်များစွာရှိသော Performance, Reliability, Maintainability ပြဿနာများကို ဖြစ်စေသည်။',
    ]),
    whereUsed: t([
      'Central to senior engineering roles and a standard part of interviews at most tech companies for mid-to-senior positions.',
      'Senior Engineering Role များ၏ အဓိကအစိတ်အပိုင်းဖြစ်ပြီး Tech Company အများစုတွင် Mid-to-senior Position များအတွက် Interview ၏ စံ အစိတ်အပိုင်းတစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This assumes comfort building full applications, working with APIs and databases, and understanding basic performance trade-offs from earlier stages.',
      'ဤအရာသည် Application အပြည့်အစုံ တည်ဆောက်ခြင်း၊ API နှင့် Database များနှင့် အလုပ်လုပ်ခြင်းနှင့် ယခင် အဆင့်များမှ အခြေခံ Performance Trade-off များကို နားလည်ခြင်းကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Clients, servers, and databases at a high level', 'Client, Server, Database များ — အဆင့်မြင့် အမြင်'],
      ['Load balancing basics', 'Load Balancing အခြေခံ'],
      ['Caching basics', 'Caching အခြေခံ'],
      ['Horizontal vs vertical scaling', 'Horizontal နှင့် Vertical Scaling'],
      ['Trade-offs (consistency vs availability, simplicity vs flexibility)', 'Trade-off များ (Consistency vs Availability, Simplicity vs Flexibility)'],
    ]),
    steps: [
      step(
        ['Think in terms of components and trade-offs', 'Component များနှင့် Trade-off များအရ တွေးခေါ်ခြင်း'],
        [
          ['Breaking a system into clients, servers, databases, and caches', 'System တစ်ခုကို Clients, Servers, Databases, Caches အဖြစ် ခွဲထုတ်ခြင်း'],
          ['Every design decision is a trade-off — there is no universally "correct" answer', 'Design ဆုံးဖြတ်ချက်တိုင်းသည် Trade-off တစ်ခုဖြစ်ပြီး "မှန်ကန်သော" အဖြေတစ်ခုတည်း မရှိပါ'],
        ],
        [
          ['Sketch the high-level architecture of an app you have already built', 'သင် တည်ဆောက်ပြီးသား App တစ်ခု၏ အဆင့်မြင့် Architecture ကို ဆွဲပါ'],
        ],
      ),
      step(
        ['Design for scale with caching and load balancing', 'Caching နှင့် Load Balancing ဖြင့် Scale အတွက် Design လုပ်ခြင်း'],
        [
          ['What a cache saves you and when it can go stale', 'Cache တစ်ခုက ဘာကို သက်သာစေပြီး ဘယ်အချိန် Stale ဖြစ်နိုင်သည်ကို'],
          ['How a load balancer distributes traffic across multiple servers', 'Load Balancer တစ်ခုက Server များစွာ ကျယ်ကျယ်ပြန့်ပြန့်တွင် Traffic ကို မည်သို့ ဖြန့်ဝေသည်ကို'],
        ],
        [
          ['Design (on paper) how you would add caching to a slow endpoint from an earlier project', 'ယခင် Project တစ်ခုမှ နှေးသော Endpoint တစ်ခုသို့ Caching ထည့်မည်ဆိုပါက မည်သို့လုပ်မည်ကို (စက္ကူပေါ်တွင်) Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Practice a full system design exercise', 'System Design Exercise အပြည့်အစုံ တစ်ခု လေ့ကျင့်ခြင်း'],
        [
          ['Clarifying requirements before designing anything', 'တစ်ခုခု Design မလုပ်မီ လိုအပ်ချက်များ ရှင်းလင်းခြင်း'],
          ['Starting simple, then identifying bottlenecks and addressing them', 'ရိုးရှင်းစွာ စတင်ပြီး Bottleneck များ ဖော်ထုတ်ကာ ဖြေရှင်းခြင်း'],
        ],
        [
          ['Design a simplified version of a familiar system (e.g. a URL shortener) end to end, on paper', 'ရင်းနှီးသော System တစ်ခု (ဥပမာ URL Shortener) ၏ ရိုးရှင်းသော Version ကို စက္ကူပေါ်တွင် အစအဆုံး Design ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Write a one-to-two page system design document for a moderately complex application (e.g. a URL shortener, a simple chat app), covering components, data flow, and at least two trade-offs you considered.',
      'အလယ်အလတ် ရှုပ်ထွေးသော Application (ဥပမာ URL Shortener, Chat App ရိုးရှင်း) တစ်ခုအတွက် System Design Document တစ်မျက်နှာမှ နှစ်မျက်နှာ ရေးပါ — Components, Data Flow နှင့် သင်စဉ်းစားခဲ့သော Trade-off အနည်းဆုံး နှစ်ခု ပါဝင်ပြီး။',
    ]),
    verify: t([
      'Could you explain to a teammate why you chose a particular design over an alternative, in terms of the trade-offs involved?',
      'Teammate တစ်ဦးအား ပါဝင်သော Trade-off များနှင့်ပတ်သက်၍ အခြားနည်းလမ်းတစ်ခုအစား Design တစ်ခုအား ဘာကြောင့် ရွေးချယ်ခဲ့သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always clarify requirements and constraints before designing — assumptions cause the wrong design.', 'Design မလုပ်မီ လိုအပ်ချက်နှင့် ကန့်သတ်ချက်များကို အမြဲ ရှင်းလင်းပါ — ယူဆချက်များက Design မှားစေသည်။'],
      ['Start with the simplest design that could work, then add complexity only where justified.', 'အလုပ်ဖြစ်နိုင်သော အရိုးရှင်းဆုံး Design ဖြင့် စတင်ပြီး လိုအပ်ချက်ရှိမှသာ ရှုပ်ထွေးမှု ထည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Designing for a scale you will never actually reach, adding needless complexity.', 'တကယ်ရောက်မည်မဟုတ်သော Scale အတွက် Design လုပ်ပြီး မလိုအပ်သော ရှုပ်ထွေးမှု ထည့်ခြင်း။'],
      ['Jumping to a solution before understanding the actual requirements and constraints.', 'တကယ့် လိုအပ်ချက်နှင့် ကန့်သတ်ချက်များကို နားမလည်မီ ဖြေရှင်းချက်တစ်ခုသို့ ခုန်ဝင်ခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-advanced-1', [
      ['Sketch the architecture of a project you already built', 'သင် တည်ဆောက်ပြီးသား Project တစ်ခု၏ Architecture ကို ဆွဲပါ'],
      ['Design a caching strategy for a slow endpoint', 'နှေးသော Endpoint တစ်ခုအတွက် Caching Strategy တစ်ခု Design ဆွဲပါ'],
      ['Complete one full system design exercise on paper', 'System Design Exercise တစ်ခုလုံးကို စက္ကူပေါ်တွင် ပြီးမြောက်အောင်လုပ်ပါ'],
      ['Write a short system design document', 'System Design Document အတိုချုပ်တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Break a system into its major components', 'System တစ်ခုကို ၎င်း၏ အဓိက Component များအဖြစ် ခွဲထုတ်နိုင်သည်'],
      ['Explain caching and load balancing basics', 'Caching နှင့် Load Balancing အခြေခံကို ရှင်းပြနိုင်သည်'],
      ['Reason about trade-offs explicitly', 'Trade-off များအကြောင်း ရှင်းလင်းစွာ တွေးခေါ်နိုင်သည်'],
      ['Produce a clear system design document', 'ရှင်းလင်းသော System Design Document တစ်ခု ထုတ်လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-advanced-2': {
    whatItIs: t([
      'Performance optimization is the process of measuring where a program is actually slow and making targeted improvements, rather than guessing.',
      'Performance Optimization ဆိုသည်မှာ Program တစ်ခု တကယ် ဘယ်နေရာနှေးနေသည်ကို တိုင်းတာပြီး ခန့်မှန်းမည့်အစား ရည်ညွှန်းထားသော တိုးတက်မှုများ ပြုလုပ်သော လုပ်ငန်းစဉ် ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Slow software directly costs users, money, and trust — but optimizing the wrong thing wastes engineering time, so knowing how to measure first is what separates real optimization from guesswork.',
      'နှေးသော Software သည် User များ၊ ငွေကြေးနှင့် ယုံကြည်မှုကို တိုက်ရိုက် ထိခိုက်စေသည် — သို့သော် မှားသောအရာကို Optimize လုပ်ခြင်းက Engineering အချိန် ဖြုန်းစေသည်၊ ထို့ကြောင့် ရှေးဦးစွာ တိုင်းတာနည်းသိခြင်းက တကယ့် Optimization ကို ခန့်မှန်းခြင်းနှင့် ခွဲခြားပေးသည်။',
    ]),
    whereUsed: t([
      'Relevant to any system handling meaningful load — from a website that needs to load fast to a backend service processing thousands of requests per second.',
      'အဓိပ္ပာယ်ရှိသော Load ကိုင်တွယ်သော System မည်သည်ကိုမဆို — မြန်ဆန်စွာ Load ဖြစ်ရမည့် Website မှ တစ်စက္ကန့်လျှင် Request ထောင်ချီ Process လုပ်သော Backend Service အထိ။',
    ]),
    prerequisiteNote: t([
      'This builds on data structures/algorithms and database knowledge from earlier stages — most real bottlenecks live in one of those two places.',
      'ဤအရာသည် ယခင်အဆင့်များမှ Data Structure/Algorithm နှင့် Database အသိပညာအပေါ် တည်ဆောက်ထားသည် — Bottleneck အစစ်အမှန်အများစုသည် ထိုနေရာနှစ်ခုအနက် တစ်ခုတွင် ရှိသည်။',
    ]),
    firstSteps: list([
      ['Profiling before optimizing', 'Optimize မလုပ်မီ Profiling'],
      ['Identifying bottlenecks (CPU, memory, I/O, network)', 'Bottleneck များ ဖော်ထုတ်ခြင်း (CPU, Memory, I/O, Network)'],
      ['Caching strategies', 'Caching နည်းဗျူဟာများ'],
      ['Database query optimization basics', 'Database Query Optimization အခြေခံ'],
    ]),
    steps: [
      step(
        ['Measure before optimizing', 'Optimize မလုပ်မီ တိုင်းတာခြင်း'],
        [
          ['Using a profiler to find where time is actually spent', 'အချိန် တကယ်ကုန်ဆုံးနေသည့်နေရာကို ရှာရန် Profiler သုံးခြင်း'],
          ['The 80/20 rule: a small part of the code usually causes most of the slowness', '80/20 Rule — Code ၏ အစိတ်အပိုင်း သေးငယ်တစ်ခုက များသောအားဖြင့် နှေးကွေးမှု အများစုကို ဖြစ်စေသည်'],
        ],
        [
          ['Profile a program from an earlier project and identify its slowest part', 'ယခင် Project တစ်ခုမှ Program တစ်ခုကို Profile လုပ်ပြီး ၎င်း၏ နှေးဆုံးအပိုင်းကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Fix the actual bottleneck', 'တကယ့် Bottleneck ကို ပြင်ဆင်ခြင်း'],
        [
          ['Common fixes: better data structures, caching, reducing database round-trips', 'အများသုံး ဖြေရှင်းချက်များ — Data Structure ပိုကောင်းသည်များ၊ Caching, Database Round-trip လျှော့ချခြင်း'],
          ['Re-measuring after every change to confirm it actually helped', 'ပြင်ဆင်မှုတိုင်းအပြီး တကယ်ကူညီကြောင်း အတည်ပြုရန် ပြန်တိုင်းတာခြင်း'],
        ],
        [
          ['Fix the bottleneck you found and measure the improvement', 'တွေ့ရှိထားသော Bottleneck ကို ပြင်ဆင်ပြီး တိုးတက်မှုကို တိုင်းတာပါ'],
        ],
      ),
    ],
    build: t([
      'Take a program from an earlier stage, profile it under realistic load, identify the real bottleneck, fix it, and document the before/after performance numbers.',
      'ယခင်အဆင့်မှ Program တစ်ခုကို ယူပြီး လက်တွေ့ Load အောက်တွင် Profile လုပ်ပါ၊ တကယ့် Bottleneck ကို ဖော်ထုတ်ပါ၊ ပြင်ဆင်ပြီး ပြင်ဆင်မီ/ပြင်ဆင်ပြီး Performance ကိန်းဂဏန်းများကို မှတ်တမ်းတင်ပါ။',
    ]),
    verify: t([
      'Could you explain, with real numbers, exactly what you optimized and why it made a measurable difference?',
      'တကယ့် ကိန်းဂဏန်းများဖြင့် သင်ဘာကို Optimize လုပ်ခဲ့ပြီး ဘာကြောင့် တိုင်းတာနိုင်သော ကွာခြားချက် ဖြစ်စေသည်ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Never optimize without measuring first — intuition about "slow code" is often wrong.', 'ရှေးဦးစွာ မတိုင်းတာဘဲ Optimize လုံးဝ မလုပ်ပါနှင့် — "နှေးသော Code" အကြောင်း အလိုအလျောက် ခံစားမှုသည် များသောအားဖြင့် မှားနေတတ်သည်။'],
      ['Optimize the biggest bottleneck first — small optimizations elsewhere rarely matter.', 'အကြီးဆုံး Bottleneck ကို ဦးစွာ Optimize လုပ်ပါ — အခြားနေရာများရှိ Optimization သေးသေးလေးများသည် ရှားရှားပါးပါးသာ အရေးကြီးသည်။'],
    ]),
    commonMistakes: list([
      ['Optimizing code that is not actually a bottleneck ("premature optimization").', 'တကယ် Bottleneck မဟုတ်သော Code ကို Optimize လုပ်ခြင်း ("Premature Optimization")။'],
      ['Making a change and assuming it helped without re-measuring.', 'ပြင်ဆင်မှုတစ်ခု လုပ်ပြီး ပြန်မတိုင်းတာဘဲ ကူညီသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-advanced-2', [
      ['Profile a program and identify its slowest part', 'Program တစ်ခုကို Profile လုပ်ပြီး ၎င်း၏ နှေးဆုံးအပိုင်းကို ဖော်ထုတ်ပါ'],
      ['Fix one real bottleneck', 'တကယ့် Bottleneck တစ်ခု ပြင်ဆင်ပါ'],
      ['Measure and document before/after performance', 'ပြင်ဆင်မီ/ပြင်ဆင်ပြီး Performance ကို တိုင်းတာပြီး မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Use a profiler to identify a bottleneck', 'Bottleneck တစ်ခု ဖော်ထုတ်ရန် Profiler သုံးနိုင်သည်'],
      ['Apply a targeted fix based on measurement', 'တိုင်းတာမှုအပေါ် အခြေခံ၍ ရည်ညွှန်းထားသော ပြင်ဆင်မှု အသုံးချနိုင်သည်'],
      ['Measure the impact of an optimization', 'Optimization တစ်ခု၏ သက်ရောက်မှုကို တိုင်းတာနိုင်သည်'],
      ['Avoid optimizing without data', 'Data မရှိဘဲ Optimize လုပ်ခြင်းကို ရှောင်ရှားနိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-advanced-3': {
    whatItIs: t([
      'Contributing to larger codebases means being able to understand, navigate, and safely change code you did not write, in a system too big to hold entirely in your head.',
      'Codebase ကြီးများတွင် ပါဝင်ဆောင်ရွက်ခြင်းဆိုသည်မှာ သင်ခေါင်းထဲတွင် အပြည့်အစုံ မမှတ်နိုင်လောက်အောင် ကြီးမားသော System တစ်ခုရှိ သင်ကိုယ်တိုင် မရေးခဲ့သော Code ကို နားလည်၊ လှည့်လည်ကြည့်ရှုပြီး ဘေးကင်းစွာ ပြောင်းလဲနိုင်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Almost every real job involves working in an existing, often large, codebase — this skill (not writing everything from scratch) is what most professional software engineering actually looks like day to day.',
      'တကယ့်အလုပ် နီးပါးအားလုံးသည် ရှိပြီးသား၊ များသောအားဖြင့် ကြီးမားသော Codebase တွင် အလုပ်လုပ်ရသည် — ဤကျွမ်းကျင်မှု (အားလုံးကို အစမှ မရေးခြင်း) သည် Professional Software Engineering ၏ နေ့စဉ် ပုံစံ တကယ်ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Applies to any job at any established company, and to contributing to open-source projects.',
      'ထူထောင်ပြီးသား ကုမ္ပဏီတိုင်းရှိ အလုပ်မည်သည်ကိုမဆို၊ Open-source Project များတွင် ပါဝင်ဆောင်ရွက်ခြင်းအတွက်လည်း အသုံးချသည်။',
    ]),
    prerequisiteNote: t([
      'This draws on nearly everything so far — reading unfamiliar code, debugging, testing, Git, and code review all come together here.',
      'ဤအရာသည် ယခုအထိ လေ့လာထားသမျှ နီးပါးအားလုံးကို အသုံးချသည် — ရင်းနှီးမှုမရှိသော Code ဖတ်ခြင်း၊ Debugging, Testing, Git, Code Review အားလုံး ဤနေရာတွင် ပေါင်းစည်းလာသည်။',
    ]),
    firstSteps: list([
      ['Reading a codebase\'s README and contribution guide', 'Codebase ၏ README နှင့် Contribution Guide ဖတ်ခြင်း'],
      ['Navigating an unfamiliar codebase methodically', 'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုတွင် စနစ်တကျ လှည့်လည်ကြည့်ရှုခြင်း'],
      ['Understanding existing tests before changing code', 'Code မပြောင်းမီ ရှိပြီးသား Test များကို နားလည်ခြင်း'],
      ['Making minimal, focused changes', 'အနည်းဆုံးနှင့် အာရုံစိုက်ထားသော ပြောင်းလဲမှုများ ပြုလုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Orient yourself in an unfamiliar codebase', 'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုတွင် ကိုယ့်ကိုယ်ကို ချိန်ညှိခြင်း'],
        [
          ['Start from the README and entry point, not a random file', 'Random File တစ်ခုမဟုတ်ဘဲ README နှင့် Entry Point မှ စတင်ခြင်း'],
          ['Using search and "find usages" tools to trace how code connects', 'Code ချိတ်ဆက်ပုံကို ခြေရာခံရန် Search နှင့် "Find Usages" Tool များ သုံးခြင်း'],
        ],
        [
          ['Pick an open-source project you have never seen and find where its main logic starts', 'သင် ဘယ်တော့မှ မမြင်ဖူးသေးသော Open-source Project တစ်ခုကို ရွေးပြီး ၎င်း၏ အဓိက Logic စတင်ရာနေရာကို ရှာပါ'],
        ],
      ),
      step(
        ['Make a safe, minimal change', 'ဘေးကင်း၍ အနည်းဆုံးသော ပြောင်းလဲမှုတစ်ခု ပြုလုပ်ခြင်း'],
        [
          ['Running existing tests before changing anything', 'တစ်ခုခု မပြောင်းလဲမီ ရှိပြီးသား Test များ Run ခြင်း'],
          ['Making the smallest change that solves the problem', 'ပြဿနာကို ဖြေရှင်းမည့် အသေးငယ်ဆုံး ပြောင်းလဲမှု ပြုလုပ်ခြင်း'],
        ],
        [
          ['Fix a small, well-defined bug (real or practice) in an unfamiliar codebase', 'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုတွင် Bug သေးငယ်၍ ရှင်းလင်းစွာ သတ်မှတ်ထားသည်တစ်ခု (တကယ်ဖြစ်စေ၊ လေ့ကျင့်မှုဖြစ်စေ) ကို ပြင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Find a beginner-friendly open-source project, understand one small piece of its codebase well enough to explain it, and submit (or draft) a small, real contribution — a bug fix, a docs improvement, or a small feature.',
      'Beginner-friendly Open-source Project တစ်ခုကို ရှာပါ၊ ၎င်း၏ Codebase အစိတ်အပိုင်းသေးငယ်တစ်ခုကို ရှင်းပြနိုင်လောက်အောင် နားလည်ပါ၊ ပြီးလျှင် တကယ့် ပါဝင်ဆောင်ရွက်မှုသေးငယ်တစ်ခု — Bug Fix, Documentation တိုးတက်မှု (သို့) Feature သေးငယ်တစ်ခု တင်သွင်းပါ (သို့) မူကြမ်းရေးပါ။',
    ]),
    verify: t([
      'Given an unfamiliar codebase, could you find where a specific feature lives within 15-20 minutes?',
      'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုပေးလိုက်လျှင် Feature တစ်ခု ဘယ်နေရာတွင် ရှိသည်ကို ၁၅-၂၀ မိနစ်အတွင်း ရှာတွေ့နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read before you write — understand the existing patterns before adding new code.', 'မရေးမီ ဖတ်ပါ — Code အသစ် မထည့်မီ ရှိပြီးသား Pattern များကို နားလည်ပါ။'],
      ['Run the existing test suite before and after your change to make sure nothing else broke.', 'သင့်ပြောင်းလဲမှု အခြားအရာမပျက်ကြောင်း သေချာစေရန် မီနှင့်နောက် ရှိပြီးသား Test Suite ကို Run ပါ။'],
    ]),
    commonMistakes: list([
      ['Making sweeping changes to unfamiliar code instead of small, targeted ones.', 'ရင်းနှီးမှုမရှိသော Code ကို သေးငယ်၍ ရည်ညွှန်းထားသည့်အစား ကျယ်ပြန့်စွာ ပြောင်းလဲခြင်း။'],
      ['Ignoring the project\'s existing conventions and style.', 'Project ၏ ရှိပြီးသား Convention နှင့် Style များကို လျစ်လျူရှုခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-advanced-3', [
      ['Trace how one feature works in an unfamiliar codebase', 'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုတွင် Feature တစ်ခု အလုပ်လုပ်ပုံကို ခြေရာခံပါ'],
      ['Run the existing test suite before making changes', 'ပြောင်းလဲမှုမပြုလုပ်မီ ရှိပြီးသား Test Suite ကို Run ပါ'],
      ['Make a small, focused fix or improvement', 'သေးငယ်၍ အာရုံစိုက်ထားသော ပြင်ဆင်မှု (သို့) တိုးတက်မှု ပြုလုပ်ပါ'],
      ['Submit or draft a real contribution', 'တကယ့် ပါဝင်ဆောင်ရွက်မှုကို တင်သွင်းပါ (သို့) မူကြမ်းရေးပါ'],
    ]),
    completionChecklist: list([
      ['Navigate an unfamiliar codebase methodically', 'ရင်းနှီးမှုမရှိသော Codebase တစ်ခုတွင် စနစ်တကျ လှည့်လည်ကြည့်ရှုနိုင်သည်'],
      ['Make a safe, minimal, well-tested change', 'ဘေးကင်း၍ အနည်းဆုံး၊ ကောင်းစွာ Test လုပ်ထားသော ပြောင်းလဲမှုတစ်ခု ပြုလုပ်နိုင်သည်'],
      ['Follow an existing project\'s conventions', 'ရှိပြီးသား Project တစ်ခု၏ Convention များကို လိုက်နာနိုင်သည်'],
      ['Complete a real or realistic open-source contribution', 'တကယ့် (သို့) တကယ့်နှင့်တူသော Open-source ပါဝင်ဆောင်ရွက်မှု တစ်ခု ပြီးမြောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'software-engineering-advanced-4': {
    whatItIs: t([
      'Software architecture patterns are proven, reusable solutions to common structural problems — like how to organize layers of an application or handle communication between services.',
      'Software Architecture Pattern များသည် Application တစ်ခု၏ Layer များကို မည်သို့ စုစည်းရမည် (သို့) Service များအကြား ဆက်သွယ်မှုကို မည်သို့ ကိုင်တွယ်ရမည် ကဲ့သို့ အများသုံး ဖွဲ့စည်းပုံဆိုင်ရာ ပြဿနာများအတွက် သက်သေပြပြီးသား၊ ပြန်လည်အသုံးပြုနိုင်သော ဖြေရှင်းချက်များ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Recognizing and applying established patterns means not reinventing solutions to problems the industry has already solved — and it gives engineers a shared vocabulary to discuss design.',
      'တည်ထောင်ပြီးသား Pattern များကို ဖော်ထုတ်ပြီး အသုံးချခြင်းက စက်မှုလုပ်ငန်းက ဖြေရှင်းပြီးသား ပြဿနာများအတွက် ဖြေရှင်းချက်များကို ထပ်မံ မတီထွင်ခြင်း ဖြစ်ပြီး Engineer များအား Design ကို ဆွေးနွေးရန် မျှဝေထားသော ဝေါဟာရ ပေးပါသည်။',
    ]),
    whereUsed: t([
      'Patterns like MVC, layered architecture, microservices, and event-driven design appear throughout production systems at every scale.',
      'MVC, Layered Architecture, Microservices, Event-driven Design ကဲ့သို့ Pattern များသည် Scale တိုင်းရှိ Production System များတွင် ပေါ်လာလေ့ရှိသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on System Design from earlier in this stage.',
      'ဤအရာသည် ဤအဆင့်ရှိ ယခင် System Design အပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Layered architecture (presentation/logic/data)', 'Layered Architecture (Presentation/Logic/Data)'],
      ['MVC (Model-View-Controller)', 'MVC (Model-View-Controller)'],
      ['Monolith vs microservices', 'Monolith နှင့် Microservices'],
      ['Event-driven architecture basics', 'Event-driven Architecture အခြေခံ'],
    ]),
    steps: [
      step(
        ['Understand layered architecture and MVC', 'Layered Architecture နှင့် MVC နားလည်ခြင်း'],
        [
          ['Separating presentation, business logic, and data access', 'Presentation, Business Logic, Data Access ကို ခွဲခြားခြင်း'],
          ['Why separating concerns makes code easier to change safely', 'Concern များ ခွဲခြားခြင်းက Code ကို ဘေးကင်းစွာ ပြောင်းလဲရန် ဘာကြောင့် ပိုလွယ်ကူစေသနည်း'],
        ],
        [
          ['Identify the layers in an application you have already built (even if not formally separated)', 'သင် တည်ဆောက်ပြီးသား Application တစ်ခုရှိ Layer များကို ဖော်ထုတ်ပါ (တရားဝင် မခွဲခြားထားလျှင်ပင်)'],
        ],
      ),
      step(
        ['Compare monolith and microservices trade-offs', 'Monolith နှင့် Microservices Trade-off များ နှိုင်းယှဉ်ခြင်း'],
        [
          ['A monolith is simpler to build and deploy but can become hard to scale independently', 'Monolith တစ်ခုသည် တည်ဆောက်ရန်နှင့် Deploy လုပ်ရန် ပိုလွယ်ကူသော်လည်း သီးခြား Scale လုပ်ရန် ခက်ခဲလာနိုင်သည်'],
          ['Microservices allow independent scaling and deployment but add operational complexity', 'Microservices များက သီးခြား Scale လုပ်ခြင်းနှင့် Deploy လုပ်ခြင်းကို ခွင့်ပြုသော်လည်း Operational ရှုပ်ထွေးမှု ပေါင်းထည့်သည်'],
        ],
        [
          ['Argue both sides: when would you choose a monolith, and when microservices, for a given scenario?', 'ဘက်နှစ်ဘက်ကို ငြင်းခုံပါ — ပေးထားသော အခြေအနေတစ်ခုအတွက် Monolith ကို ဘယ်တော့ ရွေးမလဲ၊ Microservices ကို ဘယ်တော့ ရွေးမလဲ?'],
        ],
      ),
    ],
    build: t([
      'Take a moderately complex idea and design it two ways — once as a layered monolith, once as a small set of services — and write down the trade-offs of each.',
      'အလယ်အလတ် ရှုပ်ထွေးသော Idea တစ်ခုကို ယူပြီး Design နှစ်နည်းလုပ်ပါ — Layered Monolith တစ်ခုအနေနှင့် တစ်ကြိမ်၊ Service အစုအဝေးသေးငယ်တစ်ခုအနေနှင့် တစ်ကြိမ် — ပြီးလျှင် တစ်ခုစီ၏ Trade-off များကို မှတ်တမ်းတင်ပါ။',
    ]),
    verify: t([
      'Could you look at an existing application and identify which architectural pattern(s) it follows, and why they might have been chosen?',
      'ရှိပြီးသား Application တစ်ခုကို ကြည့်ပြီး ၎င်းလိုက်နာသော Architectural Pattern(s) ကို ဖော်ထုတ်ပြီး ဘာကြောင့် ရွေးချယ်ခဲ့နိုင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn patterns from real systems, not just diagrams — read how actual open-source projects are structured.', 'Diagram များသာမက တကယ့် System များမှ Pattern များကို လေ့လာပါ — Open-source Project အစစ်များ မည်သို့ ဖွဲ့စည်းထားသည်ကို ဖတ်ပါ။'],
      ['Do not adopt microservices just because it sounds advanced — most small projects are better off as a well-organized monolith.', 'အဆင့်မြင့်ဟန်ရှိသောကြောင့်သာ Microservices ကို မလက်ခံပါနှင့် — Project သေးသေးများသည် ကောင်းစွာ စုစည်းထားသော Monolith တစ်ခုဖြစ်ခြင်းက ပိုကောင်းလေ့ရှိသည်။'],
    ]),
    commonMistakes: list([
      ['Adopting a complex pattern (like microservices) for a project that does not need that scale.', 'ထို Scale မလိုအပ်သော Project တစ်ခုအတွက် ရှုပ်ထွေးသော Pattern (Microservices ကဲ့သို့) ကို လက်ခံခြင်း။'],
      ['Mixing presentation, logic, and data access code together with no clear separation.', 'Presentation, Logic, Data Access Code များကို ရှင်းလင်းသော ခွဲခြားမှုမရှိဘဲ ရောနှောထားခြင်း။'],
    ]),
    practiceTasks: tasks('software-engineering-advanced-4', [
      ['Identify the layers in an existing project', 'ရှိပြီးသား Project တစ်ခုရှိ Layer များ ဖော်ထုတ်ပါ'],
      ['Design the same idea as a monolith and as services', 'Idea တူတစ်ခုကို Monolith အနေနှင့်နှင့် Services အနေနှင့် Design ဆွဲပါ'],
      ['Write down the trade-offs of each approach', 'နည်းလမ်းတစ်ခုစီ၏ Trade-off များကို မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain layered architecture and MVC', 'Layered Architecture နှင့် MVC ကို ရှင်းပြနိုင်သည်'],
      ['Compare monolith and microservices trade-offs', 'Monolith နှင့် Microservices Trade-off များ နှိုင်းယှဉ်နိုင်သည်'],
      ['Identify architectural patterns in an existing system', 'ရှိပြီးသား System တစ်ခုရှိ Architectural Pattern များ ဖော်ထုတ်နိုင်သည်'],
      ['Choose a pattern appropriate to a given scenario', 'ပေးထားသော အခြေအနေတစ်ခုနှင့် သင့်လျော်သော Pattern တစ်ခု ရွေးချယ်နိုင်သည်'],
    ]),
    resources: [],
  },
}
