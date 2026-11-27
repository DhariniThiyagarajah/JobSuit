import { MoreHorizontal } from 'lucide-react'

export function Sidebar({
  activeScreen = 'dashboard',
  onNavigate,
  className = '',
}) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'my-cv', label: 'My CV', count: 1 },
    { id: 'job-opportunities', label: 'Job Opportunities', count: 3 },
    { id: 'compatibility-analysis', label: 'Compatibility Analysis' },
    { id: 'applications', label: 'Applications', count: 0 },
    { id: 'settings', label: 'Settings' },
  ]

  return (
    <aside
      className={`w-60 shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between min-h-screen ${className}`}
    >
      <div>
        {/* Branding */}
        <div className="px-5 py-5 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm tracking-tight shrink-0">
            JS
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-slate-900 leading-none">
              JobSuit
            </h1>
            <p className="text-[11px] text-slate-400 mt-1">
              Job Compatibility Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-3 py-3">
          <p className="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
            Navigation
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors text-left ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.count !== undefined && (
                    <span
                      className={`text-[11px] ${
                        isActive ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-3 border-t border-slate-200">
        <div className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              JS
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-900 truncate">
                Candidate Profile
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                Standard Account
              </p>
            </div>
          </div>
          <button
            className="text-slate-400 hover:text-slate-600 p-1 rounded"
            aria-label="Profile options"
          >
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>
    </aside>
  )
}
