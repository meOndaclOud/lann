import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Cloud/DevOps topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here: naming a specific video/course/creator without being able to
 * verify it still exists would violate the project's "never fabricate a
 * resource" rule, so these stay empty and structured, ready for a human to
 * fill in with real, checked links (see CareerRoadmapResources for the same
 * policy applied at the career level).
 */
export const cloudDevOpsTopicDetails: Record<string, TopicDetail> = {
  'cloud-devops-beginner-1': {
    whatItIs: t([
      'Linux is the operating system that runs most servers, cloud infrastructure, and DevOps tooling in the world.',
      'Linux သည် ကမ္ဘာပေါ်ရှိ Server၊ Cloud Infrastructure နှင့် DevOps Tool အများစုကို လည်ပတ်စေသော Operating System ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      "Nearly every cloud server, container, and deployment pipeline runs on Linux — you can't work in Cloud/DevOps without being comfortable here.",
      'Cloud Server၊ Container နှင့် Deployment Pipeline အားလုံးနီးပါးသည် Linux ပေါ်တွင် လည်ပတ်နေသည် — ဒီနေရာမှာ အဆင်ပြေမှသာ Cloud/DevOps တွင် အလုပ်လုပ်နိုင်မည်။',
    ]),
    whereUsed: t([
      "Every cloud provider's virtual machines, most Docker containers, and almost all production servers run Linux under the hood.",
      'Cloud Provider တိုင်း၏ Virtual Machine၊ Docker Container အများစုနှင့် Production Server နီးပါးအားလုံးသည် Linux ကို အခြေခံလည်ပတ်နေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Linux filesystem', 'Linux Filesystem'],
      ['Files and directories', 'File များနှင့် Directory များ'],
      ['Users and groups', 'User များနှင့် Group များ'],
      ['File permissions', 'File Permission များ'],
      ['Processes', 'Process များ'],
      ['Package management', 'Package Management'],
      ['Networking commands', 'Networking Command များ'],
      ['SSH', 'SSH'],
      ['Bash basics', 'Bash အခြေခံ'],
      ['Environment variables', 'Environment Variable များ'],
    ]),
    steps: [
      step(
        ['Understand the Linux filesystem', 'Linux Filesystem ကို နားလည်ခြင်း'],
        [
          ['/  — the root of everything', '/  — အရာအားလုံး၏ အမြစ်'],
          ['/home — user files', '/home — User File များ'],
          ['/etc — configuration files', '/etc — Configuration File များ'],
          ['/var — logs and variable data', '/var — Log နှင့် ပြောင်းလဲနေသော Data'],
          ['/usr — installed programs', '/usr — Install လုပ်ထားသော Program များ'],
        ],
        [
          ['Navigate directories', 'Directory များကြား သွားလာခြင်း'],
          ['Create files', 'File များ ဖန်တီးခြင်း'],
          ['Move files', 'File များ ရွှေ့ခြင်း'],
          ['Search for files', 'File များ ရှာဖွေခြင်း'],
        ],
      ),
      step(
        ['Learn Linux permissions', 'Linux Permission များ လေ့လာခြင်း'],
        [
          ['chmod', 'chmod'],
          ['chown', 'chown'],
          ['users and groups', 'User များနှင့် Group များ'],
          ['rwx permissions', 'rwx Permission များ'],
        ],
        [
          ['Create a user', 'User တစ်ခု ဖန်တီးခြင်း'],
          ['Create a group', 'Group တစ်ခု ဖန်တီးခြင်း'],
          ['Change file ownership', 'File Ownership ပြောင်းလဲခြင်း'],
          ['Modify permissions', 'Permission များ ပြင်ဆင်ခြင်း'],
        ],
      ),
      step(
        ['Learn processes', 'Process များ လေ့လာခြင်း'],
        [
          ['ps', 'ps'],
          ['top', 'top'],
          ['kill', 'kill'],
          ['systemctl', 'systemctl'],
        ],
        [
          ['Find running processes', 'လက်ရှိ Process များ ရှာဖွေခြင်း'],
          ['Stop a process', 'Process တစ်ခု ရပ်တန့်ခြင်း'],
          ['Inspect services', 'Service များ စစ်ဆေးခြင်း'],
        ],
      ),
    ],
    build: t([
      'Create a shared project directory with different permissions for different users.',
      'အသုံးပြုသူ အမျိုးမျိုးအတွက် Permission မတူညီသော မျှဝေထားသည့် Project Directory တစ်ခု ဖန်တီးပါ။',
    ]),
    verify: t([
      'Can you explain why chmod 640 behaves differently from chmod 755?',
      'chmod 640 ဟာ chmod 755 နဲ့ ဘာကြောင့် မတူညီစွာ လုပ်ဆောင်သလဲဆိုတာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ["Don't memorize Linux commands without understanding what they do.", 'Linux Command များကို နားမလည်ဘဲ အလွတ်ကျက်မှတ်ခြင်း မပြုလုပ်ပါနှင့်။'],
      ['Practice commands in a real Linux environment.', 'Command များကို Linux Environment အစစ်တွင် လေ့ကျင့်ပါ။'],
      ['Use `man` pages instead of relying only on tutorials.', 'Tutorial များကိုသာ မှီခိုမနေဘဲ `man` Page များကို အသုံးပြုပါ။'],
      ['Try solving problems without copying commands immediately.', 'Command များကို ချက်ချင်း Copy မလုပ်ဘဲ ပြဿနာများ ဖြေရှင်းကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Running commands without understanding them.', 'နားမလည်ဘဲ Command များ Run ခြင်း။'],
      ['Ignoring file permissions.', 'File Permission များကို လျစ်လျူရှုခြင်း။'],
      ['Learning Docker before understanding basic Linux concepts.', 'Linux အခြေခံ သဘောတရားများ မနားလည်ခင် Docker ကို အရင်လေ့လာခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-beginner-1', [
      ['Create a Linux user', 'Linux User တစ်ခု ဖန်တီးပါ'],
      ['Create a group', 'Group တစ်ခု ဖန်တီးပါ'],
      ['Configure file permissions', 'File Permission များ Configure လုပ်ပါ'],
      ['Install a package', 'Package တစ်ခု Install လုပ်ပါ'],
      ['Find a running process', 'လက်ရှိ Process တစ်ခု ရှာဖွေပါ'],
      ['Configure SSH', 'SSH ကို Configure လုပ်ပါ'],
      ['Write a basic Bash script', 'အခြေခံ Bash Script တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain the Linux filesystem', 'Linux Filesystem ကို ရှင်းပြနိုင်သည်'],
      ['Manage users and groups', 'User များနှင့် Group များ စီမံခန့်ခွဲနိုင်သည်'],
      ['Understand file permissions', 'File Permission များ နားလည်သည်'],
      ['Manage processes', 'Process များ စီမံခန့်ခွဲနိုင်သည်'],
      ['Use SSH', 'SSH သုံးနိုင်သည်'],
      ['Write basic Bash commands/scripts', 'အခြေခံ Bash Command/Script များ ရေးနိုင်သည်'],
      ['Troubleshoot simple Linux issues', 'လွယ်ကူသော Linux ပြဿနာများ ဖြေရှင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-beginner-2': {
    whatItIs: t([
      'Networking is how computers and servers find and talk to each other over the internet or a private network.',
      'Networking ဆိုသည်မှာ ကွန်ပျူတာနှင့် Server များ Internet (သို့) Private Network ပေါ်တွင် တစ်ခုနှင့်တစ်ခု ရှာဖွေပြီး ဆက်သွယ်ပုံ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      "Every cloud service, API call, and deployment depends on networking working correctly — it's the plumbing behind everything else you'll build.",
      'Cloud Service၊ API Call နှင့် Deployment တိုင်းသည် Networking မှန်ကန်စွာ အလုပ်လုပ်ခြင်းအပေါ် မှီခိုနေသည် — ၎င်းသည် တခြားတည်ဆောက်မည့်အရာများ၏ အခြေခံအုတ်မြစ် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      "Configuring cloud VPCs, setting up load balancers, debugging why a service can't reach another service, and securing traffic all rely on networking fundamentals.",
      'Cloud VPC များ Configure လုပ်ခြင်း၊ Load Balancer များ တည်ဆောက်ခြင်း၊ Service တစ်ခုမှ တခြား Service တစ်ခုကို ဘာကြောင့် ဆက်သွယ်မရသလဲဆိုတာ ဖြေရှင်းခြင်းနှင့် Traffic လုံခြုံအောင်ပြုလုပ်ခြင်း အားလုံးသည် Networking အခြေခံအပေါ် မှီခိုသည်။',
    ]),
    prerequisiteNote: t([
      "Basic comfort with the Linux command line helps, since you'll run networking commands from the terminal.",
      'Terminal မှ Networking Command များ Run ရမည်ဖြစ်၍ Linux Command Line နှင့် အနည်းငယ် အကျွမ်းဝင်ထားခြင်းက အထောက်အကူဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['IP addresses', 'IP Address များ'],
      ['Subnets', 'Subnet များ'],
      ['DNS', 'DNS'],
      ['Ports and protocols', 'Port များနှင့် Protocol များ'],
      ['Firewalls', 'Firewall များ'],
      ['HTTP/HTTPS basics', 'HTTP/HTTPS အခြေခံ'],
      ['Load balancing concepts', 'Load Balancing သဘောတရားများ'],
    ]),
    steps: [
      step(
        ['Understand IP addressing', 'IP Addressing ကို နားလည်ခြင်း'],
        [
          ['IPv4 basics', 'IPv4 အခြေခံ'],
          ['Public vs private IPs', 'Public IP နှင့် Private IP'],
          ['Subnet masks', 'Subnet Mask များ'],
        ],
        [
          ['Identify your own IP address', 'သင့် IP Address ကို ဖော်ထုတ်ပါ'],
          ['Calculate a simple subnet range', 'ရိုးရှင်းသော Subnet Range တစ်ခု တွက်ချက်ပါ'],
          ['Ping another device on your network', 'သင့် Network ပေါ်ရှိ Device တစ်ခုကို Ping ပါ'],
        ],
      ),
      step(
        ['Learn DNS and ports', 'DNS နှင့် Port များ လေ့လာခြင်း'],
        [
          ['How DNS resolves names to IPs', 'DNS သည် Name များကို IP အဖြစ် ဘယ်လို ဖြေရှင်းသလဲ'],
          ['Common ports (22, 80, 443)', 'အများသုံး Port များ (22, 80, 443)'],
          ['TCP vs UDP basics', 'TCP နှင့် UDP အခြေခံ'],
        ],
        [
          ['Use dig or nslookup to resolve a domain', 'Domain တစ်ခုကို ဖြေရှင်းရန် dig (သို့) nslookup သုံးပါ'],
          ['Check which ports are open on a server', 'Server တစ်ခုပေါ်ရှိ ဖွင့်ထားသော Port များကို စစ်ဆေးပါ'],
          ['Explain what happens when you visit a website', 'Website ဝင်ကြည့်ချိန် ဘာဖြစ်သွားသလဲ ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      "Diagram how a request travels from your browser to a website's server and back.",
      'Request တစ်ခု Browser မှ Website Server သို့ ပြီးတော့ ပြန်လာပုံကို Diagram ရေးဆွဲပါ။',
    ]),
    verify: t([
      'Can you explain the difference between a public and a private IP address, and why both matter?',
      'Public IP Address နှင့် Private IP Address ခြားနားချက်ကို ရှင်းပြနိုင်ပြီး နှစ်ခုစလုံးက ဘာကြောင့် အရေးကြီးသလဲ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Draw diagrams — networking is much easier to understand visually.', 'Diagram ရေးဆွဲပါ — Networking ကို အမြင်ဖြင့် နားလည်ရတာ ပိုလွယ်ပါတယ်။'],
      ['Practice with real commands (ping, traceroute, dig) instead of just reading theory.', 'သီအိုရီကိုသာ မဖတ်ဘဲ Command အစစ်များ (ping, traceroute, dig) နှင့် လေ့ကျင့်ပါ။'],
      ['Connect each concept back to something you use daily, like visiting a website.', 'သဘောတရားတစ်ခုစီကို Website ဝင်ကြည့်ခြင်းလို နေ့စဉ်သုံးနေသော အရာနှင့် ချိတ်ဆက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Memorizing port numbers without understanding what runs on them.', 'ဘာလည်ပတ်နေသလဲ မသိဘဲ Port Number များ အလွတ်ကျက်မှတ်ခြင်း။'],
      ['Skipping networking basics and jumping straight to cloud networking.', 'Networking အခြေခံကျော်ပြီး Cloud Networking ကို တန်းဆင်းခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-beginner-2', [
      ["Find your device's IP address", 'သင့် Device ၏ IP Address ကို ရှာပါ'],
      ['Use ping to test connectivity', 'Connectivity စမ်းသပ်ရန် ping သုံးပါ'],
      ["Use traceroute to see a request's path", 'Request ၏ လမ်းကြောင်းကို ကြည့်ရန် traceroute သုံးပါ'],
      ['Resolve a domain name with dig or nslookup', 'dig (သို့) nslookup ဖြင့် Domain Name တစ်ခု ဖြေရှင်းပါ'],
      ['Identify open ports on a server', 'Server တစ်ခုပေါ်ရှိ ဖွင့်ထားသော Port များကို ဖော်ထုတ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain IP addresses and subnets', 'IP Address များနှင့် Subnet များ ရှင်းပြနိုင်သည်'],
      ['Understand DNS resolution', 'DNS Resolution နားလည်သည်'],
      ['Identify common ports and protocols', 'အများသုံး Port များနှင့် Protocol များ ဖော်ထုတ်နိုင်သည်'],
      ['Explain the basics of HTTP/HTTPS', 'HTTP/HTTPS အခြေခံကို ရှင်းပြနိုင်သည်'],
      ['Describe what a load balancer does', 'Load Balancer ၏ လုပ်ဆောင်ချက်ကို ဖော်ပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-beginner-3': {
    whatItIs: t([
      'The command line is a text-based way to control your computer directly, and shell scripting lets you automate repeated command-line tasks.',
      'Command Line ဆိုသည်မှာ သင့်ကွန်ပျူတာကို တိုက်ရိုက် Text ဖြင့် ထိန်းချုပ်ရန် နည်းလမ်းဖြစ်ပြီး Shell Scripting က ထပ်ခါထပ်ခါ လုပ်ရသော Command Line အလုပ်များကို အလိုအလျောက်ဖြစ်အောင် လုပ်ပေးသည်။',
    ]),
    whyItMatters: t([
      'DevOps work happens almost entirely through the command line — servers rarely have a graphical interface, and automation depends on scripting.',
      'DevOps အလုပ်များသည် Command Line မှတစ်ဆင့် အများစု ဖြစ်ပေါ်သည် — Server များတွင် Graphical Interface ရှားရှားပါးပါး ရှိပြီး Automation က Scripting အပေါ် မှီခိုသည်။',
    ]),
    whereUsed: t([
      'Deploying code, checking logs, running scripts, and managing servers on any cloud provider all happen through the command line.',
      'Code Deploy လုပ်ခြင်း၊ Log များ စစ်ဆေးခြင်း၊ Script များ Run ခြင်းနှင့် Cloud Provider မည်သည့်နေရာမဆို Server များ စီမံခန့်ခွဲခြင်းအားလုံးသည် Command Line မှတစ်ဆင့် ဖြစ်ပေါ်သည်။',
    ]),
    prerequisiteNote: t([
      'Comfort navigating the Linux filesystem (from the previous topic) makes this much easier.',
      'ယခင် Topic မှ Linux Filesystem ကို သွားလာနိုင်မှုက ဒီနေရာမှာ များစွာ ပိုလွယ်ကူစေသည်။',
    ]),
    firstSteps: list([
      ['Navigating with cd, ls, pwd', 'cd, ls, pwd ဖြင့် သွားလာခြင်း'],
      ['Redirects and pipes', 'Redirect များနှင့် Pipe များ'],
      ['Variables in Bash', 'Bash ရှိ Variable များ'],
      ['Conditionals and loops', 'Conditional များနှင့် Loop များ'],
      ['Writing your first script', 'သင့်ပထမဆုံး Script ရေးခြင်း'],
    ]),
    steps: [
      step(
        ['Master everyday commands', 'နေ့စဉ်သုံး Command များကို ကျွမ်းကျင်အောင် လုပ်ခြင်း'],
        [
          ['grep', 'grep'],
          ['find', 'find'],
          ['pipes (|)', 'Pipe (|)'],
          ['redirects (>, >>)', 'Redirect (>, >>)'],
        ],
        [
          ['Search a file for a keyword with grep', 'grep ဖြင့် File တစ်ခုမှ Keyword ရှာပါ'],
          ['Find files by name or type', 'Name (သို့) Type ဖြင့် File များ ရှာပါ'],
          ['Chain two commands with a pipe', 'Pipe ဖြင့် Command နှစ်ခု ချိတ်ဆက်ပါ'],
        ],
      ),
      step(
        ['Write a basic Bash script', 'အခြေခံ Bash Script တစ်ခု ရေးခြင်း'],
        [
          ['Shebang line (#!/bin/bash)', 'Shebang Line (#!/bin/bash)'],
          ['Variables', 'Variable များ'],
          ['if statements', 'if Statement များ'],
          ['for loops', 'for Loop များ'],
        ],
        [
          ['Write a script that prints a message', 'Message တစ်ခု Print လုပ်မည့် Script ရေးပါ'],
          ['Write a script with a variable', 'Variable ပါသော Script ရေးပါ'],
          ['Write a loop that processes multiple files', 'File များစွာကို လုပ်ဆောင်မည့် Loop တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      "Write a script that checks if a folder exists, and creates it if it doesn't.",
      'Folder တစ်ခု ရှိမရှိ စစ်ဆေးပြီး မရှိပါက ဖန်တီးပေးမည့် Script တစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Can you write a five-line Bash script from scratch without copying one?',
      'မကူးဘဲ Bash Script ငါးကြောင်းကို အစကနေ ရေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Type commands yourself instead of copy-pasting — muscle memory matters.', 'Copy-paste မလုပ်ဘဲ Command များကို ကိုယ်တိုင် Type ရိုက်ပါ — အလေ့အကျင့်က အရေးကြီးပါတယ်။'],
      [
        "Start scripts small — a two-line script that works beats a fifty-line one that doesn't.",
        'Script များကို သေးငယ်စွာ စတင်ပါ — အလုပ်မလုပ်တဲ့ Line ငါးဆယ်ထက် အလုပ်လုပ်တဲ့ Line နှစ်ကြောင်းက ပိုကောင်းပါတယ်။',
      ],
    ]),
    commonMistakes: list([
      ["Not checking a script's exit code or error output.", 'Script ၏ Exit Code (သို့) Error Output ကို မစစ်ဆေးခြင်း။'],
      ['Writing overly complex scripts before mastering the basics.', 'အခြေခံမကျွမ်းကျင်ခင် ရှုပ်ထွေးလွန်းသော Script များ ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-beginner-3', [
      ['Chain commands using a pipe', 'Pipe သုံး၍ Command များ ချိတ်ဆက်ပါ'],
      ['Redirect command output to a file', 'Command Output ကို File တစ်ခုသို့ Redirect လုပ်ပါ'],
      ['Write a script with a variable', 'Variable ပါဝင်သော Script တစ်ခု ရေးပါ'],
      ['Write a script with a conditional', 'Conditional ပါဝင်သော Script တစ်ခု ရေးပါ'],
      ['Write a script with a loop', 'Loop ပါဝင်သော Script တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Navigate the filesystem confidently from the command line', 'Command Line မှ Filesystem ကို ယုံကြည်စွာ သွားလာနိုင်သည်'],
      ['Use pipes and redirects', 'Pipe နှင့် Redirect များ သုံးနိုင်သည်'],
      ['Write a basic Bash script with a variable', 'Variable ပါသော အခြေခံ Bash Script ရေးနိုင်သည်'],
      ['Use conditionals and loops in a script', 'Script တွင် Conditional နှင့် Loop သုံးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-beginner-4': {
    whatItIs: t([
      'Git is a version control system that tracks changes to code over time and lets multiple people work on the same project safely.',
      'Git သည် Code ၏ ပြောင်းလဲမှုများကို အချိန်ကာလအလိုက် မှတ်တမ်းတင်ပြီး လူများစွာက Project တစ်ခုတည်းကို ဘေးကင်းစွာ အလုပ်လုပ်နိုင်စေသော Version Control System ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Every DevOps pipeline starts with code in a Git repository — deployments, CI/CD, and infrastructure-as-code all depend on Git.',
      'DevOps Pipeline တိုင်းသည် Git Repository ရှိ Code မှ စတင်သည် — Deployment၊ CI/CD နှင့် Infrastructure-as-Code အားလုံးသည် Git အပေါ် မှီခိုသည်။',
    ]),
    whereUsed: t([
      'Storing infrastructure code, triggering automated deployments, and collaborating with a team all happen through Git.',
      'Infrastructure Code များ သိမ်းဆည်းခြင်း၊ Deployment အလိုအလျောက်ဖြစ်စေခြင်းနှင့် အဖွဲ့နှင့်အတူ ပူးပေါင်းဆောင်ရွက်ခြင်းအားလုံးသည် Git မှတစ်ဆင့် ဖြစ်ပေါ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Repositories', 'Repository များ'],
      ['Commits', 'Commit များ'],
      ['Branches', 'Branch များ'],
      ['Merging', 'Merge လုပ်ခြင်း'],
      ['Remotes (push/pull)', 'Remote (Push/Pull)'],
      ['Resolving conflicts', 'Conflict များ ဖြေရှင်းခြင်း'],
    ]),
    steps: [
      step(
        ['Make your first commits', 'သင့်ပထမဆုံး Commit များ ပြုလုပ်ခြင်း'],
        [
          ['git init', 'git init'],
          ['git add', 'git add'],
          ['git commit', 'git commit'],
          ['git status', 'git status'],
        ],
        [
          ['Initialize a repository', 'Repository တစ်ခု Initialize လုပ်ပါ'],
          ['Stage and commit a file', 'File တစ်ခု Stage လုပ်ပြီး Commit လုပ်ပါ'],
          ['Check status and history', 'Status နှင့် History ကို စစ်ဆေးပါ'],
        ],
      ),
      step(
        ['Branch and merge', 'Branch ခွဲပြီး Merge လုပ်ခြင်း'],
        [
          ['git branch', 'git branch'],
          ['git checkout / switch', 'git checkout / switch'],
          ['git merge', 'git merge'],
          ['resolving a merge conflict', 'Merge Conflict ဖြေရှင်းခြင်း'],
        ],
        [
          ['Create a new branch', 'Branch အသစ်တစ်ခု ဖန်တီးပါ'],
          ['Make changes and merge them back', 'ပြောင်းလဲမှုများ ပြုလုပ်ပြီး ပြန် Merge လုပ်ပါ'],
          ['Intentionally create and resolve a conflict', 'Conflict တစ်ခုကို တမင် ဖန်တီးပြီး ဖြေရှင်းပါ'],
        ],
      ),
    ],
    build: t([
      'Create a small project, make several commits across two branches, and merge them together.',
      'Project အသေးစားတစ်ခု ဖန်တီးပြီး Branch နှစ်ခုတွင် Commit များစွာ ပြုလုပ်ကာ တစ်ခုတည်းအဖြစ် Merge လုပ်ပါ။',
    ]),
    verify: t([
      "Can you explain the difference between git merge and a conflict, and how you'd resolve one?",
      'git merge နှင့် Conflict ၏ ကွာခြားချက်ကို ရှင်းပြနိုင်ပြီး ဘယ်လိုဖြေရှင်းမလဲဆိုတာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Commit small, meaningful changes instead of one giant commit at the end.', 'အဆုံးမှာ Commit ကြီးတစ်ခုတည်း မလုပ်ဘဲ သေးငယ်ပြီး အဓိပ္ပာယ်ရှိသော Commit များ ပြုလုပ်ပါ။'],
      ["Write clear commit messages — 'fixed stuff' won't help future you.", "ရှင်းလင်းသော Commit Message များ ရေးပါ — 'fixed stuff' က နောင်တွင် အကူအညီ မဖြစ်ပါ။"],
      ["Practice resolving conflicts on purpose so they're less scary later.", 'နောင်တွင် စိုးရိမ်စရာ နည်းအောင် Conflict များကို တမင် လေ့ကျင့်ဖြေရှင်းကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Committing directly to the main branch out of habit.', 'အလေ့အကျင့်အရ Main Branch ပေါ်တွင် တိုက်ရိုက် Commit လုပ်ခြင်း။'],
      ['Panicking at merge conflicts instead of reading what changed.', 'ဘာပြောင်းလဲခဲ့လဲဆိုတာ မဖတ်ဘဲ Merge Conflict တွေ့ရင် စိတ်ပူခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-beginner-4', [
      ['Initialize a Git repository', 'Git Repository တစ်ခု Initialize လုပ်ပါ'],
      ['Make three commits', 'Commit သုံးခု ပြုလုပ်ပါ'],
      ['Create and switch branches', 'Branch များ ဖန်တီးပြီး ပြောင်းပါ'],
      ['Merge a branch', 'Branch တစ်ခုကို Merge လုပ်ပါ'],
      ['Resolve a merge conflict', 'Merge Conflict တစ်ခု ဖြေရှင်းပါ'],
    ]),
    completionChecklist: list([
      ['Initialize and use a Git repository', 'Git Repository ကို Initialize လုပ်ပြီး သုံးနိုင်သည်'],
      ['Create commits with clear messages', 'ရှင်းလင်းသော Message ပါသော Commit များ ပြုလုပ်နိုင်သည်'],
      ['Create and merge branches', 'Branch များ ဖန်တီးပြီး Merge လုပ်နိုင်သည်'],
      ['Resolve a basic merge conflict', 'အခြေခံ Merge Conflict တစ်ခု ဖြေရှင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-core-1': {
    whatItIs: t([
      'Docker packages an application with everything it needs to run into a container — a lightweight, portable unit that behaves the same everywhere.',
      'Docker သည် Application တစ်ခုကို လည်ပတ်ရန် လိုအပ်သည့်အရာအားလုံးနှင့်အတူ Container တစ်ခု — မည်သည့်နေရာတွင်မဆို တူညီစွာ လုပ်ဆောင်နိုင်သော ပေါ့ပါးပြီး ရွှေ့ပြောင်းနိုင်သော Unit — အဖြစ် ထုပ်ပိုးပေးသည်။',
    ]),
    whyItMatters: t([
      "Containers solve the classic 'it works on my machine' problem and are the foundation almost every modern deployment pipeline is built on.",
      "Container များသည် 'ကျွန်တော့် ကွန်ပျူတာမှာတော့ အလုပ်လုပ်တယ်' ဆိုသော ပြဿနာအမျိုးအစားကို ဖြေရှင်းပေးပြီး ခေတ်မီ Deployment Pipeline နီးပါးအားလုံး၏ အခြေခံ ဖြစ်သည်။",
    ]),
    whereUsed: t([
      'Running applications consistently across development, testing, and production, and as the building block for Kubernetes and most cloud deployments.',
      'Development၊ Testing နှင့် Production တစ်လျှောက် Application များကို တသမတ်တည်း Run ခြင်း၊ Kubernetes နှင့် Cloud Deployment အများစု၏ အခြေခံအုတ်မြစ်အဖြစ်။',
    ]),
    prerequisiteNote: t([
      'Solid Linux and command line basics make Docker much easier to learn.',
      'Linux နှင့် Command Line အခြေခံ ကောင်းကောင်းရှိရင် Docker ကို ပိုလွယ်လွယ်ကူကူ လေ့လာနိုင်ပါတယ်။',
    ]),
    firstSteps: list([
      ['Images vs containers', 'Image နှင့် Container ကွာခြားချက်'],
      ['Running your first container', 'သင့်ပထမဆုံး Container ကို Run ခြင်း'],
      ['Writing a Dockerfile', 'Dockerfile ရေးခြင်း'],
      ['Volumes and networking', 'Volume များနှင့် Networking'],
      ['Docker Compose basics', 'Docker Compose အခြေခံ'],
    ]),
    steps: [
      step(
        ['Run and manage containers', 'Container များ Run ပြီး စီမံခန့်ခွဲခြင်း'],
        [
          ['docker run', 'docker run'],
          ['docker ps', 'docker ps'],
          ['docker stop', 'docker stop'],
          ['docker logs', 'docker logs'],
        ],
        [
          ['Run a simple container from a public image', 'Public Image တစ်ခုမှ ရိုးရှင်းသော Container တစ်ခု Run ပါ'],
          ['List running containers', 'လက်ရှိ Run နေသော Container များကို List ပြပါ'],
          ["View a container's logs", 'Container ၏ Log များကို ကြည့်ပါ'],
        ],
      ),
      step(
        ['Build your own image', 'သင့်ကိုယ်ပိုင် Image တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Dockerfile syntax (FROM, COPY, RUN, CMD)', 'Dockerfile Syntax (FROM, COPY, RUN, CMD)'],
          ['Building an image', 'Image တစ်ခု Build လုပ်ခြင်း'],
          ['Tagging images', 'Image များကို Tag တပ်ခြင်း'],
        ],
        [
          ['Write a Dockerfile for a simple app', 'ရိုးရှင်းသော App တစ်ခုအတွက် Dockerfile ရေးပါ'],
          ['Build the image', 'Image ကို Build လုပ်ပါ'],
          ['Run a container from your own image', 'သင့်ကိုယ်ပိုင် Image မှ Container တစ်ခု Run ပါ'],
        ],
      ),
    ],
    build: t([
      'Containerize a simple web application and run it locally with Docker.',
      'Web Application အသေးစားတစ်ခုကို Container ပြုလုပ်ပြီး Docker ဖြင့် Local တွင် Run ပါ။',
    ]),
    verify: t([
      'Can you explain the difference between a Docker image and a container?',
      'Docker Image နှင့် Container ၏ ကွာခြားချက်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep Dockerfiles simple at first — optimization can come later.', 'Dockerfile များကို အစပိုင်းတွင် ရိုးရှင်းအောင် ထားပါ — Optimization ကို နောက်မှ လုပ်နိုင်ပါတယ်။'],
      ['Read the logs when a container fails instead of guessing.', 'Container ပျက်တဲ့အခါ မှန်းဆမနေဘဲ Log များ ဖတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Learning Docker before basic Linux concepts, which makes everything harder.', 'Linux အခြေခံ သဘောတရားများ မလေ့လာခင် Docker ကို အရင်လေ့လာခြင်းက အရာအားလုံးကို ပိုခက်ခဲစေသည်။'],
      ['Building huge, unoptimized images without understanding why size matters.', 'Size ဘာကြောင့်အရေးကြီးလဲ မနားလည်ဘဲ ကြီးမားပြီး Optimize မလုပ်ထားသော Image များ တည်ဆောက်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-core-1', [
      ['Run a container from a public image', 'Public Image တစ်ခုမှ Container တစ်ခု Run ပါ'],
      ['Write a Dockerfile', 'Dockerfile တစ်ခု ရေးပါ'],
      ['Build an image from your Dockerfile', 'သင့် Dockerfile မှ Image တစ်ခု Build လုပ်ပါ'],
      ['Run a container from your own image', 'သင့်ကိုယ်ပိုင် Image မှ Container တစ်ခု Run ပါ'],
      ['Use a volume to persist data', 'Data ထိန်းသိမ်းရန် Volume တစ်ခု သုံးပါ'],
    ]),
    completionChecklist: list([
      ['Explain the difference between images and containers', 'Image နှင့် Container ကွာခြားချက်ကို ရှင်းပြနိုင်သည်'],
      ['Run and manage containers from the command line', 'Command Line မှ Container များ Run ပြီး စီမံခန့်ခွဲနိုင်သည်'],
      ['Write a basic Dockerfile', 'အခြေခံ Dockerfile ရေးနိုင်သည်'],
      ['Use volumes for persistent data', 'Data ထာဝရသိမ်းဆည်းရန် Volume များ သုံးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-core-2': {
    whatItIs: t([
      'CI/CD automates testing and deploying code every time changes are made, instead of doing it manually.',
      'CI/CD သည် Code ပြောင်းလဲတိုင်း Manual လုပ်နေမည့်အစား Testing နှင့် Deploying ကို အလိုအလျောက် လုပ်ဆောင်ပေးသည်။',
    ]),
    whyItMatters: t([
      "It's how modern teams ship changes reliably and quickly, catching mistakes before they reach real users.",
      'ခေတ်မီအဖွဲ့များသည် အမှားများကို အသုံးပြုသူအစစ်ထံ မရောက်မီ ဖမ်းဆီးနိုင်ရန် ယုံကြည်စိတ်ချစွာ၊ မြန်ဆန်စွာ ပြောင်းလဲမှုများ Ship ချသောနည်းလမ်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      "Every time you push code and it automatically gets tested and deployed — that's CI/CD running behind almost every modern software team.",
      'Code Push လိုက်တိုင်း အလိုအလျောက် Test လုပ်ပြီး Deploy ဖြစ်သွားတိုင်း — ၎င်းသည် ခေတ်မီ Software အဖွဲ့နီးပါးအားလုံး နောက်ကွယ်တွင် လည်ပတ်နေသော CI/CD ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      "You'll need Git and Docker basics before this makes full sense.",
      'ဒီနေရာမှာ အပြည့်အဝနားလည်ဖို့ Git နှင့် Docker အခြေခံ လိုအပ်ပါတယ်။',
    ]),
    firstSteps: list([
      ['What continuous integration means', 'Continuous Integration ဆိုတာ ဘာလဲ'],
      ['What continuous deployment means', 'Continuous Deployment ဆိုတာ ဘာလဲ'],
      ['Pipeline stages (build, test, deploy)', 'Pipeline အဆင့်များ (Build, Test, Deploy)'],
      ['Writing a simple pipeline config', 'ရိုးရှင်းသော Pipeline Config ရေးခြင်း'],
    ]),
    steps: [
      step(
        ["Understand a pipeline's stages", 'Pipeline ၏ အဆင့်များကို နားလည်ခြင်း'],
        [
          ['Build stage', 'Build အဆင့်'],
          ['Test stage', 'Test အဆင့်'],
          ['Deploy stage', 'Deploy အဆင့်'],
          ['Triggers (push, pull request)', 'Trigger များ (Push, Pull Request)'],
        ],
        [
          ['Read an existing pipeline configuration file', 'လက်ရှိ Pipeline Configuration File တစ်ခုကို ဖတ်ပါ'],
          ["Identify each stage's purpose", 'အဆင့်တစ်ခုစီ၏ ရည်ရွယ်ချက်ကို ဖော်ထုတ်ပါ'],
          ['Trace what triggers a run', 'ဘာက Run တစ်ခုကို Trigger လုပ်သလဲ ခြေရာခံပါ'],
        ],
      ),
      step(
        ['Build a simple pipeline', 'ရိုးရှင်းသော Pipeline တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['YAML basics for pipeline configs', 'Pipeline Config အတွက် YAML အခြေခံ'],
          ['Running tests automatically', 'Test များကို အလိုအလျောက် Run ခြင်း'],
          ['Deploying on success', 'အောင်မြင်ပါက Deploy လုပ်ခြင်း'],
        ],
        [
          ['Write a pipeline that runs a test on every push', 'Push တိုင်းတွင် Test Run မည့် Pipeline တစ်ခု ရေးပါ'],
          ['Add a build step', 'Build အဆင့်တစ်ခု ထည့်ပါ'],
          ['Add a simple deploy step', 'ရိုးရှင်းသော Deploy အဆင့်တစ်ခု ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Set up a CI/CD pipeline for a small project that runs tests automatically on every push.',
      'Push တိုင်းတွင် Test များ အလိုအလျောက် Run မည့် Project အသေးစားတစ်ခုအတွက် CI/CD Pipeline တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Can you explain what happens, step by step, from a code push to a deployed change?',
      'Code Push လုပ်ချိန်မှ ပြောင်းလဲမှု Deploy ဖြစ်သည်အထိ အဆင့်ဆင့် ဘာဖြစ်သွားသလဲဆိုတာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with a pipeline that just runs tests before adding deployment.', 'Deployment မထည့်ခင် Test များကိုသာ Run မည့် Pipeline ဖြင့် စတင်ပါ။'],
      [
        'Read pipeline logs carefully when something fails — the answer is usually there.',
        'တစ်ခုခု ပျက်တဲ့အခါ Pipeline Log များကို သေချာဖတ်ပါ — အဖြေက များသောအားဖြင့် အဲဒီမှာ ရှိပါတယ်။',
      ],
    ]),
    commonMistakes: list([
      ['Automating deployment before the tests are actually reliable.', 'Test များ တကယ်ယုံကြည်ရမှုမရှိခင် Deployment ကို အလိုအလျောက်ဖြစ်အောင် လုပ်ခြင်း။'],
      ['Not understanding what a pipeline does before copying one from the internet.', 'Internet မှ Pipeline တစ်ခုကို မကူးခင် ဘာလုပ်ဆောင်သလဲဆိုတာ မနားလည်ဘဲ ကူးယူခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-core-2', [
      ['Read and explain an existing pipeline file', 'လက်ရှိ Pipeline File တစ်ခုကို ဖတ်ပြီး ရှင်းပြပါ'],
      ['Write a pipeline that runs on every push', 'Push တိုင်းတွင် Run မည့် Pipeline တစ်ခု ရေးပါ'],
      ['Add an automated test step', 'Automated Test အဆင့်တစ်ခု ထည့်ပါ'],
      ['Add a deploy step', 'Deploy အဆင့်တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain what CI/CD is and why it matters', 'CI/CD ဆိုတာဘာလဲနှင့် ဘာကြောင့်အရေးကြီးလဲ ရှင်းပြနိုင်သည်'],
      ['Read and understand a pipeline configuration', 'Pipeline Configuration တစ်ခုကို ဖတ်ပြီး နားလည်နိုင်သည်'],
      ['Write a basic pipeline with a test stage', 'Test အဆင့်ပါသော အခြေခံ Pipeline ရေးနိုင်သည်'],
      ['Explain the path from code push to deployment', 'Code Push မှ Deployment အထိ လမ်းကြောင်းကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-core-3': {
    whatItIs: t([
      'A cloud provider (like AWS, Azure, or Google Cloud) rents out computing power, storage, and services over the internet instead of you owning physical servers.',
      'Cloud Provider (AWS, Azure, Google Cloud စသည်) သည် Server ရုပ်ပိုင်းဆိုင်ရာ ပိုင်ဆိုင်မည့်အစား Computing Power၊ Storage နှင့် Service များကို Internet မှတစ်ဆင့် ငှားရမ်းပေးသည်။',
    ]),
    whyItMatters: t([
      'Most modern companies run their infrastructure on a cloud provider instead of owning physical servers, so cloud skills are core to Cloud/DevOps work.',
      'ခေတ်မီကုမ္ပဏီအများစုသည် Server ရုပ်ပိုင်းဆိုင်ရာ ပိုင်ဆိုင်မည့်အစား Cloud Provider ပေါ်တွင် Infrastructure ကို လည်ပတ်ကြသဖြင့် Cloud ကျွမ်းကျင်မှုများသည် Cloud/DevOps အလုပ်၏ အဓိကအစိတ်အပိုင်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Hosting websites, storing files, running databases, and scaling applications up or down based on demand.',
      'Website များ Host လုပ်ခြင်း၊ File များ သိမ်းဆည်းခြင်း၊ Database များ လည်ပတ်ခြင်းနှင့် Demand အလိုက် Application များကို ချဲ့ခြင်း/ချုံ့ခြင်း။',
    ]),
    prerequisiteNote: t([
      'Networking and Linux basics make cloud concepts click much faster.',
      'Networking နှင့် Linux အခြေခံများက Cloud သဘောတရားများကို ပိုမြန်နားလည်စေသည်။',
    ]),
    firstSteps: list([
      ['Compute (virtual machines)', 'Compute (Virtual Machine များ)'],
      ['Storage', 'Storage'],
      ['Networking in the cloud (VPCs)', 'Cloud ရှိ Networking (VPC)'],
      ['Regions and availability zones', 'Region များနှင့် Availability Zone များ'],
      ['Pricing basics', 'စျေးနှုန်း အခြေခံ'],
    ]),
    steps: [
      step(
        ['Launch your first cloud resource', 'သင့်ပထမဆုံး Cloud Resource ကို စတင်ခြင်း'],
        [
          ['What a virtual machine is', 'Virtual Machine ဆိုတာ ဘာလဲ'],
          ['Choosing an instance size', 'Instance Size ရွေးချယ်ခြင်း'],
          ['Connecting to a VM', 'VM တစ်ခုသို့ ချိတ်ဆက်ခြင်း'],
        ],
        [
          ['Create a free-tier virtual machine', 'Free-tier Virtual Machine တစ်ခု ဖန်တီးပါ'],
          ['Connect to it over SSH', 'SSH ဖြင့် ချိတ်ဆက်ပါ'],
          ['Shut it down when done to avoid charges', 'ငွေတောင်းခံမှု ရှောင်ရှားရန် ပြီးလျှင် ပိတ်ပါ'],
        ],
      ),
      step(
        ['Understand cloud storage and networking', 'Cloud Storage နှင့် Networking ကို နားလည်ခြင်း'],
        [
          ['Object storage basics', 'Object Storage အခြေခံ'],
          ['What a VPC is', 'VPC ဆိုတာ ဘာလဲ'],
          ['Security groups / firewall rules', 'Security Group / Firewall Rule များ'],
        ],
        [
          ['Upload a file to cloud storage', 'Cloud Storage သို့ File တစ်ခု Upload လုပ်ပါ'],
          ['Create a simple VPC', 'ရိုးရှင်းသော VPC တစ်ခု ဖန်တီးပါ'],
          ['Open a port using a security group', 'Security Group ဖြင့် Port တစ်ခု ဖွင့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Launch a small virtual machine on a free tier, connect to it, and host a simple web page on it.',
      'Free Tier တွင် Virtual Machine အသေးစားတစ်ခု စတင်ပြီး ချိတ်ဆက်ကာ ၎င်းပေါ်တွင် Web Page ရိုးရှင်းတစ်ခု Host လုပ်ပါ။',
    ]),
    verify: t([
      'Can you explain what a region and an availability zone are, and why they matter for reliability?',
      'Region နှင့် Availability Zone ဆိုတာဘာလဲ၊ ယုံကြည်စိတ်ချရမှုအတွက် ဘာကြောင့်အရေးကြီးသလဲ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always use free-tier resources while learning, and shut them down afterward.', 'လေ့လာနေစဉ် Free-tier Resource များကိုသာ အမြဲသုံးပြီး ပြီးသွားလျှင် ပိတ်ထားပါ။'],
      [
        'Focus on one cloud provider first — the concepts transfer once you know one well.',
        'ပထမဆုံး Cloud Provider တစ်ခုကိုသာ အာရုံစိုက်ပါ — တစ်ခုကို ကောင်းကောင်းသိပြီဆိုရင် သဘောတရားများ လွှဲပြောင်းနိုင်ပါတယ်။',
      ],
    ]),
    commonMistakes: list([
      ['Leaving cloud resources running and getting unexpectedly billed.', 'Cloud Resource များကို ဆက်လည်ပတ်နေစေပြီး မမျှော်လင့်ဘဲ ငွေတောင်းခံခြင်း။'],
      [
        'Trying to learn all three major cloud providers at once instead of going deep on one.',
        'တစ်ခုကို နက်နက်ရှိုင်းရှိုင်း မလေ့လာဘဲ Cloud Provider ကြီးသုံးခုစလုံးကို တစ်ပြိုင်နက် လေ့လာကြိုးစားခြင်း။',
      ],
    ]),
    practiceTasks: tasks('cloud-devops-core-3', [
      ['Create a free-tier cloud account', 'Free-tier Cloud Account တစ်ခု ဖန်တီးပါ'],
      ['Launch a virtual machine', 'Virtual Machine တစ်ခု စတင်ပါ'],
      ['Connect to your VM over SSH', 'SSH ဖြင့် သင့် VM ကို ချိတ်ဆက်ပါ'],
      ['Upload a file to cloud storage', 'Cloud Storage သို့ File တစ်ခု Upload လုပ်ပါ'],
      ['Open a port using a security group or firewall rule', 'Security Group (သို့) Firewall Rule ဖြင့် Port တစ်ခု ဖွင့်ပါ'],
      ['Shut down your resources when finished', 'ပြီးသွားလျှင် သင့် Resource များကို ပိတ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain what a cloud provider offers compared to physical servers', 'Cloud Provider က Server ရုပ်ပိုင်းဆိုင်ရာနှင့် စာလျှင် ဘာပေးသလဲ ရှင်းပြနိုင်သည်'],
      ['Launch and connect to a virtual machine', 'Virtual Machine တစ်ခု စတင်ပြီး ချိတ်ဆက်နိုင်သည်'],
      ['Use basic cloud storage', 'အခြေခံ Cloud Storage သုံးနိုင်သည်'],
      ['Explain regions and availability zones', 'Region များနှင့် Availability Zone များ ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-core-4': {
    whatItIs: t([
      'Infrastructure as Code (IaC) means defining servers, networks, and cloud resources in text files instead of clicking through a dashboard.',
      'Infrastructure as Code (IaC) ဆိုသည်မှာ Dashboard ကို နှိပ်နေမည့်အစား Server၊ Network နှင့် Cloud Resource များကို Text File များတွင် သတ်မှတ်ရေးသားခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'IaC makes infrastructure repeatable, reviewable, and version-controlled — the same discipline you use for application code, applied to servers.',
      'IaC သည် Infrastructure ကို ထပ်ခါထပ်ခါ ပြန်လုပ်နိုင်၊ ပြန်စစ်ဆေးနိုင်၊ Version Control လုပ်နိုင်စေသည် — Application Code အတွက် အသုံးပြုသော စည်းကမ်းအတိုင်း Server များအပေါ် အသုံးချခြင်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Setting up entire cloud environments consistently across teams, and recreating infrastructure quickly after a failure.',
      'အဖွဲ့များအကြား Cloud Environment တစ်ခုလုံးကို တသမတ်တည်း တည်ဆောက်ခြင်းနှင့် ပျက်စီးမှုတစ်ခုနောက်ပိုင်း Infrastructure ကို မြန်ဆန်စွာ ပြန်လည်ဖန်တီးခြင်း။',
    ]),
    prerequisiteNote: t([
      'You should be comfortable with cloud provider basics and Git before this.',
      'ဒီနေရာမတိုင်ခင် Cloud Provider အခြေခံနှင့် Git ကို အဆင်ပြေနေသင့်ပါတယ်။',
    ]),
    firstSteps: list([
      ['Why IaC instead of clicking a dashboard', 'Dashboard နှိပ်မည့်အစား IaC ကို ဘာကြောင့်သုံးရသလဲ'],
      ['Declarative vs imperative config', 'Declarative နှင့် Imperative Config'],
      ['Writing your first IaC file', 'သင့်ပထမဆုံး IaC File ရေးခြင်း'],
      ['Applying and destroying infrastructure', 'Infrastructure ကို Apply လုပ်ခြင်းနှင့် ဖျက်ခြင်း'],
    ]),
    steps: [
      step(
        ['Understand declarative infrastructure', 'Declarative Infrastructure ကို နားလည်ခြင်း'],
        [
          ["What 'declarative' means", "'Declarative' ဆိုတာ ဘာလဲ"],
          ['Resources and providers', 'Resource များနှင့် Provider များ'],
          ['State — how the tool tracks what exists', 'State — Tool သည် ရှိနေသောအရာများကို ဘယ်လို မှတ်တမ်းတင်သလဲ'],
        ],
        [
          ['Read a simple IaC file and predict what it creates', 'ရိုးရှင်းသော IaC File တစ်ခုကို ဖတ်ပြီး ဘာဖန်တီးမည်ဆိုတာ ခန့်မှန်းပါ'],
          ['Identify the provider and resources in an example file', 'ဥပမာ File တစ်ခုရှိ Provider နှင့် Resource များကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Write and apply your first IaC config', 'သင့်ပထမဆုံး IaC Config ကို ရေးပြီး Apply လုပ်ခြင်း'],
        [
          ['Basic syntax for defining a resource', 'Resource တစ်ခု သတ်မှတ်ရန် အခြေခံ Syntax'],
          ['Plan before apply', 'Apply မလုပ်ခင် Plan'],
          ['Destroying resources safely', 'Resource များကို ဘေးကင်းစွာ ဖျက်ခြင်း'],
        ],
        [
          ['Write a config that creates a single small resource', 'Resource အသေးစားတစ်ခု ဖန်တီးမည့် Config ရေးပါ'],
          ['Run a plan and review it', 'Plan တစ်ခု Run ပြီး ပြန်စစ်ဆေးပါ'],
          ['Apply it, then destroy it', 'Apply လုပ်ပြီး ပြန်ဖျက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write an IaC file that creates one small cloud resource (like a storage bucket), apply it, then destroy it.',
      'Cloud Resource အသေးစားတစ်ခု (ဥပမာ Storage Bucket) ဖန်တီးမည့် IaC File တစ်ခု ရေးပြီး Apply လုပ်ကာ ပြန်ဖျက်ပါ။',
    ]),
    verify: t([
      "Can you explain why reviewing a 'plan' before applying changes matters?",
      "ပြောင်းလဲမှုများ Apply မလုပ်ခင် 'Plan' ကို ပြန်စစ်ဆေးခြင်းက ဘာကြောင့်အရေးကြီးသလဲ ရှင်းပြနိုင်ပါသလား?",
    ]),
    tips: list([
      [
        'Always review the plan output before applying — it tells you exactly what will change.',
        'Apply မလုပ်ခင် Plan Output ကို အမြဲပြန်စစ်ဆေးပါ — ဘာပြောင်းလဲမည်ဆိုတာ တိတိကျကျ ပြောပြပါတယ်။',
      ],
      [
        "Practice destroying resources you created so you're not afraid to clean up.",
        'ဖန်တီးထားသော Resource များကို ဖျက်ရန် လေ့ကျင့်ပါ၊ ရှင်းလင်းရန် မကြောက်စေရန်။',
      ],
    ]),
    commonMistakes: list([
      ['Applying changes without reading the plan first.', 'Plan ကို အရင်မဖတ်ဘဲ ပြောင်းလဲမှုများ Apply လုပ်ခြင်း။'],
      ['Manually changing resources that are managed by IaC, causing drift.', 'IaC ဖြင့် စီမံနေသော Resource များကို Manual ပြောင်းလဲပြီး Drift ဖြစ်စေခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-core-4', [
      ['Read an example IaC file and explain what it creates', 'IaC File နမူနာတစ်ခုကို ဖတ်ပြီး ဘာဖန်တီးမည်ဆိုတာ ရှင်းပြပါ'],
      ['Write a config for one simple resource', 'ရိုးရှင်းသော Resource တစ်ခုအတွက် Config တစ်ခု ရေးပါ'],
      ['Run a plan and review it', 'Plan တစ်ခု Run ပြီး ပြန်စစ်ဆေးပါ'],
      ['Apply your configuration', 'သင့် Configuration ကို Apply လုပ်ပါ'],
      ['Destroy the resources you created', 'ဖန်တီးထားသော Resource များကို ဖျက်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain what Infrastructure as Code means', 'Infrastructure as Code ဆိုတာဘာလဲ ရှင်းပြနိုင်သည်'],
      ['Read a simple IaC file and understand what it does', 'ရိုးရှင်းသော IaC File တစ်ခုကို ဖတ်ပြီး ဘာလုပ်သလဲ နားလည်နိုင်သည်'],
      ['Write and apply a basic configuration', 'အခြေခံ Configuration တစ်ခု ရေးပြီး Apply လုပ်နိုင်သည်'],
      ['Safely destroy resources you created', 'ဖန်တီးထားသော Resource များကို ဘေးကင်းစွာ ဖျက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-intermediate-1': {
    whatItIs: t([
      'Kubernetes is a system for running and managing many containers across multiple servers automatically.',
      'Kubernetes သည် Server များစွာ ကျယ်ကျယ်ပြန့်ပြန့်တွင် Container များစွာကို အလိုအလျောက် Run ပြီး စီမံခန့်ခွဲပေးသော System ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Once an application grows beyond a few containers on one machine, you need something to restart failed containers, distribute load, and scale automatically — that is what Kubernetes does.',
      'Application တစ်ခုသည် Machine တစ်ခုပေါ်ရှိ Container အနည်းငယ်ထက် ကျော်လွန်တိုးချဲ့လာသောအခါ ပျက်စီးသွားသော Container များကို Restart လုပ်ပေးရန်၊ Load ဖြန့်ဝေပေးရန်နှင့် အလိုအလျောက် Scale လုပ်ပေးရန် တစ်ခုခု လိုအပ်လာသည် — ဒါကို Kubernetes က လုပ်ဆောင်ပေးသည်။',
    ]),
    whereUsed: t([
      'Most companies running containerized applications at any real scale use Kubernetes, either self-managed or through a managed service like EKS, AKS, or GKE.',
      'တကယ့် Scale တစ်ခုနှင့် Container Application များ Run နေသော ကုမ္ပဏီအများစုသည် Kubernetes ကို ကိုယ်တိုင်စီမံသည်ဖြစ်စေ EKS, AKS, GKE ကဲ့သို့ Managed Service မှတစ်ဆင့်ဖြစ်စေ အသုံးပြုကြသည်။',
    ]),
    prerequisiteNote: t([
      'You should already be comfortable with Docker and containers before starting Kubernetes — it builds directly on those concepts.',
      'Kubernetes မစတင်မီ Docker နှင့် Container များနှင့် ရင်းနှီးပြီးသားဖြစ်သင့်သည် — ၎င်းသည် ထိုသဘောတရားများအပေါ် တိုက်ရိုက်တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Pods', 'Pod များ'],
      ['Deployments', 'Deployment များ'],
      ['Services', 'Service များ'],
      ['ConfigMaps and Secrets', 'ConfigMap နှင့် Secret များ'],
      ['Namespaces', 'Namespace များ'],
      ['kubectl basics', 'kubectl အခြေခံ'],
      ['YAML manifests', 'YAML Manifest များ'],
      ['A local cluster (e.g. minikube/kind)', 'Local Cluster (ဥပမာ minikube/kind)'],
    ]),
    steps: [
      step(
        ['Understand pods and deployments', 'Pod များနှင့် Deployment များ နားလည်ခြင်း'],
        [
          ['A pod is the smallest deployable unit, usually one container', 'Pod သည် Deploy လုပ်နိုင်သော အသေးဆုံး Unit ဖြစ်ပြီး များသောအားဖြင့် Container တစ်ခု'],
          ['A deployment manages a set of identical pods and keeps them running', 'Deployment သည် တူညီသော Pod အစုအဝေးကို စီမံပြီး Run နေအောင် ထိန်းသိမ်းပေးသည်'],
          ['Replicas control how many copies run at once', 'Replicas သည် တစ်ပြိုင်နက် Run နေသည့် Copy အရေအတွက်ကို ထိန်းချုပ်သည်'],
        ],
        [
          ['Start a local cluster', 'Local Cluster တစ်ခု စတင်ပါ'],
          ['Deploy a simple pod', 'ရိုးရှင်းသော Pod တစ်ခု Deploy လုပ်ပါ'],
          ['Scale a deployment up and down', 'Deployment ကို Scale Up/Down လုပ်ပါ'],
        ],
      ),
      step(
        ['Expose apps with services', 'Service များဖြင့် App များကို ဖော်ထုတ်ခြင်း'],
        [
          ['ClusterIP, NodePort, and LoadBalancer service types', 'ClusterIP, NodePort, LoadBalancer Service အမျိုးအစားများ'],
          ['How services find pods using labels', 'Service များသည် Label များအသုံးပြု၍ Pod များကို မည်သို့ရှာဖွေသနည်း'],
        ],
        [
          ['Create a service for your deployment', 'သင့် Deployment အတွက် Service တစ်ခု ဖန်တီးပါ'],
          ['Access the app through the service', 'Service မှတစ်ဆင့် App ကို ဝင်ရောက်ပါ'],
        ],
      ),
      step(
        ['Manage configuration and secrets', 'Configuration နှင့် Secret များ စီမံခန့်ခွဲခြင်း'],
        [
          ['ConfigMaps for non-sensitive settings', 'အရေးမကြီးသော Setting များအတွက် ConfigMap'],
          ['Secrets for sensitive values', 'အရေးကြီးသော Value များအတွက် Secret'],
        ],
        [
          ['Create a ConfigMap and mount it into a pod', 'ConfigMap တစ်ခု ဖန်တီးပြီး Pod ထဲသို့ Mount လုပ်ပါ'],
          ['Create a Secret and use it as an environment variable', 'Secret တစ်ခု ဖန်တီးပြီး Environment Variable အဖြစ် အသုံးပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Deploy a small multi-container application (e.g. a web app plus a database) to a local Kubernetes cluster with proper services and config.',
      'Multi-container Application အသေးစားတစ်ခု (ဥပမာ Web App နှင့် Database) ကို သင့်လျော်သော Service နှင့် Config များဖြင့် Local Kubernetes Cluster သို့ Deploy လုပ်ပါ။',
    ]),
    verify: t([
      'Can you explain the difference between a pod, a deployment, and a service, and why you need all three?',
      'Pod, Deployment, Service သုံးခုကြား ကွာခြားချက်နှင့် ဘာကြောင့် သုံးခုလုံး လိုအပ်သလဲဆိုတာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn kubectl commands by using them, not by memorizing a cheat sheet.', 'kubectl Command များကို Cheat Sheet အလွတ်ကျက်မှတ်မည့်အစား အသုံးပြုရင်း လေ့လာပါ။'],
      ['Read the YAML you apply — do not copy manifests you do not understand.', 'Apply လုပ်သော YAML ကို ဖတ်ပါ — နားမလည်သော Manifest များကို Copy မလုပ်ပါနှင့်။'],
      ['Use `kubectl describe` and `kubectl logs` constantly when debugging.', 'Debug လုပ်သည့်အခါ `kubectl describe` နှင့် `kubectl logs` ကို အမြဲသုံးပါ။'],
    ]),
    commonMistakes: list([
      ['Jumping into Kubernetes before being comfortable with Docker.', 'Docker နှင့် မရင်းနှီးမီ Kubernetes သို့ ဆောလျင်စွာ ခုန်ဝင်ခြင်း။'],
      ['Not understanding labels and selectors, then wondering why services cannot find pods.', 'Label နှင့် Selector များကို နားမလည်ဘဲ Service က Pod များကို ဘာကြောင့်ရှာမတွေ့သလဲဟု တွေးနေခြင်း။'],
      ['Treating a local single-node cluster as identical to production.', 'Local Single-node Cluster ကို Production နှင့် တူသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-intermediate-1', [
      ['Set up a local Kubernetes cluster', 'Local Kubernetes Cluster တစ်ခု တည်ဆောက်ပါ'],
      ['Write a deployment manifest', 'Deployment Manifest တစ်ခု ရေးပါ'],
      ['Expose it with a service', 'Service ဖြင့် ဖော်ထုတ်ပါ'],
      ['Create and mount a ConfigMap', 'ConfigMap တစ်ခု ဖန်တီးပြီး Mount လုပ်ပါ'],
      ['Scale a deployment', 'Deployment တစ်ခုကို Scale လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain pods, deployments, and services', 'Pod, Deployment, Service များကို ရှင်းပြနိုင်သည်'],
      ['Deploy an app to a local cluster', 'App တစ်ခုကို Local Cluster သို့ Deploy လုပ်နိုင်သည်'],
      ['Manage config and secrets', 'Config နှင့် Secret များ စီမံနိုင်သည်'],
      ['Scale a deployment', 'Deployment တစ်ခုကို Scale လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-intermediate-2': {
    whatItIs: t([
      'Monitoring tells you what is happening in your systems right now; logging records what happened so you can investigate it later.',
      'Monitoring သည် သင့် System တွင် ယခုဖြစ်ပျက်နေသည်ကို ပြောပြပေးပြီး Logging သည် နောက်မှ စုံစမ်းစစ်ဆေးနိုင်ရန် ဖြစ်ပျက်ခဲ့သည်များကို မှတ်တမ်းတင်ပေးသည်။',
    ]),
    whyItMatters: t([
      'You cannot fix or improve what you cannot see — production issues are usually found and diagnosed through monitoring and logs, not guesswork.',
      'မမြင်နိုင်သောအရာကို ပြင်ဆင် (သို့) တိုးတက်အောင် မလုပ်နိုင်ပါ — Production ပြဿနာများကို ခန့်မှန်းခြင်းဖြင့်မဟုတ်ဘဲ Monitoring နှင့် Log များမှတစ်ဆင့် ရှာဖွေတွေ့ရှိလေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'Every production system that matters has some form of monitoring and centralized logging — tools like Prometheus, Grafana, and the ELK/EFK stack are industry standards.',
      'အရေးကြီးသော Production System တိုင်းတွင် Monitoring နှင့် ဗဟိုပြု Logging တစ်မျိုးမျိုးရှိသည် — Prometheus, Grafana, ELK/EFK Stack ကဲ့သို့ Tool များသည် စက်မှုလုပ်ငန်း စံနှုန်းများဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Metrics vs logs vs traces', 'Metrics, Logs, Traces ကွာခြားချက်'],
      ['Log levels', 'Log Level များ'],
      ['Dashboards', 'Dashboard များ'],
      ['Alerting basics', 'Alerting အခြေခံ'],
      ['Centralized logging concepts', 'ဗဟိုပြု Logging သဘောတရားများ'],
    ]),
    steps: [
      step(
        ['Understand the three pillars of observability', 'Observability ၏ ကျောရိုးသုံးခု နားလည်ခြင်း'],
        [
          ['Metrics — numeric measurements over time (CPU, request count)', 'Metrics — အချိန်နှင့်အမျှ ကိန်းဂဏန်း တိုင်းတာမှုများ (CPU, Request Count)'],
          ['Logs — timestamped records of events', 'Logs — အချိန်တံဆိပ်ခတ်ထားသော ဖြစ်ရပ်မှတ်တမ်းများ'],
          ['Traces — the path a single request takes through a system', 'Traces — Request တစ်ခုသည် System တစ်ခုလုံးကို ဖြတ်သန်းသွားသည့် လမ်းကြောင်း'],
        ],
        [
          ['Identify which of the three you would use to answer a given question', 'ပေးထားသော မေးခွန်းတစ်ခုအား ဖြေရန် သုံးမျိုးထဲမှ မည်သည့်အရာကို သုံးမည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Set up basic monitoring', 'အခြေခံ Monitoring တည်ဆောက်ခြင်း'],
        [
          ['Installing a metrics tool (e.g. Prometheus)', 'Metrics Tool (ဥပမာ Prometheus) Install လုပ်ခြင်း'],
          ['Building a simple dashboard (e.g. Grafana)', 'ရိုးရှင်းသော Dashboard (ဥပမာ Grafana) တည်ဆောက်ခြင်း'],
        ],
        [
          ['Install a metrics stack locally', 'Metrics Stack တစ်ခုကို Local တွင် Install လုပ်ပါ'],
          ['Build a dashboard showing CPU and memory usage', 'CPU နှင့် Memory အသုံးပြုမှု ပြသသော Dashboard တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Set up centralized logging and alerts', 'ဗဟိုပြု Logging နှင့် Alert များ တည်ဆောက်ခြင်း'],
        [
          ['Shipping logs from an app to a central store', 'App မှ Log များကို ဗဟိုပြု Store သို့ ပို့ဆောင်ခြင်း'],
          ['Writing a simple alert rule', 'ရိုးရှင်းသော Alert Rule တစ်ခု ရေးခြင်း'],
        ],
        [
          ['Ship logs from a sample app to a log aggregator', 'နမူနာ App မှ Log များကို Log Aggregator သို့ ပို့ဆောင်ပါ'],
          ['Create an alert that fires when an error rate spikes', 'Error Rate မြင့်တက်လာသည့်အခါ Alert တစ်ခု Fire ဖြစ်စေပါ'],
        ],
      ),
    ],
    build: t([
      'Add monitoring and logging to one of your earlier practice projects: a dashboard, centralized logs, and at least one alert.',
      'သင့် ယခင်လေ့ကျင့်မှု Project တစ်ခုတွင် Monitoring နှင့် Logging ထည့်ပါ — Dashboard တစ်ခု၊ ဗဟိုပြု Log များနှင့် အနည်းဆုံး Alert တစ်ခု။',
    ]),
    verify: t([
      'If your application error rate suddenly doubled, could you find out why using only your dashboards and logs?',
      'သင့် Application Error Rate ရုတ်တရက် နှစ်ဆတက်လာလျှင် Dashboard နှင့် Log များကိုသာ သုံး၍ အကြောင်းရင်း ရှာတွေ့နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Build dashboards for questions you actually need answered, not everything possible.', 'ဖြစ်နိုင်သမျှ အရာများအတွက်မဟုတ်ဘဲ တကယ်လိုအပ်သော မေးခွန်းများအတွက် Dashboard များ တည်ဆောက်ပါ။'],
      ['Alert on symptoms users feel, not every internal metric.', 'Internal Metric တိုင်းအတွက်မဟုတ်ဘဲ User ခံစားရသော လက္ခဏာများအတွက် Alert လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Collecting metrics and logs but never actually looking at them.', 'Metrics နှင့် Log များ စုဆောင်းထားပေမယ့် တကယ်ဘယ်တော့မှ မကြည့်ခြင်း။'],
      ['Alert fatigue from too many low-value alerts.', 'တန်ဖိုးနည်းသော Alert များ အလွန်များပြီး Alert Fatigue ဖြစ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-intermediate-2', [
      ['Install a metrics + dashboard stack', 'Metrics + Dashboard Stack တစ်ခု Install လုပ်ပါ'],
      ['Build one useful dashboard', 'အသုံးဝင်သော Dashboard တစ်ခု တည်ဆောက်ပါ'],
      ['Ship logs to a central location', 'Log များကို ဗဟိုနေရာသို့ ပို့ဆောင်ပါ'],
      ['Write one meaningful alert rule', 'အဓိပ္ပာယ်ရှိသော Alert Rule တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain metrics, logs, and traces', 'Metrics, Logs, Traces ကို ရှင်းပြနိုင်သည်'],
      ['Build a basic monitoring dashboard', 'အခြေခံ Monitoring Dashboard တည်ဆောက်နိုင်သည်'],
      ['Centralize logs from an application', 'Application မှ Log များကို ဗဟိုပြုနိုင်သည်'],
      ['Write a meaningful alert', 'အဓိပ္ပာယ်ရှိသော Alert တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-intermediate-3': {
    whatItIs: t([
      'Automation and scripting means writing code that performs operational tasks for you instead of doing them by hand every time.',
      'Automation နှင့် Scripting ဆိုသည်မှာ လုပ်ငန်းလည်ပတ်မှု လုပ်ငန်းတာဝန်များကို လက်ဖြင့် အကြိမ်တိုင်း မလုပ်ဘဲ သင့်အတွက် ဆောင်ရွက်ပေးမည့် Code ရေးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'DevOps as a discipline exists to remove repetitive manual work — the more you automate correctly, the fewer human errors and the faster your team can move.',
      'DevOps ဆိုသည်မှာ ထပ်ခါထပ်ခါ လက်ဖြင့်လုပ်ရသော အလုပ်များကို ဖယ်ရှားရန် ရှိနေခြင်း ဖြစ်သည် — မှန်ကန်စွာ Automate ပိုလုပ်လေ လူ့အမှားနည်းလေ၊ အဖွဲ့ ပိုမြန်လေ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Automation scripts run deployments, back up databases, rotate logs, scale infrastructure, and handle countless routine operational tasks across every serious engineering team.',
      'Automation Script များသည် Deployment များ Run ခြင်း၊ Database များ Backup လုပ်ခြင်း၊ Log များ Rotate လုပ်ခြင်း၊ Infrastructure Scale လုပ်ခြင်းနှင့် အင်ဂျင်နီယာ အဖွဲ့တိုင်းရှိ ပုံမှန်လုပ်ငန်းတာဝန် အများအပြားကို ကိုင်တွယ်ဆောင်ရွက်ပေးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Shell scripting (Bash)', 'Shell Scripting (Bash)'],
      ['A general-purpose scripting language (e.g. Python)', 'General-purpose Scripting Language (ဥပမာ Python)'],
      ['Cron jobs / scheduled tasks', 'Cron Job / အချိန်ဇယားချ Task များ'],
      ['Idempotency', 'Idempotency'],
      ['Error handling in scripts', 'Script များတွင် Error Handling'],
    ]),
    steps: [
      step(
        ['Write reliable shell scripts', 'ယုံကြည်စိတ်ချရသော Shell Script များ ရေးခြင်း'],
        [
          ['Variables, conditionals, and loops in Bash', 'Bash ရှိ Variable, Conditional, Loop များ'],
          ['Exiting on error (`set -e`) and checking exit codes', 'Error တွင် ရပ်တန့်ခြင်း (`set -e`) နှင့် Exit Code များ စစ်ဆေးခြင်း'],
        ],
        [
          ['Write a script that backs up a directory', 'Directory တစ်ခုကို Backup လုပ်သော Script တစ်ခု ရေးပါ'],
          ['Add error handling so it fails loudly, not silently', 'တိတ်တဆိတ်မဟုတ်ဘဲ ကျယ်ကျယ်ဖေါ်ပြသော Error Handling ထည့်ပါ'],
        ],
      ),
      step(
        ['Automate a repetitive task end to end', 'ထပ်ခါထပ်ခါလုပ်ရသော အလုပ်တစ်ခုကို အစအဆုံး Automate လုပ်ခြင်း'],
        [
          ['Choosing between a shell script and a full scripting language', 'Shell Script နှင့် Full Scripting Language ကြား ရွေးချယ်ခြင်း'],
          ['Idempotency — running the same script twice should be safe', 'Idempotency — Script တစ်ခုကို နှစ်ကြိမ် Run ခြင်းသည် ဘေးကင်းသင့်သည်'],
        ],
        [
          ['Automate a task you previously did manually', 'ယခင်က လက်ဖြင့်လုပ်ခဲ့သော Task တစ်ခုကို Automate လုပ်ပါ'],
          ['Schedule it to run automatically', 'အလိုအလျောက် Run ရန် Schedule ချပါ'],
        ],
      ),
    ],
    build: t([
      'Build a script (or small set of scripts) that automates a full routine task — for example, pulling the latest code, running tests, and deploying if they pass.',
      'ပုံမှန်လုပ်ငန်းတာဝန်တစ်ခုလုံးကို Automate လုပ်သော Script (သို့) Script အစုအဝေးအသေးစားကို တည်ဆောက်ပါ — ဥပမာ Code နောက်ဆုံးဗားရှင်း ဆွဲယူခြင်း၊ Test များ Run ခြင်း၊ အောင်မြင်ပါက Deploy လုပ်ခြင်း။',
    ]),
    verify: t([
      'If you run your script twice in a row, does anything break? If yes, your script is not idempotent.',
      'သင့် Script ကို အဆက်တိုက် နှစ်ကြိမ် Run လျှင် တစ်ခုခု ပျက်သလား? ပျက်ပါက သင့် Script သည် Idempotent မဟုတ်ပါ။',
    ]),
    tips: list([
      ['Always handle errors — a script that fails silently causes bigger problems later.', 'Error များကို အမြဲကိုင်တွယ်ပါ — တိတ်တဆိတ် Fail ဖြစ်သော Script သည် နောက်ပိုင်း ပြဿနာ ပိုကြီးလာစေသည်။'],
      ['Test destructive scripts in a safe environment before running them for real.', 'ဖျက်ဆီးနိုင်သော Script များကို အစစ် Run မီ ဘေးကင်းသော Environment တွင် အရင် Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Writing scripts with no error handling at all.', 'Error Handling လုံးဝမပါဘဲ Script များ ရေးခြင်း။'],
      ['Automating a task before understanding how to do it manually first.', 'လက်ဖြင့် မည်သို့လုပ်ရသည်ကို မသိမီ Automate လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-intermediate-3', [
      ['Write a Bash script with proper error handling', 'သင့်လျော်သော Error Handling ပါ Bash Script တစ်ခု ရေးပါ'],
      ['Automate one routine task from earlier in your learning', 'ယခင်လေ့လာမှုမှ ပုံမှန်လုပ်ငန်းတာဝန်တစ်ခုကို Automate လုပ်ပါ'],
      ['Schedule a script to run automatically', 'Script တစ်ခု အလိုအလျောက် Run ရန် Schedule ချပါ'],
    ]),
    completionChecklist: list([
      ['Write shell scripts with error handling', 'Error Handling ပါ Shell Script များ ရေးနိုင်သည်'],
      ['Explain idempotency', 'Idempotency ကို ရှင်းပြနိုင်သည်'],
      ['Automate a real repetitive task', 'တကယ့် ထပ်ခါထပ်ခါလုပ်ရသော Task တစ်ခုကို Automate လုပ်နိုင်သည်'],
      ['Schedule automated tasks', 'Automate လုပ်ထားသော Task များကို Schedule ချနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-intermediate-4': {
    whatItIs: t([
      'Cloud security basics cover how to keep cloud infrastructure — servers, storage, networks, and access — protected from misconfiguration and unauthorized access.',
      'Cloud Security အခြေခံသည် Cloud Infrastructure — Server, Storage, Network, Access — ကို Configuration မှားခြင်းနှင့် ခွင့်ပြုချက်မရှိသော ဝင်ရောက်မှုများမှ ကာကွယ်ထားနည်းများကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Most real-world cloud security incidents come from simple misconfigurations — an open storage bucket, an overly permissive role — not sophisticated attacks, so getting the basics right prevents most damage.',
      'လက်တွေ့ Cloud Security Incident အများစုသည် ရှုပ်ထွေးသော တိုက်ခိုက်မှုများထက် ရိုးရှင်းသော Configuration မှားယွင်းမှုများ — ဖွင့်ထားသော Storage Bucket, ခွင့်ပြုချက် များလွန်းသော Role — မှ လာသောကြောင့် အခြေခံအချက်များကို မှန်ကန်စွာ လုပ်ခြင်းက အန္တရာယ်အများစုကို ကာကွယ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Applied to every cloud resource a team manages — identity and access management, network rules, storage permissions, and encryption settings.',
      'အဖွဲ့တစ်ခု စီမံသော Cloud Resource တိုင်းတွင် အသုံးချသည် — Identity and Access Management, Network Rule, Storage Permission, Encryption Setting များ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Identity and Access Management (IAM)', 'Identity and Access Management (IAM)'],
      ['Principle of least privilege', 'Least Privilege မူ'],
      ['Security groups / firewall rules', 'Security Group / Firewall Rule များ'],
      ['Encryption at rest and in transit', 'Rest နှင့် Transit တွင် Encryption'],
      ['Secrets management', 'Secret များ စီမံခန့်ခွဲခြင်း'],
    ]),
    steps: [
      step(
        ['Apply least-privilege access', 'Least-privilege Access ကို အသုံးချခြင်း'],
        [
          ['Users and roles should only get the permissions they actually need', 'User များနှင့် Role များသည် တကယ်လိုအပ်သော ခွင့်ပြုချက်များကိုသာ ရရှိသင့်သည်'],
          ['Reviewing and removing unused permissions', 'အသုံးမပြုတော့သော ခွင့်ပြုချက်များ ပြန်စစ်ဆေးပြီး ဖယ်ရှားခြင်း'],
        ],
        [
          ['Create a role with minimal permissions for a specific task', 'သတ်မှတ်ထားသော Task တစ်ခုအတွက် အနည်းဆုံး ခွင့်ပြုချက်ပါ Role တစ်ခု ဖန်တီးပါ'],
          ['Audit an existing set of permissions and identify what could be removed', 'လက်ရှိ ခွင့်ပြုချက်များကို စစ်ဆေးပြီး ဖယ်ရှားနိုင်သည်များကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Secure network access', 'Network Access ကို လုံခြုံအောင်ပြုလုပ်ခြင်း'],
        [
          ['Security groups / firewall rules restrict what traffic is allowed', 'Security Group / Firewall Rule များက မည်သည့် Traffic ခွင့်ပြုမည်ကို ကန့်သတ်သည်'],
          ['Never exposing databases or internal services directly to the public internet', 'Database သို့မဟုတ် Internal Service များကို Public Internet သို့ တိုက်ရိုက် ဖော်ထုတ်ခြင်း လုံးဝမပြုလုပ်ရန်'],
        ],
        [
          ['Configure a security group that only allows necessary ports', 'လိုအပ်သော Port များကိုသာ ခွင့်ပြုသော Security Group တစ်ခု Configure လုပ်ပါ'],
          ['Verify a database is not publicly accessible', 'Database ကို Public မှ ဝင်ရောက်၍မရကြောင်း အတည်ပြုပါ'],
        ],
      ),
      step(
        ['Manage secrets safely', 'Secret များကို ဘေးကင်းစွာ စီမံခန့်ခွဲခြင်း'],
        [
          ['Never hardcoding credentials in code or config files', 'Credential များကို Code သို့မဟုတ် Config File တွင် Hardcode လုံးဝမလုပ်ရန်'],
          ['Using a secrets manager or environment-based secrets', 'Secrets Manager သို့မဟုတ် Environment-based Secret များ အသုံးပြုခြင်း'],
        ],
        [
          ['Move a hardcoded credential into a secrets manager or environment variable', 'Hardcode လုပ်ထားသော Credential တစ်ခုကို Secrets Manager သို့မဟုတ် Environment Variable သို့ ရွှေ့ပါ'],
        ],
      ),
    ],
    build: t([
      'Audit one of your earlier cloud/DevOps practice projects for security issues — overly broad permissions, exposed ports, hardcoded secrets — and fix what you find.',
      'သင့် ယခင် Cloud/DevOps လေ့ကျင့်မှု Project တစ်ခုကို Security ပြဿနာများ — ကျယ်ပြန့်လွန်းသော ခွင့်ပြုချက်များ၊ ဖွင့်ထားသော Port များ၊ Hardcode Secret များ — အတွက် စစ်ဆေးပြီး တွေ့ရှိသည်များကို ပြင်ဆင်ပါ။',
    ]),
    verify: t([
      'Can you look at a set of permissions and identify which ones violate least privilege?',
      'ခွင့်ပြုချက် အစုအဝေးတစ်ခုကို ကြည့်ပြီး Least Privilege ကို ဖီဆန်နေသည်များကို ဖော်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Assume every secret in code or logs will eventually leak, and design accordingly.', 'Code (သို့) Log ရှိ Secret တိုင်းသည် နောက်ဆုံးတွင် ပေါက်ကြားလိမ့်မည်ဟု ယူဆပြီး ဒီဇိုင်းလုပ်ပါ။'],
      ['Start with the most restrictive permissions and loosen only when something breaks.', 'အကန့်အသတ်အများဆုံး ခွင့်ပြုချက်များဖြင့် စတင်ပြီး တစ်ခုခု ပျက်မှသာ ချောင်ချပါ။'],
    ]),
    commonMistakes: list([
      ['Giving broad admin access "just to make it work" and never revisiting it.', '"အလုပ်ဖြစ်ဖို့" ဆိုပြီး ကျယ်ပြန့်သော Admin Access ပေးပြီး ဘယ်တော့မှ ပြန်မစစ်ဆေးခြင်း။'],
      ['Committing secrets or keys directly into version control.', 'Secret သို့မဟုတ် Key များကို Version Control ထဲသို့ တိုက်ရိုက် Commit လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-intermediate-4', [
      ['Create a least-privilege IAM role', 'Least-privilege IAM Role တစ်ခု ဖန်တီးပါ'],
      ['Configure a restrictive security group', 'ကန့်သတ်ထားသော Security Group တစ်ခု Configure လုပ်ပါ'],
      ['Move a secret out of code into a secrets manager', 'Secret တစ်ခုကို Code မှ Secrets Manager ထဲသို့ ရွှေ့ပါ'],
      ['Audit an existing project for security issues', 'လက်ရှိ Project တစ်ခုကို Security ပြဿနာများအတွက် စစ်ဆေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain least privilege', 'Least Privilege ကို ရှင်းပြနိုင်သည်'],
      ['Configure secure network access rules', 'လုံခြုံသော Network Access Rule များ Configure လုပ်နိုင်သည်'],
      ['Manage secrets without hardcoding them', 'Secret များကို Hardcode မလုပ်ဘဲ စီမံနိုင်သည်'],
      ['Audit a project for basic security issues', 'Project တစ်ခုကို အခြေခံ Security ပြဿနာများအတွက် စစ်ဆေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-advanced-1': {
    whatItIs: t([
      'Advanced Kubernetes and orchestration covers running Kubernetes reliably at scale — autoscaling, multi-cluster setups, and production-grade configuration.',
      'အဆင့်မြင့် Kubernetes နှင့် Orchestration သည် Scale ကြီးမားစွာ Kubernetes ကို ယုံကြည်စိတ်ချစွာ Run ခြင်း — Autoscaling, Multi-cluster Setup, Production-grade Configuration များ ပါဝင်သည်။',
    ]),
    whyItMatters: t([
      'A basic Kubernetes deployment is easy; keeping one reliable, secure, and cost-efficient in production under real traffic is where the deeper skill actually matters.',
      'အခြေခံ Kubernetes Deployment တစ်ခုသည် လွယ်ကူသည် — Production တွင် တကယ့် Traffic အောက်တွင် ယုံကြည်စိတ်ချစွာ၊ လုံခြုံစွာ၊ ကုန်ကျစရိတ် ထိရောက်စွာ ထိန်းထားနိုင်ခြင်းသည် ကျွမ်းကျင်မှု တကယ်အရေးကြီးသည့်နေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Any organization running Kubernetes in production at meaningful scale needs these practices — autoscaling under load, safe rolling updates, and resilient multi-node clusters.',
      'အဓိပ္ပာယ်ရှိသော Scale တွင် Production ၌ Kubernetes Run နေသော အဖွဲ့အစည်းတိုင်းသည် ဤအလေ့အကျင့်များ လိုအပ်သည် — Load အောက်တွင် Autoscaling, ဘေးကင်းသော Rolling Update, ခံနိုင်ရည်ရှိသော Multi-node Cluster များ။',
    ]),
    prerequisiteNote: t([
      'This builds directly on the Kubernetes basics from the Intermediate stage — make sure pods, deployments, and services are solid first.',
      'ဤအရာသည် Intermediate အဆင့်မှ Kubernetes အခြေခံအပေါ် တိုက်ရိုက်တည်ဆောက်ထားသည် — Pod, Deployment, Service များကို ပထမဆုံး ခိုင်မာအောင် နားလည်ထားပါ။',
    ]),
    firstSteps: list([
      ['Horizontal Pod Autoscaling', 'Horizontal Pod Autoscaling'],
      ['Rolling updates and rollbacks', 'Rolling Update နှင့် Rollback များ'],
      ['Resource requests and limits', 'Resource Request နှင့် Limit များ'],
      ['Helm basics', 'Helm အခြေခံ'],
      ['Multi-node cluster concepts', 'Multi-node Cluster သဘောတရားများ'],
    ]),
    steps: [
      step(
        ['Configure autoscaling', 'Autoscaling Configure လုပ်ခြင်း'],
        [
          ['Horizontal Pod Autoscaler reacts to CPU/memory usage', 'Horizontal Pod Autoscaler သည် CPU/Memory အသုံးပြုမှုအပေါ် တုံ့ပြန်သည်'],
          ['Setting sensible resource requests and limits first', 'ပထမဆုံး သင့်လျော်သော Resource Request နှင့် Limit များ သတ်မှတ်ခြင်း'],
        ],
        [
          ['Set resource requests/limits on a deployment', 'Deployment တစ်ခုတွင် Resource Request/Limit များ သတ်မှတ်ပါ'],
          ['Configure a Horizontal Pod Autoscaler and generate load to test it', 'Horizontal Pod Autoscaler တစ်ခု Configure လုပ်ပြီး Test လုပ်ရန် Load ဖန်တီးပါ'],
        ],
      ),
      step(
        ['Perform safe rolling updates', 'ဘေးကင်းသော Rolling Update များ လုပ်ဆောင်ခြင်း'],
        [
          ['How Kubernetes replaces pods gradually during an update', 'Update တစ်ခုအတွင်း Kubernetes သည် Pod များကို တဖြည်းဖြည်း မည်သို့ အစားထိုးသနည်း'],
          ['Rolling back a bad deployment quickly', 'မကောင်းသော Deployment တစ်ခုကို လျင်မြန်စွာ Rollback လုပ်ခြင်း'],
        ],
        [
          ['Perform a rolling update on a running deployment', 'Run နေသော Deployment တစ်ခုတွင် Rolling Update ပြုလုပ်ပါ'],
          ['Intentionally deploy a broken version, then roll back', 'တမင် ပျက်နေသော Version တစ်ခု Deploy လုပ်ပြီး Rollback ပြန်လုပ်ပါ'],
        ],
      ),
      step(
        ['Package applications with Helm', 'Helm ဖြင့် Application များ Package လုပ်ခြင်း'],
        [
          ['Helm charts bundle Kubernetes manifests into reusable packages', 'Helm Chart များသည် Kubernetes Manifest များကို ပြန်လည်အသုံးပြုနိုင်သော Package များအဖြစ် ထုပ်ပိုးပေးသည်'],
        ],
        [
          ['Install an application using an existing Helm chart', 'ရှိပြီးသား Helm Chart တစ်ခု အသုံးပြု၍ Application တစ်ခု Install လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take one of your earlier Kubernetes deployments and make it production-ready: resource limits, autoscaling, and a tested rollback process.',
      'သင့် ယခင် Kubernetes Deployment တစ်ခုကို Production-ready ဖြစ်အောင် ပြုလုပ်ပါ — Resource Limit များ၊ Autoscaling နှင့် Test လုပ်ထားသော Rollback လုပ်ငန်းစဉ်။',
    ]),
    verify: t([
      'If your app suddenly gets 10x traffic, what happens? Could you explain exactly how your cluster would respond?',
      'သင့် App တွင် Traffic ၁၀ဆ ရုတ်တရက် တက်လာလျှင် ဘာဖြစ်မလဲ? သင့် Cluster မည်သို့တုံ့ပြန်မည်ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always set resource requests and limits — an unbounded pod can starve the whole node.', 'Resource Request နှင့် Limit များကို အမြဲသတ်မှတ်ပါ — ကန့်သတ်မထားသော Pod တစ်ခုသည် Node တစ်ခုလုံးကို ငတ်မွတ်စေနိုင်သည်။'],
      ['Practice rollbacks before you need them in a real incident.', 'တကယ့် Incident တစ်ခုတွင် မလိုအပ်မီ Rollback များကို လေ့ကျင့်ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Enabling autoscaling without setting resource requests first.', 'Resource Request များ အရင်မသတ်မှတ်ဘဲ Autoscaling ဖွင့်ခြင်း။'],
      ['Never testing the rollback path until a real outage forces it.', 'တကယ့် Outage တစ်ခုက မတွန်းအားပေးမီ Rollback လမ်းကြောင်းကို ဘယ်တော့မှ Test မလုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-advanced-1', [
      ['Set resource requests and limits', 'Resource Request နှင့် Limit များ သတ်မှတ်ပါ'],
      ['Configure and test autoscaling', 'Autoscaling Configure လုပ်ပြီး Test လုပ်ပါ'],
      ['Perform a rolling update and a rollback', 'Rolling Update နှင့် Rollback တစ်ခု ပြုလုပ်ပါ'],
      ['Install an app with Helm', 'Helm ဖြင့် App တစ်ခု Install လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Configure autoscaling correctly', 'Autoscaling ကို မှန်ကန်စွာ Configure လုပ်နိုင်သည်'],
      ['Perform safe rolling updates and rollbacks', 'ဘေးကင်းသော Rolling Update နှင့် Rollback များ လုပ်နိုင်သည်'],
      ['Use Helm to install an application', 'Application တစ်ခု Install ရန် Helm သုံးနိုင်သည်'],
      ['Explain how a cluster responds to a traffic spike', 'Traffic ရုတ်တရက်တက်လာသည့်အခါ Cluster တုံ့ပြန်ပုံကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-advanced-2': {
    whatItIs: t([
      'Site reliability practices are the habits and processes that keep production systems available, fast, and recoverable when things go wrong.',
      'Site Reliability အလေ့အကျင့်များသည် တစ်ခုခုမှားသွားသည့်အခါ Production System များကို ရရှိနိုင်၊ မြန်ဆန်၊ ပြန်လည်ကောင်းမွန်နိုင်အောင် ထိန်းသိမ်းပေးသော အလေ့အထနှင့် လုပ်ငန်းစဉ်များ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Every system eventually fails in some way — SRE practices determine whether that failure is a minor blip users never notice or a major outage that damages trust.',
      'System တိုင်းသည် တစ်နည်းနည်းဖြင့် နောက်ဆုံးတွင် ပျက်တတ်သည် — SRE အလေ့အကျင့်များက ထိုပျက်ကွက်မှုသည် User များ ဘယ်တော့မှ မသတိထားမိသော အသေးအဖွဲ့ ဖြစ်မည်လား သို့မဟုတ် ယုံကြည်မှုကို ထိခိုက်စေသော Outage ကြီးတစ်ခု ဖြစ်မည်လားကို ဆုံးဖြတ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Companies with real production traffic use SLOs, on-call rotations, and post-incident reviews to manage reliability deliberately rather than reactively.',
      'တကယ့် Production Traffic ရှိသော ကုမ္ပဏီများသည် Reliability ကို တုံ့ပြန်မှုအနေဖြင့်မဟုတ်ဘဲ ရည်ရွယ်ချက်ရှိစွာ စီမံရန် SLO, On-call Rotation, Post-incident Review များကို အသုံးပြုကြသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['SLIs, SLOs, and error budgets', 'SLI, SLO, Error Budget များ'],
      ['On-call basics', 'On-call အခြေခံ'],
      ['Postmortems / incident reviews', 'Postmortem / Incident Review များ'],
      ['Runbooks', 'Runbook များ'],
    ]),
    steps: [
      step(
        ['Define reliability with SLOs', 'SLO များဖြင့် Reliability သတ်မှတ်ခြင်း'],
        [
          ['An SLI is a measurement (e.g. request success rate)', 'SLI ဆိုသည်မှာ တိုင်းတာမှုတစ်ခု (ဥပမာ Request Success Rate)'],
          ['An SLO is a target for that measurement (e.g. 99.9% success)', 'SLO ဆိုသည်မှာ ထိုတိုင်းတာမှုအတွက် ရည်မှန်းချက် (ဥပမာ ၉၉.၉% Success)'],
          ['An error budget is how much failure is acceptable before action is required', 'Error Budget ဆိုသည်မှာ လုပ်ဆောင်ချက် မလိုအပ်မီ လက်ခံနိုင်သော ပျက်ကွက်မှု ပမာဏ'],
        ],
        [
          ['Define an SLI and SLO for one of your practice applications', 'သင့် လေ့ကျင့်မှု Application တစ်ခုအတွက် SLI နှင့် SLO တစ်ခု သတ်မှတ်ပါ'],
        ],
      ),
      step(
        ['Write a runbook and practice an incident review', 'Runbook တစ်ခု ရေးပြီး Incident Review တစ်ခု လေ့ကျင့်ခြင်း'],
        [
          ['A runbook is a step-by-step guide for responding to a known issue', 'Runbook ဆိုသည်မှာ သိပြီးသား ပြဿနာတစ်ခုကို တုံ့ပြန်ရန် အဆင့်ဆင့် လမ်းညွှန်တစ်ခု'],
          ['A blameless postmortem focuses on what happened and how to prevent it, not who is at fault', 'Blameless Postmortem သည် မည်သူမှားသည်ဆိုသည်ထက် ဘာဖြစ်ခဲ့သည်နှင့် မည်သို့ ကာကွယ်မည်ကို အာရုံစိုက်သည်'],
        ],
        [
          ['Write a runbook for a failure scenario in one of your projects', 'သင့် Project တစ်ခုရှိ ပျက်ကွက်မှု အခြေအနေတစ်ခုအတွက် Runbook တစ်ခု ရေးပါ'],
          ['Simulate an incident and write a blameless postmortem for it', 'Incident တစ်ခုကို Simulate လုပ်ပြီး Blameless Postmortem တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'For one practice application, define an SLO, write a runbook for its most likely failure mode, and simulate that failure to test the runbook.',
      'လေ့ကျင့်မှု Application တစ်ခုအတွက် SLO တစ်ခု သတ်မှတ်ပါ၊ အဖြစ်များဆုံး ပျက်ကွက်မှု အခြေအနေအတွက် Runbook တစ်ခု ရေးပါ၊ Runbook ကို Test လုပ်ရန် ထိုပျက်ကွက်မှုကို Simulate လုပ်ပါ။',
    ]),
    verify: t([
      'Can you explain the difference between an SLI, an SLO, and an error budget, using a real example?',
      'SLI, SLO, Error Budget သုံးခုကြား ကွာခြားချက်ကို တကယ့်ဥပမာဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep SLOs realistic — 100% uptime is not a real target for anyone.', 'SLO များကို လက်တွေ့ကျအောင် ထားပါ — ၁၀၀% Uptime ဆိုသည်မှာ မည်သူ့အတွက်မှ လက်တွေ့ ရည်မှန်းချက် မဟုတ်ပါ။'],
      ['Write runbooks before an incident happens, not during one.', 'Incident မဖြစ်မီ Runbook များ ရေးပါ၊ ဖြစ်နေချိန်တွင် မရေးပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Treating postmortems as blame sessions, which makes people hide mistakes.', 'Postmortem များကို အပြစ်တင်သည့် အစည်းအဝေးများအဖြစ် ယူဆခြင်းက လူများကို အမှားများ ဖျောက်ဖျက်စေသည်။'],
      ['Setting an SLO without measuring whether it is currently being met.', 'လက်ရှိ ပြည့်မီနေမှုကို မတိုင်းတာဘဲ SLO တစ်ခု သတ်မှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-advanced-2', [
      ['Define an SLI and SLO for a project', 'Project တစ်ခုအတွက် SLI နှင့် SLO တစ်ခု သတ်မှတ်ပါ'],
      ['Write a runbook for a likely failure', 'ဖြစ်နိုင်ခြေရှိသော ပျက်ကွက်မှုအတွက် Runbook တစ်ခု ရေးပါ'],
      ['Simulate an incident', 'Incident တစ်ခု Simulate လုပ်ပါ'],
      ['Write a blameless postmortem', 'Blameless Postmortem တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain SLIs, SLOs, and error budgets', 'SLI, SLO, Error Budget များ ရှင်းပြနိုင်သည်'],
      ['Write a usable runbook', 'အသုံးဝင်သော Runbook တစ်ခု ရေးနိုင်သည်'],
      ['Run a blameless postmortem process', 'Blameless Postmortem လုပ်ငန်းစဉ် လုပ်ဆောင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-advanced-3': {
    whatItIs: t([
      'Multi-cloud strategy and cost optimization cover running workloads across more than one cloud provider and controlling how much that infrastructure actually costs.',
      'Multi-cloud နည်းဗျူဟာနှင့် Cost Optimization သည် Cloud Provider တစ်ခုထက်ပိုသည့် အပေါ်တွင် Workload များ Run ခြင်းနှင့် Infrastructure ကုန်ကျစရိတ် မည်မျှရှိသည်ကို ထိန်းချုပ်ခြင်း ပါဝင်သည်။',
    ]),
    whyItMatters: t([
      'Cloud bills can spiral out of control quickly, and some organizations need multi-cloud for redundancy, compliance, or avoiding vendor lock-in — both require deliberate decisions, not defaults.',
      'Cloud Bill များသည် လျင်မြန်စွာ ထိန်းချုပ်မရနိုင်အောင် ဖြစ်တတ်ပြီး အချို့ အဖွဲ့အစည်းများသည် Redundancy၊ Compliance သို့မဟုတ် Vendor Lock-in ရှောင်ရှားရန် Multi-cloud လိုအပ်သည် — နှစ်ခုစလုံးသည် ပုံသေဆုံးဖြတ်ချက်များ မဟုတ်ဘဲ ရည်ရွယ်ချက်ရှိသော ဆုံးဖြတ်ချက်များ လိုအပ်သည်။',
    ]),
    whereUsed: t([
      'Larger organizations use multi-cloud for resilience or regulatory reasons; nearly every organization on the cloud needs ongoing cost optimization as usage grows.',
      'အဖွဲ့အစည်းကြီးများသည် ခံနိုင်ရည်ရှိမှု သို့မဟုတ် စည်းမျဉ်းဆိုင်ရာ အကြောင်းရင်းများအတွက် Multi-cloud သုံးကြသည် — Cloud တွင်ရှိသော အဖွဲ့အစည်းနီးပါးအားလုံးသည် အသုံးပြုမှု တိုးလာသည်နှင့်အမျှ ဆက်လက် Cost Optimization လိုအပ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Reserved vs on-demand vs spot pricing', 'Reserved, On-demand, Spot Pricing များ'],
      ['Right-sizing resources', 'Resource များ Right-sizing လုပ်ခြင်း'],
      ['Cost monitoring and budgets', 'Cost Monitoring နှင့် Budget များ'],
      ['Vendor lock-in trade-offs', 'Vendor Lock-in Trade-off များ'],
    ]),
    steps: [
      step(
        ['Understand cloud pricing models', 'Cloud Pricing Model များ နားလည်ခြင်း'],
        [
          ['On-demand pricing is flexible but expensive at scale', 'On-demand Pricing သည် ပြောင်းလွယ်ပြင်လွယ်ရှိသော်လည်း Scale တွင် ကုန်ကျစရိတ်များသည်'],
          ['Reserved/committed pricing is cheaper for predictable, steady workloads', 'Reserved/Committed Pricing သည် ခန့်မှန်း၍ရသော၊ တည်ငြိမ်သော Workload များအတွက် ပိုစျေးသက်သာသည်'],
          ['Spot/preemptible instances are cheapest but can be reclaimed anytime', 'Spot/Preemptible Instance များသည် အသက်သာဆုံးဖြစ်သော်လည်း အချိန်မရွေး ပြန်ယူနိုင်သည်'],
        ],
        [
          ['Estimate the cost difference between on-demand and reserved pricing for a steady workload', 'တည်ငြိမ်သော Workload တစ်ခုအတွက် On-demand နှင့် Reserved Pricing ကြား ကုန်ကျစရိတ် ကွာခြားချက်ကို ခန့်မှန်းပါ'],
        ],
      ),
      step(
        ['Right-size and monitor spend', 'Right-size လုပ်ပြီး Spend ကို Monitor လုပ်ခြင်း'],
        [
          ['Identifying over-provisioned resources', 'Provision များပြားလွန်းသော Resource များ ဖော်ထုတ်ခြင်း'],
          ['Setting budget alerts to catch unexpected cost spikes', 'မမျှော်လင့်ထားသော ကုန်ကျစရိတ် ရုတ်တရက်တက်ခြင်းကို ဖမ်းယူရန် Budget Alert များ သတ်မှတ်ခြင်း'],
        ],
        [
          ['Review resource usage and identify at least one over-provisioned resource', 'Resource အသုံးပြုမှုကို ပြန်စစ်ဆေးပြီး Provision များပြားလွန်းသော Resource အနည်းဆုံးတစ်ခု ဖော်ထုတ်ပါ'],
          ['Set up a budget alert', 'Budget Alert တစ်ခု သတ်မှတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Review a practice project\'s infrastructure and produce a short cost-optimization report: what could be right-sized, what pricing model fits better, and the estimated savings.',
      'လေ့ကျင့်မှု Project တစ်ခု၏ Infrastructure ကို ပြန်စစ်ဆေးပြီး Cost-optimization Report အတိုချုပ် တစ်ခု ထုတ်ပါ — Right-size လုပ်နိုင်သည်များ၊ ပိုသင့်တော်သော Pricing Model နှင့် ခန့်မှန်း သက်သာငွေ။',
    ]),
    verify: t([
      'Can you explain when spot instances are a good fit and when they are a bad idea?',
      'Spot Instance များသည် ဘယ်အချိန်မှာ သင့်တော်ပြီး ဘယ်အချိန်မှာ မကောင်းသော အယူအဆဖြစ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Cost optimization is ongoing, not a one-time task — usage patterns change.', 'Cost Optimization သည် တစ်ကြိမ်တည်း လုပ်ရသော Task မဟုတ်ဘဲ ဆက်တိုက်လုပ်ရမည့်အရာ — အသုံးပြုမှု ပုံစံများ ပြောင်းလဲနေသည်။'],
      ['Only consider multi-cloud once you have a clear reason for it — it adds real complexity.', 'ရှင်းလင်းသော အကြောင်းရင်းရှိမှသာ Multi-cloud ကို စဉ်းစားပါ — ၎င်းသည် တကယ့် ရှုပ်ထွေးမှုကို ပေါင်းထည့်သည်။'],
    ]),
    commonMistakes: list([
      ['Adopting multi-cloud for its own sake without a concrete need.', 'တိကျသော လိုအပ်ချက် မရှိဘဲ Multi-cloud ကို ကိုယ်တိုင်အတွက် လက်ခံခြင်း။'],
      ['Never reviewing cloud spend until the bill is already a shock.', 'Bill က အံ့သြစရာဖြစ်မှသာ Cloud Spend ကို ပြန်မစစ်ဆေးခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-advanced-3', [
      ['Compare pricing models for a workload', 'Workload တစ်ခုအတွက် Pricing Model များ နှိုင်းယှဉ်ပါ'],
      ['Identify an over-provisioned resource', 'Provision များပြားလွန်းသော Resource တစ်ခု ဖော်ထုတ်ပါ'],
      ['Set up a cost/budget alert', 'Cost/Budget Alert တစ်ခု သတ်မှတ်ပါ'],
      ['Write a short cost-optimization report', 'Cost-optimization Report အတိုချုပ်တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain cloud pricing model trade-offs', 'Cloud Pricing Model Trade-off များ ရှင်းပြနိုင်သည်'],
      ['Right-size a set of resources', 'Resource အစုအဝေးတစ်ခုကို Right-size လုပ်နိုင်သည်'],
      ['Set up cost monitoring', 'Cost Monitoring သတ်မှတ်နိုင်သည်'],
      ['Explain when multi-cloud is and is not worth the complexity', 'Multi-cloud က ရှုပ်ထွေးမှု တန်သည် (သို့) မတန်သည့် အချိန်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cloud-devops-advanced-4': {
    whatItIs: t([
      'Incident response is the structured process a team follows when something breaks in production: detecting it, fixing it, communicating about it, and learning from it.',
      'Incident Response သည် Production တွင် တစ်ခုခု ပျက်သွားသည့်အခါ အဖွဲ့တစ်ခု လိုက်နာသော ဖွဲ့စည်းထားသော လုပ်ငန်းစဉ်ဖြစ်သည် — ရှာဖွေခြင်း၊ ပြင်ဆင်ခြင်း၊ ဆက်သွယ်ပြောဆိုခြင်းနှင့် သင်ခန်းစာယူခြင်း။',
    ]),
    whyItMatters: t([
      'How a team responds to an incident often matters more than the incident itself — a fast, calm, well-communicated response limits damage; a chaotic one makes things worse.',
      'အဖွဲ့တစ်ခု Incident တစ်ခုကို မည်သို့တုံ့ပြန်သည်ဆိုသည်မှာ Incident ကိုယ်တိုင်ထက် ပိုအရေးကြီးလေ့ရှိသည် — လျင်မြန်၊ တည်ငြိမ်၊ ကောင်းစွာဆက်သွယ်ထားသော တုံ့ပြန်မှုသည် ပျက်စီးမှုကို ကန့်သတ်ပေးပြီး ရှုပ်ထွေးသော တုံ့ပြန်မှုသည် ပိုဆိုးစေသည်။',
    ]),
    whereUsed: t([
      'Every production system with real users eventually needs incident response — from a small startup\'s single on-call engineer to a large company\'s dedicated incident commander process.',
      'တကယ့် User များရှိသော Production System တိုင်းသည် နောက်ဆုံးတွင် Incident Response လိုအပ်လာသည် — Startup သေးသေးလေး၏ On-call Engineer တစ်ဦးတည်းမှ ကုမ္ပဏီကြီးများ၏ အထူးပြု Incident Commander လုပ်ငန်းစဉ်အထိ။',
    ]),
    prerequisiteNote: t([
      'This connects directly to the monitoring/logging and site reliability topics — you need visibility into a system before you can respond to its incidents well.',
      'ဤအရာသည် Monitoring/Logging နှင့် Site Reliability Topic များနှင့် တိုက်ရိုက် ဆက်စပ်နေသည် — Incident များကို ကောင်းစွာ တုံ့ပြန်နိုင်ရန် System တစ်ခုကို ရှေးဦးစွာ မြင်နိုင်ရမည်။',
    ]),
    firstSteps: list([
      ['Incident severity levels', 'Incident Severity Level များ'],
      ['Incident commander role', 'Incident Commander အခန်းကဏ္ဍ'],
      ['Communication during an incident', 'Incident တစ်ခုအတွင်း ဆက်သွယ်ခြင်း'],
      ['Root cause analysis', 'Root Cause Analysis'],
    ]),
    steps: [
      step(
        ['Classify and respond to an incident', 'Incident တစ်ခုကို ခွဲခြားပြီး တုံ့ပြန်ခြင်း'],
        [
          ['Severity levels help decide urgency and who needs to be involved', 'Severity Level များက အရေးပေါ်မှုနှင့် မည်သူ ပါဝင်ရမည်ကို ဆုံးဖြတ်ရန် ကူညီသည်'],
          ['The incident commander coordinates the response without necessarily fixing it themselves', 'Incident Commander သည် ကိုယ်တိုင် ပြင်ရန် မလိုအပ်ဘဲ တုံ့ပြန်မှုကို ညှိနှိုင်းပေးသည်'],
        ],
        [
          ['Classify a simulated incident by severity', 'Simulate လုပ်ထားသော Incident တစ်ခုကို Severity အလိုက် ခွဲခြားပါ'],
          ['Draft a status update you would send during that incident', 'ထို Incident အတွင်း ပို့မည့် Status Update တစ်ခု မူကြမ်းရေးပါ'],
        ],
      ),
      step(
        ['Run a root cause analysis', 'Root Cause Analysis တစ်ခု လုပ်ဆောင်ခြင်း'],
        [
          ['The "5 whys" technique for digging past symptoms to root causes', 'လက္ခဏာများကို ကျော်၍ Root Cause အထိ တူးဆွရန် "5 Whys" နည်းလမ်း'],
          ['Distinguishing the root cause from contributing factors', 'Root Cause ကို ပါဝင်စေသော အချက်များနှင့် ခွဲခြားခြင်း'],
        ],
        [
          ['Take a past bug or outage and run a 5-whys analysis on it', 'ယခင် Bug သို့မဟုတ် Outage တစ်ခုကို ယူပြီး 5-whys Analysis လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Simulate a full incident lifecycle for one of your practice projects: detect it, classify severity, write status updates, resolve it, and complete a root cause analysis.',
      'သင့် လေ့ကျင့်မှု Project တစ်ခုအတွက် Incident Lifecycle တစ်ခုလုံးကို Simulate လုပ်ပါ — ရှာဖွေခြင်း၊ Severity ခွဲခြားခြင်း၊ Status Update ရေးခြင်း၊ ဖြေရှင်းခြင်းနှင့် Root Cause Analysis ပြီးမြောက်ခြင်း။',
    ]),
    verify: t([
      'Could you calmly lead a 15-minute status update to stakeholders during a live incident, without knowing the root cause yet?',
      'Root Cause ကို မသိရသေးသည့်တိုင် Live Incident တစ်ခုအတွင်း Stakeholder များကို ၁၅ မိနစ် Status Update တစ်ခု တည်ငြိမ်စွာ ဦးဆောင်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['During an incident, communicate early and often even without a full answer yet.', 'Incident တစ်ခုအတွင်း အဖြေအပြည့်အစုံ မရှိသေးလျှင်ပင် စောစီးစွာနှင့် မကြာခဏ ဆက်သွယ်ပါ။'],
      ['Separate "fix it now" from "understand it fully" — stop the bleeding first, investigate deeply after.', '"အခုချက်ချင်း ပြင်ရန်" ကို "အပြည့်အစုံနားလည်ရန်" နှင့် ခွဲခြားပါ — ဒဏ်ရာကို အရင်ရပ်တန့်ပြီး နောက်မှ အသေးစိတ် စုံစမ်းပါ။'],
    ]),
    commonMistakes: list([
      ['Looking for someone to blame instead of the actual root cause.', 'တကယ့် Root Cause ကို မရှာဘဲ အပြစ်တင်ရန် လူတစ်ဦးဦးကို ရှာနေခြင်း။'],
      ['Fixing the symptom without ever addressing the root cause, so it recurs.', 'Root Cause ကို ဘယ်တော့မှ မဖြေရှင်းဘဲ လက္ခဏာကိုသာ ပြင်ခြင်း၊ ထို့ကြောင့် ထပ်ဖြစ်နေခြင်း။'],
    ]),
    practiceTasks: tasks('cloud-devops-advanced-4', [
      ['Classify a simulated incident by severity', 'Simulate Incident တစ်ခုကို Severity အလိုက် ခွဲခြားပါ'],
      ['Write incident status updates', 'Incident Status Update များ ရေးပါ'],
      ['Run a 5-whys root cause analysis', '5-whys Root Cause Analysis လုပ်ပါ'],
      ['Write a postmortem for a simulated incident', 'Simulate Incident တစ်ခုအတွက် Postmortem တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Classify incidents by severity', 'Incident များကို Severity အလိုက် ခွဲခြားနိုင်သည်'],
      ['Communicate clearly during an incident', 'Incident တစ်ခုအတွင်း ရှင်းလင်းစွာ ဆက်သွယ်နိုင်သည်'],
      ['Run a root cause analysis', 'Root Cause Analysis လုပ်ဆောင်နိုင်သည်'],
      ['Write a complete incident postmortem', 'ပြည့်စုံသော Incident Postmortem တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },
}
