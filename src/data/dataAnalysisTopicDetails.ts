import type { TopicDetail } from '../types/roadmap.ts'
import { t, list, step, tasks } from './topicDetailHelpers.ts'

/**
 * Full deep-dive learning guides for every Data Analysis topic (see
 * roadmaps.ts's Phase 6 wiring). resources are intentionally empty on every
 * topic here — see cloudDevOpsTopicDetails.ts for the "never fabricate a
 * resource" policy this follows.
 */
export const dataAnalysisTopicDetails: Record<string, TopicDetail> = {
  'data-analysis-beginner-1': {
    whatItIs: t([
      'Spreadsheet fundamentals cover using tools like Excel or Google Sheets to organize, calculate, and manipulate data in rows and columns.',
      'Spreadsheet အခြေခံသည် Data ကို Row နှင့် Column များတွင် စုစည်းခြင်း၊ တွက်ချက်ခြင်းနှင့် ပြောင်းလဲခြင်းအတွက် Excel (သို့) Google Sheets ကဲ့သို့ Tool များ အသုံးပြုခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Spreadsheets are the most universally accessible data tool — nearly every organization uses them, and they are often the fastest way to explore a small-to-medium dataset.',
      'Spreadsheet များသည် အကျယ်ပြန့်ဆုံး ဝင်ရောက်နိုင်သော Data Tool ဖြစ်သည် — အဖွဲ့အစည်းနီးပါးအားလုံးက သုံးကြပြီး Dataset အသေးစား-အလတ်စားအတွက် အမြန်ဆုံးနည်းလမ်း ဖြစ်လေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'Used across virtually every industry and role that touches data, from finance to marketing to operations.',
      'Finance မှ Marketing, Operations အထိ Data နှင့်ထိတွေ့သော လုပ်ငန်းနှင့် အခန်းကဏ္ဍ နီးပါးအားလုံးတွင် သုံးသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Cells, rows, columns, and sheets', 'Cells, Rows, Columns, Sheets'],
      ['Basic formulas (SUM, AVERAGE, COUNT)', 'အခြေခံ Formula များ (SUM, AVERAGE, COUNT)'],
      ['Sorting and filtering data', 'Data များ Sort နှင့် Filter လုပ်ခြင်း'],
      ['Simple charts', 'ရိုးရှင်းသော Chart များ'],
    ]),
    steps: [
      step(
        ['Use core formulas to summarize data', 'Data ကို အနှစ်ချုပ်ရန် အဓိက Formula များ သုံးခြင်း'],
        [
          ['SUM, AVERAGE, COUNT, and MIN/MAX', 'SUM, AVERAGE, COUNT, MIN/MAX'],
          ['Referencing cells and ranges correctly', 'Cell များနှင့် Range များကို မှန်ကန်စွာ Reference လုပ်ခြင်း'],
        ],
        [
          ['Given a sample sales dataset, calculate the total, average, and count of orders', 'နမူနာ Sales Dataset ပေးလိုက်လျှင် Order များ၏ စုစုပေါင်း၊ ပျမ်းမျှနှင့် အရေအတွက် တွက်ချက်ပါ'],
        ],
      ),
      step(
        ['Sort, filter, and visualize data', 'Data များ Sort, Filter နှင့် Visualize လုပ်ခြင်း'],
        [
          ['Sorting data by one or more columns', 'Column တစ်ခု (သို့) ထို့ထက်ပိုသော Column များဖြင့် Data Sort လုပ်ခြင်း'],
          ['Filtering to show only relevant rows', 'သက်ဆိုင်ရာ Row များကိုသာ ပြရန် Filter လုပ်ခြင်း'],
        ],
        [
          ['Filter the sample dataset to a specific category and build a simple bar chart of the results', 'Sample Dataset ကို Category သီးခြားတစ်ခုသို့ Filter လုပ်ပြီး ရလဒ်များ၏ Bar Chart ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take a raw sales or survey dataset and produce a one-page summary sheet: key totals/averages, a filtered view of the most important rows, and one chart.',
      'Raw Sales (သို့) Survey Dataset တစ်ခုကို ယူပြီး တစ်မျက်နှာ Summary Sheet ထုတ်လုပ်ပါ — Key Total/Average များ၊ အရေးအကြီးဆုံး Row များ၏ Filter View တစ်ခုနှင့် Chart တစ်ခု။',
    ]),
    verify: t([
      'Given a new raw dataset, could you quickly produce basic summary statistics and a simple chart without looking anything up?',
      'Dataset အသစ်တစ်ခု ပေးလိုက်လျှင် တစ်ခုမှ ရှာမကြည့်ဘဲ Summary Statistics အခြေခံနှင့် Chart ရိုးရှင်းတစ်ခုကို လျင်မြန်စွာ ထုတ်လုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Learn a handful of formulas deeply rather than memorizing dozens shallowly.', 'ပေါ့ပေါ့ပါးပါး ဆယ်နှင့်ချီပြီး အလွတ်ကျက်မှတ်မည့်အစား Formula အနည်းငယ်ကို နက်နက်ရှိုင်းရှိုင်း လေ့လာပါ။'],
      ['Always check that a formula\'s cell references are exactly what you intended.', 'Formula ၏ Cell Reference များသည် သင်ရည်ရွယ်သည့်အတိုင်း အတိအကျ ဟုတ်ကြောင်း အမြဲစစ်ဆေးပါ။'],
    ]),
    commonMistakes: list([
      ['Referencing the wrong range in a formula, causing silently wrong results.', 'Formula တစ်ခုတွင် Range မှားစွာ Reference လုပ်ခြင်းက တိတ်တဆိတ် မှားယွင်းသော ရလဒ်များ ဖြစ်စေသည်။'],
      ['Sorting one column without selecting the whole table, scrambling the data.', 'Table တစ်ခုလုံးကို မရွေးဘဲ Column တစ်ခုတည်း Sort လုပ်ခြင်းက Data ကို ရောနှောစေသည်။'],
    ]),
    practiceTasks: tasks('data-analysis-beginner-1', [
      ['Calculate totals, averages, and counts from a dataset', 'Dataset မှ Total, Average, Count များ တွက်ချက်ပါ'],
      ['Sort and filter a dataset', 'Dataset တစ်ခုကို Sort နှင့် Filter လုပ်ပါ'],
      ['Build a simple chart from filtered data', 'Filter လုပ်ထားသော Data မှ Chart ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ'],
      ['Produce a one-page summary sheet', 'တစ်မျက်နှာ Summary Sheet ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Use core spreadsheet formulas correctly', 'အဓိက Spreadsheet Formula များကို မှန်ကန်စွာ သုံးနိုင်သည်'],
      ['Sort and filter data reliably', 'Data ကို ယုံကြည်စိတ်ချစွာ Sort နှင့် Filter လုပ်နိုင်သည်'],
      ['Build a simple chart', 'Chart ရိုးရှင်းတစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Produce a basic data summary', 'အခြေခံ Data Summary တစ်ခု ထုတ်လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-beginner-2': {
    whatItIs: t([
      'Basic statistics concepts are the core ideas — mean, median, distribution, correlation — used to describe and understand what data actually shows.',
      'အခြေခံ စာရင်းအင်း သဘောတရားများသည် Data တကယ်ဘာပြသည်ကို ဖော်ပြပြီး နားလည်ရန် သုံးသော အဓိက Idea များ ဖြစ်သည် — Mean, Median, Distribution, Correlation။',
    ]),
    whyItMatters: t([
      'Without basic statistics, it is easy to misread data — mistaking an outlier for a trend, or correlation for causation — leading to wrong conclusions.',
      'အခြေခံ စာရင်းအင်း မရှိပါက Data ကို မှားဖတ်ရန် လွယ်ကူသည် — Outlier တစ်ခုကို Trend ဟု မှားယူခြင်း (သို့) Correlation ကို Causation ဟု မှားယူခြင်း — မှားယွင်းသော နိဂုံးချုပ်များ ဖြစ်စေသည်။',
    ]),
    whereUsed: t([
      'Underlies every kind of data analysis, from a simple spreadsheet summary to advanced machine learning.',
      'Spreadsheet Summary ရိုးရှင်းတစ်ခုမှ အဆင့်မြင့် Machine Learning အထိ Data Analysis အမျိုးအစားတိုင်း၏ အောက်ခြေတွင် ရှိနေသည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Mean, median, and mode', 'Mean, Median, Mode'],
      ['Range and standard deviation (intuitively)', 'Range နှင့် Standard Deviation (အလိုအလျောက် နားလည်မှု)'],
      ['Distributions and outliers', 'Distribution များနှင့် Outlier များ'],
      ['Correlation vs causation', 'Correlation နှင့် Causation'],
    ]),
    steps: [
      step(
        ['Calculate and interpret central tendency', 'Central Tendency ကို တွက်ချက်ပြီး အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Mean vs median, and why an outlier skews the mean more than the median', 'Mean နှင့် Median ကွာခြားချက်နှင့် Outlier တစ်ခုသည် Median ထက် Mean ကို ဘာကြောင့် ပို skew ဖြစ်စေသနည်း'],
        ],
        [
          ['Given a dataset with one extreme outlier, calculate both the mean and median and explain the difference', 'အလွန်အကျွံ Outlier တစ်ခုပါသော Dataset ပေးလိုက်လျှင် Mean နှင့် Median နှစ်ခုစလုံး တွက်ချက်ပြီး ကွာခြားချက်ကို ရှင်းပြပါ'],
        ],
      ),
      step(
        ['Recognize distributions, outliers, and false correlations', 'Distribution, Outlier, မှားယွင်းသော Correlation များ ဖော်ထုတ်ခြင်း'],
        [
          ['What an outlier is and how to decide whether to investigate or exclude it', 'Outlier ဆိုတာဘာလဲနှင့် စုံစမ်းရမလား ဖယ်ထုတ်ရမလား မည်သို့ ဆုံးဖြတ်ရမည်ကို'],
          ['Why two variables moving together does not prove one causes the other', 'Variable နှစ်ခု အတူတကွ ရွေ့လျားနေခြင်းသည် တစ်ခုက အခြားတစ်ခုကို ဖြစ်စေသည်ဟု ဘာကြောင့် သက်သေမပြသနည်း'],
        ],
        [
          ['Identify an outlier in a sample dataset and decide, with reasoning, whether to keep or exclude it', 'Sample Dataset တွင် Outlier တစ်ခု ဖော်ထုတ်ပြီး အကြောင်းပြချက်ဖြင့် ထားမည် (သို့) ဖယ်ထုတ်မည်ကို ဆုံးဖြတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Analyze a small dataset and write a short summary using correct statistical terms: mean vs median, any outliers found and how you handled them, and whether an apparent correlation might not imply causation.',
      'Dataset သေးငယ်တစ်ခု ခွဲခြမ်းစိတ်ဖြာပြီး မှန်ကန်သော စာရင်းအင်း အသုံးအနှုန်းများ သုံး၍ အနှစ်ချုပ် တိုတောင်း ရေးပါ — Mean vs Median, တွေ့ရှိထားသော Outlier များနှင့် မည်သို့ ကိုင်တွယ်ခဲ့သလဲ၊ ပေါ်လွင်နေသော Correlation တစ်ခုသည် Causation ဆိုလိုချင်ချင်း မဆိုလိုနိုင်ခြင်း။',
    ]),
    verify: t([
      'If someone shows you a chart where two lines move together, could you explain why that alone does not prove one causes the other?',
      'တစ်စုံတစ်ဦးက Line နှစ်ခု အတူတကွ ရွေ့လျားနေသော Chart တစ်ခု ပြလျှင် ၎င်းတစ်ခုတည်းသည် တစ်ခုက အခြားတစ်ခုကို ဖြစ်စေသည်ဟု ဘာကြောင့် သက်သေမပြသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check the median alongside the mean when a dataset might have outliers.', 'Dataset တစ်ခုတွင် Outlier ရှိနိုင်သည့်အခါ Mean နှင့်အတူ Median ကိုပါ အမြဲစစ်ဆေးပါ။'],
      ['Ask "could something else explain this?" before assuming causation from correlation.', 'Correlation မှ Causation ဟု မယူဆမီ "တခြားတစ်ခုခုက ဒါကို ရှင်းပြနိုင်လား?" ဟု မေးပါ။'],
    ]),
    commonMistakes: list([
      ['Reporting only the mean when the data has significant outliers.', 'Data တွင် သိသာသော Outlier ရှိသည့်အခါ Mean ကိုသာ တင်ပြခြင်း။'],
      ['Assuming correlation proves causation without further investigation.', 'ထပ်မံ စုံစမ်းစစ်ဆေးမှု မရှိဘဲ Correlation က Causation ကို သက်သေပြသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-beginner-2', [
      ['Calculate mean and median for a dataset with an outlier', 'Outlier ပါသော Dataset တစ်ခုအတွက် Mean နှင့် Median တွက်ချက်ပါ'],
      ['Identify and reason about an outlier', 'Outlier တစ်ခု ဖော်ထုတ်ပြီး အကြောင်းပြချက် တွေးခေါ်ပါ'],
      ['Write a short analysis avoiding a correlation/causation mistake', 'Correlation/Causation အမှားကို ရှောင်ရှားထားသော အနှစ်ချုပ် တိုတောင်းတစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Calculate and interpret mean, median, and mode', 'Mean, Median, Mode တွက်ချက်ပြီး အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Identify outliers and reason about handling them', 'Outlier များ ဖော်ထုတ်ပြီး ကိုင်တွယ်ရန် အကြောင်းပြချက် တွေးခေါ်နိုင်သည်'],
      ['Distinguish correlation from causation', 'Correlation ကို Causation နှင့် ခွဲခြားနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-beginner-3': {
    whatItIs: t([
      'Data cleaning is the process of fixing or removing incorrect, incomplete, duplicate, or inconsistent data before analyzing it.',
      'Data Cleaning ဆိုသည်မှာ ခွဲခြမ်းစိတ်ဖြာခြင်းမပြုမီ မှားယွင်း၊ မပြည့်စုံ၊ Duplicate ဖြစ်၊ တသမတ်မတည်သော Data ကို ပြင်ဆင် (သို့) ဖယ်ရှားသော လုပ်ငန်းစဉ် ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Real-world data is almost never clean — analyzing dirty data produces confidently wrong conclusions, which is often worse than having no analysis at all.',
      'လက်တွေ့ဘဝ Data သည် သန့်ရှင်းသည် ဆိုသလို ရှားရှားပါးပါးသာ ဖြစ်သည် — မသန့်ရှင်းသော Data ကို ခွဲခြမ်းစိတ်ဖြာခြင်းသည် ယုံကြည်စိတ်ချစွာ မှားယွင်းသော နိဂုံးချုပ်များ ဖြစ်စေပြီး Analysis လုံးဝမရှိခြင်းထက် မကြာခဏ ပိုဆိုးတတ်သည်။',
    ]),
    whereUsed: t([
      'A required first step before nearly any real analysis — analysts routinely spend more time cleaning data than analyzing it.',
      'တကယ့် Analysis မည်သည်၏ ရှေ့ဦးစွာ အဆင့် လိုအပ်သည် — Analyst များသည် ၎င်းကို ခွဲခြမ်းစိတ်ဖြာခြင်းထက် Data သန့်ရှင်းခြင်းတွင် အချိန်ပိုကုန်ပုံမှန် ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Identifying missing values', 'ပျောက်ဆုံးနေသော Value များ ဖော်ထုတ်ခြင်း'],
      ['Removing or fixing duplicates', 'Duplicate များ ဖယ်ရှားခြင်း (သို့) ပြင်ဆင်ခြင်း'],
      ['Standardizing inconsistent formats (dates, text case)', 'တသမတ်မတည်သော Format များ (Dates, Text Case) စံသတ်မှတ်ခြင်း'],
      ['Deciding how to handle missing data', 'ပျောက်ဆုံးနေသော Data ကို မည်သို့ ကိုင်တွယ်မည်ကို ဆုံးဖြတ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Find and handle missing and duplicate data', 'ပျောက်ဆုံးနှင့် Duplicate ဖြစ်နေသော Data ရှာဖွေပြီး ကိုင်တွယ်ခြင်း'],
        [
          ['Spotting blank cells and duplicate rows', 'အလွတ် Cell များနှင့် Duplicate Row များ ရှာဖွေခြင်း'],
          ['Deciding whether to fill, remove, or flag missing values', 'ပျောက်ဆုံးနေသော Value များကို ဖြည့်မည်၊ ဖယ်ရှားမည်၊ Flag လုပ်မည်ကို ဆုံးဖြတ်ခြင်း'],
        ],
        [
          ['Take a messy sample dataset and remove duplicate rows, documenting how many were removed', 'ရှုပ်ထွေးသော Sample Dataset တစ်ခု ယူပြီး Duplicate Row များ ဖယ်ရှားပါ — ဖယ်ရှားခဲ့သည့်အရေအတွက်ကို မှတ်တမ်းတင်ပါ'],
        ],
      ),
      step(
        ['Standardize inconsistent formats', 'တသမတ်မတည်သော Format များ စံသတ်မှတ်ခြင်း'],
        [
          ['Fixing inconsistent date formats, text casing, and category names', 'တသမတ်မတည်သော Date Format, Text Casing, Category နာမည်များ ပြင်ဆင်ခြင်း'],
        ],
        [
          ['Standardize a column with inconsistent category names (e.g. "USA", "U.S.A.", "United States") into one format', 'တသမတ်မတည်သော Category နာမည်များပါသော Column တစ်ခု (ဥပမာ "USA", "U.S.A.", "United States") ကို Format တစ်ခုတည်းအဖြစ် စံသတ်မှတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take a genuinely messy sample dataset (missing values, duplicates, inconsistent formatting) and produce a cleaned version, with a short log documenting every change you made and why.',
      'တကယ့် ရှုပ်ထွေးသော Sample Dataset တစ်ခု (ပျောက်ဆုံးနေသော Value, Duplicate, တသမတ်မတည်သော Format) ကို ယူပြီး Cleaned Version တစ်ခု ထုတ်လုပ်ပါ — ပြုလုပ်ခဲ့သော ပြောင်းလဲမှုတိုင်းနှင့် ဘာကြောင့်ဆိုသည်ကို မှတ်တမ်းတင်ထားသော Log တိုတောင်းနှင့်အတူ။',
    ]),
    verify: t([
      'Given a messy dataset, could you produce a clean version and clearly explain every decision you made along the way?',
      'ရှုပ်ထွေးသော Dataset တစ်ခု ပေးလိုက်လျှင် Clean Version တစ်ခု ထုတ်လုပ်ပြီး လမ်းကြောင်းတစ်လျှောက် ပြုလုပ်ခဲ့သော ဆုံးဖြတ်ချက်တိုင်းကို ရှင်းလင်းစွာ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always keep the original raw data untouched — clean into a new copy, never overwrite the source.', 'မူလ Raw Data ကို ဘယ်တော့မှ မထိမိအောင် ထားပါ — Copy အသစ်ထဲသို့ Clean လုပ်ပါ၊ Source ကို ဘယ်တော့မှ Overwrite မလုပ်ပါနှင့်။'],
      ['Document every cleaning decision — future you (or a colleague) will need to know why.', 'Cleaning ဆုံးဖြတ်ချက်တိုင်းကို မှတ်တမ်းတင်ပါ — အနာဂတ်သင် (သို့) လုပ်ဖော်ကိုင်ဖက်သည် ဘာကြောင့်ဆိုသည်ကို သိလိုလိမ့်မည်။'],
    ]),
    commonMistakes: list([
      ['Overwriting the original raw data instead of keeping an untouched copy.', 'မထိခိုက်သေးသော Copy တစ်ခု ထားမည့်အစား မူလ Raw Data ကို Overwrite လုပ်ခြင်း။'],
      ['Removing missing data without considering why it might be missing.', 'ဘာကြောင့် ပျောက်ဆုံးနေနိုင်သည်ကို မစဉ်းစားဘဲ ပျောက်ဆုံးနေသော Data ကို ဖယ်ရှားခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-beginner-3', [
      ['Find and remove duplicate rows', 'Duplicate Row များ ရှာဖွေပြီး ဖယ်ရှားပါ'],
      ['Standardize an inconsistent column', 'တသမတ်မတည်သော Column တစ်ခု စံသတ်မှတ်ပါ'],
      ['Handle missing values with a documented decision', 'မှတ်တမ်းတင်ထားသော ဆုံးဖြတ်ချက်ဖြင့် ပျောက်ဆုံးနေသော Value များ ကိုင်တွယ်ပါ'],
      ['Produce a cleaned dataset with a change log', 'ပြောင်းလဲမှု Log ပါသော Cleaned Dataset တစ်ခု ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Identify missing values and duplicates', 'ပျောက်ဆုံးနေသော Value များနှင့် Duplicate များ ဖော်ထုတ်နိုင်သည်'],
      ['Standardize inconsistent data formats', 'တသမတ်မတည်သော Data Format များ စံသတ်မှတ်နိုင်သည်'],
      ['Make and document data cleaning decisions', 'Data Cleaning ဆုံးဖြတ်ချက်များ ပြုလုပ်ပြီး မှတ်တမ်းတင်နိုင်သည်'],
      ['Keep raw data separate from cleaned data', 'Raw Data ကို Cleaned Data နှင့် သီးခြားထားနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-beginner-4': {
    whatItIs: t([
      'SQL (Structured Query Language) is the standard language for asking questions of data stored in a database.',
      'SQL (Structured Query Language) သည် Database တွင် သိမ်းဆည်းထားသော Data ကို မေးခွန်းများ မေးရန် စံ ဘာသာစကား ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A huge amount of real-world data lives in databases, not spreadsheets — SQL is often the only practical way to access and analyze it at scale.',
      'လက်တွေ့ဘဝ Data အများအပြားသည် Spreadsheet များတွင်မဟုတ်ဘဲ Database များတွင် ရှိနေသည် — SQL သည် Scale တစ်ခုတွင် ၎င်းကို ဝင်ရောက်ပြီး ခွဲခြမ်းစိတ်ဖြာရန် လက်တွေ့ကျသော နည်းလမ်းတစ်ခုတည်း ဖြစ်လေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'Used by data analysts at nearly every company that stores data in a relational database — an extremely common, transferable skill.',
      'Relational Database တွင် Data သိမ်းဆည်းသော ကုမ္ပဏီနီးပါးအားလုံးရှိ Data Analyst များက သုံးကြသည် — အလွန်အသုံးများ၍ လွှဲပြောင်းနိုင်သော ကျွမ်းကျင်မှု ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['SELECT and WHERE', 'SELECT နှင့် WHERE'],
      ['Sorting and limiting results', 'ရလဒ်များ Sort နှင့် Limit လုပ်ခြင်း'],
      ['Aggregate functions (COUNT, SUM, AVG)', 'Aggregate Function များ (COUNT, SUM, AVG)'],
      ['GROUP BY', 'GROUP BY'],
    ]),
    steps: [
      step(
        ['Query and filter data', 'Data ကို Query လုပ်ပြီး Filter လုပ်ခြင်း'],
        [
          ['Selecting specific columns instead of everything', 'အားလုံးမဟုတ်ဘဲ Column သီးခြားများကို ရွေးချယ်ခြင်း'],
          ['Filtering rows with WHERE conditions', 'WHERE Condition များဖြင့် Row များ Filter လုပ်ခြင်း'],
        ],
        [
          ['Write a query that selects specific columns and filters rows matching a condition', 'Column သီးခြားများ ရွေးချယ်ပြီး Condition တစ်ခုနှင့် ကိုက်ညီသော Row များ Filter လုပ်သော Query တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Summarize data with aggregates and GROUP BY', 'Aggregate နှင့် GROUP BY ဖြင့် Data အနှစ်ချုပ်ခြင်း'],
        [
          ['COUNT, SUM, AVG for summarizing groups of rows', 'Row အုပ်စုများကို အနှစ်ချုပ်ရန် COUNT, SUM, AVG'],
          ['GROUP BY to summarize data per category', 'Category တစ်ခုစီအလိုက် Data အနှစ်ချုပ်ရန် GROUP BY'],
        ],
        [
          ['Write a query that shows the total sales per category using GROUP BY', 'GROUP BY သုံး၍ Category တစ်ခုစီအလိုက် Total Sales ပြသော Query တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Given a sample sales database, write a set of 5-8 queries answering real business questions (top products, sales by region, monthly trends) using WHERE, GROUP BY, and aggregate functions.',
      'Sample Sales Database ပေးလိုက်လျှင် WHERE, GROUP BY, Aggregate Function များ သုံး၍ တကယ့် Business မေးခွန်းများ (ထိပ်တန်း Product များ၊ Region အလိုက် Sales, လစဉ် Trend) ကို ဖြေဆိုသော Query ၅-၈ ခု ရေးပါ။',
    ]),
    verify: t([
      'Given a business question in plain English, could you translate it into a working SQL query without much hesitation?',
      'Business မေးခွန်းတစ်ခုကို ရိုးရှင်းသော English ဖြင့် ပေးလိုက်လျှင် ဆိုင်းငံ့မှု များစွာမရှိဘဲ အလုပ်လုပ်သော SQL Query တစ်ခုအဖြစ် ဘာသာပြန်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Write and test queries incrementally — SELECT a few columns first, then add WHERE, then GROUP BY.', 'Query များကို တဖြည်းဖြည်း ရေး၍ Test လုပ်ပါ — Column အနည်းငယ် SELECT အရင်လုပ်ပြီး WHERE, GROUP BY အဆင့်ဆင့် ထည့်ပါ။'],
      ['Always sanity-check a query\'s results against what you would expect from the raw data.', 'Query ရလဒ်များကို Raw Data မှ မျှော်လင့်ထားသည်နှင့် အမြဲ ယှဉ်စစ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Forgetting that GROUP BY requires every non-aggregated column to be in the GROUP BY clause.', 'GROUP BY သည် Aggregate မဟုတ်သော Column တိုင်း GROUP BY Clause ထဲတွင် ပါရှိရန် လိုအပ်ကြောင်း မေ့ခြင်း။'],
      ['Writing a query that technically runs but answers the wrong question.', 'Technically Run သော်လည်း မေးခွန်းမှားကို ဖြေသော Query တစ်ခု ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-beginner-4', [
      ['Write a filtered SELECT query', 'Filter လုပ်ထားသော SELECT Query တစ်ခု ရေးပါ'],
      ['Write a query using GROUP BY and an aggregate', 'GROUP BY နှင့် Aggregate သုံးထားသော Query တစ်ခု ရေးပါ'],
      ['Write 5-8 queries answering real business questions', 'တကယ့် Business မေးခွန်းများ ဖြေဆိုသော Query ၅-၈ ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Write SELECT queries with WHERE filters', 'WHERE Filter ပါသော SELECT Query များ ရေးနိုင်သည်'],
      ['Use aggregate functions correctly', 'Aggregate Function များကို မှန်ကန်စွာ သုံးနိုင်သည်'],
      ['Use GROUP BY to summarize by category', 'Category အလိုက် အနှစ်ချုပ်ရန် GROUP BY သုံးနိုင်သည်'],
      ['Translate a business question into a SQL query', 'Business မေးခွန်းတစ်ခုကို SQL Query အဖြစ် ဘာသာပြန်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-core-1': {
    whatItIs: t([
      'SQL for analysis goes beyond basic queries into more advanced techniques — joins, subqueries, and window functions — used to answer real analytical questions.',
      'Analysis အတွက် SQL သည် အခြေခံ Query များကို ကျော်လွန်၍ တကယ့် Analytical မေးခွန်းများ ဖြေဆိုရန် သုံးသော ပိုအဆင့်မြင့်နည်းပညာများ — Joins, Subqueries, Window Function များ — ထဲသို့ ဝင်ရောက်သည်။',
    ]),
    whyItMatters: t([
      'Real business questions almost always require combining data from multiple tables — mastering joins is what unlocks genuinely useful analysis.',
      'တကယ့် Business မေးခွန်းများသည် Table များစွာမှ Data ပေါင်းစပ်ရန် လိုအပ်လေ့ရှိသည် — Joins ကို ကျွမ်းကျင်စွာ ကိုင်တွယ်ခြင်းသည် တကယ့် အသုံးဝင်သော Analysis ကို ဖွင့်ပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Central to nearly every real data analysis job that involves a relational database with multiple related tables.',
      'ဆက်စပ် Table များစွာပါသော Relational Database တစ်ခုနှင့် သက်ဆိုင်သော တကယ့် Data Analysis အလုပ်နီးပါးအားလုံး၏ ကျောရိုး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Requires solid comfort with the basic SQL from the Beginner stage.',
      'Beginner အဆင့်မှ အခြေခံ SQL နှင့် ခိုင်မာသော ရင်းနှီးမှု လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['INNER JOIN and LEFT JOIN', 'INNER JOIN နှင့် LEFT JOIN'],
      ['Subqueries', 'Subqueries'],
      ['Window functions (basic introduction)', 'Window Function များ (အခြေခံ နိဒါန်း)'],
      ['CASE statements', 'CASE Statement များ'],
    ]),
    steps: [
      step(
        ['Combine tables with joins', 'Joins ဖြင့် Table များ ပေါင်းစပ်ခြင်း'],
        [
          ['INNER JOIN returns only matching rows; LEFT JOIN keeps all rows from the left table', 'INNER JOIN သည် ကိုက်ညီသော Row များကိုသာ ပြန်ပေးပြီး LEFT JOIN သည် ဘယ်ဘက် Table မှ Row အားလုံးကို ထိန်းသိမ်းသည်'],
        ],
        [
          ['Write a query that joins an orders table with a customers table to show customer names alongside their orders', 'Customer Names ကို ၎င်းတို့၏ Orders နှင့်အတူ ပြသရန် Orders Table ကို Customers Table နှင့် Join လုပ်သော Query တစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Use subqueries and CASE statements', 'Subqueries နှင့် CASE Statement များ သုံးခြင်း'],
        [
          ['A subquery is a query nested inside another query', 'Subquery ဆိုသည်မှာ Query တစ်ခုအတွင်း Nest ထည့်ထားသော Query တစ်ခု ဖြစ်သည်'],
          ['CASE statements to categorize data within a query', 'Query တစ်ခုအတွင်း Data ကို Category ခွဲရန် CASE Statement များ'],
        ],
        [
          ['Write a query using a CASE statement to categorize orders into "small", "medium", and "large" by value', 'Value အလိုက် Order များကို "small", "medium", "large" ခွဲရန် CASE Statement သုံးသော Query တစ်ခု ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Given a sample database with orders, customers, and products tables, write a set of analytical queries that require at least two joins, one subquery, and one CASE statement.',
      'Orders, Customers, Products Table များပါသော Sample Database ပေးလိုက်လျှင် Join အနည်းဆုံးနှစ်ခု၊ Subquery တစ်ခုနှင့် CASE Statement တစ်ခု လိုအပ်သော Analytical Query များ ရေးပါ။',
    ]),
    verify: t([
      'Given a question that needs data from three related tables, could you write a query that correctly combines them?',
      'ဆက်စပ် Table သုံးခုမှ Data လိုအပ်သော မေးခွန်းတစ်ခု ပေးလိုက်လျှင် ၎င်းတို့ကို မှန်ကန်စွာ ပေါင်းစပ်သော Query တစ်ခု ရေးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Build joins incrementally — test with two tables before adding a third.', 'Join များကို တဖြည်းဖြည်း တည်ဆောက်ပါ — Table တတိယတစ်ခု ထည့်မီ Table နှစ်ခုနှင့် Test လုပ်ပါ။'],
      ['Watch out for LEFT JOINs producing NULLs — decide deliberately how to handle them.', 'LEFT JOIN များက NULL များ ထုတ်လုပ်ခြင်းကို သတိထားပါ — ၎င်းတို့ကို မည်သို့ ကိုင်တွယ်မည်ကို ရည်ရွယ်ချက်ရှိစွာ ဆုံးဖြတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Using INNER JOIN when a LEFT JOIN was needed, silently dropping relevant rows.', 'LEFT JOIN လိုအပ်သည့်အချိန်တွင် INNER JOIN သုံးခြင်းက သက်ဆိုင်ရာ Row များကို တိတ်တဆိတ် ကျဆုံးစေသည်။'],
      ['Writing an overly complex query in one step instead of building it up incrementally.', 'တဖြည်းဖြည်း တည်ဆောက်မည့်အစား Step တစ်ခုတည်းတွင် ရှုပ်ထွေးလွန်းသော Query တစ်ခု ရေးခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-core-1', [
      ['Write a query joining two tables', 'Table နှစ်ခု Join လုပ်ထားသော Query တစ်ခု ရေးပါ'],
      ['Write a query using a subquery', 'Subquery သုံးထားသော Query တစ်ခု ရေးပါ'],
      ['Write a query using a CASE statement', 'CASE Statement သုံးထားသော Query တစ်ခု ရေးပါ'],
      ['Write an analytical query combining three tables', 'Table သုံးခု ပေါင်းစပ်ထားသော Analytical Query တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Use INNER JOIN and LEFT JOIN correctly', 'INNER JOIN နှင့် LEFT JOIN ကို မှန်ကန်စွာ သုံးနိုင်သည်'],
      ['Write basic subqueries', 'အခြေခံ Subquery များ ရေးနိုင်သည်'],
      ['Use CASE statements to categorize data', 'Data ကို Category ခွဲရန် CASE Statement များ သုံးနိုင်သည်'],
      ['Combine multiple tables to answer a real question', 'တကယ့် မေးခွန်းတစ်ခု ဖြေဆိုရန် Table များစွာ ပေါင်းစပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-core-2': {
    whatItIs: t([
      'Data visualization basics cover choosing and building the right chart type to communicate what data actually shows.',
      'Data Visualization အခြေခံသည် Data တကယ်ဘာပြသသည်ကို ဆက်သွယ်ရန် Chart အမျိုးအစား မှန်ကန်တစ်ခုကို ရွေးချယ်ပြီး တည်ဆောက်ခြင်းကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'A table of numbers is hard for most people to interpret quickly — a well-chosen chart makes a pattern or insight obvious at a glance.',
      'ကိန်းဂဏန်း Table တစ်ခုသည် လူအများစုအတွက် လျင်မြန်စွာ အဓိပ္ပာယ်ဖွင့်ရန် ခက်ခဲသည် — ရွေးချယ်ထားသော Chart ကောင်းတစ်ခုသည် Pattern (သို့) Insight တစ်ခုကို တစ်ချက်ကြည့်လိုက်သည်နှင့် ထင်ရှားစေသည်။',
    ]),
    whereUsed: t([
      'Essential in reports, dashboards, and presentations across every industry that uses data to inform decisions.',
      'ဆုံးဖြတ်ချက်များ ချရန် Data သုံးသော လုပ်ငန်း တိုင်းရှိ Report, Dashboard, Presentation များတွင် မရှိမဖြစ် လိုအပ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Choosing the right chart type (bar, line, pie, scatter)', 'Chart အမျိုးအစား မှန်ကန်တစ်ခု ရွေးချယ်ခြင်း (Bar, Line, Pie, Scatter)'],
      ['Labeling and titling charts clearly', 'Chart များကို ရှင်းလင်းစွာ Label နှင့် Title ပေးခြင်း'],
      ['Avoiding misleading visualizations', 'လှည့်ဖြားစေသော Visualization များ ရှောင်ရှားခြင်း'],
    ]),
    steps: [
      step(
        ['Match chart type to the question', 'Chart အမျိုးအစားကို မေးခွန်းနှင့် ကိုက်ညီအောင် ပြုလုပ်ခြင်း'],
        [
          ['Bar charts for comparing categories, line charts for trends over time', 'Category များ နှိုင်းယှဉ်ရန် Bar Chart, အချိန်နှင့်အမျှ Trend များအတွက် Line Chart'],
          ['Scatter plots for relationships between two numeric variables', 'Numeric Variable နှစ်ခုကြား ဆက်နွယ်မှုများအတွက် Scatter Plot'],
        ],
        [
          ['Given three different datasets, choose and justify the appropriate chart type for each', 'Dataset မတူညီသုံးခု ပေးလိုက်လျှင် တစ်ခုစီအတွက် သင့်လျော်သော Chart အမျိုးအစားကို ရွေးချယ်ပြီး အကြောင်းပြပါ'],
        ],
      ),
      step(
        ['Build clear, honest charts', 'ရှင်းလင်း၍ ရိုးသားသော Chart များ တည်ဆောက်ခြင်း'],
        [
          ['Always labeling axes and titling the chart clearly', 'Axis များကို Label ပေးပြီး Chart ကို ရှင်းလင်းစွာ Title ပေးခြင်း'],
          ['Avoiding truncated axes or misleading scales that exaggerate differences', 'ကွာခြားချက်များကို ချဲ့ကားပြသော Axis ဖြတ်တောက်ထားခြင်း (သို့) လှည့်ဖြားသော Scale များ ရှောင်ရှားခြင်း'],
        ],
        [
          ['Build a bar chart and a line chart from a real dataset, each with clear labels and titles', 'ရှင်းလင်းသော Label နှင့် Title များပါသော Bar Chart နှင့် Line Chart တစ်ခုစီကို Dataset အစစ်တစ်ခုမှ တည်ဆောက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Take a dataset with several different types of questions embedded in it (trends, comparisons, relationships) and build the appropriately-typed chart for each, all clearly labeled.',
      'ကွဲပြားသော မေးခွန်းအမျိုးအစားများ (Trends, Comparisons, Relationships) ပါဝင်သော Dataset တစ်ခုကို ယူပြီး တစ်ခုစီအတွက် သင့်လျော်သော Chart အမျိုးအစားကို ရှင်းလင်းစွာ Label ပေးထား၍ တည်ဆောက်ပါ။',
    ]),
    verify: t([
      'Given a dataset and a specific question, could you quickly decide which chart type would answer it best?',
      'Dataset တစ်ခုနှင့် မေးခွန်းသီးခြားတစ်ခု ပေးလိုက်လျှင် မည်သည့် Chart အမျိုးအစားက ၎င်းကို အကောင်းဆုံး ဖြေဆိုမည်ကို လျင်မြန်စွာ ဆုံးဖြတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always ask "what question is this chart answering?" before building it.', 'Chart တစ်ခု မတည်ဆောက်မီ "ဒီ Chart က ဘာမေးခွန်းကို ဖြေနေတာလဲ?" ဟု အမြဲ မေးပါ။'],
      ['Never truncate a bar chart\'s axis to start above zero — it visually exaggerates differences.', 'Bar Chart ၏ Axis ကို Zero အထက်တွင် စတင်အောင် ဘယ်တော့မှ ဖြတ်တောက်မထားပါနှင့် — ၎င်းသည် ကွာခြားချက်များကို အမြင်အာရုံအရ ချဲ့ကားပြသည်။'],
    ]),
    commonMistakes: list([
      ['Using a pie chart for data with too many categories to compare clearly.', 'ရှင်းလင်းစွာ နှိုင်းယှဉ်ရန် Category များပြားလွန်းသော Data အတွက် Pie Chart သုံးခြင်း။'],
      ['Building an unlabeled chart that requires the viewer to guess what it means.', 'ကြည့်ရှုသူအား ဆိုလိုသည်ကို ခန့်မှန်းစေသော Label မပါသော Chart တစ်ခု တည်ဆောက်ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-core-2', [
      ['Choose and justify a chart type for three different datasets', 'Dataset မတူညီသုံးခုအတွက် Chart အမျိုးအစား ရွေးချယ်ပြီး အကြောင်းပြပါ'],
      ['Build a clearly labeled bar chart', 'ရှင်းလင်းစွာ Label ပေးထားသော Bar Chart တစ်ခု တည်ဆောက်ပါ'],
      ['Build a clearly labeled line chart', 'ရှင်းလင်းစွာ Label ပေးထားသော Line Chart တစ်ခု တည်ဆောက်ပါ'],
    ]),
    completionChecklist: list([
      ['Choose the right chart type for a given question', 'ပေးထားသော မေးခွန်းအတွက် Chart အမျိုးအစား မှန်ကန်တစ်ခု ရွေးချယ်နိုင်သည်'],
      ['Label and title charts clearly', 'Chart များကို ရှင်းလင်းစွာ Label နှင့် Title ပေးနိုင်သည်'],
      ['Avoid common misleading visualization mistakes', 'အများသုံး လှည့်ဖြားစေသော Visualization အမှားများကို ရှောင်ရှားနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-core-3': {
    whatItIs: t([
      'Working with a BI (Business Intelligence) tool like Power BI or Tableau means connecting to data sources and building interactive reports and dashboards without writing custom code for the visuals.',
      'Power BI (သို့) Tableau ကဲ့သို့ BI (Business Intelligence) Tool တစ်ခုနှင့် အလုပ်လုပ်ခြင်းဆိုသည်မှာ Visual များအတွက် Custom Code မရေးဘဲ Data Source များသို့ ချိတ်ဆက်ပြီး Interactive Report နှင့် Dashboard များ တည်ဆောက်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'BI tools are how most non-technical stakeholders actually consume data insights — being able to build in one is a widely requested, practical analyst skill.',
      'BI Tool များသည် Technical မဟုတ်သော Stakeholder အများစု Data Insight များကို တကယ် သုံးဆောင်ပုံနည်းလမ်း ဖြစ်သည် — ၎င်းတွင် တည်ဆောက်နိုင်ခြင်းသည် ကျယ်ပြန့်စွာ တောင်းဆိုသော လက်တွေ့ကျသော Analyst ကျွမ်းကျင်မှု ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Standard in most companies\' analytics and business intelligence teams for reporting and dashboards.',
      'Report နှင့် Dashboard များအတွက် ကုမ္ပဏီအများစု၏ Analytics နှင့် Business Intelligence Team များတွင် စံ ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Connecting to a data source', 'Data Source တစ်ခုသို့ ချိတ်ဆက်ခြင်း'],
      ['Building visuals from fields', 'Field များမှ Visual များ တည်ဆောက်ခြင်း'],
      ['Filters and slicers', 'Filter များနှင့် Slicer များ'],
      ['Arranging visuals into a dashboard', 'Dashboard တစ်ခုအဖြစ် Visual များ စီစဉ်ခြင်း'],
    ]),
    steps: [
      step(
        ['Connect data and build your first visuals', 'Data ချိတ်ဆက်ပြီး ပထမဆုံး Visual များ တည်ဆောက်ခြင်း'],
        [
          ['Importing a spreadsheet or database as a data source', 'Spreadsheet (သို့) Database ကို Data Source တစ်ခုအဖြစ် Import လုပ်ခြင်း'],
          ['Dragging fields into a chart to build a first visual', 'ပထမဆုံး Visual တစ်ခု တည်ဆောက်ရန် Field များကို Chart ထဲသို့ Drag လုပ်ခြင်း'],
        ],
        [
          ['Connect your BI tool to a sample dataset and build two different visuals from it', 'သင့် BI Tool ကို Sample Dataset တစ်ခုသို့ ချိတ်ဆက်ပြီး ၎င်းမှ Visual မတူညီနှစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Add filters and assemble a dashboard', 'Filter များ ထည့်ပြီး Dashboard တစ်ခု စုစည်းခြင်း'],
        [
          ['Adding filters/slicers so viewers can explore the data themselves', 'ကြည့်ရှုသူများ ၎င်းတို့ကိုယ်တိုင် Data ကို လေ့လာနိုင်ရန် Filter/Slicer များ ထည့်ခြင်း'],
          ['Arranging multiple visuals into one coherent dashboard page', 'Visual များစွာကို ယုတ္တိရှိသော Dashboard စာမျက်နှာတစ်ခုအဖြစ် စီစဉ်ခြင်း'],
        ],
        [
          ['Add a filter to your visuals and arrange them into a single dashboard page', 'သင့် Visual များသို့ Filter တစ်ခု ထည့်ပြီး ၎င်းတို့ကို Dashboard စာမျက်နှာတစ်ခုအဖြစ် စီစဉ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Build a small interactive dashboard in your BI tool from a real dataset: at least three visuals, one filter/slicer, and a clear title explaining what the dashboard shows.',
      'Dataset အစစ်တစ်ခုမှ သင့် BI Tool တွင် Interactive Dashboard သေးငယ်တစ်ခု တည်ဆောက်ပါ — Visual အနည်းဆုံးသုံးခု၊ Filter/Slicer တစ်ခုနှင့် Dashboard ဘာပြသသည်ကို ရှင်းပြသော ရှင်းလင်းသော Title တစ်ခု။',
    ]),
    verify: t([
      'Could someone unfamiliar with your dashboard use its filters to answer their own question about the data?',
      'သင့် Dashboard နှင့် မရင်းနှီးသူတစ်ဦးသည် Data အကြောင်း ၎င်းတို့ကိုယ်ပိုင် မေးခွန်းကို ဖြေဆိုရန် ၎င်း၏ Filter များကို သုံးနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Start with one clear question the dashboard should answer, rather than adding every possible visual.', 'ဖြစ်နိုင်သမျှ Visual များ ထည့်မည့်အစား Dashboard ဖြေဆိုသင့်သော ရှင်းလင်းသော မေးခွန်းတစ်ခုနှင့် စတင်ပါ။'],
      ['Test your filters yourself to make sure they actually make the dashboard more useful, not just decorative.', 'သင့် Filter များသည် Decorative မဟုတ်ဘဲ Dashboard ကို တကယ် ပိုအသုံးဝင်စေကြောင်း သေချာစေရန် ကိုယ်တိုင် Test လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Cramming too many visuals onto one dashboard, making it overwhelming.', 'Dashboard တစ်ခုပေါ်တွင် Visual များစွာလွန်းအောင် ထည့်ခြင်းက လွှမ်းမိုးခံရသလို ခံစားစေသည်။'],
      ['Adding filters that do not correspond to any real question a viewer would ask.', 'ကြည့်ရှုသူ မေးမည့် တကယ့် မေးခွန်းနှင့် မကိုက်ညီသော Filter များ ထည့်ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-core-3', [
      ['Connect a BI tool to a dataset', 'BI Tool ကို Dataset တစ်ခုသို့ ချိတ်ဆက်ပါ'],
      ['Build three different visuals', 'Visual မတူညီသုံးခု တည်ဆောက်ပါ'],
      ['Add a filter or slicer', 'Filter (သို့) Slicer တစ်ခု ထည့်ပါ'],
      ['Assemble visuals into one dashboard page', 'Visual များကို Dashboard စာမျက်နှာတစ်ခုအဖြစ် စုစည်းပါ'],
    ]),
    completionChecklist: list([
      ['Connect a BI tool to a real data source', 'BI Tool ကို Data Source အစစ်တစ်ခုသို့ ချိတ်ဆက်နိုင်သည်'],
      ['Build multiple chart types as visuals', 'Chart အမျိုးအစားများစွာကို Visual များအဖြစ် တည်ဆောက်နိုင်သည်'],
      ['Add interactive filters/slicers', 'Interactive Filter/Slicer များ ထည့်နိုင်သည်'],
      ['Assemble a coherent dashboard', 'ယုတ္တိရှိသော Dashboard တစ်ခု စုစည်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-core-4': {
    whatItIs: t([
      'Python or R basics for data means using a programming language to load, manipulate, and analyze data — more powerful and repeatable than spreadsheets for larger or more complex work.',
      'Data အတွက် Python (သို့) R အခြေခံသည် Data ကို Load လုပ်ခြင်း၊ ပြောင်းလဲခြင်းနှင့် ခွဲခြမ်းစိတ်ဖြာခြင်းအတွက် Programming Language တစ်ခု သုံးခြင်း ဖြစ်သည် — ကြီးမား (သို့) ရှုပ်ထွေးသော အလုပ်များအတွက် Spreadsheet များထက် ပိုအားကောင်း၍ ထပ်ခါထပ်ခါ လုပ်နိုင်သည်။',
    ]),
    whyItMatters: t([
      'Spreadsheets do not scale well to large datasets or repeatable, automated analysis — Python/R let an analyst work with far more data and reproduce their analysis reliably.',
      'Spreadsheet များသည် Dataset ကြီးများ (သို့) ထပ်ခါထပ်ခါ လုပ်နိုင်သော Automated Analysis အတွက် ကောင်းစွာ Scale မတိုးချဲ့နိုင်ပါ — Python/R က Analyst တစ်ဦးအား Data ပိုများစွာဖြင့် အလုပ်လုပ်နိုင်ပြီး ၎င်း၏ Analysis ကို ယုံကြည်စိတ်ချစွာ ထပ်ခါထပ်ခါ ထုတ်လုပ်နိုင်စေသည်။',
    ]),
    whereUsed: t([
      'The standard tool for more advanced data analysis roles, especially anything involving larger datasets or statistical modeling.',
      'ပိုအဆင့်မြင့် Data Analysis အခန်းကဏ္ဍများ၊ အထူးသဖြင့် Dataset ကြီးများ (သို့) စာရင်းအင်းဆိုင်ရာ Model ပြုလုပ်ခြင်း ပါဝင်သည့် မည်သည့်အလုပ်အတွက်မဆို စံ Tool ဖြစ်သည်။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Loading data into a dataframe', 'Data ကို Dataframe ထဲသို့ Load လုပ်ခြင်း'],
      ['Selecting, filtering, and sorting a dataframe', 'Dataframe တစ်ခု ရွေးချယ်ခြင်း၊ Filter လုပ်ခြင်း၊ Sort လုပ်ခြင်း'],
      ['Basic aggregation (group by, summary statistics)', 'အခြေခံ Aggregation (Group By, Summary Statistics)'],
      ['Basic plotting', 'အခြေခံ Plotting'],
    ]),
    steps: [
      step(
        ['Load and explore a dataset', 'Dataset တစ်ခု Load လုပ်ပြီး လေ့လာစူးစမ်းခြင်း'],
        [
          ['Loading a CSV file into a dataframe', 'CSV File တစ်ခုကို Dataframe ထဲသို့ Load လုပ်ခြင်း'],
          ['Inspecting a dataframe\'s shape, columns, and first few rows', 'Dataframe ၏ Shape, Columns, ပထမ Row အနည်းငယ်ကို စစ်ဆေးခြင်း'],
        ],
        [
          ['Load a sample CSV dataset and print its shape, column names, and first five rows', 'Sample CSV Dataset တစ်ခု Load လုပ်ပြီး ၎င်း၏ Shape, Column Name များနှင့် ပထမ Row ငါးခုကို Print လုပ်ပါ'],
        ],
      ),
      step(
        ['Filter, group, and summarize data in code', 'Code တွင် Data ကို Filter, Group, Summary လုပ်ခြင်း'],
        [
          ['Filtering rows based on a condition', 'Condition တစ်ခုအပေါ် အခြေခံ၍ Row များ Filter လုပ်ခြင်း'],
          ['Grouping and aggregating, similar to SQL\'s GROUP BY', 'SQL ၏ GROUP BY နှင့် ဆင်တူသော Group နှင့် Aggregate လုပ်ခြင်း'],
        ],
        [
          ['Filter your dataset by a condition, group it, and calculate summary statistics per group', 'သင့် Dataset ကို Condition တစ်ခုဖြင့် Filter လုပ်ပြီး Group ချကာ Group တစ်ခုစီအလိုက် Summary Statistics တွက်ချက်ပါ'],
        ],
      ),
    ],
    build: t([
      'Load a real dataset in Python or R, clean it, filter and group it to answer 2-3 real questions, and produce one basic plot summarizing a finding.',
      'Python (သို့) R တွင် Dataset အစစ်တစ်ခု Load လုပ်ပါ၊ Clean လုပ်ပါ၊ တကယ့် မေးခွန်း ၂-၃ ခု ဖြေဆိုရန် Filter နှင့် Group လုပ်ပြီး တွေ့ရှိချက်တစ်ခုကို အနှစ်ချုပ်သော အခြေခံ Plot တစ်ခု ထုတ်လုပ်ပါ။',
    ]),
    verify: t([
      'Could you load a new CSV file and, using only code, produce a filtered, grouped summary of it without much hesitation?',
      'CSV File အသစ်တစ်ခု Load လုပ်ပြီး Code ကိုသာသုံး၍ ဆိုင်းငံ့မှု များစွာမရှိဘဲ Filter, Group လုပ်ထားသော Summary တစ်ခု ထုတ်လုပ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Inspect your data immediately after loading it — never assume it loaded correctly.', 'Load လုပ်ပြီးချင်း သင့် Data ကို ချက်ချင်း စစ်ဆေးပါ — မှန်ကန်စွာ Load ဖြစ်သည်ဟု ဘယ်တော့မှ မယူဆပါနှင့်။'],
      ['Write code in small, testable steps rather than one giant block.', 'Block ကြီးတစ်ခုတည်းမဟုတ်ဘဲ Test လုပ်နိုင်သော အဆင့်ငယ်များဖြင့် Code ရေးပါ။'],
    ]),
    commonMistakes: list([
      ['Not checking a dataframe\'s shape and columns before working with it, leading to confusing errors later.', 'အလုပ်မလုပ်မီ Dataframe ၏ Shape နှင့် Columns ကို မစစ်ဆေးခြင်းက နောက်ပိုင်း ရှုပ်ထွေးသော Error များ ဖြစ်စေသည်။'],
      ['Copy-pasting code without understanding what each line does.', 'Line တစ်ခုစီ ဘာလုပ်သည်ကို နားမလည်ဘဲ Code ကို Copy-paste လုပ်ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-core-4', [
      ['Load a CSV and inspect its structure', 'CSV တစ်ခု Load လုပ်ပြီး ၎င်း၏ ဖွဲ့စည်းပုံကို စစ်ဆေးပါ'],
      ['Filter a dataframe by a condition', 'Dataframe တစ်ခုကို Condition တစ်ခုဖြင့် Filter လုပ်ပါ'],
      ['Group and summarize data in code', 'Code တွင် Data ကို Group ချပြီး အနှစ်ချုပ်ပါ'],
      ['Produce a basic plot from the results', 'ရလဒ်များမှ အခြေခံ Plot တစ်ခု ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Load data into a dataframe', 'Data ကို Dataframe ထဲသို့ Load လုပ်နိုင်သည်'],
      ['Filter and sort a dataframe in code', 'Code တွင် Dataframe တစ်ခုကို Filter နှင့် Sort လုပ်နိုင်သည်'],
      ['Group and aggregate data programmatically', 'Data ကို Programmatically Group ချပြီး Aggregate လုပ်နိုင်သည်'],
      ['Produce a basic plot from code', 'Code မှ အခြေခံ Plot တစ်ခု ထုတ်လုပ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-intermediate-1': {
    whatItIs: t([
      'Exploratory data analysis (EDA) is systematically getting to know a new dataset — its shape, quality, and patterns — before jumping to conclusions.',
      'Exploratory Data Analysis (EDA) ဆိုသည်မှာ နိဂုံးချုပ်များသို့ မခုန်ဝင်မီ Dataset အသစ်တစ်ခု — ၎င်း၏ Shape, Quality, Pattern များ — ကို စနစ်တကျ ရင်းနှီးအောင် လုပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Skipping EDA and jumping straight to analysis often means missing data quality issues or obvious patterns that should shape the entire approach.',
      'EDA ကျော်ပြီး Analysis သို့ တိုက်ရိုက်ခုန်ဝင်ခြင်းသည် ချဉ်းကပ်နည်းတစ်ခုလုံးကို ပုံဖော်သင့်သော Data Quality ပြဿနာများ (သို့) ထင်ရှားသော Pattern များ ကျော်လွန်ခြင်းကို ဆိုလိုလေ့ရှိသည်။',
    ]),
    whereUsed: t([
      'The standard first step of any real, serious data analysis project.',
      'တကယ့် လေးနက်သော Data Analysis Project မည်သည်၏ ပထမဆုံး စံ အဆင့် ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Draws on data cleaning, statistics, and visualization skills from earlier stages.',
      'ယခင် အဆင့်များမှ Data Cleaning, Statistics, Visualization ကျွမ်းကျင်မှုများကို အသုံးချသည်။',
    ]),
    firstSteps: list([
      ['Checking shape, types, and missing values first', 'Shape, Types, ပျောက်ဆုံးနေသော Value များကို ဦးစွာ စစ်ဆေးခြင်း'],
      ['Summary statistics for every column', 'Column တိုင်းအတွက် Summary Statistics'],
      ['Visualizing distributions', 'Distribution များ Visualize လုပ်ခြင်း'],
      ['Forming initial questions/hypotheses from what you see', 'မြင်ရသည်များမှ ကနဦး မေးခွန်း/Hypothesis များ ဖွဲ့စည်းခြင်း'],
    ]),
    steps: [
      step(
        ['Get an overview before diving deep', 'နက်နက်ရှိုင်းရှိုင်း မဝင်မီ ခြုံငုံသုံးသပ်ချက် ရယူခြင်း'],
        [
          ['Checking the dataset\'s size, column types, and missing value counts first', 'Dataset ၏ အရွယ်အစား၊ Column Type များနှင့် ပျောက်ဆုံးနေသော Value အရေအတွက်ကို ဦးစွာ စစ်ဆေးခြင်း'],
        ],
        [
          ['Given a new dataset, produce a first-pass overview: shape, column types, and missing value counts per column', 'Dataset အသစ်တစ်ခု ပေးလိုက်လျှင် ပထမဆုံး Overview ထုတ်လုပ်ပါ — Shape, Column Types, Column တစ်ခုစီအလိုက် ပျောက်ဆုံးနေသော Value အရေအတွက်'],
        ],
      ),
      step(
        ['Explore distributions and form initial hypotheses', 'Distribution များ လေ့လာစူးစမ်းပြီး ကနဦး Hypothesis များ ဖွဲ့စည်းခြင်း'],
        [
          ['Visualizing the distribution of key numeric and categorical columns', 'အဓိက Numeric နှင့် Categorical Column များ၏ Distribution ကို Visualize လုပ်ခြင်း'],
          ['Noting anything surprising that suggests a question worth investigating further', 'ထပ်မံ စုံစမ်းစစ်ဆေးထိုက်သော မေးခွန်းတစ်ခုကို အကြံပြုသော အံ့သြဖွယ်အရာများကို မှတ်ချက်ယူခြင်း'],
        ],
        [
          ['Plot the distribution of two key columns and write down two questions worth investigating further', 'Column အဓိကနှစ်ခု၏ Distribution ကို Plot ဆွဲပြီး ထပ်မံ စုံစမ်းစစ်ဆေးထိုက်သော မေးခွန်း နှစ်ခု ရေးထားပါ'],
        ],
      ),
    ],
    build: t([
      'Perform a complete exploratory analysis on a new, unfamiliar dataset: overview stats, distributions of key columns, at least one interesting pattern found, and 2-3 hypotheses worth investigating further.',
      'ရင်းနှီးမှုမရှိသော Dataset အသစ်တစ်ခုပေါ်တွင် Exploratory Analysis အပြည့်အစုံ ပြုလုပ်ပါ — Overview Stats, အဓိက Column များ၏ Distribution, တွေ့ရှိထားသော စိတ်ဝင်စားဖွယ် Pattern အနည်းဆုံးတစ်ခုနှင့် ထပ်မံ စုံစမ်းစစ်ဆေးထိုက်သော Hypothesis ၂-၃ ခု။',
    ]),
    verify: t([
      'Given a completely new dataset you have never seen, could you produce a solid overview and identify at least one interesting pattern within 30 minutes?',
      'ဘယ်တော့မှ မမြင်ဖူးသေးသော Dataset အသစ်တစ်ခု ပေးလိုက်လျှင် မိနစ် ၃၀ အတွင်း ခိုင်မာသော Overview တစ်ခု ထုတ်လုပ်ပြီး စိတ်ဝင်စားဖွယ် Pattern အနည်းဆုံးတစ်ခု ဖော်ထုတ်နိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always check for missing values and data types before doing anything else with a new dataset.', 'Dataset အသစ်တစ်ခုနှင့် အခြားတစ်ခုခု မလုပ်မီ ပျောက်ဆုံးနေသော Value များနှင့် Data Type များကို အမြဲစစ်ဆေးပါ။'],
      ['Treat EDA findings as hypotheses to test further, not final conclusions.', 'EDA တွေ့ရှိချက်များကို Final နိဂုံးချုပ်များအစား ထပ်မံ Test လုပ်ရမည့် Hypothesis များအဖြစ် သဘောထားပါ။'],
    ]),
    commonMistakes: list([
      ['Skipping straight to modeling or conclusions without exploring the data first.', 'ရှေးဦးစွာ Data ကို မလေ့လာဘဲ Modeling (သို့) နိဂုံးချုပ်များသို့ တိုက်ရိုက်ခုန်ဝင်ခြင်း။'],
      ['Missing an obvious data quality issue that undermines the entire analysis.', 'Analysis တစ်ခုလုံးကို ထိခိုက်စေသော ထင်ရှားသော Data Quality ပြဿနာ လွတ်သွားခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-intermediate-1', [
      ['Produce a first-pass overview of a new dataset', 'Dataset အသစ်တစ်ခု၏ ပထမဆုံး Overview ထုတ်လုပ်ပါ'],
      ['Plot distributions of key columns', 'အဓိက Column များ၏ Distribution ကို Plot ဆွဲပါ'],
      ['Write down hypotheses worth investigating further', 'ထပ်မံ စုံစမ်းစစ်ဆေးထိုက်သော Hypothesis များ ရေးထားပါ'],
    ]),
    completionChecklist: list([
      ['Produce a first-pass overview of a new dataset', 'Dataset အသစ်တစ်ခု၏ ပထမဆုံး Overview ထုတ်လုပ်နိုင်သည်'],
      ['Visualize distributions of key variables', 'အဓိက Variable များ၏ Distribution ကို Visualize လုပ်နိုင်သည်'],
      ['Identify patterns worth further investigation', 'ထပ်မံ စုံစမ်းစစ်ဆေးထိုက်သော Pattern များ ဖော်ထုတ်နိုင်သည်'],
      ['Form testable hypotheses from initial exploration', 'ကနဦး လေ့လာစူးစမ်းမှုမှ Test လုပ်နိုင်သော Hypothesis များ ဖွဲ့စည်းနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-intermediate-2': {
    whatItIs: t([
      'Building dashboards at an intermediate level means designing a cohesive, well-organized set of visuals that answers a real stakeholder\'s ongoing questions, not just a one-off chart.',
      'အလယ်အလတ် အဆင့်တွင် Dashboard တည်ဆောက်ခြင်းဆိုသည်မှာ တစ်ကြိမ်တည်း Chart တစ်ခုမဟုတ်ဘဲ Stakeholder တစ်ဦး၏ ဆက်တိုက် မေးခွန်းများကို ဖြေဆိုသော ယုတ္တိရှိ၍ စနစ်တကျ စီစဉ်ထားသော Visual အစုအဝေး Design ဆွဲခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A good dashboard becomes a tool a team relies on regularly — building one well requires understanding not just charts, but who will use it and how.',
      'Dashboard ကောင်းတစ်ခုသည် အဖွဲ့တစ်ခု ပုံမှန် မှီခိုနေသော Tool တစ်ခု ဖြစ်လာသည် — ၎င်းကို ကောင်းစွာ တည်ဆောက်ခြင်းသည် Chart များကိုသာမက မည်သူက မည်သို့ သုံးမည်ကိုပါ နားလည်ရန် လိုအပ်သည်။',
    ]),
    whereUsed: t([
      'Used by teams across every department that needs ongoing visibility into changing data — sales, operations, marketing, product.',
      'ပြောင်းလဲနေသော Data ကို ဆက်တိုက် မြင်နိုင်ရန် လိုအပ်သော ဌာနတိုင်း — Sales, Operations, Marketing, Product — ၌ အဖွဲ့များက သုံးကြသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the basic BI tool skills from the Core stage.',
      'Core အဆင့်မှ အခြေခံ BI Tool ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Identifying who the dashboard is for and what they need to decide', 'Dashboard သည် မည်သူအတွက်နှင့် ၎င်းတို့ ဘာဆုံးဖြတ်ရန် လိုအပ်သည်ကို ဖော်ထုတ်ခြင်း'],
      ['Organizing visuals by priority (most important first)', 'Visual များကို ဦးစားပေးအလိုက် စီစဉ်ခြင်း (အရေးအကြီးဆုံးကို ဦးစွာ)'],
      ['Consistent formatting across a dashboard', 'Dashboard တစ်လျှောက် တသမတ်တည်း Format ချခြင်း'],
    ]),
    steps: [
      step(
        ['Design around a real stakeholder\'s needs', 'တကယ့် Stakeholder တစ်ဦး၏ လိုအပ်ချက်များပတ်လည် Design ဆွဲခြင်း'],
        [
          ['Interviewing (even briefly) who will use the dashboard and what decisions it should support', 'Dashboard ကို မည်သူ သုံးမည်နှင့် ၎င်းက မည်သည့် ဆုံးဖြတ်ချက်များကို ပံ့ပိုးသင့်သည်ကို (တိုတောင်းစွာပင်) Interview လုပ်ခြင်း'],
        ],
        [
          ['Write a short brief: who this dashboard is for and the three questions it must answer', 'ဤ Dashboard သည် မည်သူအတွက်၊ ဖြေဆိုရမည့် မေးခွန်းသုံးခု — Brief တိုတောင်းတစ်ခု ရေးပါ'],
        ],
      ),
      step(
        ['Build a well-organized, prioritized dashboard', 'စနစ်တကျ၍ ဦးစားပေးထားသော Dashboard တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Placing the most important visual where it is seen first', 'အရေးအကြီးဆုံး Visual ကို ဦးစွာမြင်ရသောနေရာတွင် ထားခြင်း'],
          ['Using consistent colors, fonts, and formatting throughout', 'တစ်လျှောက်လုံး တသမတ်တည်း Color, Font, Format သုံးခြင်း'],
        ],
        [
          ['Build the dashboard from your brief, with the most important visual prominently placed', 'သင့် Brief မှ Dashboard ကို တည်ဆောက်ပါ — အရေးအကြီးဆုံး Visual ကို ထင်ရှားစွာ ထားပြီး'],
        ],
      ),
    ],
    build: t([
      'Design and build a complete dashboard for a real (or realistic) stakeholder need: a written brief, three prioritized visuals, consistent formatting, and at least one filter.',
      'တကယ့် (သို့) လက်တွေ့ကျသော Stakeholder လိုအပ်ချက်တစ်ခုအတွက် Dashboard အပြည့်အစုံ Design ဆွဲပြီး တည်ဆောက်ပါ — ရေးသားထားသော Brief, ဦးစားပေးထားသော Visual သုံးခု၊ တသမတ်တည်း Format ချထားခြင်းနှင့် Filter အနည်းဆုံးတစ်ခု။',
    ]),
    verify: t([
      'Could the stakeholder you designed this for open your dashboard and answer their three key questions within a minute?',
      'ဒီ Dashboard ကို ရည်ရွယ်ထားသော Stakeholder သည် ၎င်းကို ဖွင့်ပြီး ၎င်းတို့၏ Key မေးခွန်းသုံးခုကို တစ်မိနစ်အတွင်း ဖြေဆိုနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Design for the specific decisions someone needs to make, not "all the data".', '"Data အားလုံး" မဟုတ်ဘဲ တစ်စုံတစ်ဦး ချရန်လိုအပ်သော သီးခြား ဆုံးဖြတ်ချက်များအတွက် Design ဆွဲပါ။'],
      ['Put the single most important number or chart in the top-left, where eyes land first.', 'အရေးအကြီးဆုံး ကိန်းဂဏန်း (သို့) Chart တစ်ခုတည်းကို မျက်လုံးများ ဦးစွာ ရောက်ရှိသော ဘယ်ဘက်အပေါ်ထောင့်တွင် ထားပါ။'],
    ]),
    commonMistakes: list([
      ['Building a dashboard for "everyone" instead of a specific stakeholder\'s specific needs.', '"လူတိုင်း" အတွက် Dashboard တစ်ခု တည်ဆောက်ခြင်းက Stakeholder သီးခြား၏ လိုအပ်ချက်သီးခြားများအစား ဖြစ်သည်။'],
      ['Inconsistent formatting across visuals, making the dashboard feel disjointed.', 'Visual များတစ်လျှောက် တသမတ်မတည်သော Format ချခြင်းက Dashboard ကို ကွဲကွာနေသလို ခံစားစေသည်။'],
    ]),
    practiceTasks: tasks('data-analysis-intermediate-2', [
      ['Write a brief identifying stakeholder and key questions', 'Stakeholder နှင့် Key မေးခွန်းများ ဖော်ထုတ်သော Brief တစ်ခု ရေးပါ'],
      ['Build three prioritized visuals', 'ဦးစားပေးထားသော Visual သုံးခု တည်ဆောက်ပါ'],
      ['Apply consistent formatting across the dashboard', 'Dashboard တစ်လျှောက် တသမတ်တည်း Format ချပါ'],
    ]),
    completionChecklist: list([
      ['Identify a dashboard\'s target stakeholder and key questions', 'Dashboard ၏ Target Stakeholder နှင့် Key မေးခွန်းများ ဖော်ထုတ်နိုင်သည်'],
      ['Prioritize visuals by importance', 'Visual များကို အရေးကြီးမှုအလိုက် ဦးစားပေးနိုင်သည်'],
      ['Apply consistent formatting', 'တသမတ်တည်း Format ချနိုင်သည်'],
      ['Build a dashboard that answers real questions quickly', 'တကယ့် မေးခွန်းများကို လျင်မြန်စွာ ဖြေဆိုသော Dashboard တစ်ခု တည်ဆောက်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-intermediate-3': {
    whatItIs: t([
      'Statistical analysis at this stage means applying tests and methods (like hypothesis testing) to determine whether a pattern in data is likely real or just random noise.',
      'ဤအဆင့်တွင် Statistical Analysis ဆိုသည်မှာ Data ရှိ Pattern တစ်ခုသည် တကယ့်ဖြစ်နိုင်ခြေရှိသလား (သို့) ကျပန်း Noise သာလား ဆုံးဖြတ်ရန် Test များနှင့် နည်းလမ်းများ (Hypothesis Testing ကဲ့သို့) အသုံးချခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'Not every difference in data is meaningful — statistical rigor helps distinguish a real effect from random chance before a team makes a decision based on it.',
      'Data ရှိ ကွာခြားချက်တိုင်းသည် အဓိပ္ပာယ်ရှိသည် မဟုတ်ပါ — Statistical Rigor က အဖွဲ့တစ်ဖွဲ့ ၎င်းအပေါ် အခြေခံ၍ ဆုံးဖြတ်ချက်မချမီ တကယ့် Effect တစ်ခုနှင့် ကျပန်း Chance တစ်ခုကို ခွဲခြားရန် ကူညီပေးသည်။',
    ]),
    whereUsed: t([
      'Used whenever a team needs confidence that an observed difference (e.g. between two groups) is real before acting on it.',
      'အဖွဲ့တစ်ဖွဲ့သည် တွေ့ရှိထားသော ကွာခြားချက် (ဥပမာ အုပ်စုနှစ်ခုကြား) တစ်ခုသည် ၎င်းအပေါ် အခြေခံ၍ လုပ်ဆောင်မီ တကယ့်ဖြစ်ကြောင်း ယုံကြည်စိတ်ချမှု လိုအပ်သည့်အခါတိုင်း သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Builds on the basic statistics concepts from the Beginner stage.',
      'Beginner အဆင့်မှ အခြေခံ စာရင်းအင်း သဘောတရားများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Hypothesis testing basics (null vs alternative hypothesis)', 'Hypothesis Testing အခြေခံ (Null Hypothesis နှင့် Alternative Hypothesis)'],
      ['p-values (intuitive understanding)', 'p-values (အလိုအလျောက် နားလည်မှု)'],
      ['Sample size and why it matters', 'Sample Size နှင့် ဘာကြောင့် အရေးကြီးသလဲ'],
      ['Common pitfalls (p-hacking, small samples)', 'အများသုံး ချို့ယွင်းချက်များ (p-hacking, Sample Size သေးငယ်ခြင်း)'],
    ]),
    steps: [
      step(
        ['Understand hypothesis testing at a conceptual level', 'Hypothesis Testing ကို Concept အဆင့်တွင် နားလည်ခြင်း'],
        [
          ['A null hypothesis assumes no real difference/effect exists', 'Null Hypothesis သည် တကယ့် ကွာခြားချက်/Effect မရှိဟု ယူဆသည်'],
          ['A p-value roughly indicates how surprising the observed result would be if the null hypothesis were true', 'p-value သည် Null Hypothesis မှန်ကန်ပါက တွေ့ရှိထားသော ရလဒ်သည် မည်မျှ အံ့သြဖွယ် ဖြစ်မည်ကို ခန့်မှန်းညွှန်ပြသည်'],
        ],
        [
          ['Given a sample A/B test result, write the null and alternative hypotheses in plain language', 'Sample A/B Test ရလဒ် ပေးလိုက်လျှင် Null နှင့် Alternative Hypothesis ကို ရိုးရှင်းသော ဘာသာစကားဖြင့် ရေးပါ'],
        ],
      ),
      step(
        ['Recognize common statistical pitfalls', 'အများသုံး Statistical ချို့ယွင်းချက်များ ဖော်ထုတ်ခြင်း'],
        [
          ['Why very small sample sizes make results unreliable', 'Sample Size အလွန်သေးငယ်ခြင်းက ရလဒ်များကို ဘာကြောင့် ယုံကြည်စိတ်ချရမှု နည်းစေသနည်း'],
          ['p-hacking: testing many things until something looks significant by chance', 'p-hacking — တစ်ခုခုသည် ကျပန်းဖြင့် အရေးပါသလို မြင်သည်အထိ အများအပြား Test လုပ်ခြင်း'],
        ],
        [
          ['Given a scenario with a very small sample size, explain why its result should be treated cautiously', 'Sample Size အလွန်သေးငယ်သော Scenario ပေးလိုက်လျှင် ၎င်း၏ ရလဒ်ကို ဘာကြောင့် သတိထားစွာ သဘောထားသင့်သည်ကို ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Given a realistic A/B test scenario (e.g. two versions of a webpage with conversion data), write the hypotheses, interpret whether the result appears statistically meaningful, and note any caveats about sample size.',
      'လက်တွေ့ကျသော A/B Test Scenario တစ်ခု (ဥပမာ Conversion Data ပါသော Webpage Version နှစ်ခု) ပေးလိုက်လျှင် Hypothesis များ ရေးပါ၊ ရလဒ်သည် Statistically အဓိပ္ပာယ်ရှိသလား အဓိပ္ပာယ်ဖွင့်ပါ၊ Sample Size နှင့် ပတ်သက်သော သတိပြုစရာများ မှတ်ချက်ပြုပါ။',
    ]),
    verify: t([
      'Could you explain, to someone without a statistics background, what a p-value roughly means without using jargon?',
      'Statistics Background မရှိသူတစ်ဦးအား p-value ဆိုသည်မှာ Jargon မသုံးဘဲ ခန့်မှန်း၍ ဘာဆိုလိုသည်ကို ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always consider sample size before trusting a statistical result.', 'Statistical ရလဒ်တစ်ခုကို မယုံမီ Sample Size ကို အမြဲစဉ်းစားပါ။'],
      ['Be skeptical of results that only appear significant after testing many different things.', 'ကွဲပြားသော အရာများစွာ Test လုပ်ပြီးမှသာ အရေးပါသလို ပေါ်လာသော ရလဒ်များကို သံသယဖြစ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Treating a statistically significant result as automatically practically important.', 'Statistically အရေးပါသော ရလဒ်တစ်ခုကို လက်တွေ့တွင် အလိုအလျောက် အရေးကြီးသည်ဟု ယူဆခြင်း။'],
      ['Drawing strong conclusions from a very small sample size.', 'Sample Size အလွန်သေးငယ်ခြင်းမှ ခိုင်မာသော နိဂုံးချုပ်များ ချမှတ်ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-intermediate-3', [
      ['Write null and alternative hypotheses for a scenario', 'Scenario တစ်ခုအတွက် Null နှင့် Alternative Hypothesis ရေးပါ'],
      ['Interpret whether a result seems statistically meaningful', 'ရလဒ်တစ်ခု Statistically အဓိပ္ပာယ်ရှိသလား အဓိပ္ပာယ်ဖွင့်ပါ'],
      ['Identify a small-sample-size caveat in a scenario', 'Scenario တစ်ခုတွင် Sample Size သေးငယ်ခြင်း သတိပြုစရာ ဖော်ထုတ်ပါ'],
    ]),
    completionChecklist: list([
      ['Write null and alternative hypotheses', 'Null နှင့် Alternative Hypothesis ရေးနိုင်သည်'],
      ['Explain p-values intuitively', 'p-values ကို ခန့်မှန်း၍ ရှင်းပြနိုင်သည်'],
      ['Recognize the impact of sample size', 'Sample Size ၏ သက်ရောက်မှုကို ဖော်ထုတ်နိုင်သည်'],
      ['Identify common statistical pitfalls', 'အများသုံး Statistical ချို့ယွင်းချက်များ ဖော်ထုတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-intermediate-4': {
    whatItIs: t([
      'Communicating insights clearly means presenting analysis findings in a way non-technical stakeholders can understand and act on.',
      'Insight များကို ရှင်းလင်းစွာ ဆက်သွယ်ခြင်းဆိုသည်မှာ Technical မဟုတ်သော Stakeholder များ နားလည်ပြီး လုပ်ဆောင်နိုင်သောပုံစံဖြင့် Analysis တွေ့ရှိချက်များကို တင်ပြခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'The most brilliant analysis has zero impact if the people who need to act on it cannot understand or trust it — communication is where analysis actually creates value.',
      'အသိပညာအရှိဆုံး Analysis တစ်ခုပင် ၎င်းအပေါ် လုပ်ဆောင်ရမည့် လူများ နားမလည် (သို့) မယုံကြည်နိုင်ပါက အကျိုးသက်ရောက်မှု Zero ဖြစ်သည် — ဆက်သွယ်မှုသည် Analysis တွေ့ရှိချက်များ တကယ် တန်ဖိုးဖန်တီးရာနေရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Every analyst-to-stakeholder interaction: reports, presentations, dashboard walkthroughs, and written summaries.',
      'Analyst-to-stakeholder ဆက်ဆံရေးတိုင်း — Report, Presentation, Dashboard Walkthrough, ရေးသားထားသော Summary များ။',
    ]),
    prerequisiteNote: null,
    firstSteps: list([
      ['Leading with the takeaway, not the methodology', 'Methodology မဟုတ်ဘဲ Takeaway ဖြင့် ဦးဆောင်ခြင်း'],
      ['Tailoring detail level to the audience', 'ပရိသတ်နှင့် ကိုက်ညီအောင် အသေးစိတ် အဆင့်ကို ချိန်ညှိခြင်း'],
      ['Using plain language instead of jargon', 'Jargon အစား ရိုးရှင်းသော ဘာသာစကား သုံးခြင်း'],
      ['Recommending a clear next action', 'ရှင်းလင်းသော နောက်လုပ်ဆောင်ချက်တစ်ခု အကြံပြုခြင်း'],
    ]),
    steps: [
      step(
        ['Lead with the takeaway', 'Takeaway ဖြင့် ဦးဆောင်ခြင်း'],
        [
          ['Stating the key finding in the first sentence, not the last', 'Key Finding ကို နောက်ဆုံးစာကြောင်းမဟုတ်ဘဲ ပထမဆုံးစာကြောင်းတွင် ဖော်ပြခြင်း'],
          ['Saving methodology details for those who ask, not leading with them', 'Methodology အသေးစိတ်များကို မေးသူများအတွက်သာ ချန်ထားပြီး ၎င်းတို့ဖြင့် မဦးဆောင်ခြင်း'],
        ],
        [
          ['Take an analysis you did earlier and rewrite its summary to lead with the key finding in the first sentence', 'သင် ယခင်လုပ်ခဲ့သော Analysis တစ်ခုကို ယူပြီး Key Finding ဖြင့် ပထမဆုံးစာကြောင်းတွင် ဦးဆောင်အောင် ၎င်း၏ Summary ကို ပြန်ရေးပါ'],
        ],
      ),
      step(
        ['Translate technical results into plain language', 'Technical ရလဒ်များကို ရိုးရှင်းသော ဘာသာစကားအဖြစ် ဘာသာပြန်ခြင်း'],
        [
          ['Replacing jargon with everyday language a non-analyst would understand', 'Analyst မဟုတ်သူ နားလည်နိုင်မည့် နေ့စဉ် ဘာသာစကားဖြင့် Jargon ကို အစားထိုးခြင်း'],
          ['Ending with a clear, specific recommended action', 'ရှင်းလင်း၍ တိကျသော အကြံပြု လုပ်ဆောင်ချက်တစ်ခုဖြင့် အဆုံးသတ်ခြင်း'],
        ],
        [
          ['Rewrite a technical statistical finding (e.g. from the previous topic) in plain language with a specific recommended action', 'Technical Statistical တွေ့ရှိချက်တစ်ခု (ဥပမာ ယခင် Topic မှ) ကို ရိုးရှင်းသော ဘာသာစကားဖြင့် တိကျသော အကြံပြု လုပ်ဆောင်ချက်တစ်ခုနှင့်အတူ ပြန်ရေးပါ'],
        ],
      ),
    ],
    build: t([
      'Take a full analysis you completed earlier in this path and produce a one-page executive summary: key takeaway first, plain language throughout, and a specific recommended next action.',
      'ဤ Path ရှေ့ပိုင်းတွင် သင် ပြီးမြောက်ခဲ့သော Analysis အပြည့်အစုံကို ယူပြီး တစ်မျက်နှာ Executive Summary ထုတ်လုပ်ပါ — Key Takeaway ဦးစွာ၊ တစ်လျှောက်လုံး ရိုးရှင်းသော ဘာသာစကားနှင့် တိကျသော အကြံပြု နောက်လုပ်ဆောင်ချက်တစ်ခု။',
    ]),
    verify: t([
      'Could a busy executive with 30 seconds read your summary and know exactly what you found and what to do about it?',
      'အလုပ်များသော Executive တစ်ဦးသည် စက္ကန့် ၃၀ ဖြင့် သင့် Summary ကို ဖတ်ပြီး သင်တွေ့ရှိသည်နှင့် ၎င်းအတွက် ဘာလုပ်ရမည်ကို အတိအကျ သိနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Write the takeaway sentence first, then build the rest of the report around it.', 'Takeaway စာကြောင်းကို ဦးစွာ ရေးပြီး Report ၏ ကျန်အပိုင်းကို ၎င်းပတ်လည် တည်ဆောက်ပါ။'],
      ['Have someone outside your field read your summary — if they are confused, simplify further.', 'သင့် Field ပြင်ပမှ တစ်စုံတစ်ဦးအား သင့် Summary ကို ဖတ်စေပါ — ရှုပ်ထွေးနေလျှင် ထပ်မံ ရိုးရှင်းအောင် လုပ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Leading a report with methodology details before stating what was found.', 'ဘာတွေ့ရှိသည်ကို မဖော်ပြမီ Methodology အသေးစိတ်များဖြင့် Report ကို ဦးဆောင်ခြင်း။'],
      ['Ending an analysis without a clear recommended action, leaving stakeholders unsure what to do.', 'ရှင်းလင်းသော အကြံပြု လုပ်ဆောင်ချက် မပါဘဲ Analysis တစ်ခုကို အဆုံးသတ်ခြင်းက Stakeholder များအား ဘာလုပ်ရမည် မသေချာဖြစ်စေသည်။'],
    ]),
    practiceTasks: tasks('data-analysis-intermediate-4', [
      ['Rewrite a summary to lead with the key finding', 'Key Finding ဖြင့် ဦးဆောင်အောင် Summary တစ်ခု ပြန်ရေးပါ'],
      ['Translate a technical finding into plain language', 'Technical တွေ့ရှိချက်တစ်ခုကို ရိုးရှင်းသော ဘာသာစကားအဖြစ် ဘာသာပြန်ပါ'],
      ['Produce a one-page executive summary with a recommended action', 'အကြံပြု လုပ်ဆောင်ချက်ပါသော တစ်မျက်နှာ Executive Summary ထုတ်လုပ်ပါ'],
    ]),
    completionChecklist: list([
      ['Lead a summary with the key takeaway', 'Key Takeaway ဖြင့် Summary တစ်ခုကို ဦးဆောင်နိုင်သည်'],
      ['Translate technical findings into plain language', 'Technical တွေ့ရှိချက်များကို ရိုးရှင်းသော ဘာသာစကားအဖြစ် ဘာသာပြန်နိုင်သည်'],
      ['Tailor detail level to the audience', 'ပရိသတ်နှင့် ကိုက်ညီအောင် အသေးစိတ် အဆင့်ကို ချိန်ညှိနိုင်သည်'],
      ['End with a specific recommended action', 'တိကျသော အကြံပြု လုပ်ဆောင်ချက်တစ်ခုဖြင့် အဆုံးသတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-advanced-1': {
    whatItIs: t([
      'Predictive analysis basics cover using historical data to make informed estimates about future outcomes, using simple statistical or machine learning models.',
      'Predictive Analysis အခြေခံသည် အနာဂတ် ရလဒ်များအကြောင်း အသိပညာရှိသော ခန့်မှန်းချက်များ ပြုလုပ်ရန် ရိုးရှင်းသော Statistical (သို့) Machine Learning Model များ သုံး၍ Historical Data ကို အသုံးချခြင်း ကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'Moving from "what happened" to "what is likely to happen next" is what turns data analysis into genuinely forward-looking business value.',
      '"ဘာဖြစ်ခဲ့သည်" မှ "နောက်ဘာဖြစ်နိုင်သည်" သို့ ရွှေ့ပြောင်းခြင်းသည် Data Analysis ကို တကယ့် အနာဂတ်ကို ရှုမြင်သော Business Value အဖြစ် ပြောင်းလဲပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Used in demand forecasting, churn prediction, risk scoring, and many other forward-looking business applications.',
      'Demand Forecasting, Churn Prediction, Risk Scoring နှင့် အနာဂတ်ကို ရှုမြင်သော Business Application များစွာတွင် သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'Requires the statistical analysis foundation from the Intermediate stage.',
      'Intermediate အဆင့်မှ Statistical Analysis အခြေခံ လိုအပ်သည်။',
    ]),
    firstSteps: list([
      ['The idea of training data vs. predicting on new data', 'Training Data နှင့် Data အသစ်ပေါ်တွင် ခန့်မှန်းခြင်း၏ အယူအဆ'],
      ['Simple linear regression', 'ရိုးရှင်းသော Linear Regression'],
      ['Evaluating a model\'s accuracy honestly', 'Model တစ်ခု၏ တိကျမှုကို ရိုးသားစွာ အကဲဖြတ်ခြင်း'],
      ['Overfitting (intuitive introduction)', 'Overfitting (အလိုအလျောက် နိဒါန်း)'],
    ]),
    steps: [
      step(
        ['Build a simple predictive model', 'ရိုးရှင်းသော Predictive Model တစ်ခု တည်ဆောက်ခြင်း'],
        [
          ['Linear regression predicts a numeric outcome from one or more inputs', 'Linear Regression သည် Input တစ်ခု (သို့) ထို့ထက်ပိုသောမှ Numeric ရလဒ်တစ်ခုကို ခန့်မှန်းသည်'],
          ['Splitting data into training and test sets', 'Data ကို Training နှင့် Test Set များအဖြစ် ခွဲခြင်း'],
        ],
        [
          ['Build a simple linear regression model to predict one variable from another using a sample dataset', 'Sample Dataset တစ်ခု သုံး၍ Variable တစ်ခုမှ အခြားတစ်ခုကို ခန့်မှန်းရန် ရိုးရှင်းသော Linear Regression Model တစ်ခု တည်ဆောက်ပါ'],
        ],
      ),
      step(
        ['Evaluate the model honestly', 'Model ကို ရိုးသားစွာ အကဲဖြတ်ခြင်း'],
        [
          ['Checking accuracy on data the model has not seen (the test set)', 'Model မမြင်ဖူးသေးသော Data (Test Set) ပေါ်တွင် တိကျမှုကို စစ်ဆေးခြင်း'],
          ['Recognizing overfitting: a model that memorizes training data but fails on new data', 'Overfitting ဖော်ထုတ်ခြင်း — Training Data ကို အလွတ်ကျက်မှတ်ပေမယ့် Data အသစ်ပေါ်တွင် Fail ဖြစ်သော Model တစ်ခု'],
        ],
        [
          ['Evaluate your model\'s accuracy on the test set and explain whether it seems to be overfitting', 'Test Set ပေါ်တွင် သင့် Model ၏ တိကျမှုကို အကဲဖြတ်ပြီး Overfitting ဖြစ်နေသလားဟု ရှင်းပြပါ'],
        ],
      ),
    ],
    build: t([
      'Build a simple predictive model on a real dataset (e.g. predicting house prices or sales from a few features), evaluate it honestly on held-out data, and write a short summary of its accuracy and limitations.',
      'Dataset အစစ်တစ်ခုပေါ်တွင် (ဥပမာ Feature အနည်းငယ်မှ House Price သို့ Sales ခန့်မှန်းခြင်း) Predictive Model ရိုးရှင်းတစ်ခု တည်ဆောက်ပါ၊ ခွဲထားသော Data ပေါ်တွင် ရိုးသားစွာ အကဲဖြတ်ပြီး ၎င်း၏ တိကျမှုနှင့် ကန့်သတ်ချက်များ အနှစ်ချုပ် တိုတောင်း ရေးပါ။',
    ]),
    verify: t([
      'Could you explain, without jargon, why a model that performs perfectly on training data might still be a bad model?',
      'Training Data ပေါ်တွင် အပြီးအစီးအောင်မြင်သော Model တစ်ခုသည် Model ညံ့ဖျင်းတစ်ခု ဖြစ်နိုင်သေးသည်ကို Jargon မသုံးဘဲ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Always evaluate a model on data it has not seen — training accuracy alone is meaningless.', 'Model တစ်ခုကို ၎င်း မမြင်ဖူးသေးသော Data ပေါ်တွင် အမြဲ အကဲဖြတ်ပါ — Training Accuracy တစ်ခုတည်းသည် အဓိပ္ပာယ်မရှိပါ။'],
      ['Start with the simplest possible model before reaching for something complex.', 'ရှုပ်ထွေးသော Model တစ်ခုကို မရှာဖွေမီ အလွယ်ကူဆုံး ဖြစ်နိုင်သော Model ဖြင့် စတင်ပါ။'],
    ]),
    commonMistakes: list([
      ['Evaluating a model only on the data it was trained on.', 'Model တစ်ခုကို ၎င်း Train ခံခဲ့ရသော Data ပေါ်တွင်သာ အကဲဖြတ်ခြင်း။'],
      ['Assuming a complex model is automatically better than a simple one.', 'ရှုပ်ထွေးသော Model တစ်ခုသည် ရိုးရှင်းသော Model တစ်ခုထက် အလိုအလျောက် ပိုကောင်းသည်ဟု ယူဆခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-advanced-1', [
      ['Split a dataset into training and test sets', 'Dataset တစ်ခုကို Training နှင့် Test Set များအဖြစ် ခွဲပါ'],
      ['Build a simple linear regression model', 'ရိုးရှင်းသော Linear Regression Model တစ်ခု တည်ဆောက်ပါ'],
      ['Evaluate the model on held-out data', 'ခွဲထားသော Data ပေါ်တွင် Model ကို အကဲဖြတ်ပါ'],
      ['Write a summary of the model\'s accuracy and limitations', 'Model ၏ တိကျမှုနှင့် ကန့်သတ်ချက်များ အနှစ်ချုပ် ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Split data into training and test sets', 'Data ကို Training နှင့် Test Set များအဖြစ် ခွဲနိုင်သည်'],
      ['Build a simple predictive model', 'Predictive Model ရိုးရှင်းတစ်ခု တည်ဆောက်နိုင်သည်'],
      ['Evaluate model accuracy honestly on new data', 'Data အသစ်ပေါ်တွင် Model Accuracy ကို ရိုးသားစွာ အကဲဖြတ်နိုင်သည်'],
      ['Recognize signs of overfitting', 'Overfitting ၏ လက္ခဏာများ ဖော်ထုတ်နိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-advanced-2': {
    whatItIs: t([
      'Large dataset handling covers techniques for working efficiently with data too big to comfortably fit in a spreadsheet or even simple in-memory tools.',
      'Large Dataset Handling သည် Spreadsheet တစ်ခု (သို့) ရိုးရှင်းသော In-memory Tool များတွင်ပင် အဆင်ပြေစွာ မကိုက်လောက်အောင် ကြီးမားသော Data ဖြင့် ထိရောက်စွာ အလုပ်လုပ်ရန် နည်းပညာများကို လွှမ်းခြုံသည်။',
    ]),
    whyItMatters: t([
      'As data grows, naive approaches (loading everything into memory at once) break down — knowing how to work efficiently at scale is what separates junior from senior analysts.',
      'Data ကြီးထွားလာသည်နှင့်အမျှ Naive ချဉ်းကပ်နည်းများ (အားလုံးကို Memory ထဲသို့ တစ်ပြိုင်နက် Load လုပ်ခြင်း) ပြိုကျလာသည် — Scale တွင် ထိရောက်စွာ အလုပ်လုပ်တတ်ခြင်းသည် Junior နှင့် Senior Analyst များကို ခွဲခြားပေးသောအရာ ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Relevant at companies with substantial data volumes — millions of rows or more — common at any established, data-mature organization.',
      'Data ပမာဏ များများ — Row သန်းချီများ — ရှိသော ကုမ္ပဏီများတွင် သက်ဆိုင်သည် — ထူထောင်ပြီးသား Data-mature အဖွဲ့အစည်း မည်သည့်တွင်မဆို အများသုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds on Python/R and SQL skills from earlier stages.',
      'ယခင် အဆင့်များမှ Python/R နှင့် SQL ကျွမ်းကျင်မှုများအပေါ် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Filtering and aggregating in the database instead of loading everything', 'အားလုံး Load မလုပ်ဘဲ Database တွင် Filter နှင့် Aggregate လုပ်ခြင်း'],
      ['Processing data in chunks', 'Data ကို Chunk များအဖြစ် Process လုပ်ခြင်း'],
      ['Choosing efficient data types', 'ထိရောက်သော Data Type များ ရွေးချယ်ခြင်း'],
      ['Sampling for exploration before running on the full dataset', 'Dataset အပြည့်အစုံ Run မီ လေ့လာစူးစမ်းရန် Sampling'],
    ]),
    steps: [
      step(
        ['Push work to the database instead of loading everything', 'အားလုံး Load မလုပ်ဘဲ Database သို့ အလုပ် တွန်းအားပေးခြင်း'],
        [
          ['Filtering and aggregating with SQL before pulling data into Python/R', 'Python/R ထဲသို့ Data မဆွဲယူမီ SQL ဖြင့် Filter နှင့် Aggregate လုပ်ခြင်း'],
          ['Why this is far more efficient than loading a huge raw table', '၎င်းသည် Raw Table ကြီးတစ်ခု Load လုပ်ခြင်းထက် ဘာကြောင့် ပိုထိရောက်သနည်း'],
        ],
        [
          ['Rewrite a Python/R analysis that loaded a full table to instead pre-aggregate with SQL first', 'Table အပြည့်အစုံ Load လုပ်ခဲ့သော Python/R Analysis တစ်ခုကို SQL ဖြင့် ဦးစွာ Pre-aggregate လုပ်ရန် ပြန်ရေးပါ'],
        ],
      ),
      step(
        ['Sample and process efficiently', 'ထိရောက်စွာ Sample နှင့် Process လုပ်ခြင်း'],
        [
          ['Using a representative sample to explore before running on the full dataset', 'Dataset အပြည့်အစုံ Run မီ Representative Sample သုံး၍ လေ့လာစူးစမ်းခြင်း'],
        ],
        [
          ['Take a 5% sample of a large dataset, explore it, and confirm your findings hold on the full dataset', 'Dataset ကြီးတစ်ခု၏ 5% Sample ယူပြီး လေ့လာစူးစမ်းကာ သင့်တွေ့ရှိချက်များ Dataset အပြည့်အစုံပေါ်တွင် ကိုက်ညီကြောင်း အတည်ပြုပါ'],
        ],
      ),
    ],
    build: t([
      'Given a large sample dataset, demonstrate an efficient workflow: pre-aggregate with SQL, explore a sample first, then validate findings against the full dataset, documenting the performance difference.',
      'Large Sample Dataset ပေးလိုက်လျှင် ထိရောက်သော Workflow တစ်ခု သရုပ်ပြပါ — SQL ဖြင့် Pre-aggregate လုပ်ပါ၊ Sample တစ်ခုကို ဦးစွာ လေ့လာစူးစမ်းပါ၊ ထို့နောက် တွေ့ရှိချက်များကို Dataset အပြည့်အစုံနှင့် ယှဉ်၍ အတည်ပြုပါ — Performance ကွာခြားချက်ကို မှတ်တမ်းတင်ထားပြီး။',
    ]),
    verify: t([
      'Given a dataset too large to comfortably load at once, could you describe a sensible strategy for analyzing it?',
      'တစ်ပြိုင်နက် Load လုပ်ရန် ကြီးလွန်းသော Dataset တစ်ခု ပေးလိုက်လျှင် ၎င်းကို ခွဲခြမ်းစိတ်ဖြာရန် ယုတ္တိရှိသော နည်းဗျူဟာတစ်ခု ဖော်ပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Filter and aggregate as early in the pipeline as possible — ideally in the database.', 'Pipeline ၏ အစောပိုင်းဆုံးတွင် Filter နှင့် Aggregate လုပ်ပါ — Database တွင် ဖြစ်ပါက အကောင်းဆုံးဖြစ်သည်။'],
      ['Always explore a sample first — it is much faster to iterate on ideas at small scale.', 'Sample တစ်ခုကို အမြဲ ဦးစွာ လေ့လာစူးစမ်းပါ — Scale သေးငယ်တွင် Idea များကို Iterate လုပ်ရန် ပိုမြန်သည်။'],
    ]),
    commonMistakes: list([
      ['Loading an entire massive table into memory when only a summary was needed.', 'Summary တစ်ခုသာ လိုအပ်သည့်အခါ Massive Table တစ်ခုလုံးကို Memory ထဲသို့ Load လုပ်ခြင်း။'],
      ['Skipping sampling and repeatedly running slow, expensive queries on the full dataset while exploring.', 'Sampling ကျော်ပြီး လေ့လာစူးစမ်းနေစဉ် Dataset အပြည့်အစုံပေါ်တွင် နှေး၍ ကုန်ကျစရိတ်များသော Query များ ထပ်ခါထပ်ခါ Run ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-advanced-2', [
      ['Pre-aggregate data with SQL before loading it', 'Data ကို Load မလုပ်မီ SQL ဖြင့် Pre-aggregate လုပ်ပါ'],
      ['Explore a sample before running on the full dataset', 'Dataset အပြည့်အစုံ Run မီ Sample တစ်ခုကို လေ့လာစူးစမ်းပါ'],
      ['Validate sample findings against the full dataset', 'Sample တွေ့ရှိချက်များကို Dataset အပြည့်အစုံနှင့် ယှဉ်၍ အတည်ပြုပါ'],
    ]),
    completionChecklist: list([
      ['Push filtering/aggregation to the database', 'Filter/Aggregate လုပ်ငန်းကို Database သို့ တွန်းအားပေးနိုင်သည်'],
      ['Use sampling to explore large data efficiently', 'Data ကြီးများကို ထိရောက်စွာ လေ့လာစူးစမ်းရန် Sampling သုံးနိုင်သည်'],
      ['Validate sample-based findings on full data', 'Sample-based တွေ့ရှိချက်များကို Data အပြည့်အစုံပေါ်တွင် အတည်ပြုနိုင်သည်'],
      ['Explain why naive full-load approaches break down at scale', 'Naive Full-load ချဉ်းကပ်နည်းများသည် Scale တွင် ဘာကြောင့် ပြိုကျသည်ကို ရှင်းပြနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-advanced-3': {
    whatItIs: t([
      'A/B testing is running a controlled experiment where two (or more) versions of something are shown to different users to measure which performs better.',
      'A/B Testing ဆိုသည်မှာ တစ်ခုခု၏ Version နှစ်ခု (သို့) ထို့ထက်ပိုသည်ကို မည်သည်ကပို ကောင်းသည်ကို တိုင်းတာရန် User မတူညီသည်များထံ ပြသသော ထိန်းချုပ်ထားသော စမ်းသပ်မှု ပြုလုပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A/B testing is how data-driven teams make confident product decisions instead of relying on opinion or guesswork about what will work better.',
      'A/B Testing သည် Data-driven Team များ ဘာက ပိုကောင်းမည်ဆိုသည်ကို Opinion (သို့) ခန့်မှန်းချက်အပေါ် မမှီခိုဘဲ ယုံကြည်စိတ်ချသော Product ဆုံးဖြတ်ချက်များ ချသောနည်းလမ်း ဖြစ်သည်။',
    ]),
    whereUsed: t([
      'Extremely common at product companies for testing UI changes, pricing, messaging, and features before a full rollout.',
      'Product Company များတွင် UI ပြောင်းလဲမှုများ၊ စျေးနှုန်း၊ Messaging, Feature များကို အပြည့်အစုံ Rollout မလုပ်မီ Test လုပ်ရန် အလွန်အများသုံး ဖြစ်သည်။',
    ]),
    prerequisiteNote: t([
      'Builds directly on the hypothesis testing concepts from the Intermediate stage.',
      'Intermediate အဆင့်မှ Hypothesis Testing Concept များအပေါ် တိုက်ရိုက် တည်ဆောက်ထားသည်။',
    ]),
    firstSteps: list([
      ['Control vs treatment groups', 'Control Group နှင့် Treatment Group'],
      ['Randomization and why it matters', 'Randomization နှင့် ဘာကြောင့် အရေးကြီးသလဲ'],
      ['Choosing a success metric before running the test', 'Test မ Run မီ Success Metric ရွေးချယ်ခြင်း'],
      ['Reading and interpreting A/B test results', 'A/B Test ရလဒ်များ ဖတ်ပြီး အဓိပ္ပာယ်ဖွင့်ခြင်း'],
    ]),
    steps: [
      step(
        ['Design a sound A/B test', 'ခိုင်မာသော A/B Test တစ်ခု Design ဆွဲခြင်း'],
        [
          ['Randomly assigning users to control and treatment groups', 'User များကို Control နှင့် Treatment Group များသို့ ကျပန်းသတ်မှတ်ခြင်း'],
          ['Choosing one clear success metric before the test starts, not after seeing results', 'Test မစတင်မီ ရလဒ်မမြင်ရသေးဘဲ Success Metric ရှင်းလင်းတစ်ခု ရွေးချယ်ခြင်း'],
        ],
        [
          ['Design an A/B test for a real change idea: define the control/treatment, the success metric, and how users would be assigned', 'ပြောင်းလဲမှု Idea အစစ်တစ်ခုအတွက် A/B Test တစ်ခု Design ဆွဲပါ — Control/Treatment, Success Metric, User များ မည်သို့ သတ်မှတ်မည်ကို သတ်မှတ်ပါ'],
        ],
      ),
      step(
        ['Interpret A/B test results correctly', 'A/B Test ရလဒ်များကို မှန်ကန်စွာ အဓိပ္ပာယ်ဖွင့်ခြင်း'],
        [
          ['Checking whether a difference is statistically significant, not just numerically different', 'ကွာခြားချက်တစ်ခုသည် ကိန်းဂဏန်းအရ ကွာခြားခြင်းသာမက Statistically Significant ဖြစ်မဖြစ် စစ်ဆေးခြင်း'],
          ['Considering practical significance alongside statistical significance', 'Statistical Significance နှင့်အတူ Practical Significance ကိုပါ စဉ်းစားခြင်း'],
        ],
        [
          ['Given a sample A/B test result, determine whether the difference is both statistically and practically significant', 'Sample A/B Test ရလဒ် ပေးလိုက်လျှင် ကွာခြားချက်သည် Statistically နှင့် Practically နှစ်ခုစလုံး Significant ဖြစ်မဖြစ် ဆုံးဖြတ်ပါ'],
        ],
      ),
    ],
    build: t([
      'Design a complete A/B test plan for a real product change idea (control/treatment definition, success metric, randomization approach), then interpret a realistic sample result and write a recommendation.',
      'Product ပြောင်းလဲမှု Idea အစစ်တစ်ခုအတွက် A/B Test Plan အပြည့်အစုံ Design ဆွဲပါ (Control/Treatment သတ်မှတ်ချက်၊ Success Metric, Randomization ချဉ်းကပ်နည်း) — ထို့နောက် လက်တွေ့ကျသော Sample ရလဒ်တစ်ခုကို အဓိပ္ပာယ်ဖွင့်ပြီး အကြံပြုချက်တစ်ခု ရေးပါ။',
    ]),
    verify: t([
      'Could you design an A/B test for a real idea and explain, before running it, exactly how you would decide success?',
      'Idea အစစ်တစ်ခုအတွက် A/B Test တစ်ခု Design ဆွဲပြီး Run မီ အောင်မြင်မှုကို မည်သို့ ဆုံးဖြတ်မည်ကို အတိအကျ ရှင်းပြနိုင်ပါသလား?',
    ]),
    tips: list([
      ['Decide your success metric before the test starts — choosing it afterward invites bias.', 'Test မစတင်မီ သင့် Success Metric ကို ဆုံးဖြတ်ပါ — ပြီးနောက်မှ ရွေးချယ်ခြင်းသည် Bias ကို ဖိတ်ခေါ်သည်။'],
      ['Consider both statistical and practical significance — a "significant" result might still be too small to matter.', 'Statistical နှင့် Practical Significance နှစ်ခုစလုံး စဉ်းစားပါ — "Significant" ရလဒ်တစ်ခုပင် အရေးကြီးဖို့ သေးလွန်းနေနိုင်သည်။'],
    ]),
    commonMistakes: list([
      ['Changing the success metric after seeing early results.', 'ကနဦး ရလဒ်များ မြင်ပြီးနောက် Success Metric ကို ပြောင်းလဲခြင်း။'],
      ['Stopping a test too early before it reaches a reliable sample size.', 'ယုံကြည်ရသော Sample Size မရောက်မီ Test တစ်ခုကို စောစော ရပ်တန့်ခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-advanced-3', [
      ['Design an A/B test with control, treatment, and metric', 'Control, Treatment, Metric ပါသော A/B Test တစ်ခု Design ဆွဲပါ'],
      ['Interpret a sample A/B test result', 'Sample A/B Test ရလဒ်တစ်ခုကို အဓိပ္ပာယ်ဖွင့်ပါ'],
      ['Write a recommendation based on the result', 'ရလဒ်အပေါ် အခြေခံ၍ အကြံပြုချက်တစ်ခု ရေးပါ'],
    ]),
    completionChecklist: list([
      ['Design a sound A/B test structure', 'ခိုင်မာသော A/B Test ဖွဲ့စည်းပုံ Design ဆွဲနိုင်သည်'],
      ['Choose a success metric before testing', 'Test မလုပ်မီ Success Metric ရွေးချယ်နိုင်သည်'],
      ['Interpret statistical and practical significance', 'Statistical နှင့် Practical Significance ကို အဓိပ္ပာယ်ဖွင့်နိုင်သည်'],
      ['Make a recommendation based on test results', 'Test ရလဒ်များအပေါ် အခြေခံ၍ အကြံပြုချက်တစ်ခု ပေးနိုင်သည်'],
    ]),
    resources: [],
  },

  'data-analysis-advanced-4': {
    whatItIs: t([
      'Data storytelling is combining analysis, visualization, and narrative to make findings memorable and persuasive, not just technically correct.',
      'Data Storytelling ဆိုသည်မှာ Technical အရ မှန်ကန်ခြင်းသာမက တွေ့ရှိချက်များကို မှတ်ဉာဏ်ကျန်စေပြီး ယုံကြည်လက်ခံစေရန် Analysis, Visualization, Narrative တို့ကို ပေါင်းစပ်ခြင်း ဖြစ်သည်။',
    ]),
    whyItMatters: t([
      'A dry list of statistics rarely drives action — a well-told data story with a clear narrative arc is far more likely to actually change minds and decisions.',
      'ခြောက်သွေ့သော စာရင်းအင်း စာရင်းတစ်ခုသည် လုပ်ဆောင်ချက်ကို ရှားရှားပါးပါးသာ တွန်းအားပေးသည် — ရှင်းလင်းသော Narrative Arc ပါသော ကောင်းစွာ ပြောပြထားသော Data Story တစ်ခုသည် စိတ်နှင့် ဆုံးဖြတ်ချက်များကို တကယ် ပြောင်းလဲစေနိုင်ခြေ ပိုများသည်။',
    ]),
    whereUsed: t([
      'Used in high-stakes presentations, executive reports, and any situation where analysis needs to persuade, not just inform.',
      'အရေးပါသော Presentation များ၊ Executive Report များနှင့် Analysis သည် သတင်းပေးရုံသာမက ယုံကြည်လက်ခံစေရန် လိုအပ်သော အခြေအနေမည်သည်တွင်မဆို သုံးသည်။',
    ]),
    prerequisiteNote: t([
      'This is a capstone topic combining the communication skills and visualization skills from earlier stages.',
      'ဤသည်မှာ ယခင် အဆင့်များမှ ဆက်သွယ်ရေး ကျွမ်းကျင်မှုများနှင့် Visualization ကျွမ်းကျင်မှုများကို ပေါင်းစပ်သော Capstone Topic တစ်ခု ဖြစ်သည်။',
    ]),
    firstSteps: list([
      ['Narrative structure (setup, tension, resolution)', 'Narrative ဖွဲ့စည်းပုံ (Setup, Tension, Resolution)'],
      ['Choosing the right visuals to support the story, not overwhelm it', 'ဇာတ်လမ်းကို ပံ့ပိုးရန် Visual မှန်ကန်တစ်ခု ရွေးချယ်ခြင်း — လွှမ်းမိုးမသွားစေဘဲ'],
      ['Building toward a clear conclusion/recommendation', 'ရှင်းလင်းသော နိဂုံးချုပ်/အကြံပြုချက်တစ်ခုသို့ တည်ဆောက်ခြင်း'],
    ]),
    steps: [
      step(
        ['Structure findings as a narrative', 'တွေ့ရှိချက်များကို Narrative အဖြစ် ဖွဲ့စည်းခြင်း'],
        [
          ['Setting up the problem/context before presenting data', 'Data မတင်ပြမီ ပြဿနာ/Context ကို Setup လုပ်ခြင်း'],
          ['Building tension by showing what was surprising or concerning in the data', 'Data တွင် အံ့သြဖွယ် (သို့) စိုးရိမ်ဖွယ် ဖြစ်ခဲ့သည်များကို ပြသ၍ Tension တည်ဆောက်ခြင်း'],
        ],
        [
          ['Take a past analysis and restructure its presentation as setup → tension → resolution', 'ယခင် Analysis တစ်ခုကို ယူပြီး Setup → Tension → Resolution အဖြစ် ၎င်း၏ Presentation ကို ပြန်ဖွဲ့စည်းပါ'],
        ],
      ),
      step(
        ['Choose visuals that support the story', 'ဇာတ်လမ်းကို ပံ့ပိုးသော Visual များ ရွေးချယ်ခြင်း'],
        [
          ['Each visual should serve the narrative, not just show off available data', 'Visual တစ်ခုစီသည် ရရှိနိုင်သော Data ကို ပြသရုံမက Narrative ကို ဆောင်ရွက်ပေးသင့်သည်'],
        ],
        [
          ['Select (or remove) visuals from a past report so that only ones supporting the narrative remain', 'Narrative ကို ပံ့ပိုးသည်များသာ ကျန်ရှိအောင် ယခင် Report တစ်ခုမှ Visual များကို ရွေးချယ် (သို့) ဖယ်ရှားပါ'],
        ],
      ),
    ],
    build: t([
      'Take a full analysis you completed earlier in this path and present it as a complete data story: context/setup, the surprising finding, supporting visuals chosen deliberately, and a clear recommendation to close.',
      'ဤ Path ရှေ့ပိုင်းတွင် သင် ပြီးမြောက်ခဲ့သော Analysis အပြည့်အစုံကို ယူပြီး ၎င်းကို Data Story အပြည့်အစုံအဖြစ် တင်ပြပါ — Context/Setup, အံ့သြဖွယ် တွေ့ရှိချက်, ရည်ရွယ်ချက်ရှိစွာ ရွေးချယ်ထားသော ပံ့ပိုးမှု Visual များနှင့် ပိတ်ဆို့ရန် ရှင်းလင်းသော အကြံပြုချက်တစ်ခု။',
    ]),
    verify: t([
      'Would a stakeholder remember the key point of your analysis a week later, or would it blur together with every other report they have seen?',
      'Stakeholder တစ်ဦးသည် တစ်ပတ်အကြာတွင် သင့် Analysis ၏ Key Point ကို မှတ်မိမည်လား၊ (သို့) ၎င်းတို့ မြင်ခဲ့ဖူးသော Report တိုင်းနှင့် ရောနှောသွားမည်လား?',
    ]),
    tips: list([
      ['Cut any visual that does not directly serve the story\'s point.', 'ဇာတ်လမ်း၏ အချက်ကို တိုက်ရိုက် မဆောင်ရွက်ပေးသော Visual မည်သည်ကိုမဆို ဖြတ်ပစ်ပါ။'],
      ['Practice telling the story out loud — if it does not make sense spoken, it likely will not on the page either.', 'ဇာတ်လမ်းကို အသံထွက် ပြောရန် လေ့ကျင့်ပါ — အသံထွက်ပြောရင် အဓိပ္ပာယ်မရှိလျှင် စာမျက်နှာပေါ်တွင်လည်း အဓိပ္ပာယ်ရှိလိမ့်မည် မဟုတ်ပါ။'],
    ]),
    commonMistakes: list([
      ['Including every chart produced during analysis instead of only the ones that serve the story.', 'ဇာတ်လမ်းကို ဆောင်ရွက်ပေးသည်များသာမဟုတ်ဘဲ Analysis အတွင်း ထုတ်လုပ်ခဲ့သမျှ Chart တိုင်း ထည့်သွင်းခြင်း။'],
      ['Presenting findings as a flat list of facts with no narrative structure or clear conclusion.', 'Narrative ဖွဲ့စည်းပုံ (သို့) ရှင်းလင်းသော နိဂုံးချုပ်မရှိဘဲ တွေ့ရှိချက်များကို ဖြားချက်များ၏ ပြားချပ် စာရင်းအဖြစ် တင်ပြခြင်း။'],
    ]),
    practiceTasks: tasks('data-analysis-advanced-4', [
      ['Restructure a past analysis into setup/tension/resolution', 'ယခင် Analysis တစ်ခုကို Setup/Tension/Resolution အဖြစ် ပြန်ဖွဲ့စည်းပါ'],
      ['Select only visuals that support the narrative', 'Narrative ကို ပံ့ပိုးသော Visual များကိုသာ ရွေးချယ်ပါ'],
      ['Present a complete data story with a clear recommendation', 'ရှင်းလင်းသော အကြံပြုချက်ပါသော Data Story အပြည့်အစုံ တင်ပြပါ'],
    ]),
    completionChecklist: list([
      ['Structure a presentation with a narrative arc', 'Narrative Arc ပါသော Presentation တစ်ခု ဖွဲ့စည်းနိုင်သည်'],
      ['Choose visuals deliberately to support the story', 'ဇာတ်လမ်းကို ပံ့ပိုးရန် Visual များကို ရည်ရွယ်ချက်ရှိစွာ ရွေးချယ်နိုင်သည်'],
      ['Build toward a clear, memorable conclusion', 'ရှင်းလင်း၍ မှတ်ဉာဏ်ကျန်သော နိဂုံးချုပ်တစ်ခုသို့ တည်ဆောက်နိုင်သည်'],
      ['Present a complete, persuasive data story', 'ပြီးပြည့်စုံ၍ ယုံကြည်လက်ခံဖွယ် Data Story တစ်ခု တင်ပြနိုင်သည်'],
    ]),
    resources: [],
  },
}
