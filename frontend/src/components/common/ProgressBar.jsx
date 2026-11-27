export function ProgressBar({
  progress = 0,
  className = '',
  trackClassName = '',
  barClassName = '',
}) {
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <div
      className={`h-2 w-full bg-slate-100 rounded-full overflow-hidden ${trackClassName} ${className}`}
    >
      <div
        className={`h-full bg-black rounded-full transition-all duration-300 ${barClassName}`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  )
}
