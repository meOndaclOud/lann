// Serverless function entry point for GET /api/community (Vercel's
// convention: any file under /api becomes a route). Deliberately typed
// against plain Node http primitives rather than a platform SDK — see
// api/mentor.ts for the same rationale.
//
// This is the production/deployed path; the dev-time equivalent is the
// Vite middleware registered in vite.config.ts. Both call the same
// handleCommunityRequest.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { handleCommunityRequest } from '../server/communityHandler.ts'

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
    return
  }

  const url = new URL(req.url ?? '', 'http://localhost')
  const query = { language: url.searchParams.get('language') }

  const result = await handleCommunityRequest(query)
  res.statusCode = result.httpStatus
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(result.body))
}
