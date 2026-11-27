export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary: 'bg-black text-white hover:bg-slate-800 rounded-lg shadow-xs',
    secondary: 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 rounded-lg',
    outline: 'bg-transparent text-slate-800 border border-slate-200 hover:bg-slate-50 rounded-lg',
    ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg',
    link: 'text-slate-900 hover:underline p-0 h-auto font-semibold',
    dark: 'bg-slate-900 text-white hover:bg-black rounded-lg',
  }

  const sizes = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-sm px-3.5 py-2 gap-2',
    lg: 'text-sm px-4 py-2.5 gap-2',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${variant !== 'link' ? sizes[size] || sizes.md : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
