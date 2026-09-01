import { test, describe, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { getMentorReply } from './mentorProvider.ts'

const ORIGINAL_FETCH = globalThis.fetch
const ORIGINAL_KEY = process.env.GEMINI_API_KEY

function mockFetchOnce(impl: (url: string, init: RequestInit) => Promise<Response> | Response) {
  globalThis.fetch = ((url: string, init: RequestInit) => impl(url, init)) as typeof fetch
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })
}

beforeEach(() => {
  process.env.GEMINI_API_KEY = 'test-key-not-real'
})

afterEach(() => {
  globalThis.fetch = ORIGINAL_FETCH
  if (ORIGINAL_KEY === undefined) {
    delete process.env.GEMINI_API_KEY
  } else {
    process.env.GEMINI_API_KEY = ORIGINAL_KEY
  }
})

describe('getMentorReply', () => {
  test('returns unavailable when no API key is configured, without calling fetch', async () => {
    delete process.env.GEMINI_API_KEY
    let fetchCalled = false
    mockFetchOnce(() => {
      fetchCalled = true
      return jsonResponse(200, {})
    })

    const result = await getMentorReply('Hello', undefined)

    assert.deepEqual(result, { status: 'unavailable' })
    assert.equal(fetchCalled, false)
  })

  test('returns ok with the extracted text on a successful API response', async () => {
    mockFetchOnce((url, init) => {
      assert.match(url, /^https:\/\/generativelanguage\.googleapis\.com\/v1beta\/models\/.+:generateContent$/)
      assert.equal(init.method, 'POST')
      const headers = init.headers as Record<string, string>
      assert.equal(headers['x-goog-api-key'], 'test-key-not-real')
      return jsonResponse(200, {
        candidates: [{ content: { role: 'model', parts: [{ text: 'Hey! Great question about Docker.' }] } }],
      })
    })

    const result = await getMentorReply('Explain Docker simply.', { language: 'en' })

    assert.deepEqual(result, { status: 'ok', message: 'Hey! Great question about Docker.' })
  })

  test('sends the learner context and language in the system instruction', async () => {
    let capturedSystemPrompt = ''
    mockFetchOnce((_url, init) => {
      const body = JSON.parse(init.body as string) as { systemInstruction: { parts: { text: string }[] } }
      capturedSystemPrompt = body.systemInstruction.parts[0].text
      return jsonResponse(200, { candidates: [{ content: { parts: [{ text: 'ok' }] } }] })
    })

    await getMentorReply('Test', {
      language: 'my',
      career: { id: 'cloud-devops', name: 'Cloud / DevOps' },
      currentStage: 'Core Skills',
      progressPercent: 40,
      learnerDifficulties: 'staying consistent',
    })

    assert.match(capturedSystemPrompt, /Cloud \/ DevOps/)
    assert.match(capturedSystemPrompt, /Core Skills/)
    assert.match(capturedSystemPrompt, /40%/)
    assert.match(capturedSystemPrompt, /staying consistent/)
    assert.match(capturedSystemPrompt, /Respond in Burmese/)
  })

  test('sends the user message as the contents payload', async () => {
    let capturedMessage = ''
    mockFetchOnce((_url, init) => {
      const body = JSON.parse(init.body as string) as { contents: { role: string; parts: { text: string }[] }[] }
      capturedMessage = body.contents[0].parts[0].text
      assert.equal(body.contents[0].role, 'user')
      return jsonResponse(200, { candidates: [{ content: { parts: [{ text: 'ok' }] } }] })
    })

    await getMentorReply('What should I learn next?', undefined)

    assert.equal(capturedMessage, 'What should I learn next?')
  })

  test('returns unavailable when the API responds with a non-2xx status', async () => {
    mockFetchOnce(() => jsonResponse(401, { error: { message: 'API key not valid' } }))

    const result = await getMentorReply('Hello', undefined)

    assert.deepEqual(result, { status: 'unavailable' })
  })

  test('returns unavailable when the response has no usable text content', async () => {
    mockFetchOnce(() => jsonResponse(200, { candidates: [] }))

    const result = await getMentorReply('Hello', undefined)

    assert.deepEqual(result, { status: 'unavailable' })
  })

  test('returns unavailable when fetch itself throws (network error)', async () => {
    mockFetchOnce(() => {
      throw new Error('network down')
    })

    const result = await getMentorReply('Hello', undefined)

    assert.deepEqual(result, { status: 'unavailable' })
  })
})
