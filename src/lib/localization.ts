interface PageText {
  title: string
  description: string
}

export interface Translations {
  appName: string
  tagline: string
  nav: {
    home: string
    dashboard: string
    careers: string
    resources: string
    community: string
    mentor: string
    roadmap: string
    learn: string
    more: string
  }
  controls: {
    toggleTheme: string
    toggleLanguage: string
  }
  home: {
    hero: {
      eyebrow: string
      title: string
      description: string
      primaryCta: string
      secondaryCta: string
    }
    journey: {
      heading: string
      continueCta: string
      stageLabel: string
      topicsLabel: string
      justStarted: string
    }
    mentor: {
      title: string
      description: string
      cta: string
    }
    community: {
      title: string
      description: string
      comingSoon: string
      viewAllCta: string
    }
  }
  community: {
    pageTitle: string
    pageSubtitle: string
    filters: {
      latest: string
      upcoming: string
      webinar: string
      workshop: string
      class: string
      career: string
      technology: string
      other: string
    }
    viewOriginal: string
    publishedLabel: string
    eventDateLabel: string
    lastUpdatedLabel: string
    fallbackNotice: string
    loading: string
    empty: { title: string; description: string }
    error: { title: string; description: string }
  }
  assessment: {
    title: string
    intro: string
    stepLabel: string
    back: string
    next: string
    finish: string
    requiredError: string
    choiceRequiredError: string
  }
  assessmentResult: {
    eyebrow: string
    title: string
    intro: string
    levels: { strong: string; good: string; possible: string }
    sectionWhy: string
    sectionStrengths: string
    sectionChallenges: string
    sectionMyanmar: string
    sectionRoles: string
    chooseCta: string
    emptyNoAnswers: { title: string; description: string; cta: string }
    emptyNoMatches: { title: string; description: string; cta: string }
  }
  learningPath: {
    overviewLabel: string
    whyInternationalLabel: string
    whyMyanmarLabel: string
    roadmapLabel: string
    progressLabel: string
    justStarted: string
    statusLabels: Record<'locked' | 'available' | 'in-progress' | 'completed', string>
    projectsLabel: string
    levelLabels: Record<'beginner' | 'core' | 'intermediate' | 'advanced', string>
    resourcesLabel: string
    resourceCategoryLabels: {
      myanmarSeniorResources: string
      myanmarYoutubeChannels: string
      freeMyanmarResources: string
      burmeseDigitalBooks: string
    }
    resourcesComingSoon: string
    notFound: { title: string; description: string; cta: string }
    sectionWhatTheyDo: string
    sectionResponsibilities: string
    sectionWhereUsed: string
    sectionSuitableFor: string
    sectionPrerequisites: string
    sectionProgression: string
    difficultyLabels: Record<'beginner-friendly' | 'moderate' | 'challenging', string>
    specializationsLabel: string
  }
  topicDetail: {
    backToRoadmap: string
    whatItIsLabel: string
    whyItMattersLabel: string
    whereUsedLabel: string
    prerequisiteLabel: string
    firstStepsLabel: string
    deepDiveLabel: string
    learnLabel: string
    practiceLabel: string
    buildLabel: string
    verifyLabel: string
    tipsLabel: string
    commonMistakesLabel: string
    practiceTasksLabel: string
    readyToCompleteLabel: string
    readyToCompleteIntro: string
    markCompleteCta: string
    markedCompleteLabel: string
    resourcesLabel: string
    resourceCategoryLabels: Record<
      'documentation' | 'course' | 'tutorial' | 'video' | 'book' | 'practice-lab' | 'project',
      string
    >
    resourcesComingSoon: string
    detailComingSoon: { title: string; description: string }
    notFound: { title: string; description: string; cta: string }
  }
  mentor: {
    eyebrow: string
    title: string
    subtitle: string
    greetingTitle: string
    greetingBody: string
    suggestedPrompts: string[]
    inputPlaceholder: string
    sendCta: string
    unavailableLabel: string
    unavailable: string
    retryCta: string
  }
  pages: {
    careers: PageText
    careerDetail: PageText
    resources: PageText & {
      categories: {
        watchVideos: string
        digitalBooks: string
        classes: string
        other: string
      }
      emptyCategory: string
      creatorLabels: Record<'myanmar-senior' | 'myanmar-community' | 'international' | 'official', string>
      viewCta: string
    }
    notFound: PageText
  }
}

