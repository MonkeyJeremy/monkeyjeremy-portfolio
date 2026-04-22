import { Badge, BadgeColor } from './Badge'

interface TimelineBadge {
  label: string
  color: BadgeColor
}

export interface TimelineItem {
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
  tags: TimelineBadge[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2A2A2A]" />
      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#22D3EE] -translate-x-[3.5px] ring-4 ring-[#0A0A0A]" />
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#22D3EE]/20 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.company}</h3>
                  <p className="text-[#A1A1AA] text-sm">{item.role}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#52525B] text-sm">{item.period}</p>
                  {item.location && (
                    <p className="text-[#52525B] text-xs">{item.location}</p>
                  )}
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-[#A1A1AA] text-sm flex gap-2">
                    <span className="text-[#22D3EE] mt-1 shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i} label={tag.label} color={tag.color} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
