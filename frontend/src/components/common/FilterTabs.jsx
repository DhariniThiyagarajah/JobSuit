export function FilterTabs({
  tabs = [],
  activeTab,
  onChange,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-black text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
