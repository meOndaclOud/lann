import { storage, STORAGE_KEYS } from './storage.ts'
import type { LearnerProfile } from '../types/profile.ts'

/**
 * The header shows a small profile avatar and needs to update the moment
 * the learner saves their profile — but Header stays mounted across route
 * changes (it never remounts to pick up a fresh storage read the way a page
 * does). This event is how it hears about the change without introducing a
 * global state library.
 */
const PROFILE_UPDATED_EVENT = 'lann:profile-updated'

export const emptyProfile: LearnerProfile = {
  fullName: '',
  professionalRole: '',
  location: '',
  bio: '',
  phone: '',
  email: '',
  interestedFields: [],
  certifications: [],
  avatarDataUrl: undefined,
}

export function getProfile(): LearnerProfile {
  return { ...emptyProfile, ...storage.getItem<Partial<LearnerProfile>>(STORAGE_KEYS.profile, {}) }
}

export function saveProfile(profile: LearnerProfile): void {
  storage.setItem(STORAGE_KEYS.profile, profile)
  window.dispatchEvent(new Event(PROFILE_UPDATED_EVENT))
}

/** Returns an unsubscribe function — call it from a useEffect cleanup. */
export function subscribeToProfile(callback: () => void): () => void {
  window.addEventListener(PROFILE_UPDATED_EVENT, callback)
  return () => window.removeEventListener(PROFILE_UPDATED_EVENT, callback)
}
