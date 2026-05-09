import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailView } from '@/components/sections/ProjectDetailView'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.detail) {
    notFound()
  }

  return <ProjectDetailView project={project} />
}