export const translations: Record<'en' | 'my', Translations> = {
  en: {
    appName: 'LANN',
    tagline: 'Find your direction. Build your path.',
    nav: {
      home: 'Home',
      dashboard: 'Dashboard',
      careers: 'Careers',
      resources: 'Resources',
      community: 'Community',
      mentor: 'AI Mentor',
      roadmap: 'Roadmap',
      learn: 'Learn',
      more: 'More',
    },
    controls: {
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Switch language',
    },
    home: {
      hero: {
        eyebrow: 'Myanmar-first technology guidance',
        title: 'Find your direction in technology.',
        description:
          "Many young people in Myanmar are interested in technology but aren't sure which path fits them. LANN helps you understand yourself, discover a technology career that fits, and follow a clear step-by-step path to get there — no experience required.",
        primaryCta: 'Find My Career Path',
        secondaryCta: 'Retake Learner Voice',
      },
      journey: {
        heading: 'Your Learning Journey',
        continueCta: 'Continue Learning',
        stageLabel: 'Current Stage',
        topicsLabel: 'Topics',
        justStarted: "You've just started — keep going.",
      },
      mentor: {
        title: 'AI Mentor',
        description: 'Stuck on something? Ask your AI Mentor for guidance.',
        cta: 'Ask AI Mentor',
      },
      community: {
        title: 'Myanmar Community',
        description: 'Free webinars, classes, and technology community updates from Myanmar.',
        comingSoon: "No community updates yet — check back soon, or add trusted sources in communitySources.ts.",
        viewAllCta: 'View All Updates',
      },
    },
    community: {
      pageTitle: 'Myanmar Tech Community',
      pageSubtitle: 'Webinars, workshops, classes, and career opportunities from trusted Myanmar technology community pages.',
      filters: {
        latest: 'Latest',
        upcoming: 'Upcoming',
        webinar: 'Webinars',
        workshop: 'Workshops',
        class: 'Classes',
        career: 'Career',
        technology: 'Technology',
        other: 'Other',
      },
      viewOriginal: 'View Original',
      publishedLabel: 'Posted',
      eventDateLabel: 'Event date',
      lastUpdatedLabel: 'Last updated',
      fallbackNotice: "Showing sample content — live community updates aren't available right now.",
      loading: 'Loading community updates...',
      empty: {
        title: 'Nothing here yet',
        description: 'No updates match this filter right now — try a different category.',
      },
      error: {
        title: 'Community updates are temporarily unavailable',
        description: "We couldn't load new updates, but you can keep exploring your roadmap and resources in the meantime.",
      },
    },
    assessment: {
      title: 'Learner Voice',
      intro: "There are no right or wrong answers. Just tell LANN a bit about yourself, and we'll help you find a direction that fits.",
      stepLabel: 'Step',
      back: 'Back',
      next: 'Next',
      finish: 'See My Career Matches',
      requiredError: 'A few words would help LANN understand you better.',
      choiceRequiredError: 'Please choose one option to continue.',
    },
    assessmentResult: {
      eyebrow: 'Based on what you shared',
      title: 'Your Career Matches',
      intro: "These are guesses based on your answers, not a final verdict — feel free to explore any of them.",
      levels: { strong: 'Strong Match', good: 'Good Match', possible: 'Possible Match' },
      sectionWhy: 'Why this may fit you',
      sectionStrengths: 'Strengths that help here',
      sectionChallenges: 'What to expect',
      sectionMyanmar: 'Why it matters in Myanmar',
      sectionRoles: 'Possible roles',
      chooseCta: 'Choose This Path',
      emptyNoAnswers: {
        title: "Let's get to know you first",
        description: 'Complete Learner Voice so LANN can find careers that fit you.',
        cta: 'Start Learner Voice',
      },
      emptyNoMatches: {
        title: "We couldn't find a strong match yet",
        description: "That's okay — you can explore all our career paths and see what interests you.",
        cta: 'Explore Careers',
      },
    },
    learningPath: {
      overviewLabel: 'Career Overview',
      whyInternationalLabel: 'Why It Matters Globally',
      whyMyanmarLabel: 'Why It Matters in Myanmar',
      roadmapLabel: 'Your Learning Roadmap',
      progressLabel: 'Progress',
      justStarted: "You haven't started any topics yet — check one off whenever you're ready.",
      statusLabels: { locked: 'Locked', available: 'Available', 'in-progress': 'In Progress', completed: 'Completed' },
      projectsLabel: 'Practical Projects',
      levelLabels: { beginner: 'Beginner', core: 'Core', intermediate: 'Intermediate', advanced: 'Advanced' },
      resourcesLabel: 'Learning Resources',
      resourceCategoryLabels: {
        myanmarSeniorResources: 'From Myanmar Senior Technicians',
        myanmarYoutubeChannels: 'Myanmar Tech Video Channels',
        freeMyanmarResources: 'Free Resources in Myanmar',
        burmeseDigitalBooks: 'Digital Books by Burmese Authors',
      },
      resourcesComingSoon:
        "We haven't verified any resources for this category yet. We'd rather leave this empty than point you somewhere unreliable — check back soon.",
      notFound: {
        title: "We couldn't find that career",
        description: "This learning path doesn't exist yet. Take a look at the careers we do support.",
        cta: 'Explore Careers',
      },
      sectionWhatTheyDo: 'What They Actually Do',
      sectionResponsibilities: 'Typical Responsibilities',
      sectionWhereUsed: 'Where This Role Is Used',
      sectionSuitableFor: 'Who This Suits',
      sectionPrerequisites: 'Prerequisite Knowledge',
      sectionProgression: 'Career Progression',
      difficultyLabels: { 'beginner-friendly': 'Beginner-friendly', moderate: 'Moderate', challenging: 'Challenging' },
      specializationsLabel: 'Specializations',
    },
    topicDetail: {
      backToRoadmap: 'Back to Roadmap',
      whatItIsLabel: 'What This Is',
      whyItMattersLabel: 'Why It Matters',
      whereUsedLabel: "Where It's Used",
      prerequisiteLabel: 'Before You Start',
      firstStepsLabel: 'What to Learn First',
      deepDiveLabel: 'Deep-Dive Learning Steps',
      learnLabel: 'Learn',
      practiceLabel: 'Practice',
      buildLabel: 'Build',
      verifyLabel: 'Verify',
      tipsLabel: 'Tips',
      commonMistakesLabel: 'Common Mistakes',
      practiceTasksLabel: 'Practice Tasks',
      readyToCompleteLabel: 'Ready to Complete?',
      readyToCompleteIntro: 'Before completing this section, you should be able to:',
      markCompleteCta: 'Mark Section as Complete',
      markedCompleteLabel: 'Section Complete — click to unmark',
      resourcesLabel: 'Resources for This Topic',
      resourceCategoryLabels: {
        documentation: 'Official Documentation',
        course: 'Courses',
        tutorial: 'Tutorials',
        video: 'Videos',
        book: 'Books',
        'practice-lab': 'Practice Labs',
        project: 'Projects',
      },
      resourcesComingSoon: "We haven't verified any resources for this topic yet.",
      detailComingSoon: {
        title: 'Detailed guide coming soon',
        description:
          "We haven't written a full deep-dive guide for this topic yet. You can still mark it complete once you've learned it elsewhere.",
      },
      notFound: {
        title: "We couldn't find that section",
        description: "This roadmap section doesn't exist.",
        cta: 'Back to Roadmap',
      },
    },
    mentor: {
      eyebrow: 'Your AI Mentor',
      title: 'AI Mentor',
      subtitle: "Ask about your career path, your roadmap, or anything you're stuck on.",
      greetingTitle: 'Hey, good to see you.',
      greetingBody:
        "I'm here to help with your learning journey — ask me anything about your career path, your roadmap, or something you're stuck on.",
      suggestedPrompts: [
        'What should I learn next?',
        'Explain Docker simply.',
        'Am I on the right career path?',
        'How should I start this project?',
      ],
      inputPlaceholder: 'Ask your AI Mentor...',
      sendCta: 'Send',
      unavailableLabel: 'Temporarily unavailable',
      unavailable:
        "AI Mentor is temporarily unavailable right now. You can keep going with your roadmap and resources in the meantime — I'll be here when I'm back.",
      retryCta: 'Try again',
    },
    pages: {
      careers: {
        title: 'Careers',
        description: 'Explore technology careers.',
      },
      careerDetail: {
        title: 'Career',
        description: 'Details for this career will appear here.',
      },
      resources: {
        title: 'Resources',
        description: 'Verified Myanmar tech learning resources — videos, books, classes, and more, all in one place.',
        categories: {
          watchVideos: 'Watch Videos',
          digitalBooks: 'Digital Books',
          classes: 'Classes',
          other: 'Other Resources',
        },
        emptyCategory: "We haven't verified any resources in this category yet — check back soon.",
        creatorLabels: {
          'myanmar-senior': 'Senior Myanmar Technologist',
          'myanmar-community': 'Myanmar Community',
          international: 'International',
          official: 'Official',
        },
        viewCta: 'View Resource',
      },
      notFound: {
        title: 'Page not found',
        description: "The page you're looking for doesn't exist.",
      },
    },
  },
  my: {
    appName: 'LANN',
    tagline: 'သင့်ရဲ့ ဦးတည်ရာကို ရှာပါ။ သင့်ရဲ့ လမ်းကြောင်းကို တည်ဆောက်ပါ။',
    nav: {
      home: 'ပင်မ',
      dashboard: 'ပင်မစာမျက်နှာ',
      careers: 'Career များ',
      resources: 'အရင်းအမြစ်များ',
      community: 'Community',
      mentor: 'AI Mentor',
      roadmap: 'Roadmap',
      learn: 'လေ့လာရန်',
      more: 'နောက်ထပ်',
    },
    controls: {
      toggleTheme: 'အနက်ရောင် / အလင်းရောင် ပြောင်းရန်',
      toggleLanguage: 'ဘာသာစကား ပြောင်းရန်',
    },
    home: {
      hero: {
        eyebrow: 'မြန်မာလူငယ်များအတွက် နည်းပညာလမ်းညွှန်',
        title: 'နည်းပညာလောကမှာ သင့်ဦးတည်ရာကို ရှာပါ။',
        description:
          'မြန်မာနိုင်ငံက လူငယ်အများစုဟာ နည်းပညာကို စိတ်ဝင်စားပေမယ့် ဘယ် Career က သူတို့နဲ့ ကိုက်ညီမလဲဆိုတာ သေချာမသိကြပါ။ LANN က သင့်ကိုယ်သင် ပိုနားလည်အောင်၊ သင့်နဲ့ ကိုက်ညီတဲ့ နည်းပညာ Career ကို ရှာဖွေတွေ့ရှိအောင်၊ ပြီးတော့ ရှင်းလင်းတဲ့ လမ်းစဉ်အတိုင်း တစ်ဆင့်ချင်း လိုက်နာနိုင်အောင် ကူညီပေးပါမယ်။ အတွေ့အကြုံ လိုအပ်ချက် မရှိပါ။',
        primaryCta: 'ကျွန်ုပ်၏ Career လမ်းကြောင်းကို ရှာပါ',
        secondaryCta: 'Learner Voice ကို ပြန်လုပ်ရန်',
      },
      journey: {
        heading: 'သင့်ရဲ့ လေ့လာမှု ခရီးစဉ်',
        continueCta: 'ဆက်လက်လေ့လာရန်',
        stageLabel: 'လက်ရှိအဆင့်',
        topicsLabel: 'Topics',
        justStarted: 'သင် အခုမှ စတင်ထားပါသည် — ဆက်လုပ်ပါ။',
      },
      mentor: {
        title: 'AI Mentor',
        description: 'တစ်ခုခုမှာ ရပ်နေရလား။ သင့် AI Mentor ကို မေးကြည့်ပါ။',
        cta: 'AI Mentor ကို မေးရန်',
      },
      community: {
        title: 'မြန်မာ Community',
        description: 'မြန်မာနိုင်ငံမှ အခမဲ့ Webinar များ၊ အတန်းများနှင့် နည်းပညာ Community သတင်းများ။',
        comingSoon: 'Community သတင်းများ မရှိသေးပါ — မကြာမီ ပြန်စစ်ဆေးပါ။',
        viewAllCta: 'အားလုံးကို ကြည့်ရန်',
      },
    },
    community: {
      pageTitle: 'မြန်မာ နည်းပညာ Community',
      pageSubtitle: 'ယုံကြည်ရသော မြန်မာ နည်းပညာ Community စာမျက်နှာများမှ Webinar၊ Workshop၊ အတန်းများနှင့် Career အခွင့်အလမ်းများ။',
      filters: {
        latest: 'နောက်ဆုံးရ',
        upcoming: 'လာမည့်ပွဲများ',
        webinar: 'Webinar',
        workshop: 'Workshop',
        class: 'အတန်းများ',
        career: 'Career',
        technology: 'နည်းပညာ',
        other: 'အခြား',
      },
      viewOriginal: 'မူရင်းကို ကြည့်ရန်',
      publishedLabel: 'တင်ခဲ့သည့်ရက်',
      eventDateLabel: 'ပွဲကျင်းပမည့်ရက်',
      lastUpdatedLabel: 'နောက်ဆုံး အပ်ဒိတ်',
      fallbackNotice: 'နမူနာ အကြောင်းအရာများကို ပြသနေပါသည် — လက်ရှိ Community သတင်းများကို ရယူ၍ မရသေးပါ။',
      loading: 'Community သတင်းများ ရယူနေပါသည်...',
      empty: {
        title: 'ဤနေရာတွင် ဘာမှမရှိသေးပါ',
        description: 'ဤစစ်ထုတ်မှုနှင့် ကိုက်ညီသော သတင်း မရှိသေးပါ — အခြား အမျိုးအစားတစ်ခုကို စမ်းကြည့်ပါ။',
      },
      error: {
        title: 'Community သတင်းများ လောလောဆယ် မရရှိနိုင်ပါ',
        description: 'သတင်းသစ်များကို ရယူ၍ မရသေးပါ၊ ဒီအတောအတွင်း Roadmap နဲ့ Resource တွေနဲ့ ဆက်လေ့လာနေနိုင်ပါတယ်။',
      },
    },
    assessment: {
      title: 'Learner Voice',
      intro: 'မှန်တာ၊ မှားတာ မရှိပါ။ သင့်အကြောင်း အနည်းငယ် ပြောပြရုံပါပဲ၊ သင့်နဲ့ ကိုက်ညီတဲ့ ဦးတည်ရာကို LANN က ကူညီရှာပေးပါမယ်။',
      stepLabel: 'အဆင့်',
      back: 'နောက်သို့',
      next: 'ရှေ့ဆက်ရန်',
      finish: 'Career ကိုက်ညီမှုများ ကြည့်ရန်',
      requiredError: 'စကားလုံး အနည်းငယ်လောက် ရေးပြရင် LANN က သင့်ကို ပိုနားလည်နိုင်ပါမယ်။',
      choiceRequiredError: 'ရှေ့ဆက်ဖို့ တစ်ခုခု ရွေးချယ်ပေးပါ။',
    },
    assessmentResult: {
      eyebrow: 'သင်ပြောပြခဲ့သည့်အရာများအပေါ် အခြေခံ၍',
      title: 'သင့်ရဲ့ Career ကိုက်ညီမှုများ',
      intro: 'ဒါတွေက သင့်အဖြေတွေအပေါ် အခြေခံတဲ့ ခန့်မှန်းချက်တွေပါ၊ အပြီးသတ် ဆုံးဖြတ်ချက် မဟုတ်ပါ — အားလုံးကို လွတ်လပ်စွာ လေ့လာကြည့်နိုင်ပါတယ်။',
      levels: { strong: 'ကိုက်ညီမှု အားကောင်း', good: 'ကိုက်ညီမှု ကောင်းသည်', possible: 'ဖြစ်နိုင်ချေရှိသော ကိုက်ညီမှု' },
      sectionWhy: 'ဒီ Career က ဘာကြောင့် ကိုက်ညီနိုင်လဲ',
      sectionStrengths: 'ဒီနေရာမှာ အထောက်အကူဖြစ်စေမယ့် အားသာချက်များ',
      sectionChallenges: 'ဘာတွေ မျှော်လင့်ထားသင့်လဲ',
      sectionMyanmar: 'မြန်မာနိုင်ငံအတွက် ဘာကြောင့်အရေးကြီးလဲ',
      sectionRoles: 'ဖြစ်နိုင်ချေရှိသော အလုပ်အခန်းကဏ္ဍများ',
      chooseCta: 'ဒီလမ်းကြောင်းကို ရွေးချယ်ရန်',
      emptyNoAnswers: {
        title: 'အရင် သင့်ကို လေ့လာကြရအောင်',
        description: 'LANN က သင့်နဲ့ ကိုက်ညီတဲ့ Career တွေ ရှာပေးနိုင်ဖို့ Learner Voice ကို အရင်ဖြည့်ပါ။',
        cta: 'Learner Voice စတင်ရန်',
      },
      emptyNoMatches: {
        title: 'အားကောင်းတဲ့ ကိုက်ညီမှု မတွေ့ရသေးပါ',
        description: 'ရှုံးမှု မဟုတ်ပါ — ကျွန်ုပ်တို့ရဲ့ Career လမ်းကြောင်းအားလုံးကို လေ့လာပြီး စိတ်ဝင်စားစရာ ရှာကြည့်နိုင်ပါတယ်။',
        cta: 'Career များ လေ့လာရန်',
      },
    },
    learningPath: {
      overviewLabel: 'Career အကျဉ်းချုပ်',
      whyInternationalLabel: 'ကမ္ဘာ့အနေအထားအရ ဘာကြောင့်အရေးကြီးလဲ',
      whyMyanmarLabel: 'မြန်မာနိုင်ငံအတွက် ဘာကြောင့်အရေးကြီးလဲ',
      roadmapLabel: 'သင့်ရဲ့ လေ့လာမှု Roadmap',
      progressLabel: 'တိုးတက်မှု',
      justStarted: 'မည်သည့် Topic ကိုမှ မစတင်ရသေးပါ — အဆင်သင့်ဖြစ်တဲ့အခါ တစ်ခုခုကို အမှန်ခြစ်ပါ။',
      statusLabels: {
        locked: 'ပိတ်ထား',
        available: 'စတင်နိုင်ပါပြီ',
        'in-progress': 'လုပ်ဆောင်နေဆဲ',
        completed: 'ပြီးစီး',
      },
      projectsLabel: 'လက်တွေ့ Project များ',
      levelLabels: { beginner: 'Beginner', core: 'Core', intermediate: 'Intermediate', advanced: 'Advanced' },
      resourcesLabel: 'လေ့လာရေး အရင်းအမြစ်များ',
      resourceCategoryLabels: {
        myanmarSeniorResources: 'မြန်မာ အကြီးတန်း နည်းပညာရှင်များထံမှ',
        myanmarYoutubeChannels: 'မြန်မာ နည်းပညာ Video Channel များ',
        freeMyanmarResources: 'မြန်မာနိုင်ငံတွင် အခမဲ့ အရင်းအမြစ်များ',
        burmeseDigitalBooks: 'မြန်မာ နည်းပညာရေးသားသူများ၏ Digital Book များ',
      },
      resourcesComingSoon:
        'ဤအမျိုးအစားအတွက် အတည်ပြုပြီးသော အရင်းအမြစ် မရှိသေးပါ။ မယုံကြည်ရသေးသော နေရာသို့ ညွှန်းမည့်အစား ဤနေရာကို လွတ်ထားခြင်းက ပိုကောင်းပါတယ် — မကြာမီ ပြန်စစ်ဆေးပါ။',
      notFound: {
        title: 'ဒီ Career ကို မတွေ့ပါ',
        description: 'ဤ Learning Path ကို မတွေ့ရသေးပါ။ ကျွန်ုပ်တို့ ပံ့ပိုးထားသော Career များကို ကြည့်ရှုပါ။',
        cta: 'Career များ လေ့လာရန်',
      },
      sectionWhatTheyDo: 'တကယ်တမ်း ဘာလုပ်ကြသလဲ',
      sectionResponsibilities: 'ပုံမှန် တာဝန်များ',
      sectionWhereUsed: 'ဤ Role ကို ဘယ်နေရာတွေတွင် သုံးကြသလဲ',
      sectionSuitableFor: 'ဘယ်သူနှင့် ကိုက်ညီသလဲ',
      sectionPrerequisites: 'လိုအပ်သော အခြေခံအသိပညာ',
      sectionProgression: 'Career တိုးတက်မှု',
      difficultyLabels: {
        'beginner-friendly': 'အစပြုသူအတွက် လွယ်ကူသည်',
        moderate: 'အလယ်အလတ်',
        challenging: 'စိန်ခေါ်မှုရှိသည်',
      },
      specializationsLabel: 'အထူးပြုနိုင်သော နယ်ပယ်များ',
    },
    topicDetail: {
      backToRoadmap: 'Roadmap သို့ ပြန်သွားရန်',
      whatItIsLabel: 'ဒါက ဘာလဲ',
      whyItMattersLabel: 'ဘာကြောင့် အရေးကြီးလဲ',
      whereUsedLabel: 'ဘယ်နေရာတွင် သုံးလဲ',
      prerequisiteLabel: 'မစတင်မီ',
      firstStepsLabel: 'ဘာကို အရင်လေ့လာမလဲ',
      deepDiveLabel: 'အသေးစိတ် လေ့လာမှု အဆင့်များ',
      learnLabel: 'လေ့လာရန်',
      practiceLabel: 'လေ့ကျင့်ရန်',
      buildLabel: 'လက်တွေ့ လုပ်ဆောင်ရန်',
      verifyLabel: 'စစ်ဆေးရန်',
      tipsLabel: 'အကြံပြုချက်များ',
      commonMistakesLabel: 'အများဆုံး ဖြစ်တတ်သော အမှားများ',
      practiceTasksLabel: 'လေ့ကျင့်ရန် အလုပ်များ',
      readyToCompleteLabel: 'ပြီးဆုံးဖို့ အသင့်ဖြစ်ပြီလား',
      readyToCompleteIntro: 'ဤအပိုင်းကို ပြီးဆုံးကြောင်း အမှတ်အသားမပြုမီ သင်ဤအရာများကို လုပ်နိုင်သင့်သည်',
      markCompleteCta: 'ဤအပိုင်းကို ပြီးဆုံးကြောင်း အမှတ်အသားပြုရန်',
      markedCompleteLabel: 'ပြီးဆုံးပါပြီ — ပြန်ဖျက်ရန် နှိပ်ပါ',
      resourcesLabel: 'ဤ Topic အတွက် အရင်းအမြစ်များ',
      resourceCategoryLabels: {
        documentation: 'တရားဝင် စာရွက်စာတမ်းများ',
        course: 'သင်တန်းများ',
        tutorial: 'Tutorial များ',
        video: 'Video များ',
        book: 'စာအုပ်များ',
        'practice-lab': 'လေ့ကျင့်ခန်း Lab များ',
        project: 'Project များ',
      },
      resourcesComingSoon: 'ဤ Topic အတွက် အတည်ပြုပြီးသော အရင်းအမြစ် မရှိသေးပါ။',
      detailComingSoon: {
        title: 'အသေးစိတ်လမ်းညွှန် မကြာမီလာမည်',
        description:
          'ဤ Topic အတွက် အသေးစိတ် လမ်းညွှန် မရေးရသေးပါ။ တခြားနေရာမှာ လေ့လာပြီးရင်တောင် ပြီးဆုံးကြောင်း အမှတ်အသားပြုနိုင်ပါသေးတယ်။',
      },
      notFound: {
        title: 'ဤအပိုင်းကို မတွေ့ပါ',
        description: 'ဤ Roadmap အပိုင်းသည် မရှိပါ။',
        cta: 'Roadmap သို့ ပြန်သွားရန်',
      },
    },
    mentor: {
      eyebrow: 'သင့် AI Mentor',
      title: 'AI Mentor',
      subtitle: 'သင့် Career လမ်းကြောင်း၊ Roadmap (သို့) ခက်ခဲနေတဲ့အရာ တစ်ခုခုအကြောင်း မေးကြည့်ပါ။',
      greetingTitle: 'မင်္ဂလာပါ၊ တွေ့ရတာ ဝမ်းသာပါတယ်။',
      greetingBody:
        'သင့်ရဲ့ လေ့လာမှု ခရီးစဉ်မှာ ကူညီဖို့ ဒီမှာ ရှိပါတယ် — Career လမ်းကြောင်း၊ Roadmap (သို့) ခက်ခဲနေတဲ့ အရာတစ်ခုခုကို မေးကြည့်ပါ။',
      suggestedPrompts: [
        'နောက်ဘာလေ့လာသင့်လဲ?',
        'Docker ကို ရိုးရှင်းစွာ ရှင်းပြပါ။',
        'ကျွန်ုပ် မှန်ကန်တဲ့ Career လမ်းကြောင်းပေါ်မှာ ရှိပါသလား?',
        'ဒီ Project ကို ဘယ်လိုစရမလဲ?',
      ],
      inputPlaceholder: 'သင့် AI Mentor ကို မေးကြည့်ပါ...',
      sendCta: 'ပို့ရန်',
      unavailableLabel: 'လောလောဆယ် မရရှိနိုင်ပါ',
      unavailable:
        'AI Mentor ကို လောလောဆယ် မရရှိနိုင်သေးပါ။ ဒီအတောအတွင်း Roadmap နဲ့ Resource တွေနဲ့ ဆက်လေ့လာနေနိုင်ပါတယ် — ပြန်ရောက်လာရင် ဒီမှာ ရှိပါမယ်။',
      retryCta: 'ပြန်စမ်းကြည့်ရန်',
    },
    pages: {
      careers: {
        title: 'Career များ',
        description: 'နည်းပညာ Career များကို လေ့လာကြည့်ပါ။',
      },
      careerDetail: {
        title: 'Career',
        description: 'ဤ Career အတွက် အသေးစိတ်များကို ဤနေရာတွင် တွေ့ရမည်။',
      },
      resources: {
        title: 'အရင်းအမြစ်များ',
        description: 'အတည်ပြုပြီးသော မြန်မာ နည်းပညာ လေ့လာရေး အရင်းအမြစ်များ — Video၊ စာအုပ်၊ အတန်းများနှင့် အခြားများကို တစ်နေရာတည်းတွင်။',
        categories: {
          watchVideos: 'Video များ ကြည့်ရန်',
          digitalBooks: 'Digital Book များ',
          classes: 'အတန်းများ',
          other: 'အခြား အရင်းအမြစ်များ',
        },
        emptyCategory: 'ဤအမျိုးအစားအတွက် အတည်ပြုပြီးသော အရင်းအမြစ် မရှိသေးပါ — မကြာမီ ပြန်စစ်ဆေးပါ။',
        creatorLabels: {
          'myanmar-senior': 'အကြီးတန်း မြန်မာ နည်းပညာရှင်',
          'myanmar-community': 'မြန်မာ Community',
          international: 'နိုင်ငံတကာ',
          official: 'တရားဝင်',
        },
        viewCta: 'အရင်းအမြစ် ကြည့်ရန်',
      },
      notFound: {
        title: 'စာမျက်နှာ မတွေ့ပါ',
        description: 'သင်ရှာနေသော စာမျက်နှာကို မတွေ့ရှိပါ။',
      },
    },
  },
}
