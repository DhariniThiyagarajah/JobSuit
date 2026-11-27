import { Card } from './Card'

export function StatCard({
  label,
  value,
  note,
  badge,
  badgeVariant = 'secondary',
  className = '',
}) {
  return (
    <Card className={`p-5 ${className}`}>
      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
        {label}
      </p>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span className="truncate">{note}</span>
        {badge && (
          <span
            className={`shrink-0 ml-2 px-2 py-0.5 text-[10px] font-medium rounded ${
              badgeVariant === 'default'
                ? 'bg-black text-white'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {badge}
          </span>
        )}
      </div>
    </Card>
  )
}
