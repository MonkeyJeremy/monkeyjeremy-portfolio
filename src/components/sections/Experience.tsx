'use client'

import { motion, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Timeline } from '@/components/ui/Timeline'
import { experienceItems } from '@/data/experience'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#111111]/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Where I've Worked"
            heading="Experience"
            description="From enterprise consumer goods to AI startups — building data solutions across industries."
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Timeline items={experienceItems} />
        </motion.div>
      </div>
    </section>
  )
}
