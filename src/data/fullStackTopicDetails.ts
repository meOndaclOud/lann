import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Full-Stack Development topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const fullStackTopicDetails: Record<string, TopicDetail> = {
  'full-stack-development-beginner-1': {
    whatItIs: t([
      'HTML structures the content of a web page; CSS controls how that content looks — layout, color, spacing, and style.',
      'HTML သည် Web Page ၏ Content ကို ဖွဲ့စည်းပေးပြီး CSS သည် ထို Content ၏ အသွင်အပြင် — Layout, Color, Spacing, Style ကို ထိန်းချုပ်ပေးသည်။',
    ]),
    whyItMatters: t([
      'Every single website, no matter what framework sits on top, is ultimately rendered as HTML and CSS in the browser — there is no skipping this foundation.',
      'Website တိုင်းသည် ဘယ် Framework အပေါ်မှာရှိနေစေ Browser ထဲတွင် နောက်ဆုံးတွင် HTML နှင့် CSS အဖြစ် Render ဖြစ်လာသည် — ဤအခြေခံကို ကျော်၍မရပါ။',
    ]),
    whereUsed: t([
      'Present in every web page ever built, from the simplest landing page to the most complex web application.',
      'တည်ဆောက်ခဲ့ဖူးသော Web Page ရိုးရှင်းဆုံး Landing Page မှ ရှုပ်ထွေးဆုံး Web Application အထိ ရှိနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['HTML tags and document structure', 'HTML Tag များနှင့် Document ဖွဲ့စည်းပုံ'],
      ['Semantic HTML', 'Semantic HTML'],
      ['CSS selectors', 'CSS Selector များ'],
      ['The box model', 'Box Model'],
      ['Flexbox basics', 'Flexbox အခြေခံ'],
    ]),
    steps: [
      step(
        ['Structure a page with semantic HTML', 'Semantic HTML ဖြင့် Page တစ်ခု ဖွဲ့စည်းခြင်း'],
        [
          ['Headings, paragraphs, lists, links, and images', 'Headings, Paragraphs, Lists, Links, Images'],
          ['Semantic tags (header, nav, main, footer) vs generic divs', 'Semantic Tag များ (header, nav, main, footer) နှင့် Generic div များ'],
        ],
        [
          ['Build a simple personal profile page using only semantic HTML, no CSS yet', 'CSS မပါဘဲ Semantic HTML ကိုသာ သုံး၍ ကိုယ်ရေးအကျဉ်းချုပ် Page ရိုးရှင်း တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Style with CSS and the box model', 'CSS နှင့် Box Model ဖြင့် Style ချခြင်း'],
        [
          ['Selectors: element, class, and id', 'Selector များ — Element, Class, ID'],
          ['Margin, border, padding, and content', 'Margin, Border, Padding, Content'],
        ],
        [
          ['Style your profile page with colors, spacing, and borders', 'သင့် Profile Page ကို Color, Spacing, Border များဖြင့် Style ချပါ'],
        ],
      ),
      step(
        ['Lay out a page with Flexbox', 'Flexbox ဖြင့် Page ကို Layout ချခြင်း'],
        [
          ['flex-direction, justify-content, align-items', 'flex-direction, justify-content, align-items'],
          ['Building a simple row/column layout', 'Row/Column Layout ရိုးရှင်း တည်ဆောက်ခြင်း'],
        ],
        [
          ['Rebuild your page\'s layout using Flexbox instead of default block layout', 'သင့် Page Layout ကို Default Block Layout အစား Flexbox သုံး၍ ပြန်တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a complete single-page personal portfolio using only HTML and CSS: a header, an about section, a projects section, and a footer, styled and laid out with Flexbox.',
      'HTML နှင့် CSS ကိုသာ သုံး၍ Portfolio Page တစ်ခုတည်း ပြီးပြည့်စုံစွာ တည်ဆောက်ပါ — Header, About Section, Projects Section, Footer တို့ကို Flexbox ဖြင့် Style ချပြီး Layout ချပါ။',
    ]),
    verify: t([
      'Could you explain why using a `<div>` for everything instead of semantic tags makes a page harder to maintain and less accessible?',
      'အားလုံးအတွက် Semantic Tag များအစား `<div>` သုံးခြင်းက Page ကို ဘာကြောင့် ထိန်းသိမ်းရခက်ပြီး Accessibility နည်းစေသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use your browser\'s developer tools to inspect and experiment with CSS live.', 'CSS ကို Live စမ်းသပ်ကြည့်ရန် သင့် Browser ၏ Developer Tools ကို သုံးပါ။'],
      ['Prefer semantic tags over generic divs whenever one fits.', 'သင့်လျော်သည့်အခါတိုင်း Generic div များထက် Semantic Tag များကို ပိုနှစ်သက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Using tables or divs for layout instead of proper CSS layout tools.', 'မှန်ကန်သော CSS Layout Tool များအစား Layout အတွက် Table (သို့) div များ သုံးခြင်း။'],
      ['Not testing how a page looks on different screen sizes.', 'Screen Size မတူညီသည်များတွင် Page မည်သို့ ပုံပေါ်သည်ကို မစမ်းသပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-beginner-1', [
      ['Build a page using only semantic HTML', 'Semantic HTML ကိုသာ သုံး၍ Page တစ်ခု တည်ဆောက်ပါ'],
      ['Style it with CSS selectors and the box model', 'CSS Selector နှင့် Box Model ဖြင့် Style ချပါ'],
      ['Lay it out with Flexbox', 'Flexbox ဖြင့် Layout ချပါ'],
      ['Build the full portfolio page project', 'Portfolio Page Project အပြည့်အစုံ တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Write semantic HTML', 'Semantic HTML ရေးနိုင်သည်'],
      ['Style elements with CSS selectors', 'CSS Selector များဖြင့် Element များ Style ချနိုင်သည်'],
      ['Understand and use the box model', 'Box Model ကို နားလည်ပြီး သုံးနိုင်သည်'],
      ['Lay out a page with Flexbox', 'Flexbox ဖြင့် Page တစ်ခုကို Layout ချနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-beginner-2': {
    whatItIs: t([
      'JavaScript is the programming language that runs in the browser and makes web pages interactive — responding to clicks, updating content, and more.',
      'JavaScript သည် Browser ထဲတွင် Run ပြီး Web Page များကို Interactive ဖြစ်စေသော Programming Language ဖြစ်သည် — Click များကို တုံ့ပြန်ခြင်း၊ Content Update လုပ်ခြင်းစသည်ဖြင့်။',
    ]),
    whyItMatters: t([
      'HTML and CSS alone are static — JavaScript is what turns a page into an application, and it is the one language that runs natively in every browser.',
      'HTML နှင့် CSS တစ်ခုတည်းသည် Static ဖြစ်သည် — JavaScript က Page တစ်ခုကို Application တစ်ခုအဖြစ် ပြောင်းပေးပြီး Browser တိုင်းတွင် Native ဖြစ်စွာ Run သော Language တစ်ခုတည်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Runs in every web browser and, through Node.js, on servers too — one of the most widely used programming languages in the world.',
      'Web Browser တိုင်းတွင် Run ပြီး Node.js မှတစ်ဆင့် Server များတွင်လည်း Run သည် — ကမ္ဘာပေါ်တွင် အသုံးအများဆုံး Programming Language များထဲမှ တစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Basic HTML/CSS knowledge from the previous topic is assumed, since most JavaScript here interacts with a page.',
      'JavaScript အများစုသည် Page တစ်ခုနှင့် Interact ဖြစ်သောကြောင့် ယခင် Topic မှ HTML/CSS အခြေခံ အသိပညာကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Variables, functions, and conditionals in JavaScript', 'JavaScript ရှိ Variables, Functions, Conditionals'],
      ['Arrays and objects', 'Arrays နှင့် Objects'],
      ['The DOM', 'DOM'],
      ['Event listeners', 'Event Listener များ'],
    ]),
    steps: [
      step(
        ['Learn core JavaScript syntax', 'အဓိက JavaScript Syntax လေ့လာခြင်း'],
        [
          ['Variables (let/const), functions, and conditionals', 'Variables (let/const), Functions, Conditionals'],
          ['Arrays and objects for structured data', 'ဖွဲ့စည်းထားသော Data အတွက် Arrays နှင့် Objects'],
        ],
        [
          ['Write a function that filters an array of objects by a property', 'Property တစ်ခုဖြင့် Object Array ကို Filter လုပ်သော Function တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Manipulate the DOM', 'DOM ကို ပြောင်းလဲခြင်း'],
        [
          ['Selecting elements (querySelector)', 'Element များ ရွေးချယ်ခြင်း (querySelector)'],
          ['Changing text, styles, and attributes with JavaScript', 'JavaScript ဖြင့် Text, Style, Attribute များ ပြောင်းလဲခြင်း'],
        ],
        [
          ['Write JavaScript that changes the text and color of an element on the page', 'Page ပေါ်ရှိ Element တစ်ခု၏ Text နှင့် Color ကို ပြောင်းလဲသော JavaScript ရေးပါ'],
        ],
      ),
      step(
        ['Respond to user interaction with events', 'Event များဖြင့် User Interaction ကို တုံ့ပြန်ခြင်း'],
        [
          ['addEventListener for clicks, input, and form submission', 'Click, Input, Form Submission များအတွက် addEventListener'],
        ],
        [
          ['Build a button that toggles a piece of content when clicked', 'Click လုပ်လိုက်သည့်အခါ Content တစ်ခုကို Toggle လုပ်သော Button တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add JavaScript to your HTML/CSS portfolio page from the previous topic: an interactive element like a mobile navigation toggle or a "show more" button.',
      'ယခင် Topic မှ သင့် HTML/CSS Portfolio Page သို့ JavaScript ထည့်ပါ — Mobile Navigation Toggle (သို့) "show more" Button ကဲ့သို့ Interactive Element တစ်ခု။',
    ]),
    verify: t([
      'Could you write JavaScript that selects an element, listens for a click, and changes something on the page in response?',
      'Element တစ်ခုကို ရွေးချယ်၍ Click ကို နားထောင်ပြီး Page ပေါ်ရှိ တစ်ခုခုကို တုံ့ပြန်၍ ပြောင်းလဲသော JavaScript ရေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use `console.log` liberally while learning to see what your code is actually doing.', 'သင့် Code တကယ်ဘာလုပ်နေသည်ကို မြင်ရန် လေ့လာနေစဉ် `console.log` ကို လွတ်လပ်စွာ သုံးပါ။'],
      ['Read the browser console for errors — it usually tells you exactly what went wrong.', 'ဘာမှားသည်ကို အတိအကျ ပြောပြလေ့ရှိသော Browser Console ကို Error များအတွက် ဖတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to select an element before the page has finished loading.', 'Page Load မပြီးမီ Element တစ်ခုကို ရွေးချယ်ရန် ကြိုးစားခြင်း။'],
      ['Writing JavaScript that only works for one specific element instead of being reusable.', 'ပြန်လည်အသုံးပြု၍မရဘဲ သီးခြား Element တစ်ခုအတွက်သာ အလုပ်လုပ်သော JavaScript ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-beginner-2', [
      ['Write functions that work with arrays and objects', 'Arrays နှင့် Objects ဖြင့် အလုပ်လုပ်သော Functions များ ရေးပါ'],
      ['Select and modify DOM elements', 'DOM Element များ ရွေးချယ်ပြီး ပြင်ဆင်ပါ'],
      ['Add a click event listener', 'Click Event Listener တစ်ခု ထည့်ပါ'],
      ['Add an interactive element to your portfolio page', 'သင့် Portfolio Page သို့ Interactive Element တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Write basic JavaScript with variables, functions, and conditionals', 'Variables, Functions, Conditionals ပါသော အခြေခံ JavaScript ရေးနိုင်သည်'],
      ['Select and manipulate DOM elements', 'DOM Element များ ရွေးချယ်ပြီး ပြောင်းလဲနိုင်သည်'],
      ['Handle click and input events', 'Click နှင့် Input Event များ ကိုင်တွယ်နိုင်သည်'],
      ['Build a small interactive feature', 'Interactive Feature သေးငယ်တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-beginner-3': {
    whatItIs: t([
      'Command line and Git basics cover using the terminal to run tools and using Git to track and share your code changes.',
      'Command Line နှင့် Git အခြေခံသည် Tool များ Run ရန် Terminal သုံးခြင်းနှင့် Code ပြောင်းလဲမှုများကို Track လုပ်ပြီး မျှဝေရန် Git သုံးခြင်း ပါဝင်သည်။',
    ]),
    whyItMatters: t([
      'Every modern web development workflow — installing packages, running a dev server, deploying — happens through the command line, and Git is how that work is saved and shared.',
      'ခေတ်သစ် Web Development Workflow တိုင်း — Package များ Install လုပ်ခြင်း၊ Dev Server Run ခြင်း၊ Deploy လုပ်ခြင်း — Command Line မှတစ်ဆင့် ဖြစ်ပျက်ပြီး Git သည် ထိုအလုပ်ကို သိမ်းဆည်းပြီး မျှဝေသောနည်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used on every single web development project, whether solo or on a team.',
      'ကိုယ်တိုင်ဖြစ်စေ၊ အဖွဲ့ဖြင့်ဖြစ်စေ Web Development Project တိုင်းတွင် အသုံးပြုသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Navigating folders from the terminal', 'Terminal မှ Folder များ သွားလာခြင်း'],
      ['Running npm/node commands', 'npm/node Command များ Run ခြင်း'],
      ['git init, add, commit, push, pull', 'git init, add, commit, push, pull'],
      ['Branches', 'Branch များ'],
    ]),
    steps: [
      step(
        ['Use the terminal for a web project', 'Web Project တစ်ခုအတွက် Terminal သုံးခြင်း'],
        [
          ['Navigating into a project folder and running npm commands', 'Project Folder ထဲသို့ ဝင်ပြီး npm Command များ Run ခြင်း'],
          ['Installing and running a local dev server', 'Local Dev Server Install လုပ်ပြီး Run ခြင်း'],
        ],
        [
          ['Create a new project folder and run a local dev server from the terminal', 'Project Folder အသစ်တစ်ခု ဖန်တီးပြီး Terminal မှ Local Dev Server Run ပါ'],
        ],
      ),
      step(
        ['Track your project with Git', 'သင့် Project ကို Git ဖြင့် Track လုပ်ခြင်း'],
        [
          ['Initializing a repo and making commits', 'Repo Initialize လုပ်ပြီး Commit များ လုပ်ခြင်း'],
          ['Pushing to a remote repository like GitHub', 'GitHub ကဲ့သို့ Remote Repository သို့ Push လုပ်ခြင်း'],
        ],
        [
          ['Put your portfolio page project under Git and push it to a remote repository', 'သင့် Portfolio Page Project ကို Git အောက်တွင် ထားပြီး Remote Repository သို့ Push လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Set up a new web project from scratch entirely through the command line — folder, npm init, Git init, first commit, and push to a remote repository.',
      'Web Project အသစ်တစ်ခုကို Command Line မှတစ်ဆင့်တည်း အစမှ တည်ဆောက်ပါ — Folder, npm init, Git init, Commit ပထမဆုံးနှင့် Remote Repository သို့ Push။',
    ]),
    verify: t([
      'Could you set up a brand-new project, track it with Git, and push it to GitHub without looking anything up?',
      'Project အသစ်တစ်ခုကို တစ်ခုမှ ရှာမကြည့်ဘဲ Setup လုပ်ပြီး Git ဖြင့် Track လုပ်ကာ GitHub သို့ Push လုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Commit early and often, even for small changes.', 'ပြောင်းလဲမှု သေးငယ်များအတွက်ပင် စောစီးစွာနှင့် မကြာခဏ Commit လုပ်ပါ။'],
      ['Add a .gitignore before your first commit so you never accidentally commit node_modules.', 'node_modules ကို မတော်တဆ Commit မလုပ်မိအောင် ပထမဆုံး Commit မလုပ်မီ .gitignore ထည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Committing the node_modules folder to Git.', 'node_modules Folder ကို Git သို့ Commit လုပ်ခြင်း။'],
      ['Never pushing to a remote, so work only exists on one machine.', 'Remote သို့ ဘယ်တော့မှ Push မလုပ်ဘဲ Machine တစ်လုံးတည်းတွင်သာ အလုပ် ရှိနေခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-beginner-3', [
      ['Run a local dev server from the terminal', 'Terminal မှ Local Dev Server Run ပါ'],
      ['Initialize Git and make several commits', 'Git Initialize လုပ်ပြီး Commit များစွာ လုပ်ပါ'],
      ['Add a proper .gitignore file', 'သင့်လျော်သော .gitignore File တစ်ခု ထည့်ပါ'],
      ['Push a project to a remote repository', 'Project တစ်ခုကို Remote Repository သို့ Push လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Navigate and run commands from the terminal', 'Terminal မှ သွားလာပြီး Command များ Run နိုင်သည်'],
      ['Track a project with Git commits', 'Git Commit များဖြင့် Project တစ်ခုကို Track လုပ်နိုင်သည်'],
      ['Use a .gitignore file correctly', '.gitignore File ကို မှန်ကန်စွာ သုံးနိုင်သည်'],
      ['Push and pull from a remote repository', 'Remote Repository သို့ Push/Pull လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-beginner-4': {
    whatItIs: t([
      'Responsive layout means a web page automatically adapts its appearance to fit different screen sizes — phones, tablets, and desktops.',
      'Responsive Layout ဆိုသည်မှာ Web Page တစ်ခု၏ အသွင်အပြင်သည် Screen Size မတူညီသော Phone, Tablet, Desktop များနှင့် အလိုအလျောက် ကိုက်ညီအောင် ချိန်ညှိပေးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'The majority of web traffic today comes from mobile devices — a page that only looks good on desktop is broken for most real users.',
      'ယနေ့ Web Traffic အများစုသည် Mobile Device များမှ လာသည် — Desktop တွင်သာ ကောင်းမွန်စွာ ပုံပေါ်သော Page တစ်ခုသည် တကယ့် User အများစုအတွက် ပျက်နေသည်ဟု ဆိုနိုင်သည်။',
    ]),
    whereUsed: t([
      'Expected on every professional website and web application today, regardless of industry.',
      'ယနေ့ စက်မှုလုပ်ငန်း မည်သည်ကိုမဆို Professional Website နှင့် Web Application တိုင်းတွင် မျှော်လင့်ထားသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on the box model and Flexbox from the first Beginner topic.',
      'ဤအရာသည် ပထမဆုံး Beginner Topic မှ Box Model နှင့် Flexbox အပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Media queries', 'Media Queries'],
      ['Mobile-first design', 'Mobile-first Design'],
      ['Relative units (%, rem, vw/vh)', 'Relative Unit များ (%, rem, vw/vh)'],
      ['CSS Grid basics', 'CSS Grid အခြေခံ'],
    ]),
    steps: [
      step(
        ['Adapt layouts with media queries', 'Media Queries ဖြင့် Layout များ ချိန်ညှိခြင်း'],
        [
          ['Writing a media query that changes styles below a certain width', 'အကျယ်တစ်ခုအောက်တွင် Style များ ပြောင်းလဲသော Media Query ရေးခြင်း'],
          ['Mobile-first vs desktop-first approaches', 'Mobile-first နှင့် Desktop-first ချဉ်းကပ်နည်းများ'],
        ],
        [
          ['Make your portfolio page\'s layout stack vertically on narrow screens', 'သင့် Portfolio Page Layout ကို Screen ကျဉ်းသည်များတွင် ဒေါင်လိုက် စီစေပါ'],
        ],
      ),
      step(
        ['Use relative units instead of fixed pixels', 'Fixed Pixel များအစား Relative Unit များ သုံးခြင်း'],
        [
          ['%, rem, and vw/vh and when to use each', '%, rem, vw/vh နှင့် တစ်ခုစီကို ဘယ်အချိန်သုံးရမည်ကို'],
        ],
        [
          ['Convert a fixed-pixel layout to use relative units', 'Fixed-pixel Layout တစ်ခုကို Relative Unit များ သုံးရန် ပြောင်းပါ'],
        ],
      ),
    ],
    build: t([
      'Make your existing portfolio page fully responsive: test and fix its layout at phone, tablet, and desktop widths.',
      'သင့် ရှိပြီးသား Portfolio Page ကို အပြည့်အစုံ Responsive ဖြစ်စေပါ — Phone, Tablet, Desktop အကျယ်များတွင် Layout ကို Test လုပ်ပြီး ပြင်ဆင်ပါ။',
    ]),
    verify: t([
      'Does your page look intentional and usable at 390px width, not just shrunk and broken?',
      'သင့် Page သည် 390px အကျယ်တွင် ကျုံ့ပြီး ပျက်နေခြင်းမဟုတ်ဘဲ ရည်ရွယ်ထားသလို ကောင်းမွန်စွာ အသုံးပြုနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Design and test mobile-first — it is easier to add complexity for larger screens than to remove it.', 'Mobile-first ဒီဇိုင်းရေးပြီး Test လုပ်ပါ — Screen ကြီးများအတွက် ရှုပ်ထွေးမှု ထပ်ထည့်ခြင်းက ဖယ်ရှားခြင်းထက် ပိုလွယ်ကူသည်။'],
      ['Actually resize your browser window while developing instead of only checking at the end.', 'အဆုံးတွင်သာ မစစ်ဆေးဘဲ Develop လုပ်နေစဉ် သင့် Browser Window ကို တကယ် Resize လုပ်ကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Only testing on desktop and assuming mobile will "just work".', 'Desktop တွင်သာ Test လုပ်ပြီး Mobile က "အလိုလို အလုပ်ဖြစ်လိမ့်မယ်" ဟု ယူဆခြင်း။'],
      ['Using fixed pixel widths everywhere, causing horizontal overflow on small screens.', 'နေရာတိုင်းတွင် Fixed Pixel Width များ သုံးခြင်းက Screen သေးသည်များတွင် Horizontal Overflow ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('full-stack-development-beginner-4', [
      ['Write a media query that changes the layout', 'Layout ပြောင်းလဲသော Media Query တစ်ခု ရေးပါ'],
      ['Convert fixed units to relative units', 'Fixed Unit များကို Relative Unit များသို့ ပြောင်းပါ'],
      ['Test and fix your page at three screen widths', 'Screen အကျယ်သုံးမျိုးတွင် သင့် Page ကို Test လုပ်ပြီး ပြင်ဆင်ပါ'],
    ]),
    completionChecklist: list([
      ['Write media queries to adapt layout', 'Layout ချိန်ညှိရန် Media Query များ ရေးနိုင်သည်'],
      ['Use relative units appropriately', 'Relative Unit များကို သင့်လျော်စွာ သုံးနိုင်သည်'],
      ['Test a page across multiple screen widths', 'Screen အကျယ်များစွာတွင် Page တစ်ခုကို Test လုပ်နိုင်သည်'],
      ['Avoid horizontal overflow on small screens', 'Screen သေးသည်များတွင် Horizontal Overflow ကို ရှောင်ရှားနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-core-1': {
    whatItIs: t([
      'A front-end framework like React provides tools and patterns for building complex, interactive user interfaces out of reusable components.',
      'React ကဲ့သို့ Front-end Framework တစ်ခုသည် ရှုပ်ထွေး၍ Interactive ဖြစ်သော User Interface များကို ပြန်လည်အသုံးပြုနိုင်သော Component များမှ တည်ဆောက်ရန် Tool များနှင့် Pattern များ ပေးသည်။',
    ]),
    whyItMatters: t([
      'Plain JavaScript becomes unwieldy for anything beyond simple interactivity — frameworks like React are what most real-world production front-ends are built with today.',
      'ရိုးရှင်းသော Interactivity ကျော်လွန်သည့် မည်သည့်အရာအတွက်မဆို JavaScript ရိုးရိုးသည် ကိုင်တွယ်ရခက်လာသည် — React ကဲ့သို့ Framework များသည် ယနေ့ Production Front-end အများစု တည်ဆောက်ထားသော နည်းလမ်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used by an enormous share of production web applications, from startups to the largest tech companies.',
      'Startup များမှ Tech Company အကြီးဆုံးများအထိ Production Web Application အလွန်များစွာက သုံးကြသည်။',
    ]),
    prerequisiteNote: t([
      'Solid JavaScript fundamentals (functions, arrays/objects, the DOM) from the Beginner stage are required before this.',
      'ဤအရာမတိုင်မီ Beginner အဆင့်မှ ခိုင်မာသော JavaScript အခြေခံများ (Functions, Arrays/Objects, DOM) လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Components', 'Components'],
      ['JSX', 'JSX'],
      ['Props', 'Props'],
      ['State (useState)', 'State (useState)'],
      ['Rendering lists and handling events', 'Lists Render ခြင်းနှင့် Event ကိုင်တွယ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Build your first components', 'ပထမဆုံး Components များ တည်ဆောက်ခြင်း'],
        [
          ['A component is a reusable piece of UI written as a function', 'Component တစ်ခုသည် Function တစ်ခုအဖြစ် ရေးထားသော ပြန်လည်အသုံးပြုနိုင်သော UI အစိတ်အပိုင်း ဖြစ်သည်'],
          ['Props pass data from a parent component into a child', 'Props များသည် Data ကို Parent Component မှ Child သို့ ပို့ဆောင်ပေးသည်'],
        ],
        [
          ['Build a `Card` component that accepts a title and description as props', 'Title နှင့် Description ကို Props အဖြစ် လက်ခံသော `Card` Component တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Manage state and handle events', 'State စီမံပြီး Event များ ကိုင်တွယ်ခြင်း'],
        [
          ['useState for values that change over time', 'အချိန်နှင့်အမျှ ပြောင်းလဲသော Value များအတွက် useState'],
          ['Updating state in response to user events', 'User Event များကို တုံ့ပြန်ရာတွင် State Update လုပ်ခြင်း'],
        ],
        [
          ['Build a counter component with increment/decrement buttons', 'Increment/Decrement Button များပါသော Counter Component တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Render dynamic lists', 'Dynamic Lists များ Render လုပ်ခြင်း'],
        [
          ['Using .map() to render a list of components', 'Component List တစ်ခု Render လုပ်ရန် .map() သုံးခြင်း'],
          ['Why each item in a list needs a unique key', 'List ရှိ Item တစ်ခုစီသည် ထူးခြားသော Key ဘာကြောင့် လိုအပ်သနည်း'],
        ],
        [
          ['Render a list of Card components from an array of data', 'Data Array တစ်ခုမှ Card Component List တစ်ခု Render လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Rebuild your HTML/CSS/JS portfolio page as a React application with at least three reusable components and one piece of interactive state.',
      'သင့် HTML/CSS/JS Portfolio Page ကို ပြန်လည်အသုံးပြုနိုင်သော Component အနည်းဆုံး သုံးခုနှင့် Interactive State တစ်ခုပါသော React Application တစ်ခုအဖြစ် ပြန်တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you explain the difference between props and state, and give an example of when to use each?',
      'Props နှင့် State ကြား ကွာခြားချက်ကို ရှင်းပြပြီး တစ်ခုစီကို ဘယ်အချိန်သုံးရမည် ဥပမာပေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep components small and focused on one job.', 'Component များကို သေးငယ်ပြီး တာဝန်တစ်ခုတည်းအပေါ် အာရုံစိုက်ထားပါ။'],
      ['Read React error messages carefully — they usually point directly to the problem.', 'React Error Message များကို သေချာစွာ ဖတ်ပါ — ၎င်းတို့သည် များသောအားဖြင့် ပြဿနာကို တိုက်ရိုက် ညွှန်ပြသည်။'],
    ]),
    commonMistakes: list([
      ['Forgetting unique keys when rendering lists, causing subtle bugs.', 'List များ Render လုပ်သည့်အခါ ထူးခြားသော Key များ မေ့ခြင်းက သိမ်မွေ့သော Bug များ ဖြစ်စေသည်။'],
      ['Mutating state directly instead of using the state setter function.', 'State Setter Function မသုံးဘဲ State ကို တိုက်ရိုက် Mutate လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-core-1', [
      ['Build a reusable component that accepts props', 'Props လက်ခံသော ပြန်လည်အသုံးပြုနိုင်သည့် Component တစ်ခု တည်ဆောက်ပါ'],
      ['Build a component with interactive state', 'Interactive State ပါသော Component တစ်ခု တည်ဆောက်ပါ'],
      ['Render a list of components from data', 'Data မှ Component List တစ်ခု Render လုပ်ပါ'],
      ['Rebuild your portfolio page in React', 'သင့် Portfolio Page ကို React တွင် ပြန်တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Build reusable components with props', 'Props ပါသော ပြန်လည်အသုံးပြုနိုင်သည့် Component များ တည်ဆောက်နိုင်သည်'],
      ['Manage state with useState', 'useState ဖြင့် State စီမံနိုင်သည်'],
      ['Render dynamic lists with proper keys', 'သင့်လျော်သော Key များဖြင့် Dynamic Lists Render လုပ်နိုင်သည်'],
      ['Build a small multi-component React app', 'Component များစွာပါသော React App သေးငယ်တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-core-2': {
    whatItIs: t([
      'Node.js lets you run JavaScript on a server instead of only in a browser, making it possible to build back-end applications with the same language as the front-end.',
      'Node.js က JavaScript ကို Browser ထဲတွင်သာမက Server ပေါ်တွင် Run နိုင်စေပြီး Front-end အတွက် သုံးသော Language တူတူဖြင့် Back-end Application များ တည်ဆောက်နိုင်စေသည်။',
    ]),
    whyItMatters: t([
      'Using JavaScript on both front-end and back-end reduces context-switching and lets a full-stack developer work across the entire application confidently.',
      'Front-end နှင့် Back-end နှစ်ခုစလုံးတွင် JavaScript သုံးခြင်းက Context-switching ကို လျှော့ချပြီး Full-stack Developer တစ်ဦးအား Application တစ်ခုလုံးတွင် ယုံကြည်စိတ်ချစွာ အလုပ်လုပ်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Powers the back end of a huge number of production web applications and APIs across the industry.',
      'စက်မှုလုပ်ငန်းတစ်လျှောက်ရှိ Production Web Application နှင့် API အများအပြား၏ Back End ကို ပံ့ပိုးပေးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Running a simple Node.js script', 'Node.js Script ရိုးရှင်း Run ခြင်း'],
      ['npm and package.json', 'npm နှင့် package.json'],
      ['A minimal web server (e.g. with Express)', 'Web Server အနည်းဆုံး (ဥပမာ Express ဖြင့်)'],
      ['Routes and request/response basics', 'Routes နှင့် Request/Response အခြေခံ'],
    ]),
    steps: [
      step(
        ['Run JavaScript outside the browser', 'Browser ပြင်ပတွင် JavaScript Run ခြင်း'],
        [
          ['Running a .js file with node', 'node ဖြင့် .js File တစ်ခု Run ခြင်း'],
          ['npm and package.json for managing dependencies', 'Dependency များ စီမံရန် npm နှင့် package.json'],
        ],
        [
          ['Write and run a small Node.js script that reads and processes data', 'Data ကို ဖတ်ပြီး Process လုပ်သော Node.js Script သေးငယ်တစ်ခု ရေးပြီး Run ပါ'],
        ],
      ),
      step(
        ['Build a minimal web server', 'Web Server အနည်းဆုံး တည်ဆောက်ခြင်း'],
        [
          ['Setting up a basic server with a framework like Express', 'Express ကဲ့သို့ Framework ဖြင့် အခြေခံ Server တစ်ခု တည်ဆောက်ခြင်း'],
          ['Defining routes that respond to requests', 'Request များကို တုံ့ပြန်သော Route များ သတ်မှတ်ခြင်း'],
        ],
        [
          ['Build a server with two routes that each return different data', 'Data မတူညီသည်ကို တစ်ခုစီ ပြန်ပေးသော Route နှစ်ခုပါသော Server တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small Node.js server with several routes that return structured JSON data — for example, a simple API for a list of books or tasks.',
      'ဖွဲ့စည်းထားသော JSON Data ပြန်ပေးသော Route များစွာပါသော Node.js Server သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ Book (သို့) Task List အတွက် API ရိုးရှင်း တစ်ခု။',
    ]),
    verify: t([
      'Could you explain what happens, step by step, from a browser sending a request to your server responding with data?',
      'Browser တစ်ခုမှ Request ပို့ခြင်းမှ သင့် Server က Data ဖြင့် တုံ့ပြန်ခြင်းအထိ အဆင့်ဆင့် ဖြစ်ပျက်ပုံကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Restart your dev server after major changes if hot-reload does not pick them up.', 'Hot-reload က မဖမ်းမိလျှင် အဓိက ပြောင်းလဲမှုများပြီးနောက် သင့် Dev Server ကို Restart လုပ်ပါ။'],
      ['Log incoming requests while learning to see exactly what your server receives.', 'သင့် Server ဘာလက်ခံရရှိသည်ကို အတိအကျ မြင်ရန် လေ့လာနေစဉ် ဝင်လာသော Request များကို Log ချပါ။'],
    ]),
    commonMistakes: list([
      ['Forgetting to send a response, leaving requests hanging forever.', 'Response ပို့ရန် မေ့ခြင်းက Request များကို ထာဝရ ခိုင်နေစေသည်။'],
      ['Not understanding the difference between the front-end and back-end running in different environments.', 'Front-end နှင့် Back-end သည် Environment မတူညီသည်များတွင် Run ကြောင်း ကွာခြားချက် နားမလည်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-core-2', [
      ['Run a Node.js script from the terminal', 'Terminal မှ Node.js Script တစ်ခု Run ပါ'],
      ['Set up a minimal Express server', 'Express Server အနည်းဆုံးတစ်ခု တည်ဆောက်ပါ'],
      ['Define two routes returning different data', 'Data မတူညီသည်ကို ပြန်ပေးသော Route နှစ်ခု သတ်မှတ်ပါ'],
      ['Build the small API project', 'API Project သေးငယ်တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Run JavaScript with Node.js', 'Node.js ဖြင့် JavaScript Run နိုင်သည်'],
      ['Manage dependencies with npm', 'npm ဖြင့် Dependency များ စီမံနိုင်သည်'],
      ['Build a minimal server with routes', 'Route များပါသော Server အနည်းဆုံးတစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Return structured JSON data from a route', 'Route တစ်ခုမှ ဖွဲ့စည်းထားသော JSON Data ပြန်ပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-core-3': {
    whatItIs: t([
      'REST APIs are a common convention for structuring how a client and server communicate over HTTP using predictable URLs and methods.',
      'REST API များသည် Client နှင့် Server အကြား ခန့်မှန်းနိုင်သော URL များနှင့် Method များ သုံး၍ HTTP ပေါ်တွင် ဆက်သွယ်ပုံကို ဖွဲ့စည်းရန် အများသုံး Convention တစ်ခု ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'REST is the most widely used API style on the web — understanding it lets you both consume other services\' APIs and design your own that other developers will understand instantly.',
      'REST သည် Web ပေါ်တွင် အသုံးအများဆုံး API Style ဖြစ်သည် — ၎င်းကို နားလည်ခြင်းက အခြား Service များ၏ API များကို သုံးနိုင်ရုံသာမက Developer တခြားများ ချက်ချင်း နားလည်နိုင်မည့် ကိုယ်ပိုင် API များ Design ဆွဲနိုင်စေသည်။',
    ]),
    whereUsed: t([
      'The dominant style behind most public and internal web APIs, from social media platforms to internal company tools.',
      'Social Media Platform များမှ ကုမ္ပဏီအတွင်းသုံး Tool များအထိ Public နှင့် Internal Web API အများစု၏ နောက်ကွယ်ရှိ လွှမ်းမိုးသော Style ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes comfort with the minimal Express server from the previous topic.',
      'ယခင် Topic မှ Express Server အနည်းဆုံးနှင့် ရင်းနှီးမှုကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Resources and URLs (e.g. /books, /books/:id)', 'Resources နှင့် URLs (ဥပမာ /books, /books/:id)'],
      ['HTTP methods mapped to actions (GET, POST, PUT, DELETE)', 'Action များနှင့် ကိုက်ညီသော HTTP Method များ (GET, POST, PUT, DELETE)'],
      ['Status codes', 'Status Code များ'],
      ['Request bodies and query parameters', 'Request Body များနှင့် Query Parameter များ'],
    ]),
    steps: [
      step(
        ['Design RESTful routes', 'RESTful Routes Design ဆွဲခြင်း'],
        [
          ['Naming resources with nouns, not verbs (/books, not /getBooks)', 'Resource များကို Verb မဟုတ်ဘဲ Noun ဖြင့် နာမည်ပေးခြင်း (/getBooks မဟုတ်ဘဲ /books)'],
          ['Mapping CRUD operations to HTTP methods', 'CRUD Operation များကို HTTP Method များနှင့် ကိုက်ညီအောင် ချိတ်ဆက်ခြင်း'],
        ],
        [
          ['Design (on paper) the routes for a REST API managing a list of tasks', 'Task List တစ်ခု Manage လုပ်သော REST API အတွက် Route များကို (စက္ကူပေါ်တွင်) Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Implement full CRUD', 'CRUD အပြည့်အစုံ အကောင်အထည်ဖော်ခြင်း'],
        [
          ['GET (list and single item), POST, PUT/PATCH, DELETE', 'GET (List နှင့် Item တစ်ခု), POST, PUT/PATCH, DELETE'],
          ['Returning appropriate status codes for each outcome', 'ရလဒ်တစ်ခုစီအတွက် သင့်လျော်သော Status Code များ ပြန်ပေးခြင်း'],
        ],
        [
          ['Implement a full CRUD API for tasks: create, read, update, delete', 'Task များအတွက် CRUD API အပြည့်အစုံ အကောင်အထည်ဖော်ပါ — Create, Read, Update, Delete'],
        ],
      ),
    ],
    build: t([
      'Build a complete REST API for a simple resource (tasks, notes, or similar) with all CRUD operations, proper status codes, and basic input validation.',
      'CRUD Operation အားလုံး၊ သင့်လျော်သော Status Code များနှင့် အခြေခံ Input Validation ပါသော Resource ရိုးရှင်းတစ်ခု (Tasks, Notes စသည်) အတွက် REST API အပြည့်အစုံ တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Given a new resource, could you design its REST routes correctly on your own, following convention?',
      'Resource အသစ်တစ်ခု ပေးလိုက်လျှင် Convention အတိုင်း ၎င်း၏ REST Route များကို ကိုယ်တိုင် မှန်ကန်စွာ Design ဆွဲနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use plural nouns for resource names (/tasks, not /task).', 'Resource နာမည်များအတွက် Plural Noun များ သုံးပါ (/task မဟုတ်ဘဲ /tasks)။'],
      ['Return the right status code — 201 for created, 404 for not found, etc.', 'မှန်ကန်သော Status Code ပြန်ပေးပါ — Created အတွက် 201, Not Found အတွက် 404 စသည်ဖြင့်။'],
    ]),
    commonMistakes: list([
      ['Using verbs in URLs (/getTasks, /createTask) instead of proper REST conventions.', 'မှန်ကန်သော REST Convention များအစား URL များတွင် Verb များ သုံးခြင်း (/getTasks, /createTask)။'],
      ['Returning 200 for every response, even errors.', 'Error များအတွက်ပင် Response တိုင်းအတွက် 200 ပြန်ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-core-3', [
      ['Design REST routes for a resource', 'Resource တစ်ခုအတွက် REST Route များ Design ဆွဲပါ'],
      ['Implement GET routes for a list and a single item', 'List နှင့် Item တစ်ခုအတွက် GET Route များ အကောင်အထည်ဖော်ပါ'],
      ['Implement POST, PUT, and DELETE routes', 'POST, PUT, DELETE Route များ အကောင်အထည်ဖော်ပါ'],
      ['Return correct status codes for each operation', 'Operation တစ်ခုစီအတွက် မှန်ကန်သော Status Code များ ပြန်ပေးပါ'],
    ]),
    completionChecklist: list([
      ['Design RESTful routes following convention', 'Convention အတိုင်း RESTful Route များ Design ဆွဲနိုင်သည်'],
      ['Implement full CRUD operations', 'CRUD Operation အပြည့်အစုံ အကောင်အထည်ဖော်နိုင်သည်'],
      ['Return appropriate status codes', 'သင့်လျော်သော Status Code များ ပြန်ပေးနိုင်သည်'],
      ['Validate basic input on write operations', 'Write Operation များတွင် အခြေခံ Input ကို Validate လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-core-4': {
    whatItIs: t([
      'Working with databases from a back-end application means connecting to a database, and reading/writing data from your API routes instead of storing everything in memory.',
      'Back-end Application မှ Database များနှင့် အလုပ်လုပ်ခြင်းဆိုသည်မှာ Database တစ်ခုသို့ ချိတ်ဆက်ပြီး အားလုံးကို Memory တွင် သိမ်းမည့်အစား သင့် API Route များမှ Data ဖတ်/ရေးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'An API that only stores data in memory forgets everything when it restarts — real applications need data to persist reliably, which is exactly what a database provides.',
      'Memory တွင်သာ Data သိမ်းသော API တစ်ခုသည် Restart ဖြစ်သည့်အခါ အားလုံးမေ့သွားသည် — တကယ့် Application များသည် Data ကို ယုံကြည်စိတ်ချစွာ တည်မြဲစေရန် လိုအပ်ပြီး Database တစ်ခုက ထိုအရာကို ပေးသည်။',
    ]),
    whereUsed: t([
      'Every production full-stack application connects to some form of database — SQL or NoSQL — to persist real data.',
      'Production Full-stack Application တိုင်းသည် တကယ့် Data ကို တည်မြဲစေရန် Database တစ်မျိုးမျိုး — SQL (သို့) NoSQL — သို့ ချိတ်ဆက်သည်။',
    ]),
    prerequisiteNote: t([
      'This connects your REST API from the previous topic to persistent storage.',
      'ဤအရာသည် ယခင် Topic မှ သင့် REST API ကို တည်မြဲသော Storage သို့ ချိတ်ဆက်ပေးသည်။',
    ]),
    firstSteps: list([
      ['Choosing a database (SQL vs NoSQL basics)', 'Database ရွေးချယ်ခြင်း (SQL vs NoSQL အခြေခံ)'],
      ['Connecting your server to a database', 'သင့် Server ကို Database သို့ ချိတ်ဆက်ခြင်း'],
      ['Basic queries from application code', 'Application Code မှ အခြေခံ Query များ'],
      ['Environment variables for connection details', 'Connection အသေးစိတ်များအတွက် Environment Variable များ'],
    ]),
    steps: [
      step(
        ['Connect a server to a database', 'Server တစ်ခုကို Database သို့ ချိတ်ဆက်ခြင်း'],
        [
          ['Storing connection details in environment variables, never hardcoded', 'Connection အသေးစိတ်များကို Hardcode မလုပ်ဘဲ Environment Variable များတွင် သိမ်းဆည်းခြင်း'],
          ['Confirming a successful connection before building on top of it', '၎င်းအပေါ်တွင် မတည်ဆောက်မီ ချိတ်ဆက်မှု အောင်မြင်ကြောင်း အတည်ပြုခြင်း'],
        ],
        [
          ['Connect your task API\'s server to a real database', 'သင့် Task API Server ကို Database အစစ်သို့ ချိတ်ဆက်ပါ'],
        ],
      ),
      step(
        ['Replace in-memory data with real queries', 'In-memory Data ကို Query အစစ်များဖြင့် အစားထိုးခြင်း'],
        [
          ['Reading data from the database in a GET route', 'GET Route တစ်ခုတွင် Database မှ Data ဖတ်ခြင်း'],
          ['Writing data in POST/PUT routes', 'POST/PUT Route များတွင် Data ရေးခြင်း'],
        ],
        [
          ['Update your task API so every route reads and writes to the real database instead of an in-memory array', 'Route တိုင်းသည် In-memory Array အစား Database အစစ်ကို ဖတ်/ရေးအောင် သင့် Task API ကို Update လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Convert your CRUD task API from the previous topic to use a real database instead of in-memory storage, confirming data survives a server restart.',
      'ယခင် Topic မှ သင့် CRUD Task API ကို In-memory Storage အစား Database အစစ်သုံးရန် ပြောင်းပါ၊ Server Restart ဖြစ်ပြီးနောက်တွင် Data ကျန်ရှိကြောင်း အတည်ပြုပါ။',
    ]),
    verify: t([
      'If you restart your server, does your data still exist? If not, you are still storing it only in memory.',
      'သင့် Server ကို Restart လုပ်လျှင် သင့် Data ကျန်ရှိနေဆဲလား? မကျန်ရှိလျှင် Memory တွင်သာ Data သိမ်းဆည်းနေဆဲ ဖြစ်သည်။',
    ]),
    tips: list([
      ['Never commit real database credentials to Git — use environment variables and a .env file.', 'Database Credential အစစ်များကို Git သို့ ဘယ်တော့မှ Commit မလုပ်ပါနှင့် — Environment Variable များနှင့် .env File သုံးပါ။'],
      ['Test your database connection separately before building routes on top of it.', 'Route များ မတည်ဆောက်မီ သင့် Database Connection ကို သီးသန့် Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Hardcoding database credentials directly in source code.', 'Database Credential များကို Source Code ထဲသို့ တိုက်ရိုက် Hardcode လုပ်ခြင်း။'],
      ['Not handling the case where a database query fails.', 'Database Query တစ်ခု Fail ဖြစ်သော အခြေအနေကို မကိုင်တွယ်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-core-4', [
      ['Connect a server to a real database', 'Server တစ်ခုကို Database အစစ်သို့ ချိတ်ဆက်ပါ'],
      ['Store connection details in environment variables', 'Connection အသေးစိတ်များကို Environment Variable များတွင် သိမ်းဆည်းပါ'],
      ['Replace in-memory reads with database reads', 'In-memory Read များကို Database Read များဖြင့် အစားထိုးပါ'],
      ['Replace in-memory writes with database writes', 'In-memory Write များကို Database Write များဖြင့် အစားထိုးပါ'],
    ]),
    completionChecklist: list([
      ['Connect an application to a database', 'Application တစ်ခုကို Database သို့ ချိတ်ဆက်နိုင်သည်'],
      ['Store credentials in environment variables', 'Credential များကို Environment Variable များတွင် သိမ်းဆည်းနိုင်သည်'],
      ['Read data from a database in an API route', 'API Route တစ်ခုတွင် Database မှ Data ဖတ်နိုင်သည်'],
      ['Write data to a database in an API route', 'API Route တစ်ခုတွင် Database သို့ Data ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-intermediate-1': {
    whatItIs: t([
      'Full-stack app architecture is the overall shape of how your front-end, back-end, and database fit and communicate together as one system.',
      'Full-stack App Architecture ဆိုသည်မှာ သင့် Front-end, Back-end, Database တို့သည် System တစ်ခုတည်းအဖြစ် မည်သို့ ဆက်စပ်နေပြီး ဆက်သွယ်နေသည်၏ ဖွဲ့စည်းပုံ တစ်ခုလုံး ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Individually working front-end, back-end, and database pieces do not automatically make a coherent application — clear architecture decisions prevent tangled, hard-to-maintain systems.',
      'Front-end, Back-end, Database အစိတ်အပိုင်းများ သီးခြားစီ အလုပ်လုပ်ခြင်းသည် ယုတ္တိရှိသော Application တစ်ခုကို အလိုအလျောက် မဖြစ်စေပါ — ရှင်းလင်းသော Architecture ဆုံးဖြတ်ချက်များက ရှုပ်ထွေး၍ ထိန်းသိမ်းရခက်သော System များကို ကာကွယ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Every real full-stack product — from a small side project to an enterprise application — needs a deliberate architecture, not an accidental one.',
      'Project ငယ်တစ်ခုမှ Enterprise Application အထိ တကယ့် Full-stack Product တိုင်းသည် မတော်တဆ ဖြစ်ပေါ်လာသော Architecture မဟုတ်ဘဲ ရည်ရွယ်ချက်ရှိသော Architecture တစ်ခု လိုအပ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Client-server communication flow', 'Client-server ဆက်သွယ်မှု စီးဆင်းပုံ'],
      ['Separating concerns (UI, business logic, data)', 'Concern များ ခွဲခြားခြင်း (UI, Business Logic, Data)'],
      ['Project folder structure for a full-stack app', 'Full-stack App တစ်ခုအတွက် Project Folder ဖွဲ့စည်းပုံ'],
      ['Environment configuration (dev vs production)', 'Environment Configuration (Dev vs Production)'],
    ]),
    steps: [
      step(
        ['Map out the full request/response flow', 'Request/Response စီးဆင်းမှု အပြည့်အစုံကို ရေးဆွဲခြင်း'],
        [
          ['From a user click, to a front-end request, to a back-end route, to a database query, and back', 'User Click တစ်ခုမှ Front-end Request, Back-end Route, Database Query နှင့် ပြန်လာသည်အထိ'],
        ],
        [
          ['Diagram the full flow for one feature in your task app, from click to database and back', 'သင့် Task App ရှိ Feature တစ်ခုအတွက် Click မှ Database အထိနှင့် ပြန်လာသည်အထိ Flow အပြည့်အစုံကို Diagram ဆွဲပါ'],
        ],
      ),
      step(
        ['Organize a full-stack project sensibly', 'Full-stack Project တစ်ခုကို ယုတ္တိရှိစွာ စီစဉ်ခြင်း'],
        [
          ['Separating front-end and back-end code clearly', 'Front-end နှင့် Back-end Code ကို ရှင်းလင်းစွာ ခွဲခြားခြင်း'],
          ['Keeping configuration separate from code (environment variables)', 'Configuration ကို Code မှ သီးသန့်ထားခြင်း (Environment Variable များ)'],
        ],
        [
          ['Reorganize your task app project into a clear front-end/back-end folder structure', 'သင့် Task App Project ကို ရှင်းလင်းသော Front-end/Back-end Folder ဖွဲ့စည်းပုံအဖြစ် ပြန်စီစဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Connect your React front-end to your task API back-end into one working full-stack application, with a clear, documented project structure.',
      'သင့် React Front-end ကို သင့် Task API Back-end သို့ ချိတ်ဆက်ပြီး ရှင်းလင်း၍ မှတ်တမ်းတင်ထားသော Project ဖွဲ့စည်းပုံဖြင့် အလုပ်လုပ်သော Full-stack Application တစ်ခုတည်း ဖြစ်စေပါ။',
    ]),
    verify: t([
      'Could you draw, from memory, the complete path a piece of data takes from your database to the user\'s screen?',
      'Data အပိုင်းအစတစ်ခု သင့် Database မှ User Screen အထိ သွားသော လမ်းကြောင်းအပြည့်အစုံကို မှတ်ဉာဏ်ထဲမှ ရေးဆွဲနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep the front-end and back-end loosely coupled — they should be able to change independently.', 'Front-end နှင့် Back-end ကို အလွယ်တကူ ချိတ်ဆက်ထားပါ — ၎င်းတို့သည် သီးခြားစီ ပြောင်းလဲနိုင်သင့်သည်။'],
      ['Document your architecture with a simple diagram — it helps you and anyone who joins later.', 'သင့် Architecture ကို ရိုးရှင်းသော Diagram ဖြင့် မှတ်တမ်းတင်ပါ — ၎င်းက သင့်ကိုယ်တိုင်နှင့် နောက်မှ ပါဝင်လာသူများအတွက် ကူညီပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Mixing front-end and back-end code together with no clear boundary.', 'ရှင်းလင်းသော နယ်နိမိတ်မရှိဘဲ Front-end နှင့် Back-end Code ကို ရောနှောထားခြင်း။'],
      ['Hardcoding the back-end URL in the front-end instead of using configuration.', 'Configuration မသုံးဘဲ Front-end တွင် Back-end URL ကို Hardcode လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-intermediate-1', [
      ['Diagram the full request/response flow for one feature', 'Feature တစ်ခုအတွက် Request/Response Flow အပြည့်အစုံကို Diagram ဆွဲပါ'],
      ['Organize the project into a clear folder structure', 'Project ကို ရှင်းလင်းသော Folder ဖွဲ့စည်းပုံအဖြစ် စီစဉ်ပါ'],
      ['Connect the front-end to the back-end API', 'Front-end ကို Back-end API သို့ ချိတ်ဆက်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain the full client-server-database flow', 'Client-server-database Flow အပြည့်အစုံကို ရှင်းပြနိုင်သည်'],
      ['Organize a project with clear separation of concerns', 'Concern များ ရှင်းလင်းစွာ ခွဲခြားထားသော Project တစ်ခု စီစဉ်နိုင်သည်'],
      ['Connect a front-end to a back-end API', 'Front-end တစ်ခုကို Back-end API သို့ ချိတ်ဆက်နိုင်သည်'],
      ['Separate configuration from code', 'Configuration ကို Code မှ ခွဲခြားနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-intermediate-2': {
    whatItIs: t([
      'Authentication verifies who a user is (login); authorization determines what that user is allowed to do once identified.',
      'Authentication က User တစ်ဦးသည် မည်သူဖြစ်သည်ကို အတည်ပြုပေးပြီး (Login) Authorization က ထို User ကို ဖော်ထုတ်ပြီးနောက် ဘာလုပ်ခွင့်ရှိသည်ကို ဆုံးဖြတ်ပေးသည်။',
    ]),
    whyItMatters: t([
      'Almost every real application needs to know who is using it and control access to sensitive data or actions — getting this wrong is one of the most common and damaging security failures.',
      'တကယ့် Application နီးပါးအားလုံးသည် ၎င်းကို မည်သူသုံးနေသည်ကို သိရန်နှင့် အရေးကြီးသော Data (သို့) Action များသို့ ဝင်ရောက်ခွင့်ကို ထိန်းချုပ်ရန် လိုအပ်သည် — ဤအရာကို မှားယွင်းခြင်းသည် အများဆုံးဖြစ်ပြီး ထိခိုက်နစ်နာစေနိုင်သော Security Failure များထဲမှ တစ်ခု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in nearly every application with user accounts — from social apps to banking systems to internal admin tools.',
      'User Account ရှိသော Application နီးပါးအားလုံးတွင် ရှိသည် — Social App များမှ Banking System, Internal Admin Tool များအထိ။',
    ]),
    prerequisiteNote: t([
      'Requires comfort with your REST API and database work from the Core stage.',
      'Core အဆင့်မှ သင့် REST API နှင့် Database အလုပ်ကို ရင်းနှီးထားရန် လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Password hashing', 'Password Hashing'],
      ['Sessions vs tokens (e.g. JWT)', 'Sessions နှင့် Tokens (ဥပမာ JWT)'],
      ['Protecting routes', 'Route များကို ကာကွယ်ခြင်း'],
      ['Role-based access basics', 'Role-based Access အခြေခံ'],
    ]),
    steps: [
      step(
        ['Implement secure login', 'လုံခြုံသော Login အကောင်အထည်ဖော်ခြင်း'],
        [
          ['Never storing plain-text passwords — always hash them', 'Plain-text Password များကို ဘယ်တော့မှ မသိမ်းပါနှင့် — အမြဲ Hash လုပ်ပါ'],
          ['Verifying a password against its stored hash on login', 'Login တွင် Password ကို သိမ်းထားသော Hash နှင့် စစ်ဆေးခြင်း'],
        ],
        [
          ['Implement a signup route that hashes and stores a password', 'Password ကို Hash လုပ်ပြီး သိမ်းဆည်းသော Signup Route တစ်ခု အကောင်အထည်ဖော်ပါ'],
          ['Implement a login route that verifies the password', 'Password ကို စစ်ဆေးသော Login Route တစ်ခု အကောင်အထည်ဖော်ပါ'],
        ],
      ),
      step(
        ['Protect routes with tokens', 'Token များဖြင့် Route များ ကာကွယ်ခြင်း'],
        [
          ['Issuing a token after successful login', 'Login အောင်မြင်ပြီးနောက် Token ထုတ်ပေးခြင်း'],
          ['Checking that token on protected routes before allowing access', 'ခွင့်ပြုမှု မပေးမီ Protected Route များတွင် ထို Token ကို စစ်ဆေးခြင်း'],
        ],
        [
          ['Protect a route so only logged-in users can access it', 'Login ဝင်ထားသော User များသာ ဝင်ရောက်နိုင်စေရန် Route တစ်ခုကို ကာကွယ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add full authentication to your task app: signup, login, and protecting task routes so each user only sees their own tasks.',
      'သင့် Task App သို့ Authentication အပြည့်အစုံ ထည့်ပါ — Signup, Login နှင့် User တစ်ဦးစီသည် ၎င်း၏ Task များကိုသာ မြင်ရအောင် Task Route များကို ကာကွယ်ပါ။',
    ]),
    verify: t([
      'If someone tries to access a protected route without logging in, what exactly happens in your application?',
      'တစ်စုံတစ်ဦးသည် Login ဝင်ခြင်းမရှိဘဲ Protected Route တစ်ခုကို ဝင်ရောက်ကြိုးစားလျှင် သင့် Application တွင် အတိအကျ ဘာဖြစ်သလဲ?',
    ]),
    tips: list([
      ['Use a well-tested library for password hashing — never write your own hashing algorithm.', 'Password Hashing အတွက် Well-tested Library သုံးပါ — ကိုယ်ပိုင် Hashing Algorithm ဘယ်တော့မှ မရေးပါနှင့်။'],
      ['Store tokens securely on the client and never log them.', 'Token များကို Client ပေါ်တွင် လုံခြုံစွာ သိမ်းဆည်းပြီး ဘယ်တော့မှ Log မချပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Storing passwords in plain text.', 'Password များကို Plain Text ဖြင့် သိမ်းဆည်းခြင်း။'],
      ['Forgetting to check authorization, only checking authentication (logged in, but not checking if they own the resource).', 'Authorization စစ်ဆေးရန် မေ့ခြင်း — Authentication ကိုသာ စစ်ဆေးခြင်း (Login ဝင်ထားသော်လည်း Resource ပိုင်ဆိုင်မှု မစစ်ခြင်း)။'],
    ]),
    practiceTasks: tasks('full-stack-development-intermediate-2', [
      ['Implement signup with password hashing', 'Password Hashing ပါသော Signup အကောင်အထည်ဖော်ပါ'],
      ['Implement login with token issuance', 'Token ထုတ်ပေးခြင်းပါသော Login အကောင်အထည်ဖော်ပါ'],
      ['Protect a route so only authenticated users can access it', 'Authenticated User များသာ ဝင်ရောက်နိုင်စေရန် Route တစ်ခု ကာကွယ်ပါ'],
      ['Ensure users can only access their own data', 'User များသည် ၎င်းတို့၏ ကိုယ်ပိုင် Data ကိုသာ ဝင်ရောက်နိုင်ကြောင်း သေချာပါ'],
    ]),
    completionChecklist: list([
      ['Hash passwords before storing them', 'Password များကို မသိမ်းဆည်းမီ Hash လုပ်နိုင်သည်'],
      ['Issue and verify authentication tokens', 'Authentication Token များ ထုတ်ပေးပြီး စစ်ဆေးနိုင်သည်'],
      ['Protect routes from unauthenticated access', 'Authenticate မလုပ်ရသေးသော Access မှ Route များကို ကာကွယ်နိုင်သည်'],
      ['Enforce that users only access their own data', 'User များသည် ၎င်းတို့၏ ကိုယ်ပိုင် Data ကိုသာ ဝင်ရောက်ကြောင်း အတည်ပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-intermediate-3': {
    whatItIs: t([
      'Deployment is the process of making your application available on the internet for real users, instead of only running on your own machine.',
      'Deployment ဆိုသည်မှာ သင့် Application ကို ကိုယ်ပိုင် Machine ပေါ်တွင်သာ Run နေမည့်အစား Internet ပေါ်တွင် User အစစ်များ သုံးနိုင်စေရန် ရရှိနိုင်စေသော လုပ်ငန်းစဉ် ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A project that only runs locally has no real users — deployment is the step that turns a learning exercise into something the world can actually access.',
      'Local တွင်သာ Run သော Project တစ်ခုတွင် User အစစ် မရှိပါ — Deployment သည် လေ့လာမှု Exercise တစ်ခုကို ကမ္ဘာက တကယ် ဝင်ရောက်နိုင်သော အရာတစ်ခုအဖြစ် ပြောင်းပေးသည့် အဆင့် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every real web application, at every company, goes through some form of deployment to reach users.',
      'Web Application အစစ်တိုင်း၊ ကုမ္ပဏီတိုင်းတွင် User များထံ ရောက်ရှိရန် Deployment တစ်မျိုးမျိုးကို ဖြတ်သန်းသည်။',
    ]),
    prerequisiteNote: t([
      'Assumes a working full-stack app (front-end, back-end, database) from earlier topics.',
      'ယခင် Topic များမှ အလုပ်လုပ်သော Full-stack App (Front-end, Back-end, Database) ကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Hosting options for front-end vs back-end', 'Front-end နှင့် Back-end အတွက် Hosting ရွေးချယ်စရာများ'],
      ['Environment variables in production', 'Production ရှိ Environment Variable များ'],
      ['Build steps for a production-ready front-end', 'Production-ready Front-end အတွက် Build အဆင့်များ'],
      ['Connecting a deployed front-end to a deployed back-end', 'Deploy လုပ်ထားသော Front-end ကို Deploy လုပ်ထားသော Back-end သို့ ချိတ်ဆက်ခြင်း'],
    ]),
    steps: [
      step(
        ['Prepare an app for production', 'Production အတွက် App ကို ပြင်ဆင်ခြင်း'],
        [
          ['Building an optimized production version of the front-end', 'Front-end ၏ Optimize လုပ်ထားသော Production Version တည်ဆောက်ခြင်း'],
          ['Setting environment variables correctly for production, not development', 'Development မဟုတ်ဘဲ Production အတွက် Environment Variable များကို မှန်ကန်စွာ သတ်မှတ်ခြင်း'],
        ],
        [
          ['Create a production build of your React front-end and verify it works', 'သင့် React Front-end ၏ Production Build တစ်ခု ဖန်တီးပြီး အလုပ်လုပ်ကြောင်း အတည်ပြုပါ'],
        ],
      ),
      step(
        ['Deploy front-end and back-end', 'Front-end နှင့် Back-end Deploy လုပ်ခြင်း'],
        [
          ['Deploying a static front-end build to a hosting service', 'Static Front-end Build ကို Hosting Service တစ်ခုသို့ Deploy လုပ်ခြင်း'],
          ['Deploying a Node.js back-end to a server/platform', 'Node.js Back-end ကို Server/Platform တစ်ခုသို့ Deploy လုပ်ခြင်း'],
        ],
        [
          ['Deploy your task app\'s front-end and back-end so it is accessible via a real URL', 'သင့် Task App ၏ Front-end နှင့် Back-end ကို URL အစစ်တစ်ခုမှတစ်ဆင့် ဝင်ရောက်နိုင်စေရန် Deploy လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Fully deploy your task application (front-end, back-end, and database) so it is accessible on a real public URL, and verify every feature still works there.',
      'သင့် Task Application (Front-end, Back-end, Database) ကို URL အများသုံးအစစ်တစ်ခုမှတစ်ဆင့် ဝင်ရောက်နိုင်စေရန် အပြည့်အစုံ Deploy လုပ်ပြီး Feature တိုင်း ထိုနေရာတွင် ဆက်လက်အလုပ်လုပ်ကြောင်း အတည်ပြုပါ။',
    ]),
    verify: t([
      'Could someone else, on a different network, open your deployed app right now and use it successfully?',
      'Network မတူညီသူ တစ်ဦးက ယခုပင် သင့် Deploy လုပ်ထားသော App ကို ဖွင့်ပြီး အောင်မြင်စွာ သုံးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Deploy early and often, even before your app is "finished" — it catches deployment issues sooner.', 'သင့် App "ပြီးမြောက်" မီပင် စောစီးစွာနှင့် မကြာခဏ Deploy လုပ်ပါ — ၎င်းက Deployment ပြဿနာများကို ပိုစောစီးစွာ ဖမ်းယူပေးသည်။'],
      ['Double-check that production environment variables are set correctly — a common source of "works on my machine" bugs.', 'Production Environment Variable များ မှန်ကန်စွာ သတ်မှတ်ထားကြောင်း နှစ်ကြိမ်စစ်ဆေးပါ — "ကျွန်တော့ Machine မှာတော့ အလုပ်လုပ်တယ်" Bug များ၏ အများသုံး အရင်းအမြစ်။'],
    ]),
    commonMistakes: list([
      ['Forgetting to set environment variables on the hosting platform.', 'Hosting Platform ပေါ်တွင် Environment Variable များ သတ်မှတ်ရန် မေ့ခြင်း။'],
      ['Hardcoding a local development URL that breaks once deployed.', 'Deploy ပြီးသည်နှင့် ပျက်သွားသော Local Development URL ကို Hardcode လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-intermediate-3', [
      ['Build a production version of the front-end', 'Front-end ၏ Production Version တစ်ခု တည်ဆောက်ပါ'],
      ['Deploy the front-end to a hosting service', 'Front-end ကို Hosting Service တစ်ခုသို့ Deploy လုပ်ပါ'],
      ['Deploy the back-end and database', 'Back-end နှင့် Database ကို Deploy လုပ်ပါ'],
      ['Verify the full app works at its public URL', 'App အပြည့်အစုံသည် ၎င်း၏ Public URL တွင် အလုပ်လုပ်ကြောင်း အတည်ပြုပါ'],
    ]),
    completionChecklist: list([
      ['Build a production-ready front-end', 'Production-ready Front-end တစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Deploy a front-end to a hosting service', 'Front-end တစ်ခုကို Hosting Service သို့ Deploy လုပ်နိုင်သည်'],
      ['Deploy a back-end and connect it to a database', 'Back-end တစ်ခုကို Deploy လုပ်ပြီး Database သို့ ချိတ်ဆက်နိုင်သည်'],
      ['Verify a deployed app works end to end', 'Deploy လုပ်ထားသော App သည် အစအဆုံး အလုပ်လုပ်ကြောင်း အတည်ပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-intermediate-4': {
    whatItIs: t([
      'Testing front-end and back-end code means writing automated tests that verify your UI components and your API routes behave correctly.',
      'Front-end နှင့် Back-end Code Testing ဆိုသည်မှာ သင့် UI Component များနှင့် API Route များ မှန်ကန်စွာ လုပ်ဆောင်ကြောင်း စစ်ဆေးပေးသော Automated Test များ ရေးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A full-stack app has two places bugs can hide — the UI and the API — and tests on both sides give you confidence to change code without breaking things silently.',
      'Full-stack App တစ်ခုတွင် Bug ဝှက်နိုင်သော နေရာနှစ်ခု ရှိသည် — UI နှင့် API — ဘက်နှစ်ဘက်စလုံးတွင် Test များက Code ကို တိတ်တဆိတ် မပျက်စေဘဲ ပြောင်းလဲနိုင်စေရန် ယုံကြည်မှု ပေးသည်။',
    ]),
    whereUsed: t([
      'Standard practice on any full-stack team that cares about shipping reliable software over time.',
      'အချိန်ကြာလာသည်နှင့်အမျှ ယုံကြည်ရသော Software ထုတ်ဖော်ရန် အလေးထားသော Full-stack အဖွဲ့ မည်သည်၏မဆို စံ အလေ့အထ ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes basic unit testing knowledge from the Software Engineering path, applied here specifically to UI components and API routes.',
      'ဤနေရာတွင် UI Component များနှင့် API Route များအတွက် သီးသန့် အသုံးချသော Software Engineering Path မှ အခြေခံ Unit Testing အသိပညာကို ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Testing a React component\'s rendered output', 'React Component ၏ Render ဖြစ်သော Output ကို Testing'],
      ['Simulating user interaction in tests', 'Test များတွင် User Interaction ကို Simulate လုပ်ခြင်း'],
      ['Testing an API route\'s response', 'API Route ၏ Response ကို Testing'],
      ['Mocking a database for tests', 'Test များအတွက် Database ကို Mock လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Test a front-end component', 'Front-end Component တစ်ခု Test လုပ်ခြင်း'],
        [
          ['Rendering a component in a test and checking its output', 'Test တစ်ခုတွင် Component တစ်ခု Render လုပ်ပြီး ၎င်း၏ Output ကို စစ်ဆေးခြင်း'],
          ['Simulating a click and asserting the resulting change', 'Click တစ်ခုကို Simulate လုပ်ပြီး ရလဒ် ပြောင်းလဲမှုကို Assert လုပ်ခြင်း'],
        ],
        [
          ['Write a test that renders your task list component and checks it shows the right items', 'သင့် Task List Component ကို Render လုပ်ပြီး မှန်ကန်သော Item များ ပြသကြောင်း စစ်ဆေးသော Test တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Test a back-end API route', 'Back-end API Route တစ်ခု Test လုပ်ခြင်း'],
        [
          ['Sending a test request to a route and checking the response', 'Route တစ်ခုသို့ Test Request ပို့ပြီး Response ကို စစ်ဆေးခြင်း'],
          ['Testing both success and failure cases', 'Success နှင့် Failure Case နှစ်ခုစလုံး Testing'],
        ],
        [
          ['Write a test for your task API\'s create-task route, covering both success and a validation failure', 'Success နှင့် Validation Failure နှစ်ခုစလုံး ပါဝင်သော သင့် Task API ၏ Create-task Route အတွက် Test တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Add a small but real test suite to your task app: a few component tests on the front-end and a few route tests on the back-end, covering both success and failure cases.',
      'သင့် Task App သို့ သေးငယ်ပေမယ့် တကယ့် Test Suite ထည့်ပါ — Front-end တွင် Component Test အနည်းငယ်နှင့် Back-end တွင် Route Test အနည်းငယ်၊ Success နှင့် Failure Case နှစ်ခုစလုံး လွှမ်းခြုံပြီး။',
    ]),
    verify: t([
      'If you broke your create-task route right now, would a test catch it before a real user did?',
      'သင့် Create-task Route ကို ယခုပင် ချိုးဖျက်လိုက်လျှင် User အစစ်တစ်ဦးမီ Test တစ်ခုက ဖမ်းမိမည်လား?',
    ]),
    tips: list([
      ['Test behavior (what the user sees/experiences), not implementation details.', 'Implementation Details မဟုတ်ဘဲ Behavior (User မြင်ရ/ခံစားရသည်) ကို Test လုပ်ပါ။'],
      ['Always test at least one failure case, not just the happy path.', '"Happy Path" ကိုသာမက Failure Case အနည်းဆုံးတစ်ခုကိုပါ အမြဲ Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Only testing the happy path and never checking error handling.', '"Happy Path" ကိုသာ Test လုပ်ပြီး Error Handling ကို ဘယ်တော့မှ မစစ်ဆေးခြင်း။'],
      ['Writing tests so tightly coupled to implementation that any refactor breaks them unnecessarily.', 'Refactor မည်သည်ကမဆို မလိုအပ်ဘဲ ချိုးဖျက်စေမည့်လောက် Implementation နှင့် တင်းကြပ်စွာ ချိတ်ဆက်ထားသော Test များ ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-intermediate-4', [
      ['Write a rendering test for a component', 'Component တစ်ခုအတွက် Rendering Test တစ်ခု ရေးပါ'],
      ['Write an interaction test that simulates a click', 'Click တစ်ခုကို Simulate လုပ်သော Interaction Test တစ်ခု ရေးပါ'],
      ['Write a success-case test for an API route', 'API Route တစ်ခုအတွက် Success-case Test တစ်ခု ရေးပါ'],
      ['Write a failure-case test for the same route', 'Route တူတစ်ခုအတွက် Failure-case Test တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write tests for React components', 'React Component များအတွက် Test များ ရေးနိုင်သည်'],
      ['Simulate user interaction in a test', 'Test တစ်ခုတွင် User Interaction ကို Simulate လုပ်နိုင်သည်'],
      ['Write tests for API routes covering success and failure', 'Success နှင့် Failure ကို လွှမ်းခြုံသော API Route များအတွက် Test များ ရေးနိုင်သည်'],
      ['Explain why testing both sides of a full-stack app matters', 'Full-stack App ၏ ဘက်နှစ်ဘက်စလုံး Test လုပ်ခြင်း ဘာကြောင့် အရေးကြီးသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-advanced-1': {
    whatItIs: t([
      'Performance and caching strategies are techniques for making a full-stack app faster by avoiding unnecessary work — recomputing, refetching, or re-rendering things that have not changed.',
      'Performance နှင့် Caching Strategy များသည် ပြောင်းလဲမှုမရှိသော အရာများကို ပြန်တွက်ခြင်း၊ ပြန်ရယူခြင်း (သို့) ပြန် Render လုပ်ခြင်း ကဲ့သို့ မလိုအပ်သော အလုပ်များကို ရှောင်ရှား၍ Full-stack App တစ်ခုကို ပိုမြန်စေသော နည်းပညာများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'As an application and its user base grow, unoptimized performance directly translates to slow experiences, higher hosting costs, and frustrated users.',
      'Application တစ်ခုနှင့် ၎င်း၏ User Base ကြီးထွားလာသည်နှင့်အမျှ Optimize မလုပ်ရသေးသော Performance သည် နှေးကွေးသော အတွေ့အကြုံ၊ Hosting ကုန်ကျစရိတ် ပိုများခြင်းနှင့် User များ စိတ်ပျက်ခြင်းကို တိုက်ရိုက် ဖြစ်စေသည်။',
    ]),
    whereUsed: t([
      'Relevant to every full-stack application once it has real users — caching appears at the database, API, and front-end levels.',
      'User အစစ် ရှိလာသည်နှင့် Full-stack Application တိုင်းတွင် သက်ဆိုင်သည် — Caching သည် Database, API, Front-end အဆင့်များတွင် ပေါ်လာသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Front-end re-render optimization (memoization)', 'Front-end Re-render Optimization (Memoization)'],
      ['API response caching', 'API Response Caching'],
      ['Database query caching', 'Database Query Caching'],
      ['Cache invalidation basics', 'Cache Invalidation အခြေခံ'],
    ]),
    steps: [
      step(
        ['Reduce unnecessary front-end re-renders', 'မလိုအပ်သော Front-end Re-render များ လျှော့ချခြင်း'],
        [
          ['Why a component re-renders and when it is wasteful', 'Component တစ်ခု ဘာကြောင့် Re-render ဖြစ်ပြီး ဘယ်အချိန် ဖြုန်းတီးသလဲ'],
          ['Memoization to skip re-rendering unchanged output', 'ပြောင်းလဲမှုမရှိသော Output ကို Re-render ကျော်ရန် Memoization'],
        ],
        [
          ['Profile your task app for unnecessary re-renders and fix at least one', 'သင့် Task App တွင် မလိုအပ်သော Re-render များအတွက် Profile လုပ်ပြီး အနည်းဆုံး တစ်ခုကို ပြင်ပါ'],
        ],
      ),
      step(
        ['Cache data at the API level', 'API အဆင့်တွင် Data Cache လုပ်ခြင်း'],
        [
          ['Caching a slow or expensive query result', 'နှေး (သို့) ကုန်ကျစရိတ်များသော Query ရလဒ်တစ်ခုကို Cache လုပ်ခြင်း'],
          ['Deciding a sensible cache duration and invalidation strategy', 'သင့်လျော်သော Cache ကြာချိန်နှင့် Invalidation Strategy ဆုံးဖြတ်ခြင်း'],
        ],
        [
          ['Add caching to your slowest API route and measure the improvement', 'သင့် နှေးဆုံး API Route သို့ Caching ထည့်ပြီး တိုးတက်မှုကို တိုင်းတာပါ'],
        ],
      ),
    ],
    build: t([
      'Identify the slowest part of your task app (front-end or back-end), apply an appropriate caching or memoization strategy, and measure the before/after difference.',
      'သင့် Task App ၏ နှေးဆုံးအပိုင်း (Front-end သို့ Back-end) ကို ဖော်ထုတ်ပြီး သင့်လျော်သော Caching (သို့) Memoization Strategy တစ်ခု အသုံးချကာ ပြင်ဆင်မီ/ပြင်ဆင်ပြီး ကွာခြားချက်ကို တိုင်းတာပါ။',
    ]),
    verify: t([
      'Could you explain, with a real example, when caching would help versus when it would introduce a stale-data bug?',
      'တကယ့် ဥပမာဖြင့် Caching က ဘယ်အချိန် ကူညီပြီး ဘယ်အချိန် Stale-data Bug ဖြစ်စေနိုင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Measure before caching anything — do not cache blindly.', 'တစ်ခုခု Cache မလုပ်မီ တိုင်းတာပါ — မျက်စိပိတ်ပြီး Cache မလုပ်ပါနှင့်။'],
      ['Have a clear invalidation plan before adding a cache — stale data is worse than slow data in many cases.', 'Cache မထည့်မီ ရှင်းလင်းသော Invalidation Plan ရှိပါစေ — Case အများစုတွင် Stale Data သည် Slow Data ထက် ပိုဆိုးသည်။'],
    ]),
    commonMistakes: list([
      ['Adding caching everywhere without measuring whether it was needed.', 'လိုအပ်သလားမတိုင်းတာဘဲ နေရာတိုင်းတွင် Caching ထည့်ခြင်း။'],
      ['Caching data with no invalidation strategy, leading to stale results forever.', 'Invalidation Strategy မရှိဘဲ Data Cache လုပ်ခြင်းက ရလဒ် Stale များ ထာဝရ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('full-stack-development-advanced-1', [
      ['Profile the front-end for unnecessary re-renders', 'မလိုအပ်သော Re-render များအတွက် Front-end ကို Profile လုပ်ပါ'],
      ['Fix at least one unnecessary re-render', 'မလိုအပ်သော Re-render အနည်းဆုံးတစ်ခု ပြင်ပါ'],
      ['Add caching to a slow API route', 'နှေးသော API Route တစ်ခုသို့ Caching ထည့်ပါ'],
      ['Measure and document the performance improvement', 'Performance တိုးတက်မှုကို တိုင်းတာပြီး မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Identify unnecessary front-end re-renders', 'မလိုအပ်သော Front-end Re-render များ ဖော်ထုတ်နိုင်သည်'],
      ['Apply memoization appropriately', 'Memoization ကို သင့်လျော်စွာ အသုံးချနိုင်သည်'],
      ['Cache an expensive API response', 'ကုန်ကျစရိတ်များသော API Response တစ်ခု Cache လုပ်နိုင်သည်'],
      ['Explain cache invalidation trade-offs', 'Cache Invalidation Trade-off များ ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-advanced-2': {
    whatItIs: t([
      'Scaling web applications means keeping an app fast and reliable as its number of users and amount of data grows well beyond what it started with.',
      'Web Application များ Scale လုပ်ခြင်းဆိုသည်မှာ App တစ်ခု၏ User အရေအတွက်နှင့် Data ပမာဏသည် စတင်ခဲ့သည်ထက် များစွာ ကြီးထွားလာသည့်တိုင် App ကို မြန်ဆန်၍ ယုံကြည်စိတ်ချရအောင် ထိန်းသိမ်းထားခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'An architecture that works fine for 100 users can completely fall over at 100,000 — understanding scaling concepts lets you build systems that grow gracefully instead of breaking under success.',
      'User ၁၀၀ အတွက် ကောင်းစွာအလုပ်လုပ်သော Architecture တစ်ခုသည် User ၁၀၀,၀၀၀ တွင် လုံးဝ ပြိုကျသွားနိုင်သည် — Scaling သဘောတရားများကို နားလည်ခြင်းက အောင်မြင်မှုအောက်တွင် မပြိုကွဲဘဲ ကောင်းမွန်စွာ ကြီးထွားနိုင်သော System များ တည်ဆောက်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Directly relevant to any successful product as its user base grows — a "good problem to have" that still requires real engineering.',
      'User Base ကြီးထွားလာသည်နှင့်အမျှ ထူးချွန်သော Product မည်သည့်အတွက်မဆို တိုက်ရိုက် သက်ဆိုင်သည် — တကယ့် Engineering လိုအပ်နေဆဲ ဖြစ်သော "ရှိသင့်သော ပြဿနာကောင်း" တစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This connects to the System Design and caching topics — scaling is where those concepts get applied for real.',
      'ဤအရာသည် System Design နှင့် Caching Topic များနှင့် ဆက်စပ်နေသည် — Scaling သည် ထို Concept များကို တကယ် အသုံးချရာနေရာ ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Horizontal vs vertical scaling', 'Horizontal နှင့် Vertical Scaling'],
      ['Stateless vs stateful servers', 'Stateless နှင့် Stateful Server များ'],
      ['Database scaling basics (indexing, read replicas)', 'Database Scaling အခြေခံ (Indexing, Read Replicas)'],
      ['Content delivery networks (CDNs) for static assets', 'Static Asset များအတွက် Content Delivery Network (CDN)'],
    ]),
    steps: [
      step(
        ['Understand scaling approaches', 'Scaling ချဉ်းကပ်နည်းများ နားလည်ခြင်း'],
        [
          ['Vertical scaling (a bigger server) vs horizontal scaling (more servers)', 'Vertical Scaling (Server ပိုကြီးသည်) နှင့် Horizontal Scaling (Server ပိုများသည်)'],
          ['Why stateless servers are easier to scale horizontally', 'Stateless Server များသည် Horizontal Scale လုပ်ရန် ဘာကြောင့် ပိုလွယ်ကူသနည်း'],
        ],
        [
          ['Identify any state your task app\'s server holds that would break horizontal scaling', 'သင့် Task App Server ကိုင်ဆောင်ထားသော State ကို ဖော်ထုတ်ပါ — ၎င်းက Horizontal Scaling ကို ချိုးဖျက်နိုင်သည်'],
        ],
      ),
      step(
        ['Scale the database layer', 'Database Layer ကို Scale လုပ်ခြင်း'],
        [
          ['Adding indexes to speed up common queries', 'အများသုံး Query များ မြန်စေရန် Index များ ထည့်ခြင်း'],
          ['Read replicas for spreading read load', 'Read Load ဖြန့်ဝေရန် Read Replica များ'],
        ],
        [
          ['Add an index to your slowest database query and measure the difference', 'သင့် နှေးဆုံး Database Query သို့ Index တစ်ခု ထည့်ပြီး ကွာခြားချက်ကို တိုင်းတာပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short scaling plan for your task app: what would break first as usage grows 100x, and what you would do about each bottleneck.',
      'သင့် Task App အတွက် Scaling Plan အတိုချုပ် ရေးပါ — အသုံးပြုမှု ၁၀၀ဆ ကြီးထွားလာသည့်အခါ ဘာအရင်ပျက်မည်နည်း၊ Bottleneck တစ်ခုစီအတွက် ဘာလုပ်မည်နည်း။',
    ]),
    verify: t([
      'Could you explain why simply adding more servers does not automatically fix every scaling problem?',
      'Server ပိုများ ထပ်ထည့်ခြင်းသည် Scaling ပြဿနာတိုင်းကို ဘာကြောင့် အလိုအလျောက် မဖြေရှင်းနိုင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Solve today\'s bottleneck, not an imagined future one — premature scaling wastes effort.', 'ယနေ့ Bottleneck ကို ဖြေရှင်းပါ၊ စိတ်ကူးထားသော အနာဂတ် Bottleneck မဟုတ်ပါ — အချိန်မတန်မီ Scale လုပ်ခြင်းက ကြိုးပမ်းအားထုတ်မှု ဖြုန်းတီးစေသည်။'],
      ['Database indexes and query optimization solve more scaling problems than most people expect.', 'Database Index နှင့် Query Optimization သည် လူများစွာ မျှော်လင့်ထားသည်ထက် Scaling ပြဿနာများစွာကို ဖြေရှင်းပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Reaching for complex scaling solutions before optimizing the database and code first.', 'Database နှင့် Code ကို အရင် Optimize မလုပ်မီ ရှုပ်ထွေးသော Scaling ဖြေရှင်းချက်များကို ရှာဖွေခြင်း။'],
      ['Storing session state on a single server, which breaks once you add more servers.', 'Server တစ်ခုတည်းပေါ်တွင် Session State သိမ်းဆည်းခြင်းက Server ပိုများ ထပ်ထည့်လိုက်သည်နှင့် ပျက်စီးသွားစေသည်။'],
    ]),
    practiceTasks: tasks('full-stack-development-advanced-2', [
      ['Identify server-held state that would break horizontal scaling', 'Horizontal Scaling ကို ချိုးဖျက်နိုင်သော Server State ကို ဖော်ထုတ်ပါ'],
      ['Add a database index to a slow query', 'နှေးသော Query တစ်ခုသို့ Database Index တစ်ခု ထည့်ပါ'],
      ['Write a short scaling plan for your app', 'သင့် App အတွက် Scaling Plan အတိုချုပ် ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain horizontal vs vertical scaling', 'Horizontal နှင့် Vertical Scaling ကို ရှင်းပြနိုင်သည်'],
      ['Identify state that blocks horizontal scaling', 'Horizontal Scaling ကို ပိတ်ဆို့သော State ကို ဖော်ထုတ်နိုင်သည်'],
      ['Use database indexing to improve query speed', 'Query အမြန်နှုန်း တိုးတက်ရန် Database Indexing သုံးနိုင်သည်'],
      ['Write a basic scaling plan for a real app', 'တကယ့် App တစ်ခုအတွက် အခြေခံ Scaling Plan ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-advanced-3': {
    whatItIs: t([
      'CI/CD pipelines automatically test and deploy your code every time you push a change, instead of doing those steps manually.',
      'CI/CD Pipeline များသည် ပြောင်းလဲမှုတစ်ခု Push လုပ်တိုင်း သင့် Code ကို လက်ဖြင့် အဆင့်များ မလုပ်ဘဲ အလိုအလျောက် Test လုပ်ပြီး Deploy လုပ်ပေးသည်။',
    ]),
    whyItMatters: t([
      'Manual testing and deployment are slow and error-prone — automating them lets a team ship changes confidently and frequently, which is core to modern software delivery.',
      'Manual Testing နှင့် Deployment သည် နှေးကွေး၍ အမှားလွယ်သည် — ၎င်းတို့ကို Automate လုပ်ခြင်းက အဖွဲ့တစ်ခုအား ယုံကြည်စွာနှင့် မကြာခဏ ပြောင်းလဲမှုများ ထုတ်ဖော်နိုင်စေသည် — ၎င်းသည် ခေတ်သစ် Software Delivery ၏ အဓိက ကျောရိုး ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Standard on virtually every professional software team, using tools like GitHub Actions, GitLab CI, or similar services.',
      'GitHub Actions, GitLab CI ကဲ့သို့ Service များ သုံး၍ Professional Software Team နီးပါးအားလုံးတွင် စံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Assumes your app already has tests (Intermediate stage) and a working deployment process (Intermediate stage).',
      'သင့် App တွင် Test များ (Intermediate အဆင့်) နှင့် အလုပ်လုပ်သော Deployment Process (Intermediate အဆင့်) ရှိပြီးသားဖြစ်ကြောင်း ယူဆထားသည်။',
    ]),
    firstSteps: list([
      ['Continuous Integration (CI): running tests automatically', 'Continuous Integration (CI) — Test များ အလိုအလျောက် Run ခြင်း'],
      ['Continuous Deployment (CD): deploying automatically after tests pass', 'Continuous Deployment (CD) — Test Pass ဖြစ်ပြီးနောက် အလိုအလျောက် Deploy လုပ်ခြင်း'],
      ['Writing a basic pipeline configuration file', 'Pipeline Configuration File အခြေခံ ရေးခြင်း'],
      ['Pipeline stages (install, test, build, deploy)', 'Pipeline Stage များ (Install, Test, Build, Deploy)'],
    ]),
    steps: [
      step(
        ['Automate testing on every push', 'Push တိုင်းတွင် Testing ကို Automate လုပ်ခြင်း'],
        [
          ['Configuring a CI pipeline to install dependencies and run tests', 'Dependency များ Install လုပ်ပြီး Test များ Run ရန် CI Pipeline Configure လုပ်ခြင်း'],
          ['Making the pipeline fail loudly if tests fail', 'Test များ Fail ဖြစ်လျှင် Pipeline ကို ကျယ်ကျယ်ဖော်ပြ Fail ဖြစ်စေခြင်း'],
        ],
        [
          ['Set up a CI pipeline that runs your test suite on every push', 'Push တိုင်းတွင် သင့် Test Suite ကို Run သော CI Pipeline တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Automate deployment after tests pass', 'Test Pass ဖြစ်ပြီးနောက် Deployment ကို Automate လုပ်ခြင်း'],
        [
          ['Adding a deploy stage that only runs if tests succeed', 'Test Success ဖြစ်မှသာ Run သော Deploy Stage တစ်ခု ထည့်ခြင်း'],
        ],
        [
          ['Extend your pipeline to automatically deploy when tests pass on the main branch', 'Main Branch ပေါ်တွင် Test Pass ဖြစ်သည့်အခါ အလိုအလျောက် Deploy လုပ်ရန် သင့် Pipeline ကို တိုးချဲ့ပါ'],
        ],
      ),
    ],
    build: t([
      'Set up a complete CI/CD pipeline for your task app: every push runs tests automatically, and every merge to main deploys automatically if tests pass.',
      'သင့် Task App အတွက် CI/CD Pipeline အပြည့်အစုံ တည်ဆောက်ပါ — Push တိုင်းသည် Test များကို အလိုအလျောက် Run ပြီး Main သို့ Merge တိုင်းသည် Test Pass ဖြစ်ပါက အလိုအလျောက် Deploy လုပ်စေသည်။',
    ]),
    verify: t([
      'If you push code that breaks a test, does your pipeline stop the deployment automatically, or does broken code still reach production?',
      'Test တစ်ခုကို ချိုးဖျက်သော Code ကို Push လုပ်လျှင် သင့် Pipeline သည် Deployment ကို အလိုအလျောက် ရပ်တန့်ပါသလား၊ (သို့) ပျက်နေသော Code သည် Production သို့ ရောက်ရှိနေဆဲလား?',
    ]),
    tips: list([
      ['Keep your pipeline fast — a slow CI process discourages frequent commits.', 'သင့် Pipeline ကို မြန်ဆန်နေအောင် ထားပါ — နှေးကွေးသော CI Process သည် မကြာခဏ Commit လုပ်ခြင်းကို လျှော့ချစေသည်။'],
      ['Start with a simple pipeline (test only) before adding automatic deployment.', 'Automatic Deployment မထည့်မီ ရိုးရှင်းသော Pipeline (Test သာ) ဖြင့် စတင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Deploying automatically without running tests first.', 'ရှေးဦးစွာ Test များ Run ခြင်း မရှိဘဲ အလိုအလျောက် Deploy လုပ်ခြင်း။'],
      ['Never checking why a pipeline failed, just re-running it and hoping.', 'Pipeline ဘာကြောင့် Fail ဖြစ်သည်ကို ဘယ်တော့မှ မစစ်ဆေးဘဲ ပြန် Run ပြီး မျှော်လင့်နေခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-advanced-3', [
      ['Set up a CI pipeline that runs tests on every push', 'Push တိုင်းတွင် Test များ Run သော CI Pipeline တစ်ခု တည်ဆောက်ပါ'],
      ['Make the pipeline fail visibly when a test fails', 'Test တစ်ခု Fail ဖြစ်သည့်အခါ Pipeline ကို မြင်သာစွာ Fail ဖြစ်စေပါ'],
      ['Add an automatic deploy stage after tests pass', 'Test Pass ဖြစ်ပြီးနောက် Automatic Deploy Stage တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Configure a CI pipeline that runs tests automatically', 'Test များကို အလိုအလျောက် Run သော CI Pipeline တစ်ခု Configure လုပ်နိုင်သည်'],
      ['Understand pipeline stages', 'Pipeline Stage များကို နားလည်သည်'],
      ['Configure automatic deployment after tests pass', 'Test Pass ဖြစ်ပြီးနောက် Automatic Deployment Configure လုပ်နိုင်သည်'],
      ['Explain why broken code should never reach production automatically', 'ပျက်နေသော Code သည် Production သို့ အလိုအလျောက် ဘာကြောင့် ဘယ်တော့မှ မရောက်သင့်သည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'full-stack-development-advanced-4': {
    whatItIs: t([
      'Web security best practices are the defensive habits that protect a full-stack application and its users from common attacks like injection, XSS, and CSRF.',
      'Web Security Best Practice များသည် Full-stack Application တစ်ခုနှင့် ၎င်း၏ User များကို Injection, XSS, CSRF ကဲ့သို့ အများသုံး တိုက်ခိုက်မှုများမှ ကာကွယ်ပေးသော ကာကွယ်ရေး အလေ့အထများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A security vulnerability can expose user data, damage trust, and carry real legal and financial consequences — security is not optional polish, it is a core responsibility.',
      'Security Vulnerability တစ်ခုသည် User Data ကို ဖော်ထုတ်နိုင်ပြီး ယုံကြည်မှုကို ထိခိုက်စေကာ တကယ့် ဥပဒေနှင့် ငွေကြေးဆိုင်ရာ ဆက်ဆံရေးများ ပါရှိနိုင်သည် — Security သည် ရွေးချယ်နိုင်သော အလှတန်ဆာမဟုတ်ဘဲ အဓိက တာဝန် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'A required consideration for any application handling user data, payments, or authentication — which is nearly every real product.',
      'User Data, Payment (သို့) Authentication ကိုင်တွယ်သော Application မည်သည်အတွက်မဆို လိုအပ်သော စဉ်းစားချက်တစ်ခု — ၎င်းသည် တကယ့် Product နီးပါးအားလုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on authentication/authorization and database work from earlier stages.',
      'ယခင် အဆင့်များမှ Authentication/Authorization နှင့် Database အလုပ်အပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['SQL injection', 'SQL Injection'],
      ['Cross-site scripting (XSS)', 'Cross-site Scripting (XSS)'],
      ['Cross-site request forgery (CSRF)', 'Cross-site Request Forgery (CSRF)'],
      ['Input validation and sanitization', 'Input Validation နှင့် Sanitization'],
      ['HTTPS and secure cookies', 'HTTPS နှင့် Secure Cookie များ'],
    ]),
    steps: [
      step(
        ['Prevent injection attacks', 'Injection တိုက်ခိုက်မှုများ ကာကွယ်ခြင်း'],
        [
          ['Why building SQL queries with raw string concatenation is dangerous', 'Raw String Concatenation ဖြင့် SQL Query တည်ဆောက်ခြင်းသည် ဘာကြောင့် အန္တရာယ်ရှိသလဲ'],
          ['Using parameterized queries instead', 'အစားထိုးအနေဖြင့် Parameterized Query များ သုံးခြင်း'],
        ],
        [
          ['Find a query in your task API built with string concatenation and rewrite it as a parameterized query', 'သင့် Task API ရှိ String Concatenation ဖြင့် တည်ဆောက်ထားသော Query တစ်ခုကို ရှာပြီး Parameterized Query အဖြစ် ပြန်ရေးပါ'],
        ],
      ),
      step(
        ['Prevent XSS and CSRF', 'XSS နှင့် CSRF ကာကွယ်ခြင်း'],
        [
          ['Never rendering unescaped user input directly into HTML', 'Escape မလုပ်ရသေးသော User Input ကို HTML ထဲသို့ တိုက်ရိုက် ဘယ်တော့မှ Render မလုပ်ရန်'],
          ['CSRF tokens for protecting state-changing requests', 'State ပြောင်းလဲသော Request များကို ကာကွယ်ရန် CSRF Token များ'],
        ],
        [
          ['Verify that user-generated content in your app is properly escaped before display', 'သင့် App ရှိ User-generated Content ကို ပြသမီ မှန်ကန်စွာ Escape လုပ်ထားကြောင်း အတည်ပြုပါ'],
        ],
      ),
      step(
        ['Validate input and use HTTPS', 'Input ကို Validate လုပ်ပြီး HTTPS သုံးခြင်း'],
        [
          ['Validating and sanitizing all user input on the server, never trusting the client', 'Client ကို ဘယ်တော့မှ မယုံဘဲ User Input အားလုံးကို Server ပေါ်တွင် Validate နှင့် Sanitize လုပ်ခြင်း'],
          ['Why HTTPS and secure cookie flags matter', 'HTTPS နှင့် Secure Cookie Flag များ ဘာကြောင့် အရေးကြီးသလဲ'],
        ],
        [
          ['Add server-side validation to every write route in your task API', 'သင့် Task API ရှိ Write Route တိုင်းသို့ Server-side Validation ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Perform a security review of your full task app: check for injection risks, unescaped output, missing input validation, and hardcoded secrets, and fix everything you find.',
      'သင့် Task App အပြည့်အစုံကို Security Review ပြုလုပ်ပါ — Injection အန္တရာယ်များ၊ Escape မလုပ်ရသေးသော Output, Input Validation ပျောက်ဆုံးနေခြင်းနှင့် Hardcode Secret များကို စစ်ဆေးပြီး တွေ့ရှိသမျှကို ပြင်ဆင်ပါ။',
    ]),
    verify: t([
      'If a user submitted `<script>alert(1)</script>` as their name, what would actually happen in your app?',
      'User တစ်ဦးက ၎င်း၏ နာမည်အဖြစ် `<script>alert(1)</script>` ကို တင်သွင်းလျှင် သင့် App တွင် တကယ်ဘာဖြစ်မည်နည်း?',
    ]),
    tips: list([
      ['Never trust data coming from the client, even if your own front-end validates it.', 'သင့် Front-end ကိုယ်တိုင်က Validate လုပ်ထားသော်လည်း Client မှလာသော Data ကို ဘယ်တော့မှ မယုံပါနှင့်။'],
      ['Use well-tested libraries and frameworks that handle common security concerns instead of rolling your own.', 'ကိုယ်ပိုင်ရေးမည့်အစား အများသုံး Security Concern များကို ကိုင်တွယ်ပေးသော Well-tested Library နှင့် Framework များ သုံးပါ။'],
    ]),
    commonMistakes: list([
      ['Trusting front-end validation as the only line of defense.', 'Front-end Validation ကို ကာကွယ်ရေး တစ်ခုတည်းအဖြစ် ယုံကြည်ခြင်း။'],
      ['Building database queries with string concatenation instead of parameterized queries.', 'Parameterized Query များအစား String Concatenation ဖြင့် Database Query များ တည်ဆောက်ခြင်း။'],
    ]),
    practiceTasks: tasks('full-stack-development-advanced-4', [
      ['Rewrite a query to use parameterization', 'Query တစ်ခုကို Parameterization သုံးရန် ပြန်ရေးပါ'],
      ['Verify user content is properly escaped', 'User Content ကို မှန်ကန်စွာ Escape လုပ်ထားကြောင်း အတည်ပြုပါ'],
      ['Add server-side validation to every write route', 'Write Route တိုင်းသို့ Server-side Validation ထည့်ပါ'],
      ['Complete a full security review of the app', 'App ၏ Security Review အပြည့်အစုံကို ပြီးမြောက်အောင်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Prevent SQL injection with parameterized queries', 'Parameterized Query များဖြင့် SQL Injection ကာကွယ်နိုင်သည်'],
      ['Prevent XSS by escaping user content', 'User Content ကို Escape လုပ်ခြင်းဖြင့် XSS ကာကွယ်နိုင်သည်'],
      ['Validate and sanitize input on the server', 'Server ပေါ်တွင် Input ကို Validate နှင့် Sanitize လုပ်နိုင်သည်'],
      ['Explain why client-side validation alone is not enough', 'Client-side Validation တစ်ခုတည်း ဘာကြောင့် မလုံလောက်သည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },
}
