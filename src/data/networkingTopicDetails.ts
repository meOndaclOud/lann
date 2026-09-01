import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Networking topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const networkingTopicDetails: Record<string, TopicDetail> = {
  'networking-beginner-1': {
    whatItIs: t([
      'Networking fundamentals — the OSI model and TCP/IP — describe the layered way computers package and send data to communicate with each other.',
      'Networking Fundamentals — OSI Model နှင့် TCP/IP — သည် Computer များ အချင်းချင်း ဆက်သွယ်ရန် Data ကို Layer အလိုက် ထုပ်ပိုး၍ ပို့သည့်ပုံစံကို ဖော်ပြသည်။',
    ]),
    whyItMatters: t([
      'Every networking concept and tool builds on this layered model — understanding it is what lets you reason about where in the stack a problem actually lives.',
      'Networking Concept နှင့် Tool တိုင်းသည် ဤ Layer ဖွဲ့စည်းပုံ Model အပေါ် တည်ဆောက်ထားသည် — ၎င်းကို နားလည်ခြင်းက ပြဿနာတစ်ခု Stack ၏ ဘယ်နေရာတွင် တကယ်ရှိနေသည်ကို တွေးခေါ်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'The theoretical foundation used constantly when troubleshooting, designing, or discussing any network.',
      'Network မည်သည်ကိုမဆို ပြဿနာဖြေရှင်းခြင်း, Design ဆွဲခြင်း (သို့) ဆွေးနွေးခြင်းတွင် အမြဲ အသုံးပြုသော သီအိုရီ အခြေခံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['The seven OSI layers (conceptually)', 'OSI Layer ခုနစ်ခု (Concept အရ)'],
      ['TCP/IP as the practical, simplified model', 'လက်တွေ့ကျ၍ ရိုးရှင်းသော Model အဖြစ် TCP/IP'],
      ['Encapsulation (data wrapped in headers at each layer)', 'Encapsulation (Layer တစ်ခုစီတွင် Header ဖြင့် ထုပ်ပိုးထားသော Data)'],
      ['Common protocols mapped to their layer', 'Layer အလိုက် ချိတ်ဆက်ထားသော အများသုံး Protocol များ'],
    ]),
    steps: [
      step(
        ['Understand the layered model conceptually', 'Layer ဖွဲ့စည်းပုံ Model ကို Concept အရ နားလည်ခြင်း'],
        [
          ['Each layer has a specific job and hands data to the layer below/above it', 'Layer တစ်ခုစီတွင် သီးခြား တာဝန်ရှိပြီး Data ကို အောက်/အထက် Layer သို့ လက်ဆင့်ကမ်းပေးသည်'],
          ['TCP/IP\'s four layers as a simplified, practical version of OSI\'s seven', 'OSI ၏ ခုနစ်ခု၏ ရိုးရှင်း၍ လက်တွေ့ကျသော Version အနေဖြင့် TCP/IP ၏ Layer လေးခု'],
        ],
        [
          ['Map five common protocols (HTTP, TCP, IP, Ethernet, DNS) to the layer each belongs to', 'အများသုံး Protocol ငါးခု (HTTP, TCP, IP, Ethernet, DNS) ကို ၎င်းတို့ ပါဝင်သော Layer နှင့် ကိုက်ညီအောင် ချိတ်ဆက်ပါ'],
        ],
      ),
      step(
        ['Trace how data actually travels', 'Data တကယ် သွားလာပုံကို ခြေရာခံခြင်း'],
        [
          ['Following a request from a browser down through the layers, across the network, and back up on the server', 'Browser တစ်ခုမှ Request တစ်ခုကို Layer များ ဖြတ်၍၊ Network ကို ဖြတ်၍ Server ပေါ်တွင် ပြန်တက်လာသည့်အထိ လိုက်ပါ'],
        ],
        [
          ['Diagram, layer by layer, what happens when you type a URL into a browser and press enter', 'Browser တစ်ခုတွင် URL တစ်ခု ရိုက်ထည့်ပြီး Enter နှိပ်လိုက်သည့်အခါ ဘာဖြစ်သည်ကို Layer အလိုက် Diagram ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Create a one-page reference diagram mapping the OSI/TCP-IP layers to real protocols and example devices/tools that operate at each layer.',
      'OSI/TCP-IP Layer များကို Protocol အစစ်များနှင့် Layer တစ်ခုစီတွင် အလုပ်လုပ်သော Device/Tool ဥပမာများနှင့် ချိတ်ဆက်ထားသော တစ်မျက်နှာ Reference Diagram တစ်ခု ဖန်တီးပါ။',
    ]),
    verify: t([
      'Given a networking problem description, could you identify which layer it most likely belongs to?',
      'Networking ပြဿနာ ဖော်ပြချက်တစ်ခု ပေးလိုက်လျှင် ၎င်းသည် မည်သည့် Layer နှင့် အသက်ဆိုင်ဆုံးဖြစ်သည်ကို ဖော်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use the "which layer is this?" question as a troubleshooting habit from the very start.', '"ဒါ ဘယ် Layer လဲ?" ဆိုတဲ့ မေးခွန်းကို အစကတည်းက ပြဿနာဖြေရှင်းရေး အလေ့အထတစ်ခုအဖြစ် သုံးပါ။'],
      ['Do not just memorize the OSI layer names — understand what job each one actually does.', 'OSI Layer နာမည်များကို အလွတ်ကျက်မှတ်ရုံသာ မလုပ်ပါနှင့် — တစ်ခုစီ တကယ်ဘာလုပ်သည်ကို နားလည်ပါ။'],
    ]),
    commonMistakes: list([
      ['Memorizing the seven OSI layer names without understanding what each one does.', 'Layer တစ်ခုစီ ဘာလုပ်သည်ကို နားမလည်ဘဲ OSI Layer ခုနစ်ခု၏ နာမည်များကို အလွတ်ကျက်မှတ်ခြင်း။'],
      ['Confusing which layer a specific protocol (like HTTP or TCP) belongs to.', 'Protocol သီးခြားတစ်ခု (HTTP သို့ TCP ကဲ့သို့) မည်သည့် Layer တွင် ပါဝင်သည်ကို ရောထွေးခြင်း။'],
    ]),
    practiceTasks: tasks('networking-beginner-1', [
      ['Map five protocols to their OSI/TCP-IP layer', 'Protocol ငါးခုကို ၎င်းတို့၏ OSI/TCP-IP Layer နှင့် ချိတ်ဆက်ပါ'],
      ['Diagram the layer-by-layer journey of a browser request', 'Browser Request တစ်ခု၏ Layer-by-layer ခရီးစဉ်ကို Diagram ဆွဲပါ'],
      ['Build a one-page layer reference diagram', 'တစ်မျက်နှာ Layer Reference Diagram တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain the OSI and TCP/IP models conceptually', 'OSI နှင့် TCP/IP Model များကို Concept အရ ရှင်းပြနိုင်သည်'],
      ['Map common protocols to their correct layer', 'အများသုံး Protocol များကို မှန်ကန်သော Layer နှင့် ချိတ်ဆက်နိုင်သည်'],
      ['Trace a request through the layered model', 'Layer ဖွဲ့စည်းပုံ Model ကို ဖြတ်၍ Request တစ်ခုကို ခြေရာခံနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-beginner-2': {
    whatItIs: t([
      'Basic hardware knowledge covers the physical devices — routers, switches, and cables — that actually carry network traffic.',
      'Basic Hardware အသိပညာသည် Network Traffic ကို တကယ် သယ်ဆောင်ပေးသော ရုပ်ပိုင်း Device များ — Routers, Switches, Cables — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Networking theory means little without understanding the physical devices that actually connect and route traffic in the real world.',
      'လက်တွေ့ဘဝတွင် Traffic ကို တကယ် ချိတ်ဆက်ပြီး Route ချပေးသော ရုပ်ပိုင်း Device များကို နားမလည်ပါက Networking သီအိုရီသည် အဓိပ္ပာယ် နည်းသည်။',
    ]),
    whereUsed: t([
      'Present in every physical network, from a home Wi-Fi setup to a large enterprise data center.',
      'Home Wi-Fi Setup မှ Enterprise Data Center ကြီးအထိ Physical Network တိုင်းတွင် ရှိသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Routers vs switches (what each does)', 'Routers နှင့် Switches (တစ်ခုစီ ဘာလုပ်သည်ကို)'],
      ['Hubs vs switches (why switches replaced hubs)', 'Hubs နှင့် Switches (Switches က Hubs ကို ဘာကြောင့် အစားထိုးခဲ့သည်ကို)'],
      ['Network cables and connectors', 'Network Cable များနှင့် Connector များ'],
      ['A basic home/office network topology', 'အခြေခံ Home/Office Network Topology'],
    ]),
    steps: [
      step(
        ['Distinguish routers from switches', 'Routers ကို Switches နှင့် ခွဲခြားခြင်း'],
        [
          ['A switch connects devices within one network; a router connects different networks together', 'Switch တစ်ခုသည် Network တစ်ခုအတွင်း Device များကို ချိတ်ဆက်ပေးပြီး Router တစ်ခုသည် Network မတူညီသည်များကို အတူတကွ ချိတ်ဆက်ပေးသည်'],
        ],
        [
          ['Sketch a simple home network diagram showing where the router, switch (if any), and devices sit', 'Router, Switch (ရှိလျှင်), Device များ ဘယ်နေရာ ရှိသည်ကို ပြသော Home Network Diagram ရိုးရှင်းတစ်ခု ရေးဆွဲပါ'],
        ],
      ),
      step(
        ['Understand basic network topology', 'အခြေခံ Network Topology နားလည်ခြင်း'],
        [
          ['How a typical home/small office network is physically laid out', 'ပုံမှန် Home/Small Office Network တစ်ခု ရုပ်ပိုင်းအရ မည်သို့ Layout ချထားသည်ကို'],
        ],
        [
          ['Diagram your own home or school network as accurately as you can, labeling each device', 'သင့် ကိုယ်ပိုင် Home (သို့) School Network ကို တတ်နိုင်သမျှ တိကျစွာ Diagram ဆွဲပြီး Device တစ်ခုစီကို Label ပေးပါ'],
        ],
      ),
    ],
    build: t([
      'Create an accurate network diagram of a real network you have access to (home, school, or workplace), correctly labeling routers, switches, and connected devices.',
      'သင် ဝင်ရောက်ခွင့်ရှိသော Network အစစ်တစ်ခု (Home, School, Workplace) ၏ တိကျသော Network Diagram တစ်ခု ဖန်တီးပါ — Routers, Switches, ချိတ်ဆက်ထားသော Device များကို မှန်ကန်စွာ Label ပေးပြီး။',
    ]),
    verify: t([
      'Could you explain, to someone unfamiliar with networking, the difference between what a router and a switch each do?',
      'Networking နှင့် မရင်းနှီးသူတစ်ဦးအား Router နှင့် Switch တစ်ခုစီ ဘာလုပ်သည်ကြား ကွာခြားချက်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Physically look at the hardware in a real network (home router, office switch) to build real intuition.', 'တကယ့် Intuition တည်ဆောက်ရန် တကယ့် Network ရှိ Hardware (Home Router, Office Switch) ကို ရုပ်ပိုင်းအရ ကြည့်ပါ။'],
      ['Draw diagrams by hand — sketching a topology helps it stick far better than reading about it.', 'Diagram များကို လက်ဖြင့် ဆွဲပါ — Topology တစ်ခုကို ဆွဲကြည့်ခြင်းသည် ၎င်းအကြောင်းဖတ်ခြင်းထက် ပိုမှတ်မိစေသည်။'],
    ]),
    commonMistakes: list([
      ['Confusing the role of a router with the role of a switch.', 'Router ၏ အခန်းကဏ္ဍကို Switch ၏ အခန်းကဏ္ဍနှင့် ရောထွေးခြင်း။'],
      ['Assuming all network hardware works the same way regardless of type.', 'Network Hardware အားလုံးသည် အမျိုးအစားမရွေး တူညီစွာ အလုပ်လုပ်သည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('networking-beginner-2', [
      ['Sketch a simple home network diagram', 'Home Network Diagram ရိုးရှင်းတစ်ခု ရေးဆွဲပါ'],
      ['Label a real network\'s devices accurately', 'Network အစစ်တစ်ခု၏ Device များကို တိကျစွာ Label ပေးပါ'],
      ['Explain the router vs switch distinction in your own words', 'Router နှင့် Switch ကွာခြားချက်ကို ကိုယ်ပိုင်စကားလုံးဖြင့် ရှင်းပြပါ'],
    ]),
    completionChecklist: list([
      ['Distinguish routers, switches, and hubs', 'Routers, Switches, Hubs ခွဲခြားနိုင်သည်'],
      ['Diagram a basic network topology', 'အခြေခံ Network Topology Diagram ဆွဲနိုင်သည်'],
      ['Identify hardware in a real network', 'Network အစစ်တစ်ခုရှိ Hardware ဖော်ထုတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-beginner-3': {
    whatItIs: t([
      'Command line basics for networking cover using terminal commands to inspect, test, and troubleshoot network connections.',
      'Networking အတွက် Command Line အခြေခံသည် Network Connection များကို Inspect လုပ်ရန်၊ Test လုပ်ရန်နှင့် ပြဿနာဖြေရှင်းရန် Terminal Command များ သုံးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Nearly all real network troubleshooting starts with a handful of command-line tools — they are faster and more precise than any graphical tool for diagnosing issues.',
      'Network ပြဿနာဖြေရှင်းမှု အစစ် နီးပါးအားလုံးသည် Command-line Tool အနည်းငယ်ဖြင့် စတင်သည် — ၎င်းတို့သည် ပြဿနာများ ရှာဖွေရန် Graphical Tool မည်သည်ထက်မဆို ပိုမြန်၍ ပိုတိကျသည်။',
    ]),
    whereUsed: t([
      'Used by network engineers and IT support staff daily to diagnose connectivity issues.',
      'Connectivity ပြဿနာများ ရှာဖွေရန် Network Engineer နှင့် IT Support Staff များက နေ့စဉ် သုံးကြသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['ping', 'ping'],
      ['traceroute / tracert', 'traceroute / tracert'],
      ['ipconfig / ifconfig', 'ipconfig / ifconfig'],
      ['nslookup / dig', 'nslookup / dig'],
    ]),
    steps: [
      step(
        ['Test basic connectivity with ping', 'ping ဖြင့် အခြေခံ Connectivity Test လုပ်ခြင်း'],
        [
          ['ping checks whether a host is reachable and measures round-trip time', 'ping က Host တစ်ခု ဆက်သွယ်နိုင်ကြောင်း စစ်ဆေးပြီး Round-trip အချိန်ကို တိုင်းတာသည်'],
        ],
        [
          ['Ping three different hosts (e.g. your router, a local device, an external site) and compare the results', 'Host မတူညီသုံးခု (ဥပမာ သင့် Router, Local Device, External Site) ကို Ping ပို့ပြီး ရလဒ်များ နှိုင်းယှဉ်ပါ'],
        ],
      ),
      step(
        ['Trace a route and check your own configuration', 'Route တစ်ခု Trace လုပ်ပြီး ကိုယ်ပိုင် Configuration စစ်ဆေးခြင်း'],
        [
          ['traceroute shows every hop a packet takes to reach a destination', 'traceroute က Packet တစ်ခု Destination သို့ ရောက်ရန် ယူသော Hop တိုင်းကို ပြသည်'],
          ['ipconfig/ifconfig shows your own device\'s network configuration', 'ipconfig/ifconfig က သင့်ကိုယ်ပိုင် Device ၏ Network Configuration ကို ပြသည်'],
        ],
        [
          ['Run traceroute to an external website and count how many hops it takes', 'External Website တစ်ခုသို့ traceroute Run ပြီး Hop မည်မျှယူသည်ကို ရေတွက်ပါ'],
          ['Check and record your own device\'s IP configuration', 'သင့်ကိုယ်ပိုင် Device ၏ IP Configuration ကို စစ်ဆေးပြီး မှတ်တမ်းတင်ပါ'],
        ],
      ),
    ],
    build: t([
      'Diagnose a simulated connectivity issue (e.g. "this site loads slowly") using ping, traceroute, and your device\'s IP configuration, and write up your findings.',
      'Simulate ထားသော Connectivity ပြဿနာတစ်ခု (ဥပမာ "ဒီ Site က နှေးနှေးတက်တယ်") ကို ping, traceroute, သင့် Device ၏ IP Configuration တို့ သုံး၍ ရှာဖွေပြီး တွေ့ရှိချက်များ ရေးထားပါ။',
    ]),
    verify: t([
      'Given a connectivity complaint, could you decide which command-line tool to reach for first and why?',
      'Connectivity တိုင်ကြားချက်တစ်ခု ပေးလိုက်လျှင် ဘယ် Command-line Tool ကို ဦးစွာ သုံးမည်နှင့် ဘာကြောင့်ဆိုသည်ကို ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start troubleshooting with ping — it is the fastest way to confirm basic connectivity.', 'Ping ဖြင့် ပြဿနာဖြေရှင်းမှု စတင်ပါ — ၎င်းသည် အခြေခံ Connectivity ကို အတည်ပြုရန် အမြန်ဆုံးနည်းလမ်း ဖြစ်သည်။'],
      ['Use traceroute when ping succeeds but something along the path still seems slow.', 'Ping အောင်မြင်သော်လည်း လမ်းကြောင်းတစ်လျှောက် တစ်ခုခု နှေးနေသေးသည်ဟု ထင်ရသည့်အခါ traceroute သုံးပါ။'],
    ]),
    commonMistakes: list([
      ['Not knowing which basic tool to reach for when diagnosing a connectivity issue.', 'Connectivity ပြဿနာတစ်ခု ရှာဖွေသည့်အခါ ဘယ် အခြေခံ Tool ကို သုံးရမည် မသိခြင်း။'],
      ['Misreading traceroute output and assuming every "*" means total failure.', 'traceroute Output ကို မှားဖတ်ပြီး "*" တိုင်းသည် ဆုံးရှုံးမှုအပြည့်အစုံဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('networking-beginner-3', [
      ['Ping three different hosts and compare results', 'Host မတူညီသုံးခု Ping ပို့ပြီး ရလဒ်များ နှိုင်းယှဉ်ပါ'],
      ['Run traceroute to an external site', 'External Site တစ်ခုသို့ traceroute Run ပါ'],
      ['Check your device\'s IP configuration', 'သင့် Device ၏ IP Configuration စစ်ဆေးပါ'],
      ['Diagnose a simulated connectivity issue', 'Simulate ထားသော Connectivity ပြဿနာတစ်ခု ရှာဖွေပါ'],
    ]),
    completionChecklist: list([
      ['Use ping to test connectivity', 'Connectivity Test လုပ်ရန် ping သုံးနိုင်သည်'],
      ['Use traceroute to trace a network path', 'Network Path တစ်ခု Trace လုပ်ရန် traceroute သုံးနိုင်သည်'],
      ['Check a device\'s own IP configuration', 'Device တစ်ခု၏ ကိုယ်ပိုင် IP Configuration စစ်ဆေးနိုင်သည်'],
      ['Diagnose a basic connectivity issue', 'အခြေခံ Connectivity ပြဿနာတစ်ခု ရှာဖွေနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-beginner-4': {
    whatItIs: t([
      'IP addressing and subnetting basics cover how devices are given unique addresses on a network and how networks are divided into smaller sub-networks.',
      'IP Addressing နှင့် Subnetting အခြေခံသည် Network တစ်ခုပေါ်ရှိ Device များအား ထူးခြားသော Address များ မည်သို့ ပေးအပ်ပြီး Network များအား ပိုသေးငယ်သော Sub-network များအဖြစ် မည်သို့ ခွဲခြားသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'IP addressing is the foundation of how any device finds and communicates with any other device — subnetting is how networks stay organized and efficient at any real scale.',
      'IP Addressing သည် Device မည်သည်ကမဆို Device တခြားတစ်ခုကို ရှာဖွေပြီး ဆက်သွယ်ပုံ၏ အခြေခံ ဖြစ်သည် — Subnetting သည် Network များ Scale အစစ်တစ်ခုတွင် စနစ်တကျ၍ ထိရောက်စွာ ရှိနေစေသောနည်းလမ်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Applied whenever a network is designed or configured, from a home router to an enterprise data center.',
      'Home Router မှ Enterprise Data Center အထိ Network တစ်ခု Design ဆွဲ (သို့) Configure ချသည့်အခါတိုင်း အသုံးချသည်။',
    ]),
    prerequisiteNote: t([
      'Requires comfort with the OSI/TCP-IP model from earlier in this stage.',
      'ဤအဆင့်ရှေ့ပိုင်းမှ OSI/TCP-IP Model နှင့် ရင်းနှီးမှု လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['IPv4 address structure', 'IPv4 Address ဖွဲ့စည်းပုံ'],
      ['Public vs private IP addresses', 'Public နှင့် Private IP Address'],
      ['Subnet masks (conceptually)', 'Subnet Mask (Concept အရ)'],
      ['CIDR notation basics', 'CIDR Notation အခြေခံ'],
    ]),
    steps: [
      step(
        ['Understand IP address structure', 'IP Address ဖွဲ့စည်းပုံ နားလည်ခြင်း'],
        [
          ['IPv4 addresses as four numbers (0-255) representing network and host portions', 'Network နှင့် Host အပိုင်းများကို ကိုယ်စားပြုသော ဂဏန်း (0-255) လေးလုံးအဖြစ် IPv4 Address'],
          ['Public IPs are internet-routable; private IPs are for local networks only', 'Public IP များသည် Internet-routable ဖြစ်ပြီး Private IP များသည် Local Network များအတွက်သာ ဖြစ်သည်'],
        ],
        [
          ['Check your own device\'s IP address and identify whether it is public or private, and why', 'သင့်ကိုယ်ပိုင် Device ၏ IP Address ကို စစ်ဆေးပြီး Public လား Private လား၊ ဘာကြောင့်ဆိုသည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Understand subnet masks and basic CIDR', 'Subnet Mask နှင့် အခြေခံ CIDR နားလည်ခြင်း'],
        [
          ['A subnet mask separates the network portion of an address from the host portion', 'Subnet Mask တစ်ခုသည် Address ၏ Network အပိုင်းကို Host အပိုင်းနှင့် ခွဲခြားပေးသည်'],
          ['CIDR notation (e.g. /24) as a shorthand for the subnet mask', 'Subnet Mask ၏ အတိုကောက်အဖြစ် CIDR Notation (ဥပမာ /24)'],
        ],
        [
          ['Given a sample IP address and a /24 subnet mask, identify the network portion and how many host addresses are available', 'Sample IP Address နှင့် /24 Subnet Mask ပေးလိုက်လျှင် Network အပိုင်းနှင့် ရရှိနိုင်သော Host Address အရေအတွက်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design a simple IP addressing plan for a small office with three departments, each needing its own subnet, documenting the network address, subnet mask, and usable host range for each.',
      'Department သုံးခုပါသော Office သေးငယ်တစ်ခုအတွက် IP Addressing Plan ရိုးရှင်းတစ်ခု Design ဆွဲပါ — တစ်ခုစီသည် ၎င်းကိုယ်ပိုင် Subnet လိုအပ်သည်၊ Network Address, Subnet Mask, Usable Host Range တစ်ခုစီအတွက် မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Given an IP address and a subnet mask, could you determine the network address and the range of usable host addresses?',
      'IP Address နှင့် Subnet Mask တစ်ခု ပေးလိုက်လျှင် Network Address နှင့် Usable Host Address အပိုင်းအခြားကို ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Practice subnetting problems by hand repeatedly — it is a skill that clicks with practice, not just theory.', 'Subnetting ပြဿနာများကို လက်ဖြင့် ထပ်ခါထပ်ခါ လေ့ကျင့်ပါ — ၎င်းသည် သီအိုရီတစ်ခုတည်းမကဘဲ လေ့ကျင့်မှုနှင့် ထိစပ်လာသော ကျွမ်းကျင်မှု ဖြစ်သည်။'],
      ['Always double-check whether an address you are working with is public or private before assuming its behavior.', 'Address တစ်ခု၏ Behavior ကို မယူဆမီ ၎င်း Public လား Private လား နှစ်ကြိမ် စစ်ဆေးပါ။'],
    ]),
    commonMistakes: list([
      ['Confusing the network address, broadcast address, and usable host range within a subnet.', 'Subnet တစ်ခုအတွင်း Network Address, Broadcast Address, Usable Host Range ကို ရောထွေးခြင်း။'],
      ['Assuming a private IP address is directly reachable from the public internet.', 'Private IP Address တစ်ခုကို Public Internet မှ တိုက်ရိုက် ဆက်သွယ်နိုင်သည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('networking-beginner-4', [
      ['Identify your own IP as public or private', 'သင့်ကိုယ်ပိုင် IP ကို Public လား Private လား ဖော်ထုတ်ပါ'],
      ['Calculate the network portion from an IP and subnet mask', 'IP နှင့် Subnet Mask မှ Network အပိုင်းကို တွက်ချက်ပါ'],
      ['Design a simple three-subnet addressing plan', 'Subnet သုံးခုပါသော Addressing Plan ရိုးရှင်းတစ်ခု Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Explain IPv4 address structure', 'IPv4 Address ဖွဲ့စည်းပုံ ရှင်းပြနိုင်သည်'],
      ['Distinguish public and private IP addresses', 'Public နှင့် Private IP Address ခွဲခြားနိုင်သည်'],
      ['Understand subnet masks and basic CIDR notation', 'Subnet Mask နှင့် အခြေခံ CIDR Notation နားလည်သည်'],
      ['Design a basic subnetting plan', 'အခြေခံ Subnetting Plan တစ်ခု Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-core-1': {
    whatItIs: t([
      'Routing and switching cover how traffic is directed within a local network (switching) and between different networks (routing).',
      'Routing နှင့် Switching သည် Traffic ကို Local Network တစ်ခုအတွင်း (Switching) နှင့် Network မတူညီသည်များကြား (Routing) မည်သို့ ညွှန်ကြားသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'This is the core mechanism that makes any network larger than a single device actually function — without correct routing and switching, devices cannot reach each other.',
      'ဤသည်မှာ Device တစ်ခုတည်းထက် ကြီးသော Network မည်သည်ကိုမဆို တကယ် Function လုပ်စေသော အဓိက Mechanism ဖြစ်သည် — Routing နှင့် Switching မှန်ကန်မှု မရှိပါက Device များ အချင်းချင်း မဆက်သွယ်နိုင်ပါ။',
    ]),
    whereUsed: t([
      'Central to every network engineer\'s day-to-day work, from a small office LAN to a large enterprise WAN.',
      'Office LAN သေးငယ်တစ်ခုမှ Enterprise WAN ကြီးအထိ Network Engineer တိုင်း၏ နေ့စဉ် အလုပ်၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires comfort with basic hardware and IP addressing from the Beginner stage.',
      'Beginner အဆင့်မှ Basic Hardware နှင့် IP Addressing နှင့် ရင်းနှီးမှု လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['How switches learn MAC addresses', 'Switches များ MAC Address များ မည်သို့ သင်ယူသည်ကို'],
      ['How routers make forwarding decisions', 'Routers များ Forwarding ဆုံးဖြတ်ချက် မည်သို့ ချသည်ကို'],
      ['Static vs dynamic routing (conceptually)', 'Static နှင့် Dynamic Routing (Concept အရ)'],
      ['VLANs (basic introduction)', 'VLANs (အခြေခံ နိဒါန်း)'],
    ]),
    steps: [
      step(
        ['Understand how switching works', 'Switching မည်သို့ အလုပ်လုပ်သည်ကို နားလည်ခြင်း'],
        [
          ['A switch builds a table of MAC addresses to know which port to send traffic to', 'Switch တစ်ခုသည် Traffic ကို မည်သည့် Port သို့ ပို့ရမည်ကို သိရန် MAC Address Table တစ်ခု တည်ဆောက်သည်'],
        ],
        [
          ['Explain what happens the first time a switch sees traffic from a new device versus subsequent times', 'Switch တစ်ခုသည် Device အသစ်တစ်ခုမှ Traffic ကို ပထမဆုံးအကြိမ် မြင်သည့်အခါနှင့် နောက်ပိုင်းအကြိမ်များ ဘာကွာခြားသည်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Understand how routing works', 'Routing မည်သို့ အလုပ်လုပ်သည်ကို နားလည်ခြင်း'],
        [
          ['A router uses a routing table to decide where to forward traffic destined for a different network', 'Router တစ်ခုသည် Network မတူညီသည်တစ်ခုသို့ ဦးတည်သော Traffic ကို ဘယ်နေရာသို့ ပို့ရမည်ကို ဆုံးဖြတ်ရန် Routing Table တစ်ခု သုံးသည်'],
          ['Static routes are configured manually; dynamic routing protocols update automatically', 'Static Route များကို Manual Configure လုပ်ပြီး Dynamic Routing Protocol များသည် အလိုအလျောက် Update ဖြစ်သည်'],
        ],
        [
          ['View the routing table on your own device or router and explain what each entry means', 'သင့် Device (သို့) Router ပေါ်ရှိ Routing Table ကို ကြည့်ပြီး Entry တစ်ခုစီ ဆိုလိုသည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Design a small network with two departments on separate subnets connected through a router, documenting how a packet from one department reaches a device in the other.',
      'Router တစ်ခုမှတစ်ဆင့် ချိတ်ဆက်ထားသော Subnet သီးခြားစီရှိ Department နှစ်ခုပါသော Network သေးငယ်တစ်ခု Design ဆွဲပါ — Department တစ်ခုမှ Packet တစ်ခု အခြား Department ရှိ Device တစ်ခုသို့ မည်သို့ရောက်သည်ကို မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Could you explain, step by step, how a switch and a router each decide where to send a piece of traffic?',
      'Switch နှင့် Router တို့ Traffic အပိုင်းအစတစ်ခုကို ဘယ်နေရာ ပို့ရမည်ကို မည်သို့ ဆုံးဖြတ်သည်ကို အဆင့်ဆင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Remember: switches operate within one network, routers connect different networks.', 'မှတ်ထားပါ — Switches များသည် Network တစ်ခုအတွင်း Operate လုပ်ပြီး Routers များသည် Network မတူညီသည်များကို ချိတ်ဆက်ပေးသည်။'],
      ['Look at a real routing table to see the theory made concrete.', 'သီအိုရီ ကွန်ကရစ်ဖြစ်လာသည်ကို မြင်ရန် Routing Table အစစ်တစ်ခုကို ကြည့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Confusing when a switch versus a router is the appropriate device for a given connection.', 'ချိတ်ဆက်မှု တစ်ခုအတွက် Switch လား Router လား သင့်လျော်သော Device ဖြစ်သည်ကို ရောထွေးခြင်း။'],
      ['Assuming all routing is dynamic without understanding static routes.', 'Static Route များကို နားမလည်ဘဲ Routing အားလုံးသည် Dynamic ဖြစ်သည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('networking-core-1', [
      ['Explain how switches learn MAC addresses', 'Switches များ MAC Address များ မည်သို့ သင်ယူသည်ကို ရှင်းပြပါ'],
      ['View and interpret a routing table', 'Routing Table တစ်ခု ကြည့်ပြီး အဓိပ္ပာယ်ဖွင့်ပါ'],
      ['Design a two-subnet network connected by a router', 'Router တစ်ခုဖြင့် ချိတ်ဆက်ထားသော Subnet နှစ်ခုပါသော Network Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Explain how switching works', 'Switching မည်သို့ အလုပ်လုပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Explain how routing works', 'Routing မည်သို့ အလုပ်လုပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Distinguish static from dynamic routing', 'Static ကို Dynamic Routing နှင့် ခွဲခြားနိုင်သည်'],
      ['Design a simple multi-subnet network', 'Subnet များစွာပါသော Network ရိုးရှင်းတစ်ခု Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-core-2': {
    whatItIs: t([
      'Network troubleshooting is systematically diagnosing why a network problem is happening, using a structured process rather than random guessing.',
      'Network Troubleshooting ဆိုသည်မှာ ကျပန်း ခန့်မှန်းခြင်းအစား ဖွဲ့စည်းထားသော လုပ်ငန်းစဉ်တစ်ခု သုံး၍ Network ပြဿနာတစ်ခု ဘာကြောင့်ဖြစ်နေသည်ကို စနစ်တကျ ရှာဖွေခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Networks fail in all kinds of ways, and a systematic approach — working through the OSI layers — finds the real cause far faster than randomly trying fixes.',
      'Network များသည် နည်းအမျိုးမျိုးဖြင့် ပျက်တတ်ပြီး OSI Layer များတစ်လျှောက် လုပ်ဆောင်သွားသော စနစ်တကျ ချဉ်းကပ်နည်းက ဖြေရှင်းချက်များကို ကျပန်း စမ်းသပ်ခြင်းထက် တကယ့် အကြောင်းရင်းကို ပိုမြန်စွာ ရှာတွေ့စေသည်။',
    ]),
    whereUsed: t([
      'The core daily skill of network engineers and IT support staff resolving connectivity issues.',
      'Connectivity ပြဿနာများ ဖြေရှင်းသော Network Engineer နှင့် IT Support Staff များ၏ နေ့စဉ် အခြေခံ ကျွမ်းကျင်မှု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the command-line tools from the Beginner stage and the routing/switching concepts earlier in this stage.',
      'Beginner အဆင့်မှ Command-line Tool များနှင့် ဤအဆင့်ရှေ့ပိုင်းမှ Routing/Switching Concept များအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['The bottom-up (or top-down) troubleshooting approach', 'Bottom-up (သို့) Top-down ပြဿနာဖြေရှင်းရေး ချဉ်းကပ်နည်း'],
      ['Isolating whether an issue is local, network-wide, or external', 'ပြဿနာသည် Local, Network-wide (သို့) External ဟုတ်မဟုတ် ဖယ်ထုတ်ခြင်း'],
      ['Common issues (DNS, cabling, misconfiguration)', 'အများသုံး ပြဿနာများ (DNS, Cabling, Misconfiguration)'],
      ['Documenting a resolved issue', 'ဖြေရှင်းပြီးသော ပြဿနာကို မှတ်တမ်းတင်ခြင်း'],
    ]),
    steps: [
      step(
        ['Work through a structured troubleshooting process', 'ဖွဲ့စည်းထားသော ပြဿနာဖြေရှင်းရေး လုပ်ငန်းစဉ်ကို ဖြတ်သန်းလုပ်ဆောင်ခြင်း'],
        [
          ['Checking the physical layer first (is it plugged in, is the light on) before assuming something complex', 'ရှုပ်ထွေးသောအရာတစ်ခုကို မယူဆမီ Physical Layer ကို ဦးစွာ စစ်ဆေးခြင်း (ချိတ်ဆက်ထားလား၊ မီးလင်းနေလား)'],
          ['Working upward through the layers if the physical layer is fine', 'Physical Layer ကောင်းမွန်ပါက Layer များ အထက်သို့ လုပ်ဆောင်သွားခြင်း'],
        ],
        [
          ['Given a "cannot access this website" scenario, list the troubleshooting steps in order from physical layer up', '"ဒီ Website ကို ဝင်ရောက်မရဘူး" Scenario တစ်ခု ပေးလိုက်လျှင် Physical Layer မှ အထက်သို့ ပြဿနာဖြေရှင်းရေး အဆင့်များကို အစီအစဉ်တကျ စာရင်းပြုစုပါ'],
        ],
      ),
      step(
        ['Isolate and resolve a common issue', 'အများသုံး ပြဿနာတစ်ခုကို ဖယ်ထုတ်ပြီး ဖြေရှင်းခြင်း'],
        [
          ['Distinguishing a DNS problem from a routing problem from a physical problem', 'DNS ပြဿနာကို Routing ပြဿနာနှင့် Physical ပြဿနာနှင့် ခွဲခြားခြင်း'],
        ],
        [
          ['Given symptoms of a simulated DNS failure, explain how you would confirm DNS is the cause versus something else', 'Simulate ထားသော DNS Failure ၏ လက္ခဏာများ ပေးလိုက်လျှင် DNS သည် အကြောင်းရင်းဖြစ်ကြောင်း (သို့) အခြားတစ်ခုခုဖြစ်ကြောင်း မည်သို့ အတည်ပြုမည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Given three different simulated network problem scenarios, write out a structured troubleshooting path for each, from initial symptom to root cause identification.',
      'Simulate ထားသော Network ပြဿနာ Scenario မတူညီသုံးခု ပေးလိုက်လျှင် ကနဦး လက္ခဏာမှ Root Cause ဖော်ထုတ်ခြင်းအထိ တစ်ခုစီအတွက် ဖွဲ့စည်းထားသော ပြဿနာဖြေရှင်းရေး လမ်းကြောင်း ရေးထားပါ။',
    ]),
    verify: t([
      'Given a network problem report, could you methodically work through checking each layer instead of guessing randomly?',
      'Network ပြဿနာ Report တစ်ခု ပေးလိုက်လျှင် ကျပန်း ခန့်မှန်းမည့်အစား Layer တစ်ခုစီကို စနစ်တကျ စစ်ဆေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check the simplest, most physical explanation first — a loose cable causes more issues than people expect.', 'အရိုးရှင်းဆုံး၊ Physical အရ အကြောင်းပြချက်ကို ဦးစွာ အမြဲ စစ်ဆေးပါ — ချိတ်ဆက်မှု လွတ်နေသော Cable တစ်ခုသည် လူများ မျှော်လင့်ထားသည်ထက် ပြဿနာ ပိုဖြစ်စေသည်။'],
      ['Document what you tried and what worked — it saves time on the next similar issue.', 'စမ်းသပ်ခဲ့သည်နှင့် အလုပ်ဖြစ်သည်ကို မှတ်တမ်းတင်ပါ — နောက် တူညီသော ပြဿနာအတွက် အချိန်ကုန်သက်သာစေသည်။'],
    ]),
    commonMistakes: list([
      ['Jumping to complex explanations before checking simple physical causes.', 'ရိုးရှင်းသော Physical အကြောင်းရင်းများ မစစ်ဆေးမီ ရှုပ်ထွေးသော ရှင်းလင်းချက်များသို့ ခုန်ဝင်ခြင်း။'],
      ['Not documenting the resolution, so the same issue takes just as long to solve next time.', 'ဖြေရှင်းချက်ကို မှတ်တမ်းမတင်ခြင်းက ပြဿနာတူတစ်ခု နောက်တစ်ကြိမ်အတွက် အချိန်တူတူ ကုန်ဆုံးစေသည်။'],
    ]),
    practiceTasks: tasks('networking-core-2', [
      ['List troubleshooting steps for a connectivity scenario', 'Connectivity Scenario တစ်ခုအတွက် ပြဿနာဖြေရှင်းရေး အဆင့်များ စာရင်းပြုစုပါ'],
      ['Distinguish DNS, routing, and physical-layer problems', 'DNS, Routing, Physical-layer ပြဿနာများ ခွဲခြားပါ'],
      ['Write structured troubleshooting paths for three scenarios', 'Scenario သုံးခုအတွက် ဖွဲ့စည်းထားသော ပြဿနာဖြေရှင်းရေး လမ်းကြောင်းများ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Follow a structured, layer-based troubleshooting process', 'ဖွဲ့စည်းထားသော Layer-based ပြဿနာဖြေရှင်းရေး Process လိုက်နာနိုင်သည်'],
      ['Isolate whether an issue is local, network, or external', 'ပြဿနာသည် Local, Network, External ဟုတ်မဟုတ် ဖယ်ထုတ်နိုင်သည်'],
      ['Diagnose common network issues (DNS, cabling, config)', 'အများသုံး Network ပြဿနာများ (DNS, Cabling, Config) ရှာဖွေနိုင်သည်'],
      ['Document a resolved issue clearly', 'ဖြေရှင်းပြီးသော ပြဿနာကို ရှင်းလင်းစွာ မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-core-3': {
    whatItIs: t([
      'Wireless networking covers how Wi-Fi works, how to configure it securely, and how it differs from wired networking.',
      'Wireless Networking သည် Wi-Fi မည်သို့ အလုပ်လုပ်ပြီး ၎င်းကို လုံခြုံစွာ မည်သို့ Configure ချရမည်ကို၊ Wired Networking နှင့် မည်သို့ ကွဲပြားသည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Wi-Fi is how most devices connect today, and it introduces unique challenges — interference, security, coverage — that wired networks do not have.',
      'Wi-Fi သည် ယနေ့ Device အများစု ချိတ်ဆက်သောနည်းလမ်း ဖြစ်ပြီး Wired Network များတွင် မရှိသော ထူးခြားသော စိန်ခေါ်မှုများ — Interference, Security, Coverage — ကို ဖြစ်ပေါ်စေသည်။',
    ]),
    whereUsed: t([
      'Present in nearly every home, office, and public space network today.',
      'ယနေ့ Home, Office, Public Space Network နီးပါးအားလုံးတွင် ရှိသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Wi-Fi standards (basic awareness, e.g. 802.11ac/ax)', 'Wi-Fi Standard များ (အခြေခံ သိရှိမှု, ဥပမာ 802.11ac/ax)'],
      ['SSID, channels, and interference', 'SSID, Channel များနှင့် Interference'],
      ['Wireless security protocols (WPA2/WPA3)', 'Wireless Security Protocol များ (WPA2/WPA3)'],
      ['Guest network segmentation', 'Guest Network Segmentation'],
    ]),
    steps: [
      step(
        ['Understand Wi-Fi fundamentals', 'Wi-Fi Fundamental များ နားလည်ခြင်း'],
        [
          ['SSIDs identify networks; channels help avoid interference between nearby networks', 'SSID များက Network များကို ဖော်ထုတ်ပြီး Channel များက အနီးအနားရှိ Network များကြား Interference ရှောင်ရှားရန် ကူညီသည်'],
        ],
        [
          ['Scan for nearby Wi-Fi networks and note their channels — identify if any are likely to interfere with each other', 'အနီးအနားရှိ Wi-Fi Network များကို Scan လုပ်ပြီး ၎င်းတို့၏ Channel များ မှတ်ချက်ပြုပါ — တစ်ခုနှင့်တစ်ခု Interference ဖြစ်နိုင်ခြေရှိမရှိ ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Configure wireless security properly', 'Wireless Security ကို မှန်ကန်စွာ Configure ချခြင်း'],
        [
          ['WPA2/WPA3 as the current standard for securing Wi-Fi', 'Wi-Fi လုံခြုံစေရန် လက်ရှိ Standard အနေဖြင့် WPA2/WPA3'],
          ['Separating guest traffic from the main network', 'Guest Traffic ကို Main Network မှ ခွဲခြားခြင်း'],
        ],
        [
          ['Review a router\'s wireless security settings and identify whether it uses a strong protocol and a properly segmented guest network', 'Router တစ်ခု၏ Wireless Security Setting များကို Review လုပ်ပြီး ၎င်းသည် ခိုင်မာသော Protocol နှင့် သင့်လျော်စွာ ခွဲခြားထားသော Guest Network သုံးသလား ဖော်ထုတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write a wireless network configuration plan for a small office: SSID naming, channel selection to avoid interference, security protocol, and a segmented guest network.',
      'Office သေးငယ်တစ်ခုအတွက် Wireless Network Configuration Plan တစ်ခု ရေးပါ — SSID နာမည်ပေးခြင်း, Interference ရှောင်ရှားရန် Channel ရွေးချယ်ခြင်း, Security Protocol, ခွဲခြားထားသော Guest Network။',
    ]),
    verify: t([
      'Could you explain why an open (no password) Wi-Fi network is a security risk, and what the correct alternative is?',
      'ဖွင့်ထားသော (Password မရှိသော) Wi-Fi Network တစ်ခုသည် ဘာကြောင့် Security Risk ဖြစ်သည်ကို ရှင်းပြပြီး မှန်ကန်သော အခြားရွေးချယ်စရာက ဘာလဲဆိုသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always use WPA2 or WPA3 — older protocols like WEP are considered broken.', 'WPA2 (သို့) WPA3 ကို အမြဲသုံးပါ — WEP ကဲ့သို့ Protocol ဟောင်းများကို ပျက်စီးနေသည်ဟု သဘောထားသည်။'],
      ['Separate guest Wi-Fi from your main network to limit what visitors can access.', 'ဧည့်သည်များ ဝင်ရောက်နိုင်သည်ကို ကန့်သတ်ရန် Guest Wi-Fi ကို သင့် Main Network မှ ခွဲထားပါ။'],
    ]),
    commonMistakes: list([
      ['Using outdated wireless security protocols like WEP.', 'WEP ကဲ့သို့ Wireless Security Protocol ဟောင်းများ သုံးခြင်း။'],
      ['Putting guest devices on the same network as sensitive internal systems.', 'ဧည့်သည် Device များကို အရေးကြီးသော Internal System များနှင့် Network တူတူတွင် ထားခြင်း။'],
    ]),
    practiceTasks: tasks('networking-core-3', [
      ['Scan nearby Wi-Fi networks and note channel usage', 'အနီးအနားရှိ Wi-Fi Network များကို Scan လုပ်ပြီး Channel အသုံးပြုမှု မှတ်ချက်ပြုပါ'],
      ['Review a router\'s wireless security settings', 'Router တစ်ခု၏ Wireless Security Setting များ Review လုပ်ပါ'],
      ['Write a wireless configuration plan for a small office', 'Office သေးငယ်တစ်ခုအတွက် Wireless Configuration Plan ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain SSIDs, channels, and interference', 'SSID, Channel, Interference ရှင်းပြနိုင်သည်'],
      ['Configure a strong wireless security protocol', 'ခိုင်မာသော Wireless Security Protocol Configure ချနိုင်သည်'],
      ['Segment guest wireless traffic appropriately', 'Guest Wireless Traffic ကို သင့်လျော်စွာ ခွဲခြားနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-core-4': {
    whatItIs: t([
      'Network security basics cover protecting network infrastructure itself — firewalls, access control, and segmentation — from unauthorized access and abuse.',
      'Network Security အခြေခံသည် Network Infrastructure ကိုယ်တိုင်ကို ခွင့်ပြုချက်မရှိသော Access နှင့် အလွဲသုံးစားမှုမှ ကာကွယ်ခြင်း — Firewall, Access Control, Segmentation — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'The network is often the first line of defense — a well-secured network limits what an attacker can even reach in the first place.',
      'Network သည် မကြာခဏ ပထမဆုံး ကာကွယ်ရေးလိုင်း ဖြစ်သည် — လုံခြုံစွာ ကာကွယ်ထားသော Network တစ်ခုသည် Attacker တစ်ဦး ဦးဆုံးမှာ ရောက်ရှိနိုင်သည်ကိုပင် ကန့်သတ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Applied at every point where a network connects to the internet or separates zones of differing trust.',
      'Network တစ်ခုသည် Internet သို့ ချိတ်ဆက်သည့် (သို့) ယုံကြည်မှုမတူညီသော Zone များ ခွဲခြားသည့် အချက်တိုင်းတွင် အသုံးချသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the routing/switching and wireless topics from earlier in this stage.',
      'ဤအဆင့်ရှေ့ပိုင်းမှ Routing/Switching နှင့် Wireless Topic များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Firewalls (what they do at a network level)', 'Firewall များ (Network အဆင့်တွင် ၎င်းတို့ ဘာလုပ်သလဲ)'],
      ['Network segmentation basics', 'Network Segmentation အခြေခံ'],
      ['Access control lists (ACLs), conceptually', 'Access Control List (ACL) များ, Concept အရ'],
      ['Why an unsegmented flat network is risky', 'Segmentation မရှိသော Flat Network တစ်ခု ဘာကြောင့် အန္တရာယ်ရှိသလဲ'],
    ]),
    steps: [
      step(
        ['Understand what a firewall does at the network level', 'Firewall တစ်ခု Network အဆင့်တွင် ဘာလုပ်သည်ကို နားလည်ခြင်း'],
        [
          ['A firewall filters traffic based on rules (allow/deny by port, source, destination)', 'Firewall တစ်ခုသည် စည်းမျဉ်းများ (Port, Source, Destination ဖြင့် Allow/Deny) အခြေခံ၍ Traffic ကို Filter လုပ်သည်'],
        ],
        [
          ['Write a simple set of firewall rules for a small office network (e.g. allow web traffic out, block unnecessary inbound ports)', 'Office Network သေးငယ်တစ်ခုအတွက် Firewall Rule ရိုးရှင်း အစုအဝေးတစ်ခု ရေးပါ (ဥပမာ Web Traffic ထွက်ရန် ခွင့်ပြု, မလိုအပ်သော Inbound Port များ ပိတ်ပါ)'],
        ],
      ),
      step(
        ['Apply network segmentation', 'Network Segmentation အသုံးချခြင်း'],
        [
          ['Why separating sensitive systems onto their own segment limits the blast radius of a breach', 'အရေးကြီးသော System များကို ၎င်းတို့ကိုယ်ပိုင် Segment ပေါ်တွင် ခွဲထားခြင်းက Breach တစ်ခု၏ ပျက်စီးမှု အကွာအဝေးကို ဘာကြောင့် ကန့်သတ်ပေးသနည်း'],
        ],
        [
          ['Design a segmented network for a small office: separate segments for guest Wi-Fi, general staff, and sensitive servers', 'Office သေးငယ်တစ်ခုအတွက် Segment ခွဲထားသော Network Design ဆွဲပါ — Guest Wi-Fi, General Staff, အရေးကြီးသော Server များအတွက် Segment သီးခြားစီ'],
        ],
      ),
    ],
    build: t([
      'Design a basic secure network layout for a small office: a firewall rule set, network segmentation into at least three zones, and a short explanation of why each decision reduces risk.',
      'Office သေးငယ်တစ်ခုအတွက် အခြေခံ လုံခြုံသော Network Layout Design ဆွဲပါ — Firewall Rule Set, Zone အနည်းဆုံးသုံးခုသို့ Network Segmentation နှင့် ဆုံးဖြတ်ချက်တစ်ခုစီ Risk ကို ဘာကြောင့် လျှော့ချသည်ကို ရှင်းလင်းချက် တိုတောင်း။',
    ]),
    verify: t([
      'Could you explain why putting a sensitive database server on the same flat network as guest Wi-Fi would be a bad idea?',
      'အရေးကြီးသော Database Server တစ်ခုကို Guest Wi-Fi နှင့် Flat Network တူတူတွင် ထားခြင်းသည် ဘာကြောင့် အယူအဆမကောင်းသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Default to denying traffic and only allowing what is explicitly needed, not the other way around.', 'ဆန့်ကျင်ဘက်မဟုတ်ဘဲ Traffic ကို Deny လုပ်ခြင်းကို Default အဖြစ်ထားပြီး ရှင်းလင်းစွာ လိုအပ်သည်ကိုသာ ခွင့်ပြုပါ။'],
      ['Think of segmentation as limiting how far an attacker can move if they get in anywhere.', 'Attacker တစ်ဦး ဘယ်နေရာမှ ဝင်ရောက်သည့်တိုင် မည်မျှ ရွေ့လျားနိုင်သည်ကို ကန့်သတ်ရန် Segmentation ကို တွေးပါ။'],
    ]),
    commonMistakes: list([
      ['Running a completely flat network with no segmentation between trust zones.', 'ယုံကြည်မှု Zone များကြား Segmentation လုံးဝမရှိဘဲ Flat Network တစ်ခုလုံး Run ခြင်း။'],
      ['Configuring a firewall to allow everything by default and only blocking known-bad traffic.', 'Firewall တစ်ခုကို Default အားဖြင့် အားလုံးခွင့်ပြုပြီး သိထားသော-မကောင်းသော Traffic ကိုသာ ပိတ်အောင် Configure ချခြင်း။'],
    ]),
    practiceTasks: tasks('networking-core-4', [
      ['Write a basic firewall rule set', 'အခြေခံ Firewall Rule Set တစ်ခု ရေးပါ'],
      ['Design a segmented network with three zones', 'Zone သုံးခုပါသော Segment ခွဲထားသော Network Design ဆွဲပါ'],
      ['Explain how segmentation limits breach impact', 'Segmentation က Breach သက်ရောက်မှုကို မည်သို့ ကန့်သတ်ပေးသည်ကို ရှင်းပြပါ'],
    ]),
    completionChecklist: list([
      ['Explain what a firewall does at a network level', 'Firewall တစ်ခု Network အဆင့်တွင် ဘာလုပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Write basic firewall rules', 'အခြေခံ Firewall Rule များ ရေးနိုင်သည်'],
      ['Design network segmentation', 'Network Segmentation Design ဆွဲနိုင်သည်'],
      ['Explain why segmentation reduces risk', 'Segmentation က Risk ကို ဘာကြောင့် လျှော့ချသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-intermediate-1': {
    whatItIs: t([
      'Network design basics cover planning a network\'s structure — topology, addressing, and redundancy — before building it, for a specific real need.',
      'Network Design အခြေခံသည် တကယ့် လိုအပ်ချက်သီးခြားတစ်ခုအတွက် Network တစ်ခု တည်ဆောက်မီ ၎င်း၏ ဖွဲ့စည်းပုံ — Topology, Addressing, Redundancy — ကို စီစဉ်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A poorly planned network causes ongoing problems — good design up front prevents costly rework and outages later.',
      'စီစဉ်မှု ညံ့ဖျင်းသော Network တစ်ခုသည် ဆက်တိုက် ပြဿနာများ ဖြစ်စေသည် — ကောင်းမွန်သော Design က နောက်ပိုင်း ကုန်ကျစရိတ်များသော ပြန်လုပ်ရခြင်းနှင့် Outage များကို ကာကွယ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Used when setting up a new office, expanding a network, or redesigning an existing one for better reliability.',
      'Office အသစ် Setup လုပ်ခြင်း၊ Network တိုးချဲ့ခြင်း (သို့) ယုံကြည်စိတ်ချရမှု ပိုကောင်းစေရန် ရှိပြီးသား Network တစ်ခုကို ပြန်လည် Design ဆွဲသည့်အခါ သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Draws on routing/switching, IP addressing, and security concepts from earlier stages.',
      'ယခင် အဆင့်များမှ Routing/Switching, IP Addressing, Security Concept များကို အသုံးချသည်။',
    ]),
    firstSteps: list([
      ['Gathering requirements before designing', 'Design မဆွဲမီ လိုအပ်ချက်များ စုစည်းခြင်း'],
      ['Planning IP addressing for growth', 'ကြီးထွားမှုအတွက် IP Addressing စီစဉ်ခြင်း'],
      ['Redundancy basics (avoiding single points of failure)', 'Redundancy အခြေခံ (Single Point of Failure များ ရှောင်ရှားခြင်း)'],
      ['Documenting a network design', 'Network Design တစ်ခု မှတ်တမ်းတင်ခြင်း'],
    ]),
    steps: [
      step(
        ['Gather requirements before designing', 'Design မဆွဲမီ လိုအပ်ချက်များ စုစည်းခြင်း'],
        [
          ['Understanding how many devices, departments, and growth to plan for', 'Device, Department အရေအတွက်နှင့် ကြီးထွားမှုအတွက် မည်မျှ စီစဉ်ရမည်ကို နားလည်ခြင်း'],
        ],
        [
          ['Write a short requirements document for a hypothetical 20-person office network', 'ယူဆချက်ရေး လူ ၂၀ ဦးရှိသော Office Network တစ်ခုအတွက် လိုအပ်ချက် Document တိုတောင်း ရေးပါ'],
        ],
      ),
      step(
        ['Design with redundancy and future growth in mind', 'Redundancy နှင့် အနာဂတ် ကြီးထွားမှုကို ထောက်ရှု၍ Design ဆွဲခြင်း'],
        [
          ['Avoiding single points of failure where practical', 'လက်တွေ့ကျသည့်နေရာတွင် Single Point of Failure များ ရှောင်ရှားခြင်း'],
          ['Leaving room in the IP addressing plan for growth', 'ကြီးထွားမှုအတွက် IP Addressing Plan တွင် နေရာလွတ်ချန်ထားခြင်း'],
        ],
        [
          ['Design a full network layout for the 20-person office, including addressing plan, segmentation, and one redundancy consideration', 'Addressing Plan, Segmentation, Redundancy စဉ်းစားချက်တစ်ခုပါသော လူ ၂၀ ဦး Office အတွက် Network Layout အပြည့်အစုံ Design ဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Produce a complete network design document for a hypothetical growing small business: requirements, topology diagram, IP addressing plan with room to grow, and segmentation.',
      'ကြီးထွားနေသော Small Business ယူဆချက်ရေးတစ်ခုအတွက် Network Design Document အပြည့်အစုံ ထုတ်လုပ်ပါ — Requirements, Topology Diagram, ကြီးထွားရန် နေရာလွတ်ပါသော IP Addressing Plan, Segmentation။',
    ]),
    verify: t([
      'Given a business\'s size and growth plans, could you design a network that would not need a complete redesign in a year?',
      'Business တစ်ခု၏ အရွယ်အစားနှင့် ကြီးထွားမှု အစီအစဉ်များ ပေးလိုက်လျှင် တစ်နှစ်အတွင်း အပြီးသတ် ပြန်လည် Design မလိုအပ်မည့် Network တစ်ခု Design ဆွဲနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always gather real requirements before designing — do not design in a vacuum.', 'Design မဆွဲမီ တကယ့် လိုအပ်ချက်များကို အမြဲစုစည်းပါ — Vacuum တွင် Design မဆွဲပါနှင့်။'],
      ['Leave room to grow in your IP addressing plan — running out of addresses is a common, avoidable mistake.', 'သင့် IP Addressing Plan တွင် ကြီးထွားရန် နေရာလွတ်ချန်ထားပါ — Address များ ကုန်သွားခြင်းသည် ရှောင်ရှားနိုင်သော အများသုံး အမှားတစ်ခု ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Designing a network without gathering real requirements first.', 'ရှေးဦးစွာ တကယ့် လိုအပ်ချက်များ မစုစည်းဘဲ Network တစ်ခု Design ဆွဲခြင်း။'],
      ['Not leaving room for growth in the IP addressing scheme.', 'IP Addressing Scheme တွင် ကြီးထွားမှုအတွက် နေရာလွတ် မချန်ထားခြင်း။'],
    ]),
    practiceTasks: tasks('networking-intermediate-1', [
      ['Write a network requirements document', 'Network Requirements Document တစ်ခု ရေးပါ'],
      ['Design an IP addressing plan with room to grow', 'ကြီးထွားရန် နေရာလွတ်ပါသော IP Addressing Plan Design ဆွဲပါ'],
      ['Produce a complete network design document', 'Network Design Document အပြည့်အစုံ ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Gather requirements before designing a network', 'Network တစ်ခု Design မဆွဲမီ လိုအပ်ချက်များ စုစည်းနိုင်သည်'],
      ['Plan IP addressing with future growth in mind', 'အနာဂတ် ကြီးထွားမှုကို ထောက်ရှု၍ IP Addressing စီစဉ်နိုင်သည်'],
      ['Apply basic redundancy principles', 'အခြေခံ Redundancy မူများ အသုံးချနိုင်သည်'],
      ['Document a complete network design', 'Network Design အပြည့်အစုံ မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-intermediate-2': {
    whatItIs: t([
      'VPNs and remote access cover securely connecting to a private network from outside it, over the public internet.',
      'VPN နှင့် Remote Access သည် Private Network တစ်ခုသို့ ၎င်းပြင်ပမှ Public Internet ပေါ်တွင် လုံခြုံစွာ ချိတ်ဆက်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Remote work, branch offices, and traveling employees all need secure access to internal resources without exposing them directly to the public internet.',
      'Remote Work, Branch Office, ခရီးသွား Employee များအားလုံးသည် Internal Resource များကို Public Internet သို့ တိုက်ရိုက် မဖော်ထုတ်ဘဲ လုံခြုံစွာ ဝင်ရောက်ခွင့် လိုအပ်ကြသည်။',
    ]),
    whereUsed: t([
      'Standard in nearly every organization with remote workers, multiple offices, or a need for secure external access.',
      'Remote Worker, Office များစွာ (သို့) လုံခြုံသော External Access လိုအပ်ချက်ရှိသော အဖွဲ့အစည်း နီးပါးအားလုံးတွင် စံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the network security basics from the Core stage.',
      'Core အဆင့်မှ Network Security အခြေခံများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['What a VPN actually does (encrypted tunnel)', 'VPN တစ်ခု တကယ်ဘာလုပ်သည်ကို (Encrypted Tunnel)'],
      ['Site-to-site vs remote-access VPNs', 'Site-to-site နှင့် Remote-access VPN များ'],
      ['Basic VPN configuration concepts', 'အခြေခံ VPN Configuration Concept များ'],
      ['Multi-factor authentication for remote access', 'Remote Access အတွက် Multi-factor Authentication'],
    ]),
    steps: [
      step(
        ['Understand what a VPN actually protects', 'VPN တစ်ခု တကယ် ကာကွယ်ပေးသည်ကို နားလည်ခြင်း'],
        [
          ['A VPN creates an encrypted tunnel so traffic looks like it originates from inside the private network', 'VPN တစ်ခုသည် Traffic ကို Private Network အတွင်းမှ ဆင်းသက်လာသလို ပုံပေါ်စေရန် Encrypted Tunnel တစ်ခု ဖန်တီးပေးသည်'],
        ],
        [
          ['Explain, step by step, what happens to a data packet from your laptop when connected through a VPN to a company network', 'VPN မှတစ်ဆင့် ကုမ္ပဏီ Network သို့ ချိတ်ဆက်ထားစဉ် သင့် Laptop မှ Data Packet တစ်ခုကို ဘာဖြစ်သည်ကို အဆင့်ဆင့် ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Design secure remote access', 'လုံခြုံသော Remote Access Design ဆွဲခြင်း'],
        [
          ['Combining a VPN with multi-factor authentication for defense in depth', 'Defense in Depth အတွက် VPN ကို Multi-factor Authentication နှင့် ပေါင်းစပ်ခြင်း'],
        ],
        [
          ['Design a remote access policy for employees working from home: what VPN requirements and authentication steps would you require?', 'အိမ်မှ အလုပ်လုပ်နေသော Employee များအတွက် Remote Access Policy တစ်ခု Design ဆွဲပါ — VPN လိုအပ်ချက်များနှင့် Authentication အဆင့်များ ဘာလိုအပ်မည်နည်း?'],
        ],
      ),
    ],
    build: t([
      'Write a short remote access policy and design document for a small company allowing employees to work from home: VPN requirements, authentication requirements, and what internal resources would be accessible.',
      'အိမ်မှ အလုပ်လုပ်ခွင့်ပေးသော ကုမ္ပဏီသေးငယ်တစ်ခုအတွက် Remote Access Policy နှင့် Design Document တိုတောင်း ရေးပါ — VPN လိုအပ်ချက်များ, Authentication လိုအပ်ချက်များနှင့် Internal Resource များ ဘာတွေ ဝင်ရောက်နိုင်မည်နည်း။',
    ]),
    verify: t([
      'Could you explain to a remote employee, in plain terms, why the VPN makes their connection to internal systems secure?',
      'Remote Employee တစ်ဦးအား VPN သည် Internal System များသို့ ၎င်းတို့၏ Connection ကို ဘာကြောင့် လုံခြုံစေသည်ကို ရိုးရှင်းသော စကားလုံးများဖြင့် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always pair VPN access with multi-factor authentication for anything sensitive.', 'အရေးကြီးသောအရာမည်သည်ကိုမဆို VPN Access ကို Multi-factor Authentication နှင့် အမြဲ တွဲသုံးပါ။'],
      ['Grant VPN users access only to what they need, not the entire internal network by default.', 'VPN User များကို Default အားဖြင့် Internal Network တစ်ခုလုံးမဟုတ်ဘဲ ၎င်းတို့ လိုအပ်သည်ကိုသာ Access ပေးပါ။'],
    ]),
    commonMistakes: list([
      ['Granting VPN access without multi-factor authentication.', 'Multi-factor Authentication မပါဘဲ VPN Access ပေးခြင်း။'],
      ['Giving every remote user full access to the entire internal network by default.', 'Remote User တိုင်းကို Default အားဖြင့် Internal Network တစ်ခုလုံးသို့ အပြည့်အစုံ Access ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('networking-intermediate-2', [
      ['Explain what a VPN protects step by step', 'VPN တစ်ခု ကာကွယ်ပေးသည်ကို အဆင့်ဆင့် ရှင်းပြပါ'],
      ['Design a remote access policy with MFA', 'MFA ပါသော Remote Access Policy Design ဆွဲပါ'],
      ['Write a remote access design document', 'Remote Access Design Document တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain what a VPN does', 'VPN တစ်ခု ဘာလုပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Distinguish site-to-site from remote-access VPNs', 'Site-to-site ကို Remote-access VPN နှင့် ခွဲခြားနိုင်သည်'],
      ['Design secure remote access with MFA', 'MFA ပါသော လုံခြုံသော Remote Access Design ဆွဲနိုင်သည်'],
      ['Write a basic remote access policy', 'အခြေခံ Remote Access Policy တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-intermediate-3': {
    whatItIs: t([
      'Network monitoring tools let you observe network health, traffic, and performance continuously, rather than only investigating after something breaks.',
      'Network Monitoring Tool များက တစ်ခုခု ပျက်စီးပြီးမှသာ စုံစမ်းစစ်ဆေးမည့်အစား Network Health, Traffic, Performance ကို ဆက်တိုက် စောင့်ကြည့်နိုင်စေသည်။',
    ]),
    whyItMatters: t([
      'Proactive monitoring catches problems developing before they become outages — reacting only after users complain is far more costly and stressful.',
      'Proactive Monitoring သည် ပြဿနာများ Outage မဖြစ်မီ ဖော်ထုတ်ပေးသည် — User များ တိုင်ကြားပြီးမှသာ တုံ့ပြန်ခြင်းသည် ကုန်ကျစရိတ် ပိုများ၍ စိတ်ဖိစီးမှု ပိုများသည်။',
    ]),
    whereUsed: t([
      'Used by network operations teams to maintain visibility into network health at all times.',
      'Network Health ကို အချိန်တိုင်း မြင်နိုင်နေရန် Network Operations Team များက သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Key metrics to monitor (bandwidth, latency, uptime, errors)', 'Monitor လုပ်ရမည့် Key Metric များ (Bandwidth, Latency, Uptime, Errors)'],
      ['Setting up basic alerts', 'အခြေခံ Alert များ Setup လုပ်ခြင်း'],
      ['Reading a monitoring dashboard', 'Monitoring Dashboard တစ်ခု ဖတ်ခြင်း'],
      ['The difference between monitoring and logging', 'Monitoring နှင့် Logging ကြား ကွာခြားချက်'],
    ]),
    steps: [
      step(
        ['Identify what to monitor and why', 'ဘာကို Monitor လုပ်ရမည်နှင့် ဘာကြောင့်ဆိုသည်ကို ဖော်ထုတ်ခြင်း'],
        [
          ['Bandwidth usage, latency, uptime, and error rates as key health indicators', 'အဓိက Health Indicator များအဖြစ် Bandwidth Usage, Latency, Uptime, Error Rate'],
        ],
        [
          ['For a small office network, list which metrics you would monitor and why each one matters', 'Office Network သေးငယ်တစ်ခုအတွက် မည်သည့် Metric များကို Monitor လုပ်မည်နှင့် တစ်ခုစီ ဘာကြောင့် အရေးကြီးသည်ကို စာရင်းပြုစုပါ'],
        ],
      ),
      step(
        ['Set up basic alerting', 'အခြေခံ Alerting Setup လုပ်ခြင်း'],
        [
          ['Alerting on meaningful thresholds, not every minor fluctuation', 'အသေးအဖွဲ့ ပြောင်းလဲမှုတိုင်းမဟုတ်ဘဲ အဓိပ္ပာယ်ရှိသော Threshold များတွင် Alert လုပ်ခြင်း'],
        ],
        [
          ['Define an alert threshold for bandwidth usage or latency and explain why you chose that specific value', 'Bandwidth Usage သို့ Latency အတွက် Alert Threshold တစ်ခု သတ်မှတ်ပြီး ထိုတန်ဖိုးသီးခြားကို ဘာကြောင့် ရွေးချယ်ခဲ့သည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Design a monitoring plan for a small office network: the key metrics to track, alert thresholds for each, and what action should be taken when an alert fires.',
      'Office Network သေးငယ်တစ်ခုအတွက် Monitoring Plan တစ်ခု Design ဆွဲပါ — Track လုပ်ရမည့် Key Metric များ, တစ်ခုစီအတွက် Alert Threshold များနှင့် Alert Fire ဖြစ်သည့်အခါ မည်သည့် Action ယူရမည်ကို။',
    ]),
    verify: t([
      'Could you explain why alerting on every minor fluctuation is worse than alerting on meaningful thresholds?',
      'အသေးအဖွဲ့ ပြောင်းလဲမှုတိုင်းအတွက် Alert လုပ်ခြင်းသည် အဓိပ္ပာယ်ရှိသော Threshold များအတွက် Alert လုပ်ခြင်းထက် ဘာကြောင့် ပိုဆိုးသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Set alert thresholds based on what actually matters to users, not arbitrary round numbers.', 'ကျပန်း ဂဏန်းစုံများအစား User များနှင့် တကယ် သက်ဆိုင်သည်ကို အခြေခံ၍ Alert Threshold များ သတ်မှတ်ပါ။'],
      ['Regularly review your monitoring dashboard even when nothing seems wrong — it builds a baseline of "normal".', 'ဘာမှ မှားနေဟန် မတူသည့်တိုင် သင့် Monitoring Dashboard ကို ပုံမှန် Review လုပ်ပါ — ၎င်းက "Normal" ၏ Baseline တစ်ခု တည်ဆောက်ပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Setting alert thresholds so sensitive that "alert fatigue" causes real issues to be ignored.', 'Alert Threshold များကို "Alert Fatigue" ဖြစ်လောက်အောင် Sensitive လွန်းအောင် သတ်မှတ်ခြင်းက တကယ့် ပြဿနာများ လျစ်လျူရှုခံရစေသည်။'],
      ['Monitoring metrics without ever reviewing the dashboard until an outage forces it.', 'Outage တစ်ခုက မတွန်းအားပေးမီ Dashboard ကို ဘယ်တော့မှ Review မလုပ်ဘဲ Metric များ Monitor လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('networking-intermediate-3', [
      ['List key metrics to monitor for a network', 'Network တစ်ခုအတွက် Monitor လုပ်ရမည့် Key Metric များ စာရင်းပြုစုပါ'],
      ['Define alert thresholds with justification', 'အကြောင်းပြချက်ပါသော Alert Threshold များ သတ်မှတ်ပါ'],
      ['Design a complete monitoring plan', 'Monitoring Plan အပြည့်အစုံ Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Identify key network health metrics', 'Key Network Health Metric များ ဖော်ထုတ်နိုင်သည်'],
      ['Set meaningful alert thresholds', 'အဓိပ္ပာယ်ရှိသော Alert Threshold များ သတ်မှတ်နိုင်သည်'],
      ['Distinguish monitoring from logging', 'Monitoring ကို Logging နှင့် ခွဲခြားနိုင်သည်'],
      ['Design a complete monitoring plan', 'Monitoring Plan အပြည့်အစုံ Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-intermediate-4': {
    whatItIs: t([
      'Cloud networking basics cover how networking concepts translate into cloud environments — virtual networks, cloud firewalls, and connecting on-premises to cloud.',
      'Cloud Networking အခြေခံသည် Networking Concept များ Cloud Environment များထဲသို့ မည်သို့ ပြောင်းလဲသည်ကို လွှမ်းခြုံသည် — Virtual Network, Cloud Firewall, On-premises ကို Cloud သို့ ချိတ်ဆက်ခြင်း။',
    ]),
    whyItMatters: t([
      'Most organizations now run at least some infrastructure in the cloud — networking skills that only apply to physical hardware leave a major gap in a modern career.',
      'အဖွဲ့အစည်းအများစုသည် ယခုအခါ Infrastructure အနည်းငယ်ကို Cloud တွင် Run နေကြသည် — Physical Hardware အတွက်သာ အသုံးချသော Networking ကျွမ်းကျင်မှုများသည် ခေတ်သစ် Career တစ်ခုတွင် အဓိက Gap တစ်ခု ချန်ထားခဲ့သည်။',
    ]),
    whereUsed: t([
      'Directly relevant to any organization using AWS, Azure, GCP, or similar cloud platforms for part of their infrastructure.',
      'Infrastructure တစ်စိတ်တစ်ပိုင်းအတွက် AWS, Azure, GCP (သို့) တူညီသော Cloud Platform များ သုံးနေသော အဖွဲ့အစည်းမည်သည်နှင့်မဆို တိုက်ရိုက် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires the IP addressing, subnetting, and security fundamentals from earlier stages.',
      'ယခင် အဆင့်များမှ IP Addressing, Subnetting, Security Fundamental များ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Virtual private clouds / virtual networks', 'Virtual Private Cloud / Virtual Network များ'],
      ['Cloud subnets and security groups', 'Cloud Subnet များနှင့် Security Group များ'],
      ['Connecting on-premises networks to the cloud', 'On-premises Network များကို Cloud သို့ ချိတ်ဆက်ခြင်း'],
      ['Cloud load balancers (conceptually)', 'Cloud Load Balancer များ (Concept အရ)'],
    ]),
    steps: [
      step(
        ['Understand virtual networks in the cloud', 'Cloud ရှိ Virtual Network များ နားလည်ခြင်း'],
        [
          ['A virtual private cloud (VPC) is a logically isolated network within a cloud provider', 'Virtual Private Cloud (VPC) တစ်ခုသည် Cloud Provider တစ်ခုအတွင်း Logically ခွဲထုတ်ထားသော Network တစ်ခု ဖြစ်သည်'],
          ['Cloud subnets and security groups work similarly to on-premises subnets and firewalls', 'Cloud Subnet နှင့် Security Group များသည် On-premises Subnet နှင့် Firewall များနှင့် ဆင်တူစွာ အလုပ်လုပ်သည်'],
        ],
        [
          ['Design a simple VPC layout for a web application: public subnet for the web server, private subnet for the database', 'Web Application တစ်ခုအတွက် VPC Layout ရိုးရှင်းတစ်ခု Design ဆွဲပါ — Web Server အတွက် Public Subnet, Database အတွက် Private Subnet'],
        ],
      ),
      step(
        ['Connect on-premises and cloud networks', 'On-premises နှင့် Cloud Network များ ချိတ်ဆက်ခြင်း'],
        [
          ['Options for connecting a local network to a cloud VPC (VPN, dedicated connection)', 'Local Network တစ်ခုကို Cloud VPC သို့ ချိတ်ဆက်ရန် ရွေးချယ်စရာများ (VPN, Dedicated Connection)'],
        ],
        [
          ['Explain, for a hypothetical hybrid setup, how you would securely connect an office network to a cloud VPC', 'ယူဆချက်ရေး Hybrid Setup တစ်ခုအတွက် Office Network တစ်ခုကို Cloud VPC သို့ လုံခြုံစွာ မည်သို့ ချိတ်ဆက်မည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Design a cloud networking architecture for a simple web application: VPC with public and private subnets, security groups restricting access appropriately, and a note on how it would connect to an on-premises office network.',
      'Web Application ရိုးရှင်းတစ်ခုအတွက် Cloud Networking Architecture Design ဆွဲပါ — Public နှင့် Private Subnet ပါသော VPC, Access ကို သင့်လျော်စွာ ကန့်သတ်သော Security Group များနှင့် On-premises Office Network သို့ မည်သို့ ချိတ်ဆက်မည်ဆိုသည့် မှတ်ချက်။',
    ]),
    verify: t([
      'Could you explain, to someone who only knows on-premises networking, how a cloud VPC and subnet map to concepts they already know?',
      'On-premises Networking ကိုသာ သိသူတစ်ဦးအား Cloud VPC နှင့် Subnet တို့ ၎င်းတို့ သိပြီးသား Concept များနှင့် မည်သို့ ကိုက်ညီသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Map cloud networking concepts back to their on-premises equivalents to build intuition faster.', 'Intuition ပိုမြန်စွာ တည်ဆောက်ရန် Cloud Networking Concept များကို ၎င်းတို့၏ On-premises Equivalent များနှင့် ပြန်ချိတ်ဆက်ပါ။'],
      ['Keep databases and other sensitive resources in private subnets, never directly exposed to the internet.', 'Database နှင့် အခြား အရေးကြီးသော Resource များကို Private Subnet များတွင် ထားပါ — Internet သို့ ဘယ်တော့မှ တိုက်ရိုက် မဖော်ထုတ်ပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Putting a database directly in a public subnet, exposing it to the internet.', 'Database တစ်ခုကို Public Subnet တွင် တိုက်ရိုက်ထားခြင်းက Internet သို့ ဖော်ထုတ်ပေးသည်။'],
      ['Assuming cloud networking works completely differently from on-premises instead of recognizing the parallels.', 'ဆင်တူမှုများကို မသိမြင်ဘဲ Cloud Networking သည် On-premises မှ လုံးဝ ကွဲပြားစွာ အလုပ်လုပ်သည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('networking-intermediate-4', [
      ['Design a VPC with public and private subnets', 'Public နှင့် Private Subnet ပါသော VPC Design ဆွဲပါ'],
      ['Configure security groups appropriately', 'Security Group များကို သင့်လျော်စွာ Configure ချပါ'],
      ['Explain a hybrid on-premises/cloud connection approach', 'Hybrid On-premises/Cloud ချိတ်ဆက်မှု ချဉ်းကပ်နည်းကို ရှင်းပြပါ'],
    ]),
    completionChecklist: list([
      ['Explain what a VPC is and how it relates to on-premises networking', 'VPC တစ်ခုဆိုသည်မှာ ဘာလဲနှင့် On-premises Networking နှင့် မည်သို့ ဆက်စပ်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Design public and private subnets appropriately', 'Public နှင့် Private Subnet များကို သင့်လျော်စွာ Design ဆွဲနိုင်သည်'],
      ['Use security groups to restrict access', 'Access ကန့်သတ်ရန် Security Group များ သုံးနိုင်သည်'],
      ['Explain options for connecting on-premises to cloud', 'On-premises ကို Cloud သို့ ချိတ်ဆက်ရန် ရွေးချယ်စရာများ ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-advanced-1': {
    whatItIs: t([
      'Advanced routing protocols cover the dynamic protocols (like OSPF or BGP, conceptually) that let large networks automatically find and adapt the best paths for traffic.',
      'Advanced Routing Protocol များသည် Network ကြီးများအား Traffic အတွက် အကောင်းဆုံး လမ်းကြောင်းများကို အလိုအလျောက် ရှာဖွေပြီး လိုက်လျောညီထွေ ဖြစ်စေသော Dynamic Protocol များ (OSPF, BGP ကဲ့သို့, Concept အရ) ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Static routing does not scale to large, complex networks — dynamic routing protocols are what let the internet itself, and large enterprise networks, adapt automatically to changes and failures.',
      'Static Routing သည် ကြီးမား၍ ရှုပ်ထွေးသော Network များသို့ Scale မတိုးချဲ့နိုင်ပါ — Dynamic Routing Protocol များသည် Internet ကိုယ်တိုင်နှင့် Enterprise Network ကြီးများအား ပြောင်းလဲမှုနှင့် Failure များသို့ အလိုအလျောက် လိုက်လျောညီထွေ ဖြစ်စေသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used at the core of large enterprise networks and throughout the internet\'s own routing infrastructure.',
      'Enterprise Network ကြီးများ၏ ကျောရိုးနှင့် Internet ကိုယ်ပိုင် Routing Infrastructure တစ်လျှောက်တွင် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'This builds directly on the routing and switching fundamentals from the Core stage.',
      'ဤအရာသည် Core အဆင့်မှ Routing နှင့် Switching Fundamental များအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Why dynamic routing protocols exist', 'Dynamic Routing Protocol များ ဘာကြောင့်ရှိသည်ကို'],
      ['Interior vs exterior routing protocols (conceptually, e.g. OSPF vs BGP)', 'Interior နှင့် Exterior Routing Protocol များ (Concept အရ, ဥပမာ OSPF vs BGP)'],
      ['How routers using a dynamic protocol adapt to a link failure', 'Dynamic Protocol သုံးသော Router များ Link Failure တစ်ခုသို့ မည်သို့ လိုက်လျောညီထွေ ဖြစ်သည်ကို'],
    ]),
    steps: [
      step(
        ['Understand why dynamic routing exists', 'Dynamic Routing ဘာကြောင့်ရှိသည်ကို နားလည်ခြင်း'],
        [
          ['Static routes cannot adapt automatically when a link fails', 'Static Route များသည် Link တစ်ခု Fail ဖြစ်သည့်အခါ အလိုအလျောက် လိုက်လျောညီထွေ မဖြစ်နိုင်ပါ'],
          ['Dynamic protocols let routers share information and recalculate paths automatically', 'Dynamic Protocol များက Router များအား သတင်းအချက်အလက်များ မျှဝေပြီး လမ်းကြောင်းများကို အလိုအလျောက် ပြန်တွက်ချက်စေသည်'],
        ],
        [
          ['Explain, conceptually, what would happen to traffic on a static-routed network versus a dynamically-routed one if a link between two routers failed', 'Router နှစ်ခုကြား Link တစ်ခု Fail ဖြစ်လျှင် Static-routed Network နှင့် Dynamically-routed Network တစ်ခုပေါ်ရှိ Traffic တွင် ဘာဖြစ်မည်ကို Concept အရ ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Distinguish interior and exterior routing protocols', 'Interior နှင့် Exterior Routing Protocol များ ခွဲခြားခြင်း'],
        [
          ['Interior protocols (like OSPF) route within one organization\'s network', 'Interior Protocol များ (OSPF ကဲ့သို့) သည် Organization တစ်ခု၏ Network အတွင်း Route ချသည်'],
          ['Exterior protocols (like BGP) route between different organizations/networks, including the internet backbone', 'Exterior Protocol များ (BGP ကဲ့သို့) သည် Internet Backbone အပါအဝင် Organization/Network မတူညီသည်များကြား Route ချသည်'],
        ],
        [
          ['Explain, at a conceptual level, why the internet as a whole needs a different kind of routing protocol than a single company\'s internal network', 'Internet တစ်ခုလုံးသည် ကုမ္ပဏီတစ်ခု၏ Internal Network ထက် Routing Protocol အမျိုးအစားမတူသည် ဘာကြောင့်လိုအပ်သည်ကို Concept အဆင့်တွင် ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Write a conceptual explanation document comparing static routing, an interior dynamic protocol, and an exterior dynamic protocol, with a real-world scenario where each would be the right choice.',
      'Static Routing, Interior Dynamic Protocol, Exterior Dynamic Protocol တို့ကို နှိုင်းယှဉ်သော Concept ရှင်းလင်းချက် Document တစ်ခု ရေးပါ — တစ်ခုစီ မှန်ကန်သော ရွေးချယ်မှုဖြစ်မည့် တကယ့်ဘဝ Scenario တစ်ခုနှင့်အတူ။',
    ]),
    verify: t([
      'Could you explain, without needing deep protocol-specific detail, why a network engineer would choose dynamic routing over static for a large network?',
      'Protocol-specific အသေးစိတ်အလွန် မလိုအပ်ဘဲ Network Engineer တစ်ဦး Network ကြီးတစ်ခုအတွက် Static အစား Dynamic Routing ကို ဘာကြောင့် ရွေးချယ်မည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Focus on understanding why each protocol type exists before memorizing protocol-specific configuration details.', 'Protocol-specific Configuration အသေးစိတ်များ အလွတ်ကျက်မှတ်မီ Protocol အမျိုးအစားတစ်ခုစီ ဘာကြောင့်ရှိသည်ကို နားလည်ရန် အာရုံစိုက်ပါ။'],
      ['Relate dynamic routing to something familiar: GPS rerouting around traffic is a similar concept.', 'Dynamic Routing ကို ရင်းနှီးသော အရာတစ်ခုနှင့် ဆက်စပ်ပါ — Traffic ပတ်လည် GPS ပြန် Route ချသည်မှာ ဆင်တူသော Concept တစ်ခု ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Trying to memorize protocol-specific configuration syntax before understanding the underlying concepts.', 'အောက်ခြေ Concept များကို နားမလည်မီ Protocol-specific Configuration Syntax ကို အလွတ်ကျက်မှတ်ရန် ကြိုးစားခြင်း။'],
      ['Confusing interior and exterior routing protocols and when each is used.', 'Interior နှင့် Exterior Routing Protocol များနှင့် တစ်ခုစီ ဘယ်အချိန်သုံးသည်ကို ရောထွေးခြင်း။'],
    ]),
    practiceTasks: tasks('networking-advanced-1', [
      ['Explain the difference between static and dynamic routing', 'Static နှင့် Dynamic Routing ကြား ကွာခြားချက် ရှင်းပြပါ'],
      ['Distinguish interior from exterior routing protocols', 'Interior ကို Exterior Routing Protocol နှင့် ခွဲခြားပါ'],
      ['Write a comparison document with real-world scenarios', 'တကယ့်ဘဝ Scenario များပါသော နှိုင်းယှဉ်ချက် Document တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain why dynamic routing protocols exist', 'Dynamic Routing Protocol များ ဘာကြောင့်ရှိသည်ကို ရှင်းပြနိုင်သည်'],
      ['Distinguish interior from exterior routing protocols', 'Interior ကို Exterior Routing Protocol နှင့် ခွဲခြားနိုင်သည်'],
      ['Explain how dynamic routing adapts to failures', 'Dynamic Routing သည် Failure များသို့ မည်သို့ လိုက်လျောညီထွေ ဖြစ်သည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-advanced-2': {
    whatItIs: t([
      'Network automation covers using scripts and tools to configure, manage, and monitor network devices programmatically instead of manually, device by device.',
      'Network Automation သည် Network Device များကို Device တစ်ခုချင်း Manual မလုပ်ဘဲ Programmatically Configure လုပ်ရန်၊ စီမံခန့်ခွဲရန်နှင့် Monitor လုပ်ရန် Script နှင့် Tool များ သုံးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Manually configuring dozens or hundreds of network devices is slow and error-prone — automation makes network management faster, more consistent, and less prone to human mistakes.',
      'Network Device ဆယ်နှင့်ချီ (သို့) ရာနှင့်ချီကို Manual Configure လုပ်ခြင်းသည် နှေးကွေး၍ အမှားလွယ်သည် — Automation က Network Management ကို ပိုမြန်၍ ပိုတသမတ်တည်း၊ လူ့အမှား ပိုနည်းစေသည်။',
    ]),
    whereUsed: t([
      'Increasingly standard at organizations with more than a handful of network devices to manage consistently.',
      'တသမတ်တည်း စီမံခန့်ခွဲရန် Network Device အနည်းငယ်ထက် ပိုသော အဖွဲ့အစည်းများတွင် တဖြည်းဖြည်း စံ ဖြစ်လာသည်။',
    ]),
    prerequisiteNote: t([
      'Benefits from basic scripting familiarity — the automation approach from the Software Engineering path applies here too.',
      'အခြေခံ Scripting ရင်းနှီးမှုမှ အကျိုးရရှိသည် — Software Engineering Path မှ Automation ချဉ်းကပ်နည်းသည် ဤနေရာတွင်လည်း အသုံးချသည်။',
    ]),
    firstSteps: list([
      ['Why network automation matters at scale', 'Scale တွင် Network Automation ဘာကြောင့် အရေးကြီးသလဲ'],
      ['Configuration as code (conceptually)', 'Configuration as Code (Concept အရ)'],
      ['Basic scripting for repetitive network tasks', 'ထပ်ခါထပ်ခါလုပ်ရသော Network Task များအတွက် အခြေခံ Scripting'],
      ['Version-controlling network configurations', 'Network Configuration များကို Version-control လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Understand the value of automating repetitive tasks', 'ထပ်ခါထပ်ခါလုပ်ရသော Task များကို Automate လုပ်ခြင်း၏ တန်ဖိုးကို နားလည်ခြင်း'],
        [
          ['Configuring the same setting across many devices manually is slow and inconsistent', 'Setting တူတူကို Device များစွာတစ်လျှောက် Manual Configure လုပ်ခြင်းသည် နှေးကွေး၍ တသမတ်မတည်ပါ'],
        ],
        [
          ['Describe a repetitive network configuration task and explain how automating it would reduce errors', 'ထပ်ခါထပ်ခါလုပ်ရသော Network Configuration Task တစ်ခုကို ဖော်ပြပြီး ၎င်းကို Automate လုပ်ခြင်းသည် Error များကို မည်သို့ လျှော့ချမည်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Apply configuration as code principles', 'Configuration as Code မူများ အသုံးချခြင်း'],
        [
          ['Storing network configurations in version control, the same way application code is managed', 'Application Code စီမံသည့်နည်းတူ Network Configuration များကို Version Control တွင် သိမ်းဆည်းခြင်း'],
        ],
        [
          ['Write a simple configuration file for a hypothetical device setting and explain how you would track changes to it over time', 'ယူဆချက်ရေး Device Setting တစ်ခုအတွက် Configuration File ရိုးရှင်းတစ်ခု ရေးပြီး အချိန်နှင့်အမျှ ၎င်း၏ ပြောင်းလဲမှုများကို မည်သို့ Track လုပ်မည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short proposal for automating one real, repetitive network administration task: what it currently requires manually, how it could be automated, and the expected benefit.',
      'တကယ့်၊ ထပ်ခါထပ်ခါလုပ်ရသော Network Administration Task တစ်ခုကို Automate လုပ်ရန် Proposal တိုတောင်းတစ်ခု ရေးပါ — လက်ရှိ Manual လိုအပ်ချက်, Automate လုပ်နိုင်ပုံနှင့် မျှော်လင့်ထားသော အကျိုးကျေးဇူး။',
    ]),
    verify: t([
      'Could you explain, to a network administrator resistant to change, why automating a repetitive task would benefit them specifically?',
      'ပြောင်းလဲမှုကို ခုခံသော Network Administrator တစ်ဦးအား ထပ်ခါထပ်ခါလုပ်ရသော Task တစ်ခုကို Automate လုပ်ခြင်းသည် ၎င်းတို့ကို သီးခြားအားဖြင့် မည်သို့ အကျိုးရှိစေသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start automating the most repetitive, error-prone task first — it delivers the clearest win.', 'ထပ်ခါထပ်ခါ အများဆုံးလုပ်ရ၍ အမှားအများဆုံး ဖြစ်တတ်သော Task ကို ဦးစွာ Automate လုပ်ပါ — ၎င်းက အရှင်းလင်းဆုံး အောင်မြင်မှု ပေးသည်။'],
      ['Track configuration changes over time just like code — it makes rollback and auditing possible.', 'Configuration ပြောင်းလဲမှုများကို Code ကဲ့သို့ အချိန်နှင့်အမျှ Track လုပ်ပါ — ၎င်းက Rollback နှင့် Auditing ကို ဖြစ်နိုင်စေသည်။'],
    ]),
    commonMistakes: list([
      ['Trying to automate everything at once instead of starting with one high-value task.', 'တန်ဖိုးအရှိဆုံး Task တစ်ခုနှင့် စတင်မည့်အစား အားလုံးကို တစ်ပြိုင်နက် Automate လုပ်ရန် ကြိုးစားခြင်း။'],
      ['Not version-controlling configuration changes, making it hard to know what changed and when.', 'Configuration ပြောင်းလဲမှုများကို Version-control မလုပ်ခြင်းက ဘာပြောင်းလဲသည်နှင့် ဘယ်အချိန် ဆိုသည်ကို သိရန် ခက်ခဲစေသည်။'],
    ]),
    practiceTasks: tasks('networking-advanced-2', [
      ['Identify a repetitive network task worth automating', 'Automate လုပ်ထိုက်သော ထပ်ခါထပ်ခါလုပ်ရသော Network Task တစ်ခု ဖော်ထုတ်ပါ'],
      ['Write a sample configuration file', 'Sample Configuration File တစ်ခု ရေးပါ'],
      ['Write an automation proposal', 'Automation Proposal တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Explain the value of network automation', 'Network Automation ၏ တန်ဖိုးကို ရှင်းပြနိုင်သည်'],
      ['Understand configuration as code conceptually', 'Configuration as Code ကို Concept အရ နားလည်သည်'],
      ['Identify tasks worth automating', 'Automate လုပ်ထိုက်သော Task များ ဖော်ထုတ်နိုင်သည်'],
      ['Propose an automation approach with expected benefits', 'မျှော်လင့်ထားသော အကျိုးကျေးဇူးများပါသော Automation ချဉ်းကပ်နည်း အကြံပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-advanced-3': {
    whatItIs: t([
      'Enterprise network architecture covers designing networks at the scale of a large organization — multiple sites, redundant paths, and layered security zones.',
      'Enterprise Network Architecture သည် အဖွဲ့အစည်းကြီးတစ်ခု၏ Scale တွင် Network များ Design ဆွဲခြင်းကို လွှမ်းခြုံသည် — Site များစွာ, Redundant Path များနှင့် Layered Security Zone များ။',
    ]),
    whyItMatters: t([
      'Enterprise-scale networks have requirements — high availability, multiple locations, strict security zoning — that small office designs do not need to consider.',
      'Enterprise-scale Network များတွင် Office သေးငယ် Design များ စဉ်းစားရန် မလိုအပ်သော လိုအပ်ချက်များ — High Availability, Location များစွာ, တင်းကျပ်သော Security Zoning — ရှိသည်။',
    ]),
    whereUsed: t([
      'Central to senior network architect roles at large companies, hospitals, universities, and other large organizations.',
      'ကုမ္ပဏီကြီးများ, Hospital, University နှင့် အခြား အဖွဲ့အစည်းကြီးများရှိ Senior Network Architect Role များ၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on network design, security, cloud networking, and automation from earlier topics.',
      'ဤသည်မှာ ယခင် Topic များမှ Network Design, Security, Cloud Networking, Automation ကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Multi-site network design', 'Multi-site Network Design'],
      ['High availability and redundancy at scale', 'Scale တွင် High Availability နှင့် Redundancy'],
      ['Security zoning (DMZ, internal, restricted zones)', 'Security Zoning (DMZ, Internal, Restricted Zone များ)'],
      ['Balancing complexity with maintainability', 'ရှုပ်ထွေးမှုကို Maintainability နှင့် ချိန်ညှိခြင်း'],
    ]),
    steps: [
      step(
        ['Design for multiple sites and high availability', 'Site များစွာနှင့် High Availability အတွက် Design ဆွဲခြင်း'],
        [
          ['Connecting multiple office locations reliably', 'Office Location များစွာကို ယုံကြည်စိတ်ချစွာ ချိတ်ဆက်ခြင်း'],
          ['Building in redundant paths so a single failure does not take down connectivity', 'Failure တစ်ခုတည်းက Connectivity ကို ပြုတ်ကျမသွားစေရန် Redundant Path များ တည်ဆောက်ခြင်း'],
        ],
        [
          ['Design a network connecting three office locations with at least one redundant path between key sites', 'Office Location သုံးခုကို ချိတ်ဆက်သော Network Design ဆွဲပါ — အဓိက Site များကြား Redundant Path အနည်းဆုံးတစ်ခုပါဝင်ပြီး'],
        ],
      ),
      step(
        ['Apply security zoning at enterprise scale', 'Enterprise Scale တွင် Security Zoning အသုံးချခြင်း'],
        [
          ['A DMZ isolates internet-facing services from the internal network', 'DMZ တစ်ခုသည် Internet-facing Service များကို Internal Network မှ ခွဲထုတ်ပေးသည်'],
          ['Different security zones for different sensitivity levels of data/systems', 'Data/System Sensitivity Level မတူညီသည်များအတွက် Security Zone မတူညီများ'],
        ],
        [
          ['Add security zones to your multi-site design: a DMZ for public-facing services, an internal zone, and a restricted zone for the most sensitive systems', 'သင့် Multi-site Design သို့ Security Zone များ ထည့်ပါ — Public-facing Service များအတွက် DMZ, Internal Zone, အရေးအကြီးဆုံး System များအတွက် Restricted Zone'],
        ],
      ),
    ],
    build: t([
      'Design a complete enterprise network architecture for a mid-size organization with three office locations: multi-site connectivity with redundancy, security zoning (DMZ, internal, restricted), and a short document explaining the key design decisions.',
      'Office Location သုံးခုပါသော Mid-size အဖွဲ့အစည်းတစ်ခုအတွက် Enterprise Network Architecture အပြည့်အစုံ Design ဆွဲပါ — Redundancy ပါသော Multi-site Connectivity, Security Zoning (DMZ, Internal, Restricted) နှင့် အဓိက Design ဆုံးဖြတ်ချက်များ ရှင်းပြသော Document တိုတောင်းတစ်ခု။',
    ]),
    verify: t([
      'Could you explain why a large organization needs a fundamentally more complex network design than a single small office?',
      'အဖွဲ့အစည်းကြီးတစ်ခုသည် Office သေးငယ်တစ်ခုတည်းထက် အခြေခံအားဖြင့် ပိုရှုပ်ထွေးသော Network Design လိုအပ်သည်ကို ဘာကြောင့်ဆိုသည် ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Balance complexity against maintainability — the most sophisticated design is not always the best choice.', 'ရှုပ်ထွေးမှုကို Maintainability နှင့် ချိန်ညှိပါ — Design ရှုပ်ထွေးဆုံးသည် အမြဲ အကောင်းဆုံး ရွေးချယ်မှု မဟုတ်ပါ။'],
      ['Always identify and eliminate single points of failure in enterprise designs.', 'Enterprise Design များတွင် Single Point of Failure များကို အမြဲ ဖော်ထုတ်ပြီး ဖယ်ရှားပါ။'],
    ]),
    commonMistakes: list([
      ['Designing enterprise networks with a single point of failure at a critical junction.', 'အရေးကြီးသော Junction တွင် Single Point of Failure ပါသော Enterprise Network များ Design ဆွဲခြင်း။'],
      ['Over-engineering a design with unnecessary complexity that becomes hard to maintain.', 'ထိန်းသိမ်းရန် ခက်ခဲလာသော မလိုအပ်သော ရှုပ်ထွေးမှုဖြင့် Design တစ်ခုကို Over-engineer လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('networking-advanced-3', [
      ['Design a multi-site network with redundancy', 'Redundancy ပါသော Multi-site Network Design ဆွဲပါ'],
      ['Add security zoning (DMZ, internal, restricted)', 'Security Zoning ထည့်ပါ (DMZ, Internal, Restricted)'],
      ['Write a design decisions document', 'Design ဆုံးဖြတ်ချက်များ Document တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Design multi-site network connectivity', 'Multi-site Network Connectivity Design ဆွဲနိုင်သည်'],
      ['Apply redundancy to eliminate single points of failure', 'Single Point of Failure များ ဖယ်ရှားရန် Redundancy အသုံးချနိုင်သည်'],
      ['Apply security zoning at scale', 'Scale တွင် Security Zoning အသုံးချနိုင်သည်'],
      ['Document enterprise design decisions clearly', 'Enterprise Design ဆုံးဖြတ်ချက်များကို ရှင်းလင်းစွာ မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'networking-advanced-4': {
    whatItIs: t([
      'Network certification concepts cover the knowledge areas tested by industry-recognized networking certifications, consolidating and validating everything learned so far.',
      'Network Certification Concept များသည် စက်မှုလုပ်ငန်း အသိအမှတ်ပြု Networking Certification များ Test လုပ်သော အသိပညာ နယ်ပယ်များကို လွှမ်းခြုံပြီး ယခုအထိ လေ့လာထားသမျှကို စုစည်း၍ အတည်ပြုပေးသည်။',
    ]),
    whyItMatters: t([
      'Industry certifications are a widely recognized way to validate networking knowledge to employers, and preparing for one is a good forcing function to consolidate everything learned.',
      'Industry Certification များသည် Networking အသိပညာကို Employer များအား အတည်ပြုရန် ကျယ်ပြန့်စွာ အသိအမှတ်ပြုထားသော နည်းလမ်းတစ်ခု ဖြစ်ပြီး ၎င်းအတွက် ပြင်ဆင်ခြင်းသည် လေ့လာထားသမျှ အားလုံးကို စုစည်းရန် ကောင်းသော Forcing Function တစ်ခု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Referenced throughout networking job postings and career paths as a recognized credential of competence.',
      'Networking Job Posting နှင့် Career Path တစ်လျှောက် ကျွမ်းကျင်မှု၏ အသိအမှတ်ပြု Credential တစ်ခုအဖြစ် ရည်ညွှန်းသည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone review topic drawing on everything covered throughout the Networking path.',
      'ဤသည်မှာ Networking Path တစ်လျှောက် လွှမ်းခြုံခဲ့သမျှ အားလုံးကို အသုံးချသော Capstone Review Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['What entry-level networking certifications typically cover', 'Entry-level Networking Certification များ ပုံမှန် ဘာလွှမ်းခြုံသည်ကို'],
      ['Identifying your own knowledge gaps', 'ကိုယ်ပိုင် အသိပညာ Gap များ ဖော်ထုတ်ခြင်း'],
      ['Building a study/review plan', 'Study/Review Plan တစ်ခု တည်ဆောက်ခြင်း'],
    ]),
    steps: [
      step(
        ['Review your knowledge across the full path', 'Path အပြည့်အစုံတစ်လျှောက် သင့် အသိပညာကို Review လုပ်ခြင်း'],
        [
          ['Certification exams typically cover fundamentals, addressing, routing/switching, security, and troubleshooting together', 'Certification Exam များသည် ပုံမှန်အားဖြင့် Fundamentals, Addressing, Routing/Switching, Security, Troubleshooting တို့ကို အတူတကွ လွှမ်းခြုံသည်'],
        ],
        [
          ['Create a self-assessment checklist covering every topic in this path and honestly rate your confidence in each', 'ဤ Path ရှိ Topic တိုင်းကို လွှမ်းခြုံသော Self-assessment Checklist တစ်ခု ဖန်တီးပြီး တစ်ခုစီအတွက် သင့်ယုံကြည်မှုကို ရိုးသားစွာ Rate ပေးပါ'],
        ],
      ),
      step(
        ['Build a targeted review plan', 'ရည်ညွှန်းထားသော Review Plan တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Focusing study time on your weakest areas rather than re-studying what you already know well', 'ကောင်းစွာ သိပြီးသားကို ပြန်မလေ့လာဘဲ Study အချိန်ကို သင့်အားနည်းဆုံး နေရာများတွင် အာရုံစိုက်ခြင်း'],
        ],
        [
          ['Based on your self-assessment, write a two-week review plan prioritizing your weakest topics', 'သင့် Self-assessment အပေါ် အခြေခံ၍ သင့်အားနည်းဆုံး Topic များကို ဦးစားပေးသော နှစ်ပတ် Review Plan တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Create a complete self-assessment across every topic in this Networking path, identify your three weakest areas, and write a focused review plan to address them.',
      'ဤ Networking Path ရှိ Topic တိုင်းတစ်လျှောက် Self-assessment အပြည့်အစုံ ဖန်တီးပါ၊ သင့်အားနည်းဆုံး နေရာသုံးခု ဖော်ထုတ်ပါ၊ ၎င်းတို့ကို ဖြေရှင်းရန် အာရုံစိုက်ထားသော Review Plan တစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Could you honestly identify your three weakest topics from this entire path and explain specifically what you would study to improve them?',
      'ဤ Path တစ်ခုလုံးမှ သင့်အားနည်းဆုံး Topic သုံးခုကို ရိုးသားစွာ ဖော်ထုတ်ပြီး ၎င်းတို့ကို တိုးတက်စေရန် ဘာကို Study လုပ်မည်ကို တိကျစွာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Be honest in your self-assessment — overestimating your knowledge undermines the whole point of review.', 'Self-assessment တွင် ရိုးသားပါ — သင့်အသိပညာကို လွန်ကဲစွာ ခန့်မှန်းခြင်းက Review ၏ ရည်ရွယ်ချက်ကို ထိခိုက်စေသည်။'],
      ['Revisit hands-on practice, not just theory — certification exams often test applied knowledge.', 'သီအိုရီတစ်ခုတည်းမကဘဲ Hands-on Practice ကို ပြန်ကြည့်ပါ — Certification Exam များသည် Applied Knowledge ကို မကြာခဏ Test လုပ်သည်။'],
    ]),
    commonMistakes: list([
      ['Overestimating confidence in areas only studied theoretically, never practiced hands-on.', 'သီအိုရီအရသာ လေ့လာပြီး Hands-on ဘယ်တော့မှ လေ့ကျင့်ခြင်းမရှိသော နေရာများတွင် ယုံကြည်မှုကို လွန်ကဲစွာ ခန့်မှန်းခြင်း။'],
      ['Reviewing only the topics that are already comfortable instead of the genuinely weak ones.', 'တကယ့် အားနည်းသော Topic များအစား ရင်းနှီးပြီးသား Topic များကိုသာ Review လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('networking-advanced-4', [
      ['Create a self-assessment checklist across the full path', 'Path အပြည့်အစုံတစ်လျှောက် Self-assessment Checklist တစ်ခု ဖန်တီးပါ'],
      ['Identify your three weakest topics honestly', 'သင့်အားနည်းဆုံး Topic သုံးခုကို ရိုးသားစွာ ဖော်ထုတ်ပါ'],
      ['Write a focused two-week review plan', 'အာရုံစိုက်ထားသော နှစ်ပတ် Review Plan တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Self-assess knowledge across the full networking path', 'Networking Path အပြည့်အစုံတစ်လျှောက် ကိုယ်ပိုင် အသိပညာကို Self-assess လုပ်နိုင်သည်'],
      ['Identify genuine knowledge gaps honestly', 'တကယ့် အသိပညာ Gap များကို ရိုးသားစွာ ဖော်ထုတ်နိုင်သည်'],
      ['Build a targeted, prioritized review plan', 'ရည်ညွှန်း၍ ဦးစားပေးထားသော Review Plan တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },
}
