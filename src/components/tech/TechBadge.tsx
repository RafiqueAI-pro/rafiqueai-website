interface TechBadgeProps {
  label: string;
  className?: string;
}

export default function TechBadge({ 
  label,
  className = ""
}: TechBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full bg-rafique-blue/10 text-rafique-blue border border-rafique-blue/20 ${className}`}>
      {label}
    </span>
  );
}
