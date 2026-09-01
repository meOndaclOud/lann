// Serverless function entry point for POST /api/mentor (Vercel's convention:
// any file under /api becomes a route). Deliberately typed against plain
// Node http primitives rather than a platform SDK, since most Node
// serverless runtimes (Vercel, and others with an adapter) hand the request
// through compatibly — no extra dependency needed for this to work.
//
// This is the production/deployed path; the dev-time equivalent is the
// Vite middleware in vite.config.ts. Both call the same handleMentorRequest.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { handleMentorRequest } from '../server/mentorHandler.ts'

async function readBody(req: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(chunk as Buffer)
  }
  return Buffer.concat(chunks).toString('utf8')
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
    return
  }

  let parsed: unknown
  try {
    const raw = await readBody(req)
    parsed = raw ? JSON.parse(raw) : {}
  } catch {
    parsed = {}
  }

  const result = await handleMentorRequest(parsed)
  res.statusCode = result.httpStatus
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(result.body))
}
