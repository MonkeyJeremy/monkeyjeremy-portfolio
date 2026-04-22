'use client'

import { motion, type Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/Icons'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/data/projects'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="What I've Built"
            heading="Projects"
            description="Applied ML and data science projects tackling real-world classification and recommendation challenges."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 group">
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-white font-semibold text-base leading-snug flex-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#52525B] hover:text-white transition-colors duration-200"
                          aria-label="GitHub"
                        >
                          <GitHubIcon size={16} />
                        </a>
                      )}
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#52525B] hover:text-white transition-colors duration-200"
                          aria-label="Website"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#52525B] text-xs mb-3">{project.period}</p>
                  <p className="text-[#A1A1AA] text-sm mb-4">{project.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-[#A1A1AA] text-sm flex gap-2">
                        <span style={{ color: project.accentColor }} className="mt-1 shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} label={tag.label} color={tag.color} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
