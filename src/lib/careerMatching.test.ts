import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { scoreCareer, matchCareers } from './careerMatching.ts'
import { careerProfiles } from '../data/careers.ts'
import type { LearnerAnswers } from '../types/assessment.ts'
import type { CareerProfile } from '../types/career.ts'

function makeAnswers(overrides: Partial<LearnerAnswers> = {}): LearnerAnswers {
  return {
    technologyInterest: '',
    currentExperience: '',
    currentSkills: '',
    difficulties: '',
    preferredWork: '',
    careerGoal: '',
    learningStyle: '',
    careerUncertainty: '',
    expectations: '',
    ...overrides,
  }
}

const fakeProfile: CareerProfile = {
  id: 'test-career',
  slug: 'test-career',
  name: 'Test Career',
  nameMy: 'Test Career',
  shortDescription: { en: '', my: '' },
  internationalContext: { en: '', my: '' },
  whatTheyDo: { en: '', my: '' },
  responsibilities: [],
  whereUsed: { en: '', my: '' },
  suitableFor: { en: '', my: '' },
  difficulty: 'moderate',
  prerequisiteKnowledge: [],
  progression: { en: '', my: '' },
  specializations: [],
  myanmarContext: { en: '', my: '' },
  roles: [],
  skills: [],
  challenges: [],
  signals: [
    { keywords: ['alpha'], reason: { en: 'alpha reason', my: 'alpha အကြောင်းပြချက်' } },
    { keywords: ['beta'], reason: { en: 'beta reason', my: 'beta အကြောင်းပြချက်' } },
    { keywords: ['gamma'], reason: { en: 'gamma reason', my: 'gamma အကြောင်းပြချက်' } },
  ],
}

describe('scoreCareer', () => {
  test('returns 0 score and no reasons when nothing matches', () => {
    const result = scoreCareer(makeAnswers({ technologyInterest: 'nothing relevant here' }), fakeProfile)
    assert.equal(result.score, 0)
    assert.equal(result.reasons.length, 0)
    assert.equal(result.level, 'possible')
  })

  test('one matched signal group gives a possible-level score', () => {
    const result = scoreCareer(makeAnswers({ technologyInterest: 'I like alpha things' }), fakeProfile)
    assert.equal(result.score, 33)
    assert.equal(result.level, 'possible')
    assert.equal(result.reasons.length, 1)
  })

  test('two matched signal groups give a good-level score', () => {
    const result = scoreCareer(makeAnswers({ technologyInterest: 'alpha', careerGoal: 'beta' }), fakeProfile)
    assert.equal(result.score, 67)
    assert.equal(result.level, 'good')
  })

  test('all matched signal groups give a strong-level score', () => {
    const result = scoreCareer(
      makeAnswers({ technologyInterest: 'alpha', careerGoal: 'beta', expectations: 'gamma' }),
      fakeProfile,
    )
    assert.equal(result.score, 100)
    assert.equal(result.level, 'strong')
  })

  test('matching is case-insensitive', () => {
    const result = scoreCareer(makeAnswers({ technologyInterest: 'ALPHA everywhere' }), fakeProfile)
    assert.equal(result.score, 33)
  })

  test('does not false-positive match a keyword substring inside a larger word', () => {
    const profile: CareerProfile = {
      ...fakeProfile,
      signals: [{ keywords: ['ux'], reason: { en: 'ux', my: 'ux' } }],
    }
    const result = scoreCareer(makeAnswers({ technologyInterest: 'I enjoy luxury travel content' }), profile)
    assert.equal(result.score, 0)
  })

  test('ignores the difficulties field when scoring', () => {
    const result = scoreCareer(makeAnswers({ difficulties: 'alpha beta gamma' }), fakeProfile)
    assert.equal(result.score, 0)
  })

  test('does not mutate the input answers object', () => {
    const answers = makeAnswers({ technologyInterest: 'alpha' })
    const snapshot = { ...answers }
    scoreCareer(answers, fakeProfile)
    assert.deepEqual(answers, snapshot)
  })
})

