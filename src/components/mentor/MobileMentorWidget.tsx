import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { ChatHeader } from './ChatHeader'
import { ChatBubble } from './ChatBubble'
import { ChatInput } from './ChatInput'
import { EmptyState } from './EmptyState'
import { TypingIndicator } from './TypingIndicator'
import { useLanguage } from '../../hooks/useLanguage'
import { useMentorChat } from '../../hooks/useMentorChat.ts'

/**
 * The mobile-only floating AI Mentor shortcut: a bubble that opens a compact
 * chat popup instead of navigating to /mentor. Mounted once in Layout.tsx so
 * the conversation survives closing/reopening the popup while browsing —
 * see useMentorChat, the exact same hook the full /mentor page uses, so
 * behavior (service, context, error handling) never diverges between them.
 */
export function MobileMentorWidget() {
  const { dict } = useLanguage()
  const location = useLocation()
  const { messages, input, setInput, attachment, setAttachment, sending, handleSend, handleRetry } = useMentorChat()
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending, open])

  // The full /mentor page is its own chat surface — no need for a redundant shortcut to itself there.
  if (location.pathname === '/mentor') return null

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.mentor.title}
        title={dict.mentor.title}
        className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-surface)] text-[var(--color-primary)] shadow-lg shadow-black/10 ring-1 ring-[var(--color-primary)]/15 backdrop-blur-xl transition-transform duration-150 ease-out active:scale-90 print:hidden md:hidden"
      >
        <Sparkles size={21} strokeWidth={1.9} />
      </button>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label={dict.careersPathway.closeCta}
        className="animate-[lann-fade-in_200ms_ease-out] motion-reduce:animate-none fixed inset-0 z-30 bg-black/25 print:hidden md:hidden"
      />
      <div className="animate-[lann-sheet-in_280ms_ease-out] motion-reduce:animate-none fixed inset-x-0 bottom-0 z-40 flex h-[85dvh] flex-col overflow-hidden rounded-t-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-surface)] pb-[env(safe-area-inset-bottom)] shadow-xl shadow-black/15 backdrop-blur-2xl print:hidden md:hidden">
        <ChatHeader onClose={() => setOpen(false)} />

        <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <EmptyState onPromptClick={handleSend} />
          ) : (
            messages.map((message) => <ChatBubble key={message.id} message={message} onRetry={() => handleRetry(message)} />)
          )}
          {sending && <TypingIndicator />}
        </div>

        <div className="shrink-0 border-t border-[var(--color-glass-border)] p-3">
          <ChatInput
            value={input}
            onChange={setInput}
            attachment={attachment}
            onAttachmentChange={setAttachment}
            onSend={() => handleSend()}
            disabled={sending}
          />
        </div>
      </div>
    </>
  )
}
