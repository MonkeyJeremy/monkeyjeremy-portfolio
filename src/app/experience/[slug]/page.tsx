import { notFound } from 'next/navigation'
import { experienceItems } from '@/data/experience'
import { ExperienceDetailView } from '@/components/sections/ExperienceDetailView'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return experienceItems
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }))
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params
  const item = experienceItems.find((e) => e.slug === slug)

  if (!item || !item.detail) {
    notFound()
  }

  return <ExperienceDetailView item={item} />
}
