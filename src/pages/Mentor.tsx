import { useEffect, useRef } from 'react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ChatHeader } from '../components/mentor/ChatHeader'
import { ChatBubble } from '../components/mentor/ChatBubble'
import { ChatInput } from '../components/mentor/ChatInput'
import { EmptyState } from '../components/mentor/EmptyState'
import { TypingIndicator } from '../components/mentor/TypingIndicator'
import { useLanguage } from '../hooks/useLanguage'
import { useMentorChat } from '../hooks/useMentorChat.ts'

export function Mentor() {
  const { dict } = useLanguage()
  const { messages, input, setInput, attachment, setAttachment, sending, handleSend, handleRetry } = useMentorChat()
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  return (
    <Container className="py-6 sm:py-14">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <p className="hidden text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] sm:block">
          {dict.mentor.eyebrow}
        </p>
        <h1 className="mt-2 hidden text-2xl font-semibold text-[var(--color-text)] sm:block sm:text-3xl">
          {dict.mentor.title}
        </h1>
        <p className="mt-2 hidden text-sm text-[var(--color-text-muted)] sm:block">{dict.mentor.subtitle}</p>

        <Card className="flex h-[calc(100dvh-12rem)] flex-col overflow-hidden !p-0 sm:mt-6 sm:h-[70vh] lg:h-[75vh]">
          <ChatHeader />

          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.length === 0 ? (
              <EmptyState onPromptClick={handleSend} />
            ) : (
              messages.map((message) => (
                <ChatBubble key={message.id} message={message} onRetry={() => handleRetry(message)} />
              ))
            )}
            {sending && <TypingIndicator />}
          </div>

          <div className="shrink-0 border-t border-[var(--color-border)] p-3">
            <ChatInput
              value={input}
              onChange={setInput}
              attachment={attachment}
              onAttachmentChange={setAttachment}
              onSend={() => handleSend()}
              disabled={sending}
            />
          </div>
        </Card>
      </div>
    </Container>
  )
}
