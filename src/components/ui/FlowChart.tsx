'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { WorkflowStep } from '@/data/experience'

const EASE = [0.25, 0.1, 0.25, 1] as const

// ─── Step card ────────────────────────────────────────────────────────────────

function StepCard({ step, delay }: { step: WorkflowStep; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderColor: hovered ? 'rgba(34,211,238,0.45)' : '#2A2A2A',
        boxShadow: hovered ? '0 0 18px rgba(34,211,238,0.08)' : 'none',
      }}
      className="relative w-full md:w-52 flex-shrink-0 bg-[#111111] border rounded-xl p-4 transition-all duration-300 cursor-default"
    >
      {/* Step number */}
      <div className="flex items-center gap-2.5 mb-3">
        <motion.span
          animate={{
            scale: hovered ? [1, 1.15, 1] : 1,
            backgroundColor: hovered ? 'rgba(34,211,238,0.2)' : 'rgba(34,211,238,0.08)',
          }}
          transition={{ duration: hovered ? 0.4 : 0.2 }}
          className="w-6 h-6 rounded-full border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold flex items-center justify-center shrink-0"
        >
          {step.step}
        </motion.span>
        <h3 className="text-white font-semibold text-xs leading-tight">{step.title}</h3>
      </div>

      {/* Description */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0.65 }}
        transition={{ duration: 0.2 }}
        className="text-[#A1A1AA] text-xs mb-3 leading-relaxed"
      >
        {step.description}
      </motion.p>

      {/* Tool badges */}
      <div className="flex flex-wrap gap-1">
        {step.tools.map((tool, i) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: delay + 0.15 + i * 0.06, ease: EASE }}
            style={{
              backgroundColor: hovered ? 'rgba(34,211,238,0.15)' : 'rgba(34,211,238,0.07)',
              borderColor: hovered ? 'rgba(34,211,238,0.35)' : 'rgba(34,211,238,0.18)',
            }}
            className="text-[#22D3EE] text-xs border rounded-md px-1.5 py-0.5 transition-colors duration-200"
          >
            {tool}
          </motion.span>
        ))}
      </div>

      {/* Hover shimmer line at top */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/60 to-transparent rounded-full origin-left"
      />
    </motion.div>
  )
}

// ─── Arrow: rightward (desktop) ───────────────────────────────────────────────

function HorizontalArrow({ delay }: { delay: number }) {
  return (
    <div className="hidden md:flex items-center flex-shrink-0 mt-5 px-1">
      <svg width="44" height="16" viewBox="0 0 44 16" fill="none" overflow="visible">
        <motion.path
          d="M 0 8 L 34 8"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay, ease: EASE }}
        />
        <motion.path
          d="M 30 3 L 42 8 L 30 13"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: delay + 0.3 }}
        />
      </svg>
    </div>
  )
}

// ─── Arrow: downward (mobile) ─────────────────────────────────────────────────

function VerticalArrow({ delay }: { delay: number }) {
  return (
    <div className="flex md:hidden justify-center py-1">
      <svg width="16" height="36" viewBox="0 0 16 36" fill="none" overflow="visible">
        <motion.path
          d="M 8 0 L 8 24"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay, ease: EASE }}
        />
        <motion.path
          d="M 3 21 L 8 34 L 13 21"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: delay + 0.25 }}
        />
      </svg>
    </div>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────

export function FlowChart({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div>
      {/* Desktop: horizontal scroll row */}
      <div className="hidden md:flex items-start overflow-x-auto pb-3 gap-0">
        {steps.map((step, i) => (
          <div key={step.step} className="flex items-start flex-shrink-0">
            <StepCard step={step} delay={i * 0.12} />
            {i < steps.length - 1 && <HorizontalArrow delay={i * 0.12 + 0.28} />}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex md:hidden flex-col items-stretch gap-0">
        {steps.map((step, i) => (
          <div key={step.step} className="flex flex-col items-center">
            <StepCard step={step} delay={i * 0.12} />
            {i < steps.length - 1 && <VerticalArrow delay={i * 0.12 + 0.28} />}
          </div>
        ))}
      </div>
    </div>
  )
}
