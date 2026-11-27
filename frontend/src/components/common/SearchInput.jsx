import { Search } from 'lucide-react'

export function SearchInput({
  placeholder = 'Search jobs, CVs, skills or analyses...',
  className = '',
  ...props
}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search
        size={16}
        className="absolute left-3.5 text-slate-400 pointer-events-none"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full sm:w-80 md:w-96 pl-9 pr-12 py-1.5 text-xs text-slate-800 bg-white border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
        {...props}
      />
      <span className="absolute right-2.5 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded">
        ⌘K
      </span>
    </div>
  )
}
