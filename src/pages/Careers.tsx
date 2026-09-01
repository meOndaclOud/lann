import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { CareerNode } from '../components/careers/CareerNode'
import { CareerOverview } from '../components/careers/CareerOverview'
import { PATHWAY_NODES, findPathwayCareerProfile } from '../components/careers/pathwayConfig.ts'
import { useLanguage } from '../hooks/useLanguage'

export function Careers() {
  const { dict } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const overviewRef = useRef<HTMLDivElement>(null)

  const selectedCareerId = searchParams.get('career')
  const selectedNode = PATHWAY_NODES.find((node) => node.careerId === selectedCareerId)
  const selectedProfile = selectedNode ? findPathwayCareerProfile(selectedNode.careerId) : undefined

  function handleSelect(careerId: string) {
    setSearchParams(careerId === selectedCareerId ? {} : { career: careerId }, { replace: false })
  }

  function handleClose() {
    setSearchParams({}, { replace: false })
  }

  useEffect(() => {
    if (!selectedProfile) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    overviewRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' })
  }, [selectedProfile])

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.careersPathway.eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
          {dict.careersPathway.title}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--color-text-muted)]">{dict.careersPathway.subtitle}</p>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl sm:mt-16">
        <div className="absolute inset-y-0 left-1/2 hidden w-1 -translate-x-1/2 rounded-full sm:block lann-pathway-track" aria-hidden="true" />
        <div
          className="absolute inset-y-0 left-1/2 hidden w-1 -translate-x-1/2 rounded-full sm:block lann-pathway-glow motion-reduce:hidden"
          aria-hidden="true"
        />
        <div className="absolute inset-y-0 left-1/2 block w-1 -translate-x-1/2 rounded-full sm:hidden lann-pathway-track" aria-hidden="true" />

        <ol className="relative flex flex-col gap-10 sm:gap-14">
          {PATHWAY_NODES.map((node, index) => {
            const align = index % 2 === 0 ? 'start' : 'end'
            return (
              <li key={node.careerId} className="flex justify-center sm:block">
                <div className={`w-full max-w-[220px] sm:max-w-none ${align === 'start' ? 'sm:mr-[52%]' : 'sm:ml-[52%]'}`}>
                  <CareerNode
                    title={node.title}
                    icon={node.icon}
                    step={index + 1}
                    align={align}
                    selected={node.careerId === selectedCareerId}
                    onSelect={() => handleSelect(node.careerId)}
                  />
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div ref={overviewRef}>
        {selectedNode && selectedProfile && (
          <CareerOverview title={selectedNode.title} profile={selectedProfile} onClose={handleClose} />
        )}
      </div>
    </Container>
  )
}
