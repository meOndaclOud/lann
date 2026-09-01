import type { Plugin } from 'vite'
import { handleCommunityRequest } from './communityHandler.ts'

/**
 * Dev-only equivalent of api/community.ts: lets `npm run dev` serve
 * GET /api/community from the same Vite dev server. Production deployments
 * use api/community.ts instead — this plugin only registers with Vite's dev
 * server (configureServer), not the production build or `vite preview`.
 */
export function communityApiPlugin(): Plugin {
  return {
    name: 'lann-community-api',
    configureServer(server) {
      server.middlewares.use('/api/community', (req, res) => {
        if (req.method !== 'GET') {
          res.statusCode = 405
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Method Not Allowed' }))
          return
        }

        void (async () => {
          const url = new URL(req.url ?? '', 'http://localhost')
          const query = { language: url.searchParams.get('language') }

          const result = await handleCommunityRequest(query)
          res.statusCode = result.httpStatus
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(result.body))
        })()
      })
    },
  }
}
