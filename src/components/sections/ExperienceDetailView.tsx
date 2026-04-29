'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { TimelineItem } from '@/components/ui/Timeline'

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }
}

interface Props {
  item: TimelineItem
}

export function ExperienceDetailView({ item }: Props) {
  const detail = item.detail!

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Back link */}
        <motion.div {...fade(0)}>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-[#22D3EE] text-sm font-medium hover:text-[#22D3EE]/80 transition-colors mb-10"
          >
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div {...fade(0.1)} className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{item.company}</h1>
              <p className="text-[#A1A1AA] mt-1">{item.role}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[#52525B] text-sm">{item.period}</p>
              {item.location && <p className="text-[#52525B] text-xs">{item.location}</p>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <Badge key={i} label={tag.label} color={tag.color} />
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section {...fade(0.2)} className="mb-10">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <p className="text-[#A1A1AA] leading-relaxed">{detail.overview}</p>
          </div>
        </motion.section>

        {/* Workflow */}
        <motion.section {...fade(0.3)} className="mb-10">
          <SectionLabel>Workflow</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.workflow.map((step) => (
              <div
                key={step.step}
                className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#22D3EE]/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[#22D3EE] text-xs bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-md px-2 py-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fade(0.4)} className="mb-10">
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detail.techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#22D3EE]/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] shrink-0" />
                  <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-1">{tech.role}</p>
                <p className="text-[#52525B] text-xs italic">{tech.reason}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section {...fade(0.5)} className="mb-10">
          <SectionLabel>Key Achievements</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {detail.keyAchievements.map((a, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 text-center hover:border-[#22D3EE]/20 transition-colors"
              >
                <p className="text-[#22D3EE] text-2xl font-bold mb-2">{a.metric}</p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section {...fade(0.6)} className="mb-10">
          <SectionLabel>Challenges &amp; Solutions</SectionLabel>
          <div className="space-y-4">
            {detail.challenges.map((c, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#22D3EE]/20 transition-colors"
              >
                <div className="flex gap-3 mb-3">
                  <span className="text-rose-400 text-xs font-bold uppercase tracking-wider mt-0.5 shrink-0">Problem</span>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mt-0.5 shrink-0">Solution</span>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#22D3EE] text-xs font-bold uppercase tracking-widest">{children}</span>
      <div className="flex-1 h-px bg-[#2A2A2A]" />
    </div>
  )
}
