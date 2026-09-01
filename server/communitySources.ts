import type { CommunitySource } from './communityTypes.ts'

/**
 * Trusted Myanmar technology/community Facebook Pages LANN pulls updates
 * from. LANN never invents a Facebook Page ID (see CLAUDE.md's "never
 * fabricate a resource" rule). The first block below was found via web
 * search of real, currently-listed Facebook Pages; the second block was
 * supplied directly by the project owner as real page URLs. Facebook
 * *Groups* (as opposed to Pages) are intentionally excluded: the Graph API
 * /posts edge this app calls only works for Pages.
 *
 * Residual uncertainty, stated honestly: these could not be fetched through
 * Meta's API to confirm exact numeric Page IDs or current posting activity,
 * since no FACEBOOK_ACCESS_TOKEN is configured in this environment and
 * Facebook does not serve page content to unauthenticated fetches (which is
 * exactly why this app uses the official API instead of scraping). Verify
 * each source resolves correctly once a real token is available, and
 * disable/remove any that don't.
 */
export const communitySources: CommunitySource[] = [
  {
    id: 'mcpa-myanmar',
    name: 'Myanmar Computer Professionals Association (MCPA)',
    facebookPageId: 'mcpamyanmar.org',
    facebookUrl: 'https://www.facebook.com/mcpamyanmar.org/',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'myanmar-web-development',
    name: 'Myanmar Web Development',
    facebookPageId: 'myanmarwebdev',
    facebookUrl: 'https://www.facebook.com/myanmarwebdev/',
    category: 'class',
    enabled: true,
  },
  {
    id: 'myanmar-information-technology',
    name: 'Myanmar Information Technology',
    facebookPageId: 'MyanmarInformationTechnology',
    facebookUrl: 'https://www.facebook.com/MyanmarInformationTechnology/',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'build-myanmar',
    name: 'Build Myanmar',
    facebookPageId: 'buildmyanmarorg',
    facebookUrl: 'https://www.facebook.com/@buildmyanmarorg/',
    category: 'career',
    enabled: true,
  },
  {
    id: 'uxmm',
    name: 'UXMM',
    facebookPageId: 'uxmyanmar',
    facebookUrl: 'https://www.facebook.com/uxmyanmar',
    category: 'workshop',
    enabled: true,
  },
  {
    id: 'technortal',
    name: 'Technortal',
    facebookPageId: 'technortal',
    facebookUrl: 'https://www.facebook.com/technortal/',
    category: 'class',
    enabled: true,
  },
  {
    id: 'fairway-technology',
    name: 'Fairway Technology',
    facebookPageId: 'fairway.technology',
    facebookUrl: 'https://www.facebook.com/fairway.technology/',
    category: 'class',
    enabled: true,
  },
  {
    id: 'women-in-ai-myanmar',
    name: 'Women in AI - Myanmar',
    facebookPageId: 'womeninaimyanmar',
    facebookUrl: 'https://www.facebook.com/womeninaimyanmar/',
    category: 'technology',
    enabled: true,
  },

  // --- Supplied directly by the project owner (2026-09-01) ---
  // technortal, fairway.technology, uxmyanmar, and womeninaimyanmar were
  // already present above and are not duplicated here.
  {
    id: 'lets-tech-club',
    name: "Let's Tech Club",
    facebookPageId: 'letstechclub',
    facebookUrl: 'https://www.facebook.com/letstechclub',
    category: 'class',
    enabled: true,
  },
  {
    id: 'stem-channel-mm',
    name: 'STEM Channel MM',
    facebookPageId: 'stemchannelmm',
    facebookUrl: 'https://www.facebook.com/stemchannelmm',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'sa-map',
    name: 'Sa Map',
    facebookPageId: 'samap.official',
    facebookUrl: 'https://www.facebook.com/samap.official',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'codelite-myanmar',
    name: 'CodeLite Myanmar',
    facebookPageId: 'codelite.mmr',
    facebookUrl: 'https://www.facebook.com/codelite.mmr',
    category: 'class',
    enabled: true,
  },
  {
    id: 'technolearn',
    name: 'TechnoLearn',
    facebookPageId: 'technolearn',
    facebookUrl: 'https://www.facebook.com/technolearn',
    category: 'class',
    enabled: true,
  },
  {
    // Confirmed via web search: "Símbolo — a Myanmar (Burma) based AI and IT training school."
    id: 'simbolo',
    name: 'Símbolo',
    facebookPageId: 'Simboloit',
    facebookUrl: 'https://www.facebook.com/Simboloit',
    category: 'class',
    enabled: true,
  },
  {
    id: 'mmaicd',
    name: 'MMAICD',
    facebookPageId: 'mmaicd',
    facebookUrl: 'https://www.facebook.com/mmaicd',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'hello-cloud-inc',
    name: 'Hello Cloud Inc',
    facebookPageId: 'hellocloudinc',
    facebookUrl: 'https://www.facebook.com/hellocloudinc',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'coding-for-all',
    name: 'Coding For All',
    facebookPageId: 'codingforall7',
    facebookUrl: 'https://www.facebook.com/codingforall7',
    category: 'class',
    enabled: true,
  },
  {
    id: 'devktops',
    name: 'DevKtops',
    facebookPageId: 'devktops',
    facebookUrl: 'https://www.facebook.com/devktops',
    category: 'technology',
    enabled: true,
  },
  {
    id: 'learn-devops-now',
    name: 'Learn DevOps Now',
    facebookPageId: 'learndevopsnowbytho',
    facebookUrl: 'https://www.facebook.com/learndevopsnowbytho',
    category: 'class',
    enabled: true,
  },
  {
    // Confirmed via web search as a real Yangon-based page.
    id: 'myanmar-tech-academy',
    name: 'Myanmar Tech Academy',
    facebookPageId: 'myanmartechacademy',
    facebookUrl: 'https://www.facebook.com/myanmartechacademy',
    category: 'class',
    enabled: true,
  },
  {
    id: 'dataland-technology',
    name: 'Dataland Technology',
    facebookPageId: 'datalandtechnology',
    facebookUrl: 'https://www.facebook.com/datalandtechnology',
    category: 'technology',
    enabled: true,
  },
  {
    // Confirmed via web search: "Institute of Advanced Technologies - IAT", Yangon.
    id: 'iat',
    name: 'Institute of Advanced Technologies (IAT)',
    facebookPageId: 'iat.edu.mm',
    facebookUrl: 'https://www.facebook.com/iat.edu.mm/',
    category: 'class',
    enabled: true,
  },
  {
    // No vanity name given for this one — could not identify the page's
    // display name from a numeric ID alone (Facebook doesn't serve page
    // content to unauthenticated fetches). Update `name` once confirmed;
    // the numeric ID itself works fine as the Graph API identier.
    id: 'unidentified-61566561815552',
    name: 'HOME - Hub of Mandalay Empowerment',
    facebookPageId: '61566561815552',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61566561815552',
    category: 'other',
    enabled: true,
  },
  {
    // Confirmed via web search: "MYEO (@myeo.hub)".
    id: 'myeo',
    name: 'MYEO',
    facebookPageId: 'myeo.hub',
    facebookUrl: 'https://www.facebook.com/myeo.hub',
    category: 'career',
    enabled: true,
  },
  {
    // Confirmed via web search: "National Cyber City | Maymyo", affiliated
    // with the National Institute of Science and Technology - Myanmar.
    id: 'national-cyber-city',
    name: 'National Cyber City',
    facebookPageId: 'nationalcybercity',
    facebookUrl: 'https://www.facebook.com/nationalcybercity',
    category: 'class',
    enabled: true,
  },
]

export function getEnabledSources(): CommunitySource[] {
  return communitySources.filter((source) => source.enabled)
}