describe('matchCareers', () => {
  test('excludes careers with zero matched signals', () => {
    const result = matchCareers(makeAnswers({ technologyInterest: 'totally unrelated words' }), [fakeProfile])
    assert.equal(result.matches.length, 0)
  })

  test('sorts matches by score descending', () => {
    const strongProfile: CareerProfile = { ...fakeProfile, id: 'strong' }
    const weakProfile: CareerProfile = {
      ...fakeProfile,
      id: 'weak',
      signals: [fakeProfile.signals[0], { keywords: ['zzz-not-present'], reason: { en: 'x', my: 'x' } }],
    }
    const result = matchCareers(
      makeAnswers({ technologyInterest: 'alpha', careerGoal: 'beta', expectations: 'gamma' }),
      [weakProfile, strongProfile],
    )
    assert.equal(result.matches[0].careerId, 'strong')
    assert.equal(result.matches[1].careerId, 'weak')
  })

  test('limits results to topN', () => {
    const profiles = [1, 2, 3, 4].map((n) => ({ ...fakeProfile, id: `career-${n}` }))
    const result = matchCareers(makeAnswers({ technologyInterest: 'alpha' }), profiles, 2)
    assert.equal(result.matches.length, 2)
  })

  test('preserves the original answers unchanged on the result', () => {
    const answers = makeAnswers({ technologyInterest: 'alpha' })
    const result = matchCareers(answers, [fakeProfile])
    assert.equal(result.answers, answers)
    assert.deepEqual(result.answers, answers)
  })
})

