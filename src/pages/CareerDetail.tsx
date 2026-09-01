import { useParams } from 'react-router-dom'
import { PagePlaceholder } from './PagePlaceholder'
import { useLanguage } from '../hooks/useLanguage'

export function CareerDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { dict } = useLanguage()
  return (
    <PagePlaceholder
      title={dict.pages.careerDetail.title}
      description={dict.pages.careerDetail.description}
      meta={slug}
    />
  )
}
