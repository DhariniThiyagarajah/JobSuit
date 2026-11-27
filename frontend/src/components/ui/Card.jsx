export function Card({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
