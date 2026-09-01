import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Robotics Engineering topic (see
 * roadmaps.ts's Phase 6 Update wiring). resources are intentionally empty on
 * every topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate
 * a resource" policy this follows.
 */
export const roboticsEngineerTopicDetails: Record<string, TopicDetail> = {
  'robotics-engineer-beginner-1': {
    whatItIs: t([
      'Electronics fundamentals cover the basic building blocks of circuits — voltage, current, resistance, and simple components — that every piece of hardware relies on.',
      'Electronics Fundamentals သည် Hardware တိုင်း မှီခိုနေသော Circuit များ၏ အခြေခံ အစိတ်အပိုင်းများ — Voltage, Current, Resistance, ရိုးရှင်းသော Component များ — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Robotics is fundamentally about controlling physical hardware — without basic electronics knowledge, even simple wiring mistakes become confusing and can damage components.',
      'Robotics သည် ရုပ်ပိုင်း Hardware ကို ထိန်းချုပ်ခြင်းအကြောင်း အခြေခံကျသည် — အခြေခံ Electronics အသိပညာ မရှိပါက ရိုးရှင်းသော Wiring အမှားများပင် ရှုပ်ထွေးလာပြီး Component များ ပျက်စီးစေနိုင်သည်။',
    ]),
    whereUsed: t([
      'The foundation underneath every robot, sensor, and embedded device — nothing else in robotics works without it.',
      'Robot, Sensor, Embedded Device တိုင်း၏ အောက်ခြေ အခြေခံ ဖြစ်သည် — ၎င်းမရှိပါက Robotics ရှိ အခြားအရာများ အလုပ်မလုပ်ပါ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Voltage, current, and resistance', 'Voltage, Current, Resistance'],
      ['Basic components (resistors, LEDs, breadboards)', 'အခြေခံ Component များ (Resistors, LEDs, Breadboards)'],
      ['Reading a simple circuit diagram', 'Circuit Diagram ရိုးရှင်းတစ်ခု ဖတ်ခြင်း'],
      ['Basic safety practices', 'အခြေခံ Safety Practice များ'],
    ]),
    steps: [
      step(
        ['Understand voltage, current, and resistance', 'Voltage, Current, Resistance နားလည်ခြင်း'],
        [
          ['Voltage as electrical "pressure", current as flow, resistance as opposition to flow', 'Voltage ကို Electrical "Pressure" အဖြစ်၊ Current ကို Flow အဖြစ်၊ Resistance ကို Flow ကို ဆန့်ကျင်မှုအဖြစ်'],
          ["Ohm's law: how the three relate", 'Ohm ၏ ဥပဒေ — သုံးခုစလုံး မည်သို့ ဆက်စပ်သည်ကို'],
        ],
        [
          ["Use Ohm's law to calculate the current in a simple circuit given voltage and resistance", 'Voltage နှင့် Resistance ပေးထားသော ရိုးရှင်းသော Circuit တစ်ခုတွင် Current ကို တွက်ချက်ရန် Ohm ၏ ဥပဒေကို သုံးပါ'],
        ],
      ),
      step(
        ['Build a simple circuit on a breadboard', 'Breadboard တစ်ခုပေါ်တွင် Circuit ရိုးရှင်းတစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Wiring a basic LED circuit with a resistor', 'Resistor ပါသော အခြေခံ LED Circuit ဖြတ်ဆက်ခြင်း'],
          ['Why a resistor is needed to protect an LED from too much current', 'LED ကို Current များလွန်းခြင်းမှ ကာကွယ်ရန် Resistor ဘာကြောင့် လိုအပ်သည်ကို'],
        ],
        [
          ['Wire a simple LED circuit with a resistor on a breadboard', 'Breadboard ပေါ်တွင် Resistor ပါသော LED Circuit ရိုးရှင်းတစ်ခု ဖြတ်ဆက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a simple breadboard circuit with an LED, a resistor, and a switch, and explain each component\'s role in your own words.',
      'LED, Resistor, Switch ပါသော Breadboard Circuit ရိုးရှင်းတစ်ခု တည်ဆောက်ပြီး Component တစ်ခုစီ၏ အခန်းကဏ္ဍကို ကိုယ်ပိုင်စကားလုံးများဖြင့် ရှင်းပြပါ။',
    ]),
    verify: t([
      'Could you explain, to someone with no electronics background, why an LED needs a resistor in its circuit?',
      'Electronics Background မရှိသူတစ်ဦးအား LED တစ်ခုသည် ၎င်း၏ Circuit တွင် Resistor ဘာကြောင့် လိုအပ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always double-check polarity and resistor values before powering a circuit — it prevents most beginner mistakes.', 'Circuit တစ်ခုကို Power မပေးမီ Polarity နှင့် Resistor Value များကို နှစ်ကြိမ် စစ်ဆေးပါ — ၎င်းက Beginner အမှားအများစုကို ကာကွယ်ပေးသည်။'],
      ['Build circuits on a breadboard first before soldering anything permanently.', 'တစ်ခုခုကို အပြီးတိုင် Solder မလုပ်မီ Breadboard ပေါ်တွင် Circuit များ အရင်တည်ဆောက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Connecting an LED directly to power without a current-limiting resistor.', 'Current-limiting Resistor မပါဘဲ LED တစ်ခုကို Power သို့ တိုက်ရိုက် ချိတ်ဆက်ခြင်း။'],
      ['Not checking component polarity before wiring.', 'Wiring မလုပ်မီ Component Polarity ကို မစစ်ဆေးခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-beginner-1', [
      ["Calculate current using Ohm's law", "Ohm ၏ ဥပဒေသုံး၍ Current တွက်ချက်ပါ"],
      ['Wire a simple LED circuit', 'LED Circuit ရိုးရှင်းတစ်ခု ဖြတ်ဆက်ပါ'],
      ['Add a switch to control the circuit', 'Circuit ကို ထိန်းချုပ်ရန် Switch တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain voltage, current, and resistance', 'Voltage, Current, Resistance ရှင်းပြနိုင်သည်'],
      ["Apply Ohm's law to a simple circuit", 'ရိုးရှင်းသော Circuit တစ်ခုတွင် Ohm ၏ ဥပဒေ အသုံးချနိုင်သည်'],
      ['Build a basic breadboard circuit safely', 'အခြေခံ Breadboard Circuit တစ်ခုကို ဘေးကင်းစွာ တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-beginner-2': {
    whatItIs: t([
      'Microcontrollers like Arduino are small computers designed to control physical hardware — reading sensors and controlling motors, lights, and other devices.',
      'Arduino ကဲ့သို့ Microcontroller များသည် ရုပ်ပိုင်း Hardware ကို ထိန်းချုပ်ရန် Design ဆွဲထားသော Computer သေးငယ်များ ဖြစ်သည် — Sensor များ ဖတ်ခြင်းနှင့် Motor, Light, Device တခြားများ ထိန်းချုပ်ခြင်း။',
    ]),
    whyItMatters: t([
      'A microcontroller is the "brain" that connects code to the physical world — it is the single most common starting point for hobbyist and professional robotics alike.',
      'Microcontroller သည် Code ကို ရုပ်ပိုင်းကမ္ဘာနှင့် ချိတ်ဆက်ပေးသော "Brain" ဖြစ်သည် — ၎င်းသည် Hobbyist နှင့် Professional Robotics နှစ်ခုစလုံးအတွက် အသုံးအများဆုံး စတင်ရာနေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used in hobbyist projects, industrial automation, consumer devices, and as a learning platform in schools and maker communities worldwide.',
      'Hobbyist Project, Industrial Automation, Consumer Device များနှင့် ကမ္ဘာတစ်ဝှမ်းရှိ ကျောင်းများနှင့် Maker Community များတွင် Learning Platform တစ်ခုအဖြစ် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the basic electronics knowledge from the previous topic.',
      'ယခင် Topic မှ အခြေခံ Electronics အသိပညာ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Setting up the Arduino IDE and uploading your first program', 'Arduino IDE Setup လုပ်ပြီး ပထမဆုံး Program Upload လုပ်ခြင်း'],
      ['Digital vs analog pins', 'Digital နှင့် Analog Pin များ'],
      ['Reading input and writing output', 'Input ဖတ်ခြင်းနှင့် Output ရေးခြင်း'],
      ['The setup() and loop() structure', 'setup() နှင့် loop() ဖွဲ့စည်းပုံ'],
    ]),
    steps: [
      step(
        ['Upload and run your first program', 'ပထမဆုံး Program Upload လုပ်ပြီး Run ခြင်း'],
        [
          ['setup() runs once; loop() runs continuously', 'setup() သည် တစ်ကြိမ်တည်း Run ပြီး loop() သည် ဆက်တိုက် Run သည်'],
          ['Uploading code from the Arduino IDE to the board', 'Arduino IDE မှ Board သို့ Code Upload လုပ်ခြင်း'],
        ],
        [
          ['Upload the classic "blink" program and get an onboard LED blinking at a custom interval', 'Classic "Blink" Program ကို Upload လုပ်ပြီး Onboard LED ကို Custom Interval တစ်ခုတွင် Blink ဖြစ်စေပါ'],
        ],
      ),
      step(
        ['Read digital and analog input', 'Digital နှင့် Analog Input ဖတ်ခြင်း'],
        [
          ['Reading a button press (digital input)', 'Button Press (Digital Input) ဖတ်ခြင်း'],
          ['Reading a variable value like light level (analog input)', 'Light Level ကဲ့သို့ Variable Value (Analog Input) ဖတ်ခြင်း'],
        ],
        [
          ['Wire a button and write a program that turns an LED on only while the button is held', 'Button တစ်ခု ဖြတ်ဆက်ပြီး Button ဖိထားစဉ်သာ LED ကို ဖွင့်ပေးသော Program တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small project combining a button (digital input) and an LED (digital output) with custom logic — for example, a toggle that changes state each time the button is pressed.',
      'Custom Logic ပါသော Button (Digital Input) နှင့် LED (Digital Output) ပေါင်းစပ်ထားသော Project သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ Button ဖိတိုင်း State ပြောင်းလဲပေးသော Toggle တစ်ခု။',
    ]),
    verify: t([
      'Could you explain the difference between setup() and loop(), and why each is structured that way?',
      'setup() နှင့် loop() ကြား ကွာခြားချက်ကို ရှင်းပြပြီး တစ်ခုစီ ဘာကြောင့် ထိုသို့ ဖွဲ့စည်းထားသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with the official example sketches before writing your own from scratch.', 'ကိုယ်ပိုင် Sketch ကို အစမှ မရေးမီ တရားဝင် ဥပမာ Sketch များနှင့် စတင်ပါ။'],
      ['Use the serial monitor to print values while debugging — it is your best tool for seeing what is actually happening.', 'Debug လုပ်နေစဉ် Value များ Print ရန် Serial Monitor ကို သုံးပါ — ၎င်းသည် တကယ်ဖြစ်နေသည်ကို မြင်ရန် သင့်အတွက် အကောင်းဆုံး Tool ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Putting code that should run once inside loop() by mistake.', 'တစ်ကြိမ်တည်း Run သင့်သော Code ကို loop() ထဲသို့ မတော်တဆ ထည့်ခြင်း။'],
      ['Not using a pull-down/pull-up resistor with a button, causing unreliable readings.', 'Button တစ်ခုနှင့် Pull-down/Pull-up Resistor မသုံးခြင်းက ယုံကြည်ရမှုမရှိသော Reading များ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('robotics-engineer-beginner-2', [
      ['Upload and customize the blink program', 'Blink Program ကို Upload လုပ်ပြီး Customize လုပ်ပါ'],
      ['Read a button as digital input', 'Button တစ်ခုကို Digital Input အဖြစ် ဖတ်ပါ'],
      ['Build a button-controlled LED toggle', 'Button-controlled LED Toggle တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Upload and run a program on a microcontroller', 'Microcontroller တစ်ခုပေါ်တွင် Program တစ်ခု Upload လုပ်ပြီး Run နိုင်သည်'],
      ['Read digital and analog input', 'Digital နှင့် Analog Input ဖတ်နိုင်သည်'],
      ['Write custom logic combining input and output', 'Input နှင့် Output ပေါင်းစပ်ထားသော Custom Logic ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-beginner-3': {
    whatItIs: t([
      'Programming fundamentals for robotics are the same core building blocks as any software — variables, conditionals, loops, functions — applied to controlling physical hardware.',
      'Robotics အတွက် Programming Fundamentals များသည် Software မည်သည်နှင့်မဆို တူညီသော အခြေခံ အုတ်မြစ်များ — Variables, Conditionals, Loops, Functions — ဖြစ်ပြီး ရုပ်ပိုင်း Hardware ကို ထိန်းချုပ်ရာတွင် အသုံးချထားသည်။',
    ]),
    whyItMatters: t([
      'Robots need decision-making logic — react to a sensor, choose a direction, respond to a condition — which is exactly what programming fundamentals provide.',
      'Robot များသည် ဆုံးဖြတ်ချက်ချသော Logic — Sensor တစ်ခုကို တုံ့ပြန်ခြင်း၊ ဦးတည်ချက် ရွေးချယ်ခြင်း၊ Condition တစ်ခုကို တုံ့ပြန်ခြင်း — လိုအပ်ပြီး ၎င်းသည် Programming Fundamentals ပေးသောအရာ အတိအကျ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every piece of robot behavior — from a simple line-following robot to a complex autonomous system — is built from this same logic.',
      'Line-following Robot ရိုးရှင်းမှ ရှုပ်ထွေးသော Autonomous System အထိ Robot Behavior အားလုံးသည် ဤ Logic တူတူမှ တည်ဆောက်ထားသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Variables and data types', 'Variables နှင့် Data Types'],
      ['Conditionals (if/else) for decision-making', 'ဆုံးဖြတ်ချက်ချရန် Conditionals (if/else)'],
      ['Loops for repeated actions', 'ထပ်ခါထပ်ခါ လုပ်ဆောင်ချက်များအတွက် Loops'],
      ['Functions to organize robot behaviors', 'Robot Behavior များ စီစဉ်ရန် Functions'],
    ]),
    steps: [
      step(
        ['Use conditionals to make decisions', 'ဆုံးဖြတ်ချက်ချရန် Conditionals သုံးခြင်း'],
        [
          ['Reading a sensor value and branching behavior based on it', 'Sensor Value တစ်ခု ဖတ်ပြီး ၎င်းအပေါ် အခြေခံ၍ Behavior ကို ခွဲထုတ်ခြင်း'],
        ],
        [
          ['Write a program that reads a sensor value and turns an LED on only above a threshold', 'Sensor Value တစ်ခု ဖတ်ပြီး Threshold တစ်ခုအထက်တွင်သာ LED ဖွင့်ပေးသော Program တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Organize behaviors into functions', 'Behavior များကို Functions များအဖြစ် စီစဉ်ခြင်း'],
        [
          ['Breaking a robot\'s behavior into named, reusable functions', 'Robot Behavior ကို နာမည်ပေးထားသော ပြန်လည်အသုံးပြုနိုင်သော Function များအဖြစ် ခွဲထုတ်ခြင်း'],
        ],
        [
          ['Refactor your sensor-and-LED program so the sensor-reading and decision logic are each in their own function', 'Sensor Reading နှင့် ဆုံးဖြတ်ချက်ချသော Logic ကို ၎င်းတို့ကိုယ်ပိုင် Function ထဲတွင် ရှိနေအောင် သင့် Sensor-and-LED Program ကို Refactor လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small program that reads a sensor value in a loop and reacts differently based on three different threshold ranges (e.g. low/medium/high), organized into clear functions.',
      'ရှင်းလင်းသော Function များအဖြစ် စီစဉ်ထားသော Threshold Range သုံးမျိုး (ဥပမာ Low/Medium/High) အပေါ် အခြေခံ၍ မတူညီစွာ တုံ့ပြန်သော Sensor Value ကို Loop တစ်ခုတွင် ဖတ်သော Program သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you write a program that makes a decision based on a sensor reading, without looking anything up?',
      'တစ်ခုမှ ရှာမကြည့်ဘဲ Sensor Reading တစ်ခုအပေါ် အခြေခံ၍ ဆုံးဖြတ်ချက်ချသော Program တစ်ခု ရေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Test sensor-reading code in isolation before combining it with decision logic.', 'ဆုံးဖြတ်ချက်ချသော Logic နှင့် မပေါင်းစပ်မီ Sensor-reading Code ကို သီးသန့် Test လုပ်ပါ။'],
      ['Print sensor values to the serial monitor while tuning threshold values.', 'Threshold Value များ ချိန်ညှိနေစဉ် Sensor Value များကို Serial Monitor သို့ Print ချပါ။'],
    ]),
    commonMistakes: list([
      ['Hardcoding a threshold value without testing what the sensor actually reports in real conditions.', 'Sensor တစ်ခု လက်တွေ့ အခြေအနေများတွင် တကယ်ဘာ Report လုပ်သည်ကို Test မလုပ်ဘဲ Threshold Value တစ်ခု Hardcode လုပ်ခြင်း။'],
      ['Writing all logic in one giant loop() instead of organizing it into functions.', 'Function များအဖြစ် မစီစဉ်ဘဲ Logic အားလုံးကို loop() ကြီးတစ်ခုတည်းတွင် ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-beginner-3', [
      ['Write conditional logic based on a sensor reading', 'Sensor Reading တစ်ခုအပေါ် အခြေခံသော Conditional Logic ရေးပါ'],
      ['Organize behavior into reusable functions', 'Behavior ကို ပြန်လည်အသုံးပြုနိုင်သော Functions အဖြစ် စီစဉ်ပါ'],
      ['Build a multi-threshold reactive program', 'Multi-threshold Reactive Program တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Use conditionals to make sensor-based decisions', 'Sensor-based ဆုံးဖြတ်ချက်များ ချရန် Conditionals သုံးနိုင်သည်'],
      ['Organize code into functions', 'Code ကို Functions များအဖြစ် စီစဉ်နိုင်သည်'],
      ['Write a program that reacts to real-world input', 'လက်တွေ့ကမ္ဘာ Input ကို တုံ့ပြန်သော Program တစ်ခု ရေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-beginner-4': {
    whatItIs: t([
      'Sensors basics cover how a robot perceives its environment — measuring distance, light, temperature, or motion and turning that into usable data.',
      'Sensors အခြေခံသည် Robot တစ်ခု ၎င်း၏ ပတ်ဝန်းကျင်ကို မည်သို့ သိမြင်သည်ကို လွှမ်းခြုံသည် — အကွာအဝေး, Light, Temperature (သို့) Motion ကို တိုင်းတာပြီး ၎င်းကို အသုံးဝင်သော Data အဖြစ် ပြောင်းလဲခြင်း။',
    ]),
    whyItMatters: t([
      'Without sensors, a robot is blind to its environment and can only follow a fixed, pre-programmed sequence — sensors are what make real interaction with the world possible.',
      'Sensor များ မရှိပါက Robot တစ်ခုသည် ၎င်း၏ ပတ်ဝန်းကျင်ကို မမြင်နိုင်ဘဲ ကြိုတင် Program ရေးထားသော အစီအစဉ်ကိုသာ လိုက်နိုင်သည် — Sensor များသည် ကမ္ဘာနှင့် တကယ့် Interaction ကို ဖြစ်နိုင်စေသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in essentially every robot — distance sensors for obstacle avoidance, light sensors for line-following, temperature sensors for environmental monitoring.',
      'Robot နီးပါးအားလုံးတွင် ရှိသည် — အတားအဆီး ရှောင်ရှားရန် Distance Sensor, Line-following အတွက် Light Sensor, ပတ်ဝန်းကျင် စောင့်ကြည့်ရန် Temperature Sensor။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the digital/analog input skills from the microcontroller topic.',
      'Microcontroller Topic မှ Digital/Analog Input ကျွမ်းကျင်မှုများအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Common sensor types (ultrasonic distance, light, temperature)', 'အများသုံး Sensor အမျိုးအစားများ (Ultrasonic Distance, Light, Temperature)'],
      ['Reading raw sensor values', 'Raw Sensor Value များ ဖတ်ခြင်း'],
      ['Calibrating a sensor to real-world units', 'Sensor တစ်ခုကို လက်တွေ့ကမ္ဘာ Unit များသို့ Calibrate လုပ်ခြင်း'],
      ['Filtering noisy sensor readings', 'Noisy Sensor Reading များ Filter လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Read and interpret a real sensor', 'Sensor အစစ်တစ်ခု ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Wiring a distance or light sensor and reading its raw output', 'Distance (သို့) Light Sensor တစ်ခု ဖြတ်ဆက်ပြီး ၎င်း၏ Raw Output ဖတ်ခြင်း'],
        ],
        [
          ['Wire an ultrasonic or light sensor and print its raw readings to the serial monitor', 'Ultrasonic (သို့) Light Sensor တစ်ခု ဖြတ်ဆက်ပြီး ၎င်း၏ Raw Reading များကို Serial Monitor သို့ Print ချပါ'],
        ],
      ),
      step(
        ['Handle noisy readings', 'Noisy Reading များ ကိုင်တွယ်ခြင်း'],
        [
          ['Real sensor readings fluctuate — averaging multiple readings gives a more stable value', 'Sensor Reading အစစ်များသည် ပြောင်းလဲနေသည် — Reading များစွာကို ပျမ်းမျှယူခြင်းက ပိုတည်ငြိမ်သော Value ပေးသည်'],
        ],
        [
          ['Take several readings from your sensor and average them to produce a more stable value', 'သင့် Sensor မှ Reading အနည်းငယ် ယူပြီး ၎င်းတို့ကို ပျမ်းမျှယူ၍ ပိုတည်ငြိမ်သော Value ထုတ်လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small project that reads a sensor, averages several readings for stability, and reacts to the result — for example, an LED that gets brighter as an object gets closer.',
      'Sensor တစ်ခုကို ဖတ်ပြီး တည်ငြိမ်မှုအတွက် Reading အနည်းငယ် ပျမ်းမျှယူကာ ရလဒ်ကို တုံ့ပြန်သော Project သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ Object တစ်ခု ပိုနီးလာလေ ပိုတောက်ပလာသော LED တစ်ခု။',
    ]),
    verify: t([
      'If your sensor readings jump around unpredictably, could you explain why and what you would do about it?',
      'သင့် Sensor Reading များသည် ခန့်မှန်း၍မရဘဲ ခုန်နေလျှင် ဘာကြောင့်ဆိုသည်နှင့် ၎င်းအတွက် ဘာလုပ်မည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always print raw sensor values first before trying to act on them — confirm the sensor works before building logic on top.', 'Sensor Value များကို လုပ်ဆောင်ခြင်းမပြုမီ Raw Sensor Value များကို ဦးစွာ Print ချပါ — Logic မတည်ဆောက်မီ Sensor အလုပ်လုပ်ကြောင်း အတည်ပြုပါ။'],
      ['Average multiple readings when a sensor is noisy — a single reading is rarely reliable.', 'Sensor Noisy ဖြစ်သည့်အခါ Reading များစွာကို ပျမ်းမျှယူပါ — Reading တစ်ခုတည်းသည် ယုံကြည်ရမှု ရှားရှားပါးပါးသာ ရှိသည်။'],
    ]),
    commonMistakes: list([
      ['Trusting a single sensor reading without accounting for noise.', 'Noise ကို ထည့်မတွက်ဘဲ Sensor Reading တစ်ခုတည်းကို ယုံကြည်ခြင်း။'],
      ['Not confirming a sensor works correctly before building complex logic around it.', 'ရှုပ်ထွေးသော Logic မတည်ဆောက်မီ Sensor တစ်ခု မှန်ကန်စွာ အလုပ်လုပ်ကြောင်း မအတည်ပြုခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-beginner-4', [
      ['Wire and read a distance or light sensor', 'Distance (သို့) Light Sensor တစ်ခု ဖြတ်ဆက်ပြီး ဖတ်ပါ'],
      ['Average multiple readings for stability', 'တည်ငြိမ်မှုအတွက် Reading များစွာ ပျမ်းမျှယူပါ'],
      ['Build a sensor-reactive project', 'Sensor-reactive Project တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Wire and read a common sensor type', 'အများသုံး Sensor အမျိုးအစားတစ်ခု ဖြတ်ဆက်ပြီး ဖတ်နိုင်သည်'],
      ['Handle noisy sensor readings', 'Noisy Sensor Reading များ ကိုင်တွယ်နိုင်သည်'],
      ['Build a project that reacts to sensor input', 'Sensor Input ကို တုံ့ပြန်သော Project တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-core-1': {
    whatItIs: t([
      'Actuators and motors are the components that let a robot actually move or apply physical force — the "muscles" that turn code into action.',
      'Actuators နှင့် Motors များသည် Robot တစ်ခုအား ရုပ်ပိုင်း ရွေ့လျားစေရန် (သို့) Force ချရန် ခွင့်ပြုသော Component များ ဖြစ်သည် — Code ကို လုပ်ဆောင်ချက်အဖြစ် ပြောင်းလဲပေးသော "Muscles" များ။',
    ]),
    whyItMatters: t([
      'Sensing the world is only half of robotics — actuators are how a robot actually does something in response, which is the whole point.',
      'ကမ္ဘာကို သိမြင်ခြင်းသည် Robotics ၏ တစ်ဝက်သာ ဖြစ်သည် — Actuator များသည် Robot တစ်ခု တုံ့ပြန်၍ တကယ် တစ်ခုခုလုပ်ဆောင်နိုင်သော နည်းလမ်း ဖြစ်ပြီး ၎င်းသည် ရည်ရွယ်ချက် တစ်ခုလုံး ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Present in every moving robot — wheels, arms, grippers — and in countless non-robotics devices like fans, pumps, and automated doors.',
      'ရွေ့လျားသော Robot တိုင်းတွင် ရှိသည် — Wheels, Arms, Grippers — နှင့် Fan, Pump, Automated Door ကဲ့သို့ Non-robotics Device မရေတွက်နိုင်လောက်များစွာတွင်လည်း ရှိသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the electronics and microcontroller basics from the Beginner stage.',
      'Beginner အဆင့်မှ Electronics နှင့် Microcontroller အခြေခံများ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['DC motors vs. servo motors', 'DC Motor နှင့် Servo Motor'],
      ['Motor drivers and why they are needed', 'Motor Driver များနှင့် ဘာကြောင့် လိုအပ်သလဲ'],
      ['Controlling motor speed and direction', 'Motor Speed နှင့် Direction ထိန်းချုပ်ခြင်း'],
      ['Power considerations for motors', 'Motor များအတွက် Power စဉ်းစားချက်များ'],
    ]),
    steps: [
      step(
        ['Control a servo motor', 'Servo Motor တစ်ခု ထိန်းချုပ်ခြင်း'],
        [
          ['Servo motors move to a specific angle based on a command', 'Servo Motor များသည် Command တစ်ခုအပေါ် အခြေခံ၍ Angle သီးခြားတစ်ခုသို့ ရွှေ့သည်'],
        ],
        [
          ['Wire a servo motor and write a program that sweeps it between two angles', 'Servo Motor တစ်ခု ဖြတ်ဆက်ပြီး Angle နှစ်ခုကြား Sweep ဖြစ်စေသော Program တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Control a DC motor with a driver', 'Motor Driver တစ်ခုဖြင့် DC Motor တစ်ခု ထိန်းချုပ်ခြင်း'],
        [
          ['Why a microcontroller cannot directly power most motors, and a motor driver is needed', 'Microcontroller တစ်ခုသည် Motor အများစုကို ဘာကြောင့် တိုက်ရိုက် Power မပေးနိုင်ဘဲ Motor Driver လိုအပ်သည်ကို'],
          ['Controlling speed and direction through a driver', 'Driver တစ်ခုမှတစ်ဆင့် Speed နှင့် Direction ထိန်းချုပ်ခြင်း'],
        ],
        [
          ['Wire a DC motor through a motor driver and control its speed and direction from code', 'DC Motor တစ်ခုကို Motor Driver မှတစ်ဆင့် ဖြတ်ဆက်ပြီး ၎င်း၏ Speed နှင့် Direction ကို Code မှ ထိန်းချုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small project combining a servo and a DC motor with driver — for example, a simple pan mechanism (servo) with a spinning element (DC motor) — controlled from one program.',
      'Servo နှင့် Driver ပါသော DC Motor ပေါင်းစပ်ထားသော Project သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ Pan Mechanism ရိုးရှင်း (Servo) နှင့် Spinning Element (DC Motor) — Program တစ်ခုတည်းမှ ထိန်းချုပ်ထားပြီး။',
    ]),
    verify: t([
      'Could you explain why you cannot just wire a DC motor directly to a microcontroller pin the way you would an LED?',
      'DC Motor တစ်ခုကို LED ကဲ့သို့ Microcontroller Pin တစ်ခုသို့ တိုက်ရိုက် ဘာကြောင့် ဖြတ်ဆက်၍မရသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check a motor\'s power requirements before wiring it — underpowering or overpowering can damage components.', 'Wiring မလုပ်မီ Motor တစ်ခု၏ Power လိုအပ်ချက်များကို အမြဲစစ်ဆေးပါ — Power နည်းလွန်း (သို့) များလွန်းခြင်းက Component များ ပျက်စီးစေနိုင်သည်။'],
      ['Test a motor\'s behavior at low speed first before running it at full power.', 'Full Power ဖြင့် Run မီ Motor Behavior ကို Speed နည်းစွာဖြင့် ဦးစွာ Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to power a DC motor directly from a microcontroller pin, which can damage the board.', 'DC Motor တစ်ခုကို Microcontroller Pin မှ တိုက်ရိုက် Power ပေးရန် ကြိုးစားခြင်းက Board ကို ပျက်စီးစေနိုင်သည်။'],
      ['Confusing servo motor control (angle) with DC motor control (speed and direction).', 'Servo Motor Control (Angle) ကို DC Motor Control (Speed, Direction) နှင့် ရောထွေးခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-core-1', [
      ['Control a servo motor to sweep between angles', 'Angle များကြား Sweep ဖြစ်ရန် Servo Motor တစ်ခု ထိန်းချုပ်ပါ'],
      ['Control a DC motor through a driver', 'Driver တစ်ခုမှတစ်ဆင့် DC Motor တစ်ခု ထိန်းချုပ်ပါ'],
      ['Combine both into one project', 'နှစ်ခုစလုံးကို Project တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Control a servo motor', 'Servo Motor တစ်ခု ထိန်းချုပ်နိုင်သည်'],
      ['Control a DC motor through a motor driver', 'Motor Driver မှတစ်ဆင့် DC Motor တစ်ခု ထိန်းချုပ်နိုင်သည်'],
      ['Explain why motor drivers are necessary', 'Motor Driver များ ဘာကြောင့် လိုအပ်သည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-core-2': {
    whatItIs: t([
      'Embedded programming covers writing efficient, reliable code that runs directly on hardware with limited memory and processing power, unlike a full computer.',
      'Embedded Programming သည် Computer အပြည့်အစုံနှင့်မတူဘဲ Memory နှင့် Processing Power ကန့်သတ်ထားသော Hardware ပေါ်တွင် တိုက်ရိုက် Run သော ထိရောက်၍ ယုံကြည်စိတ်ချရသော Code ရေးသားခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Code that would run fine on a laptop can fail or behave unpredictably on a resource-constrained microcontroller — embedded programming has its own real constraints to design around.',
      'Laptop တစ်ခုပေါ်တွင် ကောင်းစွာ Run နိုင်သော Code သည် Resource ကန့်သတ်ထားသော Microcontroller တစ်ခုပေါ်တွင် Fail ဖြစ် (သို့) ခန့်မှန်း၍မရဘဲ Behave လုပ်နိုင်သည် — Embedded Programming တွင် Design ဆွဲရန် ၎င်းကိုယ်ပိုင် တကယ့် ကန့်သတ်ချက်များ ရှိသည်။',
    ]),
    whereUsed: t([
      'Every microcontroller-based project — robotics, IoT devices, wearables — relies on efficient embedded programming.',
      'Robotics, IoT Device, Wearables — Microcontroller-based Project တိုင်းသည် ထိရောက်သော Embedded Programming အပေါ် မှီခိုနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Memory constraints on microcontrollers', 'Microcontroller များပေါ်ရှိ Memory ကန့်သတ်ချက်များ'],
      ['Non-blocking code (avoiding delay() overuse)', 'Non-blocking Code (delay() အလွန်အကျွံ သုံးခြင်းကို ရှောင်ရှားခြင်း)'],
      ['Reading multiple inputs without freezing the program', 'Program ကို ရပ်တန့်မသွားစေဘဲ Input များစွာ ဖတ်ခြင်း'],
      ['Basic debugging with the serial monitor', 'Serial Monitor ဖြင့် အခြေခံ Debugging'],
    ]),
    steps: [
      step(
        ['Understand why delay() causes problems', 'delay() က ပြဿနာဖြစ်စေသည်ကို ဘာကြောင့်ဆိုသည် နားလည်ခြင်း'],
        [
          ['delay() blocks the entire program, so nothing else can happen during it', 'delay() သည် Program တစ်ခုလုံးကို ပိတ်ဆို့ထားသောကြောင့် ထိုအတွင်း အခြားဘာမှ ဖြစ်ပျက်နိုင်ခြင်း မရှိပါ'],
          ['Non-blocking timing using millis() instead', 'delay() အစား millis() သုံးသော Non-blocking Timing'],
        ],
        [
          ['Rewrite a blink program using millis() instead of delay(), so the LED blinks without freezing the rest of the program', 'delay() အစား millis() သုံး၍ Blink Program တစ်ခုကို ပြန်ရေးပါ — LED သည် Program ၏ ကျန်အပိုင်းကို မရပ်တန့်စေဘဲ Blink ဖြစ်စေသည်'],
        ],
      ),
      step(
        ['Read multiple inputs responsively', 'Input များစွာကို Responsive စွာ ဖတ်ခြင်း'],
        [
          ['Checking multiple sensors/buttons in a single loop pass without blocking delays', 'Blocking Delay မပါဘဲ Loop Pass တစ်ခုတည်းတွင် Sensor/Button များစွာ စစ်ဆေးခြင်း'],
        ],
        [
          ['Build a program that responds to two different buttons independently, without using delay()', 'delay() မသုံးဘဲ Button နှစ်ခု မသီးခြားစီ တုံ့ပြန်သော Program တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Rebuild one of your earlier projects (e.g. the button-and-LED toggle) to be fully non-blocking, using millis() instead of delay(), and add a second independent behavior running at the same time.',
      'သင့် ယခင် Project တစ်ခု (ဥပမာ Button-and-LED Toggle) ကို delay() အစား millis() သုံး၍ လုံးဝ Non-blocking ဖြစ်အောင် ပြန်တည်ဆောက်ပါ၊ တစ်ချိန်တည်း Run နေသော သီးခြား Behavior ဒုတိယတစ်ခု ထည့်ပါ။',
    ]),
    verify: t([
      'Could you explain why delay() can make a robot unresponsive, and what you would use instead?',
      'delay() က Robot တစ်ခုကို ဘာကြောင့် တုံ့ပြန်မှု မရှိစေနိုင်သည်ကို ရှင်းပြပြီး အစားထိုးအဖြစ် ဘာကို သုံးမည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Avoid delay() in anything that needs to be responsive — use millis()-based timing instead.', 'Responsive ဖြစ်ရန်လိုအပ်သော မည်သည့်အရာတွင်မဆို delay() ကို ရှောင်ရှားပါ — millis()-based Timing ကို အစားထိုးသုံးပါ။'],
      ['Use the serial monitor liberally while debugging embedded code — it is your main window into what is happening.', 'Embedded Code Debug လုပ်နေစဉ် Serial Monitor ကို လွတ်လပ်စွာ သုံးပါ — ၎င်းသည် ဖြစ်ပျက်နေသည်ကို မြင်ရန် သင့်အဓိက Window ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Overusing delay(), making a robot feel sluggish or unresponsive.', 'delay() ကို အလွန်အကျွံသုံးခြင်းက Robot တစ်ခုကို ချုတ်ချော် (သို့) တုံ့ပြန်မှု မရှိသလို ခံစားစေသည်။'],
      ['Not testing embedded code incrementally, making bugs hard to isolate.', 'Embedded Code ကို တဖြည်းဖြည်း Test မလုပ်ခြင်းက Bug များကို ခွဲထုတ်ရခက်စေသည်။'],
    ]),
    practiceTasks: tasks('robotics-engineer-core-2', [
      ['Rewrite a blink program using millis()', 'millis() သုံး၍ Blink Program တစ်ခု ပြန်ရေးပါ'],
      ['Read two inputs independently without delay()', 'delay() မသုံးဘဲ Input နှစ်ခု သီးခြားစီ ဖတ်ပါ'],
      ['Rebuild an earlier project to be non-blocking', 'ယခင် Project တစ်ခုကို Non-blocking ဖြစ်အောင် ပြန်တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain why delay() can cause problems', 'delay() က ပြဿနာဖြစ်စေနိုင်သည်ကို ရှင်းပြနိုင်သည်'],
      ['Use millis()-based non-blocking timing', 'millis()-based Non-blocking Timing သုံးနိုင်သည်'],
      ['Handle multiple inputs responsively', 'Input များစွာကို Responsive စွာ ကိုင်တွယ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-core-3': {
    whatItIs: t([
      'Robot control basics cover combining sensing and actuation into simple, coherent behaviors — the foundation of everything a robot actually does.',
      'Robot Control အခြေခံသည် Sensing နှင့် Actuation ကို ရိုးရှင်း၍ ယုတ္တိရှိသော Behavior များအဖြစ် ပေါင်းစပ်ခြင်းကို လွှမ်းခြုံသည် — Robot တစ်ခု တကယ်လုပ်ဆောင်သမျှ၏ အခြေခံ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'This is where a robot stops being a collection of separate parts and becomes an actual system that senses, decides, and acts.',
      'ဤနေရာသည် Robot တစ်ခုသည် အစိတ်အပိုင်းသီးခြားစီစုစည်းမှုဖြစ်ခြင်းမှ ရပ်တန့်ပြီး သိမြင်၊ ဆုံးဖြတ်၊ လုပ်ဆောင်သော System အစစ်တစ်ခု ဖြစ်လာသောနေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The core loop of every robot — line followers, obstacle avoiders, and far more complex systems all use this sense-decide-act pattern.',
      'Robot တိုင်း၏ ကျောရိုး — Line Follower, Obstacle Avoider, ပိုရှုပ်ထွေးသော System များအားလုံးသည် ဤ Sense-decide-act Pattern ကို သုံးကြသည်။',
    ]),
    prerequisiteNote: t([
      'Combines the sensors and actuators topics from earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းမှ Sensors နှင့် Actuators Topic များကို ပေါင်းစပ်ထားသည်။',
    ]),
    firstSteps: list([
      ['The sense-decide-act loop', 'Sense-decide-act Loop'],
      ['Simple reactive behaviors', 'ရိုးရှင်းသော Reactive Behavior များ'],
      ['Tuning behavior with thresholds', 'Threshold များဖြင့် Behavior ချိန်ညှိခြင်း'],
      ['Testing behavior safely', 'Behavior ကို ဘေးကင်းစွာ Test လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Build a simple reactive behavior', 'ရိုးရှင်းသော Reactive Behavior တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Sense (read a sensor), decide (check a condition), act (move a motor) as one repeating loop', 'Sense (Sensor ဖတ်ခြင်း), Decide (Condition စစ်ဆေးခြင်း), Act (Motor ရွှေ့ခြင်း) ကို ထပ်ခါထပ်ခါ Loop တစ်ခုအဖြစ်'],
        ],
        [
          ['Build a simple obstacle-avoidance behavior: reverse and turn when a distance sensor detects something close', 'ရိုးရှင်းသော Obstacle-avoidance Behavior တစ်ခု တည်ဆောက်ပါ — Distance Sensor တစ်ခုက အနီးအနားရှိ တစ်ခုခုကို တွေ့ရှိသည့်အခါ ပြန်လှည့်ပြီး လှည့်ပါ'],
        ],
      ),
      step(
        ['Tune behavior thresholds', 'Behavior Threshold များ ချိန်ညှိခြင်း'],
        [
          ['Adjusting sensor thresholds to make a behavior more or less sensitive', 'Behavior တစ်ခုကို ပို/နည်း Sensitive ဖြစ်စေရန် Sensor Threshold များ ချိန်ညှိခြင်း'],
        ],
        [
          ['Test your obstacle-avoidance behavior at three different threshold values and note how it changes', 'သင့် Obstacle-avoidance Behavior ကို Threshold Value မတူညီသုံးခုတွင် Test လုပ်ပြီး မည်သို့ ပြောင်းလဲသည်ကို မှတ်ချက်ပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small robot behavior that combines a sensor and a motor into a full sense-decide-act loop — for example, a simple obstacle-avoiding or light-following behavior — and tune its thresholds until it behaves reliably.',
      'Sensor နှင့် Motor ပေါင်းစပ်ထားသော Sense-decide-act Loop အပြည့်အစုံ Robot Behavior သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ Obstacle-avoiding (သို့) Light-following Behavior ရိုးရှင်း — ယုံကြည်စိတ်ချရအောင် Behave လုပ်သည်အထိ Threshold များ ချိန်ညှိပါ။',
    ]),
    verify: t([
      'Could you explain the sense-decide-act loop using your own robot behavior as the example?',
      'သင့်ကိုယ်ပိုင် Robot Behavior ကို ဥပမာအဖြစ်သုံး၍ Sense-decide-act Loop ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Test physical robot behaviors in a safe, open space away from fragile objects.', 'Robot Behavior များကို ကွဲလွယ်သော Object များနှင့် ဝေးရာ ဘေးကင်း၍ ကျယ်ဝန်းသော နေရာတွင် Test လုပ်ပါ။'],
      ['Tune one threshold at a time so you can clearly see its effect.', 'Effect ကို ရှင်းလင်းစွာ မြင်ရနိုင်ရန် Threshold တစ်ခုကို တစ်ကြိမ်တွင် တစ်ခုစီ ချိန်ညှိပါ။'],
    ]),
    commonMistakes: list([
      ['Testing a new robot behavior at full speed near fragile or expensive objects.', 'Robot Behavior အသစ်တစ်ခုကို ကွဲလွယ် (သို့) ဈေးကြီးသော Object များအနီးတွင် Full Speed ဖြင့် Test လုပ်ခြင်း။'],
      ['Changing multiple thresholds at once, making it unclear which change caused what effect.', 'Threshold များစွာကို တစ်ပြိုင်နက် ပြောင်းလဲခြင်းက မည်သည့် ပြောင်းလဲမှုက မည်သည့် Effect ဖြစ်စေသည်ကို မရှင်းလင်းစေပါ။'],
    ]),
    practiceTasks: tasks('robotics-engineer-core-3', [
      ['Build a sense-decide-act loop', 'Sense-decide-act Loop တစ်ခု တည်ဆောက်ပါ'],
      ['Tune behavior thresholds', 'Behavior Threshold များ ချိန်ညှိပါ'],
      ['Test the behavior safely and document results', 'Behavior ကို ဘေးကင်းစွာ Test လုပ်ပြီး ရလဒ်များ မှတ်တမ်းတင်ပါ'],
    ]),
    completionChecklist: list([
      ['Build a sense-decide-act behavior loop', 'Sense-decide-act Behavior Loop တစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Tune thresholds to adjust behavior', 'Behavior ချိန်ညှိရန် Threshold များ ချိန်ညှိနိုင်သည်'],
      ['Test robot behavior safely', 'Robot Behavior ကို ဘေးကင်းစွာ Test လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-core-4': {
    whatItIs: t([
      'Basic circuit design and prototyping covers planning and building a more complete circuit for a project, beyond single-component examples.',
      'Basic Circuit Design and Prototyping သည် Component တစ်ခုတည်း ဥပမာများကို ကျော်လွန်၍ Project တစ်ခုအတွက် ပိုပြည့်စုံသော Circuit တစ်ခု စီစဉ်ခြင်းနှင့် တည်ဆောက်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A real robot needs several components working together reliably — planning the full circuit before wiring prevents a tangle of mistakes later.',
      'Robot အစစ်တစ်ခုသည် Component များစွာ အတူတကွ ယုံကြည်စိတ်ချစွာ အလုပ်လုပ်ရန် လိုအပ်သည် — Wiring မလုပ်မီ Circuit အပြည့်အစုံ စီစဉ်ခြင်းက နောက်ပိုင်း အမှားများ ရှုပ်ထွေးမှုကို ကာကွယ်ပေးသည်။',
    ]),
    whereUsed: t([
      'Every real robotics project beyond the simplest single-sensor examples needs a properly planned circuit.',
      'ရိုးရှင်းဆုံး Single-sensor ဥပမာများ ကျော်လွန်သော Robotics Project အစစ်တိုင်းသည် သင့်လျော်စွာ စီစဉ်ထားသော Circuit တစ်ခု လိုအပ်သည်။',
    ]),
    prerequisiteNote: t([
      'Draws on the electronics, sensors, and actuators topics from earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းမှ Electronics, Sensors, Actuators Topic များကို အသုံးချသည်။',
    ]),
    firstSteps: list([
      ['Planning power distribution for multiple components', 'Component များစွာအတွက် Power Distribution စီစဉ်ခြင်း'],
      ['Avoiding pin conflicts', 'Pin Conflict များ ရှောင်ရှားခြင်း'],
      ['Organizing wiring for reliability', 'ယုံကြည်ရမှုအတွက် Wiring စီစဉ်ခြင်း'],
      ['Basic troubleshooting when a circuit does not work', 'Circuit တစ်ခု အလုပ်မလုပ်သည့်အခါ အခြေခံ Troubleshooting'],
    ]),
    steps: [
      step(
        ['Plan a multi-component circuit', 'Component များစွာပါသော Circuit တစ်ခု စီစဉ်ခြင်း'],
        [
          ['Sketching which pins each component uses before wiring anything', 'တစ်ခုခု မဖြတ်ဆက်မီ Component တစ်ခုစီ သုံးမည့် Pin များ ရေးဆွဲခြင်း'],
          ['Making sure power requirements across all components do not exceed what your setup can supply', 'Component အားလုံးတစ်လျှောက် Power လိုအပ်ချက်များသည် သင့် Setup ထောက်ပံ့နိုင်သည်ထက် မကျော်လွန်ကြောင်း သေချာစေခြင်း'],
        ],
        [
          ['Sketch a pin diagram for a project combining two sensors and one motor before wiring anything', 'တစ်ခုခု မဖြတ်ဆက်မီ Sensor နှစ်ခုနှင့် Motor တစ်ခု ပေါင်းစပ်ထားသော Project တစ်ခုအတွက် Pin Diagram တစ်ခု ရေးဆွဲပါ'],
        ],
      ),
      step(
        ['Build and troubleshoot the circuit', 'Circuit တည်ဆောက်ပြီး Troubleshoot လုပ်ခြင်း'],
        [
          ['Wiring one component at a time and testing each before adding the next', 'Component တစ်ခုချင်းစီ ဖြတ်ဆက်ပြီး နောက်တစ်ခု မထည့်မီ တစ်ခုချင်းစီ Test လုပ်ခြင်း'],
        ],
        [
          ['Build your planned multi-component circuit incrementally, testing each new component before adding the next', 'သင့် စီစဉ်ထားသော Multi-component Circuit ကို တဖြည်းဖြည်း တည်ဆောက်ပါ — Component အသစ်တစ်ခုစီကို မထည့်မီ Test လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design and build a circuit combining at least two sensors and one actuator for a small robot project, planning the pin layout on paper first and building it incrementally.',
      'Robot Project သေးငယ်တစ်ခုအတွက် Sensor အနည်းဆုံးနှစ်ခုနှင့် Actuator တစ်ခု ပေါင်းစပ်ထားသော Circuit တစ်ခု Design ဆွဲပြီး တည်ဆောက်ပါ — Pin Layout ကို စက္ကူပေါ်တွင် ဦးစွာ စီစဉ်ပြီး တဖြည်းဖြည်း တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'If a component in your circuit stops working, could you systematically isolate which one is the problem?',
      'သင့် Circuit ရှိ Component တစ်ခု အလုပ်မလုပ်တော့လျှင် မည်သည်က ပြဿနာဖြစ်သည်ကို စနစ်တကျ ဖယ်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always plan pin assignments on paper before wiring, especially as a project grows past two or three components.', 'အထူးသဖြင့် Project တစ်ခု Component နှစ်ခု (သို့) သုံးခု ကျော်လွန်ကြီးထွားလာသည့်အခါ Wiring မလုပ်မီ Pin Assignment များကို စက္ကူပေါ်တွင် အမြဲ စီစဉ်ပါ။'],
      ['Add one component at a time and test it before adding the next — this makes troubleshooting far easier.', 'Component တစ်ခုချင်းစီ ထည့်ပြီး နောက်တစ်ခု မထည့်မီ Test လုပ်ပါ — ၎င်းက Troubleshooting ကို အများကြီး ပိုလွယ်ကူစေသည်။'],
    ]),
    commonMistakes: list([
      ['Wiring an entire multi-component circuit at once instead of building it incrementally.', 'တဖြည်းဖြည်း တည်ဆောက်မည့်အစား Multi-component Circuit တစ်ခုလုံးကို တစ်ပြိုင်နက် ဖြတ်ဆက်ခြင်း။'],
      ['Not checking power requirements across all components before wiring.', 'Wiring မလုပ်မီ Component အားလုံးတစ်လျှောက် Power လိုအပ်ချက်များကို မစစ်ဆေးခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-core-4', [
      ['Sketch a pin diagram before wiring', 'Wiring မလုပ်မီ Pin Diagram တစ်ခု ရေးဆွဲပါ'],
      ['Build a circuit incrementally, testing each addition', 'Circuit တစ်ခုကို တဖြည်းဖြည်း တည်ဆောက်ပါ — ထပ်ထည့်တိုင်း Test လုပ်ပါ'],
      ['Troubleshoot a non-working component', 'အလုပ်မလုပ်သော Component တစ်ခု Troubleshoot လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Plan pin assignments before wiring', 'Wiring မလုပ်မီ Pin Assignment များ စီစဉ်နိုင်သည်'],
      ['Build a multi-component circuit incrementally', 'Multi-component Circuit တစ်ခုကို တဖြည်းဖြည်း တည်ဆောက်နိုင်သည်'],
      ['Troubleshoot a circuit systematically', 'Circuit တစ်ခုကို စနစ်တကျ Troubleshoot လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-intermediate-1': {
    whatItIs: t([
      'Sensor fusion and feedback control cover combining multiple sensor readings for a more reliable picture of the world, and using feedback to correct a robot\'s behavior continuously.',
      'Sensor Fusion နှင့် Feedback Control သည် ကမ္ဘာ၏ ပိုယုံကြည်ရသော ရုပ်ပုံအတွက် Sensor Reading များစွာကို ပေါင်းစပ်ခြင်းနှင့် Robot ၏ Behavior ကို ဆက်တိုက် ပြင်ဆင်ရန် Feedback သုံးခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A single sensor can be wrong or noisy — combining sensors and continuously correcting based on feedback is what makes robot behavior genuinely reliable.',
      'Sensor တစ်ခုတည်းသည် မှား (သို့) Noisy ဖြစ်နိုင်သည် — Sensor များ ပေါင်းစပ်ခြင်းနှင့် Feedback အပေါ် အခြေခံ၍ ဆက်တိုက် ပြင်ဆင်ခြင်းသည် Robot Behavior ကို တကယ့် ယုံကြည်ရအောင် ပြုလုပ်ပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used in balancing robots, precise positioning systems, and any robot that needs to correct its own errors continuously rather than just react once.',
      'Balancing Robot, တိကျသော Positioning System နှင့် တစ်ကြိမ်တည်း မတုံ့ပြန်ဘဲ ၎င်း၏ကိုယ်ပိုင် အမှားများကို ဆက်တိုက် ပြင်ဆင်ရန် လိုအပ်သော Robot မည်သည်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the sensor and robot control basics from earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းမှ Sensor နှင့် Robot Control အခြေခံများ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Combining readings from more than one sensor', 'Sensor တစ်ခုထက်ပိုသော Reading များ ပေါင်းစပ်ခြင်း'],
      ['The idea of a feedback loop', 'Feedback Loop ၏ အယူအဆ'],
      ['Basic proportional control (intuitively)', 'အခြေခံ Proportional Control (အလိုအလျောက် နားလည်မှု)'],
      ['Why feedback control is more stable than fixed reactions', 'Feedback Control သည် သတ်မှတ်ထားသော တုံ့ပြန်မှုများထက် ဘာကြောင့် ပိုတည်ငြိမ်သည်ကို'],
    ]),
    steps: [
      step(
        ['Combine multiple sensors for a better picture', 'ပိုကောင်းသော ရုပ်ပုံအတွက် Sensor များစွာ ပေါင်းစပ်ခြင်း'],
        [
          ['Using two sensors together to reduce the chance of a single bad reading causing a mistake', 'Reading မကောင်းတစ်ခုတည်းက အမှားတစ်ခု ဖြစ်စေခြင်းကို လျှော့ချရန် Sensor နှစ်ခုကို အတူတကွ သုံးခြင်း'],
        ],
        [
          ['Combine readings from two sensors (e.g. two distance sensors) and only trigger a behavior when both agree', 'Sensor နှစ်ခု (ဥပမာ Distance Sensor နှစ်ခု) မှ Reading များ ပေါင်းစပ်ပြီး နှစ်ခုစလုံး သဘောတူသည့်အခါသာ Behavior တစ်ခု Trigger ဖြစ်စေပါ'],
        ],
      ),
      step(
        ['Apply basic feedback control', 'အခြေခံ Feedback Control အသုံးချခြင်း'],
        [
          ['Proportional control: the correction is proportional to how far off you are from the target', 'Proportional Control — ပြင်ဆင်မှုသည် Target မှ မည်မျှ ဝေးသည်နှင့် Proportional ဖြစ်သည်'],
        ],
        [
          ['Implement a simple proportional controller that adjusts motor speed based on how far a sensor reading is from a target value', 'Sensor Reading သည် Target Value မှ မည်မျှ ဝေးသည်ကို အခြေခံ၍ Motor Speed ကို ချိန်ညှိသော Proportional Controller ရိုးရှင်းတစ်ခု အကောင်အထည်ဖော်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small feedback-controlled behavior — for example, a robot that slows down proportionally as it approaches an obstacle, rather than stopping abruptly at a fixed threshold.',
      'Feedback-controlled Behavior သေးငယ်တစ်ခု တည်ဆောက်ပါ — ဥပမာ သတ်မှတ်ထားသော Threshold တစ်ခုတွင် ရုတ်တရက် ရပ်တန့်မည့်အစား အတားအဆီးတစ်ခုကို ချဉ်းကပ်လာသည်နှင့်အမျှ Proportional ဖြစ်စွာ နှေးသွားသော Robot တစ်ခု။',
    ]),
    verify: t([
      'Could you explain why a proportionally-controlled robot behaves more smoothly than one that only reacts at a fixed threshold?',
      'Proportional Control ထားသော Robot တစ်ခုသည် Threshold သတ်မှတ်ထားရာတွင်သာ တုံ့ပြန်သော Robot တစ်ခုထက် ဘာကြောင့် ပိုချောမွေ့စွာ Behave လုပ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with proportional control before attempting more advanced control techniques.', 'ပိုအဆင့်မြင့် Control Technique များ မကြိုးစားမီ Proportional Control ဖြင့် စတင်ပါ။'],
      ['Test sensor combination logic with deliberately conflicting readings to see how your code handles disagreement.', 'သင့် Code သဘောထားကွဲလွဲမှုကို မည်သို့ ကိုင်တွယ်သည်ကို မြင်ရန် တမင် ဆန့်ကျင်ဘက် Reading များဖြင့် Sensor ပေါင်းစပ်မှု Logic ကို Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Relying on a single sensor for a critical safety behavior.', 'အရေးကြီးသော Safety Behavior တစ်ခုအတွက် Sensor တစ်ခုတည်းကို မှီခိုခြင်း။'],
      ['Using only fixed-threshold reactions where smooth proportional control would work far better.', 'Proportional Control ချောမွေ့စွာ ပိုအလုပ်ဖြစ်နိုင်သည့်နေရာတွင် Fixed-threshold တုံ့ပြန်မှုများကိုသာ သုံးခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-intermediate-1', [
      ['Combine readings from two sensors', 'Sensor နှစ်ခုမှ Reading များ ပေါင်းစပ်ပါ'],
      ['Implement a simple proportional controller', 'Proportional Controller ရိုးရှင်းတစ်ခု အကောင်အထည်ဖော်ပါ'],
      ['Build a smooth, proportionally-controlled behavior', 'ချောမွေ့၍ Proportional Control ထားသော Behavior တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Combine multiple sensor readings', 'Sensor Reading များစွာ ပေါင်းစပ်နိုင်သည်'],
      ['Explain the idea of a feedback loop', 'Feedback Loop ၏ အယူအဆကို ရှင်းပြနိုင်သည်'],
      ['Implement basic proportional control', 'အခြေခံ Proportional Control အကောင်အထည်ဖော်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-intermediate-2': {
    whatItIs: t([
      'Communication protocols like I2C, SPI, and UART are the standard ways microcontrollers talk to sensors, other chips, and each other.',
      'I2C, SPI, UART ကဲ့သို့ Communication Protocol များသည် Microcontroller များ Sensor များ၊ Chip တခြားများနှင့် အချင်းချင်း ပြောဆိုသောနည်းလမ်း စံများ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Many advanced sensors and modules communicate over these protocols rather than simple digital/analog pins — understanding them unlocks a much wider range of components.',
      'Sensor အဆင့်မြင့်နှင့် Module များစွာသည် ရိုးရှင်းသော Digital/Analog Pin များထက် ဤ Protocol များပေါ်တွင် ဆက်သွယ်ကြသည် — ၎င်းတို့ကို နားလည်ခြင်းက Component အကွာအဝေး ပိုကျယ်ပြန့်စွာ ဖွင့်ပေးသည်။',
    ]),
    whereUsed: t([
      'Used to connect displays, advanced sensors, memory chips, and communication modules across nearly all serious robotics and embedded projects.',
      'Display, Sensor အဆင့်မြင့်, Memory Chip, Communication Module များကို Robotics နှင့် Embedded Project အလေးထားဆုံးများ နီးပါးအားလုံးတစ်လျှောက် ချိတ်ဆက်ရန် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the embedded programming and sensor topics from earlier in this path.',
      'ဤ Path ရှေ့ပိုင်းမှ Embedded Programming နှင့် Sensor Topic များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['UART for simple serial communication', 'ရိုးရှင်းသော Serial Communication အတွက် UART'],
      ['I2C for connecting multiple devices on shared pins', 'Pin မျှဝေသည့်အပေါ်တွင် Device များစွာ ချိတ်ဆက်ရန် I2C'],
      ['SPI for faster, dedicated-pin communication', 'ပိုမြန်၍ Dedicated-pin Communication အတွက် SPI'],
      ['Reading a sensor\'s datasheet to find its protocol', 'Sensor တစ်ခု၏ Protocol ကို ရှာဖွေရန် Datasheet ဖတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Connect a device over I2C', 'I2C မှတစ်ဆင့် Device တစ်ခု ချိတ်ဆက်ခြင်း'],
        [
          ['I2C lets multiple devices share the same two pins using unique addresses', 'I2C သည် Device များစွာကို ထူးခြားသော Address များ သုံး၍ Pin နှစ်ခုတူတူ မျှဝေစေသည်'],
        ],
        [
          ['Wire an I2C sensor or display and read from it, noting its I2C address', 'I2C Sensor (သို့) Display တစ်ခု ဖြတ်ဆက်ပြီး ၎င်းမှ ဖတ်ပါ — ၎င်း၏ I2C Address ကို မှတ်ချက်ပြုပါ'],
        ],
      ),
      step(
        ['Understand when to use UART vs. I2C vs. SPI', 'UART, I2C, SPI ကို ဘယ်အချိန် သုံးမည်ကို နားလည်ခြင်း'],
        [
          ['UART for simple point-to-point communication, I2C for multiple devices on shared pins, SPI when speed matters most', 'ရိုးရှင်းသော Point-to-point Communication အတွက် UART, Pin မျှဝေထားသော Device များစွာအတွက် I2C, Speed အရေးကြီးဆုံးအခါ SPI'],
        ],
        [
          ['Given three example components, decide which protocol each would most likely use, based on their datasheets', 'ဥပမာ Component သုံးခု ပေးလိုက်လျှင် တစ်ခုစီသည် ၎င်းတို့၏ Datasheet အပေါ် အခြေခံ၍ မည်သည့် Protocol ကို အသုံးများနိုင်သည်ကို ဆုံးဖြတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Add an I2C or SPI-based component (e.g. a display or advanced sensor) to one of your earlier projects, reading its datasheet to wire and configure it correctly.',
      'သင့် ယခင် Project တစ်ခုသို့ I2C (သို့) SPI-based Component (ဥပမာ Display သို့ Sensor အဆင့်မြင့်) ထည့်ပါ — ၎င်းကို မှန်ကန်စွာ ဖြတ်ဆက်ပြီး Configure ချရန် ၎င်း၏ Datasheet ကို ဖတ်ပါ။',
    ]),
    verify: t([
      'Given a new sensor\'s datasheet, could you identify which communication protocol it uses and wire it accordingly?',
      'Sensor အသစ်တစ်ခု၏ Datasheet ပေးလိုက်လျှင် ၎င်းသုံးသော Communication Protocol ကို ဖော်ထုတ်ပြီး ၎င်းနှင့်အညီ ဖြတ်ဆက်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check a new component\'s datasheet for its exact protocol and address before wiring.', 'Wiring မလုပ်မီ Component အသစ်တစ်ခု၏ Datasheet ကို ၎င်း၏ Protocol နှင့် Address အတိအကျအတွက် အမြဲစစ်ဆေးပါ။'],
      ['Use an I2C scanner sketch to confirm a device\'s address if you are unsure.', 'သေချာမှုမရှိလျှင် Device တစ်ခု၏ Address ကို အတည်ပြုရန် I2C Scanner Sketch သုံးပါ။'],
    ]),
    commonMistakes: list([
      ['Wiring a component without checking its datasheet for the correct protocol and pins.', 'မှန်ကန်သော Protocol နှင့် Pin များအတွက် Datasheet ကို မစစ်ဆေးဘဲ Component တစ်ခု ဖြတ်ဆက်ခြင်း။'],
      ['Address conflicts on I2C when connecting multiple devices with the same default address.', 'Default Address တူတူပါသော Device များစွာ ချိတ်ဆက်သည့်အခါ I2C ပေါ်တွင် Address ပဋိပက္ခများ။'],
    ]),
    practiceTasks: tasks('robotics-engineer-intermediate-2', [
      ['Wire and read an I2C device', 'I2C Device တစ်ခု ဖြတ်ဆက်ပြီး ဖတ်ပါ'],
      ['Identify the right protocol for three example components', 'ဥပမာ Component သုံးခုအတွက် မှန်ကန်သော Protocol ဖော်ထုတ်ပါ'],
      ['Add a communication-protocol-based component to a project', 'Communication-protocol-based Component တစ်ခုကို Project တစ်ခုသို့ ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Connect a device over I2C', 'I2C မှတစ်ဆင့် Device တစ်ခု ချိတ်ဆက်နိုင်သည်'],
      ['Explain the difference between UART, I2C, and SPI', 'UART, I2C, SPI ကြား ကွာခြားချက် ရှင်းပြနိုင်သည်'],
      ['Read a datasheet to determine wiring and protocol', 'Wiring နှင့် Protocol ဆုံးဖြတ်ရန် Datasheet ဖတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-intermediate-3': {
    whatItIs: t([
      'ROS (Robot Operating System) is a widely-used framework for building more complex robot software, providing tools for communication between different parts of a robot\'s system.',
      'ROS (Robot Operating System) သည် Robot System ၏ အစိတ်အပိုင်းမတူညီများကြား ဆက်သွယ်ရေး Tool များ ပေးအပ်သော Robot Software ရှုပ်ထွေးများ တည်ဆောက်ရန် ကျယ်ပြန့်စွာ သုံးသော Framework တစ်ခု ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'As robot projects grow beyond a single microcontroller, a structured framework like ROS becomes essential for managing complexity — it is the industry standard for serious robotics work.',
      'Robot Project များသည် Microcontroller တစ်ခုတည်းထက် ကျော်လွန် ကြီးထွားလာသည်နှင့်အမျှ ROS ကဲ့သို့ ဖွဲ့စည်းထားသော Framework တစ်ခုသည် ရှုပ်ထွေးမှုကို စီမံရန် မရှိမဖြစ် လိုအပ်လာသည် — ၎င်းသည် Robotics အလုပ် အလေးထားဆုံးများအတွက် စက်မှုလုပ်ငန်း စံ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Widely used in research labs, universities, and industry for robots more complex than a single microcontroller can handle alone.',
      'Microcontroller တစ်ခုတည်း တစ်ဦးတည်း ကိုင်တွယ်နိုင်သည်ထက် ရှုပ်ထွေးသော Robot များအတွက် Research Lab, University, Industry တွင် ကျယ်ပြန့်စွာ သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'This is an introduction only — a full ROS setup is a substantial undertaking of its own, appropriate to explore once the fundamentals here are solid.',
      'ဤသည်မှာ နိဒါန်းသာ ဖြစ်သည် — ROS Setup အပြည့်အစုံသည် ၎င်းကိုယ်ပိုင် သိသိသာသာ လုပ်ငန်းတာဝန်တစ်ခု ဖြစ်ပြီး ဤနေရာရှိ Fundamental များ ခိုင်မာမှသာ လေ့လာသင့်သည်။',
    ]),
    firstSteps: list([
      ['Nodes: independent programs that do one job', 'Nodes — အလုပ်တစ်ခု လုပ်ဆောင်သော သီးခြား Program များ'],
      ['Topics: how nodes publish and subscribe to data', 'Topics — Nodes များ Data ကို မည်သို့ Publish လုပ်ပြီး Subscribe လုပ်သည်'],
      ['Messages: the structured data passed between nodes', 'Messages — Nodes များအကြား ပို့ဆောင်သော ဖွဲ့စည်းထားသော Data'],
      ['Why this structure helps larger robot software stay organized', 'ဤဖွဲ့စည်းပုံသည် Robot Software ကြီးများကို စနစ်တကျ ရှိနေစေရန် ဘာကြောင့် ကူညီသနည်း'],
    ]),
    steps: [
      step(
        ['Understand nodes, topics, and messages conceptually', 'Nodes, Topics, Messages ကို Concept အရ နားလည်ခြင်း'],
        [
          ['A node handles one responsibility (e.g. reading a sensor); topics let nodes share data without knowing about each other directly', 'Node တစ်ခုသည် တာဝန်တစ်ခု ကိုင်တွယ်သည် (ဥပမာ Sensor ဖတ်ခြင်း) — Topics များက Node များကို တစ်ခုနှင့်တစ်ခု တိုက်ရိုက် မသိဘဲ Data မျှဝေစေသည်'],
        ],
        [
          ['Sketch a simple ROS-style diagram for a robot with a sensor node, a decision node, and a motor node communicating via topics', 'Topics များမှတစ်ဆင့် ဆက်သွယ်နေသော Sensor Node, Decision Node, Motor Node ပါသော Robot တစ်ခုအတွက် ROS-style Diagram ရိုးရှင်းတစ်ခု ရေးဆွဲပါ'],
        ],
      ),
      step(
        ['Explore a basic ROS setup (or simulate the concept)', 'အခြေခံ ROS Setup တစ်ခု လေ့လာစူးစမ်းခြင်း (သို့) Concept ကို Simulate လုပ်ခြင်း'],
        [
          ['Running a simple example with two nodes communicating over a topic', 'Topic တစ်ခုမှတစ်ဆင့် ဆက်သွယ်နေသော Node နှစ်ခုပါသော ဥပမာရိုးရှင်းတစ်ခု Run ခြင်း'],
        ],
        [
          ['If ROS is available, run a basic publisher/subscriber example; if not, simulate the same idea in plain code with two separate functions communicating through a shared variable', 'ROS ရရှိနိုင်ပါက အခြေခံ Publisher/Subscriber ဥပမာတစ်ခု Run ပါ — မရရှိနိုင်ပါက Shared Variable တစ်ခုမှတစ်ဆင့် ဆက်သွယ်နေသော Function နှစ်ခုဖြင့် Idea တူတူကို Plain Code တွင် Simulate လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design (and, if possible, implement) a ROS-style node structure for a small robot project: separate nodes for sensing, decision-making, and actuation, communicating through defined topics.',
      'Robot Project သေးငယ်တစ်ခုအတွက် ROS-style Node ဖွဲ့စည်းပုံကို Design ဆွဲပါ (ဖြစ်နိုင်ပါက Implement လုပ်ပါ) — Sensing, Decision-making, Actuation အတွက် Node သီးခြားစီ၊ သတ်မှတ်ထားသော Topics များမှတစ်ဆင့် ဆက်သွယ်ထားပြီး။',
    ]),
    verify: t([
      'Could you explain why splitting robot software into separate nodes (sensing, deciding, acting) is more maintainable than one giant program?',
      'Robot Software ကို Node သီးခြားစီ (Sensing, Deciding, Acting) အဖြစ် ခွဲထုတ်ခြင်းသည် Program ကြီးတစ်ခုတည်းထက် ဘာကြောင့် ထိန်းသိမ်းရလွယ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['If ROS is not available to install, the node/topic/message concept is still valuable to understand and can be simulated in plain code.', 'ROS ကို Install မလုပ်နိုင်ပါက Node/Topic/Message Concept သည် နားလည်ရန် တန်ဖိုးရှိဆဲဖြစ်ပြီး Plain Code တွင် Simulate လုပ်နိုင်သည်။'],
      ['Start with the simplest possible node structure — two nodes communicating over one topic — before scaling up.', 'Scale တိုးမီ အလွယ်ကူဆုံး ဖြစ်နိုင်သော Node ဖွဲ့စည်းပုံ — Topic တစ်ခုမှတစ်ဆင့် ဆက်သွယ်နေသော Node နှစ်ခု — ဖြင့် စတင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to learn all of ROS at once instead of starting with the core node/topic/message concepts.', 'အဓိက Node/Topic/Message Concept များနှင့် မစတင်ဘဲ ROS တစ်ခုလုံးကို တစ်ပြိုင်နက် လေ့လာရန် ကြိုးစားခြင်း။'],
      ['Putting sensing, decision, and actuation logic all in one undivided program once complexity grows.', 'ရှုပ်ထွေးမှု ကြီးထွားလာသည့်အခါ Sensing, Decision, Actuation Logic အားလုံးကို မခွဲထားသော Program တစ်ခုတည်းတွင် ထားခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-intermediate-3', [
      ['Sketch a node/topic diagram for a robot', 'Robot တစ်ခုအတွက် Node/Topic Diagram တစ်ခု ရေးဆွဲပါ'],
      ['Run or simulate a basic publisher/subscriber example', 'အခြေခံ Publisher/Subscriber ဥပမာတစ်ခု Run (သို့) Simulate လုပ်ပါ'],
      ['Design a node structure for a small robot project', 'Robot Project သေးငယ်တစ်ခုအတွက် Node ဖွဲ့စည်းပုံတစ်ခု Design ဆွဲပါ'],
    ]),
    completionChecklist: list([
      ['Explain nodes, topics, and messages conceptually', 'Nodes, Topics, Messages ကို Concept အရ ရှင်းပြနိုင်သည်'],
      ['Understand a basic publisher/subscriber example', 'အခြေခံ Publisher/Subscriber ဥပမာတစ်ခု နားလည်သည်'],
      ['Design a node-based structure for a robot project', 'Robot Project တစ်ခုအတွက် Node-based ဖွဲ့စည်းပုံတစ်ခု Design ဆွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-intermediate-4': {
    whatItIs: t([
      'Building a simple autonomous robot means integrating sensing, decision-making, and movement into one complete system that operates without direct human control.',
      'Autonomous Robot ရိုးရှင်းတစ်ခု တည်ဆောက်ခြင်းဆိုသည်မှာ Sensing, Decision-making, Movement တို့ကို လူ့ ထိန်းချုပ်မှု တိုက်ရိုက်မရှိဘဲ လုပ်ဆောင်သော System အပြည့်အစုံတစ်ခုအဖြစ် ပေါင်းစပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'This is the capstone integration point of robotics — bringing together electronics, programming, sensors, actuators, and control into one working whole.',
      'ဤသည်မှာ Robotics ၏ Capstone ပေါင်းစည်းရာ အချက် ဖြစ်သည် — Electronics, Programming, Sensors, Actuators, Control ကို အလုပ်လုပ်သော တစ်ခုလုံးအဖြစ် အတူတကွ ယူဆောင်လာခြင်း။',
    ]),
    whereUsed: t([
      'The core pattern behind real autonomous systems — from simple line-following robots to warehouse robots to self-driving vehicles at a much larger scale.',
      'Line-following Robot ရိုးရှင်းများမှ Warehouse Robot များမှ Scale ပိုကြီးသော Self-driving Vehicle များအထိ Autonomous System အစစ်များ နောက်ကွယ်ရှိ အဓိက Pattern ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on everything from earlier in the Robotics Engineering path.',
      'ဤသည်မှာ Robotics Engineering Path ရှေ့ပိုင်းမှ အားလုံးကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Defining the robot\'s goal and constraints', 'Robot ၏ ရည်မှန်းချက်နှင့် ကန့်သတ်ချက်များ သတ်မှတ်ခြင်း'],
      ['Integrating sensors, control logic, and motors into one program', 'Sensors, Control Logic, Motors ကို Program တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ခြင်း'],
      ['Testing incrementally in a safe environment', 'ဘေးကင်းသော Environment တွင် တဖြည်းဖြည်း Test လုပ်ခြင်း'],
      ['Handling edge cases (e.g. no valid sensor reading)', 'Edge Case များ ကိုင်တွယ်ခြင်း (ဥပမာ Sensor Reading မှန်ကန်မှု မရှိခြင်း)'],
    ]),
    steps: [
      step(
        ['Define a clear, achievable robot goal', 'ရှင်းလင်း၍ အောင်မြင်နိုင်သော Robot ရည်မှန်းချက်တစ်ခု သတ်မှတ်ခြင်း'],
        [
          ['A specific, testable goal (e.g. "follow a line without losing it for 2 meters") beats a vague one', 'သတ်မှတ်ထားသော၊ Test လုပ်နိုင်သော ရည်မှန်းချက်တစ်ခု (ဥပမာ "Line တစ်ခုကို ၂ မီတာအတွင်း မပျောက်ဘဲ လိုက်ပါ") သည် မရှင်းလင်းသော ရည်မှန်းချက်ထက် ပိုကောင်းသည်'],
        ],
        [
          ['Write a one-paragraph specification for a simple autonomous robot behavior with a clear, testable success condition', 'ရှင်းလင်း၍ Test လုပ်နိုင်သော အောင်မြင်မှု Condition ပါသော Autonomous Robot Behavior ရိုးရှင်းတစ်ခုအတွက် စာပိုဒ်တစ်ပိုဒ် Specification ရေးပါ'],
        ],
      ),
      step(
        ['Integrate everything into one working system', 'အားလုံးကို အလုပ်လုပ်သော System တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ခြင်း'],
        [
          ['Combining sensing, decision logic, and motor control into a single non-blocking program', 'Sensing, Decision Logic, Motor Control ကို Non-blocking Program တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ခြင်း'],
          ['Testing incrementally: each piece working alone before combining them', 'တဖြည်းဖြည်း Test လုပ်ခြင်း — မပေါင်းစပ်မီ အပိုင်းတစ်ခုချင်းစီ တစ်ဦးတည်း အလုပ်လုပ်ခြင်း'],
        ],
        [
          ['Build your autonomous robot behavior, testing sensing, decision logic, and motor control separately before integrating them', 'Sensing, Decision Logic, Motor Control ကို မပေါင်းစပ်မီ သီးခြားစီ Test လုပ်ပြီး သင့် Autonomous Robot Behavior ကို တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a complete simple autonomous robot behavior (e.g. line-following, obstacle-avoidance, or light-following) end to end: a written spec, integrated sensing/decision/action code, and testing against your defined success condition.',
      'Simple Autonomous Robot Behavior အပြည့်အစုံ (ဥပမာ Line-following, Obstacle-avoidance, Light-following) ကို End to End တည်ဆောက်ပါ — ရေးသားထားသော Spec, ပေါင်းစပ်ထားသော Sensing/Decision/Action Code နှင့် သင့် သတ်မှတ်ထားသော အောင်မြင်မှု Condition အပေါ် Testing။',
    ]),
    verify: t([
      'Could you demonstrate your robot meeting the specific success condition you defined, and explain what happens when a sensor gives an unexpected reading?',
      'သင် သတ်မှတ်ထားသော သီးခြား အောင်မြင်မှု Condition ကို သင့် Robot ဖြည့်ဆည်းကြောင်း သရုပ်ပြနိုင်ပြီး Sensor တစ်ခုက မမျှော်လင့်ထားသော Reading ပေးလျှင် ဘာဖြစ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Write your success condition down before building — it keeps you honest about whether the project actually works.', 'တည်ဆောက်မီ သင့် အောင်မြင်မှု Condition ကို ရေးချထားပါ — ၎င်းက Project တကယ် အလုပ်ဖြစ်ခြင်း/မဖြစ်ခြင်းအတွက် သင့်ကို ရိုးသားနေစေသည်။'],
      ['Test each component in isolation first — integration bugs are much easier to find when you know each part already works.', 'Component တစ်ခုချင်းစီကို ဦးစွာ သီးသန့် Test လုပ်ပါ — အစိတ်အပိုင်းတစ်ခုစီ အလုပ်လုပ်ကြောင်း သိထားလျှင် Integration Bug များကို ရှာဖွေရန် အများကြီး ပိုလွယ်ကူသည်။'],
    ]),
    commonMistakes: list([
      ['Skipping a clear success condition, making it impossible to know if the project actually succeeded.', 'ရှင်းလင်းသော အောင်မြင်မှု Condition ကို ကျော်ခြင်းက Project တကယ် အောင်မြင်ခြင်း/မအောင်မြင်ခြင်း သိရန် မဖြစ်နိုင်စေသည်။'],
      ['Integrating everything at once instead of testing each piece separately first.', 'ဦးစွာ အပိုင်းတစ်ခုချင်းစီ သီးခြား Test မလုပ်ဘဲ အားလုံးကို တစ်ပြိုင်နက် ပေါင်းစပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-intermediate-4', [
      ['Write a one-paragraph robot behavior specification', 'Robot Behavior Specification စာပိုဒ်တစ်ပိုဒ် ရေးပါ'],
      ['Test sensing, decision, and action logic separately', 'Sensing, Decision, Action Logic ကို သီးခြားစီ Test လုပ်ပါ'],
      ['Integrate everything into one working autonomous behavior', 'အားလုံးကို အလုပ်လုပ်သော Autonomous Behavior တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Write a clear, testable robot behavior specification', 'ရှင်းလင်း၍ Test လုပ်နိုင်သော Robot Behavior Specification ရေးနိုင်သည်'],
      ['Integrate sensing, decision, and action into one system', 'Sensing, Decision, Action ကို System တစ်ခုတည်းအဖြစ် ပေါင်းစပ်နိုင်သည်'],
      ['Test a complete autonomous behavior against its success condition', 'Autonomous Behavior အပြည့်အစုံကို ၎င်း၏ အောင်မြင်မှု Condition အပေါ် Test လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-advanced-1': {
    whatItIs: t([
      'Computer vision for robotics covers giving a robot the ability to interpret camera images — detecting objects, colors, or shapes — to make richer decisions.',
      'Robotics အတွက် Computer Vision သည် Robot တစ်ခုအား Camera Image များကို အဓိပ္ပာယ်ဖွင့်နိုင်စွမ်း — Object, Color, Shape များ ဖော်ထုတ်ခြင်း — ပေးအပ်ပြီး ပိုကြွယ်ဝသော ဆုံးဖြတ်ချက်များ ချနိုင်စေသည်။',
    ]),
    whyItMatters: t([
      'Cameras provide far richer information than simple distance or light sensors, opening up much more sophisticated robot behaviors.',
      'Camera များသည် ရိုးရှင်းသော Distance (သို့) Light Sensor များထက် ပိုကြွယ်ဝသော Information ပေးပြီး ပိုရှုပ်ထွေးသော Robot Behavior များကို ဖွင့်ပေးသည်။',
    ]),
    whereUsed: t([
      'Used in object-sorting robots, navigation systems, quality inspection, and any robot that needs to recognize what it is looking at.',
      'Object-sorting Robot, Navigation System, Quality Inspection နှင့် ၎င်းကြည့်နေသည်ကို မှတ်မိရန် လိုအပ်သော Robot မည်သည်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Connects to the AI Engineering path\'s computer vision concepts — worth reviewing if you have looked at that path too.',
      'AI Engineering Path ၏ Computer Vision Concept များနှင့် ချိတ်ဆက်ပေးသည် — ထို Path ကိုပါ ကြည့်ရှုထားလျှင် ပြန်လည်လေ့လာဖွယ် ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Capturing and reading a camera frame', 'Camera Frame တစ်ခု ဖမ်းယူပြီး ဖတ်ခြင်း'],
      ['Basic color detection', 'အခြေခံ Color Detection'],
      ['Simple shape/blob detection', 'ရိုးရှင်းသော Shape/Blob Detection'],
      ['Converting a vision result into a robot decision', 'Vision ရလဒ်တစ်ခုကို Robot ဆုံးဖြတ်ချက်တစ်ခုအဖြစ် ပြောင်းလဲခြင်း'],
    ]),
    steps: [
      step(
        ['Capture and process a camera frame', 'Camera Frame တစ်ခု ဖမ်းယူပြီး Process လုပ်ခြင်း'],
        [
          ['Reading a frame from a camera module', 'Camera Module တစ်ခုမှ Frame တစ်ခု ဖတ်ခြင်း'],
        ],
        [
          ['Capture a frame from a camera and print its basic properties (dimensions, format)', 'Camera တစ်ခုမှ Frame တစ်ခု ဖမ်းယူပြီး ၎င်း၏ အခြေခံ Property များ (Dimensions, Format) ကို Print ချပါ'],
        ],
      ),
      step(
        ['Detect a simple visual feature', 'ရိုးရှင်းသော Visual Feature တစ်ခု ဖော်ထုတ်ခြင်း'],
        [
          ['Detecting a specific color in an image as a simple, robust starting point', 'ရိုးရှင်း၍ ခိုင်မာသော စတင်ရာအချက်အနေဖြင့် Image တစ်ခုတွင် Color သီးခြားတစ်ခု ဖော်ထုတ်ခြင်း'],
        ],
        [
          ['Write a program that detects whether a specific color is present in the camera frame and its approximate position', 'Camera Frame တွင် Color သီးခြားတစ်ခု ရှိမရှိနှင့် ၎င်း၏ ခန့်မှန်းအနေအထားကို ဖော်ထုတ်သော Program တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Build a simple color-detection behavior that turns a detected object\'s position into a robot decision — for example, turning toward a colored object detected on one side of the frame.',
      'ဖော်ထုတ်ထားသော Object ၏ အနေအထားကို Robot ဆုံးဖြတ်ချက်တစ်ခုအဖြစ် ပြောင်းလဲပေးသော Color-detection Behavior ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ — ဥပမာ Frame ၏ တစ်ဖက်တွင် ဖော်ထုတ်ထားသော Color ပါသော Object တစ်ခုသို့ လှည့်ခြင်း။',
    ]),
    verify: t([
      'Could you explain why color detection is a common, robust starting point for robot vision compared to more complex object recognition?',
      'Color Detection သည် ပိုရှုပ်ထွေးသော Object Recognition နှင့် နှိုင်းယှဉ်ပါက Robot Vision အတွက် ဘာကြောင့် အများသုံး၍ ခိုင်မာသော စတင်ရာအချက်ဖြစ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with color detection before attempting more complex object recognition — it is far more robust and beginner-friendly.', 'ပိုရှုပ်ထွေးသော Object Recognition မကြိုးစားမီ Color Detection ဖြင့် စတင်ပါ — ၎င်းသည် ပိုခိုင်မာ၍ Beginner အတွက် ပိုသင့်တော်သည်။'],
      ['Test vision code under different lighting conditions — lighting affects color detection significantly.', 'Lighting Condition မတူညီများအောက်တွင် Vision Code ကို Test လုပ်ပါ — Lighting သည် Color Detection ကို သိသိသာသာ သက်ရောက်စေသည်။'],
    ]),
    commonMistakes: list([
      ['Attempting complex object recognition before mastering simple color detection.', 'ရိုးရှင်းသော Color Detection ကို ကျွမ်းကျင်မီ ရှုပ်ထွေးသော Object Recognition ကို ကြိုးစားခြင်း။'],
      ['Not accounting for how lighting changes affect vision results.', 'Lighting ပြောင်းလဲမှုများသည် Vision ရလဒ်များကို မည်သို့ သက်ရောက်သည်ကို ထည့်မတွက်ခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-advanced-1', [
      ['Capture and read a camera frame', 'Camera Frame တစ်ခု ဖမ်းယူပြီး ဖတ်ပါ'],
      ['Detect a specific color and its position', 'Color သီးခြားတစ်ခုနှင့် ၎င်း၏ အနေအထားကို ဖော်ထုတ်ပါ'],
      ['Convert a vision result into a robot behavior', 'Vision ရလဒ်တစ်ခုကို Robot Behavior တစ်ခုအဖြစ် ပြောင်းလဲပါ'],
    ]),
    completionChecklist: list([
      ['Capture and process a camera frame', 'Camera Frame တစ်ခု ဖမ်းယူပြီး Process လုပ်နိုင်သည်'],
      ['Detect a simple visual feature like color', 'Color ကဲ့သို့ ရိုးရှင်းသော Visual Feature တစ်ခု ဖော်ထုတ်နိုင်သည်'],
      ['Convert a vision result into a robot decision', 'Vision ရလဒ်တစ်ခုကို Robot ဆုံးဖြတ်ချက်တစ်ခုအဖြစ် ပြောင်းလဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-advanced-2': {
    whatItIs: t([
      'Path planning and navigation cover how a robot decides where to go — mapping an environment and calculating a route from one point to another.',
      'Path Planning နှင့် Navigation သည် Robot တစ်ခု ဘယ်နေရာသွားရမည်ကို မည်သို့ ဆုံးဖြတ်သည်ကို လွှမ်းခြုံသည် — Environment တစ်ခုကို Map ဆွဲခြင်းနှင့် အချက်တစ်ခုမှ အခြားတစ်ခုသို့ လမ်းကြောင်း တွက်ချက်ခြင်း။',
    ]),
    whyItMatters: t([
      'Moving reactively (just avoiding obstacles as they appear) only goes so far — real navigation requires planning ahead based on some understanding of the space.',
      'Reactive စွာ ရွေ့လျားခြင်း (အတားအဆီးများ ပေါ်လာသည့်အခါ ရှောင်ရှားရုံ) သည် အကန့်အသတ်ရှိသည် — တကယ့် Navigation သည် Space အကြောင်း အနည်းငယ် နားလည်မှုအပေါ် အခြေခံ၍ ကြိုတင်စီစဉ်ရန် လိုအပ်သည်။',
    ]),
    whereUsed: t([
      'Used in warehouse robots, delivery robots, and any autonomous vehicle that needs to reach a specific destination efficiently.',
      'Warehouse Robot, Delivery Robot နှင့် ဦးတည်ရာသီးခြားတစ်ခုသို့ ထိရောက်စွာ ရောက်ရှိရန် လိုအပ်သော Autonomous Vehicle မည်သည်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the sensor fusion and autonomous behavior topics from the Intermediate stage.',
      'Intermediate အဆင့်မှ Sensor Fusion နှင့် Autonomous Behavior Topic များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Representing an environment as a simple grid or map', 'Environment တစ်ခုကို Grid (သို့) Map ရိုးရှင်းအဖြစ် ကိုယ်စားပြုခြင်း'],
      ['Basic pathfinding concepts (finding a route around obstacles)', 'အခြေခံ Pathfinding Concept များ (အတားအဆီးများပတ်လည် လမ်းကြောင်း ရှာဖွေခြင်း)'],
      ['Reactive vs. planned navigation', 'Reactive နှင့် Planned Navigation'],
      ['Re-planning when the environment changes', 'Environment ပြောင်းလဲသည့်အခါ ပြန်စီစဉ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Represent an environment simply', 'Environment တစ်ခုကို ရိုးရှင်းစွာ ကိုယ်စားပြုခြင်း'],
        [
          ['A grid where each cell is marked free or blocked is enough for basic path planning', 'Cell တစ်ခုစီကို Free သို့ Blocked ဟု Mark ပြုလုပ်ထားသော Grid တစ်ခုသည် အခြေခံ Path Planning အတွက် လုံလောက်သည်'],
        ],
        [
          ['Represent a small known environment (e.g. a room layout) as a simple grid, marking obstacles', 'Environment သေးငယ်၊ သိထားပြီးသား တစ်ခု (ဥပမာ Room Layout) ကို Grid ရိုးရှင်းအဖြစ် ကိုယ်စားပြုပါ — အတားအဆီးများကို Mark ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Plan a simple path and re-plan when needed', 'Path ရိုးရှင်းတစ်ခု စီစဉ်ပြီး လိုအပ်သည့်အခါ ပြန်စီစဉ်ခြင်း'],
        [
          ['Finding a route from start to goal on your grid that avoids blocked cells', 'သင့် Grid ပေါ်ရှိ Blocked Cell များ ရှောင်ရှားသော Start မှ Goal အထိ လမ်းကြောင်းတစ်ခု ရှာဖွေခြင်း'],
        ],
        [
          ['Manually plan (or code) a path on your grid from a start point to a goal, avoiding obstacles', 'သင့် Grid ပေါ်တွင် Start အချက်မှ Goal အထိ အတားအဆီးများ ရှောင်ရှားသော Path တစ်ခုကို Manual (သို့) Code ဖြင့် စီစဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Represent a small real or imagined environment as a grid, plan a path through it avoiding obstacles, and explain what you would do if a new obstacle appeared mid-route.',
      'Environment အစစ် (သို့) စိတ်ကူးထားသော သေးငယ်တစ်ခုကို Grid အဖြစ် ကိုယ်စားပြုပါ၊ အတားအဆီးများ ရှောင်ရှားသော Path တစ်ခုကို ၎င်းကို ဖြတ်၍ စီစဉ်ပါ၊ Route တစ်ဝက်တွင် အတားအဆီးအသစ်တစ်ခု ပေါ်လာလျှင် ဘာလုပ်မည်ကို ရှင်းပြပါ။',
    ]),
    verify: t([
      'Could you explain the difference between a robot that only reacts to obstacles it can currently see and one that plans a route in advance?',
      'လက်ရှိမြင်ရသော အတားအဆီးများကိုသာ တုံ့ပြန်သော Robot တစ်ခုနှင့် ကြိုတင်၍ လမ်းကြောင်း စီစဉ်ထားသော Robot တစ်ခုကြား ကွာခြားချက်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with a simple grid representation — you do not need a full map to begin planning paths.', 'Grid Representation ရိုးရှင်းတစ်ခုနှင့် စတင်ပါ — Path များ စတင်စီစဉ်ရန် Map အပြည့်အစုံ မလိုအပ်ပါ။'],
      ['Always have a fallback reactive behavior (like stopping) for when a planned path is suddenly blocked.', 'စီစဉ်ထားသော Path တစ်ခု ရုတ်တရက် ပိတ်သွားသည့်အခါအတွက် Fallback Reactive Behavior (ရပ်တန့်ခြင်းကဲ့သို့) တစ်ခု အမြဲ ရှိစေပါ။'],
    ]),
    commonMistakes: list([
      ['Planning a path once and never accounting for the environment changing.', 'Path တစ်ခုကို တစ်ကြိမ်တည်း စီစဉ်ပြီး Environment ပြောင်းလဲခြင်းကို ဘယ်တော့မှ ထည့်မတွက်ခြင်း။'],
      ['Attempting a complex full map before validating simple grid-based planning works.', 'ရိုးရှင်းသော Grid-based Planning အလုပ်ဖြစ်ကြောင်း အတည်မပြုမီ ရှုပ်ထွေးသော Map အပြည့်အစုံကို ကြိုးစားခြင်း။'],
    ]),
    practiceTasks: tasks('robotics-engineer-advanced-2', [
      ['Represent an environment as a grid', 'Environment တစ်ခုကို Grid အဖြစ် ကိုယ်စားပြုပါ'],
      ['Plan a path avoiding obstacles', 'အတားအဆီးများ ရှောင်ရှားသော Path တစ်ခု စီစဉ်ပါ'],
      ['Explain how you would re-plan for a new obstacle', 'အတားအဆီးအသစ်တစ်ခုအတွက် မည်သို့ ပြန်စီစဉ်မည်ကို ရှင်းပြပါ'],
    ]),
    completionChecklist: list([
      ['Represent an environment as a simple grid/map', 'Environment တစ်ခုကို Grid/Map ရိုးရှင်းအဖြစ် ကိုယ်စားပြုနိုင်သည်'],
      ['Plan a basic path avoiding obstacles', 'အတားအဆီးများ ရှောင်ရှားသော အခြေခံ Path တစ်ခု စီစဉ်နိုင်သည်'],
      ['Explain reactive vs. planned navigation', 'Reactive နှင့် Planned Navigation ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-advanced-3': {
    whatItIs: t([
      'Real-time systems basics cover the timing guarantees some robotics applications need — ensuring critical operations happen reliably within a predictable time window.',
      'Real-time Systems အခြေခံသည် Robotics Application အချို့ လိုအပ်သော Timing အာမခံချက်များကို လွှမ်းခြုံသည် — အရေးကြီးသော Operation များသည် ခန့်မှန်းနိုင်သော အချိန်ဝင်းဒိုးအတွင်း ယုံကြည်စိတ်ချစွာ ဖြစ်ပျက်ကြောင်း သေချာစေခြင်း။',
    ]),
    whyItMatters: t([
      'For some robot behaviors (like balance control or safety stops), being "usually fast" is not good enough — missing a timing deadline can cause a real failure.',
      'Robot Behavior အချို့ (Balance Control (သို့) Safety Stops ကဲ့သို့) အတွက် "ပုံမှန် မြန်ဆန်ခြင်း" သည် မလုံလောက်ပါ — Timing Deadline တစ်ခု လွတ်သွားခြင်းက တကယ့် Failure တစ်ခု ဖြစ်စေနိုင်သည်။',
    ]),
    whereUsed: t([
      'Critical in safety systems, balance control, and any robot behavior where a delayed response could cause real harm.',
      'Safety System, Balance Control နှင့် တုံ့ပြန်မှု နှောင့်နှေးခြင်းသည် တကယ့် အန္တရာယ် ဖြစ်စေနိုင်သော Robot Behavior မည်သည်တွင်မဆို အရေးကြီးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the embedded programming (non-blocking code) concepts from the Core stage.',
      'Core အဆင့်မှ Embedded Programming (Non-blocking Code) Concept များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Hard vs. soft real-time requirements', 'Hard နှင့် Soft Real-time လိုအပ်ချက်များ'],
      ['Why unpredictable delays are dangerous in some contexts', 'Context အချို့တွင် ခန့်မှန်း၍မရသော ဆိုင်းငံ့မှုများ ဘာကြောင့် အန္တရာယ်ရှိသလဲ'],
      ['Measuring how long your code actually takes to run', 'သင့် Code Run ရန် တကယ်ကြာမြင့်ချိန်ကို တိုင်းတာခြင်း'],
      ['Prioritizing critical operations', 'အရေးကြီးသော Operation များ ဦးစားပေးခြင်း'],
    ]),
    steps: [
      step(
        ['Distinguish hard from soft real-time needs', 'Hard နှင့် Soft Real-time လိုအပ်ချက်များ ခွဲခြားခြင်း'],
        [
          ['A hard real-time requirement (e.g. an emergency stop) must never miss its deadline; a soft one can occasionally be a bit late', 'Hard Real-time လိုအပ်ချက် (ဥပမာ Emergency Stop) သည် ၎င်း၏ Deadline ကို ဘယ်တော့မှ လွတ်၍မရပါ — Soft တစ်ခုသည် တစ်ခါတစ်ရံ အနည်းငယ် နောက်ကျနိုင်သည်'],
        ],
        [
          ['For three example robot behaviors, classify each as hard or soft real-time and explain why', 'ဥပမာ Robot Behavior သုံးခုအတွက် တစ်ခုစီကို Hard (သို့) Soft Real-time ဟု ခွဲခြားပြီး ဘာကြောင့်ဆိုသည်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Measure and improve your code\'s timing', 'သင့် Code ၏ Timing ကို တိုင်းတာပြီး တိုးတက်အောင်ပြုလုပ်ခြင်း'],
        [
          ['Timing how long a critical section of code takes to execute', 'Code ၏ အရေးကြီးသော အပိုင်းတစ်ခု Execute လုပ်ရန် ကြာမြင့်ချိန်ကို Timing လုပ်ခြင်း'],
        ],
        [
          ['Measure how long your obstacle-avoidance or safety-stop logic takes to run, from sensor reading to motor response', 'Sensor Reading မှ Motor Response အထိ သင့် Obstacle-avoidance (သို့) Safety-stop Logic Run ရန် ကြာမြင့်ချိန်ကို တိုင်းတာပါ'],
        ],
      ),
    ],
    build: t([
      'Take a safety-critical behavior from an earlier project (e.g. an emergency stop or obstacle avoidance), measure its worst-case response time, and write a short note on whether that timing is acceptable and why.',
      'ယခင် Project တစ်ခုမှ Safety-critical Behavior တစ်ခု (ဥပမာ Emergency Stop သို့ Obstacle Avoidance) ကို ယူပြီး ၎င်း၏ Worst-case Response Time ကို တိုင်းတာပါ၊ ထို Timing သည် လက်ခံနိုင်သလား၊ ဘာကြောင့်ဆိုသည်ကို မှတ်ချက် တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Could you explain why "usually fast enough" is not an acceptable standard for a robot\'s emergency-stop behavior?',
      '"ပုံမှန် လုံလောက်လောက်မြန်သည်" ဆိုသည်မှာ Robot တစ်ခု၏ Emergency-stop Behavior အတွက် လက်ခံနိုင်သော စံနှုန်း မဟုတ်ကြောင်းကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Measure worst-case timing, not just average timing — safety depends on the worst case.', 'ပျမ်းမျှ Timing တစ်ခုတည်းမကဘဲ Worst-case Timing ကို တိုင်းတာပါ — Safety သည် Worst Case အပေါ် မှီခိုနေသည်။'],
      ['Keep safety-critical code paths as simple and fast as possible.', 'Safety-critical Code Path များကို တတ်နိုင်သမျှ ရိုးရှင်း၍ မြန်ဆန်အောင် ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Only measuring average timing, missing rare but critical worst-case delays.', 'ပျမ်းမျှ Timing ကိုသာ တိုင်းတာပြီး ရှားရှားပါးပါးဖြစ်သော်လည်း အရေးကြီးသော Worst-case ဆိုင်းငံ့မှုများ လွတ်သွားခြင်း။'],
      ['Adding non-essential logic into a safety-critical code path, slowing down its worst-case response.', 'Safety-critical Code Path တစ်ခုထဲသို့ မလိုအပ်သော Logic ထည့်ခြင်းက ၎င်း၏ Worst-case Response ကို နှေးကွေးစေသည်။'],
    ]),
    practiceTasks: tasks('robotics-engineer-advanced-3', [
      ['Classify robot behaviors as hard or soft real-time', 'Robot Behavior များကို Hard သို့ Soft Real-time ဟု ခွဲခြားပါ'],
      ['Measure a critical section\'s execution time', 'အရေးကြီးသော အပိုင်းတစ်ခု၏ Execution Time ကို တိုင်းတာပါ'],
      ['Evaluate whether a safety behavior\'s timing is acceptable', 'Safety Behavior တစ်ခု၏ Timing လက်ခံနိုင်ခြင်း ရှိမရှိ အကဲဖြတ်ပါ'],
    ]),
    completionChecklist: list([
      ['Distinguish hard from soft real-time requirements', 'Hard နှင့် Soft Real-time လိုအပ်ချက်များ ခွဲခြားနိုင်သည်'],
      ['Measure code execution timing', 'Code Execution Timing ကို တိုင်းတာနိုင်သည်'],
      ['Evaluate whether a safety-critical timing is acceptable', 'Safety-critical Timing လက်ခံနိုင်ခြင်း ရှိမရှိ အကဲဖြတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'robotics-engineer-advanced-4': {
    whatItIs: t([
      'Robotics project integration is bringing together everything from this path — electronics, programming, sensors, actuators, control, and safety — into one complete, working robot project.',
      'Robotics Project Integration ဆိုသည်မှာ ဤ Path မှ အားလုံး — Electronics, Programming, Sensors, Actuators, Control, Safety — ကို Robot Project အပြည့်အစုံ၊ အလုပ်လုပ်သော တစ်ခုတည်းအဖြစ် ယူဆောင်လာခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Real robotics work is rarely one isolated skill — it is the ability to combine hardware, software, and careful testing into something that reliably works in the real world.',
      'တကယ့် Robotics အလုပ်သည် ရှားရှားပါးပါးသာ ကျွမ်းကျင်မှု သီးသန့် တစ်ခုတည်း ဖြစ်သည် — ၎င်းသည် Hardware, Software, ဂရုစိုက်သော Testing ကို လက်တွေ့ကမ္ဘာတွင် ယုံကြည်စိတ်ချစွာ အလုပ်လုပ်မည့်အရာတစ်ခုအဖြစ် ပေါင်းစပ်နိုင်သော စွမ်းရည် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'This is what real robotics jobs and personal projects actually look like — full integration, not isolated tutorials.',
      'ဤသည်မှာ တကယ့် Robotics အလုပ်များနှင့် ကိုယ်ပိုင် Project များ တကယ်ပုံပေါ်ပုံ ဖြစ်သည် — သီးသန့် Tutorial များ မဟုတ်ဘဲ Integration အပြည့်အစုံ။',
    ]),
    prerequisiteNote: t([
      'This is the capstone topic drawing on absolutely everything covered throughout the Robotics Engineering path.',
      'ဤသည်မှာ Robotics Engineering Path တစ်လျှောက် လွှမ်းခြုံခဲ့သမျှ အားလုံးကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Defining a complete project scope', 'Project Scope အပြည့်အစုံ သတ်မှတ်ခြင်း'],
      ['Planning hardware and software together', 'Hardware နှင့် Software ကို အတူတကွ စီစဉ်ခြင်း'],
      ['Building and testing incrementally', 'တဖြည်းဖြည်း တည်ဆောက်ပြီး Test လုပ်ခြင်း'],
      ['Documenting a finished project', 'ပြီးမြောက်ပြီးသား Project တစ်ခု မှတ်တမ်းတင်ခြင်း'],
    ]),
    steps: [
      step(
        ['Define a complete project scope', 'Project Scope အပြည့်အစုံ သတ်မှတ်ခြင်း'],
        [
          ['Writing a clear spec: what the robot does, its components, and its success criteria', 'ရှင်းလင်းသော Spec ရေးခြင်း — Robot ဘာလုပ်သည်၊ ၎င်း၏ Component များနှင့် ၎င်း၏ အောင်မြင်မှု Criteria'],
        ],
        [
          ['Write a one-page project spec for a robot combining at least three skills from this path (e.g. sensing, motor control, and vision)', 'ဤ Path မှ ကျွမ်းကျင်မှု အနည်းဆုံးသုံးခု (ဥပမာ Sensing, Motor Control, Vision) ပေါင်းစပ်ထားသော Robot တစ်ခုအတွက် တစ်မျက်နှာ Project Spec တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Build, test, and document the complete project', 'Project အပြည့်အစုံ တည်ဆောက်ပြီး Test လုပ်ကာ မှတ်တမ်းတင်ခြင်း'],
        [
          ['Building incrementally, the same discipline used throughout this path', 'ဤ Path တစ်လျှောက် သုံးခဲ့သော စည်းကမ်းတူတူဖြင့် တဖြည်းဖြည်း တည်ဆောက်ခြင်း'],
          ['Documenting what the project does, how it works, and its known limitations', 'Project ဘာလုပ်သည်၊ မည်သို့ အလုပ်လုပ်သည်နှင့် ၎င်း၏ သိထားသော ကန့်သတ်ချက်များကို မှတ်တမ်းတင်ခြင်း'],
        ],
        [
          ['Build your specified robot project incrementally, test it against your success criteria, and write short documentation for it', 'သင့် သတ်မှတ်ထားသော Robot Project ကို တဖြည်းဖြည်း တည်ဆောက်ပါ၊ သင့် အောင်မြင်မှု Criteria အပေါ် Test လုပ်ပါ၊ ၎င်းအတွက် မှတ်တမ်း တိုတောင်း ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Complete a full robotics project from spec to finished, tested, documented robot — combining at least three skills from this path (electronics, sensing, actuation, control, vision, or communication protocols) into one working system.',
      'Spec မှ ပြီးမြောက်၍ Test လုပ်ပြီး မှတ်တမ်းတင်ထားသော Robot အထိ Robotics Project အပြည့်အစုံ ပြီးမြောက်ပါ — ဤ Path မှ ကျွမ်းကျင်မှု အနည်းဆုံးသုံးခု (Electronics, Sensing, Actuation, Control, Vision, Communication Protocols) ကို System တစ်ခုတည်းအဖြစ် ပေါင်းစပ်ထားပြီး။',
    ]),
    verify: t([
      'Could you walk someone through your entire project — from initial spec to finished robot — explaining every major decision and what you would improve next?',
      'ကနဦး Spec မှ ပြီးမြောက်ပြီးသား Robot အထိ သင့် Project တစ်ခုလုံးကို လမ်းညွှန်ပြီး အဓိက ဆုံးဖြတ်ချက်တိုင်းနှင့် နောက်ထပ် ဘာတိုးတက်စေမည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Scope your final project realistically — a smaller project that actually works beats an ambitious one that does not.', 'သင့် Final Project ကို လက်တွေ့ကျစွာ Scope ချပါ — တကယ် အလုပ်ဖြစ်သော Project သေးငယ်တစ်ခုသည် အလုပ်မဖြစ်သော ရည်မှန်းချက်ကြီးတစ်ခုထက် ပိုကောင်းသည်။'],
      ['Document as you go, not just at the end — it is much easier to remember decisions while you are making them.', 'အဆုံးတွင်သာမက လုပ်ရင်း မှတ်တမ်းတင်ပါ — ဆုံးဖြတ်ချက်များ ချနေစဉ် မှတ်မိရန် အများကြီး ပိုလွယ်ကူသည်။'],
    ]),
    commonMistakes: list([
      ['Scoping a final project too ambitiously and running out of time to finish and test it properly.', 'Final Project ကို ရည်မှန်းချက်ကြီးလွန်းအောင် Scope ချပြီး မှန်ကန်စွာ ပြီးမြောက် Test လုပ်ရန် အချိန်ကုန်ခြင်း။'],
      ['Skipping documentation, making the project hard for anyone (including future you) to understand later.', 'Documentation ကျော်ခြင်းက Project ကို မည်သူမဆို (အနာဂတ်သင်အပါအဝင်) နောက်ပိုင်း နားလည်ရခက်စေသည်။'],
    ]),
    practiceTasks: tasks('robotics-engineer-advanced-4', [
      ['Write a one-page project spec', 'တစ်မျက်နှာ Project Spec တစ်ခု ရေးပါ'],
      ['Build the project incrementally', 'Project ကို တဖြည်းဖြည်း တည်ဆောက်ပါ'],
      ['Test against defined success criteria', 'သတ်မှတ်ထားသော အောင်မြင်မှု Criteria အပေါ် Test လုပ်ပါ'],
      ['Write documentation for the finished project', 'ပြီးမြောက်ပြီးသား Project အတွက် Documentation ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write a clear project specification', 'ရှင်းလင်းသော Project Specification ရေးနိုင်သည်'],
      ['Integrate at least three skills into one project', 'ကျွမ်းကျင်မှု အနည်းဆုံးသုံးခုကို Project တစ်ခုတည်းအဖြစ် ပေါင်းစပ်နိုင်သည်'],
      ['Build and test a project incrementally', 'Project တစ်ခုကို တဖြည်းဖြည်း တည်ဆောက်ပြီး Test လုပ်နိုင်သည်'],
      ['Document a finished robotics project', 'ပြီးမြောက်ပြီးသား Robotics Project တစ်ခု မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },
}
