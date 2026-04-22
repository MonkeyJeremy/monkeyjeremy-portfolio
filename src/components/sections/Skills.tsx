'use client'

import { motion, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="What I Know"
            heading="Skills & Tools"
            description="A data-first toolkit spanning the full analytics stack — from raw ingestion to stakeholder-ready dashboards."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="h-full bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#22D3EE]/20 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} label={skill} color={cat.color} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
