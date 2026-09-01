import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Cybersecurity topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const cybersecurityTopicDetails: Record<string, TopicDetail> = {
  'cybersecurity-beginner-1': {
    whatItIs: t([
      'Networking and systems fundamentals cover how computers, servers, and networks communicate — the foundation everything in security is built on.',
      'Networking နှင့် Systems Fundamentals သည် Computer, Server, Network တို့ မည်သို့ ဆက်သွယ်သည်ကို လွှမ်းခြုံသည် — Security ရှိ အရာအားလုံး တည်ဆောက်ထားသော အခြေခံ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'You cannot secure or attack what you do not understand — nearly every security concept, from firewalls to intrusion detection, assumes solid networking knowledge.',
      'နားမလည်သောအရာကို ကာကွယ် (သို့) တိုက်ခိုက်၍ မရပါ — Firewall မှ Intrusion Detection အထိ Security Concept နီးပါးအားလုံးသည် ခိုင်မာသော Networking အသိပညာကို ယူဆထားသည်။',
    ]),
    whereUsed: t([
      'The foundation of every security role — you cannot analyze traffic, harden a system, or respond to an incident without it.',
      'Security Role တိုင်း၏ အခြေခံ ဖြစ်သည် — ၎င်းမရှိပါက Traffic ကို ခွဲခြမ်းစိတ်ဖြာခြင်း၊ System ကို ခိုင်မာအောင် ပြုလုပ်ခြင်း (သို့) Incident တစ်ခုကို တုံ့ပြန်ခြင်း မပြုလုပ်နိုင်ပါ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['OSI model / TCP/IP basics', 'OSI Model / TCP/IP အခြေခံ'],
      ['IP addresses and ports', 'IP Address များနှင့် Port များ'],
      ['Common protocols (HTTP, DNS, SSH)', 'အများသုံး Protocol များ (HTTP, DNS, SSH)'],
      ['Operating system basics (processes, users, permissions)', 'Operating System အခြေခံ (Processes, Users, Permissions)'],
    ]),
    steps: [
      step(
        ['Understand how data moves across a network', 'Data သည် Network တစ်ခုတစ်လျှောက် မည်သို့ ရွှေ့လျားသည်ကို နားလည်ခြင်း'],
        [
          ['IP addresses identify devices; ports identify specific services on them', 'IP Address များက Device များကို ဖော်ထုတ်ပြီး Port များက ၎င်းတို့ပေါ်ရှိ Service သီးခြားများကို ဖော်ထုတ်သည်'],
          ['Common protocols: HTTP for web, DNS for names, SSH for remote access', 'အများသုံး Protocol များ — Web အတွက် HTTP, နာမည်များအတွက် DNS, Remote Access အတွက် SSH'],
        ],
        [
          ['Use a network tool to inspect the ports open on your own machine and identify what each is likely used for', 'သင့် Machine ပေါ်တွင် ဖွင့်ထားသော Port များကို Inspect လုပ်ရန် Network Tool တစ်ခု သုံးပြီး တစ်ခုစီကို မည်သည့်အတွက် သုံးနိုင်သည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Understand basic operating system security concepts', 'အခြေခံ Operating System Security Concept များ နားလည်ခြင်း'],
        [
          ['Users, groups, and permissions control who can do what on a system', 'Users, Groups, Permissions တို့သည် System တစ်ခုပေါ်တွင် မည်သူ ဘာလုပ်နိုင်သည်ကို ထိန်းချုပ်သည်'],
          ['Processes represent running programs, each with its own privileges', 'Processes များသည် ၎င်းကိုယ်ပိုင် Privilege များပါသော Run နေသော Program များကို ကိုယ်စားပြုသည်'],
        ],
        [
          ['List the users and their permission levels on a Linux system you have access to', 'သင် ဝင်ရောက်ခွင့်ရှိသော Linux System တစ်ခုပေါ်ရှိ User များနှင့် ၎င်းတို့၏ Permission Level များကို စာရင်းပြုစုပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short reference document mapping out the common ports and protocols you would expect to see on a typical web server, and what each one is used for.',
      'Web Server ပုံမှန်တစ်ခုတွင် မြင်ရလိမ့်မည်ဟု မျှော်လင့်ထားသော အများသုံး Port နှင့် Protocol များကို ရေးဆွဲပြီး တစ်ခုစီကို မည်သည့်အတွက် သုံးသည်ကို ဖော်ပြသော Reference Document တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Given an unfamiliar port number, could you make a reasonable guess about what service it might be running, and explain your reasoning?',
      'ရင်းနှီးမှုမရှိသော Port Number တစ်ခု ပေးလိုက်လျှင် မည်သည့် Service Run နေနိုင်သည်ကို ယုတ္တိရှိသော ခန့်မှန်းချက်တစ်ခု ပြုလုပ်ပြီး သင့်ယုတ္တိကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Practice inspecting real network traffic and open ports on your own machine to build intuition.', 'အလိုအလျောက် ခံစားမှုကို တည်ဆောက်ရန် သင့် Machine ပေါ်ရှိ Network Traffic နှင့် Open Port များကို Inspect လုပ်ရင်း လေ့ကျင့်ပါ။'],
      ['Do not memorize port numbers blindly — understand what the service behind each one actually does.', 'Port Number များကို မျက်စိပိတ်ပြီး အလွတ်ကျက်မှတ်ခြင်း မပြုလုပ်ပါနှင့် — တစ်ခုစီနောက်ကွယ်ရှိ Service တကယ်ဘာလုပ်သည်ကို နားလည်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to learn security tools before understanding basic networking.', 'အခြေခံ Networking မနားလည်မီ Security Tool များကို လေ့လာရန် ကြိုးစားခြင်း။'],
      ['Confusing IP addresses with domain names without understanding how DNS connects the two.', 'DNS က နှစ်ခုကို မည်သို့ ချိတ်ဆက်ပေးသည်ကို နားမလည်ဘဲ IP Address များကို Domain Name များနှင့် ရောထွေးခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-beginner-1', [
      ['Inspect open ports on your own machine', 'သင့် Machine ပေါ်ရှိ Open Port များကို Inspect လုပ်ပါ'],
      ['List users and permissions on a Linux system', 'Linux System တစ်ခုပေါ်ရှိ User များနှင့် Permission များ စာရင်းပြုစုပါ'],
      ['Write a reference document on common ports and protocols', 'အများသုံး Port နှင့် Protocol များအကြောင်း Reference Document တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain IP addresses, ports, and common protocols', 'IP Address, Port, အများသုံး Protocol များ ရှင်းပြနိုင်သည်'],
      ['Explain users, groups, and permissions on an OS', 'OS ပေါ်ရှိ Users, Groups, Permissions ရှင်းပြနိုင်သည်'],
      ['Inspect open ports and running processes', 'Open Port များနှင့် Running Process များ Inspect လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-beginner-2': {
    whatItIs: t([
      'Security terminology basics cover the core vocabulary of cybersecurity — threat, vulnerability, exploit, risk — so you can understand and communicate clearly in the field.',
      'Security Terminology အခြေခံသည် Cybersecurity ၏ အခြေခံ ဝေါဟာရများ — Threat, Vulnerability, Exploit, Risk — ကို လွှမ်းခြုံပြီး ဤနယ်ပယ်တွင် ရှင်းလင်းစွာ နားလည်ပြီး ဆက်သွယ်နိုင်စေသည်။',
    ]),
    whyItMatters: t([
      'Precise terminology matters enormously in security — mixing up a "vulnerability" and an "exploit" leads to real miscommunication about risk and urgency.',
      'တိကျသော Terminology သည် Security တွင် အလွန်အရေးကြီးသည် — "Vulnerability" နှင့် "Exploit" ကို ရောထွေးခြင်းသည် Risk နှင့် အရေးပေါ်မှုအကြောင်း တကယ့် ဆက်သွယ်မှု အမှားများကို ဖြစ်စေသည်။',
    ]),
    whereUsed: t([
      'Used constantly in security reports, discussions, and documentation across every security role.',
      'Security Role တိုင်းရှိ Report, ဆွေးနွေးမှု, Documentation များတွင် အမြဲအသုံးပြုသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Threat, vulnerability, and risk', 'Threat, Vulnerability, Risk'],
      ['Exploit vs vulnerability', 'Exploit နှင့် Vulnerability'],
      ['CIA triad (Confidentiality, Integrity, Availability)', 'CIA Triad (Confidentiality, Integrity, Availability)'],
      ['Attack surface', 'Attack Surface'],
    ]),
    steps: [
      step(
        ['Distinguish core security terms precisely', 'အဓိက Security Term များကို တိကျစွာ ခွဲခြားခြင်း'],
        [
          ['A vulnerability is a weakness; an exploit is a way to take advantage of it; a threat is who or what might do so', 'Vulnerability သည် အားနည်းချက်တစ်ခု၊ Exploit သည် ၎င်းကို အသုံးချရန် နည်းလမ်းတစ်ခု၊ Threat သည် မည်သူ (သို့) မည်သည် ထိုသို့ပြုလုပ်နိုင်သည်ကို ဆိုလိုသည်'],
        ],
        [
          ['Given three real-world security news headlines, label the threat, vulnerability, and exploit in each', 'တကယ့် Security သတင်းခေါင်းစဉ် သုံးခု ပေးလိုက်လျှင် တစ်ခုစီရှိ Threat, Vulnerability, Exploit ကို Label ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Apply the CIA triad and attack surface concepts', 'CIA Triad နှင့် Attack Surface Concept များ အသုံးချခြင်း'],
        [
          ['Confidentiality (secrecy), Integrity (accuracy), Availability (access) as the three security goals', 'Security ရည်မှန်းချက် သုံးခုအဖြစ် Confidentiality (လျှို့ဝှက်ချက်), Integrity (တိကျမှု), Availability (ဝင်ရောက်ခွင့်)'],
          ['Attack surface: everything an attacker could potentially target', 'Attack Surface — တိုက်ခိုက်သူ ပစ်မှတ်ထားနိုင်သမျှ အရာအားလုံး'],
        ],
        [
          ['For a simple web app, list what would count as its attack surface and which CIA goal each risk threatens', 'Web App ရိုးရှင်းတစ်ခုအတွက် ၎င်း၏ Attack Surface အဖြစ် ရေတွက်နိုင်သည်များကို စာရင်းပြုစုပြီး Risk တစ်ခုစီက မည်သည့် CIA ရည်မှန်းချက်ကို ခြိမ်းခြောက်သည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short glossary (10-15 terms) of core security vocabulary in your own words, each with a real or realistic example.',
      'ကိုယ်ပိုင် စကားလုံးများဖြင့် အဓိက Security ဝေါဟာရ Glossary တိုတောင်း (ဝေါဟာရ ၁၀-၁၅) ရေးပါ — တစ်ခုစီအတွက် တကယ့် (သို့) လက်တွေ့ကျသော ဥပမာနှင့်အတူ။',
    ]),
    verify: t([
      'Could you correctly use "vulnerability", "exploit", and "threat" in three separate, distinct sentences without mixing them up?',
      '"Vulnerability", "Exploit", "Threat" ကို မရောထွေးဘဲ သီးခြား စာကြောင်း သုံးကြောင်းတွင် မှန်ကန်စွာ သုံးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read real security advisories or news to see terminology used correctly in context.', 'Context တွင် Terminology မှန်ကန်စွာ အသုံးပြုပုံကို မြင်ရန် တကယ့် Security Advisory (သို့) သတင်းများ ဖတ်ပါ။'],
      ['When in doubt about a term, look up its precise definition rather than guessing.', 'အသုံးအနှုန်းတစ်ခုအကြောင်း သံသယရှိလျှင် ခန့်မှန်းမည့်အစား ၎င်း၏ တိကျသော အဓိပ္ပာယ်ကို ရှာကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Using "vulnerability" and "exploit" interchangeably.', '"Vulnerability" နှင့် "Exploit" ကို အပြန်အလှန် သုံးခြင်း။'],
      ['Treating "risk" as identical to "threat", ignoring likelihood and impact.', 'Likelihood နှင့် Impact ကို လျစ်လျူရှုပြီး "Risk" ကို "Threat" နှင့် တူညီသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-beginner-2', [
      ['Label threat, vulnerability, and exploit in real headlines', 'တကယ့် ခေါင်းစဉ်များတွင် Threat, Vulnerability, Exploit ကို Label ပြုလုပ်ပါ'],
      ['Map a simple app\'s attack surface', 'App ရိုးရှင်းတစ်ခု၏ Attack Surface ကို ရေးဆွဲပါ'],
      ['Write a 10-15 term security glossary', 'Security ဝေါဟာရ ၁၀-၁၅ ခုပါသော Glossary တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Distinguish threat, vulnerability, and exploit', 'Threat, Vulnerability, Exploit ကို ခွဲခြားနိုင်သည်'],
      ['Explain the CIA triad', 'CIA Triad ကို ရှင်းပြနိုင်သည်'],
      ['Identify a system\'s attack surface', 'System တစ်ခု၏ Attack Surface ဖော်ထုတ်နိုင်သည်'],
      ['Use security terminology precisely', 'Security Terminology ကို တိကျစွာ သုံးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-beginner-3': {
    whatItIs: t([
      'Linux basics for security cover navigating and configuring the operating system most security tools and servers run on.',
      'Security အတွက် Linux အခြေခံသည် Security Tool နှင့် Server အများစု Run နေသော Operating System တွင် သွားလာပြီး Configure ချသည့်အရာကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'The vast majority of security tooling — scanners, penetration testing frameworks, log analysis tools — is built for and run on Linux.',
      'Security Tooling အများစု — Scanner, Penetration Testing Framework, Log Analysis Tool — သည် Linux အတွက် တည်ဆောက်ထားပြီး Linux ပေါ်တွင် Run သည်။',
    ]),
    whereUsed: t([
      'Essential in nearly every hands-on security role, from analyzing logs on a server to running security scanning tools.',
      'Server တစ်ခုပေါ်ရှိ Log များ ခွဲခြမ်းစိတ်ဖြာခြင်းမှ Security Scanning Tool များ Run ခြင်းအထိ လက်တွေ့ကျသော Security Role နီးပါးအားလုံးတွင် မရှိမဖြစ် လိုအပ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Filesystem navigation', 'Filesystem Navigation'],
      ['File permissions', 'File Permission များ'],
      ['Common commands for investigation (grep, find, ps)', 'စုံစမ်းစစ်ဆေးရေးအတွက် အများသုံး Command များ (grep, find, ps)'],
      ['Reading and following log files', 'Log File များ ဖတ်ပြီး လိုက်နာခြင်း'],
    ]),
    steps: [
      step(
        ['Navigate and inspect a Linux system', 'Linux System တစ်ခုတွင် သွားလာပြီး Inspect လုပ်ခြင်း'],
        [
          ['Moving through the filesystem and checking file permissions', 'Filesystem တစ်လျှောက် သွားလာပြီး File Permission များ စစ်ဆေးခြင်း'],
          ['Using ps to see running processes', 'Running Process များ ကြည့်ရန် ps သုံးခြင်း'],
        ],
        [
          ['On a Linux system, find all files with overly permissive permissions in a given directory', 'Linux System တစ်ခုတွင် ပေးထားသော Directory ရှိ ခွင့်ပြုချက် များလွန်းသော File များအားလုံးကို ရှာပါ'],
        ],
      ),
      step(
        ['Investigate using command-line tools', 'Command-line Tool များ သုံး၍ စုံစမ်းစစ်ဆေးခြင်း'],
        [
          ['Using grep to search log files for specific patterns', 'ရှာဖွေရန် Log File များတွင် Pattern သီးခြားများ grep သုံးခြင်း'],
          ['Using find to locate files matching specific criteria', 'သတ်မှတ်ထားသော Criteria နှင့် ကိုက်ညီသော File များ ရှာဖွေရန် find သုံးခြင်း'],
        ],
        [
          ['Search a sample log file for failed login attempts using grep', 'Sample Log File တစ်ခုတွင် Fail ဖြစ်သော Login Attempt များကို grep သုံး၍ ရှာဖွေပါ'],
        ],
      ),
    ],
    build: t([
      'Given a sample Linux server log directory, use command-line tools to find and summarize suspicious activity (e.g. repeated failed logins, unusual file permission changes).',
      'Sample Linux Server Log Directory တစ်ခု ပေးလိုက်လျှင် သံသယဖြစ်ဖွယ် လှုပ်ရှားမှုများ (ဥပမာ ထပ်ခါထပ်ခါ Fail ဖြစ်သော Login, ထူးဆန်းသော File Permission ပြောင်းလဲမှုများ) ကို ရှာဖွေပြီး အနှစ်ချုပ်ရန် Command-line Tool များ သုံးပါ။',
    ]),
    verify: t([
      'Given a raw server log file, could you use grep and other command-line tools to find a specific type of suspicious activity within a few minutes?',
      'Raw Server Log File တစ်ခု ပေးလိုက်လျှင် သံသယဖြစ်ဖွယ် လှုပ်ရှားမှု အမျိုးအစား သီးခြားတစ်ခုကို ရှာဖွေရန် grep နှင့် အခြား Command-line Tool များကို မိနစ်အနည်းငယ်အတွင်း သုံးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Practice combining commands (like grep and find) rather than only using them in isolation.', 'Command များ (grep, find ကဲ့သို့) ကို သီးသန့်အသုံးပြုမည့်အစား ပေါင်းစပ်ရင်း လေ့ကျင့်ပါ။'],
      ['Always double-check file permission changes before applying them on a system you do not fully control.', 'အပြည့်အစုံ ထိန်းချုပ်မထားသော System တစ်ခုပေါ်တွင် အသုံးမချမီ File Permission ပြောင်းလဲမှုများကို နှစ်ကြိမ်စစ်ဆေးပါ။'],
    ]),
    commonMistakes: list([
      ['Changing file permissions broadly (e.g. chmod 777) instead of setting precise, minimal permissions.', 'တိကျ၍ အနည်းဆုံး Permission များ သတ်မှတ်မည့်အစား File Permission များကို ကျယ်ပြန့်စွာ ပြောင်းလဲခြင်း (ဥပမာ chmod 777)။'],
      ['Not understanding a command before running it on a real system.', 'System အစစ်တစ်ခုပေါ်တွင် Run မီ Command တစ်ခုကို နားမလည်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-beginner-3', [
      ['Find files with overly permissive permissions', 'ခွင့်ပြုချက် များလွန်းသော File များ ရှာပါ'],
      ['Search a log file for failed login attempts', 'Fail ဖြစ်သော Login Attempt များအတွက် Log File တစ်ခု ရှာဖွေပါ'],
      ['Summarize suspicious activity found in a log', 'Log တစ်ခုတွင် တွေ့ရှိသော သံသယဖြစ်ဖွယ် လှုပ်ရှားမှု အနှစ်ချုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Navigate the Linux filesystem confidently', 'Linux Filesystem ကို ယုံကြည်စိတ်ချစွာ သွားလာနိုင်သည်'],
      ['Check and understand file permissions', 'File Permission များ စစ်ဆေးပြီး နားလည်နိုင်သည်'],
      ['Use grep and find for investigation', 'စုံစမ်းစစ်ဆေးရေးအတွက် grep နှင့် find သုံးနိုင်သည်'],
      ['Read and interpret log files', 'Log File များ ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-beginner-4': {
    whatItIs: t([
      'Basic cryptography concepts cover how encryption, hashing, and related techniques protect data confidentiality and integrity.',
      'အခြေခံ Cryptography Concept များသည် Encryption, Hashing နှင့် ဆက်စပ် နည်းပညာများ Data Confidentiality နှင့် Integrity ကို မည်သို့ ကာကွယ်ပေးသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Cryptography underlies HTTPS, password storage, secure messaging, and nearly every mechanism that keeps data private and tamper-evident.',
      'Cryptography သည် HTTPS, Password Storage, Secure Messaging နှင့် Data ကို ကိုယ်ရေးကိုယ်တာဖြစ်၍ Tamper-evident ဖြစ်အောင် ထားပေးသော Mechanism နီးပါးအားလုံး၏ အောက်ခြေတွင် ရှိသည်။',
    ]),
    whereUsed: t([
      'Applied everywhere sensitive data is stored or transmitted — web traffic, passwords, financial transactions, secure communications.',
      'အရေးကြီးသော Data သိမ်းဆည်း (သို့) ပို့ဆောင်သည့်နေရာတိုင်းတွင် အသုံးချသည် — Web Traffic, Passwords, ငွေကြေး ကူးပြောင်းမှု, Secure Communication များ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Encryption vs hashing (the key difference)', 'Encryption နှင့် Hashing (အဓိက ကွာခြားချက်)'],
      ['Symmetric vs asymmetric encryption (conceptually)', 'Symmetric နှင့် Asymmetric Encryption (Concept အရ)'],
      ['What HTTPS actually does', 'HTTPS တကယ် ဘာလုပ်သည်ကို'],
      ['Why passwords should be hashed, not encrypted', 'Password များကို Encrypt မလုပ်ဘဲ Hash လုပ်သင့်သည့်အကြောင်း'],
    ]),
    steps: [
      step(
        ['Understand encryption vs. hashing', 'Encryption နှင့် Hashing နားလည်ခြင်း'],
        [
          ['Encryption is reversible (with a key); hashing is designed to be one-way', 'Encryption သည် (Key ဖြင့်) ပြန်ပြောင်းနိုင်သော်လည်း Hashing သည် တစ်ဖက်သတ်သာ ဖြစ်အောင် Design ဆွဲထားသည်'],
          ['Why passwords should be hashed rather than encrypted', 'Password များကို Encrypt မလုပ်ဘဲ Hash လုပ်သင့်သည့်အကြောင်း'],
        ],
        [
          ['Explain, in your own words, why a service should never be able to email you your original plain-text password', 'Service တစ်ခုသည် သင့်ထံ မူလ Plain-text Password ကို Email ပို့၍ ဘယ်တော့မှ မရသင့်သည့်အကြောင်းကို ကိုယ်ပိုင်စကားလုံးဖြင့် ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Understand what HTTPS actually protects', 'HTTPS တကယ်ကာကွယ်ပေးသည်ကို နားလည်ခြင်း'],
        [
          ['HTTPS encrypts data in transit between a browser and server', 'HTTPS သည် Browser နှင့် Server အကြား Data ကို Transit တွင် Encrypt လုပ်ပေးသည်'],
          ['What HTTPS does not protect against (e.g. a compromised endpoint)', 'HTTPS မကာကွယ်ပေးသည်များ (ဥပမာ Compromise ဖြစ်ထားသော Endpoint)'],
        ],
        [
          ['Explain what protection is lost if a website only uses HTTP instead of HTTPS, using a concrete example', 'Website တစ်ခုသည် HTTPS အစား HTTP ကိုသာ သုံးပါက ဘာကာကွယ်မှု ဆုံးရှုံးသွားသည်ကို တိကျသော ဥပမာဖြင့် ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short explainer document (as if for a non-technical colleague) covering: why passwords are hashed not encrypted, what HTTPS actually protects, and one real-world consequence of getting this wrong.',
      'Technical မဟုတ်သော လုပ်ဖော်ကိုင်ဖက်တစ်ဦးအတွက်ကဲ့သို့ Explainer Document တိုတောင်း ရေးပါ — Password များကို ဘာကြောင့် Encrypt မဟုတ်ဘဲ Hash လုပ်သည်၊ HTTPS တကယ်ကာကွယ်ပေးသည်ကို၊ ၎င်းကို မှားယွင်းစွာ လုပ်ခြင်း၏ တကယ့်ဘဝ ရလဒ်တစ်ခု။',
    ]),
    verify: t([
      'Could you explain, to a non-technical person, the difference between encryption and hashing using a real-life analogy?',
      'Technical မဟုတ်သူတစ်ဦးအား Encryption နှင့် Hashing ကြား ကွာခြားချက်ကို လက်တွေ့ဘဝ ဥပမာဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Focus on understanding the "why" and "when" of each technique rather than the underlying math.', 'အခြေခံ သင်္ချာထက် နည်းပညာတစ်ခုစီ၏ "ဘာကြောင့်" နှင့် "ဘယ်အချိန်" ကို နားလည်ရန် အာရုံစိုက်ပါ။'],
      ['If a service claims it can send you your forgotten password directly, that is a red flag about how they store it.', 'Service တစ်ခုသည် ကျန်ခဲ့သော Password ကို တိုက်ရိုက်ပို့ပေးနိုင်သည်ဟု ဆိုပါက ၎င်း၏ သိမ်းဆည်းပုံအကြောင်း Red Flag တစ်ခု ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Confusing encryption and hashing, or assuming they are interchangeable.', 'Encryption နှင့် Hashing ကို ရောထွေးခြင်း (သို့) အပြန်အလှန် အသုံးပြုနိုင်သည်ဟု ယူဆခြင်း။'],
      ['Assuming HTTPS alone means a website is completely safe to use.', 'HTTPS တစ်ခုတည်းက Website တစ်ခုကို လုံးဝ သုံးရန်ဘေးကင်းသည်ဟု ဆိုလိုသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-beginner-4', [
      ['Explain why passwords should be hashed, not encrypted', 'Password များကို ဘာကြောင့် Encrypt မဟုတ်ဘဲ Hash လုပ်သင့်သည်ကို ရှင်းပြပါ'],
      ['Explain what HTTPS protects and does not protect', 'HTTPS ကာကွယ်ပေးသည်နှင့် မကာကွယ်ပေးသည်ကို ရှင်းပြပါ'],
      ['Write a short non-technical explainer on encryption vs hashing', 'Encryption vs Hashing အကြောင်း Technical မဟုတ်သော Explainer တိုတောင်း ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain the difference between encryption and hashing', 'Encryption နှင့် Hashing ကြား ကွာခြားချက် ရှင်းပြနိုင်သည်'],
      ['Explain symmetric vs asymmetric encryption conceptually', 'Symmetric နှင့် Asymmetric Encryption ကို Concept အရ ရှင်းပြနိုင်သည်'],
      ['Explain what HTTPS actually protects', 'HTTPS တကယ်ကာကွယ်ပေးသည်ကို ရှင်းပြနိုင်သည်'],
      ['Explain why passwords must be hashed', 'Password များ ဘာကြောင့် Hash လုပ်ရမည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-core-1': {
    whatItIs: t([
      'Common vulnerabilities and threats covers the well-known categories of security weaknesses — like injection attacks, weak authentication, and misconfiguration — that attackers exploit most often.',
      'Common Vulnerabilities and Threats သည် Attacker များ အများဆုံး Exploit လုပ်လေ့ရှိသော Security အားနည်းချက် အမျိုးအစားများ — Injection Attack, Authentication အားနည်းခြင်း, Misconfiguration ကဲ့သို့ — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'The vast majority of real-world breaches exploit a small set of well-known, well-documented vulnerability categories — knowing them is the foundation of practical defense.',
      'လက်တွေ့ဘဝ Breach အများစုသည် ကောင်းစွာ သိထား၍ Document ရေးထားသော Vulnerability Category အနည်းငယ်ကို Exploit လုပ်သည် — ၎င်းတို့ကို သိထားခြင်းသည် လက်တွေ့ကျသော ကာကွယ်ရေး၏ အခြေခံ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Referenced constantly in security work through frameworks like the OWASP Top 10 for web applications.',
      'Web Application များအတွက် OWASP Top 10 ကဲ့သို့ Framework များမှတစ်ဆင့် Security အလုပ်တွင် အမြဲ ရည်ညွှန်းသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the networking and terminology fundamentals from the Beginner stage.',
      'Beginner အဆင့်မှ Networking နှင့် Terminology အခြေခံများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Injection attacks (SQL injection basics)', 'Injection တိုက်ခိုက်မှုများ (SQL Injection အခြေခံ)'],
      ['Weak/broken authentication', 'Authentication အားနည်း/ပျက်စီးခြင်း'],
      ['Security misconfiguration', 'Security Misconfiguration'],
      ['Outdated/vulnerable software components', 'Software Component ဟောင်း/အားနည်းချက်ရှိသော'],
    ]),
    steps: [
      step(
        ['Understand injection attacks conceptually', 'Injection တိုက်ခိုက်မှုများကို Concept အရ နားလည်ခြင်း'],
        [
          ['SQL injection: untrusted input treated as executable database code', 'SQL Injection — မယုံကြည်ရသော Input ကို Execute လုပ်နိုင်သော Database Code အဖြစ် သဘောထားခြင်း'],
          ['Why input validation and parameterized queries prevent it', 'Input Validation နှင့် Parameterized Query များက ၎င်းကို ဘာကြောင့် ကာကွယ်ပေးသည်ကို'],
        ],
        [
          ['Given a vulnerable sample login form, explain step by step how a SQL injection attack against it could work', 'အားနည်းချက်ရှိသော Sample Login Form တစ်ခု ပေးလိုက်လျှင် ၎င်းကို ဆန့်ကျင်သော SQL Injection တိုက်ခိုက်မှု တစ်ခု မည်သို့ အလုပ်လုပ်နိုင်သည်ကို အဆင့်ဆင့် ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Recognize weak authentication and misconfiguration', 'Authentication အားနည်းခြင်းနှင့် Misconfiguration ဖော်ထုတ်ခြင်း'],
        [
          ['Common authentication weaknesses: no rate limiting, weak password policies', 'အများသုံး Authentication အားနည်းချက်များ — Rate Limiting မရှိခြင်း, Password မူဝါဒ အားနည်းခြင်း'],
          ['Security misconfiguration: default credentials left in place, unnecessary services exposed', 'Security Misconfiguration — Default Credential များ ချန်ထားခြင်း, မလိုအပ်သော Service များ ဖော်ထုတ်ထားခြင်း'],
        ],
        [
          ['Review a sample system configuration and identify at least three security misconfigurations', 'Sample System Configuration တစ်ခုကို Review လုပ်ပြီး Security Misconfiguration အနည်းဆုံး သုံးခု ဖော်ထုတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write a vulnerability report for a sample (deliberately insecure) web application: identify at least three distinct vulnerability categories, explain the risk of each, and suggest a fix.',
      'Sample (တမင် လုံခြုံမှုမရှိအောင် ပြုလုပ်ထားသော) Web Application တစ်ခုအတွက် Vulnerability Report တစ်ခု ရေးပါ — Vulnerability Category ကွဲပြားသော အနည်းဆုံးသုံးခု ဖော်ထုတ်ပြီး တစ်ခုစီ၏ Risk ကို ရှင်းပြကာ ဖြေရှင်းချက်တစ်ခု အကြံပြုပါ။',
    ]),
    verify: t([
      'Given a piece of vulnerable code or configuration, could you identify which OWASP-style vulnerability category it falls into?',
      'အားနည်းချက်ရှိသော Code (သို့) Configuration အပိုင်းအစတစ်ခု ပေးလိုက်လျှင် ၎င်းသည် မည်သည့် OWASP-style Vulnerability Category ထဲသို့ ကျရောက်သည်ကို ဖော်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn vulnerabilities by studying real, documented case studies, not just abstract definitions.', 'Vulnerability များကို Abstract Definition များသာမက တကယ့် Document ရေးထားသော Case Study များကို လေ့လာရင်း လေ့ကျင့်ပါ။'],
      ['Practice thinking like an attacker: "how would I misuse this input field?"', 'တိုက်ခိုက်သူကဲ့သို့ တွေးခေါ်ရန် လေ့ကျင့်ပါ — "ဒီ Input Field ကို ဘယ်လို အလွဲသုံးစားလုပ်နိုင်မလဲ?"'],
    ]),
    commonMistakes: list([
      ['Memorizing vulnerability names without understanding the underlying mechanism.', 'အောက်ခြေ Mechanism ကို နားမလည်ဘဲ Vulnerability နာမည်များကို အလွတ်ကျက်မှတ်ခြင်း။'],
      ['Focusing only on exotic attacks while ignoring common, simple misconfigurations.', 'အများသုံး ရိုးရှင်းသော Misconfiguration များကို လျစ်လျူရှုပြီး ထူးဆန်းသော တိုက်ခိုက်မှုများကိုသာ အာရုံစိုက်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-core-1', [
      ['Explain how a SQL injection attack works against a sample form', 'Sample Form တစ်ခုကို ဆန့်ကျင်သော SQL Injection တိုက်ခိုက်မှု မည်သို့အလုပ်လုပ်သည်ကို ရှင်းပြပါ'],
      ['Identify misconfigurations in a sample system', 'Sample System တစ်ခုတွင် Misconfiguration များ ဖော်ထုတ်ပါ'],
      ['Write a vulnerability report with at least three findings', 'တွေ့ရှိချက် အနည်းဆုံးသုံးခုပါသော Vulnerability Report တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain how injection attacks work', 'Injection တိုက်ခိုက်မှုများ မည်သို့အလုပ်လုပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Identify weak authentication patterns', 'Authentication အားနည်းသော Pattern များ ဖော်ထုတ်နိုင်သည်'],
      ['Identify common security misconfigurations', 'အများသုံး Security Misconfiguration များ ဖော်ထုတ်နိုင်သည်'],
      ['Write a basic vulnerability report', 'အခြေခံ Vulnerability Report တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-core-2': {
    whatItIs: t([
      'Security tools basics cover using scanning and monitoring tools to discover vulnerabilities and observe what is happening on a system or network.',
      'Security Tool အခြေခံသည် Vulnerability များ ရှာဖွေရန်နှင့် System (သို့) Network ပေါ်တွင် ဖြစ်ပျက်နေသည်ကို စောင့်ကြည့်ရန် Scanning နှင့် Monitoring Tool များ သုံးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Manual inspection does not scale — automated scanning and monitoring tools let a security professional cover far more ground and catch issues consistently.',
      'Manual Inspection သည် Scale မလုပ်နိုင်ပါ — Automated Scanning နှင့် Monitoring Tool များက Security Professional တစ်ဦးအား နယ်ပယ်ပိုများစွာ လွှမ်းခြုံပြီး ပြဿနာများကို တသမတ်တည်း ဖမ်းယူနိုင်စေသည်။',
    ]),
    whereUsed: t([
      'Used daily by security analysts and engineers to scan for vulnerabilities and monitor systems for suspicious activity.',
      'Vulnerability များ Scan လုပ်ရန်နှင့် သံသယဖြစ်ဖွယ် လှုပ်ရှားမှုအတွက် System များ Monitor လုပ်ရန် Security Analyst နှင့် Engineer များက နေ့စဉ် သုံးကြသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the Linux and networking fundamentals from the Beginner stage.',
      'Beginner အဆင့်မှ Linux နှင့် Networking အခြေခံများ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Network scanning basics', 'Network Scanning အခြေခံ'],
      ['Vulnerability scanning basics', 'Vulnerability Scanning အခြေခံ'],
      ['Log monitoring basics', 'Log Monitoring အခြေခံ'],
      ['Interpreting scan results responsibly', 'Scan ရလဒ်များကို တာဝန်ယူတတ်စွာ အဓိပ္ပာယ်ဖွင့်ခြင်း'],
    ]),
    steps: [
      step(
        ['Run a basic network scan (in an authorized environment)', 'အခြေခံ Network Scan တစ်ခု Run ခြင်း (ခွင့်ပြုထားသော Environment တွင်)'],
        [
          ['Scanning for open ports and running services on a system you own or are authorized to test', 'ပိုင်ဆိုင်ထားသော (သို့) Test လုပ်ရန် ခွင့်ပြုထားသော System တစ်ခုပေါ်ရှိ Open Port နှင့် Running Service များ Scan လုပ်ခြင်း'],
        ],
        [
          ['Scan a test system you control and document every open port and service found', 'သင် ထိန်းချုပ်ထားသော Test System တစ်ခုကို Scan လုပ်ပြီး တွေ့ရှိသော Open Port နှင့် Service တိုင်းကို မှတ်တမ်းတင်ပါ'],
        ],
      ),
      step(
        ['Run a vulnerability scan and interpret results', 'Vulnerability Scan တစ်ခု Run ပြီး ရလဒ်များ အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Understanding a scan report\'s severity ratings', 'Scan Report ၏ Severity Rating များ နားလည်ခြင်း'],
          ['Distinguishing real findings from false positives', 'တကယ့် တွေ့ရှိချက်များကို False Positive များနှင့် ခွဲခြားခြင်း'],
        ],
        [
          ['Run a vulnerability scan on a test system and write a prioritized summary of the findings', 'Test System တစ်ခုပေါ်တွင် Vulnerability Scan တစ်ခု Run ပြီး တွေ့ရှိချက်များ၏ ဦးစားပေး Summary တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'On a system you own or are explicitly authorized to test, run a network scan and a vulnerability scan, then write a prioritized report of findings with severity and suggested remediation.',
      'ပိုင်ဆိုင်ထားသော (သို့) ရှင်းလင်းစွာ Test လုပ်ရန် ခွင့်ပြုထားသော System တစ်ခုပေါ်တွင် Network Scan နှင့် Vulnerability Scan တစ်ခု Run ပါ၊ ထို့နောက် Severity နှင့် အကြံပြု ဖြေရှင်းချက်ပါသော တွေ့ရှိချက်များ၏ ဦးစားပေး Report တစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Given a scan report full of findings, could you prioritize them by real risk rather than treating every finding as equally urgent?',
      'တွေ့ရှိချက်များပြည့်နှက်နေသော Scan Report တစ်ခု ပေးလိုက်လျှင် တွေ့ရှိချက်တိုင်းကို အရေးပေါ်မှု တူညီသည်ဟု သဘောထားမည့်အစား တကယ့် Risk ဖြင့် ဦးစားပေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Never scan a system you do not own or have explicit written permission to test — this can be illegal.', 'ပိုင်ဆိုင်ခြင်း (သို့) Test လုပ်ရန် စာဖြင့် ရှင်းလင်းသော ခွင့်ပြုချက် မရှိသော System တစ်ခုကို ဘယ်တော့မှ Scan မလုပ်ပါနှင့် — ၎င်းသည် တရားမဝင် ဖြစ်နိုင်သည်။'],
      ['Always verify a scan finding manually before reporting it as confirmed — scanners produce false positives.', 'Scanner များသည် False Positive ထုတ်လုပ်တတ်သောကြောင့် အတည်ပြုပြီးဟု Report မတင်မီ Scan တွေ့ရှိချက်ကို Manual စစ်ဆေးပါ။'],
    ]),
    commonMistakes: list([
      ['Scanning a system without explicit authorization.', 'ရှင်းလင်းသော ခွင့်ပြုချက် မရှိဘဲ System တစ်ခုကို Scan လုပ်ခြင်း။'],
      ['Reporting every scan finding as critical without verifying or prioritizing.', 'အတည်မပြုဘဲ (သို့) ဦးစားမပေးဘဲ Scan တွေ့ရှိချက်တိုင်းကို Critical အဖြစ် Report တင်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-core-2', [
      ['Run an authorized network scan and document results', 'ခွင့်ပြုထားသော Network Scan တစ်ခု Run ပြီး ရလဒ်များ မှတ်တမ်းတင်ပါ'],
      ['Run a vulnerability scan on a test system', 'Test System တစ်ခုပေါ်တွင် Vulnerability Scan တစ်ခု Run ပါ'],
      ['Write a prioritized findings report', 'ဦးစားပေး တွေ့ရှိချက် Report တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Run a basic network scan in an authorized environment', 'ခွင့်ပြုထားသော Environment တွင် အခြေခံ Network Scan တစ်ခု Run နိုင်သည်'],
      ['Run a basic vulnerability scan', 'အခြေခံ Vulnerability Scan တစ်ခု Run နိုင်သည်'],
      ['Interpret and prioritize scan findings', 'Scan တွေ့ရှိချက်များကို အဓိပ္ပာယ်ဖွင့်ပြီး ဦးစားပေးနိုင်သည်'],
      ['Understand the legal/ethical boundaries of scanning', 'Scanning ၏ ဥပဒေရေးရာ/ကျင့်ဝတ်ဆိုင်ရာ နယ်နိမိတ်များ နားလည်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-core-3': {
    whatItIs: t([
      'Web application security basics cover protecting the layer most attackers actually target — the web apps and APIs that handle user data and business logic.',
      'Web Application Security အခြေခံသည် Attacker အများစု တကယ် ပစ်မှတ်ထားသော Layer — User Data နှင့် Business Logic ကိုင်တွယ်သော Web App နှင့် API များ — ကို ကာကွယ်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Web applications are internet-facing and often handle the most sensitive data, making them one of the most commonly attacked parts of any system.',
      'Web Application များသည် Internet-facing ဖြစ်ပြီး အရေးအကြီးဆုံး Data ကို မကြာခဏ ကိုင်တွယ်လေ့ရှိသောကြောင့် System မည်သည်၏ အများဆုံး တိုက်ခိုက်ခံရသော အစိတ်အပိုင်းများထဲမှ တစ်ခု ဖြစ်လာသည်။',
    ]),
    whereUsed: t([
      'Directly relevant to any organization running a website, web app, or API — which is essentially every modern business.',
      'Website, Web App (သို့) API Run နေသော အဖွဲ့အစည်းမည်သည်နှင့်မဆို တိုက်ရိုက် သက်ဆိုင်သည် — ၎င်းသည် ခေတ်သစ် Business နီးပါးအားလုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the common vulnerabilities covered earlier in this stage.',
      'ဤအဆင့်ရှေ့ပိုင်းတွင် လွှမ်းခြုံခဲ့သော အများသုံး Vulnerability များအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Cross-site scripting (XSS) basics', 'Cross-site Scripting (XSS) အခြေခံ'],
      ['Cross-site request forgery (CSRF) basics', 'Cross-site Request Forgery (CSRF) အခြေခံ'],
      ['Session and cookie security basics', 'Session နှင့် Cookie Security အခြေခံ'],
      ['Basic secure headers (CSP, HSTS at a conceptual level)', 'အခြေခံ Secure Header များ (CSP, HSTS ကို Concept အဆင့်)'],
    ]),
    steps: [
      step(
        ['Understand XSS and how to prevent it', 'XSS နှင့် ၎င်းကို ကာကွယ်နည်း နားလည်ခြင်း'],
        [
          ['XSS injects malicious scripts into pages viewed by other users', 'XSS သည် အသုံးပြုသူတခြားများ ကြည့်ရှုသော Page များထဲသို့ မကောင်းသော Script များ Inject ထည့်သည်'],
          ['Escaping/sanitizing user input before rendering it prevents most XSS', 'Render မလုပ်မီ User Input ကို Escape/Sanitize လုပ်ခြင်းက XSS အများစုကို ကာကွယ်ပေးသည်'],
        ],
        [
          ['Given a sample comment field that renders user input unescaped, explain exactly how an XSS attack against it would work', 'User Input ကို Escape မလုပ်ဘဲ Render လုပ်သော Sample Comment Field တစ်ခု ပေးလိုက်လျှင် ၎င်းကို ဆန့်ကျင်သော XSS တိုက်ခိုက်မှု မည်သို့ အလုပ်လုပ်မည်ကို အတိအကျ ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Understand session security and CSRF', 'Session Security နှင့် CSRF နားလည်ခြင်း'],
        [
          ['Why session cookies need secure flags (HttpOnly, Secure)', 'Session Cookie များ ဘာကြောင့် Secure Flag (HttpOnly, Secure) လိုအပ်သည်ကို'],
          ['CSRF tricks a logged-in user\'s browser into making an unwanted request', 'CSRF သည် Login ဝင်ထားသော User ၏ Browser ကို မလိုလားအပ်သော Request တစ်ခု ပြုလုပ်စေရန် လှည့်ဖြားသည်'],
        ],
        [
          ['Review a sample application\'s cookie settings and identify any missing security flags', 'Sample Application တစ်ခု၏ Cookie Setting များကို Review လုပ်ပြီး ပျောက်ဆုံးနေသော Security Flag များ ဖော်ထုတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Perform a basic web security review of a sample (deliberately vulnerable) app: identify one XSS risk, one session/cookie security issue, and write clear remediation steps for each.',
      'Sample (တမင် Vulnerability ရှိအောင် ပြုလုပ်ထားသော) App တစ်ခု၏ အခြေခံ Web Security Review ပြုလုပ်ပါ — XSS Risk တစ်ခု၊ Session/Cookie Security ပြဿနာတစ်ခု ဖော်ထုတ်ပြီး တစ်ခုစီအတွက် ရှင်းလင်းသော ဖြေရှင်းချက် အဆင့်များ ရေးပါ။',
    ]),
    verify: t([
      'Given a piece of code that renders user input directly into a page, could you identify the XSS risk and explain the fix?',
      'User Input ကို Page ထဲသို့ တိုက်ရိုက် Render လုပ်သော Code အပိုင်းအစတစ်ခု ပေးလိုက်လျှင် XSS Risk ကို ဖော်ထုတ်ပြီး ဖြေရှင်းချက်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Test for XSS by trying to inject harmless test scripts into input fields (only on systems you are authorized to test).', 'Input Field များထဲသို့ အန္တရာယ်မရှိသော Test Script များ Inject ထည့်ကြည့်ခြင်းဖြင့် XSS ကို Test လုပ်ပါ (Test လုပ်ရန် ခွင့်ပြုထားသော System များတွင်သာ)။'],
      ['Always assume user input is hostile until proven otherwise — validate and escape it.', 'သက်သေမပြသမျှ User Input သည် ရန်ဘက်ဖြစ်သည်ဟု အမြဲ ယူဆပါ — ၎င်းကို Validate နှင့် Escape လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trusting user input to be safe without validating or escaping it.', 'Validate (သို့) Escape မလုပ်ဘဲ User Input ကို ဘေးကင်းသည်ဟု ယုံကြည်ခြင်း။'],
      ['Focusing only on server-side security while ignoring how the front-end renders untrusted data.', 'Front-end သည် မယုံကြည်ရသော Data ကို မည်သို့ Render လုပ်သည်ကို လျစ်လျူရှုပြီး Server-side Security ကိုသာ အာရုံစိုက်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-core-3', [
      ['Explain how an XSS attack works against a sample field', 'Sample Field တစ်ခုကို ဆန့်ကျင်သော XSS တိုက်ခိုက်မှု မည်သို့အလုပ်လုပ်သည်ကို ရှင်းပြပါ'],
      ['Review cookie settings for security flags', 'Security Flag များအတွက် Cookie Setting များ Review လုပ်ပါ'],
      ['Write remediation steps for two web security findings', 'Web Security တွေ့ရှိချက်နှစ်ခုအတွက် ဖြေရှင်းချက် အဆင့်များ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain how XSS attacks work and how to prevent them', 'XSS တိုက်ခိုက်မှုများ မည်သို့အလုပ်လုပ်ပြီး မည်သို့ ကာကွယ်ရမည်ကို ရှင်းပြနိုင်သည်'],
      ['Explain CSRF and session security basics', 'CSRF နှင့် Session Security အခြေခံ ရှင်းပြနိုင်သည်'],
      ['Identify missing cookie security flags', 'ပျောက်ဆုံးနေသော Cookie Security Flag များ ဖော်ထုတ်နိုင်သည်'],
      ['Perform a basic web security review', 'အခြေခံ Web Security Review ပြုလုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-core-4': {
    whatItIs: t([
      'Security policies and best practices cover the documented rules and standard practices organizations use to manage security consistently.',
      'Security Policy နှင့် Best Practice များသည် အဖွဲ့အစည်းများ Security ကို တသမတ်တည်း စီမံခန့်ခွဲရန် သုံးသော Document ရေးထားသော စည်းမျဉ်းများနှင့် စံ အလေ့အထများကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Security is not just technical — clear policies (password rules, access reviews, acceptable use) are what make secure behavior consistent across an entire organization, not just among security experts.',
      'Security သည် Technical တစ်ခုတည်း မဟုတ်ပါ — ရှင်းလင်းသော Policy များ (Password စည်းမျဉ်း, Access Review, Acceptable Use) သည် Security ကျင့်ကြံမှုကို Security Expert များအကြားတစ်ခုတည်းမကဘဲ အဖွဲ့အစည်းတစ်ခုလုံးတစ်လျှောက် တသမတ်တည်း ဖြစ်စေသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in every organization with a mature security posture — password policies, access control policies, incident response plans.',
      'ရင့်ကျက်သော Security Posture ရှိသော အဖွဲ့အစည်းတိုင်းတွင် ရှိသည် — Password Policy, Access Control Policy, Incident Response Plan များ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Password policies', 'Password Policy များ'],
      ['Least privilege principle', 'Least Privilege မူ'],
      ['Acceptable use policies', 'Acceptable Use Policy များ'],
      ['Security awareness for non-technical staff', 'Technical မဟုတ်သော Staff များအတွက် Security Awareness'],
    ]),
    steps: [
      step(
        ['Understand and apply core security policy principles', 'အဓိက Security Policy မူများကို နားလည်ပြီး အသုံးချခြင်း'],
        [
          ['Least privilege: give access only to what is actually needed', 'Least Privilege — တကယ်လိုအပ်သည်ကိုသာ Access ပေးခြင်း'],
          ['Why strong password policies balance security with usability', 'ခိုင်မာသော Password Policy များသည် Security ကို Usability နှင့် ဘာကြောင့် ချိန်ညှိပေးသလဲ'],
        ],
        [
          ['Review a sample set of user access permissions and identify violations of least privilege', 'Sample User Access Permission အစုအဝေးတစ်ခုကို Review လုပ်ပြီး Least Privilege ကို ဖီဆန်နေသည်များ ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Write a basic security policy document', 'အခြေခံ Security Policy Document တစ်ခု ရေးခြင်း'],
        [
          ['Structuring a policy: purpose, scope, rules, enforcement', 'Policy တစ်ခု ဖွဲ့စည်းခြင်း — Purpose, Scope, Rules, Enforcement'],
        ],
        [
          ['Write a short password policy document for a small organization, covering purpose, requirements, and enforcement', 'အဖွဲ့အစည်းသေးငယ်တစ်ခုအတွက် Password Policy Document တိုတောင်း ရေးပါ — Purpose, Requirements, Enforcement ပါဝင်ပြီး'],
        ],
      ),
    ],
    build: t([
      'Write a short security policy pack for a small organization: a password policy, an access control policy based on least privilege, and a one-page security awareness summary for non-technical staff.',
      'အဖွဲ့အစည်းသေးငယ်တစ်ခုအတွက် Security Policy Pack တိုတောင်း ရေးပါ — Password Policy, Least Privilege ကို အခြေခံသော Access Control Policy နှင့် Technical မဟုတ်သော Staff များအတွက် တစ်မျက်နှာ Security Awareness Summary။',
    ]),
    verify: t([
      'Could you explain the reasoning behind least privilege to someone unfamiliar with security, using a real workplace example?',
      'Security နှင့် မရင်းနှီးသူတစ်ဦးအား Least Privilege နောက်ကွယ်ရှိ ယုတ္တိကို တကယ့် Workplace ဥပမာဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Write policies in plain language non-technical staff can actually follow.', 'Technical မဟုတ်သော Staff များ တကယ် လိုက်နာနိုင်မည့် ရိုးရှင်းသော ဘာသာစကားဖြင့် Policy များ ရေးပါ။'],
      ['Balance security with usability — an overly strict policy people cannot follow gets ignored or worked around.', 'Security ကို Usability နှင့် ချိန်ညှိပါ — လူများ မလိုက်နာနိုင်သော တင်းကျပ်လွန်းသော Policy တစ်ခုကို လျစ်လျူရှု (သို့) ရှောင်လွှဲကြလိမ့်မည်။'],
    ]),
    commonMistakes: list([
      ['Writing overly technical policies that non-technical staff cannot understand or follow.', 'Technical မဟုတ်သော Staff များ နားမလည် (သို့) မလိုက်နာနိုင်လောက်အောင် Technical လွန်းသော Policy များ ရေးခြင်း။'],
      ['Granting broad access "to be safe" instead of applying least privilege.', 'Least Privilege အသုံးချမည့်အစား "ဘေးကင်းအောင်" ဆိုပြီး ကျယ်ပြန့်သော Access ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-core-4', [
      ['Identify least privilege violations in sample permissions', 'Sample Permission များတွင် Least Privilege ဖီဆန်မှုများ ဖော်ထုတ်ပါ'],
      ['Write a password policy document', 'Password Policy Document တစ်ခု ရေးပါ'],
      ['Write a one-page security awareness summary', 'တစ်မျက်နှာ Security Awareness Summary တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Apply the least privilege principle', 'Least Privilege မူကို အသုံးချနိုင်သည်'],
      ['Write a basic security policy document', 'အခြေခံ Security Policy Document တစ်ခု ရေးနိုင်သည်'],
      ['Explain security concepts to non-technical staff clearly', 'Technical မဟုတ်သော Staff များအား Security Concept များကို ရှင်းလင်းစွာ ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-intermediate-1': {
    whatItIs: t([
      'Penetration testing basics cover legally, ethically probing a system for weaknesses the way a real attacker would, to find issues before attackers do.',
      'Penetration Testing အခြေခံသည် Attacker တကယ် တိုက်ခိုက်ခံရမီ ပြဿနာများ ရှာဖွေရန် System တစ်ခုကို ဥပဒေရေးရာ၊ ကျင့်ဝတ်ကျစွာ အားနည်းချက်များအတွက် စစ်ဆေးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Finding your own weaknesses before a real attacker does is one of the most valuable and proactive things a security team can do.',
      'Attacker အစစ်တစ်ဦး မတွေ့မီ ကိုယ်ပိုင် အားနည်းချက်များကို ရှာတွေ့ခြင်းသည် Security Team တစ်ခု ပြုလုပ်နိုင်သော အတန်ဖိုးအရှိဆုံးနှင့် Proactive ဆုံးအရာများထဲမှ တစ်ခု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'A standard, often required security practice for organizations handling sensitive data or subject to compliance requirements.',
      'အရေးကြီးသော Data ကိုင်တွယ်သော (သို့) Compliance လိုအပ်ချက်များ ရှိသော အဖွဲ့အစည်းများအတွက် စံ၊ မကြာခဏ လိုအပ်သော Security Practice တစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires the vulnerability, scanning, and web security knowledge from the Core stage.',
      'Core အဆင့်မှ Vulnerability, Scanning, Web Security အသိပညာ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['The penetration testing process (recon, scan, exploit, report)', 'Penetration Testing Process (Recon, Scan, Exploit, Report)'],
      ['Rules of engagement and authorization', 'Rules of Engagement နှင့် Authorization'],
      ['Reconnaissance techniques', 'Reconnaissance နည်းလမ်းများ'],
      ['Writing a professional pentest report', 'Professional Pentest Report ရေးခြင်း'],
    ]),
    steps: [
      step(
        ['Understand the pentest process and authorization', 'Pentest Process နှင့် Authorization နားလည်ခြင်း'],
        [
          ['Why written authorization ("rules of engagement") must exist before any testing begins', 'Test မစတင်မီ Written Authorization ("Rules of Engagement") ဘာကြောင့် ရှိနေရမည်ကို'],
          ['The general process: reconnaissance, scanning, exploitation, reporting', 'General Process — Reconnaissance, Scanning, Exploitation, Reporting'],
        ],
        [
          ['Draft a simple rules-of-engagement document for a hypothetical test, defining scope and what is off-limits', 'ယူဆချက်ရေး Test တစ်ခုအတွက် Rules-of-engagement Document ရိုးရှင်းတစ်ခု မူကြမ်းရေးပါ — Scope နှင့် ကန့်သတ်ထားသည်များကို သတ်မှတ်ပြီး'],
        ],
      ),
      step(
        ['Perform reconnaissance and document findings', 'Reconnaissance ပြုလုပ်ပြီး တွေ့ရှိချက်များ မှတ်တမ်းတင်ခြင်း'],
        [
          ['Passive reconnaissance: gathering public information without touching the target directly', 'Passive Reconnaissance — ပစ်မှတ်ကို တိုက်ရိုက် မထိမိဘဲ Public Information စုစည်းခြင်း'],
        ],
        [
          ['On a system you are authorized to test, perform basic reconnaissance and document what you find', 'Test လုပ်ရန် ခွင့်ပြုထားသော System တစ်ခုပေါ်တွင် အခြေခံ Reconnaissance ပြုလုပ်ပြီး တွေ့ရှိသည်ကို မှတ်တမ်းတင်ပါ'],
        ],
      ),
    ],
    build: t([
      'On a system you are explicitly authorized to test, run through a basic pentest process (recon, scan, identify one weakness) and write a professional-style report with findings, risk, and remediation.',
      'ရှင်းလင်းစွာ Test လုပ်ရန် ခွင့်ပြုထားသော System တစ်ခုပေါ်တွင် အခြေခံ Pentest Process (Recon, Scan, အားနည်းချက်တစ်ခု ဖော်ထုတ်ခြင်း) ကို ဖြတ်သန်းပြီး တွေ့ရှိချက်၊ Risk, ဖြေရှင်းချက်ပါသော Professional-style Report တစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Could you explain, step by step, why authorization must come before any testing, and what could go wrong without it?',
      'Test မည်သည့်ကမဆို မတိုင်မီ Authorization ဘာကြောင့် ရှိနေရမည်ကို အဆင့်ဆင့် ရှင်းပြနိုင်ပြီး ၎င်းမရှိပါက ဘာမှားသွားနိုင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Never test a system without explicit written authorization — this is both an ethical and legal requirement.', 'ရှင်းလင်းသော Written Authorization မရှိဘဲ System တစ်ခုကို ဘယ်တော့မှ Test မလုပ်ပါနှင့် — ၎င်းသည် ကျင့်ဝတ်ရေးရာနှင့် ဥပဒေရေးရာ လိုအပ်ချက် နှစ်ခုစလုံး ဖြစ်သည်။'],
      ['Document everything as you go — a pentest without clear documentation has little value.', 'လုပ်ရင်း အားလုံးကို မှတ်တမ်းတင်ပါ — ရှင်းလင်းသော Documentation မပါသော Pentest တစ်ခုသည် တန်ဖိုးနည်းသည်။'],
    ]),
    commonMistakes: list([
      ['Testing systems without explicit authorization.', 'ရှင်းလင်းသော Authorization မရှိဘဲ System များကို Test လုပ်ခြင်း။'],
      ['Jumping straight to exploitation without proper reconnaissance and planning.', 'သင့်လျော်သော Reconnaissance နှင့် Planning မရှိဘဲ Exploitation သို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-intermediate-1', [
      ['Draft a rules-of-engagement document', 'Rules-of-engagement Document တစ်ခု မူကြမ်းရေးပါ'],
      ['Perform authorized reconnaissance on a test system', 'Test System တစ်ခုပေါ်တွင် ခွင့်ပြုထားသော Reconnaissance ပြုလုပ်ပါ'],
      ['Write a professional-style pentest report', 'Professional-style Pentest Report တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain the pentest process at a high level', 'Pentest Process ကို Overview အနေဖြင့် ရှင်းပြနိုင်သည်'],
      ['Understand rules of engagement and authorization', 'Rules of Engagement နှင့် Authorization နားလည်သည်'],
      ['Perform basic reconnaissance', 'အခြေခံ Reconnaissance ပြုလုပ်နိုင်သည်'],
      ['Write a professional-style report', 'Professional-style Report တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-intermediate-2': {
    whatItIs: t([
      'Incident detection and response covers noticing when something malicious is happening and following a structured process to contain and resolve it.',
      'Incident Detection and Response သည် မကောင်းသောအရာ ဖြစ်ပျက်နေသည်ကို သတိထားမိခြင်းနှင့် ၎င်းကို ထိန်းချုပ်ပြီး ဖြေရှင်းရန် ဖွဲ့စည်းထားသော လုပ်ငန်းစဉ်တစ်ခု လိုက်နာခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'It is not a matter of if but when a security incident happens — how quickly and effectively a team detects and responds determines how much damage occurs.',
      'Security Incident တစ်ခု ဖြစ်ခြင်း/မဖြစ်ခြင်းမဟုတ်ဘဲ ဘယ်အချိန် ဖြစ်မည်ဆိုသည်သာ ဖြစ်သည် — အဖွဲ့တစ်ဖွဲ့ မည်မျှ လျင်မြန်၍ ထိရောက်စွာ ဖော်ထုတ်ပြီး တုံ့ပြန်သည်က ပျက်စီးမှု မည်မျှဖြစ်မည်ကို ဆုံးဖြတ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Central to every security operations center (SOC) and incident response team\'s day-to-day work.',
      'Security Operations Center (SOC) နှင့် Incident Response Team တိုင်း၏ နေ့စဉ် အလုပ်၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the log analysis skills from the Linux basics topic.',
      'Linux Basics Topic မှ Log Analysis ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Signs of a security incident (indicators of compromise)', 'Security Incident ၏ လက္ခဏာများ (Indicators of Compromise)'],
      ['The incident response lifecycle (detect, contain, eradicate, recover)', 'Incident Response Lifecycle (Detect, Contain, Eradicate, Recover)'],
      ['Basic log analysis for detection', 'Detection အတွက် အခြေခံ Log Analysis'],
      ['Communicating during an active incident', 'တက်ကြွသော Incident တစ်ခုအတွင်း ဆက်သွယ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Recognize indicators of compromise', 'Indicators of Compromise ဖော်ထုတ်ခြင်း'],
        [
          ['Unusual login times/locations, unexpected processes, unusual outbound traffic', 'ထူးဆန်းသော Login အချိန်/နေရာများ, မမျှော်လင့်ထားသော Process များ, ထူးဆန်းသော Outbound Traffic'],
        ],
        [
          ['Given a sample log with mixed normal and suspicious activity, flag the entries that look like indicators of compromise', 'ပုံမှန်နှင့် သံသယဖြစ်ဖွယ် လှုပ်ရှားမှု ရောနှောနေသော Sample Log တစ်ခု ပေးလိုက်လျှင် Indicator of Compromise ကဲ့သို့ ပုံပေါ်နေသော Entry များကို Flag ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Follow the incident response lifecycle', 'Incident Response Lifecycle လိုက်နာခြင်း'],
        [
          ['Detect: notice something is wrong', 'Detect — တစ်ခုခု မှားနေကြောင်း သတိထားမိခြင်း'],
          ['Contain: stop it from getting worse before fully understanding it', 'Contain — အပြည့်အစုံ မနားလည်မီ ပိုမဆိုးလာအောင် ရပ်တန့်ခြင်း'],
          ['Eradicate and recover: remove the cause and restore normal operation', 'Eradicate and Recover — အကြောင်းရင်းကို ဖယ်ရှားပြီး ပုံမှန် လုပ်ဆောင်နိုင်စွမ်း ပြန်လည်ရယူခြင်း'],
        ],
        [
          ['For the indicators you flagged, write out the containment steps you would take first', 'Flag ပြုလုပ်ထားသော Indicator များအတွက် ဦးစွာ ယူမည့် Containment အဆင့်များ ရေးထားပါ'],
        ],
      ),
    ],
    build: t([
      'Given a realistic incident scenario (e.g. logs showing signs of a compromised account), work through the full response lifecycle: detection evidence, containment steps, eradication approach, and a brief post-incident summary.',
      'လက်တွေ့ကျသော Incident Scenario တစ်ခု (ဥပမာ Account Compromise ဖြစ်ကြောင်း လက္ခဏာပြသော Log များ) ပေးလိုက်လျှင် Response Lifecycle အပြည့်အစုံကို ဖြတ်သန်းပါ — Detection သက်သေ, Containment အဆင့်များ, Eradication ချဉ်းကပ်နည်းနှင့် Post-incident Summary တိုတောင်း။',
    ]),
    verify: t([
      'Given evidence of a possible compromise, could you decide, with reasoning, what to contain first and why?',
      'Compromise ဖြစ်နိုင်ခြေရှိသော သက်သေ ပေးလိုက်လျှင် ဦးစွာ ဘာကို Contain လုပ်မည်နှင့် ဘာကြောင့်ဆိုသည်ကို အကြောင်းပြချက်ဖြင့် ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Contain first, investigate fully second — stopping the bleeding matters more than understanding everything immediately.', 'Contain ကို ဦးစွာ လုပ်ပါ၊ အပြည့်အစုံ စုံစမ်းစစ်ဆေးခြင်းကို ဒုတိယ လုပ်ပါ — ချက်ချင်း အားလုံးနားလည်ခြင်းထက် ဒဏ်ရာကို ရပ်တန့်ခြင်းက ပိုအရေးကြီးသည်။'],
      ['Keep a clear timeline of what happened and what actions were taken — you will need it for the post-incident review.', 'ဘာဖြစ်ခဲ့ပြီး ဘာလုပ်ဆောင်ချက်များ ယူခဲ့သည်ကို ရှင်းလင်းသော အချိန်ဇယား ထားပါ — Post-incident Review အတွက် လိုအပ်လိမ့်မည်။'],
    ]),
    commonMistakes: list([
      ['Spending too long investigating before taking any containment action.', 'Containment Action မည်သည်မှ မယူမီ စုံစမ်းစစ်ဆေးရန် ကြာရှည်လွန်းစွာ ကုန်ဆုံးခြင်း။'],
      ['Not documenting actions taken during the incident, making the post-incident review impossible.', 'Incident အတွင်း ယူခဲ့သော လုပ်ဆောင်ချက်များကို မှတ်တမ်းမတင်ခြင်းက Post-incident Review ကို မဖြစ်နိုင်စေသည်။'],
    ]),
    practiceTasks: tasks('cybersecurity-intermediate-2', [
      ['Flag indicators of compromise in a sample log', 'Sample Log တစ်ခုတွင် Indicators of Compromise Flag ပြုလုပ်ပါ'],
      ['Write containment steps for a scenario', 'Scenario တစ်ခုအတွက် Containment အဆင့်များ ရေးပါ'],
      ['Work through a full incident response lifecycle', 'Incident Response Lifecycle အပြည့်အစုံကို ဖြတ်သန်းပါ'],
    ]),
    completionChecklist: list([
      ['Recognize indicators of compromise', 'Indicators of Compromise ဖော်ထုတ်နိုင်သည်'],
      ['Explain the incident response lifecycle', 'Incident Response Lifecycle ရှင်းပြနိုင်သည်'],
      ['Decide and justify containment priorities', 'Containment ဦးစားပေးမှုများ ဆုံးဖြတ်ပြီး အကြောင်းပြနိုင်သည်'],
      ['Document an incident response timeline', 'Incident Response Timeline တစ်ခု မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-intermediate-3': {
    whatItIs: t([
      'Security auditing is systematically reviewing a system, process, or organization against a set of security standards to find gaps.',
      'Security Auditing ဆိုသည်မှာ System, Process (သို့) အဖွဲ့အစည်းတစ်ခုကို Security Standard အစုအဝေးတစ်ခုနှင့် ယှဉ်ပြီး Gap များ ရှာဖွေရန် စနစ်တကျ Review လုပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'An audit provides an objective, structured picture of an organization\'s actual security posture, rather than relying on assumptions about what is probably fine.',
      'Audit တစ်ခုသည် ကောင်းလိမ့်မည်ဟု ယူဆချက်များအပေါ် မမှီခိုဘဲ အဖွဲ့အစည်းတစ်ခု၏ တကယ့် Security Posture ၏ ဓမ္မဓိဋ္ဌာန်ကျ၍ ဖွဲ့စည်းထားသော ရုပ်ပုံတစ်ခုကို ပေးသည်။',
    ]),
    whereUsed: t([
      'Performed regularly at organizations subject to compliance requirements or that take security seriously as a matter of practice.',
      'Compliance လိုအပ်ချက်များ ရှိသော (သို့) Security ကို လေးနက်စွာ ထားသော အဖွဲ့အစည်းများတွင် ပုံမှန် ပြုလုပ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the security policy work from the Core stage.',
      'Core အဆင့်မှ Security Policy အလုပ်အပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Audit checklists/frameworks', 'Audit Checklist/Framework များ'],
      ['Gathering evidence for compliance', 'Compliance အတွက် သက်သေ စုစည်းခြင်း'],
      ['Identifying and documenting gaps', 'Gap များ ဖော်ထုတ်ပြီး မှတ်တမ်းတင်ခြင်း'],
      ['Prioritizing audit findings', 'Audit တွေ့ရှိချက်များ ဦးစားပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Audit a system against a checklist', 'Checklist တစ်ခုနှင့် ယှဉ်ပြီး System တစ်ခု Audit လုပ်ခြင်း'],
        [
          ['Working through a structured checklist rather than an ad-hoc review', 'Ad-hoc Review မဟုတ်ဘဲ Checklist ဖွဲ့စည်းထားသည်ကို ဖြတ်သန်းလုပ်ဆောင်ခြင်း'],
          ['Gathering concrete evidence for each item, not just assuming compliance', 'Item တစ်ခုစီအတွက် Compliance ကို မယူဆဘဲ တိကျသော သက်သေ စုစည်းခြင်း'],
        ],
        [
          ['Given a basic security checklist, audit a sample system against it and note evidence for each item', 'အခြေခံ Security Checklist တစ်ခု ပေးလိုက်လျှင် Sample System တစ်ခုကို ၎င်းနှင့် ယှဉ်ပြီး Audit လုပ်ပြီး Item တစ်ခုစီအတွက် သက်သေ မှတ်ချက်ပြုပါ'],
        ],
      ),
      step(
        ['Document and prioritize gaps', 'Gap များ မှတ်တမ်းတင်ပြီး ဦးစားပေးခြင်း'],
        [
          ['Writing findings clearly enough that someone else could act on them', 'တွေ့ရှိချက်များကို အခြားသူတစ်ဦး ၎င်းအပေါ် လုပ်ဆောင်နိုင်လောက်အောင် ရှင်းလင်းစွာ ရေးခြင်း'],
        ],
        [
          ['Write an audit findings report from your checklist review, with each gap prioritized by risk', 'သင့် Checklist Review မှ Audit Findings Report တစ်ခု ရေးပါ — Gap တစ်ခုစီကို Risk ဖြင့် ဦးစားပေးပြီး'],
        ],
      ),
    ],
    build: t([
      'Perform a complete security audit of a sample organization or system against a basic checklist (covering access control, password policy, and patching), documenting evidence and prioritized findings.',
      'အခြေခံ Checklist (Access Control, Password Policy, Patching လွှမ်းခြုံသည်) နှင့် ယှဉ်ပြီး Sample အဖွဲ့အစည်း (သို့) System တစ်ခု၏ Security Audit အပြည့်အစုံ ပြုလုပ်ပါ — သက်သေနှင့် ဦးစားပေးထားသော တွေ့ရှိချက်များ မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Given a checklist item, could you gather concrete evidence rather than simply marking it "compliant" based on assumption?',
      'Checklist Item တစ်ခု ပေးလိုက်လျှင် ယူဆချက်အပေါ် အခြေခံ၍ "Compliant" ဟု ရိုးရိုး Mark ပြုလုပ်မည့်အစား တိကျသော သက်သေ စုစည်းနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Gather concrete evidence for every checklist item — do not mark something compliant based on assumption.', 'Checklist Item တိုင်းအတွက် တိကျသော သက်သေ စုစည်းပါ — ယူဆချက်အပေါ် အခြေခံ၍ Compliant ဟု မ Mark ပါနှင့်။'],
      ['Write findings the way you would want to receive them: specific, evidenced, and actionable.', 'ကိုယ်တိုင် လက်ခံလိုသလို တွေ့ရှိချက်များ ရေးပါ — တိကျ၍ သက်သေရှိ၍ လုပ်ဆောင်နိုင်သော။'],
    ]),
    commonMistakes: list([
      ['Marking checklist items as compliant without gathering real evidence.', 'တကယ့် သက်သေ မစုစည်းဘဲ Checklist Item များကို Compliant ဟု Mark ပြုလုပ်ခြင်း။'],
      ['Producing a findings report so vague that no one knows what action to take.', 'မည်သူမျှ ဘာလုပ်ဆောင်ချက် ယူရမည်ကို မသိလောက်အောင် မရှင်းလင်းသော တွေ့ရှိချက် Report ထုတ်လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-intermediate-3', [
      ['Audit a sample system against a checklist', 'Checklist တစ်ခုနှင့် ယှဉ်ပြီး Sample System တစ်ခု Audit လုပ်ပါ'],
      ['Gather and document evidence for checklist items', 'Checklist Item များအတွက် သက်သေ စုစည်းပြီး မှတ်တမ်းတင်ပါ'],
      ['Write a prioritized audit findings report', 'ဦးစားပေးထားသော Audit Findings Report တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Audit a system against a structured checklist', 'ဖွဲ့စည်းထားသော Checklist တစ်ခုနှင့် ယှဉ်ပြီး System တစ်ခု Audit လုပ်နိုင်သည်'],
      ['Gather concrete evidence for findings', 'တွေ့ရှိချက်များအတွက် တိကျသော သက်သေ စုစည်းနိုင်သည်'],
      ['Document and prioritize audit gaps', 'Audit Gap များ မှတ်တမ်းတင်ပြီး ဦးစားပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-intermediate-4': {
    whatItIs: t([
      'Risk assessment is systematically evaluating what could go wrong, how likely it is, and how bad the impact would be, to decide where to focus security efforts.',
      'Risk Assessment ဆိုသည်မှာ Security ကြိုးပမ်းအားထုတ်မှုများကို ဘယ်နေရာတွင် အာရုံစိုက်ရမည်ကို ဆုံးဖြတ်ရန် ဘာမှားနိုင်သည်၊ ဖြစ်နိုင်ခြေ မည်မျှရှိသည်၊ Impact မည်မျှဆိုးမည်ကို စနစ်တကျ အကဲဖြတ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'No organization has unlimited security resources — risk assessment is how limited time and budget get allocated to the issues that matter most.',
      'အဖွဲ့အစည်းမည်သည်တွင်မျှ အကန့်အသတ်မရှိသော Security Resource မရှိပါ — Risk Assessment သည် အရေးအကြီးဆုံး ပြဿနာများသို့ အကန့်အသတ်ရှိသော အချိန်နှင့် Budget ကို ခွဲဝေပေးသောနည်းလမ်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used by security leaders and teams to prioritize which vulnerabilities, projects, and controls to invest in first.',
      'မည်သည့် Vulnerability, Project, Control များကို ဦးစွာ ရင်းနှီးမြှုပ်နှံမည်ကို ဦးစားပေးရန် Security Leader နှင့် Team များက သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the vulnerability and audit skills from earlier in this stage.',
      'ဤအဆင့်ရှေ့ပိုင်းမှ Vulnerability နှင့် Audit ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Likelihood and impact', 'Likelihood နှင့် Impact'],
      ['A simple risk matrix', 'ရိုးရှင်းသော Risk Matrix'],
      ['Risk treatment options (accept, mitigate, transfer, avoid)', 'Risk Treatment ရွေးချယ်စရာများ (Accept, Mitigate, Transfer, Avoid)'],
      ['Prioritizing risks for limited resources', 'အကန့်အသတ်ရှိသော Resource များအတွက် Risk များ ဦးစားပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Score risks by likelihood and impact', 'Likelihood နှင့် Impact ဖြင့် Risk များ Score ပေးခြင်း'],
        [
          ['Rating how likely a risk is to occur', 'Risk တစ်ခု ဖြစ်ပေါ်နိုင်ခြေ မည်မျှရှိသည်ကို Rate ပေးခြင်း'],
          ['Rating how severe the impact would be if it did', 'ဖြစ်ခဲ့ပါက Impact မည်မျှ ပြင်းထန်မည်ကို Rate ပေးခြင်း'],
        ],
        [
          ['Given five sample risks, score each on likelihood and impact and plot them on a simple risk matrix', 'Sample Risk ငါးခု ပေးလိုက်လျှင် တစ်ခုစီကို Likelihood နှင့် Impact ဖြင့် Score ပေးပြီး ရိုးရှင်းသော Risk Matrix ပေါ်တွင် ရေးဆွဲပါ'],
        ],
      ),
      step(
        ['Decide how to treat each risk', 'Risk တစ်ခုစီကို မည်သို့ ကိုင်တွယ်မည်ကို ဆုံးဖြတ်ခြင်း'],
        [
          ['Accept, mitigate, transfer, or avoid — and when each makes sense', 'Accept, Mitigate, Transfer, Avoid — တစ်ခုစီ ဘယ်အချိန် သင့်တော်သည်ကို'],
        ],
        [
          ['For your five scored risks, decide and justify a treatment approach for each', 'သင့် Score ပေးထားသော Risk ငါးခုအတွက် တစ်ခုစီအတွက် Treatment ချဉ်းကပ်နည်းတစ်ခု ဆုံးဖြတ်ပြီး အကြောင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Given a realistic set of 6-8 identified vulnerabilities/risks for an organization, score them by likelihood and impact, plot them on a risk matrix, and recommend a treatment plan with clear prioritization.',
      'အဖွဲ့အစည်းတစ်ခုအတွက် ဖော်ထုတ်ထားသော Vulnerability/Risk လက်တွေ့ကျသော ၆-၈ ခု ပေးလိုက်လျှင် Likelihood နှင့် Impact ဖြင့် Score ပေးပါ၊ Risk Matrix ပေါ်တွင် ရေးဆွဲပါ၊ ရှင်းလင်းသော ဦးစားပေးမှုပါသော Treatment Plan တစ်ခု အကြံပြုပါ။',
    ]),
    verify: t([
      'Given a new risk, could you reasonably score its likelihood and impact and justify where it lands on a risk matrix?',
      'Risk အသစ်တစ်ခု ပေးလိုက်လျှင် ၎င်း၏ Likelihood နှင့် Impact ကို ယုတ္တိရှိစွာ Score ပေးပြီး Risk Matrix ပေါ်တွင် ဘယ်နေရာ ကျရောက်သည်ကို အကြောင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Be consistent in how you score likelihood and impact across different risks — use the same scale every time.', 'Risk မတူညီများတစ်လျှောက် Likelihood နှင့် Impact Score ပေးပုံတွင် တသမတ်တည်း ဖြစ်ပါစေ — Scale တူတူကို အမြဲသုံးပါ။'],
      ['Not every risk needs an expensive fix — sometimes accepting a low-impact risk is the right call.', 'Risk တိုင်း ကုန်ကျစရိတ်များသော ဖြေရှင်းချက် မလိုအပ်ပါ — တစ်ခါတစ်ရံ Impact နည်းသော Risk ကို လက်ခံခြင်းသည် မှန်ကန်သော ဆုံးဖြတ်ချက် ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Treating all vulnerabilities as equally urgent regardless of actual risk.', 'တကယ့် Risk ကို ထည့်မတွက်ဘဲ Vulnerability အားလုံးကို အရေးပေါ်မှု တူညီသည်ဟု သဘောထားခြင်း။'],
      ['Scoring risks inconsistently, making prioritization across the list meaningless.', 'Risk များကို တသမတ်မတည်ဘဲ Score ပေးခြင်းက စာရင်းတစ်ခုလုံးတစ်လျှောက် ဦးစားပေးမှုကို အဓိပ္ပာယ်မရှိစေသည်။'],
    ]),
    practiceTasks: tasks('cybersecurity-intermediate-4', [
      ['Score five risks by likelihood and impact', 'Risk ငါးခုကို Likelihood နှင့် Impact ဖြင့် Score ပေးပါ'],
      ['Plot risks on a simple risk matrix', 'Risk များကို ရိုးရှင်းသော Risk Matrix ပေါ်တွင် ရေးဆွဲပါ'],
      ['Recommend a treatment plan with prioritization', 'ဦးစားပေးမှုပါသော Treatment Plan တစ်ခု အကြံပြုပါ'],
    ]),
    completionChecklist: list([
      ['Score risks by likelihood and impact', 'Risk များကို Likelihood နှင့် Impact ဖြင့် Score ပေးနိုင်သည်'],
      ['Use a risk matrix to visualize priorities', 'ဦးစားပေးမှုများကို Visualize လုပ်ရန် Risk Matrix သုံးနိုင်သည်'],
      ['Recommend an appropriate risk treatment', 'သင့်လျော်သော Risk Treatment တစ်ခု အကြံပြုနိုင်သည်'],
      ['Prioritize a list of risks under resource constraints', 'Resource ကန့်သတ်ချက်များအောက်တွင် Risk စာရင်းတစ်ခုကို ဦးစားပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-advanced-1': {
    whatItIs: t([
      'Advanced penetration testing goes beyond basics into more sophisticated attack chains, post-exploitation techniques, and realistic adversary simulation.',
      'Advanced Penetration Testing သည် အခြေခံများကို ကျော်လွန်၍ ပိုရှုပ်ထွေးသော Attack Chain, Post-exploitation Technique နှင့် လက်တွေ့ကျသော Adversary Simulation ထဲသို့ ဝင်ရောက်သည်။',
    ]),
    whyItMatters: t([
      'Real attackers chain together multiple small weaknesses into serious breaches — advanced testing simulates that realistic, multi-step threat rather than isolated single findings.',
      'Attacker အစစ်များသည် အားနည်းချက် ငယ်များစွာကို အတူတကွ ချိတ်ဆက်၍ Breach ကြီးများ ဖြစ်စေသည် — Advanced Testing သည် သီးသန့် တွေ့ရှိချက်တစ်ခုတည်းအစား ထို လက်တွေ့ကျ၍ Multi-step Threat ကို Simulate လုပ်သည်။',
    ]),
    whereUsed: t([
      'Performed by senior penetration testers and red teams at organizations with mature security programs.',
      'ရင့်ကျက်သော Security Program ရှိသော အဖွဲ့အစည်းများရှိ Senior Penetration Tester နှင့် Red Team များက ပြုလုပ်ကြသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on the penetration testing basics from the Intermediate stage.',
      'ဤအရာသည် Intermediate အဆင့်မှ Penetration Testing အခြေခံများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Attack chains (combining multiple weaknesses)', 'Attack Chains (အားနည်းချက်များစွာ ပေါင်းစပ်ခြင်း)'],
      ['Post-exploitation concepts (persistence, lateral movement, conceptually)', 'Post-exploitation Concept များ (Persistence, Lateral Movement, Concept အရ)'],
      ['Privilege escalation concepts', 'Privilege Escalation Concept များ'],
      ['Red team vs blue team vs purple team', 'Red Team, Blue Team, Purple Team'],
    ]),
    steps: [
      step(
        ['Think in terms of attack chains', 'Attack Chain များ အရ တွေးခေါ်ခြင်း'],
        [
          ['A minor finding combined with another can become a serious risk', 'အသေးအဖွဲ့ တွေ့ရှိချက်တစ်ခုသည် အခြားတစ်ခုနှင့် ပေါင်းစပ်ပါက Risk ကြီးတစ်ခု ဖြစ်လာနိုင်သည်'],
        ],
        [
          ['Given two seemingly minor findings from earlier exercises, explain how an attacker might chain them into a bigger compromise', 'ယခင် Exercise များမှ အသေးအဖွဲ့ ပုံပေါ်သော တွေ့ရှိချက်နှစ်ခု ပေးလိုက်လျှင် Attacker တစ်ဦးသည် ၎င်းတို့ကို Compromise ကြီးတစ်ခုအဖြစ် မည်သို့ ချိတ်ဆက်နိုင်သည်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Understand post-exploitation concepts', 'Post-exploitation Concept များ နားလည်ခြင်း'],
        [
          ['What an attacker might do after gaining initial access (conceptually, not operationally)', 'ကနဦး Access ရရှိပြီးနောက် Attacker တစ်ဦး ဘာလုပ်နိုင်သည် (Concept အရ, Operational မဟုတ်ဘဲ)'],
        ],
        [
          ['Write a short explanation of why detecting lateral movement matters even after an initial breach is contained', 'ကနဦး Breach ကို Contain လုပ်ပြီးနောက်ပင် Lateral Movement ဖော်ထုတ်ခြင်း ဘာကြောင့် အရေးကြီးသည်ကို ရှင်းလင်းချက် တိုတောင်း ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Given a set of individually minor findings from a sample system, write an attack narrative explaining how they could realistically be chained together, and recommend which one to fix first to break the chain.',
      'Sample System တစ်ခုမှ တစ်ခုချင်းစီ အသေးအဖွဲ့ တွေ့ရှိချက်အစုအဝေးတစ်ခု ပေးလိုက်လျှင် ၎င်းတို့ကို လက်တွေ့ကျစွာ မည်သို့ ချိတ်ဆက်နိုင်သည်ကို ရှင်းပြသော Attack Narrative တစ်ခု ရေးပြီး Chain ကို ဖျက်ရန် ဘယ်တစ်ခုကို ဦးစွာ ပြင်ဆင်သင့်သည်ကို အကြံပြုပါ။',
    ]),
    verify: t([
      'Could you explain, using a real example, how a "low severity" finding might still be dangerous when combined with others?',
      'တကယ့် ဥပမာသုံး၍ "Low Severity" တွေ့ရှိချက်တစ်ခုသည် အခြားများနှင့် ပေါင်းစပ်ပါက အန္တရာယ် ဖြစ်နေဆဲ ဖြစ်နိုင်ကြောင်း ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Never dismiss a "low severity" finding without considering how it could combine with others.', 'အခြားများနှင့် မည်သို့ ပေါင်းစပ်နိုင်သည်ကို မစဉ်းစားဘဲ "Low Severity" တွေ့ရှိချက်တစ်ခုကို ဘယ်တော့မှ လျစ်လျူမရှုပါနှင့်။'],
      ['Think about defense in terms of breaking the chain, not just patching individual holes.', 'Hole တစ်ခုချင်းစီကို Patch ခြင်းသာမက Chain ကို ဖျက်ခြင်းအရ ကာကွယ်ရေးကို တွေးပါ။'],
    ]),
    commonMistakes: list([
      ['Evaluating vulnerabilities entirely in isolation without considering how they combine.', 'မည်သို့ ပေါင်းစပ်နိုင်သည်ကို မစဉ်းစားဘဲ Vulnerability များကို လုံးဝ သီးသန့် အကဲဖြတ်ခြင်း။'],
      ['Recommending fixes for every finding equally instead of identifying the highest-leverage fix that breaks the chain.', 'Chain ကို ဖျက်ပေးမည့် အထိရောက်ဆုံး ဖြေရှင်းချက်ကို ဖော်ထုတ်မည့်အစား တွေ့ရှိချက်တိုင်းအတွက် ဖြေရှင်းချက် တူညီစွာ အကြံပြုခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-advanced-1', [
      ['Explain how two minor findings could be chained', 'အသေးအဖွဲ့ တွေ့ရှိချက်နှစ်ခု မည်သို့ ချိတ်ဆက်နိုင်သည်ကို ရှင်းပြပါ'],
      ['Write about the importance of detecting lateral movement', 'Lateral Movement ဖော်ထုတ်ခြင်း၏ အရေးကြီးမှုအကြောင်း ရေးပါ'],
      ['Write an attack narrative and prioritized fix', 'Attack Narrative နှင့် ဦးစားပေးထားသော ဖြေရှင်းချက်တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Think about vulnerabilities as potential attack chains', 'Vulnerability များကို ဖြစ်နိုင်ချေရှိသော Attack Chain များအဖြစ် တွေးခေါ်နိုင်သည်'],
      ['Explain post-exploitation concepts at a high level', 'Post-exploitation Concept များကို Overview အနေဖြင့် ရှင်းပြနိုင်သည်'],
      ['Recommend high-leverage fixes that break an attack chain', 'Attack Chain ကို ဖျက်ပေးမည့် အထိရောက်ဆုံး ဖြေရှင်းချက်များ အကြံပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-advanced-2': {
    whatItIs: t([
      'Security architecture design is planning how security controls, monitoring, and defenses fit together across an entire system or organization, not just point fixes.',
      'Security Architecture Design ဆိုသည်မှာ Point Fix များသာမက System (သို့) အဖွဲ့အစည်းတစ်ခုလုံးတစ်လျှောက် Security Control, Monitoring, Defense များ မည်သို့ ဆက်စပ်နေမည်ကို စီစဉ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Bolting on security fixes after the fact is far less effective than designing defense in depth from the start — architecture thinking is what senior security roles are trusted to do.',
      'ဖြစ်ပြီးနောက်မှ Security ဖြေရှင်းချက်များ ချိတ်တွယ်ခြင်းသည် အစမှစ၍ Defense in Depth ဒီဇိုင်းဆွဲခြင်းထက် ထိရောက်မှု အများကြီး နည်းသည် — Architecture တွေးခေါ်မှုသည် Senior Security Role များ ယုံကြည်ခံရသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Central to senior/lead security engineering roles responsible for how an entire system\'s security is structured.',
      'System တစ်ခုလုံး၏ Security ဖွဲ့စည်းပုံအတွက် တာဝန်ရှိသော Senior/Lead Security Engineering Role များ၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on vulnerabilities, risk assessment, and pentest concepts from earlier stages.',
      'ဤသည်မှာ ယခင် အဆင့်များမှ Vulnerability, Risk Assessment, Pentest Concept များကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Defense in depth (layered security controls)', 'Defense in Depth (Layered Security Control များ)'],
      ['Network segmentation', 'Network Segmentation'],
      ['Zero trust concepts (introductory)', 'Zero Trust Concept များ (နိဒါန်း)'],
      ['Designing for monitoring and detection, not just prevention', 'Prevention သာမက Monitoring နှင့် Detection အတွက် Design ဆွဲခြင်း'],
    ]),
    steps: [
      step(
        ['Apply defense in depth', 'Defense in Depth အသုံးချခြင်း'],
        [
          ['No single control should be the only thing standing between an attacker and critical data', 'Attacker တစ်ဦးနှင့် အရေးကြီးသော Data အကြား Control တစ်ခုတည်းသာ မရှိသင့်ပါ'],
          ['Layering controls: network, host, application, and data-level defenses', 'Control များ Layer ချခြင်း — Network, Host, Application, Data-level Defense များ'],
        ],
        [
          ['Design a layered defense (network, host, application) for a simple web application handling sensitive data', 'အရေးကြီးသော Data ကိုင်တွယ်သော Web Application ရိုးရှင်းတစ်ခုအတွက် Layered Defense (Network, Host, Application) Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Design for detection, not just prevention', 'Prevention သာမက Detection အတွက် Design ဆွဲခြင်း'],
        [
          ['Assuming prevention will eventually fail, and designing monitoring to catch it when it does', 'Prevention သည် နောက်ဆုံးတွင် Fail ဖြစ်လိမ့်မည်ဟု ယူဆပြီး ဖြစ်ချိန်တွင် ဖမ်းယူရန် Monitoring Design ဆွဲခြင်း'],
        ],
        [
          ['Add monitoring/logging points to your layered defense design so a breach would actually be detected', 'Breach တစ်ခု တကယ် ဖော်ထုတ်နိုင်စေရန် သင့် Layered Defense Design သို့ Monitoring/Logging Point များ ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design a complete security architecture for a moderately complex system (e.g. a web app with a database and admin panel): layered controls, network segmentation, and monitoring points, documented in a short architecture document.',
      'အလယ်အလတ် ရှုပ်ထွေးသော System (ဥပမာ Database နှင့် Admin Panel ပါသော Web App) တစ်ခုအတွက် Security Architecture အပြည့်အစုံ Design ဆွဲပါ — Layered Control, Network Segmentation, Monitoring Point များကို Architecture Document တိုတောင်းတွင် မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Could you explain why relying on a single firewall as your only defense is risky, using the defense-in-depth principle?',
      'Firewall တစ်ခုတည်းကို သင့်ကာကွယ်ရေး တစ်ခုတည်းအဖြစ် မှီခိုခြင်းသည် Defense-in-depth မူကို သုံး၍ ဘာကြောင့် အန္တရာယ်ရှိသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Assume any single control can fail, and design so that failure does not mean total compromise.', 'Control တစ်ခုတည်းသည် Fail ဖြစ်နိုင်သည်ဟု ယူဆပြီး ထို Failure သည် Compromise အပြည့်အစုံ မဆိုလိုစေရန် Design ဆွဲပါ။'],
      ['Include monitoring and logging as a core part of the architecture, not an afterthought.', 'Monitoring နှင့် Logging ကို နောက်ဆုံးမှ တွေးခေါ်မည့်အစား Architecture ၏ အဓိက အစိတ်အပိုင်းအဖြစ် ထည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Relying on a single layer of defense (e.g. just a firewall) for critical systems.', 'အရေးကြီးသော System များအတွက် Defense Layer တစ်ခုတည်း (ဥပမာ Firewall တစ်ခုတည်း) ကို မှီခိုခြင်း။'],
      ['Designing prevention controls without any corresponding monitoring to detect when they fail.', 'Fail ဖြစ်သည့်အခါ ဖော်ထုတ်ရန် ကိုက်ညီသော Monitoring မပါဘဲ Prevention Control များ Design ဆွဲခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-advanced-2', [
      ['Design a layered defense for a sample system', 'Sample System တစ်ခုအတွက် Layered Defense Design ဆွဲပါ'],
      ['Add monitoring/logging points to the design', 'Design သို့ Monitoring/Logging Point များ ထည့်ပါ'],
      ['Write a short security architecture document', 'Security Architecture Document တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Apply defense-in-depth principles', 'Defense-in-depth မူများ အသုံးချနိုင်သည်'],
      ['Design network segmentation', 'Network Segmentation Design ဆွဲနိုင်သည်'],
      ['Design for detection, not just prevention', 'Prevention သာမက Detection အတွက် Design ဆွဲနိုင်သည်'],
      ['Document a complete security architecture', 'Security Architecture အပြည့်အစုံကို မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-advanced-3': {
    whatItIs: t([
      'Threat intelligence is gathering and analyzing information about active threats — who is attacking, how, and why — to inform defensive priorities.',
      'Threat Intelligence ဆိုသည်မှာ ကာကွယ်ရေး ဦးစားပေးမှုများကို အသိပေးရန် တက်ကြွသော Threat များ — မည်သူ တိုက်ခိုက်နေသည်၊ မည်သို့၊ ဘာကြောင့် — အကြောင်း သတင်းအချက်အလက် စုစည်း၍ ခွဲခြမ်းစိတ်ဖြာခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Defending against every theoretical threat equally is impossible — threat intelligence helps focus limited resources on the threats actually relevant to your organization.',
      'ဖြစ်နိုင်ချေရှိသော Threat တိုင်းကို တူညီစွာ ကာကွယ်ခြင်း မဖြစ်နိုင်ပါ — Threat Intelligence က အကန့်အသတ်ရှိသော Resource များကို သင့်အဖွဲ့အစည်းနှင့် တကယ်သက်ဆိုင်သော Threat များအပေါ် အာရုံစိုက်ရန် ကူညီပေးသည်။',
    ]),
    whereUsed: t([
      'Used by security teams to prioritize defenses based on real, current attack trends relevant to their industry.',
      'Security Team များက ၎င်းတို့၏ စက်မှုလုပ်ငန်းနှင့် သက်ဆိုင်သော တကယ့်၊ လက်ရှိ တိုက်ခိုက်မှု Trend များအပေါ် အခြေခံ၍ ကာကွယ်ရေးများကို ဦးစားပေးရန် သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Types of threat intelligence (strategic, tactical, technical)', 'Threat Intelligence အမျိုးအစားများ (Strategic, Tactical, Technical)'],
      ['Reading public threat reports/advisories', 'Public Threat Report/Advisory များ ဖတ်ခြင်း'],
      ['Connecting intelligence to your own organization\'s risk', 'Intelligence ကို ကိုယ်ပိုင် အဖွဲ့အစည်း၏ Risk နှင့် ချိတ်ဆက်ခြင်း'],
    ]),
    steps: [
      step(
        ['Read and interpret a real threat report', 'တကယ့် Threat Report တစ်ခု ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Public security advisories describe real vulnerabilities and active exploitation trends', 'Public Security Advisory များသည် တကယ့် Vulnerability များနှင့် တက်ကြွသော Exploitation Trend များကို ဖော်ပြသည်'],
        ],
        [
          ['Read a real public security advisory and summarize what threat it describes and who is affected', 'တကယ့် Public Security Advisory တစ်ခု ဖတ်ပြီး ၎င်းက ဖော်ပြသော Threat နှင့် မည်သူ ထိခိုက်နိုင်သည်ကို အနှစ်ချုပ်ပါ'],
        ],
      ),
      step(
        ['Connect intelligence to real priorities', 'Intelligence ကို တကယ့် ဦးစားပေးမှုများနှင့် ချိတ်ဆက်ခြင်း'],
        [
          ['Deciding whether a given threat is actually relevant to a specific organization\'s systems', 'ပေးထားသော Threat တစ်ခုသည် အဖွဲ့အစည်းသီးခြားတစ်ခု၏ System များနှင့် တကယ် သက်ဆိုင်မသက်ဆိုင် ဆုံးဖြတ်ခြင်း'],
        ],
        [
          ['Given the advisory you read, explain whether and why it would be relevant to a hypothetical small web company', 'သင်ဖတ်ခဲ့သော Advisory ပေါ်တွင် ၎င်းသည် ယူဆချက်ရေး Web Company သေးငယ်တစ်ခုနှင့် သက်ဆိုင်သလား၊ ဘာကြောင့်ဆိုသည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Read three real public threat advisories relevant to web/cloud technology, summarize each, and write a short brief on which is most relevant to a hypothetical small tech company and why.',
      'Web/Cloud Technology နှင့် သက်ဆိုင်သော တကယ့် Public Threat Advisory သုံးခု ဖတ်ပါ၊ တစ်ခုစီကို အနှစ်ချုပ်ပါ၊ ယူဆချက်ရေး Tech Company သေးငယ်တစ်ခုနှင့် ဘယ်တစ်ခုက အသက်ဆိုင်ဆုံးနှင့် ဘာကြောင့်ဆိုသည်ကို Brief တိုတောင်းတစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Given a new threat report, could you quickly judge whether it is relevant to a given organization\'s actual technology stack?',
      'Threat Report အသစ်တစ်ခု ပေးလိုက်လျှင် ပေးထားသော အဖွဲ့အစည်း၏ တကယ့် Technology Stack နှင့် သက်ဆိုင်သလားဟု လျင်မြန်စွာ ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Read threat intelligence from reputable, established sources rather than unverified reports.', 'အတည်မပြုရသေးသော Report များအစား ယုံကြည်ရ၍ ထူထောင်ပြီးသား Source များမှ Threat Intelligence ကို ဖတ်ပါ။'],
      ['Always connect intelligence back to "does this apply to us" rather than reacting to every headline.', 'ခေါင်းစဉ်တိုင်းကို တုံ့ပြန်မည့်အစား Intelligence ကို "ဒါက ကျွန်တော်တို့နှင့် သက်ဆိုင်လား" ဆိုသည်နှင့် အမြဲ ချိတ်ဆက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Reacting to every threat headline without assessing actual relevance.', 'တကယ့် သက်ဆိုင်မှု အကဲဖြတ်ခြင်းမရှိဘဲ Threat ခေါင်းစဉ်တိုင်းကို တုံ့ပြန်ခြင်း။'],
      ['Treating threat intelligence as a one-time read instead of an ongoing practice.', 'Threat Intelligence ကို ဆက်တိုက် အလေ့အထတစ်ခုအစား တစ်ကြိမ်တည်း ဖတ်ရှုမှုအဖြစ် သဘောထားခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-advanced-3', [
      ['Read and summarize a real public threat advisory', 'တကယ့် Public Threat Advisory တစ်ခုကို ဖတ်ပြီး အနှစ်ချုပ်ပါ'],
      ['Assess a threat\'s relevance to a hypothetical organization', 'ယူဆချက်ရေး အဖွဲ့အစည်းတစ်ခုနှင့် Threat တစ်ခု၏ သက်ဆိုင်မှု အကဲဖြတ်ပါ'],
      ['Write a short threat intelligence brief', 'Threat Intelligence Brief တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Read and interpret a real threat advisory', 'တကယ့် Threat Advisory တစ်ခု ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Assess whether a threat is relevant to a given organization', 'Threat တစ်ခုသည် ပေးထားသော အဖွဲ့အစည်းနှင့် သက်ဆိုင်မသက်ဆိုင် အကဲဖြတ်နိုင်သည်'],
      ['Write a concise threat intelligence brief', 'တိုတောင်းသော Threat Intelligence Brief တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'cybersecurity-advanced-4': {
    whatItIs: t([
      'Compliance and governance cover the formal requirements and oversight structures organizations must follow — legal, regulatory, and internal — around security.',
      'Compliance နှင့် Governance သည် Security နှင့် ပတ်သက်၍ အဖွဲ့အစည်းများ လိုက်နာရမည့် တရားဝင် လိုအပ်ချက်များနှင့် ကြီးကြပ်ရေး ဖွဲ့စည်းပုံများ — ဥပဒေရေးရာ, စည်းမျဉ်းဆိုင်ရာ, Internal — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Many organizations are legally required to meet specific security standards — failing compliance can mean fines, lost business, or legal liability, not just a technical gap.',
      'အဖွဲ့အစည်းများစွာသည် သီးခြား Security Standard များကို ဥပဒေအရ ပြည့်မီရန် လိုအပ်သည် — Compliance မပြည့်မီခြင်းသည် Technical Gap တစ်ခုတည်းမဟုတ်ဘဲ ဒဏ်ကြေး၊ Business ဆုံးရှုံးခြင်း (သို့) ဥပဒေရေးရာ တာဝန်ရှိခြင်း ဆိုလိုနိုင်သည်။',
    ]),
    whereUsed: t([
      'Central to security leadership roles at organizations subject to regulations like GDPR, PCI-DSS, or industry-specific requirements.',
      'GDPR, PCI-DSS ကဲ့သို့ စည်းမျဉ်းများ (သို့) စက်မှုလုပ်ငန်း-သီးခြား လိုအပ်ချက်များ ရှိသော အဖွဲ့အစည်းများရှိ Security Leadership Role များ၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic building on security policy and audit skills from earlier stages.',
      'ဤသည်မှာ ယခင် အဆင့်များမှ Security Policy နှင့် Audit ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['What compliance frameworks are and why they exist', 'Compliance Framework ဆိုသည်မှာ ဘာလဲနှင့် ဘာကြောင့် ရှိသလဲ'],
      ['The relationship between policy, audit, and compliance', 'Policy, Audit, Compliance ကြား ဆက်နွယ်မှု'],
      ['Governance structures (who is accountable for what)', 'Governance ဖွဲ့စည်းပုံများ (မည်သူသည် ဘာအတွက် တာဝန်ရှိသည်ကို)'],
      ['Documenting compliance evidence', 'Compliance သက်သေ မှတ်တမ်းတင်ခြင်း'],
    ]),
    steps: [
      step(
        ['Understand why compliance frameworks exist', 'Compliance Framework များ ဘာကြောင့်ရှိသည်ကို နားလည်ခြင်း'],
        [
          ['Frameworks codify minimum expected security practices for an industry or data type', 'Framework များသည် စက်မှုလုပ်ငန်း (သို့) Data အမျိုးအစားတစ်ခုအတွက် မျှော်လင့်ထားသော Security Practice အနည်းဆုံးများကို Code ချထားသည်'],
        ],
        [
          ['Research one real compliance framework relevant to a hypothetical business (e.g. one handling payment data) and summarize its core requirements', 'ယူဆချက်ရေး Business တစ်ခုနှင့် သက်ဆိုင်သော တကယ့် Compliance Framework တစ်ခု (ဥပမာ Payment Data ကိုင်တွယ်သော) ရှာဖွေပြီး ၎င်း၏ အဓိက လိုအပ်ချက်များ အနှစ်ချုပ်ပါ'],
        ],
      ),
      step(
        ['Connect governance to accountability', 'Governance ကို Accountability နှင့် ချိတ်ဆက်ခြင်း'],
        [
          ['Governance defines who is accountable for which security decisions and outcomes', 'Governance က မည်သူသည် Security ဆုံးဖြတ်ချက်များနှင့် ရလဒ်များအတွက် တာဝန်ရှိသည်ကို သတ်မှတ်ပေးသည်'],
        ],
        [
          ['Write a short accountability chart for a small organization: who owns password policy, incident response, and vendor risk', 'အဖွဲ့အစည်းသေးငယ်တစ်ခုအတွက် Accountability Chart တိုတောင်းတစ်ခု ရေးပါ — Password Policy, Incident Response, Vendor Risk ကို မည်သူ ပိုင်ဆိုင်သည်'],
        ],
      ),
    ],
    build: t([
      'For a hypothetical small business handling sensitive data, identify the most relevant compliance framework, summarize its core requirements, and write a short governance structure showing who would be accountable for meeting them.',
      'အရေးကြီးသော Data ကိုင်တွယ်သော ယူဆချက်ရေး Business သေးငယ်တစ်ခုအတွက် အသက်ဆိုင်ဆုံး Compliance Framework ကို ဖော်ထုတ်ပါ၊ ၎င်း၏ အဓိက လိုအပ်ချက်များ အနှစ်ချုပ်ပါ၊ ၎င်းတို့ကို ပြည့်မီရန် မည်သူ တာဝန်ရှိသည်ကို ပြသော Governance ဖွဲ့စည်းပုံ တိုတောင်းတစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Could you explain to a business owner, in plain terms, why compliance is not just a technical checkbox but a real business and legal responsibility?',
      'Compliance သည် Technical Checkbox တစ်ခုတည်းမဟုတ်ဘဲ တကယ့် Business နှင့် ဥပဒေရေးရာ တာဝန်ဖြစ်ကြောင်းကို Business ပိုင်ရှင်တစ်ဦးအား ရိုးရှင်းသော စကားလုံးများဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Research the specific compliance requirements relevant to an organization\'s actual industry and data types.', 'အဖွဲ့အစည်းတစ်ခု၏ တကယ့် စက်မှုလုပ်ငန်းနှင့် Data အမျိုးအစားများနှင့် သက်ဆိုင်သော သီးခြား Compliance လိုအပ်ချက်များကို ရှာဖွေပါ။'],
      ['Clear accountability (who owns what) is often more valuable than the policy document itself.', 'ရှင်းလင်းသော Accountability (မည်သူက ဘာပိုင်သည်) သည် Policy Document ကိုယ်တိုင်ထက် မကြာခဏ ပိုတန်ဖိုးရှိသည်။'],
    ]),
    commonMistakes: list([
      ['Treating compliance as a one-time checkbox exercise rather than ongoing governance.', 'Compliance ကို ဆက်တိုက် Governance အစား တစ်ကြိမ်တည်း Checkbox Exercise တစ်ခုအဖြစ် သဘောထားခြင်း။'],
      ['Having policies on paper with no clear owner accountable for actually enforcing them.', 'တကယ် စိုးမိုးရန် တာဝန်ရှိသော ရှင်းလင်းသော ပိုင်ရှင် မရှိဘဲ စာရွက်ပေါ်တွင် Policy များ ရှိနေခြင်း။'],
    ]),
    practiceTasks: tasks('cybersecurity-advanced-4', [
      ['Research a compliance framework relevant to a business scenario', 'Business Scenario တစ်ခုနှင့် သက်ဆိုင်သော Compliance Framework တစ်ခု ရှာဖွေပါ'],
      ['Summarize its core requirements', '၎င်း၏ အဓိက လိုအပ်ချက်များ အနှစ်ချုပ်ပါ'],
      ['Write a governance accountability chart', 'Governance Accountability Chart တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain why compliance frameworks exist', 'Compliance Framework များ ဘာကြောင့်ရှိသည်ကို ရှင်းပြနိုင်သည်'],
      ['Identify a framework relevant to a given business', 'ပေးထားသော Business နှင့် သက်ဆိုင်သော Framework တစ်ခု ဖော်ထုတ်နိုင်သည်'],
      ['Explain the relationship between policy, audit, and compliance', 'Policy, Audit, Compliance ကြား ဆက်နွယ်မှု ရှင်းပြနိုင်သည်'],
      ['Define clear accountability in a governance structure', 'Governance ဖွဲ့စည်းပုံတစ်ခုတွင် ရှင်းလင်းသော Accountability သတ်မှတ်နိုင်သည်'],
    ]),
    resources: [],
  },
}
