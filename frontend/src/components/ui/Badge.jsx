export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variants = {
    default: 'bg-black text-white border-transparent',
    secondary: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-transparent text-slate-700 border-slate-300',
    subtle: 'bg-slate-100 text-slate-600 border-transparent',
    score: 'bg-black text-white font-semibold',
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
