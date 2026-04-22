import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 transition-all duration-300',
        'bg-[#111111] border-[#2A2A2A]',
        hover && 'hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
