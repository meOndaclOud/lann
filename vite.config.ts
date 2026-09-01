import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { mentorApiPlugin } from './server/viteMentorPlugin.ts'
import { communityApiPlugin } from './server/viteCommunityPlugin.ts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Vite only auto-exposes VITE_-prefixed vars to client code (import.meta.env).
  // The mentor API key must stay server-side only, so it's loaded here into
  // process.env instead — read by server/mentorProvider.ts, never bundled
  // into client JS since nothing in src/ references process.env.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), tailwindcss(), mentorApiPlugin(), communityApiPlugin()],
  }
})
