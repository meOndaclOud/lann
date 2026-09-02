/**
 * Learner-entered profile info, stored locally (see lib/profileStore.ts).
 * Everything here is optional-in-spirit (all strings default to '') since a
 * learner should never be blocked from using the rest of the app for not
 * having filled this in — the Portfolio/CV feature is additive.
 */
export interface LearnerProfile {
  fullName: string
  professionalRole: string
  location: string
  bio: string
  phone: string
  email: string
  /** Free-form tags the learner adds themselves, e.g. "AI", "Cloud". */
  interestedFields: string[]
  /** Only ever populated by the learner directly — never inferred or generated (see lib/cv.ts). */
  certifications: string[]
  /** A small resized JPEG data URL, or undefined if no photo was set. */
  avatarDataUrl?: string
}
