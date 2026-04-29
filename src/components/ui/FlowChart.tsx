'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { WorkflowStep } from '@/data/experience'

const EASE = [0.25, 0.1, 0.25, 1] as const

// ─── Arrow between steps ──────────────────────────────────────────────────────

function StepArrow({ delay }: { delay: number }) {
  return (
    <div className="relative flex justify-start" style={{ paddingLeft: '13px', height: '36px' }}>
      <svg width="14" height="36" viewBox="0 0 14 36" fill="none" className="overflow-visible">
        <motion.path
          d="M 7 0 L 7 24"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay, ease: EASE }}
        />
        <motion.path
          d="M 3 20 L 7 33 L 11 20"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeOpacity="0.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: delay + 0.28 }}
        />
      </svg>
    </div>
  )
}

// ─── Single step row ──────────────────────────────────────────────────────────

function StepCard({ step, delay }: { step: WorkflowStep; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex items-start gap-4">
      {/* Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay, ease: EASE }}
        animate-scale={hovered ? 1.1 : 1}
        className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[#22D3EE] text-xs font-bold z-10 mt-3.5"
        style={{
          backgroundColor: hovered ? 'rgba(34,211,238,0.18)' : 'rgba(34,211,238,0.08)',
          border: `1px solid ${hovered ? 'rgba(34,211,238,0.55)' : 'rgba(34,211,238,0.28)'}`,
          boxShadow: hovered ? '0 0 10px rgba(34,211,238,0.2)' : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        {step.step}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: delay + 0.08, ease: EASE }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="flex-1 bg-[#111111] border rounded-xl p-5 cursor-default relative overflow-hidden"
        style={{
          borderColor: hovered ? 'rgba(34,211,238,0.38)' : '#2A2A2A',
          boxShadow: hovered ? '0 0 20px rgba(34,211,238,0.07)' : 'none',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        {/* Shimmer on top edge */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent origin-left"
        />

        <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>

        <motion.p
          animate={{ opacity: hovered ? 1 : 0.65 }}
          transition={{ duration: 0.2 }}
          className="text-[#A1A1AA] text-sm mb-3 leading-relaxed"
        >
          {step.description}
        </motion.p>

        <div className="flex flex-wrap gap-1.5">
          {step.tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.78 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: delay + 0.18 + i * 0.06, ease: EASE }}
              className="text-[#22D3EE] text-xs border rounded-md px-2 py-0.5 transition-colors duration-200"
              style={{
                backgroundColor: hovered ? 'rgba(34,211,238,0.15)' : 'rgba(34,211,238,0.07)',
                borderColor: hovered ? 'rgba(34,211,238,0.38)' : 'rgba(34,211,238,0.18)',
              }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────

export function FlowChart({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="relative overflow-x-hidden">
      {/* Animated vertical spine */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        style={{ originY: 0 }}
        className="absolute left-[13px] top-0 bottom-0 w-px bg-gradient-to-b from-[#22D3EE]/40 via-[#22D3EE]/15 to-transparent pointer-events-none"
      />

      <div>
        {steps.map((step, i) => (
          <div key={step.step}>
            <StepCard step={step} delay={i * 0.14} />
            {i < steps.length - 1 && (
              <StepArrow delay={i * 0.14 + 0.32} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
