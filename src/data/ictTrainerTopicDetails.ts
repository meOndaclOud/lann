import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every ICT Trainer / Educator topic (see
 * roadmaps.ts's Phase 6 Update wiring). resources are intentionally empty on
 * every topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate
 * a resource" policy this follows.
 */
export const ictTrainerTopicDetails: Record<string, TopicDetail> = {
  'ict-trainer-beginner-1': {
    whatItIs: t([
      'Understanding your learners means figuring out who you are actually teaching — their background, prior experience, and what they hope to get out of learning.',
      'Learner များကို နားလည်ခြင်းဆိုသည်မှာ သင်ကြားနေသူများ တကယ်ဘယ်သူများလဲ — ၎င်းတို့၏ နောက်ခံ, ယခင်အတွေ့အကြုံနှင့် လေ့လာမှုမှ ဘာရလိုသည်ကို ရှာဖွေဖော်ထုတ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'The exact same lesson lands completely differently depending on who is in the room — teaching without understanding your learners is guessing.',
      'သင်ခန်းစာတူတူပင် အခန်းထဲရှိ မည်သူရှိသည်ပေါ် မူတည်၍ လုံးဝ ကွဲပြားစွာ ရောက်ရှိသည် — သင့်ကိုယ်ပိုင် Learner များကို နားမလည်ဘဲ သင်ကြားခြင်းသည် ခန့်မှန်းခြင်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The starting point of every good teaching interaction, whether a single mentoring conversation or a full training course.',
      'Mentoring စကားပြောဆိုမှု တစ်ခုတည်းဖြစ်စေ Training Course အပြည့်အစုံဖြစ်စေ သင်ကြားရေး Interaction ကောင်းတိုင်း၏ စတင်ရာနေရာ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Asking about prior experience', 'ယခင်အတွေ့အကြုံအကြောင်း မေးမြန်းခြင်း'],
      ['Identifying learning goals', 'လေ့လာမှု ရည်မှန်းချက်များ ဖော်ထုတ်ခြင်း'],
      ['Recognizing different comfort levels with technology', 'နည်းပညာနှင့် Comfort Level မတူညီများ ဖော်ထုတ်ခြင်း'],
      ['Adjusting expectations based on who you are teaching', 'သင်ကြားနေသူပေါ် မူတည်၍ မျှော်လင့်ချက်များ ချိန်ညှိခြင်း'],
    ]),
    steps: [
      step(
        ['Ask the right questions before teaching', 'သင်ကြားခြင်းမပြုမီ မှန်ကန်သော မေးခွန်းများ မေးခြင်း'],
        [
          ['Asking about prior experience reveals what you can assume versus what needs explaining', 'ယခင်အတွေ့အကြုံအကြောင်း မေးခြင်းသည် ယူဆနိုင်သည်နှင့် ရှင်းပြရမည်ကို ဖော်ထုတ်ပေးသည်'],
          ['Asking about goals reveals what actually matters to this learner', 'ရည်မှန်းချက်များအကြောင်း မေးခြင်းသည် ဤ Learner နှင့် တကယ်သက်ဆိုင်သည်ကို ဖော်ထုတ်ပေးသည်'],
        ],
        [
          ['Interview one real person (a friend, family member, or classmate) about their technology background and what they would want to learn', 'တကယ့်လူတစ်ဦး (သူငယ်ချင်း၊ မိသားစုဝင် သို့ အတန်းဖော်) ကို ၎င်းတို့၏ နည်းပညာ နောက်ခံနှင့် ဘာလေ့လာချင်သည်ကို Interview လုပ်ပါ'],
        ],
      ),
      step(
        ['Adjust your approach to different comfort levels', 'Comfort Level မတူညီများသို့ သင့်ချဉ်းကပ်နည်းကို ချိန်ညှိခြင်း'],
        [
          ['A complete beginner and someone with prior exposure need very different starting points', 'အစပြုသူ အပြည့်အစုံနှင့် ယခင်ထိတွေ့ဖူးသူတစ်ဦးသည် အလွန်ကွဲပြားသော စတင်ရာချက်များ လိုအပ်သည်'],
        ],
        [
          ['Given two different learner profiles (a total beginner and someone with some experience), outline how you would introduce the same topic differently to each', 'Learner Profile မတူညီနှစ်ခု (အစပြုသူ အပြည့်အစုံနှင့် အတွေ့အကြုံအနည်းငယ်ရှိသူ) ပေးလိုက်လျှင် ခေါင်းစဉ်တူတူကို တစ်ဦးစီအား မတူညီစွာ မည်သို့ မိတ်ဆက်မည်ကို ရေးဆွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Interview two people with different technology backgrounds about what they would want to learn, and write a short comparison of how you would approach teaching each of them.',
      'နည်းပညာနောက်ခံ မတူညီသော လူနှစ်ဦးကို ၎င်းတို့ ဘာလေ့လာချင်သည်ကို Interview လုပ်ပါ၊ တစ်ဦးစီကို သင်ကြားရာတွင် သင် မည်သို့ ချဉ်းကပ်မည်ကို နှိုင်းယှဉ်ချက် တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Before teaching a new group, could you list at least three questions you would ask to understand who you are actually teaching?',
      'အဖွဲ့အသစ်တစ်ဖွဲ့ကို သင်ကြားမီ သင်ကြားနေသူ တကယ်ဘယ်သူများဆိုသည်ကို နားလည်ရန် မေးမည့် မေးခွန်း အနည်းဆုံးသုံးခု စာရင်းပြုစုနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Never assume everyone in a room has the same background — always check first.', 'အခန်းထဲရှိ လူတိုင်းသည် နောက်ခံတူသည်ဟု ဘယ်တော့မှ မယူဆပါနှင့် — အမြဲ ဦးစွာ စစ်ဆေးပါ။'],
      ['A learner\'s goal often matters more than a fixed curriculum — be willing to adjust.', 'Learner တစ်ဦး၏ ရည်မှန်းချက်သည် သတ်မှတ်ထားသော Curriculum တစ်ခုထက် မကြာခဏ ပိုအရေးကြီးသည် — ချိန်ညှိရန် အသင့်ရှိပါ။'],
    ]),
    commonMistakes: list([
      ['Assuming every learner has the same background and starting point.', 'Learner တိုင်းသည် နောက်ခံနှင့် စတင်ရာချက်တူသည်ဟု ယူဆခြင်း။'],
      ['Never asking what a learner actually wants to achieve.', 'Learner တစ်ဦး တကယ်ဘာအောင်မြင်ချင်သည်ကို ဘယ်တော့မှ မမေးခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-beginner-1', [
      ['Interview someone about their technology background', 'တစ်စုံတစ်ဦးကို ၎င်းတို့၏ နည်းပညာ နောက်ခံအကြောင်း Interview လုပ်ပါ'],
      ['Identify a learner\'s specific goals', 'Learner တစ်ဦး၏ သီးခြား ရည်မှန်းချက်များ ဖော်ထုတ်ပါ'],
      ['Plan two different approaches for two different learner profiles', 'Learner Profile မတူညီနှစ်ခုအတွက် ချဉ်းကပ်နည်းမတူညီနှစ်ခု စီစဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Ask effective questions to understand a learner', 'Learner တစ်ဦးကို နားလည်ရန် ထိရောက်သော မေးခွန်းများ မေးနိုင်သည်'],
      ['Identify a learner\'s goals and comfort level', 'Learner တစ်ဦး၏ ရည်မှန်းချက်များနှင့် Comfort Level ဖော်ထုတ်နိုင်သည်'],
      ['Adjust a teaching approach based on the learner', 'Learner အပေါ် အခြေခံ၍ သင်ကြားရေး ချဉ်းကပ်နည်းကို ချိန်ညှိနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-beginner-2': {
    whatItIs: t([
      'Core technology literacy for trainers covers having a broad, practical understanding of common technology concepts — enough to teach and answer questions confidently.',
      'Trainer များအတွက် Core Technology Literacy သည် အများသုံး နည်းပညာ Concept များအကြောင်း ကျယ်ပြန့်၍ လက်တွေ့ကျသော နားလည်မှု ရှိခြင်းကို လွှမ်းခြုံသည် — ယုံကြည်စိတ်ချစွာ သင်ကြားပြီး မေးခွန်းများ ဖြေဆိုနိုင်လောက်အောင်။',
    ]),
    whyItMatters: t([
      'A trainer does not need to be the deepest technical expert, but shaky fundamentals undermine learner trust quickly.',
      'Trainer တစ်ဦးသည် Technical Expert အနက်ရှိုင်းဆုံး ဖြစ်ရန် မလိုအပ်ပါ — သို့သော် လှုပ်ရှားနေသော Fundamental များသည် Learner ယုံကြည်မှုကို လျင်မြန်စွာ ထိခိုက်စေသည်။',
    ]),
    whereUsed: t([
      'Applied in every training session, question-and-answer moment, and piece of content a trainer creates.',
      'Training Session, Question-and-answer အခိုက်အတန့်နှင့် Trainer တစ်ဦး ဖန်တီးသော Content တိုင်းတွင် အသုံးချသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['How computers, the internet, and common software fit together', 'Computer, Internet, အများသုံး Software တို့ မည်သို့ ဆက်စပ်သည်ကို'],
      ['Common technology terms learners will encounter', 'Learner များ ကြုံတွေ့ရမည့် အများသုံး နည်းပညာ အသုံးအနှုန်းများ'],
      ['Knowing what you do not know, and how to find out', 'သင်မသိသည်ကို သိခြင်းနှင့် မည်သို့ ရှာဖွေရမည်ကို'],
    ]),
    steps: [
      step(
        ['Build a working mental model of how technology fits together', 'နည်းပညာ မည်သို့ ဆက်စပ်သည်ကို အလုပ်လုပ်သော Mental Model တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Explaining, at a high level, how a device, the internet, and an app relate to each other', 'Device, Internet, App တို့ အချင်းချင်း မည်သို့ ဆက်စပ်သည်ကို အဆင့်မြင့် ရှင်းပြခြင်း'],
        ],
        [
          ['Write a simple, one-paragraph explanation (suitable for a beginner) of how opening a website actually works', 'Website တစ်ခု ဖွင့်ခြင်းသည် တကယ်မည်သို့ အလုပ်လုပ်သည်ကို (Beginner အတွက် သင့်တော်သော) စာပိုဒ်တစ်ပိုဒ် ရိုးရှင်းသော ရှင်းလင်းချက် ရေးပါ'],
        ],
      ),
      step(
        ['Practice honestly handling questions you don\'t know', 'မသိသော မေးခွန်းများကို ရိုးသားစွာ ကိုင်တွယ်ရန် လေ့ကျင့်ခြင်း'],
        [
          ['Saying "I don\'t know, let\'s find out together" builds more trust than guessing', '"မသိပါ၊ အတူတကွ ရှာကြည့်ကြရအောင်" ဟု ပြောခြင်းသည် ခန့်မှန်းခြင်းထက် ယုံကြည်မှု ပိုတည်ဆောက်ပေးသည်'],
        ],
        [
          ['Write down how you would respond if a learner asked a question you genuinely did not know the answer to', 'Learner တစ်ဦးက သင်တကယ် အဖြေမသိသော မေးခွန်းတစ်ခု မေးလျှင် မည်သို့ တုံ့ပြန်မည်ကို ရေးထားပါ'],
        ],
      ),
    ],
    build: t([
      'Write three simple, beginner-friendly explanations of common technology concepts (e.g. what the internet is, what an app is, what a file is) in your own words.',
      'အများသုံး နည်းပညာ Concept များ (ဥပမာ Internet ဆိုတာဘာလဲ, App ဆိုတာဘာလဲ, File ဆိုတာဘာလဲ) ၏ Beginner-friendly ရှင်းလင်းချက် ရိုးရှင်းသုံးခုကို ကိုယ်ပိုင်စကားလုံးများဖြင့် ရေးပါ။',
    ]),
    verify: t([
      'Could you explain, to a complete beginner, what the internet actually is without using any jargon?',
      'Beginner အပြည့်အစုံတစ်ဦးအား Jargon မသုံးဘဲ Internet ဆိုတာ တကယ်ဘာလဲကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Practice explaining basic concepts to a non-technical friend or family member — their confusion shows you exactly where your explanation needs work.', 'Technical မဟုတ်သော သူငယ်ချင်း (သို့) မိသားစုဝင်တစ်ဦးအား အခြေခံ Concept များ ရှင်းပြရန် လေ့ကျင့်ပါ — ၎င်းတို့၏ ရှုပ်ထွေးမှုက သင့် ရှင်းလင်းချက် ဘယ်နေရာတွင် အလုပ်လုပ်ရန် လိုအပ်သည်ကို အတိအကျ ပြသည်။'],
      ['It is always okay to say "I don\'t know" — pretending to know something is far worse for trust.', '"မသိပါ" ဟု ပြောခြင်းသည် အမြဲ ကောင်းပါသည် — တစ်ခုခုကို သိသလိုဟန်ဆောင်ခြင်းသည် ယုံကြည်မှုအတွက် အများကြီး ပိုဆိုးသည်။'],
    ]),
    commonMistakes: list([
      ['Using heavy jargon when explaining a concept to a beginner.', 'Beginner တစ်ဦးအား Concept တစ်ခု ရှင်းပြသည့်အခါ Jargon လေးများ သုံးခြင်း။'],
      ['Guessing at an answer instead of honestly saying you are not sure.', 'သေချာမှုမရှိကြောင်း ရိုးသားစွာ ပြောမည့်အစား အဖြေတစ်ခုကို ခန့်မှန်းခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-beginner-2', [
      ['Write a beginner-friendly explanation of how the internet works', 'Internet အလုပ်လုပ်ပုံ၏ Beginner-friendly ရှင်းလင်းချက် ရေးပါ'],
      ['Explain a technology concept to a non-technical person', 'Technical မဟုတ်သူတစ်ဦးအား နည်းပညာ Concept တစ်ခု ရှင်းပြပါ'],
      ['Plan how to respond to a question you do not know', 'သင်မသိသော မေးခွန်းတစ်ခုကို မည်သို့ တုံ့ပြန်မည်ကို စီစဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain core technology concepts in plain language', 'Core Technology Concept များကို ရိုးရှင်းသော ဘာသာစကားဖြင့် ရှင်းပြနိုင်သည်'],
      ['Avoid unnecessary jargon when teaching beginners', 'Beginner များကို သင်ကြားသည့်အခါ မလိုအပ်သော Jargon ရှောင်ရှားနိုင်သည်'],
      ['Handle not knowing an answer honestly', 'အဖြေမသိခြင်းကို ရိုးသားစွာ ကိုင်တွယ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-beginner-3': {
    whatItIs: t([
      'Basic lesson planning is structuring what you will teach, in what order, and how, before you actually stand in front of learners.',
      'Basic Lesson Planning ဆိုသည်မှာ Learner များရှေ့တွင် တကယ် မရပ်မီ ဘာသင်ကြားမည်၊ ဘယ်အစီအစဉ်နှင့် မည်သို့ ဆိုသည်ကို ဖွဲ့စည်းခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Teaching without a plan tends to wander, skip important steps, or run out of time — a simple plan keeps a session focused and effective.',
      'Plan မရှိဘဲ သင်ကြားခြင်းသည် လမ်းလွဲတတ်ပြီး၊ အရေးကြီးသော အဆင့်များ ကျော်တတ်၊ (သို့) အချိန်ကုန်တတ်သည် — Plan ရိုးရှင်းတစ်ခုသည် Session တစ်ခုကို အာရုံစိုက်၍ ထိရောက်စေသည်။',
    ]),
    whereUsed: t([
      'Used before every effective class, workshop, or training session, no matter how short.',
      'ဘယ်လောက်တိုတောင်သည့်တိုင် Class, Workshop (သို့) Training Session ထိရောက်သည့်တိုင်း၏ မတိုင်မီ သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Setting a clear, specific learning objective', 'ရှင်းလင်း၍ တိကျသော Learning Objective သတ်မှတ်ခြင်း'],
      ['Breaking a topic into a logical sequence', 'ခေါင်းစဉ်တစ်ခုကို ယုတ္တိကျသော အစီအစဉ်အဖြစ် ခွဲထုတ်ခြင်း'],
      ['Planning time for practice, not just explanation', 'ရှင်းလင်းချက်တစ်ခုတည်းမကဘဲ Practice အတွက် အချိန်စီစဉ်ခြင်း'],
      ['Planning a simple check for understanding', 'နားလည်မှုအတွက် Check ရိုးရှင်းတစ်ခု စီစဉ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Set a clear learning objective', 'ရှင်းလင်းသော Learning Objective သတ်မှတ်ခြင်း'],
        [
          ['A good objective is specific and observable — "learners can create a file and folder" beats "learners understand files"', 'Objective ကောင်းတစ်ခုသည် တိကျ၍ တွေ့မြင်နိုင်သည် — "Learner များ File နှင့် Folder ဖန်တီးနိုင်သည်" သည် "Learner များ File များ နားလည်သည်" ထက် ပိုကောင်းသည်'],
        ],
        [
          ['Write a specific, observable learning objective for a 20-minute lesson on a topic of your choice', 'သင်ရွေးချယ်သော ခေါင်းစဉ်တစ်ခုအတွက် ၂၀ မိနစ် သင်ခန်းစာအတွက် တိကျ၍ တွေ့မြင်နိုင်သော Learning Objective တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Structure a session with time for practice', 'Practice အတွက် အချိန်ပါသော Session တစ်ခု ဖွဲ့စည်းခြင်း'],
        [
          ['Splitting a session into explanation, guided practice, and independent practice', 'Session တစ်ခုကို ရှင်းလင်းချက်, လမ်းညွှန်ထားသော Practice, သီးခြား Practice အဖြစ် ခွဲခြင်း'],
        ],
        [
          ['Plan a simple 20-minute lesson outline with time allocated for explanation, guided practice, and a quick check for understanding', 'ရှင်းလင်းချက်, လမ်းညွှန်ထားသော Practice, နားလည်မှုအတွက် Check လျင်မြန်တစ်ခုအတွက် အချိန် ခွဲဝေထားသော ၂၀ မိနစ် သင်ခန်းစာ Outline ရိုးရှင်းတစ်ခု စီစဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write a complete 20-30 minute lesson plan for teaching one specific, beginner-friendly technology skill: objective, sequence, practice time, and a way to check understanding.',
      'Beginner-friendly နည်းပညာ ကျွမ်းကျင်မှု သီးခြားတစ်ခု သင်ကြားရန် ၂၀-၃၀ မိနစ် Lesson Plan အပြည့်အစုံ ရေးပါ — Objective, Sequence, Practice အချိန်နှင့် နားလည်မှု Check လုပ်ရန်နည်းလမ်း။',
    ]),
    verify: t([
      'Could you explain, for your lesson plan, exactly how you would know by the end whether learners actually achieved the objective?',
      'သင့် Lesson Plan အတွက် အဆုံးတွင် Learner များ Objective ကို တကယ် အောင်မြင်ခဲ့ကြောင်း မည်သို့ သိနိုင်မည်ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always build in more practice time than you think you need — learners usually take longer than expected.', 'သင်လိုအပ်သည်ဟု ထင်ထားသည်ထက် Practice အချိန် ပိုထည့်ပါ — Learner များသည် ပုံမှန် မျှော်လင့်ထားသည်ထက် ပိုကြာလေ့ရှိသည်။'],
      ['A specific, observable objective makes it much easier to know if a lesson actually worked.', 'တိကျ၍ တွေ့မြင်နိုင်သော Objective တစ်ခုသည် သင်ခန်းစာတစ်ခု တကယ် အလုပ်ဖြစ်ခဲ့ကြောင်း သိရန် အများကြီး ပိုလွယ်ကူစေသည်။'],
    ]),
    commonMistakes: list([
      ['Planning a lesson that is all explanation with no hands-on practice time.', 'Hands-on Practice အချိန် လုံးဝမပါဘဲ ရှင်းလင်းချက်တစ်ခုတည်း ပါသော သင်ခန်းစာ စီစဉ်ခြင်း။'],
      ['Setting a vague objective that makes it impossible to tell whether the lesson succeeded.', 'သင်ခန်းစာ အောင်မြင်သည်/မအောင်မြင်သည် ပြောနိုင်ရန် မဖြစ်နိုင်စေသော မရှင်းလင်းသော Objective သတ်မှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-beginner-3', [
      ['Write a specific, observable learning objective', 'တိကျ၍ တွေ့မြင်နိုင်သော Learning Objective တစ်ခု ရေးပါ'],
      ['Plan a lesson sequence with practice time', 'Practice အချိန်ပါသော သင်ခန်းစာ Sequence တစ်ခု စီစဉ်ပါ'],
      ['Write a complete 20-30 minute lesson plan', '၂၀-၃၀ မိနစ် Lesson Plan အပြည့်အစုံ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write a specific, observable learning objective', 'တိကျ၍ တွေ့မြင်နိုင်သော Learning Objective တစ်ခု ရေးနိုင်သည်'],
      ['Structure a lesson with explanation and practice', 'ရှင်းလင်းချက်နှင့် Practice ပါသော သင်ခန်းစာတစ်ခု ဖွဲ့စည်းနိုင်သည်'],
      ['Plan a way to check understanding', 'နားလည်မှု Check လုပ်ရန်နည်းလမ်းတစ်ခု စီစဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-beginner-4': {
    whatItIs: t([
      'Communication and explanation skills cover how to convey a technical idea clearly, using language, analogies, and pacing that a specific audience can follow.',
      'Communication and Explanation Skills သည် နည်းပညာ Idea တစ်ခုကို Audience သီးခြားတစ်ခု လိုက်နိုင်မည့် ဘာသာစကား, Analogy, Pacing များ သုံး၍ ရှင်းလင်းစွာ ဖော်ပြခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Deep technical knowledge is wasted if it cannot be communicated clearly — explanation is arguably the core skill of teaching, more than subject expertise alone.',
      'ရှင်းလင်းစွာ မဆက်သွယ်နိုင်ပါက Technical Knowledge နက်ရှိုင်းခြင်းသည် ဖြုန်းတီးမှုသာ ဖြစ်သည် — Explanation သည် Subject Expertise တစ်ခုတည်းထက် သင်ကြားရေး၏ အဓိက ကျွမ်းကျင်မှုဟု ငြင်းခုံနိုင်သည်။',
    ]),
    whereUsed: t([
      'Central to every teaching moment — a classroom lecture, a one-on-one mentoring session, or written documentation.',
      'Classroom Lecture, One-on-one Mentoring Session, ရေးသားထားသော Documentation — သင်ကြားရေး အခိုက်အတန့်တိုင်း၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Using analogies to connect new ideas to familiar ones', 'Idea အသစ်များကို ရင်းနှီးပြီးသားများနှင့် ချိတ်ဆက်ရန် Analogy များ သုံးခြင်း'],
      ['Pacing — not rushing, not dragging', 'Pacing — အလျင်မလိုစေဘဲ၊ မဆွဲငင်စေဘဲ'],
      ['Checking for understanding as you go, not just at the end', 'အဆုံးတွင်သာမက လုပ်ရင်း နားလည်မှု Check လုပ်ခြင်း'],
      ['Reading confusion on a learner\'s face and adjusting', 'Learner တစ်ဦး၏ မျက်နှာပေါ်ရှိ ရှုပ်ထွေးမှုကို ဖတ်ပြီး ချိန်ညှိခြင်း'],
    ]),
    steps: [
      step(
        ['Use analogies to explain unfamiliar concepts', 'ရင်းနှီးမှုမရှိသော Concept များ ရှင်းပြရန် Analogy များ သုံးခြင်း'],
        [
          ['A good analogy connects a new idea to something the learner already understands well', 'Analogy ကောင်းတစ်ခုသည် Idea အသစ်တစ်ခုကို Learner ကောင်းစွာ နားလည်ပြီးသား တစ်ခုနှင့် ချိတ်ဆက်ပေးသည်'],
        ],
        [
          ['Write an analogy that explains what a "file" and "folder" are to someone who has never used a computer', 'Computer တစ်ခါမှ မသုံးဖူးသူတစ်ဦးအား "File" နှင့် "Folder" ဆိုတာဘာလဲကို ရှင်းပြသော Analogy တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Check for understanding continuously', 'ဆက်တိုက် နားလည်မှု Check လုပ်ခြင်း'],
        [
          ['Asking a learner to explain a concept back in their own words is a strong check', 'Learner တစ်ဦးအား Concept တစ်ခုကို ၎င်းတို့ကိုယ်ပိုင် စကားလုံးများဖြင့် ပြန်ရှင်းပြခိုင်းခြင်းသည် Check ခိုင်မာတစ်ခု ဖြစ်သည်'],
        ],
        [
          ['Practice explaining a concept to someone, then ask them to explain it back to you in their own words, and note where the gaps were', 'တစ်စုံတစ်ဦးအား Concept တစ်ခု ရှင်းပြရန် လေ့ကျင့်ပါ၊ ထို့နောက် ၎င်းတို့ကိုယ်ပိုင် စကားလုံးများဖြင့် ပြန်ရှင်းပြခိုင်းပြီး Gap များ ဘယ်နေရာရှိသည်ကို မှတ်ချက်ပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Teach a real technology concept to a real person (in person or over a call), using an analogy, then ask them to explain it back to you, and write a short reflection on what worked and what you would change.',
      'တကယ့်လူတစ်ဦးအား (တွေ့ဆုံ (သို့) Call မှတစ်ဆင့်) Analogy သုံး၍ တကယ့် နည်းပညာ Concept တစ်ခု သင်ကြားပါ၊ ၎င်းတို့ ပြန်ရှင်းပြခိုင်းပါ၊ ဘာအလုပ်ဖြစ်ခဲ့ပြီး ဘာပြောင်းလဲမည်ကို Reflection တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'After teaching someone a new concept, could they explain it back to you correctly in their own words?',
      'တစ်စုံတစ်ဦးကို Concept အသစ်တစ်ခု သင်ကြားပြီးနောက် ၎င်းတို့သည် ၎င်းတို့ကိုယ်ပိုင် စကားလုံးများဖြင့် သင့်ကို မှန်ကန်စွာ ပြန်ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['If a learner cannot explain a concept back to you, that is valuable information — not a failure on their part.', 'Learner တစ်ဦးသည် Concept တစ်ခုကို သင့်ကို ပြန်ရှင်းပြ၍ မရပါက ၎င်းသည် တန်ဖိုးရှိသော Information ဖြစ်သည် — ၎င်းတို့ဘက်မှ မအောင်မြင်ခြင်း မဟုတ်ပါ။'],
      ['Watch a learner\'s face and body language — confusion often shows before someone says "I don\'t understand."', 'Learner တစ်ဦး၏ မျက်နှာနှင့် Body Language ကို ကြည့်ပါ — "နားမလည်ဘူး" ဟု မပြောမီ ရှုပ်ထွေးမှုသည် မကြာခဏ ပေါ်လာလေ့ရှိသည်။'],
    ]),
    commonMistakes: list([
      ['Only checking for understanding at the very end of a session, when it is too late to adjust.', 'ချိန်ညှိရန် အချိန်နောက်ကျသော Session ၏ အဆုံးတွင်သာ နားလည်မှု Check လုပ်ခြင်း။'],
      ['Using an analogy that is unfamiliar to the specific learner, defeating its purpose.', 'Learner သီးခြားတစ်ဦးနှင့် မရင်းနှီးသော Analogy သုံးခြင်းက ၎င်း၏ ရည်ရွယ်ချက်ကို ဖျက်ဆီးသည်။'],
    ]),
    practiceTasks: tasks('ict-trainer-beginner-4', [
      ['Write an analogy for a technical concept', 'Technical Concept တစ်ခုအတွက် Analogy တစ်ခု ရေးပါ'],
      ['Teach a concept and ask the learner to explain it back', 'Concept တစ်ခု သင်ကြားပြီး Learner ကို ပြန်ရှင်းပြခိုင်းပါ'],
      ['Write a reflection on a real teaching interaction', 'တကယ့် သင်ကြားရေး Interaction တစ်ခုအပေါ် Reflection တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Use analogies to explain unfamiliar concepts', 'ရင်းနှီးမှုမရှိသော Concept များ ရှင်းပြရန် Analogy များ သုံးနိုင်သည်'],
      ['Check for understanding continuously, not just at the end', 'အဆုံးတွင်သာမက ဆက်တိုက် နားလည်မှု Check လုပ်နိုင်သည်'],
      ['Reflect honestly on a real teaching interaction', 'တကယ့် သင်ကြားရေး Interaction တစ်ခုအပေါ် ရိုးသားစွာ Reflect ပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-core-1': {
    whatItIs: t([
      'Designing a training curriculum means planning a full, multi-session learning path toward a real, meaningful outcome — not just a single lesson.',
      'Training Curriculum Design ဆိုသည်မှာ သင်ခန်းစာတစ်ခုတည်းမကဘဲ တကယ့်၊ အဓိပ္ပာယ်ရှိသော ရလဒ်တစ်ခုသို့ Session များစွာပါသော Learning Path အပြည့်အစုံကို စီစဉ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A well-sequenced curriculum builds skills logically, each session on the last — a poorly sequenced one leaves learners confused or bored regardless of how good each individual lesson is.',
      'Sequence ကောင်းစွာ စီစဉ်ထားသော Curriculum တစ်ခုသည် Session တစ်ခုစီ ယခင်တစ်ခုအပေါ် ကျွမ်းကျင်မှုများ ယုတ္တိကျစွာ တည်ဆောက်ပေးသည် — Sequence ညံ့ဖျင်းသော တစ်ခုသည် သင်ခန်းစာတစ်ခုစီ မည်မျှကောင်းစေ Learner များကို ရှုပ်ထွေး (သို့) ငြီးငွေ့စေသည်။',
    ]),
    whereUsed: t([
      'Used whenever a trainer designs a multi-week course, bootcamp, or structured program rather than a one-off session.',
      'Trainer တစ်ဦးသည် တစ်ကြိမ်တည်း Session အစား Multi-week Course, Bootcamp (သို့) ဖွဲ့စည်းထားသော Program တစ်ခု Design ဆွဲသည့်အခါတိုင်း သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the single-lesson planning skills from the Beginner stage.',
      'Beginner အဆင့်မှ Single-lesson Planning ကျွမ်းကျင်မှုများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Defining the end goal of a full curriculum', 'Curriculum အပြည့်အစုံ၏ နောက်ဆုံးရည်မှန်းချက် သတ်မှတ်ခြင်း'],
      ['Sequencing topics from foundational to advanced', 'ခေါင်းစဉ်များကို Foundational မှ Advanced အထိ Sequence ချခြင်း'],
      ['Identifying prerequisites between sessions', 'Session များကြား Prerequisite များ ဖော်ထုတ်ခြင်း'],
      ['Building in review and reinforcement', 'Review နှင့် Reinforcement ထည့်သွင်းခြင်း'],
    ]),
    steps: [
      step(
        ['Define the end goal and work backward', 'နောက်ဆုံးရည်မှန်းချက် သတ်မှတ်ပြီး နောက်ပြန်လုပ်ဆောင်ခြင်း'],
        [
          ['Starting from what a learner should be able to do at the end, then figuring out what leads there', 'Learner တစ်ဦး အဆုံးတွင် ဘာလုပ်နိုင်သင့်သည်မှ စတင်ပြီး ထိုနေရာသို့ ဘာဦးဆောင်သည်ကို ရှာဖွေခြင်း'],
        ],
        [
          ['Define a clear end goal for a 4-session curriculum on a topic of your choice (e.g. "learners can build a simple personal website")', 'သင်ရွေးချယ်သော ခေါင်းစဉ်တစ်ခုအတွက် Session ၄ ခုပါသော Curriculum တစ်ခုအတွက် ရှင်းလင်းသော နောက်ဆုံးရည်မှန်းချက်တစ်ခု သတ်မှတ်ပါ (ဥပမာ "Learner များ ကိုယ်ပိုင် Website ရိုးရှင်းတစ်ခု တည်ဆောက်နိုင်သည်")'],
        ],
      ),
      step(
        ['Sequence sessions logically', 'Session များကို ယုတ္တိကျစွာ Sequence ချခြင်း'],
        [
          ['Each session should build on skills from the previous one', 'Session တစ်ခုစီသည် ယခင်တစ်ခုမှ ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်သင့်သည်'],
        ],
        [
          ['Outline the 4 sessions for your curriculum, with a one-sentence objective for each, in logical order', 'သင့် Curriculum အတွက် Session ၄ ခုကို ယုတ္တိကျသော အစီအစဉ်ဖြင့် Objective တစ်ကြောင်းစီပါ Outline ချပါ'],
        ],
      ),
    ],
    build: t([
      'Design a complete 4-session curriculum for a real beginner-friendly technology topic: a clear end goal, a logical sequence of sessions, and how each session builds on the last.',
      'Beginner-friendly နည်းပညာ ခေါင်းစဉ်အစစ်တစ်ခုအတွက် Session ၄ ခုပါသော Curriculum အပြည့်အစုံ Design ဆွဲပါ — ရှင်းလင်းသော နောက်ဆုံးရည်မှန်းချက်, Session များ၏ ယုတ္တိကျသော Sequence နှင့် Session တစ်ခုစီသည် ယခင်တစ်ခုအပေါ် မည်သို့ တည်ဆောက်သည်။',
    ]),
    verify: t([
      'Could you explain why session 3 in your curriculum needs to come after session 2, and not before it?',
      'သင့် Curriculum ရှိ Session ၃ သည် Session ၂ ၏ ရှေ့တွင်မဟုတ်ဘဲ ဘာကြောင့် နောက်တွင် လာရမည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start from the end goal and work backward — it prevents building a curriculum that wanders without purpose.', 'နောက်ဆုံးရည်မှန်းချက်မှ စတင်ပြီး နောက်ပြန်လုပ်ဆောင်ပါ — ၎င်းက ရည်ရွယ်ချက်မရှိဘဲ လမ်းလွဲသော Curriculum တစ်ခု တည်ဆောက်ခြင်းကို ကာကွယ်ပေးသည်။'],
      ['Build in review time — learners forget, and a good curriculum accounts for that.', 'Review အချိန် ထည့်ပါ — Learner များသည် မေ့တတ်ပြီး Curriculum ကောင်းတစ်ခုသည် ၎င်းကို ထည့်တွက်ထားသည်။'],
    ]),
    commonMistakes: list([
      ['Designing sessions in isolation without considering how they build on each other.', 'Session များ အချင်းချင်း မည်သို့ တည်ဆောက်ပေးသည်ကို မစဉ်းစားဘဲ သီးခြားစီ Design ဆွဲခြင်း။'],
      ['Setting a vague end goal that makes it hard to know when the curriculum has succeeded.', 'Curriculum အောင်မြင်ချိန်ကို သိရန် ခက်ခဲစေသော မရှင်းလင်းသော နောက်ဆုံးရည်မှန်းချက် သတ်မှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-core-1', [
      ['Define a clear end goal for a curriculum', 'Curriculum တစ်ခုအတွက် ရှင်းလင်းသော နောက်ဆုံးရည်မှန်းချက် သတ်မှတ်ပါ'],
      ['Sequence four sessions logically', 'Session လေးခုကို ယုတ္တိကျစွာ Sequence ချပါ'],
      ['Design a complete 4-session curriculum', 'Session ၄ ခုပါသော Curriculum အပြည့်အစုံ Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Define a clear curriculum end goal', 'ရှင်းလင်းသော Curriculum နောက်ဆုံးရည်မှန်းချက် သတ်မှတ်နိုင်သည်'],
      ['Sequence sessions in a logical order', 'Session များကို ယုတ္တိကျသော အစီအစဉ်ဖြင့် Sequence ချနိုင်သည်'],
      ['Build in review and reinforcement', 'Review နှင့် Reinforcement ထည့်သွင်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-core-2': {
    whatItIs: t([
      'Hands-on teaching techniques cover methods that get learners actively doing, not just passively watching or listening.',
      'Hands-on Teaching Technique များသည် Learner များအား Passive စွာ ကြည့်ရှု (သို့) နားထောင်ရုံသာမက Active စွာ လုပ်ဆောင်စေသော နည်းလမ်းများကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'People learn technology skills far more effectively by doing than by watching — a lecture alone rarely produces someone who can actually perform the skill.',
      'လူများသည် ကြည့်ရှုခြင်းထက် လုပ်ဆောင်ခြင်းဖြင့် နည်းပညာ ကျွမ်းကျင်မှုများကို အများကြီး ပိုထိရောက်စွာ သင်ယူကြသည် — Lecture တစ်ခုတည်းသည် ကျွမ်းကျင်မှုကို တကယ်လုပ်ဆောင်နိုင်သူကို ရှားရှားပါးပါးသာ ထုတ်လုပ်ပေးလေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'Central to effective coding bootcamps, technical workshops, and any skills-based technology training.',
      'ထိရောက်သော Coding Bootcamp, Technical Workshop နှင့် Skills-based Technology Training မည်သည်၏မဆို ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['The "I do, we do, you do" gradual release model', '"I Do, We Do, You Do" Gradual Release Model'],
      ['Designing exercises that build real skill, not just follow steps', 'ခြေလှမ်းများသာ မလိုက်ဘဲ ကျွမ်းကျင်မှု အစစ်တည်ဆောက်ပေးသော Exercise များ Design ဆွဲခြင်း'],
      ['Giving learners productive struggle time before helping', 'အကူအညီပေးမီ Learner များကို အကျိုးရှိသော ရုန်းကန်မှု အချိန် ပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Apply the "I do, we do, you do" model', '"I Do, We Do, You Do" Model အသုံးချခြင်း'],
        [
          ['Demonstrate first, practice together next, then let learners try independently', 'ဦးစွာ သရုပ်ပြပါ၊ ထို့နောက် အတူတကွ Practice လုပ်ပါ၊ ထို့နောက် Learner များအား သီးခြား ကြိုးစားစေပါ'],
        ],
        [
          ['Plan a 15-minute segment for a technical skill using the "I do, we do, you do" structure', 'Technical Skill တစ်ခုအတွက် "I Do, We Do, You Do" ဖွဲ့စည်းပုံ သုံး၍ ၁၅ မိနစ် Segment တစ်ခု စီစဉ်ပါ'],
        ],
      ),
      step(
        ['Give productive struggle time', 'အကျိုးရှိသော ရုန်းကန်မှု အချိန် ပေးခြင်း'],
        [
          ['Resisting the urge to jump in and fix a learner\'s mistake immediately', 'Learner တစ်ဦး၏ အမှားကို ချက်ချင်း ဝင်ရောက်ပြင်ဆင်လိုသော စိတ်ကို ထိန်းချုပ်ခြင်း'],
        ],
        [
          ['Watch someone attempt a technical task and practice waiting before offering help — note how long felt appropriate', 'တစ်စုံတစ်ဦး Technical Task တစ်ခု ကြိုးစားနေသည်ကို ကြည့်ပြီး အကူအညီမပေးမီ စောင့်ရန် လေ့ကျင့်ပါ — မည်မျှကြာချိန် သင့်တော်ကြောင်း ခံစားရသည်ကို မှတ်ချက်ပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Design and, if possible, run a 15-20 minute hands-on segment for a real technical skill using the "I do, we do, you do" structure, including planned productive struggle time.',
      'Technical Skill အစစ်တစ်ခုအတွက် "I Do, We Do, You Do" ဖွဲ့စည်းပုံ သုံး၍ ၁၅-၂၀ မိနစ် Hands-on Segment တစ်ခု Design ဆွဲပါ (ဖြစ်နိုင်ပါက Run ပါ) — စီစဉ်ထားသော အကျိုးရှိသော ရုန်းကန်မှု အချိန် ပါဝင်ပြီး။',
    ]),
    verify: t([
      'Could you explain why jumping in to fix a learner\'s mistake too quickly can actually hurt their learning?',
      'Learner တစ်ဦး၏ အမှားကို လျင်မြန်လွန်းစွာ ဝင်ရောက်ပြင်ဆင်ခြင်းသည် ၎င်းတို့၏ Learning ကို တကယ် ထိခိုက်စေနိုင်ကြောင်း ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Resist fixing a mistake immediately — give the learner a moment to notice and try to fix it themselves first.', 'အမှားတစ်ခုကို ချက်ချင်း မပြင်ပါနှင့် — Learner အား ဦးစွာ သတိထားမိပြီး ကိုယ်တိုင် ပြင်ဆင်ကြည့်ရန် အချိန် ပေးပါ။'],
      ['A little productive struggle builds real understanding — do not eliminate it entirely.', 'အကျိုးရှိသော ရုန်းကန်မှု အနည်းငယ်သည် တကယ့် နားလည်မှု တည်ဆောက်ပေးသည် — ၎င်းကို လုံးဝ မဖယ်ရှားပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Only lecturing without ever letting learners try the skill themselves.', 'Learner များအား ကျွမ်းကျင်မှုကို ကိုယ်တိုင် ဘယ်တော့မှ မကြိုးစားစေဘဲ Lecture တစ်ခုတည်း လုပ်ခြင်း။'],
      ['Jumping in to fix every small mistake immediately, preventing real learning from struggle.', 'အမှားငယ်တိုင်းကို ချက်ချင်း ဝင်ရောက်ပြင်ဆင်ခြင်းက ရုန်းကန်မှုမှ တကယ့် Learning ကို တားဆီးသည်။'],
    ]),
    practiceTasks: tasks('ict-trainer-core-2', [
      ['Plan a segment using "I do, we do, you do"', '"I Do, We Do, You Do" သုံး၍ Segment တစ်ခု စီစဉ်ပါ'],
      ['Practice giving productive struggle time', 'အကျိုးရှိသော ရုန်းကန်မှု အချိန် ပေးရန် လေ့ကျင့်ပါ'],
      ['Run (or simulate) a hands-on teaching segment', 'Hands-on Teaching Segment တစ်ခု Run ပါ (သို့) Simulate လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Apply the "I do, we do, you do" model', '"I Do, We Do, You Do" Model အသုံးချနိုင်သည်'],
      ['Design exercises that build real skill', 'ကျွမ်းကျင်မှု အစစ်တည်ဆောက်ပေးသော Exercise များ Design ဆွဲနိုင်သည်'],
      ['Give learners productive struggle time', 'Learner များအား အကျိုးရှိသော ရုန်းကန်မှု အချိန် ပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-core-3': {
    whatItIs: t([
      'Using teaching tools and platforms covers the practical software and systems trainers use to deliver lessons, share materials, and run live or recorded sessions.',
      'Teaching Tool နှင့် Platform အသုံးပြုခြင်းသည် Trainer များ သင်ခန်းစာများ ပို့ချရန်၊ Material များ မျှဝေရန်နှင့် Live (သို့) Recorded Session များ Run ရန် သုံးသော လက်တွေ့ကျသော Software နှင့် System များကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Even a perfectly planned lesson falls apart if the trainer is not comfortable with the basic tools of delivery — screen sharing, presentation software, or a classroom platform.',
      'Screen Sharing, Presentation Software သို့ Classroom Platform ကဲ့သို့ ပို့ချရေး၏ အခြေခံ Tool များနှင့် Trainer အဆင်မပြေပါက စီစဉ်ထားချက် ပြီးပြည့်စုံသော သင်ခန်းစာပင် ပြိုကွဲသွားနိုင်သည်။',
    ]),
    whereUsed: t([
      'Used in every training delivery format — in-person classrooms, online sessions, and self-paced recorded content.',
      'In-person Classroom, Online Session, Self-paced Recorded Content — Training ပို့ချသော ပုံစံတိုင်းတွင် သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Presentation software basics', 'Presentation Software အခြေခံ'],
      ['Screen sharing and demonstrating live', 'Screen Sharing နှင့် Live သရုပ်ပြခြင်း'],
      ['Organizing and sharing learning materials', 'Learning Material များ စုစည်းပြီး မျှဝေခြင်း'],
      ['Basic troubleshooting for common tech hiccups during a session', 'Session အတွင်း အများသုံး Tech ပြဿနာများအတွက် အခြေခံ Troubleshooting'],
    ]),
    steps: [
      step(
        ['Prepare and deliver a clear presentation', 'ရှင်းလင်းသော Presentation တစ်ခု ပြင်ဆင်ပြီး ပို့ချခြင်း'],
        [
          ['Keeping slides simple and readable, not overloaded with text', 'Slide များကို ရိုးရှင်း၍ ဖတ်ရလွယ်အောင်ထားခြင်း — Text ဖြင့် ပိန်ခဲသည်ဖြစ်စေခြင်း မလုပ်ဘဲ'],
        ],
        [
          ['Prepare a simple 5-slide presentation for a technical topic, keeping each slide focused on one idea', 'Technical Topic တစ်ခုအတွက် Slide ငါးခု ရိုးရှင်းတစ်ခု ပြင်ဆင်ပါ — Slide တစ်ခုစီကို Idea တစ်ခုတည်းအပေါ် အာရုံစိုက်ထားပြီး'],
        ],
      ),
      step(
        ['Demonstrate a skill live via screen sharing', 'Screen Sharing မှတစ်ဆင့် ကျွမ်းကျင်မှုတစ်ခု Live သရုပ်ပြခြင်း'],
        [
          ['Narrating what you are doing while demonstrating, not just clicking silently', 'သရုပ်ပြနေစဉ် တိတ်တဆိတ် Click မလုပ်ဘဲ သင်လုပ်နေသည်ကို ရှင်းပြခြင်း'],
        ],
        [
          ['Practice narrating a simple technical demonstration out loud, as if screen-sharing to a group', 'Group တစ်ခုသို့ Screen-sharing လုပ်နေသလို ရိုးရှင်းသော Technical Demonstration တစ်ခုကို အသံထွက် ရှင်းပြရန် လေ့ကျင့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Prepare a complete short teaching segment with slides and a live demonstration plan, including narration notes for what you would say while demonstrating.',
      'Slide များနှင့် Live Demonstration Plan ပါသော Teaching Segment တိုတောင် အပြည့်အစုံ ပြင်ဆင်ပါ — သရုပ်ပြနေစဉ် ပြောမည့်အရာအတွက် Narration Note များ ပါဝင်ပြီး။',
    ]),
    verify: t([
      'Could you demonstrate a technical skill live while clearly narrating what you are doing and why, without long silent pauses?',
      'Technical Skill တစ်ခုကို ရှည်လျားသော တိတ်ဆိတ်ချိန်များ မရှိဘဲ ဘာလုပ်နေသည်နှင့် ဘာကြောင့်ဆိုသည်ကို ရှင်းလင်းစွာ ရှင်းပြရင်း Live သရုပ်ပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Keep slides simple — they should support your explanation, not replace it.', 'Slide များကို ရိုးရှင်းထားပါ — ၎င်းတို့သည် သင့် ရှင်းလင်းချက်ကို ပံ့ပိုးသင့်သည်၊ အစားထိုးသင့်သည် မဟုတ်ပါ။'],
      ['Practice narrating a demonstration out loud before doing it live — silent narration in your head does not translate well.', 'Live မလုပ်မီ Demonstration တစ်ခုကို အသံထွက် ရှင်းပြရန် လေ့ကျင့်ပါ — ခေါင်းထဲရှိ တိတ်ဆိတ်သော Narration သည် ကောင်းစွာ မပြောင်းလဲနိုင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Cramming too much text onto a single slide.', 'Slide တစ်ခုတည်းပေါ်တွင် Text အလွန်အကျွံ ထည့်ခြင်း။'],
      ['Demonstrating silently without narrating what you are doing, leaving learners lost.', 'သင်လုပ်နေသည်ကို ရှင်းမပြဘဲ တိတ်ဆိတ်စွာ သရုပ်ပြခြင်းက Learner များကို ပျောက်ဆုံးစေသည်။'],
    ]),
    practiceTasks: tasks('ict-trainer-core-3', [
      ['Prepare a simple 5-slide presentation', 'Slide ငါးခု ရိုးရှင်းတစ်ခု Presentation ပြင်ဆင်ပါ'],
      ['Practice narrating a live demonstration', 'Live Demonstration တစ်ခု ရှင်းပြရန် လေ့ကျင့်ပါ'],
      ['Prepare a complete teaching segment with slides and demo plan', 'Slide နှင့် Demo Plan ပါသော Teaching Segment အပြည့်အစုံ ပြင်ဆင်ပါ'],
    ]),
    completionChecklist: list([
      ['Prepare a simple, focused presentation', 'ရိုးရှင်း၍ အာရုံစိုက်ထားသော Presentation တစ်ခု ပြင်ဆင်နိုင်သည်'],
      ['Demonstrate a skill live while narrating', 'ရှင်းပြရင်း ကျွမ်းကျင်မှုတစ်ခု Live သရုပ်ပြနိုင်သည်'],
      ['Organize materials for a teaching session', 'Teaching Session တစ်ခုအတွက် Material များ စုစည်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-core-4': {
    whatItIs: t([
      'Handling questions and difficulties covers responding well when a learner is confused, stuck, or asks something unexpected — a routine, essential part of teaching.',
      'Handling Questions and Difficulties သည် Learner တစ်ဦး ရှုပ်ထွေး၊ ပိတ်မိ (သို့) မမျှော်လင့်ထားသောအရာတစ်ခု မေးသည့်အခါ ကောင်းစွာ တုံ့ပြန်ခြင်းကို လွှမ်းခြုံသည် — သင်ကြားရေး၏ ပုံမှန်၊ မရှိမဖြစ် အစိတ်အပိုင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'How a trainer handles confusion and difficult questions shapes whether learners feel safe to keep asking — which is essential for real learning to happen.',
      'Trainer တစ်ဦးသည် ရှုပ်ထွေးမှုနှင့် ခက်ခဲသော မေးခွန်းများကို မည်သို့ ကိုင်တွယ်သည်က Learner များ ဆက်လက်မေးမြန်းရန် ဘေးကင်းသည်ဟု ခံစားရမည်လား ကို ပုံဖော်ပေးသည် — ၎င်းသည် တကယ့် Learning ဖြစ်ပေါ်ရန် မရှိမဖြစ် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Happens constantly, in every live teaching session, mentoring conversation, or Q&A moment.',
      'Live Teaching Session, Mentoring Conversation, Q&A အခိုက်အတန့်တိုင်းတွင် အမြဲ ဖြစ်ပျက်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the communication and explanation skills from the Beginner stage.',
      'Beginner အဆင့်မှ Communication and Explanation Skills အပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Recognizing signs of confusion early', 'ရှုပ်ထွေးမှု လက္ခဏာများကို စောစီးစွာ ဖော်ထုတ်ခြင်း'],
      ['Creating a safe environment for questions', 'မေးခွန်းများအတွက် ဘေးကင်းသော Environment ဖန်တီးခြင်း'],
      ['Responding to a wrong answer without discouraging the learner', 'Learner ကို စိတ်ပျက်စေခြင်းမရှိဘဲ အဖြေမှားတစ်ခုကို တုံ့ပြန်ခြင်း'],
      ['Deciding when to answer immediately vs. when to redirect to explore', 'ချက်ချင်း အဖြေပေးမည့်အချိန်နှင့် စူးစမ်းရန် ပြန်ညွှန်းမည့်အချိန် ဆုံးဖြတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Create a safe environment for questions', 'မေးခွန်းများအတွက် ဘေးကင်းသော Environment ဖန်တီးခြင်း'],
        [
          ['Thanking learners for questions, even "obvious" ones, encourages more questions', 'Learner များအား "ထင်ရှားသော" မေးခွန်းများအတွက်ပင် ကျေးဇူးတင်ခြင်းက မေးခွန်းများ ပိုမိုတိုက်တွန်းပေးသည်'],
        ],
        [
          ['Write down three phrases you would use to respond warmly to a "silly" question, without making the learner feel bad for asking', 'Learner ကို မေးမိသည့်အတွက် စိတ်မကောင်းစေဘဲ "ရိုးရှင်းသော" မေးခွန်းတစ်ခုကို နွေးထွေးစွာ တုံ့ပြန်ရန် စကားစု သုံးခု ရေးထားပါ'],
        ],
      ),
      step(
        ['Handle a wrong answer constructively', 'အဖြေမှားတစ်ခုကို ဖွဲ့စည်းတည်ဆောက်ရေး ကိုင်တွယ်ခြင်း'],
        [
          ['Acknowledging the reasoning behind a wrong answer before correcting it', 'ပြင်ဆင်မီ အဖြေမှားတစ်ခု၏ နောက်ကွယ်ရှိ ယုတ္တိကို အသိအမှတ်ပြုခြင်း'],
        ],
        [
          ['Given a wrong answer to a technical question, write how you would respond in a way that corrects it without discouraging the learner', 'Technical မေးခွန်းတစ်ခု၏ အဖြေမှားတစ်ခု ပေးလိုက်လျှင် Learner ကို စိတ်မပျက်စေဘဲ ပြင်ဆင်ပေးမည့် နည်းလမ်းဖြင့် မည်သို့ တုံ့ပြန်မည်ကို ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short guide for yourself: how you will recognize confusion, how you will respond to wrong answers constructively, and three phrases you will use to keep the environment feeling safe for questions.',
      'ကိုယ်တိုင်အတွက် လမ်းညွှန် တိုတောင်းတစ်ခု ရေးပါ — ရှုပ်ထွေးမှုကို မည်သို့ ဖော်ထုတ်မည်၊ အဖြေမှားများကို ဖွဲ့စည်းတည်ဆောက်ရေး မည်သို့ တုံ့ပြန်မည်နှင့် မေးခွန်းများအတွက် ဘေးကင်းသည်ဟု ခံစားစေရန် သုံးမည့် စကားစုသုံးခု။',
    ]),
    verify: t([
      'If a learner gives a completely wrong answer confidently, could you correct it in a way that keeps them comfortable asking again?',
      'Learner တစ်ဦးသည် ယုံကြည်စွာ လုံးဝမှားသော အဖြေတစ်ခု ပေးလျှင် ၎င်းတို့ ထပ်မံမေးရန် အဆင်ပြေနေစေသည့် နည်းလမ်းဖြင့် ၎င်းကို ပြင်ဆင်ပေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Thank learners for every question, even ones that seem basic — it keeps the room feeling safe.', 'အခြေခံပုံပေါ်သော မေးခွန်းများပင် Learner များအား မေးခွန်းတိုင်းအတွက် ကျေးဇူးတင်ပါ — ၎င်းက အခန်းကို ဘေးကင်းသည်ဟု ခံစားနေစေသည်။'],
      ['Correcting an answer and discouraging the person are two different things — you can always do the first without the second.', 'အဖြေတစ်ခု ပြင်ဆင်ခြင်းနှင့် လူတစ်ဦးကို စိတ်ပျက်စေခြင်းသည် မတူညီသော အရာနှစ်ခု ဖြစ်သည် — ဒုတိယမပါဘဲ ပထမကို အမြဲလုပ်နိုင်သည်။'],
    ]),
    commonMistakes: list([
      ['Making a learner feel embarrassed for asking a "basic" question.', '"အခြေခံ" မေးခွန်းတစ်ခု မေးမိသည့်အတွက် Learner တစ်ဦးကို ရှက်ကွဲစေခြင်း။'],
      ['Bluntly saying "that\'s wrong" without acknowledging the reasoning behind the answer.', 'အဖြေ၏ နောက်ကွယ်ရှိ ယုတ္တိကို အသိအမှတ်မပြုဘဲ "ဒါမှားတယ်" ဟု ရိုးရိုးပြောခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-core-4', [
      ['Write phrases for responding warmly to questions', 'မေးခွန်းများကို နွေးထွေးစွာ တုံ့ပြန်ရန် စကားစုများ ရေးပါ'],
      ['Plan how to correct a wrong answer constructively', 'အဖြေမှားတစ်ခုကို ဖွဲ့စည်းတည်ဆောက်ရေး ပြင်ဆင်ရန် စီစဉ်ပါ'],
      ['Write a personal guide for handling questions and difficulties', 'မေးခွန်းများနှင့် ခက်ခဲမှုများ ကိုင်တွယ်ရန် ကိုယ်ပိုင် လမ်းညွှန်တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Create a safe environment for questions', 'မေးခွန်းများအတွက် ဘေးကင်းသော Environment ဖန်တီးနိုင်သည်'],
      ['Handle wrong answers constructively', 'အဖြေမှားများကို ဖွဲ့စည်းတည်ဆောက်ရေး ကိုင်တွယ်နိုင်သည်'],
      ['Recognize and respond to learner confusion', 'Learner ရှုပ်ထွေးမှုကို ဖော်ထုတ်ပြီး တုံ့ပြန်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-intermediate-1': {
    whatItIs: t([
      'Assessing learner progress covers finding out, honestly and fairly, whether learners are actually developing the skills your training aims to build.',
      'Assessing Learner Progress သည် Learner များသည် သင့် Training ရည်ရွယ်ထားသော ကျွမ်းကျင်မှုများကို တကယ် ဖွံ့ဖြိုးနေခြင်း ရှိမရှိကို ရိုးသား၍ တရားမျှတစွာ ရှာဖွေဖော်ထုတ်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Without honest assessment, a trainer cannot know if their teaching is actually working — good intentions are not the same as real learner progress.',
      'ရိုးသားသော Assessment မရှိပါက Trainer တစ်ဦးသည် ၎င်း၏ သင်ကြားရေး တကယ်အလုပ်ဖြစ်ခြင်း ရှိမရှိ သိနိုင်မည် မဟုတ်ပါ — ရည်ရွယ်ချက်ကောင်းသည် တကယ့် Learner တိုးတက်မှုနှင့် တူညီသည် မဟုတ်ပါ။',
    ]),
    whereUsed: t([
      'Used throughout any real training program to guide what to teach next and confirm learners are ready to move on.',
      'နောက်ဘာသင်ကြားမည်ကို လမ်းညွှန်ရန်နှင့် Learner များ ရှေ့ဆက်ရန် အသင့်ဖြစ်ကြောင်း အတည်ပြုရန် Training Program အစစ် မည်သည်တစ်လျှောက်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Formative assessment (ongoing checks) vs. summative assessment (final evaluation)', 'Formative Assessment (ဆက်တိုက် Check) နှင့် Summative Assessment (နောက်ဆုံး Evaluation)'],
      ['Designing a practical assessment, not just a quiz', 'Quiz တစ်ခုတည်းမကဘဲ လက်တွေ့ကျသော Assessment တစ်ခု Design ဆွဲခြင်း'],
      ['Giving actionable feedback based on assessment results', 'Assessment ရလဒ်များအပေါ် အခြေခံ၍ ဆောင်ရွက်နိုင်သော Feedback ပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Design a practical skills-based assessment', 'လက်တွေ့ကျသော Skills-based Assessment တစ်ခု Design ဆွဲခြင်း'],
        [
          ['A practical task (e.g. "build this") reveals real skill better than a multiple-choice quiz', 'လက်တွေ့ Task တစ်ခု (ဥပမာ "ဒါကို တည်ဆောက်ပါ") သည် Multiple-choice Quiz တစ်ခုထက် တကယ့် ကျွမ်းကျင်မှုကို ပိုကောင်းစွာ ဖော်ထုတ်ပေးသည်'],
        ],
        [
          ['Design a small practical task that would reveal whether a learner actually gained a specific skill from a lesson', 'Learner တစ်ဦး သင်ခန်းစာတစ်ခုမှ ကျွမ်းကျင်မှုတစ်ခု တကယ်ရရှိခဲ့ကြောင်း ဖော်ထုတ်ပေးမည့် လက်တွေ့ Task သေးငယ်တစ်ခု Design ဆွဲပါ'],
        ],
      ),
      step(
        ['Give feedback that helps learners improve', 'Learner များ တိုးတက်ရန် ကူညီပေးသော Feedback ပေးခြင်း'],
        [
          ['Specific, actionable feedback ("try X next") is more useful than a grade alone', 'တိကျ၍ ဆောင်ရွက်နိုင်သော Feedback ("နောက်တစ်ခါ X ကို စမ်းကြည့်ပါ") သည် Grade တစ်ခုတည်းထက် ပိုအသုံးဝင်သည်'],
        ],
        [
          ['Given a sample of a learner\'s work with some mistakes, write specific, actionable feedback rather than just marking it right or wrong', 'အမှားအချို့ပါသော Learner တစ်ဦး၏ Work Sample ပေးလိုက်လျှင် မှန်/မှား Mark ရိုးရိုးမလုပ်ဘဲ တိကျ၍ ဆောင်ရွက်နိုင်သော Feedback ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Design a small practical assessment for a skill you have taught earlier in this path, apply it (even to yourself or a volunteer), and write specific, actionable feedback based on the result.',
      'ဤ Path ရှေ့ပိုင်းတွင် သင်ကြားခဲ့သော ကျွမ်းကျင်မှုတစ်ခုအတွက် လက်တွေ့ Assessment သေးငယ်တစ်ခု Design ဆွဲပါ၊ ၎င်းကို (ကိုယ်တိုင် သို့ Volunteer တစ်ဦးအား) အသုံးချပါ၊ ရလဒ်အပေါ် အခြေခံ၍ တိကျ၍ ဆောင်ရွက်နိုင်သော Feedback ရေးပါ။',
    ]),
    verify: t([
      'Could you design a practical task that would honestly reveal whether someone learned a skill, rather than just whether they memorized facts about it?',
      'တစ်စုံတစ်ဦး ကျွမ်းကျင်မှုတစ်ခု တကယ်သင်ယူခဲ့ကြောင်း (၎င်းအကြောင်း အချက်အလက်များ အလွတ်ကျက်မှတ်ခြင်းသာမက) ရိုးသားစွာ ဖော်ထုတ်ပေးမည့် လက်တွေ့ Task တစ်ခု Design ဆွဲနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Design assessments around real tasks, not just recall questions — "do this" reveals more than "define this".', 'Assessment များကို Recall မေးခွန်းများသာမက လက်တွေ့ Task များပတ်လည် Design ဆွဲပါ — "ဒါကို လုပ်ပါ" သည် "ဒါကို ဖွင့်ဆိုပါ" ထက် ပိုဖော်ထုတ်ပေးသည်။'],
      ['Give feedback that is specific enough that the learner knows exactly what to do differently next time.', 'Learner တစ်ဦး နောက်တစ်ခါ ဘာကွာခြားစွာ လုပ်ရမည်ကို အတိအကျ သိလောက်အောင် တိကျသော Feedback ပေးပါ။'],
    ]),
    commonMistakes: list([
      ['Assessing only recall of facts rather than practical skill.', 'လက်တွေ့ ကျွမ်းကျင်မှုမဟုတ်ဘဲ အချက်အလက် Recall ကိုသာ Assess လုပ်ခြင်း။'],
      ['Giving vague feedback like "good job" or "needs work" without specifics.', '"ကောင်းတယ်" (သို့) "ပြင်ဆင်ရန် လိုတယ်" ကဲ့သို့ တိကျမှုမပါသော Feedback ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-intermediate-1', [
      ['Design a practical skills-based task', 'လက်တွေ့ Skills-based Task တစ်ခု Design ဆွဲပါ'],
      ['Write specific, actionable feedback on sample work', 'Sample Work တစ်ခုအပေါ် တိကျ၍ ဆောင်ရွက်နိုင်သော Feedback ရေးပါ'],
      ['Apply an assessment and give real feedback', 'Assessment တစ်ခု အသုံးချပြီး Feedback အစစ် ပေးပါ'],
    ]),
    completionChecklist: list([
      ['Design a practical, skills-based assessment', 'လက်တွေ့၊ Skills-based Assessment တစ်ခု Design ဆွဲနိုင်သည်'],
      ['Give specific, actionable feedback', 'တိကျ၍ ဆောင်ရွက်နိုင်သော Feedback ပေးနိုင်သည်'],
      ['Distinguish formative from summative assessment', 'Formative ကို Summative Assessment နှင့် ခွဲခြားနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-intermediate-2': {
    whatItIs: t([
      'Teaching technical topics to beginners covers strategies specific to introducing genuinely new, potentially intimidating technical subjects for the first time.',
      'Beginner များအား Technical Topic များ သင်ကြားခြင်းသည် တကယ့် အသစ်၊ ကြောက်စရာဖြစ်နိုင်သော Technical Subject များကို ပထမဆုံးအကြိမ် မိတ်ဆက်ရန် သီးခြား Strategy များကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A beginner\'s first experience with a technical topic — coding, networks, security — shapes whether they feel capable or intimidated going forward.',
      'Beginner တစ်ဦး၏ Technical Topic (Coding, Networks, Security) နှင့် ပထမဆုံး အတွေ့အကြုံသည် ၎င်းတို့ ရှေ့ဆက်လက် စွမ်းရည်ရှိသည်ဟု ခံစားရမလား ကြောက်စရာဟု ခံစားရမလားကို ပုံဖော်ပေးသည်။',
    ]),
    whereUsed: t([
      'Directly relevant to LANN\'s own mission — introducing young Myanmar learners to technology careers for the first time.',
      'LANN ကိုယ်ပိုင် Mission — မြန်မာ လူငယ် Learner များကို နည်းပညာ Career များအတွက် ပထမဆုံးအကြိမ် မိတ်ဆက်ခြင်း — နှင့် တိုက်ရိုက် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Starting with "why" before "how"', '"How" မတိုင်မီ "Why" ဖြင့် စတင်ခြင်း'],
      ['Reducing unnecessary jargon early on', 'အစပိုင်းတွင် မလိုအပ်သော Jargon လျှော့ချခြင်း'],
      ['Normalizing confusion and mistakes as part of learning', 'ရှုပ်ထွေးမှုနှင့် အမှားများကို Learning ၏ အစိတ်အပိုင်းအဖြစ် Normalize လုပ်ခြင်း'],
      ['Celebrating small wins to build confidence', 'ယုံကြည်မှု တည်ဆောက်ရန် အောင်မြင်မှုငယ်များကို ဂုဏ်ပြုခြင်း'],
    ]),
    steps: [
      step(
        ['Start with why, not just how', 'How တစ်ခုတည်းမကဘဲ Why ဖြင့် စတင်ခြင်း'],
        [
          ['Explaining why a concept matters before diving into mechanics keeps beginners motivated', 'Mechanics ထဲသို့ မဝင်မီ Concept တစ်ခု ဘာကြောင့် အရေးကြီးသည်ကို ရှင်းပြခြင်းက Beginner များကို လှုံ့ဆော်ပေးထားစေသည်'],
        ],
        [
          ['For a technical topic of your choice, write a "why this matters" opening you would use before teaching the mechanics', 'သင်ရွေးချယ်သော Technical Topic တစ်ခုအတွက် Mechanics မသင်ကြားမီ သုံးမည့် "ဘာကြောင့် ဒါက အရေးကြီးလဲ" Opening တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Normalize struggle and celebrate progress', 'ရုန်းကန်မှုကို Normalize လုပ်ပြီး တိုးတက်မှုကို ဂုဏ်ပြုခြင်း'],
        [
          ['Telling beginners upfront that confusion is normal reduces their anxiety about it', 'Beginner များအား ရှုပ်ထွေးမှုသည် ပုံမှန်ဖြစ်ကြောင်း ကြိုတင်ပြောခြင်းက ၎င်းတို့၏ စိုးရိမ်မှုကို လျှော့ချပေးသည်'],
        ],
        [
          ['Write down two or three specific small wins you would call out and celebrate in a beginner\'s first coding session', 'Beginner တစ်ဦး၏ ပထမဆုံး Coding Session တွင် ခေါ်ဆိုပြီး ဂုဏ်ပြုမည့် သီးခြား အောင်မြင်မှုငယ် နှစ်ခု (သို့) သုံးခု ရေးထားပါ'],
        ],
      ),
    ],
    build: t([
      'Plan the first 20 minutes of a beginner\'s very first exposure to a technical topic (e.g. their first line of code): a "why it matters" opening, jargon kept to a minimum, and at least two moments planned to celebrate progress.',
      'Beginner တစ်ဦး၏ Technical Topic တစ်ခု (ဥပမာ ၎င်းတို့၏ ပထမဆုံး Code Line) နှင့် ပထမဆုံး ထိတွေ့မှု ၂၀ မိနစ်ကို စီစဉ်ပါ — "ဘာကြောင့် အရေးကြီးလဲ" Opening, Jargon အနည်းဆုံးထားပြီး တိုးတက်မှုကို ဂုဏ်ပြုမည့် အခိုက်အတန့် အနည်းဆုံးနှစ်ခု စီစဉ်ထားပြီး။',
    ]),
    verify: t([
      'Could a genuine first-time beginner walk out of your planned 20 minutes feeling capable rather than overwhelmed?',
      'တကယ့် ပထမဆုံးအကြိမ် Beginner တစ်ဦးသည် သင် စီစဉ်ထားသော ၂၀ မိနစ်ပြီးနောက် လွှမ်းမိုးခံရသည်ထက် စွမ်းရည်ရှိသည်ဟု ခံစားရပြီး ထွက်သွားနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Tell beginners explicitly that confusion is part of the process — it reduces shame and keeps them engaged.', 'ရှုပ်ထွေးမှုသည် လုပ်ငန်းစဉ်၏ အစိတ်အပိုင်းဖြစ်ကြောင်း Beginner များအား ရှင်းလင်းစွာ ပြောပါ — ၎င်းက ရှက်ကြောက်မှုကို လျှော့ချပြီး ၎င်းတို့ကို ဆက်လက် ပါဝင်စေသည်။'],
      ['Celebrate genuinely small wins — the first successful "hello world" matters more to a beginner than it might seem.', 'တကယ့် အောင်မြင်မှု ငယ်များကို ဂုဏ်ပြုပါ — ပထမဆုံး အောင်မြင်သော "Hello World" သည် ထင်ထားသည်ထက် Beginner တစ်ဦးအတွက် ပိုအရေးကြီးသည်။'],
    ]),
    commonMistakes: list([
      ['Diving straight into technical mechanics without explaining why the topic matters.', 'ခေါင်းစဉ် ဘာကြောင့် အရေးကြီးသည်ကို မရှင်းပြဘဲ Technical Mechanics ထဲသို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
      ['Using heavy jargon in a beginner\'s very first exposure to a topic.', 'ခေါင်းစဉ်တစ်ခုနှင့် Beginner တစ်ဦး၏ ပထမဆုံး ထိတွေ့မှုတွင် Jargon လေးများ သုံးခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-intermediate-2', [
      ['Write a "why this matters" opening for a topic', 'Topic တစ်ခုအတွက် "ဘာကြောင့် အရေးကြီးလဲ" Opening တစ်ခု ရေးပါ'],
      ['Plan small wins to celebrate in a first lesson', 'ပထမဆုံး သင်ခန်းစာတွင် ဂုဏ်ပြုမည့် အောင်မြင်မှုငယ်များ စီစဉ်ပါ'],
      ['Plan a beginner-friendly first 20 minutes for a technical topic', 'Technical Topic တစ်ခုအတွက် Beginner-friendly ပထမဆုံး ၂၀ မိနစ် စီစဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Start technical lessons with why it matters', '"ဘာကြောင့် အရေးကြီးလဲ" ဖြင့် Technical သင်ခန်းစာများ စတင်နိုင်သည်'],
      ['Keep jargon to a minimum for beginners', 'Beginner များအတွက် Jargon ကို အနည်းဆုံး ထားနိုင်သည်'],
      ['Normalize struggle and celebrate progress', 'ရုန်းကန်မှုကို Normalize လုပ်ပြီး တိုးတက်မှုကို ဂုဏ်ပြုနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-intermediate-3': {
    whatItIs: t([
      'Facilitating workshops covers running interactive group sessions where you guide activity and discussion rather than simply lecturing.',
      'Facilitating Workshops သည် Lecture ရိုးရိုးလုပ်မည့်အစား Activity နှင့် Discussion ကို လမ်းညွှန်ပေးသော Interactive Group Session များ Run ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Workshops need different skills than one-on-one teaching — managing group dynamics, keeping everyone engaged, and adapting on the fly.',
      'Workshop များသည် One-on-one Teaching ထက် မတူညီသော ကျွမ်းကျင်မှုများ လိုအပ်သည် — Group Dynamics စီမံခန့်ခွဲခြင်း, လူတိုင်းကို ပါဝင်နေစေခြင်းနှင့် ချက်ချင်း လိုက်လျောညီထွေ ဖြစ်စေခြင်း။',
    ]),
    whereUsed: t([
      'Used in community tech workshops, bootcamp group sessions, and any training format involving more than one or two learners at once.',
      'Community Tech Workshop, Bootcamp Group Session နှင့် တစ်ကြိမ်တွင် Learner တစ် (သို့) နှစ်ဦးထက်ပို ပါဝင်သော Training ပုံစံမည်သည်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the hands-on teaching and question-handling skills from earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းမှ Hands-on Teaching နှင့် Question-handling ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Setting expectations at the start of a workshop', 'Workshop တစ်ခု၏ အစတွင် မျှော်လင့်ချက်များ သတ်မှတ်ခြင်း'],
      ['Keeping a group moving at a workable pace for most people', 'အများစုအတွက် အလုပ်ဖြစ်သော Pace ဖြင့် Group တစ်ခုကို ဆက်လက်ရွေ့လျားစေခြင်း'],
      ['Handling participants at very different skill levels', 'ကျွမ်းကျင်မှု Level အလွန်ကွာခြားသော Participant များ ကိုင်တွယ်ခြင်း'],
      ['Reading the room and adjusting in real time', 'Room ကို ဖတ်ပြီး Real Time တွင် ချိန်ညှိခြင်း'],
    ]),
    steps: [
      step(
        ['Open a workshop and set expectations', 'Workshop တစ်ခု ဖွင့်ပြီး မျှော်လင့်ချက်များ သတ်မှတ်ခြင်း'],
        [
          ['A clear opening (what we will do, how long, what to expect) helps a group settle in', 'ရှင်းလင်းသော Opening (ဘာလုပ်မည်၊ မည်မျှကြာမည်၊ ဘာမျှော်လင့်ရမည်) သည် Group တစ်ခုကို အနေအထားကျစေရန် ကူညီသည်'],
        ],
        [
          ['Write a two-minute opening you would give at the start of a 1-hour technical workshop', '၁ နာရီ Technical Workshop တစ်ခု၏ အစတွင် ပေးမည့် ၂ မိနစ် Opening တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Manage a group with mixed skill levels', 'ကျွမ်းကျင်မှု Level ရောနှောနေသော Group တစ်ခု စီမံခန့်ခွဲခြင်း'],
        [
          ['Preparing an optional stretch task for faster participants while others catch up', 'အခြားသူများ မီအောင်ကြိုးစားနေစဉ် ပိုမြန်သော Participant များအတွက် Optional Stretch Task ပြင်ဆင်ခြင်း'],
        ],
        [
          ['Plan one optional "stretch" activity you could offer to participants who finish a main exercise early', 'Main Exercise ကို စောစီးစွာ ပြီးမြောက်သော Participant များအား ပေးအပ်နိုင်မည့် Optional "Stretch" Activity တစ်ခု စီစဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design a complete 1-hour workshop outline for a technical topic: opening, main hands-on activity, a stretch task for fast finishers, and a closing.',
      'Technical Topic တစ်ခုအတွက် ၁ နာရီ Workshop Outline အပြည့်အစုံ Design ဆွဲပါ — Opening, Main Hands-on Activity, စောစီးစွာ ပြီးမြောက်သူများအတွက် Stretch Task နှင့် Closing။',
    ]),
    verify: t([
      'Could you handle a workshop where half the group finishes an exercise in 5 minutes and the other half needs 20?',
      'Group တစ်ဝက်သည် Exercise တစ်ခုကို ၅ မိနစ်တွင် ပြီးမြောက်ပြီး ကျန်တစ်ဝက်သည် ၂၀ မိနစ် လိုအပ်သော Workshop တစ်ခုကို ကိုင်တွယ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always prepare a stretch task for fast finishers — it prevents boredom and keeps the room productive.', 'စောစီးစွာ ပြီးမြောက်သူများအတွက် Stretch Task တစ်ခု အမြဲ ပြင်ဆင်ပါ — ၎င်းက ငြီးငွေ့မှုကို ကာကွယ်ပြီး Room ကို အကျိုးရှိစေသည်။'],
      ['Set clear time expectations at the start so participants know what to expect.', 'Participant များ ဘာမျှော်လင့်ရမည် သိစေရန် အစတွင် ရှင်းလင်းသော အချိန် မျှော်လင့်ချက်များ သတ်မှတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Running a workshop at a single fixed pace regardless of the group\'s actual skill spread.', 'Group ၏ တကယ့် ကျွမ်းကျင်မှု ပြန့်ကျဲမှုကို ထည့်မတွက်ဘဲ Pace သတ်မှတ်တစ်ခုတည်းဖြင့် Workshop Run ခြင်း။'],
      ['Not planning anything for participants who finish an activity early.', 'Activity တစ်ခုကို စောစီးစွာ ပြီးမြောက်သော Participant များအတွက် ဘာမှ မစီစဉ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-intermediate-3', [
      ['Write a two-minute workshop opening', 'ၾ မိနစ် Workshop Opening တစ်ခု ရေးပါ'],
      ['Plan a stretch task for fast finishers', 'စောစီးစွာ ပြီးမြောက်သူများအတွက် Stretch Task တစ်ခု စီစဉ်ပါ'],
      ['Design a complete 1-hour workshop outline', '၁ နာရီ Workshop Outline အပြည့်အစုံ Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Open a workshop and set clear expectations', 'Workshop တစ်ခု ဖွင့်ပြီး ရှင်းလင်းသော မျှော်လင့်ချက်များ သတ်မှတ်နိုင်သည်'],
      ['Manage a group with mixed skill levels', 'ကျွမ်းကျင်မှု Level ရောနှောနေသော Group တစ်ခု စီမံခန့်ခွဲနိုင်သည်'],
      ['Design a complete workshop outline', 'Workshop Outline အပြည့်အစုံ Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-intermediate-4': {
    whatItIs: t([
      'Giving and receiving feedback covers both delivering useful feedback to learners and being open to feedback about your own teaching to keep improving.',
      'Giving and Receiving Feedback သည် Learner များအား အသုံးဝင်သော Feedback ပေးခြင်းနှင့် ဆက်လက် တိုးတက်ရန် သင့်ကိုယ်ပိုင် သင်ကြားမှုအကြောင်း Feedback ကို ပွင့်လင်းစွာ လက်ခံခြင်း နှစ်ခုစလုံးကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A trainer who never seeks feedback on their own teaching stops improving — the best trainers treat their own teaching as a skill to keep developing, just like any technical skill.',
      'ကိုယ်ပိုင် သင်ကြားမှုအပေါ် Feedback ဘယ်တော့မှ မရှာသော Trainer တစ်ဦးသည် တိုးတက်မှု ရပ်တန့်သွားသည် — Trainer အကောင်းဆုံးများသည် ၎င်းတို့ ကိုယ်ပိုင် သင်ကြားမှုကို Technical Skill မည်သည်ကဲ့သို့ပင် ဆက်လက် ဖွံ့ဖြိုးရမည့် ကျွမ်းကျင်မှုတစ်ခုအဖြစ် သဘောထားကြသည်။',
    ]),
    whereUsed: t([
      'A core practice of professional development for trainers, and a key part of any learner\'s growth throughout a course.',
      'Trainer များ၏ Professional Development ၏ အဓိက အလေ့အထတစ်ခုဖြစ်ပြီး Course တစ်ခုတစ်လျှောက် Learner တစ်ဦး၏ ကြီးထွားမှု၏ အဓိက အစိတ်အပိုင်းတစ်ခု ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the assessment and feedback skills from earlier in this stage.',
      'ဤအဆင့်ရှေ့ပိုင်းမှ Assessment နှင့် Feedback ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Giving feedback that is specific and kind at the same time', 'တိကျ၍ ကြင်နာမှုရှိသော Feedback တစ်ချိန်တည်း ပေးခြင်း'],
      ['Asking learners for feedback on your teaching', 'သင့် သင်ကြားမှုအကြောင်း Learner များထံမှ Feedback တောင်းခံခြင်း'],
      ['Receiving critical feedback without becoming defensive', 'ခုခံမှုမရှိဘဲ Critical Feedback လက်ခံခြင်း'],
      ['Turning feedback into a real, specific change', 'Feedback ကို တကယ့်၊ တိကျသော ပြောင်းလဲမှုအဖြစ် ပြောင်းလဲခြင်း'],
    ]),
    steps: [
      step(
        ['Ask learners for honest feedback', 'Learner များထံမှ ရိုးသားသော Feedback တောင်းခံခြင်း'],
        [
          ['A specific question ("what was confusing today?") gets more useful answers than "any feedback?"', 'တိကျသော မေးခွန်းတစ်ခု ("ဒီနေ့ ဘာက ရှုပ်ထွေးခဲ့လဲ?") သည် "Feedback တစ်ခုခုရှိလား?" ထက် ပိုအသုံးဝင်သော အဖြေများ ရရှိစေသည်'],
        ],
        [
          ['Write three specific feedback questions you could ask learners at the end of a session, instead of a generic "any questions?"', '"မေးခွန်း တစ်ခုခုရှိလား?" ဆိုသော General မေးခွန်းအစား Session တစ်ခု အဆုံးတွင် Learner များကို မေးနိုင်မည့် တိကျသော Feedback မေးခွန်း သုံးခု ရေးပါ'],
        ],
      ),
      step(
        ['Turn feedback into real change', 'Feedback ကို တကယ့် ပြောင်းလဲမှုအဖြစ် ပြောင်းလဲခြင်း'],
        [
          ['Feedback is only useful if it leads to a specific, concrete adjustment next time', 'Feedback သည် နောက်တစ်ကြိမ် တိကျ၍ ကွန်ကရစ် ချိန်ညှိမှုတစ်ခုသို့ ဦးဆောင်မှသာ အသုံးဝင်သည်'],
        ],
        [
          ['Given a piece of critical feedback about a lesson (real or hypothetical), write one specific change you would make in response', 'သင်ခန်းစာတစ်ခုအကြောင်း Critical Feedback တစ်ခု (တကယ် သို့ ယူဆချက်ရေး) ပေးလိုက်လျှင် ၎င်းကို တုံ့ပြန်၍ ပြုလုပ်မည့် တိကျသော ပြောင်းလဲမှုတစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Design a short, specific feedback survey (3-4 questions) you would give learners at the end of a training session, and write how you would use the answers to improve your next session.',
      'Training Session တစ်ခု အဆုံးတွင် Learner များကို ပေးမည့် တိကျသော Feedback Survey တိုတောင်း (မေးခွန်း ၃-၄ ခု) Design ဆွဲပါ၊ သင့် နောက် Session ကို တိုးတက်စေရန် အဖြေများကို မည်သို့ သုံးမည်ကို ရေးပါ။',
    ]),
    verify: t([
      'If a learner gave you harsh but fair feedback about your teaching, could you respond without getting defensive and make a real change from it?',
      'Learner တစ်ဦးက သင့် သင်ကြားမှုအကြောင်း ပြင်းထန်သော်လည်း တရားမျှတသော Feedback ပေးလျှင် ခုခံမှုမရှိဘဲ တုံ့ပြန်ပြီး ၎င်းမှ တကယ့် ပြောင်းလဲမှုတစ်ခု ပြုလုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Ask specific feedback questions rather than a generic "how was that?" — you will get far more useful answers.', '"ဒါ ဘယ်လိုလဲ?" General မေးခွန်းအစား တိကျသော Feedback မေးခွန်းများ မေးပါ — ပိုအသုံးဝင်သော အဖြေများ ရရှိလိမ့်မည်။'],
      ['Treat critical feedback about your teaching as valuable data, not a personal attack.', 'သင့် သင်ကြားမှုအကြောင်း Critical Feedback ကို ကိုယ်ရေးကိုယ်တာ တိုက်ခိုက်မှုမဟုတ်ဘဲ တန်ဖိုးရှိသော Data အဖြစ် သဘောထားပါ။'],
    ]),
    commonMistakes: list([
      ['Never asking learners for feedback, missing chances to improve.', 'Learner များထံမှ Feedback ဘယ်တော့မှ မတောင်းခံဘဲ တိုးတက်ရန် အခွင့်အလမ်းများ လွတ်သွားခြင်း။'],
      ['Getting defensive when receiving critical feedback instead of listening to understand.', 'နားထောင်ရန်မဟုတ်ဘဲ Critical Feedback လက်ခံသည့်အခါ ခုခံလာခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-intermediate-4', [
      ['Write specific feedback questions for learners', 'Learner များအတွက် တိကျသော Feedback မေးခွန်းများ ရေးပါ'],
      ['Practice responding to critical feedback without defensiveness', 'ခုခံမှုမရှိဘဲ Critical Feedback ကို တုံ့ပြန်ရန် လေ့ကျင့်ပါ'],
      ['Design a short feedback survey for a session', 'Session တစ်ခုအတွက် Feedback Survey တိုတောင်းတစ်ခု Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Ask learners specific, useful feedback questions', 'Learner များအား တိကျ၍ အသုံးဝင်သော Feedback မေးခွန်းများ မေးနိုင်သည်'],
      ['Receive critical feedback without becoming defensive', 'ခုခံမှုမရှိဘဲ Critical Feedback လက်ခံနိုင်သည်'],
      ['Turn feedback into a specific, real change', 'Feedback ကို တိကျ၍ တကယ့် ပြောင်းလဲမှုအဖြစ် ပြောင်းလဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-advanced-1': {
    whatItIs: t([
      'Curriculum development at scale covers designing training programs for larger cohorts or longer durations, with more structure, consistency, and documentation than a single course.',
      'Curriculum Development at Scale သည် Course တစ်ခုတည်းထက် ဖွဲ့စည်းပုံ, တသမတ်တည်းဖြစ်မှုနှင့် Documentation ပိုများသော Cohort ကြီးများ (သို့) ကြာမြင့်ချိန် ပိုကြာသော Training Program များ Design ဆွဲခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A curriculum that works well taught by one person to ten learners does not automatically scale to multiple trainers or hundreds of learners — scaling requires deliberate structure.',
      'လူတစ်ဦးက Learner ဆယ်ဦးကို ကောင်းစွာ သင်ကြားနိုင်သော Curriculum တစ်ခုသည် Trainer များစွာ (သို့) Learner ရာနှင့်ချီသို့ အလိုအလျောက် Scale မတိုးနိုင်ပါ — Scaling သည် ရည်ရွယ်ချက်ရှိသော ဖွဲ့စည်းပုံ လိုအပ်သည်။',
    ]),
    whereUsed: t([
      'Used by organizations running bootcamps, corporate training programs, or educational initiatives across multiple trainers and cohorts.',
      'Bootcamp, Corporate Training Program (သို့) Trainer နှင့် Cohort များစွာတစ်လျှောက် Educational Initiative များ Run နေသော အဖွဲ့အစည်းများက သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the single-curriculum design skills from the Core stage.',
      'Core အဆင့်မှ Single-curriculum Design ကျွမ်းကျင်မှုများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Documenting a curriculum so another trainer could teach it', 'တခြား Trainer တစ်ဦး သင်ကြားနိုင်ရန် Curriculum တစ်ခု မှတ်တမ်းတင်ခြင်း'],
      ['Standardizing assessment across multiple trainers', 'Trainer များစွာတစ်လျှောက် Assessment စံသတ်မှတ်ခြင်း'],
      ['Building in flexibility for different cohort paces', 'Cohort Pace မတူညီများအတွက် Flexibility ထည့်သွင်းခြင်း'],
    ]),
    steps: [
      step(
        ['Document a curriculum for other trainers', 'တခြား Trainer များအတွက် Curriculum တစ်ခု မှတ်တမ်းတင်ခြင်း'],
        [
          ['A trainer guide should include objectives, timing, materials, and common pitfalls for each session', 'Trainer Guide တစ်ခုတွင် Session တစ်ခုစီအတွက် Objective, Timing, Material, အများသုံး ချို့ယွင်းချက်များ ပါဝင်သင့်သည်'],
        ],
        [
          ['Write a trainer guide for one session from your earlier curriculum, detailed enough that another trainer could deliver it', 'သင့် ယခင် Curriculum မှ Session တစ်ခုအတွက် Trainer Guide တစ်ခု ရေးပါ — တခြား Trainer တစ်ဦး ပို့ချနိုင်လောက်အောင် အသေးစိတ်ရှိပြီး'],
        ],
      ),
      step(
        ['Standardize assessment across a program', 'Program တစ်ခုတစ်လျှောက် Assessment စံသတ်မှတ်ခြင်း'],
        [
          ['A shared rubric helps different trainers assess learners consistently', 'မျှဝေထားသော Rubric သည် Trainer မတူညီများအား Learner များကို တသမတ်တည်း Assess လုပ်ရန် ကူညီပေးသည်'],
        ],
        [
          ['Write a simple rubric (3-4 criteria) that any trainer could use to assess the same practical task consistently', 'Trainer မည်သည်ကမဆို လက်တွေ့ Task တူတူကို တသမတ်တည်း Assess လုပ်ရန် သုံးနိုင်မည့် Rubric ရိုးရှင်း (Criteria ၃-၄ ခု) ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Take your 4-session curriculum from the Core stage and turn it into a documented, standardized package: a trainer guide for each session and a shared assessment rubric, ready for another trainer to pick up and teach.',
      'Core အဆင့်မှ သင့် Session ၄ ခု Curriculum ကို Documented, Standardized Package တစ်ခုအဖြစ် ပြောင်းလဲပါ — Session တစ်ခုစီအတွက် Trainer Guide နှင့် မျှဝေထားသော Assessment Rubric — တခြား Trainer တစ်ဦး ယူ၍ သင်ကြားနိုင်ရန် အသင့်ဖြစ်ပြီး။',
    ]),
    verify: t([
      'Could a trainer who has never seen your curriculum pick up your documentation and teach it effectively?',
      'သင့် Curriculum ကို ဘယ်တော့မှ မမြင်ဖူးသေးသော Trainer တစ်ဦးသည် သင့် Documentation ကို ယူပြီး ထိရောက်စွာ သင်ကြားနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Write curriculum documentation as if a stranger will use it — because eventually, one might.', 'Curriculum Documentation ကို လူစိမ်းတစ်ဦး သုံးမည့်ပမာဏ ရေးပါ — အနာဂတ်တွင် တစ်ဦးဦးက တကယ် သုံးနိုင်သောကြောင့်။'],
      ['A shared rubric reduces inconsistency between trainers far more than informal guidelines alone.', 'မျှဝေထားသော Rubric တစ်ခုသည် Informal Guideline များတစ်ခုတည်းထက် Trainer များအကြား တသမတ်မတည်မှုကို အများကြီး ပိုလျှော့ချပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Writing curriculum documentation only detailed enough for yourself to understand.', 'ကိုယ်တိုင်နားလည်ရန်သာ လုံလောက်သော Curriculum Documentation ရေးခြင်း။'],
      ['Having no shared assessment standard, so different trainers grade the same skill inconsistently.', 'မျှဝေထားသော Assessment Standard မရှိခြင်းက Trainer မတူညီများ Skill တူတူကို တသမတ်မတည်ဘဲ Grade ပေးစေသည်။'],
    ]),
    practiceTasks: tasks('ict-trainer-advanced-1', [
      ['Write a detailed trainer guide for one session', 'Session တစ်ခုအတွက် အသေးစိတ် Trainer Guide တစ်ခု ရေးပါ'],
      ['Write a shared assessment rubric', 'မျှဝေထားသော Assessment Rubric တစ်ခု ရေးပါ'],
      ['Turn a curriculum into a documented, standardized package', 'Curriculum တစ်ခုကို Documented, Standardized Package အဖြစ် ပြောင်းလဲပါ'],
    ]),
    completionChecklist: list([
      ['Document a curriculum for other trainers to use', 'တခြား Trainer များ သုံးနိုင်ရန် Curriculum တစ်ခု မှတ်တမ်းတင်နိုင်သည်'],
      ['Create a shared assessment rubric', 'မျှဝေထားသော Assessment Rubric တစ်ခု ဖန်တီးနိုင်သည်'],
      ['Build flexibility for different cohort paces', 'Cohort Pace မတူညီများအတွက် Flexibility တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-advanced-2': {
    whatItIs: t([
      'Mentorship and one-on-one coaching covers guiding a single learner\'s growth over time, which is different from teaching a group in a classroom or workshop.',
      'Mentorship and One-on-one Coaching သည် Classroom (သို့) Workshop တွင် Group တစ်ခု သင်ကြားခြင်းနှင့် ကွဲပြားသော Learner တစ်ဦး၏ ကြီးထွားမှုကို အချိန်ကြာမြင့်စွာ လမ်းညွှန်ပေးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A mentor helps someone navigate their own specific path, not a fixed curriculum — this personalized guidance is often what makes the biggest difference in someone\'s growth.',
      'Mentor တစ်ဦးသည် သတ်မှတ်ထားသော Curriculum တစ်ခုမဟုတ်ဘဲ တစ်ဦး၏ ကိုယ်ပိုင် လမ်းကြောင်းသီးခြားကို ဖြတ်သန်းရန် ကူညီပေးသည် — ဤ Personalized Guidance သည် တစ်ဦး၏ ကြီးထွားမှုတွင် အကြီးမားဆုံး ကွာခြားချက် ဖြစ်စေသောအရာ ဖြစ်လေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'Used in one-on-one mentoring relationships, career guidance, and ongoing support beyond a formal course — exactly the kind of relationship LANN\'s own AI Mentor aims to support.',
      'One-on-one Mentoring ဆက်ဆံရေး, Career Guidance နှင့် တရားဝင် Course တစ်ခု ကျော်လွန်သော ဆက်လက် ပံ့ပိုးမှုတွင် သုံးသည် — LANN ကိုယ်ပိုင် AI Mentor ရည်ရွယ်ထားသော ဆက်ဆံရေးအမျိုးအစား အတိအကျ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Asking questions that help someone think, rather than just giving answers', 'အဖြေများသာ ပေးမည့်အစား တစ်ဦးဦး တွေးခေါ်ရန် ကူညီပေးသော မေးခွန်းများ မေးခြင်း'],
      ['Helping a mentee set their own goals', 'Mentee တစ်ဦးအား ၎င်းတို့ကိုယ်ပိုင် ရည်မှန်းချက်များ သတ်မှတ်ရန် ကူညီခြင်း'],
      ['Checking in consistently over time', 'အချိန်ကြာမြင့်စွာ တသမတ်တည်း Check ဝင်ခြင်း'],
      ['Knowing when to advise directly vs. when to let someone figure it out', 'ဘယ်အချိန် တိုက်ရိုက် အကြံပေးမည်၊ ဘယ်အချိန် တစ်ဦးဦးအား ကိုယ်တိုင်ရှာဖွေခိုင်းမည်ကို သိရှိခြင်း'],
    ]),
    steps: [
      step(
        ['Ask questions that build a mentee\'s own thinking', 'Mentee ကိုယ်ပိုင် တွေးခေါ်မှု တည်ဆောက်ပေးသော မေးခွန်းများ မေးခြင်း'],
        [
          ['"What have you already tried?" builds more independence than immediately giving the answer', '"ဘာတွေ စမ်းကြည့်ပြီးပြီလဲ?" သည် ချက်ချင်း အဖြေပေးခြင်းထက် Independence ပို တည်ဆောက်ပေးသည်'],
        ],
        [
          ['Given a mentee stuck on a problem, write three questions you would ask before offering a direct answer', 'ပြဿနာတစ်ခုတွင် ပိတ်မိနေသော Mentee တစ်ဦး ပေးလိုက်လျှင် တိုက်ရိုက် အဖြေမပေးမီ မေးမည့် မေးခွန်း သုံးခု ရေးပါ'],
        ],
      ),
      step(
        ['Support goal-setting and ongoing check-ins', 'Goal-setting နှင့် ဆက်လက် Check-in များ ပံ့ပိုးခြင်း'],
        [
          ['Helping a mentee define their own specific, meaningful goal rather than imposing one', 'Goal တစ်ခု ချမှတ်ပေးမည့်အစား Mentee တစ်ဦးအား ၎င်းကိုယ်ပိုင် သီးခြား၊ အဓိပ္ပာယ်ရှိသော Goal သတ်မှတ်ရန် ကူညီခြင်း'],
        ],
        [
          ['Have a practice mentoring conversation (real or role-played) helping someone define one specific goal for the next month', 'နောက်တစ်လအတွက် သီးခြား Goal တစ်ခု သတ်မှတ်ရန် တစ်စုံတစ်ဦးအား ကူညီပေးသော Practice Mentoring Conversation (တကယ် သို့ Role-play) ပြုလုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Have a real (or realistically role-played) mentoring conversation with someone about their learning goals, using question-asking rather than direct instruction, and write a short reflection on how it went.',
      'တစ်စုံတစ်ဦး၏ Learning Goal များအကြောင်း တကယ့် (သို့) လက်တွေ့ကျစွာ Role-play လုပ်ထားသော Mentoring Conversation တစ်ခု ပြုလုပ်ပါ — တိုက်ရိုက် ညွှန်ကြားမှုမဟုတ်ဘဲ မေးခွန်းမေးခြင်း သုံးပြီး — မည်သို့ ဖြစ်ခဲ့သည်ကို Reflection တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Could you help someone figure out their own next step without simply telling them what to do?',
      'တစ်စုံတစ်ဦးအား ဘာလုပ်ရမည်ကို ရိုးရိုးမပြောဘဲ ၎င်းတို့ကိုယ်ပိုင် နောက်ခြေလှမ်းကို ရှာဖွေရန် ကူညီနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Ask before you advise — a good question often helps more than a quick answer.', 'အကြံမပေးမီ မေးပါ — မေးခွန်းကောင်းတစ်ခုသည် အမြန်အဖြေတစ်ခုထက် မကြာခဏ ပိုကူညီပေးသည်။'],
      ['Check in consistently, even briefly — mentorship works best as an ongoing relationship, not a one-time conversation.', 'တိုတောင်းသည့်တိုင် တသမတ်တည်း Check ဝင်ပါ — Mentorship သည် တစ်ကြိမ်တည်း စကားပြောဆိုမှုမဟုတ်ဘဲ ဆက်လက် ဆက်ဆံရေးအဖြစ် အကောင်းဆုံး အလုပ်ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Immediately giving direct answers instead of helping a mentee think through a problem.', 'Mentee တစ်ဦးအား ပြဿနာတစ်ခုကို ဖြတ်၍ တွေးရန် ကူညီမည့်အစား တိုက်ရိုက် အဖြေများ ချက်ချင်း ပေးခြင်း။'],
      ['Setting a goal for a mentee instead of helping them define their own.', 'Mentee တစ်ဦးအား ကိုယ်ပိုင် Goal သတ်မှတ်ရန် ကူညီမည့်အစား Goal တစ်ခု ချမှတ်ပေးခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-advanced-2', [
      ['Write questions to ask a stuck mentee', 'ပိတ်မိနေသော Mentee တစ်ဦးအား မေးမည့် မေးခွန်းများ ရေးပါ'],
      ['Practice a goal-setting mentoring conversation', 'Goal-setting Mentoring Conversation တစ်ခု လေ့ကျင့်ပါ'],
      ['Reflect on a real or role-played mentoring session', 'တကယ် သို့ Role-play Mentoring Session တစ်ခုအပေါ် Reflect ပြုပါ'],
    ]),
    completionChecklist: list([
      ['Ask questions that build a mentee\'s independent thinking', 'Mentee ၏ Independent Thinking တည်ဆောက်ပေးသော မေးခွန်းများ မေးနိုင်သည်'],
      ['Help a mentee set their own goals', 'Mentee တစ်ဦးအား ကိုယ်ပိုင် Goal များ သတ်မှတ်ရန် ကူညီနိုင်သည်'],
      ['Provide consistent, ongoing support', 'တသမတ်တည်း ဆက်လက် ပံ့ပိုးမှု ပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-advanced-3': {
    whatItIs: t([
      'Building a training program covers designing and launching a genuinely new technology education offering from scratch — beyond a single curriculum.',
      'Training Program တည်ဆောက်ခြင်းသည် Curriculum တစ်ခုတည်းကို ကျော်လွန်၍ Technology Education Offering အသစ်တစ်ခုကို အစမှ Design ဆွဲပြီး စတင်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'This is where teaching skill meets program leadership — deciding what to build, for whom, and how to know if it is working.',
      'ဤသည်မှာ သင်ကြားရေး ကျွမ်းကျင်မှုသည် Program Leadership နှင့် တွေ့ဆုံရာ ဖြစ်သည် — ဘာတည်ဆောက်မည်၊ မည်သူအတွက်၊ အလုပ်ဖြစ်ခြင်း ရှိမရှိ မည်သို့ သိမည်ကို ဆုံးဖြတ်ခြင်း။',
    ]),
    whereUsed: t([
      'Central to senior education roles — building a bootcamp, a company training program, or a community technology initiative from the ground up.',
      'Bootcamp, ကုမ္ပဏီ Training Program (သို့) Community Technology Initiative တစ်ခုကို အခြေခံမှ တည်ဆောက်ခြင်း — Senior Education Role များ၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on curriculum design, assessment, and mentorship from earlier in this path.',
      'ဤသည်မှာ ယခင် Curriculum Design, Assessment, Mentorship ကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Identifying a real need for a new program', 'Program အသစ်တစ်ခုအတွက် တကယ့် လိုအပ်ချက် ဖော်ထုတ်ခြင်း'],
      ['Defining program-level success metrics', 'Program-level အောင်မြင်မှု Metric များ သတ်မှတ်ခြင်း'],
      ['Planning logistics (schedule, format, resources)', 'Logistics စီစဉ်ခြင်း (Schedule, Format, Resources)'],
      ['Piloting before scaling', 'Scale မတိုးမီ Pilot လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Identify a real need and define success', 'တကယ့် လိုအပ်ချက်ကို ဖော်ထုတ်ပြီး အောင်မြင်မှု သတ်မှတ်ခြင်း'],
        [
          ['A good program starts from a real, specific gap, not an assumption', 'Program ကောင်းတစ်ခုသည် ယူဆချက်တစ်ခုမဟုတ်ဘဲ တကယ့်၊ သီးခြား Gap တစ်ခုမှ စတင်သည်'],
        ],
        [
          ['Write a short brief identifying a real learning need you have observed (in this app\'s domain or elsewhere) and what success would look like for a program addressing it', 'သင် သတိပြုမိထားသော တကယ့် Learning လိုအပ်ချက်တစ်ခု (ဤ App ၏ Domain တွင် သို့ အခြားနေရာတွင်) နှင့် ၎င်းကို ဖြေရှင်းသော Program တစ်ခုအတွက် အောင်မြင်မှု မည်သို့ ပုံပေါ်မည်ကို ဖော်ထုတ်သော Brief တိုတောင်း ရေးပါ'],
        ],
      ),
      step(
        ['Plan a pilot before scaling', 'Scale မတိုးမီ Pilot တစ်ခု စီစဉ်ခြင်း'],
        [
          ['Running a small pilot first reveals problems before you have invested in a large-scale rollout', 'Pilot သေးငယ်တစ်ခု ဦးစွာ Run ခြင်းက Scale ကြီး Rollout တစ်ခုတွင် ရင်းနှီးမြှုပ်နှံမီ ပြဿနာများကို ဖော်ထုတ်ပေးသည်'],
        ],
        [
          ['Plan a small pilot version of your program idea: a limited scope, a small group, and what you would learn from it', 'သင့် Program Idea ၏ Pilot Version သေးငယ်တစ်ခု စီစဉ်ပါ — Scope ကန့်သတ်ထား၍, Group သေးငယ်ဖြင့်, ၎င်းမှ ဘာသင်ယူမည်နှင့်အတူ'],
        ],
      ),
    ],
    build: t([
      'Write a short program proposal: the need it addresses, its success metrics, a plan for a small pilot, and what you would look at to decide whether to scale it further.',
      'Program Proposal တိုတောင်းတစ်ခု ရေးပါ — ဖြေရှင်းပေးမည့် လိုအပ်ချက်, ၎င်း၏ အောင်မြင်မှု Metric များ, Pilot သေးငယ်တစ်ခုအတွက် Plan နှင့် ဆက်လက် Scale တိုးရန် ဆုံးဖြတ်ရန် ဘာကို ကြည့်မည်။',
    ]),
    verify: t([
      'Could you explain, for your proposed program, exactly how you would know within the first month whether it is working?',
      'သင် အကြံပြုထားသော Program အတွက် ပထမလအတွင်း ၎င်း အလုပ်ဖြစ်ခြင်း ရှိမရှိ မည်သို့ သိမည်ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always pilot a new program at small scale first — it is far cheaper to fix problems early.', 'Program အသစ်တစ်ခုကို Scale သေးငယ်ဖြင့် ဦးစွာ အမြဲ Pilot လုပ်ပါ — ပြဿနာများကို စောစီးစွာ ပြင်ဆင်ရန် အများကြီး ပိုသက်သာသည်။'],
      ['Define success metrics before launching, not after — otherwise it is easy to convince yourself anything counts as success.', 'Launch မလုပ်မီ အောင်မြင်မှု Metric များ သတ်မှတ်ပါ — Launch ပြီးနောက်မဟုတ်ဘဲ — မဟုတ်ပါက မည်သည့်အရာမဆို အောင်မြင်မှုဟု ကိုယ်တိုင် ယုံကြည်စေရန် လွယ်ကူသည်။'],
    ]),
    commonMistakes: list([
      ['Launching a full-scale program without piloting it first.', 'Pilot ဦးစွာ မလုပ်ဘဲ Program အပြည့်အစုံ Launch လုပ်ခြင်း။'],
      ['Building a program based on assumption rather than a confirmed real need.', 'အတည်ပြုပြီးသား တကယ့် လိုအပ်ချက်မဟုတ်ဘဲ ယူဆချက်အပေါ် အခြေခံ၍ Program တစ်ခု တည်ဆောက်ခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-advanced-3', [
      ['Write a brief identifying a real learning need', 'တကယ့် Learning လိုအပ်ချက်တစ်ခု ဖော်ထုတ်သော Brief တစ်ခု ရေးပါ'],
      ['Plan a small pilot for a program idea', 'Program Idea တစ်ခုအတွက် Pilot သေးငယ်တစ်ခု စီစဉ်ပါ'],
      ['Write a complete program proposal', 'Program Proposal အပြည့်အစုံ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Identify a real need for a training program', 'Training Program တစ်ခုအတွက် တကယ့် လိုအပ်ချက် ဖော်ထုတ်နိုင်သည်'],
      ['Define program-level success metrics', 'Program-level အောင်မြင်မှု Metric များ သတ်မှတ်နိုင်သည်'],
      ['Plan a pilot before scaling', 'Scale မတိုးမီ Pilot တစ်ခု စီစဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ict-trainer-advanced-4': {
    whatItIs: t([
      'Growing as a technology educator covers continuing to develop your own teaching craft over a career, the same way a technical specialist keeps developing their technical skills.',
      'Technology Educator တစ်ဦးအနေဖြင့် ကြီးထွားခြင်းသည် Technical Specialist တစ်ဦး ၎င်း၏ Technical Skill များကို ဆက်လက် ဖွံ့ဖြိုးသည့်နည်းတူ Career တစ်လျှောက် ကိုယ်ပိုင် သင်ကြားရေး Craft ကို ဆက်လက် ဖွံ့ဖြိုးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Teaching is a skill like any other — it improves with deliberate practice, reflection, and feedback, not just years of experience alone.',
      'သင်ကြားခြင်းသည် အခြားကျွမ်းကျင်မှု မည်သည့်ကဲ့သို့ပင် ကျွမ်းကျင်မှုတစ်ခု ဖြစ်သည် — ၎င်းသည် အတွေ့အကြုံ နှစ်ရေအရေအတွက်တစ်ခုတည်းမကဘဲ ရည်ရွယ်ချက်ရှိသော Practice, Reflection, Feedback တို့ဖြင့် တိုးတက်လာသည်။',
    ]),
    whereUsed: t([
      'Relevant throughout an entire career in education, from a first mentoring conversation to leading a whole training organization.',
      'ပထမဆုံး Mentoring Conversation မှ Training Organization တစ်ခုလုံးကို ဦးဆောင်ခြင်းအထိ Education Career တစ်လျှောက် သက်ဆိုင်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone reflection topic drawing on everything covered throughout the ICT Trainer / Educator path.',
      'ဤသည်မှာ ICT Trainer / Educator Path တစ်လျှောက် လွှမ်းခြုံခဲ့သမျှ အားလုံးကို အသုံးချသော Capstone Reflection Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Reflecting honestly on your own teaching after each session', 'Session တစ်ခုစီပြီးနောက် ကိုယ်ပိုင် သင်ကြားမှုအပေါ် ရိုးသားစွာ Reflect ပြုခြင်း'],
      ['Seeking out feedback proactively, not just waiting for it', 'Feedback ကို စောင့်နေရုံမက Proactively ရှာဖွေခြင်း'],
      ['Learning from other trainers and educators', 'Trainer နှင့် Educator တခြားများထံမှ သင်ယူခြင်း'],
      ['Setting your own growth goals as an educator', 'Educator တစ်ဦးအနေဖြင့် ကိုယ်ပိုင် ကြီးထွားမှု ရည်မှန်းချက်များ သတ်မှတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Build a habit of honest self-reflection', 'ရိုးသားသော Self-reflection အလေ့အထ တည်ဆောက်ခြင်း'],
        [
          ['Reflecting on what worked, what did not, and why after every real teaching interaction', 'တကယ့် သင်ကြားရေး Interaction တိုင်းပြီးနောက် ဘာအလုပ်ဖြစ်ခဲ့ပြီး ဘာအလုပ်မဖြစ်ခဲ့သည်၊ ဘာကြောင့်ဆိုသည်ကို Reflect ပြုခြင်း'],
        ],
        [
          ['Write a short reflection on the most challenging teaching moment from anywhere in this path, and what you would do differently now', 'ဤ Path တစ်လျှောက်ရှိ အခက်ခဲဆုံး သင်ကြားရေး အခိုက်အတန့်အပေါ် Reflection တိုတောင်းတစ်ခု ရေးပါ — ယခု ဘာကွာခြားစွာ လုပ်မည်ဆိုသည်နှင့်အတူ'],
        ],
      ),
      step(
        ['Set concrete growth goals as an educator', 'Educator တစ်ဦးအနေဖြင့် ကွန်ကရစ် ကြီးထွားမှု ရည်မှန်းချက်များ သတ်မှတ်ခြင်း'],
        [
          ['A specific goal ("get better at handling mixed-skill workshops") is more useful than "become a better teacher"', 'သီးခြား Goal တစ်ခု ("Mixed-skill Workshop ကိုင်တွယ်ရာတွင် ပိုကောင်းလာအောင်") သည် "Teacher ပိုကောင်းလာအောင်" ထက် ပိုအသုံးဝင်သည်'],
        ],
        [
          ['Write two specific, concrete growth goals for yourself as an educator, based on what felt hardest throughout this path', 'ဤ Path တစ်လျှောက် အခက်ခဲဆုံးဟု ခံစားရသည်အပေါ် အခြေခံ၍ Educator တစ်ဦးအနေဖြင့် ကိုယ်တိုင်အတွက် သီးခြား၊ ကွန်ကရစ် ကြီးထွားမှု ရည်မှန်းချက်နှစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short personal development plan as a technology educator: an honest reflection on your growth throughout this path, two specific goals for what to improve next, and how you will seek feedback to track that growth.',
      'Technology Educator တစ်ဦးအနေဖြင့် Personal Development Plan တိုတောင်းတစ်ခု ရေးပါ — ဤ Path တစ်လျှောက် သင့် ကြီးထွားမှုအပေါ် ရိုးသားသော Reflection, နောက်ထပ် တိုးတက်ရန် သီးခြား ရည်မှန်းချက်နှစ်ခုနှင့် ထို ကြီးထွားမှုကို Track လုပ်ရန် Feedback ကို မည်သို့ ရှာဖွေမည်။',
    ]),
    verify: t([
      'Could you honestly identify your biggest weakness as a trainer right now, and a specific, concrete plan to improve it?',
      'ယခု Trainer တစ်ဦးအနေဖြင့် သင့်အားနည်းချက်အကြီးဆုံးကို ရိုးသားစွာ ဖော်ထုတ်ပြီး ၎င်းကို တိုးတက်စေရန် သီးခြား၊ ကွန်ကရစ် Plan တစ်ခု ရေးဆွဲနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Reflect after every real teaching interaction, even a short one — small reflections add up to real growth.', 'တိုတောင်းသည့်တိုင် တကယ့် သင်ကြားရေး Interaction တိုင်းပြီးနောက် Reflect ပြုပါ — Reflection သေးငယ်များသည် တကယ့် ကြီးထွားမှုအဖြစ် ပေါင်းစည်းလာသည်။'],
      ['Seek feedback proactively rather than waiting for it — most learners will not volunteer criticism unless asked.', 'Feedback ကို စောင့်နေမည့်အစား Proactively ရှာဖွေပါ — Learner အများစုသည် မေးမှသာ Criticism ကို ဘာသာစကား ပေးလိမ့်မည်။'],
    ]),
    commonMistakes: list([
      ['Assuming teaching skill develops automatically with years, without deliberate reflection.', 'ရည်ရွယ်ချက်ရှိသော Reflection မရှိဘဲ သင်ကြားရေး ကျွမ်းကျင်မှုသည် နှစ်ရေအရေအတွက်နှင့်အတူ အလိုအလျောက် ဖွံ့ဖြိုးလာသည်ဟု ယူဆခြင်း။'],
      ['Setting vague growth goals like "be a better teacher" instead of specific, actionable ones.', 'သီးခြား၊ ဆောင်ရွက်နိုင်သော Goal များအစား "Teacher ပိုကောင်းလာအောင်" ကဲ့သို့ မရှင်းလင်းသော ကြီးထွားမှု ရည်မှန်းချက်များ သတ်မှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ict-trainer-advanced-4', [
      ['Reflect on your most challenging teaching moment', 'သင့် အခက်ခဲဆုံး သင်ကြားရေး အခိုက်အတန့်အပေါ် Reflect ပြုပါ'],
      ['Write two specific growth goals as an educator', 'Educator တစ်ဦးအနေဖြင့် သီးခြား ကြီးထွားမှု ရည်မှန်းချက်နှစ်ခု ရေးပါ'],
      ['Write a personal development plan', 'Personal Development Plan တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Reflect honestly on your own teaching', 'ကိုယ်ပိုင် သင်ကြားမှုအပေါ် ရိုးသားစွာ Reflect ပြုနိုင်သည်'],
      ['Set specific, actionable growth goals', 'သီးခြား၊ ဆောင်ရွက်နိုင်သော ကြီးထွားမှု ရည်မှန်းချက်များ သတ်မှတ်နိုင်သည်'],
      ['Plan how to seek feedback proactively', 'Feedback ကို Proactively ရှာဖွေရန် စီစဉ်နိုင်သည်'],
    ]),
    resources: [],
  },
}
