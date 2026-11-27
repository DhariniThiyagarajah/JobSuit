import { SearchInput } from '../components/common/SearchInput'
import { Button } from '../components/ui/Button'

export function HeaderBar({
  breadcrumbCategory = 'JobSuit Intelligence / Workspace',
  breadcrumbPage = 'Dashboard',
  actionLabel = 'Analyse Compatibility',
  onActionClick,
  actionButton,
  className = '',
}) {
  return (
    <header
      className={`h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 ${className}`}
    >
      {/* Breadcrumb */}
      <div>
        <p className="text-[11px] text-slate-400 leading-tight">
          {breadcrumbCategory}
        </p>
        <p className="text-sm font-semibold text-slate-900 leading-tight mt-0.5">
          {breadcrumbPage}
        </p>
      </div>

      {/* Search Input */}
      <div className="hidden sm:block">
        <SearchInput />
      </div>

      {/* Contextual Action */}
      <div>
        {actionButton ? (
          actionButton
        ) : actionLabel ? (
          <Button variant="primary" size="md" onClick={onActionClick}>
            {actionLabel}
          </Button>
        ) : null}
      </div>
    </header>
  )
}
