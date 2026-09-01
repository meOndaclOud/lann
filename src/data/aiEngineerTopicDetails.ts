import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every AI Engineering topic (see
 * roadmaps.ts's Phase 6 Update wiring). resources are intentionally empty on
 * every topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate
 * a resource" policy this follows.
 */
export const aiEngineerTopicDetails: Record<string, TopicDetail> = {
  'ai-engineer-beginner-1': {
    whatItIs: t([
      'Python fundamentals for AI covers the specific parts of Python — data structures, functions, and common libraries — that AI and machine learning work relies on daily.',
      'AI အတွက် Python အခြေခံသည် AI နှင့် Machine Learning အလုပ်တွင် နေ့စဉ် အားထားသော Python ၏ သီးခြား အစိတ်အပိုင်းများ — Data Structures, Functions, အများသုံး Library များ — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Python is the dominant language across nearly all AI and machine learning work — nearly every framework, tutorial, and job posting in this field assumes it.',
      'Python သည် AI နှင့် Machine Learning အလုပ် နီးပါးအားလုံးတွင် လွှမ်းမိုးသော Language ဖြစ်သည် — ဤနယ်ပယ်ရှိ Framework, Tutorial, Job Posting နီးပါးအားလုံးသည် ၎င်းကို ယူဆထားသည်။',
    ]),
    whereUsed: t([
      'Used in every stage of AI work — data preparation, model building, evaluation, and deployment all happen in Python.',
      'AI အလုပ်၏ အဆင့်တိုင်းတွင် သုံးသည် — Data Preparation, Model Building, Evaluation, Deployment အားလုံးသည် Python တွင် ဖြစ်ပျက်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Variables, lists, and dictionaries', 'Variables, Lists, Dictionaries'],
      ['Functions', 'Functions'],
      ['Loops and conditionals', 'Loops နှင့် Conditionals'],
      ['Reading data with common libraries (e.g. pandas)', 'အများသုံး Library (ဥပမာ pandas) ဖြင့် Data ဖတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Work with Python\'s core data structures', 'Python ၏ အဓိက Data Structure များနှင့် အလုပ်လုပ်ခြင်း'],
        [
          ['Lists for ordered collections, dictionaries for key-value data', 'အစီအစဉ်ရှိသော Collection များအတွက် Lists, Key-value Data အတွက် Dictionaries'],
          ['Writing functions that take data in and return a result', 'Data ကို ထည့်သွင်းပြီး ရလဒ်တစ်ခု ပြန်ပေးသော Functions ရေးခြင်း'],
        ],
        [
          ['Write a function that takes a list of numbers and returns their average', 'ဂဏန်း List တစ်ခု ယူပြီး ၎င်းတို့၏ ပျမ်းမျှကို ပြန်ပေးသော Function တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Load and inspect data with pandas', 'pandas ဖြင့် Data Load လုပ်ပြီး Inspect လုပ်ခြင်း'],
        [
          ['Loading a CSV file into a dataframe', 'CSV File တစ်ခုကို Dataframe ထဲသို့ Load လုပ်ခြင်း'],
          ['Selecting and filtering columns and rows', 'Column နှင့် Row များ ရွေးချယ်ခြင်းနှင့် Filter လုပ်ခြင်း'],
        ],
        [
          ['Load a sample dataset and print its shape, column names, and first five rows', 'Sample Dataset တစ်ခု Load လုပ်ပြီး ၎င်း၏ Shape, Column Names, ပထမ Row ငါးခုကို Print လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Write a small Python script that loads a sample dataset, filters it by a condition, and calculates a summary statistic — the exact kind of data-handling code used throughout AI work.',
      'Sample Dataset တစ်ခု Load လုပ်ပြီး Condition တစ်ခုဖြင့် Filter လုပ်ကာ Summary Statistic တစ်ခု တွက်ချက်သော Python Script သေးငယ်တစ်ခု ရေးပါ — AI အလုပ်တစ်လျှောက် သုံးသော Data-handling Code အမျိုးအစား အတိအကျ။',
    ]),
    verify: t([
      'Given a new CSV file, could you load it, inspect its structure, and filter it by a condition without much hesitation?',
      'CSV File အသစ်တစ်ခု ပေးလိုက်လျှင် ဆိုင်းငံ့မှု များစွာမရှိဘဲ Load လုပ်ပြီး ၎င်း၏ ဖွဲ့စည်းပုံကို Inspect လုပ်ကာ Condition တစ်ခုဖြင့် Filter လုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Inspect a dataframe immediately after loading it — never assume it loaded correctly.', 'Load လုပ်ပြီးချင်း Dataframe ကို ချက်ချင်း Inspect လုပ်ပါ — မှန်ကန်စွာ Load ဖြစ်သည်ဟု ဘယ်တော့မှ မယူဆပါနှင့်။'],
      ['Practice with real, messy sample datasets rather than only clean tutorial ones.', 'Clean Tutorial Dataset များသက်သက်မဟုတ်ဘဲ Real, ရှုပ်ထွေးသော Sample Dataset များဖြင့် လေ့ကျင့်ပါ။'],
    ]),
    commonMistakes: list([
      ['Skipping Python fundamentals and jumping straight into an AI framework.', 'Python အခြေခံများ ကျော်ပြီး AI Framework တစ်ခုသို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
      ['Not checking a dataframe\'s shape and types before working with it.', 'အလုပ်မလုပ်မီ Dataframe ၏ Shape နှင့် Type များကို မစစ်ဆေးခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-beginner-1', [
      ['Write a function that processes a list of numbers', 'ဂဏန်း List တစ်ခု Process လုပ်သော Function တစ်ခု ရေးပါ'],
      ['Load a CSV file into a dataframe', 'CSV File တစ်ခုကို Dataframe ထဲသို့ Load လုပ်ပါ'],
      ['Filter and summarize a dataset', 'Dataset တစ်ခု Filter လုပ်ပြီး အနှစ်ချုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Use core Python data structures', 'အဓိက Python Data Structure များ သုံးနိုင်သည်'],
      ['Write functions that process data', 'Data ကို Process လုပ်သော Functions ရေးနိုင်သည်'],
      ['Load and inspect a dataset with pandas', 'pandas ဖြင့် Dataset တစ်ခု Load လုပ်ပြီး Inspect လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-beginner-2': {
    whatItIs: t([
      'Math foundations for AI cover the core statistics and linear algebra concepts — averages, distributions, vectors — that machine learning algorithms are built on.',
      'AI အတွက် Math Foundations သည် Machine Learning Algorithm များ တည်ဆောက်ထားသော အခြေခံ Statistics နှင့် Linear Algebra Concept များ — Averages, Distributions, Vectors — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'You do not need to be a mathematician to work in AI, but understanding what a model is actually doing mathematically makes debugging and improving it far less mysterious.',
      'AI တွင် အလုပ်လုပ်ရန် သင်္ချာပညာရှင် ဖြစ်ရန် မလိုအပ်ပါ — သို့သော် Model တစ်ခု သင်္ချာအရ တကယ်ဘာလုပ်နေသည်ကို နားလည်ခြင်းက Debug လုပ်ခြင်းနှင့် တိုးတက်အောင်ပြုလုပ်ခြင်းကို ပိုမိုနားလည်လွယ်စေသည်။',
    ]),
    whereUsed: t([
      'Underlies how every machine learning model — from simple linear regression to large neural networks — actually works internally.',
      'Linear Regression ရိုးရှင်းမှ Neural Network ကြီးများအထိ Machine Learning Model တိုင်း အတွင်းပိုင်း တကယ်အလုပ်လုပ်ပုံ၏ အောက်ခြေတွင် ရှိနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Mean, variance, and standard deviation', 'Mean, Variance, Standard Deviation'],
      ['Probability basics', 'Probability အခြေခံ'],
      ['Vectors and matrices (intuitively)', 'Vectors နှင့် Matrices (အလိုအလျောက် နားလည်မှု)'],
      ['What a "loss function" represents', '"Loss Function" ကိုယ်စားပြုသည်ကို'],
    ]),
    steps: [
      step(
        ['Build statistical intuition', 'Statistical Intuition တည်ဆောက်ခြင်း'],
        [
          ['Mean and standard deviation describe the center and spread of data', 'Mean နှင့် Standard Deviation သည် Data ၏ ဗဟိုချက်နှင့် ပြန့်ကျဲမှုကို ဖော်ပြသည်'],
          ['Probability as a way of expressing uncertainty numerically', 'မသေချာမှုကို ကိန်းဂဏန်းအရ ဖော်ပြသောနည်းလမ်းအဖြစ် Probability'],
        ],
        [
          ['Calculate the mean and standard deviation of a sample dataset and explain what they tell you', 'Sample Dataset တစ်ခု၏ Mean နှင့် Standard Deviation တွက်ချက်ပြီး ၎င်းတို့ ဘာပြောပြသည်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Understand vectors and the idea of a loss function', 'Vectors နှင့် Loss Function ၏ အယူအဆကို နားလည်ခြင်း'],
        [
          ['A vector as a list of numbers representing a point or direction', 'အမှတ် (သို့) ဦးတည်ချက် ကိုယ်စားပြုသော ဂဏန်း List တစ်ခုအဖြစ် Vector'],
          ['A loss function measures how wrong a model\'s predictions are', 'Loss Function သည် Model ၏ ခန့်မှန်းချက်များ မည်မျှမှားသည်ကို တိုင်းတာသည်'],
        ],
        [
          ['Explain, in your own words, why a model training process tries to minimize a loss function', 'Model Training လုပ်ငန်းစဉ်တစ်ခုသည် Loss Function ကို ဘာကြောင့် အနည်းဆုံးဖြစ်အောင် ကြိုးစားသည်ကို ကိုယ်ပိုင်စကားလုံးဖြင့် ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Take a small sample dataset and manually calculate its mean, standard deviation, and a simple probability question about it — connecting the math to real numbers you can check.',
      'Sample Dataset သေးငယ်တစ်ခုကို ယူပြီး ၎င်း၏ Mean, Standard Deviation နှင့် ရိုးရှင်းသော Probability မေးခွန်းတစ်ခုကို Manual တွက်ချက်ပါ — သင်စစ်ဆေးနိုင်သော ဂဏန်းအစစ်များနှင့် သင်္ချာကို ချိတ်ဆက်ပါ။',
    ]),
    verify: t([
      'Could you explain, without heavy jargon, what a loss function is and why training a model means trying to reduce it?',
      'Jargon လေးများ မသုံးဘဲ Loss Function ဆိုသည်မှာ ဘာလဲနှင့် Model တစ်ခု Train လုပ်ခြင်းသည် ဘာကြောင့် ၎င်းကို လျှော့ချရန် ကြိုးစားခြင်းဖြစ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Focus on intuition first — precise formulas matter less than understanding what each concept represents.', 'Intuition ကို ဦးစွာ အာရုံစိုက်ပါ — Formula တိကျမှုသည် Concept တစ်ခုစီ ကိုယ်စားပြုသည်ကို နားလည်ခြင်းလောက် အရေးမကြီးပါ။'],
      ['Connect every math concept back to a real dataset you can compute by hand or in code.', 'Math Concept တိုင်းကို လက်ဖြင့် (သို့) Code ဖြင့် တွက်ချက်နိုင်သော Dataset အစစ်တစ်ခုနှင့် ပြန်ချိတ်ဆက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to master advanced math theory before touching any real code or data.', 'Code (သို့) Data အစစ်ကို မထိမီ အဆင့်မြင့် သင်္ချာသီအိုရီကို ကျွမ်းကျင်အောင် ကြိုးစားခြင်း။'],
      ['Memorizing formulas without understanding what problem they actually solve.', 'ဖြေရှင်းပေးသော ပြဿနာကို နားမလည်ဘဲ Formula များကို အလွတ်ကျက်မှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-beginner-2', [
      ['Calculate mean and standard deviation for a dataset', 'Dataset တစ်ခုအတွက် Mean နှင့် Standard Deviation တွက်ချက်ပါ'],
      ['Explain what a loss function represents', 'Loss Function ကိုယ်စားပြုသည်ကို ရှင်းပြပါ'],
      ['Answer a simple probability question about sample data', 'Sample Data အကြောင်း ရိုးရှင်းသော Probability မေးခွန်းတစ်ခု ဖြေပါ'],
    ]),
    completionChecklist: list([
      ['Calculate and interpret mean and standard deviation', 'Mean နှင့် Standard Deviation တွက်ချက်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Explain basic probability intuitively', 'အခြေခံ Probability ကို အလိုအလျောက် ရှင်းပြနိုင်သည်'],
      ['Explain what a loss function represents', 'Loss Function ကိုယ်စားပြုသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-beginner-3': {
    whatItIs: t([
      'An introduction to machine learning concepts covers the core vocabulary and ideas — training, prediction, features, labels — that every ML approach shares.',
      'Machine Learning Concept များ နိဒါန်းသည် ML ချဉ်းကပ်နည်းတိုင်း မျှဝေသော အဓိက ဝေါဟာရနှင့် Idea များ — Training, Prediction, Features, Labels — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Every AI/ML topic that follows builds on these core ideas — getting them solid now makes everything later click faster.',
      'ဆက်လက်လာမည့် AI/ML ခေါင်းစဉ်တိုင်းသည် ဤအဓိက Idea များအပေါ် တည်ဆောက်ထားသည် — ယခု ၎င်းတို့ကို ခိုင်မာအောင်လုပ်ခြင်းက နောက်ပိုင်း အရာအားလုံးကို ပိုမြန်စွာ နားလည်စေသည်။',
    ]),
    whereUsed: t([
      'The shared vocabulary used across every ML framework, tutorial, and job description in the field.',
      'ဤနယ်ပယ်ရှိ ML Framework, Tutorial, Job Description တိုင်းတွင် သုံးသော မျှဝေထားသော ဝေါဟာရ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Training data vs. new/unseen data', 'Training Data နှင့် Data အသစ်/မမြင်ဖူးသေးသော Data'],
      ['Features and labels', 'Features နှင့် Labels'],
      ['Supervised vs. unsupervised learning (conceptually)', 'Supervised နှင့် Unsupervised Learning (Concept အရ)'],
      ['Overfitting (intuitive introduction)', 'Overfitting (အလိုအလျောက် နိဒါန်း)'],
    ]),
    steps: [
      step(
        ['Understand features, labels, and training', 'Features, Labels, Training နားလည်ခြင်း'],
        [
          ['Features are the input data a model uses; a label is what it is trying to predict', 'Features များသည် Model တစ်ခု သုံးသော Input Data ဖြစ်ပြီး Label သည် ခန့်မှန်းရန် ကြိုးစားနေသည့်အရာ ဖြစ်သည်'],
          ['Training is the process of a model learning patterns from labeled examples', 'Training ဆိုသည်မှာ Model တစ်ခုသည် Label ပါသော ဥပမာများမှ Pattern များ သင်ယူသော လုပ်ငန်းစဉ် ဖြစ်သည်'],
        ],
        [
          ['Given a sample dataset (e.g. house features and prices), identify which columns are features and which is the label', 'Sample Dataset တစ်ခု (ဥပမာ House Feature များနှင့် Price) ပေးလိုက်လျှင် မည်သည့် Column များသည် Features ဖြစ်ပြီး မည်သည်သည် Label ဖြစ်သည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Understand overfitting intuitively', 'Overfitting ကို အလိုအလျောက် နားလည်ခြင်း'],
        [
          ['A model that memorizes training data but fails on new data is overfitting', 'Training Data ကို အလွတ်ကျက်မှတ်ပေမယ့် Data အသစ်ပေါ်တွင် Fail ဖြစ်သော Model တစ်ခုသည် Overfitting ဖြစ်သည်'],
        ],
        [
          ['Explain, using a real-life analogy (not code), what overfitting means and why it is a problem', 'Code မဟုတ်ဘဲ လက်တွေ့ဘဝ ဥပမာသုံး၍ Overfitting ဆိုသည်မှာ ဘာလဲနှင့် ဘာကြောင့် ပြဿနာဖြစ်သည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short glossary, in your own words, of the core ML vocabulary from this topic — features, labels, training, overfitting — each with a concrete example.',
      'ဤ Topic မှ အဓိက ML ဝေါဟာရ — Features, Labels, Training, Overfitting — ကို ကိုယ်ပိုင်စကားလုံးများဖြင့် Glossary တိုတောင်းတစ်ခု ရေးပါ — တစ်ခုစီအတွက် တိကျသော ဥပမာနှင့်အတူ။',
    ]),
    verify: t([
      'Given a new dataset, could you correctly identify its features and label, and explain what "training" a model on it would mean?',
      'Dataset အသစ်တစ်ခု ပေးလိုက်လျှင် ၎င်း၏ Features နှင့် Label ကို မှန်ကန်စွာ ဖော်ထုတ်ပြီး ၎င်းအပေါ် Model တစ်ခု "Train" လုပ်ခြင်းဆိုသည်မှာ ဘာဆိုလိုသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Use a real, simple dataset (like house prices) to ground every new term — abstract definitions alone don\'t stick.', 'Term အသစ်တိုင်းကို ခိုင်မာစေရန် (House Prices ကဲ့သို့) Dataset ရိုးရှင်းအစစ်တစ်ခု သုံးပါ — Abstract Definition များတစ်ခုတည်းသည် မမှတ်မိတတ်ပါ။'],
      ['Do not skip overfitting — it is one of the most important intuitions in all of machine learning.', 'Overfitting ကို မကျော်ပါနှင့် — ၎င်းသည် Machine Learning တစ်ခုလုံးရှိ အရေးအကြီးဆုံး Intuition များထဲမှ တစ်ခု ဖြစ်သည်။'],
    ]),
    commonMistakes: list([
      ['Confusing features (inputs) with labels (what is being predicted).', 'Features (Inputs) များကို Labels (ခန့်မှန်းနေသည့်အရာ) နှင့် ရောထွေးခြင်း။'],
      ['Assuming a model performing perfectly on training data means it is a good model.', 'Training Data ပေါ်တွင် အပြီးအစီးအလုပ်လုပ်သော Model တစ်ခုသည် Model ကောင်းတစ်ခုဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-beginner-3', [
      ['Identify features and labels in a sample dataset', 'Sample Dataset တစ်ခုတွင် Features နှင့် Labels ဖော်ထုတ်ပါ'],
      ['Explain overfitting with a real-life analogy', 'Overfitting ကို လက်တွေ့ဘဝ ဥပမာဖြင့် ရှင်းပြပါ'],
      ['Write a short ML vocabulary glossary', 'ML ဝေါဟာရ Glossary တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Identify features and labels in a dataset', 'Dataset တစ်ခုတွင် Features နှင့် Labels ဖော်ထုတ်နိုင်သည်'],
      ['Explain what training a model means', 'Model တစ်ခု Train လုပ်ခြင်းဆိုသည်မှာ ဘာဆိုလိုသည်ကို ရှင်းပြနိုင်သည်'],
      ['Explain overfitting intuitively', 'Overfitting ကို အလိုအလျောက် ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-beginner-4': {
    whatItIs: t([
      'Working with data for AI covers preparing raw data — cleaning, formatting, and splitting it — into a form a machine learning model can actually learn from.',
      'AI အတွက် Data နှင့် အလုပ်လုပ်ခြင်းသည် Raw Data ကို — သန့်ရှင်းခြင်း၊ Format ချခြင်း၊ ခွဲခြင်း — Machine Learning Model တစ်ခု တကယ်သင်ယူနိုင်မည့် ပုံစံအဖြစ် ပြင်ဆင်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A model is only as good as the data it learns from — most real-world AI work is spent preparing data, not writing model code.',
      'Model တစ်ခုသည် ၎င်းသင်ယူသော Data လောက်သာ ကောင်းသည် — လက်တွေ့ဘဝ AI အလုပ်အများစုသည် Model Code ရေးခြင်းထက် Data ပြင်ဆင်ခြင်းတွင် အချိန်ကုန်သည်။',
    ]),
    whereUsed: t([
      'The first, essential step of every real AI/ML project, regardless of the eventual model or technique used.',
      'နောက်ဆုံး သုံးမည့် Model (သို့) နည်းပညာမရွေး တကယ့် AI/ML Project တိုင်း၏ ပထမဆုံး၊ မရှိမဖြစ် အဆင့် ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the pandas basics from the Python fundamentals topic.',
      'Python Fundamentals Topic မှ pandas အခြေခံအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Handling missing and inconsistent data', 'ပျောက်ဆုံးနေသော၊ တသမတ်မတည်သော Data ကိုင်တွယ်ခြင်း'],
      ['Encoding categorical data into numbers', 'Categorical Data ကို ဂဏန်းများအဖြစ် Encode လုပ်ခြင်း'],
      ['Splitting data into training and test sets', 'Data ကို Training နှင့် Test Set များအဖြစ် ခွဲခြင်း'],
      ['Why the test set must stay unseen until evaluation', 'Test Set သည် Evaluation အထိ ဘာကြောင့် မမြင်ရသေးရမည်ကို'],
    ]),
    steps: [
      step(
        ['Clean and prepare a raw dataset', 'Raw Dataset တစ်ခု သန့်ရှင်းပြီး ပြင်ဆင်ခြင်း'],
        [
          ['Finding and handling missing values', 'ပျောက်ဆုံးနေသော Value များ ရှာဖွေပြီး ကိုင်တွယ်ခြင်း'],
          ['Converting categorical text values into numbers a model can use', 'Model တစ်ခု သုံးနိုင်သော Categorical Text Value များကို ဂဏန်းများအဖြစ် ပြောင်းလဲခြင်း'],
        ],
        [
          ['Take a messy sample dataset, handle its missing values, and encode one categorical column', 'ရှုပ်ထွေးသော Sample Dataset တစ်ခု ယူပြီး ၎င်း၏ ပျောက်ဆုံးနေသော Value များကို ကိုင်တွယ်ကာ Categorical Column တစ်ခုကို Encode လုပ်ပါ'],
        ],
      ),
      step(
        ['Split data into training and test sets', 'Data ကို Training နှင့် Test Set များအဖြစ် ခွဲခြင်း'],
        [
          ['Why evaluating on the same data used for training gives a misleadingly good result', 'Training တွင် သုံးခဲ့သော Data တူတူပေါ်တွင် Evaluate လုပ်ခြင်းက ဘာကြောင့် လှည့်ဖြားသော ရလဒ်ကောင်း ပေးသနည်း'],
        ],
        [
          ['Split your cleaned dataset into training and test sets using a standard ratio (e.g. 80/20)', 'သင့် Clean လုပ်ထားသော Dataset ကို စံ Ratio (ဥပမာ 80/20) သုံး၍ Training နှင့် Test Set များအဖြစ် ခွဲပါ'],
        ],
      ),
    ],
    build: t([
      'Take a raw, messy sample dataset and produce a fully prepared version: missing values handled, categorical data encoded, and split into training and test sets — ready for a model to use.',
      'Raw, ရှုပ်ထွေးသော Sample Dataset တစ်ခုကို ယူပြီး ပြင်ဆင်ပြီးသား Version တစ်ခု ထုတ်လုပ်ပါ — ပျောက်ဆုံးနေသော Value များ ကိုင်တွယ်ထားပြီး၊ Categorical Data Encode လုပ်ထားပြီး၊ Training နှင့် Test Set များအဖြစ် ခွဲထားပြီး — Model တစ်ခု သုံးရန် အသင့်။',
    ]),
    verify: t([
      'Given a new raw dataset, could you fully prepare it for model training without skipping any step?',
      'Raw Dataset အသစ်တစ်ခု ပေးလိုက်လျှင် Step မည်သည်ကိုမျှ မကျော်ဘဲ Model Training အတွက် အပြည့်အစုံ ပြင်ဆင်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always split your data before doing anything else with it, to avoid accidentally "leaking" test data into training.', 'Test Data ကို Training ထဲသို့ မတော်တဆ "Leak" မဖြစ်စေရန် အခြားတစ်ခုခုမလုပ်မီ သင့် Data ကို အရင်ခွဲပါ။'],
      ['Document every cleaning decision — future you will need to know why.', 'Cleaning ဆုံးဖြတ်ချက်တိုင်းကို မှတ်တမ်းတင်ပါ — အနာဂတ်သင် ဘာကြောင့်ဆိုသည်ကို သိလိုလိမ့်မည်။'],
    ]),
    commonMistakes: list([
      ['Evaluating a model on data it was also trained on.', 'Model တစ်ခုကို ၎င်း Train ခံခဲ့ရသော Data ပေါ်တွင်ပင် Evaluate လုပ်ခြင်း။'],
      ['Forgetting to encode categorical data, causing errors when training a model.', 'Categorical Data ကို Encode လုပ်ရန် မေ့ခြင်းက Model Train လုပ်သည့်အခါ Error များ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-beginner-4', [
      ['Handle missing values in a sample dataset', 'Sample Dataset တစ်ခုတွင် ပျောက်ဆုံးနေသော Value များ ကိုင်တွယ်ပါ'],
      ['Encode a categorical column into numbers', 'Categorical Column တစ်ခုကို ဂဏန်းများအဖြစ် Encode လုပ်ပါ'],
      ['Split a dataset into training and test sets', 'Dataset တစ်ခုကို Training နှင့် Test Set များအဖြစ် ခွဲပါ'],
    ]),
    completionChecklist: list([
      ['Handle missing and inconsistent data', 'ပျောက်ဆုံးနေသော၊ တသမတ်မတည်သော Data ကိုင်တွယ်နိုင်သည်'],
      ['Encode categorical data', 'Categorical Data Encode လုပ်နိုင်သည်'],
      ['Split data into training and test sets correctly', 'Data ကို Training နှင့် Test Set များအဖြစ် မှန်ကန်စွာ ခွဲနိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-core-1': {
    whatItIs: t([
      'Supervised learning is the most common category of machine learning, where a model learns to predict a label from labeled examples.',
      'Supervised Learning သည် Model တစ်ခုသည် Label ပါသော ဥပမာများမှ Label တစ်ခု ခန့်မှန်းရန် သင်ယူသော Machine Learning အမျိုးအစား အများဆုံး ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A huge share of practical machine learning applications — spam detection, price prediction, image classification — are supervised learning problems.',
      'Spam Detection, Price Prediction, Image Classification ကဲ့သို့ လက်တွေ့ကျသော Machine Learning Application အများအပြားသည် Supervised Learning ပြဿနာများ ဖြစ်ကြသည်။',
    ]),
    whereUsed: t([
      'The starting point for most real-world ML projects, and the foundation nearly every AI engineering role builds on.',
      'တကယ့် ML Project အများစု၏ စတင်ရာနေရာဖြစ်ပြီး AI Engineering Role နီးပါးအားလုံး၏ တည်ဆောက်ရာ အခြေခံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires the ML vocabulary and prepared data from the Beginner stage.',
      'Beginner အဆင့်မှ ML ဝေါဟာရနှင့် ပြင်ဆင်ထားသော Data လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Regression (predicting a number) vs. classification (predicting a category)', 'Regression (ဂဏန်း ခန့်မှန်းခြင်း) နှင့် Classification (Category ခန့်မှန်းခြင်း)'],
      ['Training and evaluating a simple model', 'Model ရိုးရှင်းတစ်ခု Train လုပ်ပြီး Evaluate လုပ်ခြင်း'],
      ['Common evaluation metrics (accuracy, at a basic level)', 'အများသုံး Evaluation Metric များ (Accuracy, အခြေခံအဆင့်)'],
    ]),
    steps: [
      step(
        ['Distinguish regression from classification', 'Regression ကို Classification နှင့် ခွဲခြားခြင်း'],
        [
          ['Regression predicts a continuous number (e.g. a price)', 'Regression သည် ဆက်တိုက် ဂဏန်းတစ်ခု (ဥပမာ Price) ကို ခန့်မှန်းသည်'],
          ['Classification predicts a category (e.g. spam or not spam)', 'Classification သည် Category တစ်ခု (ဥပမာ Spam ဟုတ် မဟုတ်) ကို ခန့်မှန်းသည်'],
        ],
        [
          ['Given five example problems, label each as regression or classification', 'ဥပမာ ပြဿနာ ငါးခု ပေးလိုက်လျှင် တစ်ခုစီကို Regression (သို့) Classification ဟု Label ပြုလုပ်ပါ'],
        ],
      ),
      step(
        ['Train and evaluate a simple supervised model', 'Supervised Model ရိုးရှင်းတစ်ခု Train လုပ်ပြီး Evaluate လုပ်ခြင်း'],
        [
          ['Fitting a simple model (e.g. linear or logistic regression) to prepared data', 'ပြင်ဆင်ထားသော Data ပေါ်တွင် Model ရိုးရှင်းတစ်ခု (ဥပမာ Linear (သို့) Logistic Regression) Fit လုပ်ခြင်း'],
          ['Checking accuracy on the held-out test set', 'ခွဲထားသော Test Set ပေါ်တွင် Accuracy စစ်ဆေးခြင်း'],
        ],
        [
          ['Train a simple classification model on your prepared dataset and report its test-set accuracy', 'သင့် ပြင်ဆင်ထားသော Dataset ပေါ်တွင် Classification Model ရိုးရှင်းတစ်ခု Train လုပ်ပြီး ၎င်း၏ Test-set Accuracy ကို တင်ပြပါ'],
        ],
      ),
    ],
    build: t([
      'Train a simple supervised model (regression or classification, your choice) on a real sample dataset, evaluate it honestly on the test set, and write a short summary of the result.',
      'Sample Dataset အစစ်တစ်ခုပေါ်တွင် Supervised Model ရိုးရှင်းတစ်ခု (Regression သို့ Classification, သင်ရွေးချယ်) Train လုပ်ပါ၊ Test Set ပေါ်တွင် ရိုးသားစွာ Evaluate လုပ်ပါ၊ ရလဒ်၏ အနှစ်ချုပ် တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Given a new problem description, could you correctly decide whether it is a regression or classification task?',
      'ပြဿနာ ဖော်ပြချက်အသစ်တစ်ခု ပေးလိုက်လျှင် ၎င်းသည် Regression (သို့) Classification Task ဟုတ်၊ မဟုတ် မှန်ကန်စွာ ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with the simplest possible model before reaching for something complex.', 'ရှုပ်ထွေးသော Model တစ်ခုကို မရှာဖွေမီ အလွယ်ကူဆုံး ဖြစ်နိုင်သော Model ဖြင့် စတင်ပါ။'],
      ['Always report accuracy on the test set, never the training set.', 'Training Set မဟုတ်ဘဲ Test Set ပေါ်ရှိ Accuracy ကို အမြဲ တင်ပြပါ။'],
    ]),
    commonMistakes: list([
      ['Confusing regression and classification problems.', 'Regression နှင့် Classification ပြဿနာများကို ရောထွေးခြင်း။'],
      ['Reporting training accuracy as if it were the model\'s real performance.', 'Training Accuracy ကို Model ၏ တကယ့် Performance ကဲ့သို့ တင်ပြခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-core-1', [
      ['Label example problems as regression or classification', 'ဥပမာ ပြဿနာများကို Regression (သို့) Classification ဟု Label ပြုလုပ်ပါ'],
      ['Train a simple supervised model', 'Supervised Model ရိုးရှင်းတစ်ခု Train လုပ်ပါ'],
      ['Report the model\'s test-set accuracy', 'Model ၏ Test-set Accuracy ကို တင်ပြပါ'],
    ]),
    completionChecklist: list([
      ['Distinguish regression from classification', 'Regression ကို Classification နှင့် ခွဲခြားနိုင်သည်'],
      ['Train a simple supervised model', 'Supervised Model ရိုးရှင်းတစ်ခု Train လုပ်နိုင်သည်'],
      ['Evaluate a model honestly on test data', 'Test Data ပေါ်တွင် Model တစ်ခုကို ရိုးသားစွာ Evaluate လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-core-2': {
    whatItIs: t([
      'Neural network fundamentals cover the basic building blocks — neurons, layers, activation functions — of the models behind most modern AI, including deep learning and generative AI.',
      'Neural Network Fundamentals သည် Deep Learning နှင့် Generative AI အပါအဝင် ခေတ်သစ် AI အများစုနောက်ကွယ်ရှိ Model များ၏ အခြေခံ အစိတ်အပိုင်းများ — Neurons, Layers, Activation Functions — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Nearly every advanced AI capability — image recognition, language models, generative AI — is built on neural networks; understanding the basics demystifies all of it.',
      'Image Recognition, Language Model, Generative AI ကဲ့သို့ အဆင့်မြင့် AI စွမ်းရည် နီးပါးအားလုံးသည် Neural Network များပေါ်တွင် တည်ဆောက်ထားသည် — အခြေခံများကို နားလည်ခြင်းက အားလုံးကို ဖျောက်ဖျက်ပေးသည်။',
    ]),
    whereUsed: t([
      'The foundation behind virtually every state-of-the-art AI system used in production today.',
      'ယနေ့ Production တွင် သုံးနေသော State-of-the-art AI System နီးပါးအားလုံး၏ အောက်ခြေတွင် ရှိသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the vectors and supervised learning concepts covered earlier.',
      'ယခင် လွှမ်းခြုံခဲ့သော Vectors နှင့် Supervised Learning Concept များအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Neurons and layers', 'Neurons နှင့် Layers'],
      ['Weights and activation functions (intuitively)', 'Weights နှင့် Activation Functions (အလိုအလျောက် နားလည်မှု)'],
      ['Forward pass (how a prediction is made)', 'Forward Pass (ခန့်မှန်းချက် မည်သို့ ပြုလုပ်သည်ကို)'],
      ['Training via backpropagation (conceptually, not the math)', 'Backpropagation မှတစ်ဆင့် Train လုပ်ခြင်း (Concept အရ, Math မဟုတ်ဘဲ)'],
    ]),
    steps: [
      step(
        ['Understand neurons and layers conceptually', 'Neurons နှင့် Layers ကို Concept အရ နားလည်ခြင်း'],
        [
          ['A neural network is layers of simple units that each transform their input a little', 'Neural Network တစ်ခုသည် Input ကို အနည်းငယ် ပြောင်းလဲပေးသော ရိုးရှင်းသော Unit များ၏ Layer များ ဖြစ်သည်'],
          ['Stacking layers lets a network learn increasingly complex patterns', 'Layer များကို ထပ်ထားခြင်းက Network တစ်ခုအား ပိုရှုပ်ထွေးသော Pattern များ သင်ယူနိုင်စေသည်'],
        ],
        [
          ['Sketch a simple neural network diagram (input layer, one hidden layer, output layer) and label each part', 'Neural Network Diagram ရိုးရှင်းတစ်ခု (Input Layer, Hidden Layer တစ်ခု, Output Layer) ရေးဆွဲပြီး အစိတ်အပိုင်းတစ်ခုစီကို Label ပေးပါ'],
        ],
      ),
      step(
        ['Train a basic neural network on a simple task', 'ရိုးရှင်းသော Task တစ်ခုပေါ်တွင် Neural Network ရိုးရှင်းတစ်ခု Train လုပ်ခြင်း'],
        [
          ['Using a framework (e.g. a beginner-friendly deep learning library) to define and train a small network', 'Network သေးငယ်တစ်ခု သတ်မှတ်ပြီး Train လုပ်ရန် Framework (ဥပမာ Beginner-friendly Deep Learning Library) သုံးခြင်း'],
        ],
        [
          ['Train a small neural network on a simple classification dataset and report its accuracy', 'Classification Dataset ရိုးရှင်းတစ်ခုပေါ်တွင် Neural Network သေးငယ်တစ်ခု Train လုပ်ပြီး ၎င်း၏ Accuracy ကို တင်ပြပါ'],
        ],
      ),
    ],
    build: t([
      'Train a small neural network on a simple classification task, compare its accuracy to the simple supervised model from the previous topic, and write a short note on the difference.',
      'Classification Task ရိုးရှင်းတစ်ခုပေါ်တွင် Neural Network သေးငယ်တစ်ခု Train လုပ်ပါ၊ ၎င်း၏ Accuracy ကို ယခင် Topic မှ Supervised Model ရိုးရှင်းနှင့် နှိုင်းယှဉ်ပါ၊ ကွာခြားချက်အတွက် မှတ်ချက် တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Could you explain, without heavy math, what a neural network layer actually does to its input?',
      'Math လေးများ မသုံးဘဲ Neural Network Layer တစ်ခုသည် ၎င်း၏ Input ကို တကယ်ဘာလုပ်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Visualize a network as a diagram before writing any code — it makes the structure much clearer.', 'Code မရေးမီ Network တစ်ခုကို Diagram အဖြစ် Visualize လုပ်ပါ — ၎င်းက ဖွဲ့စည်းပုံကို ပိုရှင်းလင်းစေသည်။'],
      ['Start with a tiny network on a simple problem before scaling up.', 'Scale တိုးမီ ရိုးရှင်းသော ပြဿနာတစ်ခုပေါ်တွင် Network သေးငယ်တစ်ခုနှင့် စတင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Trying to understand backpropagation math in full detail before building basic intuition.', 'အခြေခံ Intuition မတည်ဆောက်မီ Backpropagation Math ကို အသေးစိတ် အပြည့်အစုံ နားလည်ရန် ကြိုးစားခြင်း။'],
      ['Building an unnecessarily large network for a simple problem.', 'ရိုးရှင်းသော ပြဿနာတစ်ခုအတွက် မလိုအပ်ဘဲ Network ကြီးတစ်ခု တည်ဆောက်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-core-2', [
      ['Sketch a neural network diagram', 'Neural Network Diagram တစ်ခု ရေးဆွဲပါ'],
      ['Train a small neural network on a simple task', 'ရိုးရှင်းသော Task တစ်ခုပေါ်တွင် Neural Network သေးငယ်တစ်ခု Train လုပ်ပါ'],
      ['Compare its accuracy to a simpler model', '၎င်း၏ Accuracy ကို Model ရိုးရှင်းတစ်ခုနှင့် နှိုင်းယှဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain neurons and layers conceptually', 'Neurons နှင့် Layers ကို Concept အရ ရှင်းပြနိုင်သည်'],
      ['Train a basic neural network', 'Neural Network အခြေခံတစ်ခု Train လုပ်နိုင်သည်'],
      ['Compare a neural network\'s results to a simpler model', 'Neural Network ရလဒ်များကို Model ရိုးရှင်းတစ်ခုနှင့် နှိုင်းယှဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-core-3': {
    whatItIs: t([
      'Working with pre-trained models and APIs means using AI models that have already been built and trained by others, instead of training everything from scratch.',
      'Pre-trained Model နှင့် API များနှင့် အလုပ်လုပ်ခြင်းဆိုသည်မှာ အားလုံးကို အစမှ Train မလုပ်ဘဲ အခြားသူများ တည်ဆောက်ပြီး Train ပြီးသား AI Model များကို သုံးခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Training large models from scratch is expensive and often unnecessary — most real AI engineering work involves using and adapting existing models, not building new ones from zero.',
      'Model ကြီးများကို အစမှ Train လုပ်ခြင်းသည် ကုန်ကျစရိတ်များပြီး မကြာခဏ မလိုအပ်ပါ — တကယ့် AI Engineering အလုပ်အများစုသည် ရှိပြီးသား Model များကို သုံးခြင်းနှင့် လိုက်လျောညီထွေဖြစ်အောင် ပြုလုပ်ခြင်း ပါဝင်ပြီး Zero မှ အသစ်တည်ဆောက်ခြင်း မဟုတ်ပါ။',
    ]),
    whereUsed: t([
      'The dominant way most companies actually use AI in production — calling a model API or fine-tuning a pre-trained one rather than training from zero.',
      'ကုမ္ပဏီအများစု Production တွင် AI ကို တကယ်အသုံးပြုသောနည်းလမ်း — Zero မှ Train မလုပ်ဘဲ Model API ခေါ်ခြင်း (သို့) Pre-trained Model တစ်ခုကို Fine-tune လုပ်ခြင်း။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Calling a hosted model API', 'Hosted Model API ခေါ်ခြင်း'],
      ['API keys and authentication for AI services', 'AI Service များအတွက် API Key နှင့် Authentication'],
      ['Reading and parsing a model\'s response', 'Model ၏ Response ကို ဖတ်ခြင်းနှင့် Parse လုပ်ခြင်း'],
      ['Rate limits and cost awareness', 'Rate Limit များနှင့် ကုန်ကျစရိတ် သိရှိမှု'],
    ]),
    steps: [
      step(
        ['Call a pre-trained model through an API', 'API မှတစ်ဆင့် Pre-trained Model တစ်ခု ခေါ်ခြင်း'],
        [
          ['Authenticating a request with an API key, kept server-side and never hardcoded in client code', 'API Key ဖြင့် Request တစ်ခု Authenticate လုပ်ခြင်း — Server-side တွင် ထားပြီး Client Code တွင် ဘယ်တော့မှ Hardcode မလုပ်ဘဲ'],
          ['Sending input and parsing the model\'s response', 'Input ပို့ပြီး Model ၏ Response ကို Parse လုပ်ခြင်း'],
        ],
        [
          ['Call a pre-trained model API with a sample input and parse its response', 'Sample Input ဖြင့် Pre-trained Model API တစ်ခု ခေါ်ပြီး ၎င်း၏ Response ကို Parse လုပ်ပါ'],
        ],
      ),
      step(
        ['Handle failures and costs responsibly', 'Failure များနှင့် ကုန်ကျစရိတ်များကို တာဝန်ယူတတ်စွာ ကိုင်တွယ်ခြင်း'],
        [
          ['Handling a failed or rate-limited API call gracefully', 'Fail ဖြစ် (သို့) Rate-limit ခံရသော API Call တစ်ခုကို ကောင်းမွန်စွာ ကိုင်တွယ်ခြင်း'],
        ],
        [
          ['Add error handling to your API call so a failure does not crash the program', 'Failure တစ်ခုက Program ကို Crash မဖြစ်စေရန် သင့် API Call သို့ Error Handling ထည့်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small script that calls a pre-trained model API to perform a useful task (e.g. summarizing text or classifying sentiment), with proper API key handling and error handling.',
      'သင့်လျော်သော API Key Handling နှင့် Error Handling ပါသော အသုံးဝင်သော Task (ဥပမာ Text အနှစ်ချုပ်ခြင်း သို့ Sentiment ခွဲခြားခြင်း) လုပ်ဆောင်ရန် Pre-trained Model API ခေါ်သော Script သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you call a new model API you have never used before, using only its documentation?',
      'ယခင်က ဘယ်တော့မှ မသုံးဖူးသေးသော Model API အသစ်တစ်ခုကို ၎င်း၏ Documentation ကိုသာ သုံး၍ ခေါ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always keep API keys server-side, exactly like the AI Mentor\'s own backend — never in client-side code.', 'API Key များကို AI Mentor ၏ ကိုယ်ပိုင် Backend ကဲ့သို့ Server-side တွင် အမြဲ ထားပါ — Client-side Code တွင် ဘယ်တော့မှ မထားပါနှင့်။'],
      ['Read a model API\'s documentation carefully before writing code against it — response formats vary a lot.', 'Code မရေးမီ Model API ၏ Documentation ကို သေချာစွာ ဖတ်ပါ — Response Format များ များစွာ ကွဲပြားသည်။'],
    ]),
    commonMistakes: list([
      ['Hardcoding an API key directly in code.', 'API Key တစ်ခုကို Code ထဲသို့ တိုက်ရိုက် Hardcode လုပ်ခြင်း။'],
      ['Not handling API failures, causing the whole program to crash.', 'API Failure များကို မကိုင်တွယ်ခြင်းက Program တစ်ခုလုံးကို Crash ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-core-3', [
      ['Call a pre-trained model API', 'Pre-trained Model API တစ်ခု ခေါ်ပါ'],
      ['Parse the model\'s response', 'Model ၏ Response ကို Parse လုပ်ပါ'],
      ['Add error handling for failed calls', 'Fail ဖြစ်သော Call များအတွက် Error Handling ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Call a pre-trained model through an API', 'API မှတစ်ဆင့် Pre-trained Model တစ်ခု ခေါ်နိုင်သည်'],
      ['Keep API keys secure and server-side', 'API Key များကို လုံခြုံစွာနှင့် Server-side တွင် ထားနိုင်သည်'],
      ['Handle API failures gracefully', 'API Failure များကို ကောင်းမွန်စွာ ကိုင်တွယ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-core-4': {
    whatItIs: t([
      'Prompt engineering is the practice of carefully crafting the instructions given to a language model to get reliable, useful output.',
      'Prompt Engineering ဆိုသည်မှာ ယုံကြည်ရ၍ အသုံးဝင်သော Output ရရှိရန် Language Model တစ်ခုသို့ ပေးသော ညွှန်ကြားချက်များကို သေချာစွာ ပြုလုပ်ခြင်း အလေ့အထ ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'How a prompt is written can dramatically change a language model\'s output quality — this has become a genuine, in-demand skill in its own right.',
      'Prompt တစ်ခု ရေးသားပုံသည် Language Model ၏ Output အရည်အသွေးကို သိသိသာသာ ပြောင်းလဲနိုင်သည် — ၎င်းသည် ကိုယ်ပိုင် ကျွမ်းကျင်မှုတစ်ခုအဖြစ် တကယ်၊ လိုအပ်နေသော ကျွမ်းကျင်မှု ဖြစ်လာသည်။',
    ]),
    whereUsed: t([
      'Used constantly by anyone building on top of large language models — chatbots, content tools, coding assistants, and more.',
      'Large Language Model များအပေါ် တည်ဆောက်နေသူ မည်သူမဆို — Chatbot, Content Tool, Coding Assistant စသည်ဖြင့် — အမြဲအသုံးပြုသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the model-API-calling skills from the previous topic.',
      'ယခင် Topic မှ Model-API-calling ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Clear, specific instructions', 'ရှင်းလင်း၍ တိကျသော ညွှန်ကြားချက်များ'],
      ['Providing examples (few-shot prompting)', 'ဥပမာများ ပေးခြင်း (Few-shot Prompting)'],
      ['System prompts vs. user prompts', 'System Prompt နှင့် User Prompt'],
      ['Iterating on a prompt based on output quality', 'Output အရည်အသွေးအပေါ် အခြေခံ၍ Prompt ကို Iterate လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Write clear, specific prompts', 'ရှင်းလင်း၍ တိကျသော Prompt များ ရေးခြင်း'],
        [
          ['Vague prompts produce vague, inconsistent output', 'မရှင်းလင်းသော Prompt များသည် မရှင်းလင်း၍ တသမတ်မတည်သော Output ကို ဖြစ်စေသည်'],
          ['Specifying format, tone, and constraints explicitly', 'Format, Tone, ကန့်သတ်ချက်များကို ရှင်းလင်းစွာ သတ်မှတ်ခြင်း'],
        ],
        [
          ['Write a vague prompt and a specific, well-constrained prompt for the same task, and compare the outputs', 'Task တူတစ်ခုအတွက် မရှင်းလင်းသော Prompt တစ်ခုနှင့် ရှင်းလင်း၍ ကန့်သတ်ချက်ကောင်းသော Prompt တစ်ခု ရေးပြီး Output များကို နှိုင်းယှဉ်ပါ'],
        ],
      ),
      step(
        ['Use examples and iterate', 'ဥပမာများ သုံးပြီး Iterate လုပ်ခြင်း'],
        [
          ['Few-shot prompting: showing the model a couple of examples of what you want', 'Few-shot Prompting — လိုချင်သည်ကို ဥပမာနှစ်ခုခန့် Model ကို ပြသခြင်း'],
          ['Refining a prompt based on where the output goes wrong', 'Output ဘယ်နေရာ မှားသည်ကို အခြေခံ၍ Prompt ကို ပြင်ဆင်ခြင်း'],
        ],
        [
          ['Add two examples to your prompt and observe how the output changes', 'သင့် Prompt သို့ ဥပမာနှစ်ခု ထည့်ပြီး Output မည်သို့ ပြောင်းလဲသည်ကို သတိပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Design a prompt for a real task (e.g. summarizing a paragraph in a specific tone, or extracting structured data from text), and iterate on it at least twice, documenting how each change improved the output.',
      'တကယ့် Task တစ်ခု (ဥပမာ Tone သီးခြားတစ်ခုဖြင့် Paragraph တစ်ခု အနှစ်ချုပ်ခြင်း (သို့) Text မှ ဖွဲ့စည်းထားသော Data ထုတ်ယူခြင်း) အတွက် Prompt တစ်ခု Design ဆွဲပြီး အနည်းဆုံး နှစ်ကြိမ် Iterate လုပ်ပါ — ပြောင်းလဲမှုတစ်ခုစီက Output ကို မည်သို့ တိုးတက်စေသည်ကို မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Given inconsistent output from a model, could you identify what about the prompt is causing it and fix it?',
      'Model တစ်ခုမှ တသမတ်မတည်သော Output ပေးလိုက်လျှင် Prompt ၏ မည်သည့်အပိုင်းက ၎င်းကို ဖြစ်စေသည်ကို ဖော်ထုတ်ပြီး ပြင်ဆင်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Be as specific as possible about format, length, and tone — do not assume the model will guess your intent.', 'Format, Length, Tone အကြောင်း တတ်နိုင်သမျှ တိကျပါ — Model က သင့်ရည်ရွယ်ချက်ကို ခန့်မှန်းလိမ့်မည်ဟု မယူဆပါနှင့်။'],
      ['Treat prompt writing as an iterative process, not a one-shot task.', 'Prompt ရေးသားခြင်းကို တစ်ကြိမ်တည်း Task တစ်ခုအစား Iterative လုပ်ငန်းစဉ်တစ်ခုအဖြစ် သဘောထားပါ။'],
    ]),
    commonMistakes: list([
      ['Writing vague prompts and blaming the model for inconsistent output.', 'မရှင်းလင်းသော Prompt များ ရေးပြီး တသမတ်မတည်သော Output အတွက် Model ကို အပြစ်တင်ခြင်း။'],
      ['Never iterating on a prompt after the first attempt.', 'ပထမဆုံး ကြိုးစားမှုပြီးနောက် Prompt ကို ဘယ်တော့မှ Iterate မလုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-core-4', [
      ['Compare a vague prompt to a specific one', 'မရှင်းလင်းသော Prompt တစ်ခုကို ရှင်းလင်းသော Prompt တစ်ခုနှင့် နှိုင်းယှဉ်ပါ'],
      ['Add examples to a prompt (few-shot)', 'Prompt တစ်ခုသို့ ဥပမာများ ထည့်ပါ (Few-shot)'],
      ['Iterate on a prompt at least twice', 'Prompt တစ်ခုကို အနည်းဆုံး နှစ်ကြိမ် Iterate လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Write clear, specific prompts', 'ရှင်းလင်း၍ တိကျသော Prompt များ ရေးနိုင်သည်'],
      ['Use few-shot examples in a prompt', 'Prompt တစ်ခုတွင် Few-shot ဥပမာများ သုံးနိုင်သည်'],
      ['Iterate on a prompt based on output quality', 'Output အရည်အသွေးအပေါ် အခြေခံ၍ Prompt ကို Iterate လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-intermediate-1': {
    whatItIs: t([
      'Deep learning fundamentals go deeper into multi-layer neural networks and the practical techniques needed to train them effectively.',
      'Deep Learning Fundamentals သည် Multi-layer Neural Network များနှင့် ၎င်းတို့ကို ထိရောက်စွာ Train လုပ်ရန် လိုအပ်သော လက်တွေ့ကျသော နည်းပညာများသို့ ပိုနက်ရှိုင်းစွာ ဝင်ရောက်သည်။',
    ]),
    whyItMatters: t([
      'Deep learning is what powers the most capable modern AI systems — image recognition, speech, and generative models all rely on techniques covered here.',
      'Deep Learning သည် ခေတ်သစ် AI System စွမ်းရည်အရှိဆုံးများ — Image Recognition, Speech, Generative Model များ — ကို ဖန်တီးပေးသည့်အရာ ဖြစ်ပြီး ဤနေရာတွင် လွှမ်းခြုံသော နည်းပညာများအပေါ် မှီခိုသည်။',
    ]),
    whereUsed: t([
      'Used in production AI systems across image recognition, natural language processing, recommendation systems, and generative AI.',
      'Image Recognition, Natural Language Processing, Recommendation System, Generative AI တစ်လျှောက်ရှိ Production AI System များတွင် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the neural network basics from the Core stage.',
      'Core အဆင့်မှ Neural Network အခြေခံများ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['Deeper networks and why depth helps', 'Network ပိုနက်ခြင်းနှင့် Depth ဘာကြောင့် ကူညီသလဲ'],
      ['Common architectures at a conceptual level (CNNs for images, RNNs/transformers for sequences)', 'Concept အဆင့်တွင် အများသုံး Architecture များ (Image များအတွက် CNN, Sequence များအတွက် RNN/Transformer)'],
      ['Regularization to reduce overfitting', 'Overfitting လျှော့ချရန် Regularization'],
      ['Using a GPU for training (conceptually)', 'Training အတွက် GPU သုံးခြင်း (Concept အရ)'],
    ]),
    steps: [
      step(
        ['Understand common architecture families at a conceptual level', 'Concept အဆင့်တွင် အများသုံး Architecture Family များ နားလည်ခြင်း'],
        [
          ['CNNs are well-suited to image data; transformers are well-suited to sequences like text', 'CNN များသည် Image Data နှင့် သင့်တော်ပြီး Transformer များသည် Text ကဲ့သို့ Sequence များနှင့် သင့်တော်သည်'],
        ],
        [
          ['For three example AI tasks (image classification, translation, spam detection), identify which architecture family fits best and why', 'ဥပမာ AI Task သုံးခု (Image Classification, Translation, Spam Detection) အတွက် မည်သည့် Architecture Family သင့်တော်ဆုံးနှင့် ဘာကြောင့်ဆိုသည်ကို ဖော်ထုတ်ပါ'],
        ],
      ),
      step(
        ['Apply regularization to reduce overfitting', 'Overfitting လျှော့ချရန် Regularization အသုံးချခြင်း'],
        [
          ['Techniques like dropout help a network generalize instead of memorizing', 'Dropout ကဲ့သို့ Technique များသည် Network တစ်ခုအား အလွတ်ကျက်မှတ်မည့်အစား Generalize ဖြစ်စေရန် ကူညီသည်'],
        ],
        [
          ['Train a network with and without a regularization technique and compare the test accuracy', 'Regularization Technique တစ်ခု ပါသည်နှင့် မပါသည် Network တစ်ခုကို Train လုပ်ပြီး Test Accuracy ကို နှိုင်းယှဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Train a slightly deeper neural network on a real dataset, apply at least one regularization technique, and document how it affected overfitting compared to the unregularized version.',
      'Dataset အစစ်တစ်ခုပေါ်တွင် ပိုနက်သော Neural Network တစ်ခု Train လုပ်ပါ၊ Regularization Technique အနည်းဆုံးတစ်ခု အသုံးချပါ၊ Regularization မလုပ်ထားသော Version နှင့် နှိုင်းယှဉ်ပြီး Overfitting အပေါ် မည်သို့ သက်ရောက်သည်ကို မှတ်တမ်းတင်ပါ။',
    ]),
    verify: t([
      'Given a new AI problem, could you make a reasonable first guess at which architecture family fits it and explain why?',
      'AI ပြဿနာ အသစ်တစ်ခု ပေးလိုက်လျှင် မည်သည့် Architecture Family သင့်တော်နိုင်သည်ကို ယုတ္တိရှိသော ပထမဆုံး ခန့်မှန်းချက်တစ်ခု ပြုလုပ်ပြီး ဘာကြောင့်ဆိုသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn architecture families by matching them to the type of data they were designed for.', 'Architecture Family များကို ၎င်းတို့ Design ဆွဲထားသော Data အမျိုးအစားနှင့် ကိုက်ညီအောင် လေ့လာပါ။'],
      ['Always compare regularized vs. unregularized results to confirm a technique actually helped.', 'Technique တစ်ခု တကယ်ကူညီကြောင်း အတည်ပြုရန် Regularized နှင့် Unregularized ရလဒ်များကို အမြဲ နှိုင်းယှဉ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Using an architecture that does not fit the type of data (e.g. a plain image-oriented network on text data).', 'Data အမျိုးအစားနှင့် မကိုက်ညီသော Architecture တစ်ခု သုံးခြင်း (ဥပမာ Text Data ပေါ်တွင် Image-oriented Network ရိုးရိုး)။'],
      ['Adding more layers to fix overfitting instead of using proper regularization.', 'သင့်လျော်သော Regularization မသုံးဘဲ Overfitting ပြင်ဆင်ရန် Layer ပိုများ ထည့်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-intermediate-1', [
      ['Match AI tasks to appropriate architecture families', 'AI Task များကို သင့်တော်သော Architecture Family များနှင့် ကိုက်ညီပါ'],
      ['Train a network with a regularization technique', 'Regularization Technique ပါသော Network တစ်ခု Train လုပ်ပါ'],
      ['Compare regularized and unregularized results', 'Regularized နှင့် Unregularized ရလဒ်များ နှိုင်းယှဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Explain common architecture families conceptually', 'အများသုံး Architecture Family များကို Concept အရ ရှင်းပြနိုင်သည်'],
      ['Apply a regularization technique', 'Regularization Technique တစ်ခု အသုံးချနိုင်သည်'],
      ['Compare model results with and without regularization', 'Regularization ပါသည်နှင့် မပါသည် Model ရလဒ်များ နှိုင်းယှဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-intermediate-2': {
    whatItIs: t([
      'Natural language processing (NLP) basics cover how AI systems work with human language — text classification, sentiment, and basic language understanding.',
      'Natural Language Processing (NLP) အခြေခံသည် AI System များ လူ့ဘာသာစကားနှင့် — Text Classification, Sentiment, အခြေခံ ဘာသာစကား နားလည်မှု — မည်သို့ အလုပ်လုပ်သည်ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Text is one of the most common forms of real-world data, and NLP is the foundation behind chatbots, search, translation, and large language models.',
      'Text သည် လက်တွေ့ဘဝ Data ပုံစံများထဲမှ အသုံးအများဆုံးတစ်ခု ဖြစ်ပြီး NLP သည် Chatbot, Search, Translation, Large Language Model များနောက်ကွယ်ရှိ အခြေခံ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Powers search engines, chatbots, sentiment analysis tools, translation services, and virtually every language-model-based product.',
      'Search Engine, Chatbot, Sentiment Analysis Tool, Translation Service နှင့် Language-model-based Product နီးပါးအားလုံးကို ပံ့ပိုးပေးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Text preprocessing (tokenization, lowercasing)', 'Text Preprocessing (Tokenization, Lowercasing)'],
      ['Turning text into numbers a model can use', 'Model တစ်ခု သုံးနိုင်သော ဂဏန်းများအဖြစ် Text ပြောင်းလဲခြင်း'],
      ['Text classification basics', 'Text Classification အခြေခံ'],
      ['What word embeddings represent (intuitively)', 'Word Embeddings ကိုယ်စားပြုသည်ကို (အလိုအလျောက် နားလည်မှု)'],
    ]),
    steps: [
      step(
        ['Preprocess text for a model', 'Model တစ်ခုအတွက် Text Preprocess လုပ်ခြင်း'],
        [
          ['Tokenization: breaking text into words or subwords', 'Tokenization — Text ကို Words သို့ Subwords များအဖြစ် ခွဲခြင်း'],
          ['Why raw text needs to be converted into numbers before a model can use it', 'Model တစ်ခု သုံးမီ Raw Text ကို ဂဏန်းများအဖြစ် ဘာကြောင့် ပြောင်းလဲရမည်ကို'],
        ],
        [
          ['Preprocess a sample set of text (tokenize and lowercase it) before feeding it to a model', 'Model တစ်ခုသို့ မပေးမီ Sample Text အစုအဝေးတစ်ခုကို Preprocess လုပ်ပါ (Tokenize လုပ်ပြီး Lowercase လုပ်ပါ)'],
        ],
      ),
      step(
        ['Build a simple text classifier', 'Text Classifier ရိုးရှင်းတစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Classifying text into categories (e.g. positive/negative sentiment)', 'Text ကို Category များအဖြစ် ခွဲခြားခြင်း (ဥပမာ Positive/Negative Sentiment)'],
        ],
        [
          ['Train a simple sentiment classifier on a sample dataset of text and labels', 'Text နှင့် Label များ၏ Sample Dataset ပေါ်တွင် Sentiment Classifier ရိုးရှင်းတစ်ခု Train လုပ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a simple text classification pipeline end to end: preprocess a sample text dataset, train a classifier, and evaluate its accuracy on held-out data.',
      'Text Classification Pipeline ရိုးရှင်းတစ်ခုကို အစအဆုံး တည်ဆောက်ပါ — Sample Text Dataset တစ်ခု Preprocess လုပ်ပါ၊ Classifier တစ်ခု Train လုပ်ပါ၊ ခွဲထားသော Data ပေါ်တွင် ၎င်း၏ Accuracy ကို Evaluate လုပ်ပါ။',
    ]),
    verify: t([
      'Could you explain, without jargon, why "cat" and "kitten" being represented as similar numbers (embeddings) is useful for a model?',
      'Jargon မသုံးဘဲ "cat" နှင့် "kitten" ကို ဂဏန်းဆင်တူများ (Embeddings) အဖြစ် ကိုယ်စားပြုခြင်းသည် Model တစ်ခုအတွက် ဘာကြောင့် အသုံးဝင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always preprocess text consistently — the same way for training and for new inputs later.', 'Text ကို တသမတ်တည်း အမြဲ Preprocess လုပ်ပါ — Training အတွက်နှင့် နောက်ပိုင်း Input အသစ်များအတွက် နည်းလမ်းတူတူ။'],
      ['Start with a simple classification task before attempting more complex NLP problems.', 'ပိုရှုပ်ထွေးသော NLP ပြဿနာများ မကြိုးစားမီ Classification Task ရိုးရှင်းတစ်ခုနှင့် စတင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Feeding raw, unprocessed text directly into a model.', 'Raw, Process မလုပ်ရသေးသော Text ကို Model တစ်ခုထဲသို့ တိုက်ရိုက် ထည့်ခြင်း။'],
      ['Preprocessing training data and new input data differently, causing inconsistent results.', 'Training Data နှင့် Input Data အသစ်များကို မတူညီစွာ Preprocess လုပ်ခြင်းက တသမတ်မတည်သော ရလဒ်များ ဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-intermediate-2', [
      ['Tokenize and preprocess a sample text dataset', 'Sample Text Dataset တစ်ခု Tokenize လုပ်ပြီး Preprocess လုပ်ပါ'],
      ['Train a simple text classifier', 'Text Classifier ရိုးရှင်းတစ်ခု Train လုပ်ပါ'],
      ['Evaluate the classifier\'s accuracy', 'Classifier ၏ Accuracy ကို Evaluate လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Preprocess text for a model', 'Model တစ်ခုအတွက် Text Preprocess လုပ်နိုင်သည်'],
      ['Build a simple text classifier', 'Text Classifier ရိုးရှင်းတစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Explain what word embeddings represent', 'Word Embeddings ကိုယ်စားပြုသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-intermediate-3': {
    whatItIs: t([
      'Fine-tuning and adapting models means taking an existing pre-trained model and further training it on your own specific data, instead of building from scratch.',
      'Fine-tuning and Adapting Models ဆိုသည်မှာ Zero မှ တည်ဆောက်မည့်အစား ရှိပြီးသား Pre-trained Model တစ်ခုကို သင့်ကိုယ်ပိုင် Data သီးခြားတစ်ခုပေါ်တွင် ဆက်လက် Train လုပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Fine-tuning is far cheaper and faster than training from scratch, and is how most real-world AI products get adapted to a specific domain or use case.',
      'Fine-tuning သည် Zero မှ Train လုပ်ခြင်းထက် အများကြီး ပိုသက်သာ၍ ပိုမြန်ဆန်ပြီး တကယ့် AI Product အများစု Domain (သို့) Use Case သီးခြားတစ်ခုသို့ လိုက်လျောညီထွေဖြစ်အောင် ပြုလုပ်ပုံ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Common practice for adapting a general-purpose model to a specific business need — customer support tone, a specialized vocabulary, a narrow task.',
      'General-purpose Model တစ်ခုကို Business လိုအပ်ချက် သီးခြားတစ်ခု — Customer Support Tone, အထူးပြု ဝေါဟာရ, Task ကျဉ်းမြောင်းတစ်ခု — သို့ လိုက်လျောညီထွေဖြစ်အောင် ပြုလုပ်ရန် အသုံးများသည်။',
    ]),
    prerequisiteNote: t([
      'Requires comfort with pre-trained models from the Core stage and supervised training from earlier in this stage.',
      'Core အဆင့်မှ Pre-trained Model များနှင့် ဤအဆင့်ရှေ့ပိုင်းမှ Supervised Training နှင့် ရင်းနှီးမှု လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['When fine-tuning makes sense vs. prompt engineering alone', 'Fine-tuning ဘယ်အချိန် သင့်တော်သည်နှင့် Prompt Engineering တစ်ခုတည်း'],
      ['Preparing a fine-tuning dataset', 'Fine-tuning Dataset ပြင်ဆင်ခြင်း'],
      ['Evaluating a fine-tuned model against the original', 'Fine-tune လုပ်ထားသော Model ကို မူရင်းနှင့် Evaluate လုပ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Decide when fine-tuning is the right approach', 'Fine-tuning သည် မှန်ကန်သော ချဉ်းကပ်နည်းဖြစ်သည့်အခါ ဆုံးဖြတ်ခြင်း'],
        [
          ['Prompt engineering is faster and cheaper; fine-tuning is worth it for narrow, repeated, specialized tasks', 'Prompt Engineering သည် ပိုမြန်၍ ပိုသက်သာသည် — Fine-tuning သည် ကျဉ်းမြောင်း၍ ထပ်ခါထပ်ခါဖြစ်သော အထူးပြု Task များအတွက် တန်ဖိုးရှိသည်'],
        ],
        [
          ['Given three scenarios, decide for each whether prompt engineering or fine-tuning would be the more appropriate approach', 'Scenario သုံးခု ပေးလိုက်လျှင် တစ်ခုစီအတွက် Prompt Engineering (သို့) Fine-tuning ဘယ်ဟာက ပိုသင့်တော်သည်ကို ဆုံးဖြတ်ပါ'],
        ],
      ),
      step(
        ['Prepare data and fine-tune a model', 'Data ပြင်ဆင်ပြီး Model တစ်ခု Fine-tune လုပ်ခြင်း'],
        [
          ['Formatting example data the way the fine-tuning process expects', 'Fine-tuning လုပ်ငန်းစဉ် မျှော်လင့်ထားသည့်ပုံစံဖြင့် ဥပမာ Data ကို Format ချခြင်း'],
        ],
        [
          ['Prepare a small fine-tuning dataset for a narrow task (e.g. classifying support tickets) and format it correctly', 'Task ကျဉ်းမြောင်းတစ်ခု (ဥပမာ Support Ticket များ ခွဲခြားခြင်း) အတွက် Fine-tuning Dataset သေးငယ်တစ်ခု ပြင်ဆင်ပြီး မှန်ကန်စွာ Format ချပါ'],
        ],
      ),
    ],
    build: t([
      'For a narrow, specific task, prepare a small fine-tuning dataset, fine-tune (or simulate fine-tuning if resources are limited) a model on it, and compare its output to the original, unmodified model.',
      'Task ကျဉ်းမြောင်း သီးခြားတစ်ခုအတွက် Fine-tuning Dataset သေးငယ်တစ်ခု ပြင်ဆင်ပါ၊ ၎င်းပေါ်တွင် Model တစ်ခုကို Fine-tune လုပ်ပါ (Resource ကန့်သတ်ထားပါက Fine-tuning ကို Simulate လုပ်ပါ)၊ ၎င်း၏ Output ကို မူရင်း၊ ပြင်ဆင်မထားသော Model နှင့် နှိုင်းယှဉ်ပါ။',
    ]),
    verify: t([
      'Given a business need, could you decide whether prompt engineering alone would be enough, or whether fine-tuning is genuinely worth the extra cost?',
      'Business လိုအပ်ချက်တစ်ခု ပေးလိုက်လျှင် Prompt Engineering တစ်ခုတည်းသာ လုံလောက်မလား၊ (သို့) Fine-tuning သည် ထပ်ဆောင်း ကုန်ကျစရိတ်နှင့် တကယ် တန်ဖိုးရှိမလား ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Try prompt engineering first — it is much cheaper, and often solves the problem without fine-tuning at all.', 'Prompt Engineering ကို ဦးစွာ စမ်းကြည့်ပါ — ၎င်းသည် အများကြီး ပိုသက်သာပြီး Fine-tuning လုံးဝ မလိုဘဲ ပြဿနာကို မကြာခဏ ဖြေရှင်းပေးသည်။'],
      ['Keep a fine-tuning dataset small and high-quality rather than large and noisy.', 'Fine-tuning Dataset ကို ကြီး၍ Noisy ဖြစ်မည့်အစား သေးငယ်၍ အရည်အသွေးမြင့် ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Reaching for fine-tuning before trying simpler prompt engineering.', 'ရိုးရှင်းသော Prompt Engineering မစမ်းမီ Fine-tuning ကို ရှာဖွေခြင်း။'],
      ['Fine-tuning on a small, low-quality, or inconsistent dataset.', 'သေးငယ်၍ အရည်အသွေးနိမ့်သော (သို့) တသမတ်မတည်သော Dataset ပေါ်တွင် Fine-tune လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-intermediate-3', [
      ['Decide between prompt engineering and fine-tuning for three scenarios', 'Scenario သုံးခုအတွက် Prompt Engineering နှင့် Fine-tuning ကြား ဆုံးဖြတ်ပါ'],
      ['Prepare a small fine-tuning dataset', 'Fine-tuning Dataset သေးငယ်တစ်ခု ပြင်ဆင်ပါ'],
      ['Compare fine-tuned and original model output', 'Fine-tune လုပ်ထားသော Model နှင့် မူရင်း Model Output ကို နှိုင်းယှဉ်ပါ'],
    ]),
    completionChecklist: list([
      ['Decide when fine-tuning is appropriate', 'Fine-tuning သင့်တော်သည့်အခါ ဆုံးဖြတ်နိုင်သည်'],
      ['Prepare a fine-tuning dataset correctly', 'Fine-tuning Dataset တစ်ခု မှန်ကန်စွာ ပြင်ဆင်နိုင်သည်'],
      ['Compare fine-tuned results to the original model', 'Fine-tune လုပ်ထားသော ရလဒ်များကို မူရင်း Model နှင့် နှိုင်းယှဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-intermediate-4': {
    whatItIs: t([
      'Building AI-powered applications means integrating a model — your own or a pre-trained one — into a real, usable application with a proper interface.',
      'AI-powered Application တည်ဆောက်ခြင်းဆိုသည်မှာ Model တစ်ခု — ကိုယ်ပိုင်ဖြစ်စေ၊ Pre-trained ဖြစ်စေ — ကို သင့်လျော်သော Interface ပါသော တကယ့် အသုံးပြုနိုင်သော Application ထဲသို့ ပေါင်းစပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A model sitting in a notebook has no real value until it is wrapped in something a real user can actually use — this is where AI engineering meets software engineering.',
      'Notebook တစ်ခုထဲတွင်ရှိနေသော Model တစ်ခုသည် User အစစ်တစ်ဦး တကယ်သုံးနိုင်မည့်အရာတစ်ခုထဲတွင် ထုပ်ပိုးမထားသရွေ့ တကယ့်တန်ဖိုး မရှိပါ — ဤနေရာသည် AI Engineering သည် Software Engineering နှင့် တွေ့ဆုံရာနေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The final, essential step of turning an AI capability into an actual product feature users can access.',
      'AI စွမ်းရည်တစ်ခုကို User များ ဝင်ရောက်နိုင်မည့် Product Feature အစစ်တစ်ခုအဖြစ် ပြောင်းလဲရာ နောက်ဆုံး၊ မရှိမဖြစ် အဆင့် ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Draws on the model-API skills from the Core stage and general web development patterns.',
      'Core အဆင့်မှ Model-API ကျွမ်းကျင်မှုများနှင့် General Web Development Pattern များကို အသုံးချသည်။',
    ]),
    firstSteps: list([
      ['Wrapping a model call in a server-side API route', 'Model Call တစ်ခုကို Server-side API Route တွင် ထုပ်ပိုးခြင်း'],
      ['Building a simple frontend to interact with the model', 'Model နှင့် Interact ဖြစ်ရန် Frontend ရိုးရှင်းတစ်ခု တည်ဆောက်ခြင်း'],
      ['Loading, success, and error states for AI responses', 'AI Response များအတွက် Loading, Success, Error State များ'],
    ]),
    steps: [
      step(
        ['Wrap a model call in a server-side route', 'Model Call တစ်ခုကို Server-side Route တွင် ထုပ်ပိုးခြင်း'],
        [
          ['Never calling a model API directly from client-side code — always go through a server route', 'Model API ကို Client-side Code မှ ဘယ်တော့မှ တိုက်ရိုက် မခေါ်ဘဲ — Server Route မှတစ်ဆင့် အမြဲ သွားပါ'],
        ],
        [
          ['Build a server-side API route that accepts input, calls a model, and returns the result', 'Input လက်ခံပြီး Model တစ်ခု ခေါ်ကာ ရလဒ်ကို ပြန်ပေးသော Server-side API Route တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Build a simple UI with proper states', 'သင့်လျော်သော State များပါသော UI ရိုးရှင်းတစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Showing a loading state while waiting for a model response', 'Model Response ကို စောင့်နေစဉ် Loading State ပြသခြင်း'],
          ['Handling errors gracefully, matching the AI Mentor\'s own established fallback pattern', 'AI Mentor ၏ ကိုယ်ပိုင် တည်ထောင်ပြီးသား Fallback Pattern နှင့် ကိုက်ညီစေရန် Error များကို ကောင်းမွန်စွာ ကိုင်တွယ်ခြင်း'],
        ],
        [
          ['Build a simple frontend with an input field, a loading state, and an error state for your AI-powered route', 'Input Field, Loading State, သင့် AI-powered Route အတွက် Error State ပါသော Frontend ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small end-to-end AI-powered feature: a server-side route that calls a model, and a simple frontend with proper loading, success, and error states — the same pattern LANN\'s own AI Mentor follows.',
      'AI-powered Feature သေးငယ်တစ်ခုကို End-to-end တည်ဆောက်ပါ — Model တစ်ခု ခေါ်သော Server-side Route တစ်ခုနှင့် သင့်လျော်သော Loading, Success, Error State များပါသော Frontend ရိုးရှင်းတစ်ခု — LANN ၏ ကိုယ်ပိုင် AI Mentor လိုက်နာသည့် Pattern တူတူ။',
    ]),
    verify: t([
      'If your model API call fails, does your application show a friendly message, or does it crash or hang?',
      'သင့် Model API Call Fail ဖြစ်လျှင် သင့် Application က Friendly Message ပြသလား၊ (သို့) Crash ဖြစ် (သို့) ခိုင်နေလား?',
    ]),
    tips: list([
      ['Study LANN\'s own AI Mentor feature as a real, working reference for this exact pattern.', 'ဤ Pattern အတွက် တကယ့်၊ အလုပ်လုပ်သော Reference အဖြစ် LANN ၏ ကိုယ်ပိုင် AI Mentor Feature ကို လေ့လာပါ။'],
      ['Always design for the AI being temporarily unavailable — never let that break the rest of the app.', 'AI ခေတ္တ မရရှိနိုင်ခြင်းအတွက် အမြဲ Design ဆွဲပါ — ၎င်းက App ၏ ကျန်အပိုင်းကို ဘယ်တော့မှ မပျက်စေပါနှင့်။'],
    ]),
    commonMistakes: list([
      ['Calling a model API directly from client-side code, exposing the API key.', 'Client-side Code မှ Model API ကို တိုက်ရိုက် ခေါ်ခြင်းက API Key ကို ဖော်ထုတ်ပေးသည်။'],
      ['Not showing any loading state, leaving users unsure if anything is happening.', 'Loading State မပြသခြင်းက User များအား တစ်ခုခု ဖြစ်နေသလားဆိုတာ မသေချာဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-intermediate-4', [
      ['Build a server-side route that calls a model', 'Model တစ်ခု ခေါ်သော Server-side Route တစ်ခု တည်ဆောက်ပါ'],
      ['Build a frontend with a loading state', 'Loading State ပါသော Frontend တစ်ခု တည်ဆောက်ပါ'],
      ['Add error handling for a failed AI response', 'Fail ဖြစ်သော AI Response အတွက် Error Handling ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Wrap a model call in a server-side route', 'Model Call တစ်ခုကို Server-side Route တွင် ထုပ်ပိုးနိုင်သည်'],
      ['Build a simple frontend for an AI feature', 'AI Feature တစ်ခုအတွက် Frontend ရိုးရှင်းတစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Handle loading and error states for AI responses', 'AI Response များအတွက် Loading နှင့် Error State များ ကိုင်တွယ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-advanced-1': {
    whatItIs: t([
      'Generative AI and LLM applications cover building real features on top of large language models — chat interfaces, content generation, and retrieval-augmented systems.',
      'Generative AI နှင့် LLM Application များသည် Large Language Model များအပေါ် တကယ့် Feature များ တည်ဆောက်ခြင်း — Chat Interface, Content Generation, Retrieval-augmented System များ — ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Generative AI is the fastest-growing, most visible area of applied AI right now, and the skills to build real products on top of LLMs are in high demand.',
      'Generative AI သည် ယခုအချိန် Applied AI ရှိ အလျင်မြန်ဆုံး ကြီးထွားနေ၍ အထင်ရှားဆုံး နယ်ပယ် ဖြစ်ပြီး LLM များအပေါ် Product အစစ်များ တည်ဆောက်ရန် ကျွမ်းကျင်မှုများကို အလွန်လိုအပ်နေသည်။',
    ]),
    whereUsed: t([
      'Powers chatbots, writing assistants, code generation tools, and a rapidly growing category of AI-native products.',
      'Chatbot, Writing Assistant, Code Generation Tool နှင့် လျင်မြန်စွာ ကြီးထွားနေသော AI-native Product Category ကို ပံ့ပိုးပေးသည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on prompt engineering, model APIs, and application-building from earlier stages.',
      'ဤသည်မှာ ယခင် အဆင့်များမှ Prompt Engineering, Model API, Application-building ကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Building a conversational chat feature', 'Conversational Chat Feature တည်ဆောက်ခြင်း'],
      ['Maintaining conversation context/history', 'Conversation Context/History ထိန်းသိမ်းခြင်း'],
      ['Retrieval-augmented generation (RAG) at a conceptual level', 'Retrieval-augmented Generation (RAG) ကို Concept အဆင့်တွင်'],
      ['Guardrails: keeping generated output on-topic and safe', 'Guardrails — ထုတ်လုပ်ထားသော Output ကို ခေါင်းစဉ်နှင့် ကိုက်ညီ၍ ဘေးကင်းအောင် ထားခြင်း'],
    ]),
    steps: [
      step(
        ['Build a conversational feature with context', 'Context ပါသော Conversational Feature တည်ဆောက်ခြင်း'],
        [
          ['Passing prior conversation turns back to the model so it has context', 'Model တွင် Context ရှိစေရန် ယခင် Conversation Turn များကို ပြန်ပို့ခြင်း'],
        ],
        [
          ['Extend your AI-powered feature from the previous topic to maintain conversation history across multiple turns', 'ယခင် Topic မှ သင့် AI-powered Feature ကို Turn များစွာတစ်လျှောက် Conversation History ထိန်းသိမ်းရန် တိုးချဲ့ပါ'],
        ],
      ),
      step(
        ['Understand retrieval-augmented generation conceptually', 'Retrieval-augmented Generation ကို Concept အရ နားလည်ခြင်း'],
        [
          ['RAG retrieves relevant real information and gives it to the model as context, reducing made-up answers', 'RAG သည် သက်ဆိုင်ရာ တကယ့် Information ကို ရှာဖွေပြီး Model ကို Context အဖြစ် ပေးသည် — ဖန်တီးထားသော အဖြေများ လျှော့ချသည်'],
        ],
        [
          ['Explain, using LANN\'s own AI Mentor as an example, why grounding an AI response in real context matters more than letting it answer freely', 'LANN ၏ ကိုယ်ပိုင် AI Mentor ကို ဥပမာအဖြစ်သုံး၍ AI Response တစ်ခုကို တကယ့် Context တွင် Ground ချထားခြင်းသည် လွတ်လပ်စွာ အဖြေပေးစေခြင်းထက် ဘာကြောင့် ပိုအရေးကြီးသည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small chat-style feature that maintains conversation context across multiple turns and includes basic guardrails (e.g. refusing off-topic requests), following the AI Mentor\'s established pattern of graceful degradation.',
      'AI Mentor ၏ တည်ထောင်ပြီးသား Graceful Degradation Pattern ကို လိုက်နာသော Turn များစွာတစ်လျှောက် Conversation Context ထိန်းသိမ်းပြီး အခြေခံ Guardrail များ (ဥပမာ ခေါင်းစဉ်နှင့် မကိုက်ညီသော တောင်းဆိုချက်များ ငြင်းပယ်ခြင်း) ပါဝင်သော Chat-style Feature သေးငယ်တစ်ခု တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Could you explain why an AI feature that "makes things up" confidently is more dangerous than one that honestly says it does not know?',
      '"အရာများ ဖန်တီးပြော" ယုံကြည်စွာ ပြောသော AI Feature တစ်ခုသည် မသိကြောင်း ရိုးသားစွာ ပြောသော တစ်ခုထက် ဘာကြောင့် ပိုအန္တရာယ်ရှိသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Ground AI responses in real, retrieved context whenever accuracy matters — never let a model "freestyle" facts.', 'တိကျမှု အရေးကြီးသည့်အခါတိုင်း AI Response များကို တကယ့်၊ ရှာဖွေတွေ့ရှိသော Context တွင် Ground ချပါ — Model တစ်ခုကို အချက်အလက်များ "Freestyle" ဘယ်တော့မှ မလုပ်စေပါနှင့်။'],
      ['Build guardrails as part of the design from the start, not as an afterthought.', 'Guardrail များကို နောက်ဆုံးမှ တွေးခေါ်မည့်အစား Design ၏ အစိတ်အပိုင်းအဖြစ် အစကတည်းက တည်ဆောက်ပါ။'],
    ]),
    commonMistakes: list([
      ['Letting a model answer from its own general knowledge when it should be grounded in specific, verified context.', 'တိကျ၍ အတည်ပြုပြီးသော Context တွင် Ground ချသင့်သည့်အခါ Model တစ်ခုကို ၎င်း၏ General Knowledge မှ အဖြေပေးစေခြင်း။'],
      ['Not maintaining conversation history, making a "chat" feature feel disjointed.', 'Conversation History မထိန်းသိမ်းခြင်းက "Chat" Feature တစ်ခုကို ကွဲကွာနေသလို ခံစားစေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-advanced-1', [
      ['Maintain conversation context across turns', 'Turn များတစ်လျှောက် Conversation Context ထိန်းသိမ်းပါ'],
      ['Explain retrieval-augmented generation conceptually', 'Retrieval-augmented Generation ကို Concept အရ ရှင်းပြပါ'],
      ['Add a basic guardrail to a chat feature', 'Chat Feature တစ်ခုသို့ အခြေခံ Guardrail တစ်ခု ထည့်ပါ'],
    ]),
    completionChecklist: list([
      ['Build a conversational feature with context', 'Context ပါသော Conversational Feature တစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Explain retrieval-augmented generation', 'Retrieval-augmented Generation ရှင်းပြနိုင်သည်'],
      ['Add basic guardrails to generated output', 'ထုတ်လုပ်ထားသော Output သို့ အခြေခံ Guardrail များ ထည့်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-advanced-2': {
    whatItIs: t([
      'MLOps basics cover the practices for reliably deploying, monitoring, and maintaining machine learning models in production — not just training them once.',
      'MLOps အခြေခံသည် Machine Learning Model များကို Production တွင် ယုံကြည်စိတ်ချစွာ Deploy လုပ်ခြင်း၊ Monitor လုပ်ခြင်းနှင့် ထိန်းသိမ်းခြင်းအတွက် အလေ့အထများကို လွှမ်းခြုံသည် — တစ်ကြိမ်တည်း Train လုပ်ခြင်းမက။',
    ]),
    whyItMatters: t([
      'A model that works well once in a notebook can silently degrade in production as real-world data changes — MLOps is what keeps AI systems reliable over time.',
      'Notebook တစ်ခုတွင် တစ်ကြိမ် ကောင်းစွာအလုပ်လုပ်သော Model တစ်ခုသည် လက်တွေ့ဘဝ Data ပြောင်းလဲလာသည်နှင့်အမျှ Production တွင် တိတ်တဆိတ် ညံ့ဖျင်းလာနိုင်သည် — MLOps သည် AI System များကို အချိန်ကြာလာသည်နှင့်အမျှ ယုံကြည်စိတ်ချရအောင် ထားပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Essential at any organization running AI models in production at real scale, especially where security and infrastructure teams are also involved (the "MLOps/DevSecOps" overlap).',
      'Security နှင့် Infrastructure Team များပါ ပါဝင်သည့်နေရာများတွင် (MLOps/DevSecOps ထပ်ဆင့်ဖြစ်မှု) အထူးသဖြင့် Scale အစစ်တစ်ခုတွင် Production ၌ AI Model များ Run နေသော အဖွဲ့အစည်းမည်သည်တွင်မဆို မရှိမဖြစ် လိုအပ်သည်။',
    ]),
    prerequisiteNote: t([
      'Connects AI engineering to the DevOps concepts covered in the Cloud/DevOps path — useful context if you have looked at that path too.',
      'AI Engineering ကို Cloud/DevOps Path တွင် လွှမ်းခြုံခဲ့သော DevOps Concept များနှင့် ချိတ်ဆက်ပေးသည် — ထို Path ကိုပါ ကြည့်ရှုထားလျှင် အသုံးဝင်သော Context ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Versioning models and data', 'Models နှင့် Data ကို Version ပေးခြင်း'],
      ['Monitoring model performance over time', 'အချိန်နှင့်အမျှ Model Performance ကို Monitor လုပ်ခြင်း'],
      ['Detecting model/data drift (conceptually)', 'Model/Data Drift ဖော်ထုတ်ခြင်း (Concept အရ)'],
      ['Retraining and redeployment basics', 'Retraining နှင့် Redeployment အခြေခံ'],
    ]),
    steps: [
      step(
        ['Version models and track experiments', 'Model များ Version ပေးပြီး Experiment များ Track လုပ်ခြင်း'],
        [
          ['Why you need to know exactly which data and settings produced a given model version', 'Model Version တစ်ခုကို မည်သည့် Data နှင့် Setting များက ထုတ်လုပ်ခဲ့သည်ကို အတိအကျ ဘာကြောင့် သိရမည်ကို'],
        ],
        [
          ['Set up a simple system (even a structured naming convention or log file) to track which dataset and settings produced each model you train', 'Train လုပ်သော Model တစ်ခုစီကို မည်သည့် Dataset နှင့် Setting များက ထုတ်လုပ်ခဲ့သည်ကို Track လုပ်ရန် စနစ်ရိုးရှင်း (ဖွဲ့စည်းထားသော နာမည်ပေးနည်း သို့ Log File ပင်လျှင်) တစ်ခု Setup လုပ်ပါ'],
        ],
      ),
      step(
        ['Understand model drift and monitoring', 'Model Drift နှင့် Monitoring နားလည်ခြင်း'],
        [
          ['Model drift: real-world data changes over time, so a model\'s accuracy can quietly decline', 'Model Drift — လက်တွေ့ဘဝ Data သည် အချိန်နှင့်အမျှ ပြောင်းလဲလာသည်၊ ထို့ကြောင့် Model တစ်ခု၏ Accuracy သည် တိတ်တဆိတ် ကျဆင်းသွားနိုင်သည်'],
        ],
        [
          ['Explain what monitoring you would want in place to catch a model degrading silently in production', 'Production တွင် တိတ်တဆိတ် ညံ့ဖျင်းလာနေသော Model တစ်ခုကို ဖမ်းယူရန် မည်သည့် Monitoring ရှိစေလိုသည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short MLOps plan for a model you trained earlier in this path: how you would version it, what you would monitor in production, and what would trigger retraining.',
      'ဤ Path ရှေ့ပိုင်းတွင် Train လုပ်ခဲ့သော Model တစ်ခုအတွက် MLOps Plan တိုတောင်းတစ်ခု ရေးပါ — ၎င်းကို မည်သို့ Version ပေးမည်၊ Production တွင် ဘာကို Monitor လုပ်မည်နှင့် ဘာက Retraining ကို Trigger ဖြစ်စေမည်။',
    ]),
    verify: t([
      'Could you explain why a model that was accurate at launch might become less accurate six months later without any code changing?',
      'Launch လုပ်စဉ်က တိကျခဲ့သော Model တစ်ခုသည် Code ဘာမှမပြောင်းလဲဘဲ ခြောက်လအကြာတွင် တိကျမှု နည်းသွားနိုင်သည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Track what data and settings produced every model version — you will need this when something goes wrong.', 'Model Version တိုင်းကို မည်သည့် Data နှင့် Setting များက ထုတ်လုပ်ခဲ့သည်ကို Track လုပ်ပါ — တစ်ခုခု မှားသွားသောအခါ ၎င်းကို လိုအပ်လိမ့်မည်။'],
      ['Monitor a model\'s real-world accuracy over time, not just its accuracy at launch.', 'Launch လုပ်စဉ်က Accuracy တစ်ခုတည်းမကဘဲ Model တစ်ခု၏ လက်တွေ့ဘဝ Accuracy ကို အချိန်နှင့်အမျှ Monitor လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Deploying a model once and never checking on it again.', 'Model တစ်ခုကို တစ်ကြိမ်တည်း Deploy လုပ်ပြီး နောက်ထပ် ဘယ်တော့မှ မပြန်စစ်ဆေးခြင်း။'],
      ['Not tracking which data/settings produced a given model, making problems impossible to diagnose later.', 'Model တစ်ခုကို မည်သည့် Data/Setting များက ထုတ်လုပ်ခဲ့သည်ကို Track မလုပ်ခြင်းက နောက်ပိုင်း ပြဿနာများကို ရှာမတွေ့နိုင်စေသည်။'],
    ]),
    practiceTasks: tasks('ai-engineer-advanced-2', [
      ['Set up basic version tracking for a model', 'Model တစ်ခုအတွက် အခြေခံ Version Tracking Setup လုပ်ပါ'],
      ['Explain model drift', 'Model Drift ရှင်းပြပါ'],
      ['Write a short MLOps plan for a model', 'Model တစ်ခုအတွက် MLOps Plan တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Version models and track what produced them', 'Model များ Version ပေးပြီး ၎င်းတို့ကို ဘာက ထုတ်လုပ်ခဲ့သည်ကို Track လုပ်နိုင်သည်'],
      ['Explain model/data drift', 'Model/Data Drift ရှင်းပြနိုင်သည်'],
      ['Plan monitoring for a production model', 'Production Model တစ်ခုအတွက် Monitoring စီစဉ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-advanced-3': {
    whatItIs: t([
      'Model evaluation and responsible AI cover rigorously testing a model\'s performance and fairness, and being honest about its limitations before shipping it.',
      'Model Evaluation နှင့် Responsible AI သည် Model တစ်ခု၏ Performance နှင့် Fairness ကို တင်းကျပ်စွာ Test လုပ်ခြင်းနှင့် ၎င်းကို မထုတ်ဖော်မီ ကန့်သတ်ချက်များအကြောင်း ရိုးသားခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'AI models can fail in subtle, biased, or harmful ways that are easy to miss without deliberate evaluation — shipping a model without checking this can cause real damage.',
      'AI Model များသည် ရည်ရွယ်ချက်ရှိသော Evaluation မရှိပါက လွယ်ကူစွာ လွတ်သွားနိုင်သော သိမ်မွေ့၊ Bias ရှိ (သို့) အန္တရာယ်ရှိသော နည်းလမ်းများဖြင့် Fail ဖြစ်နိုင်သည် — ဤအရာကို မစစ်ဆေးဘဲ Model တစ်ခုကို ထုတ်ဖော်ခြင်းသည် တကယ့် ပျက်စီးမှုကို ဖြစ်စေနိုင်သည်။',
    ]),
    whereUsed: t([
      'A required part of responsible AI development at any organization deploying models that affect real people\'s lives or decisions.',
      'တကယ့် လူများ၏ ဘဝ (သို့) ဆုံးဖြတ်ချက်များကို ထိခိုက်စေသော Model များ Deploy လုပ်သော အဖွဲ့အစည်းမည်သည်တွင်မဆို Responsible AI Development ၏ လိုအပ်သော အစိတ်အပိုင်း ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Evaluation metrics beyond accuracy alone', 'Accuracy တစ်ခုတည်းကျော်လွန်သော Evaluation Metric များ'],
      ['Checking for bias across different groups', 'အုပ်စုမတူညီများတစ်လျှောက် Bias အတွက် စစ်ဆေးခြင်း'],
      ['Being explicit about a model\'s known limitations', 'Model တစ်ခု၏ သိထားသော ကန့်သတ်ချက်များအကြောင်း ရှင်းလင်းစွာ ဖော်ပြခြင်း'],
      ['Human review for high-stakes decisions', 'အန္တရာယ်များသော ဆုံးဖြတ်ချက်များအတွက် လူ့ Review'],
    ]),
    steps: [
      step(
        ['Evaluate a model beyond simple accuracy', 'Model တစ်ခုကို ရိုးရှင်းသော Accuracy ကျော်လွန်၍ Evaluate လုပ်ခြင်း'],
        [
          ['Accuracy alone can hide serious problems, especially on imbalanced data', 'Accuracy တစ်ခုတည်းသည် အထူးသဖြင့် မညီမျှသော Data ပေါ်တွင် ပြင်းထန်သော ပြဿနာများကို ဖျောက်ထားနိုင်သည်'],
        ],
        [
          ['Evaluate a model from earlier in this path on more than just overall accuracy — check its performance on different subgroups if the data allows', 'ဤ Path ရှေ့ပိုင်းမှ Model တစ်ခုကို Overall Accuracy တစ်ခုတည်းကျော်လွန်၍ Evaluate လုပ်ပါ — Data ခွင့်ပြုပါက Subgroup မတူညီများ၏ Performance ကို စစ်ဆေးပါ'],
        ],
      ),
      step(
        ['Document a model\'s limitations honestly', 'Model တစ်ခု၏ ကန့်သတ်ချက်များကို ရိုးသားစွာ မှတ်တမ်းတင်ခြင်း'],
        [
          ['Writing down what a model is not reliable at, not just what it does well', 'Model တစ်ခု ကောင်းစွာ လုပ်ဆောင်သည်များကိုသာမက ယုံကြည်စိတ်ချ၍ မရသည်များကိုပါ ရေးထားခြင်း'],
        ],
        [
          ['Write a short "known limitations" section for a model you built in this path', 'ဤ Path တွင် သင်တည်ဆောက်ခဲ့သော Model တစ်ခုအတွက် "Known Limitations" အပိုင်း တိုတောင်းတစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Write a short model evaluation report for a model you built in this path: performance beyond overall accuracy, any bias or limitations you found, and an honest recommendation on where a human should review its output.',
      'ဤ Path တွင် သင်တည်ဆောက်ခဲ့သော Model တစ်ခုအတွက် Model Evaluation Report တိုတောင်းတစ်ခု ရေးပါ — Overall Accuracy ကျော်လွန်သော Performance, တွေ့ရှိထားသော Bias (သို့) ကန့်သတ်ချက်များနှင့် Output ကို လူ့ Review လုပ်သင့်သည့်နေရာအတွက် ရိုးသားသော အကြံပြုချက်တစ်ခု။',
    ]),
    verify: t([
      'Could you explain why a model with 95% overall accuracy might still be unsafe to deploy without further checking?',
      'Overall Accuracy 95% ရှိသော Model တစ်ခုသည် ထပ်မံ စစ်ဆေးခြင်းမရှိဘဲ Deploy လုပ်ရန် ဘေးကင်းမှု မရှိနိုင်ကြောင်းကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check performance across subgroups when the data allows — overall accuracy can hide unequal performance.', 'Data ခွင့်ပြုသည့်အခါတိုင်း Subgroup များတစ်လျှောက် Performance ကို အမြဲ စစ်ဆေးပါ — Overall Accuracy သည် မညီမျှသော Performance ကို ဖျောက်ထားနိုင်သည်။'],
      ['Be honest about a model\'s limitations in documentation — this protects both users and your team.', 'Documentation တွင် Model တစ်ခု၏ ကန့်သတ်ချက်များအကြောင်း ရိုးသားပါ — ၎င်းသည် User များနှင့် သင့်အဖွဲ့ နှစ်ခုစလုံးကို ကာကွယ်ပေးသည်။'],
    ]),
    commonMistakes: list([
      ['Reporting only overall accuracy without checking for uneven performance across groups.', 'အုပ်စုများတစ်လျှောက် မညီမျှသော Performance ကို မစစ်ဆေးဘဲ Overall Accuracy တစ်ခုတည်း တင်ပြခြင်း။'],
      ['Deploying a model without documenting its known limitations.', 'Model တစ်ခု၏ သိထားသော ကန့်သတ်ချက်များကို မှတ်တမ်းမတင်ဘဲ Deploy လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-advanced-3', [
      ['Evaluate a model beyond overall accuracy', 'Model တစ်ခုကို Overall Accuracy ကျော်လွန်၍ Evaluate လုပ်ပါ'],
      ['Write a known-limitations section for a model', 'Model တစ်ခုအတွက် Known-limitations အပိုင်းတစ်ခု ရေးပါ'],
      ['Write a full model evaluation report', 'Model Evaluation Report အပြည့်အစုံ ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Evaluate a model beyond simple accuracy', 'Model တစ်ခုကို ရိုးရှင်းသော Accuracy ကျော်လွန်၍ Evaluate လုပ်နိုင်သည်'],
      ['Check for uneven performance across groups', 'အုပ်စုများတစ်လျှောက် မညီမျှသော Performance ကို စစ်ဆေးနိုင်သည်'],
      ['Document a model\'s limitations honestly', 'Model တစ်ခု၏ ကန့်သတ်ချက်များကို ရိုးသားစွာ မှတ်တမ်းတင်နိုင်သည်'],
    ]),
    resources: [],
  },

  'ai-engineer-advanced-4': {
    whatItIs: t([
      'Deploying AI models to production means making a trained model available as a real, reliable, secure service other systems and users can actually call.',
      'AI Model များကို Production သို့ Deploy လုပ်ခြင်းဆိုသည်မှာ Train ပြီးသား Model တစ်ခုကို System တခြားများနှင့် User များ တကယ်ခေါ်နိုင်မည့် တကယ့်၊ ယုံကြည်စိတ်ချရ၍ လုံခြုံသော Service တစ်ခုအဖြစ် ရရှိနိုင်စေခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A model that only runs in a notebook has no real users — deployment is the step that turns AI research into an actual product feature.',
      'Notebook တစ်ခုတွင်သာ Run သော Model တစ်ခုတွင် User အစစ် မရှိပါ — Deployment သည် AI Research ကို Product Feature အစစ်တစ်ခုအဖြစ် ပြောင်းလဲပေးသော အဆင့် ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'The final step of every real-world AI project — deploying a model behind an API, monitoring it, and keeping it running reliably.',
      'တကယ့် AI Project တိုင်း၏ နောက်ဆုံးအဆင့် — Model တစ်ခုကို API နောက်ကွယ်တွင် Deploy လုပ်ခြင်း၊ Monitor လုပ်ခြင်းနှင့် ယုံကြည်စိတ်ချစွာ ဆက်လက် Run နေအောင် ထားခြင်း။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic drawing on model APIs, MLOps, and application-building from throughout this path.',
      'ဤသည်မှာ ဤ Path တစ်လျှောက် Model API, MLOps, Application-building ကို အသုံးချသော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Serving a model behind an API endpoint', 'API Endpoint နောက်ကွယ်တွင် Model တစ်ခု Serve လုပ်ခြင်း'],
      ['Scaling model inference for multiple users', 'User များစွာအတွက် Model Inference Scale လုပ်ခြင်း'],
      ['Securing a deployed model endpoint', 'Deploy လုပ်ထားသော Model Endpoint လုံခြုံအောင်ပြုလုပ်ခြင်း'],
      ['Cost management for AI inference', 'AI Inference အတွက် ကုန်ကျစရိတ် စီမံခန့်ခွဲမှု'],
    ]),
    steps: [
      step(
        ['Serve a model behind a secure API', 'လုံခြုံသော API နောက်ကွယ်တွင် Model တစ်ခု Serve လုပ်ခြင်း'],
        [
          ['Wrapping model inference in a server route with authentication', 'Model Inference ကို Authentication ပါသော Server Route တွင် ထုပ်ပိုးခြင်း'],
        ],
        [
          ['Take an AI-powered feature you built earlier and add proper authentication to its API route', 'ယခင်က တည်ဆောက်ခဲ့သော AI-powered Feature တစ်ခုကို ယူပြီး ၎င်း၏ API Route သို့ သင့်လျော်သော Authentication ထည့်ပါ'],
        ],
      ),
      step(
        ['Plan for scale and cost', 'Scale နှင့် ကုန်ကျစရိတ်အတွက် စီစဉ်ခြင်း'],
        [
          ['Model inference can be expensive at scale — caching repeated requests can help', 'Model Inference သည် Scale တွင် ကုန်ကျစရိတ်များနိုင်သည် — ထပ်ခါထပ်ခါ Request များ Cache လုပ်ခြင်းက ကူညီနိုင်သည်'],
        ],
        [
          ['Identify one way you could reduce inference cost for your deployed feature (e.g. caching common requests) and explain the trade-off', 'Deploy လုပ်ထားသော Feature အတွက် Inference Cost လျှော့ချနိုင်သောနည်းလမ်းတစ်ခု (ဥပမာ အများသုံး Request များ Cache လုပ်ခြင်း) ဖော်ထုတ်ပြီး Trade-off ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Take your AI-powered feature from earlier in this path and make it production-ready: authenticated API route, basic monitoring, a documented cost/scaling consideration, and a documented model limitation.',
      'ဤ Path ရှေ့ပိုင်းမှ သင့် AI-powered Feature ကို ယူပြီး Production-ready ဖြစ်အောင် ပြုလုပ်ပါ — Authenticated API Route, အခြေခံ Monitoring, မှတ်တမ်းတင်ထားသော Cost/Scaling စဉ်းစားချက်နှင့် မှတ်တမ်းတင်ထားသော Model ကန့်သတ်ချက်။',
    ]),
    verify: t([
      'Could you explain, end to end, everything that happens from a user submitting input to your app to receiving an AI-generated response — including what happens if something fails?',
      'User တစ်ဦး သင့် App ထဲသို့ Input တင်သွင်းသည်မှ AI-generated Response ရရှိသည်အထိ ဖြစ်ပျက်သမျှကို — တစ်ခုခု Fail ဖြစ်လျှင် ဘာဖြစ်သည်ပါ အပါအဝင် — End to End ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Cache repeated identical requests where it makes sense — it saves real cost at scale.', 'အဓိပ္ပာယ်ရှိသည့်နေရာတွင် ထပ်ခါထပ်ခါ တူညီသော Request များကို Cache လုပ်ပါ — ၎င်းက Scale တွင် တကယ့် ကုန်ကျစရိတ် သက်သာစေသည်။'],
      ['Deploy incrementally — get one feature fully production-ready before adding the next.', 'တဖြည်းဖြည်း Deploy လုပ်ပါ — နောက်တစ်ခု မထည့်မီ Feature တစ်ခုကို အပြည့်အစုံ Production-ready ဖြစ်အောင် လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Deploying a model endpoint with no authentication.', 'Authentication မပါဘဲ Model Endpoint တစ်ခု Deploy လုပ်ခြင်း။'],
      ['Not considering inference cost until the bill is already a surprise.', 'Bill က အံ့သြစရာဖြစ်မှသာ Inference Cost ကို စဉ်းစားခြင်း။'],
    ]),
    practiceTasks: tasks('ai-engineer-advanced-4', [
      ['Add authentication to a model API route', 'Model API Route သို့ Authentication ထည့်ပါ'],
      ['Identify a cost-reduction strategy for inference', 'Inference အတွက် Cost-reduction Strategy တစ်ခု ဖော်ထုတ်ပါ'],
      ['Make an AI feature fully production-ready', 'AI Feature တစ်ခုကို အပြည့်အစုံ Production-ready ဖြစ်အောင် လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Serve a model behind a secure, authenticated API', 'လုံခြုံ၍ Authenticated ဖြစ်သော API နောက်ကွယ်တွင် Model တစ်ခု Serve လုပ်နိုင်သည်'],
      ['Plan for inference cost and scale', 'Inference Cost နှင့် Scale အတွက် စီစဉ်နိုင်သည်'],
      ['Ship a fully production-ready AI feature', 'AI Feature တစ်ခုကို အပြည့်အစုံ Production-ready ဖြစ်အောင် ထုတ်ဖော်နိုင်သည်'],
    ]),
    resources: [],
  },
}
