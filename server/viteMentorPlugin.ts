import type { Plugin } from 'vite'
import { handleMentorRequest } from './mentorHandler.ts'

/**
 * Dev-only equivalent of api/mentor.ts: lets `npm run dev` serve
 * POST /api/mentor from the same Vite dev server, so the chat UI works
 * end-to-end locally without deploying anything. Production deployments
 * use api/mentor.ts instead — this plugin only registers with Vite's dev
 * server (configureServer), not the production build or `vite preview`.
 */
export function mentorApiPlugin(): Plugin {
  return {
    name: 'lann-mentor-api',
    configureServer(server) {
      server.middlewares.use('/api/mentor', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Method Not Allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString('utf8')
        })
        req.on('end', () => {
          void (async () => {
            let parsed: unknown
            try {
              parsed = body ? JSON.parse(body) : {}
            } catch {
              parsed = {}
            }

            const result = await handleMentorRequest(parsed)
            res.statusCode = result.httpStatus
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(result.body))
          })()
        })
      })
    },
  }
}
