import { PagePlaceholder } from './PagePlaceholder'
import { useLanguage } from '../hooks/useLanguage'

export function NotFound() {
  const { dict } = useLanguage()
  return <PagePlaceholder title={dict.pages.notFound.title} description={dict.pages.notFound.description} />
}
