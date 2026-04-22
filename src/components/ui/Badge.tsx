import { cn } from '@/lib/utils'

export type BadgeColor = 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'blue' | 'orange'

interface BadgeProps {
  label: string
  color: BadgeColor
  size?: 'sm' | 'md'
  className?: string
}

const colorMap: Record<BadgeColor, string> = {
  cyan:    'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/20',
  violet:  'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
  emerald: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
  amber:   'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
  rose:    'bg-[#F43F5E]/10 text-[#F43F5E] border-[#F43F5E]/20',
  blue:    'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
  orange:  'bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20',
}

export function Badge({ label, color, size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        colorMap[color],
        className
      )}
    >
      {label}
    </span>
  )
}
