import { Sidebar } from './Sidebar'
import { HeaderBar } from './HeaderBar'

export function AppLayout({
  activeScreen = 'dashboard',
  onNavigate,
  breadcrumbCategory,
  breadcrumbPage,
  actionLabel,
  onActionClick,
  actionButton,
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Fixed Left Sidebar */}
      <Sidebar activeScreen={activeScreen} onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <HeaderBar
          breadcrumbCategory={breadcrumbCategory}
          breadcrumbPage={breadcrumbPage}
          actionLabel={actionLabel}
          onActionClick={onActionClick}
          actionButton={actionButton}
        />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
