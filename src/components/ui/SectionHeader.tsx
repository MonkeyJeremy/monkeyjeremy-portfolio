interface SectionHeaderProps {
  eyebrow: string
  heading: string
  description?: string
}

export function SectionHeader({ eyebrow, heading, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#22D3EE] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
      {description && (
        <p className="text-[#A1A1AA] text-lg max-w-2xl">{description}</p>
      )}
    </div>
  )
}
