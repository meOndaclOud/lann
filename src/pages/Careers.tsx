import { PagePlaceholder } from './PagePlaceholder'
import { useLanguage } from '../hooks/useLanguage'

export function Careers() {
  const { dict } = useLanguage()
  return <PagePlaceholder title={dict.pages.careers.title} description={dict.pages.careers.description} />
}