describe('matchCareers with real career data', () => {
  test('a coding-focused learner matches software engineering', () => {
    const answers = makeAnswers({
      technologyInterest: 'I love coding and building software apps',
      currentSkills: 'solving problems and debugging logic',
      careerGoal: 'I want to be a software engineer',
      preferredWork: 'building things',
      expectations: 'a stable developer job',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.ok(result.matches.length > 0)
    assert.equal(result.matches[0].careerId, 'software-engineering')
    assert.ok(result.matches[0].reasons.length > 0)
  })

  test('an infrastructure-focused learner matches cloud/devops', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like servers, infrastructure and how systems stay reliable',
      currentSkills: 'linux and automation',
      careerGoal: 'devops engineer role',
      preferredWork: 'keeping things running behind the scenes',
      expectations: 'working with cloud infrastructure',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'cloud-devops')
  })

  test('a Burmese-language, design-focused learner matches UI/UX design', () => {
    const answers = makeAnswers({
      technologyInterest: 'ဒီဇိုင်းနဲ့ အသွင်အပြင်ကို စိတ်ဝင်စားပါတယ်',
      currentSkills: 'ဖန်တီးမှုစွမ်းရည်',
      careerGoal: 'ဒီဇိုင်နာ ဖြစ်ချင်ပါတယ်',
      preferredWork: 'design',
      expectations: 'UI/UX designer',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'ui-ux-design')
  })

  test('a learner with no relevant answers gets no matches', () => {
    const answers = makeAnswers({
      technologyInterest: 'not sure yet',
      currentSkills: 'i am not sure',
      careerGoal: 'something good',
      preferredWork: 'anything',
      expectations: 'a good future',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches.length, 0)
  })

  test('a mobile-focused learner matches mobile development', () => {
    const answers = makeAnswers({
      technologyInterest: 'I want to build mobile apps for android and ios phones',
      currentSkills: 'thinking about how people use apps on their smartphone every day',
      careerGoal: 'become an android developer',
      preferredWork: 'making mobile apps people carry with them',
      expectations: 'launch an app on the app store',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'mobile-development')
  })

  test('a security-focused learner matches cybersecurity', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like security and protecting systems from hackers',
      currentSkills: 'careful, vigilant, and good at investigation',
      careerGoal: 'become a cybersecurity analyst',
      preferredWork: 'defending against cyber attacks',
      expectations: 'a security specialist role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'cybersecurity')
  })

  test('a connectivity-focused learner matches networking', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like understanding how networks and wifi connections work',
      currentSkills: 'troubleshooting connection and hardware issues',
      careerGoal: 'become a network administrator',
      preferredWork: 'setting up routers and cabling',
      expectations: 'a network engineer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'networking')
  })

  test('a numbers-focused learner matches data analysis', () => {
    const answers = makeAnswers({
      technologyInterest: 'I enjoy working with data, numbers and spreadsheets',
      currentSkills: 'finding patterns and staying organized',
      careerGoal: 'become a data analyst',
      preferredWork: 'analytics and research',
      expectations: 'a business analyst role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'data-analysis')
  })

  test('a website-focused learner matches full-stack development', () => {
    const answers = makeAnswers({
      technologyInterest: 'I want to build websites, both frontend and backend',
      currentSkills: 'html, css and javascript',
      careerGoal: 'become a full-stack developer',
      preferredWork: 'building for the web browser',
      expectations: 'a web developer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'full-stack-development')
  })

  test('a learner interested in multiple areas gets multiple ranked matches', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like coding and also protecting systems from hackers',
      currentSkills: 'solving problems, debugging logic, and staying vigilant',
      careerGoal: 'software engineer or cybersecurity analyst',
      preferredWork: 'building software and keeping it secure',
      expectations: 'a developer or security specialist job',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.ok(result.matches.length >= 2)
    const careerIds = result.matches.map((match) => match.careerId)
    assert.ok(careerIds.includes('software-engineering'))
    assert.ok(careerIds.includes('cybersecurity'))
  })

  test('every career profile has at least one matchable signal group', () => {
    for (const profile of careerProfiles) {
      assert.ok(profile.signals.length > 0, `${profile.id} has no signal groups`)
      for (const signal of profile.signals) {
        assert.ok(signal.keywords.length > 0, `${profile.id} has a signal group with no keywords`)
      }
    }
  })
})

// Phase 6 Update — the 11 representative test cases from the intelligent
// career matching spec. Each checks the *ranking* (top match, and that a
// clearly wrong generic career does not win), not exact score numbers —
// scores are an implementation detail; which career wins is the contract.
describe('Phase 6 Update — intelligent career matching', () => {
  test('Test 1: AI + GenAI + ML matches AI Engineering, not Software Engineering', () => {
    const answers = makeAnswers({
      technologyInterest: 'I am interested in AI and Generative AI',
      currentSkills: 'understanding machine learning concepts',
      preferredWork: 'building AI models',
      careerGoal: 'I want to become an AI engineer',
      expectations: 'work with GenAI and large language models',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'ai-engineer')
    assert.notEqual(result.matches[0].careerId, 'software-engineering')
  })

  test('Test 2: Python + Java + Programming matches Software Engineering', () => {
    const answers = makeAnswers({
      technologyInterest: 'I enjoy programming in Python and Java',
      currentSkills: 'solving problems with code',
      careerGoal: 'become a software developer',
      preferredWork: 'writing programs',
      expectations: 'a software engineering job',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'software-engineering')
  })

  test('Test 3: Python + Arduino + Electronics matches Robotics Engineering', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like working with Arduino and electronics',
      currentSkills: 'wiring circuits and writing Python for microcontrollers',
      careerGoal: 'become a robotics engineer',
      preferredWork: 'building robots and embedded systems',
      expectations: 'work with sensors and hardware',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'robotics-engineer')
  })

  test('Test 4: C# + HTML + CSS + JavaScript + Software Development matches a software/web career', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like software development with C#, HTML, CSS, and JavaScript',
      currentSkills: 'writing code and building applications',
      careerGoal: 'become a software developer',
      preferredWork: 'building applications',
      expectations: 'a software development job',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.ok(['software-engineering', 'full-stack-development'].includes(result.matches[0].careerId))
  })

  test('Test 5: Design + UI + UX matches UI/UX Design', () => {
    const answers = makeAnswers({
      technologyInterest: 'I love design, UI and UX',
      currentSkills: 'visual design and prototyping in Figma',
      careerGoal: 'become a UI/UX designer',
      preferredWork: 'designing interfaces',
      expectations: 'a product design role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'ui-ux-design')
  })

  test('Test 6: Backend + API + Database matches Full-Stack Development (backend specialization)', () => {
    const answers = makeAnswers({
      technologyInterest: 'I am interested in backend development, APIs, and databases',
      currentSkills: 'writing SQL and designing databases',
      careerGoal: 'become a backend developer',
      preferredWork: 'building server-side systems',
      expectations: 'a backend developer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'full-stack-development')
  })

  test('Test 7: Pen Testing + Cybersecurity + Wireshark + Linux matches Cybersecurity', () => {
    const answers = makeAnswers({
      technologyInterest: 'I am interested in pen testing and cybersecurity',
      currentSkills: 'using Wireshark and Kali Linux',
      careerGoal: 'become a penetration tester',
      preferredWork: 'ethical hacking and vulnerability assessment',
      expectations: 'a cybersecurity analyst role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'cybersecurity')
    assert.notEqual(result.matches[0].careerId, 'cloud-devops')
    assert.notEqual(result.matches[0].careerId, 'software-engineering')
  })

  test('Test 8: AWS + Linux + Virtualization + System Monitoring matches Cloud/DevOps', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like working with AWS, Linux, and virtualization',
      currentSkills: 'system monitoring and infrastructure',
      careerGoal: 'become a cloud engineer',
      preferredWork: 'managing cloud infrastructure',
      expectations: 'a DevOps engineer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'cloud-devops')
  })

  test('Test 9: Security + DevOps + Machine Learning matches an MLOps/DevSecOps-adjacent career', () => {
    const answers = makeAnswers({
      technologyInterest: 'I am interested in security, DevOps, and machine learning',
      currentSkills: 'automation, infrastructure, and ML model deployment',
      careerGoal: 'combine security and DevOps with machine learning',
      preferredWork: 'securing and automating ML infrastructure',
      expectations: 'an MLOps or DevSecOps role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.ok(['cloud-devops', 'cybersecurity', 'ai-engineer'].includes(result.matches[0].careerId))
    assert.notEqual(result.matches[0].level, 'possible')
  })

  test('Test 10: Full-Stack + Python + SQL + Cloud Infrastructure matches a Forward-Deployed-adjacent career', () => {
    const answers = makeAnswers({
      technologyInterest: 'I like full-stack development with Python, SQL, and cloud infrastructure',
      currentSkills: 'building web apps and deploying them to the cloud',
      careerGoal: 'work directly with clients deploying full-stack solutions',
      preferredWork: 'full-stack development and cloud deployment',
      expectations: 'a forward deployed engineer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.ok(['full-stack-development', 'cloud-devops'].includes(result.matches[0].careerId))
  })

  test('Test 11: Teaching + Learning + Education matches ICT Trainer / Educator', () => {
    const answers = makeAnswers({
      technologyInterest: 'I love teaching and helping others learn technology',
      currentSkills: 'explaining things clearly and mentoring beginners',
      careerGoal: 'become an ICT trainer',
      preferredWork: 'training and education',
      expectations: 'a technology trainer role',
    })
    const result = matchCareers(answers, careerProfiles)
    assert.equal(result.matches[0].careerId, 'ict-trainer')
  })

  test('every new career (ai-engineer, robotics-engineer, ict-trainer) has a findable roadmap', async () => {
    const { findRoadmap } = await import('../data/roadmaps.ts')
    for (const id of ['ai-engineer', 'robotics-engineer', 'ict-trainer']) {
      const roadmap = findRoadmap(id)
      assert.ok(roadmap, `${id} has no roadmap`)
      assert.equal(roadmap?.stages.length, 4, `${id} roadmap should have 4 stages`)
      for (const stage of roadmap?.stages ?? []) {
        assert.equal(stage.topics.length, 4, `${id} stage ${stage.id} should have 4 topics`)
        for (const topic of stage.topics) {
          assert.ok(topic.detail, `${id} topic ${topic.id} has no authored detail`)
        }
      }
    }
  })
})
