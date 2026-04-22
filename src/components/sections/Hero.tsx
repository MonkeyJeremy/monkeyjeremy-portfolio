'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons'
import { Badge } from '@/components/ui/Badge'

const featuredSkills = [
  { label: 'Python', color: 'violet' as const },
  { label: 'SQL', color: 'emerald' as const },
  { label: 'Machine Learning', color: 'blue' as const },
  { label: 'Tableau', color: 'amber' as const },
  { label: 'AWS', color: 'rose' as const },
  { label: 'Data Analytics', color: 'cyan' as const },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs font-semibold tracking-widest uppercase text-[#22D3EE] mb-4"
        >
          Data Analyst · Data Scientist · U.S. Citizen
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">
            Jeremy Zhang
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          UCSD Data Science graduate building end-to-end analytics pipelines,
          ML models, and dashboards that turn raw data into real decisions.
          Currently a Data Analytics Intern at{' '}
          <span className="text-white font-medium">Sciencia AI</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[#22D3EE] text-black font-semibold text-sm hover:bg-[#22D3EE]/90 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="https://github.com/MonkeyJeremy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#2A2A2A] text-white font-semibold text-sm hover:border-[#22D3EE]/40 hover:bg-[#111111] transition-all duration-200 flex items-center gap-2"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeremy-zhang-66a46a186/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#2A2A2A] text-white font-semibold text-sm hover:border-[#22D3EE]/40 hover:bg-[#111111] transition-all duration-200 flex items-center gap-2"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:jeremiahzhang1999@gmail.com"
            className="px-6 py-3 rounded-lg border border-[#2A2A2A] text-white font-semibold text-sm hover:border-[#22D3EE]/40 hover:bg-[#111111] transition-all duration-200 flex items-center gap-2"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2"
        >
          {featuredSkills.map((skill) => (
            <motion.div key={skill.label} variants={badgeVariants}>
              <Badge label={skill.label} color={skill.color} size="md" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
