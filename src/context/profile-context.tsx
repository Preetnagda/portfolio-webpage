import { createContext, useContext } from 'react'
import type { Profile } from '../types/profile'

const ProfileContext = createContext<Profile | null>(null)

export const ProfileProvider = ProfileContext.Provider

export function useProfileData(): Profile {
  const profile = useContext(ProfileContext)
  if (!profile) throw new Error('useProfileData must be used within a ProfileProvider')
  return profile
}
